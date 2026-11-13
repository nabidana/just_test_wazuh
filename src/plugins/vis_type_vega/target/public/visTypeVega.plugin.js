/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"visTypeVega": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeVega.chunk." + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["visTypeVega_bundle_jsonpfunction"] = window["visTypeVega_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages/osd-optimizer/target/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/brace/mode/hjson.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/mode/hjson.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ace.define("ace/mode/hjson_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var HjsonHighlightRules = function() {

    this.$rules = {
        start: [{
            include: "#comments"
        }, {
            include: "#rootObject"
        }, {
            include: "#value"
        }],
        "#array": [{
            token: "paren.lparen",
            regex: /\[/,
            push: [{
                token: "paren.rparen",
                regex: /\]/,
                next: "pop"
            }, {
                include: "#value"
            }, {
                include: "#comments"
            }, {
                token: "text",
                regex: /,|$/
            }, {
                token: "invalid.illegal",
                regex: /[^\s\]]/
            }, {
                defaultToken: "array"
            }]
        }],
        "#comments": [{
            token: [
                "comment.punctuation",
                "comment.line"
            ],
            regex: /(#)(.*$)/
        }, {
            token: "comment.punctuation",
            regex: /\/\*/,
            push: [{
                token: "comment.punctuation",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block"
            }]
        }, {
            token: [
                "comment.punctuation",
                "comment.line"
            ],
            regex: /(\/\/)(.*$)/
        }],
        "#constant": [{
            token: "constant",
            regex: /\b(?:true|false|null)\b/
        }],
        "#keyname": [{
            token: "keyword",
            regex: /(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/
        }],
        "#mstring": [{
            token: "string",
            regex: /'''/,
            push: [{
                token: "string",
                regex: /'''/,
                next: "pop"
            }, {
                defaultToken: "string"
            }]
        }],
        "#number": [{
            token: "constant.numeric",
            regex: /-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,
            comment: "handles integer and decimal numbers"
        }],
        "#object": [{
            token: "paren.lparen",
            regex: /\{/,
            push: [{
                token: "paren.rparen",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#keyname"
            }, {
                include: "#value"
            }, {
                token: "text",
                regex: /:/
            }, {
                token: "text",
                regex: /,/
            }, {
                defaultToken: "paren"
            }]
        }],
        "#rootObject": [{
            token: "paren",
            regex: /(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,
            push: [{
                token: "paren.rparen",
                regex: /---none---/,
                next: "pop"
            }, {
                include: "#keyname"
            }, {
                include: "#value"
            }, {
                token: "text",
                regex: /:/
            }, {
                token: "text",
                regex: /,/
            }, {
                defaultToken: "paren"
            }]
        }],
        "#string": [{
            token: "string",
            regex: /"/,
            push: [{
                token: "string",
                regex: /"/,
                next: "pop"
            }, {
                token: "constant.language.escape",
                regex: /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/
            }, {
                token: "invalid.illegal",
                regex: /\\./
            }, {
                defaultToken: "string"
            }]
        }],
        "#ustring": [{
            token: "string",
            regex: /\b[^:,0-9\-\{\[\}\]\s].*$/
        }],
        "#value": [{
            include: "#constant"
        }, {
            include: "#number"
        }, {
            include: "#string"
        }, {
            include: "#array"
        }, {
            include: "#object"
        }, {
            include: "#comments"
        }, {
            include: "#mstring"
        }, {
            include: "#ustring"
        }]
    };

    this.normalizeRules();
};

HjsonHighlightRules.metaData = {
    fileTypes: ["hjson"],
    foldingStartMarker: "(?x:     # turn on extended mode\n              ^    # a line beginning with\n              \\s*    # some optional space\n              [{\\[]  # the start of an object or array\n              (?!    # but not followed by\n              .*   # whatever\n              [}\\]]  # and the close of an object or array\n              ,?   # an optional comma\n              \\s*  # some optional space\n              $    # at the end of the line\n              )\n              |    # ...or...\n              [{\\[]  # the start of an object or array\n              \\s*    # some optional space\n              $    # at the end of the line\n            )",
    foldingStopMarker: "(?x:   # turn on extended mode\n             ^    # a line beginning with\n             \\s*  # some optional space\n             [}\\]]  # and the close of an object or array\n             )",
    keyEquivalent: "^~J",
    name: "Hjson",
    scopeName: "source.hjson"
};


oop.inherits(HjsonHighlightRules, TextHighlightRules);

exports.HjsonHighlightRules = HjsonHighlightRules;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);

        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }

        var fw = this._getFoldWidgetBase(session, foldStyle, row);

        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart

        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);

        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);

        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);

            var range = session.getCommentFoldRange(row, i + match[0].length, 1);

            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }

            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };

    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);

            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }

        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;

        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/hjson",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/hjson_highlight_rules","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var HjsonHighlightRules = acequire("./hjson_highlight_rules").HjsonHighlightRules;
var FoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = HjsonHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = { start: "/*", end: "*/" };
    this.$id = "ace/mode/hjson";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v7dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/index.scss?v7dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:0.875rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#4d3e25;color:#ffce7a}.vgaVis__message--err .vgaVis__messageCode{background-color:#4d1f1f;color:#f66}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#535966;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,UAAU,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:0.875rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#4d3e25;color:#ffce7a}.vgaVis__message--err .vgaVis__messageCode{background-color:#4d1f1f;color:#f66}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#535966;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v7light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/index.scss?v7light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:0.875rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#fef6e6;color:#936400}.vgaVis__message--err .vgaVis__messageCode{background-color:#f8e9e9;color:#bd271e}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#98a2b3;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,aAAa,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:0.875rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#fef6e6;color:#936400}.vgaVis__message--err .vgaVis__messageCode{background-color:#f8e9e9;color:#bd271e}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#98a2b3;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/index.scss?v8dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:15.75px;font-size:0.875rem;line-height:1.333333;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#544a37;color:#ffce7a}.vgaVis__message--err .vgaVis__messageCode{background-color:#542b31;color:#ff7575}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#5b6875;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,aAAa,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:15.75px;font-size:0.875rem;line-height:1.333333;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#544a37;color:#ffce7a}.vgaVis__message--err .vgaVis__messageCode{background-color:#542b31;color:#ff7575}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#5b6875;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/index.scss?v8light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:15.75px;font-size:0.875rem;line-height:1.333333;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#fbf5e6;color:#8f680b}.vgaVis__message--err .vgaVis__messageCode{background-color:#f6e9e9;color:#bd271e}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#adb4ba;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,aAAa,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:15.75px;font-size:0.875rem;line-height:1.333333;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#fbf5e6;color:#8f680b}.vgaVis__message--err .vgaVis__messageCode{background-color:#f6e9e9;color:#bd271e}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#adb4ba;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v9dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/index.scss?v9dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:1rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#4b3616;color:#f4ae27}.vgaVis__message--err .vgaVis__messageCode{background-color:#3f1d24;color:#d17671}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#5c666f;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,aAAa,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:1rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#4b3616;color:#f4ae27}.vgaVis__message--err .vgaVis__messageCode{background-color:#3f1d24;color:#d17671}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#5c666f;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v9light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/index.scss?v9light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:1rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#f9f5ea;color:#8e6625}.vgaVis__message--err .vgaVis__messageCode{background-color:#f6ebeb;color:#ba3a33}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#adb4ba;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,YAAY,CAAC,aAAa,CAAC,iBAAiB,CAAC,cAAc,SAAS,CAAC,aAAa,CAAC,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,UAAU,CAAC,WAAW,CAAC,6BAA6B,uBAAuB,CAAC,kBAAkB,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,YAAY,CAAC,8BAA8B,aAAa,CAAC,2CAA2C,qBAAqB,CAAC,wCAAwC,kBAAkB,CAAC,mDAAmD,WAAW,CAAC,6CAA6C,oBAAoB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,oBAAoB,CAAC,qBAAqB,CAAC,mCAAmC,gBAAgB,CAAC,oCAAoC,eAAe,CAAC,oDAAoD,kBAAkB,CAAC,kBAAkB,iBAAiB,CAAC,KAAK,CAAC,UAAU,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,UAAU,CAAC,sCAAsC,oBAAoB,CAAC,WAAW,CAAC,4CAA4C,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,wBAAwB,CAAC,aAAa,CAAC,iBAAiB,cAAc,CAAC,cAAc,CAAC,oBAAoB,iBAAiB,CAAC,oBAAoB,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,0BAA0B,eAAe,CAAC,eAAe,CAAC,0CAA0C,wBAAwB,cAAc,CAAC,0BAA0B,eAAe,CAAC,CAAC,2CAA2C,SAAS,CAAC,0CAA0C,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,gEAAgE,WAAW,oBAAoB,CAAC,gBAAgB,CAAC,eAAe,CAAC,8BAA8B,UAAU,CAAC,WAAW,CAAC,oCAAoC,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yEAAyE,8BAA8B,CAAC,CAAC,6BAA6B,iBAAiB,CAAC,YAAY,CAAC,OAAO,CAAC,UAAU,CAAC,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVis{display:flex;flex:1 1 100%;position:relative}.vgaVis__view{z-index:0;flex:1 1 100%;display:block;max-width:100%;max-height:100%;width:100%;height:100%}.vgaVis__view .vega-bindings{display:none !important}.vgaVis__controls{font-size:14px;font-size:1rem;line-height:1.5;display:flex}.vgaVis__controls:not(:empty){padding:8px 0}.vgaVis__controls.vgaVis__controls--column{flex-direction:column}.vgaVis__controls.vgaVis__controls--row{flex-direction:row}.vgaVis__controls.vgaVis__controls--row>.vega-bind{flex-grow:1}.vgaVis__controls>.vega-bind .vega-bind-name{display:inline-block;width:104px}.vgaVis__controls>.vega-bind input[type=range]{width:120px;display:inline-block;vertical-align:middle}.vgaVis__controls>.vega-bind label{margin:0 0 0 8px}.vgaVis__controls>.vega-bind select{max-width:160px}.vgaVis__controls>.vega-bind .vega-bind-radio label{margin:0 8px 0 4px}.vgaVis__messages{position:absolute;top:0;width:100%;margin:auto;opacity:.8;z-index:1;list-style:none}.vgaVis__message{margin:8px}.vgaVis__message .vgaVis__messageCode{white-space:pre-wrap;padding:8px}.vgaVis__message--warn .vgaVis__messageCode{background-color:#f9f5ea;color:#8e6625}.vgaVis__message--err .vgaVis__messageCode{background-color:#f6ebeb;color:#ba3a33}.vgaVis__tooltip{max-width:100%;position:fixed}.vgaVis__tooltip h2{margin-bottom:8px}.vgaVis__tooltip td{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;padding-top:4px;padding-bottom:4px}.vgaVis__tooltip td.key{color:#adb4ba;max-width:160px;text-align:right;padding-right:4px}.vgaVis__tooltip td.value{max-width:240px;text-align:left}@media only screen and (max-width: 768px){.vgaVis__tooltip td.key{max-width:96px}.vgaVis__tooltip td.value{max-width:160px}}.visEditor--vega .visEditorSidebar__config{padding:0}@media only screen and (max-width: 574px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 575px)and (max-width: 767px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}@media only screen and (min-width: 768px)and (max-width: 991px){.vgaEditor{scrollbar-width:thin;max-height:240px;overflow-y:auto}.vgaEditor::-webkit-scrollbar{width:16px;height:16px}.vgaEditor::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.vgaEditor::-webkit-scrollbar-corner,.vgaEditor::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}}.vgaEditor__aceEditorActions{position:absolute;z-index:1000;top:8px;right:40px;line-height:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v7dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/vega_inspector/vega_data_inspector.scss?v7dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v7light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/vega_inspector/vega_data_inspector.scss?v7light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v8dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/vega_inspector/vega_data_inspector.scss?v8dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v8light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/vega_inspector/vega_data_inspector.scss?v8light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v9dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/vega_inspector/vega_data_inspector.scss?v9dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v9light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/vega_inspector/vega_data_inspector.scss?v9light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n", "",{"version":3,"sources":["webpack://./public/vega_inspector/vega_data_inspector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,wDAAwD,WAAW,CAAC,sBAAsB,YAAY,CAAC,qBAAqB,CAAC,qCAAqC,aAAa,CAAC,sCAAsC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.vgaVegaDataInspector,.vgaVegaDataInspector__specViewer{height:100%}.vgaVegaDataInspector{display:flex;flex-direction:column}.vgaVegaDataInspector [role=tablist]{flex-shrink:0}.vgaVegaDataInspector [role=tabpanel]{flex-grow:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-comments.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-comments.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


var common=__webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");

function makeComment(b, a, x) {
  var c;
  if (b) c={ b: b };
  if (a) (c=c||{}).a=a;
  if (x) (c=c||{}).x=x;
  return c;
}

function extractComments(value, root) {

  if (value===null || typeof value!=='object') return;
  var comments=common.getComment(value);
  if (comments) common.removeComment(value);

  var i, length; // loop
  var any, res;
  if (Object.prototype.toString.apply(value) === '[object Array]') {
    res={ a: {} };
    for (i=0, length=value.length; i<length; i++) {
      if (saveComment(res.a, i, comments.a[i], extractComments(value[i])))
        any=true;
    }
    if (!any && comments.e){
      res.e=makeComment(comments.e[0], comments.e[1]);
      any=true;
    }
  } else {
    res={ s: {} };

    // get key order (comments and current)
    var keys, currentKeys=Object.keys(value);
    if (comments && comments.o) {
      keys=[];
      comments.o.concat(currentKeys).forEach(function(key) {
        if (Object.prototype.hasOwnProperty.call(value, key) && keys.indexOf(key)<0)
          keys.push(key);
      });
    } else keys=currentKeys;
    res.o=keys;

    // extract comments
    for (i=0, length=keys.length; i<length; i++) {
      var key=keys[i];
      if (saveComment(res.s, key, comments.c[key], extractComments(value[key])))
        any=true;
    }
    if (!any && comments.e) {
      res.e=makeComment(comments.e[0], comments.e[1]);
      any=true;
    }
  }

  if (root && comments && comments.r) {
    res.r=makeComment(comments.r[0], comments.r[1]);
  }

  return any?res:undefined;
}

function mergeStr() {
  var res="";
  [].forEach.call(arguments, function(c) {
    if (c && c.trim()!=="") {
      if (res) res+="; ";
      res+=c.trim();
    }
  });
  return res;
}

function mergeComments(comments, value) {
  var dropped=[];
  merge(comments, value, dropped, []);

  // append dropped comments:
  if (dropped.length>0) {
    var text=rootComment(value, null, 1);
    text+="\n# Orphaned comments:\n";
    dropped.forEach(function(c) {
      text+=("# "+c.path.join('/')+": "+mergeStr(c.b, c.a, c.e)).replace("\n", "\\n ")+"\n";
    });
    rootComment(value, text, 1);
  }
}

function saveComment(res, key, item, col) {
  var c=makeComment(item?item[0]:undefined, item?item[1]:undefined, col);
  if (c) res[key]=c;
  return c;
}

