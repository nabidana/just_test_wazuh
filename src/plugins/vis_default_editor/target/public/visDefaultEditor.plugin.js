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
/******/ 		"visDefaultEditor": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visDefaultEditor.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["visDefaultEditor_bundle_jsonpfunction"] = window["visDefaultEditor_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/@elastic/datemath/target/index.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@elastic/datemath/target/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var unitsMap = {
  ms: {
    weight: 1,
    type: 'fixed',
    base: 1
  },
  s: {
    weight: 2,
    type: 'fixed',
    base: 1000
  },
  m: {
    weight: 3,
    type: 'mixed',
    base: 1000 * 60
  },
  h: {
    weight: 4,
    type: 'mixed',
    base: 1000 * 60 * 60
  },
  d: {
    weight: 5,
    type: 'mixed',
    base: 1000 * 60 * 60 * 24
  },
  w: {
    weight: 6,
    type: 'calendar',
    base: NaN
  },
  M: {
    weight: 7,
    type: 'calendar',
    base: NaN
  },
  // q: { weight: 8, type: 'calendar' }, // TODO: moment duration does not support quarter
  y: {
    weight: 9,
    type: 'calendar',
    base: NaN
  }
};
var units = Object.keys(unitsMap).sort(function (a, b) {
  return unitsMap[b].weight - unitsMap[a].weight;
});

var unitsDesc = _toConsumableArray(units);

var unitsAsc = _toConsumableArray(units).reverse();

var isDate = function isDate(d) {
  return Object.prototype.toString.call(d) === '[object Date]';
};

var isValidDate = function isValidDate(d) {
  return isDate(d) && !isNaN(d.valueOf());
};
/*
 * This is a simplified version of elasticsearch's date parser.
 * If you pass in a momentjs instance as the third parameter the calculation
 * will be done using this (and its locale settings) instead of the one bundled
 * with this library.
 */


function parse(text) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$roundUp = _ref.roundUp,
      roundUp = _ref$roundUp === void 0 ? false : _ref$roundUp,
      _ref$momentInstance = _ref.momentInstance,
      momentInstance = _ref$momentInstance === void 0 ? _moment.default : _ref$momentInstance,
      forceNow = _ref.forceNow;

  if (!text) return undefined;
  if (momentInstance.isMoment(text)) return text;
  if (isDate(text)) return momentInstance(text);

  if (forceNow !== undefined && !isValidDate(forceNow)) {
    throw new Error('forceNow must be a valid Date');
  }

  var time;
  var mathString = '';
  var index;
  var parseString;

  if (text.substring(0, 3) === 'now') {
    time = momentInstance(forceNow);
    mathString = text.substring('now'.length);
  } else {
    index = text.indexOf('||');

    if (index === -1) {
      parseString = text;
      mathString = ''; // nothing else
    } else {
      parseString = text.substring(0, index);
      mathString = text.substring(index + 2);
    } // We're going to just require ISO8601 timestamps, k?


    time = momentInstance(parseString);
  }

  if (!mathString.length) {
    return time;
  }

  return parseDateMath(mathString, time, roundUp);
}

function parseDateMath(mathString, time, roundUp) {
  var dateTime = time;
  var len = mathString.length;
  var i = 0;

  while (i < len) {
    var c = mathString.charAt(i++);
    var type = void 0;
    var num = void 0;
    var unit = void 0;

    if (c === '/') {
      type = 0;
    } else if (c === '+') {
      type = 1;
    } else if (c === '-') {
      type = 2;
    } else {
      return;
    }

    if (isNaN(mathString.charAt(i))) {
      num = 1;
    } else if (mathString.length === 2) {
      num = mathString.charAt(i);
    } else {
      var numFrom = i;

      while (!isNaN(mathString.charAt(i))) {
        i++;
        if (i >= len) return;
      }

      num = parseInt(mathString.substring(numFrom, i), 10);
    }

    if (type === 0) {
      // rounding is only allowed on whole, single, units (eg M or 1M, not 0.5M or 2M)
      if (num !== 1) {
        return;
      }
    }

    unit = mathString.charAt(i++); // append additional characters in the unit

    for (var j = i; j < len; j++) {
      var unitChar = mathString.charAt(i);

      if (/[a-z]/i.test(unitChar)) {
        unit += unitChar;
        i++;
      } else {
        break;
      }
    }

    if (units.indexOf(unit) === -1) {
      return;
    } else {
      if (type === 0) {
        if (roundUp) dateTime.endOf(unit);else dateTime.startOf(unit);
      } else if (type === 1) {
        dateTime.add(num, unit);
      } else if (type === 2) {
        dateTime.subtract(num, unit);
      }
    }
  }

  return dateTime;
}

var _default = {
  parse: parse,
  unitsMap: Object.freeze(unitsMap),
  units: Object.freeze(units),
  unitsAsc: Object.freeze(unitsAsc),
  unitsDesc: Object.freeze(unitsDesc)
};
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@xobotyi/scrollbar-width/dist/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


/***/ }),

/***/ "../../../node_modules/brace/mode/json.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/mode/json.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var JsonHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : "variable", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
            }, {
                token : "string", // single line
                regex : '"',
                next  : "string"
            }, {
                token : "constant.numeric", // hex
                regex : "0[xX][0-9a-fA-F]+\\b"
            }, {
                token : "constant.numeric", // float
                regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false)\\b"
            }, {
                token : "text", // single quoted strings are not allowed
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "comment", // comments are not allowed, but who cares?
                regex : "\\/\\/.*$"
            }, {
                token : "comment.start", // comments are not allowed, but who cares?
                regex : "\\/\\*",
                next  : "comment"
            }, {
                token : "paren.lparen",
                regex : "[[({]"
            }, {
                token : "paren.rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "string" : [
            {
                token : "constant.language.escape",
                regex : /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/
            }, {
                token : "string",
                regex : '"|$',
                next  : "start"
            }, {
                defaultToken : "string"
            }
        ],
        "comment" : [
            {
                token : "comment.end", // comments are not allowed, but who cares?
                regex : "\\*\\/",
                next  : "start"
            }, {
                defaultToken: "comment"
            }
        ]
    };
    
};

oop.inherits(JsonHighlightRules, TextHighlightRules);

exports.JsonHighlightRules = JsonHighlightRules;
});

ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
"use strict";

var Range = acequire("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
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

ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var HighlightRules = acequire("./json_highlight_rules").JsonHighlightRules;
var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;

var Mode = function() {
    this.HighlightRules = HighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        if (state == "start") {
            var match = line.match(/^.*[\{\(\[]\s*$/);
            if (match) {
                indent += tab;
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], __webpack_require__(/*! ../worker/json */ "../../../node_modules/brace/worker/json.js"), "JsonWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(e) {
            session.setAnnotations(e.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };


    this.$id = "ace/mode/json";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),

/***/ "../../../node_modules/brace/theme/github.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/theme/github.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ace.define("ace/theme/github",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-github";
exports.cssText = "\
.ace-github .ace_gutter {\
background: #e8e8e8;\
color: #AAA;\
}\
.ace-github  {\
background: #fff;\
color: #000;\
}\
.ace-github .ace_keyword {\
font-weight: bold;\
}\
.ace-github .ace_string {\
color: #D14;\
}\
.ace-github .ace_variable.ace_class {\
color: teal;\
}\
.ace-github .ace_constant.ace_numeric {\
color: #099;\
}\
.ace-github .ace_constant.ace_buildin {\
color: #0086B3;\
}\
.ace-github .ace_support.ace_function {\
color: #0086B3;\
}\
.ace-github .ace_comment {\
color: #998;\
font-style: italic;\
}\
.ace-github .ace_variable.ace_language  {\
color: #0086B3;\
}\
.ace-github .ace_paren {\
font-weight: bold;\
}\
.ace-github .ace_boolean {\
font-weight: bold;\
}\
.ace-github .ace_string.ace_regexp {\
color: #009926;\
font-weight: normal;\
}\
.ace-github .ace_variable.ace_instance {\
color: teal;\
}\
.ace-github .ace_constant.ace_language {\
font-weight: bold;\
}\
.ace-github .ace_cursor {\
color: black;\
}\
.ace-github.ace_focus .ace_marker-layer .ace_active-line {\
background: rgb(255, 255, 204);\
}\
.ace-github .ace_marker-layer .ace_active-line {\
background: rgb(245, 245, 245);\
}\
.ace-github .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-github.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
}\
.ace-github.ace_nobold .ace_line > span {\
font-weight: normal !important;\
}\
.ace-github .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-github .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-github .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-github .ace_gutter-active-line {\
background-color : rgba(0, 0, 0, 0.07);\
}\
.ace-github .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-github .ace_invisible {\
color: #BFBFBF\
}\
.ace-github .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-github .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});


/***/ }),

/***/ "../../../node_modules/brace/worker/json.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/brace/worker/json.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.id = 'ace/mode/json_worker';
module.exports.src = "\"no use strict\";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if(\"[object Object]\"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/json/json_parse\",[\"require\",\"exports\",\"module\"],function(){\"use strict\";var at,ch,text,value,escapee={'\"':'\"',\"\\\\\":\"\\\\\",\"/\":\"/\",b:\"\\b\",f:\"\\f\",n:\"\\n\",r:\"\\r\",t:\"\t\"},error=function(m){throw{name:\"SyntaxError\",message:m,at:at,text:text}},next=function(c){return c&&c!==ch&&error(\"Expected '\"+c+\"' instead of '\"+ch+\"'\"),ch=text.charAt(at),at+=1,ch},number=function(){var number,string=\"\";for(\"-\"===ch&&(string=\"-\",next(\"-\"));ch>=\"0\"&&\"9\">=ch;)string+=ch,next();if(\".\"===ch)for(string+=\".\";next()&&ch>=\"0\"&&\"9\">=ch;)string+=ch;if(\"e\"===ch||\"E\"===ch)for(string+=ch,next(),(\"-\"===ch||\"+\"===ch)&&(string+=ch,next());ch>=\"0\"&&\"9\">=ch;)string+=ch,next();return number=+string,isNaN(number)?(error(\"Bad number\"),void 0):number},string=function(){var hex,i,uffff,string=\"\";if('\"'===ch)for(;next();){if('\"'===ch)return next(),string;if(\"\\\\\"===ch)if(next(),\"u\"===ch){for(uffff=0,i=0;4>i&&(hex=parseInt(next(),16),isFinite(hex));i+=1)uffff=16*uffff+hex;string+=String.fromCharCode(uffff)}else{if(\"string\"!=typeof escapee[ch])break;string+=escapee[ch]}else string+=ch}error(\"Bad string\")},white=function(){for(;ch&&\" \">=ch;)next()},word=function(){switch(ch){case\"t\":return next(\"t\"),next(\"r\"),next(\"u\"),next(\"e\"),!0;case\"f\":return next(\"f\"),next(\"a\"),next(\"l\"),next(\"s\"),next(\"e\"),!1;case\"n\":return next(\"n\"),next(\"u\"),next(\"l\"),next(\"l\"),null}error(\"Unexpected '\"+ch+\"'\")},array=function(){var array=[];if(\"[\"===ch){if(next(\"[\"),white(),\"]\"===ch)return next(\"]\"),array;for(;ch;){if(array.push(value()),white(),\"]\"===ch)return next(\"]\"),array;next(\",\"),white()}}error(\"Bad array\")},object=function(){var key,object={};if(\"{\"===ch){if(next(\"{\"),white(),\"}\"===ch)return next(\"}\"),object;for(;ch;){if(key=string(),white(),next(\":\"),Object.hasOwnProperty.call(object,key)&&error('Duplicate key \"'+key+'\"'),object[key]=value(),white(),\"}\"===ch)return next(\"}\"),object;next(\",\"),white()}}error(\"Bad object\")};return value=function(){switch(white(),ch){case\"{\":return object();case\"[\":return array();case'\"':return string();case\"-\":return number();default:return ch>=\"0\"&&\"9\">=ch?number():word()}},function(source,reviver){var result;return text=source,at=0,ch=\" \",result=value(),white(),ch&&error(\"Syntax error\"),\"function\"==typeof reviver?function walk(holder,key){var k,v,value=holder[key];if(value&&\"object\"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(v=walk(value,k),void 0!==v?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}({\"\":result},\"\"):result}}),ace.define(\"ace/mode/json_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/json/json_parse\"],function(acequire,exports){\"use strict\";var oop=acequire(\"../lib/oop\"),Mirror=acequire(\"../worker/mirror\").Mirror,parse=acequire(\"./json/json_parse\"),JsonWorker=exports.JsonWorker=function(sender){Mirror.call(this,sender),this.setTimeout(200)};oop.inherits(JsonWorker,Mirror),function(){this.onUpdate=function(){var value=this.doc.getValue(),errors=[];try{value&&parse(value)}catch(e){var pos=this.doc.indexToPosition(e.at-1);errors.push({row:pos.row,column:pos.column,text:e.message,type:\"error\"})}this.sender.emit(\"annotate\",errors)}}.call(JsonWorker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0\n}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ }),

