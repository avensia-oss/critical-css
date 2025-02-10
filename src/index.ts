import { parse as parseHtml, NodeType, Node, HTMLElement } from 'node-html-parser';
import type * as csstree from 'css-tree';
import { string, generate as csstreeGenerate, parse as csstreeParse } from 'css-tree';


const GEN_MODE: 'safe' | 'spec' = 'safe';

/**
 * Represents an instance of parsed CSS
 */
export interface ParsedCss {
  /**
   * Generate the critical CSS required to display a chunk of HTML.
   * @param html The HTML you want to inspect.
   * @param parseResult The value returned from a previous call to parse().
   * @param globalUsage Information about elements whose CSS will be returned even though they do not appear in the HTML.
   * @param assetsHost If specified, external resources without a host will be rewritten to use this host (eg. if assetsHost is "somehost.com", then "url(/image.png)" will be rewritten to "url(//somehost.com/image.png)")
   * @returns The critical CSS required for the specified HTML.
   */
  generate(html: string, globalUsage?: GlobalUsageType, assetsHost?: string): string;
}

export interface GlobalUsageType {
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

type CssValueItem = CssAssetsHostValue | string;
type CssValue = string | CssValueItem[];

type CssRule = {
  type: 'rule';
  text: CssValue;
  dependencySets?: Array<{ ids: string[] | null; classes: string[] | null; tags: string[] | null }>;
};

type CssMediaRule = {
  type: 'media';
  prelude: CssValue;
  rules: ParsedCssElement[];
};

type CssAssetsHostValue = {
  type: 'assetshost';
};

type ParsedCssElement = string | CssMediaRule | CssRule;

function isElement(node: Node): node is HTMLElement {
  return node.nodeType === NodeType.ELEMENT_NODE;
}

function getDomContent(renderedHtml: string, globalUsage: GlobalUsageType) {
  const root = parseHtml(renderedHtml);
  const classes = new Set<string>(globalUsage.classes || []);
  const ids = new Set<string>(globalUsage.ids || []);
  const tags = new Set<string>(globalUsage.tags ? globalUsage.tags.map(t => t.toLowerCase()) : []);

  function visit(node: Node) {
    if (!isElement(node)) {
      return;
    }

    const attributes = node.attributes;
    const c: string = attributes.class;
    if (c) {
      c.split(' ').forEach(cls => classes.add(cls));
    }
    const id = attributes.id;
    if (id) {
      ids.add(id);
    }
    if (node.tagName) {
      tags.add(node.tagName.toLowerCase());
    }
    for (const child of node.childNodes) {
      visit(child);
    }
  }

  visit(root);

  return {
    ids,
    classes,
    tags,
  };
}

function generate(parsedCss: ParsedCssElement[], html: string, globalUsage?: GlobalUsageType, assetsHost?: string) {
  const { classes, ids, tags } = getDomContent(html, globalUsage || {});

  function shouldInclude(rule: CssRule) {
    return !rule.dependencySets || rule.dependencySets.some(
      set =>
        (!set.classes || set.classes.every(c => classes.has(c))) &&
        (!set.ids || set.ids.every(c => ids.has(c))) &&
        (!set.tags || set.tags.every(c => tags.has(c))),
    );
  }

  function generateValue(value: CssValue) {
    if (typeof value === 'string') {
      return value;
    } else {
      let result = '';
      for (const v of value) {
        // console.log('Asset time! ', { v, result })
        if (typeof v === 'string') {
          result += v;
          // console.log('Case 1, string!', { v, result })
        } else if ('type' in v && v.type === 'assetshost') {
          result += (assetsHost ? '//' + assetsHost : '');
          // console.log('Case 2, string!', { v, result })
        }
      }
      // console.log('final', { result })
      return result;
    }
  }

  function innerGenerate(nodes: ParsedCssElement[]) {
    let result = '';
    nodes.forEach(c => {
      if (typeof c === 'string') {
        result += c;
      } else if (c.type === 'media') {
        const innerResult = innerGenerate(c.rules);
        if (innerResult) {
          result += generateValue(c.prelude) + '{' + innerResult + '}';
        }
      } else {
        if (shouldInclude(c)) {
          result += generateValue(c.text);
        }
      }
    });

    // console.log('Result', { result })
    return result;
  }

  return innerGenerate(parsedCss);
}


function generateDependencySet(node: csstree.CssNode) {
  if (node.type !== 'Selector') {
    throw new Error(`Unexpected type ${node.type}, expected 'Selector'`);
  }

  let ids: string[] | null = null;
  let classes: string[] | null = null;
  let tags: string[] | null = null;

  node.children.forEach((child: csstree.CssNode) => {
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

function mapRule(node: csstree.CssNode): CssRule {
  if (node.type !== 'Rule') {
    throw new Error(`Unexpected type ${node.type}, expected 'Rule'`);
  }

  const items = [csstreeGenerate(node.prelude, { mode: GEN_MODE }) + '{'];
  let firstDeclaration = true;
  node.block.children.forEach(c => {
    //TODO: Seems like @position-try and @starting-style ends up in here
    if (c.type !== 'Declaration') {
      throw new Error(`Unexpected type ${c.type}, expected 'Declaration'`);
    }

    if (!firstDeclaration) {
      items.push(';');
    }
    pushDeclaration(items, c);
    firstDeclaration = false;
  });

  items.push('}');

  return {
    type: 'rule',
    text: consolidateItemsToString(items),
    dependencySets:
      node.prelude.type === 'SelectorList'
        ? Array.from(node.prelude.children).map(generateDependencySet)
        : [],
    // ? node.prelude.children.map(generateDependencySet).toArray()
  };
}

function consolidateItemsToString(parts: CssValueItem[]): CssValue {
  if (!parts.length) {
    return '';
  }

  const result = [parts[0]];
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

function pushDeclaration(items: CssValueItem[], decl: csstree.Declaration) {
  // NOTE: decl.property is the name of the CSS property
  console.log('decl value type', decl.value.type)


  if (decl.value.type === 'Value') {
    items.push(decl.property + ':');
    // console.log('Declaration children:', decl.value.children.map(child => ({
    //   type: child.type,
    //   ...(child.type === 'Identifier' ? { name: child.name } : {}),
    //   ...(child.type === 'Number' ? { value: child.value } : {})
    // })));
    let isFirst = true;
    decl.value.children.forEach(v => {
      if (!isFirst) {
        items.push(' '); // Add space between items
      }
      if (v.type === 'String') {
        // encode string values, needed for some things after 2.x
        items.push(string.encode(v.value));
      } else if (v.type === 'Url') {
        pushUrlValue(items, v)
      } else if (v.type === 'Function' && v.name === 'format') {
        // ensure format() functions are prepended with a space
        items.push(csstreeGenerate(v, { mode: GEN_MODE }));
      } else {
        items.push(csstreeGenerate(v, { mode: GEN_MODE }));
      }
      isFirst = false;
    });
    if (decl.important) {
      items.push(' !important');
    }
  } else if (decl.value.type === 'Raw') {
    items.push(decl.property + ':', decl.value.value);
    if (decl.important) {
      items.push(' !important');
    }
  } else {
    items.push(csstreeGenerate(decl.value, { mode: GEN_MODE }));
    throw new Error('This should NEVER happen.')
  }
}

function pushUrlValue(items: CssValueItem[], node: csstree.CssNode) {
  if (node.type === 'Url') {
    items.push('url(');
    pushUrlString(items, node.value);
    items.push(')');
  } else {
    items.push(csstreeGenerate(node, { mode: GEN_MODE }));
  }
}


// function pushUrlValue(items: CssValueItem[], node: csstree.CssNode) {
//   if (node.type === 'Raw' || node.type === 'String') {
//     items.push('url(');
//     pushUrlString(items, node.value);
//     items.push(')');
//   } else {
//     items.push(csstreeGenerate(node, { mode: GEN_MODE }));
//   }
// }

// function pushUrlString(items: CssValueItem[], value: string) {
//   console.log('urlString handling: ', { value })
//   const quote = value.length > 0 && (value[0] === '"' || value[0] === '\'') ? value[0] : '';
//   const unquotedValue = quote ? value.substring(1, value.length - 1) : value;
//   // const unquotedValue = quote ? value.substr(1, value.length - 2) : value;
//   const entry: CssValueItem[] = []
//
//   if (unquotedValue.startsWith('/') && !unquotedValue.startsWith('//')) {
//     if (quote) {
//       entry.push(quote);
//       // items.push(quote);
//     }
//     entry.push({ type: 'assetshost' });
//     // items.push({ type: 'assetshost' });
//
//     // items.push(unquotedValue + quote);
//     // items.push(unquotedValue);
//     entry.push(unquotedValue);
//
//     if (quote) {
//       // items.push(quote);
//       entry.push(quote);
//     }
//   } else {
//     entry.push(value);
//     // items.push(value);
//   }
//   items.push(...entry);
// }


function pushUrlString(items: CssValueItem[], value: string) {
  const entry: CssValueItem[] = []
  if (value.startsWith('/') && !value.startsWith('//')) {
    entry.push({ type: 'assetshost' }, value);
  } else {
    entry.push(value);
  }

  // the "String" type stores a decoded string value,
  // meaning if it had quotes, they were removed
  items.push('"', ...entry, '"');
}

function mapChild(node: csstree.CssNode): ParsedCssElement | null {
  // console.log({ nt: node.type })
  console.log("node", node)

  switch (node.type) {
    case 'Atrule':
      if (node.name === 'supports' || node.name === 'media') {
        return {
          type: 'media',
          prelude: '@' + node.name + (node.prelude ? ' ' + csstreeGenerate(node.prelude, { mode: "safe" }) : ''),
          rules: removeDuplicates(
            node.block
              ? (node.block.children
                .map(mapChild)
                .filter(c => !!c)
                .toArray() as ParsedCssElement[])
              : []
          ),
        };
      } else if (node.name === 'import' && node.prelude && 'children' in node.prelude) {
        // handle @import nodes with children
        const items: CssValueItem[] = ['@import '];
        let isFirst = true;
        node.prelude.children.forEach((c) => {
          if (isFirst && c.type === 'String') {
            pushUrlString(items, c.value);
          } else if (c.type === 'Url') {
            pushUrlValue(items, c);
          } else {
            const unknown = csstreeGenerate(c, { mode: GEN_MODE, })
            items.push(
              // ensure space between media query list and url
              " ",
              unknown
            );
          }
          isFirst = false;
        });
        items.push(';');
        return { type: 'rule', text: consolidateItemsToString(items) };
      } else if (node.name === 'font-face' && node.block) {
        // handle font face
        const items: CssValueItem[] = ['@font-face{'];
        let first = true;
        node.block.children.forEach(c => {
          if (!first) {
            items.push(';');
          }
          if (c.type === 'Declaration') {
            pushDeclaration(items, c);
          } else {
            items.push(csstreeGenerate(c, { mode: GEN_MODE }));
          }
          first = false;
        });
        items.push('}');
        return { type: 'rule', text: consolidateItemsToString(items) };
      } else if (node.name === 'counter-style' && node.prelude && 'children' in node.prelude && node.block) {
        // handle @counter-style nodes with children
        const items: CssValueItem[] = ['@counter-style'];
        let isFirst = true;
        // // TODO: Found this, maybe replace the map?
        const wat = [csstreeGenerate(node.prelude, { mode: GEN_MODE }) + '{'];

        console.log({ wat })
        node.prelude.children.forEach((c) => {
          // if (isFirst && c.type === 'Identifier') {
          //   items.push(c.name);
          // } else 
          if (c.type === 'String') {
            items.push(c.value);
            // items.push(reEscapeUnicode(c.value)); // Apply Unicode escaping
          } else {
            const unknown = csstreeGenerate(c, { mode: GEN_MODE, })
            items.push(
              // ensure space between media query list and url
              " ",
              unknown
            );
          }
          isFirst = false;
        });
        items.push('{');
        let first = true;
        node.block.children.forEach(c => {
          if (!first) {
            items.push(';');
          }
          if (c.type === 'Declaration') {
            pushDeclaration(items, c);
          } else {
            items.push(csstreeGenerate(c, { mode: GEN_MODE }));
          }
          first = false;
        });
        items.push('}');
        return { type: 'rule', text: consolidateItemsToString(items) };
      } else {
        return csstreeGenerate(node, { mode: GEN_MODE });
      }

    case 'Rule':
      return mapRule(node);
    case 'Raw':
    case 'Comment':
      return null;

    default:
      throw new Error(`Unexpected type ${node.type}, expected 'Atrule', 'Rule', 'Raw', 'Comment'`);
  }
}

function removeDuplicates(rules: ParsedCssElement[]) {
  // Note that we preserve the last of all duplicated rules because this is the rule that will take precedence
  const found = new Set<string>();
  const result = []
  for (let i = rules.length - 1; i >= 0; i--) {
    const json = JSON.stringify(rules[i]);
    if (!found.has(json)) {
      result.push(rules[i]);
      found.add(json);
    }
  }

  result.reverse();

  return result;
}

/**
 * Parse CSS
 * @param css The CSS to parse
 * @returns A result object that can be passed to generate()
 */
export function parse(css: string): ParsedCss {
  // is included in css
  let ast = csstreeParse(css);

  if (ast.type !== 'StyleSheet') {
    throw new Error(`Unexpected type ${ast.type}, expected 'StyleSheet'`);
  }

  const parsedCss: ParsedCssElement[] = [];
  ast.children.forEach(child => {
    const mapped = mapChild(child);
    if (mapped) {
      parsedCss.push(mapped);
    }
  });

  const deduplicatedCss = removeDuplicates(parsedCss);

  return {
    generate(html, globalUsage, assetsHost) {
      return generate(deduplicatedCss, html, globalUsage, assetsHost);
    }
  };
}