function droppedComment(path, c) {
  var res=makeComment(c.b, c.a);
  res.path=path;
  return res;
}

function dropAll(comments, dropped, path) {

  if (!comments) return;

  var i, length; // loop

  if (comments.a) {

    for (i=0, length=comments.a.length; i<length; i++) {
      var kpath=path.slice().concat([i]);
      var c=comments.a[i];
      if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    }
  } else if (comments.o) {

    comments.o.forEach(function(key) {
      var kpath=path.slice().concat([key]);
      var c=comments.s[key];
      if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    });
  }

  if (comments.e)
    dropped.push(droppedComment(path, comments.e));
}

function merge(comments, value, dropped, path) {

  if (!comments) return;
  if (value===null || typeof value!=='object') {
    dropAll(comments, dropped, path);
    return;
  }

  var i; // loop
  var setComments=common.createComment(value);

  if (path.length===0 && comments.r)
    setComments.r=[comments.r.b, comments.r.a];

  if (Object.prototype.toString.apply(value) === '[object Array]') {
    setComments.a=[];
    var a=comments.a||{}; // Treating Array like an Object, so using {} for speed
    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        i=parseInt(key);
        var c=comments.a[key];
        if (c) {
          var kpath=path.slice().concat([i]);
          if (i<value.length) {
            setComments.a[i]=[c.b, c.a];
            merge(c.x, value[i], dropped, kpath);
          } else {
            dropped.push(droppedComment(kpath, c));
            dropAll(c.x, dropped, kpath);
          }
        }
      }
    }
    if (i===0 && comments.e) setComments.e=[comments.e.b, comments.e.a];
  } else {
    setComments.c={};
    setComments.o=[];
    (comments.o||[]).forEach(function(key) {
      var kpath=path.slice().concat([key]);
      var c=comments.s[key];
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        setComments.o.push(key);
        if (c) {
          setComments.c[key]=[c.b, c.a];
          merge(c.x, value[key], dropped, kpath);
        }
      } else if (c) {
        dropped.push(droppedComment(kpath, c));
        dropAll(c.x, dropped, kpath);
      }
    });
    if (comments.e) setComments.e=[comments.e.b, comments.e.a];
  }
}

function rootComment(value, setText, header) {
  var comment=common.createComment(value, common.getComment(value));
  if (!comment.r) comment.r=["", ""];
  if (setText || setText==="") comment.r[header]=common.forceComment(setText);
  return comment.r[header]||"";
}

module.exports={
  extract: function(value) { return extractComments(value, true); },
  merge: mergeComments,
  header: function(value, setText) { return rootComment(value, setText, 0); },
  footer: function(value, setText) { return rootComment(value, setText, 1); },
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-common.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-common.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


var os=__webpack_require__(/*! os */ "../../../node_modules/os-browserify/browser.js"); // will be {} when used in a browser

function tryParseNumber(text, stopAtNext) {

  // try to parse a number

  var number, string = '', leadingZeros = 0, testLeading = true;
  var at = 0;
  var ch;
  function next() {
    ch = text.charAt(at);
    at++;
    return ch;
  }

  next();
  if (ch === '-') {
    string = '-';
    next();
  }
  while (ch >= '0' && ch <= '9') {
    if (testLeading) {
      if (ch == '0') leadingZeros++;
      else testLeading = false;
    }
    string += ch;
    next();
  }
  if (testLeading) leadingZeros--; // single 0 is allowed
  if (ch === '.') {
    string += '.';
    while (next() && ch >= '0' && ch <= '9')
      string += ch;
  }
  if (ch === 'e' || ch === 'E') {
    string += ch;
    next();
    if (ch === '-' || ch === '+') {
      string += ch;
      next();
    }
    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }
  }

  // skip white/to (newline)
  while (ch && ch <= ' ') next();

  if (stopAtNext) {
    // end scan if we find a punctuator character like ,}] or a comment
    if (ch === ',' || ch === '}' || ch === ']' ||
      ch === '#' || ch === '/' && (text[at] === '/' || text[at] === '*')) ch = 0;
  }

  number = +string;
  if (ch || leadingZeros || !isFinite(number)) return undefined;
  else return number;
}

function createComment(value, comment) {
  if (Object.defineProperty) Object.defineProperty(value, "__COMMENTS__", { enumerable: false, writable: true });
  return (value.__COMMENTS__ = comment||{});
}

function removeComment(value) {
  Object.defineProperty(value, "__COMMENTS__", { value: undefined });
}

function getComment(value) {
  return value.__COMMENTS__;
}

function forceComment(text) {
  if (!text) return "";
  var a = text.split('\n');
  var str, i, j, len;
  for (j = 0; j < a.length; j++) {
    str = a[j];
    len = str.length;
    for (i = 0; i < len; i++) {
      var c = str[i];
      if (c === '#') break;
      else if (c === '/' && (str[i+1] === '/' || str[i+1] === '*')) {
        if (str[i+1] === '*') j = a.length; // assume /**/ covers whole block, bail out
        break;
      }
      else if (c > ' ') {
        a[j] = '# ' + str;
        break;
      }
    }
  }
  return a.join('\n');
}

module.exports = {
  EOL: os.EOL || '\n',
  tryParseNumber: tryParseNumber,
  createComment: createComment,
  removeComment: removeComment,
  getComment: getComment,
  forceComment: forceComment,
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-dsf.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-dsf.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


function loadDsf(col, type) {

  if (Object.prototype.toString.apply(col) !== '[object Array]') {
    if (col) throw new Error("dsf option must contain an array!");
    else return nopDsf;
  } else if (col.length === 0) return nopDsf;

  var dsf = [];
  function isFunction(f) { return {}.toString.call(f) === '[object Function]'; }

  col.forEach(function(x) {
    if (!x.name || !isFunction(x.parse) || !isFunction(x.stringify))
      throw new Error("extension does not match the DSF interface");
    dsf.push(function() {
      try {
        if (type == "parse") {
          return x.parse.apply(null, arguments);
        } else if (type == "stringify") {
          var res=x.stringify.apply(null, arguments);
          // check result
          if (res !== undefined && (typeof res !== "string" ||
            res.length === 0 ||
            res[0] === '"' ||
            [].some.call(res, function(c) { return isInvalidDsfChar(c); })))
            throw new Error("value may not be empty, start with a quote or contain a punctuator character except colon: " + res);
          return res;
        } else throw new Error("Invalid type");
      } catch (e) {
        throw new Error("DSF-"+x.name+" failed; "+e.message);
      }
    });
  });

  return runDsf.bind(null, dsf);
}

function runDsf(dsf, value) {
  if (dsf) {
    for (var i = 0; i < dsf.length; i++) {
      var res = dsf[i](value);
      if (res !== undefined) return res;
    }
  }
}

function nopDsf(/*value*/) {
}

function isInvalidDsfChar(c) {
  return c === '{' || c === '}' || c === '[' || c === ']' || c === ',';
}


function math(/*opt*/) {
  return {
    name: "math",
    parse: function (value) {
      switch (value) {
        case "+inf":
        case "inf":
        case "+Inf":
        case "Inf": return Infinity;
        case "-inf":
        case "-Inf": return -Infinity;
        case "nan":
        case "NaN": return NaN;
      }
    },
    stringify: function (value) {
      if (typeof value !== 'number') return;
      if (1 / value === -Infinity) return "-0"; // 0 === -0
      if (value === Infinity) return "Inf";
      if (value === -Infinity) return "-Inf";
      if (isNaN(value)) return "NaN";
    },
  };
}
math.description="support for Inf/inf, -Inf/-inf, Nan/naN and -0";

function hex(opt) {
  var out=opt && opt.out;
  return {
    name: "hex",
    parse: function (value) {
      if (/^0x[0-9A-Fa-f]+$/.test(value))
        return parseInt(value, 16);
    },
    stringify: function (value) {
      if (out && Number.isInteger(value))
        return "0x"+value.toString(16);
    },
  };
}
hex.description="parse hexadecimal numbers prefixed with 0x";

function date(/*opt*/) {
  return {
    name: "date",
    parse: function (value) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(value) ||
        /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(?:.\d+)(?:Z|[+-]\d{2}:\d{2})$/.test(value)) {
        var dt = Date.parse(value);
        if (!isNaN(dt)) return new Date(dt);
      }
    },
    stringify: function (value) {
      if (Object.prototype.toString.call(value) === '[object Date]') {
        var dt = value.toISOString();
        if (dt.indexOf("T00:00:00.000Z", dt.length - 14) !== -1) return dt.substr(0, 10);
        else return dt;
      }
    },
  };
}
date.description="support ISO dates";

