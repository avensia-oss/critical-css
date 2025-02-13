"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var node_html_parser_1 = require("node-html-parser");
// import { string, generate as csstreeGenerate, parse as csstreeParse } from 'css-tree/cjs';
var _a = require('css-tree'), string = _a.string, csstreeGenerate = _a.generate, csstreeParse = _a.parse;
var GEN_MODE = 'safe';
;
function isElement(node) {
    return node.nodeType === node_html_parser_1.NodeType.ELEMENT_NODE;
}
function getDomContent(renderedHtml, globalUsage) {
    var root = (0, node_html_parser_1.parse)(renderedHtml);
    var classes = new Set(globalUsage.classes || []);
    var ids = new Set(globalUsage.ids || []);
    var tags = new Set(globalUsage.tags ? globalUsage.tags.map(function (t) { return t.toLowerCase(); }) : []);
    function visit(node) {
        if (!isElement(node)) {
            return;
        }
        var attributes = node.attributes;
        var c = attributes.class;
        if (c) {
            c.split(' ').forEach(function (cls) { return classes.add(cls); });
        }
        var id = attributes.id;
        if (id) {
            ids.add(id);
        }
        if (node.tagName) {
            tags.add(node.tagName.toLowerCase());
        }
        for (var _i = 0, _a = node.childNodes; _i < _a.length; _i++) {
            var child = _a[_i];
            visit(child);
        }
    }
    visit(root);
    return {
        ids: ids,
        classes: classes,
        tags: tags,
    };
}
function generate(parsedCss, html, globalUsage, assetsHost) {
    var _a = getDomContent(html, globalUsage || {}), classes = _a.classes, ids = _a.ids, tags = _a.tags;
    function shouldInclude(rule) {
        return !rule.dependencySets || rule.dependencySets.some(function (set) {
            return (!set.classes || set.classes.every(function (c) { return classes.has(c); })) &&
                (!set.ids || set.ids.every(function (c) { return ids.has(c); })) &&
                (!set.tags || set.tags.every(function (c) { return tags.has(c); }));
        });
    }
    function generateValue(value) {
        if (typeof value === 'string') {
            return value;
        }
        else {
            var result = '';
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var v = value_1[_i];
                // console.log('Asset time! ', { v, result })
                if (typeof v === 'string') {
                    result += v;
                    // console.log('Case 1, string!', { v, result })
                }
                else if ('type' in v && v.type === 'assetshost') {
                    result += (assetsHost ? '//' + assetsHost : '');
                    // console.log('Case 2, string!', { v, result })
                }
            }
            // console.log('final', { result })
            return result;
        }
    }
    function innerGenerate(nodes) {
        var result = '';
        nodes.forEach(function (c) {
            if (typeof c === 'string') {
                result += c;
            }
            else if (c.type === 'media') {
                var innerResult = innerGenerate(c.rules);
                if (innerResult) {
                    result += generateValue(c.prelude) + '{' + innerResult + '}';
                }
            }
            else {
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
function generateDependencySet(node) {
    if (node.type !== 'Selector') {
        throw new Error("Unexpected type ".concat(node.type, ", expected 'Selector'"));
    }
    var ids = null;
    var classes = null;
    var tags = null;
    node.children.forEach(function (child) {
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
                    var tag = child.name.toLowerCase();
                    if (tags.indexOf(tag) < 0) {
                        tags.push(tag);
                    }
                }
                break;
        }
    });
    return { classes: classes, ids: ids, tags: tags };
}
function mapRule(node) {
    if (node.type !== 'Rule') {
        throw new Error("Unexpected type ".concat(node.type, ", expected 'Rule'"));
    }
    var items = [csstreeGenerate(node.prelude, { mode: GEN_MODE }) + '{'];
    var firstDeclaration = true;
    node.block.children.forEach(function (c) {
        //TODO: Seems like @position-try and @starting-style ends up in here
        if (c.type !== 'Declaration') {
            throw new Error("Unexpected type ".concat(c.type, ", expected 'Declaration'"));
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
        dependencySets: node.prelude.type === 'SelectorList'
            ? Array.from(node.prelude.children).map(generateDependencySet)
            : [],
        // ? node.prelude.children.map(generateDependencySet).toArray()
    };
}
function consolidateItemsToString(parts) {
    if (!parts.length) {
        return '';
    }
    var result = [parts[0]];
    for (var i = 1; i < parts.length; i++) {
        var p = parts[i];
        if (typeof result[result.length - 1] === 'string' && typeof p === 'string') {
            result[result.length - 1] = result[result.length - 1] + p;
        }
        else {
            result.push(p);
        }
    }
    return result.length === 1 && typeof result[0] === 'string' ? result[0] : result;
}
function pushDeclaration(items, decl) {
    // NOTE: decl.property is the name of the CSS property
    console.log('decl value type', decl.value.type);
    if (decl.value.type === 'Value') {
        items.push(decl.property + ':');
        // console.log('Declaration children:', decl.value.children.map(child => ({
        //   type: child.type,
        //   ...(child.type === 'Identifier' ? { name: child.name } : {}),
        //   ...(child.type === 'Number' ? { value: child.value } : {})
        // })));
        var isFirst_1 = true;
        decl.value.children.forEach(function (v) {
            if (!isFirst_1) {
                items.push(' '); // Add space between items
            }
            if (v.type === 'String') {
                // encode string values, needed for some things after 2.x
                items.push(string.encode(v.value));
            }
            else if (v.type === 'Url') {
                pushUrlValue(items, v);
            }
            else if (v.type === 'Function' && v.name === 'format') {
                // ensure format() functions are prepended with a space
                items.push(csstreeGenerate(v, { mode: GEN_MODE }));
            }
            else {
                items.push(csstreeGenerate(v, { mode: GEN_MODE }));
            }
            isFirst_1 = false;
        });
        if (decl.important) {
            items.push(' !important');
        }
    }
    else if (decl.value.type === 'Raw') {
        items.push(decl.property + ':', decl.value.value);
        if (decl.important) {
            items.push(' !important');
        }
    }
    else {
        items.push(csstreeGenerate(decl.value, { mode: GEN_MODE }));
        throw new Error('This should NEVER happen.');
    }
}
function pushUrlValue(items, node) {
    if (node.type === 'Url') {
        items.push('url(');
        pushUrlString(items, node.value);
        items.push(')');
    }
    else {
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
function pushUrlString(items, value) {
    var entry = [];
    if (value.startsWith('/') && !value.startsWith('//')) {
        entry.push({ type: 'assetshost' }, value);
    }
    else {
        entry.push(value);
    }
    // the "String" type stores a decoded string value,
    // meaning if it had quotes, they were removed
    items.push.apply(items, __spreadArray(__spreadArray(['"'], entry, false), ['"'], false));
}
function mapChild(node) {
    // console.log({ nt: node.type })
    console.log("node", node);
    switch (node.type) {
        case 'Atrule':
            if (node.name === 'supports' || node.name === 'media') {
                return {
                    type: 'media',
                    prelude: '@' + node.name + (node.prelude ? ' ' + csstreeGenerate(node.prelude, { mode: "safe" }) : ''),
                    rules: removeDuplicates(node.block
                        ? node.block.children
                            .map(mapChild)
                            .filter(function (c) { return !!c; })
                            .toArray()
                        : []),
                };
            }
            else if (node.name === 'import' && node.prelude && 'children' in node.prelude) {
                // handle @import nodes with children
                var items_1 = ['@import '];
                var isFirst_2 = true;
                node.prelude.children.forEach(function (c) {
                    if (isFirst_2 && c.type === 'String') {
                        pushUrlString(items_1, c.value);
                    }
                    else if (c.type === 'Url') {
                        pushUrlValue(items_1, c);
                    }
                    else {
                        var unknown = csstreeGenerate(c, { mode: GEN_MODE, });
                        items_1.push(
                        // ensure space between media query list and url
                        " ", unknown);
                    }
                    isFirst_2 = false;
                });
                items_1.push(';');
                return { type: 'rule', text: consolidateItemsToString(items_1) };
            }
            else if (node.name === 'font-face' && node.block) {
                // handle font face
                var items_2 = ['@font-face{'];
                var first_1 = true;
                node.block.children.forEach(function (c) {
                    if (!first_1) {
                        items_2.push(';');
                    }
                    if (c.type === 'Declaration') {
                        pushDeclaration(items_2, c);
                    }
                    else {
                        items_2.push(csstreeGenerate(c, { mode: GEN_MODE }));
                    }
                    first_1 = false;
                });
                items_2.push('}');
                return { type: 'rule', text: consolidateItemsToString(items_2) };
            }
            else if (node.name === 'counter-style' && node.prelude && 'children' in node.prelude && node.block) {
                // handle @counter-style nodes with children
                var items_3 = ['@counter-style'];
                var isFirst_3 = true;
                // // TODO: Found this, maybe replace the map?
                var wat = [csstreeGenerate(node.prelude, { mode: GEN_MODE }) + '{'];
                console.log({ wat: wat });
                node.prelude.children.forEach(function (c) {
                    // if (isFirst && c.type === 'Identifier') {
                    //   items.push(c.name);
                    // } else 
                    if (c.type === 'String') {
                        items_3.push(c.value);
                        // items.push(reEscapeUnicode(c.value)); // Apply Unicode escaping
                    }
                    else {
                        var unknown = csstreeGenerate(c, { mode: GEN_MODE, });
                        items_3.push(
                        // ensure space between media query list and url
                        " ", unknown);
                    }
                    isFirst_3 = false;
                });
                items_3.push('{');
                var first_2 = true;
                node.block.children.forEach(function (c) {
                    if (!first_2) {
                        items_3.push(';');
                    }
                    if (c.type === 'Declaration') {
                        pushDeclaration(items_3, c);
                    }
                    else {
                        items_3.push(csstreeGenerate(c, { mode: GEN_MODE }));
                    }
                    first_2 = false;
                });
                items_3.push('}');
                return { type: 'rule', text: consolidateItemsToString(items_3) };
            }
            else {
                return csstreeGenerate(node, { mode: GEN_MODE });
            }
        case 'Rule':
            return mapRule(node);
        case 'Raw':
        case 'Comment':
            return null;
        default:
            throw new Error("Unexpected type ".concat(node.type, ", expected 'Atrule', 'Rule', 'Raw', 'Comment'"));
    }
}
function removeDuplicates(rules) {
    // Note that we preserve the last of all duplicated rules because this is the rule that will take precedence
    var found = new Set();
    var result = [];
    for (var i = rules.length - 1; i >= 0; i--) {
        var json = JSON.stringify(rules[i]);
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
function parse(css) {
    // is included in css
    var ast = csstreeParse(css);
    if (ast.type !== 'StyleSheet') {
        throw new Error("Unexpected type ".concat(ast.type, ", expected 'StyleSheet'"));
    }
    var parsedCss = [];
    ast.children.forEach(function (child) {
        var mapped = mapChild(child);
        if (mapped) {
            parsedCss.push(mapped);
        }
    });
    var deduplicatedCss = removeDuplicates(parsedCss);
    return {
        generate: function (html, globalUsage, assetsHost) {
            return generate(deduplicatedCss, html, globalUsage, assetsHost);
        }
    };
}
exports.parse = parse;