/***/ "../../../node_modules/copy-to-clipboard/index.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/copy-to-clipboard/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "../../../node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "../../../node_modules/fast-deep-equal/react.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-deep-equal/react.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "../../../node_modules/fast-shallow-equal/index.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-shallow-equal/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../../../node_modules/js-cookie/src/js.cookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/js-cookie/src/js.cookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!**********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/cssom.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/cssom.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "../../../node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/removeRule.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "../../../node_modules/nano-css/index.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "../../../node_modules/react-use/lib/createBreakpoint.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createBreakpoint.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1.useState(0), screen = _a[0], setScreen = _a[1];
        react_1.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            window.addEventListener('resize', setSideScreen);
            return function () {
                window.removeEventListener('resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [
            breakpoints,
        ]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
exports.default = createBreakpoint;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createGlobalState.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createGlobalState.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
function createGlobalState(initialState) {
    var store = {
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        react_1.useLayoutEffect(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports.default = createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createMemo.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createMemo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
}; };
exports.default = createMemo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducer.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1.useRef(initializer(initialState));
        var _a = react_1.useState(ref.current), setState = _a[1];
        var dispatch = react_1.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
exports.default = createReducer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducerContext.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducerContext.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
exports.default = createReducerContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createStateContext.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createStateContext.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createStateContext = function (defaultInitialValue) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
exports.default = createStateContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createMemo_1 = __webpack_require__(/*! ./createMemo */ "../../../node_modules/react-use/lib/createMemo.js");
exports.createMemo = createMemo_1.default;
var createReducerContext_1 = __webpack_require__(/*! ./createReducerContext */ "../../../node_modules/react-use/lib/createReducerContext.js");
exports.createReducerContext = createReducerContext_1.default;
var createReducer_1 = __webpack_require__(/*! ./createReducer */ "../../../node_modules/react-use/lib/createReducer.js");
exports.createReducer = createReducer_1.default;
var createStateContext_1 = __webpack_require__(/*! ./createStateContext */ "../../../node_modules/react-use/lib/createStateContext.js");
exports.createStateContext = createStateContext_1.default;
var useAsync_1 = __webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js");
exports.useAsync = useAsync_1.default;
var useAsyncFn_1 = __webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js");
exports.useAsyncFn = useAsyncFn_1.default;
var useAsyncRetry_1 = __webpack_require__(/*! ./useAsyncRetry */ "../../../node_modules/react-use/lib/useAsyncRetry.js");
exports.useAsyncRetry = useAsyncRetry_1.default;
var useAudio_1 = __webpack_require__(/*! ./useAudio */ "../../../node_modules/react-use/lib/useAudio.js");
exports.useAudio = useAudio_1.default;
var useBattery_1 = __webpack_require__(/*! ./useBattery */ "../../../node_modules/react-use/lib/useBattery.js");
exports.useBattery = useBattery_1.default;
var useBeforeUnload_1 = __webpack_require__(/*! ./useBeforeUnload */ "../../../node_modules/react-use/lib/useBeforeUnload.js");
exports.useBeforeUnload = useBeforeUnload_1.default;
var useBoolean_1 = __webpack_require__(/*! ./useBoolean */ "../../../node_modules/react-use/lib/useBoolean.js");
exports.useBoolean = useBoolean_1.default;
var useClickAway_1 = __webpack_require__(/*! ./useClickAway */ "../../../node_modules/react-use/lib/useClickAway.js");
exports.useClickAway = useClickAway_1.default;
var useCookie_1 = __webpack_require__(/*! ./useCookie */ "../../../node_modules/react-use/lib/useCookie.js");
exports.useCookie = useCookie_1.default;
var useCopyToClipboard_1 = __webpack_require__(/*! ./useCopyToClipboard */ "../../../node_modules/react-use/lib/useCopyToClipboard.js");
exports.useCopyToClipboard = useCopyToClipboard_1.default;
var useCounter_1 = __webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js");
exports.useCounter = useCounter_1.default;
var useCss_1 = __webpack_require__(/*! ./useCss */ "../../../node_modules/react-use/lib/useCss.js");
exports.useCss = useCss_1.default;
var useCustomCompareEffect_1 = __webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js");
exports.useCustomCompareEffect = useCustomCompareEffect_1.default;
var useDebounce_1 = __webpack_require__(/*! ./useDebounce */ "../../../node_modules/react-use/lib/useDebounce.js");
exports.useDebounce = useDebounce_1.default;
var useDeepCompareEffect_1 = __webpack_require__(/*! ./useDeepCompareEffect */ "../../../node_modules/react-use/lib/useDeepCompareEffect.js");
exports.useDeepCompareEffect = useDeepCompareEffect_1.default;
var useDefault_1 = __webpack_require__(/*! ./useDefault */ "../../../node_modules/react-use/lib/useDefault.js");
exports.useDefault = useDefault_1.default;
var useDrop_1 = __webpack_require__(/*! ./useDrop */ "../../../node_modules/react-use/lib/useDrop.js");
exports.useDrop = useDrop_1.default;
var useDropArea_1 = __webpack_require__(/*! ./useDropArea */ "../../../node_modules/react-use/lib/useDropArea.js");
exports.useDropArea = useDropArea_1.default;
var useEffectOnce_1 = __webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js");
exports.useEffectOnce = useEffectOnce_1.default;
var useEnsuredForwardedRef_1 = __webpack_require__(/*! ./useEnsuredForwardedRef */ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js");
exports.useEnsuredForwardedRef = useEnsuredForwardedRef_1.default;
exports.ensuredForwardRef = useEnsuredForwardedRef_1.ensuredForwardRef;
var useEvent_1 = __webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js");
exports.useEvent = useEvent_1.default;
var useError_1 = __webpack_require__(/*! ./useError */ "../../../node_modules/react-use/lib/useError.js");
exports.useError = useError_1.default;
var useFavicon_1 = __webpack_require__(/*! ./useFavicon */ "../../../node_modules/react-use/lib/useFavicon.js");
exports.useFavicon = useFavicon_1.default;
var useFullscreen_1 = __webpack_require__(/*! ./useFullscreen */ "../../../node_modules/react-use/lib/useFullscreen.js");
exports.useFullscreen = useFullscreen_1.default;
var useGeolocation_1 = __webpack_require__(/*! ./useGeolocation */ "../../../node_modules/react-use/lib/useGeolocation.js");
exports.useGeolocation = useGeolocation_1.default;
var useGetSet_1 = __webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js");
exports.useGetSet = useGetSet_1.default;
var useGetSetState_1 = __webpack_require__(/*! ./useGetSetState */ "../../../node_modules/react-use/lib/useGetSetState.js");
exports.useGetSetState = useGetSetState_1.default;
var useHarmonicIntervalFn_1 = __webpack_require__(/*! ./useHarmonicIntervalFn */ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js");
exports.useHarmonicIntervalFn = useHarmonicIntervalFn_1.default;
var useHover_1 = __webpack_require__(/*! ./useHover */ "../../../node_modules/react-use/lib/useHover.js");
exports.useHover = useHover_1.default;
var useHoverDirty_1 = __webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js");
exports.useHoverDirty = useHoverDirty_1.default;
var useIdle_1 = __webpack_require__(/*! ./useIdle */ "../../../node_modules/react-use/lib/useIdle.js");
exports.useIdle = useIdle_1.default;
var useIntersection_1 = __webpack_require__(/*! ./useIntersection */ "../../../node_modules/react-use/lib/useIntersection.js");
exports.useIntersection = useIntersection_1.default;
var useInterval_1 = __webpack_require__(/*! ./useInterval */ "../../../node_modules/react-use/lib/useInterval.js");
exports.useInterval = useInterval_1.default;
var useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js");
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_1.default;
var useKey_1 = __webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js");
exports.useKey = useKey_1.default;
var createBreakpoint_1 = __webpack_require__(/*! ./createBreakpoint */ "../../../node_modules/react-use/lib/createBreakpoint.js");
exports.createBreakpoint = createBreakpoint_1.default;
// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';
var useKeyPress_1 = __webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js");
exports.useKeyPress = useKeyPress_1.default;
var useKeyPressEvent_1 = __webpack_require__(/*! ./useKeyPressEvent */ "../../../node_modules/react-use/lib/useKeyPressEvent.js");
exports.useKeyPressEvent = useKeyPressEvent_1.default;
var useLifecycles_1 = __webpack_require__(/*! ./useLifecycles */ "../../../node_modules/react-use/lib/useLifecycles.js");
exports.useLifecycles = useLifecycles_1.default;
var useList_1 = __webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js");
exports.useList = useList_1.default;
var useLocalStorage_1 = __webpack_require__(/*! ./useLocalStorage */ "../../../node_modules/react-use/lib/useLocalStorage.js");
exports.useLocalStorage = useLocalStorage_1.default;
var useLocation_1 = __webpack_require__(/*! ./useLocation */ "../../../node_modules/react-use/lib/useLocation.js");
exports.useLocation = useLocation_1.default;
var useLockBodyScroll_1 = __webpack_require__(/*! ./useLockBodyScroll */ "../../../node_modules/react-use/lib/useLockBodyScroll.js");
exports.useLockBodyScroll = useLockBodyScroll_1.default;
var useLogger_1 = __webpack_require__(/*! ./useLogger */ "../../../node_modules/react-use/lib/useLogger.js");
exports.useLogger = useLogger_1.default;
var useLongPress_1 = __webpack_require__(/*! ./useLongPress */ "../../../node_modules/react-use/lib/useLongPress.js");
exports.useLongPress = useLongPress_1.default;
var useMap_1 = __webpack_require__(/*! ./useMap */ "../../../node_modules/react-use/lib/useMap.js");
exports.useMap = useMap_1.default;
var useMedia_1 = __webpack_require__(/*! ./useMedia */ "../../../node_modules/react-use/lib/useMedia.js");
exports.useMedia = useMedia_1.default;
var useMediaDevices_1 = __webpack_require__(/*! ./useMediaDevices */ "../../../node_modules/react-use/lib/useMediaDevices.js");
exports.useMediaDevices = useMediaDevices_1.default;
var useMediatedState_1 = __webpack_require__(/*! ./useMediatedState */ "../../../node_modules/react-use/lib/useMediatedState.js");
exports.useMediatedState = useMediatedState_1.useMediatedState;
var useMethods_1 = __webpack_require__(/*! ./useMethods */ "../../../node_modules/react-use/lib/useMethods.js");
exports.useMethods = useMethods_1.default;
var useMotion_1 = __webpack_require__(/*! ./useMotion */ "../../../node_modules/react-use/lib/useMotion.js");
exports.useMotion = useMotion_1.default;
var useMount_1 = __webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js");
exports.useMount = useMount_1.default;
var useMountedState_1 = __webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js");
exports.useMountedState = useMountedState_1.default;
var useMouse_1 = __webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js");
exports.useMouse = useMouse_1.default;
var useMouseHovered_1 = __webpack_require__(/*! ./useMouseHovered */ "../../../node_modules/react-use/lib/useMouseHovered.js");
exports.useMouseHovered = useMouseHovered_1.default;
var useNetwork_1 = __webpack_require__(/*! ./useNetwork */ "../../../node_modules/react-use/lib/useNetwork.js");
exports.useNetwork = useNetwork_1.default;
var useNumber_1 = __webpack_require__(/*! ./useNumber */ "../../../node_modules/react-use/lib/useNumber.js");
exports.useNumber = useNumber_1.default;
var useObservable_1 = __webpack_require__(/*! ./useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
exports.useObservable = useObservable_1.default;
var useOrientation_1 = __webpack_require__(/*! ./useOrientation */ "../../../node_modules/react-use/lib/useOrientation.js");
exports.useOrientation = useOrientation_1.default;
var usePageLeave_1 = __webpack_require__(/*! ./usePageLeave */ "../../../node_modules/react-use/lib/usePageLeave.js");
exports.usePageLeave = usePageLeave_1.default;
var usePermission_1 = __webpack_require__(/*! ./usePermission */ "../../../node_modules/react-use/lib/usePermission.js");
exports.usePermission = usePermission_1.default;
var usePrevious_1 = __webpack_require__(/*! ./usePrevious */ "../../../node_modules/react-use/lib/usePrevious.js");
exports.usePrevious = usePrevious_1.default;
var usePreviousDistinct_1 = __webpack_require__(/*! ./usePreviousDistinct */ "../../../node_modules/react-use/lib/usePreviousDistinct.js");
exports.usePreviousDistinct = usePreviousDistinct_1.default;
var usePromise_1 = __webpack_require__(/*! ./usePromise */ "../../../node_modules/react-use/lib/usePromise.js");
exports.usePromise = usePromise_1.default;
var useQueue_1 = __webpack_require__(/*! ./useQueue */ "../../../node_modules/react-use/lib/useQueue.js");
exports.useQueue = useQueue_1.default;
var useRaf_1 = __webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js");
exports.useRaf = useRaf_1.default;
var useRafLoop_1 = __webpack_require__(/*! ./useRafLoop */ "../../../node_modules/react-use/lib/useRafLoop.js");
exports.useRafLoop = useRafLoop_1.default;
var useRafState_1 = __webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js");
exports.useRafState = useRafState_1.default;
var useSearchParam_1 = __webpack_require__(/*! ./useSearchParam */ "../../../node_modules/react-use/lib/useSearchParam.js");
exports.useSearchParam = useSearchParam_1.default;
var useScroll_1 = __webpack_require__(/*! ./useScroll */ "../../../node_modules/react-use/lib/useScroll.js");
exports.useScroll = useScroll_1.default;
var useScrolling_1 = __webpack_require__(/*! ./useScrolling */ "../../../node_modules/react-use/lib/useScrolling.js");
exports.useScrolling = useScrolling_1.default;
var useSessionStorage_1 = __webpack_require__(/*! ./useSessionStorage */ "../../../node_modules/react-use/lib/useSessionStorage.js");
exports.useSessionStorage = useSessionStorage_1.default;
var useSetState_1 = __webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js");
exports.useSetState = useSetState_1.default;
var useShallowCompareEffect_1 = __webpack_require__(/*! ./useShallowCompareEffect */ "../../../node_modules/react-use/lib/useShallowCompareEffect.js");
exports.useShallowCompareEffect = useShallowCompareEffect_1.default;
var useSize_1 = __webpack_require__(/*! ./useSize */ "../../../node_modules/react-use/lib/useSize.js");
exports.useSize = useSize_1.default;
var useSlider_1 = __webpack_require__(/*! ./useSlider */ "../../../node_modules/react-use/lib/useSlider.js");
exports.useSlider = useSlider_1.default;
var useSpeech_1 = __webpack_require__(/*! ./useSpeech */ "../../../node_modules/react-use/lib/useSpeech.js");
exports.useSpeech = useSpeech_1.default;
// not exported because of peer dependency
// export { default as useSpring } from './useSpring';
var useStartTyping_1 = __webpack_require__(/*! ./useStartTyping */ "../../../node_modules/react-use/lib/useStartTyping.js");
exports.useStartTyping = useStartTyping_1.default;
var useStateWithHistory_1 = __webpack_require__(/*! ./useStateWithHistory */ "../../../node_modules/react-use/lib/useStateWithHistory.js");
exports.useStateWithHistory = useStateWithHistory_1.useStateWithHistory;
var useStateList_1 = __webpack_require__(/*! ./useStateList */ "../../../node_modules/react-use/lib/useStateList.js");
exports.useStateList = useStateList_1.default;
var useThrottle_1 = __webpack_require__(/*! ./useThrottle */ "../../../node_modules/react-use/lib/useThrottle.js");
exports.useThrottle = useThrottle_1.default;
var useThrottleFn_1 = __webpack_require__(/*! ./useThrottleFn */ "../../../node_modules/react-use/lib/useThrottleFn.js");
exports.useThrottleFn = useThrottleFn_1.default;
var useTimeout_1 = __webpack_require__(/*! ./useTimeout */ "../../../node_modules/react-use/lib/useTimeout.js");
exports.useTimeout = useTimeout_1.default;
var useTimeoutFn_1 = __webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js");
exports.useTimeoutFn = useTimeoutFn_1.default;
var useTitle_1 = __webpack_require__(/*! ./useTitle */ "../../../node_modules/react-use/lib/useTitle.js");
exports.useTitle = useTitle_1.default;
var useToggle_1 = __webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js");
exports.useToggle = useToggle_1.default;
var useTween_1 = __webpack_require__(/*! ./useTween */ "../../../node_modules/react-use/lib/useTween.js");
exports.useTween = useTween_1.default;
var useUnmount_1 = __webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js");
exports.useUnmount = useUnmount_1.default;
var useUnmountPromise_1 = __webpack_require__(/*! ./useUnmountPromise */ "../../../node_modules/react-use/lib/useUnmountPromise.js");
exports.useUnmountPromise = useUnmountPromise_1.default;
var useUpdate_1 = __webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js");
exports.useUpdate = useUpdate_1.default;
var useUpdateEffect_1 = __webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js");
exports.useUpdateEffect = useUpdateEffect_1.default;
var useUpsert_1 = __webpack_require__(/*! ./useUpsert */ "../../../node_modules/react-use/lib/useUpsert.js");
exports.useUpsert = useUpsert_1.default;
var useVibrate_1 = __webpack_require__(/*! ./useVibrate */ "../../../node_modules/react-use/lib/useVibrate.js");
exports.useVibrate = useVibrate_1.default;
var useVideo_1 = __webpack_require__(/*! ./useVideo */ "../../../node_modules/react-use/lib/useVideo.js");
exports.useVideo = useVideo_1.default;
var useStateValidator_1 = __webpack_require__(/*! ./useStateValidator */ "../../../node_modules/react-use/lib/useStateValidator.js");
exports.useStateValidator = useStateValidator_1.default;
var useScrollbarWidth_1 = __webpack_require__(/*! ./useScrollbarWidth */ "../../../node_modules/react-use/lib/useScrollbarWidth.js");
exports.useScrollbarWidth = useScrollbarWidth_1.useScrollbarWidth;
var useMultiStateValidator_1 = __webpack_require__(/*! ./useMultiStateValidator */ "../../../node_modules/react-use/lib/useMultiStateValidator.js");
exports.useMultiStateValidator = useMultiStateValidator_1.useMultiStateValidator;
var useWindowScroll_1 = __webpack_require__(/*! ./useWindowScroll */ "../../../node_modules/react-use/lib/useWindowScroll.js");
exports.useWindowScroll = useWindowScroll_1.default;
var useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ "../../../node_modules/react-use/lib/useWindowSize.js");
exports.useWindowSize = useWindowSize_1.default;
var useMeasure_1 = __webpack_require__(/*! ./useMeasure */ "../../../node_modules/react-use/lib/useMeasure.js");
exports.useMeasure = useMeasure_1.default;
var useRendersCount_1 = __webpack_require__(/*! ./useRendersCount */ "../../../node_modules/react-use/lib/useRendersCount.js");
exports.useRendersCount = useRendersCount_1.useRendersCount;
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
exports.useFirstMountState = useFirstMountState_1.useFirstMountState;
var useSet_1 = __webpack_require__(/*! ./useSet */ "../../../node_modules/react-use/lib/useSet.js");
exports.useSet = useSet_1.default;
var createGlobalState_1 = __webpack_require__(/*! ./createGlobalState */ "../../../node_modules/react-use/lib/createGlobalState.js");
exports.createGlobalState = createGlobalState_1.createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsync.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsync.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useAsyncFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js"));
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
exports.default = useAsync;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncFn.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncFn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var isMounted = useMountedState_1.default();
    var callback = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set({ loading: true });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports.default = useAsyncFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncRetry.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncRetry.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useAsync_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js"));
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1.useCallback(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1.__spreadArrays(deps, [stateLoading]));
    return tslib_1.__assign(tslib_1.__assign({}, state), { retry: retry });
};
exports.default = useAsyncRetry;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAudio.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAudio.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useAudio = createHTMLMediaHook_1.default('audio');
exports.default = useAudio;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBattery.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBattery.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect;
var nav = typeof navigator === 'object' ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !util_1.isDeepEqual(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1.on(battery, 'chargingchange', handleChange);
            util_1.on(battery, 'chargingtimechange', handleChange);
            util_1.on(battery, 'dischargingtimechange', handleChange);
            util_1.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1.off(battery, 'chargingchange', handleChange);
                util_1.off(battery, 'chargingtimechange', handleChange);
                util_1.off(battery, 'dischargingtimechange', handleChange);
                util_1.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
exports.default = isBatteryApiSupported ? useBattery : useBatteryMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBeforeUnload.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBeforeUnload.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [enabled, handler]);
};
exports.default = useBeforeUnload;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBoolean.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBoolean.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useToggle_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js"));
exports.default = useToggle_1.default;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useClickAway.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useClickAway.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = react_1.useRef(onClickAway);
    react_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
exports.default = useClickAway;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var js_cookie_1 = tslib_1.__importDefault(__webpack_require__(/*! js-cookie */ "../../../node_modules/js-cookie/src/js.cookie.js"));
var useCookie = function (cookieName) {
    var _a = react_1.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
exports.default = useCookie;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCopyToClipboard.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCopyToClipboard.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var copy_to_clipboard_1 = tslib_1.__importDefault(__webpack_require__(/*! copy-to-clipboard */ "../../../node_modules/copy-to-clipboard/index.js"));
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1.default();
    var _a = useSetState_1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1.useCallback(function (value) {
        try {
            if (true) {
                if (typeof value !== 'string') {
                    console.error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                }
            }
            var noUserInteraction = copy_to_clipboard_1.default(value);
            if (!isMounted()) {
                return;
            }
            setState({
                value: value,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            if (!isMounted()) {
                return;
            }
            setState({
                value: undefined,
                error: error,
                noUserInteraction: true,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
exports.default = useCopyToClipboard;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCounter.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCounter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGetSet_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = resolveHookState_1.resolveHookState(initialValue);
    typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = resolveHookState_1.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = resolveHookState_1.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
exports.default = useCounter;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCss.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCss.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nano_css_1 = __webpack_require__(/*! nano-css */ "../../../node_modules/nano-css/index.js");
var cssom_1 = __webpack_require__(/*! nano-css/addon/cssom */ "../../../node_modules/nano-css/addon/cssom.js");
var vcssom_1 = __webpack_require__(/*! nano-css/addon/vcssom */ "../../../node_modules/nano-css/addon/vcssom.js");
var cssToTree_1 = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js");
var react_1 = __webpack_require__(/*! react */ "react");
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1.useMemo(function () { return new nano.VSheet(); }, []);
    react_1.useLayoutEffect(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
exports.default = useCss;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCustomCompareEffect.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCustomCompareEffect.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports.default = useCustomCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDebounce.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDebounce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1.useEffect(reset, deps);
    return [isReady, cancel];
}
exports.default = useDebounce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDeepCompareEffect.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDeepCompareEffect.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, util_1.isDeepEqual);
};
exports.default = useDeepCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDefault.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDefault.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
exports.default = useDefault;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDrop.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDrop.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useState = React.useState, useMemo = React.useMemo, useCallback = React.useCallback, useEffect = React.useEffect;
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = useCallback(setOverRaw, []);
    var process = useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        document.addEventListener('dragover', onDragOver);
        document.addEventListener('dragenter', onDragEnter);
        document.addEventListener('dragleave', onDragLeave);
        document.addEventListener('dragexit', onDragExit);
        document.addEventListener('drop', onDrop);
        if (onText) {
            document.addEventListener('paste', onPaste);
        }
        return function () {
            document.removeEventListener('dragover', onDragOver);
            document.removeEventListener('dragenter', onDragEnter);
            document.removeEventListener('dragleave', onDragLeave);
            document.removeEventListener('dragexit', onDragExit);
            document.removeEventListener('drop', onDrop);
            document.removeEventListener('paste', onPaste);
        };
    }, tslib_1.__spreadArrays([process], args));
    return { over: over };
};
exports.default = useDrop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDropArea.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDropArea.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
exports.default = useDropArea;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEffectOnce.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEffectOnce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports.default = useEffectOnce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEnsuredForwardedRef.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1.useRef(forwardedRef && forwardedRef.current);
    react_1.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
exports.default = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
exports.ensuredForwardRef = ensuredForwardRef;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useError.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useError.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useError = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    react_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports.default = useError;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEvent.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEvent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultTarget = util_1.isClient ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            target.addEventListener(name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                target.removeEventListener(name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
exports.default = useEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFavicon.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFavicon.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFavicon = function (href) {
    react_1.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
exports.default = useFavicon;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFirstMountState.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFirstMountState.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useFirstMountState() {
    var isFirst = react_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFullscreen.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFullscreen.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var screenfull_1 = tslib_1.__importDefault(__webpack_require__(/*! screenfull */ "../../../node_modules/screenfull/dist/screenfull.js"));
var noop = function () { };
var useFullscreen = function (ref, on, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
    var _b = react_1.useState(on), isFullscreen = _b[0], setIsFullscreen = _b[1];
    react_1.useLayoutEffect(function () {
        if (!on) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            video.current.addEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [on, video, ref]);
    return isFullscreen;
};
exports.default = useFullscreen;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGeolocation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGeolocation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGeolocation = function (options) {
    var _a = react_1.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
exports.default = useGeolocation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSet.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSet.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useGetSet(initialState) {
    var state = react_1.useRef(resolveHookState_1.resolveHookState(initialState));
    var update = useUpdate_1.default();
    return react_1.useMemo(function () { return [
        // get
        function () { return state.current; },
        // set
        function (newState) {
            state.current = resolveHookState_1.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
exports.default = useGetSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSetState.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSetState.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = useUpdate_1.default();
    var state = react_1.useRef(tslib_1.__assign({}, initialState));
    var get = react_1.useCallback(function () { return state.current; }, []);
    var set = react_1.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
exports.default = useGetSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHarmonicIntervalFn.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var set_harmonic_interval_1 = __webpack_require__(/*! set-harmonic-interval */ "../../../node_modules/set-harmonic-interval/lib/index.js");
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useHarmonicIntervalFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHover.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHover.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useState = React.useState;
var noop = function () { };
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
exports.default = useHover;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHoverDirty.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHoverDirty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                current.removeEventListener('mouseover', onMouseOver);
                current.removeEventListener('mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
exports.default = useHoverDirty;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIdle.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIdle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ "../../../node_modules/throttle-debounce/index.umd.js");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1.on(window, events[i], onEvent);
        }
        util_1.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1.off(window, events[i], onEvent);
            }
            util_1.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
exports.default = useIdle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIntersection.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIntersection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useIntersection = function (ref, options) {
    var _a = react_1.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
exports.default = useIntersection;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useInterval.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useInterval.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useInterval;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
exports.default = useIsomorphicLayoutEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKey.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKey.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEvent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js"));
var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports.default = useKey;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPress.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useKey_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js"));
var useKeyPress = function (keyFilter) {
    var _a = react_1.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
exports.default = useKeyPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPressEvent.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPressEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useKeyPress_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
exports.default = useKeyPressEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLifecycles.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLifecycles.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useLifecycles = function (mount, unmount) {
    react_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports.default = useLifecycles;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useList.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useList.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1.useRef(resolveHookState_1.resolveHookState(initialList));
    var update = useUpdate_1.default();
    var actions = react_1.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = resolveHookState_1.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(resolveHookState_1.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
exports.default = useList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocalStorage.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocalStorage.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    // Use provided serializer/deserializer or the default ones
    var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
    var deserializer = options ? (options.raw ? String : options.deserializer) : JSON.parse;
    var _a = react_1.useState(function () {
        try {
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            localStorage.setItem(key, serializer(state));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [state]);
    return [state, setState];
};
exports.default = useLocalStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocation.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var patchHistoryMethod = function (method) {
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1.isClient) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var state = history.state, length = history.length;
    var hash = location.hash, host = location.host, hostname = location.hostname, href = location.href, origin = location.origin, pathname = location.pathname, port = location.port, protocol = location.protocol, search = location.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1.on(window, 'popstate', onPopstate);
        util_1.on(window, 'pushstate', onPushstate);
        util_1.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1.off(window, 'popstate', onPopstate);
            util_1.off(window, 'pushstate', onPushstate);
            util_1.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
exports.default = util_1.isClient && hasEventConstructor ? useLocationBrowser : useLocationServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLockBodyScroll.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLockBodyScroll.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
exports.default = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        elementRef = elementRef || react_1.useRef(doc.body);
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            var bodyInfo = bodies.get(body);
            if (locked) {
                if (!bodyInfo) {
                    bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                    if (isIosDevice) {
                        if (!documentListenerAdded) {
                            document.addEventListener('touchmove', preventDefault, { passive: false });
                            documentListenerAdded = true;
                        }
                    }
                    else {
                        body.style.overflow = 'hidden';
                    }
                }
                else {
                    bodies.set(body, { counter: bodyInfo.counter + 1, initialOverflow: bodyInfo.initialOverflow });
                }
            }
            else {
                if (bodyInfo) {
                    if (bodyInfo.counter === 1) {
                        bodies.delete(body);
                        if (isIosDevice) {
                            body.ontouchmove = null;
                            if (documentListenerAdded) {
                                document.removeEventListener('touchmove', preventDefault);
                                documentListenerAdded = false;
                            }
                        }
                        else {
                            body.style.overflow = bodyInfo.initialOverflow;
                        }
                    }
                    else {
                        bodies.set(body, { counter: bodyInfo.counter - 1, initialOverflow: bodyInfo.initialOverflow });
                    }
                }
            }
        }, [locked, elementRef.current]);
    };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLogger.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLogger.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " updated"], rest));
    });
};
exports.default = useLogger;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLongPress.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLongPress.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isTouchEvent = function (event) {
    return 'touches' in event;
};
var preventDefault = function (event) {
    if (!isTouchEvent(event))
        return;
    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1.useRef();
    var target = react_1.useRef();
    var start = react_1.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay]);
    var clear = react_1.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, []);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
exports.default = useLongPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMap.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1.__assign({ get: react_1.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
exports.default = useMap;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMeasure.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMeasure.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var resize_observer_polyfill_1 = tslib_1.__importDefault(__webpack_require__(/*! resize-observer-polyfill */ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js"));
var useMeasure = function () {
    var _a = react_1.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), rect = _a[0], set = _a[1];
    var observer = react_1.useState(function () {
        return new resize_observer_polyfill_1.default(function (entries) {
            var entry = entries[0];
            if (entry) {
                set(entry.contentRect);
            }
        });
    })[0];
    var ref = react_1.useCallback(function (node) {
        observer.disconnect();
        if (node) {
            observer.observe(node);
        }
    }, [observer]);
    return [ref, rect];
};
exports.default = useMeasure;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMedia.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMedia.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = react_1.useState(util_1.isClient ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
exports.default = useMedia;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediaDevices.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediaDevices.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var useMediaDevices = function () {
    var _a = react_1.useState({}), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({ deviceId: deviceId, groupId: groupId, kind: kind, label: label });
                        }),
                    });
                }
            })
                .catch(noop);
        };
        util_1.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
exports.default = typeof navigator === 'object' && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediatedState.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediatedState.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1.useRef(mediator);
    var _a = react_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMethods.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMethods.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useMethods = function (createMethods, initialState) {
    var reducer = react_1.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
exports.default = useMethods;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMotion.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMotion.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1.on(window, 'devicemotion', handler);
        return function () {
            util_1.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
exports.default = useMotion;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMount.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMount.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useMount = function (fn) {
    useEffectOnce_1.default(function () {
        fn();
    });
};
exports.default = useMount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMountedState.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMountedState.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}
exports.default = useMountedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouse.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
exports.default = useMouse;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouseHovered.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouseHovered.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useHoverDirty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js"));
var useMouse_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js"));
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
exports.default = useMouseHovered;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMultiStateValidator.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMultiStateValidator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1.useRef(validator);
    var statesInner = react_1.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
exports.useMultiStateValidator = useMultiStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNetwork.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNetwork.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var getConnection = function () {
    if (typeof navigator !== 'object') {
        return null;
    }
    var nav = navigator;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var getConnectionState = function () {
    var connection = getConnection();
    if (!connection) {
        return {};
    }
    var downlink = connection.downlink, downlinkMax = connection.downlinkMax, effectiveType = connection.effectiveType, type = connection.type, rtt = connection.rtt;
    return {
        downlink: downlink,
        downlinkMax: downlinkMax,
        effectiveType: effectiveType,
        type: type,
        rtt: rtt,
    };
};
var useNetwork = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var localState = state;
        var localSetState = function (patch) {
            localState = tslib_1.__assign(tslib_1.__assign({}, localState), patch);
            setState(localState);
        };
        var connection = getConnection();
        var onOnline = function () {
            localSetState({
                online: true,
                since: new Date(),
            });
        };
        var onOffline = function () {
            localSetState({
                online: false,
                since: new Date(),
            });
        };
        var onConnectionChange = function () {
            localSetState(getConnectionState());
        };
        util_1.on(window, 'online', onOnline);
        util_1.on(window, 'offline', onOffline);
        if (connection) {
            util_1.on(connection, 'change', onConnectionChange);
            localSetState(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, state), { online: navigator.onLine, since: undefined }), getConnectionState()));
        }
        return function () {
            util_1.off(window, 'online', onOnline);
            util_1.off(window, 'offline', onOffline);
            if (connection) {
                util_1.off(connection, 'change', onConnectionChange);
            }
        };
    }, []);
    return state;
};
exports.default = useNetwork;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNumber.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNumber.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useCounter_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js"));
exports.default = useCounter_1.default;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useObservable.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useObservable.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js"));
function useObservable(observable$, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
exports.default = useObservable;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useOrientation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useOrientation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
exports.default = useOrientation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePageLeave.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePageLeave.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
exports.default = usePageLeave;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePermission.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePermission.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = react_1.useState(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        util_1.on(permissionStatus, 'change', onChange);
    };
    react_1.useEffect(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
exports.default = usePermission;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePrevious.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePrevious.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var usePrevious = function (state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
};
exports.default = usePrevious;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePreviousDistinct.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePreviousDistinct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1.useRef();
    var curRef = react_1.useRef(value);
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
exports.default = usePreviousDistinct;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePromise.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePromise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return react_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports.default = usePromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useQueue.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useQueue.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
exports.default = useQueue;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRaf.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRaf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1.useState(0), elapsed = _a[0], set = _a[1];
    react_1.useLayoutEffect(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
exports.default = useRaf;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafLoop.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafLoop.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useRafLoop(callback) {
    var raf = react_1.useRef(null);
    var _a = react_1.useState(true), isActive = _a[0], setIsActive = _a[1];
    function loopStep() {
        callback();
        raf.current = requestAnimationFrame(loopStep);
    }
    function loopStop() {
        setIsActive(false);
    }
    function loopStart() {
        setIsActive(true);
    }
    function clearCurrentLoop() {
        raf.current && cancelAnimationFrame(raf.current);
    }
    react_1.useEffect(function () { return clearCurrentLoop; }, []);
    react_1.useEffect(function () {
        clearCurrentLoop();
        isActive && (raf.current = requestAnimationFrame(loopStep));
        return clearCurrentLoop;
    }, [isActive, callback]);
    return [loopStop, isActive, loopStart];
}
exports.default = useRafLoop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useRafState = function (initialState) {
    var frame = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports.default = useRafState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRendersCount.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRendersCount.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useRendersCount() {
    return ++react_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScroll.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScroll.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            ref.current.addEventListener('scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
exports.default = useScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrollbarWidth.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrollbarWidth.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var scrollbar_width_1 = __webpack_require__(/*! @xobotyi/scrollbar-width */ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js");
var react_1 = __webpack_require__(/*! react */ "react");
function useScrollbarWidth() {
    var _a = react_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrolling.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrolling.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useScrolling = function (ref) {
    var _a = react_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports.default = useScrolling;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSearchParam.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSearchParam.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var _a = react_1.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        window.addEventListener('popstate', onChange);
        window.addEventListener('pushstate', onChange);
        window.addEventListener('replacestate', onChange);
        return function () {
            window.removeEventListener('popstate', onChange);
            window.removeEventListener('pushstate', onChange);
            window.removeEventListener('replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
exports.default = typeof window === 'object' ? useSearchParam : useSearchParamServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSessionStorage.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSessionStorage.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    var _a = react_1.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports.default = useSessionStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSet.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSet.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); }); };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = tslib_1.__assign({ has: react_1.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
exports.default = useSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSetState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSetState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
exports.default = useSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useShallowCompareEffect.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useShallowCompareEffect.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var fast_shallow_equal_1 = __webpack_require__(/*! fast-shallow-equal */ "../../../node_modules/fast-shallow-equal/index.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports.default = useShallowCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSize.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1.isClient) {
        return [typeof element === 'function' ? element({ width: width, height: height }) : element, { width: width, height: height }];
    }
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        windowToListenOn.addEventListener('resize', setSize);
        DRAF(setSize);
    };
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                iframe.removeEventListener('load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            iframe.addEventListener('load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                window.removeEventListener('resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1.__spreadArrays([element,
        { style: style }], tslib_1.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
exports.default = useSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSlider.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSlider.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var noop = function () { };
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || noop)();
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports.default = useSlider;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSpeech.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSpeech.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useMount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var voices = typeof window === 'object' && typeof window.speechSynthesis === 'object' ? window.speechSynthesis.getVoices() : [];
var useSpeech = function (text, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = useSetState_1.default({
        isPlaying: false,
        lang: opts.lang || 'default',
        voice: opts.voice || voices[0],
        rate: opts.rate || 1,
        pitch: opts.pitch || 1,
        volume: opts.volume || 1,
    }), state = _a[0], setState = _a[1];
    var uterranceRef = react_1.useRef(null);
    useMount_1.default(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        opts.lang && (utterance.lang = opts.lang);
        opts.voice && (utterance.voice = opts.voice);
        utterance.rate = opts.rate || 1;
        utterance.pitch = opts.pitch || 1;
        utterance.volume = opts.volume || 1;
        utterance.onstart = function () { return setState({ isPlaying: true }); };
        utterance.onresume = function () { return setState({ isPlaying: true }); };
        utterance.onend = function () { return setState({ isPlaying: false }); };
        utterance.onpause = function () { return setState({ isPlaying: false }); };
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    });
    return state;
};
exports.default = useSpeech;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStartTyping.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStartTyping.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    react_1.useLayoutEffect(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        document.addEventListener('keydown', keydown);
        return function () {
            document.removeEventListener('keydown', keydown);
        };
    }, []);
};
exports.default = useStartTyping;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateList.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateList.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1.default();
    var index = react_1.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1.__assign({ state: stateSet[index.current], currentIndex: index.current }, actions);
}
exports.default = useStateList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateValidator.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateValidator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1.useRef(validator);
    var stateInner = react_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports.default = useStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateWithHistory.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateWithHistory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = resolveHookState_1.resolveHookState(newState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
exports.useStateWithHistory = useStateWithHistory;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottle.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(0);
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottleFn.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottleFn.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextArgs = react_1.useRef();
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottleFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeout.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeout.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
exports.default = useTimeout;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeoutFn.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeoutFn.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1.useRef(false);
    var timeout = react_1.useRef();
    var callback = react_1.useRef(fn);
    var isReady = react_1.useCallback(function () { return ready.current; }, []);
    var set = react_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports.default = useTimeoutFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTitle.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTitle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1.useRef(document.title);
    document.title = title;
    react_1.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
exports.default = typeof document !== 'undefined' ? useTitle : function (_title) { };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useToggle.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useToggle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useToggle = function (initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    var toggle = react_1.useCallback(function (nextValue) {
        if (typeof nextValue === 'boolean') {
            setValue(nextValue);
        }
        else {
            setValue(function (currentValue) { return !currentValue; });
        }
    }, [setValue]);
    return [value, toggle];
};
exports.default = useToggle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTween.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTween.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var ts_easing_1 = __webpack_require__(/*! ts-easing */ "../../../node_modules/ts-easing/lib/index.js");
var useRaf_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js"));
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing_1.easing).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
exports.default = useTween;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmount.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmount.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUnmount = function (fn) {
    var fnRef = react_1.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1.default(function () { return function () { return fnRef.current(); }; });
};
exports.default = useUnmount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmountPromise.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmountPromise.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmountPromise = function () {
    var refUnmounted = react_1.useRef(false);
    react_1.useEffect(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
exports.default = useUnmountPromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdate.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdate.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var incrementParameter = function (num) { return ++num % 1000000; };
var useUpdate = function () {
    var _a = react_1.useState(0), setState = _a[1];
    // useCallback with empty deps as we only want to define updateCb once
    return react_1.useCallback(function () { return setState(incrementParameter); }, []);
};
exports.default = useUpdate;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdateEffect.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdateEffect.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    react_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports.default = useUpdateEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpsert.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpsert.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useList_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js"));
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1.__assign(tslib_1.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
exports.default = useUpsert;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVibrate.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVibrate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isVibrationApiSupported = typeof navigator === 'object' && 'vibrate' in navigator;
var useVibrateMock = function () { };
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
exports.default = isVibrationApiSupported ? useVibrate : useVibrateMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVideo.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVideo.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useVideo = createHTMLMediaHook_1.default('video');
exports.default = useVideo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowScroll.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowScroll.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useWindowScroll = function () {
    var _a = useRafState_1.default({
        x: util_1.isClient ? window.pageXOffset : 0,
        y: util_1.isClient ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
exports.default = useWindowScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowSize.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowSize.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = useRafState_1.default({
        width: util_1.isClient ? window.innerWidth : initialWidth,
        height: util_1.isClient ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener('resize', handler_1);
            return function () {
                window.removeEventListener('resize', handler_1);
            };
        }
    }, []);
    return state;
};
exports.default = useWindowSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isClient = typeof window === 'object';
exports.on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
exports.off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
exports.isDeepEqual = __webpack_require__(/*! fast-deep-equal/react */ "../../../node_modules/fast-deep-equal/react.js");


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/createHTMLMediaHook.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ../useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(/*! ./parseTimeRanges */ "../../../node_modules/react-use/lib/util/parseTimeRanges.js"));
var createHTMLMediaHook = function (tag) {
    var hook = function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPause = function () { return setState({ paused: true }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    console.error('useAudio() ref to <audio> element is empty at mount. ' +
                        'It seem you have not rendered the audio element, which is ' +
                        'returns as the first argument const [audio] = useAudio(...).');
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
    return hook;
};
exports.default = createHTMLMediaHook;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/parseTimeRanges.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/parseTimeRanges.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parseTimeRanges = function (ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
};
exports.default = parseTimeRanges;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/resolveHookState.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/resolveHookState.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resolveHookState(newState, currentState) {
    if (typeof newState === 'function') {
        return newState(currentState);
    }
    return newState;
}
exports.resolveHookState = resolveHookState;


/***/ }),

/***/ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/resize-observer-polyfill/dist/ResizeObserver.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;
                    return true;
                }
                return false;
            });
            return result;
        }
        return /** @class */ (function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function () {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                }
                else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) { ctx = null; }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }
        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }
        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }
        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }
        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    function throttle (callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;
                callback();
            }
            if (trailingCall) {
                proxy();
            }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            }
            else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
        }
        return proxy;
    }

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;
    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */
        ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
                this.connect_();
            }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */
        ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
                observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
                this.disconnect_();
            }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */
        ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
                this.refresh();
            }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */
        ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
                return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
                return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                document.addEventListener('DOMSubtreeModified', this.refresh);
                this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
                return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
                document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */
        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
                return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
                this.refresh();
            }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */
        ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */
        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
    }());

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
        }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
        }
        return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width), height = toFloat(styles.height);
        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }
        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }
        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
            typeof target.getBBox === 'function'); };
    })();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });
        return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */
        ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight);
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */
        ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
        };
        return ResizeObservation;
    }());

    var ResizeObserverEntry = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
        }
        return ResizeObserverEntry;
    }());

    var ResizeObserverSPI = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
                return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
                return;
            }
            observations.delete(target);
            if (!observations.size) {
                this.controller_.removeObserver(this);
            }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
                if (observation.isActive()) {
                    _this.activeObservations_.push(observation);
                }
            });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
                return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */
        ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
        };
        return ResizeObserverSPI;
    }());

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
                throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
        }
        return ResizeObserver;
    }());
    // Expose public methods of ResizeObserver.
    [
        'observe',
        'unobserve',
        'disconnect'
    ].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }
        return ResizeObserver;
    })();

    return index;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/screenfull/dist/screenfull.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/screenfull/dist/screenfull.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "../../../node_modules/set-harmonic-interval/lib/index.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/set-harmonic-interval/lib/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};