module.exports = {
  loadDsf: loadDsf,
  std: {
    math: math,
    hex: hex,
    date: date,
  },
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-parse.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-parse.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


module.exports = function(source, opt) {

  var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
  var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

  var text;
  var at;   // The index of the current character
  var ch;   // The current character
  var escapee = {
    '"': '"',
    "'": "'",
    '\\': '\\',
    '/': '/',
    b:  '\b',
    f:  '\f',
    n:  '\n',
    r:  '\r',
    t:  '\t'
  };

  var keepComments;
  var runDsf; // domain specific formats

  function resetAt() {
    at = 0;
    ch = ' ';
  }

  function isPunctuatorChar(c) {
    return c === '{' || c === '}' || c === '[' || c === ']' || c === ',' || c === ':';
  }

  // Call error when something is wrong.
  function error(m) {
    var i, col=0, line=1;
    for (i = at-1; i > 0 && text[i] !== '\n'; i--, col++) {}
    for (; i > 0; i--) if (text[i] === '\n') line++;
    throw new Error(m + " at line " + line + "," + col + " >>>" + text.substr(at-col, 20) + " ...");
  }

  function next() {
    // get the next character.
    ch = text.charAt(at);
    at++;
    return ch;
  }

  function peek(offs) {
    // range check is not required
    return text.charAt(at + offs);
  }

  function string(allowML) {
    // Parse a string value.
    // callers make sure that (ch === '"' || ch === "'")
    var string = '';

    // When parsing for string values, we must look for "/' and \ characters.
    var exitCh = ch;
    while (next()) {
      if (ch === exitCh) {
        next();
        if (allowML && exitCh === "'" && ch === "'" && string.length === 0) {
          // ''' indicates a multiline string
          next();
          return mlString();
        } else return string;
      }
      if (ch === '\\') {
        next();
        if (ch === 'u') {
          var uffff = 0;
          for (var i = 0; i < 4; i++) {
            next();
            var c = ch.charCodeAt(0), hex;
            if (ch >= '0' && ch <= '9') hex = c - 48;
            else if (ch >= 'a' && ch <= 'f') hex = c - 97 + 0xa;
            else if (ch >= 'A' && ch <= 'F') hex = c - 65 + 0xa;
            else error("Bad \\u char " + ch);
            uffff = uffff * 16 + hex;
          }
          string += String.fromCharCode(uffff);
        } else if (typeof escapee[ch] === 'string') {
          string += escapee[ch];
        } else break;
      } else if (ch === '\n' || ch === '\r') {
        error("Bad string containing newline");
      } else {
        string += ch;
      }
    }
    error("Bad string");
  }

  function mlString() {
    // Parse a multiline string value.
    var string = '', triple = 0;

    // we are at ''' +1 - get indent
    var indent = 0;
    for (;;) {
      var c=peek(-indent-5);
      if (!c || c === '\n') break;
      indent++;
    }

    function skipIndent() {
      var skip = indent;
      while (ch && ch <= ' ' && ch !== '\n' && skip-- > 0) next();
    }

    // skip white/to (newline)
    while (ch && ch <= ' ' && ch !== '\n') next();
    if (ch === '\n') { next(); skipIndent(); }

    // When parsing multiline string values, we must look for ' characters.
    for (;;) {
      if (!ch) {
        error("Bad multiline string");
      } else if (ch === '\'') {
        triple++;
        next();
        if (triple === 3) {
          if (string.slice(-1) === '\n') string=string.slice(0, -1); // remove last EOL
          return string;
        } else continue;
      } else {
        while (triple > 0) {
          string += '\'';
          triple--;
        }
      }
      if (ch === '\n') {
        string += '\n';
        next();
        skipIndent();
      } else {
        if (ch !== '\r') string += ch;
        next();
      }
    }
  }

  function keyname() {
    // quotes for keys are optional in Hjson
    // unless they include {}[],: or whitespace.

    if (ch === '"' || ch === "'") return string(false);

    var name = "", start = at, space = -1;
    for (;;) {
      if (ch === ':') {
        if (!name) error("Found ':' but no key name (for an empty key name use quotes)");
        else if (space >=0 && space !== name.length) { at = start + space; error("Found whitespace in your key name (use quotes to include)"); }
        return name;
      } else if (ch <= ' ') {
        if (!ch) error("Found EOF while looking for a key name (check your syntax)");
        else if (space < 0) space = name.length;
      } else if (isPunctuatorChar(ch)) {
        error("Found '" + ch + "' where a key name was expected (check your syntax or use quotes if the key name includes {}[],: or whitespace)");
      } else {
        name += ch;
      }
      next();
    }
  }

  function white() {
    while (ch) {
      // Skip whitespace.
      while (ch && ch <= ' ') next();
      // Hjson allows comments
      if (ch === '#' || ch === '/' && peek(0) === '/') {
        while (ch && ch !== '\n') next();
      } else if (ch === '/' && peek(0) === '*') {
        next(); next();
        while (ch && !(ch === '*' && peek(0) === '/')) next();
        if (ch) { next(); next(); }
      } else break;
    }
  }

  function tfnns() {
    // Hjson strings can be quoteless
    // returns string, true, false, or null.
    var value = ch;
    if (isPunctuatorChar(ch))
      error("Found a punctuator character '" + ch + "' when expecting a quoteless string (check your syntax)");

    for(;;) {
      next();
      // (detection of ml strings was moved to string())
      var isEol = ch === '\r' || ch === '\n' || ch === '';
      if (isEol ||
        ch === ',' || ch === '}' || ch === ']' ||
        ch === '#' ||
        ch === '/' && (peek(0) === '/' || peek(0) === '*')
        ) {
        // this tests for the case of {true|false|null|num}
        // followed by { ',' | '}' | ']' | '#' | '//' | '/*' }
        // which needs to be parsed as the specified value
        var chf = value[0];
        switch (chf) {
          case 'f': if (value.trim() === "false") return false; break;
          case 'n': if (value.trim() === "null") return null; break;
          case 't': if (value.trim() === "true") return true; break;
          default:
            if (chf === '-' || chf >= '0' && chf <= '9') {
              var n = common.tryParseNumber(value);
              if (n !== undefined) return n;
            }
        }
        if (isEol) {
          // remove any whitespace at the end (ignored in quoteless strings)
          value = value.trim();
          var dsfValue = runDsf(value);
          return dsfValue !== undefined ? dsfValue : value;
        }
      }
      value += ch;
    }
  }

  function getComment(cAt, first) {
    var i;
    cAt--;
    // remove trailing whitespace
    // but only up to EOL
    for (i = at - 2; i > cAt && text[i] <= ' ' && text[i] !== '\n'; i--);
    if (text[i] === '\n') i--;
    if (text[i] === '\r') i--;
    var res = text.substr(cAt, i-cAt+1);
    // return if we find anything other than whitespace
    for (i = 0; i < res.length; i++) {
      if (res[i] > ' ') {
        var j = res.indexOf('\n');
        if (j >= 0) {
          var c = [res.substr(0, j), res.substr(j+1)];
          if (first && c[0].trim().length === 0) c.shift();
          return c;
        } else return [res];
      }
    }
    return [];
  }

  function errorClosingHint(value) {
    function search(value, ch) {
      var i, k, length, res;
      switch (typeof value) {
        case 'string':
          if (value.indexOf(ch) >= 0) res = value;
          break;
        case 'object':
          if (Object.prototype.toString.apply(value) === '[object Array]') {
            for (i = 0, length = value.length; i < length; i++) {
              res=search(value[i], ch) || res;
            }
          } else {
            for (k in value) {
              if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
              res=search(value[k], ch) || res;
            }
          }
      }
      return res;
    }

    function report(ch) {
      var possibleErr=search(value, ch);
      if (possibleErr) {
        return "found '"+ch+"' in a string value, your mistake could be with:\n"+
          "  > "+possibleErr+"\n"+
          "  (unquoted strings contain everything up to the next line!)";
      } else return "";
    }

    return report('}') || report(']');
  }

  function array() {
    // Parse an array value.
    // assuming ch === '['

    var array = [];
    var comments, cAt, nextComment;
    try {
      if (keepComments) comments = common.createComment(array, { a: [] });

      next();
      cAt = at;
      white();
      if (comments) nextComment = getComment(cAt, true).join('\n');
      if (ch === ']') {
        next();
        if (comments) comments.e = [nextComment];
        return array;  // empty array
      }

      while (ch) {
        array.push(value());
        cAt = at;
        white();
        // in Hjson the comma is optional and trailing commas are allowed
        // note that we do not keep comments before the , if there are any
        if (ch === ',') { next(); cAt = at; white(); }
        if (comments) {
          var c = getComment(cAt);
          comments.a.push([nextComment||"", c[0]||""]);
          nextComment = c[1];
        }
        if (ch === ']') {
          next();
          if (comments) comments.a[comments.a.length-1][1] += nextComment||"";
          return array;
        }
        white();
      }

      error("End of input while parsing an array (missing ']')");
    } catch (e) {
      e.hint=e.hint||errorClosingHint(array);
      throw e;
    }
  }

  function object(withoutBraces) {
    // Parse an object value.

    var key = "", object = {};
    var comments, cAt, nextComment;

    try {
      if (keepComments) comments = common.createComment(object, { c: {}, o: []  });

      if (!withoutBraces) {
        // assuming ch === '{'
        next();
        cAt = at;
      } else cAt = 1;

      white();
      if (comments) nextComment = getComment(cAt, true).join('\n');
      if (ch === '}' && !withoutBraces) {
        if (comments) comments.e = [nextComment];
        next();
        return object;  // empty object
      }
      while (ch) {
        key = keyname();
        white();
        if (ch !== ':') error("Expected ':' instead of '" + ch + "'");
        next();
        // duplicate keys overwrite the previous value
        object[key] = value();
        cAt = at;
        white();
        // in Hjson the comma is optional and trailing commas are allowed
        // note that we do not keep comments before the , if there are any
        if (ch === ',') { next(); cAt = at; white(); }
        if (comments) {
          var c = getComment(cAt);
          comments.c[key] = [nextComment||"", c[0]||""];
          nextComment = c[1];
          comments.o.push(key);
        }
        if (ch === '}' && !withoutBraces) {
          next();
          if (comments) comments.c[key][1] += nextComment||"";
          return object;
        }
        white();
      }

      if (withoutBraces) return object;
      else error("End of input while parsing an object (missing '}')");
    } catch (e) {
      e.hint=e.hint||errorClosingHint(object);
      throw e;
    }
  }

  function value() {
    // Parse a Hjson value. It could be an object, an array, a string, a number or a word.

    white();
    switch (ch) {
      case '{': return object();
      case '[': return array();
      case "'":
      case '"': return string(true);
      default: return tfnns();
    }
  }

  function checkTrailing(v, c) {
    var cAt = at;
    white();
    if (ch) error("Syntax error, found trailing characters");
    if (keepComments) {
      var b = c.join('\n'), a = getComment(cAt).join('\n');
      if (a || b) {
        var comments = common.createComment(v, common.getComment(v));
        comments.r = [b, a];
      }
    }
    return v;
  }

  function rootValue() {
    white();
    var c = keepComments ? getComment(1) : null;
    switch (ch) {
      case '{': return checkTrailing(object(), c);
      case '[': return checkTrailing(array(), c);
      default: return checkTrailing(value(), c);
    }
  }

  function legacyRootValue() {
    // Braces for the root object are optional
    white();
    var c = keepComments ? getComment(1) : null;
    switch (ch) {
      case '{': return checkTrailing(object(), c);
      case '[': return checkTrailing(array(), c);
    }

    try {
      // assume we have a root object without braces
      return checkTrailing(object(true), c);
    } catch (e) {
      // test if we are dealing with a single JSON value instead (true/false/null/num/"")
      resetAt();
      try { return checkTrailing(value(), c); }
      catch (e2) { throw e; } // throw original error
    }
  }

  if (typeof source!=="string") throw new Error("source is not a string");
  var dsfDef = null;
  var legacyRoot = true;
  if (opt && typeof opt === 'object') {
    keepComments = opt.keepWsc;
    dsfDef = opt.dsf;
    legacyRoot = opt.legacyRoot !== false; // default true
  }
  runDsf = dsf.loadDsf(dsfDef, "parse");
  text = source;
  resetAt();
  return legacyRoot ? legacyRootValue() : rootValue();
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-stringify.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-stringify.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Hjson http://hjson.org */


module.exports = function(data, opt) {

  var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
  var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

  var plainToken = {
    obj:  [ '{', '}' ],
    arr:  [ '[', ']' ],
    key:  [ '',  '' ],
    qkey: [ '"', '"' ],
    col:  [ ':', '' ],
    com:  [ ',', '' ],
    str:  [ '', '' ],
    qstr: [ '"', '"' ],
    mstr: [ "'''", "'''" ],
    num:  [ '', '' ],
    lit:  [ '', '' ],
    dsf:  [ '', '' ],
    esc:  [ '\\', '' ],
    uni:  [ '\\u', '' ],
    rem:  [ '', '' ],
  };

  // options
  var eol = common.EOL;
  var indent = '  ';
  var keepComments = false;
  var bracesSameLine = false;
  var quoteKeys = false;
  var quoteStrings = false;
  var condense = 0;
  var multiline = 1; // std=1, no-tabs=2, off=0
  var separator = ''; // comma separator
  var dsfDef = null;
  var sortProps = false;
  var token = plainToken;

  if (opt && typeof opt === 'object') {
    opt.quotes = opt.quotes === 'always' ? 'strings' : opt.quotes; // legacy

    if (opt.eol === '\n' || opt.eol === '\r\n') eol = opt.eol;
    keepComments = opt.keepWsc;
    condense = opt.condense || 0;
    bracesSameLine = opt.bracesSameLine;
    quoteKeys = opt.quotes === 'all' || opt.quotes === 'keys';
    quoteStrings = opt.quotes === 'all' || opt.quotes === 'strings' || opt.separator === true;
    if (quoteStrings || opt.multiline == 'off') multiline = 0;
    else multiline = opt.multiline == 'no-tabs' ? 2 : 1;
    separator = opt.separator === true ? token.com[0] : '';
    dsfDef = opt.dsf;
    sortProps = opt.sortProps;

    // If the space parameter is a number, make an indent string containing that
    // many spaces. If it is a string, it will be used as the indent string.

    if (typeof opt.space === 'number') {
      indent = new Array(opt.space + 1).join(' ');
    } else if (typeof opt.space === 'string') {
      indent = opt.space;
    }

    if (opt.colors === true) {
      token = {
        obj:  [ '\x1b[37m{\x1b[0m', '\x1b[37m}\x1b[0m' ],
        arr:  [ '\x1b[37m[\x1b[0m', '\x1b[37m]\x1b[0m' ],
        key:  [ '\x1b[33m',  '\x1b[0m' ],
        qkey: [ '\x1b[33m"', '"\x1b[0m' ],
        col:  [ '\x1b[37m:\x1b[0m', '' ],
        com:  [ '\x1b[37m,\x1b[0m', '' ],
        str:  [ '\x1b[37;1m', '\x1b[0m' ],
        qstr: [ '\x1b[37;1m"', '"\x1b[0m' ],
        mstr: [ "\x1b[37;1m'''", "'''\x1b[0m" ],
        num:  [ '\x1b[36;1m', '\x1b[0m' ],
        lit:  [ '\x1b[36m', '\x1b[0m' ],
        dsf:  [ '\x1b[37m', '\x1b[0m' ],
        esc:  [ '\x1b[31m\\', '\x1b[0m' ],
        uni:  [ '\x1b[31m\\u', '\x1b[0m' ],
        rem:  [ '\x1b[35m', '\x1b[0m' ],
      };
    }

    var i, ckeys=Object.keys(plainToken);
    for (i = ckeys.length - 1; i >= 0; i--) {
      var k = ckeys[i];
      token[k].push(plainToken[k][0].length, plainToken[k][1].length);
    }
  }

  //
  var runDsf; // domain specific formats

  var commonRange='\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff';
  // needsEscape tests if the string can be written without escapes
  var needsEscape = new RegExp('[\\\\\\"\x00-\x1f'+commonRange+']', 'g');
  // needsQuotes tests if the string can be written as a quoteless string (like needsEscape but without \\ and \")
  var needsQuotes = new RegExp('^\\s|^"|^\'|^#|^\\/\\*|^\\/\\/|^\\{|^\\}|^\\[|^\\]|^:|^,|\\s$|[\x00-\x1f'+commonRange+']', 'g');
  // needsEscapeML tests if the string can be written as a multiline string (like needsEscape but without \n, \r, \\, \", \t unless multines is 'std')
  var needsEscapeML = new RegExp('\'\'\'|^[\\s]+$|[\x00-'+(multiline === 2 ? '\x09' : '\x08')+'\x0b\x0c\x0e-\x1f'+commonRange+']', 'g');
  // starts with a keyword and optionally is followed by a comment
  var startsWithKeyword = new RegExp('^(true|false|null)\\s*((,|\\]|\\}|#|//|/\\*).*)?$');
  var meta = {
    // table of character substitutions
    '\b': 'b',
    '\t': 't',
    '\n': 'n',
    '\f': 'f',
    '\r': 'r',
    '"' : '"',
    '\\': '\\'
  };
  var needsEscapeName = /[,\{\[\}\]\s:#"']|\/\/|\/\*/;
  var gap = '';
  //
  var wrapLen = 0;

  function wrap(tk, v) {
    wrapLen += tk[0].length + tk[1].length - tk[2] - tk[3];
    return tk[0] + v + tk[1];
  }

  function quoteReplace(string) {
    return string.replace(needsEscape, function (a) {
      var c = meta[a];
      if (typeof c === 'string') return wrap(token.esc, c);
      else return wrap(token.uni, ('0000' + a.charCodeAt(0).toString(16)).slice(-4));
    });
  }

  function quote(string, gap, hasComment, isRootObject) {
    if (!string) return wrap(token.qstr, '');

    needsQuotes.lastIndex = 0;
    startsWithKeyword.lastIndex = 0;

    // Check if we can insert this string without quotes
    // see hjson syntax (must not parse as true, false, null or number)

    if (quoteStrings || hasComment ||
      needsQuotes.test(string) ||
      common.tryParseNumber(string, true) !== undefined ||
      startsWithKeyword.test(string)) {

      // If the string contains no control characters, no quote characters, and no
      // backslash characters, then we can safely slap some quotes around it.
      // Otherwise we first check if the string can be expressed in multiline
      // format or we must replace the offending characters with safe escape
      // sequences.

      needsEscape.lastIndex = 0;
      needsEscapeML.lastIndex = 0;
      if (!needsEscape.test(string)) return wrap(token.qstr, string);
      else if (!needsEscapeML.test(string) && !isRootObject && multiline) return mlString(string, gap);
      else return wrap(token.qstr, quoteReplace(string));
    } else {
      // return without quotes
      return wrap(token.str, string);
    }
  }

  function mlString(string, gap) {
    // wrap the string into the ''' (multiline) format

    var i, a = string.replace(/\r/g, "").split('\n');
    gap += indent;

    if (a.length === 1) {
      // The string contains only a single line. We still use the multiline
      // format as it avoids escaping the \ character (e.g. when used in a
      // regex).
      return wrap(token.mstr, a[0]);
    } else {
      var res = eol + gap + token.mstr[0];
      for (i = 0; i < a.length; i++) {
        res += eol;
        if (a[i]) res += gap + a[i];
      }
      return res + eol + gap + token.mstr[1];
    }
  }

  function quoteKey(name) {
    if (!name) return '""';

    // Check if we can insert this key without quotes

    if (quoteKeys || needsEscapeName.test(name)) {
      needsEscape.lastIndex = 0;
      return wrap(token.qkey, needsEscape.test(name) ? quoteReplace(name) : name);
    } else {
      // return without quotes
      return wrap(token.key, name);
    }
  }

  function str(value, hasComment, noIndent, isRootObject) {
    // Produce a string from value.

    function startsWithNL(str) { return str && str[str[0] === '\r' ? 1 : 0] === '\n'; }
    function commentOnThisLine(str) { return str && !startsWithNL(str); }
    function makeComment(str, prefix, trim) {
      if (!str) return "";
      str = common.forceComment(str);
      var i, len = str.length;
      for (i = 0; i < len && str[i] <= ' '; i++) {}
      if (trim && i > 0) str = str.substr(i);
      if (i < len) return prefix + wrap(token.rem, str);
      else return str;
    }

    // What happens next depends on the value's type.

    // check for DSF
    var dsfValue = runDsf(value);
    if (dsfValue !== undefined) return wrap(token.dsf, dsfValue);

    switch (typeof value) {
      case 'string':
        return quote(value, gap, hasComment, isRootObject);

      case 'number':
        // JSON numbers must be finite. Encode non-finite numbers as null.
        return isFinite(value) ? wrap(token.num, String(value)) : wrap(token.lit, 'null');

      case 'boolean':
        return wrap(token.lit, String(value));

      case 'object':
        // If the type is 'object', we might be dealing with an object or an array or
        // null.

        // Due to a specification blunder in ECMAScript, typeof null is 'object',
        // so watch out for that case.

        if (!value) return wrap(token.lit, 'null');

        var comments; // whitespace & comments
        if (keepComments) comments = common.getComment(value);

        var isArray = Object.prototype.toString.apply(value) === '[object Array]';

        // Make an array to hold the partial results of stringifying this object value.
        var mind = gap;
        gap += indent;
        var eolMind = eol + mind;
        var eolGap = eol + gap;
        var prefix = noIndent || bracesSameLine ? '' : eolMind;
        var partial = [];
        var setsep;
        // condense helpers:
        var cpartial = condense ? [] : null;
        var saveQuoteStrings = quoteStrings, saveMultiline = multiline;
        var iseparator = separator ? '' : token.com[0];
        var cwrapLen = 0;

        var i, length; // loop
        var k, v, vs; // key, value
        var c, ca;
        var res, cres;

        if (isArray) {
          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.

          for (i = 0, length = value.length; i < length; i++) {
            setsep = i < length -1;
            if (comments) {
              c = comments.a[i]||[];
              ca = commentOnThisLine(c[1]);
              partial.push(makeComment(c[0], "\n") + eolGap);
              if (cpartial && (c[0] || c[1] || ca)) cpartial = null;
            }
            else partial.push(eolGap);
            wrapLen = 0;
            v = value[i];
            partial.push(str(v, comments ? ca : false, true) + (setsep ? separator : ''));
            if (cpartial) {
              // prepare the condensed version
              switch (typeof v) {
                case 'string':
                  wrapLen = 0;
                  quoteStrings = true; multiline = 0;
                  cpartial.push(str(v, false, true) + (setsep ? token.com[0] : ''));
                  quoteStrings = saveQuoteStrings; multiline = saveMultiline;
                  break;
                case 'object': if (v) { cpartial = null; break; } // falls through
                default: cpartial.push(partial[partial.length - 1] + (setsep ? iseparator : '')); break;
              }
              if (setsep) wrapLen += token.com[0].length - token.com[2];
              cwrapLen += wrapLen;
            }
            if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
          }

          if (length === 0) {
            // when empty
            if (comments && comments.e) partial.push(makeComment(comments.e[0], "\n") + eolMind);
          }
          else partial.push(eolMind);

          // Join all of the elements together, separated with newline, and wrap them in
          // brackets.

          if (partial.length === 0) res = wrap(token.arr, '');
          else {
            res = prefix + wrap(token.arr, partial.join(''));
            // try if the condensed version can fit (parent key name is not included)
            if (cpartial) {
              cres = cpartial.join(' ');
              if (cres.length - cwrapLen <= condense) res = wrap(token.arr, cres);
            }
          }
        } else {
          // Otherwise, iterate through all of the keys in the object.
          var commentKeys = comments ? comments.o.slice() : [];
          var objectKeys = [];
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k) && commentKeys.indexOf(k) < 0)
              objectKeys.push(k);
          }
          if(sortProps) {
            objectKeys.sort();
          }
          var keys = commentKeys.concat(objectKeys);

          for (i = 0, length = keys.length; i < length; i++) {
            setsep = i < length - 1;
            k = keys[i];
            if (comments) {
              c = comments.c[k]||[];
              ca = commentOnThisLine(c[1]);
              partial.push(makeComment(c[0], "\n") + eolGap);
              if (cpartial && (c[0] || c[1] || ca)) cpartial = null;
            }
            else partial.push(eolGap);

            wrapLen = 0;
            v = value[k];
            vs = str(v, comments && ca);
            partial.push(quoteKey(k) + token.col[0] + (startsWithNL(vs) ? '' : ' ') + vs + (setsep ? separator : ''));
            if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
            if (cpartial) {
              // prepare the condensed version
              switch (typeof v) {
                case 'string':
                  wrapLen = 0;
                  quoteStrings = true; multiline = 0;
                  vs = str(v, false);
                  quoteStrings = saveQuoteStrings; multiline = saveMultiline;
                  cpartial.push(quoteKey(k) + token.col[0] + ' ' + vs + (setsep ? token.com[0] : ''));
                  break;
                case 'object': if (v) { cpartial = null; break; } // falls through
                default: cpartial.push(partial[partial.length - 1] + (setsep ? iseparator : '')); break;
              }
              wrapLen += token.col[0].length - token.col[2];
              if (setsep) wrapLen += token.com[0].length - token.com[2];
              cwrapLen += wrapLen;
            }
          }
          if (length === 0) {
            // when empty
            if (comments && comments.e) partial.push(makeComment(comments.e[0], "\n") + eolMind);
          }
          else partial.push(eolMind);

          // Join all of the member texts together, separated with newlines
          if (partial.length === 0) {
            res = wrap(token.obj, '');
          } else {
            // and wrap them in braces
            res = prefix + wrap(token.obj, partial.join(''));
            // try if the condensed version can fit
            if (cpartial) {
              cres = cpartial.join(' ');
              if (cres.length - cwrapLen <= condense) res = wrap(token.obj, cres);
            }
          }
        }

        gap = mind;
        return res;
    }
  }


  runDsf = dsf.loadDsf(dsfDef, 'stringify');

  var res = "";
  var comments = keepComments ? comments = (common.getComment(data) || {}).r : null;
  if (comments && comments[0]) res = comments[0] + '\n';

  // get the result of stringifying the data.
  res += str(data, null, true, true);

  if (comments) res += comments[1]||"";

  return res;
};


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson-version.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson-version.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="3.2.1";


