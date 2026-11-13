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
/******/ 		"visTypeTimeseries": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeTimeseries.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["visTypeTimeseries_bundle_jsonpfunction"] = window["visTypeTimeseries_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v7dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/application/index.scss?v7dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#25262e}.tvbAnnotationsEditor{background-color:#1d1e24;border:1px solid #343741;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #343741}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#1d1e24}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#141519}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#4b2b3a}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#08334a}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#26443f}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#4d3e25}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#4d1f1f}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#25262e;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(255,255,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(29,30,36,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#1d1e24;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #d4dae5}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #25262e}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(27,169,245,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#25262e;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#1d1e24}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #1d1e24;box-shadow:0 0 0 1px #535966,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#98a2b3}.ouiColorPalettePicker__itemTitle{font-size:12px;font-size:0.75rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#25262e;color:#dfe5ef;line-height:1.5;font-family:'Roboto Mono', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#08334a}.tvbNoData .tvbNoData__title{color:#dfe5ef;font-size:16px;font-size:1rem;line-height:1.5rem;font-weight:600;letter-spacing:-0.02em;color:#1ba9f5}.tvbMarkdownEditor{display:flex;background-color:#1d1e24;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #25262e}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #343741}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#1d1e24;border:1px solid #343741;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #343741}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#1d1e24}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#141519}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#4b2b3a}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#08334a}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#26443f}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#4d3e25}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#4d1f1f}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#1d1e24;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#141519;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#0b4462}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#1ba9f5;color:#1d1e24}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:18px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#25262e;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(255,255,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(29,30,36,.6)}.tvbVisGauge__value{color:rgba(255,255,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(29,30,36,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(255,255,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(29,30,36,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(255,255,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(29,30,36,.6)}.tvbVisMetric__value--primary{color:rgba(255,255,255,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(29,30,36,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(255,255,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(29,30,36,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(255,255,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(29,30,36,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(255,255,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(29,30,36,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(255,255,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(255,255,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(255,255,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(29,30,36,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(29,30,36,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(29,30,36,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,eAAe,CAAC,iBAAiB,CAAC,iCAAiC,YAAY,CAAC,wBAAwB,CAAC,sBAAsB,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,yDAAyD,WAAW,CAAC,qDAAqD,WAAW,CAAC,sDAAsD,sEAAsE,CAAC,wBAAwB,CAAC,wDAAwD,0DAA0D,CAAC,gEAAgE,aAAa,CAAC,UAAU,CAAC,eAAe,CAAC,4HAA4H,oEAAoE,CAAC,0BAA0B,CAAC,cAAc,CAAC,6DAA6D,eAAe,CAAC,+DAA+D,iBAAiB,CAAC,8DAA8D,iBAAiB,CAAC,+DAA+D,kBAAkB,CAAC,wDAAwD,8BAA8B,CAAC,kDAAkD,wBAAwB,CAAC,oDAAoD,wBAAwB,CAAC,mDAAmD,wBAAwB,CAAC,oDAAoD,wBAAwB,CAAC,oDAAoD,wBAAwB,CAAC,oDAAoD,wBAAwB,CAAC,mDAAmD,wBAAwB,CAAC,sBAAsB,kBAAkB,CAAC,WAAW,CAAC,qBAAqB,wBAAwB,CAAC,WAAW,CAAC,iBAAiB,CAAC,gBAAgB,iBAAiB,CAAC,WAAW,CAAC,sDAAsD,kBAAkB,CAAC,6EAA6E,kBAAkB,CAAC,iFAAiF,aAAa,CAAC,wBAAwB,SAAS,CAAC,2BAA2B,CAAC,0CAA0C,2BAA2B,CAAC,gCAAgC,sBAAsB,CAAC,0BAA0B,CAAC,eAAe,CAAC,yDAAyD,sBAAsB,CAAC,eAAe,CAAC,2CAA2C,WAAW,CAAC,sBAAsB,oBAAoB,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,qCAAqC,CAAC,6CAA6C,CAAC,4BAA4B,mGAAmG,CAAC,QAAQ,+HAA+H,CAAC,WAAW,CAAC,YAAY,CAAC,iBAAiB,CAAC,6BAA6B,UAAU,CAAC,MAAM,CAAC,iBAAiB,CAAC,UAAU,CAAC,kBAAkB,CAAC,UAAU,CAAC,cAAc,QAAQ,CAAC,eAAe,iBAAiB,CAAC,WAAW,CAAC,sBAAsB,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,CAAC,SAAS,CAAC,qCAAqC,wCAAwC,CAAC,WAAW,CAAC,wBAAwB,CAAC,mCAAmC,CAAC,kBAAkB,CAAC,oEAAoE,CAAC,cAAc,CAAC,oBAAoB,CAAC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,iCAAiC,wCAAwC,CAAC,WAAW,CAAC,wBAAwB,CAAC,mCAAmC,CAAC,kBAAkB,CAAC,oEAAoE,CAAC,cAAc,CAAC,oBAAoB,CAAC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,0BAA0B,wCAAwC,CAAC,WAAW,CAAC,wBAAwB,CAAC,mCAAmC,CAAC,kBAAkB,CAAC,oEAAoE,CAAC,cAAc,CAAC,oBAAoB,CAAC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,qCAAqC,uBAAuB,CAAC,YAAY,CAAC,0BAA0B,YAAY,CAAC,0BAA0B,WAAW,CAAC,wBAAwB,CAAC,0BAA0B,CAAC,mBAAmB,CAAC,iCAAiC,WAAW,CAAC,8DAA8D,wBAAwB,CAAC,qBAAqB,YAAY,CAAC,2CAA2C,wCAAwC,CAAC,oBAAoB,CAAC,uCAAuC,wCAAwC,CAAC,oBAAoB,CAAC,gCAAgC,wCAAwC,CAAC,oBAAoB,CAAC,eAAe,iBAAiB,CAAC,UAAU,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,SAAS,CAAC,mFAAmF,iBAAiB,CAAC,QAAQ,CAAC,QAAQ,CAAC,MAAM,CAAC,OAAO,CAAC,iBAAiB,CAAC,yCAAyC,gFAAgF,CAAC,0CAA0C,kEAAkE,CAAC,yCAAyC,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,kBAAkB,CAAC,eAAe,CAAC,gBAAgB,CAAC,wBAAwB,CAAC,gDAAgD,UAAU,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,kBAAkB,CAAC,wBAAwB,CAAC,qBAAqB,YAAY,CAAC,+CAA+C,wCAAwC,CAAC,oBAAoB,CAAC,oDAAoD,qCAAqC,CAAC,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,MAAM,CAAC,OAAO,CAAC,OAAO,CAAC,WAAW,CAAC,eAAe,CAAC,gFAAgF,cAAc,CAAC,0GAA0G,UAAU,CAAC,0BAA0B,wCAAwC,CAAC,WAAW,CAAC,wBAAwB,CAAC,mCAAmC,CAAC,kBAAkB,CAAC,oEAAoE,CAAC,cAAc,CAAC,oBAAoB,CAAC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,iBAAiB,CAAC,KAAK,CAAC,WAAW,CAAC,UAAU,CAAC,wBAAwB,CAAC,mBAAmB,CAAC,SAAS,CAAC,wBAAwB,CAAC,cAAc,WAAW,CAAC,gCAAgC,iBAAiB,CAAC,OAAO,CAAC,UAAU,CAAC,WAAW,CAAC,eAAe,CAAC,8BAA8B,SAAS,CAAC,6BAA6B,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,oCAAoC,UAAU,CAAC,aAAa,CAAC,iBAAiB,CAAC,MAAM,CAAC,KAAK,CAAC,WAAW,CAAC,UAAU,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,gDAAgD,KAAK,CAAC,YAAY,CAAC,mBAAmB,CAAC,WAAW,CAAC,wBAAwB,CAAC,wFAAwF,CAAC,uDAAuD,eAAe,CAAC,oCAAoC,4BAA4B,CAAC,sGAAsG,eAAe,CAAC,0BAA0B,aAAa,CAAC,kCAAkC,cAAc,CAAC,iBAAiB,CAAC,eAAe,CAAC,0DAA0D,cAAc,CAAC,wBAAwB,YAAY,CAAC,kBAAkB,CAAC,eAAe,CAAC,UAAU,CAAC,wCAAwC,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,CAAC,8CAA8C,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,iBAAiB,CAAC,UAAU,CAAC,mBAAmB,CAAC,qCAAqC,CAAC,gFAAgF,UAAU,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,CAAC,yCAAyC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,iBAAiB,CAAC,UAAU,CAAC,mBAAmB,CAAC,qCAAqC,CAAC,2EAA2E,UAAU,CAAC,oCAAoC,iBAAiB,CAAC,WAAW,CAAC,kBAAkB,CAAC,0CAA0C,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,kBAAkB,CAAC,UAAU,CAAC,mBAAmB,CAAC,qCAAqC,CAAC,4EAA4E,WAAW,CAAC,wCAAwC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,UAAU,CAAC,sBAAsB,CAAC,gBAAgB,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,uBAAuB,eAAe,CAAC,wDAAwD,cAAc,CAAC,iBAAiB,WAAW,CAAC,kBAAkB,CAAC,aAAa,CAAC,eAAe,CAAC,8DAA8D,CAAC,eAAe,CAAC,oBAAoB,CAAC,WAAW,YAAY,CAAC,WAAW,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,wBAAwB,CAAC,6BAA6B,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,aAAa,CAAC,mBAAmB,YAAY,CAAC,wBAAwB,CAAC,YAAY,CAAC,yDAAyD,SAAS,CAAC,aAAa,CAAC,2BAA2B,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,aAAa,CAAC,gCAAgC,aAAa,CAAC,mBAAmB,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,+BAA+B,CAAC,4BAA4B,YAAY,CAAC,iBAAiB,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,+CAA+C,WAAW,CAAC,2CAA2C,WAAW,CAAC,4CAA4C,sEAAsE,CAAC,wBAAwB,CAAC,8CAA8C,0DAA0D,CAAC,sDAAsD,aAAa,CAAC,UAAU,CAAC,eAAe,CAAC,wGAAwG,oEAAoE,CAAC,0BAA0B,CAAC,cAAc,CAAC,mDAAmD,eAAe,CAAC,qDAAqD,iBAAiB,CAAC,oDAAoD,iBAAiB,CAAC,qDAAqD,kBAAkB,CAAC,8CAA8C,8BAA8B,CAAC,wCAAwC,wBAAwB,CAAC,0CAA0C,wBAAwB,CAAC,yCAAyC,wBAAwB,CAAC,0CAA0C,wBAAwB,CAAC,0CAA0C,wBAAwB,CAAC,0CAA0C,wBAAwB,CAAC,yCAAyC,wBAAwB,CAAC,iBAAiB,kBAAkB,CAAC,WAAW,CAAC,iBAAiB,gBAAgB,CAAC,cAAc,CAAC,WAAW,MAAM,CAAC,wBAAwB,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,wBAAwB,CAAC,aAAa,CAAC,+BAA+B,WAAW,CAAC,oCAAoC,iBAAiB,CAAC,YAAY,CAAC,aAAa,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,QAAQ,CAAC,gBAAgB,CAAC,WAAW,CAAC,UAAU,CAAC,0CAA0C,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,aAAa,CAAC,2CAA2C,UAAU,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,WAAW,CAAC,gBAAgB,CAAC,kBAAkB,cAAc,CAAC,eAAe,CAAC,aAAa,UAAU,CAAC,YAAY,CAAC,cAAc,CAAC,4BAA4B,CAAC,mBAAmB,CAAC,oBAAoB,YAAY,CAAC,eAAe,CAAC,YAAY,CAAC,4BAA4B,kBAAkB,CAAC,WAAW,wBAAwB,CAAC,WAAW,CAAC,iBAAiB,CAAC,kBAAkB,iBAAiB,CAAC,2BAA2B,cAAc,CAAC,qBAAqB,eAAe,CAAC,wBAAwB,eAAe,CAAC,2BAA2B,YAAY,CAAC,QAAQ,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,0BAA0B,eAAe,CAAC,4DAA4D,aAAa,CAAC,6CAA6C,aAAa,CAAC,6DAA6D,aAAa,CAAC,8CAA8C,aAAa,CAAC,aAAa,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,iBAAiB,CAAC,sBAAsB,oBAAoB,CAAC,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,eAAe,CAAC,yCAAyC,UAAU,CAAC,WAAW,CAAC,+CAA+C,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,+FAA+F,8BAA8B,CAAC,8BAA8B,sBAAsB,CAAC,8BAA8B,wBAAwB,CAAC,kCAAkC,aAAa,CAAC,kBAAkB,iBAAiB,CAAC,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,wBAAwB,aAAa,CAAC,SAAS,CAAC,wBAAwB,aAAa,CAAC,UAAU,CAAC,iBAAiB,CAAC,2BAA2B,cAAc,CAAC,iBAAiB,CAAC,eAAe,CAAC,WAAW,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,oCAAoC,cAAc,CAAC,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,sDAAsD,iBAAiB,CAAC,WAAW,CAAC,YAAY,CAAC,iBAAiB,CAAC,WAAW,CAAC,YAAY,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,0BAA0B,WAAW,CAAC,kBAAkB,CAAC,wBAAwB,CAAC,oBAAoB,0BAA0B,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,2CAA2C,uBAAuB,CAAC,oBAAoB,0BAA0B,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,2CAA2C,uBAAuB,CAAC,8BAA8B,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,cAAc,CAAC,iBAAiB,CAAC,UAAU,CAAC,eAAe,CAAC,0BAA0B,CAAC,qDAAqD,uBAAuB,CAAC,qBAAqB,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,cAAc,cAAc,CAAC,iBAAiB,CAAC,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,sBAAsB,iBAAiB,CAAC,KAAK,CAAC,OAAO,CAAC,QAAQ,CAAC,MAAM,CAAC,eAAe,CAAC,YAAY,CAAC,8BAA8B,0BAA0B,CAAC,iBAAiB,CAAC,cAAc,CAAC,mBAAmB,CAAC,eAAe,CAAC,sDAAsD,uBAAuB,CAAC,8BAA8B,0BAA0B,CAAC,iBAAiB,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,CAAC,sDAAsD,uBAAuB,CAAC,yBAAyB,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,gCAAgC,eAAe,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,eAAe,CAAC,wDAAwD,uBAAuB,CAAC,gCAAgC,eAAe,CAAC,0BAA0B,CAAC,eAAe,CAAC,wDAAwD,uBAAuB,CAAC,qBAAqB,iBAAiB,CAAC,mBAAmB,CAAC,iCAAiC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,eAAe,CAAC,iBAAiB,CAAC,0BAA0B,CAAC,eAAe,CAAC,yDAAyD,uBAAuB,CAAC,YAAY,iBAAiB,CAAC,aAAa,CAAC,YAAY,CAAC,qBAAqB,CAAC,wBAAwB,qCAAqC,CAAC,mBAAmB,gBAAgB,CAAC,kBAAkB,CAAC,aAAa,CAAC,qBAAqB,CAAC,0BAA0B,CAAC,WAAW,CAAC,gBAAgB,CAAC,mBAAmB,0BAA0B,CAAC,aAAa,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,iBAAiB,gBAAgB,CAAC,qBAAqB,CAAC,sBAAsB,iBAAiB,CAAC,0BAA0B,UAAU,CAAC,eAAe,CAAC,kCAAkC,kCAAkC,CAAC,yCAAyC,uBAAuB,CAAC,yCAAyC,uBAAuB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#25262e}.tvbAnnotationsEditor{background-color:#1d1e24;border:1px solid #343741;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #343741}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#1d1e24}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#141519}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#4b2b3a}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#08334a}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#26443f}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#4d3e25}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#4d1f1f}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#25262e;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(255,255,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(29,30,36,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#1d1e24;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #d4dae5}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #25262e}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(27,169,245,.3);border-color:#1ba9f5}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(27,169,245,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #66676d;background:#1d1e24 no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#98a2b3;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#25262e;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#1d1e24}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #1d1e24;box-shadow:0 0 0 1px #535966,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#98a2b3}.ouiColorPalettePicker__itemTitle{font-size:12px;font-size:0.75rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(212,218,229,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#25262e;color:#dfe5ef;line-height:1.5;font-family:'Roboto Mono', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#08334a}.tvbNoData .tvbNoData__title{color:#dfe5ef;font-size:16px;font-size:1rem;line-height:1.5rem;font-weight:600;letter-spacing:-0.02em;color:#1ba9f5}.tvbMarkdownEditor{display:flex;background-color:#1d1e24;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #25262e}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #343741}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#1d1e24;border:1px solid #343741;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #343741}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#1d1e24}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#141519}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#4b2b3a}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#08334a}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#26443f}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#4d3e25}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#4d1f1f}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#1d1e24;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#141519;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#0b4462}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#1ba9f5;color:#1d1e24}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:18px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#25262e;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(255,255,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(29,30,36,.6)}.tvbVisGauge__value{color:rgba(255,255,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(29,30,36,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(255,255,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(29,30,36,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(255,255,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(29,30,36,.6)}.tvbVisMetric__value--primary{color:rgba(255,255,255,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(29,30,36,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(255,255,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(29,30,36,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(255,255,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(29,30,36,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(255,255,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(29,30,36,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(255,255,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(255,255,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(255,255,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(29,30,36,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(29,30,36,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(29,30,36,.8)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v7light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/application/index.scss?v7light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#f5f7fa}.tvbAnnotationsEditor{background-color:#fff;border:1px solid #d3dae6;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(152,162,179,.3),0 1px 5px -2px rgba(152,162,179,.3);border:1px solid #d3dae6}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#fafbfd}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#fce7f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e6f0f8}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e6f2f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#fef6e6}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f8e9e9}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#f5f7fa;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(0,0,0,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(0,0,0,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #343741}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #f5f7fa}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(0,107,180,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#f5f7fa;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fff;box-shadow:0 0 0 1px #98a2b3,0 2px 2px -1px rgba(152,162,179,.2),0 1px 5px -2px rgba(152,162,179,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#69707d}.ouiColorPalettePicker__itemTitle{font-size:12px;font-size:0.75rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#f5f7fa;color:#343741;line-height:1.5;font-family:'Roboto Mono', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e6f0f8}.tvbNoData .tvbNoData__title{color:#1a1c21;font-size:16px;font-size:1rem;line-height:1.5rem;font-weight:600;letter-spacing:-0.02em;color:#006bb4}.tvbMarkdownEditor{display:flex;background-color:#fff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #f5f7fa}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d3dae6}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fff;border:1px solid #d3dae6;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(152,162,179,.3),0 1px 5px -2px rgba(152,162,179,.3);border:1px solid #d3dae6}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#fafbfd}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#fce7f1}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e6f0f8}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e6f2f1}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#fef6e6}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f8e9e9}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#fafbfd;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cce1f0}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#006bb4;color:#fff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:18px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#f5f7fa;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(0,0,0,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(255,255,255,.6)}.tvbVisGauge__value{color:rgba(0,0,0,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(255,255,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(0,0,0,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(255,255,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(0,0,0,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(255,255,255,.6)}.tvbVisMetric__value--primary{color:rgba(0,0,0,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(255,255,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(0,0,0,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(255,255,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(0,0,0,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(255,255,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(0,0,0,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(255,255,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(0,0,0,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(0,0,0,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(0,0,0,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(255,255,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(255,255,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(255,255,255,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#f5f7fa}.tvbAnnotationsEditor{background-color:#fff;border:1px solid #d3dae6;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(152,162,179,.3),0 1px 5px -2px rgba(152,162,179,.3);border:1px solid #d3dae6}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#fafbfd}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#fce7f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e6f0f8}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e6f2f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#fef6e6}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f8e9e9}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#f5f7fa;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(0,0,0,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(0,0,0,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #343741}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #f5f7fa}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(0,107,180,.3);border-color:#006bb4}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(0,107,180,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(152,162,179,.3);padding:7px;border:1px solid #c9cbcd;background:#fff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#69707d;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#f5f7fa;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fff;box-shadow:0 0 0 1px #98a2b3,0 2px 2px -1px rgba(152,162,179,.2),0 1px 5px -2px rgba(152,162,179,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#69707d}.ouiColorPalettePicker__itemTitle{font-size:12px;font-size:0.75rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(52,55,65,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#f5f7fa;color:#343741;line-height:1.5;font-family:'Roboto Mono', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e6f0f8}.tvbNoData .tvbNoData__title{color:#1a1c21;font-size:16px;font-size:1rem;line-height:1.5rem;font-weight:600;letter-spacing:-0.02em;color:#006bb4}.tvbMarkdownEditor{display:flex;background-color:#fff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #f5f7fa}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d3dae6}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fff;border:1px solid #d3dae6;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(152,162,179,.3),0 1px 5px -2px rgba(152,162,179,.3);border:1px solid #d3dae6}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#fafbfd}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#fce7f1}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e6f0f8}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e6f2f1}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#fef6e6}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f8e9e9}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#fafbfd;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cce1f0}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#006bb4;color:#fff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:18px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#f5f7fa;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(0,0,0,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(255,255,255,.6)}.tvbVisGauge__value{color:rgba(0,0,0,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(255,255,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(0,0,0,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(255,255,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(0,0,0,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(255,255,255,.6)}.tvbVisMetric__value--primary{color:rgba(0,0,0,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(255,255,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(0,0,0,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(255,255,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(0,0,0,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(255,255,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(0,0,0,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(255,255,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(0,0,0,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(0,0,0,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(0,0,0,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(255,255,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(255,255,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(255,255,255,.8)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/application/index.scss?v8dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#101b25}.tvbAnnotationsEditor{background-color:#0a121a;border:1px solid #293847;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #293847}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#0a121a}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#172430}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#52384c}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#0d3c3d}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#2d5051}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#544a37}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#542b31}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#101b25;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(252,254,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(252,254,255,.1);box-shadow:inset 0 0 0 1px rgba(10,18,26,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#0a121a;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #dfe3e8}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #101b25}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(21,157,141,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#101b25;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#0a121a}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #0a121a;box-shadow:0 0 0 1px #5b6875,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#8d98a3}.ouiColorPalettePicker__itemTitle{font-size:13.5px;font-size:0.75rem;line-height:1.333333}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#101b25;color:#dfe5ef;line-height:1.333333;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#0d3c3d}.tvbNoData .tvbNoData__title{color:#dfe5ef;font-size:18px;font-size:1rem;line-height:1.3333333333rem;font-weight:600;letter-spacing:-0.02em;color:#40afa2}.tvbMarkdownEditor{display:flex;background-color:#0a121a;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #101b25}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #293847}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#0a121a;border:1px solid #293847;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #293847}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#0a121a}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#172430}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#52384c}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#0d3c3d}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#2d5051}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#544a37}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#542b31}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#0a121a;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#172430;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#0e4a48}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#159d8d;color:#0a121a}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:20.25px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#101b25;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(252,254,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(10,18,26,.6)}.tvbVisGauge__value{color:rgba(252,254,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(10,18,26,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(252,254,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(10,18,26,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(252,254,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(10,18,26,.6)}.tvbVisMetric__value--primary{color:rgba(252,254,255,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(10,18,26,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(252,254,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(10,18,26,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(252,254,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(10,18,26,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(252,254,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(10,18,26,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(252,254,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(252,254,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(10,18,26,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(10,18,26,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(10,18,26,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#101b25}.tvbAnnotationsEditor{background-color:#0a121a;border:1px solid #293847;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #293847}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#0a121a}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#172430}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#52384c}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#0d3c3d}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#2d5051}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#544a37}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#542b31}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#101b25;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(252,254,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(252,254,255,.1);box-shadow:inset 0 0 0 1px rgba(10,18,26,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#0a121a;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #dfe3e8}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #101b25}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(21,157,141,.3);border-color:#159d8d}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(21,157,141,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #575f66;background:#0a121a no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#8d98a3;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#101b25;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#0a121a}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #0a121a;box-shadow:0 0 0 1px #5b6875,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#8d98a3}.ouiColorPalettePicker__itemTitle{font-size:13.5px;font-size:0.75rem;line-height:1.333333}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(223,227,232,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#101b25;color:#dfe5ef;line-height:1.333333;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#0d3c3d}.tvbNoData .tvbNoData__title{color:#dfe5ef;font-size:18px;font-size:1rem;line-height:1.3333333333rem;font-weight:600;letter-spacing:-0.02em;color:#40afa2}.tvbMarkdownEditor{display:flex;background-color:#0a121a;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #101b25}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #293847}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#0a121a;border:1px solid #293847;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #293847}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#0a121a}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#172430}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#52384c}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#0d3c3d}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#2d5051}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#544a37}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#542b31}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#0a121a;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#172430;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#0e4a48}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#159d8d;color:#0a121a}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:20.25px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#101b25;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(252,254,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(10,18,26,.6)}.tvbVisGauge__value{color:rgba(252,254,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(10,18,26,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(252,254,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(10,18,26,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(252,254,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(10,18,26,.6)}.tvbVisMetric__value--primary{color:rgba(252,254,255,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(10,18,26,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(252,254,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(10,18,26,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(252,254,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(10,18,26,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(252,254,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(10,18,26,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(252,254,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(252,254,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(10,18,26,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(10,18,26,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(10,18,26,.8)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/application/index.scss?v8light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#e3e5e8}.tvbAnnotationsEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fcfeff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#f0f2f4}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#f9e6f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e4f2f2}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e3f1f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#fbf5e6}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f6e9e9}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(10,18,25,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(10,18,25,.1);box-shadow:inset 0 0 0 1px rgba(252,254,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fcfeff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #2a3947}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #e3e5e8}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(7,130,126,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#e3e5e8;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fcfeff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fcfeff;box-shadow:0 0 0 1px #adb4ba,0 2px 2px -1px rgba(173,180,186,.2),0 1px 5px -2px rgba(173,180,186,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#5a6875}.ouiColorPalettePicker__itemTitle{font-size:13.5px;font-size:0.75rem;line-height:1.333333}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#e3e5e8;color:#2a3947;line-height:1.333333;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e4f2f2}.tvbNoData .tvbNoData__title{color:#1a2631;font-size:18px;font-size:1rem;line-height:1.3333333333rem;font-weight:600;letter-spacing:-0.02em;color:#077774}.tvbMarkdownEditor{display:flex;background-color:#fcfeff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #e3e5e8}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d6d9dd}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fcfeff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#f0f2f4}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#f9e6f1}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e4f2f2}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e3f1f1}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#fbf5e6}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f6e9e9}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fcfeff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#f0f2f4;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cbe5e5}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#07827e;color:#fcfeff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:20.25px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(10,18,25,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(252,254,255,.6)}.tvbVisGauge__value{color:rgba(10,18,25,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(252,254,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(10,18,25,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(252,254,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(10,18,25,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--primary{color:rgba(10,18,25,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(252,254,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(10,18,25,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(10,18,25,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(252,254,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(10,18,25,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(252,254,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(10,18,25,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(10,18,25,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(10,18,25,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(252,254,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(252,254,255,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#e3e5e8}.tvbAnnotationsEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fcfeff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#f0f2f4}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#f9e6f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e4f2f2}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e3f1f1}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#fbf5e6}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f6e9e9}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(10,18,25,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(10,18,25,.1);box-shadow:inset 0 0 0 1px rgba(252,254,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fcfeff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #2a3947}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #e3e5e8}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(7,130,126,.3);border-color:#07827e}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(7,130,126,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bcbfc3;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#e3e5e8;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fcfeff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fcfeff;box-shadow:0 0 0 1px #adb4ba,0 2px 2px -1px rgba(173,180,186,.2),0 1px 5px -2px rgba(173,180,186,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#5a6875}.ouiColorPalettePicker__itemTitle{font-size:13.5px;font-size:0.75rem;line-height:1.333333}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#e3e5e8;color:#2a3947;line-height:1.333333;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e4f2f2}.tvbNoData .tvbNoData__title{color:#1a2631;font-size:18px;font-size:1rem;line-height:1.3333333333rem;font-weight:600;letter-spacing:-0.02em;color:#077774}.tvbMarkdownEditor{display:flex;background-color:#fcfeff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #e3e5e8}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d6d9dd}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fcfeff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#f0f2f4}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#f9e6f1}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e4f2f2}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e3f1f1}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#fbf5e6}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f6e9e9}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fcfeff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#f0f2f4;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cbe5e5}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#07827e;color:#fcfeff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:20.25px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(10,18,25,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(252,254,255,.6)}.tvbVisGauge__value{color:rgba(10,18,25,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(252,254,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(10,18,25,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(252,254,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(10,18,25,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--primary{color:rgba(10,18,25,.7);text-align:center;font-size:1em;font-weight:700;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(252,254,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(10,18,25,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(10,18,25,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(252,254,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(10,18,25,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(252,254,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(10,18,25,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(10,18,25,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(10,18,25,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(252,254,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(252,254,255,.8)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v9dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/application/index.scss?v9dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#19222b}.tvbAnnotationsEditor{background-color:#0f171f;border:1px solid #2a3540;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #2a3540}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#0f171f}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#02020e}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#341f45}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#012f49}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#072d2e}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#4b3616}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#3f1d24}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#19222b;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(252,254,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(252,254,255,.1);box-shadow:inset 0 0 0 1px rgba(15,23,31,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#0f171f;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #e3e5e9}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #19222b}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(0,151,209,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#19222b;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#0f171f}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #0f171f;box-shadow:0 0 0 1px #5c666f,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#959ba2}.ouiColorPalettePicker__itemTitle{font-size:12.000002px;font-size:0.857143rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#19222b;color:#959ba2;line-height:1.5;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#012f49}.tvbNoData .tvbNoData__title{color:#c6c9ce;font-size:16.0006px;font-size:1.1429rem;line-height:1.35715rem;font-weight:500;color:#169fd3}.tvbMarkdownEditor{display:flex;background-color:#0f171f;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #19222b}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #2a3540}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#0f171f;border:1px solid #2a3540;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #2a3540}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#0f171f}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#02020e}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#341f45}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#012f49}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#072d2e}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#4b3616}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#3f1d24}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#0f171f;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#02020e;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#013e5c}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#0097d1;color:#0f171f}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:16.0006px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#19222b;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(252,254,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(15,23,31,.6)}.tvbVisGauge__value{color:rgba(252,254,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(15,23,31,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(252,254,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(15,23,31,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(252,254,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(15,23,31,.6)}.tvbVisMetric__value--primary{color:rgba(252,254,255,.7);text-align:center;font-size:1em;font-weight:500;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(15,23,31,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(252,254,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(15,23,31,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(252,254,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(15,23,31,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(252,254,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(15,23,31,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(252,254,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(252,254,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(15,23,31,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(15,23,31,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(15,23,31,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#19222b}.tvbAnnotationsEditor{background-color:#0f171f;border:1px solid #2a3540;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #2a3540}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#0f171f}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#02020e}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#341f45}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#012f49}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#072d2e}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#4b3616}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#3f1d24}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#19222b;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(252,254,255,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(252,254,255,.1);box-shadow:inset 0 0 0 1px rgba(15,23,31,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#0f171f;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #e3e5e9}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #19222b}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(0,151,209,.3);border-color:#0097d1}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(0,151,209,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(0,0,0,.3);padding:7px;border:1px solid #565d64;background:#0f171f no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#959ba2;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#19222b;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#0f171f}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #0f171f;box-shadow:0 0 0 1px #5c666f,0 2px 2px -1px rgba(0,0,0,.2),0 1px 5px -2px rgba(0,0,0,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#959ba2}.ouiColorPalettePicker__itemTitle{font-size:12.000002px;font-size:0.857143rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(227,229,233,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#19222b;color:#959ba2;line-height:1.5;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#012f49}.tvbNoData .tvbNoData__title{color:#c6c9ce;font-size:16.0006px;font-size:1.1429rem;line-height:1.35715rem;font-weight:500;color:#169fd3}.tvbMarkdownEditor{display:flex;background-color:#0f171f;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #19222b}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #2a3540}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#0f171f;border:1px solid #2a3540;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(0,0,0,.3),0 1px 5px -2px rgba(0,0,0,.3);border:1px solid #2a3540}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#0f171f}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#02020e}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#341f45}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#012f49}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#072d2e}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#4b3616}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#3f1d24}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#0f171f;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#02020e;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#013e5c}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#0097d1;color:#0f171f}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:16.0006px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#19222b;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(252,254,255,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(15,23,31,.6)}.tvbVisGauge__value{color:rgba(252,254,255,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(15,23,31,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(252,254,255,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(15,23,31,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(252,254,255,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(15,23,31,.6)}.tvbVisMetric__value--primary{color:rgba(252,254,255,.7);text-align:center;font-size:1em;font-weight:500;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(15,23,31,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(252,254,255,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(15,23,31,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(252,254,255,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(15,23,31,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(252,254,255,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(15,23,31,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(252,254,255,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(252,254,255,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(15,23,31,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(15,23,31,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(15,23,31,.8)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v9light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/application/index.scss?v9light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#e3e5e8}.tvbAnnotationsEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fcfeff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#f0f2f4}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#f2ecf9}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e3eff8}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e4f1f0}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#f9f5ea}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f6ebeb}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(10,18,25,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(10,18,25,.1);box-shadow:inset 0 0 0 1px rgba(252,254,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fcfeff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #2a3947}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #e3e5e8}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(2,104,188,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#e3e5e8;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fcfeff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fcfeff;box-shadow:0 0 0 1px #adb4ba,0 2px 2px -1px rgba(173,180,186,.2),0 1px 5px -2px rgba(173,180,186,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#5a6875}.ouiColorPalettePicker__itemTitle{font-size:12.000002px;font-size:0.857143rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#e3e5e8;color:#2a3947;line-height:1.5;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e3eff8}.tvbNoData .tvbNoData__title{color:#161e2b;font-size:16.0006px;font-size:1.1429rem;line-height:1.35715rem;font-weight:500;color:#0268bc}.tvbMarkdownEditor{display:flex;background-color:#fcfeff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #e3e5e8}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d6d9dd}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fcfeff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#f0f2f4}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#f2ecf9}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e3eff8}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e4f1f0}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#f9f5ea}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f6ebeb}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fcfeff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#f0f2f4;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cae0f2}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#0268bc;color:#fcfeff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:16.0006px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(10,18,25,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(252,254,255,.6)}.tvbVisGauge__value{color:rgba(10,18,25,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(252,254,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(10,18,25,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(252,254,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(10,18,25,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--primary{color:rgba(10,18,25,.7);text-align:center;font-size:1em;font-weight:500;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(252,254,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(10,18,25,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(10,18,25,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(252,254,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(10,18,25,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(252,254,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(10,18,25,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(10,18,25,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(10,18,25,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(252,254,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(252,254,255,.8)}\n", "",{"version":3,"sources":["webpack://./public/application/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.tvbEditor{overflow-y:auto;overflow-x:hidden}.tvbAnnotationsEditor__container{padding:16px;background-color:#e3e5e8}.tvbAnnotationsEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbAnnotationsEditor.tvbAnnotationsEditor--flexGrowZero{flex-grow:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--noBorder{border:none}.tvbAnnotationsEditor.tvbAnnotationsEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:hover,.tvbAnnotationsEditor.tvbAnnotationsEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusNone{border-radius:0}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusMedium{border-radius:4px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusLarge{border-radius:8px}.tvbAnnotationsEditor.tvbAnnotationsEditor--borderRadiusXLarge{border-radius:16px}.tvbAnnotationsEditor.tvbAnnotationsEditor--transparent{background-color:rgba(0,0,0,0)}.tvbAnnotationsEditor.tvbAnnotationsEditor--plain{background-color:#fcfeff}.tvbAnnotationsEditor.tvbAnnotationsEditor--subdued{background-color:#f0f2f4}.tvbAnnotationsEditor.tvbAnnotationsEditor--accent{background-color:#f2ecf9}.tvbAnnotationsEditor.tvbAnnotationsEditor--primary{background-color:#e3eff8}.tvbAnnotationsEditor.tvbAnnotationsEditor--success{background-color:#e4f1f0}.tvbAnnotationsEditor.tvbAnnotationsEditor--warning{background-color:#f9f5ea}.tvbAnnotationsEditor.tvbAnnotationsEditor--danger{background-color:#f6ebeb}.tvbAnnotationsEditor{margin-bottom:16px;padding:8px}.tvbColorRules__rule{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.ouiColorPicker{position:relative;width:152px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input{padding-right:40px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input[class*=\"--compressed\"]{padding-right:32px}.ouiColorPicker__popoverAnchor .ouiColorPicker__input+.ouiFormControlLayoutIcons{color:inherit}.ouiSwatchInput__stroke{fill:none;stroke:rgba(10,18,25,.2)}.ouiColorPicker__popoverPanel--pickerOnly{padding-bottom:0 !important}.ouiColorPicker__input--inGroup{height:38px !important;box-shadow:none !important;border-radius:0}.ouiColorPicker__input--inGroup.ouiFieldText--compressed{height:30px !important;border-radius:0}.ouiColorPicker__alphaRange .ouiRangeInput{min-width:0}.ouiColorPickerSwatch{display:inline-block;height:24px;width:24px;border-radius:2px;cursor:pointer;border:solid 1px rgba(10,18,25,.1);box-shadow:inset 0 0 0 1px rgba(252,254,255,.05)}.ouiColorPickerSwatch:focus{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.ouiHue{background:linear-gradient(to right, #FF3232 0%, #FFF130 20%, #45FF30 35%, #28FFF0 52%, #282CFF 71%, #FF28FB 88%, #FF0094 100%);height:24px;margin:4px 0;position:relative}.ouiHue:before,.ouiHue:after{content:\"\";left:0;position:absolute;height:8px;background:#fcfeff;width:100%}.ouiHue:after{bottom:0}.ouiHue__range{position:relative;height:24px;width:calc(100% + 2px);margin:0 -1px;appearance:none;background:rgba(0,0,0,0);z-index:2}.ouiHue__range::-webkit-slider-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-moz-range-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-ms-thumb{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px}.ouiHue__range::-webkit-slider-thumb{-webkit-appearance:none;margin-top:0}.ouiHue__range::-ms-thumb{margin-top:0}.ouiHue__range::-ms-track{height:24px;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}.ouiHue__range::-moz-focus-outer{border:none}.ouiHue__range::-ms-fill-lower,.ouiHue__range::-ms-fill-upper{background:rgba(0,0,0,0)}.ouiHue__range:focus{outline:none}.ouiHue__range:focus::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiHue__range:focus::-moz-range-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiHue__range:focus::-ms-thumb{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiSaturation{position:relative;width:100%;padding-bottom:100%;border-radius:2px;touch-action:none;z-index:3}.ouiSaturation .ouiSaturation__lightness,.ouiSaturation .ouiSaturation__saturation{position:absolute;top:-1px;bottom:0;left:0;right:0;border-radius:2px}.ouiSaturation .ouiSaturation__lightness{background:linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))}.ouiSaturation .ouiSaturation__saturation{background:linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))}.ouiSaturation .ouiSaturation__indicator{position:absolute;height:12px;width:12px;border-radius:100%;margin-top:-6px;margin-left:-6px;border:1px solid #2a3947}.ouiSaturation .ouiSaturation__indicator:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:100%;border:1px solid #e3e5e8}.ouiSaturation:focus{outline:none}.ouiSaturation:focus .ouiSaturation__indicator{box-shadow:0 0 0 3px rgba(2,104,188,.3);border-color:#0268bc}.ouiColorStops:not(.ouiColorStops-isDisabled):focus{outline:2px solid rgba(2,104,188,.3)}.ouiColorStops__addContainer{display:block;position:absolute;left:0;right:0;top:50%;height:16px;margin-top:-8px}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled){cursor:pointer}.ouiColorStops__addContainer:hover:not(.ouiColorStops__addContainer-isDisabled) .ouiColorStops__addTarget{opacity:.7}.ouiColorStops__addTarget{box-shadow:0 2px 2px -1px rgba(173,180,186,.3);padding:7px;border:1px solid #bbbcc1;background:#fcfeff no-repeat center;border-radius:14px;transition:background-color 150ms ease-in,border-color 150ms ease-in;cursor:pointer;border-color:#5a6875;padding:0;height:16px;width:16px;position:absolute;top:0;height:16px;width:16px;background-color:#e3e5e8;pointer-events:none;opacity:0;transition:opacity 150ms}.ouiColorStop{width:152px}.ouiColorStopPopover.ouiPopover{position:absolute;top:50%;width:16px;height:16px;margin-top:-8px}.ouiColorStopPopover-hasFocus{z-index:1}.ouiColorStopPopover__anchor{position:absolute;width:100%;height:100%}.ouiColorStopPopover__anchor:before{content:\"\";display:block;position:absolute;left:0;top:0;height:16px;width:16px;border-radius:16px;background:#fcfeff}.ouiColorStopThumb.ouiRangeThumb:not(:disabled){top:0;margin-top:0;pointer-events:auto;cursor:grab;border:solid 3px #fcfeff;box-shadow:0 0 0 1px #adb4ba,0 2px 2px -1px rgba(173,180,186,.2),0 1px 5px -2px rgba(173,180,186,.2)}.ouiColorStopThumb.ouiRangeThumb:not(:disabled):active{cursor:grabbing}.ouiColorStopPopover-isLoadingPanel{visibility:hidden !important}.ouiColorStops.ouiColorStops-isDragging:not(.ouiColorStops-isDisabled):not(.ouiColorStops-isReadOnly){cursor:grabbing}.ouiColorStops__highlight{color:#5a6875}.ouiColorPalettePicker__itemTitle{font-size:12.000002px;font-size:0.857143rem;line-height:1.5}.ouiColorPalettePicker__itemTitle+.ouiColorPaletteDisplay{margin-top:4px}.ouiColorPaletteDisplay{display:flex;flex-direction:row;overflow:hidden;height:8px}.ouiColorPaletteDisplay--sizeExtraSmall{position:relative;height:4px;border-radius:4px}.ouiColorPaletteDisplay--sizeExtraSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:4px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeExtraSmall .ouiColorPaletteDisplayFixed__bleedArea{height:4px}.ouiColorPaletteDisplay--sizeSmall{position:relative;height:8px;border-radius:8px}.ouiColorPaletteDisplay--sizeSmall:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:8px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeSmall .ouiColorPaletteDisplayFixed__bleedArea{height:8px}.ouiColorPaletteDisplay--sizeMedium{position:relative;height:16px;border-radius:16px}.ouiColorPaletteDisplay--sizeMedium:after{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:16px;content:\"\";pointer-events:none;border:1px solid rgba(42,57,71,.2)}.ouiColorPaletteDisplay--sizeMedium .ouiColorPaletteDisplayFixed__bleedArea{height:16px}.ouiColorPaletteDisplayFixed__bleedArea{position:absolute;top:0;left:0;display:flex;height:8px;width:calc(100% + 1px)}.tvbColorPicker{display:flex;align-items:center;position:relative}.tvbColorPicker__clear{margin-left:4px}.tvbError__title,.tvbError__additional,.tvbError__stack{margin-top:8px}.tvbError__stack{padding:8px;background:#e3e5e8;color:#2a3947;line-height:1.5;font-family:'Source Code Pro', Consolas, Menlo, Courier, monospace;font-weight:400;white-space:pre-wrap}.tvbNoData{padding:16px;height:100%;display:flex;align-items:center;justify-content:center;background-color:#e3eff8}.tvbNoData .tvbNoData__title{color:#161e2b;font-size:16.0006px;font-size:1.1429rem;line-height:1.35715rem;font-weight:500;color:#0268bc}.tvbMarkdownEditor{display:flex;background-color:#fcfeff;height:500px}.tvbMarkdownEditor__editor,.tvbMarkdownEditor__variables{width:50%;flex:1 0 auto}.tvbMarkdownEditor__editor{border-right:2px solid #e3e5e8}.tvbMarkdownEditor__variables{padding:8px;overflow:auto}.tvbMarkdownEditor__noVariables{display:block;padding-bottom:40px;padding-top:16px;text-align:center;border-bottom:1px solid #d6d9dd}.tvbSeriesEditor__container{padding:16px}.tvbSeriesEditor{background-color:#fcfeff;border:1px solid #d6d9dd;border-radius:4px;flex-grow:1}.tvbSeriesEditor.tvbSeriesEditor--flexGrowZero{flex-grow:0}.tvbSeriesEditor.tvbSeriesEditor--noBorder{border:none}.tvbSeriesEditor.tvbSeriesEditor--hasShadow{box-shadow:0 2px 2px -1px rgba(173,180,186,.3),0 1px 5px -2px rgba(173,180,186,.3);border:1px solid #d6d9dd}.tvbSeriesEditor.tvbSeriesEditor--isClickable{transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.tvbSeriesEditor.tvbSeriesEditor--isClickable:enabled{display:block;width:100%;text-align:left}.tvbSeriesEditor.tvbSeriesEditor--isClickable:hover,.tvbSeriesEditor.tvbSeriesEditor--isClickable:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3);transform:translateY(-2px);cursor:pointer}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusNone{border-radius:0}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusMedium{border-radius:4px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusLarge{border-radius:8px}.tvbSeriesEditor.tvbSeriesEditor--borderRadiusXLarge{border-radius:16px}.tvbSeriesEditor.tvbSeriesEditor--transparent{background-color:rgba(0,0,0,0)}.tvbSeriesEditor.tvbSeriesEditor--plain{background-color:#fcfeff}.tvbSeriesEditor.tvbSeriesEditor--subdued{background-color:#f0f2f4}.tvbSeriesEditor.tvbSeriesEditor--accent{background-color:#f2ecf9}.tvbSeriesEditor.tvbSeriesEditor--primary{background-color:#e3eff8}.tvbSeriesEditor.tvbSeriesEditor--success{background-color:#e4f1f0}.tvbSeriesEditor.tvbSeriesEditor--warning{background-color:#f9f5ea}.tvbSeriesEditor.tvbSeriesEditor--danger{background-color:#f6ebeb}.tvbSeriesEditor{margin-bottom:16px;padding:8px}.tvbSeries__body{margin-left:32px;margin-top:8px}.tvbEditor{flex:1}.tvbEditorVisualization{position:relative;display:flex;flex-direction:column;flex:1 0 auto;width:100%;height:240px;line-height:normal;background-color:#fcfeff;overflow:auto}.tvbEditorVisualization__apply{padding:8px}.tvbEditorVisualization__draghandle{position:relative;display:flex;flex:0 0 14px;background-color:#f0f2f4;align-items:center;justify-content:center;margin:0;user-select:none;height:14px;width:100%}.tvbEditorVisualization__draghandle:hover{background-color:#cae0f2}.tvbEditorVisualization__draghandle:focus,.tvbEditorVisualization__draghandle.active{background-color:#0268bc;color:#fcfeff}.tvbEditorVisualization__draghandle::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;cursor:ns-resize}.tvbVisPickerItem{font-size:16.0006px;font-weight:500}.tvbSplitVis{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:stretch}.tvbSplitVis__split{flex:1 0 25%;min-width:192px;display:flex}.tvbSplitVis__split>.tvbVis{min-height:153.6px}.tvbAggRow{background-color:#e3e5e8;padding:8px;margin-bottom:8px}.tvbAggRow--split{padding-left:32px}.tvbAggRow__visibilityIcon{margin-top:4px}.tvbAggRow__children{padding-top:6px}.tvbAggRow__unavailable{margin-top:-4px}.tvbPanelConfig__container{padding:16px}.tvbVis{display:flex;flex-direction:column;flex:1 1 100%;border-width:8px;border-style:solid;border-color:rgba(0,0,0,0)}.tvbVis .tvbVisTimeSeries{overflow:hidden}.tvbVis .tvbVisTimeSeriesDark .echReactiveChart_unavailable{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesDark .echLegendItem{color:#dfe5ef}.tvbVis .tvbVisTimeSeriesLight .echReactiveChart_unavailable{color:#343741}.tvbVis .tvbVisTimeSeriesLight .echLegendItem{color:#343741}.tvbMarkdown{display:flex;flex-direction:column;flex:1 0 auto;position:relative}.tvbMarkdown__content{scrollbar-width:thin;display:flex;flex-direction:column;flex:1 0 auto;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.tvbMarkdown__content::-webkit-scrollbar{width:16px;height:16px}.tvbMarkdown__content::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.tvbMarkdown__content::-webkit-scrollbar-corner,.tvbMarkdown__content::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.tvbMarkdown__content--middle{justify-content:center}.tvbMarkdown__content--bottom{justify-content:flex-end}.tvbMarkdown__content-isScrolling{overflow:auto}.tvbVisAnnotation{position:absolute;z-index:90;display:flex;flex-direction:column;align-items:center}.tvbVisAnnotation__line{flex:1 0 auto;width:2px}.tvbVisAnnotation__icon{flex:0 0 auto;width:12px;text-align:center}.tvbVisAnnotation__tooltip{font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;animation-duration:0s;animation-delay:0s}.tvbVisHalfGauge,.tvbVisCircleGauge{font-size:100%;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisHalfGauge__metrics,.tvbVisCircleGauge__metrics{position:absolute;width:100px;height:100px;text-align:center;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center}.tvbVisHalfGauge__metrics{height:70px;padding:0 12px 8px;justify-content:flex-end}.tvbVisGauge__label{color:rgba(10,18,25,.4);font-size:.5em;line-height:1em;text-align:center;padding:0 8px 4px}.tvbVisGauge--reversed .tvbVisGauge__label{color:rgba(252,254,255,.6)}.tvbVisGauge__value{color:rgba(10,18,25,.7);font-size:.9em;line-height:1em;text-align:center}.tvbVisGauge--reversed .tvbVisGauge__value{color:rgba(252,254,255,.8)}.tvbVisGauge__additionalLabel{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.4em;line-height:1.2em;width:100%;padding:2px 4px;color:rgba(10,18,25,.7)}.tvbVisGauge--reversed .tvbVisGauge__additionalLabel{color:rgba(252,254,255,.8)}.tvbVisGauge__resize{position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric{font-size:100%;position:relative;display:flex;flex-direction:column;flex:1 0 auto}.tvbVisMetric__resize{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;display:flex}.tvbVisMetric__label--primary{color:rgba(10,18,25,.4);text-align:center;font-size:.5em;margin-bottom:.25em;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--primary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--primary{color:rgba(10,18,25,.7);text-align:center;font-size:1em;font-weight:500;line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--primary{color:rgba(252,254,255,.8)}.tvbVisMetric__secondary{display:flex;justify-content:center;align-items:center;margin-top:.05em}.tvbVisMetric__label--secondary{font-size:.35em;margin-right:.3em;color:rgba(10,18,25,.4);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__label--secondary{color:rgba(252,254,255,.6)}.tvbVisMetric__value--secondary{font-size:.35em;color:rgba(10,18,25,.7);line-height:1em}.tvbVisMetric--reversed .tvbVisMetric__value--secondary{color:rgba(252,254,255,.8)}.tvbVisMetric__inner{position:absolute;padding:4px 8px 8px}.tvbVisMetric__label--additional{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-size:.25em;padding:2px 0 0;text-align:center;color:rgba(10,18,25,.7);line-height:1.2}.tvbVisMetric--reversed .tvbVisMetric__label--additional{color:rgba(252,254,255,.8)}.tvbVisTopN{position:relative;overflow:auto;display:flex;flex-direction:column}.tvbVisTopN tr:hover td{background-color:rgba(10,18,25,.1)}.tvbVisTopN__value{text-align:right;white-space:nowrap;line-height:0;vertical-align:middle;color:rgba(10,18,25,.7);padding:4px;padding-bottom:0}.tvbVisTopN__label{color:rgba(10,18,25,.4);padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tvbVisTopN__bar{padding:4px 12px;vertical-align:middle}.tvbVisTopN__innerBar{position:relative}.tvbVisTopN__innerBar>div{width:100%;min-height:16px}.tvbVisTopN--reversed tr:hover td{background-color:rgba(252,254,255,.1)}.tvbVisTopN--reversed .tvbVisTopN__label{color:rgba(252,254,255,.6)}.tvbVisTopN--reversed .tvbVisTopN__value{color:rgba(252,254,255,.8)}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeseries!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeTimeseries!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeTimeseries']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTimeseries_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeseries!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeseries!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTimeseries_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeTimeseries_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeTimeseries/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_timeseries/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: MAX_BUCKETS_SETTING, INDEXES_SEPARATOR, DATA_SOURCE_ID_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BUCKETS_SETTING", function() { return MAX_BUCKETS_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEXES_SEPARATOR", function() { return INDEXES_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SOURCE_ID_KEY", function() { return DATA_SOURCE_ID_KEY; });
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

const MAX_BUCKETS_SETTING = 'metrics:max_buckets';
const INDEXES_SEPARATOR = ',';
const DATA_SOURCE_ID_KEY = 'data_source_id';

/***/ }),

/***/ "./common/extract_index_patterns.js":
/*!******************************************!*\
  !*** ./common/extract_index_patterns.js ***!
  \******************************************/
/*! exports provided: extractIndexPatterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractIndexPatterns", function() { return extractIndexPatterns; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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


function extractIndexPatterns(panel, excludedFields = {}) {
  const patterns = [];
  if (!excludedFields[panel.index_pattern]) {
    patterns.push(panel.index_pattern);
  }
  panel.series.forEach(series => {
    const indexPattern = series.series_index_pattern;
    if (indexPattern && series.override_index_pattern && !excludedFields[indexPattern]) {
      patterns.push(indexPattern);
    }
  });
  if (panel.annotations) {
    panel.annotations.forEach(item => {
      const indexPattern = item.index_pattern;
      if (indexPattern && !excludedFields[indexPattern]) {
        patterns.push(indexPattern);
      }
    });
  }
  if (patterns.length === 0) {
    patterns.push('');
  }
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(patterns).sort();
}

/***/ }),

