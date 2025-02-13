import { parse as parseHtml, NodeType, Node, HTMLElement } from 'node-html-parser';
import * as csstree from 'css-tree';

/**
 * Represents an instance of processed CSS
 */
export interface CriticalCssExtractor {
  /**
   * Generate the critical CSS required to display a chunk of HTML.
   * @param html The target HTML you want to generate critical CSS for.
   * @param preservedSelectors Information about elements whose CSS will be preserved even though they do not appear in the HTML.
   * @param assetsHost If specified, external resources without a host will be rewritten to use this host (eg. if assetsHost is "somehost.com", then "url(/image.png)" will be rewritten to "url(//somehost.com/image.png)")
   * @returns The critical CSS required for the specified HTML.
   */
  extractFrom(html: string, preservedSelectors?: PreservedSelectors, assetsHost?: string): string;
}

export interface PreservedSelectors {
  /**
   * A list of CSS classes (without leading .) that should be considered used even if they do not appear in the HTML.
   * These classes are case sensitive.
   */
  classes?: string[];
  /**
   * A list of IDs (without leading #) that should be considered used even if they do not appear in the HTML.
   * These IDs are case sensitive.
   */
  ids?: string[];

  /**
   * A list of tag names that should be considered used even if they do not appear in the HTML.
   * These tag names are case insensitive.
   */
  tags?: string[];
};

type CssUrlPart = CssAssetsHostValue | string;
type CssContent = string | CssUrlPart[];

type CssRule = {
  type: 'rule';
  text: CssContent;
  selectorDependencies?: Array<{ ids: string[] | null; classes: string[] | null; tags: string[] | null }>;
};

type CssMediaRule = {
  type: 'media';
  prelude: CssContent;
  childRules: ProcessedCssNode[];
};

type CssAssetsHostValue = {
  type: 'assetshost';
};

type ProcessedCssNode = string | CssMediaRule | CssRule;

function isHtmlElement(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}

function extractHtmlSelectors(renderedHtml: string, globalUsage: PreservedSelectors) {
  const root = parseHtml(renderedHtml);
  const classes = new Set<string>(globalUsage.classes || []);
  const ids = new Set<string>(globalUsage.ids || []);
  const tags = new Set<string>(globalUsage.tags ? globalUsage.tags.map(t => t.toLowerCase()) : []);

  function traverseNode(node: Node) {
    if (!isHtmlElement(node)) return;

    const { class: classNames, id } = node.attributes;
    if (classNames) classNames.split(' ').forEach(cls => classes.add(cls));
    if (id) ids.add(id);
    if (node.tagName) tags.add(node.tagName.toLowerCase());

    node.childNodes.forEach(traverseNode);
  }

  traverseNode(root);
  return { ids, classes, tags };
}

function extractCriticalCss(parsedCss: ProcessedCssNode[], html: string, globalUsage?: PreservedSelectors, assetsHost?: string) {
  const { classes, ids, tags } = extractHtmlSelectors(html, globalUsage || {});

  function isRuleUsed(rule: CssRule) {
    return !rule.selectorDependencies || rule.selectorDependencies.some(
      set =>
        (!set.classes || set.classes.every(c => classes.has(c))) &&
        (!set.ids || set.ids.every(i => ids.has(i))) &&
        (!set.tags || set.tags.every(t => tags.has(t))),
    );
  }

  function resolveCssContent(content: CssContent) {
    if (typeof content === 'string') return content;

    const result: string[] = [];
    for (const part of content) {
      if (typeof part === 'string') {
        result.push(part);
      } else if ('type' in part && part.type === 'assetshost') {
        result.push(assetsHost ? '//' + assetsHost : '');
      }
    }
    return result.join('');
  }

  function processCssNodes(nodes: ProcessedCssNode[]) {
    const result: string[] = [];
    for (const c of nodes) {
      if (typeof c === 'string') {
        result.push(c);
      } else if (c.type === 'media') {
        const innerResult = processCssNodes(c.childRules);
        if (innerResult) {
          result.push(resolveCssContent(c.prelude) + '{' + innerResult + '}');
        }
      } else if (isRuleUsed(c)) {
        result.push(resolveCssContent(c.text));
      }
    }
    return result.join('');
  }

  return processCssNodes(parsedCss);
}

function extractSelectorDependencies(selector: csstree.CssNode) {
  if (selector.type !== 'Selector') {
    throw new Error(`Unexpected type ${selector.type}, expected 'Selector'`);
  }

  let ids: string[] | null = null;
  let classes: string[] | null = null;
  let tags: string[] | null = null;

  selector.children.forEach((child: csstree.CssNode) => {
    switch (child.type) {
      case 'ClassSelector':
        classes = classes || [];
        if (classes.indexOf(child.name) < 0) {
          classes.push(child.name);
        }
        break;

      case 'IdSelector':
        ids = ids || [];
        if (ids.indexOf(child.name) < 0) {
          ids.push(child.name);
        }
        break;

      case 'TypeSelector':
        if (child.name !== '*') {
          tags = tags || [];
          const tag = child.name.toLowerCase();
          if (tags.indexOf(tag) < 0) {
            tags.push(tag);
          }
        }
        break;
    }
  });

  return { classes, ids, tags };
}