/***/ }),

/***/ "../../../node_modules/hjson/lib/hjson.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hjson/lib/hjson.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Hjson v3.2.1
 * http://hjson.org
 *
 * Copyright 2014-2017 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/hjson/hjson-js
 *
 * This code is based on the the JSON version by Douglas Crockford:
 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
 */

/*

  This file creates a Hjson object:


    Hjson.parse(text, options)

      options {
        keepWsc     boolean, keep white space and comments. This is useful
                    if you want to edit an hjson file and save it while
                    preserving comments (default false)

        dsf         array of DSF (see Hjson.dsf)

        legacyRoot  boolean, support omitting root braces (default true)
      }

      This method parses Hjson text to produce an object or array.
      It can throw a SyntaxError exception.


    Hjson.stringify(value, options)

      value         any JavaScript value, usually an object or array.

      options {     all options are

        keepWsc     boolean, keep white space. See parse.

        condense    integer, will try to fit objects/arrays onto one line
                    when the output is shorter than condense characters
                    and the fragment contains no comments. Default 0 (off).

        bracesSameLine
                    boolean, makes braces appear on the same line as the key
                    name. Default false.

        quotes      string, controls how strings are displayed.
                    setting separator implies "strings"
                    "min"     - no quotes whenever possible (default)
                    "keys"    - use quotes around keys
                    "strings" - use quotes around string values
                    "all"     - use quotes around keys and string values

        multiline   string, controls how multiline strings are displayed.
                    setting quotes implies "off"
                    "std"     - strings containing \n are shown in
                                multiline format (default)
                    "no-tabs" - like std but disallow tabs
                    "off"     - show in JSON format

        separator   boolean, output a comma separator between elements. Default false.

        space       specifies the indentation of nested structures. If it is
                    a number, it will specify the number of spaces to indent
                    at each level. If it is a string (such as '\t' or '  '),
                    it contains the characters used to indent at each level.

        eol         specifies the EOL sequence (default is set by
                    Hjson.setEndOfLine())

        colors      boolean, output ascii color codes

        dsf         array of DSF (see Hjson.dsf)

        emitRootBraces
                    obsolete: will always emit braces

        sortProps
                    When serializing objects into hjson, order the keys based on
                    their UTF-16 code units order
      }

      This method produces Hjson text from a JavaScript value.

      Values that do not have JSON representations, such as undefined or
      functions, will not be serialized. Such values in objects will be
      dropped; in arrays they will be replaced with null.
      stringify(undefined) returns undefined.


    Hjson.endOfLine()
    Hjson.setEndOfLine(eol)

      Gets or sets the stringify EOL sequence ('\n' or '\r\n').
      When running with node.js this defaults to os.EOL.


    Hjson.rt { parse, stringify }

      This is a shortcut to roundtrip your comments when reading and updating
      a config file. It is the same as specifying the keepWsc option for the
      parse and stringify functions.


    Hjson.version

      The version of this library.


    Hjson.dsf

      Domain specific formats are extensions to the Hjson syntax (see
      hjson.org). These formats will be parsed and made available to
      the application in place of strings (e.g. enable math to allow
      NaN values).

      Hjson.dsf ontains standard DSFs that can be passed to parse
      and stringify.


    Hjson.dsf.math()

      Enables support for Inf/inf, -Inf/-inf, Nan/naN and -0.
      Will output as Inf, -Inf, NaN and -0.


    Hjson.dsf.hex(options)

      Parse hexadecimal numbers prefixed with 0x.
      set options.out = true to stringify _all_ integers as hex.


    Hjson.dsf.date(options)

      support ISO dates


  This is a reference implementation. You are free to copy, modify, or
  redistribute.

*/



var common = __webpack_require__(/*! ./hjson-common */ "../../../node_modules/hjson/lib/hjson-common.js");
var version = __webpack_require__(/*! ./hjson-version */ "../../../node_modules/hjson/lib/hjson-version.js");
var parse = __webpack_require__(/*! ./hjson-parse */ "../../../node_modules/hjson/lib/hjson-parse.js");
var stringify = __webpack_require__(/*! ./hjson-stringify */ "../../../node_modules/hjson/lib/hjson-stringify.js");
var comments = __webpack_require__(/*! ./hjson-comments */ "../../../node_modules/hjson/lib/hjson-comments.js");
var dsf = __webpack_require__(/*! ./hjson-dsf */ "../../../node_modules/hjson/lib/hjson-dsf.js");

module.exports={

  parse: parse,
  stringify: stringify,

  endOfLine: function() { return common.EOL; },
  setEndOfLine: function(eol) {
    if (eol === '\n' || eol === '\r\n') common.EOL = eol;
  },

  version: version,

  // round trip shortcut
  rt: {
    parse: function(text, options) {
      (options=options||{}).keepWsc=true;
      return parse(text, options);
    },
    stringify: function(value, options) {
      (options=options||{}).keepWsc=true;
      return stringify(value, options);
    },
  },

  comments: comments,

  dsf: dsf.std,

};


/***/ }),

/***/ "../../../node_modules/json-stringify-pretty-compact/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/json-stringify-pretty-compact/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function stringify (obj, options) {
  options = options || {}
  var indent = JSON.stringify([1], null, get(options, 'indent', 2)).slice(2, -3)
  var addMargin = get(options, 'margins', false)
  var maxLength = (indent === '' ? Infinity : get(options, 'maxLength', 80))

  return (function _stringify (obj, currentIndent, reserved) {
    if (obj && typeof obj.toJSON === 'function') {
      obj = obj.toJSON()
    }

    var string = JSON.stringify(obj)

    if (string === undefined) {
      return string
    }

    var length = maxLength - currentIndent.length - reserved

    if (string.length <= length) {
      var prettified = prettify(string, addMargin)
      if (prettified.length <= length) {
        return prettified
      }
    }

    if (typeof obj === 'object' && obj !== null) {
      var nextIndent = currentIndent + indent
      var items = []
      var delimiters
      var comma = function (array, index) {
        return (index === array.length - 1 ? 0 : 1)
      }

      if (Array.isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, comma(obj, index)) || 'null'
          )
        }
        delimiters = '[]'
      } else {
        Object.keys(obj).forEach(function (key, index, array) {
          var keyPart = JSON.stringify(key) + ': '
          var value = _stringify(obj[key], nextIndent,
                                 keyPart.length + comma(array, index))
          if (value !== undefined) {
            items.push(keyPart + value)
          }
        })
        delimiters = '{}'
      }

      if (items.length > 0) {
        return [
          delimiters[0],
          indent + items.join(',\n' + nextIndent),
          delimiters[1]
        ].join('\n' + currentIndent)
      }
    }

    return string
  }(obj, '', 0))
}

// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,\][}{]/g

function prettify (string, addMargin) {
  var m = addMargin ? ' ' : ''
  var tokens = {
    '{': '{' + m,
    '[': '[' + m,
    '}': m + '}',
    ']': m + ']',
    ',': ', ',
    ':': ': '
  }
  return string.replace(stringOrChar, function (match, string) {
    return string ? match : tokens[match]
  })
}

function get (options, name, defaultValue) {
  return (name in options ? options[name] : defaultValue)
}

module.exports = stringify


/***/ }),

/***/ "../../../node_modules/os-browserify/browser.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/os-browserify/browser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "../../../node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson":
/*!*********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{\n  /*\n\n  Welcome to Vega visualizations.  Here you can design your own dataviz from scratch using a declarative language called Vega, or its simpler form Vega-Lite.  In Vega, you have the full control of what data is loaded, even from multiple sources, how that data is transformed, and what visual elements are used to show it.  Use help icon to view Vega examples, tutorials, and other docs.  Use the wrench icon to reformat this text, or to remove comments.\n\n  This example graph shows the document count in all indexes in the current time range.  You might need to adjust the time filter in the upper right corner.\n  */\n\n  $schema: https://vega.github.io/schema/vega-lite/v5.json\n  title: Event counts from all indexes\n\n  // Define the data source\n  data: {\n    url: {\n      /*\n      An object instead of a string for the \"url\" param is treated as an OpenSearch query. Anything inside this object is not part of the Vega language, but only understood by OpenSearch Dashboards and OpenSearch server. This query counts the number of documents per time interval, assuming you have a @timestamp field in your data.\n\n      OpenSearch Dashboards has a special handling for the fields surrounded by \"%\".  They are processed before the query is sent to OpenSearch. This way the query becomes context aware, and can use the time range and the dashboard filters.\n      */\n\n      // Apply dashboard context filters when set\n      %context%: true\n      // Filter the time picker (upper right corner) with this field\n      %timefield%: @timestamp\n\n      /*\n      See .search() documentation for :  https://opensearch.org/docs/latest/clients/javascript/\n      */\n\n      // Which index to search\n      index: _all\n\n      // If \"data_source.enabled: true\", optionally set the data source name to query from (omit field if querying from local cluster)\n      // data_source_name: Example US Cluster\n\n      // Aggregate data by the time field into time buckets, counting the number of documents in each bucket.\n      body: {\n        aggs: {\n          time_buckets: {\n            date_histogram: {\n              // Use date histogram aggregation on @timestamp field\n              field: @timestamp\n              // The interval value will depend on the daterange picker (true), or use an integer to set an approximate bucket count\n              interval: {%autointerval%: true}\n              // Make sure we get an entire range, even if it has no data\n              extended_bounds: {\n                // Use the current time range's start and end\n                min: {%timefilter%: \"min\"}\n                max: {%timefilter%: \"max\"}\n              }\n              // Use this for linear (e.g. line, area) graphs.  Without it, empty buckets will not show up\n              min_doc_count: 0\n            }\n          }\n        }\n        // Speed up the response by only including aggregation results\n        size: 0\n      }\n    }\n    /*\n    OpenSearch will return results in this format:\n\n    aggregations: {\n      time_buckets: {\n        buckets: [\n          {\n            key_as_string: 2015-11-30T22:00:00.000Z\n            key: 1448920800000\n            doc_count: 0\n          },\n          {\n            key_as_string: 2015-11-30T23:00:00.000Z\n            key: 1448924400000\n            doc_count: 0\n          }\n          ...\n        ]\n      }\n    }\n\n    For our graph, we only need the list of bucket values.  Use the format.property to discard everything else.\n    */\n    format: {property: \"aggregations.time_buckets.buckets\"}\n  }\n\n  // \"mark\" is the graphics element used to show our data.  Other mark values are: area, bar, circle, line, point, rect, rule, square, text, and tick.  See https://vega.github.io/vega-lite/docs/mark.html\n  mark: line\n\n  // \"encoding\" tells the \"mark\" what data to use and in what way.  See https://vega.github.io/vega-lite/docs/encoding.html\n  encoding: {\n    x: {\n      // The \"key\" value is the timestamp in milliseconds.  Use it for X axis.\n      field: key\n      type: temporal\n      axis: {title: false} // Customize X axis format\n    }\n    y: {\n      // The \"doc_count\" is the count per bucket.  Use it for Y axis.\n      field: doc_count\n      type: quantitative\n      axis: {title: \"Document count\"}\n    }\n  }\n}\n");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeVega!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeVega!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeVega']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeVega_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeVega!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeVega!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeVega_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeVega_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeVega/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_vega/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/index.ts":
/*!************************************!*\
  !*** ./public/components/index.ts ***!
  \************************************/