exports.clearHarmonicInterval = clearHarmonicInterval;
exports.setHarmonicInterval = setHarmonicInterval;


/***/ }),

/***/ "../../../node_modules/throttle-debounce/index.umd.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/throttle-debounce/index.umd.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "../../../node_modules/toggle-selection/index.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/toggle-selection/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "../../../node_modules/ts-easing/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/ts-easing/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visDefaultEditor!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visDefaultEditor!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visDefaultEditor']

/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visDefaultEditor_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visDefaultEditor!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visDefaultEditor!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visDefaultEditor_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visDefaultEditor_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visDefaultEditor/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_default_editor/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/agg_filters/agg_type_field_filters.ts":
/*!******************************************************!*\
  !*** ./public/agg_filters/agg_type_field_filters.ts ***!
  \******************************************************/
/*! exports provided: filterAggTypeFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAggTypeFields", function() { return filterAggTypeFields; });
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

const filters = [
/**
 * Check index pattern aggregation restrictions
 * and limit available fields for a given aggType based on that.
 */
(field, aggConfig) => {
  const indexPattern = aggConfig.getIndexPattern();
  const aggRestrictions = indexPattern.getAggregationRestrictions();
  if (!aggRestrictions) {
    return true;
  }
  const aggName = aggConfig.type && aggConfig.type.name;
  const aggFields = aggRestrictions[aggName];
  return !!aggFields && !!aggFields[field.name];
}];
function filterAggTypeFields(fields, aggConfig) {
  const allowedAggTypeFields = fields.filter(field => {
    const isAggTypeFieldAllowed = filters.every(filter => filter(field, aggConfig));
    return isAggTypeFieldAllowed;
  });
  return allowedAggTypeFields;
}

/***/ }),

/***/ "./public/agg_filters/agg_type_filters.ts":
/*!************************************************!*\
  !*** ./public/agg_filters/agg_type_filters.ts ***!
  \************************************************/
/*! exports provided: filterAggTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAggTypes", function() { return filterAggTypes; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
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


const {
  propFilter
} = _data_public__WEBPACK_IMPORTED_MODULE_0__["search"].aggs;
const filterByName = propFilter('name');
const filters = [
/**
 * This filter checks the defined aggFilter in the schemas of that visualization
 * and limits available aggregations based on that.
 */
(aggType, indexPattern, aggConfig, aggFilter) => {
  const doesSchemaAllowAggType = filterByName([aggType], aggFilter).length !== 0;
  return doesSchemaAllowAggType;
},
/**
 * Check index pattern aggregation restrictions and limit available aggTypes.
 */
(aggType, indexPattern, aggConfig, aggFilter) => {
  const aggRestrictions = indexPattern.getAggregationRestrictions();
  if (!aggRestrictions) {
    return true;
  }
  const aggName = aggType.name;
  // Only return agg types which are specified in the agg restrictions,
  // except for `count` which should always be returned.
  return aggName === 'count' || !!aggRestrictions && Object.keys(aggRestrictions).includes(aggName) || false;
}];
function filterAggTypes(aggTypes, indexPattern, aggConfig, aggFilter) {
  const allowedAggTypes = aggTypes.filter(aggType => {
    const isAggTypeAllowed = filters.every(filter => filter(aggType, indexPattern, aggConfig, aggFilter));
    return isAggTypeAllowed;
  });
  return allowedAggTypes;
}

/***/ }),

/***/ "./public/agg_filters/index.ts":
/*!*************************************!*\
  !*** ./public/agg_filters/index.ts ***!
  \*************************************/
/*! exports provided: filterAggTypes, filterAggTypeFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agg_type_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agg_type_filters */ "./public/agg_filters/agg_type_filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAggTypes", function() { return _agg_type_filters__WEBPACK_IMPORTED_MODULE_0__["filterAggTypes"]; });

/* harmony import */ var _agg_type_field_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agg_type_field_filters */ "./public/agg_filters/agg_type_field_filters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAggTypeFields", function() { return _agg_type_field_filters__WEBPACK_IMPORTED_MODULE_1__["filterAggTypeFields"]; });

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

/***/ "./public/components/agg_param.tsx":
/*!*****************************************!*\
  !*** ./public/components/agg_param.tsx ***!
  \*****************************************/
/*! exports provided: DefaultEditorAggParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorAggParam", function() { return DefaultEditorAggParam; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _agg_params_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agg_params_state */ "./public/components/agg_params_state.ts");
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



function DefaultEditorAggParam(props) {
  const {
    agg,
    aggParam,
    paramEditor: ParamEditor,
    setAggParamValue,
    onChangeParamsState,
    ...rest
  } = props;
  const setValidity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(valid => {
    onChangeParamsState({
      type: _agg_params_state__WEBPACK_IMPORTED_MODULE_1__["AGG_PARAMS_ACTION_KEYS"].VALID,
      paramName: aggParam.name,
      payload: valid
    });
  }, [onChangeParamsState, aggParam.name]);

  // setTouched can be called from sub-agg which passes a parameter
  const setTouched = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((isTouched = true) => {
    onChangeParamsState({
      type: _agg_params_state__WEBPACK_IMPORTED_MODULE_1__["AGG_PARAMS_ACTION_KEYS"].TOUCHED,
      paramName: aggParam.name,
      payload: isTouched
    });
  }, [onChangeParamsState, aggParam.name]);
  const setValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    if (props.value !== value) {
      setAggParamValue(agg.id, aggParam.name, value);
    }
  }, [setAggParamValue, agg.id, aggParam.name, props.value]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (aggParam.shouldShow && !aggParam.shouldShow(agg)) {
      setValidity(true);
    }
  }, [agg, agg.params.field, aggParam, setValidity]);
  if (aggParam.shouldShow && !aggParam.shouldShow(agg)) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParamEditor, _extends({
    agg: agg,
    aggParam: aggParam,
    setValidity: setValidity,
    setTouched: setTouched,
    setValue: setValue
  }, rest));
}


/***/ }),

/***/ "./public/components/agg_params.tsx":
/*!******************************************!*\
  !*** ./public/components/agg_params.tsx ***!
  \******************************************/
/*! exports provided: DefaultEditorAggParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorAggParams", function() { return DefaultEditorAggParams; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_lib_useUnmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use/lib/useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js");
/* harmony import */ var react_use_lib_useUnmount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useUnmount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _agg_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agg_select */ "./public/components/agg_select.tsx");
/* harmony import */ var _agg_param__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agg_param */ "./public/components/agg_param.tsx");
/* harmony import */ var _agg_params_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agg_params_helper */ "./public/components/agg_params_helper.ts");
/* harmony import */ var _agg_params_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agg_params_state */ "./public/components/agg_params_state.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./public/components/utils/index.ts");
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../schemas */ "./public/schemas.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_11__);
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













const FIXED_VALUE_PROP = 'fixedValue';
const DEFAULT_PROP = 'default';
function DefaultEditorAggParams({
  agg,
  aggError,
  aggIndex = 0,
  aggIsTooLow = false,
  className,
  disabledParams,
  groupName,
  formIsTouched,
  indexPattern,
  metricAggs,
  state,
  setAggParamValue,
  onAggTypeChange,
  setTouched,
  setValidity,
  schemas,
  allowedAggs = [],
  hideCustomLabel = false
}) {
  var _agg$type, _agg$params;
  const schema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_schemas__WEBPACK_IMPORTED_MODULE_10__["getSchemaByName"])(schemas, agg.schema), [agg.schema, schemas]);
  const aggFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...allowedAggs, ...(schema.aggFilter || [])], [allowedAggs, schema.aggFilter]);
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_11__["useOpenSearchDashboards"])();
  const aggTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => services.data.search.aggs.types.getAll(), [services.data.search.aggs.types]);
  const groupedAggTypeOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_agg_params_helper__WEBPACK_IMPORTED_MODULE_7__["getAggTypeOptions"])(aggTypes, agg, indexPattern, groupName, aggFilter), [aggTypes, agg, indexPattern, groupName, aggFilter]);
  const error = aggIsTooLow ? _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.aggParams.errors.aggWrongRunOrderErrorMessage', {
    defaultMessage: '"{schema}" aggs must run before all other buckets!',
    values: {
      schema: schema.title
    }
  }) : '';
  const aggTypeName = (_agg$type = agg.type) === null || _agg$type === void 0 ? void 0 : _agg$type.name;
  const fieldName = (_agg$params = agg.params) === null || _agg$params === void 0 || (_agg$params = _agg$params.field) === null || _agg$params === void 0 ? void 0 : _agg$params.name;
  const editorConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getEditorConfig"])(indexPattern, aggTypeName, fieldName), [indexPattern, aggTypeName, fieldName]);
  const params = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_agg_params_helper__WEBPACK_IMPORTED_MODULE_7__["getAggParamsToRender"])({
    agg,
    editorConfig,
    metricAggs,
    state,
    schemas,
    hideCustomLabel
  }), [agg, editorConfig, metricAggs, state, schemas, hideCustomLabel]);
  const allParams = [...params.basic, ...params.advanced];
  const [paramsState, onChangeParamsState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_agg_params_state__WEBPACK_IMPORTED_MODULE_8__["aggParamsReducer"], allParams, _agg_params_state__WEBPACK_IMPORTED_MODULE_8__["initAggParamsState"]);
  const [aggType, onChangeAggType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_agg_params_state__WEBPACK_IMPORTED_MODULE_8__["aggTypeReducer"], {
    touched: false,
    valid: true
  });
  const isFormValid = !error && aggType.valid && Object.entries(paramsState).every(([, paramState]) => paramState.valid);
  const isAllInvalidParamsTouched = !!error || Object(_agg_params_helper__WEBPACK_IMPORTED_MODULE_7__["isInvalidParamsTouched"])(agg.type, aggType, paramsState);
  const onAggSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    if (agg.type !== value) {
      onAggTypeChange(agg.id, value);
      // reset touched and valid of params
      onChangeParamsState({
        type: _agg_params_state__WEBPACK_IMPORTED_MODULE_8__["AGG_PARAMS_ACTION_KEYS"].RESET
      });
    }
  }, [onAggTypeChange, agg]);

  // reset validity before component destroyed
  react_use_lib_useUnmount__WEBPACK_IMPORTED_MODULE_3___default()(() => setValidity(true));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object.entries(editorConfig).forEach(([param, paramConfig]) => {
      const paramOptions = agg.type.params.find(paramOption => paramOption.name === param);
      const hasFixedValue = paramConfig.hasOwnProperty(FIXED_VALUE_PROP);
      const hasDefault = paramConfig.hasOwnProperty(DEFAULT_PROP);
      // If the parameter has a fixed value in the config, set this value.
      // Also for all supported configs we should freeze the editor for this param.
      if (hasFixedValue || hasDefault) {
        let newValue;
        let property = FIXED_VALUE_PROP;
        let typedParamConfig = paramConfig;
        if (hasDefault) {
          property = DEFAULT_PROP;
          typedParamConfig = paramConfig;
        }
        if (paramOptions && paramOptions.deserialize) {
          newValue = paramOptions.deserialize(typedParamConfig[property]);
        } else {
          newValue = typedParamConfig[property];
        }

        // this check is obligatory to avoid infinite render, because setAggParamValue creates a brand new agg object
        if (agg.params[param] !== newValue) {
          setAggParamValue(agg.id, param, newValue);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorConfig]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTouched(false);
  }, [agg.type, setTouched]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isFormValid);
  }, [isFormValid, agg.type, setValidity]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // when all invalid controls were touched or they are untouched
    setTouched(isAllInvalidParamsTouched);
  }, [isAllInvalidParamsTouched, setTouched]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], {
    className: className,
    isInvalid: !!error,
    error: error,
    "data-test-subj": "visAggEditorParams"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_select__WEBPACK_IMPORTED_MODULE_5__["DefaultEditorAggSelect"], {
    aggError: aggError,
    id: agg.id,
    indexPattern: indexPattern,
    value: agg.type,
    aggTypeOptions: groupedAggTypeOptions,
    isSubAggregation: aggIndex >= 1 && groupName === _data_public__WEBPACK_IMPORTED_MODULE_4__["AggGroupNames"].Buckets,
    showValidation: formIsTouched || aggType.touched,
    setValue: onAggSelect,
    onChangeAggType: onChangeAggType
  }), params.basic.map(param => {
    const model = paramsState[param.aggParam.name] || {
      touched: false,
      valid: true
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_param__WEBPACK_IMPORTED_MODULE_6__["DefaultEditorAggParam"], _extends({
      key: `${param.aggParam.name}${agg.type ? agg.type.name : ''}`,
      disabled: disabledParams && disabledParams.includes(param.aggParam.name),
      formIsTouched: formIsTouched,
      showValidation: formIsTouched || model.touched,
      setAggParamValue: setAggParamValue,
      onChangeParamsState: onChangeParamsState
    }, param));
  }), params.advanced.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiAccordion"], {
    id: "advancedAccordion",
    "data-test-subj": `advancedParams-${agg.id}`,
    buttonContent: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.advancedToggle.advancedLinkLabel', {
      defaultMessage: 'Advanced'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), params.advanced.map(param => {
    const model = paramsState[param.aggParam.name] || {
      touched: false,
      valid: true
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_param__WEBPACK_IMPORTED_MODULE_6__["DefaultEditorAggParam"], _extends({
      key: `${param.aggParam.name}${agg.type ? agg.type.name : ''}`,
      disabled: disabledParams && disabledParams.includes(param.aggParam.name),
      formIsTouched: formIsTouched,
      showValidation: formIsTouched || model.touched,
      setAggParamValue: setAggParamValue,
      onChangeParamsState: onChangeParamsState
    }, param));
  }))) : null);
}


/***/ }),

/***/ "./public/components/agg_params_helper.ts":
/*!************************************************!*\
  !*** ./public/components/agg_params_helper.ts ***!
  \************************************************/
/*! exports provided: getAggParamsToRender, getAggTypeOptions, isInvalidParamsTouched, buildAggDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggParamsToRender", function() { return getAggParamsToRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggTypeOptions", function() { return getAggTypeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInvalidParamsTouched", function() { return isInvalidParamsTouched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAggDescription", function() { return buildAggDescription; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _agg_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../agg_filters */ "./public/agg_filters/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./public/utils.ts");
/* harmony import */ var _agg_params_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agg_params_map */ "./public/components/agg_params_map.ts");
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas */ "./public/schemas.ts");
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






function getAggParamsToRender({
  agg,
  editorConfig,
  metricAggs,
  state,
  schemas,
  hideCustomLabel
}) {
  const params = {
    basic: [],
    advanced: []
  };
  const paramsToRender = agg.type && agg.type.params
  // Filter out, i.e. don't render, any parameter that is hidden via the editor config.
  .filter(param => !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(editorConfig, [param.name, 'hidden'], false)) || [];
  const schema = Object(_schemas__WEBPACK_IMPORTED_MODULE_4__["getSchemaByName"])(schemas, agg.schema);
  // build collection of agg params components
  paramsToRender.forEach((param, index) => {
    let indexedFields = [];
    let fields;
    if (hideCustomLabel && param.name === 'customLabel') {
      return;
    }
    // if field param exists, compute allowed fields
    if (param.type === 'field') {
      let availableFields = param.getAvailableFields(agg);
      // should be refactored in the future to provide a more general way
      // for visualization to override some agg config settings
      if (agg.type.name === 'top_hits' && param.name === 'field') {
        const allowStrings = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(schema, `aggSettings[${agg.type.name}].allowStrings`, false);
        if (!allowStrings) {
          availableFields = availableFields.filter(field => field.type === 'number');
        }
      }
      fields = Object(_agg_filters__WEBPACK_IMPORTED_MODULE_1__["filterAggTypeFields"])(availableFields, agg);
      indexedFields = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["groupAndSortBy"])(fields, 'type', 'name');
      if (fields && !indexedFields.length && index > 0) {
        // don't draw the rest of the options if there are no indexed fields and it's an extra param (index > 0).
        return;
      }
    }
    const type = param.advanced ? 'advanced' : 'basic';
    let paramEditor;
    if (agg.type.subtype && _agg_params_map__WEBPACK_IMPORTED_MODULE_3__["aggParamsMap"][agg.type.subtype]) {
      paramEditor = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_agg_params_map__WEBPACK_IMPORTED_MODULE_3__["aggParamsMap"], [agg.type.subtype, param.name]);
    } else {
      const aggType = agg.type.type;
      const aggName = agg.type.name;
      const aggParams = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_agg_params_map__WEBPACK_IMPORTED_MODULE_3__["aggParamsMap"], [aggType, aggName], {});
      paramEditor = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(aggParams, param.name);
    }
    if (!paramEditor) {
      paramEditor = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_agg_params_map__WEBPACK_IMPORTED_MODULE_3__["aggParamsMap"], ['common', param.type]);
    }

    // show params with an editor component
    if (paramEditor) {
      params[type].push({
        agg,
        aggParam: param,
        editorConfig,
        indexedFields,
        paramEditor,
        metricAggs,
        state,
        value: agg.params[param.name],
        schemas,
        hideCustomLabel
      });
    }
  });
  return params;
}
function getAggTypeOptions(aggTypes, agg, indexPattern, groupName, allowedAggs) {
  const aggTypeOptions = Object(_agg_filters__WEBPACK_IMPORTED_MODULE_1__["filterAggTypes"])(aggTypes[groupName], indexPattern, agg, allowedAggs);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["groupAndSortBy"])(aggTypeOptions, 'subtype', 'title');
}

/**
 * Calculates a ngModel touched state.
 * If an aggregation is not selected, it returns a value of touched agg selector state.
 * Else if there are no invalid agg params, it returns false.
 * Otherwise it returns true if each invalid param is touched.
 * @param aggType Selected aggregation.
 * @param aggTypeState State of aggregation selector.
 * @param aggParams State of aggregation parameters.
 */
function isInvalidParamsTouched(aggType, aggTypeState, aggParams) {
  if (!aggType) {
    return aggTypeState.touched;
  }
  const invalidParams = Object.values(aggParams).filter(param => !param.valid);
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(invalidParams)) {
    return false;
  }
  return invalidParams.every(param => param.touched);
}
function buildAggDescription(agg) {
  let description = '';
  if (agg.type && agg.type.makeLabel) {
    try {
      description = agg.type.makeLabel(agg);
    } catch (e) {
      // Date Histogram's `makeLabel` implementation invokes 'write' method for each param, including interval's 'write',
      // which throws an error when interval is undefined.
    }
  }
  return description;
}