/***/ "./common/interval_regexp.js":
/*!***********************************!*\
  !*** ./common/interval_regexp.js ***!
  \***********************************/
/*! exports provided: GTE_INTERVAL_RE, INTERVAL_STRING_RE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTE_INTERVAL_RE", function() { return GTE_INTERVAL_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERVAL_STRING_RE", function() { return INTERVAL_STRING_RE; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
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


const GTE_INTERVAL_RE = new RegExp(`^>=([\\d\\.]+\\s*(${_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.units.join('|')}))$`);
const INTERVAL_STRING_RE = new RegExp(`^([\\d\\.]+)\\s*(${_elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.units.join('|')})$`);

/***/ }),

/***/ "./common/panel_types.ts":
/*!*******************************!*\
  !*** ./common/panel_types.ts ***!
  \*******************************/
/*! exports provided: PANEL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANEL_TYPES", function() { return PANEL_TYPES; });
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

const PANEL_TYPES = {
  TABLE: 'table',
  GAUGE: 'gauge',
  MARKDOWN: 'markdown',
  TOP_N: 'top_n',
  TIMESERIES: 'timeseries',
  METRIC: 'metric'
};

/***/ }),

/***/ "./public/application/components/vis_editor_lazy.tsx":
/*!***********************************************************!*\
  !*** ./public/application/components/vis_editor_lazy.tsx ***!
  \***********************************************************/