/*! exports provided: VegaVisEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vega_vis_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vega_vis_editor */ "./public/components/vega_vis_editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VegaVisEditor", function() { return _vega_vis_editor__WEBPACK_IMPORTED_MODULE_0__["VegaVisEditor"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/***/ }),

/***/ "./public/components/vega_actions_menu.tsx":
/*!*************************************************!*\
  !*** ./public/components/vega_actions_menu.tsx ***!
  \*************************************************/
/*! exports provided: VegaActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaActionsMenu", function() { return VegaActionsMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function VegaActionsMenu({
  formatHJson,
  formatJson
}) {
  const [isPopoverOpen, setIsPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsPopoverOpen(isOpen => !isOpen), []);
  const onHJsonCLick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    formatHJson();
    setIsPopoverOpen(false);
  }, [formatHJson]);
  const onJsonCLick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    formatJson();
    setIsPopoverOpen(false);
  }, [formatJson]);
  const closePopover = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsPopoverOpen(false), []);
  const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    iconType: "wrench",
    onClick: onButtonClick,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeVega.editor.vegaEditorOptionsButtonAriaLabel', {
      defaultMessage: 'Vega editor options'
    })
  });
  const items = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "hjson",
    onClick: onHJsonCLick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeVega.editor.reformatAsHJSONButtonLabel",
    defaultMessage: "Reformat as HJSON"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "json",
    onClick: onJsonCLick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeVega.editor.reformatAsJSONButtonLabel",
    defaultMessage: "Reformat as JSON, delete comments"
  }))];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    id: "actionsMenu",
    button: button,
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    panelPaddingSize: "none",
    anchorPosition: "downLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
    items: items,
    size: "s"
  }));
}


/***/ }),

/***/ "./public/components/vega_help_menu.tsx":
/*!**********************************************!*\
  !*** ./public/components/vega_help_menu.tsx ***!
  \**********************************************/
/*! exports provided: VegaHelpMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaHelpMenu", function() { return VegaHelpMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






function VegaHelpMenu() {
  var _useOpenSearchDashboa;
  const [isPopoverOpen, setIsPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsPopoverOpen(!isPopoverOpen), [isPopoverOpen]);
  const closePopover = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsPopoverOpen(false), []);
  const vegaHelpDoc = (_useOpenSearchDashboa = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])().services.docLinks) === null || _useOpenSearchDashboa === void 0 ? void 0 : _useOpenSearchDashboa.links.noDocumentation.vega;
  const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    iconType: "questionInCircle",
    onClick: onButtonClick,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeVega.editor.vegaHelpButtonAriaLabel', {
      defaultMessage: 'Vega help'
    })
  });
  const items = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "vegaHelp",
    href: vegaHelpDoc,
    target: "_blank",
    onClick: closePopover
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeVega.editor.vegaHelpLinkText",
    defaultMessage: "OpenSearch Dashboards Vega help"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "vegaLiteDocs",
    href: "https://vega.github.io/vega-lite/docs/",
    target: "_blank",
    onClick: closePopover
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeVega.editor.vegaLiteDocumentationLinkText",
    defaultMessage: "Vega-Lite documentation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "vegaDoc",
    href: "https://vega.github.io/vega/docs/",
    target: "_blank",
    onClick: closePopover
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visTypeVega.editor.vegaDocumentationLinkText",
    defaultMessage: "Vega documentation"
  }))];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    id: "helpMenu",
    button: button,
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    panelPaddingSize: "none",
    anchorPosition: "downLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
    items: items,
    size: "s"
  }));
}


/***/ }),

/***/ "./public/components/vega_vis_editor.tsx":
/*!***********************************************!*\
  !*** ./public/components/vega_vis_editor.tsx ***!
  \***********************************************/
/*! exports provided: VegaVisEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaVisEditor", function() { return VegaVisEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-stringify-pretty-compact */ "../../../node_modules/json-stringify-pretty-compact/index.js");
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_mode_hjson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/mode/hjson */ "../../../node_modules/brace/mode/hjson.js");
/* harmony import */ var brace_mode_hjson__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_mode_hjson__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _vega_help_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vega_help_menu */ "./public/components/vega_help_menu.tsx");
/* harmony import */ var _vega_actions_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vega_actions_menu */ "./public/components/vega_actions_menu.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */










const aceOptions = {
  maxLines: Infinity,
  highlightActiveLine: false,
  showPrintMargin: false,
  tabSize: 2,
  useSoftTabs: true,
  wrap: true
};
const hjsonStringifyOptions = {
  bracesSameLine: true,
  keepWsc: true
};
function format(value, stringify, options) {
  try {
    const spec = hjson__WEBPACK_IMPORTED_MODULE_3___default.a.parse(value, {
      legacyRoot: false,
      keepWsc: true
    });
    return stringify(spec, options);
  } catch (err) {
    // This is a common case - user tries to format an invalid HJSON text
    Object(_services__WEBPACK_IMPORTED_MODULE_6__["getNotifications"])().toasts.addError(err, {
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('visTypeVega.editor.formatError', {
        defaultMessage: 'Error formatting spec'
      })
    });
    return value;
  }
}
function VegaVisEditor({
  stateParams,
  setValue
}) {
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setValue('spec', value);
  }, [setValue]);
  const formatJson = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue('spec', format(stateParams.spec, json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_2___default.a)), [setValue, stateParams.spec]);
  const formatHJson = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue('spec', format(stateParams.spec, hjson__WEBPACK_IMPORTED_MODULE_3___default.a.stringify, hjsonStringifyOptions)), [setValue, stateParams.spec]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vgaEditor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCodeEditor"], {
    "data-test-subj": "vega-editor",
    mode: "hjson",
    theme: "textmate",
    width: "100%",
    height: "auto",
    onChange: onChange,
    value: stateParams.spec,
    setOptions: aceOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "vgaEditor__aceEditorActions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vega_help_menu__WEBPACK_IMPORTED_MODULE_7__["VegaHelpMenu"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vega_actions_menu__WEBPACK_IMPORTED_MODULE_8__["VegaActionsMenu"], {
    formatHJson: formatHJson,
    formatJson: formatJson
  })));
}


/***/ }),

/***/ "./public/data_model/search_api.ts":
/*!*****************************************!*\
  !*** ./public/data_model/search_api.ts ***!
  \*****************************************/
/*! exports provided: SearchAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAPI", function() { return SearchAPI; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






class SearchAPI {
  constructor(dependencies, abortSignal, inspectorAdapters) {
    this.dependencies = dependencies;
    this.abortSignal = abortSignal;
    this.inspectorAdapters = inspectorAdapters;
  }
  async search(searchRequests, options) {
    const {
      search
    } = this.dependencies.search;
    const requestResponders = {};
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(await Promise.all(searchRequests.map(async request => {
      const requestId = request.name;
      const dataSourceId = !!request.data_source_name ? await this.findDataSourceIdbyName(request.data_source_name) : undefined;
      const params = Object(_data_public__WEBPACK_IMPORTED_MODULE_3__["getSearchParamsFromRequest"])(request, {
        getConfig: this.dependencies.uiSettings.get.bind(this.dependencies.uiSettings)
      });
      if (this.inspectorAdapters) {
        requestResponders[requestId] = this.inspectorAdapters.requests.start(requestId, request);
        requestResponders[requestId].json(params.body);
      }
      const searchApiParams = dataSourceId && this.dependencies.dataSourceEnabled ? {
        params,
        dataSourceId
      } : {
        params
      };
      return search(searchApiParams, {
        abortSignal: this.abortSignal,
        strategy: options === null || options === void 0 ? void 0 : options.strategy
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => this.inspectSearchResult(data, requestResponders[requestId])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => ({
        name: requestId,
        rawResponse: data.rawResponse
      })));
    })));
  }
  async findDataSourceIdbyName(dataSourceName) {
    var _possibleDataSourceId;
    if (!this.dependencies.dataSourceEnabled) {
      throw new Error('data_source_name cannot be used because data_source.enabled is false');
    }
    const dataSources = await this.dataSourceFindQuery(dataSourceName);

    // In the case that data_source_name is a prefix of another name, match exact data_source_name
    const possibleDataSourceIds = dataSources.savedObjects.filter(obj => obj.attributes.title === dataSourceName);
    if (possibleDataSourceIds.length !== 1) {
      throw new Error(`Expected exactly 1 result for data_source_name "${dataSourceName}" but got ${possibleDataSourceIds.length} results`);
    }
    return (_possibleDataSourceId = possibleDataSourceIds.pop()) === null || _possibleDataSourceId === void 0 ? void 0 : _possibleDataSourceId.id;
  }
  async dataSourceFindQuery(dataSourceName) {
    return await this.dependencies.savedObjectsClient.find({
      type: 'data-source',
      perPage: 10,
      search: `"${dataSourceName}"`,
      searchFields: ['title'],
      fields: ['id', 'title']
    });
  }
  resetSearchStats() {
    if (this.inspectorAdapters) {
      this.inspectorAdapters.requests.reset();
    }
  }
  getPPLRawResponseInspectorStats(response) {
    const stats = {};
    stats.hitsTotal = {
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.search.searchSource.hitsTotalLabel', {
        defaultMessage: 'Hits (total)'
      }),
      value: `${response.total}`,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.search.searchSource.hitsTotalDescription', {
        defaultMessage: 'The number of documents that match the query.'
      })
    };
    stats.hits = {
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.search.searchSource.hitsLabel', {
        defaultMessage: 'Hits'
      }),
      value: `${response.size}`,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.search.searchSource.hitsDescription', {
        defaultMessage: 'The number of documents returned by the query.'
      })
    };
    return stats;
  }
  inspectSearchResult(response, requestResponder) {
    if (requestResponder) {
      // inspect ppl response
      if ('jsonData' in response.rawResponse) {
        requestResponder.stats(this.getPPLRawResponseInspectorStats(response.rawResponse)).ok({
          json: response.rawResponse
        });
      } else {
        requestResponder.stats(_data_public__WEBPACK_IMPORTED_MODULE_3__["search"].getResponseInspectorStats(response.rawResponse)).ok({
          json: response.rawResponse
        });
      }
    }
  }
}

/***/ }),

/***/ "./public/data_model/time_cache.ts":
/*!*****************************************!*\
  !*** ./public/data_model/time_cache.ts ***!
  \*****************************************/
/*! exports provided: TimeCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCache", function() { return TimeCache; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Optimization caching - always return the same value if queried within this time
 * @type {number}
 */

const AlwaysCacheMaxAge = 40;

/**
 * This class caches timefilter's bounds to minimize number of server requests
 */
class TimeCache {
  constructor(timefilter, maxAge) {
    _defineProperty(this, "_timefilter", void 0);
    _defineProperty(this, "_maxAge", void 0);
    _defineProperty(this, "_cachedBounds", void 0);
    _defineProperty(this, "_cacheTS", void 0);
    _defineProperty(this, "_timeRange", void 0);
    this._timefilter = timefilter;
    this._maxAge = maxAge;
    this._cacheTS = 0;
  }

  // Simplifies unit testing
  // noinspection JSMethodCanBeStatic
  _now() {
    return Date.now();
  }

  /**
   * Get cached time range values
   * @returns {{min: number, max: number}}
   */
  getTimeBounds() {
    const ts = this._now();
    let bounds = null;
    if (this._cachedBounds) {
      const diff = ts - this._cacheTS;

      // For very rapid usage (multiple calls within a few milliseconds)
      // Avoids expensive time parsing
      if (diff < AlwaysCacheMaxAge) {
        return this._cachedBounds;
      }

      // If the time is relative, mode hasn't changed, and time hasn't changed more than maxAge,
      // return old time to avoid multiple near-identical server calls
      if (diff < this._maxAge) {
        bounds = this._getBounds();
        if (Math.abs(bounds.min - this._cachedBounds.min) < this._maxAge && Math.abs(bounds.max - this._cachedBounds.max) < this._maxAge) {
          return this._cachedBounds;
        }
      }
    }
    this._cacheTS = ts;
    this._cachedBounds = bounds || this._getBounds();
    return this._cachedBounds;
  }
  setTimeRange(timeRange) {
    this._timeRange = timeRange;
  }

  /**
   * Get parsed min/max values
   * @returns {{min: number, max: number}}
   * @private
   */
  _getBounds() {
    const bounds = this._timefilter.calculateBounds(this._timeRange);
    return {
      min: bounds.min.valueOf(),
      max: bounds.max.valueOf()
    };
  }
}

/***/ }),

/***/ "./public/default_spec.ts":
/*!********************************!*\
  !*** ./public/default_spec.ts ***!
  \********************************/
/*! exports provided: getDefaultSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSpec", function() { return getDefaultSpec; });
/* harmony import */ var _raw_loader_default_spec_hjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./default.spec.hjson */ "../../../node_modules/raw-loader/dist/cjs.js!./public/default.spec.hjson");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// @ts-ignore

const getDefaultSpec = () => _raw_loader_default_spec_hjson__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./public/expressions/helpers.ts":
/*!***************************************!*\
  !*** ./public/expressions/helpers.ts ***!
  \***************************************/
