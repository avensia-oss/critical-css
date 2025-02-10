'use strict';
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var nodeHtmlParser = require('node-html-parser');
var module$1 = require('module');
var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name50 in all)__defProp(target, name50, {
        get: all[name50],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    __defProp(target, "default", {
        value: mod,
        enumerable: true
    }), mod);
};
// node_modules/source-map-js/lib/base64.js
var require_base64 = __commonJS({
    "node_modules/source-map-js/lib/base64.js": function(exports1) {
        var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        exports1.encode = function(number2) {
            if (0 <= number2 && number2 < intToCharMap.length) {
                return intToCharMap[number2];
            }
            throw new TypeError("Must be between 0 and 63: " + number2);
        };
        exports1.decode = function(charCode) {
            var bigA = 65;
            var bigZ = 90;
            var littleA = 97;
            var littleZ = 122;
            var zero2 = 48;
            var nine = 57;
            var plus = 43;
            var slash = 47;
            var littleOffset = 26;
            var numberOffset = 52;
            if (bigA <= charCode && charCode <= bigZ) {
                return charCode - bigA;
            }
            if (littleA <= charCode && charCode <= littleZ) {
                return charCode - littleA + littleOffset;
            }
            if (zero2 <= charCode && charCode <= nine) {
                return charCode - zero2 + numberOffset;
            }
            if (charCode == plus) {
                return 62;
            }
            if (charCode == slash) {
                return 63;
            }
            return -1;
        };
    }
});
// node_modules/source-map-js/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
    "node_modules/source-map-js/lib/base64-vlq.js": function(exports1) {
        var base64 = require_base64();
        var VLQ_BASE_SHIFT = 5;
        var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
        var VLQ_BASE_MASK = VLQ_BASE - 1;
        var VLQ_CONTINUATION_BIT = VLQ_BASE;
        function toVLQSigned(aValue) {
            return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
        }
        function fromVLQSigned(aValue) {
            var isNegative = (aValue & 1) === 1;
            var shifted = aValue >> 1;
            return isNegative ? -shifted : shifted;
        }
        exports1.encode = function base64VLQ_encode(aValue) {
            var encoded = "";
            var digit;
            var vlq = toVLQSigned(aValue);
            do {
                digit = vlq & VLQ_BASE_MASK;
                vlq >>>= VLQ_BASE_SHIFT;
                if (vlq > 0) {
                    digit |= VLQ_CONTINUATION_BIT;
                }
                encoded += base64.encode(digit);
            }while (vlq > 0);
            return encoded;
        };
        exports1.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
            var strLen = aStr.length;
            var result = 0;
            var shift = 0;
            var continuation, digit;
            do {
                if (aIndex >= strLen) {
                    throw new Error("Expected more digits in base 64 VLQ value.");
                }
                digit = base64.decode(aStr.charCodeAt(aIndex++));
                if (digit === -1) {
                    throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
                }
                continuation = !!(digit & VLQ_CONTINUATION_BIT);
                digit &= VLQ_BASE_MASK;
                result = result + (digit << shift);
                shift += VLQ_BASE_SHIFT;
            }while (continuation);
            aOutParam.value = fromVLQSigned(result);
            aOutParam.rest = aIndex;
        };
    }
});
// node_modules/source-map-js/lib/util.js
var require_util = __commonJS({
    "node_modules/source-map-js/lib/util.js": function(exports1) {
        function getArg(aArgs, aName, aDefaultValue) {
            if (aName in aArgs) {
                return aArgs[aName];
            } else if (arguments.length === 3) {
                return aDefaultValue;
            } else {
                throw new Error('"' + aName + '" is a required argument.');
            }
        }
        exports1.getArg = getArg;
        var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
        var dataUrlRegexp = /^data:.+\,.+$/;
        function urlParse(aUrl) {
            var match = aUrl.match(urlRegexp);
            if (!match) {
                return null;
            }
            return {
                scheme: match[1],
                auth: match[2],
                host: match[3],
                port: match[4],
                path: match[5]
            };
        }
        exports1.urlParse = urlParse;
        function urlGenerate(aParsedUrl) {
            var url = "";
            if (aParsedUrl.scheme) {
                url += aParsedUrl.scheme + ":";
            }
            url += "//";
            if (aParsedUrl.auth) {
                url += aParsedUrl.auth + "@";
            }
            if (aParsedUrl.host) {
                url += aParsedUrl.host;
            }
            if (aParsedUrl.port) {
                url += ":" + aParsedUrl.port;
            }
            if (aParsedUrl.path) {
                url += aParsedUrl.path;
            }
            return url;
        }
        exports1.urlGenerate = urlGenerate;
        var MAX_CACHED_INPUTS = 32;
        function lruMemoize(f) {
            var cache = [];
            return function(input) {
                for(var i = 0; i < cache.length; i++){
                    if (cache[i].input === input) {
                        var temp = cache[0];
                        cache[0] = cache[i];
                        cache[i] = temp;
                        return cache[0].result;
                    }
                }
                var result = f(input);
                cache.unshift({
                    input: input,
                    result: result
                });
                if (cache.length > MAX_CACHED_INPUTS) {
                    cache.pop();
                }
                return result;
            };
        }
        var normalize = lruMemoize(function normalize2(aPath) {
            var path = aPath;
            var url = urlParse(aPath);
            if (url) {
                if (!url.path) {
                    return aPath;
                }
                path = url.path;
            }
            var isAbsolute = exports1.isAbsolute(path);
            var parts = [];
            var start = 0;
            var i = 0;
            while(true){
                start = i;
                i = path.indexOf("/", start);
                if (i === -1) {
                    parts.push(path.slice(start));
                    break;
                } else {
                    parts.push(path.slice(start, i));
                    while(i < path.length && path[i] === "/"){
                        i++;
                    }
                }
            }
            for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
                part = parts[i];
                if (part === ".") {
                    parts.splice(i, 1);
                } else if (part === "..") {
                    up++;
                } else if (up > 0) {
                    if (part === "") {
                        parts.splice(i + 1, up);
                        up = 0;
                    } else {
                        parts.splice(i, 2);
                        up--;
                    }
                }
            }
            path = parts.join("/");
            if (path === "") {
                path = isAbsolute ? "/" : ".";
            }
            if (url) {
                url.path = path;
                return urlGenerate(url);
            }
            return path;
        });
        exports1.normalize = normalize;
        function join(aRoot, aPath) {
            if (aRoot === "") {
                aRoot = ".";
            }
            if (aPath === "") {
                aPath = ".";
            }
            var aPathUrl = urlParse(aPath);
            var aRootUrl = urlParse(aRoot);
            if (aRootUrl) {
                aRoot = aRootUrl.path || "/";
            }
            if (aPathUrl && !aPathUrl.scheme) {
                if (aRootUrl) {
                    aPathUrl.scheme = aRootUrl.scheme;
                }
                return urlGenerate(aPathUrl);
            }
            if (aPathUrl || aPath.match(dataUrlRegexp)) {
                return aPath;
            }
            if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
                aRootUrl.host = aPath;
                return urlGenerate(aRootUrl);
            }
            var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
            if (aRootUrl) {
                aRootUrl.path = joined;
                return urlGenerate(aRootUrl);
            }
            return joined;
        }
        exports1.join = join;
        exports1.isAbsolute = function(aPath) {
            return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
        };
        function relative(aRoot, aPath) {
            if (aRoot === "") {
                aRoot = ".";
            }
            aRoot = aRoot.replace(/\/$/, "");
            var level = 0;
            while(aPath.indexOf(aRoot + "/") !== 0){
                var index = aRoot.lastIndexOf("/");
                if (index < 0) {
                    return aPath;
                }
                aRoot = aRoot.slice(0, index);
                if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
                    return aPath;
                }
                ++level;
            }
            return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
        }
        exports1.relative = relative;
        var supportsNullProto = function() {
            var obj = /* @__PURE__ */ Object.create(null);
            return !("__proto__" in obj);
        }();
        function identity(s) {
            return s;
        }
        function toSetString(aStr) {
            if (isProtoString(aStr)) {
                return "$" + aStr;
            }
            return aStr;
        }
        exports1.toSetString = supportsNullProto ? identity : toSetString;
        function fromSetString(aStr) {
            if (isProtoString(aStr)) {
                return aStr.slice(1);
            }
            return aStr;
        }
        exports1.fromSetString = supportsNullProto ? identity : fromSetString;
        function isProtoString(s) {
            if (!s) {
                return false;
            }
            var length2 = s.length;
            if (length2 < 9) {
                return false;
            }
            if (s.charCodeAt(length2 - 1) !== 95 || s.charCodeAt(length2 - 2) !== 95 || s.charCodeAt(length2 - 3) !== 111 || s.charCodeAt(length2 - 4) !== 116 || s.charCodeAt(length2 - 5) !== 111 || s.charCodeAt(length2 - 6) !== 114 || s.charCodeAt(length2 - 7) !== 112 || s.charCodeAt(length2 - 8) !== 95 || s.charCodeAt(length2 - 9) !== 95) {
                return false;
            }
            for(var i = length2 - 10; i >= 0; i--){
                if (s.charCodeAt(i) !== 36) {
                    return false;
                }
            }
            return true;
        }
        function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
            var cmp = strcmp(mappingA.source, mappingB.source);
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalLine - mappingB.originalLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalColumn - mappingB.originalColumn;
            if (cmp !== 0 || onlyCompareOriginal) {
                return cmp;
            }
            cmp = mappingA.generatedColumn - mappingB.generatedColumn;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.generatedLine - mappingB.generatedLine;
            if (cmp !== 0) {
                return cmp;
            }
            return strcmp(mappingA.name, mappingB.name);
        }
        exports1.compareByOriginalPositions = compareByOriginalPositions;
        function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
            var cmp;
            cmp = mappingA.originalLine - mappingB.originalLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalColumn - mappingB.originalColumn;
            if (cmp !== 0 || onlyCompareOriginal) {
                return cmp;
            }
            cmp = mappingA.generatedColumn - mappingB.generatedColumn;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.generatedLine - mappingB.generatedLine;
            if (cmp !== 0) {
                return cmp;
            }
            return strcmp(mappingA.name, mappingB.name);
        }
        exports1.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
        function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
            var cmp = mappingA.generatedLine - mappingB.generatedLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.generatedColumn - mappingB.generatedColumn;
            if (cmp !== 0 || onlyCompareGenerated) {
                return cmp;
            }
            cmp = strcmp(mappingA.source, mappingB.source);
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalLine - mappingB.originalLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalColumn - mappingB.originalColumn;
            if (cmp !== 0) {
                return cmp;
            }
            return strcmp(mappingA.name, mappingB.name);
        }
        exports1.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
        function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
            var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
            if (cmp !== 0 || onlyCompareGenerated) {
                return cmp;
            }
            cmp = strcmp(mappingA.source, mappingB.source);
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalLine - mappingB.originalLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalColumn - mappingB.originalColumn;
            if (cmp !== 0) {
                return cmp;
            }
            return strcmp(mappingA.name, mappingB.name);
        }
        exports1.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
        function strcmp(aStr1, aStr2) {
            if (aStr1 === aStr2) {
                return 0;
            }
            if (aStr1 === null) {
                return 1;
            }
            if (aStr2 === null) {
                return -1;
            }
            if (aStr1 > aStr2) {
                return 1;
            }
            return -1;
        }
        function compareByGeneratedPositionsInflated(mappingA, mappingB) {
            var cmp = mappingA.generatedLine - mappingB.generatedLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.generatedColumn - mappingB.generatedColumn;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = strcmp(mappingA.source, mappingB.source);
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalLine - mappingB.originalLine;
            if (cmp !== 0) {
                return cmp;
            }
            cmp = mappingA.originalColumn - mappingB.originalColumn;
            if (cmp !== 0) {
                return cmp;
            }
            return strcmp(mappingA.name, mappingB.name);
        }
        exports1.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
        function parseSourceMapInput(str) {
            return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
        }
        exports1.parseSourceMapInput = parseSourceMapInput;
        function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
            sourceURL = sourceURL || "";
            if (sourceRoot) {
                if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
                    sourceRoot += "/";
                }
                sourceURL = sourceRoot + sourceURL;
            }
            if (sourceMapURL) {
                var parsed = urlParse(sourceMapURL);
                if (!parsed) {
                    throw new Error("sourceMapURL could not be parsed");
                }
                if (parsed.path) {
                    var index = parsed.path.lastIndexOf("/");
                    if (index >= 0) {
                        parsed.path = parsed.path.substring(0, index + 1);
                    }
                }
                sourceURL = join(urlGenerate(parsed), sourceURL);
            }
            return normalize(sourceURL);
        }
        exports1.computeSourceURL = computeSourceURL;
    }
});
// node_modules/source-map-js/lib/array-set.js
var require_array_set = __commonJS({
    "node_modules/source-map-js/lib/array-set.js": function(exports1) {
        var util = require_util();
        var has = Object.prototype.hasOwnProperty;
        var hasNativeMap = typeof Map !== "undefined";
        function ArraySet() {
            this._array = [];
            this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
        }
        ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
            var set = new ArraySet();
            for(var i = 0, len = aArray.length; i < len; i++){
                set.add(aArray[i], aAllowDuplicates);
            }
            return set;
        };
        ArraySet.prototype.size = function ArraySet_size() {
            return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
        };
        ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
            var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
            var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
            var idx = this._array.length;
            if (!isDuplicate || aAllowDuplicates) {
                this._array.push(aStr);
            }
            if (!isDuplicate) {
                if (hasNativeMap) {
                    this._set.set(aStr, idx);
                } else {
                    this._set[sStr] = idx;
                }
            }
        };
        ArraySet.prototype.has = function ArraySet_has(aStr) {
            if (hasNativeMap) {
                return this._set.has(aStr);
            } else {
                var sStr = util.toSetString(aStr);
                return has.call(this._set, sStr);
            }
        };
        ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
            if (hasNativeMap) {
                var idx = this._set.get(aStr);
                if (idx >= 0) {
                    return idx;
                }
            } else {
                var sStr = util.toSetString(aStr);
                if (has.call(this._set, sStr)) {
                    return this._set[sStr];
                }
            }
            throw new Error('"' + aStr + '" is not in the set.');
        };
        ArraySet.prototype.at = function ArraySet_at(aIdx) {
            if (aIdx >= 0 && aIdx < this._array.length) {
                return this._array[aIdx];
            }
            throw new Error("No element indexed by " + aIdx);
        };
        ArraySet.prototype.toArray = function ArraySet_toArray() {
            return this._array.slice();
        };
        exports1.ArraySet = ArraySet;
    }
});
// node_modules/source-map-js/lib/mapping-list.js
var require_mapping_list = __commonJS({
    "node_modules/source-map-js/lib/mapping-list.js": function(exports1) {
        var util = require_util();
        function generatedPositionAfter(mappingA, mappingB) {
            var lineA = mappingA.generatedLine;
            var lineB = mappingB.generatedLine;
            var columnA = mappingA.generatedColumn;
            var columnB = mappingB.generatedColumn;
            return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
        }
        function MappingList() {
            this._array = [];
            this._sorted = true;
            this._last = {
                generatedLine: -1,
                generatedColumn: 0
            };
        }
        MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
            this._array.forEach(aCallback, aThisArg);
        };
        MappingList.prototype.add = function MappingList_add(aMapping) {
            if (generatedPositionAfter(this._last, aMapping)) {
                this._last = aMapping;
                this._array.push(aMapping);
            } else {
                this._sorted = false;
                this._array.push(aMapping);
            }
        };
        MappingList.prototype.toArray = function MappingList_toArray() {
            if (!this._sorted) {
                this._array.sort(util.compareByGeneratedPositionsInflated);
                this._sorted = true;
            }
            return this._array;
        };
        exports1.MappingList = MappingList;
    }
});
// node_modules/source-map-js/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
    "node_modules/source-map-js/lib/source-map-generator.js": function(exports1) {
        var base64VLQ = require_base64_vlq();
        var util = require_util();
        var ArraySet = require_array_set().ArraySet;
        var MappingList = require_mapping_list().MappingList;
        function SourceMapGenerator2(aArgs) {
            if (!aArgs) {
                aArgs = {};
            }
            this._file = util.getArg(aArgs, "file", null);
            this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
            this._skipValidation = util.getArg(aArgs, "skipValidation", false);
            this._ignoreInvalidMapping = util.getArg(aArgs, "ignoreInvalidMapping", false);
            this._sources = new ArraySet();
            this._names = new ArraySet();
            this._mappings = new MappingList();
            this._sourcesContents = null;
        }
        SourceMapGenerator2.prototype._version = 3;
        SourceMapGenerator2.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer, generatorOps) {
            var sourceRoot = aSourceMapConsumer.sourceRoot;
            var generator = new SourceMapGenerator2(Object.assign(generatorOps || {}, {
                file: aSourceMapConsumer.file,
                sourceRoot: sourceRoot
            }));
            aSourceMapConsumer.eachMapping(function(mapping) {
                var newMapping = {
                    generated: {
                        line: mapping.generatedLine,
                        column: mapping.generatedColumn
                    }
                };
                if (mapping.source != null) {
                    newMapping.source = mapping.source;
                    if (sourceRoot != null) {
                        newMapping.source = util.relative(sourceRoot, newMapping.source);
                    }
                    newMapping.original = {
                        line: mapping.originalLine,
                        column: mapping.originalColumn
                    };
                    if (mapping.name != null) {
                        newMapping.name = mapping.name;
                    }
                }
                generator.addMapping(newMapping);
            });
            aSourceMapConsumer.sources.forEach(function(sourceFile) {
                var sourceRelative = sourceFile;
                if (sourceRoot !== null) {
                    sourceRelative = util.relative(sourceRoot, sourceFile);
                }
                if (!generator._sources.has(sourceRelative)) {
                    generator._sources.add(sourceRelative);
                }
                var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                if (content != null) {
                    generator.setSourceContent(sourceFile, content);
                }
            });
            return generator;
        };
        SourceMapGenerator2.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
            var generated = util.getArg(aArgs, "generated");
            var original = util.getArg(aArgs, "original", null);
            var source = util.getArg(aArgs, "source", null);
            var name50 = util.getArg(aArgs, "name", null);
            if (!this._skipValidation) {
                if (this._validateMapping(generated, original, source, name50) === false) {
                    return;
                }
            }
            if (source != null) {
                source = String(source);
                if (!this._sources.has(source)) {
                    this._sources.add(source);
                }
            }
            if (name50 != null) {
                name50 = String(name50);
                if (!this._names.has(name50)) {
                    this._names.add(name50);
                }
            }
            this._mappings.add({
                generatedLine: generated.line,
                generatedColumn: generated.column,
                originalLine: original != null && original.line,
                originalColumn: original != null && original.column,
                source: source,
                name: name50
            });
        };
        SourceMapGenerator2.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
            var source = aSourceFile;
            if (this._sourceRoot != null) {
                source = util.relative(this._sourceRoot, source);
            }
            if (aSourceContent != null) {
                if (!this._sourcesContents) {
                    this._sourcesContents = /* @__PURE__ */ Object.create(null);
                }
                this._sourcesContents[util.toSetString(source)] = aSourceContent;
            } else if (this._sourcesContents) {
                delete this._sourcesContents[util.toSetString(source)];
                if (Object.keys(this._sourcesContents).length === 0) {
                    this._sourcesContents = null;
                }
            }
        };
        SourceMapGenerator2.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
            var sourceFile = aSourceFile;
            if (aSourceFile == null) {
                if (aSourceMapConsumer.file == null) {
                    throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                }
                sourceFile = aSourceMapConsumer.file;
            }
            var sourceRoot = this._sourceRoot;
            if (sourceRoot != null) {
                sourceFile = util.relative(sourceRoot, sourceFile);
            }
            var newSources = new ArraySet();
            var newNames = new ArraySet();
            this._mappings.unsortedForEach(function(mapping) {
                if (mapping.source === sourceFile && mapping.originalLine != null) {
                    var original = aSourceMapConsumer.originalPositionFor({
                        line: mapping.originalLine,
                        column: mapping.originalColumn
                    });
                    if (original.source != null) {
                        mapping.source = original.source;
                        if (aSourceMapPath != null) {
                            mapping.source = util.join(aSourceMapPath, mapping.source);
                        }
                        if (sourceRoot != null) {
                            mapping.source = util.relative(sourceRoot, mapping.source);
                        }
                        mapping.originalLine = original.line;
                        mapping.originalColumn = original.column;
                        if (original.name != null) {
                            mapping.name = original.name;
                        }
                    }
                }
                var source = mapping.source;
                if (source != null && !newSources.has(source)) {
                    newSources.add(source);
                }
                var name50 = mapping.name;
                if (name50 != null && !newNames.has(name50)) {
                    newNames.add(name50);
                }
            }, this);
            this._sources = newSources;
            this._names = newNames;
            aSourceMapConsumer.sources.forEach(function(sourceFile2) {
                var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
                if (content != null) {
                    if (aSourceMapPath != null) {
                        sourceFile2 = util.join(aSourceMapPath, sourceFile2);
                    }
                    if (sourceRoot != null) {
                        sourceFile2 = util.relative(sourceRoot, sourceFile2);
                    }
                    this.setSourceContent(sourceFile2, content);
                }
            }, this);
        };
        SourceMapGenerator2.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
            if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
                var message = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
                if (this._ignoreInvalidMapping) {
                    if (typeof console !== "undefined" && console.warn) {
                        console.warn(message);
                    }
                    return false;
                } else {
                    throw new Error(message);
                }
            }
            if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
                return;
            } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
                return;
            } else {
                var message = "Invalid mapping: " + JSON.stringify({
                    generated: aGenerated,
                    source: aSource,
                    original: aOriginal,
                    name: aName
                });
                if (this._ignoreInvalidMapping) {
                    if (typeof console !== "undefined" && console.warn) {
                        console.warn(message);
                    }
                    return false;
                } else {
                    throw new Error(message);
                }
            }
        };
        SourceMapGenerator2.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
            var previousGeneratedColumn = 0;
            var previousGeneratedLine = 1;
            var previousOriginalColumn = 0;
            var previousOriginalLine = 0;
            var previousName = 0;
            var previousSource = 0;
            var result = "";
            var next;
            var mapping;
            var nameIdx;
            var sourceIdx;
            var mappings = this._mappings.toArray();
            for(var i = 0, len = mappings.length; i < len; i++){
                mapping = mappings[i];
                next = "";
                if (mapping.generatedLine !== previousGeneratedLine) {
                    previousGeneratedColumn = 0;
                    while(mapping.generatedLine !== previousGeneratedLine){
                        next += ";";
                        previousGeneratedLine++;
                    }
                } else {
                    if (i > 0) {
                        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                            continue;
                        }
                        next += ",";
                    }
                }
                next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
                previousGeneratedColumn = mapping.generatedColumn;
                if (mapping.source != null) {
                    sourceIdx = this._sources.indexOf(mapping.source);
                    next += base64VLQ.encode(sourceIdx - previousSource);
                    previousSource = sourceIdx;
                    next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
                    previousOriginalLine = mapping.originalLine - 1;
                    next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
                    previousOriginalColumn = mapping.originalColumn;
                    if (mapping.name != null) {
                        nameIdx = this._names.indexOf(mapping.name);
                        next += base64VLQ.encode(nameIdx - previousName);
                        previousName = nameIdx;
                    }
                }
                result += next;
            }
            return result;
        };
        SourceMapGenerator2.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
            return aSources.map(function(source) {
                if (!this._sourcesContents) {
                    return null;
                }
                if (aSourceRoot != null) {
                    source = util.relative(aSourceRoot, source);
                }
                var key = util.toSetString(source);
                return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
            }, this);
        };
        SourceMapGenerator2.prototype.toJSON = function SourceMapGenerator_toJSON() {
            var map = {
                version: this._version,
                sources: this._sources.toArray(),
                names: this._names.toArray(),
                mappings: this._serializeMappings()
            };
            if (this._file != null) {
                map.file = this._file;
            }
            if (this._sourceRoot != null) {
                map.sourceRoot = this._sourceRoot;
            }
            if (this._sourcesContents) {
                map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
            }
            return map;
        };
        SourceMapGenerator2.prototype.toString = function SourceMapGenerator_toString() {
            return JSON.stringify(this.toJSON());
        };
        exports1.SourceMapGenerator = SourceMapGenerator2;
    }
});
// node_modules/css-tree/lib/tokenizer/types.js
var EOF = 0;
var Ident = 1;
var Function = 2;
var AtKeyword = 3;
var Hash = 4;
var String2 = 5;
var BadString = 6;
var Url = 7;
var BadUrl = 8;
var Delim = 9;
var Number2 = 10;
var Percentage = 11;
var Dimension = 12;
var WhiteSpace = 13;
var CDO = 14;
var CDC = 15;
var Colon = 16;
var Semicolon = 17;
var Comma = 18;
var LeftSquareBracket = 19;
var RightSquareBracket = 20;
var LeftParenthesis = 21;
var RightParenthesis = 22;
var LeftCurlyBracket = 23;
var RightCurlyBracket = 24;
var Comment = 25;
// node_modules/css-tree/lib/tokenizer/char-code-definitions.js
var EOF2 = 0;
function isDigit(code2) {
    return code2 >= 48 && code2 <= 57;
}
function isHexDigit(code2) {
    return isDigit(code2) || // 0 .. 9
    code2 >= 65 && code2 <= 70 || // A .. F
    code2 >= 97 && code2 <= 102;
}
function isUppercaseLetter(code2) {
    return code2 >= 65 && code2 <= 90;
}
function isLowercaseLetter(code2) {
    return code2 >= 97 && code2 <= 122;
}
function isLetter(code2) {
    return isUppercaseLetter(code2) || isLowercaseLetter(code2);
}
function isNonAscii(code2) {
    return code2 >= 128;
}
function isNameStart(code2) {
    return isLetter(code2) || isNonAscii(code2) || code2 === 95;
}
function isName(code2) {
    return isNameStart(code2) || isDigit(code2) || code2 === 45;
}
function isNonPrintable(code2) {
    return code2 >= 0 && code2 <= 8 || code2 === 11 || code2 >= 14 && code2 <= 31 || code2 === 127;
}
function isNewline(code2) {
    return code2 === 10 || code2 === 13 || code2 === 12;
}
function isWhiteSpace(code2) {
    return isNewline(code2) || code2 === 32 || code2 === 9;
}
function isValidEscape(first, second) {
    if (first !== 92) {
        return false;
    }
    if (isNewline(second) || second === EOF2) {
        return false;
    }
    return true;
}
function isIdentifierStart(first, second, third) {
    if (first === 45) {
        return isNameStart(second) || second === 45 || isValidEscape(second, third);
    }
    if (isNameStart(first)) {
        return true;
    }
    if (first === 92) {
        return isValidEscape(first, second);
    }
    return false;
}
function isNumberStart(first, second, third) {
    if (first === 43 || first === 45) {
        if (isDigit(second)) {
            return 2;
        }
        return second === 46 && isDigit(third) ? 3 : 0;
    }
    if (first === 46) {
        return isDigit(second) ? 2 : 0;
    }
    if (isDigit(first)) {
        return 1;
    }
    return 0;
}
function isBOM(code2) {
    if (code2 === 65279) {
        return 1;
    }
    if (code2 === 65534) {
        return 1;
    }
    return 0;
}
var CATEGORY = new Array(128);
var EofCategory = 128;
var WhiteSpaceCategory = 130;
var DigitCategory = 131;
var NameStartCategory = 132;
var NonPrintableCategory = 133;
for(var i = 0; i < CATEGORY.length; i++){
    CATEGORY[i] = isWhiteSpace(i) && WhiteSpaceCategory || isDigit(i) && DigitCategory || isNameStart(i) && NameStartCategory || isNonPrintable(i) && NonPrintableCategory || i || EofCategory;
}
function charCodeCategory(code2) {
    return code2 < 128 ? CATEGORY[code2] : NameStartCategory;
}
// node_modules/css-tree/lib/tokenizer/utils.js
function getCharCode(source, offset) {
    return offset < source.length ? source.charCodeAt(offset) : 0;
}
function getNewlineLength(source, offset, code2) {
    if (code2 === 13 && getCharCode(source, offset + 1) === 10) {
        return 2;
    }
    return 1;
}
function cmpChar(testStr, offset, referenceCode) {
    var code2 = testStr.charCodeAt(offset);
    if (isUppercaseLetter(code2)) {
        code2 = code2 | 32;
    }
    return code2 === referenceCode;
}
function cmpStr(testStr, start, end, referenceStr) {
    if (end - start !== referenceStr.length) {
        return false;
    }
    if (start < 0 || end > testStr.length) {
        return false;
    }
    for(var i = start; i < end; i++){
        var referenceCode = referenceStr.charCodeAt(i - start);
        var testCode = testStr.charCodeAt(i);
        if (isUppercaseLetter(testCode)) {
            testCode = testCode | 32;
        }
        if (testCode !== referenceCode) {
            return false;
        }
    }
    return true;
}
function findWhiteSpaceStart(source, offset) {
    for(; offset >= 0; offset--){
        if (!isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset + 1;
}
function findWhiteSpaceEnd(source, offset) {
    for(; offset < source.length; offset++){
        if (!isWhiteSpace(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset;
}
function findDecimalNumberEnd(source, offset) {
    for(; offset < source.length; offset++){
        if (!isDigit(source.charCodeAt(offset))) {
            break;
        }
    }
    return offset;
}
function consumeEscaped(source, offset) {
    offset += 2;
    if (isHexDigit(getCharCode(source, offset - 1))) {
        for(var maxOffset = Math.min(source.length, offset + 5); offset < maxOffset; offset++){
            if (!isHexDigit(getCharCode(source, offset))) {
                break;
            }
        }
        var code2 = getCharCode(source, offset);
        if (isWhiteSpace(code2)) {
            offset += getNewlineLength(source, offset, code2);
        }
    }
    return offset;
}
function consumeName(source, offset) {
    for(; offset < source.length; offset++){
        var code2 = source.charCodeAt(offset);
        if (isName(code2)) {
            continue;
        }
        if (isValidEscape(code2, getCharCode(source, offset + 1))) {
            offset = consumeEscaped(source, offset) - 1;
            continue;
        }
        break;
    }
    return offset;
}
function consumeNumber(source, offset) {
    var code2 = source.charCodeAt(offset);
    if (code2 === 43 || code2 === 45) {
        code2 = source.charCodeAt(offset += 1);
    }
    if (isDigit(code2)) {
        offset = findDecimalNumberEnd(source, offset + 1);
        code2 = source.charCodeAt(offset);
    }
    if (code2 === 46 && isDigit(source.charCodeAt(offset + 1))) {
        offset += 2;
        offset = findDecimalNumberEnd(source, offset);
    }
    if (cmpChar(source, offset, 101)) {
        var sign = 0;
        code2 = source.charCodeAt(offset + 1);
        if (code2 === 45 || code2 === 43) {
            sign = 1;
            code2 = source.charCodeAt(offset + 2);
        }
        if (isDigit(code2)) {
            offset = findDecimalNumberEnd(source, offset + 1 + sign + 1);
        }
    }
    return offset;
}
function consumeBadUrlRemnants(source, offset) {
    for(; offset < source.length; offset++){
        var code2 = source.charCodeAt(offset);
        if (code2 === 41) {
            offset++;
            break;
        }
        if (isValidEscape(code2, getCharCode(source, offset + 1))) {
            offset = consumeEscaped(source, offset);
        }
    }
    return offset;
}
function decodeEscaped(escaped) {
    if (escaped.length === 1 && !isHexDigit(escaped.charCodeAt(0))) {
        return escaped[0];
    }
    var code2 = parseInt(escaped, 16);
    if (code2 === 0 || // If this number is zero,
    code2 >= 55296 && code2 <= 57343 || // or is for a surrogate,
    code2 > 1114111) {
        code2 = 65533;
    }
    return String.fromCodePoint(code2);
}
// node_modules/css-tree/lib/tokenizer/names.js
var names_default = [
    "EOF-token",
    "ident-token",
    "function-token",
    "at-keyword-token",
    "hash-token",
    "string-token",
    "bad-string-token",
    "url-token",
    "bad-url-token",
    "delim-token",
    "number-token",
    "percentage-token",
    "dimension-token",
    "whitespace-token",
    "CDO-token",
    "CDC-token",
    "colon-token",
    "semicolon-token",
    "comma-token",
    "[-token",
    "]-token",
    "(-token",
    ")-token",
    "{-token",
    "}-token",
    "comment-token"
];
// node_modules/css-tree/lib/tokenizer/adopt-buffer.js
var MIN_SIZE = 16 * 1024;
function adoptBuffer() {
    var buffer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, size = arguments.length > 1 ? arguments[1] : void 0;
    if (buffer === null || buffer.length < size) {
        return new Uint32Array(Math.max(size + 1024, MIN_SIZE));
    }
    return buffer;
}
// node_modules/css-tree/lib/tokenizer/OffsetToLocation.js
var N = 10;
var F = 12;
var R = 13;
function computeLinesAndColumns(host) {
    var source = host.source;
    var sourceLength = source.length;
    var startOffset = source.length > 0 ? isBOM(source.charCodeAt(0)) : 0;
    var lines = adoptBuffer(host.lines, sourceLength);
    var columns = adoptBuffer(host.columns, sourceLength);
    var line = host.startLine;
    var column = host.startColumn;
    for(var i = startOffset; i < sourceLength; i++){
        var code2 = source.charCodeAt(i);
        lines[i] = line;
        columns[i] = column++;
        if (code2 === N || code2 === R || code2 === F) {
            if (code2 === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }
            line++;
            column = 1;
        }
    }
    lines[sourceLength] = line;
    columns[sourceLength] = column;
    host.lines = lines;
    host.columns = columns;
    host.computed = true;
}
var OffsetToLocation = /*#__PURE__*/ function() {
    function OffsetToLocation(source, startOffset, startLine, startColumn) {
        _class_call_check(this, OffsetToLocation);
        this.setSource(source, startOffset, startLine, startColumn);
        this.lines = null;
        this.columns = null;
    }
    _create_class(OffsetToLocation, [
        {
            key: "setSource",
            value: function setSource() {
                var source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", startOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, startLine = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, startColumn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
                this.source = source;
                this.startOffset = startOffset;
                this.startLine = startLine;
                this.startColumn = startColumn;
                this.computed = false;
            }
        },
        {
            key: "getLocation",
            value: function getLocation(offset, filename) {
                if (!this.computed) {
                    computeLinesAndColumns(this);
                }
                return {
                    source: filename,
                    offset: this.startOffset + offset,
                    line: this.lines[offset],
                    column: this.columns[offset]
                };
            }
        },
        {
            key: "getLocationRange",
            value: function getLocationRange(start, end, filename) {
                if (!this.computed) {
                    computeLinesAndColumns(this);
                }
                return {
                    source: filename,
                    start: {
                        offset: this.startOffset + start,
                        line: this.lines[start],
                        column: this.columns[start]
                    },
                    end: {
                        offset: this.startOffset + end,
                        line: this.lines[end],
                        column: this.columns[end]
                    }
                };
            }
        }
    ]);
    return OffsetToLocation;
}();
// node_modules/css-tree/lib/tokenizer/TokenStream.js
var OFFSET_MASK = 16777215;
var TYPE_SHIFT = 24;
var balancePair = new Uint8Array(32);
balancePair[Function] = RightParenthesis;
balancePair[LeftParenthesis] = RightParenthesis;
balancePair[LeftSquareBracket] = RightSquareBracket;
balancePair[LeftCurlyBracket] = RightCurlyBracket;
function isBlockOpenerToken(tokenType2) {
    return balancePair[tokenType2] !== 0;
}
var TokenStream = /*#__PURE__*/ function() {
    function TokenStream(source, tokenize3) {
        _class_call_check(this, TokenStream);
        this.setSource(source, tokenize3);
    }
    _create_class(TokenStream, [
        {
            key: "reset",
            value: function reset() {
                this.eof = false;
                this.tokenIndex = -1;
                this.tokenType = 0;
                this.tokenStart = this.firstCharOffset;
                this.tokenEnd = this.firstCharOffset;
            }
        },
        {
            key: "setSource",
            value: function setSource() {
                var source = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", tokenize3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {};
                source = String(source || "");
                var sourceLength = source.length;
                var offsetAndType = adoptBuffer(this.offsetAndType, source.length + 1);
                var balance = adoptBuffer(this.balance, source.length + 1);
                var tokenCount = 0;
                var firstCharOffset = -1;
                var balanceCloseType = 0;
                var balanceStart = source.length;
                this.offsetAndType = null;
                this.balance = null;
                balance.fill(0);
                tokenize3(source, function(type, start, end) {
                    var index = tokenCount++;
                    offsetAndType[index] = type << TYPE_SHIFT | end;
                    if (firstCharOffset === -1) {
                        firstCharOffset = start;
                    }
                    balance[index] = balanceStart;
                    if (type === balanceCloseType) {
                        var prevBalanceStart = balance[balanceStart];
                        balance[balanceStart] = index;
                        balanceStart = prevBalanceStart;
                        balanceCloseType = balancePair[offsetAndType[prevBalanceStart] >> TYPE_SHIFT];
                    } else if (isBlockOpenerToken(type)) {
                        balanceStart = index;
                        balanceCloseType = balancePair[type];
                    }
                });
                offsetAndType[tokenCount] = EOF << TYPE_SHIFT | sourceLength;
                balance[tokenCount] = tokenCount;
                for(var i = 0; i < tokenCount; i++){
                    var balanceStart2 = balance[i];
                    if (balanceStart2 <= i) {
                        var balanceEnd = balance[balanceStart2];
                        if (balanceEnd !== i) {
                            balance[i] = balanceEnd;
                        }
                    } else if (balanceStart2 > tokenCount) {
                        balance[i] = tokenCount;
                    }
                }
                this.source = source;
                this.firstCharOffset = firstCharOffset === -1 ? 0 : firstCharOffset;
                this.tokenCount = tokenCount;
                this.offsetAndType = offsetAndType;
                this.balance = balance;
                this.reset();
                this.next();
            }
        },
        {
            key: "lookupType",
            value: function lookupType(offset) {
                offset += this.tokenIndex;
                if (offset < this.tokenCount) {
                    return this.offsetAndType[offset] >> TYPE_SHIFT;
                }
                return EOF;
            }
        },
        {
            key: "lookupTypeNonSC",
            value: function lookupTypeNonSC(idx) {
                for(var offset = this.tokenIndex; offset < this.tokenCount; offset++){
                    var tokenType2 = this.offsetAndType[offset] >> TYPE_SHIFT;
                    if (tokenType2 !== WhiteSpace && tokenType2 !== Comment) {
                        if (idx-- === 0) {
                            return tokenType2;
                        }
                    }
                }
                return EOF;
            }
        },
        {
            key: "lookupOffset",
            value: function lookupOffset(offset) {
                offset += this.tokenIndex;
                if (offset < this.tokenCount) {
                    return this.offsetAndType[offset - 1] & OFFSET_MASK;
                }
                return this.source.length;
            }
        },
        {
            key: "lookupOffsetNonSC",
            value: function lookupOffsetNonSC(idx) {
                for(var offset = this.tokenIndex; offset < this.tokenCount; offset++){
                    var tokenType2 = this.offsetAndType[offset] >> TYPE_SHIFT;
                    if (tokenType2 !== WhiteSpace && tokenType2 !== Comment) {
                        if (idx-- === 0) {
                            return offset - this.tokenIndex;
                        }
                    }
                }
                return EOF;
            }
        },
        {
            key: "lookupValue",
            value: function lookupValue(offset, referenceStr) {
                offset += this.tokenIndex;
                if (offset < this.tokenCount) {
                    return cmpStr(this.source, this.offsetAndType[offset - 1] & OFFSET_MASK, this.offsetAndType[offset] & OFFSET_MASK, referenceStr);
                }
                return false;
            }
        },
        {
            key: "getTokenStart",
            value: function getTokenStart(tokenIndex) {
                if (tokenIndex === this.tokenIndex) {
                    return this.tokenStart;
                }
                if (tokenIndex > 0) {
                    return tokenIndex < this.tokenCount ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
                }
                return this.firstCharOffset;
            }
        },
        {
            key: "substrToCursor",
            value: function substrToCursor(start) {
                return this.source.substring(start, this.tokenStart);
            }
        },
        {
            key: "isBalanceEdge",
            value: function isBalanceEdge(pos) {
                return this.balance[this.tokenIndex] < pos;
            }
        },
        {
            key: "isDelim",
            value: function isDelim(code2, offset) {
                if (offset) {
                    return this.lookupType(offset) === Delim && this.source.charCodeAt(this.lookupOffset(offset)) === code2;
                }
                return this.tokenType === Delim && this.source.charCodeAt(this.tokenStart) === code2;
            }
        },
        {
            key: "skip",
            value: function skip(tokenCount) {
                var next = this.tokenIndex + tokenCount;
                if (next < this.tokenCount) {
                    this.tokenIndex = next;
                    this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
                    next = this.offsetAndType[next];
                    this.tokenType = next >> TYPE_SHIFT;
                    this.tokenEnd = next & OFFSET_MASK;
                } else {
                    this.tokenIndex = this.tokenCount;
                    this.next();
                }
            }
        },
        {
            key: "next",
            value: function next() {
                var next = this.tokenIndex + 1;
                if (next < this.tokenCount) {
                    this.tokenIndex = next;
                    this.tokenStart = this.tokenEnd;
                    next = this.offsetAndType[next];
                    this.tokenType = next >> TYPE_SHIFT;
                    this.tokenEnd = next & OFFSET_MASK;
                } else {
                    this.eof = true;
                    this.tokenIndex = this.tokenCount;
                    this.tokenType = EOF;
                    this.tokenStart = this.tokenEnd = this.source.length;
                }
            }
        },
        {
            key: "skipSC",
            value: function skipSC() {
                while(this.tokenType === WhiteSpace || this.tokenType === Comment){
                    this.next();
                }
            }
        },
        {
            key: "skipUntilBalanced",
            value: function skipUntilBalanced(startToken, stopConsume) {
                var cursor = startToken;
                var balanceEnd = 0;
                var offset = 0;
                loop: for(; cursor < this.tokenCount; cursor++){
                    balanceEnd = this.balance[cursor];
                    if (balanceEnd < startToken) {
                        break loop;
                    }
                    offset = cursor > 0 ? this.offsetAndType[cursor - 1] & OFFSET_MASK : this.firstCharOffset;
                    switch(stopConsume(this.source.charCodeAt(offset))){
                        case 1:
                            break loop;
                        case 2:
                            cursor++;
                            break loop;
                        default:
                            if (isBlockOpenerToken(this.offsetAndType[cursor] >> TYPE_SHIFT)) {
                                cursor = balanceEnd;
                            }
                    }
                }
                this.skip(cursor - this.tokenIndex);
            }
        },
        {
            key: "forEachToken",
            value: function forEachToken(fn) {
                for(var i = 0, offset = this.firstCharOffset; i < this.tokenCount; i++){
                    var start = offset;
                    var item = this.offsetAndType[i];
                    var end = item & OFFSET_MASK;
                    var type = item >> TYPE_SHIFT;
                    offset = end;
                    fn(type, start, end, i);
                }
            }
        },
        {
            key: "dump",
            value: function dump() {
                var _this = this;
                var tokens = new Array(this.tokenCount);
                this.forEachToken(function(type, start, end, index) {
                    tokens[index] = {
                        idx: index,
                        type: names_default[type],
                        chunk: _this.source.substring(start, end),
                        balance: _this.balance[index]
                    };
                });
                return tokens;
            }
        }
    ]);
    return TokenStream;
}();
// node_modules/css-tree/lib/tokenizer/index.js
function tokenize(source, onToken) {
    function getCharCode2(offset2) {
        return offset2 < sourceLength ? source.charCodeAt(offset2) : 0;
    }
    function consumeNumericToken() {
        offset = consumeNumber(source, offset);
        if (isIdentifierStart(getCharCode2(offset), getCharCode2(offset + 1), getCharCode2(offset + 2))) {
            type = Dimension;
            offset = consumeName(source, offset);
            return;
        }
        if (getCharCode2(offset) === 37) {
            type = Percentage;
            offset++;
            return;
        }
        type = Number2;
    }
    function consumeIdentLikeToken() {
        var nameStartOffset = offset;
        offset = consumeName(source, offset);
        if (cmpStr(source, nameStartOffset, offset, "url") && getCharCode2(offset) === 40) {
            offset = findWhiteSpaceEnd(source, offset + 1);
            if (getCharCode2(offset) === 34 || getCharCode2(offset) === 39) {
                type = Function;
                offset = nameStartOffset + 4;
                return;
            }
            consumeUrlToken();
            return;
        }
        if (getCharCode2(offset) === 40) {
            type = Function;
            offset++;
            return;
        }
        type = Ident;
    }
    function consumeStringToken(endingCodePoint) {
        if (!endingCodePoint) {
            endingCodePoint = getCharCode2(offset++);
        }
        type = String2;
        for(; offset < source.length; offset++){
            var code2 = source.charCodeAt(offset);
            switch(charCodeCategory(code2)){
                // ending code point
                case endingCodePoint:
                    offset++;
                    return;
                // EOF
                // case EofCategory:
                // This is a parse error. Return the <string-token>.
                // return;
                // newline
                case WhiteSpaceCategory:
                    if (isNewline(code2)) {
                        offset += getNewlineLength(source, offset, code2);
                        type = BadString;
                        return;
                    }
                    break;
                // U+005C REVERSE SOLIDUS (\)
                case 92:
                    if (offset === source.length - 1) {
                        break;
                    }
                    var nextCode = getCharCode2(offset + 1);
                    if (isNewline(nextCode)) {
                        offset += getNewlineLength(source, offset + 1, nextCode);
                    } else if (isValidEscape(code2, nextCode)) {
                        offset = consumeEscaped(source, offset) - 1;
                    }
                    break;
            }
        }
    }
    function consumeUrlToken() {
        type = Url;
        offset = findWhiteSpaceEnd(source, offset);
        for(; offset < source.length; offset++){
            var code2 = source.charCodeAt(offset);
            switch(charCodeCategory(code2)){
                // U+0029 RIGHT PARENTHESIS ())
                case 41:
                    offset++;
                    return;
                // EOF
                // case EofCategory:
                // This is a parse error. Return the <url-token>.
                // return;
                // whitespace
                case WhiteSpaceCategory:
                    offset = findWhiteSpaceEnd(source, offset);
                    if (getCharCode2(offset) === 41 || offset >= source.length) {
                        if (offset < source.length) {
                            offset++;
                        }
                        return;
                    }
                    offset = consumeBadUrlRemnants(source, offset);
                    type = BadUrl;
                    return;
                // U+0022 QUOTATION MARK (")
                // U+0027 APOSTROPHE (')
                // U+0028 LEFT PARENTHESIS (()
                // non-printable code point
                case 34:
                case 39:
                case 40:
                case NonPrintableCategory:
                    offset = consumeBadUrlRemnants(source, offset);
                    type = BadUrl;
                    return;
                // U+005C REVERSE SOLIDUS (\)
                case 92:
                    if (isValidEscape(code2, getCharCode2(offset + 1))) {
                        offset = consumeEscaped(source, offset) - 1;
                        break;
                    }
                    offset = consumeBadUrlRemnants(source, offset);
                    type = BadUrl;
                    return;
            }
        }
    }
    source = String(source || "");
    var sourceLength = source.length;
    var start = isBOM(getCharCode2(0));
    var offset = start;
    var type;
    while(offset < sourceLength){
        var code2 = source.charCodeAt(offset);
        switch(charCodeCategory(code2)){
            // whitespace
            case WhiteSpaceCategory:
                type = WhiteSpace;
                offset = findWhiteSpaceEnd(source, offset + 1);
                break;
            // U+0022 QUOTATION MARK (")
            case 34:
                consumeStringToken();
                break;
            // U+0023 NUMBER SIGN (#)
            case 35:
                if (isName(getCharCode2(offset + 1)) || isValidEscape(getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                    type = Hash;
                    offset = consumeName(source, offset + 1);
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+0027 APOSTROPHE (')
            case 39:
                consumeStringToken();
                break;
            // U+0028 LEFT PARENTHESIS (()
            case 40:
                type = LeftParenthesis;
                offset++;
                break;
            // U+0029 RIGHT PARENTHESIS ())
            case 41:
                type = RightParenthesis;
                offset++;
                break;
            // U+002B PLUS SIGN (+)
            case 43:
                if (isNumberStart(code2, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                    consumeNumericToken();
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+002C COMMA (,)
            case 44:
                type = Comma;
                offset++;
                break;
            // U+002D HYPHEN-MINUS (-)
            case 45:
                if (isNumberStart(code2, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                    consumeNumericToken();
                } else {
                    if (getCharCode2(offset + 1) === 45 && getCharCode2(offset + 2) === 62) {
                        type = CDC;
                        offset = offset + 3;
                    } else {
                        if (isIdentifierStart(code2, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                            consumeIdentLikeToken();
                        } else {
                            type = Delim;
                            offset++;
                        }
                    }
                }
                break;
            // U+002E FULL STOP (.)
            case 46:
                if (isNumberStart(code2, getCharCode2(offset + 1), getCharCode2(offset + 2))) {
                    consumeNumericToken();
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+002F SOLIDUS (/)
            case 47:
                if (getCharCode2(offset + 1) === 42) {
                    type = Comment;
                    offset = source.indexOf("*/", offset + 2);
                    offset = offset === -1 ? source.length : offset + 2;
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+003A COLON (:)
            case 58:
                type = Colon;
                offset++;
                break;
            // U+003B SEMICOLON (;)
            case 59:
                type = Semicolon;
                offset++;
                break;
            // U+003C LESS-THAN SIGN (<)
            case 60:
                if (getCharCode2(offset + 1) === 33 && getCharCode2(offset + 2) === 45 && getCharCode2(offset + 3) === 45) {
                    type = CDO;
                    offset = offset + 4;
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+0040 COMMERCIAL AT (@)
            case 64:
                if (isIdentifierStart(getCharCode2(offset + 1), getCharCode2(offset + 2), getCharCode2(offset + 3))) {
                    type = AtKeyword;
                    offset = consumeName(source, offset + 1);
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+005B LEFT SQUARE BRACKET ([)
            case 91:
                type = LeftSquareBracket;
                offset++;
                break;
            // U+005C REVERSE SOLIDUS (\)
            case 92:
                if (isValidEscape(code2, getCharCode2(offset + 1))) {
                    consumeIdentLikeToken();
                } else {
                    type = Delim;
                    offset++;
                }
                break;
            // U+005D RIGHT SQUARE BRACKET (])
            case 93:
                type = RightSquareBracket;
                offset++;
                break;
            // U+007B LEFT CURLY BRACKET ({)
            case 123:
                type = LeftCurlyBracket;
                offset++;
                break;
            // U+007D RIGHT CURLY BRACKET (})
            case 125:
                type = RightCurlyBracket;
                offset++;
                break;
            // digit
            case DigitCategory:
                consumeNumericToken();
                break;
            // name-start code point
            case NameStartCategory:
                consumeIdentLikeToken();
                break;
            // EOF
            // case EofCategory:
            // Return an <EOF-token>.
            // break;
            // anything else
            default:
                type = Delim;
                offset++;
        }
        onToken(type, start, start = offset);
    }
}
// node_modules/css-tree/lib/utils/List.js
var releasedCursors = null;
var List = /*#__PURE__*/ function() {
    function _List() {
        _class_call_check(this, _List);
        this.head = null;
        this.tail = null;
        this.cursor = null;
    }
    _create_class(_List, [
        {
            key: "createItem",
            value: function createItem(data) {
                return _List.createItem(data);
            }
        },
        {
            // cursor helpers
            key: "allocateCursor",
            value: function allocateCursor(prev, next) {
                var cursor;
                if (releasedCursors !== null) {
                    cursor = releasedCursors;
                    releasedCursors = releasedCursors.cursor;
                    cursor.prev = prev;
                    cursor.next = next;
                    cursor.cursor = this.cursor;
                } else {
                    cursor = {
                        prev: prev,
                        next: next,
                        cursor: this.cursor
                    };
                }
                this.cursor = cursor;
                return cursor;
            }
        },
        {
            key: "releaseCursor",
            value: function releaseCursor() {
                var cursor = this.cursor;
                this.cursor = cursor.cursor;
                cursor.prev = null;
                cursor.next = null;
                cursor.cursor = releasedCursors;
                releasedCursors = cursor;
            }
        },
        {
            key: "updateCursors",
            value: function updateCursors(prevOld, prevNew, nextOld, nextNew) {
                var cursor = this.cursor;
                while(cursor !== null){
                    if (cursor.prev === prevOld) {
                        cursor.prev = prevNew;
                    }
                    if (cursor.next === nextOld) {
                        cursor.next = nextNew;
                    }
                    cursor = cursor.cursor;
                }
            }
        },
        {
            key: Symbol.iterator,
            value: function value() {
                var cursor;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            cursor = this.head;
                            _state.label = 1;
                        case 1:
                            if (!(cursor !== null)) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                cursor.data
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            cursor = cursor.next;
                            return [
                                3,
                                1
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            }
        },
        {
            key: "size",
            get: // getters
            function get() {
                var size = 0;
                for(var cursor = this.head; cursor !== null; cursor = cursor.next){
                    size++;
                }
                return size;
            }
        },
        {
            key: "isEmpty",
            get: function get() {
                return this.head === null;
            }
        },
        {
            key: "first",
            get: function get() {
                return this.head && this.head.data;
            }
        },
        {
            key: "last",
            get: function get() {
                return this.tail && this.tail.data;
            }
        },
        {
            // convertors
            key: "fromArray",
            value: function fromArray(array) {
                var cursor = null;
                this.head = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var data = _step.value;
                        var item = _List.createItem(data);
                        if (cursor !== null) {
                            cursor.next = item;
                        } else {
                            this.head = item;
                        }
                        item.prev = cursor;
                        cursor = item;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.tail = cursor;
                return this;
            }
        },
        {
            key: "toArray",
            value: function toArray() {
                return _to_consumable_array(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                return _to_consumable_array(this);
            }
        },
        {
            // array-like methods
            key: "forEach",
            value: function forEach(fn) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var cursor = this.allocateCursor(null, this.head);
                while(cursor.next !== null){
                    var item = cursor.next;
                    cursor.next = item.next;
                    fn.call(thisArg, item.data, item, this);
                }
                this.releaseCursor();
            }
        },
        {
            key: "forEachRight",
            value: function forEachRight(fn) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var cursor = this.allocateCursor(this.tail, null);
                while(cursor.prev !== null){
                    var item = cursor.prev;
                    cursor.prev = item.prev;
                    fn.call(thisArg, item.data, item, this);
                }
                this.releaseCursor();
            }
        },
        {
            key: "reduce",
            value: function reduce(fn, initialValue) {
                var thisArg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
                var cursor = this.allocateCursor(null, this.head);
                var acc = initialValue;
                var item;
                while(cursor.next !== null){
                    item = cursor.next;
                    cursor.next = item.next;
                    acc = fn.call(thisArg, acc, item.data, item, this);
                }
                this.releaseCursor();
                return acc;
            }
        },
        {
            key: "reduceRight",
            value: function reduceRight(fn, initialValue) {
                var thisArg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
                var cursor = this.allocateCursor(this.tail, null);
                var acc = initialValue;
                var item;
                while(cursor.prev !== null){
                    item = cursor.prev;
                    cursor.prev = item.prev;
                    acc = fn.call(thisArg, acc, item.data, item, this);
                }
                this.releaseCursor();
                return acc;
            }
        },
        {
            key: "some",
            value: function some(fn) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                for(var cursor = this.head; cursor !== null; cursor = cursor.next){
                    if (fn.call(thisArg, cursor.data, cursor, this)) {
                        return true;
                    }
                }
                return false;
            }
        },
        {
            key: "map",
            value: function map(fn) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var result = new _List();
                for(var cursor = this.head; cursor !== null; cursor = cursor.next){
                    result.appendData(fn.call(thisArg, cursor.data, cursor, this));
                }
                return result;
            }
        },
        {
            key: "filter",
            value: function filter(fn) {
                var thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                var result = new _List();
                for(var cursor = this.head; cursor !== null; cursor = cursor.next){
                    if (fn.call(thisArg, cursor.data, cursor, this)) {
                        result.appendData(cursor.data);
                    }
                }
                return result;
            }
        },
        {
            key: "nextUntil",
            value: function nextUntil(start, fn) {
                var thisArg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
                if (start === null) {
                    return;
                }
                var cursor = this.allocateCursor(null, start);
                while(cursor.next !== null){
                    var item = cursor.next;
                    cursor.next = item.next;
                    if (fn.call(thisArg, item.data, item, this)) {
                        break;
                    }
                }
                this.releaseCursor();
            }
        },
        {
            key: "prevUntil",
            value: function prevUntil(start, fn) {
                var thisArg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
                if (start === null) {
                    return;
                }
                var cursor = this.allocateCursor(start, null);
                while(cursor.prev !== null){
                    var item = cursor.prev;
                    cursor.prev = item.prev;
                    if (fn.call(thisArg, item.data, item, this)) {
                        break;
                    }
                }
                this.releaseCursor();
            }
        },
        {
            // mutation
            key: "clear",
            value: function clear() {
                this.head = null;
                this.tail = null;
            }
        },
        {
            key: "copy",
            value: function copy() {
                var result = new _List();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var data = _step.value;
                        result.appendData(data);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return result;
            }
        },
        {
            key: "prepend",
            value: function prepend(item) {
                this.updateCursors(null, item, this.head, item);
                if (this.head !== null) {
                    this.head.prev = item;
                    item.next = this.head;
                } else {
                    this.tail = item;
                }
                this.head = item;
                return this;
            }
        },
        {
            key: "prependData",
            value: function prependData(data) {
                return this.prepend(_List.createItem(data));
            }
        },
        {
            key: "append",
            value: function append(item) {
                return this.insert(item);
            }
        },
        {
            key: "appendData",
            value: function appendData(data) {
                return this.insert(_List.createItem(data));
            }
        },
        {
            key: "insert",
            value: function insert(item) {
                var before = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (before !== null) {
                    this.updateCursors(before.prev, item, before, item);
                    if (before.prev === null) {
                        if (this.head !== before) {
                            throw new Error("before doesn't belong to list");
                        }
                        this.head = item;
                        before.prev = item;
                        item.next = before;
                        this.updateCursors(null, item);
                    } else {
                        before.prev.next = item;
                        item.prev = before.prev;
                        before.prev = item;
                        item.next = before;
                    }
                } else {
                    this.updateCursors(this.tail, item, null, item);
                    if (this.tail !== null) {
                        this.tail.next = item;
                        item.prev = this.tail;
                    } else {
                        this.head = item;
                    }
                    this.tail = item;
                }
                return this;
            }
        },
        {
            key: "insertData",
            value: function insertData(data, before) {
                return this.insert(_List.createItem(data), before);
            }
        },
        {
            key: "remove",
            value: function remove(item) {
                this.updateCursors(item, item.prev, item, item.next);
                if (item.prev !== null) {
                    item.prev.next = item.next;
                } else {
                    if (this.head !== item) {
                        throw new Error("item doesn't belong to list");
                    }
                    this.head = item.next;
                }
                if (item.next !== null) {
                    item.next.prev = item.prev;
                } else {
                    if (this.tail !== item) {
                        throw new Error("item doesn't belong to list");
                    }
                    this.tail = item.prev;
                }
                item.prev = null;
                item.next = null;
                return item;
            }
        },
        {
            key: "push",
            value: function push(data) {
                this.insert(_List.createItem(data));
            }
        },
        {
            key: "pop",
            value: function pop() {
                return this.tail !== null ? this.remove(this.tail) : null;
            }
        },
        {
            key: "unshift",
            value: function unshift(data) {
                this.prepend(_List.createItem(data));
            }
        },
        {
            key: "shift",
            value: function shift() {
                return this.head !== null ? this.remove(this.head) : null;
            }
        },
        {
            key: "prependList",
            value: function prependList(list) {
                return this.insertList(list, this.head);
            }
        },
        {
            key: "appendList",
            value: function appendList(list) {
                return this.insertList(list);
            }
        },
        {
            key: "insertList",
            value: function insertList(list, before) {
                if (list.head === null) {
                    return this;
                }
                if (before !== undefined && before !== null) {
                    this.updateCursors(before.prev, list.tail, before, list.head);
                    if (before.prev !== null) {
                        before.prev.next = list.head;
                        list.head.prev = before.prev;
                    } else {
                        this.head = list.head;
                    }
                    before.prev = list.tail;
                    list.tail.next = before;
                } else {
                    this.updateCursors(this.tail, list.tail, null, list.head);
                    if (this.tail !== null) {
                        this.tail.next = list.head;
                        list.head.prev = this.tail;
                    } else {
                        this.head = list.head;
                    }
                    this.tail = list.tail;
                }
                list.head = null;
                list.tail = null;
                return this;
            }
        },
        {
            key: "replace",
            value: function replace(oldItem, newItemOrList) {
                if ("head" in newItemOrList) {
                    this.insertList(newItemOrList, oldItem);
                } else {
                    this.insert(newItemOrList, oldItem);
                }
                this.remove(oldItem);
            }
        }
    ], [
        {
            key: "createItem",
            value: function createItem(data) {
                return {
                    prev: null,
                    next: null,
                    data: data
                };
            }
        }
    ]);
    return _List;
}();
// node_modules/css-tree/lib/utils/create-custom-error.js
function createCustomError(name50, message) {
    var error = Object.create(SyntaxError.prototype);
    var errorStack = new Error();
    return Object.assign(error, {
        name: name50,
        message: message,
        get stack () {
            return (errorStack.stack || "").replace(/^(.+\n){1,3}/, "".concat(name50, ": ").concat(message, "\n"));
        }
    });
}
// node_modules/css-tree/lib/parser/SyntaxError.js
var MAX_LINE_LENGTH = 100;
var OFFSET_CORRECTION = 60;
var TAB_REPLACEMENT = "    ";
function sourceFragment(param, extraLines) {
    var source = param.source, line = param.line, column = param.column, baseLine = param.baseLine, baseColumn = param.baseColumn;
    function processLines(start, end) {
        return lines.slice(start, end).map(function(line2, idx) {
            return String(start + idx + 1).padStart(maxNumLength) + " |" + line2;
        }).join("\n");
    }
    var prelines = "\n".repeat(Math.max(baseLine - 1, 0));
    var precolumns = " ".repeat(Math.max(baseColumn - 1, 0));
    var lines = (prelines + precolumns + source).split(/\r\n?|\n|\f/);
    var startLine = Math.max(1, line - extraLines) - 1;
    var endLine = Math.min(line + extraLines, lines.length + 1);
    var maxNumLength = Math.max(4, String(endLine).length) + 1;
    var cutLeft = 0;
    column += (TAB_REPLACEMENT.length - 1) * (lines[line - 1].substr(0, column - 1).match(/\t/g) || []).length;
    if (column > MAX_LINE_LENGTH) {
        cutLeft = column - OFFSET_CORRECTION + 3;
        column = OFFSET_CORRECTION - 2;
    }
    for(var i = startLine; i <= endLine; i++){
        if (i >= 0 && i < lines.length) {
            lines[i] = lines[i].replace(/\t/g, TAB_REPLACEMENT);
            lines[i] = (cutLeft > 0 && lines[i].length > cutLeft ? "\u2026" : "") + lines[i].substr(cutLeft, MAX_LINE_LENGTH - 2) + (lines[i].length > cutLeft + MAX_LINE_LENGTH - 1 ? "\u2026" : "");
        }
    }
    return [
        processLines(startLine, line),
        new Array(column + maxNumLength + 2).join("-") + "^",
        processLines(line, endLine)
    ].filter(Boolean).join("\n").replace(/^(\s+\d+\s+\|\n)+/, "").replace(/\n(\s+\d+\s+\|)+$/, "");
}
function SyntaxError2(message, source, offset, line, column) {
    var baseLine = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1, baseColumn = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1;
    var error = Object.assign(createCustomError("SyntaxError", message), {
        source: source,
        offset: offset,
        line: line,
        column: column,
        sourceFragment: function sourceFragment1(extraLines) {
            return sourceFragment({
                source: source,
                line: line,
                column: column,
                baseLine: baseLine,
                baseColumn: baseColumn
            }, isNaN(extraLines) ? 0 : extraLines);
        },
        get formattedMessage () {
            return "Parse error: ".concat(message, "\n") + sourceFragment({
                source: source,
                line: line,
                column: column,
                baseLine: baseLine,
                baseColumn: baseColumn
            }, 2);
        }
    });
    return error;
}
// node_modules/css-tree/lib/parser/sequence.js
function readSequence(recognizer) {
    var children = this.createList();
    var space = false;
    var context = {
        recognizer: recognizer
    };
    while(!this.eof){
        switch(this.tokenType){
            case Comment:
                this.next();
                continue;
            case WhiteSpace:
                space = true;
                this.next();
                continue;
        }
        var child = recognizer.getNode.call(this, context);
        if (child === undefined) {
            break;
        }
        if (space) {
            if (recognizer.onWhiteSpace) {
                recognizer.onWhiteSpace.call(this, child, children, context);
            }
            space = false;
        }
        children.push(child);
    }
    if (space && recognizer.onWhiteSpace) {
        recognizer.onWhiteSpace.call(this, null, children, context);
    }
    return children;
}
// node_modules/css-tree/lib/parser/create.js
var NOOP = function() {};
var EXCLAMATIONMARK = 33;
var NUMBERSIGN = 35;
var SEMICOLON = 59;
var LEFTCURLYBRACKET = 123;
var NULL = 0;
function createParseContext(name50) {
    return function() {
        return this[name50]();
    };
}
function fetchParseValues(dict) {
    var result = /* @__PURE__ */ Object.create(null);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(dict)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name50 = _step.value;
            var item = dict[name50];
            var fn = item.parse || item;
            if (fn) {
                result[name50] = fn;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
function processConfig(config) {
    var parseConfig = {
        context: /* @__PURE__ */ Object.create(null),
        features: Object.assign(/* @__PURE__ */ Object.create(null), config.features),
        scope: Object.assign(/* @__PURE__ */ Object.create(null), config.scope),
        atrule: fetchParseValues(config.atrule),
        pseudo: fetchParseValues(config.pseudo),
        node: fetchParseValues(config.node)
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(config.parseContext)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name50 = _step_value[0], context = _step_value[1];
            switch(typeof context === "undefined" ? "undefined" : _type_of(context)){
                case "function":
                    parseConfig.context[name50] = context;
                    break;
                case "string":
                    parseConfig.context[name50] = createParseContext(context);
                    break;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return _object_spread({
        config: parseConfig
    }, parseConfig, parseConfig.node);
}
function createParser(config) {
    var source = "";
    var filename = "<unknown>";
    var needPositions = false;
    var onParseError = NOOP;
    var onParseErrorThrow = false;
    var locationMap = new OffsetToLocation();
    var parser = Object.assign(new TokenStream(), processConfig(config || {}), {
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,
        readSequence: readSequence,
        consumeUntilBalanceEnd: function() {
            return 0;
        },
        consumeUntilLeftCurlyBracket: function consumeUntilLeftCurlyBracket(code2) {
            return code2 === LEFTCURLYBRACKET ? 1 : 0;
        },
        consumeUntilLeftCurlyBracketOrSemicolon: function consumeUntilLeftCurlyBracketOrSemicolon(code2) {
            return code2 === LEFTCURLYBRACKET || code2 === SEMICOLON ? 1 : 0;
        },
        consumeUntilExclamationMarkOrSemicolon: function consumeUntilExclamationMarkOrSemicolon(code2) {
            return code2 === EXCLAMATIONMARK || code2 === SEMICOLON ? 1 : 0;
        },
        consumeUntilSemicolonIncluded: function consumeUntilSemicolonIncluded(code2) {
            return code2 === SEMICOLON ? 2 : 0;
        },
        createList: function createList() {
            return new List();
        },
        createSingleNodeList: function createSingleNodeList(node) {
            return new List().appendData(node);
        },
        getFirstListNode: function getFirstListNode(list) {
            return list && list.first;
        },
        getLastListNode: function getLastListNode(list) {
            return list && list.last;
        },
        parseWithFallback: function parseWithFallback(consumer, fallback) {
            var startIndex = this.tokenIndex;
            try {
                return consumer.call(this);
            } catch (e) {
                if (onParseErrorThrow) {
                    throw e;
                }
                this.skip(startIndex - this.tokenIndex);
                var fallbackNode = fallback.call(this);
                onParseErrorThrow = true;
                onParseError(e, fallbackNode);
                onParseErrorThrow = false;
                return fallbackNode;
            }
        },
        lookupNonWSType: function lookupNonWSType(offset) {
            var type;
            do {
                type = this.lookupType(offset++);
                if (type !== WhiteSpace && type !== Comment) {
                    return type;
                }
            }while (type !== NULL);
            return NULL;
        },
        charCodeAt: function charCodeAt(offset) {
            return offset >= 0 && offset < source.length ? source.charCodeAt(offset) : 0;
        },
        substring: function substring(offsetStart, offsetEnd) {
            return source.substring(offsetStart, offsetEnd);
        },
        substrToCursor: function substrToCursor(start) {
            return this.source.substring(start, this.tokenStart);
        },
        cmpChar: function cmpChar1(offset, charCode) {
            return cmpChar(source, offset, charCode);
        },
        cmpStr: function cmpStr1(offsetStart, offsetEnd, str) {
            return cmpStr(source, offsetStart, offsetEnd, str);
        },
        consume: function consume(tokenType2) {
            var start = this.tokenStart;
            this.eat(tokenType2);
            return this.substrToCursor(start);
        },
        consumeFunctionName: function consumeFunctionName() {
            var name50 = source.substring(this.tokenStart, this.tokenEnd - 1);
            this.eat(Function);
            return name50;
        },
        consumeNumber: function consumeNumber1(type) {
            var number2 = source.substring(this.tokenStart, consumeNumber(source, this.tokenStart));
            this.eat(type);
            return number2;
        },
        eat: function eat(tokenType2) {
            if (this.tokenType !== tokenType2) {
                var tokenName = names_default[tokenType2].slice(0, -6).replace(/-/g, " ").replace(/^./, function(m) {
                    return m.toUpperCase();
                });
                var message = "".concat(/[[\](){}]/.test(tokenName) ? '"'.concat(tokenName, '"') : tokenName, " is expected");
                var offset = this.tokenStart;
                switch(tokenType2){
                    case Ident:
                        if (this.tokenType === Function || this.tokenType === Url) {
                            offset = this.tokenEnd - 1;
                            message = "Identifier is expected but function found";
                        } else {
                            message = "Identifier is expected";
                        }
                        break;
                    case Hash:
                        if (this.isDelim(NUMBERSIGN)) {
                            this.next();
                            offset++;
                            message = "Name is expected";
                        }
                        break;
                    case Percentage:
                        if (this.tokenType === Number2) {
                            offset = this.tokenEnd;
                            message = "Percent sign is expected";
                        }
                        break;
                }
                this.error(message, offset);
            }
            this.next();
        },
        eatIdent: function eatIdent(name50) {
            if (this.tokenType !== Ident || this.lookupValue(0, name50) === false) {
                this.error('Identifier "'.concat(name50, '" is expected'));
            }
            this.next();
        },
        eatDelim: function eatDelim(code2) {
            if (!this.isDelim(code2)) {
                this.error('Delim "'.concat(String.fromCharCode(code2), '" is expected'));
            }
            this.next();
        },
        getLocation: function getLocation(start, end) {
            if (needPositions) {
                return locationMap.getLocationRange(start, end, filename);
            }
            return null;
        },
        getLocationFromList: function getLocationFromList(list) {
            if (needPositions) {
                var head = this.getFirstListNode(list);
                var tail = this.getLastListNode(list);
                return locationMap.getLocationRange(head !== null ? head.loc.start.offset - locationMap.startOffset : this.tokenStart, tail !== null ? tail.loc.end.offset - locationMap.startOffset : this.tokenStart, filename);
            }
            return null;
        },
        error: function error(message, offset) {
            var location = typeof offset !== "undefined" && offset < source.length ? locationMap.getLocation(offset) : this.eof ? locationMap.getLocation(findWhiteSpaceStart(source, source.length - 1)) : locationMap.getLocation(this.tokenStart);
            throw new SyntaxError2(message || "Unexpected input", source, location.offset, location.line, location.column, locationMap.startLine, locationMap.startColumn);
        }
    });
    var parse53 = function parse53(source_, options) {
        source = source_;
        options = options || {};
        parser.setSource(source, tokenize);
        locationMap.setSource(source, options.offset, options.line, options.column);
        filename = options.filename || "<unknown>";
        needPositions = Boolean(options.positions);
        onParseError = typeof options.onParseError === "function" ? options.onParseError : NOOP;
        onParseErrorThrow = false;
        parser.parseAtrulePrelude = "parseAtrulePrelude" in options ? Boolean(options.parseAtrulePrelude) : true;
        parser.parseRulePrelude = "parseRulePrelude" in options ? Boolean(options.parseRulePrelude) : true;
        parser.parseValue = "parseValue" in options ? Boolean(options.parseValue) : true;
        parser.parseCustomProperty = "parseCustomProperty" in options ? Boolean(options.parseCustomProperty) : false;
        var _options_context = options.context, context = _options_context === void 0 ? "default" : _options_context, onComment = options.onComment;
        if (context in parser.context === false) {
            throw new Error("Unknown context `" + context + "`");
        }
        if (typeof onComment === "function") {
            parser.forEachToken(function(type, start, end) {
                if (type === Comment) {
                    var loc = parser.getLocation(start, end);
                    var value = cmpStr(source, end - 2, end, "*/") ? source.slice(start + 2, end - 2) : source.slice(start + 2, end);
                    onComment(value, loc);
                }
            });
        }
        var ast = parser.context[context].call(parser, options);
        if (!parser.eof) {
            parser.error();
        }
        return ast;
    };
    return Object.assign(parse53, {
        SyntaxError: SyntaxError2,
        config: parser.config
    });
}
// node_modules/css-tree/lib/generator/sourceMap.js
var import_source_map_generator = __toESM(require_source_map_generator());
var trackNodes = /* @__PURE__ */ new Set([
    "Atrule",
    "Selector",
    "Declaration"
]);
function generateSourceMap(handlers) {
    var map = new import_source_map_generator.SourceMapGenerator();
    var generated = {
        line: 1,
        column: 0
    };
    var original = {
        line: 0,
        // should be zero to add first mapping
        column: 0
    };
    var activatedGenerated = {
        line: 1,
        column: 0
    };
    var activatedMapping = {
        generated: activatedGenerated
    };
    var line = 1;
    var column = 0;
    var sourceMappingActive = false;
    var origHandlersNode = handlers.node;
    handlers.node = function(node) {
        if (node.loc && node.loc.start && trackNodes.has(node.type)) {
            var nodeLine = node.loc.start.line;
            var nodeColumn = node.loc.start.column - 1;
            if (original.line !== nodeLine || original.column !== nodeColumn) {
                original.line = nodeLine;
                original.column = nodeColumn;
                generated.line = line;
                generated.column = column;
                if (sourceMappingActive) {
                    sourceMappingActive = false;
                    if (generated.line !== activatedGenerated.line || generated.column !== activatedGenerated.column) {
                        map.addMapping(activatedMapping);
                    }
                }
                sourceMappingActive = true;
                map.addMapping({
                    source: node.loc.source,
                    original: original,
                    generated: generated
                });
            }
        }
        origHandlersNode.call(this, node);
        if (sourceMappingActive && trackNodes.has(node.type)) {
            activatedGenerated.line = line;
            activatedGenerated.column = column;
        }
    };
    var origHandlersEmit = handlers.emit;
    handlers.emit = function(value, type, auto) {
        for(var i = 0; i < value.length; i++){
            if (value.charCodeAt(i) === 10) {
                line++;
                column = 0;
            } else {
                column++;
            }
        }
        origHandlersEmit(value, type, auto);
    };
    var origHandlersResult = handlers.result;
    handlers.result = function() {
        if (sourceMappingActive) {
            map.addMapping(activatedMapping);
        }
        return {
            css: origHandlersResult(),
            map: map
        };
    };
    return handlers;
}
// node_modules/css-tree/lib/generator/token-before.js
var token_before_exports = {};
__export(token_before_exports, {
    safe: function() {
        return safe;
    },
    spec: function() {
        return spec;
    }
});
var PLUSSIGN = 43;
var HYPHENMINUS = 45;
var code = function(type, value) {
    if (type === Delim) {
        type = value;
    }
    if (typeof type === "string") {
        var charCode = type.charCodeAt(0);
        return charCode > 127 ? 32768 : charCode << 8;
    }
    return type;
};
var specPairs = [
    [
        Ident,
        Ident
    ],
    [
        Ident,
        Function
    ],
    [
        Ident,
        Url
    ],
    [
        Ident,
        BadUrl
    ],
    [
        Ident,
        "-"
    ],
    [
        Ident,
        Number2
    ],
    [
        Ident,
        Percentage
    ],
    [
        Ident,
        Dimension
    ],
    [
        Ident,
        CDC
    ],
    [
        Ident,
        LeftParenthesis
    ],
    [
        AtKeyword,
        Ident
    ],
    [
        AtKeyword,
        Function
    ],
    [
        AtKeyword,
        Url
    ],
    [
        AtKeyword,
        BadUrl
    ],
    [
        AtKeyword,
        "-"
    ],
    [
        AtKeyword,
        Number2
    ],
    [
        AtKeyword,
        Percentage
    ],
    [
        AtKeyword,
        Dimension
    ],
    [
        AtKeyword,
        CDC
    ],
    [
        Hash,
        Ident
    ],
    [
        Hash,
        Function
    ],
    [
        Hash,
        Url
    ],
    [
        Hash,
        BadUrl
    ],
    [
        Hash,
        "-"
    ],
    [
        Hash,
        Number2
    ],
    [
        Hash,
        Percentage
    ],
    [
        Hash,
        Dimension
    ],
    [
        Hash,
        CDC
    ],
    [
        Dimension,
        Ident
    ],
    [
        Dimension,
        Function
    ],
    [
        Dimension,
        Url
    ],
    [
        Dimension,
        BadUrl
    ],
    [
        Dimension,
        "-"
    ],
    [
        Dimension,
        Number2
    ],
    [
        Dimension,
        Percentage
    ],
    [
        Dimension,
        Dimension
    ],
    [
        Dimension,
        CDC
    ],
    [
        "#",
        Ident
    ],
    [
        "#",
        Function
    ],
    [
        "#",
        Url
    ],
    [
        "#",
        BadUrl
    ],
    [
        "#",
        "-"
    ],
    [
        "#",
        Number2
    ],
    [
        "#",
        Percentage
    ],
    [
        "#",
        Dimension
    ],
    [
        "#",
        CDC
    ],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [
        "-",
        Ident
    ],
    [
        "-",
        Function
    ],
    [
        "-",
        Url
    ],
    [
        "-",
        BadUrl
    ],
    [
        "-",
        "-"
    ],
    [
        "-",
        Number2
    ],
    [
        "-",
        Percentage
    ],
    [
        "-",
        Dimension
    ],
    [
        "-",
        CDC
    ],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [
        Number2,
        Ident
    ],
    [
        Number2,
        Function
    ],
    [
        Number2,
        Url
    ],
    [
        Number2,
        BadUrl
    ],
    [
        Number2,
        Number2
    ],
    [
        Number2,
        Percentage
    ],
    [
        Number2,
        Dimension
    ],
    [
        Number2,
        "%"
    ],
    [
        Number2,
        CDC
    ],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [
        "@",
        Ident
    ],
    [
        "@",
        Function
    ],
    [
        "@",
        Url
    ],
    [
        "@",
        BadUrl
    ],
    [
        "@",
        "-"
    ],
    [
        "@",
        CDC
    ],
    // https://github.com/w3c/csswg-drafts/pull/6874
    [
        ".",
        Number2
    ],
    [
        ".",
        Percentage
    ],
    [
        ".",
        Dimension
    ],
    [
        "+",
        Number2
    ],
    [
        "+",
        Percentage
    ],
    [
        "+",
        Dimension
    ],
    [
        "/",
        "*"
    ]
];
var safePairs = specPairs.concat([
    [
        Ident,
        Hash
    ],
    [
        Dimension,
        Hash
    ],
    [
        Hash,
        Hash
    ],
    [
        AtKeyword,
        LeftParenthesis
    ],
    [
        AtKeyword,
        String2
    ],
    [
        AtKeyword,
        Colon
    ],
    [
        Percentage,
        Percentage
    ],
    [
        Percentage,
        Dimension
    ],
    [
        Percentage,
        Function
    ],
    [
        Percentage,
        "-"
    ],
    [
        RightParenthesis,
        Ident
    ],
    [
        RightParenthesis,
        Function
    ],
    [
        RightParenthesis,
        Percentage
    ],
    [
        RightParenthesis,
        Dimension
    ],
    [
        RightParenthesis,
        Hash
    ],
    [
        RightParenthesis,
        "-"
    ]
]);
function createMap(pairs) {
    var isWhiteSpaceRequired = new Set(pairs.map(function(param) {
        var _param = _sliced_to_array(param, 2), prev = _param[0], next = _param[1];
        return code(prev) << 16 | code(next);
    }));
    return function(prevCode, type, value) {
        var nextCode = code(type, value);
        var nextCharCode = value.charCodeAt(0);
        var emitWs = nextCharCode === HYPHENMINUS && type !== Ident && type !== Function && type !== CDC || nextCharCode === PLUSSIGN ? isWhiteSpaceRequired.has(prevCode << 16 | nextCharCode << 8) : isWhiteSpaceRequired.has(prevCode << 16 | nextCode);
        if (emitWs) {
            this.emit(" ", WhiteSpace, true);
        }
        return nextCode;
    };
}
var spec = createMap(specPairs);
var safe = createMap(safePairs);
// node_modules/css-tree/lib/generator/create.js
var REVERSESOLIDUS = 92;
function processChildren(node, delimeter) {
    var _this = this;
    if (typeof delimeter === "function") {
        var prev = null;
        node.children.forEach(function(node2) {
            if (prev !== null) {
                delimeter.call(_this, prev);
            }
            _this.node(node2);
            prev = node2;
        });
        return;
    }
    node.children.forEach(this.node, this);
}
function processChunk(chunk) {
    var _this = this;
    tokenize(chunk, function(type, start, end) {
        _this.token(type, chunk.slice(start, end));
    });
}
function createGenerator(config) {
    var types = /* @__PURE__ */ new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(config.node)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name50 = _step_value[0], item = _step_value[1];
            var fn = item.generate || item;
            if (typeof fn === "function") {
                types.set(name50, item.generate || item);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return function(node, options) {
        var buffer = "";
        var prevCode = 0;
        var handlers = {
            node: function node(node2) {
                if (types.has(node2.type)) {
                    types.get(node2.type).call(publicApi, node2);
                } else {
                    throw new Error("Unknown node type: " + node2.type);
                }
            },
            tokenBefore: safe,
            token: function token(type, value) {
                prevCode = this.tokenBefore(prevCode, type, value);
                this.emit(value, type, false);
                if (type === Delim && value.charCodeAt(0) === REVERSESOLIDUS) {
                    this.emit("\n", WhiteSpace, true);
                }
            },
            emit: function emit(value) {
                buffer += value;
            },
            result: function result() {
                return buffer;
            }
        };
        if (options) {
            if (typeof options.decorator === "function") {
                handlers = options.decorator(handlers);
            }
            if (options.sourceMap) {
                handlers = generateSourceMap(handlers);
            }
            if (options.mode in token_before_exports) {
                handlers.tokenBefore = token_before_exports[options.mode];
            }
        }
        var publicApi = {
            node: function(node2) {
                return handlers.node(node2);
            },
            children: processChildren,
            token: function(type, value) {
                return handlers.token(type, value);
            },
            tokenize: processChunk
        };
        handlers.node(node);
        return handlers.result();
    };
}
// node_modules/css-tree/lib/convertor/create.js
function createConvertor(walk3) {
    return {
        fromPlainObject: function fromPlainObject(ast) {
            walk3(ast, {
                enter: function enter(node) {
                    if (node.children && _instanceof(node.children, List) === false) {
                        node.children = new List().fromArray(node.children);
                    }
                }
            });
            return ast;
        },
        toPlainObject: function toPlainObject(ast) {
            walk3(ast, {
                leave: function leave(node) {
                    if (node.children && _instanceof(node.children, List)) {
                        node.children = node.children.toArray();
                    }
                }
            });
            return ast;
        }
    };
}
// node_modules/css-tree/lib/walker/create.js
var _Object_prototype = Object.prototype, hasOwnProperty2 = _Object_prototype.hasOwnProperty;
var noop = function noop() {};
function ensureFunction(value) {
    return typeof value === "function" ? value : noop;
}
function invokeForType(fn, type) {
    return function(node, item, list) {
        if (node.type === type) {
            fn.call(this, node, item, list);
        }
    };
}
function getWalkersFromStructure(name50, nodeType) {
    var structure50 = nodeType.structure;
    var walkers = [];
    for(var key in structure50){
        if (hasOwnProperty2.call(structure50, key) === false) {
            continue;
        }
        var fieldTypes = structure50[key];
        var walker = {
            name: key,
            type: false,
            nullable: false
        };
        if (!Array.isArray(fieldTypes)) {
            fieldTypes = [
                fieldTypes
            ];
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fieldTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var fieldType = _step.value;
                if (fieldType === null) {
                    walker.nullable = true;
                } else if (typeof fieldType === "string") {
                    walker.type = "node";
                } else if (Array.isArray(fieldType)) {
                    walker.type = "list";
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (walker.type) {
            walkers.push(walker);
        }
    }
    if (walkers.length) {
        return {
            context: nodeType.walkContext,
            fields: walkers
        };
    }
    return null;
}
function getTypesFromConfig(config) {
    var types = {};
    for(var name50 in config.node){
        if (hasOwnProperty2.call(config.node, name50)) {
            var nodeType = config.node[name50];
            if (!nodeType.structure) {
                throw new Error("Missed `structure` field in `" + name50 + "` node type definition");
            }
            types[name50] = getWalkersFromStructure(name50, nodeType);
        }
    }
    return types;
}
function createTypeIterator(config, reverse) {
    var fields = config.fields.slice();
    var contextName = config.context;
    var useContext = typeof contextName === "string";
    if (reverse) {
        fields.reverse();
    }
    return function(node, context, walk3, walkReducer) {
        var prevContextValue;
        if (useContext) {
            prevContextValue = context[contextName];
            context[contextName] = node;
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var field = _step.value;
                var ref = node[field.name];
                if (!field.nullable || ref) {
                    if (field.type === "list") {
                        var breakWalk = reverse ? ref.reduceRight(walkReducer, false) : ref.reduce(walkReducer, false);
                        if (breakWalk) {
                            return true;
                        }
                    } else if (walk3(ref)) {
                        return true;
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (useContext) {
            context[contextName] = prevContextValue;
        }
    };
}
function createFastTraveralMap(param) {
    var StyleSheet = param.StyleSheet, Atrule = param.Atrule, Rule = param.Rule, Block = param.Block, DeclarationList = param.DeclarationList;
    return {
        Atrule: {
            StyleSheet: StyleSheet,
            Atrule: Atrule,
            Rule: Rule,
            Block: Block
        },
        Rule: {
            StyleSheet: StyleSheet,
            Atrule: Atrule,
            Rule: Rule,
            Block: Block
        },
        Declaration: {
            StyleSheet: StyleSheet,
            Atrule: Atrule,
            Rule: Rule,
            Block: Block,
            DeclarationList: DeclarationList
        }
    };
}
function createWalker(config) {
    var types = getTypesFromConfig(config);
    var iteratorsNatural = {};
    var iteratorsReverse = {};
    var breakWalk = Symbol("break-walk");
    var skipNode = Symbol("skip-node");
    for(var name50 in types){
        if (hasOwnProperty2.call(types, name50) && types[name50] !== null) {
            iteratorsNatural[name50] = createTypeIterator(types[name50], false);
            iteratorsReverse[name50] = createTypeIterator(types[name50], true);
        }
    }
    var fastTraversalIteratorsNatural = createFastTraveralMap(iteratorsNatural);
    var fastTraversalIteratorsReverse = createFastTraveralMap(iteratorsReverse);
    var walk3 = function walk3(root, options) {
        function walkNode(node, item, list) {
            var enterRet = enter.call(context, node, item, list);
            if (enterRet === breakWalk) {
                return true;
            }
            if (enterRet === skipNode) {
                return false;
            }
            if (iterators.hasOwnProperty(node.type)) {
                if (iterators[node.type](node, context, walkNode, walkReducer)) {
                    return true;
                }
            }
            if (leave.call(context, node, item, list) === breakWalk) {
                return true;
            }
            return false;
        }
        var enter = noop;
        var leave = noop;
        var iterators = iteratorsNatural;
        var walkReducer = function(ret, data, item, list) {
            return ret || walkNode(data, item, list);
        };
        var context = {
            break: breakWalk,
            skip: skipNode,
            root: root,
            stylesheet: null,
            atrule: null,
            atrulePrelude: null,
            rule: null,
            selector: null,
            block: null,
            declaration: null,
            function: null
        };
        if (typeof options === "function") {
            enter = options;
        } else if (options) {
            enter = ensureFunction(options.enter);
            leave = ensureFunction(options.leave);
            if (options.reverse) {
                iterators = iteratorsReverse;
            }
            if (options.visit) {
                if (fastTraversalIteratorsNatural.hasOwnProperty(options.visit)) {
                    iterators = options.reverse ? fastTraversalIteratorsReverse[options.visit] : fastTraversalIteratorsNatural[options.visit];
                } else if (!types.hasOwnProperty(options.visit)) {
                    throw new Error("Bad value `" + options.visit + "` for `visit` option (should be: " + Object.keys(types).sort().join(", ") + ")");
                }
                enter = invokeForType(enter, options.visit);
                leave = invokeForType(leave, options.visit);
            }
        }
        if (enter === noop && leave === noop) {
            throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        }
        walkNode(root);
    };
    walk3.break = breakWalk;
    walk3.skip = skipNode;
    walk3.find = function(ast, fn) {
        var found = null;
        walk3(ast, function(node, item, list) {
            if (fn.call(this, node, item, list)) {
                found = node;
                return breakWalk;
            }
        });
        return found;
    };
    walk3.findLast = function(ast, fn) {
        var found = null;
        walk3(ast, {
            reverse: true,
            enter: function enter(node, item, list) {
                if (fn.call(this, node, item, list)) {
                    found = node;
                    return breakWalk;
                }
            }
        });
        return found;
    };
    walk3.findAll = function(ast, fn) {
        var found = [];
        walk3(ast, function(node, item, list) {
            if (fn.call(this, node, item, list)) {
                found.push(node);
            }
        });
        return found;
    };
    return walk3;
}
// node_modules/css-tree/lib/definition-syntax/generate.js
function noop2(value) {
    return value;
}
function generateMultiplier(multiplier) {
    var min = multiplier.min, max = multiplier.max, comma = multiplier.comma;
    if (min === 0 && max === 0) {
        return comma ? "#?" : "*";
    }
    if (min === 0 && max === 1) {
        return "?";
    }
    if (min === 1 && max === 0) {
        return comma ? "#" : "+";
    }
    if (min === 1 && max === 1) {
        return "";
    }
    return (comma ? "#" : "") + (min === max ? "{" + min + "}" : "{" + min + "," + (max !== 0 ? max : "") + "}");
}
function generateTypeOpts(node) {
    switch(node.type){
        case "Range":
            return " [" + (node.min === null ? "-\u221E" : node.min) + "," + (node.max === null ? "\u221E" : node.max) + "]";
        default:
            throw new Error("Unknown node type `" + node.type + "`");
    }
}
function generateSequence(node, decorate, forceBraces, compact) {
    var combinator = node.combinator === " " || compact ? node.combinator : " " + node.combinator + " ";
    var result = node.terms.map(function(term) {
        return internalGenerate(term, decorate, forceBraces, compact);
    }).join(combinator);
    if (node.explicit || forceBraces) {
        return (compact || result[0] === "," ? "[" : "[ ") + result + (compact ? "]" : " ]");
    }
    return result;
}
function internalGenerate(node, decorate, forceBraces, compact) {
    var result;
    switch(node.type){
        case "Group":
            result = generateSequence(node, decorate, forceBraces, compact) + (node.disallowEmpty ? "!" : "");
            break;
        case "Multiplier":
            return internalGenerate(node.term, decorate, forceBraces, compact) + decorate(generateMultiplier(node), node);
        case "Boolean":
            result = "<boolean-expr[" + internalGenerate(node.term, decorate, forceBraces, compact) + "]>";
            break;
        case "Type":
            result = "<" + node.name + (node.opts ? decorate(generateTypeOpts(node.opts), node.opts) : "") + ">";
            break;
        case "Property":
            result = "<'" + node.name + "'>";
            break;
        case "Keyword":
            result = node.name;
            break;
        case "AtKeyword":
            result = "@" + node.name;
            break;
        case "Function":
            result = node.name + "(";
            break;
        case "String":
        case "Token":
            result = node.value;
            break;
        case "Comma":
            result = ",";
            break;
        default:
            throw new Error("Unknown node type `" + node.type + "`");
    }
    return decorate(result, node);
}
function generate(node, options) {
    var decorate = noop2;
    var forceBraces = false;
    var compact = false;
    if (typeof options === "function") {
        decorate = options;
    } else if (options) {
        forceBraces = Boolean(options.forceBraces);
        compact = Boolean(options.compact);
        if (typeof options.decorate === "function") {
            decorate = options.decorate;
        }
    }
    return internalGenerate(node, decorate, forceBraces, compact);
}
// node_modules/css-tree/lib/lexer/error.js
var defaultLoc = {
    offset: 0,
    line: 1,
    column: 1
};
function locateMismatch(matchResult, node) {
    var tokens = matchResult.tokens;
    var longestMatch = matchResult.longestMatch;
    var mismatchNode = longestMatch < tokens.length ? tokens[longestMatch].node || null : null;
    var badNode = mismatchNode !== node ? mismatchNode : null;
    var mismatchOffset = 0;
    var mismatchLength = 0;
    var entries = 0;
    var css = "";
    var start;
    var end;
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i].value;
        if (i === longestMatch) {
            mismatchLength = token.length;
            mismatchOffset = css.length;
        }
        if (badNode !== null && tokens[i].node === badNode) {
            if (i <= longestMatch) {
                entries++;
            } else {
                entries = 0;
            }
        }
        css += token;
    }
    if (longestMatch === tokens.length || entries > 1) {
        start = fromLoc(badNode || node, "end") || buildLoc(defaultLoc, css);
        end = buildLoc(start);
    } else {
        start = fromLoc(badNode, "start") || buildLoc(fromLoc(node, "start") || defaultLoc, css.slice(0, mismatchOffset));
        end = fromLoc(badNode, "end") || buildLoc(start, css.substr(mismatchOffset, mismatchLength));
    }
    return {
        css: css,
        mismatchOffset: mismatchOffset,
        mismatchLength: mismatchLength,
        start: start,
        end: end
    };
}
function fromLoc(node, point) {
    var value = node && node.loc && node.loc[point];
    if (value) {
        return "line" in value ? buildLoc(value) : value;
    }
    return null;
}
function buildLoc(param, extra) {
    var offset = param.offset, line = param.line, column = param.column;
    var loc = {
        offset: offset,
        line: line,
        column: column
    };
    if (extra) {
        var lines = extra.split(/\n|\r\n?|\f/);
        loc.offset += extra.length;
        loc.line += lines.length - 1;
        loc.column = lines.length === 1 ? loc.column + extra.length : lines.pop().length + 1;
    }
    return loc;
}
var SyntaxReferenceError = function SyntaxReferenceError(type, referenceName) {
    var error = createCustomError("SyntaxReferenceError", type + (referenceName ? " `" + referenceName + "`" : ""));
    error.reference = referenceName;
    return error;
};
var SyntaxMatchError = function SyntaxMatchError(message, syntax, node, matchResult) {
    var error = createCustomError("SyntaxMatchError", message);
    var _locateMismatch = locateMismatch(matchResult, node), css = _locateMismatch.css, mismatchOffset = _locateMismatch.mismatchOffset, mismatchLength = _locateMismatch.mismatchLength, start = _locateMismatch.start, end = _locateMismatch.end;
    error.rawMessage = message;
    error.syntax = syntax ? generate(syntax) : "<generic>";
    error.css = css;
    error.mismatchOffset = mismatchOffset;
    error.mismatchLength = mismatchLength;
    error.message = message + "\n  syntax: " + error.syntax + "\n   value: " + (css || "<empty string>") + "\n  --------" + new Array(error.mismatchOffset + 1).join("-") + "^";
    Object.assign(error, start);
    error.loc = {
        source: node && node.loc && node.loc.source || "<unknown>",
        start: start,
        end: end
    };
    return error;
};
// node_modules/css-tree/lib/utils/names.js
var keywords = /* @__PURE__ */ new Map();
var properties = /* @__PURE__ */ new Map();
var HYPHENMINUS2 = 45;
var keyword = getKeywordDescriptor;
var property = getPropertyDescriptor;
function isCustomProperty(str, offset) {
    offset = offset || 0;
    return str.length - offset >= 2 && str.charCodeAt(offset) === HYPHENMINUS2 && str.charCodeAt(offset + 1) === HYPHENMINUS2;
}
function getVendorPrefix(str, offset) {
    offset = offset || 0;
    if (str.length - offset >= 3) {
        if (str.charCodeAt(offset) === HYPHENMINUS2 && str.charCodeAt(offset + 1) !== HYPHENMINUS2) {
            var secondDashIndex = str.indexOf("-", offset + 2);
            if (secondDashIndex !== -1) {
                return str.substring(offset, secondDashIndex + 1);
            }
        }
    }
    return "";
}
function getKeywordDescriptor(keyword2) {
    if (keywords.has(keyword2)) {
        return keywords.get(keyword2);
    }
    var name50 = keyword2.toLowerCase();
    var descriptor = keywords.get(name50);
    if (descriptor === undefined) {
        var custom = isCustomProperty(name50, 0);
        var vendor = !custom ? getVendorPrefix(name50, 0) : "";
        descriptor = Object.freeze({
            basename: name50.substr(vendor.length),
            name: name50,
            prefix: vendor,
            vendor: vendor,
            custom: custom
        });
    }
    keywords.set(keyword2, descriptor);
    return descriptor;
}
function getPropertyDescriptor(property2) {
    if (properties.has(property2)) {
        return properties.get(property2);
    }
    var name50 = property2;
    var hack = property2[0];
    if (hack === "/") {
        hack = property2[1] === "/" ? "//" : "/";
    } else if (hack !== "_" && hack !== "*" && hack !== "$" && hack !== "#" && hack !== "+" && hack !== "&") {
        hack = "";
    }
    var custom = isCustomProperty(name50, hack.length);
    if (!custom) {
        name50 = name50.toLowerCase();
        if (properties.has(name50)) {
            var descriptor2 = properties.get(name50);
            properties.set(property2, descriptor2);
            return descriptor2;
        }
    }
    var vendor = !custom ? getVendorPrefix(name50, hack.length) : "";
    var prefix = name50.substr(0, hack.length + vendor.length);
    var descriptor = Object.freeze({
        basename: name50.substr(prefix.length),
        name: name50.substr(hack.length),
        hack: hack,
        vendor: vendor,
        prefix: prefix,
        custom: custom
    });
    properties.set(property2, descriptor);
    return descriptor;
}
// node_modules/css-tree/lib/lexer/generic-const.js
var cssWideKeywords = [
    "initial",
    "inherit",
    "unset",
    "revert",
    "revert-layer"
];
// node_modules/css-tree/lib/lexer/generic-an-plus-b.js
var PLUSSIGN2 = 43;
var HYPHENMINUS3 = 45;
var N2 = 110;
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;
function isDelim(token, code2) {
    return token !== null && token.type === Delim && token.value.charCodeAt(0) === code2;
}
function skipSC(token, offset, getNextToken) {
    while(token !== null && (token.type === WhiteSpace || token.type === Comment)){
        token = getNextToken(++offset);
    }
    return offset;
}
function checkInteger(token, valueOffset, disallowSign, offset) {
    if (!token) {
        return 0;
    }
    var code2 = token.value.charCodeAt(valueOffset);
    if (code2 === PLUSSIGN2 || code2 === HYPHENMINUS3) {
        if (disallowSign) {
            return 0;
        }
        valueOffset++;
    }
    for(; valueOffset < token.value.length; valueOffset++){
        if (!isDigit(token.value.charCodeAt(valueOffset))) {
            return 0;
        }
    }
    return offset + 1;
}
function consumeB(token, offset_, getNextToken) {
    var sign = false;
    var offset = skipSC(token, offset_, getNextToken);
    token = getNextToken(offset);
    if (token === null) {
        return offset_;
    }
    if (token.type !== Number2) {
        if (isDelim(token, PLUSSIGN2) || isDelim(token, HYPHENMINUS3)) {
            sign = true;
            offset = skipSC(getNextToken(++offset), offset, getNextToken);
            token = getNextToken(offset);
            if (token === null || token.type !== Number2) {
                return 0;
            }
        } else {
            return offset_;
        }
    }
    if (!sign) {
        var code2 = token.value.charCodeAt(0);
        if (code2 !== PLUSSIGN2 && code2 !== HYPHENMINUS3) {
            return 0;
        }
    }
    return checkInteger(token, sign ? 0 : 1, sign, offset);
}
function anPlusB(token, getNextToken) {
    var offset = 0;
    if (!token) {
        return 0;
    }
    if (token.type === Number2) {
        return checkInteger(token, 0, ALLOW_SIGN, offset);
    } else if (token.type === Ident && token.value.charCodeAt(0) === HYPHENMINUS3) {
        if (!cmpChar(token.value, 1, N2)) {
            return 0;
        }
        switch(token.value.length){
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                return consumeB(getNextToken(++offset), offset, getNextToken);
            // -n- <signless-integer>
            case 3:
                if (token.value.charCodeAt(2) !== HYPHENMINUS3) {
                    return 0;
                }
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            // <dashndashdigit-ident>
            default:
                if (token.value.charCodeAt(2) !== HYPHENMINUS3) {
                    return 0;
                }
                return checkInteger(token, 3, DISALLOW_SIGN, offset);
        }
    } else if (token.type === Ident || isDelim(token, PLUSSIGN2) && getNextToken(offset + 1).type === Ident) {
        if (token.type !== Ident) {
            token = getNextToken(++offset);
        }
        if (token === null || !cmpChar(token.value, 0, N2)) {
            return 0;
        }
        switch(token.value.length){
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                return consumeB(getNextToken(++offset), offset, getNextToken);
            // '+'? n- <signless-integer>
            case 2:
                if (token.value.charCodeAt(1) !== HYPHENMINUS3) {
                    return 0;
                }
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            // '+'? <ndashdigit-ident>
            default:
                if (token.value.charCodeAt(1) !== HYPHENMINUS3) {
                    return 0;
                }
                return checkInteger(token, 2, DISALLOW_SIGN, offset);
        }
    } else if (token.type === Dimension) {
        var code2 = token.value.charCodeAt(0);
        var sign = code2 === PLUSSIGN2 || code2 === HYPHENMINUS3 ? 1 : 0;
        var i = sign;
        for(; i < token.value.length; i++){
            if (!isDigit(token.value.charCodeAt(i))) {
                break;
            }
        }
        if (i === sign) {
            return 0;
        }
        if (!cmpChar(token.value, i, N2)) {
            return 0;
        }
        if (i + 1 === token.value.length) {
            return consumeB(getNextToken(++offset), offset, getNextToken);
        } else {
            if (token.value.charCodeAt(i + 1) !== HYPHENMINUS3) {
                return 0;
            }
            if (i + 2 === token.value.length) {
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);
                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            } else {
                return checkInteger(token, i + 2, DISALLOW_SIGN, offset);
            }
        }
    }
    return 0;
}
// node_modules/css-tree/lib/lexer/generic-urange.js
var PLUSSIGN3 = 43;
var HYPHENMINUS4 = 45;
var QUESTIONMARK = 63;
var U = 117;
function isDelim2(token, code2) {
    return token !== null && token.type === Delim && token.value.charCodeAt(0) === code2;
}
function startsWith(token, code2) {
    return token.value.charCodeAt(0) === code2;
}
function hexSequence(token, offset, allowDash) {
    var hexlen = 0;
    for(var pos = offset; pos < token.value.length; pos++){
        var code2 = token.value.charCodeAt(pos);
        if (code2 === HYPHENMINUS4 && allowDash && hexlen !== 0) {
            hexSequence(token, offset + hexlen + 1, false);
            return 6;
        }
        if (!isHexDigit(code2)) {
            return 0;
        }
        if (++hexlen > 6) {
            return 0;
        }
    }
    return hexlen;
}
function withQuestionMarkSequence(consumed, length2, getNextToken) {
    if (!consumed) {
        return 0;
    }
    while(isDelim2(getNextToken(length2), QUESTIONMARK)){
        if (++consumed > 6) {
            return 0;
        }
        length2++;
    }
    return length2;
}
function urange(token, getNextToken) {
    var length2 = 0;
    if (token === null || token.type !== Ident || !cmpChar(token.value, 0, U)) {
        return 0;
    }
    token = getNextToken(++length2);
    if (token === null) {
        return 0;
    }
    if (isDelim2(token, PLUSSIGN3)) {
        token = getNextToken(++length2);
        if (token === null) {
            return 0;
        }
        if (token.type === Ident) {
            return withQuestionMarkSequence(hexSequence(token, 0, true), ++length2, getNextToken);
        }
        if (isDelim2(token, QUESTIONMARK)) {
            return withQuestionMarkSequence(1, ++length2, getNextToken);
        }
        return 0;
    }
    if (token.type === Number2) {
        var consumedHexLength = hexSequence(token, 1, true);
        if (consumedHexLength === 0) {
            return 0;
        }
        token = getNextToken(++length2);
        if (token === null) {
            return length2;
        }
        if (token.type === Dimension || token.type === Number2) {
            if (!startsWith(token, HYPHENMINUS4) || !hexSequence(token, 1, false)) {
                return 0;
            }
            return length2 + 1;
        }
        return withQuestionMarkSequence(consumedHexLength, length2, getNextToken);
    }
    if (token.type === Dimension) {
        return withQuestionMarkSequence(hexSequence(token, 1, true), ++length2, getNextToken);
    }
    return 0;
}
// node_modules/css-tree/lib/lexer/generic.js
var calcFunctionNames = [
    "calc(",
    "-moz-calc(",
    "-webkit-calc("
];
var balancePair2 = /* @__PURE__ */ new Map([
    [
        Function,
        RightParenthesis
    ],
    [
        LeftParenthesis,
        RightParenthesis
    ],
    [
        LeftSquareBracket,
        RightSquareBracket
    ],
    [
        LeftCurlyBracket,
        RightCurlyBracket
    ]
]);
function charCodeAt(str, index) {
    return index < str.length ? str.charCodeAt(index) : 0;
}
function eqStr(actual, expected) {
    return cmpStr(actual, 0, actual.length, expected);
}
function eqStrAny(actual, expected) {
    for(var i = 0; i < expected.length; i++){
        if (eqStr(actual, expected[i])) {
            return true;
        }
    }
    return false;
}
function isPostfixIeHack(str, offset) {
    if (offset !== str.length - 2) {
        return false;
    }
    return charCodeAt(str, offset) === 92 && // U+005C REVERSE SOLIDUS (\)
    isDigit(charCodeAt(str, offset + 1));
}
function outOfRange(opts, value, numEnd) {
    if (opts && opts.type === "Range") {
        var num = Number(numEnd !== undefined && numEnd !== value.length ? value.substr(0, numEnd) : value);
        if (isNaN(num)) {
            return true;
        }
        if (opts.min !== null && num < opts.min && typeof opts.min !== "string") {
            return true;
        }
        if (opts.max !== null && num > opts.max && typeof opts.max !== "string") {
            return true;
        }
    }
    return false;
}
function consumeFunction(token, getNextToken) {
    var balanceCloseType = 0;
    var balanceStash = [];
    var length2 = 0;
    scan: do {
        switch(token.type){
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                if (balanceStash.length === 0) {
                    length2++;
                    break scan;
                }
                break;
            case Function:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair2.get(token.type);
                break;
        }
        length2++;
    }while (token = getNextToken(length2));
    return length2;
}
function calc(next) {
    return function(token, getNextToken, opts) {
        if (token === null) {
            return 0;
        }
        if (token.type === Function && eqStrAny(token.value, calcFunctionNames)) {
            return consumeFunction(token, getNextToken);
        }
        return next(token, getNextToken, opts);
    };
}
function tokenType(expectedTokenType) {
    return function(token) {
        if (token === null || token.type !== expectedTokenType) {
            return 0;
        }
        return 1;
    };
}
function customIdent(token) {
    if (token === null || token.type !== Ident) {
        return 0;
    }
    var name50 = token.value.toLowerCase();
    if (eqStrAny(name50, cssWideKeywords)) {
        return 0;
    }
    if (eqStr(name50, "default")) {
        return 0;
    }
    return 1;
}
function dashedIdent(token) {
    if (token === null || token.type !== Ident) {
        return 0;
    }
    if (charCodeAt(token.value, 0) !== 45 || charCodeAt(token.value, 1) !== 45) {
        return 0;
    }
    return 1;
}
function customPropertyName(token) {
    if (!dashedIdent(token)) {
        return 0;
    }
    if (token.value === "--") {
        return 0;
    }
    return 1;
}
function hexColor(token) {
    if (token === null || token.type !== Hash) {
        return 0;
    }
    var length2 = token.value.length;
    if (length2 !== 4 && length2 !== 5 && length2 !== 7 && length2 !== 9) {
        return 0;
    }
    for(var i = 1; i < length2; i++){
        if (!isHexDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }
    return 1;
}
function idSelector(token) {
    if (token === null || token.type !== Hash) {
        return 0;
    }
    if (!isIdentifierStart(charCodeAt(token.value, 1), charCodeAt(token.value, 2), charCodeAt(token.value, 3))) {
        return 0;
    }
    return 1;
}
function declarationValue(token, getNextToken) {
    if (!token) {
        return 0;
    }
    var balanceCloseType = 0;
    var balanceStash = [];
    var length2 = 0;
    scan: do {
        switch(token.type){
            // ... <bad-string-token>, <bad-url-token>,
            case BadString:
            case BadUrl:
                break scan;
            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                break;
            // ... or top-level <semicolon-token> tokens
            case Semicolon:
                if (balanceCloseType === 0) {
                    break scan;
                }
                break;
            // ... or <delim-token> tokens with a value of "!"
            case Delim:
                if (balanceCloseType === 0 && token.value === "!") {
                    break scan;
                }
                break;
            case Function:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair2.get(token.type);
                break;
        }
        length2++;
    }while (token = getNextToken(length2));
    return length2;
}
function anyValue(token, getNextToken) {
    if (!token) {
        return 0;
    }
    var balanceCloseType = 0;
    var balanceStash = [];
    var length2 = 0;
    scan: do {
        switch(token.type){
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case BadString:
            case BadUrl:
                break scan;
            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }
                balanceCloseType = balanceStash.pop();
                break;
            case Function:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair2.get(token.type);
                break;
        }
        length2++;
    }while (token = getNextToken(length2));
    return length2;
}
function dimension(type) {
    if (type) {
        type = new Set(type);
    }
    return function(token, getNextToken, opts) {
        if (token === null || token.type !== Dimension) {
            return 0;
        }
        var numberEnd = consumeNumber(token.value, 0);
        if (type !== null) {
            var reverseSolidusOffset = token.value.indexOf("\\", numberEnd);
            var unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset) ? token.value.substr(numberEnd) : token.value.substring(numberEnd, reverseSolidusOffset);
            if (type.has(unit.toLowerCase()) === false) {
                return 0;
            }
        }
        if (outOfRange(opts, token.value, numberEnd)) {
            return 0;
        }
        return 1;
    };
}
function percentage(token, getNextToken, opts) {
    if (token === null || token.type !== Percentage) {
        return 0;
    }
    if (outOfRange(opts, token.value, token.value.length - 1)) {
        return 0;
    }
    return 1;
}
function zero(next) {
    if (typeof next !== "function") {
        next = function next() {
            return 0;
        };
    }
    return function(token, getNextToken, opts) {
        if (token !== null && token.type === Number2) {
            if (Number(token.value) === 0) {
                return 1;
            }
        }
        return next(token, getNextToken, opts);
    };
}
function number(token, getNextToken, opts) {
    if (token === null) {
        return 0;
    }
    var numberEnd = consumeNumber(token.value, 0);
    var isNumber = numberEnd === token.value.length;
    if (!isNumber && !isPostfixIeHack(token.value, numberEnd)) {
        return 0;
    }
    if (outOfRange(opts, token.value, numberEnd)) {
        return 0;
    }
    return 1;
}
function integer(token, getNextToken, opts) {
    if (token === null || token.type !== Number2) {
        return 0;
    }
    var i = charCodeAt(token.value, 0) === 43 || // U+002B PLUS SIGN (+)
    charCodeAt(token.value, 0) === 45 ? 1 : 0;
    for(; i < token.value.length; i++){
        if (!isDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }
    if (outOfRange(opts, token.value, i)) {
        return 0;
    }
    return 1;
}
var tokenTypes = {
    "ident-token": tokenType(Ident),
    "function-token": tokenType(Function),
    "at-keyword-token": tokenType(AtKeyword),
    "hash-token": tokenType(Hash),
    "string-token": tokenType(String2),
    "bad-string-token": tokenType(BadString),
    "url-token": tokenType(Url),
    "bad-url-token": tokenType(BadUrl),
    "delim-token": tokenType(Delim),
    "number-token": tokenType(Number2),
    "percentage-token": tokenType(Percentage),
    "dimension-token": tokenType(Dimension),
    "whitespace-token": tokenType(WhiteSpace),
    "CDO-token": tokenType(CDO),
    "CDC-token": tokenType(CDC),
    "colon-token": tokenType(Colon),
    "semicolon-token": tokenType(Semicolon),
    "comma-token": tokenType(Comma),
    "[-token": tokenType(LeftSquareBracket),
    "]-token": tokenType(RightSquareBracket),
    "(-token": tokenType(LeftParenthesis),
    ")-token": tokenType(RightParenthesis),
    "{-token": tokenType(LeftCurlyBracket),
    "}-token": tokenType(RightCurlyBracket)
};
var productionTypes = {
    // token type aliases
    "string": tokenType(String2),
    "ident": tokenType(Ident),
    // percentage
    "percentage": calc(percentage),
    // numeric
    "zero": zero(),
    "number": calc(number),
    "integer": calc(integer),
    // complex types
    "custom-ident": customIdent,
    "dashed-ident": dashedIdent,
    "custom-property-name": customPropertyName,
    "hex-color": hexColor,
    "id-selector": idSelector,
    // element( <id-selector> )
    "an-plus-b": anPlusB,
    "urange": urange,
    "declaration-value": declarationValue,
    "any-value": anyValue
};
function createDemensionTypes(units) {
    var _ref = units || {}, angle2 = _ref.angle, decibel2 = _ref.decibel, frequency2 = _ref.frequency, flex2 = _ref.flex, length2 = _ref.length, resolution2 = _ref.resolution, semitones2 = _ref.semitones, time2 = _ref.time;
    return {
        "dimension": calc(dimension(null)),
        "angle": calc(dimension(angle2)),
        "decibel": calc(dimension(decibel2)),
        "frequency": calc(dimension(frequency2)),
        "flex": calc(dimension(flex2)),
        "length": calc(zero(dimension(length2))),
        "resolution": calc(dimension(resolution2)),
        "semitones": calc(dimension(semitones2)),
        "time": calc(dimension(time2))
    };
}
function createGenericTypes(units) {
    return _object_spread({}, tokenTypes, productionTypes, createDemensionTypes(units));
}
// node_modules/css-tree/lib/lexer/units.js
var units_exports = {};
__export(units_exports, {
    angle: function() {
        return angle;
    },
    decibel: function() {
        return decibel;
    },
    flex: function() {
        return flex;
    },
    frequency: function() {
        return frequency;
    },
    length: function() {
        return length;
    },
    resolution: function() {
        return resolution;
    },
    semitones: function() {
        return semitones;
    },
    time: function() {
        return time;
    }
});
var length = [
    // absolute length units https://www.w3.org/TR/css-values-3/#lengths
    "cm",
    "mm",
    "q",
    "in",
    "pt",
    "pc",
    "px",
    // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
    "em",
    "rem",
    "ex",
    "rex",
    "cap",
    "rcap",
    "ch",
    "rch",
    "ic",
    "ric",
    "lh",
    "rlh",
    // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
    "vw",
    "svw",
    "lvw",
    "dvw",
    "vh",
    "svh",
    "lvh",
    "dvh",
    "vi",
    "svi",
    "lvi",
    "dvi",
    "vb",
    "svb",
    "lvb",
    "dvb",
    "vmin",
    "svmin",
    "lvmin",
    "dvmin",
    "vmax",
    "svmax",
    "lvmax",
    "dvmax",
    // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
];
var angle = [
    "deg",
    "grad",
    "rad",
    "turn"
];
var time = [
    "s",
    "ms"
];
var frequency = [
    "hz",
    "khz"
];
var resolution = [
    "dpi",
    "dpcm",
    "dppx",
    "x"
];
var flex = [
    "fr"
];
var decibel = [
    "db"
];
var semitones = [
    "st"
];
// node_modules/css-tree/lib/definition-syntax/SyntaxError.js
function SyntaxError3(message, input, offset) {
    return Object.assign(createCustomError("SyntaxError", message), {
        input: input,
        offset: offset,
        rawMessage: message,
        message: message + "\n  " + input + "\n--" + new Array((offset || input.length) + 1).join("-") + "^"
    });
}
// node_modules/css-tree/lib/definition-syntax/scanner.js
var TAB = 9;
var N3 = 10;
var F2 = 12;
var R2 = 13;
var SPACE = 32;
var NAME_CHAR = new Uint8Array(128).map(function(_, idx) {
    return /[a-zA-Z0-9\-]/.test(String.fromCharCode(idx)) ? 1 : 0;
});
var Scanner = /*#__PURE__*/ function() {
    function Scanner(str) {
        _class_call_check(this, Scanner);
        this.str = str;
        this.pos = 0;
    }
    _create_class(Scanner, [
        {
            key: "charCodeAt",
            value: function charCodeAt(pos) {
                return pos < this.str.length ? this.str.charCodeAt(pos) : 0;
            }
        },
        {
            key: "charCode",
            value: function charCode() {
                return this.charCodeAt(this.pos);
            }
        },
        {
            key: "isNameCharCode",
            value: function isNameCharCode() {
                var code2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.charCode();
                return code2 < 128 && NAME_CHAR[code2] === 1;
            }
        },
        {
            key: "nextCharCode",
            value: function nextCharCode() {
                return this.charCodeAt(this.pos + 1);
            }
        },
        {
            key: "nextNonWsCode",
            value: function nextNonWsCode(pos) {
                return this.charCodeAt(this.findWsEnd(pos));
            }
        },
        {
            key: "skipWs",
            value: function skipWs() {
                this.pos = this.findWsEnd(this.pos);
            }
        },
        {
            key: "findWsEnd",
            value: function findWsEnd(pos) {
                for(; pos < this.str.length; pos++){
                    var code2 = this.str.charCodeAt(pos);
                    if (code2 !== R2 && code2 !== N3 && code2 !== F2 && code2 !== SPACE && code2 !== TAB) {
                        break;
                    }
                }
                return pos;
            }
        },
        {
            key: "substringToPos",
            value: function substringToPos(end) {
                return this.str.substring(this.pos, this.pos = end);
            }
        },
        {
            key: "eat",
            value: function eat(code2) {
                if (this.charCode() !== code2) {
                    this.error("Expect `" + String.fromCharCode(code2) + "`");
                }
                this.pos++;
            }
        },
        {
            key: "peek",
            value: function peek() {
                return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
            }
        },
        {
            key: "error",
            value: function error(message) {
                throw new SyntaxError3(message, this.str, this.pos);
            }
        },
        {
            key: "scanSpaces",
            value: function scanSpaces() {
                return this.substringToPos(this.findWsEnd(this.pos));
            }
        },
        {
            key: "scanWord",
            value: function scanWord() {
                var end = this.pos;
                for(; end < this.str.length; end++){
                    var code2 = this.str.charCodeAt(end);
                    if (code2 >= 128 || NAME_CHAR[code2] === 0) {
                        break;
                    }
                }
                if (this.pos === end) {
                    this.error("Expect a keyword");
                }
                return this.substringToPos(end);
            }
        },
        {
            key: "scanNumber",
            value: function scanNumber() {
                var end = this.pos;
                for(; end < this.str.length; end++){
                    var code2 = this.str.charCodeAt(end);
                    if (code2 < 48 || code2 > 57) {
                        break;
                    }
                }
                if (this.pos === end) {
                    this.error("Expect a number");
                }
                return this.substringToPos(end);
            }
        },
        {
            key: "scanString",
            value: function scanString() {
                var end = this.str.indexOf("'", this.pos + 1);
                if (end === -1) {
                    this.pos = this.str.length;
                    this.error("Expect an apostrophe");
                }
                return this.substringToPos(end + 1);
            }
        }
    ]);
    return Scanner;
}();
// node_modules/css-tree/lib/definition-syntax/parse.js
var TAB2 = 9;
var N4 = 10;
var F3 = 12;
var R3 = 13;
var SPACE2 = 32;
var EXCLAMATIONMARK2 = 33;
var NUMBERSIGN2 = 35;
var AMPERSAND = 38;
var APOSTROPHE = 39;
var LEFTPARENTHESIS = 40;
var RIGHTPARENTHESIS = 41;
var ASTERISK = 42;
var PLUSSIGN4 = 43;
var COMMA = 44;
var HYPERMINUS = 45;
var LESSTHANSIGN = 60;
var GREATERTHANSIGN = 62;
var QUESTIONMARK2 = 63;
var COMMERCIALAT = 64;
var LEFTSQUAREBRACKET = 91;
var RIGHTSQUAREBRACKET = 93;
var LEFTCURLYBRACKET2 = 123;
var VERTICALLINE = 124;
var RIGHTCURLYBRACKET = 125;
var INFINITY = 8734;
var COMBINATOR_PRECEDENCE = {
    " ": 1,
    "&&": 2,
    "||": 3,
    "|": 4
};
function readMultiplierRange(scanner) {
    var min = null;
    var max = null;
    scanner.eat(LEFTCURLYBRACKET2);
    scanner.skipWs();
    min = scanner.scanNumber(scanner);
    scanner.skipWs();
    if (scanner.charCode() === COMMA) {
        scanner.pos++;
        scanner.skipWs();
        if (scanner.charCode() !== RIGHTCURLYBRACKET) {
            max = scanner.scanNumber(scanner);
            scanner.skipWs();
        }
    } else {
        max = min;
    }
    scanner.eat(RIGHTCURLYBRACKET);
    return {
        min: Number(min),
        max: max ? Number(max) : 0
    };
}
function readMultiplier(scanner) {
    var range = null;
    var comma = false;
    switch(scanner.charCode()){
        case ASTERISK:
            scanner.pos++;
            range = {
                min: 0,
                max: 0
            };
            break;
        case PLUSSIGN4:
            scanner.pos++;
            range = {
                min: 1,
                max: 0
            };
            break;
        case QUESTIONMARK2:
            scanner.pos++;
            range = {
                min: 0,
                max: 1
            };
            break;
        case NUMBERSIGN2:
            scanner.pos++;
            comma = true;
            if (scanner.charCode() === LEFTCURLYBRACKET2) {
                range = readMultiplierRange(scanner);
            } else if (scanner.charCode() === QUESTIONMARK2) {
                scanner.pos++;
                range = {
                    min: 0,
                    max: 0
                };
            } else {
                range = {
                    min: 1,
                    max: 0
                };
            }
            break;
        case LEFTCURLYBRACKET2:
            range = readMultiplierRange(scanner);
            break;
        default:
            return null;
    }
    return {
        type: "Multiplier",
        comma: comma,
        min: range.min,
        max: range.max,
        term: null
    };
}
function maybeMultiplied(scanner, node) {
    var multiplier = readMultiplier(scanner);
    if (multiplier !== null) {
        multiplier.term = node;
        if (scanner.charCode() === NUMBERSIGN2 && scanner.charCodeAt(scanner.pos - 1) === PLUSSIGN4) {
            return maybeMultiplied(scanner, multiplier);
        }
        return multiplier;
    }
    return node;
}
function maybeToken(scanner) {
    var ch = scanner.peek();
    if (ch === "") {
        return null;
    }
    return maybeMultiplied(scanner, {
        type: "Token",
        value: ch
    });
}
function readProperty(scanner) {
    var name50;
    scanner.eat(LESSTHANSIGN);
    scanner.eat(APOSTROPHE);
    name50 = scanner.scanWord();
    scanner.eat(APOSTROPHE);
    scanner.eat(GREATERTHANSIGN);
    return maybeMultiplied(scanner, {
        type: "Property",
        name: name50
    });
}
function readTypeRange(scanner) {
    var min = null;
    var max = null;
    var sign = 1;
    scanner.eat(LEFTSQUAREBRACKET);
    if (scanner.charCode() === HYPERMINUS) {
        scanner.peek();
        sign = -1;
    }
    if (sign == -1 && scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        min = sign * Number(scanner.scanNumber(scanner));
        if (scanner.isNameCharCode()) {
            min += scanner.scanWord();
        }
    }
    scanner.skipWs();
    scanner.eat(COMMA);
    scanner.skipWs();
    if (scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        sign = 1;
        if (scanner.charCode() === HYPERMINUS) {
            scanner.peek();
            sign = -1;
        }
        max = sign * Number(scanner.scanNumber(scanner));
        if (scanner.isNameCharCode()) {
            max += scanner.scanWord();
        }
    }
    scanner.eat(RIGHTSQUAREBRACKET);
    return {
        type: "Range",
        min: min,
        max: max
    };
}
function readType(scanner) {
    var name50;
    var opts = null;
    scanner.eat(LESSTHANSIGN);
    name50 = scanner.scanWord();
    if (name50 === "boolean-expr") {
        scanner.eat(LEFTSQUAREBRACKET);
        var implicitGroup = readImplicitGroup(scanner, RIGHTSQUAREBRACKET);
        scanner.eat(RIGHTSQUAREBRACKET);
        scanner.eat(GREATERTHANSIGN);
        return maybeMultiplied(scanner, {
            type: "Boolean",
            term: implicitGroup.terms.length === 1 ? implicitGroup.terms[0] : implicitGroup
        });
    }
    if (scanner.charCode() === LEFTPARENTHESIS && scanner.nextCharCode() === RIGHTPARENTHESIS) {
        scanner.pos += 2;
        name50 += "()";
    }
    if (scanner.charCodeAt(scanner.findWsEnd(scanner.pos)) === LEFTSQUAREBRACKET) {
        scanner.skipWs();
        opts = readTypeRange(scanner);
    }
    scanner.eat(GREATERTHANSIGN);
    return maybeMultiplied(scanner, {
        type: "Type",
        name: name50,
        opts: opts
    });
}
function readKeywordOrFunction(scanner) {
    var name50 = scanner.scanWord();
    if (scanner.charCode() === LEFTPARENTHESIS) {
        scanner.pos++;
        return {
            type: "Function",
            name: name50
        };
    }
    return maybeMultiplied(scanner, {
        type: "Keyword",
        name: name50
    });
}
function regroupTerms(terms, combinators) {
    function createGroup(terms2, combinator2) {
        return {
            type: "Group",
            terms: terms2,
            combinator: combinator2,
            disallowEmpty: false,
            explicit: false
        };
    }
    var combinator;
    combinators = Object.keys(combinators).sort(function(a, b) {
        return COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b];
    });
    while(combinators.length > 0){
        combinator = combinators.shift();
        var i = 0;
        var subgroupStart = 0;
        for(; i < terms.length; i++){
            var term = terms[i];
            if (term.type === "Combinator") {
                if (term.value === combinator) {
                    if (subgroupStart === -1) {
                        subgroupStart = i - 1;
                    }
                    terms.splice(i, 1);
                    i--;
                } else {
                    if (subgroupStart !== -1 && i - subgroupStart > 1) {
                        terms.splice(subgroupStart, i - subgroupStart, createGroup(terms.slice(subgroupStart, i), combinator));
                        i = subgroupStart + 1;
                    }
                    subgroupStart = -1;
                }
            }
        }
        if (subgroupStart !== -1 && combinators.length) {
            terms.splice(subgroupStart, i - subgroupStart, createGroup(terms.slice(subgroupStart, i), combinator));
        }
    }
    return combinator;
}
function readImplicitGroup(scanner, stopCharCode) {
    var combinators = /* @__PURE__ */ Object.create(null);
    var terms = [];
    var token;
    var prevToken = null;
    var prevTokenPos = scanner.pos;
    while(scanner.charCode() !== stopCharCode && (token = peek(scanner, stopCharCode))){
        if (token.type !== "Spaces") {
            if (token.type === "Combinator") {
                if (prevToken === null || prevToken.type === "Combinator") {
                    scanner.pos = prevTokenPos;
                    scanner.error("Unexpected combinator");
                }
                combinators[token.value] = true;
            } else if (prevToken !== null && prevToken.type !== "Combinator") {
                combinators[" "] = true;
                terms.push({
                    type: "Combinator",
                    value: " "
                });
            }
            terms.push(token);
            prevToken = token;
            prevTokenPos = scanner.pos;
        }
    }
    if (prevToken !== null && prevToken.type === "Combinator") {
        scanner.pos -= prevTokenPos;
        scanner.error("Unexpected combinator");
    }
    return {
        type: "Group",
        terms: terms,
        combinator: regroupTerms(terms, combinators) || " ",
        disallowEmpty: false,
        explicit: false
    };
}
function readGroup(scanner, stopCharCode) {
    var result;
    scanner.eat(LEFTSQUAREBRACKET);
    result = readImplicitGroup(scanner, stopCharCode);
    scanner.eat(RIGHTSQUAREBRACKET);
    result.explicit = true;
    if (scanner.charCode() === EXCLAMATIONMARK2) {
        scanner.pos++;
        result.disallowEmpty = true;
    }
    return result;
}
function peek(scanner, stopCharCode) {
    var code2 = scanner.charCode();
    switch(code2){
        case RIGHTSQUAREBRACKET:
            break;
        case LEFTSQUAREBRACKET:
            return maybeMultiplied(scanner, readGroup(scanner, stopCharCode));
        case LESSTHANSIGN:
            return scanner.nextCharCode() === APOSTROPHE ? readProperty(scanner) : readType(scanner);
        case VERTICALLINE:
            return {
                type: "Combinator",
                value: scanner.substringToPos(scanner.pos + (scanner.nextCharCode() === VERTICALLINE ? 2 : 1))
            };
        case AMPERSAND:
            scanner.pos++;
            scanner.eat(AMPERSAND);
            return {
                type: "Combinator",
                value: "&&"
            };
        case COMMA:
            scanner.pos++;
            return {
                type: "Comma"
            };
        case APOSTROPHE:
            return maybeMultiplied(scanner, {
                type: "String",
                value: scanner.scanString()
            });
        case SPACE2:
        case TAB2:
        case N4:
        case R3:
        case F3:
            return {
                type: "Spaces",
                value: scanner.scanSpaces()
            };
        case COMMERCIALAT:
            code2 = scanner.nextCharCode();
            if (scanner.isNameCharCode(code2)) {
                scanner.pos++;
                return {
                    type: "AtKeyword",
                    name: scanner.scanWord()
                };
            }
            return maybeToken(scanner);
        case ASTERISK:
        case PLUSSIGN4:
        case QUESTIONMARK2:
        case NUMBERSIGN2:
        case EXCLAMATIONMARK2:
            break;
        case LEFTCURLYBRACKET2:
            code2 = scanner.nextCharCode();
            if (code2 < 48 || code2 > 57) {
                return maybeToken(scanner);
            }
            break;
        default:
            if (scanner.isNameCharCode(code2)) {
                return readKeywordOrFunction(scanner);
            }
            return maybeToken(scanner);
    }
}
function parse(source) {
    var scanner = new Scanner(source);
    var result = readImplicitGroup(scanner);
    if (scanner.pos !== source.length) {
        scanner.error("Unexpected input");
    }
    if (result.terms.length === 1 && result.terms[0].type === "Group") {
        return result.terms[0];
    }
    return result;
}
// node_modules/css-tree/lib/definition-syntax/walk.js
var noop3 = function noop3() {};
function ensureFunction2(value) {
    return typeof value === "function" ? value : noop3;
}
function walk(node, options, context) {
    function walk3(node2) {
        enter.call(context, node2);
        switch(node2.type){
            case "Group":
                node2.terms.forEach(walk3);
                break;
            case "Multiplier":
            case "Boolean":
                walk3(node2.term);
                break;
            case "Type":
            case "Property":
            case "Keyword":
            case "AtKeyword":
            case "Function":
            case "String":
            case "Token":
            case "Comma":
                break;
            default:
                throw new Error("Unknown type: " + node2.type);
        }
        leave.call(context, node2);
    }
    var enter = noop3;
    var leave = noop3;
    if (typeof options === "function") {
        enter = options;
    } else if (options) {
        enter = ensureFunction2(options.enter);
        leave = ensureFunction2(options.leave);
    }
    if (enter === noop3 && leave === noop3) {
        throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    }
    walk3(node);
}
// node_modules/css-tree/lib/lexer/prepare-tokens.js
var astToTokens = {
    decorator: function decorator(handlers) {
        var tokens = [];
        var curNode = null;
        return _object_spread_props(_object_spread({}, handlers), {
            node: function node(node) {
                var tmp = curNode;
                curNode = node;
                handlers.node.call(this, node);
                curNode = tmp;
            },
            emit: function emit(value, type, auto) {
                tokens.push({
                    type: type,
                    value: value,
                    node: auto ? null : curNode
                });
            },
            result: function result() {
                return tokens;
            }
        });
    }
};
function stringToTokens(str) {
    var tokens = [];
    tokenize(str, function(type, start, end) {
        return tokens.push({
            type: type,
            value: str.slice(start, end),
            node: null
        });
    });
    return tokens;
}
function prepare_tokens_default(value, syntax) {
    if (typeof value === "string") {
        return stringToTokens(value);
    }
    return syntax.generate(value, astToTokens);
}
// node_modules/css-tree/lib/lexer/match-graph.js
var MATCH = {
    type: "Match"
};
var MISMATCH = {
    type: "Mismatch"
};
var DISALLOW_EMPTY = {
    type: "DisallowEmpty"
};
var LEFTPARENTHESIS2 = 40;
var RIGHTPARENTHESIS2 = 41;
function createCondition(match, thenBranch, elseBranch) {
    if (thenBranch === MATCH && elseBranch === MISMATCH) {
        return match;
    }
    if (match === MATCH && thenBranch === MATCH && elseBranch === MATCH) {
        return match;
    }
    if (match.type === "If" && match.else === MISMATCH && thenBranch === MATCH) {
        thenBranch = match.then;
        match = match.match;
    }
    return {
        type: "If",
        match: match,
        then: thenBranch,
        else: elseBranch
    };
}
function isFunctionType(name50) {
    return name50.length > 2 && name50.charCodeAt(name50.length - 2) === LEFTPARENTHESIS2 && name50.charCodeAt(name50.length - 1) === RIGHTPARENTHESIS2;
}
function isEnumCapatible(term) {
    return term.type === "Keyword" || term.type === "AtKeyword" || term.type === "Function" || term.type === "Type" && isFunctionType(term.name);
}
function groupNode(terms) {
    var combinator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ", explicit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return {
        type: "Group",
        terms: terms,
        combinator: combinator,
        disallowEmpty: false,
        explicit: explicit
    };
}
function replaceTypeInGraph(node, replacements) {
    var visited = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Set();
    if (!visited.has(node)) {
        visited.add(node);
        switch(node.type){
            case "If":
                node.match = replaceTypeInGraph(node.match, replacements, visited);
                node.then = replaceTypeInGraph(node.then, replacements, visited);
                node.else = replaceTypeInGraph(node.else, replacements, visited);
                break;
            case "Type":
                return replacements[node.name] || node;
        }
    }
    return node;
}
function buildGroupMatchGraph(combinator, terms, atLeastOneTermMatched) {
    switch(combinator){
        case " ":
            {
                var result = MATCH;
                for(var i = terms.length - 1; i >= 0; i--){
                    var term = terms[i];
                    result = createCondition(term, result, MISMATCH);
                }
                return result;
            }
        case "|":
            {
                var result1 = MISMATCH;
                var map = null;
                for(var i1 = terms.length - 1; i1 >= 0; i1--){
                    var term1 = terms[i1];
                    if (isEnumCapatible(term1)) {
                        if (map === null && i1 > 0 && isEnumCapatible(terms[i1 - 1])) {
                            map = /* @__PURE__ */ Object.create(null);
                            result1 = createCondition({
                                type: "Enum",
                                map: map
                            }, MATCH, result1);
                        }
                        if (map !== null) {
                            var key = (isFunctionType(term1.name) ? term1.name.slice(0, -1) : term1.name).toLowerCase();
                            if (key in map === false) {
                                map[key] = term1;
                                continue;
                            }
                        }
                    }
                    map = null;
                    result1 = createCondition(term1, MATCH, result1);
                }
                return result1;
            }
        case "&&":
            {
                var _loop = function(i2) {
                    var term = terms[i2];
                    var thenClause = void 0;
                    if (terms.length > 1) {
                        thenClause = buildGroupMatchGraph(combinator, terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }), false);
                    } else {
                        thenClause = MATCH;
                    }
                    result2 = createCondition(term, thenClause, result2);
                };
                if (terms.length > 5) {
                    return {
                        type: "MatchOnce",
                        terms: terms,
                        all: true
                    };
                }
                var result2 = MISMATCH;
                for(var i2 = terms.length - 1; i2 >= 0; i2--)_loop(i2);
                return result2;
            }
        case "||":
            {
                var _loop1 = function(i3) {
                    var term = terms[i3];
                    var thenClause = void 0;
                    if (terms.length > 1) {
                        thenClause = buildGroupMatchGraph(combinator, terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }), true);
                    } else {
                        thenClause = MATCH;
                    }
                    result3 = createCondition(term, thenClause, result3);
                };
                if (terms.length > 5) {
                    return {
                        type: "MatchOnce",
                        terms: terms,
                        all: false
                    };
                }
                var result3 = atLeastOneTermMatched ? MATCH : MISMATCH;
                for(var i3 = terms.length - 1; i3 >= 0; i3--)_loop1(i3);
                return result3;
            }
    }
}
function buildMultiplierMatchGraph(node) {
    var result = MATCH;
    var matchTerm = buildMatchGraphInternal(node.term);
    if (node.max === 0) {
        matchTerm = createCondition(matchTerm, DISALLOW_EMPTY, MISMATCH);
        result = createCondition(matchTerm, null, // will be a loop
        MISMATCH);
        result.then = createCondition(MATCH, MATCH, result);
        if (node.comma) {
            result.then.else = createCondition({
                type: "Comma",
                syntax: node
            }, result, MISMATCH);
        }
    } else {
        for(var i = node.min || 1; i <= node.max; i++){
            if (node.comma && result !== MATCH) {
                result = createCondition({
                    type: "Comma",
                    syntax: node
                }, result, MISMATCH);
            }
            result = createCondition(matchTerm, createCondition(MATCH, MATCH, result), MISMATCH);
        }
    }
    if (node.min === 0) {
        result = createCondition(MATCH, MATCH, result);
    } else {
        for(var i1 = 0; i1 < node.min - 1; i1++){
            if (node.comma && result !== MATCH) {
                result = createCondition({
                    type: "Comma",
                    syntax: node
                }, result, MISMATCH);
            }
            result = createCondition(matchTerm, result, MISMATCH);
        }
    }
    return result;
}
function buildMatchGraphInternal(node) {
    if (typeof node === "function") {
        return {
            type: "Generic",
            fn: node
        };
    }
    switch(node.type){
        case "Group":
            {
                var result = buildGroupMatchGraph(node.combinator, node.terms.map(buildMatchGraphInternal), false);
                if (node.disallowEmpty) {
                    result = createCondition(result, DISALLOW_EMPTY, MISMATCH);
                }
                return result;
            }
        case "Multiplier":
            return buildMultiplierMatchGraph(node);
        // https://drafts.csswg.org/css-values-5/#boolean
        case "Boolean":
            {
                var term = buildMatchGraphInternal(node.term);
                var matchNode = buildMatchGraphInternal(groupNode([
                    groupNode([
                        {
                            type: "Keyword",
                            name: "not"
                        },
                        {
                            type: "Type",
                            name: "!boolean-group"
                        }
                    ]),
                    groupNode([
                        {
                            type: "Type",
                            name: "!boolean-group"
                        },
                        groupNode([
                            {
                                type: "Multiplier",
                                comma: false,
                                min: 0,
                                max: 0,
                                term: groupNode([
                                    {
                                        type: "Keyword",
                                        name: "and"
                                    },
                                    {
                                        type: "Type",
                                        name: "!boolean-group"
                                    }
                                ])
                            },
                            {
                                type: "Multiplier",
                                comma: false,
                                min: 0,
                                max: 0,
                                term: groupNode([
                                    {
                                        type: "Keyword",
                                        name: "or"
                                    },
                                    {
                                        type: "Type",
                                        name: "!boolean-group"
                                    }
                                ])
                            }
                        ], "|")
                    ])
                ], "|"));
                var booleanGroup = buildMatchGraphInternal(groupNode([
                    {
                        type: "Type",
                        name: "!term"
                    },
                    groupNode([
                        {
                            type: "Token",
                            value: "("
                        },
                        {
                            type: "Type",
                            name: "!self"
                        },
                        {
                            type: "Token",
                            value: ")"
                        }
                    ]),
                    {
                        type: "Type",
                        name: "general-enclosed"
                    }
                ], "|"));
                replaceTypeInGraph(booleanGroup, {
                    "!term": term,
                    "!self": matchNode
                });
                replaceTypeInGraph(matchNode, {
                    "!boolean-group": booleanGroup
                });
                return matchNode;
            }
        case "Type":
        case "Property":
            return {
                type: node.type,
                name: node.name,
                syntax: node
            };
        case "Keyword":
            return {
                type: node.type,
                name: node.name.toLowerCase(),
                syntax: node
            };
        case "AtKeyword":
            return {
                type: node.type,
                name: "@" + node.name.toLowerCase(),
                syntax: node
            };
        case "Function":
            return {
                type: node.type,
                name: node.name.toLowerCase() + "(",
                syntax: node
            };
        case "String":
            if (node.value.length === 3) {
                return {
                    type: "Token",
                    value: node.value.charAt(1),
                    syntax: node
                };
            }
            return {
                type: node.type,
                value: node.value.substr(1, node.value.length - 2).replace(/\\'/g, "'"),
                syntax: node
            };
        case "Token":
            return {
                type: node.type,
                value: node.value,
                syntax: node
            };
        case "Comma":
            return {
                type: node.type,
                syntax: node
            };
        default:
            throw new Error("Unknown node type:", node.type);
    }
}
function buildMatchGraph(syntaxTree, ref) {
    if (typeof syntaxTree === "string") {
        syntaxTree = parse(syntaxTree);
    }
    return {
        type: "MatchGraph",
        match: buildMatchGraphInternal(syntaxTree),
        syntax: ref || null,
        source: syntaxTree
    };
}
// node_modules/css-tree/lib/lexer/match.js
var _Object_prototype1 = Object.prototype, hasOwnProperty3 = _Object_prototype1.hasOwnProperty;
var STUB = 0;
var TOKEN = 1;
var OPEN_SYNTAX = 2;
var CLOSE_SYNTAX = 3;
var EXIT_REASON_MATCH = "Match";
var EXIT_REASON_MISMATCH = "Mismatch";
var EXIT_REASON_ITERATION_LIMIT = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)";
var ITERATION_LIMIT = 15e3;
function reverseList(list) {
    var prev = null;
    var next = null;
    var item = list;
    while(item !== null){
        next = item.prev;
        item.prev = prev;
        prev = item;
        item = next;
    }
    return prev;
}
function areStringsEqualCaseInsensitive(testStr, referenceStr) {
    if (testStr.length !== referenceStr.length) {
        return false;
    }
    for(var i = 0; i < testStr.length; i++){
        var referenceCode = referenceStr.charCodeAt(i);
        var testCode = testStr.charCodeAt(i);
        if (testCode >= 65 && testCode <= 90) {
            testCode = testCode | 32;
        }
        if (testCode !== referenceCode) {
            return false;
        }
    }
    return true;
}
function isContextEdgeDelim(token) {
    if (token.type !== Delim) {
        return false;
    }
    return token.value !== "?";
}
function isCommaContextStart(token) {
    if (token === null) {
        return true;
    }
    return token.type === Comma || token.type === Function || token.type === LeftParenthesis || token.type === LeftSquareBracket || token.type === LeftCurlyBracket || isContextEdgeDelim(token);
}
function isCommaContextEnd(token) {
    if (token === null) {
        return true;
    }
    return token.type === RightParenthesis || token.type === RightSquareBracket || token.type === RightCurlyBracket || token.type === Delim && token.value === "/";
}
function internalMatch(tokens, state, syntaxes) {
    function moveToNextToken() {
        do {
            tokenIndex++;
            token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
        }while (token !== null && (token.type === WhiteSpace || token.type === Comment));
    }
    function getNextToken(offset) {
        var nextIndex = tokenIndex + offset;
        return nextIndex < tokens.length ? tokens[nextIndex] : null;
    }
    function stateSnapshotFromSyntax(nextState, prev) {
        return {
            nextState: nextState,
            matchStack: matchStack,
            syntaxStack: syntaxStack,
            thenStack: thenStack,
            tokenIndex: tokenIndex,
            prev: prev
        };
    }
    function pushThenStack(nextState) {
        thenStack = {
            nextState: nextState,
            matchStack: matchStack,
            syntaxStack: syntaxStack,
            prev: thenStack
        };
    }
    function pushElseStack(nextState) {
        elseStack = stateSnapshotFromSyntax(nextState, elseStack);
    }
    function addTokenToMatch() {
        matchStack = {
            type: TOKEN,
            syntax: state.syntax,
            token: token,
            prev: matchStack
        };
        moveToNextToken();
        syntaxStash = null;
        if (tokenIndex > longestMatch) {
            longestMatch = tokenIndex;
        }
    }
    function openSyntax() {
        syntaxStack = {
            syntax: state.syntax,
            opts: state.syntax.opts || syntaxStack !== null && syntaxStack.opts || null,
            prev: syntaxStack
        };
        matchStack = {
            type: OPEN_SYNTAX,
            syntax: state.syntax,
            token: matchStack.token,
            prev: matchStack
        };
    }
    function closeSyntax() {
        if (matchStack.type === OPEN_SYNTAX) {
            matchStack = matchStack.prev;
        } else {
            matchStack = {
                type: CLOSE_SYNTAX,
                syntax: syntaxStack.syntax,
                token: matchStack.token,
                prev: matchStack
            };
        }
        syntaxStack = syntaxStack.prev;
    }
    var syntaxStack = null;
    var thenStack = null;
    var elseStack = null;
    var syntaxStash = null;
    var iterationCount = 0;
    var exitReason = null;
    var token = null;
    var tokenIndex = -1;
    var longestMatch = 0;
    var matchStack = {
        type: STUB,
        syntax: null,
        token: null,
        prev: null
    };
    moveToNextToken();
    while(exitReason === null && ++iterationCount < ITERATION_LIMIT){
        switch(state.type){
            case "Match":
                if (thenStack === null) {
                    if (token !== null) {
                        if (tokenIndex !== tokens.length - 1 || token.value !== "\\0" && token.value !== "\\9") {
                            state = MISMATCH;
                            break;
                        }
                    }
                    exitReason = EXIT_REASON_MATCH;
                    break;
                }
                state = thenStack.nextState;
                if (state === DISALLOW_EMPTY) {
                    if (thenStack.matchStack === matchStack) {
                        state = MISMATCH;
                        break;
                    } else {
                        state = MATCH;
                    }
                }
                while(thenStack.syntaxStack !== syntaxStack){
                    closeSyntax();
                }
                thenStack = thenStack.prev;
                break;
            case "Mismatch":
                if (syntaxStash !== null && syntaxStash !== false) {
                    if (elseStack === null || tokenIndex > elseStack.tokenIndex) {
                        elseStack = syntaxStash;
                        syntaxStash = false;
                    }
                } else if (elseStack === null) {
                    exitReason = EXIT_REASON_MISMATCH;
                    break;
                }
                state = elseStack.nextState;
                thenStack = elseStack.thenStack;
                syntaxStack = elseStack.syntaxStack;
                matchStack = elseStack.matchStack;
                tokenIndex = elseStack.tokenIndex;
                token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
                elseStack = elseStack.prev;
                break;
            case "MatchGraph":
                state = state.match;
                break;
            case "If":
                if (state.else !== MISMATCH) {
                    pushElseStack(state.else);
                }
                if (state.then !== MATCH) {
                    pushThenStack(state.then);
                }
                state = state.match;
                break;
            case "MatchOnce":
                state = {
                    type: "MatchOnceBuffer",
                    syntax: state,
                    index: 0,
                    mask: 0
                };
                break;
            case "MatchOnceBuffer":
                {
                    var terms = state.syntax.terms;
                    if (state.index === terms.length) {
                        if (state.mask === 0 || state.syntax.all) {
                            state = MISMATCH;
                            break;
                        }
                        state = MATCH;
                        break;
                    }
                    if (state.mask === (1 << terms.length) - 1) {
                        state = MATCH;
                        break;
                    }
                    for(; state.index < terms.length; state.index++){
                        var matchFlag = 1 << state.index;
                        if ((state.mask & matchFlag) === 0) {
                            pushElseStack(state);
                            pushThenStack({
                                type: "AddMatchOnce",
                                syntax: state.syntax,
                                mask: state.mask | matchFlag
                            });
                            state = terms[state.index++];
                            break;
                        }
                    }
                    break;
                }
            case "AddMatchOnce":
                state = {
                    type: "MatchOnceBuffer",
                    syntax: state.syntax,
                    index: 0,
                    mask: state.mask
                };
                break;
            case "Enum":
                if (token !== null) {
                    var name50 = token.value.toLowerCase();
                    if (name50.indexOf("\\") !== -1) {
                        name50 = name50.replace(/\\[09].*$/, "");
                    }
                    if (hasOwnProperty3.call(state.map, name50)) {
                        state = state.map[name50];
                        break;
                    }
                }
                state = MISMATCH;
                break;
            case "Generic":
                {
                    var opts = syntaxStack !== null ? syntaxStack.opts : null;
                    var lastTokenIndex2 = tokenIndex + Math.floor(state.fn(token, getNextToken, opts));
                    if (!isNaN(lastTokenIndex2) && lastTokenIndex2 > tokenIndex) {
                        while(tokenIndex < lastTokenIndex2){
                            addTokenToMatch();
                        }
                        state = MATCH;
                    } else {
                        state = MISMATCH;
                    }
                    break;
                }
            case "Type":
            case "Property":
                {
                    var syntaxDict = state.type === "Type" ? "types" : "properties";
                    var dictSyntax = hasOwnProperty3.call(syntaxes, syntaxDict) ? syntaxes[syntaxDict][state.name] : null;
                    if (!dictSyntax || !dictSyntax.match) {
                        throw new Error("Bad syntax reference: " + (state.type === "Type" ? "<" + state.name + ">" : "<'" + state.name + "'>"));
                    }
                    if (syntaxStash !== false && token !== null && state.type === "Type") {
                        var lowPriorityMatching = // https://drafts.csswg.org/css-values-4/#custom-idents
                        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
                        // can only claim the keyword if no other unfulfilled production can claim it.
                        state.name === "custom-ident" && token.type === Ident || // https://drafts.csswg.org/css-values-4/#lengths
                        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
                        // it must parse as a <number>
                        state.name === "length" && token.value === "0";
                        if (lowPriorityMatching) {
                            if (syntaxStash === null) {
                                syntaxStash = stateSnapshotFromSyntax(state, elseStack);
                            }
                            state = MISMATCH;
                            break;
                        }
                    }
                    openSyntax();
                    state = dictSyntax.matchRef || dictSyntax.match;
                    break;
                }
            case "Keyword":
                {
                    var name501 = state.name;
                    if (token !== null) {
                        var keywordName = token.value;
                        if (keywordName.indexOf("\\") !== -1) {
                            keywordName = keywordName.replace(/\\[09].*$/, "");
                        }
                        if (areStringsEqualCaseInsensitive(keywordName, name501)) {
                            addTokenToMatch();
                            state = MATCH;
                            break;
                        }
                    }
                    state = MISMATCH;
                    break;
                }
            case "AtKeyword":
            case "Function":
                if (token !== null && areStringsEqualCaseInsensitive(token.value, state.name)) {
                    addTokenToMatch();
                    state = MATCH;
                    break;
                }
                state = MISMATCH;
                break;
            case "Token":
                if (token !== null && token.value === state.value) {
                    addTokenToMatch();
                    state = MATCH;
                    break;
                }
                state = MISMATCH;
                break;
            case "Comma":
                if (token !== null && token.type === Comma) {
                    if (isCommaContextStart(matchStack.token)) {
                        state = MISMATCH;
                    } else {
                        addTokenToMatch();
                        state = isCommaContextEnd(token) ? MISMATCH : MATCH;
                    }
                } else {
                    state = isCommaContextStart(matchStack.token) || isCommaContextEnd(token) ? MATCH : MISMATCH;
                }
                break;
            case "String":
                var string = "";
                var lastTokenIndex = tokenIndex;
                for(; lastTokenIndex < tokens.length && string.length < state.value.length; lastTokenIndex++){
                    string += tokens[lastTokenIndex].value;
                }
                if (areStringsEqualCaseInsensitive(string, state.value)) {
                    while(tokenIndex < lastTokenIndex){
                        addTokenToMatch();
                    }
                    state = MATCH;
                } else {
                    state = MISMATCH;
                }
                break;
            default:
                throw new Error("Unknown node type: " + state.type);
        }
    }
    switch(exitReason){
        case null:
            console.warn("[csstree-match] BREAK after " + ITERATION_LIMIT + " iterations");
            exitReason = EXIT_REASON_ITERATION_LIMIT;
            matchStack = null;
            break;
        case EXIT_REASON_MATCH:
            while(syntaxStack !== null){
                closeSyntax();
            }
            break;
        default:
            matchStack = null;
    }
    return {
        tokens: tokens,
        reason: exitReason,
        iterations: iterationCount,
        match: matchStack,
        longestMatch: longestMatch
    };
}
function matchAsTree(tokens, matchGraph, syntaxes) {
    var matchResult = internalMatch(tokens, matchGraph, syntaxes || {});
    if (matchResult.match === null) {
        return matchResult;
    }
    var item = matchResult.match;
    var host = matchResult.match = {
        syntax: matchGraph.syntax || null,
        match: []
    };
    var hostStack = [
        host
    ];
    item = reverseList(item).prev;
    while(item !== null){
        switch(item.type){
            case OPEN_SYNTAX:
                host.match.push(host = {
                    syntax: item.syntax,
                    match: []
                });
                hostStack.push(host);
                break;
            case CLOSE_SYNTAX:
                hostStack.pop();
                host = hostStack[hostStack.length - 1];
                break;
            default:
                host.match.push({
                    syntax: item.syntax || null,
                    token: item.token.value,
                    node: item.token.node
                });
        }
        item = item.prev;
    }
    return matchResult;
}
// node_modules/css-tree/lib/lexer/trace.js
var trace_exports = {};
__export(trace_exports, {
    getTrace: function() {
        return getTrace;
    },
    isKeyword: function() {
        return isKeyword;
    },
    isProperty: function() {
        return isProperty;
    },
    isType: function() {
        return isType;
    }
});
function getTrace(node) {
    function shouldPutToTrace(syntax) {
        if (syntax === null) {
            return false;
        }
        return syntax.type === "Type" || syntax.type === "Property" || syntax.type === "Keyword";
    }
    function hasMatch(matchNode) {
        if (Array.isArray(matchNode.match)) {
            for(var i = 0; i < matchNode.match.length; i++){
                if (hasMatch(matchNode.match[i])) {
                    if (shouldPutToTrace(matchNode.syntax)) {
                        result.unshift(matchNode.syntax);
                    }
                    return true;
                }
            }
        } else if (matchNode.node === node) {
            result = shouldPutToTrace(matchNode.syntax) ? [
                matchNode.syntax
            ] : [];
            return true;
        }
        return false;
    }
    var result = null;
    if (this.matched !== null) {
        hasMatch(this.matched);
    }
    return result;
}
function isType(node, type) {
    return testNode(this, node, function(match) {
        return match.type === "Type" && match.name === type;
    });
}
function isProperty(node, property2) {
    return testNode(this, node, function(match) {
        return match.type === "Property" && match.name === property2;
    });
}
function isKeyword(node) {
    return testNode(this, node, function(match) {
        return match.type === "Keyword";
    });
}
function testNode(match, node, fn) {
    var trace = getTrace.call(match, node);
    if (trace === null) {
        return false;
    }
    return trace.some(fn);
}
// node_modules/css-tree/lib/lexer/search.js
function getFirstMatchNode(matchNode) {
    if ("node" in matchNode) {
        return matchNode.node;
    }
    return getFirstMatchNode(matchNode.match[0]);
}
function getLastMatchNode(matchNode) {
    if ("node" in matchNode) {
        return matchNode.node;
    }
    return getLastMatchNode(matchNode.match[matchNode.match.length - 1]);
}
function matchFragments(lexer2, ast, match, type, name50) {
    function findFragments(matchNode) {
        if (matchNode.syntax !== null && matchNode.syntax.type === type && matchNode.syntax.name === name50) {
            var start = getFirstMatchNode(matchNode);
            var end = getLastMatchNode(matchNode);
            lexer2.syntax.walk(ast, function(node, item, list) {
                if (node === start) {
                    var nodes = new List();
                    do {
                        nodes.appendData(item.data);
                        if (item.data === end) {
                            break;
                        }
                        item = item.next;
                    }while (item !== null);
                    fragments.push({
                        parent: list,
                        nodes: nodes
                    });
                }
            });
        }
        if (Array.isArray(matchNode.match)) {
            matchNode.match.forEach(findFragments);
        }
    }
    var fragments = [];
    if (match.matched !== null) {
        findFragments(match.matched);
    }
    return fragments;
}
// node_modules/css-tree/lib/lexer/structure.js
var _Object_prototype2 = Object.prototype, hasOwnProperty4 = _Object_prototype2.hasOwnProperty;
function isValidNumber(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value && value >= 0;
}
function isValidLocation(loc) {
    return Boolean(loc) && isValidNumber(loc.offset) && isValidNumber(loc.line) && isValidNumber(loc.column);
}
function createNodeStructureChecker(type, fields) {
    return function checkNode(node, warn) {
        if (!node || node.constructor !== Object) {
            return warn(node, "Type of node should be an Object");
        }
        for(var key in node){
            var valid = true;
            if (hasOwnProperty4.call(node, key) === false) {
                continue;
            }
            if (key === "type") {
                if (node.type !== type) {
                    warn(node, "Wrong node type `" + node.type + "`, expected `" + type + "`");
                }
            } else if (key === "loc") {
                if (node.loc === null) {
                    continue;
                } else if (node.loc && node.loc.constructor === Object) {
                    if (typeof node.loc.source !== "string") {
                        key += ".source";
                    } else if (!isValidLocation(node.loc.start)) {
                        key += ".start";
                    } else if (!isValidLocation(node.loc.end)) {
                        key += ".end";
                    } else {
                        continue;
                    }
                }
                valid = false;
            } else if (fields.hasOwnProperty(key)) {
                valid = false;
                for(var i = 0; !valid && i < fields[key].length; i++){
                    var fieldType = fields[key][i];
                    switch(fieldType){
                        case String:
                            valid = typeof node[key] === "string";
                            break;
                        case Boolean:
                            valid = typeof node[key] === "boolean";
                            break;
                        case null:
                            valid = node[key] === null;
                            break;
                        default:
                            if (typeof fieldType === "string") {
                                valid = node[key] && node[key].type === fieldType;
                            } else if (Array.isArray(fieldType)) {
                                valid = _instanceof(node[key], List);
                            }
                    }
                }
            } else {
                warn(node, "Unknown field `" + key + "` for " + type + " node type");
            }
            if (!valid) {
                warn(node, "Bad value for `" + type + "." + key + "`");
            }
        }
        for(var key1 in fields){
            if (hasOwnProperty4.call(fields, key1) && hasOwnProperty4.call(node, key1) === false) {
                warn(node, "Field `" + type + "." + key1 + "` is missed");
            }
        }
    };
}
function genTypesList(fieldTypes, path) {
    var docsTypes = [];
    for(var i = 0; i < fieldTypes.length; i++){
        var fieldType = fieldTypes[i];
        if (fieldType === String || fieldType === Boolean) {
            docsTypes.push(fieldType.name.toLowerCase());
        } else if (fieldType === null) {
            docsTypes.push("null");
        } else if (typeof fieldType === "string") {
            docsTypes.push(fieldType);
        } else if (Array.isArray(fieldType)) {
            docsTypes.push("List<" + (genTypesList(fieldType, path) || "any") + ">");
        } else {
            throw new Error("Wrong value `" + fieldType + "` in `" + path + "` structure definition");
        }
    }
    return docsTypes.join(" | ");
}
function processStructure(name50, nodeType) {
    var structure50 = nodeType.structure;
    var fields = {
        type: String,
        loc: true
    };
    var docs = {
        type: '"' + name50 + '"'
    };
    for(var key in structure50){
        if (hasOwnProperty4.call(structure50, key) === false) {
            continue;
        }
        var fieldTypes = fields[key] = Array.isArray(structure50[key]) ? structure50[key].slice() : [
            structure50[key]
        ];
        docs[key] = genTypesList(fieldTypes, name50 + "." + key);
    }
    return {
        docs: docs,
        check: createNodeStructureChecker(name50, fields)
    };
}
function getStructureFromConfig(config) {
    var structure50 = {};
    if (config.node) {
        for(var name50 in config.node){
            if (hasOwnProperty4.call(config.node, name50)) {
                var nodeType = config.node[name50];
                if (nodeType.structure) {
                    structure50[name50] = processStructure(name50, nodeType);
                } else {
                    throw new Error("Missed `structure` field in `" + name50 + "` node type definition");
                }
            }
        }
    }
    return structure50;
}
// node_modules/css-tree/lib/lexer/Lexer.js
function dumpMapSyntax(map, compact, syntaxAsAst) {
    var result = {};
    for(var name50 in map){
        if (map[name50].syntax) {
            result[name50] = syntaxAsAst ? map[name50].syntax : generate(map[name50].syntax, {
                compact: compact
            });
        }
    }
    return result;
}
function dumpAtruleMapSyntax(map, compact, syntaxAsAst) {
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(map)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), name50 = _step_value[0], atrule = _step_value[1];
            result[name50] = {
                prelude: atrule.prelude && (syntaxAsAst ? atrule.prelude.syntax : generate(atrule.prelude.syntax, {
                    compact: compact
                })),
                descriptors: atrule.descriptors && dumpMapSyntax(atrule.descriptors, compact, syntaxAsAst)
            };
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
function valueHasVar(tokens) {
    for(var i = 0; i < tokens.length; i++){
        if (tokens[i].value.toLowerCase() === "var(") {
            return true;
        }
    }
    return false;
}
function syntaxHasTopLevelCommaMultiplier(syntax) {
    var singleTerm = syntax.terms[0];
    return syntax.explicit === false && syntax.terms.length === 1 && singleTerm.type === "Multiplier" && singleTerm.comma === true;
}
function buildMatchResult(matched, error, iterations) {
    return _object_spread({
        matched: matched,
        iterations: iterations,
        error: error
    }, trace_exports);
}
function matchSyntax(lexer2, syntax, value, useCssWideKeywords) {
    var tokens = prepare_tokens_default(value, lexer2.syntax);
    var result;
    if (valueHasVar(tokens)) {
        return buildMatchResult(null, new Error("Matching for a tree with var() is not supported"));
    }
    if (useCssWideKeywords) {
        result = matchAsTree(tokens, lexer2.cssWideKeywordsSyntax, lexer2);
    }
    if (!useCssWideKeywords || !result.match) {
        result = matchAsTree(tokens, syntax.match, lexer2);
        if (!result.match) {
            return buildMatchResult(null, new SyntaxMatchError(result.reason, syntax.syntax, value, result), result.iterations);
        }
    }
    return buildMatchResult(result.match, null, result.iterations);
}
var Lexer = /*#__PURE__*/ function() {
    function Lexer(config, syntax, structure50) {
        _class_call_check(this, Lexer);
        this.cssWideKeywords = cssWideKeywords;
        this.syntax = syntax;
        this.generic = false;
        this.units = _object_spread({}, units_exports);
        this.atrules = /* @__PURE__ */ Object.create(null);
        this.properties = /* @__PURE__ */ Object.create(null);
        this.types = /* @__PURE__ */ Object.create(null);
        this.structure = structure50 || getStructureFromConfig(config);
        if (config) {
            if (config.cssWideKeywords) {
                this.cssWideKeywords = config.cssWideKeywords;
            }
            if (config.units) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(units_exports)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        if (Array.isArray(config.units[group])) {
                            this.units[group] = config.units[group];
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            if (config.types) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Object.entries(config.types)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array(_step1.value, 2), name50 = _step_value[0], type = _step_value[1];
                        this.addType_(name50, type);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
            if (config.generic) {
                this.generic = true;
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = Object.entries(createGenericTypes(this.units))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _step_value1 = _sliced_to_array(_step2.value, 2), name501 = _step_value1[0], value = _step_value1[1];
                        this.addType_(name501, value);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            if (config.atrules) {
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = Object.entries(config.atrules)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var _step_value2 = _sliced_to_array(_step3.value, 2), name502 = _step_value2[0], atrule = _step_value2[1];
                        this.addAtrule_(name502, atrule);
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
            if (config.properties) {
                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                try {
                    for(var _iterator4 = Object.entries(config.properties)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                        var _step_value3 = _sliced_to_array(_step4.value, 2), name503 = _step_value3[0], property2 = _step_value3[1];
                        this.addProperty_(name503, property2);
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
            }
        }
        this.cssWideKeywordsSyntax = buildMatchGraph(this.cssWideKeywords.join(" |  "));
    }
    _create_class(Lexer, [
        {
            key: "checkStructure",
            value: function checkStructure(ast) {
                function collectWarning(node, message) {
                    warns.push({
                        node: node,
                        message: message
                    });
                }
                var structure50 = this.structure;
                var warns = [];
                this.syntax.walk(ast, function(node) {
                    if (structure50.hasOwnProperty(node.type)) {
                        structure50[node.type].check(node, collectWarning);
                    } else {
                        collectWarning(node, "Unknown node type `" + node.type + "`");
                    }
                });
                return warns.length ? warns : false;
            }
        },
        {
            key: "createDescriptor",
            value: function createDescriptor(syntax, type, name50) {
                var parent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                var ref = {
                    type: type,
                    name: name50
                };
                var descriptor = {
                    type: type,
                    name: name50,
                    parent: parent,
                    serializable: typeof syntax === "string" || syntax && typeof syntax.type === "string",
                    syntax: null,
                    match: null,
                    matchRef: null
                };
                if (typeof syntax === "function") {
                    descriptor.match = buildMatchGraph(syntax, ref);
                } else {
                    if (typeof syntax === "string") {
                        Object.defineProperty(descriptor, "syntax", {
                            get: function get() {
                                Object.defineProperty(descriptor, "syntax", {
                                    value: parse(syntax)
                                });
                                return descriptor.syntax;
                            }
                        });
                    } else {
                        descriptor.syntax = syntax;
                    }
                    Object.defineProperty(descriptor, "match", {
                        get: function get() {
                            Object.defineProperty(descriptor, "match", {
                                value: buildMatchGraph(descriptor.syntax, ref)
                            });
                            return descriptor.match;
                        }
                    });
                    if (type === "Property") {
                        Object.defineProperty(descriptor, "matchRef", {
                            get: function get() {
                                var syntax2 = descriptor.syntax;
                                var value = syntaxHasTopLevelCommaMultiplier(syntax2) ? buildMatchGraph(_object_spread_props(_object_spread({}, syntax2), {
                                    terms: [
                                        syntax2.terms[0].term
                                    ]
                                }), ref) : null;
                                Object.defineProperty(descriptor, "matchRef", {
                                    value: value
                                });
                                return value;
                            }
                        });
                    }
                }
                return descriptor;
            }
        },
        {
            key: "addAtrule_",
            value: function addAtrule_(name50, syntax) {
                var _this = this;
                if (!syntax) {
                    return;
                }
                this.atrules[name50] = {
                    type: "Atrule",
                    name: name50,
                    prelude: syntax.prelude ? this.createDescriptor(syntax.prelude, "AtrulePrelude", name50) : null,
                    descriptors: syntax.descriptors ? Object.keys(syntax.descriptors).reduce(function(map, descName) {
                        map[descName] = _this.createDescriptor(syntax.descriptors[descName], "AtruleDescriptor", descName, name50);
                        return map;
                    }, /* @__PURE__ */ Object.create(null)) : null
                };
            }
        },
        {
            key: "addProperty_",
            value: function addProperty_(name50, syntax) {
                if (!syntax) {
                    return;
                }
                this.properties[name50] = this.createDescriptor(syntax, "Property", name50);
            }
        },
        {
            key: "addType_",
            value: function addType_(name50, syntax) {
                if (!syntax) {
                    return;
                }
                this.types[name50] = this.createDescriptor(syntax, "Type", name50);
            }
        },
        {
            key: "checkAtruleName",
            value: function checkAtruleName(atruleName) {
                if (!this.getAtrule(atruleName)) {
                    return new SyntaxReferenceError("Unknown at-rule", "@" + atruleName);
                }
            }
        },
        {
            key: "checkAtrulePrelude",
            value: function checkAtrulePrelude(atruleName, prelude) {
                var error = this.checkAtruleName(atruleName);
                if (error) {
                    return error;
                }
                var atrule = this.getAtrule(atruleName);
                if (!atrule.prelude && prelude) {
                    return new SyntaxError("At-rule `@" + atruleName + "` should not contain a prelude");
                }
                if (atrule.prelude && !prelude) {
                    if (!matchSyntax(this, atrule.prelude, "", false).matched) {
                        return new SyntaxError("At-rule `@" + atruleName + "` should contain a prelude");
                    }
                }
            }
        },
        {
            key: "checkAtruleDescriptorName",
            value: function checkAtruleDescriptorName(atruleName, descriptorName) {
                var error = this.checkAtruleName(atruleName);
                if (error) {
                    return error;
                }
                var atrule = this.getAtrule(atruleName);
                var descriptor = keyword(descriptorName);
                if (!atrule.descriptors) {
                    return new SyntaxError("At-rule `@" + atruleName + "` has no known descriptors");
                }
                if (!atrule.descriptors[descriptor.name] && !atrule.descriptors[descriptor.basename]) {
                    return new SyntaxReferenceError("Unknown at-rule descriptor", descriptorName);
                }
            }
        },
        {
            key: "checkPropertyName",
            value: function checkPropertyName(propertyName) {
                if (!this.getProperty(propertyName)) {
                    return new SyntaxReferenceError("Unknown property", propertyName);
                }
            }
        },
        {
            key: "matchAtrulePrelude",
            value: function matchAtrulePrelude(atruleName, prelude) {
                var error = this.checkAtrulePrelude(atruleName, prelude);
                if (error) {
                    return buildMatchResult(null, error);
                }
                var atrule = this.getAtrule(atruleName);
                if (!atrule.prelude) {
                    return buildMatchResult(null, null);
                }
                return matchSyntax(this, atrule.prelude, prelude || "", false);
            }
        },
        {
            key: "matchAtruleDescriptor",
            value: function matchAtruleDescriptor(atruleName, descriptorName, value) {
                var error = this.checkAtruleDescriptorName(atruleName, descriptorName);
                if (error) {
                    return buildMatchResult(null, error);
                }
                var atrule = this.getAtrule(atruleName);
                var descriptor = keyword(descriptorName);
                return matchSyntax(this, atrule.descriptors[descriptor.name] || atrule.descriptors[descriptor.basename], value, false);
            }
        },
        {
            key: "matchDeclaration",
            value: function matchDeclaration(node) {
                if (node.type !== "Declaration") {
                    return buildMatchResult(null, new Error("Not a Declaration node"));
                }
                return this.matchProperty(node.property, node.value);
            }
        },
        {
            key: "matchProperty",
            value: function matchProperty(propertyName, value) {
                if (property(propertyName).custom) {
                    return buildMatchResult(null, new Error("Lexer matching doesn't applicable for custom properties"));
                }
                var error = this.checkPropertyName(propertyName);
                if (error) {
                    return buildMatchResult(null, error);
                }
                return matchSyntax(this, this.getProperty(propertyName), value, true);
            }
        },
        {
            key: "matchType",
            value: function matchType(typeName, value) {
                var typeSyntax = this.getType(typeName);
                if (!typeSyntax) {
                    return buildMatchResult(null, new SyntaxReferenceError("Unknown type", typeName));
                }
                return matchSyntax(this, typeSyntax, value, false);
            }
        },
        {
            key: "match",
            value: function match(syntax, value) {
                if (typeof syntax !== "string" && (!syntax || !syntax.type)) {
                    return buildMatchResult(null, new SyntaxReferenceError("Bad syntax"));
                }
                if (typeof syntax === "string" || !syntax.match) {
                    syntax = this.createDescriptor(syntax, "Type", "anonymous");
                }
                return matchSyntax(this, syntax, value, false);
            }
        },
        {
            key: "findValueFragments",
            value: function findValueFragments(propertyName, value, type, name50) {
                return matchFragments(this, value, this.matchProperty(propertyName, value), type, name50);
            }
        },
        {
            key: "findDeclarationValueFragments",
            value: function findDeclarationValueFragments(declaration, type, name50) {
                return matchFragments(this, declaration.value, this.matchDeclaration(declaration), type, name50);
            }
        },
        {
            key: "findAllFragments",
            value: function findAllFragments(ast, type, name50) {
                var _this = this;
                var result = [];
                this.syntax.walk(ast, {
                    visit: "Declaration",
                    enter: function(declaration) {
                        result.push.apply(result, _this.findDeclarationValueFragments(declaration, type, name50));
                    }
                });
                return result;
            }
        },
        {
            key: "getAtrule",
            value: function getAtrule(atruleName) {
                var fallbackBasename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var atrule = keyword(atruleName);
                var atruleEntry = atrule.vendor && fallbackBasename ? this.atrules[atrule.name] || this.atrules[atrule.basename] : this.atrules[atrule.name];
                return atruleEntry || null;
            }
        },
        {
            key: "getAtrulePrelude",
            value: function getAtrulePrelude(atruleName) {
                var fallbackBasename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var atrule = this.getAtrule(atruleName, fallbackBasename);
                return atrule && atrule.prelude || null;
            }
        },
        {
            key: "getAtruleDescriptor",
            value: function getAtruleDescriptor(atruleName, name50) {
                return this.atrules.hasOwnProperty(atruleName) && this.atrules.declarators ? this.atrules[atruleName].declarators[name50] || null : null;
            }
        },
        {
            key: "getProperty",
            value: function getProperty(propertyName) {
                var fallbackBasename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var property2 = property(propertyName);
                var propertyEntry = property2.vendor && fallbackBasename ? this.properties[property2.name] || this.properties[property2.basename] : this.properties[property2.name];
                return propertyEntry || null;
            }
        },
        {
            key: "getType",
            value: function getType(name50) {
                return hasOwnProperty.call(this.types, name50) ? this.types[name50] : null;
            }
        },
        {
            key: "validate",
            value: function validate() {
                function syntaxRef(name50, isType2) {
                    return isType2 ? "<".concat(name50, ">") : "<'".concat(name50, "'>");
                }
                function validate(syntax, name50, broken, descriptor) {
                    if (broken.has(name50)) {
                        return broken.get(name50);
                    }
                    broken.set(name50, false);
                    if (descriptor.syntax !== null) {
                        walk(descriptor.syntax, function(node) {
                            if (node.type !== "Type" && node.type !== "Property") {
                                return;
                            }
                            var map = node.type === "Type" ? syntax.types : syntax.properties;
                            var brokenMap = node.type === "Type" ? brokenTypes : brokenProperties;
                            if (!hasOwnProperty.call(map, node.name)) {
                                errors.push("".concat(syntaxRef(name50, broken === brokenTypes), " used missed syntax definition ").concat(syntaxRef(node.name, node.type === "Type")));
                                broken.set(name50, true);
                            } else if (validate(syntax, node.name, brokenMap, map[node.name])) {
                                errors.push("".concat(syntaxRef(name50, broken === brokenTypes), " used broken syntax definition ").concat(syntaxRef(node.name, node.type === "Type")));
                                broken.set(name50, true);
                            }
                        }, this);
                    }
                }
                var errors = [];
                var brokenTypes = /* @__PURE__ */ new Map();
                var brokenProperties = /* @__PURE__ */ new Map();
                for(var key in this.types){
                    validate(this, key, brokenTypes, this.types[key]);
                }
                for(var key1 in this.properties){
                    validate(this, key1, brokenProperties, this.properties[key1]);
                }
                var brokenTypesArray = _to_consumable_array(brokenTypes.keys()).filter(function(name50) {
                    return brokenTypes.get(name50);
                });
                var brokenPropertiesArray = _to_consumable_array(brokenProperties.keys()).filter(function(name50) {
                    return brokenProperties.get(name50);
                });
                if (brokenTypesArray.length || brokenPropertiesArray.length) {
                    return {
                        errors: errors,
                        types: brokenTypesArray,
                        properties: brokenPropertiesArray
                    };
                }
                return null;
            }
        },
        {
            key: "dump",
            value: function dump(syntaxAsAst, pretty) {
                return {
                    generic: this.generic,
                    cssWideKeywords: this.cssWideKeywords,
                    units: this.units,
                    types: dumpMapSyntax(this.types, !pretty, syntaxAsAst),
                    properties: dumpMapSyntax(this.properties, !pretty, syntaxAsAst),
                    atrules: dumpAtruleMapSyntax(this.atrules, !pretty, syntaxAsAst)
                };
            }
        },
        {
            key: "toString",
            value: function toString() {
                return JSON.stringify(this.dump());
            }
        }
    ]);
    return Lexer;
}();
// node_modules/css-tree/lib/syntax/config/mix.js
function appendOrSet(a, b) {
    if (typeof b === "string" && /^\s*\|/.test(b)) {
        return typeof a === "string" ? a + b : b.replace(/^\s*\|\s*/, "");
    }
    return b || null;
}
function sliceProps(obj, props) {
    var result = /* @__PURE__ */ Object.create(null);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (value) {
                result[key] = {};
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Object.keys(value)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var prop = _step1.value;
                        if (props.includes(prop)) {
                            result[key][prop] = value[prop];
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
function mix(dest, src) {
    var result = _object_spread({}, dest);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(src)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), prop = _step_value[0], value = _step_value[1];
            switch(prop){
                case "generic":
                    result[prop] = Boolean(value);
                    break;
                case "cssWideKeywords":
                    result[prop] = dest[prop] ? _to_consumable_array(dest[prop]).concat(_to_consumable_array(value)) : value || [];
                    break;
                case "units":
                    result[prop] = _object_spread({}, dest[prop]);
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = Object.entries(value)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _step_value1 = _sliced_to_array(_step1.value, 2), name50 = _step_value1[0], patch2 = _step_value1[1];
                            result[prop][name50] = Array.isArray(patch2) ? patch2 : [];
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    break;
                case "atrules":
                    result[prop] = _object_spread({}, dest[prop]);
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = Object.entries(value)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var _step_value2 = _sliced_to_array(_step2.value, 2), name501 = _step_value2[0], atrule = _step_value2[1];
                            var exists = result[prop][name501] || {};
                            var current = result[prop][name501] = {
                                prelude: exists.prelude || null,
                                descriptors: _object_spread({}, exists.descriptors)
                            };
                            if (!atrule) {
                                continue;
                            }
                            current.prelude = atrule.prelude ? appendOrSet(current.prelude, atrule.prelude) : current.prelude || null;
                            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                            try {
                                for(var _iterator3 = Object.entries(atrule.descriptors || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                    var _step_value3 = _sliced_to_array(_step3.value, 2), descriptorName = _step_value3[0], descriptorValue = _step_value3[1];
                                    current.descriptors[descriptorName] = descriptorValue ? appendOrSet(current.descriptors[descriptorName], descriptorValue) : null;
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                } finally{
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                            if (!Object.keys(current.descriptors).length) {
                                current.descriptors = null;
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                _iterator2.return();
                            }
                        } finally{
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                    break;
                case "types":
                case "properties":
                    result[prop] = _object_spread({}, dest[prop]);
                    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                    try {
                        for(var _iterator4 = Object.entries(value)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                            var _step_value4 = _sliced_to_array(_step4.value, 2), name502 = _step_value4[0], syntax = _step_value4[1];
                            result[prop][name502] = appendOrSet(result[prop][name502], syntax);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                _iterator4.return();
                            }
                        } finally{
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                    break;
                case "scope":
                case "features":
                    result[prop] = _object_spread({}, dest[prop]);
                    var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                    try {
                        for(var _iterator5 = Object.entries(value)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                            var _step_value5 = _sliced_to_array(_step5.value, 2), name503 = _step_value5[0], props = _step_value5[1];
                            result[prop][name503] = _object_spread({}, result[prop][name503], props);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                _iterator5.return();
                            }
                        } finally{
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                    break;
                case "parseContext":
                    result[prop] = _object_spread({}, dest[prop], value);
                    break;
                case "atrule":
                case "pseudo":
                    result[prop] = _object_spread({}, dest[prop], sliceProps(value, [
                        "parse"
                    ]));
                    break;
                case "node":
                    result[prop] = _object_spread({}, dest[prop], sliceProps(value, [
                        "name",
                        "structure",
                        "parse",
                        "generate",
                        "walkContext"
                    ]));
                    break;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
// node_modules/css-tree/lib/syntax/create.js
function createSyntax(config) {
    var parse53 = createParser(config);
    var walk3 = createWalker(config);
    var generate53 = createGenerator(config);
    var _createConvertor = createConvertor(walk3), fromPlainObject2 = _createConvertor.fromPlainObject, toPlainObject2 = _createConvertor.toPlainObject;
    var syntax = {
        lexer: null,
        createLexer: function(config2) {
            return new Lexer(config2, syntax, syntax.lexer.structure);
        },
        tokenize: tokenize,
        parse: parse53,
        generate: generate53,
        walk: walk3,
        find: walk3.find,
        findLast: walk3.findLast,
        findAll: walk3.findAll,
        fromPlainObject: fromPlainObject2,
        toPlainObject: toPlainObject2,
        fork: function fork(extension) {
            var base = mix({}, config);
            return createSyntax(typeof extension === "function" ? extension(base) : mix(base, extension));
        }
    };
    syntax.lexer = new Lexer({
        generic: config.generic,
        cssWideKeywords: config.cssWideKeywords,
        units: config.units,
        types: config.types,
        atrules: config.atrules,
        properties: config.properties,
        node: config.node
    }, syntax);
    return syntax;
}
var create_default = function(config) {
    return createSyntax(mix({}, config));
};
var require2 = module$1.createRequire(typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('index.js', document.baseURI).href);
var patch = require2("../data/patch.json");
var data_patch_default = patch;
// node_modules/css-tree/lib/data.js
var require3 = module$1.createRequire(typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('index.js', document.baseURI).href);
var mdnAtrules = require3("mdn-data/css/at-rules.json");
var mdnProperties = require3("mdn-data/css/properties.json");
var mdnSyntaxes = require3("mdn-data/css/syntaxes.json");
var hasOwn = Object.hasOwn || function(object, property2) {
    return Object.prototype.hasOwnProperty.call(object, property2);
};
var extendSyntax = /^\s*\|\s*/;
function preprocessAtrules(dict) {
    var result = /* @__PURE__ */ Object.create(null);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(dict)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), atruleName = _step_value[0], atrule = _step_value[1];
            var descriptors = null;
            if (atrule.descriptors) {
                descriptors = /* @__PURE__ */ Object.create(null);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Object.entries(atrule.descriptors)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value1 = _sliced_to_array(_step1.value, 2), name50 = _step_value1[0], descriptor = _step_value1[1];
                        descriptors[name50] = descriptor.syntax;
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
            result[atruleName.substr(1)] = {
                prelude: atrule.syntax.trim().replace(/\{(.|\s)+\}/, "").match(/^@\S+\s+([^;\{]*)/)[1].trim() || null,
                descriptors: descriptors
            };
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
function patchDictionary(dict, patchDict) {
    var result = /* @__PURE__ */ Object.create(null);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(dict)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (value) {
                result[key] = value.syntax || value;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = Object.keys(patchDict)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var key1 = _step1.value;
            if (hasOwn(dict, key1)) {
                if (patchDict[key1].syntax) {
                    result[key1] = extendSyntax.test(patchDict[key1].syntax) ? result[key1] + " " + patchDict[key1].syntax.trim() : patchDict[key1].syntax;
                } else {
                    delete result[key1];
                }
            } else {
                if (patchDict[key1].syntax) {
                    result[key1] = patchDict[key1].syntax.replace(extendSyntax, "");
                }
            }
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    return result;
}
function preprocessPatchAtrulesDescritors(declarations) {
    var result = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(declarations || {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
            result[key] = typeof value === "string" ? {
                syntax: value
            } : value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
function patchAtrules(dict, patchDict) {
    var result = {};
    for(var key in dict){
        if (patchDict[key] === null) {
            continue;
        }
        var atrulePatch = patchDict[key] || {};
        result[key] = {
            prelude: key in patchDict && "prelude" in atrulePatch ? atrulePatch.prelude : dict[key].prelude || null,
            descriptors: patchDictionary(dict[key].descriptors || {}, preprocessPatchAtrulesDescritors(atrulePatch.descriptors))
        };
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(patchDict)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key1 = _step_value[0], atrulePatch1 = _step_value[1];
            if (atrulePatch1 && !hasOwn(dict, key1)) {
                result[key1] = {
                    prelude: atrulePatch1.prelude || null,
                    descriptors: atrulePatch1.descriptors ? patchDictionary({}, preprocessPatchAtrulesDescritors(atrulePatch1.descriptors)) : null
                };
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return result;
}
var data_default = {
    types: patchDictionary(mdnSyntaxes, data_patch_default.types),
    atrules: patchAtrules(preprocessAtrules(mdnAtrules), data_patch_default.atrules),
    properties: patchDictionary(mdnProperties, data_patch_default.properties)
};
// node_modules/css-tree/lib/syntax/node/index.js
var node_exports = {};
__export(node_exports, {
    AnPlusB: function() {
        return AnPlusB_exports;
    },
    Atrule: function() {
        return Atrule_exports;
    },
    AtrulePrelude: function() {
        return AtrulePrelude_exports;
    },
    AttributeSelector: function() {
        return AttributeSelector_exports;
    },
    Block: function() {
        return Block_exports;
    },
    Brackets: function() {
        return Brackets_exports;
    },
    CDC: function() {
        return CDC_exports;
    },
    CDO: function() {
        return CDO_exports;
    },
    ClassSelector: function() {
        return ClassSelector_exports;
    },
    Combinator: function() {
        return Combinator_exports;
    },
    Comment: function() {
        return Comment_exports;
    },
    Condition: function() {
        return Condition_exports;
    },
    Declaration: function() {
        return Declaration_exports;
    },
    DeclarationList: function() {
        return DeclarationList_exports;
    },
    Dimension: function() {
        return Dimension_exports;
    },
    Feature: function() {
        return Feature_exports;
    },
    FeatureFunction: function() {
        return FeatureFunction_exports;
    },
    FeatureRange: function() {
        return FeatureRange_exports;
    },
    Function: function() {
        return Function_exports;
    },
    GeneralEnclosed: function() {
        return GeneralEnclosed_exports;
    },
    Hash: function() {
        return Hash_exports;
    },
    IdSelector: function() {
        return IdSelector_exports;
    },
    Identifier: function() {
        return Identifier_exports;
    },
    Layer: function() {
        return Layer_exports;
    },
    LayerList: function() {
        return LayerList_exports;
    },
    MediaQuery: function() {
        return MediaQuery_exports;
    },
    MediaQueryList: function() {
        return MediaQueryList_exports;
    },
    NestingSelector: function() {
        return NestingSelector_exports;
    },
    Nth: function() {
        return Nth_exports;
    },
    Number: function() {
        return Number_exports;
    },
    Operator: function() {
        return Operator_exports;
    },
    Parentheses: function() {
        return Parentheses_exports;
    },
    Percentage: function() {
        return Percentage_exports;
    },
    PseudoClassSelector: function() {
        return PseudoClassSelector_exports;
    },
    PseudoElementSelector: function() {
        return PseudoElementSelector_exports;
    },
    Ratio: function() {
        return Ratio_exports;
    },
    Raw: function() {
        return Raw_exports;
    },
    Rule: function() {
        return Rule_exports;
    },
    Scope: function() {
        return Scope_exports;
    },
    Selector: function() {
        return Selector_exports;
    },
    SelectorList: function() {
        return SelectorList_exports;
    },
    String: function() {
        return String_exports;
    },
    StyleSheet: function() {
        return StyleSheet_exports;
    },
    SupportsDeclaration: function() {
        return SupportsDeclaration_exports;
    },
    TypeSelector: function() {
        return TypeSelector_exports;
    },
    UnicodeRange: function() {
        return UnicodeRange_exports;
    },
    Url: function() {
        return Url_exports;
    },
    Value: function() {
        return Value_exports;
    },
    WhiteSpace: function() {
        return WhiteSpace_exports;
    }
});
// node_modules/css-tree/lib/syntax/node/AnPlusB.js
var AnPlusB_exports = {};
__export(AnPlusB_exports, {
    generate: function() {
        return generate2;
    },
    name: function() {
        return name;
    },
    parse: function() {
        return parse2;
    },
    structure: function() {
        return structure;
    }
});
var PLUSSIGN5 = 43;
var HYPHENMINUS5 = 45;
var N5 = 110;
var DISALLOW_SIGN2 = true;
var ALLOW_SIGN2 = false;
function checkInteger2(offset, disallowSign) {
    var pos = this.tokenStart + offset;
    var code2 = this.charCodeAt(pos);
    if (code2 === PLUSSIGN5 || code2 === HYPHENMINUS5) {
        if (disallowSign) {
            this.error("Number sign is not allowed");
        }
        pos++;
    }
    for(; pos < this.tokenEnd; pos++){
        if (!isDigit(this.charCodeAt(pos))) {
            this.error("Integer is expected", pos);
        }
    }
}
function checkTokenIsInteger(disallowSign) {
    return checkInteger2.call(this, 0, disallowSign);
}
function expectCharCode(offset, code2) {
    if (!this.cmpChar(this.tokenStart + offset, code2)) {
        var msg = "";
        switch(code2){
            case N5:
                msg = "N is expected";
                break;
            case HYPHENMINUS5:
                msg = "HyphenMinus is expected";
                break;
        }
        this.error(msg, this.tokenStart + offset);
    }
}
function consumeB2() {
    var offset = 0;
    var sign = 0;
    var type = this.tokenType;
    while(type === WhiteSpace || type === Comment){
        type = this.lookupType(++offset);
    }
    if (type !== Number2) {
        if (this.isDelim(PLUSSIGN5, offset) || this.isDelim(HYPHENMINUS5, offset)) {
            sign = this.isDelim(PLUSSIGN5, offset) ? PLUSSIGN5 : HYPHENMINUS5;
            do {
                type = this.lookupType(++offset);
            }while (type === WhiteSpace || type === Comment);
            if (type !== Number2) {
                this.skip(offset);
                checkTokenIsInteger.call(this, DISALLOW_SIGN2);
            }
        } else {
            return null;
        }
    }
    if (offset > 0) {
        this.skip(offset);
    }
    if (sign === 0) {
        type = this.charCodeAt(this.tokenStart);
        if (type !== PLUSSIGN5 && type !== HYPHENMINUS5) {
            this.error("Number sign is expected");
        }
    }
    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS5 ? "-" + this.consume(Number2) : this.consume(Number2);
}
var name = "AnPlusB";
var structure = {
    a: [
        String,
        null
    ],
    b: [
        String,
        null
    ]
};
function parse2() {
    var start = this.tokenStart;
    var a = null;
    var b = null;
    if (this.tokenType === Number2) {
        checkTokenIsInteger.call(this, ALLOW_SIGN2);
        b = this.consume(Number2);
    } else if (this.tokenType === Ident && this.cmpChar(this.tokenStart, HYPHENMINUS5)) {
        a = "-1";
        expectCharCode.call(this, 1, N5);
        switch(this.tokenEnd - this.tokenStart){
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                this.next();
                b = consumeB2.call(this);
                break;
            // -n- <signless-integer>
            case 3:
                expectCharCode.call(this, 2, HYPHENMINUS5);
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN2);
                b = "-" + this.consume(Number2);
                break;
            // <dashndashdigit-ident>
            default:
                expectCharCode.call(this, 2, HYPHENMINUS5);
                checkInteger2.call(this, 3, DISALLOW_SIGN2);
                this.next();
                b = this.substrToCursor(start + 2);
        }
    } else if (this.tokenType === Ident || this.isDelim(PLUSSIGN5) && this.lookupType(1) === Ident) {
        var sign = 0;
        a = "1";
        if (this.isDelim(PLUSSIGN5)) {
            sign = 1;
            this.next();
        }
        expectCharCode.call(this, 0, N5);
        switch(this.tokenEnd - this.tokenStart){
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                this.next();
                b = consumeB2.call(this);
                break;
            // '+'? n- <signless-integer>
            case 2:
                expectCharCode.call(this, 1, HYPHENMINUS5);
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN2);
                b = "-" + this.consume(Number2);
                break;
            // '+'? <ndashdigit-ident>
            default:
                expectCharCode.call(this, 1, HYPHENMINUS5);
                checkInteger2.call(this, 2, DISALLOW_SIGN2);
                this.next();
                b = this.substrToCursor(start + sign + 1);
        }
    } else if (this.tokenType === Dimension) {
        var code2 = this.charCodeAt(this.tokenStart);
        var sign1 = code2 === PLUSSIGN5 || code2 === HYPHENMINUS5;
        var i = this.tokenStart + sign1;
        for(; i < this.tokenEnd; i++){
            if (!isDigit(this.charCodeAt(i))) {
                break;
            }
        }
        if (i === this.tokenStart + sign1) {
            this.error("Integer is expected", this.tokenStart + sign1);
        }
        expectCharCode.call(this, i - this.tokenStart, N5);
        a = this.substring(start, i);
        if (i + 1 === this.tokenEnd) {
            this.next();
            b = consumeB2.call(this);
        } else {
            expectCharCode.call(this, i - this.tokenStart + 1, HYPHENMINUS5);
            if (i + 2 === this.tokenEnd) {
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN2);
                b = "-" + this.consume(Number2);
            } else {
                checkInteger2.call(this, i - this.tokenStart + 2, DISALLOW_SIGN2);
                this.next();
                b = this.substrToCursor(i + 1);
            }
        }
    } else {
        this.error();
    }
    if (a !== null && a.charCodeAt(0) === PLUSSIGN5) {
        a = a.substr(1);
    }
    if (b !== null && b.charCodeAt(0) === PLUSSIGN5) {
        b = b.substr(1);
    }
    return {
        type: "AnPlusB",
        loc: this.getLocation(start, this.tokenStart),
        a: a,
        b: b
    };
}
function generate2(node) {
    if (node.a) {
        var a = node.a === "+1" && "n" || node.a === "1" && "n" || node.a === "-1" && "-n" || node.a + "n";
        if (node.b) {
            var b = node.b[0] === "-" || node.b[0] === "+" ? node.b : "+" + node.b;
            this.tokenize(a + b);
        } else {
            this.tokenize(a);
        }
    } else {
        this.tokenize(node.b);
    }
}
// node_modules/css-tree/lib/syntax/node/Atrule.js
var Atrule_exports = {};
__export(Atrule_exports, {
    generate: function() {
        return generate3;
    },
    name: function() {
        return name2;
    },
    parse: function() {
        return parse3;
    },
    structure: function() {
        return structure2;
    },
    walkContext: function() {
        return walkContext;
    }
});
function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
}
function isDeclarationBlockAtrule() {
    for(var offset = 1, type; type = this.lookupType(offset); offset++){
        if (type === RightCurlyBracket) {
            return true;
        }
        if (type === LeftCurlyBracket || type === AtKeyword) {
            return false;
        }
    }
    return false;
}
var name2 = "Atrule";
var walkContext = "atrule";
var structure2 = {
    name: String,
    prelude: [
        "AtrulePrelude",
        "Raw",
        null
    ],
    block: [
        "Block",
        null
    ]
};
function parse3() {
    var isDeclaration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var start = this.tokenStart;
    var name50;
    var nameLowerCase;
    var prelude = null;
    var block = null;
    this.eat(AtKeyword);
    name50 = this.substrToCursor(start + 1);
    nameLowerCase = name50.toLowerCase();
    this.skipSC();
    if (this.eof === false && this.tokenType !== LeftCurlyBracket && this.tokenType !== Semicolon) {
        if (this.parseAtrulePrelude) {
            prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name50, isDeclaration), consumeRaw);
        } else {
            prelude = consumeRaw.call(this, this.tokenIndex);
        }
        this.skipSC();
    }
    switch(this.tokenType){
        case Semicolon:
            this.next();
            break;
        case LeftCurlyBracket:
            if (hasOwnProperty.call(this.atrule, nameLowerCase) && typeof this.atrule[nameLowerCase].block === "function") {
                block = this.atrule[nameLowerCase].block.call(this, isDeclaration);
            } else {
                block = this.Block(isDeclarationBlockAtrule.call(this));
            }
            break;
    }
    return {
        type: "Atrule",
        loc: this.getLocation(start, this.tokenStart),
        name: name50,
        prelude: prelude,
        block: block
    };
}
function generate3(node) {
    this.token(AtKeyword, "@" + node.name);
    if (node.prelude !== null) {
        this.node(node.prelude);
    }
    if (node.block) {
        this.node(node.block);
    } else {
        this.token(Semicolon, ";");
    }
}
// node_modules/css-tree/lib/syntax/node/AtrulePrelude.js
var AtrulePrelude_exports = {};
__export(AtrulePrelude_exports, {
    generate: function() {
        return generate4;
    },
    name: function() {
        return name3;
    },
    parse: function() {
        return parse4;
    },
    structure: function() {
        return structure3;
    },
    walkContext: function() {
        return walkContext2;
    }
});
var name3 = "AtrulePrelude";
var walkContext2 = "atrulePrelude";
var structure3 = {
    children: [
        []
    ]
};
function parse4(name50) {
    var children = null;
    if (name50 !== null) {
        name50 = name50.toLowerCase();
    }
    this.skipSC();
    if (hasOwnProperty.call(this.atrule, name50) && typeof this.atrule[name50].prelude === "function") {
        children = this.atrule[name50].prelude.call(this);
    } else {
        children = this.readSequence(this.scope.AtrulePrelude);
    }
    this.skipSC();
    if (this.eof !== true && this.tokenType !== LeftCurlyBracket && this.tokenType !== Semicolon) {
        this.error("Semicolon or block is expected");
    }
    return {
        type: "AtrulePrelude",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate4(node) {
    this.children(node);
}
// node_modules/css-tree/lib/syntax/node/AttributeSelector.js
var AttributeSelector_exports = {};
__export(AttributeSelector_exports, {
    generate: function() {
        return generate5;
    },
    name: function() {
        return name4;
    },
    parse: function() {
        return parse5;
    },
    structure: function() {
        return structure4;
    }
});
var DOLLARSIGN = 36;
var ASTERISK2 = 42;
var EQUALSSIGN = 61;
var CIRCUMFLEXACCENT = 94;
var VERTICALLINE2 = 124;
var TILDE = 126;
function getAttributeName() {
    if (this.eof) {
        this.error("Unexpected end of input");
    }
    var start = this.tokenStart;
    var expectIdent = false;
    if (this.isDelim(ASTERISK2)) {
        expectIdent = true;
        this.next();
    } else if (!this.isDelim(VERTICALLINE2)) {
        this.eat(Ident);
    }
    if (this.isDelim(VERTICALLINE2)) {
        if (this.charCodeAt(this.tokenStart + 1) !== EQUALSSIGN) {
            this.next();
            this.eat(Ident);
        } else if (expectIdent) {
            this.error("Identifier is expected", this.tokenEnd);
        }
    } else if (expectIdent) {
        this.error("Vertical line is expected");
    }
    return {
        type: "Identifier",
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}
function getOperator() {
    var start = this.tokenStart;
    var code2 = this.charCodeAt(start);
    if (code2 !== EQUALSSIGN && // =
    code2 !== TILDE && // ~=
    code2 !== CIRCUMFLEXACCENT && // ^=
    code2 !== DOLLARSIGN && // $=
    code2 !== ASTERISK2 && // *=
    code2 !== VERTICALLINE2) {
        this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
    }
    this.next();
    if (code2 !== EQUALSSIGN) {
        if (!this.isDelim(EQUALSSIGN)) {
            this.error("Equal sign is expected");
        }
        this.next();
    }
    return this.substrToCursor(start);
}
var name4 = "AttributeSelector";
var structure4 = {
    name: "Identifier",
    matcher: [
        String,
        null
    ],
    value: [
        "String",
        "Identifier",
        null
    ],
    flags: [
        String,
        null
    ]
};
function parse5() {
    var start = this.tokenStart;
    var name50;
    var matcher = null;
    var value = null;
    var flags = null;
    this.eat(LeftSquareBracket);
    this.skipSC();
    name50 = getAttributeName.call(this);
    this.skipSC();
    if (this.tokenType !== RightSquareBracket) {
        if (this.tokenType !== Ident) {
            matcher = getOperator.call(this);
            this.skipSC();
            value = this.tokenType === String2 ? this.String() : this.Identifier();
            this.skipSC();
        }
        if (this.tokenType === Ident) {
            flags = this.consume(Ident);
            this.skipSC();
        }
    }
    this.eat(RightSquareBracket);
    return {
        type: "AttributeSelector",
        loc: this.getLocation(start, this.tokenStart),
        name: name50,
        matcher: matcher,
        value: value,
        flags: flags
    };
}
function generate5(node) {
    this.token(Delim, "[");
    this.node(node.name);
    if (node.matcher !== null) {
        this.tokenize(node.matcher);
        this.node(node.value);
    }
    if (node.flags !== null) {
        this.token(Ident, node.flags);
    }
    this.token(Delim, "]");
}
// node_modules/css-tree/lib/syntax/node/Block.js
var Block_exports = {};
__export(Block_exports, {
    generate: function() {
        return generate6;
    },
    name: function() {
        return name5;
    },
    parse: function() {
        return parse6;
    },
    structure: function() {
        return structure5;
    },
    walkContext: function() {
        return walkContext3;
    }
});
var AMPERSAND2 = 38;
function consumeRaw2() {
    return this.Raw(null, true);
}
function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw2);
}
function consumeRawDeclaration() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
function consumeDeclaration() {
    if (this.tokenType === Semicolon) {
        return consumeRawDeclaration.call(this, this.tokenIndex);
    }
    var node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);
    if (this.tokenType === Semicolon) {
        this.next();
    }
    return node;
}
var name5 = "Block";
var walkContext3 = "block";
var structure5 = {
    children: [
        [
            "Atrule",
            "Rule",
            "Declaration"
        ]
    ]
};
function parse6(isStyleBlock) {
    var consumer = isStyleBlock ? consumeDeclaration : consumeRule;
    var start = this.tokenStart;
    var children = this.createList();
    this.eat(LeftCurlyBracket);
    scan: while(!this.eof){
        switch(this.tokenType){
            case RightCurlyBracket:
                break scan;
            case WhiteSpace:
            case Comment:
                this.next();
                break;
            case AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, isStyleBlock), consumeRaw2));
                break;
            default:
                if (isStyleBlock && this.isDelim(AMPERSAND2)) {
                    children.push(consumeRule.call(this));
                } else {
                    children.push(consumer.call(this));
                }
        }
    }
    if (!this.eof) {
        this.eat(RightCurlyBracket);
    }
    return {
        type: "Block",
        loc: this.getLocation(start, this.tokenStart),
        children: children
    };
}
function generate6(node) {
    var _this = this;
    this.token(LeftCurlyBracket, "{");
    this.children(node, function(prev) {
        if (prev.type === "Declaration") {
            _this.token(Semicolon, ";");
        }
    });
    this.token(RightCurlyBracket, "}");
}
// node_modules/css-tree/lib/syntax/node/Brackets.js
var Brackets_exports = {};
__export(Brackets_exports, {
    generate: function() {
        return generate7;
    },
    name: function() {
        return name6;
    },
    parse: function() {
        return parse7;
    },
    structure: function() {
        return structure6;
    }
});
var name6 = "Brackets";
var structure6 = {
    children: [
        []
    ]
};
function parse7(readSequence2, recognizer) {
    var start = this.tokenStart;
    var children = null;
    this.eat(LeftSquareBracket);
    children = readSequence2.call(this, recognizer);
    if (!this.eof) {
        this.eat(RightSquareBracket);
    }
    return {
        type: "Brackets",
        loc: this.getLocation(start, this.tokenStart),
        children: children
    };
}
function generate7(node) {
    this.token(Delim, "[");
    this.children(node);
    this.token(Delim, "]");
}
// node_modules/css-tree/lib/syntax/node/CDC.js
var CDC_exports = {};
__export(CDC_exports, {
    generate: function() {
        return generate8;
    },
    name: function() {
        return name7;
    },
    parse: function() {
        return parse8;
    },
    structure: function() {
        return structure7;
    }
});
var name7 = "CDC";
var structure7 = [];
function parse8() {
    var start = this.tokenStart;
    this.eat(CDC);
    return {
        type: "CDC",
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate8() {
    this.token(CDC, "-->");
}
// node_modules/css-tree/lib/syntax/node/CDO.js
var CDO_exports = {};
__export(CDO_exports, {
    generate: function() {
        return generate9;
    },
    name: function() {
        return name8;
    },
    parse: function() {
        return parse9;
    },
    structure: function() {
        return structure8;
    }
});
var name8 = "CDO";
var structure8 = [];
function parse9() {
    var start = this.tokenStart;
    this.eat(CDO);
    return {
        type: "CDO",
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate9() {
    this.token(CDO, "<!--");
}
// node_modules/css-tree/lib/syntax/node/ClassSelector.js
var ClassSelector_exports = {};
__export(ClassSelector_exports, {
    generate: function() {
        return generate10;
    },
    name: function() {
        return name9;
    },
    parse: function() {
        return parse10;
    },
    structure: function() {
        return structure9;
    }
});
var FULLSTOP = 46;
var name9 = "ClassSelector";
var structure9 = {
    name: String
};
function parse10() {
    this.eatDelim(FULLSTOP);
    return {
        type: "ClassSelector",
        loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
        name: this.consume(Ident)
    };
}
function generate10(node) {
    this.token(Delim, ".");
    this.token(Ident, node.name);
}
// node_modules/css-tree/lib/syntax/node/Combinator.js
var Combinator_exports = {};
__export(Combinator_exports, {
    generate: function() {
        return generate11;
    },
    name: function() {
        return name10;
    },
    parse: function() {
        return parse11;
    },
    structure: function() {
        return structure10;
    }
});
var PLUSSIGN6 = 43;
var SOLIDUS = 47;
var GREATERTHANSIGN2 = 62;
var TILDE2 = 126;
var name10 = "Combinator";
var structure10 = {
    name: String
};
function parse11() {
    var start = this.tokenStart;
    var name50;
    switch(this.tokenType){
        case WhiteSpace:
            name50 = " ";
            break;
        case Delim:
            switch(this.charCodeAt(this.tokenStart)){
                case GREATERTHANSIGN2:
                case PLUSSIGN6:
                case TILDE2:
                    this.next();
                    break;
                case SOLIDUS:
                    this.next();
                    this.eatIdent("deep");
                    this.eatDelim(SOLIDUS);
                    break;
                default:
                    this.error("Combinator is expected");
            }
            name50 = this.substrToCursor(start);
            break;
    }
    return {
        type: "Combinator",
        loc: this.getLocation(start, this.tokenStart),
        name: name50
    };
}
function generate11(node) {
    this.tokenize(node.name);
}
// node_modules/css-tree/lib/syntax/node/Comment.js
var Comment_exports = {};
__export(Comment_exports, {
    generate: function() {
        return generate12;
    },
    name: function() {
        return name11;
    },
    parse: function() {
        return parse12;
    },
    structure: function() {
        return structure11;
    }
});
var ASTERISK3 = 42;
var SOLIDUS2 = 47;
var name11 = "Comment";
var structure11 = {
    value: String
};
function parse12() {
    var start = this.tokenStart;
    var end = this.tokenEnd;
    this.eat(Comment);
    if (end - start + 2 >= 2 && this.charCodeAt(end - 2) === ASTERISK3 && this.charCodeAt(end - 1) === SOLIDUS2) {
        end -= 2;
    }
    return {
        type: "Comment",
        loc: this.getLocation(start, this.tokenStart),
        value: this.substring(start + 2, end)
    };
}
function generate12(node) {
    this.token(Comment, "/*" + node.value + "*/");
}
// node_modules/css-tree/lib/syntax/node/Condition.js
var Condition_exports = {};
__export(Condition_exports, {
    generate: function() {
        return generate13;
    },
    name: function() {
        return name12;
    },
    parse: function() {
        return parse13;
    },
    structure: function() {
        return structure12;
    }
});
var likelyFeatureToken = /* @__PURE__ */ new Set([
    Colon,
    RightParenthesis,
    EOF
]);
var name12 = "Condition";
var structure12 = {
    kind: String,
    children: [
        [
            "Identifier",
            "Feature",
            "FeatureFunction",
            "FeatureRange",
            "SupportsDeclaration"
        ]
    ]
};
function featureOrRange(kind) {
    if (this.lookupTypeNonSC(1) === Ident && likelyFeatureToken.has(this.lookupTypeNonSC(2))) {
        return this.Feature(kind);
    }
    return this.FeatureRange(kind);
}
var parentheses = {
    media: featureOrRange,
    container: featureOrRange,
    supports: function supports() {
        return this.SupportsDeclaration();
    }
};
function parse13() {
    var _this = this;
    var kind = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "media";
    var children = this.createList();
    scan: while(!this.eof){
        switch(this.tokenType){
            case Comment:
            case WhiteSpace:
                this.next();
                continue;
            case Ident:
                children.push(this.Identifier());
                break;
            case LeftParenthesis:
                {
                    var term = this.parseWithFallback(function() {
                        return parentheses[kind].call(_this, kind);
                    }, function() {
                        return null;
                    });
                    if (!term) {
                        term = this.parseWithFallback(function() {
                            _this.eat(LeftParenthesis);
                            var res = _this.Condition(kind);
                            _this.eat(RightParenthesis);
                            return res;
                        }, function() {
                            return _this.GeneralEnclosed(kind);
                        });
                    }
                    children.push(term);
                    break;
                }
            case Function:
                {
                    var term1 = this.parseWithFallback(function() {
                        return _this.FeatureFunction(kind);
                    }, function() {
                        return null;
                    });
                    if (!term1) {
                        term1 = this.GeneralEnclosed(kind);
                    }
                    children.push(term1);
                    break;
                }
            default:
                break scan;
        }
    }
    if (children.isEmpty) {
        this.error("Condition is expected");
    }
    return {
        type: "Condition",
        loc: this.getLocationFromList(children),
        kind: kind,
        children: children
    };
}
function generate13(node) {
    var _this = this;
    node.children.forEach(function(child) {
        if (child.type === "Condition") {
            _this.token(LeftParenthesis, "(");
            _this.node(child);
            _this.token(RightParenthesis, ")");
        } else {
            _this.node(child);
        }
    });
}
// node_modules/css-tree/lib/syntax/node/Declaration.js
var Declaration_exports = {};
__export(Declaration_exports, {
    generate: function() {
        return generate14;
    },
    name: function() {
        return name13;
    },
    parse: function() {
        return parse14;
    },
    structure: function() {
        return structure13;
    },
    walkContext: function() {
        return walkContext4;
    }
});
var EXCLAMATIONMARK3 = 33;
var NUMBERSIGN3 = 35;
var DOLLARSIGN2 = 36;
var AMPERSAND3 = 38;
var ASTERISK4 = 42;
var PLUSSIGN7 = 43;
var SOLIDUS3 = 47;
function consumeValueRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
}
function consumeCustomPropertyRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
}
function consumeValue() {
    var startValueToken = this.tokenIndex;
    var value = this.Value();
    if (value.type !== "Raw" && this.eof === false && this.tokenType !== Semicolon && this.isDelim(EXCLAMATIONMARK3) === false && this.isBalanceEdge(startValueToken) === false) {
        this.error();
    }
    return value;
}
var name13 = "Declaration";
var walkContext4 = "declaration";
var structure13 = {
    important: [
        Boolean,
        String
    ],
    property: String,
    value: [
        "Value",
        "Raw"
    ]
};
function parse14() {
    var start = this.tokenStart;
    var startToken = this.tokenIndex;
    var property2 = readProperty2.call(this);
    var customProperty = isCustomProperty(property2);
    var parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
    var consumeRaw6 = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
    var important = false;
    var value;
    this.skipSC();
    this.eat(Colon);
    var valueStart = this.tokenIndex;
    if (!customProperty) {
        this.skipSC();
    }
    if (parseValue) {
        value = this.parseWithFallback(consumeValue, consumeRaw6);
    } else {
        value = consumeRaw6.call(this, this.tokenIndex);
    }
    if (customProperty && value.type === "Value" && value.children.isEmpty) {
        for(var offset = valueStart - this.tokenIndex; offset <= 0; offset++){
            if (this.lookupType(offset) === WhiteSpace) {
                value.children.appendData({
                    type: "WhiteSpace",
                    loc: null,
                    value: " "
                });
                break;
            }
        }
    }
    if (this.isDelim(EXCLAMATIONMARK3)) {
        important = getImportant.call(this);
        this.skipSC();
    }
    if (this.eof === false && this.tokenType !== Semicolon && this.isBalanceEdge(startToken) === false) {
        this.error();
    }
    return {
        type: "Declaration",
        loc: this.getLocation(start, this.tokenStart),
        important: important,
        property: property2,
        value: value
    };
}
function generate14(node) {
    this.token(Ident, node.property);
    this.token(Colon, ":");
    this.node(node.value);
    if (node.important) {
        this.token(Delim, "!");
        this.token(Ident, node.important === true ? "important" : node.important);
    }
}
function readProperty2() {
    var start = this.tokenStart;
    if (this.tokenType === Delim) {
        switch(this.charCodeAt(this.tokenStart)){
            case ASTERISK4:
            case DOLLARSIGN2:
            case PLUSSIGN7:
            case NUMBERSIGN3:
            case AMPERSAND3:
                this.next();
                break;
            // TODO: not sure we should support this hack
            case SOLIDUS3:
                this.next();
                if (this.isDelim(SOLIDUS3)) {
                    this.next();
                }
                break;
        }
    }
    if (this.tokenType === Hash) {
        this.eat(Hash);
    } else {
        this.eat(Ident);
    }
    return this.substrToCursor(start);
}
function getImportant() {
    this.eat(Delim);
    this.skipSC();
    var important = this.consume(Ident);
    return important === "important" ? true : important;
}
// node_modules/css-tree/lib/syntax/node/DeclarationList.js
var DeclarationList_exports = {};
__export(DeclarationList_exports, {
    generate: function() {
        return generate15;
    },
    name: function() {
        return name14;
    },
    parse: function() {
        return parse15;
    },
    structure: function() {
        return structure14;
    }
});
var AMPERSAND4 = 38;
function consumeRaw3() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
var name14 = "DeclarationList";
var structure14 = {
    children: [
        [
            "Declaration",
            "Atrule",
            "Rule"
        ]
    ]
};
function parse15() {
    var children = this.createList();
    while(!this.eof){
        switch(this.tokenType){
            case WhiteSpace:
            case Comment:
            case Semicolon:
                this.next();
                break;
            case AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, true), consumeRaw3));
                break;
            default:
                if (this.isDelim(AMPERSAND4)) {
                    children.push(this.parseWithFallback(this.Rule, consumeRaw3));
                } else {
                    children.push(this.parseWithFallback(this.Declaration, consumeRaw3));
                }
        }
    }
    return {
        type: "DeclarationList",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate15(node) {
    var _this = this;
    this.children(node, function(prev) {
        if (prev.type === "Declaration") {
            _this.token(Semicolon, ";");
        }
    });
}
// node_modules/css-tree/lib/syntax/node/Dimension.js
var Dimension_exports = {};
__export(Dimension_exports, {
    generate: function() {
        return generate16;
    },
    name: function() {
        return name15;
    },
    parse: function() {
        return parse16;
    },
    structure: function() {
        return structure15;
    }
});
var name15 = "Dimension";
var structure15 = {
    value: String,
    unit: String
};
function parse16() {
    var start = this.tokenStart;
    var value = this.consumeNumber(Dimension);
    return {
        type: "Dimension",
        loc: this.getLocation(start, this.tokenStart),
        value: value,
        unit: this.substring(start + value.length, this.tokenStart)
    };
}
function generate16(node) {
    this.token(Dimension, node.value + node.unit);
}
// node_modules/css-tree/lib/syntax/node/Feature.js
var Feature_exports = {};
__export(Feature_exports, {
    generate: function() {
        return generate17;
    },
    name: function() {
        return name16;
    },
    parse: function() {
        return parse17;
    },
    structure: function() {
        return structure16;
    }
});
var SOLIDUS4 = 47;
var name16 = "Feature";
var structure16 = {
    kind: String,
    name: String,
    value: [
        "Identifier",
        "Number",
        "Dimension",
        "Ratio",
        "Function",
        null
    ]
};
function parse17(kind) {
    var _this = this;
    var start = this.tokenStart;
    var name50;
    var value = null;
    this.eat(LeftParenthesis);
    this.skipSC();
    name50 = this.consume(Ident);
    this.skipSC();
    if (this.tokenType !== RightParenthesis) {
        this.eat(Colon);
        this.skipSC();
        switch(this.tokenType){
            case Number2:
                if (this.lookupNonWSType(1) === Delim) {
                    value = this.Ratio();
                } else {
                    value = this.Number();
                }
                break;
            case Dimension:
                value = this.Dimension();
                break;
            case Ident:
                value = this.Identifier();
                break;
            case Function:
                value = this.parseWithFallback(function() {
                    var res = _this.Function(_this.readSequence, _this.scope.Value);
                    _this.skipSC();
                    if (_this.isDelim(SOLIDUS4)) {
                        _this.error();
                    }
                    return res;
                }, function() {
                    return _this.Ratio();
                });
                break;
            default:
                this.error("Number, dimension, ratio or identifier is expected");
        }
        this.skipSC();
    }
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "Feature",
        loc: this.getLocation(start, this.tokenStart),
        kind: kind,
        name: name50,
        value: value
    };
}
function generate17(node) {
    this.token(LeftParenthesis, "(");
    this.token(Ident, node.name);
    if (node.value !== null) {
        this.token(Colon, ":");
        this.node(node.value);
    }
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/FeatureFunction.js
var FeatureFunction_exports = {};
__export(FeatureFunction_exports, {
    generate: function() {
        return generate18;
    },
    name: function() {
        return name17;
    },
    parse: function() {
        return parse18;
    },
    structure: function() {
        return structure17;
    }
});
var name17 = "FeatureFunction";
var structure17 = {
    kind: String,
    feature: String,
    value: [
        "Declaration",
        "Selector"
    ]
};
function getFeatureParser(kind, name50) {
    var featuresOfKind = this.features[kind] || {};
    var parser = featuresOfKind[name50];
    if (typeof parser !== "function") {
        this.error("Unknown feature ".concat(name50, "()"));
    }
    return parser;
}
function parse18() {
    var _this = this;
    var kind = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "unknown";
    var start = this.tokenStart;
    var functionName = this.consumeFunctionName();
    var valueParser = getFeatureParser.call(this, kind, functionName.toLowerCase());
    this.skipSC();
    var value = this.parseWithFallback(function() {
        var startValueToken = _this.tokenIndex;
        var value2 = valueParser.call(_this);
        if (_this.eof === false && _this.isBalanceEdge(startValueToken) === false) {
            _this.error();
        }
        return value2;
    }, function() {
        return _this.Raw(null, false);
    });
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "FeatureFunction",
        loc: this.getLocation(start, this.tokenStart),
        kind: kind,
        feature: functionName,
        value: value
    };
}
function generate18(node) {
    this.token(Function, node.feature + "(");
    this.node(node.value);
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/FeatureRange.js
var FeatureRange_exports = {};
__export(FeatureRange_exports, {
    generate: function() {
        return generate19;
    },
    name: function() {
        return name18;
    },
    parse: function() {
        return parse19;
    },
    structure: function() {
        return structure18;
    }
});
var SOLIDUS5 = 47;
var LESSTHANSIGN2 = 60;
var EQUALSSIGN2 = 61;
var GREATERTHANSIGN3 = 62;
var name18 = "FeatureRange";
var structure18 = {
    kind: String,
    left: [
        "Identifier",
        "Number",
        "Dimension",
        "Ratio",
        "Function"
    ],
    leftComparison: String,
    middle: [
        "Identifier",
        "Number",
        "Dimension",
        "Ratio",
        "Function"
    ],
    rightComparison: [
        String,
        null
    ],
    right: [
        "Identifier",
        "Number",
        "Dimension",
        "Ratio",
        "Function",
        null
    ]
};
function readTerm() {
    var _this = this;
    this.skipSC();
    switch(this.tokenType){
        case Number2:
            if (this.isDelim(SOLIDUS5, this.lookupOffsetNonSC(1))) {
                return this.Ratio();
            } else {
                return this.Number();
            }
        case Dimension:
            return this.Dimension();
        case Ident:
            return this.Identifier();
        case Function:
            return this.parseWithFallback(function() {
                var res = _this.Function(_this.readSequence, _this.scope.Value);
                _this.skipSC();
                if (_this.isDelim(SOLIDUS5)) {
                    _this.error();
                }
                return res;
            }, function() {
                return _this.Ratio();
            });
        default:
            this.error("Number, dimension, ratio or identifier is expected");
    }
}
function readComparison(expectColon) {
    this.skipSC();
    if (this.isDelim(LESSTHANSIGN2) || this.isDelim(GREATERTHANSIGN3)) {
        var value = this.source[this.tokenStart];
        this.next();
        if (this.isDelim(EQUALSSIGN2)) {
            this.next();
            return value + "=";
        }
        return value;
    }
    if (this.isDelim(EQUALSSIGN2)) {
        return "=";
    }
    this.error("Expected ".concat(expectColon ? '":", ' : "", '"<", ">", "=" or ")"'));
}
function parse19() {
    var kind = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "unknown";
    var start = this.tokenStart;
    this.skipSC();
    this.eat(LeftParenthesis);
    var left = readTerm.call(this);
    var leftComparison = readComparison.call(this, left.type === "Identifier");
    var middle = readTerm.call(this);
    var rightComparison = null;
    var right = null;
    if (this.lookupNonWSType(0) !== RightParenthesis) {
        rightComparison = readComparison.call(this);
        right = readTerm.call(this);
    }
    this.skipSC();
    this.eat(RightParenthesis);
    return {
        type: "FeatureRange",
        loc: this.getLocation(start, this.tokenStart),
        kind: kind,
        left: left,
        leftComparison: leftComparison,
        middle: middle,
        rightComparison: rightComparison,
        right: right
    };
}
function generate19(node) {
    this.token(LeftParenthesis, "(");
    this.node(node.left);
    this.tokenize(node.leftComparison);
    this.node(node.middle);
    if (node.right) {
        this.tokenize(node.rightComparison);
        this.node(node.right);
    }
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/Function.js
var Function_exports = {};
__export(Function_exports, {
    generate: function() {
        return generate20;
    },
    name: function() {
        return name19;
    },
    parse: function() {
        return parse20;
    },
    structure: function() {
        return structure19;
    },
    walkContext: function() {
        return walkContext5;
    }
});
var name19 = "Function";
var walkContext5 = "function";
var structure19 = {
    name: String,
    children: [
        []
    ]
};
function parse20(readSequence2, recognizer) {
    var start = this.tokenStart;
    var name50 = this.consumeFunctionName();
    var nameLowerCase = name50.toLowerCase();
    var children;
    children = recognizer.hasOwnProperty(nameLowerCase) ? recognizer[nameLowerCase].call(this, recognizer) : readSequence2.call(this, recognizer);
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "Function",
        loc: this.getLocation(start, this.tokenStart),
        name: name50,
        children: children
    };
}
function generate20(node) {
    this.token(Function, node.name + "(");
    this.children(node);
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/GeneralEnclosed.js
var GeneralEnclosed_exports = {};
__export(GeneralEnclosed_exports, {
    generate: function() {
        return generate21;
    },
    name: function() {
        return name20;
    },
    parse: function() {
        return parse21;
    },
    structure: function() {
        return structure20;
    }
});
var name20 = "GeneralEnclosed";
var structure20 = {
    kind: String,
    function: [
        String,
        null
    ],
    children: [
        []
    ]
};
function parse21(kind) {
    var _this = this;
    var start = this.tokenStart;
    var functionName = null;
    if (this.tokenType === Function) {
        functionName = this.consumeFunctionName();
    } else {
        this.eat(LeftParenthesis);
    }
    var children = this.parseWithFallback(function() {
        var startValueToken = _this.tokenIndex;
        var children2 = _this.readSequence(_this.scope.Value);
        if (_this.eof === false && _this.isBalanceEdge(startValueToken) === false) {
            _this.error();
        }
        return children2;
    }, function() {
        return _this.createSingleNodeList(_this.Raw(null, false));
    });
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "GeneralEnclosed",
        loc: this.getLocation(start, this.tokenStart),
        kind: kind,
        function: functionName,
        children: children
    };
}
function generate21(node) {
    if (node.function) {
        this.token(Function, node.function + "(");
    } else {
        this.token(LeftParenthesis, "(");
    }
    this.children(node);
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/Hash.js
var Hash_exports = {};
__export(Hash_exports, {
    generate: function() {
        return generate22;
    },
    name: function() {
        return name21;
    },
    parse: function() {
        return parse22;
    },
    structure: function() {
        return structure21;
    },
    xxx: function() {
        return xxx;
    }
});
var xxx = "XXX";
var name21 = "Hash";
var structure21 = {
    value: String
};
function parse22() {
    var start = this.tokenStart;
    this.eat(Hash);
    return {
        type: "Hash",
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start + 1)
    };
}
function generate22(node) {
    this.token(Hash, "#" + node.value);
}
// node_modules/css-tree/lib/syntax/node/Identifier.js
var Identifier_exports = {};
__export(Identifier_exports, {
    generate: function() {
        return generate23;
    },
    name: function() {
        return name22;
    },
    parse: function() {
        return parse23;
    },
    structure: function() {
        return structure22;
    }
});
var name22 = "Identifier";
var structure22 = {
    name: String
};
function parse23() {
    return {
        type: "Identifier",
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        name: this.consume(Ident)
    };
}
function generate23(node) {
    this.token(Ident, node.name);
}
// node_modules/css-tree/lib/syntax/node/IdSelector.js
var IdSelector_exports = {};
__export(IdSelector_exports, {
    generate: function() {
        return generate24;
    },
    name: function() {
        return name23;
    },
    parse: function() {
        return parse24;
    },
    structure: function() {
        return structure23;
    }
});
var name23 = "IdSelector";
var structure23 = {
    name: String
};
function parse24() {
    var start = this.tokenStart;
    this.eat(Hash);
    return {
        type: "IdSelector",
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start + 1)
    };
}
function generate24(node) {
    this.token(Delim, "#" + node.name);
}
// node_modules/css-tree/lib/syntax/node/Layer.js
var Layer_exports = {};
__export(Layer_exports, {
    generate: function() {
        return generate25;
    },
    name: function() {
        return name24;
    },
    parse: function() {
        return parse25;
    },
    structure: function() {
        return structure24;
    }
});
var FULLSTOP2 = 46;
var name24 = "Layer";
var structure24 = {
    name: String
};
function parse25() {
    var tokenStart = this.tokenStart;
    var name50 = this.consume(Ident);
    while(this.isDelim(FULLSTOP2)){
        this.eat(Delim);
        name50 += "." + this.consume(Ident);
    }
    return {
        type: "Layer",
        loc: this.getLocation(tokenStart, this.tokenStart),
        name: name50
    };
}
function generate25(node) {
    this.tokenize(node.name);
}
// node_modules/css-tree/lib/syntax/node/LayerList.js
var LayerList_exports = {};
__export(LayerList_exports, {
    generate: function() {
        return generate26;
    },
    name: function() {
        return name25;
    },
    parse: function() {
        return parse26;
    },
    structure: function() {
        return structure25;
    }
});
var name25 = "LayerList";
var structure25 = {
    children: [
        [
            "Layer"
        ]
    ]
};
function parse26() {
    var children = this.createList();
    this.skipSC();
    while(!this.eof){
        children.push(this.Layer());
        if (this.lookupTypeNonSC(0) !== Comma) {
            break;
        }
        this.skipSC();
        this.next();
        this.skipSC();
    }
    return {
        type: "LayerList",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate26(node) {
    var _this = this;
    this.children(node, function() {
        return _this.token(Comma, ",");
    });
}
// node_modules/css-tree/lib/syntax/node/MediaQuery.js
var MediaQuery_exports = {};
__export(MediaQuery_exports, {
    generate: function() {
        return generate27;
    },
    name: function() {
        return name26;
    },
    parse: function() {
        return parse27;
    },
    structure: function() {
        return structure26;
    }
});
var name26 = "MediaQuery";
var structure26 = {
    modifier: [
        String,
        null
    ],
    mediaType: [
        String,
        null
    ],
    condition: [
        "Condition",
        null
    ]
};
function parse27() {
    var start = this.tokenStart;
    var modifier = null;
    var mediaType = null;
    var condition = null;
    this.skipSC();
    if (this.tokenType === Ident && this.lookupTypeNonSC(1) !== LeftParenthesis) {
        var ident = this.consume(Ident);
        var identLowerCase = ident.toLowerCase();
        if (identLowerCase === "not" || identLowerCase === "only") {
            this.skipSC();
            modifier = identLowerCase;
            mediaType = this.consume(Ident);
        } else {
            mediaType = ident;
        }
        switch(this.lookupTypeNonSC(0)){
            case Ident:
                {
                    this.skipSC();
                    this.eatIdent("and");
                    condition = this.Condition("media");
                    break;
                }
            case LeftCurlyBracket:
            case Semicolon:
            case Comma:
            case EOF:
                break;
            default:
                this.error("Identifier or parenthesis is expected");
        }
    } else {
        switch(this.tokenType){
            case Ident:
            case LeftParenthesis:
            case Function:
                {
                    condition = this.Condition("media");
                    break;
                }
            case LeftCurlyBracket:
            case Semicolon:
            case EOF:
                break;
            default:
                this.error("Identifier or parenthesis is expected");
        }
    }
    return {
        type: "MediaQuery",
        loc: this.getLocation(start, this.tokenStart),
        modifier: modifier,
        mediaType: mediaType,
        condition: condition
    };
}
function generate27(node) {
    if (node.mediaType) {
        if (node.modifier) {
            this.token(Ident, node.modifier);
        }
        this.token(Ident, node.mediaType);
        if (node.condition) {
            this.token(Ident, "and");
            this.node(node.condition);
        }
    } else if (node.condition) {
        this.node(node.condition);
    }
}
// node_modules/css-tree/lib/syntax/node/MediaQueryList.js
var MediaQueryList_exports = {};
__export(MediaQueryList_exports, {
    generate: function() {
        return generate28;
    },
    name: function() {
        return name27;
    },
    parse: function() {
        return parse28;
    },
    structure: function() {
        return structure27;
    }
});
var name27 = "MediaQueryList";
var structure27 = {
    children: [
        [
            "MediaQuery"
        ]
    ]
};
function parse28() {
    var children = this.createList();
    this.skipSC();
    while(!this.eof){
        children.push(this.MediaQuery());
        if (this.tokenType !== Comma) {
            break;
        }
        this.next();
    }
    return {
        type: "MediaQueryList",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate28(node) {
    var _this = this;
    this.children(node, function() {
        return _this.token(Comma, ",");
    });
}
// node_modules/css-tree/lib/syntax/node/NestingSelector.js
var NestingSelector_exports = {};
__export(NestingSelector_exports, {
    generate: function() {
        return generate29;
    },
    name: function() {
        return name28;
    },
    parse: function() {
        return parse29;
    },
    structure: function() {
        return structure28;
    }
});
var AMPERSAND5 = 38;
var name28 = "NestingSelector";
var structure28 = {};
function parse29() {
    var start = this.tokenStart;
    this.eatDelim(AMPERSAND5);
    return {
        type: "NestingSelector",
        loc: this.getLocation(start, this.tokenStart)
    };
}
function generate29() {
    this.token(Delim, "&");
}
// node_modules/css-tree/lib/syntax/node/Nth.js
var Nth_exports = {};
__export(Nth_exports, {
    generate: function() {
        return generate30;
    },
    name: function() {
        return name29;
    },
    parse: function() {
        return parse30;
    },
    structure: function() {
        return structure29;
    }
});
var name29 = "Nth";
var structure29 = {
    nth: [
        "AnPlusB",
        "Identifier"
    ],
    selector: [
        "SelectorList",
        null
    ]
};
function parse30() {
    this.skipSC();
    var start = this.tokenStart;
    var end = start;
    var selector2 = null;
    var nth2;
    if (this.lookupValue(0, "odd") || this.lookupValue(0, "even")) {
        nth2 = this.Identifier();
    } else {
        nth2 = this.AnPlusB();
    }
    end = this.tokenStart;
    this.skipSC();
    if (this.lookupValue(0, "of")) {
        this.next();
        selector2 = this.SelectorList();
        end = this.tokenStart;
    }
    return {
        type: "Nth",
        loc: this.getLocation(start, end),
        nth: nth2,
        selector: selector2
    };
}
function generate30(node) {
    this.node(node.nth);
    if (node.selector !== null) {
        this.token(Ident, "of");
        this.node(node.selector);
    }
}
// node_modules/css-tree/lib/syntax/node/Number.js
var Number_exports = {};
__export(Number_exports, {
    generate: function() {
        return generate31;
    },
    name: function() {
        return name30;
    },
    parse: function() {
        return parse31;
    },
    structure: function() {
        return structure30;
    }
});
var name30 = "Number";
var structure30 = {
    value: String
};
function parse31() {
    return {
        type: "Number",
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consume(Number2)
    };
}
function generate31(node) {
    this.token(Number2, node.value);
}
// node_modules/css-tree/lib/syntax/node/Operator.js
var Operator_exports = {};
__export(Operator_exports, {
    generate: function() {
        return generate32;
    },
    name: function() {
        return name31;
    },
    parse: function() {
        return parse32;
    },
    structure: function() {
        return structure31;
    }
});
var name31 = "Operator";
var structure31 = {
    value: String
};
function parse32() {
    var start = this.tokenStart;
    this.next();
    return {
        type: "Operator",
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}
function generate32(node) {
    this.tokenize(node.value);
}
// node_modules/css-tree/lib/syntax/node/Parentheses.js
var Parentheses_exports = {};
__export(Parentheses_exports, {
    generate: function() {
        return generate33;
    },
    name: function() {
        return name32;
    },
    parse: function() {
        return parse33;
    },
    structure: function() {
        return structure32;
    }
});
var name32 = "Parentheses";
var structure32 = {
    children: [
        []
    ]
};
function parse33(readSequence2, recognizer) {
    var start = this.tokenStart;
    var children = null;
    this.eat(LeftParenthesis);
    children = readSequence2.call(this, recognizer);
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "Parentheses",
        loc: this.getLocation(start, this.tokenStart),
        children: children
    };
}
function generate33(node) {
    this.token(LeftParenthesis, "(");
    this.children(node);
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/Percentage.js
var Percentage_exports = {};
__export(Percentage_exports, {
    generate: function() {
        return generate34;
    },
    name: function() {
        return name33;
    },
    parse: function() {
        return parse34;
    },
    structure: function() {
        return structure33;
    }
});
var name33 = "Percentage";
var structure33 = {
    value: String
};
function parse34() {
    return {
        type: "Percentage",
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consumeNumber(Percentage)
    };
}
function generate34(node) {
    this.token(Percentage, node.value + "%");
}
// node_modules/css-tree/lib/syntax/node/PseudoClassSelector.js
var PseudoClassSelector_exports = {};
__export(PseudoClassSelector_exports, {
    generate: function() {
        return generate35;
    },
    name: function() {
        return name34;
    },
    parse: function() {
        return parse35;
    },
    structure: function() {
        return structure34;
    },
    walkContext: function() {
        return walkContext6;
    }
});
var name34 = "PseudoClassSelector";
var walkContext6 = "function";
var structure34 = {
    name: String,
    children: [
        [
            "Raw"
        ],
        null
    ]
};
function parse35() {
    var start = this.tokenStart;
    var children = null;
    var name50;
    var nameLowerCase;
    this.eat(Colon);
    if (this.tokenType === Function) {
        name50 = this.consumeFunctionName();
        nameLowerCase = name50.toLowerCase();
        if (this.lookupNonWSType(0) == RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(this.Raw(null, false));
        }
        this.eat(RightParenthesis);
    } else {
        name50 = this.consume(Ident);
    }
    return {
        type: "PseudoClassSelector",
        loc: this.getLocation(start, this.tokenStart),
        name: name50,
        children: children
    };
}
function generate35(node) {
    this.token(Colon, ":");
    if (node.children === null) {
        this.token(Ident, node.name);
    } else {
        this.token(Function, node.name + "(");
        this.children(node);
        this.token(RightParenthesis, ")");
    }
}
// node_modules/css-tree/lib/syntax/node/PseudoElementSelector.js
var PseudoElementSelector_exports = {};
__export(PseudoElementSelector_exports, {
    generate: function() {
        return generate36;
    },
    name: function() {
        return name35;
    },
    parse: function() {
        return parse36;
    },
    structure: function() {
        return structure35;
    },
    walkContext: function() {
        return walkContext7;
    }
});
var name35 = "PseudoElementSelector";
var walkContext7 = "function";
var structure35 = {
    name: String,
    children: [
        [
            "Raw"
        ],
        null
    ]
};
function parse36() {
    var start = this.tokenStart;
    var children = null;
    var name50;
    var nameLowerCase;
    this.eat(Colon);
    this.eat(Colon);
    if (this.tokenType === Function) {
        name50 = this.consumeFunctionName();
        nameLowerCase = name50.toLowerCase();
        if (this.lookupNonWSType(0) == RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(this.Raw(null, false));
        }
        this.eat(RightParenthesis);
    } else {
        name50 = this.consume(Ident);
    }
    return {
        type: "PseudoElementSelector",
        loc: this.getLocation(start, this.tokenStart),
        name: name50,
        children: children
    };
}
function generate36(node) {
    this.token(Colon, ":");
    this.token(Colon, ":");
    if (node.children === null) {
        this.token(Ident, node.name);
    } else {
        this.token(Function, node.name + "(");
        this.children(node);
        this.token(RightParenthesis, ")");
    }
}
// node_modules/css-tree/lib/syntax/node/Ratio.js
var Ratio_exports = {};
__export(Ratio_exports, {
    generate: function() {
        return generate37;
    },
    name: function() {
        return name36;
    },
    parse: function() {
        return parse37;
    },
    structure: function() {
        return structure36;
    }
});
var SOLIDUS6 = 47;
function consumeTerm() {
    this.skipSC();
    switch(this.tokenType){
        case Number2:
            return this.Number();
        case Function:
            return this.Function(this.readSequence, this.scope.Value);
        default:
            this.error("Number of function is expected");
    }
}
var name36 = "Ratio";
var structure36 = {
    left: [
        "Number",
        "Function"
    ],
    right: [
        "Number",
        "Function",
        null
    ]
};
function parse37() {
    var start = this.tokenStart;
    var left = consumeTerm.call(this);
    var right = null;
    this.skipSC();
    if (this.isDelim(SOLIDUS6)) {
        this.eatDelim(SOLIDUS6);
        right = consumeTerm.call(this);
    }
    return {
        type: "Ratio",
        loc: this.getLocation(start, this.tokenStart),
        left: left,
        right: right
    };
}
function generate37(node) {
    this.node(node.left);
    this.token(Delim, "/");
    if (node.right) {
        this.node(node.right);
    } else {
        this.node(Number2, 1);
    }
}
// node_modules/css-tree/lib/syntax/node/Raw.js
var Raw_exports = {};
__export(Raw_exports, {
    generate: function() {
        return generate38;
    },
    name: function() {
        return name37;
    },
    parse: function() {
        return parse38;
    },
    structure: function() {
        return structure37;
    }
});
function getOffsetExcludeWS() {
    if (this.tokenIndex > 0) {
        if (this.lookupType(-1) === WhiteSpace) {
            return this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset;
        }
    }
    return this.tokenStart;
}
var name37 = "Raw";
var structure37 = {
    value: String
};
function parse38(consumeUntil, excludeWhiteSpace) {
    var startOffset = this.getTokenStart(this.tokenIndex);
    var endOffset;
    this.skipUntilBalanced(this.tokenIndex, consumeUntil || this.consumeUntilBalanceEnd);
    if (excludeWhiteSpace && this.tokenStart > startOffset) {
        endOffset = getOffsetExcludeWS.call(this);
    } else {
        endOffset = this.tokenStart;
    }
    return {
        type: "Raw",
        loc: this.getLocation(startOffset, endOffset),
        value: this.substring(startOffset, endOffset)
    };
}
function generate38(node) {
    this.tokenize(node.value);
}
// node_modules/css-tree/lib/syntax/node/Rule.js
var Rule_exports = {};
__export(Rule_exports, {
    generate: function() {
        return generate39;
    },
    name: function() {
        return name38;
    },
    parse: function() {
        return parse39;
    },
    structure: function() {
        return structure38;
    },
    walkContext: function() {
        return walkContext8;
    }
});
function consumeRaw4() {
    return this.Raw(this.consumeUntilLeftCurlyBracket, true);
}
function consumePrelude() {
    var prelude = this.SelectorList();
    if (prelude.type !== "Raw" && this.eof === false && this.tokenType !== LeftCurlyBracket) {
        this.error();
    }
    return prelude;
}
var name38 = "Rule";
var walkContext8 = "rule";
var structure38 = {
    prelude: [
        "SelectorList",
        "Raw"
    ],
    block: [
        "Block"
    ]
};
function parse39() {
    var startToken = this.tokenIndex;
    var startOffset = this.tokenStart;
    var prelude;
    var block;
    if (this.parseRulePrelude) {
        prelude = this.parseWithFallback(consumePrelude, consumeRaw4);
    } else {
        prelude = consumeRaw4.call(this, startToken);
    }
    block = this.Block(true);
    return {
        type: "Rule",
        loc: this.getLocation(startOffset, this.tokenStart),
        prelude: prelude,
        block: block
    };
}
function generate39(node) {
    this.node(node.prelude);
    this.node(node.block);
}
// node_modules/css-tree/lib/syntax/node/Scope.js
var Scope_exports = {};
__export(Scope_exports, {
    generate: function() {
        return generate40;
    },
    name: function() {
        return name39;
    },
    parse: function() {
        return parse40;
    },
    structure: function() {
        return structure39;
    }
});
var name39 = "Scope";
var structure39 = {
    root: [
        "SelectorList",
        "Raw",
        null
    ],
    limit: [
        "SelectorList",
        "Raw",
        null
    ]
};
function parse40() {
    var _this = this;
    var root = null;
    var limit = null;
    this.skipSC();
    var startOffset = this.tokenStart;
    if (this.tokenType === LeftParenthesis) {
        this.next();
        this.skipSC();
        root = this.parseWithFallback(this.SelectorList, function() {
            return _this.Raw(false, true);
        });
        this.skipSC();
        this.eat(RightParenthesis);
    }
    if (this.lookupNonWSType(0) === Ident) {
        this.skipSC();
        this.eatIdent("to");
        this.skipSC();
        this.eat(LeftParenthesis);
        this.skipSC();
        limit = this.parseWithFallback(this.SelectorList, function() {
            return _this.Raw(false, true);
        });
        this.skipSC();
        this.eat(RightParenthesis);
    }
    return {
        type: "Scope",
        loc: this.getLocation(startOffset, this.tokenStart),
        root: root,
        limit: limit
    };
}
function generate40(node) {
    if (node.root) {
        this.token(LeftParenthesis, "(");
        this.node(node.root);
        this.token(RightParenthesis, ")");
    }
    if (node.limit) {
        this.token(Ident, "to");
        this.token(LeftParenthesis, "(");
        this.node(node.limit);
        this.token(RightParenthesis, ")");
    }
}
// node_modules/css-tree/lib/syntax/node/Selector.js
var Selector_exports = {};
__export(Selector_exports, {
    generate: function() {
        return generate41;
    },
    name: function() {
        return name40;
    },
    parse: function() {
        return parse41;
    },
    structure: function() {
        return structure40;
    }
});
var name40 = "Selector";
var structure40 = {
    children: [
        [
            "TypeSelector",
            "IdSelector",
            "ClassSelector",
            "AttributeSelector",
            "PseudoClassSelector",
            "PseudoElementSelector",
            "Combinator"
        ]
    ]
};
function parse41() {
    var children = this.readSequence(this.scope.Selector);
    if (this.getFirstListNode(children) === null) {
        this.error("Selector is expected");
    }
    return {
        type: "Selector",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate41(node) {
    this.children(node);
}
// node_modules/css-tree/lib/syntax/node/SelectorList.js
var SelectorList_exports = {};
__export(SelectorList_exports, {
    generate: function() {
        return generate42;
    },
    name: function() {
        return name41;
    },
    parse: function() {
        return parse42;
    },
    structure: function() {
        return structure41;
    },
    walkContext: function() {
        return walkContext9;
    }
});
var name41 = "SelectorList";
var walkContext9 = "selector";
var structure41 = {
    children: [
        [
            "Selector",
            "Raw"
        ]
    ]
};
function parse42() {
    var children = this.createList();
    while(!this.eof){
        children.push(this.Selector());
        if (this.tokenType === Comma) {
            this.next();
            continue;
        }
        break;
    }
    return {
        type: "SelectorList",
        loc: this.getLocationFromList(children),
        children: children
    };
}
function generate42(node) {
    var _this = this;
    this.children(node, function() {
        return _this.token(Comma, ",");
    });
}
// node_modules/css-tree/lib/syntax/node/String.js
var String_exports = {};
__export(String_exports, {
    generate: function() {
        return generate43;
    },
    name: function() {
        return name42;
    },
    parse: function() {
        return parse43;
    },
    structure: function() {
        return structure42;
    }
});
// node_modules/css-tree/lib/utils/string.js
var string_exports = {};
__export(string_exports, {
    decode: function() {
        return decode;
    },
    encode: function() {
        return encode;
    }
});
var REVERSE_SOLIDUS = 92;
var QUOTATION_MARK = 34;
var APOSTROPHE2 = 39;
function decode(str) {
    var len = str.length;
    var firstChar = str.charCodeAt(0);
    var start = firstChar === QUOTATION_MARK || firstChar === APOSTROPHE2 ? 1 : 0;
    var end = start === 1 && len > 1 && str.charCodeAt(len - 1) === firstChar ? len - 2 : len - 1;
    var decoded = "";
    for(var i = start; i <= end; i++){
        var code2 = str.charCodeAt(i);
        if (code2 === REVERSE_SOLIDUS) {
            if (i === end) {
                if (i !== len - 1) {
                    decoded = str.substr(i + 1);
                }
                break;
            }
            code2 = str.charCodeAt(++i);
            if (isValidEscape(REVERSE_SOLIDUS, code2)) {
                var escapeStart = i - 1;
                var escapeEnd = consumeEscaped(str, escapeStart);
                i = escapeEnd - 1;
                decoded += decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                if (code2 === 13 && str.charCodeAt(i + 1) === 10) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}
function encode(str, apostrophe) {
    var quote = apostrophe ? "'" : '"';
    var quoteCode = apostrophe ? APOSTROPHE2 : QUOTATION_MARK;
    var encoded = "";
    var wsBeforeHexIsNeeded = false;
    for(var i = 0; i < str.length; i++){
        var code2 = str.charCodeAt(i);
        if (code2 === 0) {
            encoded += "\uFFFD";
            continue;
        }
        if (code2 <= 31 || code2 === 127) {
            encoded += "\\" + code2.toString(16);
            wsBeforeHexIsNeeded = true;
            continue;
        }
        if (code2 === quoteCode || code2 === REVERSE_SOLIDUS) {
            encoded += "\\" + str.charAt(i);
            wsBeforeHexIsNeeded = false;
        } else {
            if (wsBeforeHexIsNeeded && (isHexDigit(code2) || isWhiteSpace(code2))) {
                encoded += " ";
            }
            encoded += str.charAt(i);
            wsBeforeHexIsNeeded = false;
        }
    }
    return quote + encoded + quote;
}
// node_modules/css-tree/lib/syntax/node/String.js
var name42 = "String";
var structure42 = {
    value: String
};
function parse43() {
    return {
        type: "String",
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: decode(this.consume(String2))
    };
}
function generate43(node) {
    this.token(String2, encode(node.value));
}
// node_modules/css-tree/lib/syntax/node/StyleSheet.js
var StyleSheet_exports = {};
__export(StyleSheet_exports, {
    generate: function() {
        return generate44;
    },
    name: function() {
        return name43;
    },
    parse: function() {
        return parse44;
    },
    structure: function() {
        return structure43;
    },
    walkContext: function() {
        return walkContext10;
    }
});
var EXCLAMATIONMARK4 = 33;
function consumeRaw5() {
    return this.Raw(null, false);
}
var name43 = "StyleSheet";
var walkContext10 = "stylesheet";
var structure43 = {
    children: [
        [
            "Comment",
            "CDO",
            "CDC",
            "Atrule",
            "Rule",
            "Raw"
        ]
    ]
};
function parse44() {
    var start = this.tokenStart;
    var children = this.createList();
    var child;
    while(!this.eof){
        switch(this.tokenType){
            case WhiteSpace:
                this.next();
                continue;
            case Comment:
                if (this.charCodeAt(this.tokenStart + 2) !== EXCLAMATIONMARK4) {
                    this.next();
                    continue;
                }
                child = this.Comment();
                break;
            case CDO:
                child = this.CDO();
                break;
            case CDC:
                child = this.CDC();
                break;
            // CSS Syntax Module Level 3
            // §2.2 Error handling
            // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
            case AtKeyword:
                child = this.parseWithFallback(this.Atrule, consumeRaw5);
                break;
            // Anything else starts a qualified rule ...
            default:
                child = this.parseWithFallback(this.Rule, consumeRaw5);
        }
        children.push(child);
    }
    return {
        type: "StyleSheet",
        loc: this.getLocation(start, this.tokenStart),
        children: children
    };
}
function generate44(node) {
    this.children(node);
}
// node_modules/css-tree/lib/syntax/node/SupportsDeclaration.js
var SupportsDeclaration_exports = {};
__export(SupportsDeclaration_exports, {
    generate: function() {
        return generate45;
    },
    name: function() {
        return name44;
    },
    parse: function() {
        return parse45;
    },
    structure: function() {
        return structure44;
    }
});
var name44 = "SupportsDeclaration";
var structure44 = {
    declaration: "Declaration"
};
function parse45() {
    var start = this.tokenStart;
    this.eat(LeftParenthesis);
    this.skipSC();
    var declaration = this.Declaration();
    if (!this.eof) {
        this.eat(RightParenthesis);
    }
    return {
        type: "SupportsDeclaration",
        loc: this.getLocation(start, this.tokenStart),
        declaration: declaration
    };
}
function generate45(node) {
    this.token(LeftParenthesis, "(");
    this.node(node.declaration);
    this.token(RightParenthesis, ")");
}
// node_modules/css-tree/lib/syntax/node/TypeSelector.js
var TypeSelector_exports = {};
__export(TypeSelector_exports, {
    generate: function() {
        return generate46;
    },
    name: function() {
        return name45;
    },
    parse: function() {
        return parse46;
    },
    structure: function() {
        return structure45;
    }
});
var ASTERISK5 = 42;
var VERTICALLINE3 = 124;
function eatIdentifierOrAsterisk() {
    if (this.tokenType !== Ident && this.isDelim(ASTERISK5) === false) {
        this.error("Identifier or asterisk is expected");
    }
    this.next();
}
var name45 = "TypeSelector";
var structure45 = {
    name: String
};
function parse46() {
    var start = this.tokenStart;
    if (this.isDelim(VERTICALLINE3)) {
        this.next();
        eatIdentifierOrAsterisk.call(this);
    } else {
        eatIdentifierOrAsterisk.call(this);
        if (this.isDelim(VERTICALLINE3)) {
            this.next();
            eatIdentifierOrAsterisk.call(this);
        }
    }
    return {
        type: "TypeSelector",
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}
function generate46(node) {
    this.tokenize(node.name);
}
// node_modules/css-tree/lib/syntax/node/UnicodeRange.js
var UnicodeRange_exports = {};
__export(UnicodeRange_exports, {
    generate: function() {
        return generate47;
    },
    name: function() {
        return name46;
    },
    parse: function() {
        return parse47;
    },
    structure: function() {
        return structure46;
    }
});
var PLUSSIGN8 = 43;
var HYPHENMINUS6 = 45;
var QUESTIONMARK3 = 63;
function eatHexSequence(offset, allowDash) {
    var len = 0;
    for(var pos = this.tokenStart + offset; pos < this.tokenEnd; pos++){
        var code2 = this.charCodeAt(pos);
        if (code2 === HYPHENMINUS6 && allowDash && len !== 0) {
            eatHexSequence.call(this, offset + len + 1, false);
            return -1;
        }
        if (!isHexDigit(code2)) {
            this.error(allowDash && len !== 0 ? "Hyphen minus" + (len < 6 ? " or hex digit" : "") + " is expected" : len < 6 ? "Hex digit is expected" : "Unexpected input", pos);
        }
        if (++len > 6) {
            this.error("Too many hex digits", pos);
        }
    }
    this.next();
    return len;
}
function eatQuestionMarkSequence(max) {
    var count = 0;
    while(this.isDelim(QUESTIONMARK3)){
        if (++count > max) {
            this.error("Too many question marks");
        }
        this.next();
    }
}
function startsWith2(code2) {
    if (this.charCodeAt(this.tokenStart) !== code2) {
        this.error((code2 === PLUSSIGN8 ? "Plus sign" : "Hyphen minus") + " is expected");
    }
}
function scanUnicodeRange() {
    var hexLength = 0;
    switch(this.tokenType){
        case Number2:
            hexLength = eatHexSequence.call(this, 1, true);
            if (this.isDelim(QUESTIONMARK3)) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
                break;
            }
            if (this.tokenType === Dimension || this.tokenType === Number2) {
                startsWith2.call(this, HYPHENMINUS6);
                eatHexSequence.call(this, 1, false);
                break;
            }
            break;
        case Dimension:
            hexLength = eatHexSequence.call(this, 1, true);
            if (hexLength > 0) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
            }
            break;
        default:
            this.eatDelim(PLUSSIGN8);
            if (this.tokenType === Ident) {
                hexLength = eatHexSequence.call(this, 0, true);
                if (hexLength > 0) {
                    eatQuestionMarkSequence.call(this, 6 - hexLength);
                }
                break;
            }
            if (this.isDelim(QUESTIONMARK3)) {
                this.next();
                eatQuestionMarkSequence.call(this, 5);
                break;
            }
            this.error("Hex digit or question mark is expected");
    }
}
var name46 = "UnicodeRange";
var structure46 = {
    value: String
};
function parse47() {
    var start = this.tokenStart;
    this.eatIdent("u");
    scanUnicodeRange.call(this);
    return {
        type: "UnicodeRange",
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}
function generate47(node) {
    this.tokenize(node.value);
}
// node_modules/css-tree/lib/syntax/node/Url.js
var Url_exports = {};
__export(Url_exports, {
    generate: function() {
        return generate48;
    },
    name: function() {
        return name47;
    },
    parse: function() {
        return parse48;
    },
    structure: function() {
        return structure47;
    }
});
// node_modules/css-tree/lib/utils/url.js
var SPACE3 = 32;
var REVERSE_SOLIDUS2 = 92;
var QUOTATION_MARK2 = 34;
var APOSTROPHE3 = 39;
var LEFTPARENTHESIS3 = 40;
var RIGHTPARENTHESIS3 = 41;
function decode2(str) {
    var len = str.length;
    var start = 4;
    var end = str.charCodeAt(len - 1) === RIGHTPARENTHESIS3 ? len - 2 : len - 1;
    var decoded = "";
    while(start < end && isWhiteSpace(str.charCodeAt(start))){
        start++;
    }
    while(start < end && isWhiteSpace(str.charCodeAt(end))){
        end--;
    }
    for(var i = start; i <= end; i++){
        var code2 = str.charCodeAt(i);
        if (code2 === REVERSE_SOLIDUS2) {
            if (i === end) {
                if (i !== len - 1) {
                    decoded = str.substr(i + 1);
                }
                break;
            }
            code2 = str.charCodeAt(++i);
            if (isValidEscape(REVERSE_SOLIDUS2, code2)) {
                var escapeStart = i - 1;
                var escapeEnd = consumeEscaped(str, escapeStart);
                i = escapeEnd - 1;
                decoded += decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                if (code2 === 13 && str.charCodeAt(i + 1) === 10) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }
    return decoded;
}
function encode2(str) {
    var encoded = "";
    var wsBeforeHexIsNeeded = false;
    for(var i = 0; i < str.length; i++){
        var code2 = str.charCodeAt(i);
        if (code2 === 0) {
            encoded += "\uFFFD";
            continue;
        }
        if (code2 <= 31 || code2 === 127) {
            encoded += "\\" + code2.toString(16);
            wsBeforeHexIsNeeded = true;
            continue;
        }
        if (code2 === SPACE3 || code2 === REVERSE_SOLIDUS2 || code2 === QUOTATION_MARK2 || code2 === APOSTROPHE3 || code2 === LEFTPARENTHESIS3 || code2 === RIGHTPARENTHESIS3) {
            encoded += "\\" + str.charAt(i);
            wsBeforeHexIsNeeded = false;
        } else {
            if (wsBeforeHexIsNeeded && isHexDigit(code2)) {
                encoded += " ";
            }
            encoded += str.charAt(i);
            wsBeforeHexIsNeeded = false;
        }
    }
    return "url(" + encoded + ")";
}
// node_modules/css-tree/lib/syntax/node/Url.js
var name47 = "Url";
var structure47 = {
    value: String
};
function parse48() {
    var start = this.tokenStart;
    var value;
    switch(this.tokenType){
        case Url:
            value = decode2(this.consume(Url));
            break;
        case Function:
            if (!this.cmpStr(this.tokenStart, this.tokenEnd, "url(")) {
                this.error("Function name must be `url`");
            }
            this.eat(Function);
            this.skipSC();
            value = decode(this.consume(String2));
            this.skipSC();
            if (!this.eof) {
                this.eat(RightParenthesis);
            }
            break;
        default:
            this.error("Url or Function is expected");
    }
    return {
        type: "Url",
        loc: this.getLocation(start, this.tokenStart),
        value: value
    };
}
function generate48(node) {
    this.token(Url, encode2(node.value));
}
// node_modules/css-tree/lib/syntax/node/Value.js
var Value_exports = {};
__export(Value_exports, {
    generate: function() {
        return generate49;
    },
    name: function() {
        return name48;
    },
    parse: function() {
        return parse49;
    },
    structure: function() {
        return structure48;
    }
});
var name48 = "Value";
var structure48 = {
    children: [
        []
    ]
};
function parse49() {
    var start = this.tokenStart;
    var children = this.readSequence(this.scope.Value);
    return {
        type: "Value",
        loc: this.getLocation(start, this.tokenStart),
        children: children
    };
}
function generate49(node) {
    this.children(node);
}
// node_modules/css-tree/lib/syntax/node/WhiteSpace.js
var WhiteSpace_exports = {};
__export(WhiteSpace_exports, {
    generate: function() {
        return generate50;
    },
    name: function() {
        return name49;
    },
    parse: function() {
        return parse50;
    },
    structure: function() {
        return structure49;
    }
});
var SPACE4 = Object.freeze({
    type: "WhiteSpace",
    loc: null,
    value: " "
});
var name49 = "WhiteSpace";
var structure49 = {
    value: String
};
function parse50() {
    this.eat(WhiteSpace);
    return SPACE4;
}
function generate50(node) {
    this.token(WhiteSpace, node.value);
}
// node_modules/css-tree/lib/syntax/config/lexer.js
var lexer_default = _object_spread_props(_object_spread({
    generic: true,
    cssWideKeywords: cssWideKeywords
}, data_default), {
    node: node_exports
});
// node_modules/css-tree/lib/syntax/scope/index.js
var scope_exports = {};
__export(scope_exports, {
    AtrulePrelude: function() {
        return atrulePrelude_default;
    },
    Selector: function() {
        return selector_default;
    },
    Value: function() {
        return value_default;
    }
});
// node_modules/css-tree/lib/syntax/scope/default.js
var NUMBERSIGN4 = 35;
var ASTERISK6 = 42;
var PLUSSIGN9 = 43;
var HYPHENMINUS7 = 45;
var SOLIDUS7 = 47;
var U2 = 117;
function defaultRecognizer(context) {
    switch(this.tokenType){
        case Hash:
            return this.Hash();
        case Comma:
            return this.Operator();
        case LeftParenthesis:
            return this.Parentheses(this.readSequence, context.recognizer);
        case LeftSquareBracket:
            return this.Brackets(this.readSequence, context.recognizer);
        case String2:
            return this.String();
        case Dimension:
            return this.Dimension();
        case Percentage:
            return this.Percentage();
        case Number2:
            return this.Number();
        case Function:
            return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, context.recognizer);
        case Url:
            return this.Url();
        case Ident:
            if (this.cmpChar(this.tokenStart, U2) && this.cmpChar(this.tokenStart + 1, PLUSSIGN9)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }
        case Delim:
            {
                var code2 = this.charCodeAt(this.tokenStart);
                if (code2 === SOLIDUS7 || code2 === ASTERISK6 || code2 === PLUSSIGN9 || code2 === HYPHENMINUS7) {
                    return this.Operator();
                }
                if (code2 === NUMBERSIGN4) {
                    this.error("Hex or identifier is expected", this.tokenStart + 1);
                }
                break;
            }
    }
}
// node_modules/css-tree/lib/syntax/scope/atrulePrelude.js
var atrulePrelude_default = {
    getNode: defaultRecognizer
};
// node_modules/css-tree/lib/syntax/scope/selector.js
var NUMBERSIGN5 = 35;
var AMPERSAND6 = 38;
var ASTERISK7 = 42;
var PLUSSIGN10 = 43;
var SOLIDUS8 = 47;
var FULLSTOP3 = 46;
var GREATERTHANSIGN4 = 62;
var VERTICALLINE4 = 124;
var TILDE3 = 126;
function onWhiteSpace(next, children) {
    if (children.last !== null && children.last.type !== "Combinator" && next !== null && next.type !== "Combinator") {
        children.push({
            // FIXME: this.Combinator() should be used instead
            type: "Combinator",
            loc: null,
            name: " "
        });
    }
}
function getNode() {
    switch(this.tokenType){
        case LeftSquareBracket:
            return this.AttributeSelector();
        case Hash:
            return this.IdSelector();
        case Colon:
            if (this.lookupType(1) === Colon) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }
        case Ident:
            return this.TypeSelector();
        case Number2:
        case Percentage:
            return this.Percentage();
        case Dimension:
            if (this.charCodeAt(this.tokenStart) === FULLSTOP3) {
                this.error("Identifier is expected", this.tokenStart + 1);
            }
            break;
        case Delim:
            {
                var code2 = this.charCodeAt(this.tokenStart);
                switch(code2){
                    case PLUSSIGN10:
                    case GREATERTHANSIGN4:
                    case TILDE3:
                    case SOLIDUS8:
                        return this.Combinator();
                    case FULLSTOP3:
                        return this.ClassSelector();
                    case ASTERISK7:
                    case VERTICALLINE4:
                        return this.TypeSelector();
                    case NUMBERSIGN5:
                        return this.IdSelector();
                    case AMPERSAND6:
                        return this.NestingSelector();
                }
                break;
            }
    }
}
var selector_default = {
    onWhiteSpace: onWhiteSpace,
    getNode: getNode
};
// node_modules/css-tree/lib/syntax/function/expression.js
function expression_default() {
    return this.createSingleNodeList(this.Raw(null, false));
}
// node_modules/css-tree/lib/syntax/function/var.js
function var_default() {
    var children = this.createList();
    this.skipSC();
    children.push(this.Identifier());
    this.skipSC();
    if (this.tokenType === Comma) {
        children.push(this.Operator());
        var startIndex = this.tokenIndex;
        var value = this.parseCustomProperty ? this.Value(null) : this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
        if (value.type === "Value" && value.children.isEmpty) {
            for(var offset = startIndex - this.tokenIndex; offset <= 0; offset++){
                if (this.lookupType(offset) === WhiteSpace) {
                    value.children.appendData({
                        type: "WhiteSpace",
                        loc: null,
                        value: " "
                    });
                    break;
                }
            }
        }
        children.push(value);
    }
    return children;
}
// node_modules/css-tree/lib/syntax/scope/value.js
function isPlusMinusOperator(node) {
    return node !== null && node.type === "Operator" && (node.value[node.value.length - 1] === "-" || node.value[node.value.length - 1] === "+");
}
var value_default = {
    getNode: defaultRecognizer,
    onWhiteSpace: function onWhiteSpace(next, children) {
        if (isPlusMinusOperator(next)) {
            next.value = " " + next.value;
        }
        if (isPlusMinusOperator(children.last)) {
            children.last.value += " ";
        }
    },
    "expression": expression_default,
    "var": var_default
};
// node_modules/css-tree/lib/syntax/atrule/container.js
var nonContainerNameKeywords = /* @__PURE__ */ new Set([
    "none",
    "and",
    "not",
    "or"
]);
var container_default = {
    parse: {
        prelude: function prelude() {
            var children = this.createList();
            if (this.tokenType === Ident) {
                var name50 = this.substring(this.tokenStart, this.tokenEnd);
                if (!nonContainerNameKeywords.has(name50.toLowerCase())) {
                    children.push(this.Identifier());
                }
            }
            children.push(this.Condition("container"));
            return children;
        },
        block: function block() {
            var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return this.Block(nested);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/font-face.js
var font_face_default = {
    parse: {
        prelude: null,
        block: function block() {
            return this.Block(true);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/import.js
function parseWithFallback(parse53, fallback) {
    var _this = this;
    return this.parseWithFallback(function() {
        try {
            return parse53.call(_this);
        } finally{
            _this.skipSC();
            if (_this.lookupNonWSType(0) !== RightParenthesis) {
                _this.error();
            }
        }
    }, fallback || function() {
        return _this.Raw(null, true);
    });
}
var parseFunctions = {
    layer: function layer() {
        this.skipSC();
        var children = this.createList();
        var node = parseWithFallback.call(this, this.Layer);
        if (node.type !== "Raw" || node.value !== "") {
            children.push(node);
        }
        return children;
    },
    supports: function supports() {
        var _this = this;
        this.skipSC();
        var children = this.createList();
        var node = parseWithFallback.call(this, this.Declaration, function() {
            return parseWithFallback.call(_this, function() {
                return _this.Condition("supports");
            });
        });
        if (node.type !== "Raw" || node.value !== "") {
            children.push(node);
        }
        return children;
    }
};
var import_default3 = {
    parse: {
        prelude: function prelude() {
            var children = this.createList();
            switch(this.tokenType){
                case String2:
                    children.push(this.String());
                    break;
                case Url:
                case Function:
                    children.push(this.Url());
                    break;
                default:
                    this.error("String or url() is expected");
            }
            this.skipSC();
            if (this.tokenType === Ident && this.cmpStr(this.tokenStart, this.tokenEnd, "layer")) {
                children.push(this.Identifier());
            } else if (this.tokenType === Function && this.cmpStr(this.tokenStart, this.tokenEnd, "layer(")) {
                children.push(this.Function(null, parseFunctions));
            }
            this.skipSC();
            if (this.tokenType === Function && this.cmpStr(this.tokenStart, this.tokenEnd, "supports(")) {
                children.push(this.Function(null, parseFunctions));
            }
            if (this.lookupNonWSType(0) === Ident || this.lookupNonWSType(0) === LeftParenthesis) {
                children.push(this.MediaQueryList());
            }
            return children;
        },
        block: null
    }
};
// node_modules/css-tree/lib/syntax/atrule/layer.js
var layer_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.LayerList());
        },
        block: function block() {
            return this.Block(false);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/media.js
var media_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.MediaQueryList());
        },
        block: function block() {
            var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return this.Block(nested);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/nest.js
var nest_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.SelectorList());
        },
        block: function block() {
            return this.Block(true);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/page.js
var page_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.SelectorList());
        },
        block: function block() {
            return this.Block(true);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/scope.js
var scope_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.Scope());
        },
        block: function block() {
            var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return this.Block(nested);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/starting-style.js
var starting_style_default = {
    parse: {
        prelude: null,
        block: function block() {
            var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return this.Block(nested);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/supports.js
var supports_default = {
    parse: {
        prelude: function prelude() {
            return this.createSingleNodeList(this.Condition("supports"));
        },
        block: function block() {
            var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return this.Block(nested);
        }
    }
};
// node_modules/css-tree/lib/syntax/atrule/index.js
var atrule_default = {
    container: container_default,
    "font-face": font_face_default,
    import: import_default3,
    layer: layer_default,
    media: media_default,
    nest: nest_default,
    page: page_default,
    scope: scope_default,
    "starting-style": starting_style_default,
    supports: supports_default
};
// node_modules/css-tree/lib/syntax/pseudo/lang.js
function parseLanguageRangeList() {
    var children = this.createList();
    this.skipSC();
    loop: while(!this.eof){
        switch(this.tokenType){
            case Ident:
                children.push(this.Identifier());
                break;
            case String2:
                children.push(this.String());
                break;
            case Comma:
                children.push(this.Operator());
                break;
            case RightParenthesis:
                break loop;
            default:
                this.error("Identifier, string or comma is expected");
        }
        this.skipSC();
    }
    return children;
}
// node_modules/css-tree/lib/syntax/pseudo/index.js
var selectorList = {
    parse: function parse() {
        return this.createSingleNodeList(this.SelectorList());
    }
};
var selector = {
    parse: function parse() {
        return this.createSingleNodeList(this.Selector());
    }
};
var identList = {
    parse: function parse() {
        return this.createSingleNodeList(this.Identifier());
    }
};
var langList = {
    parse: parseLanguageRangeList
};
var nth = {
    parse: function parse() {
        return this.createSingleNodeList(this.Nth());
    }
};
var pseudo_default = {
    "dir": identList,
    "has": selectorList,
    "lang": langList,
    "matches": selectorList,
    "is": selectorList,
    "-moz-any": selectorList,
    "-webkit-any": selectorList,
    "where": selectorList,
    "not": selectorList,
    "nth-child": nth,
    "nth-last-child": nth,
    "nth-last-of-type": nth,
    "nth-of-type": nth,
    "slotted": selector,
    "host": selector,
    "host-context": selector
};
// node_modules/css-tree/lib/syntax/node/index-parse.js
var index_parse_exports = {};
__export(index_parse_exports, {
    AnPlusB: function() {
        return parse2;
    },
    Atrule: function() {
        return parse3;
    },
    AtrulePrelude: function() {
        return parse4;
    },
    AttributeSelector: function() {
        return parse5;
    },
    Block: function() {
        return parse6;
    },
    Brackets: function() {
        return parse7;
    },
    CDC: function() {
        return parse8;
    },
    CDO: function() {
        return parse9;
    },
    ClassSelector: function() {
        return parse10;
    },
    Combinator: function() {
        return parse11;
    },
    Comment: function() {
        return parse12;
    },
    Condition: function() {
        return parse13;
    },
    Declaration: function() {
        return parse14;
    },
    DeclarationList: function() {
        return parse15;
    },
    Dimension: function() {
        return parse16;
    },
    Feature: function() {
        return parse17;
    },
    FeatureFunction: function() {
        return parse18;
    },
    FeatureRange: function() {
        return parse19;
    },
    Function: function() {
        return parse20;
    },
    GeneralEnclosed: function() {
        return parse21;
    },
    Hash: function() {
        return parse22;
    },
    IdSelector: function() {
        return parse24;
    },
    Identifier: function() {
        return parse23;
    },
    Layer: function() {
        return parse25;
    },
    LayerList: function() {
        return parse26;
    },
    MediaQuery: function() {
        return parse27;
    },
    MediaQueryList: function() {
        return parse28;
    },
    NestingSelector: function() {
        return parse29;
    },
    Nth: function() {
        return parse30;
    },
    Number: function() {
        return parse31;
    },
    Operator: function() {
        return parse32;
    },
    Parentheses: function() {
        return parse33;
    },
    Percentage: function() {
        return parse34;
    },
    PseudoClassSelector: function() {
        return parse35;
    },
    PseudoElementSelector: function() {
        return parse36;
    },
    Ratio: function() {
        return parse37;
    },
    Raw: function() {
        return parse38;
    },
    Rule: function() {
        return parse39;
    },
    Scope: function() {
        return parse40;
    },
    Selector: function() {
        return parse41;
    },
    SelectorList: function() {
        return parse42;
    },
    String: function() {
        return parse43;
    },
    StyleSheet: function() {
        return parse44;
    },
    SupportsDeclaration: function() {
        return parse45;
    },
    TypeSelector: function() {
        return parse46;
    },
    UnicodeRange: function() {
        return parse47;
    },
    Url: function() {
        return parse48;
    },
    Value: function() {
        return parse49;
    },
    WhiteSpace: function() {
        return parse50;
    }
});
// node_modules/css-tree/lib/syntax/config/parser.js
var parser_default = {
    parseContext: {
        default: "StyleSheet",
        stylesheet: "StyleSheet",
        atrule: "Atrule",
        atrulePrelude: function atrulePrelude(options) {
            return this.AtrulePrelude(options.atrule ? String(options.atrule) : null);
        },
        mediaQueryList: "MediaQueryList",
        mediaQuery: "MediaQuery",
        condition: function condition(options) {
            return this.Condition(options.kind);
        },
        rule: "Rule",
        selectorList: "SelectorList",
        selector: "Selector",
        block: function block() {
            return this.Block(true);
        },
        declarationList: "DeclarationList",
        declaration: "Declaration",
        value: "Value"
    },
    features: {
        supports: {
            selector: function selector() {
                return this.Selector();
            }
        },
        container: {
            style: function style() {
                return this.Declaration();
            }
        }
    },
    scope: scope_exports,
    atrule: atrule_default,
    pseudo: pseudo_default,
    node: index_parse_exports
};
// node_modules/css-tree/lib/syntax/config/walker.js
var walker_default = {
    node: node_exports
};
// node_modules/css-tree/lib/syntax/index.js
var syntax_default = create_default(_object_spread({}, lexer_default, parser_default, walker_default));
var require4 = module$1.createRequire(typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('index.js', document.baseURI).href);
var version = require4("../package.json").version;
// node_modules/css-tree/lib/index.js
var tokenize2 = syntax_default.tokenize, parse51 = syntax_default.parse, generate51 = syntax_default.generate, lexer = syntax_default.lexer, createLexer = syntax_default.createLexer, walk2 = syntax_default.walk, find = syntax_default.find, findLast = syntax_default.findLast, findAll = syntax_default.findAll, toPlainObject = syntax_default.toPlainObject, fromPlainObject = syntax_default.fromPlainObject, fork = syntax_default.fork;
// src/index.ts
var GEN_MODE = "safe";
function isElement(node) {
    return node.nodeType === nodeHtmlParser.NodeType.ELEMENT_NODE;
}
function getDomContent(renderedHtml, globalUsage) {
    var root = nodeHtmlParser.parse(renderedHtml);
    var classes = new Set(globalUsage.classes || []);
    var ids = new Set(globalUsage.ids || []);
    var tags = new Set(globalUsage.tags ? globalUsage.tags.map(function(t) {
        return t.toLowerCase();
    }) : []);
    function visit(node) {
        if (!isElement(node)) {
            return;
        }
        var attributes = node.attributes;
        var c = attributes.class;
        if (c) {
            c.split(" ").forEach(function(cls) {
                return classes.add(cls);
            });
        }
        var id = attributes.id;
        if (id) {
            ids.add(id);
        }
        if (node.tagName) {
            tags.add(node.tagName.toLowerCase());
        }
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = node.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                visit(child);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    visit(root);
    return {
        ids: ids,
        classes: classes,
        tags: tags
    };
}
function generate52(parsedCss, html, globalUsage, assetsHost) {
    var _getDomContent = getDomContent(html, globalUsage || {}), classes = _getDomContent.classes, ids = _getDomContent.ids, tags = _getDomContent.tags;
    function shouldInclude(rule) {
        return !rule.dependencySets || rule.dependencySets.some(function(set) {
            return (!set.classes || set.classes.every(function(c) {
                return classes.has(c);
            })) && (!set.ids || set.ids.every(function(c) {
                return ids.has(c);
            })) && (!set.tags || set.tags.every(function(c) {
                return tags.has(c);
            }));
        });
    }
    function generateValue(value) {
        if (typeof value === "string") {
            return value;
        } else {
            var result = "";
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var v = _step.value;
                    if (typeof v === "string") {
                        result += v;
                    } else if ("type" in v && v.type === "assetshost") {
                        result += assetsHost ? "//" + assetsHost : "";
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return result;
        }
    }
    function innerGenerate(nodes) {
        var result = "";
        nodes.forEach(function(c) {
            if (typeof c === "string") {
                result += c;
            } else if (c.type === "media") {
                var innerResult = innerGenerate(c.rules);
                if (innerResult) {
                    result += generateValue(c.prelude) + "{" + innerResult + "}";
                }
            } else {
                if (shouldInclude(c)) {
                    result += generateValue(c.text);
                }
            }
        });
        return result;
    }
    return innerGenerate(parsedCss);
}
function generateDependencySet(node) {
    if (node.type !== "Selector") {
        throw new Error("Unexpected type ".concat(node.type, ", expected 'Selector'"));
    }
    var ids = null;
    var classes = null;
    var tags = null;
    node.children.forEach(function(child) {
        switch(child.type){
            case "ClassSelector":
                classes = classes || [];
                if (classes.indexOf(child.name) < 0) {
                    classes.push(child.name);
                }
                break;
            case "IdSelector":
                ids = ids || [];
                if (ids.indexOf(child.name) < 0) {
                    ids.push(child.name);
                }
                break;
            case "TypeSelector":
                if (child.name !== "*") {
                    tags = tags || [];
                    var tag = child.name.toLowerCase();
                    if (tags.indexOf(tag) < 0) {
                        tags.push(tag);
                    }
                }
                break;
        }
    });
    return {
        classes: classes,
        ids: ids,
        tags: tags
    };
}
function mapRule(node) {
    if (node.type !== "Rule") {
        throw new Error("Unexpected type ".concat(node.type, ", expected 'Rule'"));
    }
    var items = [
        generate51(node.prelude, {
            mode: GEN_MODE
        }) + "{"
    ];
    var firstDeclaration = true;
    node.block.children.forEach(function(c) {
        if (c.type !== "Declaration") {
            throw new Error("Unexpected type ".concat(c.type, ", expected 'Declaration'"));
        }
        if (!firstDeclaration) {
            items.push(";");
        }
        pushDeclaration(items, c);
        firstDeclaration = false;
    });
    items.push("}");
    return {
        type: "rule",
        text: consolidateItemsToString(items),
        dependencySets: node.prelude.type === "SelectorList" ? Array.from(node.prelude.children).map(generateDependencySet) : []
    };
}
function consolidateItemsToString(parts) {
    if (!parts.length) {
        return "";
    }
    var result = [
        parts[0]
    ];
    for(var i = 1; i < parts.length; i++){
        var p = parts[i];
        if (typeof result[result.length - 1] === "string" && typeof p === "string") {
            result[result.length - 1] = result[result.length - 1] + p;
        } else {
            result.push(p);
        }
    }
    return result.length === 1 && typeof result[0] === "string" ? result[0] : result;
}
function pushDeclaration(items, decl) {
    console.log("decl value type", decl.value.type);
    if (decl.value.type === "Value") {
        items.push(decl.property + ":");
        var isFirst = true;
        decl.value.children.forEach(function(v) {
            if (!isFirst) {
                items.push(" ");
            }
            if (v.type === "String") {
                items.push(string_exports.encode(v.value));
            } else if (v.type === "Url") {
                pushUrlValue(items, v);
            } else if (v.type === "Function" && v.name === "format") {
                items.push(generate51(v, {
                    mode: GEN_MODE
                }));
            } else {
                items.push(generate51(v, {
                    mode: GEN_MODE
                }));
            }
            isFirst = false;
        });
        if (decl.important) {
            items.push(" !important");
        }
    } else if (decl.value.type === "Raw") {
        items.push(decl.property + ":", decl.value.value);
        if (decl.important) {
            items.push(" !important");
        }
    } else {
        items.push(generate51(decl.value, {
            mode: GEN_MODE
        }));
        throw new Error("This should NEVER happen.");
    }
}
function pushUrlValue(items, node) {
    if (node.type === "Url") {
        items.push("url(");
        pushUrlString(items, node.value);
        items.push(")");
    } else {
        items.push(generate51(node, {
            mode: GEN_MODE
        }));
    }
}
function pushUrlString(items, value) {
    var _items;
    var entry = [];
    if (value.startsWith("/") && !value.startsWith("//")) {
        entry.push({
            type: "assetshost"
        }, value);
    } else {
        entry.push(value);
    }
    (_items = items).push.apply(_items, [
        '"'
    ].concat(_to_consumable_array(entry), [
        '"'
    ]));
}
function mapChild(node) {
    console.log("node", node);
    switch(node.type){
        case "Atrule":
            if (node.name === "supports" || node.name === "media") {
                return {
                    type: "media",
                    prelude: "@" + node.name + (node.prelude ? " " + generate51(node.prelude, {
                        mode: "safe"
                    }) : ""),
                    rules: removeDuplicates(node.block ? node.block.children.map(mapChild).filter(function(c) {
                        return !!c;
                    }).toArray() : [])
                };
            } else if (node.name === "import" && node.prelude && "children" in node.prelude) {
                var items = [
                    "@import "
                ];
                var isFirst = true;
                node.prelude.children.forEach(function(c) {
                    if (isFirst && c.type === "String") {
                        pushUrlString(items, c.value);
                    } else if (c.type === "Url") {
                        pushUrlValue(items, c);
                    } else {
                        var unknown = generate51(c, {
                            mode: GEN_MODE
                        });
                        items.push(// ensure space between media query list and url
                        " ", unknown);
                    }
                    isFirst = false;
                });
                items.push(";");
                return {
                    type: "rule",
                    text: consolidateItemsToString(items)
                };
            } else if (node.name === "font-face" && node.block) {
                var items1 = [
                    "@font-face{"
                ];
                var first = true;
                node.block.children.forEach(function(c) {
                    if (!first) {
                        items1.push(";");
                    }
                    if (c.type === "Declaration") {
                        pushDeclaration(items1, c);
                    } else {
                        items1.push(generate51(c, {
                            mode: GEN_MODE
                        }));
                    }
                    first = false;
                });
                items1.push("}");
                return {
                    type: "rule",
                    text: consolidateItemsToString(items1)
                };
            } else if (node.name === "counter-style" && node.prelude && "children" in node.prelude && node.block) {
                var items2 = [
                    "@counter-style"
                ];
                var wat = [
                    generate51(node.prelude, {
                        mode: GEN_MODE
                    }) + "{"
                ];
                console.log({
                    wat: wat
                });
                node.prelude.children.forEach(function(c) {
                    if (c.type === "String") {
                        items2.push(c.value);
                    } else {
                        var unknown = generate51(c, {
                            mode: GEN_MODE
                        });
                        items2.push(// ensure space between media query list and url
                        " ", unknown);
                    }
                });
                items2.push("{");
                var first1 = true;
                node.block.children.forEach(function(c) {
                    if (!first1) {
                        items2.push(";");
                    }
                    if (c.type === "Declaration") {
                        pushDeclaration(items2, c);
                    } else {
                        items2.push(generate51(c, {
                            mode: GEN_MODE
                        }));
                    }
                    first1 = false;
                });
                items2.push("}");
                return {
                    type: "rule",
                    text: consolidateItemsToString(items2)
                };
            } else {
                return generate51(node, {
                    mode: GEN_MODE
                });
            }
        case "Rule":
            return mapRule(node);
        case "Raw":
        case "Comment":
            return null;
        default:
            throw new Error("Unexpected type ".concat(node.type, ", expected 'Atrule', 'Rule', 'Raw', 'Comment'"));
    }
}
function removeDuplicates(rules) {
    var found = /* @__PURE__ */ new Set();
    var result = [];
    for(var i = rules.length - 1; i >= 0; i--){
        var json = JSON.stringify(rules[i]);
        if (!found.has(json)) {
            result.push(rules[i]);
            found.add(json);
        }
    }
    result.reverse();
    return result;
}
function parse52(css) {
    var ast = parse51(css);
    if (ast.type !== "StyleSheet") {
        throw new Error("Unexpected type ".concat(ast.type, ", expected 'StyleSheet'"));
    }
    var parsedCss = [];
    ast.children.forEach(function(child) {
        var mapped = mapChild(child);
        if (mapped) {
            parsedCss.push(mapped);
        }
    });
    var deduplicatedCss = removeDuplicates(parsedCss);
    return {
        generate: function generate(html, globalUsage, assetsHost) {
            return generate52(deduplicatedCss, html, globalUsage, assetsHost);
        }
    };
}
exports.parse = parse52;