/***/ }),

/***/ "./public/components/agg_params_map.ts":
/*!*********************************************!*\
  !*** ./public/components/agg_params_map.ts ***!
  \*********************************************/
/*! exports provided: aggParamsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggParamsMap", function() { return aggParamsMap; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./public/components/controls/index.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/utils */ "./public/components/controls/utils/index.ts");
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




const {
  siblingPipelineType,
  parentPipelineType
} = _data_public__WEBPACK_IMPORTED_MODULE_1__["search"].aggs;
const buckets = {
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].DATE_HISTOGRAM]: {
    scaleMetricValues: _controls__WEBPACK_IMPORTED_MODULE_0__["ScaleMetricsParamEditor"],
    interval: _controls__WEBPACK_IMPORTED_MODULE_0__["TimeIntervalParamEditor"],
    drop_partials: _controls__WEBPACK_IMPORTED_MODULE_0__["DropPartialsParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].DATE_RANGE]: {
    ranges: _controls__WEBPACK_IMPORTED_MODULE_0__["DateRangesParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].FILTERS]: {
    filters: _controls__WEBPACK_IMPORTED_MODULE_0__["FiltersParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].GEOHASH_GRID]: {
    autoPrecision: _controls__WEBPACK_IMPORTED_MODULE_0__["AutoPrecisionParamEditor"],
    precision: _controls__WEBPACK_IMPORTED_MODULE_0__["PrecisionParamEditor"],
    useGeocentroid: _controls__WEBPACK_IMPORTED_MODULE_0__["UseGeocentroidParamEditor"],
    isFilteredByCollar: _controls__WEBPACK_IMPORTED_MODULE_0__["IsFilteredByCollarParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].HISTOGRAM]: {
    interval: _controls__WEBPACK_IMPORTED_MODULE_0__["NumberIntervalParamEditor"],
    maxBars: _controls__WEBPACK_IMPORTED_MODULE_0__["MaxBarsParamEditor"],
    min_doc_count: _controls__WEBPACK_IMPORTED_MODULE_0__["MinDocCountParamEditor"],
    has_extended_bounds: _controls__WEBPACK_IMPORTED_MODULE_0__["HasExtendedBoundsParamEditor"],
    extended_bounds: _controls__WEBPACK_IMPORTED_MODULE_0__["ExtendedBoundsParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].IP_RANGE]: {
    ipRangeType: _controls__WEBPACK_IMPORTED_MODULE_0__["IpRangeTypeParamEditor"],
    ranges: _controls__WEBPACK_IMPORTED_MODULE_0__["IpRangesParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].RANGE]: {
    ranges: _controls__WEBPACK_IMPORTED_MODULE_0__["RangesControl"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].SIGNIFICANT_TERMS]: {
    size: _controls__WEBPACK_IMPORTED_MODULE_0__["SizeParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["BUCKET_TYPES"].TERMS]: {
    include: _controls__WEBPACK_IMPORTED_MODULE_0__["IncludeExcludeParamEditor"],
    exclude: _controls__WEBPACK_IMPORTED_MODULE_0__["IncludeExcludeParamEditor"],
    orderBy: _controls__WEBPACK_IMPORTED_MODULE_0__["OrderByParamEditor"],
    orderAgg: _controls__WEBPACK_IMPORTED_MODULE_0__["OrderAggParamEditor"],
    order: Object(_controls_utils__WEBPACK_IMPORTED_MODULE_2__["wrapWithInlineComp"])(_controls__WEBPACK_IMPORTED_MODULE_0__["OrderParamEditor"]),
    size: Object(_controls_utils__WEBPACK_IMPORTED_MODULE_2__["wrapWithInlineComp"])(_controls__WEBPACK_IMPORTED_MODULE_0__["SizeParamEditor"]),
    otherBucket: _controls__WEBPACK_IMPORTED_MODULE_0__["OtherBucketParamEditor"],
    missingBucket: _controls__WEBPACK_IMPORTED_MODULE_0__["MissingBucketParamEditor"]
  }
};
const metrics = {
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPES"].TOP_HITS]: {
    field: _controls__WEBPACK_IMPORTED_MODULE_0__["TopFieldParamEditor"],
    aggregate: Object(_controls_utils__WEBPACK_IMPORTED_MODULE_2__["wrapWithInlineComp"])(_controls__WEBPACK_IMPORTED_MODULE_0__["TopAggregateParamEditor"]),
    size: Object(_controls_utils__WEBPACK_IMPORTED_MODULE_2__["wrapWithInlineComp"])(_controls__WEBPACK_IMPORTED_MODULE_0__["TopSizeParamEditor"]),
    sortField: _controls__WEBPACK_IMPORTED_MODULE_0__["TopSortFieldParamEditor"],
    sortOrder: _controls__WEBPACK_IMPORTED_MODULE_0__["OrderParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPES"].PERCENTILES]: {
    percents: _controls__WEBPACK_IMPORTED_MODULE_0__["PercentilesEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPES"].PERCENTILE_RANKS]: {
    values: _controls__WEBPACK_IMPORTED_MODULE_0__["PercentileRanksEditor"]
  }
};
const aggParamsMap = {
  common: {
    string: _controls__WEBPACK_IMPORTED_MODULE_0__["StringParamEditor"],
    json: _controls__WEBPACK_IMPORTED_MODULE_0__["RawJsonParamEditor"],
    field: _controls__WEBPACK_IMPORTED_MODULE_0__["FieldParamEditor"]
  },
  [siblingPipelineType]: {
    customBucket: _controls__WEBPACK_IMPORTED_MODULE_0__["SubMetricParamEditor"],
    customMetric: _controls__WEBPACK_IMPORTED_MODULE_0__["SubMetricParamEditor"]
  },
  [parentPipelineType]: {
    metricAgg: _controls__WEBPACK_IMPORTED_MODULE_0__["MetricAggParamEditor"],
    customMetric: _controls__WEBPACK_IMPORTED_MODULE_0__["SubAggParamEditor"]
  },
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets]: buckets,
  [_data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Metrics]: metrics
};

/***/ }),

/***/ "./public/components/agg_params_state.ts":
/*!***********************************************!*\
  !*** ./public/components/agg_params_state.ts ***!
  \***********************************************/
/*! exports provided: AGG_TYPE_ACTION_KEYS, AGG_PARAMS_ACTION_KEYS, aggTypeReducer, aggParamsReducer, initAggParamsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGG_TYPE_ACTION_KEYS", function() { return AGG_TYPE_ACTION_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGG_PARAMS_ACTION_KEYS", function() { return AGG_PARAMS_ACTION_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggTypeReducer", function() { return aggTypeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggParamsReducer", function() { return aggParamsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAggParamsState", function() { return initAggParamsState; });
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

let AGG_TYPE_ACTION_KEYS = /*#__PURE__*/function (AGG_TYPE_ACTION_KEYS) {
  AGG_TYPE_ACTION_KEYS["TOUCHED"] = "aggTypeTouched";
  AGG_TYPE_ACTION_KEYS["VALID"] = "aggTypeValid";
  return AGG_TYPE_ACTION_KEYS;
}({});
function aggTypeReducer(state, action) {
  switch (action.type) {
    case AGG_TYPE_ACTION_KEYS.TOUCHED:
      return {
        ...state,
        touched: action.payload
      };
    case AGG_TYPE_ACTION_KEYS.VALID:
      return {
        ...state,
        valid: action.payload
      };
    default:
      throw new Error();
  }
}
let AGG_PARAMS_ACTION_KEYS = /*#__PURE__*/function (AGG_PARAMS_ACTION_KEYS) {
  AGG_PARAMS_ACTION_KEYS["TOUCHED"] = "aggParamsTouched";
  AGG_PARAMS_ACTION_KEYS["VALID"] = "aggParamsValid";
  AGG_PARAMS_ACTION_KEYS["RESET"] = "aggParamsReset";
  return AGG_PARAMS_ACTION_KEYS;
}({});
function aggParamsReducer(state, {
  type,
  paramName = '',
  payload
}) {
  const targetParam = state[paramName] || {
    valid: true,
    touched: false
  };
  switch (type) {
    case AGG_PARAMS_ACTION_KEYS.TOUCHED:
      return {
        ...state,
        [paramName]: {
          ...targetParam,
          touched: payload
        }
      };
    case AGG_PARAMS_ACTION_KEYS.VALID:
      return {
        ...state,
        [paramName]: {
          ...targetParam,
          valid: payload
        }
      };
    case AGG_PARAMS_ACTION_KEYS.RESET:
      return {};
    default:
      throw new Error();
  }
}
function initAggParamsState(params) {
  const state = params.reduce((stateObj, param) => {
    stateObj[param.aggParam.name] = {
      valid: true,
      touched: false
    };
    return stateObj;
  }, {});
  return state;
}


/***/ }),

/***/ "./public/components/agg_select.tsx":
/*!******************************************!*\
  !*** ./public/components/agg_select.tsx ***!
  \******************************************/
/*! exports provided: DefaultEditorAggSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorAggSelect", function() { return DefaultEditorAggSelect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agg_params_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agg_params_state */ "./public/components/agg_params_state.ts");
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








function DefaultEditorAggSelect({
  aggError,
  id,
  indexPattern,
  value,
  setValue,
  aggTypeOptions,
  showValidation,
  isSubAggregation,
  onChangeAggType
}) {
  const [isDirty, setIsDirty] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])();
  const selectedOptions = value ? [{
    label: value.title,
    target: value
  }] : [];
  const label = isSubAggregation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "visDefaultEditor.aggSelect.subAggregationLabel",
    defaultMessage: "Sub aggregation"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "visDefaultEditor.aggSelect.aggregationLabel",
    defaultMessage: "Aggregation"
  });
  let aggHelpLink;
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(value, 'name')) {
    aggHelpLink = services.docLinks.links.opensearch.aggregations.base;
  }
  const helpLink = value && aggHelpLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
    href: aggHelpLink,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "visDefaultEditor.aggSelect.helpLinkLabel",
    defaultMessage: "{aggTitle} help",
    values: {
      aggTitle: value ? value.title : ''
    }
  })));
  const errors = aggError ? [aggError] : [];
  if (!aggTypeOptions.length) {
    errors.push(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.aggSelect.noCompatibleAggsDescription', {
      defaultMessage: 'The index pattern {indexPatternTitle} does not have any aggregatable fields.',
      values: {
        indexPatternTitle: indexPattern && indexPattern.title
      }
    }));
  }
  const isValid = !!value && !errors.length && !isDirty;
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(options => {
    const selectedOption = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(options, '0.target');
    if (selectedOption) {
      setValue(selectedOption);
    }
  }, [setValue]);
  const onSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(searchValue => setIsDirty(Boolean(searchValue)), []);
  const setTouched = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => onChangeAggType({
    type: _agg_params_state__WEBPACK_IMPORTED_MODULE_6__["AGG_TYPE_ACTION_KEYS"].TOUCHED,
    payload: true
  }), [onChangeAggType]);
  const setValidity = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(valid => onChangeAggType({
    type: _agg_params_state__WEBPACK_IMPORTED_MODULE_6__["AGG_TYPE_ACTION_KEYS"].VALID,
    payload: valid
  }), [onChangeAggType]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (errors.length) {
      setTouched();
    }
  }, [errors.length, setTouched]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    label: label,
    labelAppend: helpLink,
    error: errors,
    isInvalid: showValidation ? !isValid : false,
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiComboBox"], {
    placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.aggSelect.selectAggPlaceholder', {
      defaultMessage: 'Select an aggregation'
    }),
    id: `visDefaultEditorAggSelect${id}`,
    isDisabled: !aggTypeOptions.length,
    options: aggTypeOptions,
    selectedOptions: selectedOptions,
    singleSelection: {
      asPlainText: true
    },
    onBlur: setTouched,
    onChange: onChange,
    onSearchChange: onSearchChange,
    "data-test-subj": "defaultEditorAggSelect",
    isClearable: false,
    isInvalid: showValidation ? !isValid : false,
    fullWidth: true,
    sortMatchesBy: "startsWith",
    compressed: true
  }));
}


/***/ }),

/***/ "./public/components/controls/auto_precision.tsx":
/*!*******************************************************!*\
  !*** ./public/components/controls/auto_precision.tsx ***!
  \*******************************************************/
/*! exports provided: AutoPrecisionParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoPrecisionParamEditor", function() { return AutoPrecisionParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




function AutoPrecisionParamEditor({
  value = false,
  setValue
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.changePrecisionLabel', {
    defaultMessage: 'Change precision on map zoom'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
    compressed: true,
    label: label,
    checked: value,
    onChange: ev => setValue(ev.target.checked)
  }));
}


/***/ }),

/***/ "./public/components/controls/components/from_to_list.tsx":
/*!****************************************************************!*\
  !*** ./public/components/controls/components/from_to_list.tsx ***!
  \****************************************************************/
/*! exports provided: FromToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromToList", function() { return FromToList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input_list */ "./public/components/controls/components/input_list.tsx");
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






const EMPTY_STRING = '';
const defaultConfig = {
  defaultValue: {
    from: {
      value: '0.0.0.0',
      model: '0.0.0.0',
      isInvalid: false
    },
    to: {
      value: '255.255.255.255',
      model: '255.255.255.255',
      isInvalid: false
    }
  },
  validateClass: _data_public__WEBPACK_IMPORTED_MODULE_3__["search"].aggs.Ipv4Address,
  getModelValue: (item = {}) => ({
    from: {
      value: item.from || EMPTY_STRING,
      model: item.from || EMPTY_STRING,
      isInvalid: false
    },
    to: {
      value: item.to || EMPTY_STRING,
      model: item.to || EMPTY_STRING,
      isInvalid: false
    }
  }),
  getRemoveBtnAriaLabel: item => _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.removeRangeAriaLabel', {
    defaultMessage: 'Remove the range of {from} to {to}',
    values: {
      from: item.from.value || '*',
      to: item.to.value || '*'
    }
  }),
  onChangeFn: ({
    from,
    to
  }) => {
    const result = {};
    if (from.model) {
      result.from = from.model;
    }
    if (to.model) {
      result.to = to.model;
    }
    return result;
  },
  hasInvalidValuesFn: ({
    from,
    to
  }) => from.isInvalid || to.isInvalid,
  modelNames: ['from', 'to']
};
function FromToList({
  showValidation,
  onBlur,
  ...rest
}) {
  const renderInputRow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((item, index, onChangeValue) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.ipRangeFromAriaLabel', {
      defaultMessage: 'IP range from: {value}',
      values: {
        value: item.from.value || '*'
      }
    }),
    compressed: true,
    isInvalid: showValidation ? item.from.isInvalid : false,
    placeholder: "*",
    onChange: ev => {
      onChangeValue(index, ev.target.value, 'from');
    },
    value: item.from.value,
    onBlur: onBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "sortRight",
    color: "subdued"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.ipRangeToAriaLabel', {
      defaultMessage: 'IP range to: {value}',
      values: {
        value: item.to.value || '*'
      }
    }),
    compressed: true,
    isInvalid: showValidation ? item.to.isInvalid : false,
    placeholder: "*",
    onChange: ev => {
      onChangeValue(index, ev.target.value, 'to');
    },
    value: item.to.value,
    onBlur: onBlur
  }))), [onBlur, showValidation]);
  const fromToListConfig = {
    ...defaultConfig,
    renderInputRow
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_list__WEBPACK_IMPORTED_MODULE_4__["InputList"], _extends({
    config: fromToListConfig
  }, rest));
}


/***/ }),

/***/ "./public/components/controls/components/input_list.tsx":
/*!**************************************************************!*\
  !*** ./public/components/controls/components/input_list.tsx ***!
  \**************************************************************/
/*! exports provided: InputList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputList", function() { return InputList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
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






// InputModel can have the following implementations:
// for Mask List - { id: 'someId', mask: { model: '', value: '', isInvalid: false }}
// for FromTo List - { id: 'someId', from: { model: '', value: '', isInvalid: false }, to: { model: '', value: '', isInvalid: false }}

const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["htmlIdGenerator"])();
const validateValue = (inputValue, InputObject) => {
  const result = {
    model: inputValue || '',
    isInvalid: false
  };
  if (!inputValue) {
    result.isInvalid = false;
    return result;
  }
  try {
    result.model = new InputObject(inputValue).toString();
    result.isInvalid = false;
    return result;
  } catch (e) {
    result.isInvalid = true;
    return result;
  }
};
function InputList({
  config,
  list,
  onChange,
  setValidity
}) {
  const {
    defaultValue,
    getModelValue,
    modelNames,
    onChangeFn,
    validateClass
  } = config;
  const [models, setModels] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => list.map(item => ({
    id: generateId(),
    ...getModelValue(item)
  })));
  const hasInvalidValues = models.some(config.hasInvalidValuesFn);
  const updateValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(modelList => {
    setModels(modelList);
    onChange(modelList.map(onChangeFn));
  }, [onChangeFn, onChange]);
  const onChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((index, value, modelName) => {
    const {
      model,
      isInvalid
    } = validateValue(value, validateClass);
    updateValues(models.map((range, arrayIndex) => arrayIndex === index ? {
      ...range,
      [modelName]: {
        value,
        model,
        isInvalid
      }
    } : range));
  }, [models, updateValues, validateClass]);
  const onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => updateValues(models.filter(model => model.id !== id)), [models, updateValues]);
  const onAdd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => updateValues([...models, {
    id: generateId(),
    ...getModelValue()
  }]), [getModelValue, models, updateValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // resposible for setting up an initial value when there is no default value
    if (!list.length) {
      updateValues([{
        id: generateId(),
        ...defaultValue
      }]);
    }
  }, [defaultValue, list.length, updateValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(!hasInvalidValues);
  }, [hasInvalidValues, setValidity]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // responsible for discarding changes
    if (list.length !== models.length || list.some((item, index) => {
      // make model to be the same shape as stored value
      const model = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["pick"])(models[index], modelNames), 'model');

      // we need to skip empty values since they are not stored in saved object
      return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(item, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omitBy"])(model, lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"]));
    })) {
      setModels(list.map(item => ({
        id: generateId(),
        ...getModelValue(item)
      })));
    }
  }, [getModelValue, list, modelNames, models]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, models.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    gutterSize: "xs",
    alignItems: "center",
    responsive: false
  }, config.renderInputRow(item, index, onChangeValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButtonIcon"], {
    "aria-label": config.getRemoveBtnAriaLabel(item),
    title: config.getRemoveBtnAriaLabel(item),
    disabled: models.length === 1,
    color: "danger",
    iconType: "trash",
    onClick: () => onDelete(item.id)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "xs"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    iconType: "plusInCircleFilled",
    onClick: onAdd,
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.ipRanges.addRangeButtonLabel",
    defaultMessage: "Add range"
  }))));
}


/***/ }),

/***/ "./public/components/controls/components/mask_list.tsx":
/*!*************************************************************!*\
  !*** ./public/components/controls/components/mask_list.tsx ***!
  \*************************************************************/
/*! exports provided: MaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskList", function() { return MaskList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input_list */ "./public/components/controls/components/input_list.tsx");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_4__);
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






const EMPTY_STRING = '';
const defaultConfig = {
  defaultValue: {
    mask: {
      model: '0.0.0.0/1',
      value: '0.0.0.0/1',
      isInvalid: false
    }
  },
  validateClass: _data_public__WEBPACK_IMPORTED_MODULE_4__["search"].aggs.CidrMask,
  getModelValue: (item = {}) => ({
    mask: {
      model: item.mask || EMPTY_STRING,
      value: item.mask || EMPTY_STRING,
      isInvalid: false
    }
  }),
  getRemoveBtnAriaLabel: item => item.mask.value ? _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.removeCidrMaskButtonAriaLabel', {
    defaultMessage: 'Remove the CIDR mask value of {mask}',
    values: {
      mask: item.mask.value
    }
  }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.removeEmptyCidrMaskButtonAriaLabel', {
    defaultMessage: 'Remove the CIDR mask default value'
  }),
  onChangeFn: ({
    mask
  }) => {
    if (mask.model) {
      return {
        mask: mask.model
      };
    }
    return {};
  },
  hasInvalidValuesFn: ({
    mask
  }) => mask.isInvalid,
  modelNames: 'mask'
};
function MaskList({
  showValidation,
  onBlur,
  ...rest
}) {
  const renderInputRow = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    mask
  }, index, onChangeValue) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.cidrMaskAriaLabel', {
      defaultMessage: 'CIDR mask: {mask}',
      values: {
        mask: mask.value || '*'
      }
    }),
    compressed: true,
    fullWidth: true,
    isInvalid: showValidation ? mask.isInvalid : false,
    placeholder: "*",
    onChange: ev => {
      onChangeValue(index, ev.target.value, 'mask');
    },
    value: mask.value,
    onBlur: onBlur
  })), [onBlur, showValidation]);
  const maskListConfig = {
    ...defaultConfig,
    renderInputRow
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input_list__WEBPACK_IMPORTED_MODULE_3__["InputList"], _extends({
    config: maskListConfig
  }, rest));
}


/***/ }),

/***/ "./public/components/controls/components/number_list/index.ts":
/*!********************************************************************!*\
  !*** ./public/components/controls/components/number_list/index.ts ***!
  \********************************************************************/
/*! exports provided: NumberList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number_list */ "./public/components/controls/components/number_list/number_list.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberList", function() { return _number_list__WEBPACK_IMPORTED_MODULE_0__["NumberList"]; });

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

/***/ "./public/components/controls/components/number_list/number_list.tsx":
/*!***************************************************************************!*\
  !*** ./public/components/controls/components/number_list/number_list.tsx ***!
  \***************************************************************************/
/*! exports provided: NumberList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberList", function() { return NumberList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _number_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number_row */ "./public/components/controls/components/number_list/number_row.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/controls/components/number_list/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./public/components/controls/utils/index.ts");
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







function NumberList({
  labelledbyId,
  numberArray,
  range,
  showValidation,
  unitName,
  validateAscendingOrder = false,
  disallowDuplicates = false,
  onChange,
  setTouched,
  setValidity
}) {
  const numberRange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getRange"])(range), [range]);
  const [models, setModels] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getInitModelList"])(numberArray));

  // set up validity for each model
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setModels(state => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getValidatedModels"])(numberArray, state, numberRange, validateAscendingOrder, disallowDuplicates));
  }, [numberArray, numberRange, validateAscendingOrder, disallowDuplicates]);

  // responsible for setting up an initial value ([0]) when there is no default value
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!numberArray.length) {
      onChange([models[0].value]);
    }
  }, [models, numberArray.length, onChange]);
  const isValid = !Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hasInvalidValues"])(models);
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useValidation"])(setValidity, isValid);
  const onUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(modelList => {
    setModels(modelList);
    onChange(modelList.map(({
      value
    }) => value === _utils__WEBPACK_IMPORTED_MODULE_4__["EMPTY_STRING"] ? undefined : value));
  }, [onChange]);
  const onChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    id,
    value
  }) => {
    const parsedValue = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["parse"])(value);
    onUpdate(models.map(model => {
      if (model.id === id) {
        return {
          id,
          value: parsedValue,
          isInvalid: false
        };
      }
      return model;
    }));
  }, [models, onUpdate]);

  // Add an item to the end of the list
  const onAdd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const newArray = [...models, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getNextModel"])(models, numberRange)];
    onUpdate(newArray);
  }, [models, numberRange, onUpdate]);
  const onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    const newArray = models.filter(model => model.id !== id);
    onUpdate(newArray);
  }, [models, onUpdate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, models.map((model, arrayIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: model.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_row__WEBPACK_IMPORTED_MODULE_3__["NumberRow"], {
    isInvalid: showValidation ? model.isInvalid : false,
    disableDelete: models.length === 1,
    model: model,
    labelledbyId: labelledbyId,
    range: numberRange,
    onDelete: onDelete,
    onChange: onChangeValue,
    onBlur: setTouched,
    autoFocus: models.length !== 1 && arrayIndex === models.length - 1
  }), showValidation && model.isInvalid && model.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormErrorText"], null, model.error), models.length - 1 !== arrayIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    iconType: "plusInCircleFilled",
    onClick: onAdd,
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visDefaultEditor.controls.numberList.addUnitButtonLabel",
    defaultMessage: "Add {unitName}",
    values: {
      unitName
    }
  }))));
}


/***/ }),

/***/ "./public/components/controls/components/number_list/number_row.tsx":
/*!**************************************************************************!*\
  !*** ./public/components/controls/components/number_list/number_row.tsx ***!
  \**************************************************************************/
/*! exports provided: NumberRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberRow", function() { return NumberRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




function NumberRow({
  autoFocus,
  disableDelete,
  model,
  isInvalid,
  labelledbyId,
  range,
  onBlur,
  onDelete,
  onChange
}) {
  const deleteBtnAriaLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.numberList.removeUnitButtonAriaLabel', {
    defaultMessage: 'Remove the rank value of {value}',
    values: {
      value: model.value
    }
  });
  const onValueChanged = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => onChange({
    value: event.target.value,
    id: model.id
  }), [onChange, model.id]);
  const onDeleteFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => onDelete(model.id), [onDelete, model.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    responsive: false,
    alignItems: "center",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
    "aria-labelledby": labelledbyId,
    autoFocus: autoFocus,
    compressed: true,
    isInvalid: isInvalid,
    placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.numberList.enterValuePlaceholder', {
      defaultMessage: 'Enter a value'
    }),
    onChange: onValueChanged,
    value: model.value,
    fullWidth: true,
    min: range.min,
    max: range.max,
    onBlur: onBlur
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    "aria-label": deleteBtnAriaLabel,
    title: deleteBtnAriaLabel,
    color: "danger",
    iconType: "trash",
    onClick: onDeleteFn,
    disabled: disableDelete
  })));
}


/***/ }),