/*! exports provided: cleanString, calculateLegendOffset, formatDatatable, setupConfig, buildLayerMark, buildXAxis, buildYAxis, createSpecFromXYChartDatatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanString", function() { return cleanString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLegendOffset", function() { return calculateLegendOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDatatable", function() { return formatDatatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupConfig", function() { return setupConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayerMark", function() { return buildLayerMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildXAxis", function() { return buildXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildYAxis", function() { return buildYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpecFromXYChartDatatable", function() { return createSpecFromXYChartDatatable; });
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



// TODO: move this to the visualization plugin that has VisParams once all of these parameters have been better defined

// Get the first xaxis field as only 1 setup of X Axis will be supported and
// there won't be support for split series and split chart
const getXAxisId = (dimensions, columns) => {
  return columns.filter(column => column.name === dimensions.x.label)[0].id;
};
const cleanString = rawString => {
  return rawString.replaceAll('"', '');
};

// When using autosize features of vega-lite, the chart is expected to reposition
// correctly such that there is space for the chart and legend within the canvas.
// This works for horizontal positions (left/right), but breaks for vertical positions
// (top/bottom). To make up for this, we set the offset to 0 for these positions such that
// the chart will not get truncated or potentially cut off within the canvas.
const calculateLegendOffset = legendPosition =>
// 18 is the default offset as of vega lite 5
legendPosition === 'top' || legendPosition === 'bottom' ? 0 : 18;
const formatDatatable = datatable => {
  datatable.columns.forEach(column => {
    // clean quotation marks from names in columns
    column.name = cleanString(column.name);
    // clean ids to remove "." as that will cause vega to not process it correctly.
    // This happens for different metric types
    column.id = column.id.replaceAll('.', '-');
  });

  // clean row keys to remove "." as that will cause vega to not process it correctly
  const updatedRows = datatable.rows.map(row => Object.entries(row).reduce((updatedRow, [key, value]) => {
    const cleanKey = key.replaceAll('.', '-');
    return Object.assign(updatedRow, {
      [cleanKey]: value
    });
  }, {}));
  datatable.rows = updatedRows;
  return datatable;
};
const setupConfig = (visParams, config) => {
  const legendPosition = visParams.legendPosition;
  return {
    view: {
      stroke: null
    },
    concat: {
      spacing: 0
    },
    legend: {
      orient: legendPosition,
      offset: calculateLegendOffset(legendPosition)
    },
    // This is parsed in the VegaParser and hides unnecessary warnings.
    // For example, 'infinite extent' warnings that cover the chart
    // when there is empty data for a time series
    kibana: {
      hideWarnings: true,
      visAugmenterConfig: config
    }
  };
};
const buildLayerMark = seriesParams => {
  return {
    // Possible types are: line, area, histogram. The eligibility checker will
    // prevent area and histogram (though area works in vega-lite)
    type: seriesParams.type,
    // Possible types: linear, cardinal, step-after. All of these types work in vega-lite
    interpolate: seriesParams.interpolate,
    // The possible values is any number, which matches what vega-lite supports
    strokeWidth: seriesParams.lineWidth,
    // this corresponds to showing the dots in the visbuilder for each data point
    point: seriesParams.showCircles
  };
};
const buildXAxis = (xAxisTitle, xAxisId, visParams) => {
  return {
    axis: {
      title: xAxisTitle,
      grid: visParams.grid.categoryLines
    },
    field: xAxisId,
    // Right now, the line charts can only set the x-axis value to be a date attribute, so
    // this should always be of type temporal
    type: 'temporal'
  };
};
const buildYAxis = (column, valueAxis, visParams) => {
  var _column$meta;
  const subAxis = {
    title: cleanString(valueAxis.title.text) || column.name,
    grid: visParams.grid.valueAxis !== undefined,
    orient: valueAxis.position,
    labels: valueAxis.labels.show,
    labelAngle: valueAxis.labels.rotate
  };
  // Percentile ranks aggregation metric needs percentile formatting.
  if (((_column$meta = column.meta) === null || _column$meta === void 0 ? void 0 : _column$meta.type) === 'percentile_ranks') Object.assign(subAxis, {
    format: '.0%'
  });
  return {
    axis: subAxis,
    field: column.id,
    type: 'quantitative'
  };
};
const isXAxisColumn = column => {
  var _column$meta2;
  return ((_column$meta2 = column.meta) === null || _column$meta2 === void 0 || (_column$meta2 = _column$meta2.aggConfigParams) === null || _column$meta2 === void 0 ? void 0 : _column$meta2.interval) !== undefined;
};

// Given a chart's underlying datatable, generate a vega-lite spec.
// Designed to be used with x-y / temporal visualizations only.
const createSpecFromXYChartDatatable = (datatable, visParams, dimensions, config) => {
  var _visParams$valueAxes;
  // TODO: we can try to use VegaSpec type but it is currently very outdated, where many
  // of the fields and sub-fields don't have other optional params that we want for customizing.
  // For now, we make this more loosely-typed by just specifying it as a generic object.
  const spec = {};
  spec.$schema = 'https://vega.github.io/schema/vega-lite/v5.json';
  spec.data = {
    values: datatable.rows
  };
  spec.config = setupConfig(visParams, config);

  // Get the valueAxes data and generate a map to easily fetch the different valueAxes data
  const valueAxis = new Map();
  visParams === null || visParams === void 0 || (_visParams$valueAxes = visParams.valueAxes) === null || _visParams$valueAxes === void 0 || _visParams$valueAxes.forEach(yAxis => {
    valueAxis.set(yAxis.id, yAxis);
  });
  spec.layer = [];
  if (datatable.rows.length > 0 && dimensions.x !== null) {
    const xAxisId = getXAxisId(dimensions, datatable.columns);
    const xAxisTitle = cleanString(dimensions.x.label);
    datatable.columns.forEach((column, index) => {
      // Ignore columns that are for the x-axis and visLayers
      if (isXAxisColumn(column) || Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_0__["isVisLayerColumn"])(column)) return;
      // Get the series param id which is the 2nd value in the column id
      // Example: 'col-1-3', the seriesParamId is 3. 'col-1-2-6', the seriesParamId is 2.
      const seriesParamsId = column.id.split('-')[2];
      const currentSeriesParams = visParams.seriesParams.find(param => {
        var _param$data;
        return (param === null || param === void 0 || (_param$data = param.data) === null || _param$data === void 0 ? void 0 : _param$data.id) === seriesParamsId;
      });
      if (!currentSeriesParams) {
        // eslint-disable-next-line no-console
        console.error(`Failed to find matching series param for column of id: ${column.id}`);
        return;
      }
      const currentValueAxis = valueAxis.get(currentSeriesParams.valueAxis.toString());
      let tooltip = [];
      if (visParams.addTooltip) {
        tooltip = [{
          field: xAxisId,
          type: 'temporal',
          title: xAxisTitle
        }, {
          field: column.id,
          type: 'quantitative',
          title: column.name
        }];
      }
      spec.layer.push({
        mark: buildLayerMark(currentSeriesParams),
        encoding: {
          x: buildXAxis(xAxisTitle, xAxisId, visParams),
          y: buildYAxis(column, currentValueAxis, visParams),
          tooltip,
          color: {
            // This ensures all the different metrics have their own distinct and unique color
            datum: column.name
          }
        }
      });
    });
  }
  if (visParams.addTimeMarker) {
    spec.transform = [{
      calculate: 'now()',
      as: 'now_field'
    }];
    spec.layer.push({
      mark: 'rule',
      encoding: {
        x: {
          type: 'temporal',
          field: 'now_field'
        },
        // The time marker on vislib is red, so keeping this consistent
        color: {
          value: 'red'
        },
        size: {
          value: 1
        }
      }
    });
  }
  if (visParams.thresholdLine.show) {
    const layer = {
      mark: {
        type: 'rule',
        color: visParams.thresholdLine.color,
        strokeDash: [1, 0]
      },
      encoding: {
        y: {
          datum: visParams.thresholdLine.value
        }
      }
    };

    // Can only support making a threshold line with full or dashed style, but not dot-dashed
    // due to vega-lite limitations
    if (visParams.thresholdLine.style !== 'full') {
      layer.mark.strokeDash = [8, 8];
    }
    spec.layer.push(layer);
  }
  return spec;
};

/***/ }),

/***/ "./public/expressions/index.ts":
/*!*************************************!*\
  !*** ./public/expressions/index.ts ***!
  \*************************************/
/*! exports provided: LineVegaSpecExpressionFunctionDefinition, VegaExpressionFunctionDefinition, YAxisConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_vega_spec_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line_vega_spec_fn */ "./public/expressions/line_vega_spec_fn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineVegaSpecExpressionFunctionDefinition", function() { return _line_vega_spec_fn__WEBPACK_IMPORTED_MODULE_0__["LineVegaSpecExpressionFunctionDefinition"]; });

/* harmony import */ var _vega_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vega_fn */ "./public/expressions/vega_fn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VegaExpressionFunctionDefinition", function() { return _vega_fn__WEBPACK_IMPORTED_MODULE_1__["VegaExpressionFunctionDefinition"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./public/expressions/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YAxisConfig", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["YAxisConfig"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





/***/ }),

/***/ "./public/expressions/line_vega_spec_fn.ts":
/*!*************************************************!*\
  !*** ./public/expressions/line_vega_spec_fn.ts ***!
  \*************************************************/
/*! exports provided: createLineVegaSpecFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineVegaSpecFn", function() { return createLineVegaSpecFn; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./public/expressions/helpers.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const createLineVegaSpecFn = dependencies => ({
  name: 'line_vega_spec',
  type: 'string',
  inputTypes: ['opensearch_dashboards_datatable'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.function.helpSpec', {
    defaultMessage: 'Construct line vega spec'
  }),
  args: {
    visLayers: {
      types: ['string', 'null'],
      default: '',
      help: ''
    },
    visParams: {
      types: ['string'],
      default: '""',
      help: ''
    },
    dimensions: {
      types: ['string'],
      default: '""',
      help: ''
    },
    visAugmenterConfig: {
      types: ['string'],
      default: '""',
      help: ''
    }
  },
  async fn(input, args, context) {
    let table = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatDatatable"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(input));
    const visParams = JSON.parse(args.visParams);
    const dimensions = JSON.parse(args.dimensions);
    const allVisLayers = args.visLayers ? JSON.parse(args.visLayers) : [];
    const visAugmenterConfig = JSON.parse(args.visAugmenterConfig);

    // currently only supporting PointInTimeEventsVisLayer type
    const pointInTimeEventsVisLayers = allVisLayers.filter(visLayer => Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["isPointInTimeEventsVisLayer"])(visLayer));
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(pointInTimeEventsVisLayers) && dimensions.x !== null) {
      table = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["addPointInTimeEventsLayersToTable"])(table, dimensions, pointInTimeEventsVisLayers);
    }
    let spec = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["createSpecFromXYChartDatatable"])(table, visParams, dimensions, visAugmenterConfig);
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(pointInTimeEventsVisLayers) && dimensions.x !== null) {
      spec = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["addPointInTimeEventsLayersToSpec"])(table, dimensions, spec);
      // @ts-ignore
      spec.config = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["enableVisLayersInSpecConfig"])(spec, pointInTimeEventsVisLayers);
      // @ts-ignore
      spec.config = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["addVisEventSignalsToSpecConfig"])(spec);
    }

    // Apply other formatting changes to the spec (show vis data, hide axes, etc.) based on the
    // vis augmenter config. Mostly used for customizing the views on the view events flyout.
    spec = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_2__["augmentEventChartSpec"])(visAugmenterConfig, spec);
    return JSON.stringify(spec);
  }
});

/***/ }),

/***/ "./public/expressions/vega_fn.ts":
/*!***************************************!*\
  !*** ./public/expressions/vega_fn.ts ***!
  \***************************************/
/*! exports provided: createVegaFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVegaFn", function() { return createVegaFn; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vega_request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vega_request_handler */ "./public/vega_request_handler.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const createVegaFn = dependencies => ({
  name: 'vega',
  type: 'render',
  inputTypes: ['opensearch_dashboards_context', 'null'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.function.help', {
    defaultMessage: 'Vega visualization'
  }),
  args: {
    spec: {
      types: ['string'],
      default: '',
      help: ''
    }
  },
  async fn(input, args, context) {
    const vegaRequestHandler = Object(_vega_request_handler__WEBPACK_IMPORTED_MODULE_2__["createVegaRequestHandler"])(dependencies, context);
    const response = await vegaRequestHandler({
      timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'timeRange'),
      query: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'query'),
      filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'filters'),
      visParams: {
        spec: args.spec
      }
    });
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: response,
        visType: 'vega',
        visConfig: {
          spec: args.spec
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/index.scss":
/*!***************************!*\
  !*** ./public/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "./public/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "./public/index.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/index.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./index.scss?v9dark */ "./public/index.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./index.scss?v9light */ "./public/index.scss?v9light");
}

/***/ }),