/*! exports provided: VisEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisEditor", function() { return VisEditor; });
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




// @ts-ignore
const VisEditorComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./vis_editor */ "./public/application/components/vis_editor.js")));
const VisEditor = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingSpinner"], null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VisEditorComponent, props));

/***/ }),

/***/ "./public/application/editor_controller.js":
/*!*************************************************!*\
  !*** ./public/application/editor_controller.js ***!
  \*************************************************/
/*! exports provided: EditorController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorController", function() { return EditorController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fetch_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fetch_fields */ "./public/application/lib/fetch_fields.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _components_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/vis_editor_lazy */ "./public/application/components/vis_editor_lazy.tsx");
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






class EditorController {
  constructor(el, vis, eventEmitter, embeddableHandler) {
    _defineProperty(this, "fetchDefaultIndexPattern", async () => {
      const indexPattern = await Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedObjectsClient"])().client.get('index-pattern', Object(_services__WEBPACK_IMPORTED_MODULE_3__["getUISettings"])().get('defaultIndex'));
      return indexPattern.attributes;
    });
    _defineProperty(this, "fetchDefaultParams", async () => {
      const {
        title,
        timeFieldName
      } = await this.fetchDefaultIndexPattern();
      this.state.vis.params.default_index_pattern = title;
      this.state.vis.params.default_timefield = timeFieldName;
      this.state.fields = await Object(_lib_fetch_fields__WEBPACK_IMPORTED_MODULE_2__["fetchIndexPatternFields"])(this.state.vis);
      this.state.isLoaded = true;
    });
    this.el = el;
    this.embeddableHandler = embeddableHandler;
    this.eventEmitter = eventEmitter;
    this.state = {
      fields: [],
      vis: vis,
      isLoaded: false
    };
  }
  async render(params) {
    const I18nContext = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getI18n"])().Context;
    !this.state.isLoaded && (await this.fetchDefaultParams());
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_4__["VisEditor"], {
      config: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getUISettings"])(),
      vis: this.state.vis,
      visFields: this.state.fields,
      visParams: this.state.vis.params,
      timeRange: params.timeRange,
      renderComplete: () => {},
      isEditorMode: true,
      appState: params.appState,
      embeddableHandler: this.embeddableHandler,
      eventEmitter: this.eventEmitter
    })), this.el);
  }
  destroy() {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(this.el);
  }
}