/***/ "./public/components/controls/components/number_list/range.ts":
/*!********************************************************************!*\
  !*** ./public/components/controls/components/number_list/range.ts ***!
  \********************************************************************/
/*! exports provided: NumberListRange, parseRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberListRange", function() { return NumberListRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRange", function() { return parseRange; });
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
 * Regexp portion that matches our number
 *
 * supports:
 *   -100
 *   -100.0
 *   0
 *   0.10
 *   Infinity
 *   -Infinity
 *
 * @type {String}
 */
const _RE_NUMBER = '(\\-?(?:\\d+(?:\\.\\d+)?|Infinity))';

/**
 * Regexp for the interval notation
 *
 * supports:
 *   [num, num]
 *   ( num , num ]
 *   [Infinity,num)
 *
 * @type {RegExp}
 */
const RANGE_RE = new RegExp('^\\s*([\\[|\\(])\\s*' + _RE_NUMBER + '\\s*,\\s*' + _RE_NUMBER + '\\s*([\\]|\\)])\\s*$');
class NumberListRange {
  constructor(minInclusive, min, max, maxInclusive) {
    this.minInclusive = minInclusive;
    this.min = min;
    this.max = max;
    this.maxInclusive = maxInclusive;
  }
  within(n) {
    if (this.min === n && !this.minInclusive || this.min > n) return false;
    if (this.max === n && !this.maxInclusive || this.max < n) return false;
    return true;
  }
}
function parseRange(input) {
  const match = String(input).match(RANGE_RE);
  if (!match) {
    throw new TypeError('expected input to be in interval notation e.g., (100, 200]');
  }
  const args = [match[1] === '[', parseFloat(match[2]), parseFloat(match[3]), match[4] === ']'];
  if (args[1] > args[2]) {
    args.reverse();
  }
  const [minInclusive, min, max, maxInclusive] = args;
  return new NumberListRange(minInclusive, min, max, maxInclusive);
}

/***/ }),

/***/ "./public/components/controls/components/number_list/utils.ts":
/*!********************************************************************!*\
  !*** ./public/components/controls/components/number_list/utils.ts ***!
  \********************************************************************/
/*! exports provided: EMPTY_STRING, parse, getRange, validateValue, getNextModel, getInitModelList, getValidatedModels, hasInvalidValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_STRING", function() { return EMPTY_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return getRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateValue", function() { return validateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextModel", function() { return getNextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitModelList", function() { return getInitModelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidatedModels", function() { return getValidatedModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasInvalidValues", function() { return hasInvalidValues; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range */ "./public/components/controls/components/number_list/range.ts");
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





const EMPTY_STRING = '';
const defaultRange = Object(_range__WEBPACK_IMPORTED_MODULE_3__["parseRange"])('[0,Infinity)');
const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["htmlIdGenerator"])();
const defaultModel = {
  value: 0,
  id: generateId(),
  isInvalid: false
};
function parse(value) {
  const parsedValue = parseFloat(value);
  return isNaN(parsedValue) ? EMPTY_STRING : parsedValue;
}
function getRange(range) {
  try {
    return range ? Object(_range__WEBPACK_IMPORTED_MODULE_3__["parseRange"])(range) : defaultRange;
  } catch (e) {
    throw new TypeError('Unable to parse range: ' + e.message);
  }
}
function validateValue(value, numberRange) {
  const result = {
    isInvalid: false
  };
  if (value === EMPTY_STRING) {
    result.isInvalid = true;
    result.error = EMPTY_STRING;
  } else if (!numberRange.within(value)) {
    result.isInvalid = true;
    result.error = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.numberList.invalidRangeErrorMessage', {
      defaultMessage: 'The value should be in the range of {min} to {max}.',
      values: {
        min: numberRange.min,
        max: numberRange.max
      }
    });
  }
  return result;
}
function validateValueAscending(inputValue, index, list) {
  const result = {
    isInvalidOrder: false
  };
  const previousModel = list[index - 1];
  if (previousModel !== undefined && inputValue !== undefined && inputValue <= previousModel) {
    result.isInvalidOrder = true;
    result.error = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.numberList.invalidAscOrderErrorMessage', {
      defaultMessage: 'Value is not in ascending order.'
    });
  }
  return result;
}
function validateValueUnique(inputValue, index, list) {
  const result = {
    isDuplicate: false
  };
  if (inputValue !== EMPTY_STRING && list.indexOf(inputValue) !== index) {
    result.isDuplicate = true;
    result.error = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.numberList.duplicateValueErrorMessage', {
      defaultMessage: 'Duplicate value.'
    });
  }
  return result;
}
function getNextModel(list, range) {
  const lastValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(list).value;
  let next = Number(lastValue) ? Number(lastValue) + 1 : 1;
  if (next >= range.max) {
    next = range.max - 1;
  }
  return {
    id: generateId(),
    value: next,
    isInvalid: false
  };
}
function getInitModelList(list) {
  return list.length ? list.map(num => ({
    value: num === undefined ? EMPTY_STRING : num,
    id: generateId(),
    isInvalid: false
  })) : [defaultModel];
}
function getValidatedModels(numberList, modelList, numberRange, validateAscendingOrder = false, disallowDuplicates = false) {
  if (!numberList.length) {
    return [defaultModel];
  }
  return numberList.map((number, index) => {
    const model = modelList[index] || {
      id: generateId()
    };
    const newValue = number === undefined ? EMPTY_STRING : number;
    const valueResult = numberRange ? validateValue(newValue, numberRange) : {
      isInvalid: false
    };
    const ascendingResult = validateAscendingOrder ? validateValueAscending(newValue, index, numberList) : {
      isInvalidOrder: false
    };
    const duplicationResult = disallowDuplicates ? validateValueUnique(newValue, index, numberList) : {
      isDuplicate: false
    };
    const allErrors = [valueResult.error, ascendingResult.error, duplicationResult.error].filter(Boolean).join(' ');
    return {
      ...model,
      value: newValue,
      isInvalid: valueResult.isInvalid || ascendingResult.isInvalidOrder || duplicationResult.isDuplicate,
      error: allErrors === EMPTY_STRING ? undefined : allErrors
    };
  });
}
function hasInvalidValues(modelList) {
  return !!modelList.find(({
    isInvalid
  }) => isInvalid);
}


/***/ }),

/***/ "./public/components/controls/components/simple_number_list.tsx":
/*!**********************************************************************!*\
  !*** ./public/components/controls/components/simple_number_list.tsx ***!
  \**********************************************************************/
/*! exports provided: SimpleNumberList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNumberList", function() { return SimpleNumberList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _number_list_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number_list/utils */ "./public/components/controls/components/number_list/utils.ts");
/* harmony import */ var _number_list_number_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number_list/number_row */ "./public/components/controls/components/number_list/number_row.tsx");
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







const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["htmlIdGenerator"])();
function SimpleNumberList({
  agg,
  aggParam,
  value,
  setValue,
  setTouched
}) {
  const [numbers, setNumbers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_number_list_utils__WEBPACK_IMPORTED_MODULE_4__["getInitModelList"])(value && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) ? value : [_number_list_utils__WEBPACK_IMPORTED_MODULE_4__["EMPTY_STRING"]]));
  const numberRange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(_number_list_utils__WEBPACK_IMPORTED_MODULE_4__["getRange"])('[-Infinity,Infinity]'), []);

  // This useEffect is needed to discard changes, it sets numbers a mapped value if they are different
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value) && (value.length !== numbers.length || !value.every((numberValue, index) => numberValue === numbers[index].value))) {
      setNumbers(value.map(numberValue => ({
        id: generateId(),
        value: numberValue,
        isInvalid: false
      })));
    }
  }, [numbers, value]);
  const onUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(numberList => {
    setNumbers(numberList);
    setValue(numberList.map(({
      value: numberValue
    }) => numberValue));
  }, [setValue]);
  const onChangeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(numberField => {
    onUpdate(numbers.map(number => number.id === numberField.id ? {
      id: numberField.id,
      value: Object(_number_list_utils__WEBPACK_IMPORTED_MODULE_4__["parse"])(numberField.value),
      isInvalid: false
    } : number));
  }, [numbers, onUpdate]);

  // Add an item to the end of the list
  const onAdd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const newArray = [...numbers, {
      id: generateId(),
      value: _number_list_utils__WEBPACK_IMPORTED_MODULE_4__["EMPTY_STRING"],
      isInvalid: false
    }];
    onUpdate(newArray);
  }, [numbers, onUpdate]);
  const onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => onUpdate(numbers.filter(number => number.id !== id)), [numbers, onUpdate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    id: `${aggParam.name}-${agg.id}}`,
    label: aggParam.displayName || aggParam.name,
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, numbers.map((number, arrayIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: number.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_number_list_number_row__WEBPACK_IMPORTED_MODULE_5__["NumberRow"], {
    isInvalid: number.isInvalid,
    disableDelete: numbers.length === 1,
    model: number,
    labelledbyId: `${aggParam.name}-${agg.id}-legend`,
    range: numberRange,
    onDelete: onDelete,
    onChange: onChangeValue,
    onBlur: setTouched,
    autoFocus: numbers.length !== 1 && arrayIndex === numbers.length - 1
  }), numbers.length - 1 !== arrayIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
    iconType: "plusInCircleFilled",
    onClick: onAdd,
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.includeExclude.addUnitButtonLabel",
    defaultMessage: "Add value"
  })))));
}


/***/ }),

/***/ "./public/components/controls/date_ranges.tsx":
/*!****************************************************!*\
  !*** ./public/components/controls/date_ranges.tsx ***!
  \****************************************************/
/*! exports provided: DateRangesParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangesParamEditor", function() { return DateRangesParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
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









const FROM_PLACEHOLDER = '\u2212\u221E';
const TO_PLACEHOLDER = '+\u221E';
const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["htmlIdGenerator"])();
const validateDateMath = (value = '') => {
  if (!value) {
    return true;
  }
  const moment = _elastic_datemath__WEBPACK_IMPORTED_MODULE_2___default.a.parse(value);
  return moment && moment.isValid();
};
function DateRangesParamEditor({
  value = [],
  setValue,
  setValidity
}) {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["useOpenSearchDashboards"])();
  const [ranges, setRanges] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => value.map(range => ({
    ...range,
    id: generateId()
  })));
  const hasInvalidRange = value.some(({
    from,
    to
  }) => !from && !to || !validateDateMath(from) || !validateDateMath(to));
  const updateRanges = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(rangeValues => {
    // do not set internal id parameter into saved object
    setValue(rangeValues.map(range => Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(range, 'id')));
    setRanges(rangeValues);
  }, [setValue]);
  const onAddRange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => updateRanges([...ranges, {
    id: generateId()
  }]), [ranges, updateRanges]);
  Object(react_use__WEBPACK_IMPORTED_MODULE_6__["useMount"])(() => {
    // set up an initial range when there is no default range
    if (!value.length) {
      onAddRange();
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // responsible for discarding changes
    if (value.length !== ranges.length || value.some((range, index) => !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(range, Object(lodash__WEBPACK_IMPORTED_MODULE_5__["omit"])(ranges[index], 'id')))) {
      setRanges(value.map(range => ({
        ...range,
        id: generateId()
      })));
    }
  }, [ranges, value]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(!hasInvalidRange);
  }, [hasInvalidRange, setValidity]);
  const onRemoveRange = id => updateRanges(ranges.filter(range => range.id !== id));
  const onChangeRange = (id, key, newValue) => updateRanges(ranges.map(range => range.id === id ? {
    ...range,
    [key]: newValue === '' ? undefined : newValue
  } : range));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    display: 'rowCompressed',
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    href: services.docLinks.links.opensearch.dateMath,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.dateRanges.acceptedDateFormatsLinkText",
    defaultMessage: "Acceptable date formats"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), ranges.map(({
    from,
    to,
    id
  }, index) => {
    const deleteBtnTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.dateRanges.removeRangeButtonAriaLabel', {
      defaultMessage: 'Remove the range of {from} to {to}',
      values: {
        from: from || FROM_PLACEHOLDER,
        to: to || TO_PLACEHOLDER
      }
    });
    const areBothEmpty = !from && !to;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      responsive: false,
      gutterSize: "s",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.dateRanges.fromColumnLabel', {
        defaultMessage: 'From',
        description: 'Beginning of a date range, e.g. *From* 2018-02-26 To 2018-02-28'
      }),
      compressed: true,
      fullWidth: true,
      isInvalid: areBothEmpty || !validateDateMath(from),
      placeholder: FROM_PLACEHOLDER,
      value: from || '',
      onChange: ev => onChangeRange(id, 'from', ev.target.value),
      "data-test-subj": `visEditorDateRange${index}__from`
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "sortRight",
      color: "subdued"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.dateRanges.toColumnLabel', {
        defaultMessage: 'To',
        description: 'End of a date range, e.g. From 2018-02-26 *To* 2018-02-28'
      }),
      "data-test-subj": `visEditorDateRange${index}__to`,
      compressed: true,
      fullWidth: true,
      isInvalid: areBothEmpty || !validateDateMath(to),
      placeholder: TO_PLACEHOLDER,
      value: to || '',
      onChange: ev => onChangeRange(id, 'to', ev.target.value)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
      title: deleteBtnTitle,
      "aria-label": deleteBtnTitle,
      disabled: value.length === 1,
      color: "danger",
      iconType: "trash",
      onClick: () => onRemoveRange(id)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "xs"
    }));
  }), hasInvalidRange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormErrorText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.dateRanges.errorMessage",
    defaultMessage: "Each range should have at least one valid date."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    iconType: "plus",
    onClick: onAddRange,
    size: "xs",
    "data-test-subj": "visEditorAddDateRange"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.dateRanges.addRangeButtonLabel",
    defaultMessage: "Add range"
  })))));
}


/***/ }),

/***/ "./public/components/controls/drop_partials.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/drop_partials.tsx ***!
  \******************************************************/
/*! exports provided: DropPartialsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropPartialsParamEditor", function() { return DropPartialsParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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




function DropPartialsParamEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({
    dataTestSubj: "dropPartialBucketsCheckbox",
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.dropPartialBucketsLabel', {
      defaultMessage: 'Drop partial buckets'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.dropPartialBucketsTooltip', {
      defaultMessage: "Remove buckets that span time outside the time range so the histogram doesn't start and end with incomplete buckets."
    })
  }, props));
}


/***/ }),

/***/ "./public/components/controls/extended_bounds.tsx":
/*!********************************************************!*\
  !*** ./public/components/controls/extended_bounds.tsx ***!
  \********************************************************/
/*! exports provided: ExtendedBoundsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedBoundsParamEditor", function() { return ExtendedBoundsParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
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






function areBoundsValid({
  min,
  max
}) {
  if (min === '' || max === '') {
    return false;
  }
  return max >= min;
}
function ExtendedBoundsParamEditor({
  value = {},
  setValue,
  setValidity,
  showValidation,
  setTouched
}) {
  const minLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.extendedBounds.minLabel', {
    defaultMessage: 'Min'
  });
  const maxLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.extendedBounds.maxLabel', {
    defaultMessage: 'Max'
  });
  const isValid = areBoundsValid(value);
  let error;
  if (!isValid) {
    error = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.extendedBounds.errorMessage', {
      defaultMessage: 'Min should be less than or equal to Max.'
    });
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useValidation"])(setValidity, isValid);
  const handleChange = (ev, name) => {
    setValue({
      ...value,
      [name]: ev.target.value === '' ? '' : parseFloat(ev.target.value)
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    error: error
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "s",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
    value: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(value.min) ? '' : value.min,
    onChange: ev => handleChange(ev, 'min'),
    onBlur: setTouched,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    "aria-label": minLabel,
    prepend: minLabel,
    compressed: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
    value: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(value.max) ? '' : value.max,
    onChange: ev => handleChange(ev, 'max'),
    onBlur: setTouched,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    "aria-label": maxLabel,
    prepend: maxLabel,
    compressed: true
  }))));
}


/***/ }),

/***/ "./public/components/controls/field.tsx":
/*!**********************************************!*\
  !*** ./public/components/controls/field.tsx ***!
  \**********************************************/
/*! exports provided: FieldParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldParamEditor", function() { return FieldParamEditor; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
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







const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.field.fieldLabel', {
  defaultMessage: 'Field'
});
function FieldParamEditor({
  agg,
  aggParam,
  customError,
  customLabel,
  indexedFields = [],
  showValidation,
  value,
  setTouched,
  setValidity,
  setValue
}) {
  const [isDirty, setIsDirty] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const selectedOptions = value ? [{
    label: value.displayName || value.name,
    target: value
  }] : [];
  const onChange = options => {
    const selectedOption = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(options, '0.target');
    if (!(aggParam.required && !selectedOption)) {
      setValue(selectedOption);
    }
    if (aggParam.onChange) {
      aggParam.onChange(agg);
    }
  };
  const errors = customError ? [customError] : [];
  if (!indexedFields.length) {
    errors.push(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.field.noCompatibleFieldsDescription', {
      defaultMessage: 'The index pattern {indexPatternTitle} does not contain any of the following compatible field types: {fieldTypes}',
      values: {
        indexPatternTitle: agg.getIndexPattern && agg.getIndexPattern().title,
        fieldTypes: getFieldTypesString(agg)
      }
    }));
  }
  const isValid = !!value && !errors.length && !isDirty;
  // we show an error message right away if there is no compatible fields
  const showErrorMessage = (showValidation || !indexedFields.length) && !isValid;
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useValidation"])(setValidity, isValid);
  Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useMount"])(() => {
    // set field if only one available
    if (indexedFields.length !== 1) {
      return;
    }
    const indexedField = indexedFields[0];
    if (!('options' in indexedField)) {
      setValue(indexedField.target);
    } else if (indexedField.options.length === 1) {
      setValue(indexedField.options[0].target);
    }
  });
  const onSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(searchValue => setIsDirty(Boolean(searchValue)), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    label: customLabel || label,
    isInvalid: showErrorMessage,
    fullWidth: true,
    error: errors,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiComboBox"], {
    compressed: true,
    placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('visDefaultEditor.controls.field.selectFieldPlaceholder', {
      defaultMessage: 'Select a field'
    }),
    options: indexedFields,
    isDisabled: !indexedFields.length,
    selectedOptions: selectedOptions,
    singleSelection: {
      asPlainText: true
    },
    isClearable: false,
    isInvalid: showErrorMessage,
    onChange: onChange,
    onBlur: setTouched,
    onSearchChange: onSearchChange,
    sortMatchesBy: "startsWith",
    "data-test-subj": "visDefaultEditorField",
    fullWidth: true
  }));
}
function getFieldTypesString(agg) {
  const param = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(agg, 'type.params', []).find(p => p.name === 'field') || {};
  return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatListAsProse"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseCommaSeparatedList"])(param.filterFieldTypes), {
    inclusive: false
  });
}


/***/ }),

/***/ "./public/components/controls/filter.tsx":
/*!***********************************************!*\
  !*** ./public/components/controls/filter.tsx ***!
  \***********************************************/
/*! exports provided: FilterRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRow", function() { return FilterRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
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






function FilterRow({
  id,
  arrayIndex,
  customLabel,
  value,
  autoFocus,
  disableRemove,
  dataTestSubj,
  agg,
  onChangeValue,
  onRemoveFilter
}) {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])();
  const [showCustomLabel, setShowCustomLabel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const filterLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.filters.filterLabel', {
    defaultMessage: 'Filter {index}',
    values: {
      index: arrayIndex + 1
    }
  });
  const onBlur = () => {
    if (value.query.length > 0) {
      // Store filter to the query log so that it is available in autocomplete.
      services.data.query.addToQueryLog(services.appName, value);
    }
  };
  const FilterControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    iconType: "tag",
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.filters.toggleFilterButtonAriaLabel', {
      defaultMessage: 'Toggle filter label'
    }),
    "aria-expanded": showCustomLabel,
    "aria-controls": `visEditorFilterLabel${arrayIndex}`,
    onClick: () => setShowCustomLabel(!showCustomLabel)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    iconType: "trash",
    color: "danger",
    disabled: disableRemove,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.filters.removeFilterButtonAriaLabel', {
      defaultMessage: 'Remove this filter'
    }),
    onClick: () => onRemoveFilter(id)
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    label: `${filterLabel}${customLabel ? ` - ${customLabel}` : ''}`,
    labelAppend: FilterControl,
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_public__WEBPACK_IMPORTED_MODULE_3__["QueryStringInput"], {
    query: value,
    indexPatterns: [agg.getIndexPattern()],
    onChange: query => onChangeValue(id, query, customLabel),
    onBlur: onBlur,
    disableAutoFocus: !autoFocus,
    dataTestSubj: dataTestSubj,
    bubbleSubmitEvent: true,
    languageSwitcherPopoverAnchorPosition: "leftDown",
    size: "s"
  })), showCustomLabel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    id: `visEditorFilterLabel${arrayIndex}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.filters.definiteFilterLabel', {
      defaultMessage: 'Filter {index} label',
      description: "'Filter {index}' represents the name of the filter as a noun, similar to 'label for filter 1'.",
      values: {
        index: arrayIndex + 1
      }
    }),
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    value: customLabel,
    placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.filters.labelPlaceholder', {
      defaultMessage: 'Label'
    }),
    onChange: ev => onChangeValue(id, value, ev.target.value),
    fullWidth: true,
    compressed: true
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }));
}


/***/ }),

/***/ "./public/components/controls/filters.tsx":
/*!************************************************!*\
  !*** ./public/components/controls/filters.tsx ***!
  \************************************************/
/*! exports provided: FiltersParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersParamEditor", function() { return FiltersParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./public/components/controls/filter.tsx");
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








const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["htmlIdGenerator"])();
function FiltersParamEditor({
  agg,
  value = [],
  setValue
}) {
  const [filters, setFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => value.map(filter => ({
    ...filter,
    id: generateId()
  })));
  Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useMount"])(() => {
    // set parsed values into model after initialization
    setValue(filters.map(filter => Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])({
      ...filter,
      input: filter.input
    }, 'id')));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // responsible for discarding changes
    if (value.length !== filters.length || value.some((filter, index) => !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(filter, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(filters[index], 'id')))) {
      setFilters(value.map(filter => ({
        ...filter,
        id: generateId()
      })));
    }
  }, [filters, value]);
  const updateFilters = updatedFilters => {
    // do not set internal id parameter into saved object
    setValue(updatedFilters.map(filter => Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(filter, 'id')));
    setFilters(updatedFilters);
  };
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])();
  const onAddFilter = () => updateFilters([...filters, {
    input: services.data.query.queryString.getDefaultQuery(),
    label: '',
    id: generateId()
  }]);
  const onRemoveFilter = id => updateFilters(filters.filter(filter => filter.id !== id));
  const onChangeValue = (id, query, label) => updateFilters(filters.map(filter => filter.id === id ? {
    ...filter,
    input: query,
    label
  } : filter));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), filters.map(({
    input,
    label,
    id
  }, arrayIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter__WEBPACK_IMPORTED_MODULE_6__["FilterRow"], {
    key: id,
    id: id,
    arrayIndex: arrayIndex,
    customLabel: label,
    value: input,
    autoFocus: arrayIndex === filters.length - 1,
    disableRemove: arrayIndex === 0 && filters.length === 1,
    dataTestSubj: `visEditorFilterInput_${agg.id}_${arrayIndex}`,
    agg: agg,
    onChangeValue: onChangeValue,
    onRemoveFilter: onRemoveFilter
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
    iconType: "plusInCircle",
    fill: true,
    fullWidth: true,
    onClick: onAddFilter,
    size: "s",
    "data-test-subj": "visEditorAddFilterButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.filters.addFilterButtonLabel",
    defaultMessage: "Add filter"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }));
}


/***/ }),

/***/ "./public/components/controls/has_extended_bounds.tsx":
/*!************************************************************!*\
  !*** ./public/components/controls/has_extended_bounds.tsx ***!
  \************************************************************/
/*! exports provided: HasExtendedBoundsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasExtendedBoundsParamEditor", function() { return HasExtendedBoundsParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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





const {
  isType
} = _data_public__WEBPACK_IMPORTED_MODULE_2__["search"].aggs;
function HasExtendedBoundsParamEditor(props) {
  const {
    agg,
    setValue,
    value
  } = props;
  const minDocCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(agg.params.min_doc_count);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (minDocCount.current !== agg.params.min_doc_count) {
      // The "Extend bounds" param is only enabled when "Show empty buckets" is turned on.
      // So if "Show empty buckets" is changed, "Extend bounds" should reflect changes
      minDocCount.current = agg.params.min_doc_count;
      setValue(value && agg.params.min_doc_count);
    }
  }, [agg.params.min_doc_count, setValue, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_3__["SwitchParamEditor"], _extends({}, props, {
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.extendedBoundsLabel', {
      defaultMessage: 'Extend bounds'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.extendedBoundsTooltip', {
      defaultMessage: 'Min and Max do not filter the results, but rather extend the bounds of the result set.'
    }),
    disabled: !props.agg.params.min_doc_count || !(isType('number')(props.agg) || isType('date')(props.agg))
  }));
}


/***/ }),