function processCssRule(node: csstree.CssNode): CssRule {
  if (node.type !== 'Rule') {
    throw new Error(`Unexpected type ${node.type}, expected 'Rule'`);
  }

  const parts: CssUrlPart[] = [csstree.generate(node.prelude) + '{'];

  let firstDeclaration = true;
  node.block.children.forEach(c => {
    if (c.type !== 'Declaration') {
      throw new Error(`Unexpected type ${c.type}, expected 'Declaration'`);
    }

    if (!firstDeclaration) {
      parts.push(';');
    }
    processDeclaration(parts, c);
    firstDeclaration = false;
  });

  parts.push('}');

  return {
    type: 'rule',
    text: mergeCssParts(parts),
    selectorDependencies:
      node.prelude.type === 'SelectorList' ? node.prelude.children.map(extractSelectorDependencies).toArray() : [],
  };
}

function mergeCssParts(parts: CssUrlPart[]): CssContent {
  if (!parts.length) return '';

  const result: CssUrlPart[] = [parts[0]];
  for (let i = 1; i < parts.length; i++) {
    const p = parts[i];
    if (typeof result[result.length - 1] === 'string' && typeof p === 'string') {
      result[result.length - 1] = result[result.length - 1] + p;
    } else {
      result.push(p);
    }
  }

  return result.length === 1 && typeof result[0] === 'string' ? result[0] as string : result;
}

function processDeclaration(parts: CssUrlPart[], decl: csstree.Declaration) {
  if (decl.value.type === 'Value' || decl.value.type === 'Raw') {
    parts.push(decl.property + ':');

    if (decl.value.type === 'Raw') {
      parts.push(decl.value.value);
    }
    if (decl.value.type === 'Value') {
      decl.value.children.forEach(v => {
        if (v.type === 'Url') {
          processUrlValue(parts, v.value);
        } else {
          parts.push(csstree.generate(v));
        }
      });
    }

    if (decl.important) {
      parts.push(' !important');
    }
  } else {
    parts.push(csstree.generate(decl.value));
  }
}

function processUrlValue(parts: CssUrlPart[], node: csstree.CssNode) {
  if (node.type === 'Raw' || node.type === 'String') {
    parts.push('url(');
    processUrlString(parts, node.value);
    parts.push(')');
  } else {
    parts.push(csstree.generate(node));
  }
}

function processUrlString(parts: CssUrlPart[], value: string) {
  const quote = value.length > 0 && (value[0] === '"' || value[0] === '\'') ? value[0] : '';
  const unquotedValue = quote ? value.substr(1, value.length - 2) : value;
  if (unquotedValue.startsWith('/') && !unquotedValue.startsWith('//')) {
    if (quote) {
      parts.push(quote);
    }
    parts.push({ type: 'assetshost' });
    parts.push(unquotedValue + quote);
  } else {
    parts.push(value);
  }
}

function processCssNode(node: csstree.CssNode): ProcessedCssNode | null {
  switch (node.type) {
    case 'Atrule':
      if (node.name === 'supports' || node.name === 'media') {
        return {
          type: 'media',
          prelude: '@' + node.name + (node.prelude ? ' ' + csstree.generate(node.prelude) : ''),
          childRules: deduplicateRules(
            node.block
              ? (node.block.children
                .map(processCssNode)
                .filter(c => !!c)
                .toArray() as ProcessedCssNode[])
              : []
          ),
        };
      } else if (node.name === 'import' && node.prelude && 'children' in node.prelude) {
        const parts: CssUrlPart[] = ['@import '];
        let isFirst = true;
        node.prelude.children.forEach(c => {
          if (isFirst && c.type === 'String') {
            processUrlString(parts, c.value);
          } else if (c.type === 'Url') {
            processUrlValue(parts, c.value);
          } else {
            parts.push(csstree.generate(c));
          }
          isFirst = false;
        });
        parts.push(';');
        return { type: 'rule', text: mergeCssParts(parts) };
      } else if (node.name === 'font-face' && node.block) {
        const parts: CssUrlPart[] = ['@font-face{'];
        let isFirst = true;
        node.block.children.forEach(c => {
          if (!isFirst) {
            parts.push(';');
          }
          if (c.type === 'Declaration') {
            processDeclaration(parts, c);
          } else {
            parts.push(csstree.generate(c));
          }
          isFirst = false;
        });
        parts.push('}');
        return { type: 'rule', text: mergeCssParts(parts) };
      } else {
        return csstree.generate(node);
      }

    case 'Rule':
      return processCssRule(node);

    case 'Raw':
    case 'Comment':
      return null;

    default:
      throw new Error(`Unexpected type ${node.type}, expected 'Atrule', 'Rule', 'Raw', 'Comment'`);
  }
}

function deduplicateRules(rules: ProcessedCssNode[]) {
  // Note that we preserve the last of all duplicated rules because this is the rule that will take precedence
  const seen = new Set<string>();
  const result: ProcessedCssNode[] = [];
  for (let i = rules.length - 1; i >= 0; i--) {
    const json = JSON.stringify(rules[i]);
    if (!seen.has(json)) {
      result.push(rules[i]);
      seen.add(json);
    }
  }

  result.reverse();
  return result;
}

/**
 * Process CSS content to enable extraction of critical CSS
 */
export function createCriticalCssExtractor(css: string): CriticalCssExtractor {
  const ast = csstree.parse(css);

  if (ast.type !== 'StyleSheet') {
    throw new Error(`Unexpected type ${ast.type}, expected 'StyleSheet'`);
  }

  const processedNodes: ProcessedCssNode[] = [];
  ast.children.forEach(child => {
    const processed = processCssNode(child);
    if (processed) {
      processedNodes.push(processed);
    }
  });

  const deduplicatedCss = deduplicateRules(processedNodes);

  return {
    extractFrom(html, globalUsage, assetsHost) {
      return extractCriticalCss(deduplicatedCss, html, globalUsage, assetsHost);
    }
  };
}