/***/ }),

/***/ "./public/application/index.scss":
/*!***************************************!*\
  !*** ./public/application/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "./public/application/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "./public/application/index.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/application/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/application/index.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./index.scss?v9dark */ "./public/application/index.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./index.scss?v9light */ "./public/application/index.scss?v9light");
}

/***/ }),

/***/ "./public/application/index.scss?v7dark":
/*!**********************************************!*\
  !*** ./public/application/index.scss?v7dark ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v7dark");

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

/***/ "./public/application/index.scss?v7light":
/*!***********************************************!*\
  !*** ./public/application/index.scss?v7light ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v7light");

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

/***/ "./public/application/index.scss?v8dark":
/*!**********************************************!*\
  !*** ./public/application/index.scss?v8dark ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./index.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8dark");

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

/***/ "./public/application/index.scss?v8light":
/*!***********************************************!*\
  !*** ./public/application/index.scss?v8light ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./index.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v8light");

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

/***/ "./public/application/index.scss?v9dark":
/*!**********************************************!*\
  !*** ./public/application/index.scss?v9dark ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./index.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v9dark");

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

/***/ "./public/application/index.scss?v9light":
/*!***********************************************!*\
  !*** ./public/application/index.scss?v9light ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/application/index.scss?v9light");

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

/***/ "./public/application/index.ts":
/*!*************************************!*\
  !*** ./public/application/index.ts ***!
  \*************************************/