/***/ "./public/components/controls/include_exclude.tsx":
/*!********************************************************!*\
  !*** ./public/components/controls/include_exclude.tsx ***!
  \********************************************************/
/*! exports provided: IncludeExcludeParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncludeExcludeParamEditor", function() { return IncludeExcludeParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./public/components/controls/string.tsx");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_simple_number_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/simple_number_list */ "./public/components/controls/components/simple_number_list.tsx");
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





const {
  isNumberType
} = _data_public__WEBPACK_IMPORTED_MODULE_2__["search"].aggs;
function IncludeExcludeParamEditor(props) {
  const {
    agg,
    value,
    setValue
  } = props;
  const isAggOfNumberType = isNumberType(agg);

  // This useEffect converts value from string type to number and back when the field type is changed
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAggOfNumberType && !Array.isArray(value) && value !== undefined) {
      const numberArray = value.split('|').map(item => parseFloat(item)).filter(number => Number.isFinite(number));
      setValue(numberArray.length ? numberArray : ['']);
    } else if (!isAggOfNumberType && Array.isArray(value) && value !== undefined) {
      setValue(value.filter(item => item !== '').join('|'));
    }
  }, [isAggOfNumberType, setValue, value]);
  return isAggOfNumberType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_simple_number_list__WEBPACK_IMPORTED_MODULE_3__["SimpleNumberList"], _extends({}, props, {
    value: value
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_string__WEBPACK_IMPORTED_MODULE_1__["StringParamEditor"], _extends({}, props, {
    value: value
  }));
}

/***/ }),

/***/ "./public/components/controls/index.ts":
/*!*********************************************!*\
  !*** ./public/components/controls/index.ts ***!
  \*********************************************/
/*! exports provided: AutoPrecisionParamEditor, DateRangesParamEditor, DropPartialsParamEditor, ExtendedBoundsParamEditor, FieldParamEditor, FiltersParamEditor, HasExtendedBoundsParamEditor, IncludeExcludeParamEditor, IpRangesParamEditor, IpRangeTypeParamEditor, IsFilteredByCollarParamEditor, MetricAggParamEditor, MinDocCountParamEditor, MissingBucketParamEditor, NumberIntervalParamEditor, OrderByParamEditor, OtherBucketParamEditor, OrderAggParamEditor, PercentilesEditor, PercentileRanksEditor, PrecisionParamEditor, RangesControl, RawJsonParamEditor, ScaleMetricsParamEditor, SizeParamEditor, StringParamEditor, SubAggParamEditor, SubMetricParamEditor, TimeIntervalParamEditor, TopAggregateParamEditor, TopFieldParamEditor, TopSizeParamEditor, TopSortFieldParamEditor, OrderParamEditor, UseGeocentroidParamEditor, MaxBarsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_precision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto_precision */ "./public/components/controls/auto_precision.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoPrecisionParamEditor", function() { return _auto_precision__WEBPACK_IMPORTED_MODULE_0__["AutoPrecisionParamEditor"]; });

/* harmony import */ var _date_ranges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_ranges */ "./public/components/controls/date_ranges.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangesParamEditor", function() { return _date_ranges__WEBPACK_IMPORTED_MODULE_1__["DateRangesParamEditor"]; });

/* harmony import */ var _drop_partials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_partials */ "./public/components/controls/drop_partials.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropPartialsParamEditor", function() { return _drop_partials__WEBPACK_IMPORTED_MODULE_2__["DropPartialsParamEditor"]; });

/* harmony import */ var _extended_bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extended_bounds */ "./public/components/controls/extended_bounds.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedBoundsParamEditor", function() { return _extended_bounds__WEBPACK_IMPORTED_MODULE_3__["ExtendedBoundsParamEditor"]; });

/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field */ "./public/components/controls/field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldParamEditor", function() { return _field__WEBPACK_IMPORTED_MODULE_4__["FieldParamEditor"]; });

/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./public/components/controls/filters.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersParamEditor", function() { return _filters__WEBPACK_IMPORTED_MODULE_5__["FiltersParamEditor"]; });

/* harmony import */ var _has_extended_bounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./has_extended_bounds */ "./public/components/controls/has_extended_bounds.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasExtendedBoundsParamEditor", function() { return _has_extended_bounds__WEBPACK_IMPORTED_MODULE_6__["HasExtendedBoundsParamEditor"]; });

/* harmony import */ var _include_exclude__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./include_exclude */ "./public/components/controls/include_exclude.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncludeExcludeParamEditor", function() { return _include_exclude__WEBPACK_IMPORTED_MODULE_7__["IncludeExcludeParamEditor"]; });

/* harmony import */ var _ip_ranges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ip_ranges */ "./public/components/controls/ip_ranges.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IpRangesParamEditor", function() { return _ip_ranges__WEBPACK_IMPORTED_MODULE_8__["IpRangesParamEditor"]; });

/* harmony import */ var _ip_range_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ip_range_type */ "./public/components/controls/ip_range_type.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IpRangeTypeParamEditor", function() { return _ip_range_type__WEBPACK_IMPORTED_MODULE_9__["IpRangeTypeParamEditor"]; });

/* harmony import */ var _is_filtered_by_collar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is_filtered_by_collar */ "./public/components/controls/is_filtered_by_collar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFilteredByCollarParamEditor", function() { return _is_filtered_by_collar__WEBPACK_IMPORTED_MODULE_10__["IsFilteredByCollarParamEditor"]; });

/* harmony import */ var _metric_agg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metric_agg */ "./public/components/controls/metric_agg.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricAggParamEditor", function() { return _metric_agg__WEBPACK_IMPORTED_MODULE_11__["MetricAggParamEditor"]; });

/* harmony import */ var _min_doc_count__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./min_doc_count */ "./public/components/controls/min_doc_count.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinDocCountParamEditor", function() { return _min_doc_count__WEBPACK_IMPORTED_MODULE_12__["MinDocCountParamEditor"]; });

/* harmony import */ var _missing_bucket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./missing_bucket */ "./public/components/controls/missing_bucket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingBucketParamEditor", function() { return _missing_bucket__WEBPACK_IMPORTED_MODULE_13__["MissingBucketParamEditor"]; });

/* harmony import */ var _number_interval__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./number_interval */ "./public/components/controls/number_interval.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberIntervalParamEditor", function() { return _number_interval__WEBPACK_IMPORTED_MODULE_14__["NumberIntervalParamEditor"]; });

/* harmony import */ var _order_by__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order_by */ "./public/components/controls/order_by.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderByParamEditor", function() { return _order_by__WEBPACK_IMPORTED_MODULE_15__["OrderByParamEditor"]; });

/* harmony import */ var _other_bucket__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./other_bucket */ "./public/components/controls/other_bucket.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtherBucketParamEditor", function() { return _other_bucket__WEBPACK_IMPORTED_MODULE_16__["OtherBucketParamEditor"]; });

/* harmony import */ var _order_agg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order_agg */ "./public/components/controls/order_agg.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderAggParamEditor", function() { return _order_agg__WEBPACK_IMPORTED_MODULE_17__["OrderAggParamEditor"]; });

/* harmony import */ var _percentiles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./percentiles */ "./public/components/controls/percentiles.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentilesEditor", function() { return _percentiles__WEBPACK_IMPORTED_MODULE_18__["PercentilesEditor"]; });

/* harmony import */ var _percentile_ranks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./percentile_ranks */ "./public/components/controls/percentile_ranks.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentileRanksEditor", function() { return _percentile_ranks__WEBPACK_IMPORTED_MODULE_19__["PercentileRanksEditor"]; });

/* harmony import */ var _precision__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./precision */ "./public/components/controls/precision.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecisionParamEditor", function() { return _precision__WEBPACK_IMPORTED_MODULE_20__["PrecisionParamEditor"]; });

/* harmony import */ var _range_control__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./range_control */ "./public/components/controls/range_control.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangesControl", function() { return _range_control__WEBPACK_IMPORTED_MODULE_21__["RangesControl"]; });

/* harmony import */ var _raw_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raw_json */ "./public/components/controls/raw_json.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawJsonParamEditor", function() { return _raw_json__WEBPACK_IMPORTED_MODULE_22__["RawJsonParamEditor"]; });

/* harmony import */ var _scale_metrics__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scale_metrics */ "./public/components/controls/scale_metrics.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleMetricsParamEditor", function() { return _scale_metrics__WEBPACK_IMPORTED_MODULE_23__["ScaleMetricsParamEditor"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./size */ "./public/components/controls/size.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeParamEditor", function() { return _size__WEBPACK_IMPORTED_MODULE_24__["SizeParamEditor"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./string */ "./public/components/controls/string.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringParamEditor", function() { return _string__WEBPACK_IMPORTED_MODULE_25__["StringParamEditor"]; });

/* harmony import */ var _sub_agg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sub_agg */ "./public/components/controls/sub_agg.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubAggParamEditor", function() { return _sub_agg__WEBPACK_IMPORTED_MODULE_26__["SubAggParamEditor"]; });

/* harmony import */ var _sub_metric__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sub_metric */ "./public/components/controls/sub_metric.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubMetricParamEditor", function() { return _sub_metric__WEBPACK_IMPORTED_MODULE_27__["SubMetricParamEditor"]; });

/* harmony import */ var _time_interval__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./time_interval */ "./public/components/controls/time_interval.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeIntervalParamEditor", function() { return _time_interval__WEBPACK_IMPORTED_MODULE_28__["TimeIntervalParamEditor"]; });

/* harmony import */ var _top_aggregate__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./top_aggregate */ "./public/components/controls/top_aggregate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopAggregateParamEditor", function() { return _top_aggregate__WEBPACK_IMPORTED_MODULE_29__["TopAggregateParamEditor"]; });

/* harmony import */ var _top_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./top_field */ "./public/components/controls/top_field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopFieldParamEditor", function() { return _top_field__WEBPACK_IMPORTED_MODULE_30__["TopFieldParamEditor"]; });

/* harmony import */ var _top_size__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./top_size */ "./public/components/controls/top_size.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopSizeParamEditor", function() { return _top_size__WEBPACK_IMPORTED_MODULE_31__["TopSizeParamEditor"]; });

/* harmony import */ var _top_sort_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./top_sort_field */ "./public/components/controls/top_sort_field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopSortFieldParamEditor", function() { return _top_sort_field__WEBPACK_IMPORTED_MODULE_32__["TopSortFieldParamEditor"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./order */ "./public/components/controls/order.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderParamEditor", function() { return _order__WEBPACK_IMPORTED_MODULE_33__["OrderParamEditor"]; });

/* harmony import */ var _use_geocentroid__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./use_geocentroid */ "./public/components/controls/use_geocentroid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseGeocentroidParamEditor", function() { return _use_geocentroid__WEBPACK_IMPORTED_MODULE_34__["UseGeocentroidParamEditor"]; });

/* harmony import */ var _max_bars__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./max_bars */ "./public/components/controls/max_bars.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaxBarsParamEditor", function() { return _max_bars__WEBPACK_IMPORTED_MODULE_35__["MaxBarsParamEditor"]; });

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

/***/ "./public/components/controls/ip_range_type.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/ip_range_type.tsx ***!
  \******************************************************/
/*! exports provided: IpRangeTypeParamEditor, IpRangeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpRangeTypeParamEditor", function() { return IpRangeTypeParamEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpRangeTypes", function() { return IpRangeTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




var IpRangeTypes = /*#__PURE__*/function (IpRangeTypes) {
  IpRangeTypes["MASK"] = "mask";
  IpRangeTypes["FROM_TO"] = "fromTo";
  return IpRangeTypes;
}(IpRangeTypes || {});
function IpRangeTypeParamEditor({
  agg,
  value,
  setValue
}) {
  const options = [{
    id: `visEditorIpRangeFromToLabel${agg.id}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.fromToButtonLabel', {
      defaultMessage: 'From/to'
    })
  }, {
    id: `visEditorIpRangeCidrLabel${agg.id}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRanges.cidrMasksButtonLabel', {
      defaultMessage: 'CIDR masks'
    })
  }];
  const onClick = optionId => {
    setValue(optionId === options[0].id ? IpRangeTypes.FROM_TO : IpRangeTypes.MASK);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonGroup"], {
    isFullWidth: true,
    onChange: onClick,
    idSelected: value === IpRangeTypes.FROM_TO ? options[0].id : options[1].id,
    options: options,
    legend: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.ipRangesAriaLabel', {
      defaultMessage: 'IP ranges'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }));
}


/***/ }),

/***/ "./public/components/controls/ip_ranges.tsx":
/*!**************************************************!*\
  !*** ./public/components/controls/ip_ranges.tsx ***!
  \**************************************************/
/*! exports provided: IpRangesParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpRangesParamEditor", function() { return IpRangesParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_from_to_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/from_to_list */ "./public/components/controls/components/from_to_list.tsx");
/* harmony import */ var _components_mask_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mask_list */ "./public/components/controls/components/mask_list.tsx");
/* harmony import */ var _ip_range_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ip_range_type */ "./public/components/controls/ip_range_type.tsx");
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






function IpRangesParamEditor({
  agg,
  value = {
    fromTo: [],
    mask: []
  },
  setTouched,
  setValue,
  setValidity,
  showValidation
}) {
  const handleMaskListChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(items => setValue({
    ...value,
    [_ip_range_type__WEBPACK_IMPORTED_MODULE_4__["IpRangeTypes"].MASK]: items
  }), [setValue, value]);
  const handleFromToListChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(items => setValue({
    ...value,
    [_ip_range_type__WEBPACK_IMPORTED_MODULE_4__["IpRangeTypes"].FROM_TO]: items
  }), [setValue, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    fullWidth: true,
    id: `visEditorIpRange${agg.id}`,
    display: 'rowCompressed'
  }, agg.params.ipRangeType === _ip_range_type__WEBPACK_IMPORTED_MODULE_4__["IpRangeTypes"].MASK ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mask_list__WEBPACK_IMPORTED_MODULE_3__["MaskList"], {
    list: value.mask,
    showValidation: showValidation,
    onBlur: setTouched,
    onChange: handleMaskListChange,
    setValidity: setValidity
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_from_to_list__WEBPACK_IMPORTED_MODULE_2__["FromToList"], {
    list: value.fromTo,
    showValidation: showValidation,
    onBlur: setTouched,
    onChange: handleFromToListChange,
    setValidity: setValidity
  }));
}


/***/ }),

/***/ "./public/components/controls/is_filtered_by_collar.tsx":
/*!**************************************************************!*\
  !*** ./public/components/controls/is_filtered_by_collar.tsx ***!
  \**************************************************************/
/*! exports provided: IsFilteredByCollarParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFilteredByCollarParamEditor", function() { return IsFilteredByCollarParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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




function IsFilteredByCollarParamEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.onlyRequestDataAroundMapExtentLabel', {
      defaultMessage: 'Only request data around map extent'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.onlyRequestDataAroundMapExtentTooltip', {
      defaultMessage: 'Apply geo_bounding_box filter aggregation to narrow the subject area to the map view box with collar'
    }),
    dataTestSubj: "isFilteredByCollarCheckbox"
  }, props));
}


/***/ }),

/***/ "./public/components/controls/max_bars.tsx":
/*!*************************************************!*\
  !*** ./public/components/controls/max_bars.tsx ***!
  \*************************************************/
/*! exports provided: MaxBarsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxBarsParamEditor", function() { return MaxBarsParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
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







const autoPlaceholder = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.maxBars.autoPlaceholder', {
  defaultMessage: 'Auto'
});
const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
  id: "visDefaultEditor.controls.maxBars.maxBarsLabel",
  defaultMessage: "Max bars"
}), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
  position: "right",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visDefaultEditor.controls.maxBars.maxBarsHelpText",
    defaultMessage: "Intervals will be selected automatically based on the available data. The maximum number of bars can never be greater than the Advanced Setting's {histogramMaxBars}",
    values: {
      histogramMaxBars: _data_public__WEBPACK_IMPORTED_MODULE_5__["UI_SETTINGS"].HISTOGRAM_MAX_BARS
    }
  }),
  type: "questionInCircle"
}));
function MaxBarsParamEditor({
  disabled,
  iconTip,
  value,
  setValue,
  showValidation,
  setValidity,
  setTouched
}) {
  var _services$uiSettings;
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])();
  const uiSettingMaxBars = (_services$uiSettings = services.uiSettings) === null || _services$uiSettings === void 0 ? void 0 : _services$uiSettings.get(_data_public__WEBPACK_IMPORTED_MODULE_5__["UI_SETTINGS"].HISTOGRAM_MAX_BARS);
  const isValid = disabled || value === undefined || value === '' || Number(value) > 0 || value < uiSettingMaxBars;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ev => setValue(ev.target.value === '' ? '' : parseFloat(ev.target.value)), [setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
    value: value || '',
    placeholder: autoPlaceholder,
    onChange: onChange,
    min: 1,
    fullWidth: true,
    compressed: true,
    max: uiSettingMaxBars,
    isInvalid: showValidation ? !isValid : false,
    onBlur: setTouched,
    disabled: disabled,
    "data-test-subj": "maxBarsParamEditor"
  }));
}


/***/ }),

/***/ "./public/components/controls/metric_agg.tsx":
/*!***************************************************!*\
  !*** ./public/components/controls/metric_agg.tsx ***!
  \***************************************************/
/*! exports provided: DEFAULT_OPTIONS, aggFilter, MetricAggParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OPTIONS", function() { return DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggFilter", function() { return aggFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricAggParamEditor", function() { return MetricAggParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
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





const aggFilter = ['!top_hits', '!percentiles', '!percentile_ranks', '!median', '!std_dev'];
const EMPTY_VALUE = 'EMPTY_VALUE';
const DEFAULT_OPTIONS = [{
  text: '',
  value: EMPTY_VALUE,
  hidden: true
}];
function MetricAggParamEditor({
  agg,
  value,
  showValidation,
  setValue,
  setValidity,
  setTouched,
  metricAggs = []
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.metricLabel', {
    defaultMessage: 'Metric'
  });
  const isValid = !!value;
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useValidation"])(setValidity, isValid);
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useFallbackMetric"])(setValue, aggFilter, metricAggs, value);
  const filteredMetrics = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => metricAggs.filter(respAgg => respAgg.type.name !== agg.type.name), [metricAggs, agg.type.name]);
  const options = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useAvailableOptions"])(aggFilter, filteredMetrics, DEFAULT_OPTIONS);
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ev => setValue(ev.target.value), [setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation && !isValid,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    compressed: true,
    fullWidth: true,
    options: options,
    value: value || EMPTY_VALUE,
    onChange: onChange,
    isInvalid: showValidation && !isValid,
    onBlur: setTouched,
    "data-test-subj": `visEditorSubAggMetric${agg.id}`
  }));
}


/***/ }),

/***/ "./public/components/controls/min_doc_count.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/min_doc_count.tsx ***!
  \******************************************************/
/*! exports provided: MinDocCountParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinDocCountParamEditor", function() { return MinDocCountParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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




function MinDocCountParamEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.showEmptyBucketsLabel', {
      defaultMessage: 'Show empty buckets'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.showEmptyBucketsTooltip', {
      defaultMessage: 'Show all buckets, not only the buckets with results'
    })
  }, props));
}


/***/ }),

/***/ "./public/components/controls/missing_bucket.tsx":
/*!*******************************************************!*\
  !*** ./public/components/controls/missing_bucket.tsx ***!
  \*******************************************************/
/*! exports provided: MissingBucketParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingBucketParamEditor", function() { return MissingBucketParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_3__);
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





function MissingBucketParamEditor(props) {
  const fieldTypeIsNotString = !_data_public__WEBPACK_IMPORTED_MODULE_3__["search"].aggs.isStringType(props.agg);
  const {
    setValue
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (fieldTypeIsNotString) {
      setValue(false);
    }
  }, [fieldTypeIsNotString, setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({}, props, {
    dataTestSubj: "missingBucketSwitch",
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.otherBucket.showMissingValuesLabel', {
      defaultMessage: 'Show missing values'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.otherBucket.showMissingValuesTooltip', {
      defaultMessage: 'Only works for fields of type "string". When enabled, include documents with missing ' + 'values in the search. If this bucket is in the top N, it appears in the chart. ' + 'If not in the top N, and you enable "Group other values in separate bucket", ' + 'OpenSearch adds the missing values to the "other" bucket.'
    }),
    disabled: fieldTypeIsNotString
  }));
}


/***/ }),

/***/ "./public/components/controls/number_interval.tsx":
/*!********************************************************!*\
  !*** ./public/components/controls/number_interval.tsx ***!
  \********************************************************/
/*! exports provided: NumberIntervalParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberIntervalParamEditor", function() { return NumberIntervalParamEditor; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
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







const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
  id: "visDefaultEditor.controls.numberInterval.minimumIntervalLabel",
  defaultMessage: "Minimum interval"
}), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIconTip"], {
  position: "right",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "visDefaultEditor.controls.numberInterval.minimumIntervalTooltip",
    defaultMessage: "Interval will be automatically scaled in the event that the provided value creates more buckets than specified by Advanced Setting's {histogramMaxBars}",
    values: {
      histogramMaxBars: _data_public__WEBPACK_IMPORTED_MODULE_5__["UI_SETTINGS"].HISTOGRAM_MAX_BARS
    }
  }),
  type: "questionInCircle"
}));
const autoInterval = 'auto';
const isAutoInterval = value => value === autoInterval;
const selectIntervalPlaceholder = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.numberInterval.selectIntervalPlaceholder', {
  defaultMessage: 'Enter an interval'
});
const autoIntervalIsUsedPlaceholder = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.numberInterval.autoInteralIsUsed', {
  defaultMessage: 'Auto interval is used'
});
const useAutoIntervalLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.useAutoInterval', {
  defaultMessage: 'Use auto interval'
});
function NumberIntervalParamEditor({
  agg,
  editorConfig,
  showValidation,
  value,
  setTouched,
  setValidity,
  setValue
}) {
  const isAutoChecked = isAutoInterval(value);
  const base = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(editorConfig, 'interval.base');
  const min = base || 0;
  const isValid = value !== '' && value !== undefined && (isAutoInterval(value) || Number(value) >= min);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(({
    target
  }) => setValue(isNaN(target.valueAsNumber) ? '' : target.valueAsNumber), [setValue]);
  const onAutoSwitchChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const isAutoSwitchChecked = e.target.checked;
    setValue(isAutoSwitchChecked ? autoInterval : '');
  }, [setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    display: 'rowCompressed',
    label: label,
    fullWidth: true,
    isInvalid: showValidation && !isValid,
    helpText: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(editorConfig, 'interval.help')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    gutterSize: "s",
    responsive: false,
    direction: 'column'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSwitch"], {
    label: useAutoIntervalLabel,
    onChange: onAutoSwitchChange,
    checked: isAutoChecked,
    compressed: true,
    "data-test-subj": `visEditorIntervalSwitch${agg.id}`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFieldNumber"], {
    value: !isAutoChecked ? value : '',
    min: min,
    step: base || 'any',
    "data-test-subj": `visEditorInterval${agg.id}`,
    isInvalid: showValidation && !isValid,
    onChange: onChange,
    onBlur: setTouched,
    disabled: isAutoChecked,
    fullWidth: true,
    compressed: true,
    placeholder: isAutoChecked ? autoIntervalIsUsedPlaceholder : selectIntervalPlaceholder
  }))));
}


/***/ }),

/***/ "./public/components/controls/order.tsx":
/*!**********************************************!*\
  !*** ./public/components/controls/order.tsx ***!
  \**********************************************/
/*! exports provided: OrderParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderParamEditor", function() { return OrderParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




function OrderParamEditor({
  aggParam,
  value,
  showValidation,
  setValue,
  setValidity,
  setTouched
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.orderLabel', {
    defaultMessage: 'Order'
  });
  const isValid = !!value;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);

  // @ts-ignore
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    options: aggParam.options,
    value: value && value.value,
    onChange: ev => setValue(aggParam.options.find(opt => opt.value === ev.target.value)),
    fullWidth: true,
    compressed: true,
    isInvalid: showValidation ? !isValid : false,
    onBlur: setTouched
  }));
}


/***/ }),

/***/ "./public/components/controls/order_agg.tsx":
/*!**************************************************!*\
  !*** ./public/components/controls/order_agg.tsx ***!
  \**************************************************/
/*! exports provided: OrderAggParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderAggParamEditor", function() { return OrderAggParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
/* harmony import */ var _agg_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agg_params */ "./public/components/agg_params.tsx");
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