/***/ "./public/index.scss?v7dark":
/*!**********************************!*\
  !*** ./public/index.scss?v7dark ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v7dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v7light":
/*!***********************************!*\
  !*** ./public/index.scss?v7light ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v7light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v8dark":
/*!**********************************!*\
  !*** ./public/index.scss?v8dark ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./index.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v8light":
/*!***********************************!*\
  !*** ./public/index.scss?v8light ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./index.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v9dark":
/*!**********************************!*\
  !*** ./public/index.scss?v9dark ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./index.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v9dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.scss?v9light":
/*!***********************************!*\
  !*** ./public/index.scss?v9light ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/index.scss?v9light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, LineVegaSpecExpressionFunctionDefinition, VegaExpressionFunctionDefinition, YAxisConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressions */ "./public/expressions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineVegaSpecExpressionFunctionDefinition", function() { return _expressions__WEBPACK_IMPORTED_MODULE_1__["LineVegaSpecExpressionFunctionDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VegaExpressionFunctionDefinition", function() { return _expressions__WEBPACK_IMPORTED_MODULE_1__["VegaExpressionFunctionDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YAxisConfig", function() { return _expressions__WEBPACK_IMPORTED_MODULE_1__["YAxisConfig"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["VegaPlugin"](initializerContext);
}


/***/ }),

/***/ "./public/lib/extract_index_pattern.ts":
/*!*********************************************!*\
  !*** ./public/lib/extract_index_pattern.ts ***!
  \*********************************************/
/*! exports provided: extractIndexPatternsFromSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIndexPatternsFromSpec", function() { return extractIndexPatternsFromSpec; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const extractIndexPatternsFromSpec = async spec => {
  const {
    indexPatterns
  } = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getData"])();
  let data = [];
  if (Array.isArray(spec.data)) {
    data = spec.data;
  } else if (spec.data) {
    data = [spec.data];
  }
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(await Promise.all(data.reduce((accumulator, currentValue) => {
    var _currentValue$url;
    if ((_currentValue$url = currentValue.url) !== null && _currentValue$url !== void 0 && _currentValue$url.index) {
      accumulator.push(indexPatterns.find(currentValue.url.index));
    }
    return accumulator;
  }, [])));
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: VegaPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaPlugin", function() { return VegaPlugin; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _expressions_vega_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressions/vega_fn */ "./public/expressions/vega_fn.ts");
/* harmony import */ var _vega_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vega_type */ "./public/vega_type.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vega_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vega_inspector */ "./public/vega_inspector/index.ts");
/* harmony import */ var _expressions_line_vega_spec_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expressions/line_vega_spec_fn */ "./public/expressions/line_vega_spec_fn.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









/** @internal */

/** @internal */

/** @internal */

/** @internal */
class VegaPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);
    this.initializerContext = initializerContext;
  }
  async setup(core, {
    inspector,
    data,
    expressions,
    visualizations,
    mapsLegacy,
    dataSource
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setInjectedVars"])({
      enableExternalUrls: this.initializerContext.config.get().enableExternalUrls,
      exposeDebugObjectToWindow: this.initializerContext.config.get().exposeDebugObjectToWindow,
      emsTileLayerId: core.injectedMetadata.getInjectedVar('emsTileLayerId', true)
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setUISettings"])(core.uiSettings);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setMapsLegacyConfig"])(mapsLegacy.config);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setDataSourceEnabled"])({
      enabled: !!dataSource
    });
    const visualizationDependencies = {
      core,
      plugins: {
        data
      },
      getServiceSettings: mapsLegacy.getServiceSettings
    };
    inspector.registerView(Object(_vega_inspector__WEBPACK_IMPORTED_MODULE_4__["getVegaInspectorView"])({
      uiSettings: core.uiSettings
    }));
    expressions.registerFunction(() => Object(_expressions_vega_fn__WEBPACK_IMPORTED_MODULE_1__["createVegaFn"])(visualizationDependencies));
    expressions.registerFunction(() => Object(_expressions_line_vega_spec_fn__WEBPACK_IMPORTED_MODULE_5__["createLineVegaSpecFn"])(visualizationDependencies));
    visualizations.createBaseVisualization(Object(_vega_type__WEBPACK_IMPORTED_MODULE_2__["createVegaTypeDefinition"])(visualizationDependencies));
  }
  start(core, {
    data,
    uiActions
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setNotifications"])(core.notifications);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setData"])(data);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setSavedObjectsClient"])(core.savedObjects);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setUiActions"])(uiActions);
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["setInjectedMetadata"])(core.injectedMetadata);
  }
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getData, setData, getDataSourceEnabled, setDataSourceEnabled, getSavedObjectsClient, setSavedObjectsClient, getNotifications, setNotifications, getUiActions, setUiActions, getUISettings, setUISettings, getInjectedMetadata, setInjectedMetadata, getInjectedVars, setInjectedVars, getMapsLegacyConfig, setMapsLegacyConfig, getEnableExternalUrls, getExposeDebugObjectToWindow, getEmsTileLayerId, getShowRegionDeniedWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSourceEnabled", function() { return getDataSourceEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataSourceEnabled", function() { return setDataSourceEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectsClient", function() { return getSavedObjectsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedObjectsClient", function() { return setSavedObjectsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiActions", function() { return getUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUiActions", function() { return setUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISettings", function() { return getUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return setUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetadata", function() { return getInjectedMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInjectedMetadata", function() { return setInjectedMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedVars", function() { return getInjectedVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInjectedVars", function() { return setInjectedVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapsLegacyConfig", function() { return getMapsLegacyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapsLegacyConfig", function() { return setMapsLegacyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnableExternalUrls", function() { return getEnableExternalUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExposeDebugObjectToWindow", function() { return getExposeDebugObjectToWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmsTileLayerId", function() { return getEmsTileLayerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowRegionDeniedWarning", function() { return getShowRegionDeniedWarning; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const [getData, setData] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Data');
const [getDataSourceEnabled, setDataSourceEnabled] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('DataSource');
const [getSavedObjectsClient, setSavedObjectsClient] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('SavedObjects');
const [getNotifications, setNotifications] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');
const [getUiActions, setUiActions] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UIActions');
const [getUISettings, setUISettings] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UISettings');
const [getInjectedMetadata, setInjectedMetadata] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('InjectedMetadata');
const [getInjectedVars, setInjectedVars] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('InjectedVars');
const [getMapsLegacyConfig, setMapsLegacyConfig] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('MapsLegacyConfig');
const getEnableExternalUrls = () => getInjectedVars().enableExternalUrls;
const getExposeDebugObjectToWindow = () => getInjectedVars().exposeDebugObjectToWindow;
const getEmsTileLayerId = () => getMapsLegacyConfig().emsTileLayerId;
const getShowRegionDeniedWarning = () => getMapsLegacyConfig().showRegionDeniedWarning;

/***/ }),

/***/ "./public/vega_inspector/components/data_viewer.tsx":
/*!**********************************************************!*\
  !*** ./public/vega_inspector/components/data_viewer.tsx ***!
  \**********************************************************/
/*! exports provided: DataViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewer", function() { return DataViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector_data_grid */ "./public/vega_inspector/components/inspector_data_grid.tsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const getDataGridArialabel = view => _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.inspector.dataViewer.gridAriaLabel', {
  defaultMessage: '{name} data grid',
  values: {
    name: view.id
  }
});
const dataSetAriaLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.inspector.dataViewer.dataSetAriaLabel', {
  defaultMessage: 'Data set'
});
const DataViewer = ({
  vegaAdapter,
  ...rest
}) => {
  const [inspectDataSets, setInspectDataSets] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedView, setSelectedView] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [dataGridAriaLabel, setDataGridAriaLabel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const onViewChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(selectedOptions => {
    const newView = inspectDataSets.find(view => view.id === selectedOptions[0].label);
    if (newView) {
      setDataGridAriaLabel(getDataGridArialabel(newView));
      setSelectedView(newView);
    }
  }, [inspectDataSets]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subscription = vegaAdapter.getDataSetsSubscription().subscribe(dataSets => {
      setInspectDataSets(dataSets);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [vegaAdapter]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (inspectDataSets) {
      if (!selectedView) {
        setSelectedView(inspectDataSets[0]);
      } else {
        setDataGridAriaLabel(getDataGridArialabel(selectedView));
      }
    }
  }, [selectedView, inspectDataSets]);
  if (!selectedView) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], _extends({
    direction: "column",
    gutterSize: "s",
    wrap: false,
    responsive: false
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedComboBox"], {
    fullWidth: true,
    options: inspectDataSets.map(item => ({
      label: item.id
    })),
    "aria-label": dataSetAriaLabel,
    onChange: onViewChange,
    isClearable: false,
    singleSelection: {
      asPlainText: true
    },
    selectedOptions: [{
      label: selectedView.id
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inspector_data_grid__WEBPACK_IMPORTED_MODULE_3__["InspectorDataGrid"], {
    columns: selectedView.columns,
    data: selectedView.data,
    dataGridAriaLabel: dataGridAriaLabel
  })));
};

/***/ }),

/***/ "./public/vega_inspector/components/index.ts":
/*!***************************************************!*\
  !*** ./public/vega_inspector/components/index.ts ***!
  \***************************************************/
/*! exports provided: DataViewer, SignalViewer, SpecViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_viewer */ "./public/vega_inspector/components/data_viewer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataViewer", function() { return _data_viewer__WEBPACK_IMPORTED_MODULE_0__["DataViewer"]; });

/* harmony import */ var _signal_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal_viewer */ "./public/vega_inspector/components/signal_viewer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignalViewer", function() { return _signal_viewer__WEBPACK_IMPORTED_MODULE_1__["SignalViewer"]; });

/* harmony import */ var _spec_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spec_viewer */ "./public/vega_inspector/components/spec_viewer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecViewer", function() { return _spec_viewer__WEBPACK_IMPORTED_MODULE_2__["SpecViewer"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





/***/ }),

/***/ "./public/vega_inspector/components/inspector_data_grid.tsx":
/*!******************************************************************!*\
  !*** ./public/vega_inspector/components/inspector_data_grid.tsx ***!
  \******************************************************************/
/*! exports provided: InspectorDataGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorDataGrid", function() { return InspectorDataGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const DEFAULT_PAGE_SIZE = 15;
const InspectorDataGrid = ({
  columns,
  data,
  dataGridAriaLabel
}) => {
  const [pagination, setPagination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    pageIndex: 0,
    pageSize: DEFAULT_PAGE_SIZE
  });
  const onChangeItemsPerPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageSize => setPagination(p => ({
    ...p,
    pageSize,
    pageIndex: 0
  })), [setPagination]);
  const onChangePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageIndex => setPagination(p => ({
    ...p,
    pageIndex
  })), [setPagination]);

  // Column visibility
  const [visibleColumns, setVisibleColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPagination({
      ...pagination,
      pageIndex: 0
    });
    setVisibleColumns(columns.map(column => column.id));
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dataGridAriaLabel]);

  // Sorting
  const [sortingColumns, setSortingColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const onSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newSortingColumns => {
    setSortingColumns(newSortingColumns);
  }, [setSortingColumns]);
  let gridData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return [...data].sort((a, b) => {
      for (let i = 0; i < sortingColumns.length; i++) {
        const column = sortingColumns[i];
        const aValue = a[column.id];
        const bValue = b[column.id];
        if (aValue < bValue) return column.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return column.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortingColumns]);
  const renderCellValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return ({
      rowIndex,
      columnId
    }) => {
      let adjustedRowIndex = rowIndex;

      // If we are doing the pagination (instead of leaving that to the grid)
      // then the row index must be adjusted as `data` has already been pruned to the page size
      adjustedRowIndex = rowIndex - pagination.pageIndex * pagination.pageSize;
      return gridData.hasOwnProperty(adjustedRowIndex) ? gridData[adjustedRowIndex][columnId] || null : null;
    };
  }, [gridData, pagination.pageIndex, pagination.pageSize]);

  // Pagination
  gridData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const rowStart = pagination.pageIndex * pagination.pageSize;
    const rowEnd = Math.min(rowStart + pagination.pageSize, gridData.length);
    return gridData.slice(rowStart, rowEnd);
  }, [gridData, pagination]);

  // Resize
  const [columnWidths, setColumnWidths] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const onColumnResize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    columnId,
    width
  }) => {
    setColumnWidths({
      ...columnWidths,
      [columnId]: width
    });
  }, [columnWidths]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDataGrid"], {
    "aria-label": dataGridAriaLabel,
    columns: columns.map(column => {
      if (columnWidths[column.id]) {
        return {
          ...column,
          initialWidth: columnWidths[column.id]
        };
      }
      return column;
    }),
    columnVisibility: {
      visibleColumns,
      setVisibleColumns
    },
    rowCount: data.length,
    renderCellValue: renderCellValue,
    sorting: {
      columns: sortingColumns,
      onSort
    },
    toolbarVisibility: {
      showFullScreenSelector: false
    },
    onColumnResize: onColumnResize,
    pagination: {
      ...pagination,
      pageSizeOptions: [DEFAULT_PAGE_SIZE, 25, 50],
      onChangeItemsPerPage,
      onChangePage
    }
  });
};

/***/ }),

/***/ "./public/vega_inspector/components/signal_viewer.tsx":
/*!************************************************************!*\
  !*** ./public/vega_inspector/components/signal_viewer.tsx ***!
  \************************************************************/
/*! exports provided: SignalViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalViewer", function() { return SignalViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector_data_grid */ "./public/vega_inspector/components/inspector_data_grid.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const initialSignalColumnWidth = 150;
const signalDataGridAriaLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVega.inspector.signalViewer.gridAriaLabel', {
  defaultMessage: 'Signal values data grid'
});
const SignalViewer = ({
  vegaAdapter
}) => {
  const [inspectSignalsSets, setInspectSignalsSets] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subscription = vegaAdapter.getSignalsSetsSubscription().subscribe(signalSets => {
      if (signalSets) {
        setInspectSignalsSets(signalSets);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [vegaAdapter]);
  if (!inspectSignalsSets) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inspector_data_grid__WEBPACK_IMPORTED_MODULE_3__["InspectorDataGrid"], {
    columns: inspectSignalsSets.columns.map((column, index) => {
      if (index === 0) {
        return {
          ...column,
          initialWidth: initialSignalColumnWidth
        };
      }
      return column;
    }),
    data: inspectSignalsSets.data,
    dataGridAriaLabel: signalDataGridAriaLabel
  }));
};

/***/ }),

/***/ "./public/vega_inspector/components/spec_viewer.tsx":
/*!**********************************************************!*\
  !*** ./public/vega_inspector/components/spec_viewer.tsx ***!
  \**********************************************************/
/*! exports provided: SpecViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecViewer", function() { return SpecViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const copyToClipboardLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.inspector.specViewer.copyToClipboardLabel', {
  defaultMessage: 'Copy to clipboard'
});
const SpecViewer = ({
  vegaAdapter,
  ...rest
}) => {
  const [spec, setSpec] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subscription = vegaAdapter.getSpecSubscription().subscribe(data => {
      if (data) {
        setSpec(data);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [vegaAdapter]);
  if (!spec) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], _extends({
    direction: "column",
    gutterSize: "s",
    wrap: false,
    responsive: false
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eui-textRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCopy"], {
    textToCopy: spec
  }, copy => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    size: "xs",
    flush: "right",
    iconType: "copyClipboard",
    onClick: copy,
    "data-test-subj": "vegaDataInspectorCopyClipboardButton"
  }, copyToClipboardLabel)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["CodeEditor"], {
    languageId: "json",
    value: spec,
    onChange: () => {},
    options: {
      readOnly: true,
      lineNumbers: 'off',
      fontSize: 12,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      wrappingIndent: 'indent',
      automaticLayout: true
    }
  })));
};

/***/ }),

/***/ "./public/vega_inspector/index.ts":
/*!****************************************!*\
  !*** ./public/vega_inspector/index.ts ***!
  \****************************************/