/*! exports provided: EditorController, validateInterval, getTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor_controller */ "./public/application/editor_controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorController", function() { return _editor_controller__WEBPACK_IMPORTED_MODULE_0__["EditorController"]; });

/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./public/application/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateInterval", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["validateInterval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimezone", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["getTimezone"]; });

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



/***/ }),

/***/ "./public/application/lib/fetch_fields.js":
/*!************************************************!*\
  !*** ./public/application/lib/fetch_fields.js ***!
  \************************************************/
/*! exports provided: fetchFields, fetchIndexPatternFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFields", function() { return fetchFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIndexPatternFields", function() { return fetchIndexPatternFields; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_extract_index_patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/extract_index_patterns */ "./common/extract_index_patterns.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
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





async function fetchFields(indexPatterns = ['*'], dataSourceId = undefined) {
  const patterns = Array.isArray(indexPatterns) ? indexPatterns : [indexPatterns];
  try {
    const indexFields = await Promise.all(patterns.map(pattern => {
      return Object(_services__WEBPACK_IMPORTED_MODULE_3__["getCoreStart"])().http.get('/api/metrics/fields', {
        query: {
          index: pattern,
          data_source: dataSourceId
        }
      });
    }));
    const fields = patterns.reduce((cumulatedFields, currentPattern, index) => {
      return {
        ...cumulatedFields,
        [currentPattern]: indexFields[index]
      };
    }, {});
    return fields;
  } catch (error) {
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["getCoreStart"])().notifications.toasts.addDanger({
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTimeseries.fetchFields.loadIndexPatternFieldsErrorMessage', {
        defaultMessage: 'Unable to load index_pattern fields'
      }),
      text: error.message
    });
  }
}
async function fetchIndexPatternFields({
  params,
  fields = {}
}) {
  const dataSourceId = params[_common_constants__WEBPACK_IMPORTED_MODULE_2__["DATA_SOURCE_ID_KEY"]] || undefined;
  const indexPatterns = Object(_common_extract_index_patterns__WEBPACK_IMPORTED_MODULE_1__["extractIndexPatterns"])(params, fields);
  return await fetchFields(indexPatterns, dataSourceId);
}