function OrderAggParamEditor({
  agg,
  aggParam,
  formIsTouched,
  value,
  metricAggs,
  state,
  setValue,
  setValidity,
  setTouched,
  schemas
}) {
  const orderBy = agg.params.orderBy;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (orderBy === 'custom' && !value) {
      setValue(aggParam.makeAgg(agg));
    }
    if (orderBy !== 'custom' && value) {
      setValue(undefined);
    }
  }, [agg, aggParam, orderBy, setValue, value]);
  const {
    onAggTypeChange,
    setAggParamValue
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useSubAggParamsHandlers"])(agg, aggParam, value, setValue);
  if (!agg.params.orderAgg) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_params__WEBPACK_IMPORTED_MODULE_4__["DefaultEditorAggParams"], {
    agg: value,
    allowedAggs: aggParam.allowedAggs,
    hideCustomLabel: true,
    groupName: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
    className: "visEditorAgg__subAgg",
    formIsTouched: formIsTouched,
    indexPattern: agg.getIndexPattern(),
    metricAggs: metricAggs,
    state: state,
    setAggParamValue: setAggParamValue,
    onAggTypeChange: onAggTypeChange,
    setValidity: setValidity,
    setTouched: setTouched,
    schemas: schemas
  }));
}


/***/ }),

/***/ "./public/components/controls/order_by.tsx":
/*!*************************************************!*\
  !*** ./public/components/controls/order_by.tsx ***!
  \*************************************************/
/*! exports provided: OrderByParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByParamEditor", function() { return OrderByParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
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







const {
  termsAggFilter
} = _data_public__WEBPACK_IMPORTED_MODULE_5__["search"].aggs;
const DEFAULT_VALUE = '_key';
const DEFAULT_OPTIONS = [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.orderAgg.alphabeticalLabel', {
    defaultMessage: 'Alphabetical'
  }),
  value: DEFAULT_VALUE
}];
const isCompatibleAgg = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCompatibleAggregation"])(termsAggFilter);
function OrderByParamEditor({
  agg,
  value,
  showValidation,
  setValue,
  setValidity,
  setTouched,
  metricAggs
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.orderAgg.orderByLabel', {
    defaultMessage: 'Order by'
  });
  const isValid = !!value;
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useValidation"])(setValidity, isValid);
  Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useMount"])(() => {
    // setup the initial value of orderBy
    if (!value) {
      let respAgg = {
        id: DEFAULT_VALUE
      };
      if (metricAggs) {
        respAgg = metricAggs.filter(isCompatibleAgg)[0] || respAgg;
      }
      setValue(respAgg.id);
    }
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useFallbackMetric"])(setValue, termsAggFilter, metricAggs, value, DEFAULT_VALUE);
  const options = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useAvailableOptions"])(termsAggFilter, metricAggs, DEFAULT_OPTIONS);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation && !isValid,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    options: options,
    value: value,
    onChange: ev => setValue(ev.target.value),
    fullWidth: true,
    compressed: true,
    isInvalid: showValidation && !isValid,
    onBlur: setTouched,
    "data-test-subj": `visEditorOrderBy${agg.id}`
  }));
}


/***/ }),

/***/ "./public/components/controls/other_bucket.tsx":
/*!*****************************************************!*\
  !*** ./public/components/controls/other_bucket.tsx ***!
  \*****************************************************/
/*! exports provided: OtherBucketParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBucketParamEditor", function() { return OtherBucketParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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




function OtherBucketParamEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({
    dataTestSubj: "otherBucketSwitch",
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.otherBucket.groupValuesLabel', {
      defaultMessage: 'Group other values in separate bucket'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.otherBucket.groupValuesTooltip', {
      defaultMessage: 'Values not in the top N are grouped in this bucket. ' + "To include documents with missing values, enable 'Show missing values'."
    })
  }, props));
}


/***/ }),

/***/ "./public/components/controls/percentile_ranks.tsx":
/*!*********************************************************!*\
  !*** ./public/components/controls/percentile_ranks.tsx ***!
  \*********************************************************/
/*! exports provided: PercentileRanksEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentileRanksEditor", function() { return PercentileRanksEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_number_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/number_list */ "./public/components/controls/components/number_list/index.ts");
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





function PercentileRanksEditor({
  agg,
  showValidation,
  value = [],
  setTouched,
  setValidity,
  setValue
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.percentileRanks.valuesLabel', {
    defaultMessage: 'Values'
  });
  const [isValid, setIsValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const setModelValidity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isListValid => {
    setIsValid(isListValid);
    setValidity(isListValid);
  }, [setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    labelType: "legend",
    fullWidth: true,
    id: `visEditorPercentileRanksLabel${agg.id}`,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed',
    "data-test-subj": "visEditorPercentileRanks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_number_list__WEBPACK_IMPORTED_MODULE_3__["NumberList"], {
    labelledbyId: `visEditorPercentileRanksLabel${agg.id}-legend`,
    numberArray: value,
    range: "[-Infinity,Infinity]",
    unitName: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.percentileRanks.valueUnitNameText', {
      defaultMessage: 'value'
    }),
    validateAscendingOrder: true,
    showValidation: showValidation,
    onChange: setValue,
    setTouched: setTouched,
    setValidity: setModelValidity
  }));
}


/***/ }),

/***/ "./public/components/controls/percentiles.tsx":
/*!****************************************************!*\
  !*** ./public/components/controls/percentiles.tsx ***!
  \****************************************************/
/*! exports provided: PercentilesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentilesEditor", function() { return PercentilesEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_number_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/number_list */ "./public/components/controls/components/number_list/index.ts");
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





function PercentilesEditor({
  agg,
  showValidation,
  value = [],
  setTouched,
  setValidity,
  setValue
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.percentiles.percentsLabel', {
    defaultMessage: 'Percents'
  });
  const [isValid, setIsValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const setModelValidity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isListValid => {
    setIsValid(isListValid);
    setValidity(isListValid);
  }, [setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    labelType: "legend",
    fullWidth: true,
    id: `visEditorPercentileLabel${agg.id}`,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_number_list__WEBPACK_IMPORTED_MODULE_3__["NumberList"], {
    labelledbyId: `visEditorPercentileLabel${agg.id}-legend`,
    numberArray: value,
    range: "[0,100]",
    disallowDuplicates: true,
    unitName: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.percentileRanks.percentUnitNameText', {
      defaultMessage: 'percent'
    }),
    showValidation: showValidation,
    onChange: setValue,
    setTouched: setTouched,
    setValidity: setModelValidity
  }));
}


/***/ }),

/***/ "./public/components/controls/precision.tsx":
/*!**************************************************!*\
  !*** ./public/components/controls/precision.tsx ***!
  \**************************************************/
/*! exports provided: PrecisionParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecisionParamEditor", function() { return PrecisionParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
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





function PrecisionParamEditor({
  agg,
  value,
  setValue
}) {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.precisionLabel', {
    defaultMessage: 'Precision'
  });
  if (agg.params.autoPrecision) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiRange"], {
    min: 1,
    max: services.uiSettings.get('visualization:tileMap:maxPrecision'),
    value: value || '',
    onChange: ev => setValue(Number(ev.currentTarget.value)),
    "data-test-subj": `visEditorMapPrecision${agg.id}`,
    showValue: true,
    compressed: true
  }));
}


/***/ }),

/***/ "./public/components/controls/range_control.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/range_control.tsx ***!
  \******************************************************/
/*! exports provided: RangesControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangesControl", function() { return RangesControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ranges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranges */ "./public/components/controls/ranges.tsx");
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



const RangesControl = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ranges__WEBPACK_IMPORTED_MODULE_1__["RangesParamEditor"], {
  value: props.value,
  setValue: props.setValue
});

/***/ }),

/***/ "./public/components/controls/ranges.tsx":
/*!***********************************************!*\
  !*** ./public/components/controls/ranges.tsx ***!
  \***********************************************/
/*! exports provided: RangesParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangesParamEditor", function() { return RangesParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
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






const FROM_PLACEHOLDER = '\u2212\u221E';
const TO_PLACEHOLDER = '+\u221E';
const generateId = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["htmlIdGenerator"])();
const isEmpty = value => value === undefined || value === null;
function RangesParamEditor({
  'data-test-subj': dataTestSubj = 'range',
  addRangeValues,
  error,
  value = [],
  hidePlaceholders,
  setValue,
  setTouched,
  setValidity,
  validateRange
}) {
  const [ranges, setRanges] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => value.map(range => ({
    ...range,
    id: generateId()
  })));
  const updateRanges = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(rangeValues => {
    // do not set internal id parameter into saved object
    setValue(rangeValues.map(range => Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(range, 'id')));
    setRanges(rangeValues);
    if (setTouched) {
      setTouched(true);
    }
  }, [setTouched, setValue]);
  const onAddRange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => addRangeValues ? updateRanges([...ranges, {
    ...addRangeValues(),
    id: generateId()
  }]) : updateRanges([...ranges, {
    id: generateId()
  }]), [addRangeValues, ranges, updateRanges]);
  const onRemoveRange = id => updateRanges(ranges.filter(range => range.id !== id));
  const onChangeRange = (id, key, newValue) => updateRanges(ranges.map(range => range.id === id ? {
    ...range,
    [key]: newValue === '' ? undefined : parseFloat(newValue)
  } : range));

  // set up an initial range when there is no default range
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!value.length) {
      onAddRange();
    }
  }, [onAddRange, value.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // responsible for discarding changes
    if (value.length !== ranges.length || value.some((range, index) => !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEqual"])(range, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"])(ranges[index], 'id')))) {
      setRanges(value.map(range => ({
        ...range,
        id: generateId()
      })));
    }
  }, [ranges, value]);
  const hasInvalidRange = validateRange && ranges.some(({
    from,
    to,
    id
  }, index) => {
    const [isFromValid, isToValid] = validateRange({
      from,
      to
    }, index);
    return !isFromValid || !isToValid;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (setValidity) {
      setValidity(!hasInvalidRange);
    }
  }, [hasInvalidRange, setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    display: 'rowCompressed',
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ranges.map(({
    from,
    to,
    id
  }, index) => {
    const deleteBtnTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.removeRangeButtonAriaLabel', {
      defaultMessage: 'Remove the range of {from} to {to}',
      values: {
        from: isEmpty(from) ? FROM_PLACEHOLDER : from,
        to: isEmpty(to) ? TO_PLACEHOLDER : to
      }
    });
    let isFromValid = true;
    let isToValid = true;
    if (validateRange) {
      [isFromValid, isToValid] = validateRange({
        from,
        to
      }, index);
    }
    const gtePrependLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.greaterThanOrEqualPrepend', {
      defaultMessage: '\u2265'
    });
    const gteTooltipContent = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.greaterThanOrEqualTooltip', {
      defaultMessage: 'Greater than or equal to'
    });
    const ltPrependLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.lessThanPrepend', {
      defaultMessage: '\u003c'
    });
    const ltTooltipContent = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.lessThanTooltip', {
      defaultMessage: 'Less than'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      alignItems: "center",
      responsive: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.fromLabel', {
        defaultMessage: 'From'
      }),
      "data-test-subj": `${dataTestSubj}${index}__from`,
      value: isEmpty(from) ? '' : from,
      placeholder: hidePlaceholders ? undefined : FROM_PLACEHOLDER,
      onChange: ev => onChangeRange(id, 'from', ev.target.value),
      fullWidth: true,
      compressed: true,
      isInvalid: !isFromValid,
      prepend: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
        content: gteTooltipContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "s"
      }, gtePrependLabel))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "sortRight",
      color: "subdued"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldNumber"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.ranges.toLabel', {
        defaultMessage: 'To'
      }),
      "data-test-subj": `${dataTestSubj}${index}__to`,
      value: isEmpty(to) ? '' : to,
      placeholder: hidePlaceholders ? undefined : TO_PLACEHOLDER,
      onChange: ev => onChangeRange(id, 'to', ev.target.value),
      fullWidth: true,
      compressed: true,
      isInvalid: !isToValid,
      prepend: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
        content: ltTooltipContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "s"
      }, ltPrependLabel))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
      title: deleteBtnTitle,
      "aria-label": deleteBtnTitle,
      disabled: value.length === 1,
      color: "danger",
      iconType: "trash",
      onClick: () => onRemoveRange(id)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "xs"
    }));
  }), hasInvalidRange && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormErrorText"], null, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    "data-test-subj": `${dataTestSubj}__addRangeButton`,
    iconType: "plusInCircleFilled",
    onClick: onAddRange,
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "visDefaultEditor.controls.ranges.addRangeButtonLabel",
    defaultMessage: "Add range"
  })))));
}


/***/ }),

/***/ "./public/components/controls/raw_json.tsx":
/*!*************************************************!*\
  !*** ./public/components/controls/raw_json.tsx ***!
  \*************************************************/
/*! exports provided: RawJsonParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawJsonParamEditor", function() { return RawJsonParamEditor; });
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace/mode/json */ "../../../node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/theme/github */ "../../../node_modules/brace/theme/github.js");
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_4__);
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






function RawJsonParamEditor({
  showValidation,
  value = '',
  setValidity,
  setValue,
  setTouched
}) {
  const [isFieldValid, setFieldValidity] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [editorReady, setEditorReady] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const editorTooltipText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.jsonInputTooltip', {
    defaultMessage: "Any JSON formatted properties you add here will be merged with the opensearch aggregation definition for this section. For example 'shard_size' on a terms aggregation."
  }), []);
  const jsonEditorLabelText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.jsonInputLabel', {
    defaultMessage: 'JSON input'
  }), []);
  const label = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, jsonEditorLabelText, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIconTip"], {
    position: "right",
    content: editorTooltipText,
    type: "questionInCircle"
  })), [jsonEditorLabelText, editorTooltipText]);
  const onEditorValidate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(annotations => {
    // The first onValidate returned from EuiCodeEditor is a false negative
    if (editorReady) {
      const validity = annotations.length === 0;
      setFieldValidity(validity);
      setValidity(validity);
    } else {
      setEditorReady(true);
    }
  }, [setValidity, editorReady]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    label: label,
    isInvalid: showValidation ? !isFieldValid : false,
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCodeEditor"], {
    mode: "json",
    theme: "textmate",
    width: "100%",
    height: "250px",
    value: value,
    onValidate: onEditorValidate,
    setOptions: {
      fontSize: '14px'
    },
    onChange: setValue,
    onBlur: setTouched,
    "aria-label": jsonEditorLabelText,
    "aria-describedby": "jsonEditorDescription"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    id: "jsonEditorDescription"
  }, editorTooltipText))));
}


/***/ }),

/***/ "./public/components/controls/scale_metrics.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/scale_metrics.tsx ***!
  \******************************************************/
/*! exports provided: ScaleMetricsParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleMetricsParamEditor", function() { return ScaleMetricsParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ "./public/components/controls/switch.tsx");
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




function ScaleMetricsParamEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switch__WEBPACK_IMPORTED_MODULE_2__["SwitchParamEditor"], _extends({
    dataTestSubj: "scaleMetricsSwitch",
    displayLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.scaleMetricsLabel', {
      defaultMessage: 'Scale metric values (deprecated)'
    }),
    displayToolTip: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.scaleMetricsTooltip', {
      defaultMessage: 'If you select a manual minimum interval and a larger interval will be used, enabling this will ' + 'cause count and sum metrics to be scaled to the manual selected interval.'
    })
  }, props));
}


/***/ }),

/***/ "./public/components/controls/size.tsx":
/*!*********************************************!*\
  !*** ./public/components/controls/size.tsx ***!
  \*********************************************/
/*! exports provided: SizeParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeParamEditor", function() { return SizeParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
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





function SizeParamEditor({
  disabled,
  iconTip,
  value,
  setValue,
  showValidation,
  setValidity,
  setTouched
}) {
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.sizeLabel",
    defaultMessage: "Size"
  }), iconTip);
  const isValid = disabled || Number(value) > 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFieldNumber"], {
    value: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(value) ? '' : value,
    onChange: ev => setValue(ev.target.value === '' ? '' : parseFloat(ev.target.value)),
    fullWidth: true,
    compressed: true,
    isInvalid: showValidation ? !isValid : false,
    onBlur: setTouched,
    min: 1,
    disabled: disabled,
    "data-test-subj": "sizeParamEditor"
  }));
}


/***/ }),

/***/ "./public/components/controls/string.tsx":
/*!***********************************************!*\
  !*** ./public/components/controls/string.tsx ***!
  \***********************************************/
/*! exports provided: StringParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParamEditor", function() { return StringParamEditor; });
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



function StringParamEditor({
  agg,
  aggParam,
  showValidation,
  value,
  setValidity,
  setValue,
  setTouched
}) {
  const isValid = aggParam.required ? !!value : true;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ev => setValue(ev.target.value), [setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    className: "visEditorAggParam__string",
    label: aggParam.displayName || aggParam.name,
    fullWidth: true,
    display: 'rowCompressed',
    isInvalid: showValidation ? !isValid : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    value: value || '',
    "data-test-subj": `visEditorStringInput${agg.id}${aggParam.name}`,
    onChange: onChange,
    fullWidth: true,
    compressed: true,
    onBlur: setTouched,
    isInvalid: showValidation ? !isValid : false
  }));
}


/***/ }),

/***/ "./public/components/controls/sub_agg.tsx":
/*!************************************************!*\
  !*** ./public/components/controls/sub_agg.tsx ***!
  \************************************************/
/*! exports provided: SubAggParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAggParamEditor", function() { return SubAggParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
/* harmony import */ var _agg_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../agg_params */ "./public/components/agg_params.tsx");
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






function SubAggParamEditor({
  agg,
  aggParam,
  formIsTouched,
  metricAggs,
  state,
  setValue,
  setValidity,
  setTouched,
  schemas
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // we aren't creating a custom aggConfig
    if (agg.params.metricAgg !== 'custom') {
      setValue(undefined);
    } else if (!agg.params.customMetric) {
      setValue(aggParam.makeAgg(agg));
    }
  }, [metricAggs, agg, setValue, aggParam]);
  const {
    onAggTypeChange,
    setAggParamValue
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["useSubAggParamsHandlers"])(agg, aggParam, agg.params.customMetric, setValue);
  if (agg.params.metricAgg !== 'custom' || !agg.params.customMetric) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_params__WEBPACK_IMPORTED_MODULE_4__["DefaultEditorAggParams"], {
    agg: agg.params.customMetric,
    allowedAggs: aggParam.allowedAggs,
    groupName: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
    className: "visEditorAgg__subAgg",
    formIsTouched: formIsTouched,
    indexPattern: agg.getIndexPattern(),
    metricAggs: metricAggs,
    state: state,
    setAggParamValue: setAggParamValue,
    onAggTypeChange: onAggTypeChange,
    setValidity: setValidity,
    setTouched: setTouched,
    schemas: schemas,
    hideCustomLabel: true
  }));
}


/***/ }),

/***/ "./public/components/controls/sub_metric.tsx":
/*!***************************************************!*\
  !*** ./public/components/controls/sub_metric.tsx ***!
  \***************************************************/
/*! exports provided: SubMetricParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMetricParamEditor", function() { return SubMetricParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./public/components/controls/utils/index.ts");
/* harmony import */ var _agg_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agg_params */ "./public/components/agg_params.tsx");
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








function SubMetricParamEditor({
  agg,
  aggParam,
  formIsTouched,
  metricAggs,
  state,
  setValue,
  setValidity,
  setTouched,
  schemas
}) {
  const metricTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.metrics.metricTitle', {
    defaultMessage: 'Metric'
  });
  const bucketTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.metrics.bucketTitle', {
    defaultMessage: 'Bucket'
  });
  const type = aggParam.name;
  const isCustomMetric = type === 'customMetric';
  const aggTitle = isCustomMetric ? metricTitle : bucketTitle;
  const aggGroup = isCustomMetric ? _data_public__WEBPACK_IMPORTED_MODULE_4__["AggGroupNames"].Metrics : _data_public__WEBPACK_IMPORTED_MODULE_4__["AggGroupNames"].Buckets;
  Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useMount"])(() => {
    if (agg.params[type]) {
      setValue(agg.params[type]);
    } else {
      setValue(aggParam.makeAgg(agg));
    }
  });
  const {
    onAggTypeChange,
    setAggParamValue
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["useSubAggParamsHandlers"])(agg, aggParam, agg.params[type], setValue);
  if (!agg.params[type]) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormLabel"], null, aggTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_agg_params__WEBPACK_IMPORTED_MODULE_6__["DefaultEditorAggParams"], {
    agg: agg.params[type],
    allowedAggs: aggParam.allowedAggs,
    groupName: aggGroup,
    className: "visEditorAgg__subAgg",
    formIsTouched: formIsTouched,
    indexPattern: agg.getIndexPattern(),
    metricAggs: metricAggs,
    state: state,
    setAggParamValue: setAggParamValue,
    onAggTypeChange: onAggTypeChange,
    setValidity: setValidity,
    setTouched: setTouched,
    schemas: schemas,
    hideCustomLabel: !isCustomMetric
  }));
}


/***/ }),

/***/ "./public/components/controls/switch.tsx":
/*!***********************************************!*\
  !*** ./public/components/controls/switch.tsx ***!
  \***********************************************/
/*! exports provided: SwitchParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchParamEditor", function() { return SwitchParamEditor; });
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



function SwitchParamEditor({
  value = false,
  setValue,
  dataTestSubj,
  displayToolTip,
  displayLabel,
  disabled
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    content: displayToolTip,
    delay: "long",
    position: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
    compressed: true,
    label: displayLabel,
    checked: value,
    disabled: disabled,
    "data-test-subj": dataTestSubj,
    onChange: ev => setValue(ev.target.checked)
  })));
}


/***/ }),

/***/ "./public/components/controls/time_interval.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/time_interval.tsx ***!
  \******************************************************/
/*! exports provided: TimeIntervalParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeIntervalParamEditor", function() { return TimeIntervalParamEditor; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
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







const {
  parseOpenSearchInterval,
  InvalidOpenSearchCalendarIntervalError
} = _data_public__WEBPACK_IMPORTED_MODULE_5__["search"].aggs;

// we check if OpenSearch interval is valid to show a user appropriate error message
// e.g. there is the case when a user inputs '14d' but it's '2w' in expression equivalent and the request will fail
// we don't check it for 0ms because the overall time range has not yet been set
function isValidCalendarInterval(interval) {
  if (interval === '0ms') {
    return {
      isValidCalendarValue: true
    };
  }
  try {
    parseOpenSearchInterval(interval);
    return {
      isValidCalendarValue: true
    };
  } catch (e) {
    if (e instanceof InvalidOpenSearchCalendarIntervalError) {
      return {
        isValidCalendarValue: false,
        error: e.message
      };
    }
    return {
      isValidCalendarValue: true
    };
  }
}
const errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.timeInterval.invalidFormatErrorMessage', {
  defaultMessage: 'Invalid interval format.'
});
function validateInterval(agg, value, definedOption, timeBase) {
  var _agg$buckets2;
  if (definedOption) {
    var _agg$buckets;
    return {
      isValid: true,
      interval: (_agg$buckets = agg.buckets) === null || _agg$buckets === void 0 ? void 0 : _agg$buckets.getInterval()
    };
  }
  if (!value) {
    return {
      isValid: false
    };
  }
  if (!timeBase) {
    // we check if OpenSearch interval is valid OpenSearch interval to show a user appropriate error message
    // we don't check if there is timeBase
    const {
      isValidCalendarValue,
      error
    } = isValidCalendarInterval(value);
    if (!isValidCalendarValue) {
      return {
        isValid: false,
        error
      };
    }
  }
  const isValid = _data_public__WEBPACK_IMPORTED_MODULE_5__["search"].aggs.isValidInterval(value, timeBase);
  if (!isValid) {
    return {
      isValid: false,
      error: errorMessage
    };
  }
  const interval = (_agg$buckets2 = agg.buckets) === null || _agg$buckets2 === void 0 ? void 0 : _agg$buckets2.getInterval();
  const {
    isValidCalendarValue,
    error
  } = isValidCalendarInterval(interval.expression);
  if (!isValidCalendarValue) {
    return {
      isValid: false,
      error
    };
  }
  return {
    isValid,
    interval
  };
}
function TimeIntervalParamEditor({
  agg,
  aggParam,
  editorConfig,
  value,
  setValue,
  showValidation,
  setTouched,
  setValidity
}) {
  const timeBase = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(editorConfig, 'interval.timeBase');
  const options = timeBase ? [] : (aggParam.options || []).reduce((filtered, option) => {
    if (option.enabled ? option.enabled(agg) : true) {
      filtered.push({
        label: option.display,
        key: option.val
      });
    }
    return filtered;
  }, []);
  let selectedOptions = [];
  let definedOption;
  if (value) {
    definedOption = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(options, {
      key: value
    });
    selectedOptions = definedOption ? [definedOption] : [{
      label: value,
      key: 'custom'
    }];
  }
  const {
    isValid,
    error,
    interval
  } = validateInterval(agg, value, definedOption, timeBase);
  const scaledHelpText = interval && interval.scaled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    "data-test-subj": "currentlyScaledText",
    className: "eui-displayBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "visDefaultEditor.controls.timeInterval.scaledHelpText",
    defaultMessage: "Currently scaled to {bucketDescription}",
    values: {
      bucketDescription: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(interval, 'description') || ''
    }
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIconTip"], {
    position: "right",
    type: "questionInCircle",
    content: interval.scale <= 1 ? tooManyBucketsTooltip : tooLargeBucketsTooltip
  })) : null;
  const helpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, scaledHelpText, Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(editorConfig, 'interval.help') || selectOptionHelpText);
  const onCustomInterval = customValue => setValue(customValue.trim());
  const onChange = opts => {
    const selectedOpt = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, '0');
    setValue(selectedOpt ? selectedOpt.key : '');
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    display: 'rowCompressed',
    error: error,
    fullWidth: true,
    helpText: helpText,
    isInvalid: showValidation && !isValid,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.timeInterval.minimumIntervalLabel', {
      defaultMessage: 'Minimum interval'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiComboBox"], {
    compressed: true,
    fullWidth: true,
    "data-test-subj": "visEditorInterval",
    isInvalid: showValidation && !isValid,
    noSuggestions: !!timeBase,
    onChange: onChange,
    onCreateOption: onCustomInterval,
    options: options,
    selectedOptions: selectedOptions,
    singleSelection: {
      asPlainText: true
    },
    placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visDefaultEditor.controls.timeInterval.selectIntervalPlaceholder', {
      defaultMessage: 'Select an interval'
    }),
    onBlur: setTouched
  }));
}
const tooManyBucketsTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
  id: "visDefaultEditor.controls.timeInterval.createsTooManyBucketsTooltip",
  defaultMessage: "This interval creates too many buckets to show in the selected time range, so it has been scaled up."
});
const tooLargeBucketsTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
  id: "visDefaultEditor.controls.timeInterval.createsTooLargeBucketsTooltip",
  defaultMessage: "This interval creates buckets that are too large to show in the selected time range, so it has been scaled down."
});
const selectOptionHelpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
  id: "visDefaultEditor.controls.timeInterval.selectOptionHelpText",
  defaultMessage: "Select an option or create a custom value. Examples: 30s, 20m, 24h, 2d, 1w, 1M"
});


/***/ }),