/*! exports provided: createInspectorAdapters, getVegaInspectorView, VegaInspectorAdapters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vega_inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vega_inspector */ "./public/vega_inspector/vega_inspector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInspectorAdapters", function() { return _vega_inspector__WEBPACK_IMPORTED_MODULE_0__["createInspectorAdapters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVegaInspectorView", function() { return _vega_inspector__WEBPACK_IMPORTED_MODULE_0__["getVegaInspectorView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VegaInspectorAdapters", function() { return _vega_inspector__WEBPACK_IMPORTED_MODULE_0__["VegaInspectorAdapters"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/***/ }),

/***/ "./public/vega_inspector/vega_adapter.ts":
/*!***********************************************!*\
  !*** ./public/vega_inspector/vega_adapter.ts ***!
  \***********************************************/
/*! exports provided: VegaAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaAdapter", function() { return VegaAdapter; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const vegaAdapterSignalLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVega.inspector.vegaAdapter.signal', {
  defaultMessage: 'Signal'
});
const vegaAdapterValueLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVega.inspector.vegaAdapter.value', {
  defaultMessage: 'Value'
});

/** Get Runtime Scope for Vega View
 * @link https://vega.github.io/vega/docs/api/debugging/#scope
 **/
const getVegaRuntimeScope = debugValues => debugValues.view._runtime;
const serializeColumns = (item, columns) => {
  const nonSerializableFieldLabel = '(..)';
  return columns.reduce((row, column) => {
    try {
      const cell = item[column];
      row[column] = typeof cell === 'object' ? JSON.stringify(cell) : `${cell}`;
    } catch (e) {
      row[column] = nonSerializableFieldLabel;
    }
    return row;
  }, {});
};
class VegaAdapter {
  constructor() {
    _defineProperty(this, "debugValuesSubject", new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]());
  }
  bindInspectValues(debugValues) {
    this.debugValuesSubject.next(debugValues);
  }
  getDataSetsSubscription() {
    return this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => {
      const runtimeScope = getVegaRuntimeScope(debugValues);
      return Object.keys(runtimeScope.data || []).reduce((acc, key) => {
        const value = runtimeScope.data[key].values.value;
        if (value && value[0]) {
          const columns = Object.keys(value[0]);
          acc.push({
            id: key,
            columns: columns.map(column => ({
              id: column,
              schema: 'json'
            })),
            data: value.map(item => serializeColumns(item, columns))
          });
        }
        return acc;
      }, []);
    }));
  }
  getSignalsSetsSubscription() {
    const signalsListener = this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(debugValues => {
      const runtimeScope = getVegaRuntimeScope(debugValues);
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(...Object.keys(runtimeScope.signals).map(key => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"])(handler => debugValues.view.addSignalListener(key, handler), handler => debugValues.view.removeSignalListener(key, handler)))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(val => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(350)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => debugValues));
    }));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.debugValuesSubject, signalsListener).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => {
      const runtimeScope = getVegaRuntimeScope(debugValues);
      return {
        columns: [{
          id: vegaAdapterSignalLabel,
          schema: 'text'
        }, {
          id: vegaAdapterValueLabel,
          schema: 'json'
        }],
        data: Object.keys(runtimeScope.signals).map(key => serializeColumns({
          [vegaAdapterSignalLabel]: key,
          [vegaAdapterValueLabel]: runtimeScope.signals[key].value
        }, [vegaAdapterSignalLabel, vegaAdapterValueLabel]))
      };
    }));
  }
  getSpecSubscription() {
    return this.debugValuesSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(debugValues => Boolean(debugValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(debugValues => JSON.stringify(debugValues.spec, null, 2)));
  }
}

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss":
/*!********************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v7dark */ "./public/vega_inspector/vega_data_inspector.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v7light */ "./public/vega_inspector/vega_data_inspector.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v8dark */ "./public/vega_inspector/vega_data_inspector.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v8light */ "./public/vega_inspector/vega_data_inspector.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v9dark */ "./public/vega_inspector/vega_data_inspector.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./vega_data_inspector.scss?v9light */ "./public/vega_inspector/vega_data_inspector.scss?v9light");
}

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v7dark":
/*!***************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v7dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./vega_data_inspector.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v7dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v7light":
/*!****************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v7light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./vega_data_inspector.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v7light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v8dark":
/*!***************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v8dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./vega_data_inspector.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v8light":
/*!****************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v8light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./vega_data_inspector.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v9dark":
/*!***************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v9dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./vega_data_inspector.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v9dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.scss?v9light":
/*!****************************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.scss?v9light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./vega_data_inspector.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/vega_inspector/vega_data_inspector.scss?v9light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/vega_inspector/vega_data_inspector.tsx":
/*!*******************************************************!*\
  !*** ./public/vega_inspector/vega_data_inspector.tsx ***!
  \*******************************************************/
/*! exports provided: VegaDataInspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaDataInspector", function() { return VegaDataInspector; });
/* harmony import */ var _vega_data_inspector_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vega_data_inspector.scss */ "./public/vega_inspector/vega_data_inspector.scss");
/* harmony import */ var _vega_data_inspector_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vega_data_inspector_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./public/vega_inspector/components/index.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






const dataSetsLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeVega.inspector.dataSetsLabel', {
  defaultMessage: 'Data sets'
});
const signalValuesLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeVega.inspector.signalValuesLabel', {
  defaultMessage: 'Signal values'
});
const specLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeVega.inspector.specLabel', {
  defaultMessage: 'Spec'
});
const VegaDataInspector = ({
  adapters
}) => {
  const tabs = [{
    id: 'data-viewer--id',
    name: dataSetsLabel,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["DataViewer"], {
      vegaAdapter: adapters.vega
    }),
    'data-test-subj': 'vegaDataInspectorDataViewerButton'
  }, {
    id: 'signal-viewer--id',
    name: signalValuesLabel,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SignalViewer"], {
      vegaAdapter: adapters.vega
    }),
    'data-test-subj': 'vegaDataInspectorSignalViewerButton'
  }, {
    id: 'spec-viewer--id',
    name: specLabel,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SpecViewer"], {
      className: "vgaVegaDataInspector__specViewer",
      vegaAdapter: adapters.vega
    }),
    'data-test-subj': 'vegaDataInspectorSpecViewerButton'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTabbedContent"], {
    className: "vgaVegaDataInspector",
    size: "s",
    tabs: tabs,
    initialSelectedTab: tabs[0],
    autoFocus: "selected"
  });
};

/***/ }),

/***/ "./public/vega_inspector/vega_inspector.tsx":
/*!**************************************************!*\
  !*** ./public/vega_inspector/vega_inspector.tsx ***!
  \**************************************************/
/*! exports provided: getVegaInspectorView, createInspectorAdapters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVegaInspectorView", function() { return getVegaInspectorView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInspectorAdapters", function() { return createInspectorAdapters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vega_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vega_adapter */ "./public/vega_inspector/vega_adapter.ts");
/* harmony import */ var _vega_data_inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vega_data_inspector */ "./public/vega_inspector/vega_data_inspector.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inspector/public */ "plugin/inspector/public");
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inspector_public__WEBPACK_IMPORTED_MODULE_5__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







const vegaDebugLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVega.inspector.vegaDebugLabel', {
  defaultMessage: 'Vega debug'
});
const getVegaInspectorView = dependencies => ({
  title: vegaDebugLabel,
  shouldShow(adapters) {
    return Boolean(adapters.vega);
  },
  component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["OpenSearchDashboardsContextProvider"], {
    services: dependencies
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vega_data_inspector__WEBPACK_IMPORTED_MODULE_3__["VegaDataInspector"], props, " "))
});
const createInspectorAdapters = () => ({
  requests: new _inspector_public__WEBPACK_IMPORTED_MODULE_5__["RequestAdapter"](),
  vega: new _vega_adapter__WEBPACK_IMPORTED_MODULE_2__["VegaAdapter"]()
});

/***/ }),

/***/ "./public/vega_request_handler.ts":
/*!****************************************!*\
  !*** ./public/vega_request_handler.ts ***!
  \****************************************/
/*! exports provided: createVegaRequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVegaRequestHandler", function() { return createVegaRequestHandler; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_model_search_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_model/search_api */ "./public/data_model/search_api.ts");
/* harmony import */ var _data_model_time_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data_model/time_cache */ "./public/data_model/time_cache.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function createVegaRequestHandler({
  plugins: {
    data
  },
  core: {
    uiSettings
  },
  getServiceSettings
}, context = {}) {
  let searchAPI;
  const {
    timefilter
  } = data.query.timefilter;
  const timeCache = new _data_model_time_cache__WEBPACK_IMPORTED_MODULE_2__["TimeCache"](timefilter, 3 * 1000);
  return async function vegaRequestHandler({
    timeRange,
    filters,
    query,
    visParams
  }) {
    if (!searchAPI) {
      searchAPI = new _data_model_search_api__WEBPACK_IMPORTED_MODULE_1__["SearchAPI"]({
        uiSettings,
        search: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getData"])().search,
        injectedMetadata: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getInjectedMetadata"])(),
        dataSourceEnabled: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getDataSourceEnabled"])().enabled,
        savedObjectsClient: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedObjectsClient"])().client
      }, context.abortSignal, context.inspectorAdapters);
    }
    timeCache.setTimeRange(timeRange);
    const opensearchQueryConfigs = _data_public__WEBPACK_IMPORTED_MODULE_0__["opensearchQuery"].getOpenSearchQueryConfig(uiSettings);
    const filtersDsl = _data_public__WEBPACK_IMPORTED_MODULE_0__["opensearchQuery"].buildOpenSearchQuery(undefined, query, filters, opensearchQueryConfigs);
    const {
      VegaParser
    } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./data_model/vega_parser */ "./public/data_model/vega_parser.ts"));
    const vp = new VegaParser(visParams.spec, searchAPI, timeCache, filtersDsl, getServiceSettings);
    return await vp.parseAsync();
  };
}

/***/ }),

/***/ "./public/vega_type.ts":
/*!*****************************!*\
  !*** ./public/vega_type.ts ***!
  \*****************************/
/*! exports provided: createVegaTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVegaTypeDefinition", function() { return createVegaTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hjson */ "../../../node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./public/components/index.ts");
/* harmony import */ var _lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/extract_index_pattern */ "./public/lib/extract_index_pattern.ts");
/* harmony import */ var _vega_request_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vega_request_handler */ "./public/vega_request_handler.ts");
/* harmony import */ var _vega_visualization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vega_visualization */ "./public/vega_visualization.js");
/* harmony import */ var _default_spec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default_spec */ "./public/default_spec.ts");
/* harmony import */ var _vega_inspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vega_inspector */ "./public/vega_inspector/index.ts");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_9__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







// @ts-expect-error




const createVegaTypeDefinition = dependencies => {
  const requestHandler = Object(_vega_request_handler__WEBPACK_IMPORTED_MODULE_5__["createVegaRequestHandler"])(dependencies);
  const visualization = Object(_vega_visualization__WEBPACK_IMPORTED_MODULE_6__["createVegaVisualization"])(dependencies);
  return {
    name: 'vega',
    title: 'Vega',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.type.vegaDescription', {
      defaultMessage: 'Create custom visualizations using Vega and Vega-Lite',
      description: 'Vega and Vega-Lite are product names and should not be translated'
    }),
    icon: 'visVega',
    visConfig: {
      defaults: {
        spec: Object(_default_spec__WEBPACK_IMPORTED_MODULE_7__["getDefaultSpec"])()
      }
    },
    editorConfig: {
      optionsTemplate: _components__WEBPACK_IMPORTED_MODULE_3__["VegaVisEditor"],
      enableAutoApply: true,
      defaultSize: _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["DefaultEditorSize"].MEDIUM
    },
    visualization,
    requestHandler,
    responseHandler: 'none',
    options: {
      showIndexSelection: false,
      showQueryBar: true,
      showFilterBar: true
    },
    getSupportedTriggers: () => {
      return [_visualizations_public__WEBPACK_IMPORTED_MODULE_9__["VIS_EVENT_TO_TRIGGER"].applyFilter, _visualizations_public__WEBPACK_IMPORTED_MODULE_9__["VIS_EVENT_TO_TRIGGER"].externalAction];
    },
    getUsedIndexPattern: async visParams => {
      try {
        const spec = Object(hjson__WEBPACK_IMPORTED_MODULE_1__["parse"])(visParams.spec, {
          legacyRoot: false,
          keepWsc: true
        });
        return Object(_lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_4__["extractIndexPatternsFromSpec"])(spec);
      } catch (e) {
        // spec is invalid
      }
      return [];
    },
    inspectorAdapters: _vega_inspector__WEBPACK_IMPORTED_MODULE_8__["createInspectorAdapters"]
  };
};

/***/ }),

/***/ "./public/vega_visualization.js":
/*!**************************************!*\
  !*** ./public/vega_visualization.js ***!
  \**************************************/
/*! exports provided: createVegaVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVegaVisualization", function() { return createVegaVisualization; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const createVegaVisualization = ({
  getServiceSettings
}) => class VegaVisualization {
  constructor(el, vis) {
    this._el = el;
    this._vis = vis;
    this.dataPlugin = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getData"])();
  }

  /**
   *
   * @param {VegaParser} visData
   * @param {*} status
   * @returns {Promise<void>}
   */
  async render(visData) {
    const {
      toasts
    } = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getNotifications"])();
    if (!visData && !this._vegaView) {
      toasts.addWarning(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.visualization.unableToRenderWithoutDataWarningMessage', {
        defaultMessage: 'Unable to render without data'
      }));
      return;
    }
    try {
      await this._render(visData);
    } catch (error) {
      if (this._vegaView) {
        this._vegaView.onError(error);
      } else {
        toasts.addError(error, {
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.visualization.renderErrorTitle', {
            defaultMessage: 'Vega error'
          })
        });
      }
    }
  }
  async _render(vegaParser) {
    if (vegaParser) {
      // New data received, rebuild the graph
      if (this._vegaView) {
        await this._vegaView.destroy();
        this._vegaView = null;
      }
      const serviceSettings = await getServiceSettings();
      const {
        filterManager
      } = this.dataPlugin.query;
      const {
        timefilter
      } = this.dataPlugin.query.timefilter;
      const vegaViewParams = {
        parentEl: this._el,
        applyFilter: this._vis.API.events.applyFilter,
        vegaParser,
        serviceSettings,
        filterManager,
        timefilter,
        externalAction: this._vis.API.events.externalAction
      };
      if (vegaParser.useMap) {
        const services = {
          toastService: Object(_services__WEBPACK_IMPORTED_MODULE_1__["getNotifications"])().toasts
        };
        const {
          VegaMapView
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./vega_view/vega_map_view */ "./public/vega_view/vega_map_view.js"));
        this._vegaView = new VegaMapView(vegaViewParams, services);
      } else {
        const {
          VegaView
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./vega_view/vega_view */ "./public/vega_view/vega_view.js"));
        this._vegaView = new VegaView(vegaViewParams);
      }
      await this._vegaView.init();
    }
  }
  destroy() {
    return this._vegaView && this._vegaView.destroy();
  }
};

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__osdSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticEui;

/***/ }),

/***/ "@osd/i18n":
/*!********************************************!*\
  !*** external "__osdSharedDeps__.OsdI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdI18n;

/***/ }),

/***/ "@osd/i18n/react":
/*!*************************************************!*\
  !*** external "__osdSharedDeps__.OsdI18nReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdI18nReact;

/***/ }),

/***/ "@osd/ui-shared-deps/theme":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.Theme" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Theme;

/***/ }),

/***/ "jquery":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Jquery" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Jquery;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

/***/ }),

/***/ "moment":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Moment;

/***/ }),

/***/ "plugin/data/public":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/data/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/data/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/inspector/public":
/*!************************************************!*\
  !*** @osd/bundleRef "plugin/inspector/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/inspector/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/mapsLegacy/public":
/*!*************************************************!*\
  !*** @osd/bundleRef "plugin/mapsLegacy/public" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/mapsLegacy/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/opensearchDashboardsReact/public":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsReact/public" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsReact/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/opensearchDashboardsUtils/public":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsUtils/public" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsUtils/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visAugmenter/public":
/*!***************************************************!*\
  !*** @osd/bundleRef "plugin/visAugmenter/public" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/visAugmenter/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visDefaultEditor/public":
/*!*******************************************************!*\
  !*** @osd/bundleRef "plugin/visDefaultEditor/public" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/visDefaultEditor/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/visualizations/public":
/*!*****************************************************!*\
  !*** @osd/bundleRef "plugin/visualizations/public" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/visualizations/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.React;

/***/ }),

/***/ "rxjs":
/*!*****************************************!*\
  !*** external "__osdSharedDeps__.Rxjs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Rxjs;

/***/ }),

/***/ "rxjs/operators":
/*!**************************************************!*\
  !*** external "__osdSharedDeps__.RxjsOperators" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.RxjsOperators;

/***/ })

/******/ });
//# sourceMappingURL=visTypeVega.plugin.js.map