/***/ }),

/***/ "./public/application/lib/get_timezone.ts":
/*!************************************************!*\
  !*** ./public/application/lib/get_timezone.ts ***!
  \************************************************/
/*! exports provided: getTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimezone", function() { return getTimezone; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
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


function getTimezone(config) {
  if (config.isDefault('dateFormat:tz')) {
    const detectedTimezone = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.guess();
    if (detectedTimezone) return detectedTimezone;else return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().format('Z');
  } else {
    return config.get('dateFormat:tz', 'Browser');
  }
}

/***/ }),

/***/ "./public/application/lib/index.ts":
/*!*****************************************!*\
  !*** ./public/application/lib/index.ts ***!
  \*****************************************/
/*! exports provided: validateInterval, getTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate_interval */ "./public/application/lib/validate_interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateInterval", function() { return _validate_interval__WEBPACK_IMPORTED_MODULE_0__["validateInterval"]; });

/* harmony import */ var _get_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_timezone */ "./public/application/lib/get_timezone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimezone", function() { return _get_timezone__WEBPACK_IMPORTED_MODULE_1__["getTimezone"]; });

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



/***/ }),

/***/ "./public/application/lib/validate_interval.js":
/*!*****************************************************!*\
  !*** ./public/application/lib/validate_interval.js ***!
  \*****************************************************/