/***/ "./public/components/controls/top_aggregate.tsx":
/*!******************************************************!*\
  !*** ./public/components/controls/top_aggregate.tsx ***!
  \******************************************************/
/*! exports provided: getCompatibleAggs, TopAggregateParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompatibleAggs", function() { return getCompatibleAggs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopAggregateParamEditor", function() { return TopAggregateParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
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





function getCompatibleAggs(agg) {
  const {
    options = []
  } = agg.getAggParams().find(({
    name
  }) => name === 'aggregate');
  return options.filter(option => option.isCompatible(agg));
}
function TopAggregateParamEditor({
  agg,
  aggParam,
  value,
  showValidation,
  setValue,
  setValidity,
  setTouched
}) {
  const isFirstRun = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const fieldType = agg.params.field && agg.params.field.type;
  const emptyValue = {
    text: '',
    value: 'EMPTY_VALUE',
    disabled: true,
    hidden: true
  };
  const filteredOptions = getCompatibleAggs(agg).map(({
    text,
    value: val
  }) => ({
    text,
    value: val
  })).sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()));
  const options = [emptyValue, ...filteredOptions];
  const disabled = fieldType && !filteredOptions.length;
  const isValid = disabled || !!value;
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visDefaultEditor.controls.aggregateWithLabel",
    defaultMessage: "Aggregate with"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
    position: "right",
    type: "questionInCircle",
    content: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.aggregateWithTooltip', {
      defaultMessage: 'Choose a strategy for combining multiple hits or a multi-valued field into a single metric.'
    })
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
  }, [isValid, setValidity]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (value) {
      if (aggParam.options.find(opt => opt.value === value.value)) {
        return;
      }
      setValue();
    }
    if (filteredOptions.length === 1) {
      setValue(aggParam.options.find(opt => opt.value === filteredOptions[0].value));
    }
  }, [aggParam.options, fieldType, filteredOptions, setValue, value]);
  const handleChange = event => {
    if (event.target.value === emptyValue.value) {
      setValue();
    } else {
      setValue(aggParam.options.find(opt => opt.value === event.target.value));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: label,
    fullWidth: true,
    isInvalid: showValidation ? !isValid : false,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
    options: options,
    value: value ? value.value : emptyValue.value,
    onChange: handleChange,
    fullWidth: true,
    compressed: true,
    isInvalid: showValidation ? !isValid : false,
    disabled: disabled,
    onBlur: setTouched,
    "data-test-subj": "visDefaultEditorAggregateWith"
  }));
}

/***/ }),

/***/ "./public/components/controls/top_field.tsx":
/*!**************************************************!*\
  !*** ./public/components/controls/top_field.tsx ***!
  \**************************************************/
/*! exports provided: TopFieldParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopFieldParamEditor", function() { return TopFieldParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "./public/components/controls/field.tsx");
/* harmony import */ var _top_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top_aggregate */ "./public/components/controls/top_aggregate.tsx");
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





function TopFieldParamEditor(props) {
  const compatibleAggs = Object(_top_aggregate__WEBPACK_IMPORTED_MODULE_3__["getCompatibleAggs"])(props.agg);
  let customError;
  if (props.value && !compatibleAggs.length) {
    customError = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.aggregateWith.noAggsErrorTooltip', {
      defaultMessage: 'The chosen field has no compatible aggregations.'
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_field__WEBPACK_IMPORTED_MODULE_2__["FieldParamEditor"], _extends({}, props, {
    customError: customError
  }));
}


/***/ }),

/***/ "./public/components/controls/top_size.tsx":
/*!*************************************************!*\
  !*** ./public/components/controls/top_size.tsx ***!
  \*************************************************/
/*! exports provided: TopSizeParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSizeParamEditor", function() { return TopSizeParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size */ "./public/components/controls/size.tsx");
/* harmony import */ var _top_aggregate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top_aggregate */ "./public/components/controls/top_aggregate.tsx");
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






function TopSizeParamEditor(props) {
  const iconTip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
    position: "right",
    content: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.sizeTooltip', {
      defaultMessage: "Request top-K hits. Multiple hits will be combined via 'aggregate with'."
    }),
    type: "questionInCircle"
  }));
  const fieldType = props.agg.params.field && props.agg.params.field.type;
  const disabled = fieldType && !Object(_top_aggregate__WEBPACK_IMPORTED_MODULE_4__["getCompatibleAggs"])(props.agg).length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_size__WEBPACK_IMPORTED_MODULE_3__["SizeParamEditor"], _extends({}, props, {
    iconTip: iconTip,
    disabled: disabled
  }));
}


/***/ }),

/***/ "./public/components/controls/top_sort_field.tsx":
/*!*******************************************************!*\
  !*** ./public/components/controls/top_sort_field.tsx ***!
  \*******************************************************/
/*! exports provided: TopSortFieldParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSortFieldParamEditor", function() { return TopSortFieldParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "./public/components/controls/field.tsx");
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




function TopSortFieldParamEditor(props) {
  const customLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.sortOnLabel', {
    defaultMessage: 'Sort on'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_field__WEBPACK_IMPORTED_MODULE_2__["FieldParamEditor"], _extends({}, props, {
    customLabel: customLabel
  }));
}


/***/ }),

/***/ "./public/components/controls/use_geocentroid.tsx":
/*!********************************************************!*\
  !*** ./public/components/controls/use_geocentroid.tsx ***!
  \********************************************************/
/*! exports provided: UseGeocentroidParamEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseGeocentroidParamEditor", function() { return UseGeocentroidParamEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




function UseGeocentroidParamEditor({
  value = false,
  setValue
}) {
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visDefaultEditor.controls.placeMarkersOffGridLabel', {
    defaultMessage: 'Place markers off grid (use geocentroid)'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
    compressed: true,
    label: label,
    checked: value,
    onChange: ev => setValue(ev.target.checked)
  }));
}


/***/ }),

/***/ "./public/components/controls/utils/agg_utils.ts":
/*!*******************************************************!*\
  !*** ./public/components/controls/utils/agg_utils.ts ***!
  \*******************************************************/
/*! exports provided: CUSTOM_METRIC, safeMakeLabel, isCompatibleAggregation, useAvailableOptions, useFallbackMetric, useValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_METRIC", function() { return CUSTOM_METRIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeMakeLabel", function() { return safeMakeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompatibleAggregation", function() { return isCompatibleAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAvailableOptions", function() { return useAvailableOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFallbackMetric", function() { return useFallbackMetric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useValidation", function() { return useValidation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
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



const DEFAULT_METRIC = 'custom';
const CUSTOM_METRIC = {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.customMetricLabel', {
    defaultMessage: 'Custom metric'
  }),
  value: DEFAULT_METRIC
};
function useCompatibleAggCallback(aggFilter) {
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(isCompatibleAggregation(aggFilter), [aggFilter]);
}

/**
 * the effect is used to set up a default metric aggregation in case,
 * when previously selected metric has been removed
 */
function useFallbackMetric(setValue, aggFilter, metricAggs, value, fallbackValue) {
  const isCompatibleAgg = useCompatibleAggCallback(aggFilter);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (metricAggs && value && value !== DEFAULT_METRIC) {
      // ensure that metric is set to a valid agg
      const respAgg = metricAggs.filter(isCompatibleAgg).find(aggregation => aggregation.id === value);
      if (!respAgg && value !== fallbackValue) {
        setValue(fallbackValue);
      }
    }
  }, [setValue, isCompatibleAgg, metricAggs, value, fallbackValue]);
}

/**
 * this makes an array of available options in appropriate format for EuiCompressedSelect,
 * calculates if an option is disabled
 */
function useAvailableOptions(aggFilter, metricAggs = [], defaultOptions = []) {
  const isCompatibleAgg = useCompatibleAggCallback(aggFilter);
  const options = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...metricAggs.map(respAgg => ({
    text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.definiteMetricLabel', {
      defaultMessage: 'Metric: {metric}',
      values: {
        metric: safeMakeLabel(respAgg)
      }
    }),
    value: respAgg.id,
    disabled: !isCompatibleAgg(respAgg)
  })), CUSTOM_METRIC, ...defaultOptions], [metricAggs, defaultOptions, isCompatibleAgg]);
  return options;
}

/**
 * the effect is used to set up the editor form validity
 * and reset it if a param has been removed
 */
function useValidation(setValidity, isValid) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isValid);
    return () => setValidity(true);
  }, [isValid, setValidity]);
}
function safeMakeLabel(agg) {
  try {
    return agg.makeLabel();
  } catch (e) {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visDefaultEditor.controls.aggNotValidLabel', {
      defaultMessage: '- agg not valid -'
    });
  }
}
function isCompatibleAggregation(aggFilter) {
  return agg => {
    return !aggFilter.includes(`!${agg.type.name}`);
  };
}


/***/ }),

/***/ "./public/components/controls/utils/index.ts":
/*!***************************************************!*\
  !*** ./public/components/controls/utils/index.ts ***!
  \***************************************************/
/*! exports provided: useSubAggParamsHandlers, wrapWithInlineComp, parseCommaSeparatedList, formatListAsProse, CUSTOM_METRIC, safeMakeLabel, isCompatibleAggregation, useAvailableOptions, useFallbackMetric, useValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_handlers */ "./public/components/controls/utils/use_handlers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubAggParamsHandlers", function() { return _use_handlers__WEBPACK_IMPORTED_MODULE_0__["useSubAggParamsHandlers"]; });

/* harmony import */ var _inline_comp_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline_comp_wrapper */ "./public/components/controls/utils/inline_comp_wrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapWithInlineComp", function() { return _inline_comp_wrapper__WEBPACK_IMPORTED_MODULE_1__["wrapWithInlineComp"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strings */ "./public/components/controls/utils/strings/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCommaSeparatedList", function() { return _strings__WEBPACK_IMPORTED_MODULE_2__["parseCommaSeparatedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListAsProse", function() { return _strings__WEBPACK_IMPORTED_MODULE_2__["formatListAsProse"]; });

/* harmony import */ var _agg_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agg_utils */ "./public/components/controls/utils/agg_utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_METRIC", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_METRIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeMakeLabel", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["safeMakeLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompatibleAggregation", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["isCompatibleAggregation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAvailableOptions", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["useAvailableOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFallbackMetric", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["useFallbackMetric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useValidation", function() { return _agg_utils__WEBPACK_IMPORTED_MODULE_3__["useValidation"]; });

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

/***/ "./public/components/controls/utils/inline_comp_wrapper.tsx":
/*!******************************************************************!*\
  !*** ./public/components/controls/utils/inline_comp_wrapper.tsx ***!
  \******************************************************************/
/*! exports provided: wrapWithInlineComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithInlineComp", function() { return wrapWithInlineComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


const wrapWithInlineComp = WrapComponent => props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: `visEditorAggParam--half visEditorAggParam--half-${props.aggParam.name}`
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapComponent, props));

/***/ }),

/***/ "./public/components/controls/utils/strings/comma_separated_list.ts":
/*!**************************************************************************!*\
  !*** ./public/components/controls/utils/strings/comma_separated_list.ts ***!
  \**************************************************************************/
/*! exports provided: parseCommaSeparatedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCommaSeparatedList", function() { return parseCommaSeparatedList; });
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

function parseCommaSeparatedList(input) {
  if (Array.isArray(input)) {
    return input;
  }
  return String(input || '').split(',').map(word => word.trim()).filter(Boolean);
}

/***/ }),

/***/ "./public/components/controls/utils/strings/index.ts":
/*!***********************************************************!*\
  !*** ./public/components/controls/utils/strings/index.ts ***!
  \***********************************************************/
/*! exports provided: parseCommaSeparatedList, formatListAsProse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comma_separated_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comma_separated_list */ "./public/components/controls/utils/strings/comma_separated_list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCommaSeparatedList", function() { return _comma_separated_list__WEBPACK_IMPORTED_MODULE_0__["parseCommaSeparatedList"]; });

/* harmony import */ var _prose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prose */ "./public/components/controls/utils/strings/prose.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatListAsProse", function() { return _prose__WEBPACK_IMPORTED_MODULE_1__["formatListAsProse"]; });

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

/***/ "./public/components/controls/utils/strings/prose.ts":
/*!***********************************************************!*\
  !*** ./public/components/controls/utils/strings/prose.ts ***!
  \***********************************************************/
/*! exports provided: formatListAsProse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatListAsProse", function() { return formatListAsProse; });
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
 *  Converts an array of items into a sentence-ready string.
 *
 *  @param {Array<string>} list
 *  @param {Object} [options={}]
 *  @property {Boolean} [options.inclusive=true] Creates an inclusive list using "and"
 *                                               when `true` (default), otherwise uses "or"
 *  @return {String}
 */
function formatListAsProse(list, options = {}) {
  const {
    inclusive = true
  } = options;
  const count = list.length;
  const conjunction = inclusive ? 'and' : 'or';
  if (count <= 2) {
    return list.join(` ${conjunction} `);
  }
  return list.slice(0, -1).concat(`${conjunction} ${list[count - 1]}`).join(', ');
}

/***/ }),

/***/ "./public/components/controls/utils/use_handlers.ts":
/*!**********************************************************!*\
  !*** ./public/components/controls/utils/use_handlers.ts ***!
  \**********************************************************/
/*! exports provided: useSubAggParamsHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubAggParamsHandlers", function() { return useSubAggParamsHandlers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


function useSubAggParamsHandlers(agg, aggParam, subAgg, setValue) {
  const setAggParamValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((aggId, paramName, val) => {
    const parsedParams = subAgg.toJSON();
    const params = {
      ...parsedParams,
      params: {
        ...parsedParams.params,
        [paramName]: val
      }
    };
    setValue(aggParam.makeAgg(agg, params));
  }, [agg, aggParam, setValue, subAgg]);
  const onAggTypeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((aggId, aggType) => {
    const parsedAgg = subAgg.toJSON();
    const params = {
      ...parsedAgg,
      type: aggType
    };
    setValue(aggParam.makeAgg(agg, params));
  }, [agg, aggParam, setValue, subAgg]);
  return {
    onAggTypeChange,
    setAggParamValue
  };
}


/***/ }),

/***/ "./public/components/utils/editor_config.ts":
/*!**************************************************!*\
  !*** ./public/components/utils/editor_config.ts ***!
  \**************************************************/
/*! exports provided: getEditorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorConfig", function() { return getEditorConfig; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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
 * A hidden parameter can be hidden from the UI completely.
 */

/**
 * A fixed parameter has a fixed value for a specific field.
 * It can optionally also be hidden.
 */

/**
 * Numeric interval parameters must always be set in the editor to a multiple of
 * the specified base. It can optionally also be hidden.
 */

/**
 * Time interval parameters must always be set in the editor to a multiple of
 * the specified base. It can optionally also be hidden.
 */

function getEditorConfig(indexPattern, aggTypeName, fieldName) {
  const aggRestrictions = indexPattern.getAggregationRestrictions();
  if (!aggRestrictions || !aggTypeName || !fieldName) {
    return {};
  }

  // Exclude certain param options for terms:
  // otherBucket, missingBucket, orderBy, orderAgg
  if (aggTypeName === 'terms') {
    return {
      otherBucket: {
        hidden: true
      },
      missingBucket: {
        hidden: true
      }
    };
  }
  const fieldAgg = aggRestrictions[aggTypeName] && aggRestrictions[aggTypeName][fieldName];
  if (!fieldAgg) {
    return {};
  }

  // Set interval and base interval for histograms based on agg restrictions
  if (aggTypeName === 'histogram') {
    const interval = fieldAgg.interval;
    return interval ? {
      intervalBase: {
        fixedValue: interval
      },
      interval: {
        base: interval,
        help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visDefaultEditor.editorConfig.histogram.interval.helpText', {
          defaultMessage: 'Must be a multiple of configuration interval: {interval}',
          values: {
            interval
          }
        })
      }
    } : {};
  }

  // Set date histogram time zone based on agg restrictions
  if (aggTypeName === 'date_histogram') {
    // Interval is deprecated on date_histogram rollups, but may still be present
    // See https://github.com/elastic/kibana/pull/36310
    const interval = fieldAgg.calendar_interval || fieldAgg.fixed_interval;
    return {
      useNormalizedOpenSearchInterval: {
        fixedValue: false
      },
      interval: {
        default: interval,
        timeBase: interval,
        help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visDefaultEditor.editorConfig.dateHistogram.customInterval.helpText', {
          defaultMessage: 'Must be a multiple of configuration interval: {interval}',
          values: {
            interval
          }
        })
      }
    };
  }
  return {};
}

/***/ }),

/***/ "./public/components/utils/index.ts":
/*!******************************************!*\
  !*** ./public/components/utils/index.ts ***!
  \******************************************/
/*! exports provided: getEditorConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor_config */ "./public/components/utils/editor_config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEditorConfig", function() { return _editor_config__WEBPACK_IMPORTED_MODULE_0__["getEditorConfig"]; });

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

/***/ "./public/default_editor_controller.tsx":
/*!**********************************************!*\
  !*** ./public/default_editor_controller.tsx ***!
  \**********************************************/
/*! exports provided: DefaultEditorController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorController", function() { return DefaultEditorController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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




const DefaultEditor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./default_editor */ "./public/default_editor.tsx")));
class DefaultEditorController {
  constructor(el, vis, eventEmitter, embeddableHandler) {
    this.el = el;
    this.vis = vis;
    this.eventEmitter = eventEmitter;
    this.embeddableHandler = embeddableHandler;
  }
  render(props) {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          flex: '1 1 auto',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingChart"], {
        size: "xl",
        mono: true
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DefaultEditor, _extends({
      eventEmitter: this.eventEmitter,
      embeddableHandler: this.embeddableHandler,
      vis: this.vis
    }, props)))), this.el);
  }
  destroy() {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(this.el);
  }
}


/***/ }),

/***/ "./public/editor_size.ts":
/*!*******************************!*\
  !*** ./public/editor_size.ts ***!
  \*******************************/
/*! exports provided: DefaultEditorSize, getInitialWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorSize", function() { return DefaultEditorSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialWidth", function() { return getInitialWidth; });
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

let DefaultEditorSize = /*#__PURE__*/function (DefaultEditorSize) {
  DefaultEditorSize["SMALL"] = "small";
  DefaultEditorSize["MEDIUM"] = "medium";
  DefaultEditorSize["LARGE"] = "large";
  return DefaultEditorSize;
}({});
const getInitialWidth = size => {
  switch (size) {
    case DefaultEditorSize.SMALL:
      return 15;
    case DefaultEditorSize.LARGE:
      return 50;
    case DefaultEditorSize.MEDIUM:
    default:
      return 30;
  }
};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: DefaultEditorController, useValidation, RangesParamEditor, RangeValues, DefaultEditorAggParams, DefaultEditorSize, getInitialWidth, groupAndSortBy, ISchemas, Schemas, Schema, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _default_editor_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default_editor_controller */ "./public/default_editor_controller.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorController", function() { return _default_editor_controller__WEBPACK_IMPORTED_MODULE_0__["DefaultEditorController"]; });

/* harmony import */ var _components_controls_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/controls/utils */ "./public/components/controls/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useValidation", function() { return _components_controls_utils__WEBPACK_IMPORTED_MODULE_1__["useValidation"]; });

/* harmony import */ var _components_controls_ranges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls/ranges */ "./public/components/controls/ranges.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangesParamEditor", function() { return _components_controls_ranges__WEBPACK_IMPORTED_MODULE_2__["RangesParamEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeValues", function() { return _components_controls_ranges__WEBPACK_IMPORTED_MODULE_2__["RangeValues"]; });

/* harmony import */ var _components_agg_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/agg_params */ "./public/components/agg_params.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorAggParams", function() { return _components_agg_params__WEBPACK_IMPORTED_MODULE_3__["DefaultEditorAggParams"]; });

/* harmony import */ var _editor_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor_size */ "./public/editor_size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultEditorSize", function() { return _editor_size__WEBPACK_IMPORTED_MODULE_4__["DefaultEditorSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialWidth", function() { return _editor_size__WEBPACK_IMPORTED_MODULE_4__["getInitialWidth"]; });

/* harmony import */ var _vis_options_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis_options_props */ "./public/vis_options_props.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupAndSortBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_6__["groupAndSortBy"]; });

/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schemas */ "./public/schemas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISchemas", function() { return _schemas__WEBPACK_IMPORTED_MODULE_7__["ISchemas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schemas", function() { return _schemas__WEBPACK_IMPORTED_MODULE_7__["Schemas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return _schemas__WEBPACK_IMPORTED_MODULE_7__["Schema"]; });

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










/** dummy plugin, we just want visDefaultEditor to have its own bundle */
function plugin() {
  return new class VisDefaultEditor {
    setup() {}
    start() {}
  }();
}

/***/ }),

/***/ "./public/schemas.ts":
/*!***************************!*\
  !*** ./public/schemas.ts ***!
  \***************************/
/*! exports provided: Schemas, getSchemaByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schemas", function() { return Schemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaByName", function() { return getSchemaByName; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_1__);
let _AggGroupNames$Bucket, _AggGroupNames$Metric;
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



_AggGroupNames$Bucket = _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets;
_AggGroupNames$Metric = _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Metrics;
class Schemas {
  constructor(schemas) {
    _defineProperty(this, "all", []);
    _defineProperty(this, _AggGroupNames$Bucket, []);
    _defineProperty(this, _AggGroupNames$Metric, []);
    lodash__WEBPACK_IMPORTED_MODULE_0___default()(schemas || []).chain().map(schema => {
      if (!schema.name) throw new Error('all schema must have a unique name');
      if (schema.name === 'split') {
        schema.params = [{
          name: 'row',
          default: true
        }];
      }
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaults"])(schema, {
        min: 0,
        max: Infinity,
        group: _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
        title: schema.name,
        aggFilter: '*',
        editor: false,
        params: []
      });
      return schema;
    }).tap(fullSchemas => {
      this.all = fullSchemas;
    }).groupBy('group').forOwn((group, groupName) => {
      // @ts-ignore
      this[groupName] = group;
    }).commit();
  }
}
const getSchemaByName = (schemas, schemaName) => {
  return schemas.find(s => s.name === schemaName) || {};
};

/***/ }),

/***/ "./public/utils.ts":
/*!*************************!*\
  !*** ./public/utils.ts ***!
  \*************************/
/*! exports provided: groupAndSortBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupAndSortBy", function() { return groupAndSortBy; });
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
 * Groups and sorts alphabetically objects and returns an array of options that are compatible with EuiComboBox options.
 *
 * @param objects An array of objects that will be grouped.
 * @param groupBy A field name which objects are grouped by.
 * @param labelName A name of a property which value will be displayed.
 *
 * @returns An array of grouped and sorted alphabetically `objects` that are compatible with EuiComboBox options.
 */
function groupAndSortBy(objects, groupBy, labelName) {
  const groupedOptions = objects.reduce((array, obj) => {
    const group = array.find(element => element.label === obj[groupBy]);
    const option = {
      label: obj[labelName],
      target: obj
    };
    if (group && group.options) {
      group.options.push(option);
    } else {
      array.push({
        label: obj[groupBy],
        options: [option]
      });
    }
    return array;
  }, []);
  groupedOptions.sort(sortByLabel);
  groupedOptions.forEach(group => {
    if (Array.isArray(group.options)) {
      group.options.sort(sortByLabel);
    }
  });
  if (groupedOptions.length === 1 && !groupedOptions[0].label) {
    return groupedOptions[0].options || [];
  }
  return groupedOptions;
}
function sortByLabel(a, b) {
  return (a.label || '').toLowerCase().localeCompare((b.label || '').toLowerCase());
}

/***/ }),

/***/ "./public/vis_options_props.tsx":
/*!**************************************!*\
  !*** ./public/vis_options_props.tsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/***/ "react":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__osdSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDom;

/***/ }),

/***/ "tslib":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.TsLib" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.TsLib;

/***/ })

/******/ });
//# sourceMappingURL=visDefaultEditor.plugin.js.map