/*! exports provided: validateInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateInterval", function() { return validateInterval; });
/* harmony import */ var _plugins_vis_type_timeseries_common_interval_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../plugins/vis_type_timeseries/common/interval_regexp */ "./common/interval_regexp.js");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../plugins/data/public */ "plugin/data/public");
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_data_public__WEBPACK_IMPORTED_MODULE_2__);
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
  parseInterval
} = _plugins_data_public__WEBPACK_IMPORTED_MODULE_2__["search"].aggs;
function validateInterval(bounds, panel, maxBuckets) {
  const {
    interval
  } = panel;
  const {
    min,
    max
  } = bounds;
  // No need to check auto it will return around 100
  if (!interval) return;
  if (interval === 'auto') return;
  const greaterThanMatch = interval.match(_plugins_vis_type_timeseries_common_interval_regexp__WEBPACK_IMPORTED_MODULE_0__["GTE_INTERVAL_RE"]);
  if (greaterThanMatch) return;
  const duration = parseInterval(interval);
  if (duration) {
    const span = max.valueOf() - min.valueOf();
    const buckets = Math.floor(span / duration.asMilliseconds());
    if (buckets > maxBuckets) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTimeseries.validateInterval.notifier.maxBucketsExceededErrorMessage', {
        defaultMessage: 'Your query attempted to fetch too much data. Reducing the time range or changing the interval used usually fixes the issue.'
      }));
    }
  }
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["MetricsPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/metrics_fn.ts":
/*!******************************!*\
  !*** ./public/metrics_fn.ts ***!
  \******************************/
/*! exports provided: createMetricsFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMetricsFn", function() { return createMetricsFn; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request_handler */ "./public/request_handler.js");
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

const createMetricsFn = () => ({
  name: 'tsvb',
  type: 'render',
  inputTypes: ['opensearch_dashboards_context', 'null'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeTimeseries.function.help', {
    defaultMessage: 'TSVB visualization'
  }),
  args: {
    params: {
      types: ['string'],
      default: '"{}"',
      help: ''
    },
    uiState: {
      types: ['string'],
      default: '"{}"',
      help: ''
    },
    savedObjectId: {
      types: ['null', 'string'],
      default: null,
      help: ''
    }
  },
  async fn(input, args) {
    const params = JSON.parse(args.params);
    const uiStateParams = JSON.parse(args.uiState);
    const savedObjectId = args.savedObjectId;
    const {
      PersistedState
    } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ../../visualizations/public */ "plugin/visualizations/public", 7));
    const uiState = new PersistedState(uiStateParams);
    const response = await Object(_request_handler__WEBPACK_IMPORTED_MODULE_2__["metricsRequestHandler"])({
      timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'timeRange', null),
      query: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'query', null),
      filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'filters', null),
      visParams: params,
      uiState,
      savedObjectId
    });
    response.visType = 'metrics';
    return {
      type: 'render',
      as: 'visualization',
      value: {
        uiState,
        visType: 'metrics',
        visConfig: params,
        visData: response
      }
    };
  }
});

/***/ }),

/***/ "./public/metrics_type.ts":
/*!********************************!*\
  !*** ./public/metrics_type.ts ***!
  \********************************/
/*! exports provided: metricsVisDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metricsVisDefinition", function() { return metricsVisDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request_handler */ "./public/request_handler.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application */ "./public/application/index.ts");
/* harmony import */ var _common_panel_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/panel_types */ "./common/panel_types.ts");
/* harmony import */ var _application_components_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application/components/vis_editor_lazy */ "./public/application/components/vis_editor_lazy.tsx");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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


// @ts-ignore




const metricsVisDefinition = {
  name: 'metrics',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTimeseries.osdVisTypes.metricsTitle', {
    defaultMessage: 'TSVB'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTimeseries.osdVisTypes.metricsDescription', {
    defaultMessage: 'Build time-series using a visual pipeline interface'
  }),
  icon: 'visVisualBuilder',
  visConfig: {
    defaults: {
      id: '61ca57f0-469d-11e7-af02-69e470af7417',
      type: _common_panel_types__WEBPACK_IMPORTED_MODULE_4__["PANEL_TYPES"].TIMESERIES,
      series: [{
        id: '61ca57f1-469d-11e7-af02-69e470af7417',
        color: Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[0],
        split_mode: 'everything',
        split_color_mode: 'opensearchDashboards',
        metrics: [{
          id: '61ca57f2-469d-11e7-af02-69e470af7417',
          type: 'count'
        }],
        separate_axis: 0,
        axis_position: 'right',
        axis_scale: 'normal',
        formatter: 'number',
        chart_type: 'line',
        line_width: 1,
        point_size: 1,
        fill: 0.5,
        stacked: 'none'
      }],
      time_field: '',
      index_pattern: '',
      interval: '',
      axis_position: 'left',
      axis_formatter: 'number',
      axis_scale: 'normal',
      show_legend: 1,
      show_grid: 1,
      tooltip_mode: 'show_all'
    },
    component: _application_components_vis_editor_lazy__WEBPACK_IMPORTED_MODULE_5__["VisEditor"]
  },
  editor: _application__WEBPACK_IMPORTED_MODULE_3__["EditorController"],
  options: {
    showQueryBar: false,
    showFilterBar: false,
    showIndexSelection: false
  },
  requestHandler: _request_handler__WEBPACK_IMPORTED_MODULE_2__["metricsRequestHandler"],
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_6__["VIS_EVENT_TO_TRIGGER"].applyFilter];
  },
  inspectorAdapters: {},
  getUsedIndexPattern: async params => {
    const {
      indexPatterns
    } = Object(_services__WEBPACK_IMPORTED_MODULE_7__["getDataStart"])();
    return params.index_pattern ? await indexPatterns.find(params.index_pattern) : [];
  },
  responseHandler: 'none'
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: MetricsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsPlugin", function() { return MetricsPlugin; });
/* harmony import */ var _application_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/index.scss */ "./public/application/index.scss");
/* harmony import */ var _application_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metrics_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics_fn */ "./public/metrics_fn.ts");
/* harmony import */ var _metrics_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics_type */ "./public/metrics_type.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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
class MetricsPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);
    this.initializerContext = initializerContext;
  }
  async setup(core, {
    expressions,
    visualizations,
    charts,
    dataSourceManagement,
    dataSource
  }) {
    expressions.registerFunction(_metrics_fn__WEBPACK_IMPORTED_MODULE_1__["createMetricsFn"]);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setUISettings"])(core.uiSettings);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setChartsSetup"])(charts);
    visualizations.createReactVisualization(_metrics_type__WEBPACK_IMPORTED_MODULE_2__["metricsVisDefinition"]);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setDataSourceManagementSetup"])({
      dataSourceManagement
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setDataSourceSetup"])({
      dataSource
    });
  }
  start(core, {
    data
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setSavedObjectsClient"])(core.savedObjects);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setI18n"])(core.i18n);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setFieldFormats"])(data.fieldFormats);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setDataStart"])(data);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setCoreStart"])(core);
    Object(_services__WEBPACK_IMPORTED_MODULE_3__["setNotifications"])(core.notifications);
  }
}

/***/ }),

/***/ "./public/request_handler.js":
/*!***********************************!*\
  !*** ./public/request_handler.js ***!
  \***********************************/
/*! exports provided: metricsRequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metricsRequestHandler", function() { return metricsRequestHandler; });
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./public/application/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
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




const metricsRequestHandler = async ({
  uiState,
  timeRange,
  filters,
  query,
  visParams,
  savedObjectId
}) => {
  const config = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getUISettings"])();
  const timezone = Object(_application__WEBPACK_IMPORTED_MODULE_0__["getTimezone"])(config);
  const uiStateObj = uiState.get(visParams.type, {});
  const parsedTimeRange = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getDataStart"])().query.timefilter.timefilter.calculateBounds(timeRange);
  const scaledDataFormat = config.get('dateFormat:scaled');
  const dateFormat = config.get('dateFormat');
  if (visParams && visParams.id && !visParams.isModelInvalid) {
    try {
      const maxBuckets = config.get(_common_constants__WEBPACK_IMPORTED_MODULE_2__["MAX_BUCKETS_SETTING"]);
      Object(_application__WEBPACK_IMPORTED_MODULE_0__["validateInterval"])(parsedTimeRange, visParams, maxBuckets);
      const resp = await Object(_services__WEBPACK_IMPORTED_MODULE_1__["getCoreStart"])().http.post('/api/metrics/vis/data', {
        body: JSON.stringify({
          timerange: {
            timezone,
            ...parsedTimeRange
          },
          query,
          filters,
          panels: [visParams],
          state: uiStateObj,
          savedObjectId: savedObjectId || 'unsaved'
        })
      });
      return {
        dateFormat,
        scaledDataFormat,
        timezone,
        ...resp
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve({});
};

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getUISettings, setUISettings, getFieldFormats, setFieldFormats, getSavedObjectsClient, setSavedObjectsClient, getCoreStart, setCoreStart, getDataStart, setDataStart, getI18n, setI18n, getChartsSetup, setChartsSetup, getDataSourceSetup, setDataSourceSetup, getDataSourceManagementSetup, setDataSourceManagementSetup, getNotifications, setNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISettings", function() { return getUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return setUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldFormats", function() { return getFieldFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFieldFormats", function() { return setFieldFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectsClient", function() { return getSavedObjectsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedObjectsClient", function() { return setSavedObjectsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoreStart", function() { return getCoreStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCoreStart", function() { return setCoreStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataStart", function() { return getDataStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataStart", function() { return setDataStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getI18n", function() { return getI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setI18n", function() { return setI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsSetup", function() { return getChartsSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChartsSetup", function() { return setChartsSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSourceSetup", function() { return getDataSourceSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataSourceSetup", function() { return setDataSourceSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSourceManagementSetup", function() { return getDataSourceManagementSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataSourceManagementSetup", function() { return setDataSourceManagementSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
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


const [getUISettings, setUISettings] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UISettings');
const [getFieldFormats, setFieldFormats] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('FieldFormats');
const [getSavedObjectsClient, setSavedObjectsClient] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('SavedObjectsClient');
const [getCoreStart, setCoreStart] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('CoreStart');
const [getDataStart, setDataStart] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('DataStart');
const [getI18n, setI18n] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('I18n');
const [getChartsSetup, setChartsSetup] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('ChartsPluginSetup');
const [getDataSourceSetup, setDataSourceSetup] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('DataSourceSetup');
const [getDataSourceManagementSetup, setDataSourceManagementSetup] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('DataSourceManagementSetup');
const [getNotifications, setNotifications] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');

/***/ }),

/***/ "@elastic/charts":
/*!**************************************************!*\
  !*** external "__osdSharedDeps__.ElasticCharts" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticCharts;

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

/***/ "moment-timezone":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.MomentTimezone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.MomentTimezone;

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

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__osdSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDom;

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
//# sourceMappingURL=visTypeTimeseries.plugin.js.map