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
/******/ 		"workspace": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "workspace.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["workspace_bundle_jsonpfunction"] = window["workspace_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@xobotyi/scrollbar-width/dist/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v7dark":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/use_case_overview/setup_overview.scss?v7dark ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v7light":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/use_case_overview/setup_overview.scss?v7light ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v8dark":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/use_case_overview/setup_overview.scss?v8dark ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v8light":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/use_case_overview/setup_overview.scss?v8light ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v9dark":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/use_case_overview/setup_overview.scss?v9dark ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v9light":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/use_case_overview/setup_overview.scss?v9light ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n", "",{"version":3,"sources":["webpack://./public/components/use_case_overview/setup_overview.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,mDAAmD,YAAY,CAAC,2GAA2G,YAAY,CAAC,oDAAoD,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.usecaseOverviewGettingStartedCard .euiCard__title{display:none}.usecaseOverviewGettingStartedCard .euiCard__description,.usecaseOverviewGettingStartedCard .euiCard__icon{margin-top:0}.usecaseOverviewGettingStartedCard .euiCard__footer{margin-top:8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v7dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/workspace_menu/workspace_menu.scss?v7dark ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v7light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/workspace_menu/workspace_menu.scss?v7light ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v8dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/workspace_menu/workspace_menu.scss?v8dark ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v8light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/workspace_menu/workspace_menu.scss?v8light ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v9dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/workspace_menu/workspace_menu.scss?v9dark ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v9light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/workspace_menu/workspace_menu.scss?v9light ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_menu/workspace_menu.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qBAAqB,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceMenuHeader{padding:24px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v7dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/workspace_selector/workspace_selector.scss?v7dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#141519}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#141519;border:1px solid #535966;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#141519;color:#dfe5ef;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#141519}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#141519;border:1px solid #535966;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#141519;color:#dfe5ef;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v7light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/workspace_selector/workspace_selector.scss?v7light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#fafbfd}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#fafbfd;border:1px solid #98a2b3;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#fafbfd;color:#343741;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#fafbfd}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#fafbfd;border:1px solid #98a2b3;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#fafbfd;color:#343741;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v8dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/workspace_selector/workspace_selector.scss?v8dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#172430}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#172430;border:1px solid #5b6875;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#172430;color:#dfe5ef;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#172430}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#172430;border:1px solid #5b6875;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#172430;color:#dfe5ef;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v8light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/workspace_selector/workspace_selector.scss?v8light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#f0f2f4}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#f0f2f4;border:1px solid #adb4ba;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#f0f2f4;color:#2a3947;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#f0f2f4}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#f0f2f4;border:1px solid #adb4ba;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#f0f2f4;color:#2a3947;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v9dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/workspace_selector/workspace_selector.scss?v9dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#0f171f}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#0f171f;border:1px solid #5c666f;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#0f171f;color:#959ba2;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#0f171f}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#0f171f;border:1px solid #5c666f;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#0f171f;color:#959ba2;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v9light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/workspace_selector/workspace_selector.scss?v9light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#fcfeff}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#fcfeff;border:1px solid #adb4ba;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#fcfeff;color:#2a3947;z-index:0;text-transform:uppercase}\n", "",{"version":3,"sources":["webpack://./public/components/workspace_selector/workspace_selector.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,4EAA4E,0BAA0B,CAAC,yBAAyB,CAAC,yCAAyC,iBAAiB,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,iDAAiD,wBAAwB,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,wBAAwB,CAAC,aAAa,CAAC,SAAS,CAAC,wBAAwB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.workspaceNameLabel{background-color:#fcfeff}.workspaceSelectorPopoverButton:hover,.workspaceSelectorPopoverButton:focus{transition:none !important;transform:none !important}.workspaceSelectorPopoverButtonContainer{position:relative;background-color:#fcfeff;border:1px solid #adb4ba;border-radius:4px}.workspaceSelectorPopoverButtonContainer::before{content:attr(data-label);position:absolute;top:-0.2rem;left:8px;font-size:.4rem;line-height:.4rem;padding:0 4px;background-color:#fcfeff;color:#2a3947;z-index:0;text-transform:uppercase}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../../node_modules/intl-format-cache/dist/index.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-format-cache/dist/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var RelativeTimeFormat;
// -- Utilities ----------------------------------------------------------------
function getCacheId(inputs) {
    return JSON.stringify(inputs.map(function (input) {
        return input && typeof input === 'object' ? orderedProps(input) : input;
    }));
}
function orderedProps(obj) {
    return Object.keys(obj)
        .sort()
        .map(function (k) {
        var _a;
        return (_a = {}, _a[k] = obj[k], _a);
    });
}
var memoizeFormatConstructor = function (FormatConstructor, cache) {
    if (cache === void 0) { cache = {}; }
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var cacheId = getCacheId(args);
        var format = cacheId && cache[cacheId];
        if (!format) {
            format = new ((_a = FormatConstructor).bind.apply(_a, [void 0].concat(args)))();
            if (cacheId) {
                cache[cacheId] = format;
            }
        }
        return format;
    };
};
exports.default = memoizeFormatConstructor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../node_modules/intl-format-cache/index.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-format-cache/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(/*! ./dist */ "../../../node_modules/intl-format-cache/dist/index.js")['default'];
exports['default'] = exports;


/***/ }),

/***/ "../../../node_modules/intl-messageformat/index.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlMessageFormat = __webpack_require__(/*! ./lib/main */ "../../../node_modules/intl-messageformat/lib/main.js")['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(/*! ./lib/locales */ 1);

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;


/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/compiler.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/compiler.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};

//# sourceMappingURL=compiler.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/core.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/core.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "../../../node_modules/intl-messageformat/lib/utils.js"), src$es5$$ = __webpack_require__(/*! ./es5 */ "../../../node_modules/intl-messageformat/lib/es5.js"), src$compiler$$ = __webpack_require__(/*! ./compiler */ "../../../node_modules/intl-messageformat/lib/compiler.js"), intl$messageformat$parser$$ = __webpack_require__(/*! intl-messageformat-parser */ "../../../node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js");
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
      try {
        return messageFormat._format(pattern, values);
      } catch (e) {
        if (e.variableId) {
          throw new Error(
            'The intl string context variable \'' + e.variableId + '\'' +
            ' was not provided to the string \'' + message + '\''
          );
        } else {
          throw e;
        }
      }
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value, err;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
          err = new Error('A value must be provided for: ' + id);
          err.variableId = id;
          throw err;
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/en.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/en.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED FILE

exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

//# sourceMappingURL=en.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/es5.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/es5.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "../../../node_modules/intl-messageformat/lib/utils.js");

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

exports.defineProperty = defineProperty, exports.objCreate = objCreate;

//# sourceMappingURL=es5.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/main.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/main.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jslint esnext: true */


var src$core$$ = __webpack_require__(/*! ./core */ "../../../node_modules/intl-messageformat/lib/core.js"), src$en$$ = __webpack_require__(/*! ./en */ "../../../node_modules/intl-messageformat/lib/en.js");

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];

//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/lib/utils.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/lib/utils.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js":
/*!*************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/index.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(/*! ./lib/parser */ "../../../node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js")['default'];
exports['default'] = exports;


/***/ }),

/***/ "../../../node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js":
/*!******************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-messageformat/node_modules/intl-messageformat-parser/lib/parser.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["default"] = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements,
                    location: location()
                };
            },
        peg$c1 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c2 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText,
                    location: location()
                };
            },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c5 = "{",
        peg$c6 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "}",
        peg$c10 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c11 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2],
                    location: location()
                };
            },
        peg$c12 = "number",
        peg$c13 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c14 = "date",
        peg$c15 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c16 = "time",
        peg$c17 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c18 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2],
                    location: location()
                };
            },
        peg$c19 = "plural",
        peg$c20 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c21 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                };
            },
        peg$c22 = "selectordinal",
        peg$c23 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                }
            },
        peg$c25 = "select",
        peg$c26 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c27 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options,
                    location: location()
                };
            },
        peg$c28 = "=",
        peg$c29 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c30 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern,
                    location: location()
                };
            },
        peg$c31 = "offset:",
        peg$c32 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c33 = function(number) {
                return number;
            },
        peg$c34 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options,
                    location: location()
                };
            },
        peg$c35 = { type: "other", description: "whitespace" },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c38 = { type: "other", description: "optionalWhitespace" },
        peg$c39 = /^[0-9]/,
        peg$c40 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c43 = "0",
        peg$c44 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c45 = /^[1-9]/,
        peg$c46 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c47 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = { type: "class", value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]" },
        peg$c50 = "\\\\",
        peg$c51 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c52 = function() { return '\\'; },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c7;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c9;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c11(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c14) {
          s1 = peg$c14;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c16) {
            s1 = peg$c16;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c28;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c5;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c9;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c10); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c30(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c55();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c56) {
              s1 = peg$c56;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c57); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s1 = peg$c59;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c60); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s1 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c63); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  s3 = peg$currPos;
                  s4 = peg$parsehexDigit();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsehexDigit();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsehexDigit();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parsehexDigit();
                        if (s7 !== peg$FAILED) {
                          s4 = [s4, s5, s6, s7];
                          s3 = s4;
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                  } else {
                    s2 = s3;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c64(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "../../../node_modules/intl-relativeformat/index.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlRelativeFormat = __webpack_require__(/*! ./lib/main */ "../../../node_modules/intl-relativeformat/lib/main.js")['default'];

// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(/*! ./lib/locales */ 2);

// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlRelativeFormat;
exports['default'] = exports;


/***/ }),

/***/ "../../../node_modules/intl-relativeformat/lib/core.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/lib/core.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var intl_messageformat_1 = __webpack_require__(/*! intl-messageformat */ "../../../node_modules/intl-messageformat/index.js");
var diff_1 = __webpack_require__(/*! ./diff */ "../../../node_modules/intl-relativeformat/lib/diff.js");
var es5_1 = __webpack_require__(/*! ./es5 */ "../../../node_modules/intl-relativeformat/lib/es5.js");
exports.default = RelativeFormat;
// -----------------------------------------------------------------------------
var FIELDS = [
    'second', 'second-short',
    'minute', 'minute-short',
    'hour', 'hour-short',
    'day', 'day-short',
    'month', 'month-short',
    'year', 'year-short'
];
var STYLES = ['best fit', 'numeric'];
// -- RelativeFormat -----------------------------------------------------------
function RelativeFormat(locales, options) {
    options = options || {};
    // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.
    if (es5_1.isArray(locales)) {
        locales = locales.concat();
    }
    es5_1.defineProperty(this, '_locale', { value: this._resolveLocale(locales) });
    es5_1.defineProperty(this, '_options', { value: {
            style: this._resolveStyle(options.style),
            units: this._isValidUnits(options.units) && options.units
        } });
    es5_1.defineProperty(this, '_locales', { value: locales });
    es5_1.defineProperty(this, '_fields', { value: this._findFields(this._locale) });
    es5_1.defineProperty(this, '_messages', { value: es5_1.objCreate(null) });
    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var relativeFormat = this;
    this.format = function format(date, options) {
        return relativeFormat._format(date, options);
    };
}
// Define internal private properties for dealing with locale data.
es5_1.defineProperty(RelativeFormat, '__localeData__', { value: es5_1.objCreate(null) });
es5_1.defineProperty(RelativeFormat, '__addLocaleData', { value: function () {
        for (var i = 0; i < arguments.length; i++) {
            var datum = arguments[i];
            if (!(datum && datum.locale)) {
                throw new Error('Locale data provided to IntlRelativeFormat is missing a ' +
                    '`locale` property value');
            }
            RelativeFormat.__localeData__[datum.locale.toLowerCase()] = datum;
            // Add data to IntlMessageFormat.
            intl_messageformat_1.default.__addLocaleData(datum);
        }
    } });
// Define public `defaultLocale` property which can be set by the developer, or
// it will be set when the first RelativeFormat instance is created by
// leveraging the resolved locale from `Intl`.
es5_1.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
});
// Define public `thresholds` property which can be set by the developer, and
// defaults to relative time thresholds from moment.js.
es5_1.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,
    value: {
        second: 45, 'second-short': 45,
        minute: 45, 'minute-short': 45,
        hour: 22, 'hour-short': 22,
        day: 26, 'day-short': 26,
        month: 11, 'month-short': 11 // months to year
    }
});
RelativeFormat.prototype.resolvedOptions = function () {
    return {
        locale: this._locale,
        style: this._options.style,
        units: this._options.units
    };
};
RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales = this._locales;
    var resolvedLocale = this._locale;
    var field = this._fields[units];
    var relativeTime = field.relativeTime;
    var future = '';
    var past = '';
    var i;
    for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
            future += ' ' + i + ' {' +
                relativeTime.future[i].replace('{0}', '#') + '}';
        }
    }
    for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
            past += ' ' + i + ' {' +
                relativeTime.past[i].replace('{0}', '#') + '}';
        }
    }
    var message = '{when, select, future {{0, plural, ' + future + '}}' +
        'past {{0, plural, ' + past + '}}}';
    // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.
    return new intl_messageformat_1.default(message, locales);
};
RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages;
    // Create a new synthetic message based on the locale data from CLDR.
    if (!messages[units]) {
        messages[units] = this._compileMessage(units);
    }
    return messages[units];
};
RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];
    if (field.relative) {
        return field.relative[diff];
    }
};
RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data = localeData[locale.toLowerCase()];
    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.
    while (data) {
        if (data.fields) {
            return data.fields;
        }
        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }
    throw new Error('Locale data added to IntlRelativeFormat is missing `fields` for :' +
        locale);
};
RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : es5_1.dateNow();
    if (date === undefined) {
        date = now;
    }
    // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.
    if (!isFinite(now)) {
        throw new RangeError('The `now` option provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    if (!isFinite(date)) {
        throw new RangeError('The date value provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    var diffReport = diff_1.default(now, date);
    var units = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];
    if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
        if (relativeUnits) {
            return relativeUnits;
        }
    }
    return this._getMessage(units).format({
        '0': Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
    });
};
RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || es5_1.arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
    }
    if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
        if (suggestion && es5_1.arrIndexOf.call(FIELDS, suggestion) >= 0) {
            throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` ' +
                'value, did you mean: ' + suggestion);
        }
    }
    throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
        'must be one of: "' + FIELDS.join('", "') + '"');
};
RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }
    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(RelativeFormat.defaultLocale);
    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data;
    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');
        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }
            localeParts.pop();
        }
    }
    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlRelativeFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale);
};
RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
        return STYLES[0];
    }
    if (es5_1.arrIndexOf.call(STYLES, style) >= 0) {
        return style;
    }
    throw new Error('"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
        'must be one of: "' + STYLES.join('", "') + '"');
};
RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;
    var fields = FIELDS.filter(function (field) {
        return field.indexOf('-short') < 1;
    });
    for (i = 0, l = fields.length; i < l; i += 1) {
        units = fields[i];
        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
            break;
        }
    }
    return units;
};
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../../node_modules/intl-relativeformat/lib/diff.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/lib/diff.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var round = Math.round;
function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
}
// Thanks to date-fns
// https://github.com/date-fns/date-fns
// MIT © Sasha Koss
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_DAY = 86400000;
function startOfDay(dirtyDate) {
    var date = new Date(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() -
        startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    var timestampRight = startOfDayRight.getTime() -
        startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
function default_1(from, to) {
    // Convert to ms timestamps.
    from = +from;
    to = +to;
    var millisecond = round(to - from), second = round(millisecond / 1000), minute = round(second / 60), hour = round(minute / 60);
    // We expect a more precision in rounding when dealing with
    // days as it feels wrong when something happended 13 hours ago and
    // is regarded as "yesterday" even if the time was this morning.
    var day = differenceInCalendarDays(to, from);
    var week = round(day / 7);
    var rawYears = daysToYears(day), month = round(rawYears * 12), year = round(rawYears);
    return {
        millisecond: millisecond,
        second: second,
        'second-short': second,
        minute: minute,
        'minute-short': minute,
        hour: hour,
        'hour-short': hour,
        day: day,
        'day-short': day,
        week: week,
        'week-short': week,
        month: month,
        'month-short': month,
        year: year,
        'year-short': year
    };
}
exports.default = default_1;
//# sourceMappingURL=diff.js.map

/***/ }),

/***/ "../../../node_modules/intl-relativeformat/lib/en.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/lib/en.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* @generated */
exports.default = { "locale": "en", "pluralRuleFunction": function (n, ord) {
        var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        if (ord)
            return (n10 == 1 && n100 != 11) ? 'one'
                : (n10 == 2 && n100 != 12) ? 'two'
                    : (n10 == 3 && n100 != 13) ? 'few'
                        : 'other';
        return (n == 1 && v0) ? 'one' : 'other';
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "year-short": { "displayName": "yr.", "relative": { "0": "this yr.", "1": "next yr.", "-1": "last yr." }, "relativeTime": { "future": { "one": "in {0} yr.", "other": "in {0} yr." }, "past": { "one": "{0} yr. ago", "other": "{0} yr. ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "month-short": { "displayName": "mo.", "relative": { "0": "this mo.", "1": "next mo.", "-1": "last mo." }, "relativeTime": { "future": { "one": "in {0} mo.", "other": "in {0} mo." }, "past": { "one": "{0} mo. ago", "other": "{0} mo. ago" } } }, "week": { "displayName": "week", "relativePeriod": "the week of {0}", "relative": { "0": "this week", "1": "next week", "-1": "last week" }, "relativeTime": { "future": { "one": "in {0} week", "other": "in {0} weeks" }, "past": { "one": "{0} week ago", "other": "{0} weeks ago" } } }, "week-short": { "displayName": "wk.", "relativePeriod": "the week of {0}", "relative": { "0": "this wk.", "1": "next wk.", "-1": "last wk." }, "relativeTime": { "future": { "one": "in {0} wk.", "other": "in {0} wk." }, "past": { "one": "{0} wk. ago", "other": "{0} wk. ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "day-short": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "hour-short": { "displayName": "hr.", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hr.", "other": "in {0} hr." }, "past": { "one": "{0} hr. ago", "other": "{0} hr. ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "minute-short": { "displayName": "min.", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} min.", "other": "in {0} min." }, "past": { "one": "{0} min. ago", "other": "{0} min. ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } }, "second-short": { "displayName": "sec.", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} sec.", "other": "in {0} sec." }, "past": { "one": "{0} sec. ago", "other": "{0} sec. ago" } } } } };
//# sourceMappingURL=en.js.map

/***/ }),

/***/ "../../../node_modules/intl-relativeformat/lib/es5.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/lib/es5.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License
var hop = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
var realDefineProp = (function () {
    try {
        return !!Object.defineProperty({}, 'a', {});
    }
    catch (e) {
        return false;
    }
})();
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
var defineProperty = realDefineProp ? Object.defineProperty :
    function (obj, name, desc) {
        if ('get' in desc && obj.__defineGetter__) {
            obj.__defineGetter__(name, desc.get);
        }
        else if (!hop.call(obj, name) || 'value' in desc) {
            obj[name] = desc.value;
        }
    };
exports.defineProperty = defineProperty;
var objCreate = Object.create || function (proto, props) {
    var obj, k;
    function F() { }
    F.prototype = proto;
    obj = new F();
    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }
    return obj;
};
exports.objCreate = objCreate;
var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
        return -1;
    }
    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
};
exports.arrIndexOf = arrIndexOf;
var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};
exports.isArray = isArray;
var dateNow = Date.now || function () {
    return new Date().getTime();
};
exports.dateNow = dateNow;
//# sourceMappingURL=es5.js.map

/***/ }),

/***/ "../../../node_modules/intl-relativeformat/lib/main.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/intl-relativeformat/lib/main.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* jslint esnext: true */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "../../../node_modules/intl-relativeformat/lib/core.js");
var en_1 = __webpack_require__(/*! ./en */ "../../../node_modules/intl-relativeformat/lib/en.js");
core_1.default.__addLocaleData(en_1.default);
core_1.default.defaultLocale = 'en';
exports.default = core_1.default;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../node_modules/invariant/browser.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/invariant/browser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


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

/***/ "../../../node_modules/object-assign/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/object-assign/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../../../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../../../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../../node_modules/prop-types/lib/has.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/prop-types/lib/has.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../../../node_modules/react-intl/lib/index.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-intl/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2019, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var allLocaleData = _interopDefault(__webpack_require__(/*! ../locale-data/index.js */ 0));
var IntlMessageFormat = _interopDefault(__webpack_require__(/*! intl-messageformat */ "../../../node_modules/intl-messageformat/index.js"));
var IntlRelativeFormat = _interopDefault(__webpack_require__(/*! intl-relativeformat */ "../../../node_modules/intl-relativeformat/index.js"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js"));
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var hoistNonReactStatics = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "../../../node_modules/invariant/browser.js"));
var memoizeIntlConstructor = _interopDefault(__webpack_require__(/*! intl-format-cache */ "../../../node_modules/intl-format-cache/index.js"));

// GENERATED FILE
var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "year-short": { "displayName": "yr.", "relative": { "0": "this yr.", "1": "next yr.", "-1": "last yr." }, "relativeTime": { "future": { "one": "in {0} yr.", "other": "in {0} yr." }, "past": { "one": "{0} yr. ago", "other": "{0} yr. ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "month-short": { "displayName": "mo.", "relative": { "0": "this mo.", "1": "next mo.", "-1": "last mo." }, "relativeTime": { "future": { "one": "in {0} mo.", "other": "in {0} mo." }, "past": { "one": "{0} mo. ago", "other": "{0} mo. ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "day-short": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "hour-short": { "displayName": "hr.", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hr.", "other": "in {0} hr." }, "past": { "one": "{0} hr. ago", "other": "{0} hr. ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "minute-short": { "displayName": "min.", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} min.", "other": "in {0} min." }, "past": { "one": "{0} min. ago", "other": "{0} min. ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } }, "second-short": { "displayName": "sec.", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} sec.", "other": "in {0} sec." }, "past": { "one": "{0} sec. ago", "other": "{0} sec. ago" } } } } };

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function addLocaleData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var locales = Array.isArray(data) ? data : [data];

  locales.forEach(function (localeData) {
    if (localeData && localeData.locale) {
      IntlMessageFormat.__addLocaleData(localeData);
      IntlRelativeFormat.__addLocaleData(localeData);
    }
  });
}

function hasLocaleData(locale) {
  var localeParts = (locale || '').split('-');

  while (localeParts.length > 0) {
    if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
      return true;
    }

    localeParts.pop();
  }

  return false;
}

function hasIMFAndIRFLocaleData(locale) {
  var normalizedLocale = locale && locale.toLowerCase();

  return !!(IntlMessageFormat.__localeData__[normalizedLocale] && IntlRelativeFormat.__localeData__[normalizedLocale]);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var bool = PropTypes.bool;
var number = PropTypes.number;
var string = PropTypes.string;
var func = PropTypes.func;
var object = PropTypes.object;
var oneOf = PropTypes.oneOf;
var shape = PropTypes.shape;
var any = PropTypes.any;
var oneOfType = PropTypes.oneOfType;

var localeMatcher = oneOf(['best fit', 'lookup']);
var narrowShortLong = oneOf(['narrow', 'short', 'long']);
var numeric2digit = oneOf(['numeric', '2-digit']);
var funcReq = func.isRequired;

var intlConfigPropTypes = {
  locale: string,
  timeZone: string,
  formats: object,
  messages: object,
  textComponent: any,

  defaultLocale: string,
  defaultFormats: object,

  onError: func
};

var intlFormatPropTypes = {
  formatDate: funcReq,
  formatTime: funcReq,
  formatRelative: funcReq,
  formatNumber: funcReq,
  formatPlural: funcReq,
  formatMessage: funcReq,
  formatHTMLMessage: funcReq
};

var intlShape = shape(_extends({}, intlConfigPropTypes, intlFormatPropTypes, {
  formatters: object,
  now: funcReq
}));

var messageDescriptorPropTypes = {
  id: string.isRequired,
  description: oneOfType([string, object]),
  defaultMessage: string
};

var dateTimeFormatPropTypes = {
  localeMatcher: localeMatcher,
  formatMatcher: oneOf(['basic', 'best fit']),

  timeZone: string,
  hour12: bool,

  weekday: narrowShortLong,
  era: narrowShortLong,
  year: numeric2digit,
  month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
  day: numeric2digit,
  hour: numeric2digit,
  minute: numeric2digit,
  second: numeric2digit,
  timeZoneName: oneOf(['short', 'long'])
};

var numberFormatPropTypes = {
  localeMatcher: localeMatcher,

  style: oneOf(['decimal', 'currency', 'percent']),
  currency: string,
  currencyDisplay: oneOf(['symbol', 'code', 'name']),
  useGrouping: bool,

  minimumIntegerDigits: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
  minimumSignificantDigits: number,
  maximumSignificantDigits: number
};

var relativeFormatPropTypes = {
  style: oneOf(['best fit', 'numeric']),
  units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year', 'second-short', 'minute-short', 'hour-short', 'day-short', 'month-short', 'year-short'])
};

var pluralFormatPropTypes = {
  style: oneOf(['cardinal', 'ordinal'])
};

/*
HTML escaping and shallow-equals implementations are the same as React's
(on purpose.) Therefore, it has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/

var intlConfigPropNames = Object.keys(intlConfigPropTypes);

var ESCAPED_CHARS = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

function escape(str) {
  return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
    return ESCAPED_CHARS[match];
  });
}

function filterProps(props, whitelist) {
  var defaults$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return whitelist.reduce(function (filtered, name) {
    if (props.hasOwnProperty(name)) {
      filtered[name] = props[name];
    } else if (defaults$$1.hasOwnProperty(name)) {
      filtered[name] = defaults$$1[name];
    }

    return filtered;
  }, {});
}

function invariantIntlContext() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intl = _ref.intl;

  invariant(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}

function shallowEquals(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
  var props = _ref2.props,
      state = _ref2.state,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? {} : _ref2$context;
  var nextContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _context$intl = context.intl,
      intl = _context$intl === undefined ? {} : _context$intl;
  var _nextContext$intl = nextContext.intl,
      nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;


  return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
}

function createError(message, exception) {
  var eMsg = exception ? '\n' + exception : '';
  return '[React Intl] ' + message + eMsg;
}

function defaultErrorHandler(error) {
  if (true) {
    console.error(error);
  }
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// Inspired by react-redux's `connect()` HOC factory function implementation:
// https://github.com/rackt/react-redux

function getDisplayName(Component$$1) {
  return Component$$1.displayName || Component$$1.name || 'Component';
}

function injectIntl(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$intlPropName = options.intlPropName,
      intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var InjectIntl = function (_Component) {
    inherits(InjectIntl, _Component);

    function InjectIntl(props, context) {
      classCallCheck(this, InjectIntl);

      var _this = possibleConstructorReturn(this, (InjectIntl.__proto__ || Object.getPrototypeOf(InjectIntl)).call(this, props, context));

      invariantIntlContext(context);
      return _this;
    }

    createClass(InjectIntl, [{
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        invariant(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');

        return this._wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React__default.createElement(WrappedComponent, _extends({}, this.props, defineProperty({}, intlPropName, this.context.intl), {
          ref: withRef ? /* istanbul ignore next */function (ref) {
            return _this2._wrappedInstance = ref;
          } : null
        }));
      }
    }]);
    return InjectIntl;
  }(React.Component);

  InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';
  InjectIntl.contextTypes = {
    intl: intlShape
  };
  InjectIntl.WrappedComponent = WrappedComponent;


  return hoistNonReactStatics(InjectIntl, WrappedComponent);
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function defineMessages(messageDescriptors) {
  // This simply returns what's passed-in because it's meant to be a hook for
  // babel-plugin-react-intl.
  return messageDescriptors;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// This is a "hack" until a proper `intl-pluralformat` package is created.

function resolveLocale(locales) {
  // IntlMessageFormat#_resolveLocale() does not depend on `this`.
  return IntlMessageFormat.prototype._resolveLocale(locales);
}

function findPluralFunction(locale) {
  // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
  return IntlMessageFormat.prototype._findPluralRuleFunction(locale);
}

var IntlPluralFormat = function IntlPluralFormat(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, IntlPluralFormat);

  var useOrdinal = options.style === 'ordinal';
  var pluralFn = findPluralFunction(resolveLocale(locales));

  this.format = function (value) {
    return pluralFn(value, useOrdinal);
  };
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);

var RELATIVE_FORMAT_THRESHOLDS = {
  second: 60, // seconds to minute
  minute: 60, // minutes to hour
  hour: 24, // hours to day
  day: 30, // days to month
  month: 12 };

function updateRelativeFormatThresholds(newThresholds) {
  var thresholds = IntlRelativeFormat.thresholds;
  thresholds.second = newThresholds.second;
  thresholds.minute = newThresholds.minute;
  thresholds.hour = newThresholds.hour;
  thresholds.day = newThresholds.day;
  thresholds.month = newThresholds.month;
  thresholds['second-short'] = newThresholds['second-short'];
  thresholds['minute-short'] = newThresholds['minute-short'];
  thresholds['hour-short'] = newThresholds['hour-short'];
  thresholds['day-short'] = newThresholds['day-short'];
  thresholds['month-short'] = newThresholds['month-short'];
}

function getNamedFormat(formats, type, name, onError) {
  var format = formats && formats[type] && formats[type][name];
  if (format) {
    return format;
  }

  onError(createError('No ' + type + ' format named: ' + name));
}

function formatDate(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      timeZone = config.timeZone;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && { timeZone: timeZone }, format && getNamedFormat(formats, 'date', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting date.', e));
  }

  return String(date);
}

function formatTime(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      timeZone = config.timeZone;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var defaults$$1 = _extends({}, timeZone && { timeZone: timeZone }, format && getNamedFormat(formats, 'time', format, onError));
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
    // Add default formatting options if hour, minute, or second isn't defined.
    filteredOptions = _extends({}, filteredOptions, { hour: 'numeric', minute: 'numeric' });
  }

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    onError(createError('Error formatting time.', e));
  }

  return String(date);
}

function formatRelative(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var date = new Date(value);
  var now = new Date(options.now);
  var defaults$$1 = format && getNamedFormat(formats, 'relative', format, onError);
  var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults$$1);

  // Capture the current threshold values, then temporarily override them with
  // specific values just for this render.
  var oldThresholds = _extends({}, IntlRelativeFormat.thresholds);
  updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

  try {
    return state.getRelativeFormat(locale, filteredOptions).format(date, {
      now: isFinite(now) ? now : state.now()
    });
  } catch (e) {
    onError(createError('Error formatting relative time.', e));
  } finally {
    updateRelativeFormatThresholds(oldThresholds);
  }

  return String(date);
}

function formatNumber(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var onError = config.onError || defaultErrorHandler;
  var defaults$$1 = format && getNamedFormat(formats, 'number', format, onError);
  var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getNumberFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting number.', e));
  }

  return String(value);
}

function formatPlural(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale;


  var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
  var onError = config.onError || defaultErrorHandler;

  try {
    return state.getPluralFormat(locale, filteredOptions).format(value);
  } catch (e) {
    onError(createError('Error formatting plural.', e));
  }

  return 'other';
}

function formatMessage(config, state) {
  var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      messages = config.messages,
      defaultLocale = config.defaultLocale,
      defaultFormats = config.defaultFormats;
  var id = messageDescriptor.id,
      defaultMessage = messageDescriptor.defaultMessage;

  // Produce a better error if the user calls `intl.formatMessage(element)`

  if (true) {
    invariant(!React.isValidElement(config), '[React Intl] Don\'t pass React elements to ' + 'formatMessage(), pass `.props`.');
  }

  // `id` is a required field of a Message Descriptor.
  invariant(id, '[React Intl] An `id` must be provided to format a message.');

  var message = messages && messages[id];
  var hasValues = Object.keys(values).length > 0;

  // Avoid expensive message formatting for simple messages without values. In
  // development messages will always be formatted in case of missing values.
  if (!hasValues && "development" === 'production') {
    return message || defaultMessage || id;
  }

  var formattedMessage = void 0;
  var onError = config.onError || defaultErrorHandler;

  if (message) {
    try {
      var formatter = state.getMessageFormat(message, locale, formats);

      formattedMessage = formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''), e));
    }
  } else {
    // This prevents warnings from littering the console in development
    // when no `messages` are passed into the <IntlProvider> for the
    // default locale, and a default message is in the source.
    if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
      onError(createError('Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '')));
    }
  }

  if (!formattedMessage && defaultMessage) {
    try {
      var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

      formattedMessage = _formatter.format(values);
    } catch (e) {
      onError(createError('Error formatting the default message for: "' + id + '"', e));
    }
  }

  if (!formattedMessage) {
    onError(createError('Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.')));
  }

  return formattedMessage || message || defaultMessage || id;
}

function formatHTMLMessage(config, state, messageDescriptor) {
  var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // Process all the values before they are used when formatting the ICU
  // Message string. Since the formatted message might be injected via
  // `innerHTML`, all String-based values need to be HTML-escaped.
  var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
    var value = rawValues[name];
    escaped[name] = typeof value === 'string' ? escape(value) : value;
    return escaped;
  }, {});

  return formatMessage(config, state, messageDescriptor, escapedValues);
}



var format = Object.freeze({
	formatDate: formatDate,
	formatTime: formatTime,
	formatRelative: formatRelative,
	formatNumber: formatNumber,
	formatPlural: formatPlural,
	formatMessage: formatMessage,
	formatHTMLMessage: formatHTMLMessage
});

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
var intlFormatPropNames = Object.keys(intlFormatPropTypes);

// These are not a static property on the `IntlProvider` class so the intl
// config values can be inherited from an <IntlProvider> ancestor.
var defaultProps = {
  formats: {},
  messages: {},
  timeZone: null,
  textComponent: 'span',

  defaultLocale: 'en',
  defaultFormats: {},

  onError: defaultErrorHandler
};

var IntlProvider = function (_Component) {
  inherits(IntlProvider, _Component);

  function IntlProvider(props) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, IntlProvider);

    var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));

    invariant(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');

    var intlContext = context.intl;

    // Used to stabilize time when performing an initial rendering so that
    // all relative times use the same reference "now" time.

    var initialNow = void 0;
    if (isFinite(props.initialNow)) {
      initialNow = Number(props.initialNow);
    } else {
      // When an `initialNow` isn't provided via `props`, look to see an
      // <IntlProvider> exists in the ancestry and call its `now()`
      // function to propagate its value for "now".
      initialNow = intlContext ? intlContext.now() : Date.now();
    }

    // Creating `Intl*` formatters is expensive. If there's a parent
    // `<IntlProvider>`, then its formatters will be used. Otherwise, this
    // memoize the `Intl*` constructors and cache them for the lifecycle of
    // this IntlProvider instance.

    var _ref = intlContext || {},
        _ref$formatters = _ref.formatters,
        formatters = _ref$formatters === undefined ? {
      getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
      getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
      getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
      getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
      getPluralFormat: memoizeIntlConstructor(IntlPluralFormat)
    } : _ref$formatters;

    _this.state = _extends({}, formatters, {

      // Wrapper to provide stable "now" time for initial render.
      now: function now() {
        return _this._didDisplay ? Date.now() : initialNow;
      }
    });
    return _this;
  }

  createClass(IntlProvider, [{
    key: 'getConfig',
    value: function getConfig() {
      var intlContext = this.context.intl;

      // Build a whitelisted config object from `props`, defaults, and
      // `context.intl`, if an <IntlProvider> exists in the ancestry.

      var config = filterProps(this.props, intlConfigPropNames$1, intlContext);

      // Apply default props. This must be applied last after the props have
      // been resolved and inherited from any <IntlProvider> in the ancestry.
      // This matches how React resolves `defaultProps`.
      for (var propName in defaultProps) {
        if (config[propName] === undefined) {
          config[propName] = defaultProps[propName];
        }
      }

      if (!hasLocaleData(config.locale)) {
        var _config = config,
            locale = _config.locale,
            defaultLocale = _config.defaultLocale,
            defaultFormats = _config.defaultFormats,
            onError = _config.onError;


        onError(createError('Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.')));

        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        config = _extends({}, config, {
          locale: defaultLocale,
          formats: defaultFormats,
          messages: defaultProps.messages
        });
      }

      return config;
    }
  }, {
    key: 'getBoundFormatFns',
    value: function getBoundFormatFns(config, state) {
      return intlFormatPropNames.reduce(function (boundFormatFns, name) {
        boundFormatFns[name] = format[name].bind(null, config, state);
        return boundFormatFns;
      }, {});
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var config = this.getConfig();

      // Bind intl factories and current config to the format functions.
      var boundFormatFns = this.getBoundFormatFns(config, this.state);

      var _state = this.state,
          now = _state.now,
          formatters = objectWithoutProperties(_state, ['now']);


      return {
        intl: _extends({}, config, boundFormatFns, {
          formatters: formatters,
          now: now
        })
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._didDisplay = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);
  return IntlProvider;
}(React.Component);

IntlProvider.displayName = 'IntlProvider';
IntlProvider.contextTypes = {
  intl: intlShape
};
IntlProvider.childContextTypes = {
  intl: intlShape.isRequired
};
 true ? IntlProvider.propTypes = _extends({}, intlConfigPropTypes, {
  children: PropTypes.element.isRequired,
  initialNow: PropTypes.any
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedDate = function (_Component) {
  inherits(FormattedDate, _Component);

  function FormattedDate(props, context) {
    classCallCheck(this, FormattedDate);

    var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedDate, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatDate = _context$intl.formatDate,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedDate = formatDate(value, this.props);

      if (typeof children === 'function') {
        return children(formattedDate);
      }

      return React__default.createElement(
        Text,
        null,
        formattedDate
      );
    }
  }]);
  return FormattedDate;
}(React.Component);

FormattedDate.displayName = 'FormattedDate';
FormattedDate.contextTypes = {
  intl: intlShape
};
 true ? FormattedDate.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedTime = function (_Component) {
  inherits(FormattedTime, _Component);

  function FormattedTime(props, context) {
    classCallCheck(this, FormattedTime);

    var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedTime, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatTime = _context$intl.formatTime,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedTime = formatTime(value, this.props);

      if (typeof children === 'function') {
        return children(formattedTime);
      }

      return React__default.createElement(
        Text,
        null,
        formattedTime
      );
    }
  }]);
  return FormattedTime;
}(React.Component);

FormattedTime.displayName = 'FormattedTime';
FormattedTime.contextTypes = {
  intl: intlShape
};
 true ? FormattedTime.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var SECOND = 1000;
var MINUTE = 1000 * 60;
var HOUR = 1000 * 60 * 60;
var DAY = 1000 * 60 * 60 * 24;

// The maximum timer delay value is a 32-bit signed integer.
// See: https://mdn.io/setTimeout
var MAX_TIMER_DELAY = 2147483647;

function selectUnits(delta) {
  var absDelta = Math.abs(delta);

  if (absDelta < MINUTE) {
    return 'second';
  }

  if (absDelta < HOUR) {
    return 'minute';
  }

  if (absDelta < DAY) {
    return 'hour';
  }

  // The maximum scheduled delay will be measured in days since the maximum
  // timer delay is less than the number of milliseconds in 25 days.
  return 'day';
}

function getUnitDelay(units) {
  switch (units) {
    case 'second':
      return SECOND;
    case 'minute':
      return MINUTE;
    case 'hour':
      return HOUR;
    case 'day':
      return DAY;
    default:
      return MAX_TIMER_DELAY;
  }
}

function isSameDate(a, b) {
  if (a === b) {
    return true;
  }

  var aTime = new Date(a).getTime();
  var bTime = new Date(b).getTime();

  return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
}

var FormattedRelative = function (_Component) {
  inherits(FormattedRelative, _Component);

  function FormattedRelative(props, context) {
    classCallCheck(this, FormattedRelative);

    var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));

    invariantIntlContext(context);

    var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();

    // `now` is stored as state so that `render()` remains a function of
    // props + state, instead of accessing `Date.now()` inside `render()`.
    _this.state = { now: now };
    return _this;
  }

  createClass(FormattedRelative, [{
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate(props, state) {
      var _this2 = this;

      // Cancel and pending update because we're scheduling a new update.
      clearTimeout(this._timer);

      var value = props.value,
          units = props.units,
          updateInterval = props.updateInterval;

      var time = new Date(value).getTime();

      // If the `updateInterval` is falsy, including `0` or we don't have a
      // valid date, then auto updates have been turned off, so we bail and
      // skip scheduling an update.
      if (!updateInterval || !isFinite(time)) {
        return;
      }

      var delta = time - state.now;
      var unitDelay = getUnitDelay(units || selectUnits(delta));
      var unitRemainder = Math.abs(delta % unitDelay);

      // We want the largest possible timer delay which will still display
      // accurate information while reducing unnecessary re-renders. The delay
      // should be until the next "interesting" moment, like a tick from
      // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
      var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);

      this._timer = setTimeout(function () {
        _this2.setState({ now: _this2.context.intl.now() });
      }, delay);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scheduleNextUpdate(this.props, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextValue = _ref.value;

      // When the `props.value` date changes, `state.now` needs to be updated,
      // and the next update can be rescheduled.
      if (!isSameDate(nextValue, this.props.value)) {
        this.setState({ now: this.context.intl.now() });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.scheduleNextUpdate(nextProps, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatRelative = _context$intl.formatRelative,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedRelative = formatRelative(value, _extends({}, this.props, this.state));

      if (typeof children === 'function') {
        return children(formattedRelative);
      }

      return React__default.createElement(
        Text,
        null,
        formattedRelative
      );
    }
  }]);
  return FormattedRelative;
}(React.Component);

FormattedRelative.displayName = 'FormattedRelative';
FormattedRelative.contextTypes = {
  intl: intlShape
};
FormattedRelative.defaultProps = {
  updateInterval: 1000 * 10
};
 true ? FormattedRelative.propTypes = _extends({}, relativeFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  updateInterval: PropTypes.number,
  initialNow: PropTypes.any,
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedNumber = function (_Component) {
  inherits(FormattedNumber, _Component);

  function FormattedNumber(props, context) {
    classCallCheck(this, FormattedNumber);

    var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedNumber, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatNumber = _context$intl.formatNumber,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedNumber = formatNumber(value, this.props);

      if (typeof children === 'function') {
        return children(formattedNumber);
      }

      return React__default.createElement(
        Text,
        null,
        formattedNumber
      );
    }
  }]);
  return FormattedNumber;
}(React.Component);

FormattedNumber.displayName = 'FormattedNumber';
FormattedNumber.contextTypes = {
  intl: intlShape
};
 true ? FormattedNumber.propTypes = _extends({}, numberFormatPropTypes, {
  value: PropTypes.any.isRequired,
  format: PropTypes.string,
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedPlural = function (_Component) {
  inherits(FormattedPlural, _Component);

  function FormattedPlural(props, context) {
    classCallCheck(this, FormattedPlural);

    var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedPlural, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatPlural = _context$intl.formatPlural,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          other = _props.other,
          children = _props.children;


      var pluralCategory = formatPlural(value, this.props);
      var formattedPlural = this.props[pluralCategory] || other;

      if (typeof children === 'function') {
        return children(formattedPlural);
      }

      return React__default.createElement(
        Text,
        null,
        formattedPlural
      );
    }
  }]);
  return FormattedPlural;
}(React.Component);

FormattedPlural.displayName = 'FormattedPlural';
FormattedPlural.contextTypes = {
  intl: intlShape
};
FormattedPlural.defaultProps = {
  style: 'cardinal'
};
 true ? FormattedPlural.propTypes = _extends({}, pluralFormatPropTypes, {
  value: PropTypes.any.isRequired,

  other: PropTypes.node.isRequired,
  zero: PropTypes.node,
  one: PropTypes.node,
  two: PropTypes.node,
  few: PropTypes.node,
  many: PropTypes.node,

  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var defaultFormatMessage = function defaultFormatMessage(descriptor, values) {
  if (true) {
    console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
  }
  return formatMessage({}, { getMessageFormat: memoizeIntlConstructor(IntlMessageFormat) }, descriptor, values);
};

var FormattedMessage = function (_Component) {
  inherits(FormattedMessage, _Component);

  function FormattedMessage(props, context) {
    classCallCheck(this, FormattedMessage);

    var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));

    if (!props.defaultMessage) {
      invariantIntlContext(context);
    }
    return _this;
  }

  createClass(FormattedMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref = this.context.intl || {},
          _ref$formatMessage = _ref.formatMessage,
          formatMessage$$1 = _ref$formatMessage === undefined ? defaultFormatMessage : _ref$formatMessage,
          _ref$textComponent = _ref.textComponent,
          Text = _ref$textComponent === undefined ? 'span' : _ref$textComponent;

      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          values = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var tokenDelimiter = void 0;
      var tokenizedValues = void 0;
      var elements = void 0;

      var hasValues = values && Object.keys(values).length > 0;
      if (hasValues) {
        // Creates a token with a random UID that should not be guessable or
        // conflict with other parts of the `message` string.
        var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

        var generateToken = function () {
          var counter = 0;
          return function () {
            return 'ELEMENT-' + uid + '-' + (counter += 1);
          };
        }();

        // Splitting with a delimiter to support IE8. When using a regex
        // with a capture group IE8 does not include the capture group in
        // the resulting array.
        tokenDelimiter = '@__' + uid + '__@';
        tokenizedValues = {};
        elements = {};

        // Iterates over the `props` to keep track of any React Element
        // values so they can be represented by the `token` as a placeholder
        // when the `message` is formatted. This allows the formatted
        // message to then be broken-up into parts with references to the
        // React Elements inserted back in.
        Object.keys(values).forEach(function (name) {
          var value = values[name];

          if (React.isValidElement(value)) {
            var token = generateToken();
            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
            elements[token] = value;
          } else {
            tokenizedValues[name] = value;
          }
        });
      }

      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedMessage = formatMessage$$1(descriptor, tokenizedValues || values);

      var nodes = void 0;

      var hasElements = elements && Object.keys(elements).length > 0;
      if (hasElements) {
        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while
        // keeping React's virtual diffing working properly.
        nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
          return !!part;
        }).map(function (part) {
          return elements[part] || part;
        });
      } else {
        nodes = [formattedMessage];
      }

      if (typeof children === 'function') {
        return children.apply(undefined, toConsumableArray(nodes));
      }

      // Needs to use `createElement()` instead of JSX, otherwise React will
      // warn about a missing `key` prop with rich-text message formatting.
      return React.createElement.apply(undefined, [Component$$1, null].concat(toConsumableArray(nodes)));
    }
  }]);
  return FormattedMessage;
}(React.Component);

FormattedMessage.displayName = 'FormattedMessage';
FormattedMessage.contextTypes = {
  intl: intlShape
};
FormattedMessage.defaultProps = {
  values: {}
};
 true ? FormattedMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: PropTypes.object,
  tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedHTMLMessage = function (_Component) {
  inherits(FormattedHTMLMessage, _Component);

  function FormattedHTMLMessage(props, context) {
    classCallCheck(this, FormattedHTMLMessage);

    var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedHTMLMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatHTMLMessage = _context$intl.formatHTMLMessage,
          Text = _context$intl.textComponent;
      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          rawValues = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

      if (typeof children === 'function') {
        return children(formattedHTMLMessage);
      }

      // Since the message presumably has HTML in it, we need to set
      // `innerHTML` in order for it to be rendered and not escaped by React.
      // To be safe, all string prop values were escaped when formatting the
      // message. It is assumed that the message is not UGC, and came from the
      // developer making it more like a template.
      //
      // Note: There's a perf impact of using this component since there's no
      // way for React to do its virtual DOM diffing.
      var html = { __html: formattedHTMLMessage };
      return React__default.createElement(Component$$1, { dangerouslySetInnerHTML: html });
    }
  }]);
  return FormattedHTMLMessage;
}(React.Component);

FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';
FormattedHTMLMessage.contextTypes = {
  intl: intlShape
};
FormattedHTMLMessage.defaultProps = {
  values: {}
};
 true ? FormattedHTMLMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: PropTypes.object,
  tagName: PropTypes.string,
  children: PropTypes.func
}) : undefined;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(defaultLocaleData);

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(allLocaleData);

exports.addLocaleData = addLocaleData;
exports.intlShape = intlShape;
exports.injectIntl = injectIntl;
exports.defineMessages = defineMessages;
exports.IntlProvider = IntlProvider;
exports.FormattedDate = FormattedDate;
exports.FormattedTime = FormattedTime;
exports.FormattedRelative = FormattedRelative;
exports.FormattedNumber = FormattedNumber;
exports.FormattedPlural = FormattedPlural;
exports.FormattedMessage = FormattedMessage;
exports.FormattedHTMLMessage = FormattedHTMLMessage;


/***/ }),

/***/ "../../../node_modules/react-is/cjs/react-is.development.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-is/cjs/react-is.development.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../../node_modules/react-is/index.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-is/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../../node_modules/react-is/cjs/react-is.development.js");
}


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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=workspace!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=workspace!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['workspace']

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
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_workspace_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=workspace!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=workspace!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_workspace_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_workspace_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/workspace/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/workspace/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: WORKSPACE_FATAL_ERROR_APP_ID, WORKSPACE_CREATE_APP_ID, WORKSPACE_LIST_APP_ID, WORKSPACE_DETAIL_APP_ID, WORKSPACE_INITIAL_APP_ID, WORKSPACE_NAVIGATION_APP_ID, WORKSPACE_COLLABORATORS_APP_ID, WORKSPACE_SAVED_OBJECTS_CLIENT_WRAPPER_ID, WORKSPACE_CONFLICT_CONTROL_SAVED_OBJECTS_CLIENT_WRAPPER_ID, WORKSPACE_UI_SETTINGS_CLIENT_WRAPPER_ID, DEFAULT_WORKSPACE, ESSENTIAL_WORKSPACE_DISMISS_GET_STARTED, ANALYTICS_WORKSPACE_DISMISS_GET_STARTED, WORKSPACE_ID_CONSUMER_WRAPPER_ID, PRIORITY_FOR_WORKSPACE_ID_CONSUMER_WRAPPER, PRIORITY_FOR_WORKSPACE_UI_SETTINGS_WRAPPER, PRIORITY_FOR_WORKSPACE_CONFLICT_CONTROL_WRAPPER, PRIORITY_FOR_PERMISSION_CONTROL_WRAPPER, PRIORITY_FOR_REPOSITORY_WRAPPER, WORKSPACE_USE_CASES, MAX_WORKSPACE_PICKER_NUM, RECENT_WORKSPACES_KEY, CURRENT_USER_PLACEHOLDER, MAX_WORKSPACE_NAME_LENGTH, MAX_WORKSPACE_DESCRIPTION_LENGTH, AssociationDataSourceModalMode, USE_CASE_PREFIX, OPENSEARCHDASHBOARDS_CONFIG_PATH, WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES, USE_CASE_CARD_GRADIENT_PREFIX, OSD_ADMIN_WILDCARD_MATCH_ALL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_FATAL_ERROR_APP_ID", function() { return WORKSPACE_FATAL_ERROR_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_CREATE_APP_ID", function() { return WORKSPACE_CREATE_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_LIST_APP_ID", function() { return WORKSPACE_LIST_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_DETAIL_APP_ID", function() { return WORKSPACE_DETAIL_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_INITIAL_APP_ID", function() { return WORKSPACE_INITIAL_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_NAVIGATION_APP_ID", function() { return WORKSPACE_NAVIGATION_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_COLLABORATORS_APP_ID", function() { return WORKSPACE_COLLABORATORS_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_SAVED_OBJECTS_CLIENT_WRAPPER_ID", function() { return WORKSPACE_SAVED_OBJECTS_CLIENT_WRAPPER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_CONFLICT_CONTROL_SAVED_OBJECTS_CLIENT_WRAPPER_ID", function() { return WORKSPACE_CONFLICT_CONTROL_SAVED_OBJECTS_CLIENT_WRAPPER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_UI_SETTINGS_CLIENT_WRAPPER_ID", function() { return WORKSPACE_UI_SETTINGS_CLIENT_WRAPPER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WORKSPACE", function() { return DEFAULT_WORKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESSENTIAL_WORKSPACE_DISMISS_GET_STARTED", function() { return ESSENTIAL_WORKSPACE_DISMISS_GET_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANALYTICS_WORKSPACE_DISMISS_GET_STARTED", function() { return ANALYTICS_WORKSPACE_DISMISS_GET_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_ID_CONSUMER_WRAPPER_ID", function() { return WORKSPACE_ID_CONSUMER_WRAPPER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY_FOR_WORKSPACE_ID_CONSUMER_WRAPPER", function() { return PRIORITY_FOR_WORKSPACE_ID_CONSUMER_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY_FOR_WORKSPACE_UI_SETTINGS_WRAPPER", function() { return PRIORITY_FOR_WORKSPACE_UI_SETTINGS_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY_FOR_WORKSPACE_CONFLICT_CONTROL_WRAPPER", function() { return PRIORITY_FOR_WORKSPACE_CONFLICT_CONTROL_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY_FOR_PERMISSION_CONTROL_WRAPPER", function() { return PRIORITY_FOR_PERMISSION_CONTROL_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY_FOR_REPOSITORY_WRAPPER", function() { return PRIORITY_FOR_REPOSITORY_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_USE_CASES", function() { return WORKSPACE_USE_CASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WORKSPACE_PICKER_NUM", function() { return MAX_WORKSPACE_PICKER_NUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_WORKSPACES_KEY", function() { return RECENT_WORKSPACES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_PLACEHOLDER", function() { return CURRENT_USER_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WORKSPACE_NAME_LENGTH", function() { return MAX_WORKSPACE_NAME_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WORKSPACE_DESCRIPTION_LENGTH", function() { return MAX_WORKSPACE_DESCRIPTION_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationDataSourceModalMode", function() { return AssociationDataSourceModalMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_CASE_PREFIX", function() { return USE_CASE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPENSEARCHDASHBOARDS_CONFIG_PATH", function() { return OPENSEARCHDASHBOARDS_CONFIG_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES", function() { return WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_CASE_CARD_GRADIENT_PREFIX", function() { return USE_CASE_CARD_GRADIENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSD_ADMIN_WILDCARD_MATCH_ALL", function() { return OSD_ADMIN_WILDCARD_MATCH_ALL; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_source/common */ "plugin/dataSource/common");
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_source_common__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const WORKSPACE_FATAL_ERROR_APP_ID = 'workspace_fatal_error';
const WORKSPACE_CREATE_APP_ID = 'workspace_create';
const WORKSPACE_LIST_APP_ID = 'workspace_list';
const WORKSPACE_DETAIL_APP_ID = 'workspace_detail';
const WORKSPACE_INITIAL_APP_ID = 'workspace_initial';
const WORKSPACE_NAVIGATION_APP_ID = 'workspace_navigation';
const WORKSPACE_COLLABORATORS_APP_ID = 'workspace_collaborators';
const WORKSPACE_SAVED_OBJECTS_CLIENT_WRAPPER_ID = 'workspace';
const WORKSPACE_CONFLICT_CONTROL_SAVED_OBJECTS_CLIENT_WRAPPER_ID = 'workspace_conflict_control';
const WORKSPACE_UI_SETTINGS_CLIENT_WRAPPER_ID = 'workspace_ui_settings';
/**
 * UI setting for user default workspace
 */
const DEFAULT_WORKSPACE = 'defaultWorkspace';
const ESSENTIAL_WORKSPACE_DISMISS_GET_STARTED = 'essentialWorkspace:dismissGetStarted';
const ANALYTICS_WORKSPACE_DISMISS_GET_STARTED = 'analyticsWorkspace:dismissGetStarted';
const WORKSPACE_ID_CONSUMER_WRAPPER_ID = 'workspace_id_consumer';

/**
 * The priority for these wrappers matters:
 * 1. WORKSPACE_ID_CONSUMER wrapper should be the first wrapper to execute, as it will add the `workspaces` field
 * to `options` based on the request, which will be honored by permission control wrapper and conflict wrapper.
 * 2. The order of permission wrapper and conflict wrapper does not matter as no dependency between these two wrappers.
 */
const PRIORITY_FOR_WORKSPACE_ID_CONSUMER_WRAPPER = -3;
const PRIORITY_FOR_WORKSPACE_UI_SETTINGS_WRAPPER = -2;
const PRIORITY_FOR_WORKSPACE_CONFLICT_CONTROL_WRAPPER = -1;
const PRIORITY_FOR_PERMISSION_CONTROL_WRAPPER = 0;

/**
 * The repository wrapper should be the wrapper closest to the repository client,
 * so we give a large number to the wrapper
 */
const PRIORITY_FOR_REPOSITORY_WRAPPER = Number.MAX_VALUE;

/**
 *
 * This is a temp solution to store relationships between use cases  and features.
 * The relationship should be provided by plugin itself. The workspace plugin should
 * provide some method to register single feature to the use case map instead of
 * store a static map in workspace.
 *
 */

const WORKSPACE_USE_CASES = Object.freeze({
  observability: {
    id: 'observability',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.observability.title', {
      defaultMessage: 'Observability'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.observability.description', {
      defaultMessage: 'Gain visibility into your application and infrastructure'
    }),
    icon: 'wsObservability',
    features: ['discover', 'dashboards', 'visualize', 'maps-dashboards', 'observability-notebooks', 'reports-dashboards', 'integrations', 'alerting', 'anomaly-detection-dashboards', 'observability-metrics', 'observability-traces', 'observability-applications',
    // Add management avoid index patterns application not found for dashboards or visualize
    'management']
  },
  'security-analytics': {
    id: 'security-analytics',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.security.analytics.title', {
      defaultMessage: 'Security Analytics'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.analytics.description', {
      defaultMessage: 'Enhance your security posture with advanced analytics'
    }),
    icon: 'wsSecurityAnalytics',
    features: ['discover', 'dashboards', 'visualize', 'maps-dashboards', 'observability-notebooks', 'reports-dashboards', 'integrations', 'alerting', 'anomaly-detection-dashboards', 'opensearch_security_analytics_dashboards',
    // Add management avoid index patterns application not found for dashboards or visualize
    'management']
  },
  essentials: {
    id: 'essentials',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.essentials.title', {
      defaultMessage: 'Essentials'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.essentials.description', {
      defaultMessage: 'Get start with just the basics'
    }),
    icon: 'wsEssentials',
    features: ['discover', 'dashboards', 'visualize', 'maps-dashboards', 'observability-notebooks', 'reports-dashboards', 'integrations', 'alerting', 'anomaly-detection-dashboards',
    // Add management avoid index patterns application not found for dashboards or visualize
    'management']
  },
  search: {
    id: 'search',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.search.title', {
      defaultMessage: 'Search'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.usecase.search.description', {
      defaultMessage: 'Discover and query your data with ease'
    }),
    icon: 'wsSearch',
    features: ['discover', 'dashboards', 'visualize', 'maps-dashboards', 'reports-dashboards', 'searchRelevance',
    // Add management avoid index patterns application not found for dashboards or visualize
    'management']
  }
});
const MAX_WORKSPACE_PICKER_NUM = 3;
const RECENT_WORKSPACES_KEY = 'recentWorkspaces';
const CURRENT_USER_PLACEHOLDER = '%me%';
const MAX_WORKSPACE_NAME_LENGTH = 40;
const MAX_WORKSPACE_DESCRIPTION_LENGTH = 200;
let AssociationDataSourceModalMode = /*#__PURE__*/function (AssociationDataSourceModalMode) {
  AssociationDataSourceModalMode["OpenSearchConnections"] = "opensearch-connections";
  AssociationDataSourceModalMode["DirectQueryConnections"] = "direction-query-connections";
  return AssociationDataSourceModalMode;
}({});
const USE_CASE_PREFIX = 'use-case-';
const OPENSEARCHDASHBOARDS_CONFIG_PATH = 'opensearchDashboards';

// Workspace will handle both data source and data connection type saved object.
const WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES = [_data_source_common__WEBPACK_IMPORTED_MODULE_1__["DATA_SOURCE_SAVED_OBJECT_TYPE"], _data_source_common__WEBPACK_IMPORTED_MODULE_1__["DATA_CONNECTION_SAVED_OBJECT_TYPE"]];
const USE_CASE_CARD_GRADIENT_PREFIX = 'workspace-initial-use-case-card';
const OSD_ADMIN_WILDCARD_MATCH_ALL = '*';

/***/ }),

/***/ "./common/types.ts":
/*!*************************!*\
  !*** ./common/types.ts ***!
  \*************************/
/*! exports provided: DataSourceConnectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceConnectionType", function() { return DataSourceConnectionType; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

let DataSourceConnectionType = /*#__PURE__*/function (DataSourceConnectionType) {
  DataSourceConnectionType[DataSourceConnectionType["OpenSearchConnection"] = 0] = "OpenSearchConnection";
  DataSourceConnectionType[DataSourceConnectionType["DirectQueryConnection"] = 1] = "DirectQueryConnection";
  DataSourceConnectionType[DataSourceConnectionType["DataConnection"] = 2] = "DataConnection";
  return DataSourceConnectionType;
}({});

/***/ }),

/***/ "./common/utils.ts":
/*!*************************!*\
  !*** ./common/utils.ts ***!
  \*************************/
/*! exports provided: validateWorkspaceColor, getUseCaseFeatureConfig, validateIsWorkspaceDataSourceAndConnectionObjectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateWorkspaceColor", function() { return validateWorkspaceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseCaseFeatureConfig", function() { return getUseCaseFeatureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsWorkspaceDataSourceAndConnectionObjectType", function() { return validateIsWorkspaceDataSourceAndConnectionObjectType; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./common/constants.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


// Reference https://github.com/opensearch-project/oui/blob/main/src/services/color/is_valid_hex.ts
const validateWorkspaceColor = color => !!color && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
const getUseCaseFeatureConfig = useCaseId => `${_constants__WEBPACK_IMPORTED_MODULE_0__["USE_CASE_PREFIX"]}${useCaseId}`;
const validateIsWorkspaceDataSourceAndConnectionObjectType = type => _constants__WEBPACK_IMPORTED_MODULE_0__["WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES"].includes(type);

/***/ }),

/***/ "./public/assets/cloudwatch_logo.svg":
/*!*******************************************!*\
  !*** ./public/assets/cloudwatch_logo.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d81f4372f8a13c9438fa2c1b2663338d.svg");

/***/ }),

/***/ "./public/assets/prometheus_logo.svg":
/*!*******************************************!*\
  !*** ./public/assets/prometheus_logo.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec63b1cdba0424c7805c3c68bbe5183a.svg");

/***/ }),

/***/ "./public/assets/s3_logo.svg":
/*!***********************************!*\
  !*** ./public/assets/s3_logo.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b65ab8fc9670889f5b395b1f9a029f2b.svg");

/***/ }),

/***/ "./public/assets/security_lake_logo.svg":
/*!**********************************************!*\
  !*** ./public/assets/security_lake_logo.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4806cb16dc9f7545ed29685bac3c1f99.svg");

/***/ }),

/***/ "./public/components/add_collaborators_modal/add_collaborators_modal.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/add_collaborators_modal/add_collaborators_modal.tsx ***!
  \*******************************************************************************/
/*! exports provided: AddCollaboratorsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorsModal", function() { return AddCollaboratorsModal; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _workspace_collaborators_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workspace_collaborators_panel */ "./public/components/add_collaborators_modal/workspace_collaborators_panel.tsx");
/* harmony import */ var _duplicate_collaborator_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duplicate_collaborator_error */ "./public/components/add_collaborators_modal/duplicate_collaborator_error.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const DUPLICATE_COLLABORATOR_ERROR_MESSAGE = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.errors.duplicateCollaborator', {
  defaultMessage: 'A collaborator with this ID already exists.'
});
const DUPLICATE_COLLABORATOR_WITH_LIST_ERROR_MESSAGE = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.errors.duplicateCollaboratorWithList', {
  defaultMessage: 'This ID is already added to the list.'
});
const AddCollaboratorsModal = ({
  title,
  inputLabel,
  instruction,
  description,
  permissionType,
  inputDescription,
  inputPlaceholder,
  addAnotherButtonLabel,
  onClose,
  onAddCollaborators
}) => {
  const [collaborators, setCollaborators] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    id: 0,
    accessLevel: 'readOnly',
    collaboratorId: ''
  }]);
  const [errors, setErrors] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const validInnerCollaborators = collaborators.flatMap(collaborator => {
    if (!collaborator.collaboratorId) {
      return [];
    }
    return collaborator;
  });
  const [isAdding, setIsAdding] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleAddCollaborators = async () => {
    const singleStarIds = validInnerCollaborators.flatMap(({
      id,
      collaboratorId
    }) => collaboratorId.trim() === '*' ? id : []);
    if (singleStarIds.length > 0) {
      setErrors(singleStarIds.reduce((previousErrors, id) => ({
        ...previousErrors,
        [id]: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.errors.invalidUserFormat', {
          defaultMessage: 'Invalid {inputLabel} format',
          values: {
            inputLabel
          }
        })
      }), {}));
      return;
    }
    const collaboratorId2IdsMap = validInnerCollaborators.reduce((previousValue, collaborator) => {
      const key = collaborator.collaboratorId;
      const existingIds = previousValue[key];
      if (!existingIds) {
        return {
          ...previousValue,
          [key]: [collaborator.id]
        };
      }
      existingIds.push(collaborator.id);
      return previousValue;
    }, {});
    setErrors({});
    setIsAdding(true);
    try {
      await onAddCollaborators(validInnerCollaborators.map(({
        id,
        ...collaborator
      }) => ({
        ...collaborator,
        permissionType
      })));
    } catch (error) {
      if (error instanceof _duplicate_collaborator_error__WEBPACK_IMPORTED_MODULE_4__["DuplicateCollaboratorError"]) {
        const newErrors = {};
        error.details.pendingAdded.forEach(collaboratorId => {
          collaboratorId2IdsMap[collaboratorId].slice(1).forEach(id => {
            newErrors[id] = DUPLICATE_COLLABORATOR_ERROR_MESSAGE;
          });
        });
        error.details.existing.forEach(collaboratorId => {
          collaboratorId2IdsMap[collaboratorId].forEach(id => {
            newErrors[id] = DUPLICATE_COLLABORATOR_WITH_LIST_ERROR_MESSAGE;
          });
        });
        setErrors(newErrors);
        return;
      }
    } finally {
      setIsAdding(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModal"], {
    style: {
      minWidth: 748
    },
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalBody"], null, description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "xs"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "m"
  })), instruction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiAccordion"], {
    id: "workspace-details-add-collaborator-modal-instruction",
    buttonContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      size: "s"
    }, instruction.title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "xs"
  }, instruction.detail), instruction.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiLink"], {
    href: instruction.link,
    target: "_blank",
    external: true
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.instruction.learnMoreLinkText', {
    defaultMessage: 'Learn more in Documentation'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHorizontalRule"], {
    margin: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workspace_collaborators_panel__WEBPACK_IMPORTED_MODULE_3__["WorkspaceCollaboratorsPanel"], {
    collaborators: collaborators,
    onChange: setCollaborators,
    label: inputLabel,
    description: inputDescription,
    collaboratorIdInputPlaceholder: inputPlaceholder,
    addAnotherButtonLabel: addAnotherButtonLabel,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
    iconType: "cross",
    onClick: onClose
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.cancelButton', {
    defaultMessage: 'Cancel'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButton"], {
    disabled: validInnerCollaborators.length === 0,
    type: "submit",
    onClick: handleAddCollaborators,
    fill: true,
    isDisabled: isAdding,
    isLoading: isAdding
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.addCollaboratorsModal.addCollaboratorsButton', {
    defaultMessage: 'Add collaborators'
  }))));
};

/***/ }),

/***/ "./public/components/add_collaborators_modal/duplicate_collaborator_error.ts":
/*!***********************************************************************************!*\
  !*** ./public/components/add_collaborators_modal/duplicate_collaborator_error.ts ***!
  \***********************************************************************************/
/*! exports provided: DuplicateCollaboratorError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateCollaboratorError", function() { return DuplicateCollaboratorError; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

class DuplicateCollaboratorError {
  constructor(_details) {
    this._details = _details;
  }
  get details() {
    return this._details;
  }
}

/***/ }),

/***/ "./public/components/add_collaborators_modal/index.ts":
/*!************************************************************!*\
  !*** ./public/components/add_collaborators_modal/index.ts ***!
  \************************************************************/
/*! exports provided: AddCollaboratorsModal, AddCollaboratorsModalProps, DuplicateCollaboratorError, CollaboratorDuplicateSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_collaborators_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_collaborators_modal */ "./public/components/add_collaborators_modal/add_collaborators_modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorsModal", function() { return _add_collaborators_modal__WEBPACK_IMPORTED_MODULE_0__["AddCollaboratorsModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorsModalProps", function() { return _add_collaborators_modal__WEBPACK_IMPORTED_MODULE_0__["AddCollaboratorsModalProps"]; });

/* harmony import */ var _duplicate_collaborator_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duplicate_collaborator_error */ "./public/components/add_collaborators_modal/duplicate_collaborator_error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateCollaboratorError", function() { return _duplicate_collaborator_error__WEBPACK_IMPORTED_MODULE_1__["DuplicateCollaboratorError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollaboratorDuplicateSource", function() { return _duplicate_collaborator_error__WEBPACK_IMPORTED_MODULE_1__["CollaboratorDuplicateSource"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/components/add_collaborators_modal/workspace_collaborator_input.tsx":
/*!************************************************************************************!*\
  !*** ./public/components/add_collaborators_modal/workspace_collaborator_input.tsx ***!
  \************************************************************************************/
/*! exports provided: COLLABORATOR_ID_INPUT_LABEL_ID, WorkspaceCollaboratorInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLABORATOR_ID_INPUT_LABEL_ID", function() { return COLLABORATOR_ID_INPUT_LABEL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorInput", function() { return WorkspaceCollaboratorInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./public/constants.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const COLLABORATOR_ID_INPUT_LABEL_ID = 'collaborator_id_input_label';
const accessLevelKeys = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__["WORKSPACE_ACCESS_LEVEL_NAMES"]);
const accessLevelButtonGroupOptions = accessLevelKeys.map(id => ({
  id,
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, _constants__WEBPACK_IMPORTED_MODULE_3__["WORKSPACE_ACCESS_LEVEL_NAMES"][id])
}));
const isAccessLevelKey = test => accessLevelKeys.includes(test);
const WorkspaceCollaboratorInput = ({
  index,
  error,
  accessLevel,
  collaboratorId,
  onDelete,
  onAccessLevelChange,
  onCollaboratorIdChange,
  collaboratorIdInputPlaceholder
}) => {
  const handleCollaboratorIdChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    onCollaboratorIdChange(e.target.value, index);
  }, [index, onCollaboratorIdChange]);
  const handlePermissionModeOptionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newAccessLevel => {
    if (isAccessLevelKey(newAccessLevel)) {
      onAccessLevelChange(newAccessLevel, index);
    }
  }, [index, onAccessLevelChange]);
  const handleDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    onDelete(index);
  }, [index, onDelete]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    alignItems: "center",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
    compressed: true,
    onChange: handleCollaboratorIdChange,
    value: collaboratorId,
    "data-test-subj": `workspaceCollaboratorIdInput-${index}`,
    placeholder: collaboratorIdInputPlaceholder,
    "aria-labelledby": COLLABORATOR_ID_INPUT_LABEL_ID,
    isInvalid: !!error
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonGroup"], {
    options: accessLevelButtonGroupOptions,
    legend: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.form.permissionSettingInput.accessLevelLegend', {
      defaultMessage: 'This is a access level button group'
    }),
    buttonSize: "compressed",
    type: "single",
    idSelected: accessLevel,
    onChange: handlePermissionModeOptionChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
    color: "danger",
    "aria-label": `Delete collaborator ${index}`,
    iconType: "trash",
    display: "empty",
    size: "xs",
    onClick: handleDelete
  })));
};

/***/ }),

/***/ "./public/components/add_collaborators_modal/workspace_collaborators_panel.tsx":
/*!*************************************************************************************!*\
  !*** ./public/components/add_collaborators_modal/workspace_collaborators_panel.tsx ***!
  \*************************************************************************************/
/*! exports provided: WorkspaceCollaboratorsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorsPanel", function() { return WorkspaceCollaboratorsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _workspace_collaborator_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspace_collaborator_input */ "./public/components/add_collaborators_modal/workspace_collaborator_input.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const WorkspaceCollaboratorsPanel = ({
  label,
  errors,
  description,
  collaborators,
  addAnotherButtonLabel,
  collaboratorIdInputPlaceholder,
  onChange
}) => {
  const handleAddNewOne = () => {
    const nextId = Math.max(...[0, ...collaborators.map(({
      id
    }) => id)]) + 1;
    onChange([...collaborators, {
      id: nextId,
      accessLevel: 'readOnly',
      collaboratorId: ''
    }]);
  };
  const handleCollaboratorIdChange = (collaboratorId, passedIndex) => {
    onChange([...collaborators.map((collaborator, index) => index === passedIndex ? {
      ...collaborator,
      collaboratorId
    } : collaborator)]);
  };
  const handleAccessLevelChange = (accessLevel, passedIndex) => {
    onChange([...collaborators.map((collaborator, index) => index === passedIndex ? {
      ...collaborator,
      accessLevel
    } : collaborator)]);
  };
  const handleDelete = index => {
    onChange([...collaborators.slice(0, index), ...collaborators.slice(index + 1)]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, collaborators.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormLabel"], {
    id: _workspace_collaborator_input__WEBPACK_IMPORTED_MODULE_2__["COLLABORATOR_ID_INPUT_LABEL_ID"]
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "xs"
  }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    color: "subdued",
    size: "xs"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "xs"
  }))), collaborators.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    key: item.id,
    fullWidth: true,
    error: errors === null || errors === void 0 ? void 0 : errors[item.id],
    isInvalid: !!(errors !== null && errors !== void 0 && errors[item.id])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_workspace_collaborator_input__WEBPACK_IMPORTED_MODULE_2__["WorkspaceCollaboratorInput"], {
    index: index,
    accessLevel: item.accessLevel,
    collaboratorId: item.collaboratorId,
    onCollaboratorIdChange: handleCollaboratorIdChange,
    onAccessLevelChange: handleAccessLevelChange,
    onDelete: handleDelete,
    collaboratorIdInputPlaceholder: collaboratorIdInputPlaceholder,
    error: errors === null || errors === void 0 ? void 0 : errors[item.id]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    fullWidth: false,
    onClick: handleAddNewOne,
    "data-test-subj": `workspaceForm-permissionSettingPanel-addNew`,
    color: "primary",
    iconType: "plusInCircle"
  }, addAnotherButtonLabel)));
};

/***/ }),

/***/ "./public/components/data_source_association/association_data_source_modal.tsx":
/*!*************************************************************************************!*\
  !*** ./public/components/data_source_association/association_data_source_modal.tsx ***!
  \*************************************************************************************/
/*! exports provided: AssociationDataSourceModal, AssociationDataSourceModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationDataSourceModal", function() { return AssociationDataSourceModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationDataSourceModalContent", function() { return AssociationDataSourceModalContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "../../../node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/types */ "./common/types.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _workspace_form_connection_type_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workspace_form/connection_type_icon */ "./public/components/workspace_form/connection_type_icon.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */










const ConnectionIcon = ({
  connection: {
    connectionType,
    type
  },
  logos
}) => {
  if (connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].OpenSearchConnection) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: logos.Mark.url
    });
  }
  if (connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DirectQueryConnection || connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DataConnection) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_workspace_form_connection_type_icon__WEBPACK_IMPORTED_MODULE_7__["ConnectionTypeIcon"], {
      type: type
    });
  }
  return null;
};
const renderOption = option => {
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
    color: !!option.parentId ? 'subdued' : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    className: "eui-textTruncate",
    size: !!option.parentId ? 'xs' : 's'
  }, option.label));
  if (option.description) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      alignItems: "center",
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      style: {
        overflow: 'hidden'
      }
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      style: {
        overflow: 'hidden'
      }
    }, option.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      className: "eui-textTruncate",
      size: "xs"
    }, option.description))));
  }
  return label;
};
const convertConnectionToOption = ({
  connection,
  selectedConnectionIds,
  logos,
  mode
}) => ({
  label: connection.name,
  key: connection.id,
  description: connection.description,
  append: mode === _common_constants__WEBPACK_IMPORTED_MODULE_6__["AssociationDataSourceModalMode"].DirectQueryConnections && connection.relatedConnections && connection.relatedConnections.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBadge"], null, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('workspace.form.selectDataSource.optionBadge', {
    defaultMessage: '+ {relatedConnections} related',
    values: {
      relatedConnections: connection.relatedConnections.length
    }
  })) : undefined,
  disabled: connection.connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DirectQueryConnection,
  checked: connection.connectionType !== _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DirectQueryConnection && selectedConnectionIds.includes(connection.id) ? 'on' : undefined,
  prepend: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectionIcon, {
    connection: connection,
    logos: logos
  }),
  parentId: connection.parentId
});
const convertConnectionsToOptions = ({
  connections,
  showDirectQueryConnections,
  selectedConnectionIds,
  excludedConnectionIds,
  logos,
  mode
}) => {
  return connections.flatMap(connection => {
    if (excludedConnectionIds.includes(connection.id) || connection.connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DirectQueryConnection) {
      return [];
    }
    if (connection.connectionType === _common_types__WEBPACK_IMPORTED_MODULE_5__["DataSourceConnectionType"].DataConnection) {
      if (showDirectQueryConnections) {
        return [connection];
      }
      return [];
    }
    if (showDirectQueryConnections) {
      if (!connection.relatedConnections || connection.relatedConnections.length === 0) {
        return [];
      }
      return [connection, ...(selectedConnectionIds.includes(connection.id) ? connection.relatedConnections : [])];
    }
    return [connection];
  }).map(connection => convertConnectionToOption({
    connection,
    selectedConnectionIds,
    logos,
    mode
  }));
};
const AssociationDataSourceModal = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModal"], {
    onClose: props.closeModal,
    style: {
      width: 630
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssociationDataSourceModalContent, props));
};
const AssociationDataSourceModalContent = ({
  mode,
  http,
  notifications,
  closeModal,
  savedObjects,
  excludedConnectionIds,
  handleAssignDataSourceConnections,
  logos
}) => {
  const [allConnections, setAllConnections] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedConnectionIds, setSelectedConnectionIds] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isSaving, setIsSaving] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const handleSelectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newOptions => {
    setSelectedConnectionIds(newOptions.flatMap(({
      checked,
      key
    }) => checked === 'on' && key ? [key] : []));
  }, []);
  const handleSaveButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    setIsSaving(true);
    const res = handleAssignDataSourceConnections(allConnections.filter(connection => selectedConnectionIds.includes(connection.id)));
    await Promise.resolve(res);
    if (mountedRef.current) {
      setIsSaving(false);
    }
  }, [selectedConnectionIds, allConnections, handleAssignDataSourceConnections]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsLoading(true);
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getDataSourcesList"])(savedObjects.client, ['*']).then(dataSourcesList => Object(_utils__WEBPACK_IMPORTED_MODULE_4__["fetchDataSourceConnections"])(dataSourcesList, http, notifications, mode)).then(connections => {
      setAllConnections(connections);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [savedObjects.client, http, notifications, mode]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setOptions(convertConnectionsToOptions({
      connections: allConnections,
      excludedConnectionIds,
      selectedConnectionIds,
      showDirectQueryConnections: mode === _common_constants__WEBPACK_IMPORTED_MODULE_6__["AssociationDataSourceModalMode"].DirectQueryConnections,
      logos,
      mode
    }));
  }, [allConnections, excludedConnectionIds, selectedConnectionIds, mode, logos]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeaderTitle"], null, mode === _common_constants__WEBPACK_IMPORTED_MODULE_6__["AssociationDataSourceModalMode"].OpenSearchConnections ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "workspace.detail.dataSources.associateModal.title.openSearchDataSources",
    defaultMessage: "Associate OpenSearch data sources"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "workspace.detail.dataSources.associateModal.title.directQueryDataSources",
    defaultMessage: "Associate direct query data sources"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs",
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "workspace.detail.dataSources.associateModal.message",
    defaultMessage: "Add data sources that will be available in the workspace. If a selected data source has related Direct Query data sources, they will also be available in the workspace."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelectable"], {
    "aria-label": "Searchable",
    searchable: true,
    listProps: {
      bordered: true,
      onFocusBadge: false
    },
    searchProps: {
      'data-test-subj': 'workspace-detail-dataSources-associateModal-search',
      placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('workspace.detail.dataSources.associateModal.searchPlaceholder', {
        defaultMessage: 'Search'
      }),
      compressed: true
    },
    options: options,
    onChange: handleSelectionChange,
    isLoading: isLoading,
    renderOption: renderOption
  }, (list, search) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, search, list))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "workspace.detail.dataSources.associateModal.cancel.button",
    defaultMessage: "Cancel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    "data-test-subj": "workspace-detail-dataSources-associateModal-save-button",
    onClick: handleSaveButtonClick,
    isDisabled: selectedConnectionIds.length === 0,
    isLoading: isSaving,
    fill: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "workspace.detail.dataSources.associateModal.save.button",
    defaultMessage: "Associate data sources"
  }))));
};

/***/ }),

/***/ "./public/components/data_source_association/data_source_association.tsx":
/*!*******************************************************************************!*\
  !*** ./public/components/data_source_association/data_source_association.tsx ***!
  \*******************************************************************************/
/*! exports provided: DataSourceAssociation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceAssociation", function() { return DataSourceAssociation; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _association_data_source_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./association_data_source_modal */ "./public/components/data_source_association/association_data_source_modal.tsx");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/types */ "./common/types.ts");
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data_source/common */ "plugin/dataSource/common");
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_source_common__WEBPACK_IMPORTED_MODULE_9__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */











const DataSourceAssociation = ({
  excludedDataSourceIds,
  onComplete,
  onError
}) => {
  var _workspaces$client$, _workspaces$currentWo;
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const associationModalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    chrome,
    savedObjects,
    http,
    notifications,
    overlays,
    workspaces
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])().services;
  const workspaceClient = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useObservable"])((_workspaces$client$ = workspaces === null || workspaces === void 0 ? void 0 : workspaces.client$) !== null && _workspaces$client$ !== void 0 ? _workspaces$client$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null));
  const currentWorkspaceId = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useObservable"])((_workspaces$currentWo = workspaces === null || workspaces === void 0 ? void 0 : workspaces.currentWorkspaceId$) !== null && _workspaces$currentWo !== void 0 ? _workspaces$currentWo : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null));
  const closePopover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(false);
  }, []);
  const openPopover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setIsOpen(true);
  }, []);
  const onAssociateDataSource = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async ds => {
    const dataSourceObjects = ds.filter(d => d.connectionType === _common_types__WEBPACK_IMPORTED_MODULE_8__["DataSourceConnectionType"].OpenSearchConnection).map(d => ({
      id: d.id,
      type: _data_source_common__WEBPACK_IMPORTED_MODULE_9__["DATA_SOURCE_SAVED_OBJECT_TYPE"]
    }));
    const dataConnectionObjects = ds.filter(d => d.connectionType === _common_types__WEBPACK_IMPORTED_MODULE_8__["DataSourceConnectionType"].DataConnection).map(d => ({
      id: d.id,
      type: _data_source_common__WEBPACK_IMPORTED_MODULE_9__["DATA_CONNECTION_SAVED_OBJECT_TYPE"]
    }));
    const objects = [...dataSourceObjects, ...dataConnectionObjects];
    if (workspaceClient && currentWorkspaceId) {
      let failedCount = 0;
      try {
        const res = await workspaceClient.associate(objects, currentWorkspaceId);
        if (res.success) {
          failedCount = res.result.filter(r => !!r.error).length;
        } else {
          // If failed to workspaceClient.associate, all data sources association is failed
          failedCount = objects.length;
        }
        if (onComplete) {
          onComplete();
        }
      } catch (e) {
        failedCount = objects.length;
        if (onError) {
          onError();
        }
      } finally {
        var _associationModalRef$;
        (_associationModalRef$ = associationModalRef.current) === null || _associationModalRef$ === void 0 || _associationModalRef$.close();
      }
      if (failedCount > 0) {
        notifications === null || notifications === void 0 || notifications.toasts.addDanger({
          id: 'workspace_data_source_association_failed',
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.dataSource.association.failedTitle', {
            defaultMessage: 'Failed to associate {failedCount, plural, one {# data source} other {# data sources}} to the workspace',
            values: {
              failedCount
            }
          })
        });
      }
      if (failedCount < objects.length) {
        notifications === null || notifications === void 0 || notifications.toasts.addSuccess({
          id: 'workspace_data_source_association_succeed',
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.dataSource.association.succeedTitle', {
            defaultMessage: '{succeedCount, plural, one {# data source} other {# data sources}} been associated to the workspace',
            values: {
              succeedCount: objects.length - failedCount
            }
          })
        });
      }
    }
  }, [workspaceClient, currentWorkspaceId, notifications, onComplete, onError]);
  const showAssociationModal = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(mode => {
    closePopover();
    if (overlays && savedObjects && chrome) {
      associationModalRef.current = overlays.openModal(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_association_data_source_modal__WEBPACK_IMPORTED_MODULE_6__["AssociationDataSourceModalContent"], {
        http: http,
        savedObjects: savedObjects,
        notifications: notifications,
        excludedConnectionIds: excludedDataSourceIds,
        closeModal: () => {
          var _associationModalRef$2;
          return (_associationModalRef$2 = associationModalRef.current) === null || _associationModalRef$2 === void 0 ? void 0 : _associationModalRef$2.close();
        },
        handleAssignDataSourceConnections: onAssociateDataSource,
        mode: mode,
        logos: chrome.logos
      })));
    }
  }, [overlays, chrome, http, notifications, savedObjects, closePopover, excludedDataSourceIds, onAssociateDataSource]);
  const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
    "data-test-subj": "workspaceAssociateDataSourceButton",
    size: "s",
    fill: true,
    iconType: "arrowDown",
    iconSide: "right",
    onClick: openPopover
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "plusInCircle"
  }), ' ', _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.dataSources.associationButton.label', {
    defaultMessage: 'Associate data sources'
  }));
  const items = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuItem"], {
    key: "opensearchDataSources",
    onClick: () => showAssociationModal(_common_constants__WEBPACK_IMPORTED_MODULE_7__["AssociationDataSourceModalMode"].OpenSearchConnections)
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.dataSources.associationButton.opensearch.label', {
    defaultMessage: 'OpenSearch data sources'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuItem"], {
    key: "directQueryDataSources",
    onClick: () => showAssociationModal(_common_constants__WEBPACK_IMPORTED_MODULE_7__["AssociationDataSourceModalMode"].DirectQueryConnections)
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.dataSources.associationButton.directQuery.label', {
    defaultMessage: 'Direct query data sources'
  }))];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopover"], {
    button: button,
    isOpen: isOpen,
    closePopover: closePopover,
    panelPaddingSize: "none",
    anchorPosition: "downLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuPanel"], {
    items: items
  }));
};

/***/ }),

/***/ "./public/components/delete_workspace_modal/delete_workspace_modal.tsx":
/*!*****************************************************************************!*\
  !*** ./public/components/delete_workspace_modal/delete_workspace_modal.tsx ***!
  \*****************************************************************************/
/*! exports provided: DeleteWorkspaceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWorkspaceModal", function() { return DeleteWorkspaceModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function DeleteWorkspaceModal(props) {
  var _props$typeTextToConf;
  const typeTextToConfirm = (_props$typeTextToConf = props.typeTextToConfirm) !== null && _props$typeTextToConf !== void 0 ? _props$typeTextToConf : 'delete';
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    onClose,
    selectedWorkspaces,
    onDeleteSuccess
  } = props;
  const {
    services: {
      notifications,
      workspaceClient
    }
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const deleteWorkspaces = async () => {
    if (selectedWorkspaces && selectedWorkspaces.length > 0) {
      selectedWorkspaces.forEach(async selectedWorkspace => {
        if (selectedWorkspace !== null && selectedWorkspace !== void 0 && selectedWorkspace.id) {
          var _result;
          let result;
          try {
            result = await workspaceClient.delete(selectedWorkspace === null || selectedWorkspace === void 0 ? void 0 : selectedWorkspace.id);
          } catch (error) {
            notifications === null || notifications === void 0 || notifications.toasts.addDanger({
              title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.delete.failed', {
                defaultMessage: 'Failed to delete workspace'
              }),
              text: error instanceof Error ? error.message : JSON.stringify(error)
            });
            return onClose();
          }
          if ((_result = result) !== null && _result !== void 0 && _result.success) {
            notifications === null || notifications === void 0 || notifications.toasts.addSuccess({
              title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.delete.success', {
                defaultMessage: 'Delete workspace successfully'
              })
            });
            onClose();
            if (onDeleteSuccess) {
              onDeleteSuccess();
            }
          } else {
            var _result2;
            notifications === null || notifications === void 0 || notifications.toasts.addDanger({
              title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.delete.failed', {
                defaultMessage: 'Failed to delete workspace'
              }),
              text: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.error
            });
          }
        }
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModal"], {
    onClose: onClose,
    className: "delete-workspace-modal",
    "aria-label": "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeader"], {
    "data-test-subj": "delete-workspace-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeaderTitle"], null, "Delete workspace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalBody"], {
    "data-test-subj": "delete-workspace-modal-body"
  }, selectedWorkspaces && selectedWorkspaces.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      lineHeight: 1.5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following workspace will be permanently deleted. This action cannot be undone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyleType: 'disc',
      listStylePosition: 'inside'
    }
  }, selectedWorkspaces.map(selectedWorkspace => {
    return selectedWorkspace !== null && selectedWorkspace !== void 0 && selectedWorkspace.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: selectedWorkspace.id
    }, selectedWorkspace.name) : null;
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    color: "subdued"
  }, "To confirm your action, type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, typeTextToConfirm), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
    placeholder: typeTextToConfirm,
    fullWidth: true,
    value: value,
    "data-test-subj": "delete-workspace-modal-input",
    onChange: e => setValue(e.target.value)
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
    onClick: onClose,
    "data-test-subj": "delete-workspace-modal-cancel-button"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    "data-test-subj": "delete-workspace-modal-confirm",
    onClick: deleteWorkspaces,
    fill: true,
    color: "danger",
    disabled: value !== typeTextToConfirm
  }, "Delete")));
}

/***/ }),

/***/ "./public/components/delete_workspace_modal/index.ts":
/*!***********************************************************!*\
  !*** ./public/components/delete_workspace_modal/index.ts ***!
  \***********************************************************/
/*! exports provided: DeleteWorkspaceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_workspace_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_workspace_modal */ "./public/components/delete_workspace_modal/delete_workspace_modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteWorkspaceModal", function() { return _delete_workspace_modal__WEBPACK_IMPORTED_MODULE_0__["DeleteWorkspaceModal"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/components/global_search/page_item.tsx":
/*!*******************************************************!*\
  !*** ./public/components/global_search/page_item.tsx ***!
  \*******************************************************/
/*! exports provided: GlobalSearchPageItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSearchPageItem", function() { return GlobalSearchPageItem; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _workspace_name_workspace_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace_name/workspace_name */ "./public/components/workspace_name/workspace_name.tsx");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







const GlobalSearchPageItem = ({
  link,
  currentWorkspace,
  application,
  http,
  registeredUseCases$,
  search,
  callback
}) => {
  const availableUseCases = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])(registeredUseCases$);
  const breadcrumbs = [];
  const isPageOutOfWorkspace = link.navGroup.type === _core_public__WEBPACK_IMPORTED_MODULE_4__["NavGroupType"].SYSTEM;
  const navGroupElement = navGroup => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    gutterSize: "s",
    alignItems: "center"
  }, navGroup.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: navGroup.icon,
    color: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, navGroup.title));
  if (currentWorkspace && !isPageOutOfWorkspace) {
    breadcrumbs.push({
      text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workspace_name_workspace_name__WEBPACK_IMPORTED_MODULE_3__["WorkspaceTitleDisplay"], {
        workspace: currentWorkspace,
        availableUseCases: availableUseCases || []
      })
    });
  } else {
    breadcrumbs.push({
      text: navGroupElement(link.navGroup)
    });
  }
  const appId = link.id.toLowerCase();
  const isLanding = appId.endsWith('landing');
  const text = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHighlight"], {
    search: search,
    highlightAll: true
  }, isLanding ? `${link.navGroup.title} ${link.title}` : link.title);
  const isOverviewPage = appId.endsWith('overview');
  if (isOverviewPage && link.category) {
    breadcrumbs.push({
      text: link.category.label
    });
  }
  if (link.parentNavLinkId) {
    var _link$navGroup$navLin;
    const parentNavLinkTitle = (_link$navGroup$navLin = link.navGroup.navLinks.find(navLink => navLink.id === link.parentNavLinkId)) === null || _link$navGroup$navLin === void 0 ? void 0 : _link$navGroup$navLin.title;
    if (parentNavLinkTitle) {
      breadcrumbs.push({
        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHighlight"], {
          search: search,
          highlightAll: true
        }, parentNavLinkTitle)
      });
    }
  }
  const onNavItemClick = () => {
    callback === null || callback === void 0 || callback();
    if (isPageOutOfWorkspace && currentWorkspace) {
      // remove workspace information in the URL, special handling for data source which could visible both in/out workspace
      const urlWithoutWorkspace = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__["formatUrlWithWorkspaceId"])(link.href, '', http.basePath);
      window.location.assign(urlWithoutWorkspace);
      return;
    }
    application.navigateToApp(link.id);
  };
  breadcrumbs.push({
    text,
    onClick: () => {}
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: link.id,
    "aria-hidden": "true",
    "data-test-subj": `global-search-item-${link.id}`,
    onClick: () => {
      onNavItemClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSimplifiedBreadcrumbs"], {
    breadcrumbs: breadcrumbs,
    hideTrailingSeparator: true,
    responsive: true
  }));
};

/***/ }),

/***/ "./public/components/global_search/search_pages_command.tsx":
/*!******************************************************************!*\
  !*** ./public/components/global_search/search_pages_command.tsx ***!
  \******************************************************************/
/*! exports provided: searchPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPages", function() { return searchPages; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _page_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_item */ "./public/components/global_search/page_item.tsx");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const searchPages = async (query, registeredUseCases$, coreStart, callback) => {
  if (coreStart) {
    const currentWorkspace = await coreStart.workspaces.currentWorkspace$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).toPromise();
    const navGroupMap = await coreStart.chrome.navGroup.getNavGroupsMap$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).toPromise();
    const allAvailableCaseId = Object.entries(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"]).filter(([key, value]) => {
      return value.type === _core_public__WEBPACK_IMPORTED_MODULE_4__["NavGroupType"].SYSTEM;
    }).map(([key, value]) => key);
    allAvailableCaseId.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getFirstUseCaseOfFeatureConfigs"])((currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.features) || []) || '');
    const searchResult = allAvailableCaseId.flatMap(useCaseId => {
      const navGroup = navGroupMap[useCaseId];
      if (navGroup) {
        const links = navGroup.navLinks;
        // parent nav links are not clickable
        const parentNavLinkIds = links.map(link => link.parentNavLinkId).filter(link => !!link);
        return links.filter(link => {
          const title = link.title;
          let parentNavLinkTitle;
          // parent title also taken into consideration for search its sub items
          if (link.parentNavLinkId) {
            var _navGroup$navLinks$fi;
            parentNavLinkTitle = (_navGroup$navLinks$fi = navGroup.navLinks.find(navLink => navLink.id === link.parentNavLinkId)) === null || _navGroup$navLinks$fi === void 0 ? void 0 : _navGroup$navLinks$fi.title;
          }
          const titleMatch = title && title.toLowerCase().includes(query.toLowerCase());
          const parentTitleMatch = parentNavLinkTitle && parentNavLinkTitle.toLowerCase().includes(query.toLowerCase());
          return !link.hidden && !link.disabled && (titleMatch || parentTitleMatch) && !parentNavLinkIds.includes(link.id);
        }).map(link => ({
          ...link,
          navGroup
        }));
      }
      return [];
    });
    const pages = searchResult.slice(0, 10).map(link => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_item__WEBPACK_IMPORTED_MODULE_3__["GlobalSearchPageItem"], {
        link: link,
        search: query,
        currentWorkspace: currentWorkspace,
        application: coreStart.application,
        http: coreStart.http,
        registeredUseCases$: registeredUseCases$,
        callback: callback
      });
    });
    return pages;
  }
  return [];
};

/***/ }),

/***/ "./public/components/service_card/index.ts":
/*!*************************************************!*\
  !*** ./public/components/service_card/index.ts ***!
  \*************************************************/
/*! exports provided: WorkspaceListCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workspace_list_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workspace_list_card */ "./public/components/service_card/workspace_list_card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceListCard", function() { return _workspace_list_card__WEBPACK_IMPORTED_MODULE_0__["WorkspaceListCard"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/components/service_card/workspace_list_card.tsx":
/*!****************************************************************!*\
  !*** ./public/components/service_card/workspace_list_card.tsx ***!
  \****************************************************************/
/*! exports provided: WorkspaceListCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceListCard", function() { return WorkspaceListCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../recent_workspace_manager */ "./public/recent_workspace_manager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _utils_workspace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/workspace */ "./public/components/utils/workspace.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */











const WORKSPACE_LIST_CARD_DESCRIPTION = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.description', {
  defaultMessage: 'Dedicated environments for organizing, sharing and collaborating.'
});
const MAX_ITEM_IN_LIST = 5;
const WorkspaceListCard = props => {
  var _application$capabili;
  const [availableWorkspaces, setAvailableWorkspaces] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [filter, setFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('viewed');
  const navGroups = Object(react_use__WEBPACK_IMPORTED_MODULE_5__["useObservable"])(props.core.chrome.navGroup.getNavGroupsMap$());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const workspaceSub = props.core.workspaces.workspaceList$.subscribe(list => {
      setAvailableWorkspaces(list || []);
    });
    return () => {
      workspaceSub.unsubscribe();
    };
  }, [props.core]);
  const workspaceList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const recentWorkspaces = _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_7__["recentWorkspaceManager"].getRecentWorkspaces() || [];
    if (filter === 'viewed') {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"])(recentWorkspaces, ['timestamp'], ['desc']).filter(ws => availableWorkspaces.some(a => a.id === ws.id)).slice(0, MAX_ITEM_IN_LIST).map(item => {
        var _availableWorkspaces$;
        return {
          id: item.id,
          name: (_availableWorkspaces$ = availableWorkspaces.find(ws => ws.id === item.id)) === null || _availableWorkspaces$ === void 0 ? void 0 : _availableWorkspaces$.name,
          time: item.timestamp
        };
      });
    } else if (filter === 'updated') {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"])(availableWorkspaces, ['lastUpdatedTime'], ['desc']).slice(0, MAX_ITEM_IN_LIST).map(ws => ({
        id: ws.id,
        name: ws.name,
        time: ws.lastUpdatedTime
      }));
    }
    return [];
  }, [filter, availableWorkspaces]);
  const handleSwitchWorkspace = workspaceId => {
    const {
      application,
      http
    } = props.core;
    const workspaceObj = availableWorkspaces.find(item => item.id === workspaceId);
    const useCase = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["getFirstUseCaseOfFeatureConfigs"])((workspaceObj === null || workspaceObj === void 0 ? void 0 : workspaceObj.features) || []);
    if (useCase && navGroups) {
      var _navGroups$useCase$na;
      // should be workspace use case overview page
      const appId = (_navGroups$useCase$na = navGroups[useCase].navLinks) === null || _navGroups$useCase$na === void 0 ? void 0 : _navGroups$useCase$na[0].id;
      Object(_utils_workspace__WEBPACK_IMPORTED_MODULE_9__["navigateToAppWithinWorkspace"])({
        application,
        http
      }, workspaceId, appId);
    }
  };
  const {
    application
  } = props.core;
  const isDashboardAdmin = (_application$capabili = application.capabilities.dashboards) === null || _application$capabili === void 0 ? void 0 : _application$capabili.isDashboardAdmin;
  const createWorkspace = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.createWorkspace', {
    defaultMessage: 'Create workspace'
  });
  const workspaceAvailable = workspaceList && workspaceList.length > 0;
  const createWorkspaceButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    iconType: "plus",
    iconGap: "s",
    contentProps: {
      style: {
        padding: '0 4px'
      }
    },
    "data-test-subj": "create_workspace",
    "aria-label": "create workspace",
    onClick: () => {
      application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_6__["WORKSPACE_CREATE_APP_ID"]);
    }
  }, createWorkspace);
  let emptyStateBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    color: "subdued",
    size: "s"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.empty.readOnly', {
    defaultMessage: 'Contact your administrator to create a workspace or to be added to an existing one.'
  }));
  if (isDashboardAdmin) {
    emptyStateBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      color: "subdued",
      size: "s"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.empty', {
      defaultMessage: 'Create a workspace to get started.'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      justifyContent: "spaceBetween",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      onClick: () => {
        application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_6__["WORKSPACE_LIST_APP_ID"]);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.manageWorkspaces', {
      defaultMessage: 'Manage workspaces'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, createWorkspaceButton)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    hasBorder: false,
    hasShadow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    direction: "column",
    justifyContent: "spaceBetween",
    style: {
      height: '100%'
    },
    gutterSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "xs",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "xs",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Workspaces"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "bottom",
    content: WORKSPACE_LIST_CARD_DESCRIPTION
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "iInCircle",
    "aria-label": "workspace list card description"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSelect"], {
    value: filter,
    "data-test-subj": "workspace_filter",
    onChange: e => {
      setFilter(e.target.value);
    },
    options: [{
      value: 'viewed',
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.filter.viewed', {
        defaultMessage: 'Recently viewed'
      })
    }, {
      value: 'updated',
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.filter.updated', {
        defaultMessage: 'Recently updated'
      })
    }]
  })), isDashboardAdmin && workspaceAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "top",
    content: createWorkspace
  }, createWorkspaceButton)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: true
  }, !workspaceList || workspaceList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiEmptyPrompt"], {
    iconType: "spacesApp",
    titleSize: "xs",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      color: "subdued"
    }, "No Workspaces available")),
    body: emptyStateBody
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDescriptionList"], {
    compressed: true,
    type: "column",
    titleProps: {
      style: {
        width: '70%'
      }
    },
    descriptionProps: {
      style: {
        width: '30%'
      }
    },
    listItems: workspaceList.map(workspace => ({
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
        onClick: () => {
          handleSwitchWorkspace(workspace.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "s"
      }, workspace.name)),
      description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "s",
        color: "subdued",
        className: "eui-textRight"
      }, moment__WEBPACK_IMPORTED_MODULE_3___default()(workspace.time).fromNow())
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), workspaceAvailable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    onClick: () => {
      application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_6__["WORKSPACE_LIST_APP_ID"]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.list.card.view_all', {
    defaultMessage: 'View all'
  }))))));
};

/***/ }),

/***/ "./public/components/use_case_overview/get_started_cards.tsx":
/*!*******************************************************************!*\
  !*** ./public/components/use_case_overview/get_started_cards.tsx ***!
  \*******************************************************************/
/*! exports provided: getStartedCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartedCards", function() { return getStartedCards; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const DISCOVER_APP_ID = 'discover';
const VISUALIZE_APP_ID = 'visualize';
const DASHBOARDS_APP_ID = 'dashboards';
const getStartedCards = [{
  id: 'get_start_discover',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "compass",
    size: "l",
    color: "primary"
  }),
  title: '',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.essential_overview.discover.card.description', {
    defaultMessage: 'Explore data to uncover and discover insights.'
  }),
  footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTextColor"], {
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiI18n"], {
    token: "workspace.essential_overview.discover.card.footer",
    default: "Discover"
  })),
  navigateAppId: DISCOVER_APP_ID,
  order: 20
}, {
  id: 'get_start_visualization',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "lineChart",
    size: "l",
    color: "primary"
  }),
  title: '',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.essential_overview.visualize.card.description', {
    defaultMessage: 'Gain deeper insights by visualizing and aggregating your data.'
  }),
  footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTextColor"], {
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiI18n"], {
    token: "workspace.essential_overview.visualize.card.footer",
    default: "Visualizations"
  })),
  navigateAppId: VISUALIZE_APP_ID,
  order: 30
}, {
  id: 'get_start_dashboards',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "dashboard",
    size: "l",
    color: "primary"
  }),
  title: '',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.essential_overview.dashboards.card.description', {
    defaultMessage: 'Monitor and explore your data using dynamic data visualization tools.'
  }),
  footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTextColor"], {
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiI18n"], {
    token: "workspace.essential_overview.dashboards.card.footer",
    default: "Dashboards"
  })),
  navigateAppId: DASHBOARDS_APP_ID,
  order: 40
}];

/***/ }),

/***/ "./public/components/use_case_overview/index.ts":
/*!******************************************************!*\
  !*** ./public/components/use_case_overview/index.ts ***!
  \******************************************************/
/*! exports provided: setEssentialOverviewSection, registerEssentialOverviewContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup_overview */ "./public/components/use_case_overview/setup_overview.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEssentialOverviewSection", function() { return _setup_overview__WEBPACK_IMPORTED_MODULE_0__["setEssentialOverviewSection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEssentialOverviewContent", function() { return _setup_overview__WEBPACK_IMPORTED_MODULE_0__["registerEssentialOverviewContent"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/components/use_case_overview/setup_overview.scss":
/*!*****************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./setup_overview.scss?v7dark */ "./public/components/use_case_overview/setup_overview.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./setup_overview.scss?v7light */ "./public/components/use_case_overview/setup_overview.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./setup_overview.scss?v8dark */ "./public/components/use_case_overview/setup_overview.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./setup_overview.scss?v8light */ "./public/components/use_case_overview/setup_overview.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./setup_overview.scss?v9dark */ "./public/components/use_case_overview/setup_overview.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./setup_overview.scss?v9light */ "./public/components/use_case_overview/setup_overview.scss?v9light");
}

/***/ }),

/***/ "./public/components/use_case_overview/setup_overview.scss?v7dark":
/*!************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v7dark ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./setup_overview.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v7dark");

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

/***/ "./public/components/use_case_overview/setup_overview.scss?v7light":
/*!*************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v7light ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./setup_overview.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v7light");

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

/***/ "./public/components/use_case_overview/setup_overview.scss?v8dark":
/*!************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v8dark ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./setup_overview.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v8dark");

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

/***/ "./public/components/use_case_overview/setup_overview.scss?v8light":
/*!*************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v8light ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./setup_overview.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v8light");

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

/***/ "./public/components/use_case_overview/setup_overview.scss?v9dark":
/*!************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v9dark ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./setup_overview.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v9dark");

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

/***/ "./public/components/use_case_overview/setup_overview.scss?v9light":
/*!*************************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.scss?v9light ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./setup_overview.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/use_case_overview/setup_overview.scss?v9light");

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

/***/ "./public/components/use_case_overview/setup_overview.tsx":
/*!****************************************************************!*\
  !*** ./public/components/use_case_overview/setup_overview.tsx ***!
  \****************************************************************/
/*! exports provided: getStartedSection, setEssentialOverviewSection, registerEssentialOverviewContent, setAnalyticsAllOverviewSection, registerAnalyticsAllOverviewContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartedSection", function() { return getStartedSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEssentialOverviewSection", function() { return setEssentialOverviewSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEssentialOverviewContent", function() { return registerEssentialOverviewContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnalyticsAllOverviewSection", function() { return setAnalyticsAllOverviewSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAnalyticsAllOverviewContent", function() { return registerAnalyticsAllOverviewContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_management_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _get_started_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get_started_cards */ "./public/components/use_case_overview/get_started_cards.tsx");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _setup_overview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup_overview.scss */ "./public/components/use_case_overview/setup_overview.scss");
/* harmony import */ var _setup_overview_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_setup_overview_scss__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








const recentlyViewSectionRender = contents => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, contents.map(content => {
    if (content.kind === 'custom') {
      return content.render();
    }
    return null;
  }));
};
const getStartedSection = {
  id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].GET_STARTED,
  order: 1000,
  kind: 'card'
};

// Essential overview part
const setEssentialOverviewSection = contentManagement => {
  contentManagement.registerPage({
    id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ESSENTIAL_OVERVIEW_PAGE_ID"],
    title: 'Overview',
    sections: [{
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].SERVICE_CARDS,
      order: 3000,
      kind: 'dashboard'
    }, {
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].RECENTLY_VIEWED,
      order: 2000,
      title: 'Recently viewed',
      kind: 'custom',
      render: recentlyViewSectionRender
    }, getStartedSection]
  });
};
const registerEssentialOverviewContent = (contentManagement, core) => {
  _get_started_cards__WEBPACK_IMPORTED_MODULE_4__["getStartedCards"].forEach(card => {
    contentManagement.registerContentProvider({
      id: card.id,
      getTargetArea: () => _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ESSENTIAL_OVERVIEW_CONTENT_AREAS"].GET_STARTED,
      getContent: () => ({
        id: card.id,
        kind: 'card',
        order: card.order,
        description: card.description,
        title: card.title,
        onClick: () => {
          core.application.navigateToApp(card.navigateAppId);
        },
        getFooter: () => card.footer,
        getIcon: () => card.icon,
        cardProps: {
          className: 'usecaseOverviewGettingStartedCard'
        }
      })
    });
  });
};

// Analytics(All) overview part
const setAnalyticsAllOverviewSection = contentManagement => {
  contentManagement.registerPage({
    id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ANALYTICS_ALL_OVERVIEW_PAGE_ID"],
    title: 'Overview',
    sections: [{
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].SERVICE_CARDS,
      order: 3000,
      kind: 'dashboard'
    }, {
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].RECENTLY_VIEWED,
      order: 2000,
      title: 'Recently viewed',
      kind: 'custom',
      render: recentlyViewSectionRender
    }, getStartedSection]
  });
};
const registerAnalyticsAllOverviewContent = (contentManagement, core) => {
  const useCaseCards = [_core_public__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_NAV_GROUPS"].observability, _core_public__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_NAV_GROUPS"]['security-analytics'], _core_public__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_NAV_GROUPS"].search];
  useCaseCards.forEach((card, index) => {
    contentManagement.registerContentProvider({
      id: card.id,
      getTargetArea: () => _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ANALYTICS_ALL_OVERVIEW_CONTENT_AREAS"].GET_STARTED,
      getContent: () => ({
        id: card.id,
        kind: 'card',
        getIcon: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
          type: card.icon || 'wsSelector',
          size: "l",
          color: "primary"
        }),
        order: card.order || index,
        description: card.description,
        title: '',
        getFooter: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
          color: "subdued"
        }, card.title),
        cardProps: {
          className: 'usecaseOverviewGettingStartedCard'
        },
        onClick: async () => {
          const navGroups = await core.chrome.navGroup.getNavGroupsMap$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
          const group = navGroups[card.id];
          if (group) {
            var _group$navLinks;
            const appId = (_group$navLinks = group.navLinks) === null || _group$navLinks === void 0 ? void 0 : _group$navLinks[0].id;
            if (appId) core.application.navigateToApp(appId);
          }
        }
      })
    });
  });
};

/***/ }),

/***/ "./public/components/utils/workspace.ts":
/*!**********************************************!*\
  !*** ./public/components/utils/workspace.ts ***!
  \**********************************************/
/*! exports provided: navigateToWorkspacePageWithUseCase, navigateToAppWithinWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToWorkspacePageWithUseCase", function() { return navigateToWorkspacePageWithUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToAppWithinWorkspace", function() { return navigateToAppWithinWorkspace; });
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const navigateToWorkspacePageWithUseCase = (application, useCaseTitle, appId) => {
  const newUrl = application.getUrlForApp(appId, {
    absolute: true
  });
  if (newUrl) {
    const url = new URL(newUrl);
    url.hash = `/?useCase=${useCaseTitle}`;
    application.navigateToUrl(url.toString());
  }
};
const navigateToAppWithinWorkspace = ({
  application,
  http
}, workspaceId, appId, hash) => {
  const newUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_0__["formatUrlWithWorkspaceId"])(application.getUrlForApp(appId, {
    absolute: true
  }), workspaceId, http.basePath);
  if (newUrl) {
    const url = new URL(newUrl);
    if (hash) {
      url.hash = hash;
    }
    application.navigateToUrl(url.toString());
  }
};

/***/ }),

/***/ "./public/components/workspace_column/index.ts":
/*!*****************************************************!*\
  !*** ./public/components/workspace_column/index.ts ***!
  \*****************************************************/
/*! exports provided: getWorkspaceColumn, WorkspaceColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _workspace_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workspace_column */ "./public/components/workspace_column/workspace_column.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceColumn", function() { return _workspace_column__WEBPACK_IMPORTED_MODULE_0__["getWorkspaceColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceColumn", function() { return _workspace_column__WEBPACK_IMPORTED_MODULE_0__["WorkspaceColumn"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/components/workspace_column/workspace_column.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/workspace_column/workspace_column.tsx ***!
  \*****************************************************************/
/*! exports provided: WorkspaceColumn, getWorkspaceColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceColumn", function() { return WorkspaceColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceColumn", function() { return getWorkspaceColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use/lib/useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function WorkspaceColumn({
  coreSetup,
  workspaces
}) {
  const workspaceList = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2___default()(coreSetup.workspaces.workspaceList$);
  const [showBadgePopover, setShowBadgePopover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const wsLookUp = workspaceList === null || workspaceList === void 0 ? void 0 : workspaceList.reduce((map, ws) => {
    return map.set(ws.id, ws.name);
  }, new Map());
  const workspaceNames = workspaces === null || workspaces === void 0 ? void 0 : workspaces.map(wsId => wsLookUp === null || wsLookUp === void 0 ? void 0 : wsLookUp.get(wsId)).filter(ws => ws);
  const toggleBadgePopover = () => {
    setShowBadgePopover(!showBadgePopover);
  };
  const closeBadgePopover = () => {
    setShowBadgePopover(false);
  };
  if (workspaceNames !== null && workspaceNames !== void 0 && workspaceNames.length) {
    const displayedWorkspaces = workspaceNames.slice(0, 1);
    const remainingWorkspacesCount = workspaceNames.length - 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s"
    }, displayedWorkspaces), remainingWorkspacesCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBadge"], {
      color: "hollow",
      iconType: "popout",
      iconSide: "right",
      onClick: toggleBadgePopover,
      iconOnClick: toggleBadgePopover,
      iconOnClickAriaLabel: "Open workspaces popover",
      onClickAriaLabel: "Open workspaces popover",
      "data-test-subj": "workspace-column-more-workspaces-badge"
    }, "+ ", remainingWorkspacesCount, " more"), showBadgePopover && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
      isOpen: showBadgePopover,
      closePopover: closeBadgePopover,
      anchorPosition: "rightCenter",
      panelPaddingSize: "s",
      "data-test-subj": "workspace-column-popover"
    }, workspaceNames.slice(1).map(ws => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      key: ws,
      size: "xs"
    }, ws)))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s"
    }, "\u2014");
  }
}
function getWorkspaceColumn(coreSetup) {
  return {
    id: 'workspace_column',
    euiColumn: {
      align: 'left',
      field: 'workspaces',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('workspace.objectsTable.table.columnWorkspacesName', {
        defaultMessage: 'Workspace'
      }),
      render: workspaces => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkspaceColumn, {
          coreSetup: coreSetup,
          workspaces: workspaces
        });
      }
    },
    loadData: () => {
      return Promise.resolve(undefined);
    }
  };
}

/***/ }),

/***/ "./public/components/workspace_form/connection_type_icon.tsx":
/*!*******************************************************************!*\
  !*** ./public/components/workspace_form/connection_type_icon.tsx ***!
  \*******************************************************************/
/*! exports provided: ConnectionTypeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionTypeIcon", function() { return ConnectionTypeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_prometheus_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/prometheus_logo.svg */ "./public/assets/prometheus_logo.svg");
/* harmony import */ var _assets_s3_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/s3_logo.svg */ "./public/assets/s3_logo.svg");
/* harmony import */ var _assets_cloudwatch_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/cloudwatch_logo.svg */ "./public/assets/cloudwatch_logo.svg");
/* harmony import */ var _assets_security_lake_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/security_lake_logo.svg */ "./public/assets/security_lake_logo.svg");
/* harmony import */ var _data_source_common___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data_source/common/ */ "plugin/dataSource/common");
/* harmony import */ var _data_source_common___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_source_common___WEBPACK_IMPORTED_MODULE_6__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









// Direct query connection and data connection both have different types, each type has a corresponding icon
const ConnectionTypeIcon = ({
  type
}) => {
  switch (type) {
    case 'Amazon S3':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: _assets_s3_logo_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
    case 'Prometheus':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: _assets_prometheus_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
    case _data_source_common___WEBPACK_IMPORTED_MODULE_6__["DataConnectionType"].CloudWatch:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: _assets_cloudwatch_logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
    case _data_source_common___WEBPACK_IMPORTED_MODULE_6__["DataConnectionType"].SecurityLake:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: _assets_security_lake_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
      });
    default:
      return null;
  }
};

/***/ }),

/***/ "./public/components/workspace_list/default_workspace.tsx":
/*!****************************************************************!*\
  !*** ./public/components/workspace_list/default_workspace.tsx ***!
  \****************************************************************/
/*! exports provided: UserDefaultWorkspace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefaultWorkspace", function() { return UserDefaultWorkspace; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./public/components/workspace_list/index.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







const UserDefaultWorkspace = ({
  services,
  registeredUseCases$
}) => {
  var _workspaces$workspace;
  const {
    workspaces
  } = services;
  const workspaceList = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])((_workspaces$workspace = workspaces === null || workspaces === void 0 ? void 0 : workspaces.workspaceList$) !== null && _workspaces$workspace !== void 0 ? _workspaces$workspace : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["OpenSearchDashboardsContextProvider"], {
    services: services
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "column",
    gutterSize: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Workspaces (", workspaceList === null || workspaceList === void 0 ? void 0 : workspaceList.length, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHorizontalRule"], {
    margin: "s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["WorkspaceListInner"], {
    fullPage: false,
    selectable: false,
    searchable: false,
    registeredUseCases$: registeredUseCases$,
    excludedActionNames: ['edit', 'delete'],
    includedColumns: [{
      field: 'name',
      width: '25%'
    }, {
      field: 'useCase',
      width: '20%'
    }, {
      field: 'description',
      width: '25%'
    }, {
      field: 'permissionMode',
      width: '10%'
    }]
  })))));
};

/***/ }),

/***/ "./public/components/workspace_list/index.tsx":
/*!****************************************************!*\
  !*** ./public/components/workspace_list/index.tsx ***!
  \****************************************************/
/*! exports provided: WorkspaceList, WorkspaceListInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceList", function() { return WorkspaceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceListInner", function() { return WorkspaceListInner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use/lib/useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../plugins/opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_workspace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/workspace */ "./public/components/utils/workspace.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _delete_workspace_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../delete_workspace_modal */ "./public/components/delete_workspace_modal/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_13__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */















const WorkspaceList = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkspaceListInner, _extends({}, props, {
    excludedActionNames: ['leave'],
    excludedColumns: ['permissionMode']
  }));
};
const WorkspaceListInner = ({
  registeredUseCases$,
  fullPage = true,
  selectable = true,
  searchable = true,
  excludedActionNames = [],
  includedColumns = [],
  excludedColumns = []
}) => {
  var _application$capabili, _workspaces$workspace;
  const {
    services: {
      workspaces,
      application,
      http,
      navigationUI: {
        HeaderControl
      },
      uiSettings,
      savedObjects,
      notifications
    }
  } = Object(_plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_8__["useOpenSearchDashboards"])();
  const registeredUseCases = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_3___default()(registeredUseCases$);
  const isDashboardAdmin = application === null || application === void 0 || (_application$capabili = application.capabilities) === null || _application$capabili === void 0 || (_application$capabili = _application$capabili.dashboards) === null || _application$capabili === void 0 ? void 0 : _application$capabili.isDashboardAdmin;
  const initialSortField = 'name';
  const initialSortDirection = 'asc';
  const workspaceList = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_3___default()((_workspaces$workspace = workspaces === null || workspaces === void 0 ? void 0 : workspaces.workspaceList$) !== null && _workspaces$workspace !== void 0 ? _workspaces$workspace : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]), []);
  const [pagination, setPagination] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    pageIndex: 0,
    pageSize: 20,
    pageSizeOptions: [5, 10, 20]
  });
  const [deletedWorkspaces, setDeletedWorkspaces] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selection, setSelection] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [allDataSources, setAllDataSources] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  //  default workspace state
  const [defaultWorkspaceId, setDefaultWorkspaceId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useLocation"])();
  const dateFormat = uiSettings === null || uiSettings === void 0 ? void 0 : uiSettings.get('dateFormat');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setDefaultWorkspaceId(uiSettings === null || uiSettings === void 0 ? void 0 : uiSettings.get(_common_constants__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_WORKSPACE"]));
    if (savedObjects) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getDataSourcesList"])(savedObjects.client, ['*']).then(data => {
        setAllDataSources(data);
      });
    }
  }, [savedObjects, uiSettings]);
  const newWorkspaceList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return workspaceList.map(workspace => {
      var _workspace$features;
      const associatedDataSourcesTitles = allDataSources.filter(ds => ds.workspaces && ds.workspaces.includes(workspace.id)).map(ds => ds.title);
      return {
        ...workspace,
        useCase: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["extractUseCaseTitleFromFeatures"])(registeredUseCases !== null && registeredUseCases !== void 0 ? registeredUseCases : [], (_workspace$features = workspace.features) !== null && _workspace$features !== void 0 ? _workspace$features : []),
        dataSources: associatedDataSourcesTitles
      };
    });
  }, [workspaceList, allDataSources, registeredUseCases]);
  const useCaseFilterOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Array.from(new Set(newWorkspaceList.map(({
      useCase
    }) => useCase).filter(Boolean))).map(useCase => ({
      value: useCase,
      name: useCase
    }));
  }, [newWorkspaceList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const params = new URLSearchParams(location.search);
    const useCase = params.get('useCase');
    if (useCase && useCaseFilterOptions.find(item => item.value === useCase)) {
      setQuery(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["Query"].parse(`useCase:"${useCase}"`));
    }
  }, [location.search, useCaseFilterOptions]);
  const workspaceCreateUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!application) {
      return '';
    }
    const appUrl = application.getUrlForApp(_common_constants__WEBPACK_IMPORTED_MODULE_10__["WORKSPACE_CREATE_APP_ID"], {
      absolute: false
    });
    if (!appUrl) return '';
    return appUrl;
  }, [application]);
  const emptyStateMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiEmptyPrompt"], {
      iconType: "wsSelector",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.workspaceList.emptyState.title', {
        defaultMessage: 'No workspace available'
      })),
      titleSize: "s",
      body: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.workspaceList.emptyState.body', {
        defaultMessage: 'There are no workspace to display. Create workspace to get started.'
      }),
      actions: isDashboardAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
        href: workspaceCreateUrl,
        key: "create_workspace",
        "data-test-subj": "workspaceList-create-workspace"
      }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.workspaceList.buttons.createWorkspace', {
        defaultMessage: 'Create workspace'
      }))
    });
  }, [isDashboardAdmin, workspaceCreateUrl]);
  const renderCreateWorkspaceButton = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
      controls: [{
        controlType: 'button',
        label: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.buttons.createWorkspace', {
          defaultMessage: 'Create workspace'
        }),
        testId: 'workspaceList-create-workspace',
        iconType: 'plus',
        href: workspaceCreateUrl,
        fill: true
      }],
      setMountPoint: application === null || application === void 0 ? void 0 : application.setAppRightControls
    });
  };
  const handleCopyId = id => {
    Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["copyToClipboard"])(id);
    notifications === null || notifications === void 0 || notifications.toasts.addSuccess(_osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.copyWorkspaceId.message', {
      defaultMessage: 'Workspace ID copied'
    }));
  };
  const handleSwitchWorkspace = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((workspaceId, appId) => {
    if (application && http) {
      Object(_utils_workspace__WEBPACK_IMPORTED_MODULE_9__["navigateToAppWithinWorkspace"])({
        application,
        http
      }, workspaceId, appId);
    }
  }, [application, http]);
  const getItemUseCaseUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(item => {
    if (application && http) {
      const useCaseId = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getFirstUseCaseOfFeatureConfigs"])((item === null || item === void 0 ? void 0 : item.features) || []);
      const itemUseCase = registeredUseCases === null || registeredUseCases === void 0 ? void 0 : registeredUseCases.find(useCase => useCase.id === useCaseId);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getUseCaseUrl"])(itemUseCase, item.id, application, http);
    }
  }, [application, http, registeredUseCases]);
  const handleSetDefaultWorkspace = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async item => {
    const set = await (uiSettings === null || uiSettings === void 0 ? void 0 : uiSettings.set(_common_constants__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_WORKSPACE"], item.id));
    if (set) {
      setDefaultWorkspaceId(item.id);
      notifications === null || notifications === void 0 || notifications.toasts.addSuccess(_osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.setDefaultWorkspace.success.message', {
        defaultMessage: 'Default workspace been set to {name}',
        values: {
          name: item.name
        }
      }));
    } else {
      // toast
      notifications === null || notifications === void 0 || notifications.toasts.addWarning(_osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.setDefaultWorkspace.error.message', {
        defaultMessage: 'Failed to set workspace {name} as default workspace.',
        values: {
          name: item.name
        }
      }));
    }
  }, [notifications === null || notifications === void 0 ? void 0 : notifications.toasts, uiSettings]);
  const renderDataWithMoreBadge = (data, maxDisplayedAmount, workspaceId) => {
    if (!application || !http) {
      return null;
    }
    const amount = data.length;
    const mostDisplayedTitles = data.slice(0, maxDisplayedAmount).join(', ');
    return amount <= maxDisplayedAmount ? mostDisplayedTitles : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mostDisplayedTitles, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBadge"], {
      color: "hollow",
      iconType: "popout",
      iconSide: "right",
      "data-test-subj": `workspaceList-more-${workspaceId}-badge`,
      href: Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_13__["formatUrlWithWorkspaceId"])(application.getUrlForApp('dataSources', {
        absolute: false
      }), workspaceId, http.basePath),
      target: "_blank"
    }, "+ ", amount - maxDisplayedAmount, " more"));
  };
  const renderToolsLeft = () => {
    if (selection.length === 0) {
      return undefined;
    }
    const onClick = () => {
      const deleteWorkspacesByIds = (workSpaces, ids) => {
        const needToBeDeletedWorkspaceList = [];
        ids.forEach(id => {
          const index = workSpaces.findIndex(workSpace => workSpace.id === id);
          if (index >= 0) {
            needToBeDeletedWorkspaceList.push(workSpaces[index]);
          }
        });
        return needToBeDeletedWorkspaceList;
      };
      setDeletedWorkspaces(deleteWorkspacesByIds(newWorkspaceList, selection.map(item => item.id)));
      setSelection([]);
    };
    return isDashboardAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
      color: "danger",
      iconType: "trash",
      onClick: onClick,
      size: "s",
      "data-test-subj": "multi-deletion-button"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.page.delete.button.info', {
      defaultMessage: '{selectedCount, plural, one {Delete # workspace} other {Delete # workspaces}}',
      values: {
        selectedCount: selection.length
      }
    })), deletedWorkspaces && deletedWorkspaces.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_delete_workspace_modal__WEBPACK_IMPORTED_MODULE_11__["DeleteWorkspaceModal"], {
      selectedWorkspaces: deletedWorkspaces,
      onClose: () => setDeletedWorkspaces([])
    }));
  };
  const selectionValue = {
    onSelectionChange: deletedSelection => setSelection(deletedSelection)
  };
  const search = {
    compressed: true,
    box: {
      incremental: true
    },
    query,
    compressed: true,
    onChange: args => setQuery(args.query),
    filters: [{
      type: 'field_value_selection',
      field: 'useCase',
      name: 'Use Case',
      multiSelect: false,
      options: useCaseFilterOptions,
      compressed: true
    }],
    toolsLeft: renderToolsLeft()
  };
  const columnsWithoutActions = [{
    field: 'name',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.name.title', {
      defaultMessage: 'Name'
    }),
    width: '18%',
    sortable: true,
    render: (name, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
      href: getItemUseCaseUrl(item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      gutterSize: "xs",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      size: "s"
    }, name)), item.id === defaultWorkspaceId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBadge"], null, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.defaultWorkspace.title', {
      defaultMessage: 'Default workspace'
    }))))))
  }, {
    field: 'useCase',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.useCase.title', {
      defaultMessage: 'Use case'
    }),
    width: '12%'
  }, {
    field: 'description',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.description.title', {
      defaultMessage: 'Description'
    }),
    width: '18%',
    render: description => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
      position: "bottom",
      content: description,
      "data-test-subj": "workspaceList-hover-description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      className: "eui-textTruncate",
      size: "s",
      style: {
        maxWidth: 150
      }
    }, description ? description : '\u2014'))
  }, {
    field: 'lastUpdatedTime',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.lastUpdated.title', {
      defaultMessage: 'Last updated'
    }),
    width: '18%',
    truncateText: false,
    render: lastUpdatedTime => {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(lastUpdatedTime).format(dateFormat);
    }
  }, {
    field: 'dataSources',
    width: '18%',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.dataSources.title', {
      defaultMessage: 'Data sources'
    }),
    render: (dataSources, item) => {
      return renderDataWithMoreBadge(dataSources, 2, item.id);
    }
  }];
  const allActions = [{
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      key: "copyId"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.copyId.name', {
      defaultMessage: 'Copy ID'
    })),
    icon: 'copy',
    type: 'icon',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.copyId.description', {
      defaultMessage: 'Copy workspace id'
    }),
    'data-test-subj': 'workspace-list-copy-id-icon',
    onClick: ({
      id
    }) => handleCopyId(id)
  }, {
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      key: "edit"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.edit.name', {
      defaultMessage: 'Edit'
    })),
    icon: 'pencil',
    type: 'icon',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.edit.description', {
      defaultMessage: 'Edit workspace'
    }),
    'data-test-subj': 'workspace-list-edit-icon',
    onClick: ({
      id
    }) => handleSwitchWorkspace(id, _common_constants__WEBPACK_IMPORTED_MODULE_10__["WORKSPACE_DETAIL_APP_ID"])
  }, {
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      key: "setDefault"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.setDefault.name', {
      defaultMessage: 'Set as my default'
    })),
    icon: 'flag',
    type: 'icon',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.setDefault.description', {
      defaultMessage: 'Set as my default workspace'
    }),
    'data-test-subj': 'workspace-list-set-default-icon',
    onClick: item => handleSetDefaultWorkspace(item)
  }, {
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      key: "leave"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.leave.name', {
      defaultMessage: 'Leave'
    })),
    icon: 'exit',
    type: 'icon',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.leave.description', {
      defaultMessage: 'Leave workspace'
    }),
    'data-test-subj': 'workspace-list-leave-icon',
    available: () => false
  }, {
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      color: "danger",
      key: "delete"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.delete.name', {
      defaultMessage: 'Delete'
    })),
    icon: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
      type: "trash",
      size: "m",
      color: "danger"
    }),
    type: 'icon',
    isPrimary: false,
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.actions.delete.description', {
      defaultMessage: 'Delete workspace'
    }),
    'data-test-subj': 'workspace-list-delete-icon',
    available: () => isDashboardAdmin,
    onClick: item => {
      setDeletedWorkspaces([item]);
    }
  }];
  const availableActions = allActions.filter(action => !(excludedActionNames !== null && excludedActionNames !== void 0 && excludedActionNames.includes(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isString"])(action.name) ? action.name : action.name.key || '')));
  const includedColumnsFields = includedColumns.map(column => {
    return column.field;
  });
  const availableColumns = columnsWithoutActions.filter(column => {
    return (!includedColumnsFields || includedColumnsFields.length === 0 || includedColumnsFields.includes(column.field)) && !excludedColumns.includes(column.field);
  }).map(column => {
    const customizedCol = includedColumns.find(col => col.field === column.field);
    return {
      ...column,
      ...(customizedCol ? {
        ...customizedCol
      } : {})
    };
  });
  const actionColumns = [{
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.columns.actions.title', {
      defaultMessage: 'Actions'
    }),
    field: '',
    actions: availableActions
  }];
  const columns = [...availableColumns, ...actionColumns];
  const workspaceListTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiInMemoryTable"], {
    items: newWorkspaceList,
    columns: columns,
    itemId: "id",
    message: emptyStateMessage,
    onTableChange: ({
      page: {
        index,
        size
      }
    }) => setPagination(prev => {
      return {
        ...prev,
        pageIndex: index,
        pageSize: size
      };
    }),
    pagination: pagination,
    sorting: {
      sort: {
        field: initialSortField,
        direction: initialSortDirection
      }
    },
    isSelectable: selectable && !!isDashboardAdmin,
    search: searchable ? search : undefined,
    selection: selectable && !!isDashboardAdmin ? selectionValue : undefined
  });
  return fullPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPage"], {
    paddingSize: "m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
    controls: [{
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].translate('workspace.list.description', {
        defaultMessage: 'Organize collaborative projects with use-case-specific workspaces.'
      })
    }],
    setMountPoint: application === null || application === void 0 ? void 0 : application.setAppDescriptionControls
  }), isDashboardAdmin && renderCreateWorkspaceButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPageContent"], {
    verticalPosition: "center",
    horizontalPosition: "center",
    paddingSize: "m",
    panelPaddingSize: "m",
    hasShadow: false
  }, workspaceListTable), deletedWorkspaces.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_delete_workspace_modal__WEBPACK_IMPORTED_MODULE_11__["DeleteWorkspaceModal"], {
    selectedWorkspaces: deletedWorkspaces,
    onClose: () => setDeletedWorkspaces([])
  }))) : workspaceListTable;
};

/***/ }),

/***/ "./public/components/workspace_menu/workspace_menu.scss":
/*!**************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./workspace_menu.scss?v7dark */ "./public/components/workspace_menu/workspace_menu.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./workspace_menu.scss?v7light */ "./public/components/workspace_menu/workspace_menu.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./workspace_menu.scss?v8dark */ "./public/components/workspace_menu/workspace_menu.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./workspace_menu.scss?v8light */ "./public/components/workspace_menu/workspace_menu.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./workspace_menu.scss?v9dark */ "./public/components/workspace_menu/workspace_menu.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./workspace_menu.scss?v9light */ "./public/components/workspace_menu/workspace_menu.scss?v9light");
}

/***/ }),

/***/ "./public/components/workspace_menu/workspace_menu.scss?v7dark":
/*!*********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v7dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./workspace_menu.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v7dark");

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

/***/ "./public/components/workspace_menu/workspace_menu.scss?v7light":
/*!**********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v7light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./workspace_menu.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v7light");

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

/***/ "./public/components/workspace_menu/workspace_menu.scss?v8dark":
/*!*********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v8dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./workspace_menu.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v8dark");

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

/***/ "./public/components/workspace_menu/workspace_menu.scss?v8light":
/*!**********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v8light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./workspace_menu.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v8light");

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

/***/ "./public/components/workspace_menu/workspace_menu.scss?v9dark":
/*!*********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v9dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./workspace_menu.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v9dark");

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

/***/ "./public/components/workspace_menu/workspace_menu.scss?v9light":
/*!**********************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.scss?v9light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./workspace_menu.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_menu/workspace_menu.scss?v9light");

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

/***/ "./public/components/workspace_menu/workspace_menu.tsx":
/*!*************************************************************!*\
  !*** ./public/components/workspace_menu/workspace_menu.tsx ***!
  \*************************************************************/
/*! exports provided: WorkspaceMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceMenu", function() { return WorkspaceMenu; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils */ "./common/utils.ts");
/* harmony import */ var _workspace_picker_content_workspace_picker_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workspace_picker_content/workspace_picker_content */ "./public/components/workspace_picker_content/workspace_picker_content.tsx");
/* harmony import */ var _workspace_menu_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workspace_menu.scss */ "./public/components/workspace_menu/workspace_menu.scss");
/* harmony import */ var _workspace_menu_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_workspace_menu_scss__WEBPACK_IMPORTED_MODULE_8__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









const defaultHeaderName = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.menu.defaultHeaderName', {
  defaultMessage: 'Workspaces'
});
const createWorkspaceButton = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.menu.button.createWorkspace', {
  defaultMessage: 'Create workspace'
});
const manageWorkspacesButton = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.menu.button.manageWorkspaces', {
  defaultMessage: 'Manage'
});
const getValidWorkspaceColor = color => Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["validateWorkspaceColor"])(color) ? color : undefined;
const WorkspaceMenu = ({
  coreStart,
  registeredUseCases$
}) => {
  var _coreStart$applicatio, _currentWorkspace$nam, _getUseCase, _getUseCase2, _getUseCase$title, _getUseCase3;
  const [isPopoverOpen, setPopover] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const currentWorkspace = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])(coreStart.workspaces.currentWorkspace$, null);
  const isDashboardAdmin = (_coreStart$applicatio = coreStart.application.capabilities) === null || _coreStart$applicatio === void 0 || (_coreStart$applicatio = _coreStart$applicatio.dashboards) === null || _coreStart$applicatio === void 0 ? void 0 : _coreStart$applicatio.isDashboardAdmin;
  const availableUseCases = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])(registeredUseCases$, []);
  const currentWorkspaceName = (_currentWorkspace$nam = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.name) !== null && _currentWorkspace$nam !== void 0 ? _currentWorkspace$nam : defaultHeaderName;
  const getUseCase = workspace => {
    if (!workspace.features) {
      return;
    }
    const useCaseId = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getFirstUseCaseOfFeatureConfigs"])(workspace.features);
    return availableUseCases.find(useCase => useCase.id === useCaseId);
  };
  const openPopover = () => {
    setPopover(!isPopoverOpen);
  };
  const closePopover = () => {
    setPopover(false);
  };
  const currentWorkspaceButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiToolTip"], {
    content: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.icon.menu.title', {
      defaultMessage: 'Workspaces'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonIcon"], {
    iconType: "wsSelector",
    onClick: openPopover,
    "aria-label": "workspace-select-button",
    "data-test-subj": "workspace-select-button",
    color: "text"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPopover"], {
    id: "workspaceDropdownMenu",
    display: "block",
    button: currentWorkspaceButton,
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    anchorPosition: "downCenter",
    panelPaddingSize: "s",
    repositionOnScroll: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "column",
    alignItems: "center",
    gutterSize: "none",
    style: {
      width: '310px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    className: "workspaceMenuHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    justifyContent: "spaceAround",
    alignItems: "center",
    direction: "column",
    gutterSize: "none"
  }, currentWorkspace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
    size: "xl",
    "data-test-subj": `current-workspace-icon-${(_getUseCase = getUseCase(currentWorkspace)) === null || _getUseCase === void 0 ? void 0 : _getUseCase.icon}`,
    type: ((_getUseCase2 = getUseCase(currentWorkspace)) === null || _getUseCase2 === void 0 ? void 0 : _getUseCase2.icon) || 'wsSelector',
    color: getValidWorkspaceColor(currentWorkspace.color)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    "data-test-subj": "workspace-menu-current-workspace-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    textAlign: "center",
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, currentWorkspaceName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s",
    "data-test-subj": "workspace-menu-current-workspace-use-case",
    textAlign: "center",
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, (_getUseCase$title = (_getUseCase3 = getUseCase(currentWorkspace)) === null || _getUseCase3 === void 0 ? void 0 : _getUseCase3.title) !== null && _getUseCase$title !== void 0 ? _getUseCase$title : '')))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
    size: "xl",
    color: "subdued",
    type: "wsSelector"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "workspace-menu-current-workspace-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    textAlign: "center"
  }, currentWorkspaceName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    className: "eui-fullWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPanel"], {
    paddingSize: "none",
    hasBorder: false,
    hasShadow: false,
    color: "transparent",
    style: {
      height: '40vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workspace_picker_content_workspace_picker_content__WEBPACK_IMPORTED_MODULE_7__["WorkspacePickerContent"], {
    coreStart: coreStart,
    registeredUseCases$: registeredUseCases$,
    onClickWorkspace: () => setPopover(false),
    isInTwoLines: false
  }))), isDashboardAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    className: "eui-fullWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHorizontalRule"], {
    size: "full",
    margin: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    className: "eui-textLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    color: "primary",
    size: "s",
    "data-test-subj": "workspace-menu-manage-button",
    onClick: () => {
      closePopover();
      coreStart.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_LIST_APP_ID"]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, manageWorkspacesButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    className: "eui-textRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    color: "primary",
    size: "s",
    iconType: "plus",
    key: _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_CREATE_APP_ID"],
    "data-test-subj": "workspace-menu-create-workspace-button",
    onClick: () => {
      closePopover();
      coreStart.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_CREATE_APP_ID"]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, createWorkspaceButton)))))));
};

/***/ }),

/***/ "./public/components/workspace_name/workspace_name.tsx":
/*!*************************************************************!*\
  !*** ./public/components/workspace_name/workspace_name.tsx ***!
  \*************************************************************/
/*! exports provided: WorkspaceTitleDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceTitleDisplay", function() { return WorkspaceTitleDisplay; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const WorkspaceTitleDisplay = ({
  workspace,
  availableUseCases
}) => {
  const useCase = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getUseCase"])(workspace, availableUseCases);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    gutterSize: "xs",
    alignItems: "center",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    "data-test-subj": `${workspace.id}-icon`,
    color: workspace.color,
    type: (useCase === null || useCase === void 0 ? void 0 : useCase.icon) || 'wsSelector'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, workspace.name));
};

/***/ }),

/***/ "./public/components/workspace_picker_content/workspace_picker_content.tsx":
/*!*********************************************************************************!*\
  !*** ./public/components/workspace_picker_content/workspace_picker_content.tsx ***!
  \*********************************************************************************/
/*! exports provided: WorkspacePickerContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacePickerContent", function() { return WorkspacePickerContent; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../recent_workspace_manager */ "./public/recent_workspace_manager.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils */ "./common/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








const searchFieldPlaceholder = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.menu.search.placeholder', {
  defaultMessage: 'Search workspace name'
});
const getValidWorkspaceColor = color => Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["validateWorkspaceColor"])(color) ? color : undefined;
const sortByRecentVisitedAndAlphabetical = (ws1, ws2) => {
  // First, sort by accessTimeStamp in descending order (if both have timestamps)
  if (ws1 !== null && ws1 !== void 0 && ws1.accessTimeStamp && ws2 !== null && ws2 !== void 0 && ws2.accessTimeStamp) {
    return ws2.accessTimeStamp - ws1.accessTimeStamp;
  }
  // If one has a timestamp and the other does not, prioritize the one with the timestamp
  if (ws1.accessTimeStamp) return -1;
  if (ws2.accessTimeStamp) return 1;
  // If neither has a timestamp, sort alphabetically by name
  return ws1.name.localeCompare(ws2.name);
};
const WorkspacePickerContent = ({
  coreStart,
  registeredUseCases$,
  onClickWorkspace,
  isInTwoLines
}) => {
  var _coreStart$applicatio;
  const isDashboardAdmin = (_coreStart$applicatio = coreStart.application.capabilities) === null || _coreStart$applicatio === void 0 || (_coreStart$applicatio = _coreStart$applicatio.dashboards) === null || _coreStart$applicatio === void 0 ? void 0 : _coreStart$applicatio.isDashboardAdmin;
  const availableUseCases = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])(registeredUseCases$, []);
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const workspaceList = Object(react_use__WEBPACK_IMPORTED_MODULE_2__["useObservable"])(coreStart.workspaces.workspaceList$, []);
  const updatedRecentWorkspaceList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const recentWorkspaces = _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_5__["recentWorkspaceManager"].getRecentWorkspaces();
    const updatedList = workspaceList.map(workspace => {
      const recentWorkspace = recentWorkspaces.find(recent => recent.id === workspace.id);
      return {
        ...workspace,
        accessTimeStamp: recentWorkspace === null || recentWorkspace === void 0 ? void 0 : recentWorkspace.timestamp,
        accessTimeDescription: recentWorkspace ? _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.picker.accessTime.description', {
          defaultMessage: 'Viewed {timeLabel}',
          values: {
            timeLabel: moment__WEBPACK_IMPORTED_MODULE_3___default()(recentWorkspace.timestamp).fromNow()
          }
        }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.picker.accessTime.not.visited', {
          defaultMessage: 'Not visited recently'
        })
      };
    });
    return updatedList.sort(sortByRecentVisitedAndAlphabetical);
  }, [workspaceList]);
  const queryFromList = ({
    list,
    query
  }) => {
    if (!list || list.length === 0) {
      return [];
    }
    if (query && query.trim() !== '') {
      const normalizedQuery = query.toLowerCase();
      const result = list.filter(item => item.name.toLowerCase().includes(normalizedQuery));
      return result;
    }
    return list;
  };
  const queriedWorkspace = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return queryFromList({
      list: updatedRecentWorkspaceList,
      query: search
    });
  }, [updatedRecentWorkspaceList, search]);
  const getUseCase = workspace => {
    if (!workspace.features) {
      return;
    }
    const useCaseId = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getFirstUseCaseOfFeatureConfigs"])(workspace.features);
    return availableUseCases.find(useCase => useCase.id === useCaseId);
  };
  const getEmptyStatePrompt = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiEmptyPrompt"], {
      className: "eui-fullHeight",
      iconType: "wsSelector",
      "data-test-subj": "empty-workspace-prompt",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
        size: "m"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.picker.empty.state.title', {
        defaultMessage: 'No workspace available'
      }))),
      body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, isDashboardAdmin ? _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.picker.empty.state.description.admin', {
        defaultMessage: 'Create a workspace to get start'
      }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.picker.empty.state.description.noAdmin', {
        defaultMessage: 'Contact your administrator to create a workspace or to be added to an existing one'
      })))
    });
  };
  const getWorkspaceLists = filterWorkspaceList => {
    const listItems = filterWorkspaceList.map(workspace => {
      const useCase = getUseCase(workspace);
      const useCaseURL = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getUseCaseUrl"])(useCase, workspace.id, coreStart.application, coreStart.http);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHorizontalRule"], {
        size: "full",
        margin: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiListGroupItem"]
      // using inline style to make sure that the list item will be expanded，className="eui-fullWidth" is not working, need to set minWidth
      , {
        style: {
          width: '100%',
          minWidth: '0'
        },
        key: workspace.id,
        size: "s",
        "data-test-subj": `workspace-menu-item-${workspace.id}`,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
          size: "l",
          type: (useCase === null || useCase === void 0 ? void 0 : useCase.icon) || 'wsSelector',
          color: getValidWorkspaceColor(workspace.color)
        }),
        label: !isInTwoLines ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
          direction: "column",
          gutterSize: "none",
          className: "eui-fullWidth"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          className: "eui-textTruncate",
          size: "s"
        }, workspace.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
          justifyContent: "spaceBetween"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
          className: "eui-textLeft",
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          size: "s",
          color: "subdued"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, useCase === null || useCase === void 0 ? void 0 : useCase.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
          grow: 1,
          style: {
            position: 'absolute',
            right: '0px'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          size: "s",
          color: "subdued"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, " ", workspace.accessTimeDescription)))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
          direction: "column",
          gutterSize: "none",
          className: "eui-fullWidth",
          alignItems: "flexStart"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          className: "eui-textTruncate",
          size: "s"
        }, workspace.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          size: "s",
          color: "subdued"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, useCase === null || useCase === void 0 ? void 0 : useCase.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          size: "s",
          color: "subdued"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, " ", workspace.accessTimeDescription)))),
        onClick: () => {
          onClickWorkspace === null || onClickWorkspace === void 0 || onClickWorkspace();
          window.location.assign(useCaseURL);
        }
      }));
    });
    return listItems;
  };
  const getWorkspaceListGroup = filterWorkspaceList => {
    const listItems = getWorkspaceLists(filterWorkspaceList);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiListGroup"], {
      gutterSize: "none"
    }, listItems));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFieldSearch"], {
    compressed: true,
    fullWidth: true,
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: searchFieldPlaceholder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHorizontalRule"], {
    size: "full",
    margin: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPanel"], {
    paddingSize: "none",
    hasBorder: false,
    hasShadow: false
    // adding this inline style to make sure that part of list won't be hidden
    ,
    style: {
      maxHeight: 'calc(100% - 50px)'
    },
    className: "euiYScrollWithShadows eui-fullWidth"
  }, queriedWorkspace.length > 0 && getWorkspaceListGroup(queriedWorkspace), queriedWorkspace.length === 0 && getEmptyStatePrompt()));
};

/***/ }),

/***/ "./public/components/workspace_selector/workspace_selector.scss":
/*!**********************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./workspace_selector.scss?v7dark */ "./public/components/workspace_selector/workspace_selector.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./workspace_selector.scss?v7light */ "./public/components/workspace_selector/workspace_selector.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./workspace_selector.scss?v8dark */ "./public/components/workspace_selector/workspace_selector.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./workspace_selector.scss?v8light */ "./public/components/workspace_selector/workspace_selector.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./workspace_selector.scss?v9dark */ "./public/components/workspace_selector/workspace_selector.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./workspace_selector.scss?v9light */ "./public/components/workspace_selector/workspace_selector.scss?v9light");
}

/***/ }),

/***/ "./public/components/workspace_selector/workspace_selector.scss?v7dark":
/*!*****************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v7dark ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./workspace_selector.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v7dark");

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

/***/ "./public/components/workspace_selector/workspace_selector.scss?v7light":
/*!******************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v7light ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./workspace_selector.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v7light");

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

/***/ "./public/components/workspace_selector/workspace_selector.scss?v8dark":
/*!*****************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v8dark ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./workspace_selector.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v8dark");

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

/***/ "./public/components/workspace_selector/workspace_selector.scss?v8light":
/*!******************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v8light ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./workspace_selector.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v8light");

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

/***/ "./public/components/workspace_selector/workspace_selector.scss?v9dark":
/*!*****************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v9dark ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./workspace_selector.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v9dark");

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

/***/ "./public/components/workspace_selector/workspace_selector.scss?v9light":
/*!******************************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.scss?v9light ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./workspace_selector.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/workspace_selector/workspace_selector.scss?v9light");

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

/***/ "./public/components/workspace_selector/workspace_selector.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/workspace_selector/workspace_selector.tsx ***!
  \*********************************************************************/
/*! exports provided: WorkspaceSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceSelector", function() { return WorkspaceSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/utils */ "./common/utils.ts");
/* harmony import */ var _workspace_picker_content_workspace_picker_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workspace_picker_content/workspace_picker_content */ "./public/components/workspace_picker_content/workspace_picker_content.tsx");
/* harmony import */ var _workspace_selector_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workspace_selector.scss */ "./public/components/workspace_selector/workspace_selector.scss");
/* harmony import */ var _workspace_selector_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_workspace_selector_scss__WEBPACK_IMPORTED_MODULE_8__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */










const createWorkspaceButton = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.menu.button.createWorkspace', {
  defaultMessage: 'Create workspace'
});
const manageWorkspacesButton = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.menu.button.manageWorkspaces', {
  defaultMessage: 'Manage'
});
const getValidWorkspaceColor = color => Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["validateWorkspaceColor"])(color) ? color : undefined;
const WorkspaceSelector = ({
  coreStart,
  registeredUseCases$
}) => {
  var _coreStart$applicatio, _getUseCase, _getUseCase2;
  const [isPopoverOpen, setPopover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const currentWorkspace = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useObservable"])(coreStart.workspaces.currentWorkspace$, null);
  const availableUseCases = Object(react_use__WEBPACK_IMPORTED_MODULE_1__["useObservable"])(registeredUseCases$, []);
  const isDashboardAdmin = (_coreStart$applicatio = coreStart.application.capabilities) === null || _coreStart$applicatio === void 0 || (_coreStart$applicatio = _coreStart$applicatio.dashboards) === null || _coreStart$applicatio === void 0 ? void 0 : _coreStart$applicatio.isDashboardAdmin;
  const getUseCase = workspace => {
    if (!workspace.features) {
      return;
    }
    const useCaseId = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getFirstUseCaseOfFeatureConfigs"])(workspace.features);
    return availableUseCases.find(useCase => useCase.id === useCaseId);
  };
  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };
  const closePopover = () => {
    setPopover(false);
  };
  const button = currentWorkspace ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "workspaceSelectorPopoverButtonContainer",
    "data-label": "Workspace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPanel"], {
    className: "workspaceSelectorPopoverButton",
    "data-test-subj": "workspace-selector-button",
    paddingSize: "s",
    color: "transparent",
    hasBorder: false,
    hasShadow: false,
    onClick: onButtonClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    gutterSize: "none",
    justifyContent: "spaceBetween",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    gutterSize: "s",
    justifyContent: "flexStart",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
    size: "l",
    type: ((_getUseCase = getUseCase(currentWorkspace)) === null || _getUseCase === void 0 ? void 0 : _getUseCase.icon) || 'wsSelector',
    color: getValidWorkspaceColor(currentWorkspace.color)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "column",
    gutterSize: "none",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    style: {
      maxWidth: '130px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s",
    "data-test-subj": "workspace-selector-current-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "eui-textTruncate"
  }, currentWorkspace.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "xs",
    color: "subdued",
    "data-test-subj": "workspace-selector-current-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, (_getUseCase2 = getUseCase(currentWorkspace)) === null || _getUseCase2 === void 0 ? void 0 : _getUseCase2.title))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
    type: "arrowDown",
    size: "m"
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], {
    onClick: onButtonClick
  }, "Select a Workspace");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPopover"], {
    button: button,
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    panelPaddingSize: "s",
    anchorPosition: "downLeft",
    repositionOnScroll: true,
    display: "block",
    className: "eui-fullWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "column",
    alignItems: "center",
    gutterSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPanel"], {
    paddingSize: "none",
    hasBorder: false,
    hasShadow: false,
    color: "transparent"
    // set the width fixed to achieve text truncation
    ,
    style: {
      height: '40vh',
      width: '310px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_workspace_picker_content_workspace_picker_content__WEBPACK_IMPORTED_MODULE_7__["WorkspacePickerContent"], {
    coreStart: coreStart,
    registeredUseCases$: registeredUseCases$,
    onClickWorkspace: () => setPopover(false),
    isInTwoLines: false
  }))), isDashboardAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    className: "eui-fullWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHorizontalRule"], {
    size: "full",
    margin: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    className: "eui-textLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    color: "primary",
    size: "xs",
    "data-test-subj": "workspace-menu-manage-button",
    onClick: () => {
      closePopover();
      coreStart.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_LIST_APP_ID"]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, manageWorkspacesButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    className: "eui-textRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
    color: "primary",
    size: "xs",
    iconType: "plus",
    key: _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_CREATE_APP_ID"],
    "data-test-subj": "workspace-menu-create-workspace-button",
    onClick: () => {
      closePopover();
      coreStart.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_CREATE_APP_ID"]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, createWorkspaceButton)))))));
};

/***/ }),

/***/ "./public/constants.ts":
/*!*****************************!*\
  !*** ./public/constants.ts ***!
  \*****************************/
/*! exports provided: WORKSPACE_ACCESS_LEVEL_NAMES, accessLevelNameToWorkspacePermissionModesMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_ACCESS_LEVEL_NAMES", function() { return WORKSPACE_ACCESS_LEVEL_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessLevelNameToWorkspacePermissionModesMap", function() { return accessLevelNameToWorkspacePermissionModesMap; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const WORKSPACE_ACCESS_LEVEL_NAMES = {
  readOnly: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.accessLevel.readOnlyName', {
    defaultMessage: 'Read only'
  }),
  readAndWrite: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.accessLevel.readAndWriteName', {
    defaultMessage: 'Read and write'
  }),
  admin: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.accessLevel.AdminName', {
    defaultMessage: 'Admin'
  })
};
const accessLevelNameToWorkspacePermissionModesMap = {
  readOnly: [_core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].LibraryRead, _core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].Read],
  readAndWrite: [_core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].LibraryWrite, _core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].Read],
  admin: [_core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].LibraryWrite, _core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].Write]
};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, WorkspacePluginSetup, WorkspaceCollaborator, WorkspaceCollaboratorType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspacePluginSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["WorkspacePluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaborator", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["WorkspaceCollaborator"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorType", function() { return _services__WEBPACK_IMPORTED_MODULE_2__["WorkspaceCollaboratorType"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


function plugin() {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["WorkspacePlugin"]();
}



/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: WorkspacePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspacePlugin", function() { return WorkspacePlugin; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _workspace_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workspace_client */ "./public/workspace_client.ts");
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../plugins/content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_workspace_menu_workspace_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/workspace_menu/workspace_menu */ "./public/components/workspace_menu/workspace_menu.tsx");
/* harmony import */ var _components_workspace_column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/workspace_column */ "./public/components/workspace_column/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./public/utils.ts");
/* harmony import */ var _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recent_workspace_manager */ "./public/recent_workspace_manager.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_service_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/service_card */ "./public/components/service_card/index.ts");
/* harmony import */ var _components_workspace_selector_workspace_selector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/workspace_selector/workspace_selector */ "./public/components/workspace_selector/workspace_selector.tsx");
/* harmony import */ var _components_use_case_overview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/use_case_overview */ "./public/components/use_case_overview/index.ts");
/* harmony import */ var _components_use_case_overview_setup_overview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/use_case_overview/setup_overview */ "./public/components/use_case_overview/setup_overview.tsx");
/* harmony import */ var _components_workspace_list_default_workspace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/workspace_list/default_workspace */ "./public/components/workspace_list/default_workspace.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony import */ var _components_add_collaborators_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add_collaborators_modal */ "./public/components/add_collaborators_modal/index.ts");
/* harmony import */ var _register_default_collaborator_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register_default_collaborator_types */ "./public/register_default_collaborator_types.tsx");
/* harmony import */ var _components_global_search_search_pages_command__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/global_search/search_pages_command */ "./public/components/global_search/search_pages_command.tsx");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

























class WorkspacePlugin {
  constructor() {
    _defineProperty(this, "coreStart", void 0);
    _defineProperty(this, "currentWorkspaceSubscription", void 0);
    _defineProperty(this, "breadcrumbsSubscription", void 0);
    _defineProperty(this, "currentWorkspaceIdSubscription", void 0);
    _defineProperty(this, "managementCurrentWorkspaceIdSubscription", void 0);
    _defineProperty(this, "appUpdater$", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](() => undefined));
    _defineProperty(this, "navGroupUpdater$", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](() => undefined));
    _defineProperty(this, "unregisterNavGroupUpdater", void 0);
    _defineProperty(this, "registeredUseCases$", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]));
    _defineProperty(this, "registeredUseCasesUpdaterSubscription", void 0);
    _defineProperty(this, "workspaceAndUseCasesCombineSubscription", void 0);
    _defineProperty(this, "useCase", new _services__WEBPACK_IMPORTED_MODULE_19__["UseCaseService"]());
    _defineProperty(this, "workspaceClient", void 0);
    _defineProperty(this, "collaboratorTypes", new _services__WEBPACK_IMPORTED_MODULE_19__["WorkspaceCollaboratorTypesService"]());
    _defineProperty(this, "collaboratorsAppUpdater$", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](() => undefined));
    /**
     * Filter nav links by the current workspace, once the current workspace change, the nav links(left nav bar)
     * should also be updated according to the configured features of the current workspace
     */
    _defineProperty(this, "filterNavLinks", core => {
      var _this$workspaceAndUse, _this$currentWorkspac;
      const currentWorkspace$ = core.workspaces.currentWorkspace$;
      (_this$workspaceAndUse = this.workspaceAndUseCasesCombineSubscription) === null || _this$workspaceAndUse === void 0 || _this$workspaceAndUse.unsubscribe();
      this.workspaceAndUseCasesCombineSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([currentWorkspace$, this.registeredUseCases$]).subscribe(([currentWorkspace, registeredUseCases]) => {
        if (currentWorkspace) {
          const workspaceUseCase = currentWorkspace.features ? Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getFirstUseCaseOfFeatureConfigs"])(currentWorkspace.features) : undefined;
          this.appUpdater$.next(app => {
            // essential use overview is only available in essential workspace
            if (app.id === _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ESSENTIAL_OVERVIEW_PAGE_ID"] && workspaceUseCase === _core_public__WEBPACK_IMPORTED_MODULE_4__["ALL_USE_CASE_ID"]) {
              return {
                status: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible
              };
            }
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isAppAccessibleInWorkspace"])(app, currentWorkspace, registeredUseCases)) {
              return;
            }
            if (app.status === _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible) {
              return;
            }
            if (registeredUseCases.some(useCase => useCase.systematic && useCase.features.some(feature => feature.id === app.id))) {
              return;
            }
            /**
             * Change the app to `inaccessible` if it is not configured in the workspace
             * If trying to access such app, an "Application Not Found" page will be displayed
             */
            return {
              status: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible
            };
          });
        } else {
          this.appUpdater$.next(app => {
            if (app.workspaceAvailability === _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].insideWorkspace) {
              return {
                status: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible
              };
            }
          });
        }
      });
      (_this$currentWorkspac = this.currentWorkspaceSubscription) === null || _this$currentWorkspac === void 0 || _this$currentWorkspac.unsubscribe();
      this.currentWorkspaceSubscription = currentWorkspace$.subscribe(currentWorkspace => {
        if (currentWorkspace) {
          this.navGroupUpdater$.next(navGroup => {
            /**
             * The following logic determines whether a navigation group should be hidden or not based on the workspace's feature configurations.
             * It checks the following conditions:
             * 1. The navigation group is not a system-level group.
             * 2. The current workspace has feature configurations set up.
             * 3. The current navigation group is not included in the feature configurations of the workspace.
             *
             * If all these conditions are true, it means that the navigation group should be hidden.
             */
            if (navGroup.type !== _core_public__WEBPACK_IMPORTED_MODULE_4__["NavGroupType"].SYSTEM && currentWorkspace.features && !Object(_utils__WEBPACK_IMPORTED_MODULE_11__["isNavGroupInFeatureConfigs"])(navGroup.id, currentWorkspace.features)) {
              return {
                status: _core_public__WEBPACK_IMPORTED_MODULE_4__["NavGroupStatus"].Hidden
              };
            }
          });
        }
      });
    });
    /**
     * Return an observable with the value of all applications which can be configured by workspace
     */
    _defineProperty(this, "getWorkspaceConfigurableApps$", core => {
      return core.application.applications$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(apps => Object(_utils__WEBPACK_IMPORTED_MODULE_11__["filterWorkspaceConfigurableApps"])([...apps.values()])));
    });
  }
  _changeSavedObjectCurrentWorkspace() {
    if (this.coreStart) {
      return this.coreStart.workspaces.currentWorkspaceId$.subscribe(currentWorkspaceId => {
        if (currentWorkspaceId) {
          var _this$coreStart;
          (_this$coreStart = this.coreStart) === null || _this$coreStart === void 0 || _this$coreStart.savedObjects.client.setCurrentWorkspace(currentWorkspaceId);
        }
      });
    }
  }
  /**
   * If workspace is enabled and user has entered workspace, hide advance settings by disabling the corresponding apps.
   */
  disableManagementApps(core, management) {
    var _this$managementCurre;
    const currentWorkspaceId$ = core.workspaces.currentWorkspaceId$;
    (_this$managementCurre = this.managementCurrentWorkspaceIdSubscription) === null || _this$managementCurre === void 0 || _this$managementCurre.unsubscribe();
    this.managementCurrentWorkspaceIdSubscription = currentWorkspaceId$.subscribe(currentWorkspaceId => {
      if (currentWorkspaceId) {
        ['settings'].forEach(appId => {
          var _management$sections$;
          return (_management$sections$ = management.sections.section.opensearchDashboards.getApp(appId)) === null || _management$sections$ === void 0 ? void 0 : _management$sections$.disable();
        });
      }
    });
  }

  /**
   * Add workspace detail page to breadcrumbs
   * @param core CoreStart
   * @private
   */
  addWorkspaceToBreadcrumbs(core) {
    this.breadcrumbsSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([core.workspaces.currentWorkspace$, core.chrome.getBreadcrumbs$()]).subscribe(([currentWorkspace, breadcrumbs]) => {
      if (currentWorkspace && breadcrumbs && breadcrumbs.length > 0) {
        var _breadcrumbs$;
        // workspace always be the second one
        const workspaceInBreadcrumbs = breadcrumbs.length > 1 && ((_breadcrumbs$ = breadcrumbs[1]) === null || _breadcrumbs$ === void 0 ? void 0 : _breadcrumbs$.text) === currentWorkspace.name;
        if (!workspaceInBreadcrumbs) {
          const workspaceBreadcrumb = {
            text: currentWorkspace.name,
            onClick: () => {
              core.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_DETAIL_APP_ID"]);
            }
          };
          const homeBreadcrumb = {
            text: 'Home',
            onClick: () => {
              core.application.navigateToApp('home');
            }
          };
          breadcrumbs.splice(0, 0, homeBreadcrumb, workspaceBreadcrumb);
          core.chrome.setBreadcrumbs(breadcrumbs);
        }
      }
    });
  }
  async setup(core, {
    savedObjectsManagement,
    management,
    dataSourceManagement,
    contentManagement
  }) {
    const workspaceClient = new _workspace_client__WEBPACK_IMPORTED_MODULE_7__["WorkspaceClient"](core.http, core.workspaces);
    await workspaceClient.init();
    this.workspaceClient = workspaceClient;
    core.workspaces.setClient(workspaceClient);
    this.useCase.setup({
      chrome: core.chrome,
      getStartServices: core.getStartServices,
      workspaces: core.workspaces
    });
    core.application.registerAppUpdater(this.appUpdater$);
    this.unregisterNavGroupUpdater = core.chrome.navGroup.registerNavGroupUpdater(this.navGroupUpdater$);

    //  Hide advance settings and dataSource menus and disable in setup
    if (management) {
      this.disableManagementApps(core, management);
    }

    /**
     * Retrieve workspace id from url
     */
    const workspaceId = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__["getWorkspaceIdFromUrl"])(window.location.href, core.http.basePath.getBasePath());
    if (workspaceId) {
      const result = await workspaceClient.enterWorkspace(workspaceId);
      if (!result.success) {
        /**
         * Fatal error service does not support customized actions
         * So we have to use a self-hosted page to show the errors and redirect.
         */
        (async () => {
          const [{
            application,
            chrome
          }] = await core.getStartServices();
          chrome.setIsVisible(false);
          application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_FATAL_ERROR_APP_ID"], {
            replace: true,
            state: {
              error: result === null || result === void 0 ? void 0 : result.error
            }
          });
        })();
      } else {
        /**
         * If the workspace id is valid and user is currently on workspace_fatal_error page,
         * we should redirect user to overview page of workspace.
         */
        (async () => {
          const [{
            application
          }] = await core.getStartServices();
          const currentAppIdSubscription = application.currentAppId$.subscribe(currentAppId => {
            if (currentAppId === _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_FATAL_ERROR_APP_ID"]) {
              application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_DETAIL_APP_ID"]);
            }
            currentAppIdSubscription.unsubscribe();
          });
          // Add workspace id to recent workspaces.
          _recent_workspace_manager__WEBPACK_IMPORTED_MODULE_12__["recentWorkspaceManager"].addRecentWorkspace(workspaceId);
        })();
      }
    }
    const mountWorkspaceApp = async (params, renderApp) => {
      const [coreStart, {
        navigation
      }] = await core.getStartServices();
      const services = {
        ...coreStart,
        workspaceClient,
        dataSourceManagement,
        collaboratorTypes: this.collaboratorTypes,
        navigationUI: navigation.ui
      };
      return renderApp(params, services, {
        registeredUseCases$: this.registeredUseCases$
      });
    };

    // create
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_CREATE_APP_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceCreate', {
        defaultMessage: 'Create a workspace'
      }),
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      async mount(params) {
        const {
          renderCreatorApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderCreatorApp);
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].outsideWorkspace
    });

    // workspace fatal error
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_FATAL_ERROR_APP_ID"],
      title: '',
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      async mount(params) {
        const {
          renderFatalErrorApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderFatalErrorApp);
      }
    });

    /**
     * register workspace detail page
     */
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_DETAIL_APP_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceDetail', {
        defaultMessage: 'Workspace Detail'
      }),
      navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      async mount(params) {
        const {
          renderDetailApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderDetailApp);
      }
    });

    /**
     * register workspace collaborators page
     */
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_COLLABORATORS_APP_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceCollaborators', {
        defaultMessage: 'Collaborators'
      }),
      navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      async mount(params) {
        const {
          renderCollaboratorsApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderCollaboratorsApp);
      },
      updater$: this.collaboratorsAppUpdater$
    });

    // workspace initial page
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_INITIAL_APP_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceInitial', {
        defaultMessage: 'Workspace Initial'
      }),
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      chromeless: true,
      async mount(params) {
        const {
          renderInitialApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderInitialApp);
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].outsideWorkspace
    });
    const registeredUseCases$ = this.registeredUseCases$;
    // register workspace navigation
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_NAVIGATION_APP_ID"],
      title: '',
      chromeless: true,
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      async mount() {
        const [coreStart] = await core.getStartServices();
        const {
          application,
          http,
          workspaces
        } = coreStart;
        const workspace = workspaces.currentWorkspace$.getValue();
        if (workspace) {
          const availableUseCases = registeredUseCases$.getValue();
          const currentUseCase = availableUseCases.find(useCase => {
            var _workspace$features;
            return useCase.id === Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getFirstUseCaseOfFeatureConfigs"])((_workspace$features = workspace === null || workspace === void 0 ? void 0 : workspace.features) !== null && _workspace$features !== void 0 ? _workspace$features : []);
          });
          const useCaseUrl = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getUseCaseUrl"])(currentUseCase, workspace.id, application, http);
          application.navigateToUrl(useCaseUrl);
        } else {
          application.navigateToApp('home');
        }
        return () => {};
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].insideWorkspace
    });

    // workspace list
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_LIST_APP_ID"],
      title: '',
      /**
       * Nav link status should be visible when nav group enabled.
       * The page should be refreshed and all applications need to register again
       * after nav group enabled changed.
       */
      navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.workspaceList.description', {
        defaultMessage: 'Organize collaborative projects in use-case-specific workspaces.'
      }),
      async mount(params) {
        const {
          renderListApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return mountWorkspaceApp(params, renderListApp);
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].outsideWorkspace
    });
    if (core.chrome.navGroup.getNavGroupEnabled() && contentManagement) {
      // workspace essential use case overview
      core.application.register({
        id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ESSENTIAL_OVERVIEW_PAGE_ID"],
        title: '',
        async mount(params) {
          const {
            renderUseCaseOverviewApp
          } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
          const [coreStart, {
            contentManagement: contentManagementStart,
            navigation: navigationStart
          }] = await core.getStartServices();
          const services = {
            ...coreStart,
            workspaceClient,
            dataSourceManagement,
            contentManagement: contentManagementStart,
            navigationUI: navigationStart.ui
          };
          return renderUseCaseOverviewApp(params, services, _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ESSENTIAL_OVERVIEW_PAGE_ID"]);
        },
        workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].insideWorkspace
      });
      core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"].essentials, [{
        id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ESSENTIAL_OVERVIEW_PAGE_ID"],
        order: -1,
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.nav.essential_overview.title', {
          defaultMessage: 'Overview'
        })
      }]);

      // initial the page structure
      Object(_components_use_case_overview__WEBPACK_IMPORTED_MODULE_16__["setEssentialOverviewSection"])(contentManagement);

      // register workspace Analytics(all) use case overview app
      core.application.register({
        id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ANALYTICS_ALL_OVERVIEW_PAGE_ID"],
        title: '',
        async mount(params) {
          const {
            renderUseCaseOverviewApp
          } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
          const [coreStart, {
            contentManagement: contentManagementStart,
            navigation: navigationStart
          }] = await core.getStartServices();
          const services = {
            ...coreStart,
            workspaceClient,
            dataSourceManagement,
            contentManagement: contentManagementStart,
            navigationUI: navigationStart.ui
          };
          return renderUseCaseOverviewApp(params, services, _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ANALYTICS_ALL_OVERVIEW_PAGE_ID"]);
        },
        workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].insideWorkspace
      });
      core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"].all, [{
        id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ANALYTICS_ALL_OVERVIEW_PAGE_ID"],
        order: -1,
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.nav.analyticsAll_overview.title', {
          defaultMessage: 'Overview'
        })
      }]);

      // initial the page structure
      Object(_components_use_case_overview_setup_overview__WEBPACK_IMPORTED_MODULE_17__["setAnalyticsAllOverviewSection"])(contentManagement);
    }

    /**
     * Only register workspace column into saved objects table when out of workspace
     */
    if (!core.workspaces.currentWorkspaceId$.getValue()) {
      savedObjectsManagement === null || savedObjectsManagement === void 0 || savedObjectsManagement.columns.register(Object(_components_workspace_column__WEBPACK_IMPORTED_MODULE_10__["getWorkspaceColumn"])(core));
    }

    /**
     * Add workspace list to settings and setup group
     */
    core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"].settingsAndSetup, [{
      id: _common_constants__WEBPACK_IMPORTED_MODULE_5__["WORKSPACE_LIST_APP_ID"],
      order: 350,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaces', {
        defaultMessage: 'Workspaces'
      })
    }]);
    core.chrome.globalSearch.registerSearchCommand({
      id: 'pagesSearch',
      type: 'PAGES',
      run: async (query, callback) => Object(_components_global_search_search_pages_command__WEBPACK_IMPORTED_MODULE_22__["searchPages"])(query, this.registeredUseCases$, this.coreStart, callback)
    });
    if (workspaceId) {
      core.chrome.registerCollapsibleNavHeader(() => {
        if (!this.coreStart) {
          return null;
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_workspace_selector_workspace_selector__WEBPACK_IMPORTED_MODULE_15__["WorkspaceSelector"], {
          key: 'workspaceSelector',
          coreStart: this.coreStart,
          registeredUseCases$: this.registeredUseCases$
        });
      });
    }
    Object(_register_default_collaborator_types__WEBPACK_IMPORTED_MODULE_21__["registerDefaultCollaboratorTypes"])({
      getStartServices: core.getStartServices,
      collaboratorTypesService: this.collaboratorTypes
    });
    return {
      collaboratorTypes: this.collaboratorTypes,
      ui: {
        AddCollaboratorsModal: _components_add_collaborators_modal__WEBPACK_IMPORTED_MODULE_20__["AddCollaboratorsModal"]
      }
    };
  }
  start(core, {
    contentManagement,
    navigation
  }) {
    var _core$application;
    this.coreStart = core;
    const isPermissionEnabled = core === null || core === void 0 || (_core$application = core.application) === null || _core$application === void 0 ? void 0 : _core$application.capabilities.workspaces.permissionEnabled;
    this.collaboratorsAppUpdater$.next(() => {
      return {
        status: isPermissionEnabled ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].accessible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible,
        navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden
      };
    });
    this.currentWorkspaceIdSubscription = this._changeSavedObjectCurrentWorkspace();
    const useCaseStart = this.useCase.start({
      chrome: core.chrome,
      workspaceConfigurableApps$: this.getWorkspaceConfigurableApps$(core)
    });
    this.registeredUseCasesUpdaterSubscription = useCaseStart.getRegisteredUseCases$().subscribe(registeredUseCases => {
      this.registeredUseCases$.next(registeredUseCases);
    });
    this.filterNavLinks(core);
    if (!core.chrome.navGroup.getNavGroupEnabled()) {
      this.addWorkspaceToBreadcrumbs(core);
    } else {
      /**
       * Register workspace dropdown selector on the left navigation bottom
       */
      core.chrome.navControls.registerLeftBottom({
        order: 2,
        mount: Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_workspace_menu_workspace_menu__WEBPACK_IMPORTED_MODULE_9__["WorkspaceMenu"], {
          coreStart: core,
          registeredUseCases$: this.registeredUseCases$
        }))
      });

      // register workspace list in home page
      this.registerWorkspaceListToHome(core, contentManagement);

      // register workspace list to user settings page
      this.registerWorkspaceListToUserSettings(core, contentManagement, navigation);

      // set breadcrumbs enricher for workspace
      this.breadcrumbsSubscription = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["enrichBreadcrumbsWithWorkspace"])(core, this.registeredUseCases$);

      // register content to essential overview page
      Object(_components_use_case_overview__WEBPACK_IMPORTED_MODULE_16__["registerEssentialOverviewContent"])(contentManagement, core);

      // register content to analytics(All) overview page
      Object(_components_use_case_overview_setup_overview__WEBPACK_IMPORTED_MODULE_17__["registerAnalyticsAllOverviewContent"])(contentManagement, core);
    }
    return {};
  }
  registerWorkspaceListToHome(core, contentManagement) {
    if (contentManagement) {
      contentManagement.registerContentProvider({
        id: 'workspace_list_card_home',
        getContent: () => ({
          id: 'workspace_list',
          kind: 'custom',
          order: 0,
          width: 16,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_service_card__WEBPACK_IMPORTED_MODULE_14__["WorkspaceListCard"], {
            core
          })
        }),
        getTargetArea: () => _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["HOME_CONTENT_AREAS"].SERVICE_CARDS
      });
    }
  }
  async registerWorkspaceListToUserSettings(coreStart, contentManagement, navigation) {
    if (contentManagement) {
      const services = {
        ...coreStart,
        workspaceClient: this.workspaceClient,
        navigationUI: navigation.ui,
        collaboratorTypes: this.collaboratorTypes
      };
      contentManagement.registerContentProvider({
        id: 'default_workspace_list',
        getContent: () => ({
          id: 'default_workspace_list',
          kind: 'custom',
          order: 0,
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_workspace_list_default_workspace__WEBPACK_IMPORTED_MODULE_18__["UserDefaultWorkspace"], {
            services,
            registeredUseCases$: this.registeredUseCases$
          })
        }),
        getTargetArea: () => 'user_settings/default_workspace'
      });
    }
  }
  stop() {
    var _this$currentWorkspac2, _this$currentWorkspac3, _this$managementCurre2, _this$breadcrumbsSubs, _this$unregisterNavGr, _this$registeredUseCa, _this$workspaceAndUse2;
    (_this$currentWorkspac2 = this.currentWorkspaceSubscription) === null || _this$currentWorkspac2 === void 0 || _this$currentWorkspac2.unsubscribe();
    (_this$currentWorkspac3 = this.currentWorkspaceIdSubscription) === null || _this$currentWorkspac3 === void 0 || _this$currentWorkspac3.unsubscribe();
    (_this$managementCurre2 = this.managementCurrentWorkspaceIdSubscription) === null || _this$managementCurre2 === void 0 || _this$managementCurre2.unsubscribe();
    (_this$breadcrumbsSubs = this.breadcrumbsSubscription) === null || _this$breadcrumbsSubs === void 0 || _this$breadcrumbsSubs.unsubscribe();
    (_this$unregisterNavGr = this.unregisterNavGroupUpdater) === null || _this$unregisterNavGr === void 0 || _this$unregisterNavGr.call(this);
    (_this$registeredUseCa = this.registeredUseCasesUpdaterSubscription) === null || _this$registeredUseCa === void 0 || _this$registeredUseCa.unsubscribe();
    (_this$workspaceAndUse2 = this.workspaceAndUseCasesCombineSubscription) === null || _this$workspaceAndUse2 === void 0 || _this$workspaceAndUse2.unsubscribe();
    this.useCase.stop();
    this.collaboratorTypes.stop();
  }
}

/***/ }),

/***/ "./public/recent_workspace_manager.ts":
/*!********************************************!*\
  !*** ./public/recent_workspace_manager.ts ***!
  \********************************************/
/*! exports provided: RecentWorkspaceManager, recentWorkspaceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentWorkspaceManager", function() { return RecentWorkspaceManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recentWorkspaceManager", function() { return recentWorkspaceManager; });
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
var _class;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



class RecentWorkspaceManager {
  constructor() {
    _defineProperty(this, "recentWorkspaceLog", void 0);
    const customIsEqual = (oldItem, newItem) => {
      return oldItem.id === newItem.id;
    };
    this.recentWorkspaceLog = new _core_public__WEBPACK_IMPORTED_MODULE_0__["PersistedLog"](_common_constants__WEBPACK_IMPORTED_MODULE_1__["RECENT_WORKSPACES_KEY"], {
      maxLength: 10,
      isEqual: customIsEqual
    });
  }

  // Singleton pattern to ensure only one instance is used
  static getInstance() {
    if (!RecentWorkspaceManager.instance) {
      RecentWorkspaceManager.instance = new RecentWorkspaceManager();
    }
    return RecentWorkspaceManager.instance;
  }
  getRecentWorkspaces() {
    return this.recentWorkspaceLog.get();
  }
  addRecentWorkspace(newWorkspace) {
    const newEntry = {
      id: newWorkspace,
      timestamp: Date.now()
    };
    this.recentWorkspaceLog.add(newEntry);
    return this.getRecentWorkspaces();
  }
}

// Export the singleton instance
_class = RecentWorkspaceManager;
_defineProperty(RecentWorkspaceManager, "instance", void 0);
const recentWorkspaceManager = RecentWorkspaceManager.getInstance();

/***/ }),

/***/ "./public/register_default_collaborator_types.tsx":
/*!********************************************************!*\
  !*** ./public/register_default_collaborator_types.tsx ***!
  \********************************************************/
/*! exports provided: generateOnAddCallback, registerDefaultCollaboratorTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOnAddCallback", function() { return generateOnAddCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultCollaboratorTypes", function() { return registerDefaultCollaboratorTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../plugins/opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_add_collaborators_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add_collaborators_modal */ "./public/components/add_collaborators_modal/index.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const generateOnAddCallback = ({
  getStartServices,
  ...props
}) => async ({
  onAddCollaborators
}) => {
  let overlayRef = null;
  const [coreStart] = await getStartServices();
  overlayRef = coreStart.overlays.openModal(Object(_plugins_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_add_collaborators_modal__WEBPACK_IMPORTED_MODULE_3__["AddCollaboratorsModal"], _extends({}, props, {
    onClose: () => {
      var _overlayRef;
      (_overlayRef = overlayRef) === null || _overlayRef === void 0 || _overlayRef.close();
    },
    onAddCollaborators: async collaborators => {
      var _overlayRef2;
      await onAddCollaborators(collaborators);
      (_overlayRef2 = overlayRef) === null || _overlayRef2 === void 0 || _overlayRef2.close();
    }
  }))));
};
const registerDefaultCollaboratorTypes = ({
  getStartServices,
  collaboratorTypesService
}) => {
  collaboratorTypesService.setTypes([{
    id: 'user',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.name', {
      defaultMessage: 'User'
    }),
    buttonLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.buttonLabel', {
      defaultMessage: 'Add Users'
    }),
    getDisplayedType: ({
      permissionType
    }) => permissionType === 'user' ? _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.displayedType', {
      defaultMessage: 'User'
    }) : undefined,
    onAdd: generateOnAddCallback({
      getStartServices,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.modalTitle', {
        defaultMessage: 'Add Users'
      }),
      inputLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.inputLabel', {
        defaultMessage: 'User ID'
      }),
      inputPlaceholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.inputPlaceholder', {
        defaultMessage: 'Enter User ID'
      }),
      addAnotherButtonLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultUser.addAnotherButtonLabel', {
        defaultMessage: 'Add another User'
      }),
      permissionType: 'user'
    })
  }, {
    id: 'group',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.name', {
      defaultMessage: 'Group'
    }),
    buttonLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.buttonLabel', {
      defaultMessage: 'Add Groups'
    }),
    getDisplayedType: ({
      permissionType
    }) => permissionType === 'group' ? _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.displayedType', {
      defaultMessage: 'Group'
    }) : undefined,
    onAdd: generateOnAddCallback({
      getStartServices,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.modalTitle', {
        defaultMessage: 'Add Groups'
      }),
      inputLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.inputLabel', {
        defaultMessage: 'Group ID'
      }),
      inputPlaceholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.inputPlaceholder', {
        defaultMessage: 'Enter Group ID'
      }),
      addAnotherButtonLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('workspace.collaboratorType.defaultGroup.addAnotherButtonLabel', {
        defaultMessage: 'Add another Group'
      }),
      permissionType: 'group'
    })
  }]);
};

/***/ }),

/***/ "./public/services/index.ts":
/*!**********************************!*\
  !*** ./public/services/index.ts ***!
  \**********************************/
/*! exports provided: UseCaseService, WorkspaceCollaboratorType, WorkspaceCollaboratorTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_case_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_case_service */ "./public/services/use_case_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseCaseService", function() { return _use_case_service__WEBPACK_IMPORTED_MODULE_0__["UseCaseService"]; });

/* harmony import */ var _workspace_collaborator_types_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workspace_collaborator_types_service */ "./public/services/workspace_collaborator_types_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorType", function() { return _workspace_collaborator_types_service__WEBPACK_IMPORTED_MODULE_1__["WorkspaceCollaboratorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorTypesService", function() { return _workspace_collaborator_types_service__WEBPACK_IMPORTED_MODULE_1__["WorkspaceCollaboratorTypesService"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/services/use_case_service.ts":
/*!*********************************************!*\
  !*** ./public/services/use_case_service.ts ***!
  \*********************************************/
/*! exports provided: UseCaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseCaseService", function() { return UseCaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/utils.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







class UseCaseService {
  constructor() {
    _defineProperty(this, "workspaceAndManageWorkspaceCategorySubscription", void 0);
  }

  /**
   * Add nav links belong to `manage workspace` to all of the use cases.
   * @param coreSetup
   * @param currentWorkspace
   */
  async registerManageWorkspaceCategory(setupDeps) {
    var _coreStart$applicatio, _this$workspaceAndMan;
    const [coreStart] = await setupDeps.getStartServices();
    const isPermissionEnabled = coreStart === null || coreStart === void 0 || (_coreStart$applicatio = coreStart.application) === null || _coreStart$applicatio === void 0 ? void 0 : _coreStart$applicatio.capabilities.workspaces.permissionEnabled;
    (_this$workspaceAndMan = this.workspaceAndManageWorkspaceCategorySubscription) === null || _this$workspaceAndMan === void 0 || _this$workspaceAndMan.unsubscribe();
    this.workspaceAndManageWorkspaceCategorySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([setupDeps.workspaces.currentWorkspace$, coreStart.chrome.navGroup.getNavGroupsMap$()]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([currentWorkspace, navGroupMap]) => {
      const currentUseCase = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getFirstUseCaseOfFeatureConfigs"])((currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.features) || []);
      if (!currentUseCase) {
        return undefined;
      }
      return navGroupMap[currentUseCase];
    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])((navGroupInfo, anotherNavGroup) => {
      return (navGroupInfo === null || navGroupInfo === void 0 ? void 0 : navGroupInfo.id) === (anotherNavGroup === null || anotherNavGroup === void 0 ? void 0 : anotherNavGroup.id);
    })).subscribe(navGroupInfo => {
      if (navGroupInfo) {
        setupDeps.chrome.navGroup.addNavLinksToGroup(navGroupInfo, [{
          id: _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_DETAIL_APP_ID"],
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 100,
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceDetails', {
            defaultMessage: 'Workspace details'
          })
        }, ...(isPermissionEnabled ? [{
          id: _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_COLLABORATORS_APP_ID"],
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 200,
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.settings.workspaceCollaborators', {
            defaultMessage: 'Collaborators'
          })
        }] : []), {
          id: 'dataSources',
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 300
        }, {
          id: 'indexPatterns',
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 400
        }, {
          id: 'objects',
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 500
        }, {
          id: 'import_sample_data',
          category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].manageWorkspace,
          order: 600,
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('workspace.left.sampleData.label', {
            defaultMessage: 'Sample data'
          })
        }]);
      }
    });
  }
  setup({
    chrome,
    workspaces,
    getStartServices
  }) {
    this.registerManageWorkspaceCategory({
      chrome,
      workspaces,
      getStartServices
    });
  }
  start({
    chrome,
    workspaceConfigurableApps$
  }) {
    return {
      getRegisteredUseCases$: () => {
        if (chrome.navGroup.getNavGroupEnabled()) {
          return chrome.navGroup.getNavGroupsMap$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(navGroupsMap => {
            return Object.values(navGroupsMap).map(_utils__WEBPACK_IMPORTED_MODULE_5__["convertNavGroupToWorkspaceUseCase"]);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])((useCases, anotherUseCases) => {
            return useCases.length === anotherUseCases.length && useCases.every(useCase => !!anotherUseCases.find(anotherUseCase => Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEqualWorkspaceUseCase"])(useCase, anotherUseCase)));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(useCases => useCases.sort((a, b) => {
            var _a$order, _b$order;
            // Make sure all use case should be the latest
            if (a.id === _core_public__WEBPACK_IMPORTED_MODULE_3__["ALL_USE_CASE_ID"]) {
              return 1;
            }
            if (b.id === _core_public__WEBPACK_IMPORTED_MODULE_3__["ALL_USE_CASE_ID"]) {
              return -1;
            }
            return ((_a$order = a.order) !== null && _a$order !== void 0 ? _a$order : Number.MAX_SAFE_INTEGER) - ((_b$order = b.order) !== null && _b$order !== void 0 ? _b$order : Number.MAX_SAFE_INTEGER);
          })));
        }
        return workspaceConfigurableApps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(configurableApps => {
          const configurableAppsId = configurableApps.map(app => app.id);
          return [_common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_USE_CASES"].observability, _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_USE_CASES"]['security-analytics'], _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_USE_CASES"].essentials, _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_USE_CASES"].search].filter(useCase => {
            return useCase.features.some(featureId => configurableAppsId.includes(featureId));
          }).map(item => ({
            ...item,
            features: item.features.map(featureId => {
              var _configurableApps$fin;
              return {
                title: (_configurableApps$fin = configurableApps.find(app => app.id === featureId)) === null || _configurableApps$fin === void 0 ? void 0 : _configurableApps$fin.title,
                id: featureId
              };
            })
          })).concat({
            ..._core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NAV_GROUPS"].all,
            features: configurableApps.map(app => ({
              id: app.id,
              title: app.title
            }))
          });
        }));
      }
    };
  }
  stop() {
    var _this$workspaceAndMan2;
    (_this$workspaceAndMan2 = this.workspaceAndManageWorkspaceCategorySubscription) === null || _this$workspaceAndMan2 === void 0 || _this$workspaceAndMan2.unsubscribe();
  }
}

/***/ }),

/***/ "./public/services/workspace_collaborator_types_service.ts":
/*!*****************************************************************!*\
  !*** ./public/services/workspace_collaborator_types_service.ts ***!
  \*****************************************************************/
/*! exports provided: WorkspaceCollaboratorTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceCollaboratorTypesService", function() { return WorkspaceCollaboratorTypesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


class WorkspaceCollaboratorTypesService {
  constructor() {
    _defineProperty(this, "_collaboratorTypes$", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]));
  }
  getTypes$() {
    return this._collaboratorTypes$;
  }
  setTypes(types) {
    this._collaboratorTypes$.next(types);
  }
  stop() {
    this._collaboratorTypes$.complete();
  }
}

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/utils.ts":
/*!*************************!*\
  !*** ./public/utils.ts ***!
  \*************************/
/*! exports provided: isUseCaseFeatureConfig, getUseCaseFromFeatureConfig, isFeatureIdInsideUseCase, isNavGroupInFeatureConfigs, featureMatchesConfig, isAppAccessibleInWorkspace, filterWorkspaceConfigurableApps, getDataSourcesList, getDirectQueryConnections, convertDataSourcesToOpenSearchAndDataConnections, fulfillRelatedConnections, mergeDataSourcesWithConnections, getIsOnlyAllowEssentialUseCase, convertNavGroupToWorkspaceUseCase, isEqualWorkspaceUseCase, getFirstUseCaseOfFeatureConfigs, enrichBreadcrumbsWithWorkspace, extractUseCaseTitleFromFeatures, prependWorkspaceToBreadcrumbs, getUseCaseUrl, fetchDataSourceConnectionsByDataSourceIds, fetchDataSourceConnections, getUseCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUseCaseFeatureConfig", function() { return isUseCaseFeatureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseCaseFromFeatureConfig", function() { return getUseCaseFromFeatureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureIdInsideUseCase", function() { return isFeatureIdInsideUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavGroupInFeatureConfigs", function() { return isNavGroupInFeatureConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureMatchesConfig", function() { return featureMatchesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAppAccessibleInWorkspace", function() { return isAppAccessibleInWorkspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterWorkspaceConfigurableApps", function() { return filterWorkspaceConfigurableApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSourcesList", function() { return getDataSourcesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectQueryConnections", function() { return getDirectQueryConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataSourcesToOpenSearchAndDataConnections", function() { return convertDataSourcesToOpenSearchAndDataConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fulfillRelatedConnections", function() { return fulfillRelatedConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDataSourcesWithConnections", function() { return mergeDataSourcesWithConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsOnlyAllowEssentialUseCase", function() { return getIsOnlyAllowEssentialUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertNavGroupToWorkspaceUseCase", function() { return convertNavGroupToWorkspaceUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualWorkspaceUseCase", function() { return isEqualWorkspaceUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstUseCaseOfFeatureConfigs", function() { return getFirstUseCaseOfFeatureConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enrichBreadcrumbsWithWorkspace", function() { return enrichBreadcrumbsWithWorkspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUseCaseTitleFromFeatures", function() { return extractUseCaseTitleFromFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependWorkspaceToBreadcrumbs", function() { return prependWorkspaceToBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseCaseUrl", function() { return getUseCaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataSourceConnectionsByDataSourceIds", function() { return fetchDataSourceConnectionsByDataSourceIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataSourceConnections", function() { return fetchDataSourceConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseCase", function() { return getUseCase; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils */ "./common/utils.ts");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plugins_data_source_common_data_sources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../plugins/data_source/common/data_sources */ "plugin/dataSource/common/data_sources");
/* harmony import */ var _plugins_data_source_common_data_sources__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plugins_data_source_common_data_sources__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_source_management_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data_source_management/public */ "plugin/dataSourceManagement/public");
/* harmony import */ var _data_source_management_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_source_management_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/types */ "./common/types.ts");
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data_source/common */ "plugin/dataSource/common");
/* harmony import */ var _data_source_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_data_source_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_workspace_name_workspace_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/workspace_name/workspace_name */ "./public/components/workspace_name/workspace_name.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */













const isUseCaseFeatureConfig = featureConfig => featureConfig.startsWith(_common_constants__WEBPACK_IMPORTED_MODULE_4__["USE_CASE_PREFIX"]);
const getUseCaseFromFeatureConfig = featureConfig => {
  if (isUseCaseFeatureConfig(featureConfig)) {
    return featureConfig.substring(_common_constants__WEBPACK_IMPORTED_MODULE_4__["USE_CASE_PREFIX"].length);
  }
  return null;
};
const isFeatureIdInsideUseCase = (featureId, useCaseId, useCases) => {
  var _useCases$find$featur, _useCases$find;
  const availableFeatures = (_useCases$find$featur = (_useCases$find = useCases.find(({
    id
  }) => id === useCaseId)) === null || _useCases$find === void 0 ? void 0 : _useCases$find.features) !== null && _useCases$find$featur !== void 0 ? _useCases$find$featur : [];
  return availableFeatures.some(feature => feature.id === featureId);
};
const isNavGroupInFeatureConfigs = (navGroupId, featureConfigs) => featureConfigs.includes(Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["getUseCaseFeatureConfig"])(navGroupId));

/**
 * Checks if a given feature matches the provided feature configuration.
 *
 * Rules:
 * 1. `*` matches any feature.
 * 2. Config starts with `@` matches category, for example, @management matches any feature of `management` category,
 * 3. To match a specific feature, use the feature id, such as `discover`,
 * 4. To exclude a feature or category, prepend with `!`, e.g., `!discover` or `!@management`.
 * 5. The order of featureConfig array matters. From left to right, later configs override the previous ones.
 *    For example, ['!@management', '*'] matches any feature because '*' overrides the previous setting: '!@management'.
 * 6. For feature id start with use case prefix, it will read use case's features and match every passed apps.
 *    For example, ['user-case-observability'] matches all features under observability use case.
 */
const featureMatchesConfig = (featureConfigs, useCases) => ({
  id,
  category
}) => {
  let matched = false;
  let firstUseCaseId;

  /**
   * Iterate through each feature configuration to determine if the given feature matches any of them.
   * Note: The loop will not break prematurely because the order of featureConfigs array matters.
   * Later configurations may override previous ones, so each configuration must be evaluated in sequence.
   */
  for (const featureConfig of featureConfigs) {
    // '*' matches any feature
    if (featureConfig === '*') {
      matched = true;
    }

    // matches any feature inside use cases
    if (!firstUseCaseId) {
      const useCaseId = getUseCaseFromFeatureConfig(featureConfig);
      if (useCaseId) {
        firstUseCaseId = useCaseId;
        if (isFeatureIdInsideUseCase(id, firstUseCaseId, useCases)) {
          matched = true;
        }
      }
    }

    // The config starts with `@` matches a category
    if (category && featureConfig === `@${category.id}`) {
      matched = true;
    }

    // The config matches a feature id
    if (featureConfig === id) {
      matched = true;
    }

    // If a config starts with `!`, such feature or category will be excluded
    if (featureConfig.startsWith('!')) {
      if (category && featureConfig === `!@${category.id}`) {
        matched = false;
      }
      if (featureConfig === `!${id}`) {
        matched = false;
      }
    }
  }
  return matched;
};

/**
 * Check if an app is accessible in a workspace based on the workspace configured features
 */
function isAppAccessibleInWorkspace(app, workspace, availableUseCases) {
  /**
   * App is not accessible within workspace if it explicitly declare itself as WorkspaceAvailability.outsideWorkspace
   */
  if (app.workspaceAvailability === _core_public__WEBPACK_IMPORTED_MODULE_3__["WorkspaceAvailability"].outsideWorkspace) {
    return false;
  }

  /**
   * When workspace has no features configured, all apps are considered to be accessible
   */
  if (!workspace.features) {
    return true;
  }

  /**
   * When workspace is all use case, all apps are accessible
   */
  if (getFirstUseCaseOfFeatureConfigs(workspace.features) === _core_public__WEBPACK_IMPORTED_MODULE_3__["ALL_USE_CASE_ID"]) {
    return true;
  }

  /**
   * The app is configured into a workspace, it is accessible after entering the workspace
   */
  const featureMatcher = featureMatchesConfig(workspace.features, availableUseCases);
  if (featureMatcher({
    id: app.id,
    category: app.category
  })) {
    return true;
  }

  /*
   * An app with hidden nav link is not configurable by workspace, which means user won't be
   * able to select/unselect it when configuring workspace features. Such apps are by default
   * accessible when in a workspace.
   */
  if (app.navLinkStatus === _core_public__WEBPACK_IMPORTED_MODULE_3__["AppNavLinkStatus"].hidden) {
    return true;
  }

  /**
   * A chromeless app is not configurable by workspace, which means user won't be
   * able to select/unselect it when configuring workspace features. Such apps are by default
   * accessible when in a workspace.
   */
  if (app.chromeless) {
    return true;
  }
  return false;
}

// Get all apps that should be displayed in workspace when create/update a workspace.
const filterWorkspaceConfigurableApps = applications => {
  const visibleApplications = applications.filter(({
    navLinkStatus,
    chromeless,
    category,
    id,
    workspaceAvailability
  }) => {
    const filterCondition = navLinkStatus !== _core_public__WEBPACK_IMPORTED_MODULE_3__["AppNavLinkStatus"].hidden && !chromeless && workspaceAvailability !== _core_public__WEBPACK_IMPORTED_MODULE_3__["WorkspaceAvailability"].outsideWorkspace;
    // If the category is management, only retain Dashboards Management which contains saved objects and index patterns.
    // Saved objects can show all saved objects in the current workspace and index patterns is at workspace level.
    if ((category === null || category === void 0 ? void 0 : category.id) === _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].management.id) {
      return filterCondition && id === 'management';
    }
    return filterCondition;
  });
  return visibleApplications;
};
const getDataSourcesList = (client, targetWorkspaces) => {
  return client.find({
    type: _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_DATA_SOURCE_AND_CONNECTION_OBJECT_TYPES"],
    fields: ['id', 'title', 'auth', 'description', 'dataSourceEngineType', 'type', 'connectionId'],
    perPage: 10000,
    workspaces: targetWorkspaces
  }).then(response => {
    const objects = response === null || response === void 0 ? void 0 : response.savedObjects;
    if (objects) {
      return objects.map(source => {
        var _ref, _source$get, _source$workspaces;
        const id = source.id;
        // Data connection doesn't have title for now, would use connectionId instead to display.
        const title = (_ref = (_source$get = source.get('title')) !== null && _source$get !== void 0 ? _source$get : source.get('connectionId')) !== null && _ref !== void 0 ? _ref : '';
        const workspaces = (_source$workspaces = source.workspaces) !== null && _source$workspaces !== void 0 ? _source$workspaces : [];
        const auth = source.get('auth');
        const description = source.get('description');
        const dataSourceEngineType = source.get('dataSourceEngineType');
        const type = source.type;
        // This is a field only for detail type of data connection in order not to mix with saved object type.
        const connectionType = source.get('type');
        return {
          id,
          title,
          auth,
          description,
          dataSourceEngineType,
          workspaces,
          type,
          connectionType
        };
      });
    } else {
      return [];
    }
  });
};
const getDirectQueryConnections = async (dataSourceId, http) => {
  const endpoint = `${_data_source_management_public__WEBPACK_IMPORTED_MODULE_8__["DATACONNECTIONS_BASE"]}/dataSourceMDSId=${dataSourceId}`;
  const res = await http.get(endpoint, {
    prependOptions: {
      withoutClientBasePath: true
    }
  });
  const directQueryConnections = res.map(dataConnection => ({
    id: `${dataSourceId}-${dataConnection.name}`,
    name: dataConnection.name,
    type: _data_source_management_public__WEBPACK_IMPORTED_MODULE_8__["DatasourceTypeToDisplayName"][dataConnection.connector],
    connectionType: _common_types__WEBPACK_IMPORTED_MODULE_9__["DataSourceConnectionType"].DirectQueryConnection,
    description: dataConnection.description,
    parentId: dataSourceId
  }));
  return directQueryConnections;
};
const convertDataSourcesToOpenSearchAndDataConnections = dataSources => {
  const openSearchConnections = dataSources.filter(ds => ds.type === _data_source_common__WEBPACK_IMPORTED_MODULE_10__["DATA_SOURCE_SAVED_OBJECT_TYPE"]).map(ds => {
    return {
      id: ds.id,
      type: ds.dataSourceEngineType,
      connectionType: _common_types__WEBPACK_IMPORTED_MODULE_9__["DataSourceConnectionType"].OpenSearchConnection,
      name: ds.title,
      description: ds.description,
      relatedConnections: []
    };
  });
  const dataConnections = dataSources.filter(ds => ds.type === _data_source_common__WEBPACK_IMPORTED_MODULE_10__["DATA_CONNECTION_SAVED_OBJECT_TYPE"]).map(ds => {
    return {
      id: ds.id,
      type: ds.connectionType,
      connectionType: _common_types__WEBPACK_IMPORTED_MODULE_9__["DataSourceConnectionType"].DataConnection,
      name: ds.title,
      description: ds.description
    };
  });
  return {
    openSearchConnections,
    dataConnections
  };
};
const fulfillRelatedConnections = (connections, directQueryConnections) => {
  return connections.map(connection => {
    const relatedConnections = directQueryConnections.filter(directQueryConnection => directQueryConnection.parentId === connection.id);
    return {
      ...connection,
      relatedConnections
    };
  });
};

// Helper function to merge data sources with direct query connections
const mergeDataSourcesWithConnections = (dataSources, directQueryConnections, mode) => {
  const {
    openSearchConnections,
    dataConnections
  } = convertDataSourcesToOpenSearchAndDataConnections(dataSources);
  let result;
  // if the mode is set to OpenSearchConnections, then only display OpenSearch connections
  if (mode === _common_constants__WEBPACK_IMPORTED_MODULE_4__["AssociationDataSourceModalMode"].OpenSearchConnections) {
    result = openSearchConnections.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // if the mode is set to DirectQueryConnections, then will display Direct Query connections and data connections
    result = [...fulfillRelatedConnections(openSearchConnections, directQueryConnections), ...directQueryConnections, ...dataConnections].sort((a, b) => a.name.localeCompare(b.name));
  }
  return result;
};

// If all connected data sources are serverless, will only allow to select essential use case.
const getIsOnlyAllowEssentialUseCase = async client => {
  const allDataSources = await getDataSourcesList(client, ['*']);
  if (allDataSources.length > 0) {
    return allDataSources.every(ds => {
      var _ds$auth;
      return (ds === null || ds === void 0 || (_ds$auth = ds.auth) === null || _ds$auth === void 0 || (_ds$auth = _ds$auth.credentials) === null || _ds$auth === void 0 ? void 0 : _ds$auth.service) === _plugins_data_source_common_data_sources__WEBPACK_IMPORTED_MODULE_7__["SigV4ServiceName"].OpenSearchServerless;
    });
  }
  return false;
};
const convertNavGroupToWorkspaceUseCase = ({
  id,
  title,
  description,
  navLinks,
  type,
  order,
  icon
}) => {
  return {
    id,
    title,
    description,
    features: navLinks.map(navLink => ({
      id: navLink.id,
      title: navLink.title
    })),
    systematic: type === _core_public__WEBPACK_IMPORTED_MODULE_3__["NavGroupType"].SYSTEM || id === _core_public__WEBPACK_IMPORTED_MODULE_3__["ALL_USE_CASE_ID"],
    order,
    icon
  };
};
const compareFeatures = (features1, features2) => {
  const featuresSerializer = features => features.map(({
    id,
    title
  }) => `${id}-${title}`).sort().join();
  return featuresSerializer(features1) === featuresSerializer(features2);
};
const isEqualWorkspaceUseCase = (a, b) => {
  if (a.id !== b.id) {
    return false;
  }
  if (a.title !== b.title) {
    return false;
  }
  if (a.description !== b.description) {
    return false;
  }
  if (a.systematic !== b.systematic) {
    return false;
  }
  if (a.order !== b.order) {
    return false;
  }
  if (a.features.length !== b.features.length || !compareFeatures(a.features, b.features)) {
    return false;
  }
  return true;
};
const isNotNull = value => !!value;
const getFirstUseCaseOfFeatureConfigs = featureConfigs => featureConfigs.map(getUseCaseFromFeatureConfig).filter(isNotNull)[0];
function enrichBreadcrumbsWithWorkspace(core, registeredUseCases$) {
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([core.workspaces.currentWorkspace$, core.chrome.navGroup.getNavGroupsMap$(), registeredUseCases$]).subscribe(([currentWorkspace, navGroupsMap, registeredUseCases]) => {
    prependWorkspaceToBreadcrumbs(core, currentWorkspace, navGroupsMap, registeredUseCases);
  });
}
const extractUseCaseTitleFromFeatures = (registeredUseCases, features) => {
  if (!features || features.length === 0) {
    return '';
  }
  const useCaseId = getFirstUseCaseOfFeatureConfigs(features);
  const usecase = useCaseId === _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NAV_GROUPS"].all.id ? _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_NAV_GROUPS"].all : registeredUseCases === null || registeredUseCases === void 0 ? void 0 : registeredUseCases.find(({
    id
  }) => id === useCaseId);
  if (usecase) {
    return usecase.title;
  }
};

/**
 * prepend workspace or its use case to breadcrumbs
 * @param core CoreStart
 */
function prependWorkspaceToBreadcrumbs(core, currentWorkspace, navGroupsMap, availableUseCases) {
  /**
   * There has 3 cases
   * nav group is enable + workspace enable + in a workspace -> workspace enricher
   * nav group is enable + workspace enable + out a workspace -> nav group enricher
   * nav group is enable + workspace disabled -> nav group enricher
   *
   * switch workspace will cause page refresh, breadcrumbs enricher will reset automatically
   * so we don't need to have reset logic for workspace
   */
  if (currentWorkspace) {
    const useCase = getFirstUseCaseOfFeatureConfigs((currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.features) || []);
    const workspaceBreadcrumb = {
      text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_workspace_name_workspace_name__WEBPACK_IMPORTED_MODULE_11__["WorkspaceTitleDisplay"], {
        workspace: currentWorkspace,
        availableUseCases
      }),
      onClick: () => {
        if (useCase) {
          const allNavGroups = navGroupsMap[useCase];
          core.application.navigateToApp(allNavGroups === null || allNavGroups === void 0 ? void 0 : allNavGroups.navLinks[0].id);
        }
      }
    };
    core.chrome.setBreadcrumbsEnricher(breadcrumbs => {
      if (!breadcrumbs || !breadcrumbs.length) return breadcrumbs;
      return [workspaceBreadcrumb, ...breadcrumbs];
    });
  }
}
const getUseCaseUrl = (useCase, workspaceId, application, http) => {
  var _useCase$features;
  const appId = (useCase === null || useCase === void 0 || (_useCase$features = useCase.features) === null || _useCase$features === void 0 || (_useCase$features = _useCase$features[0]) === null || _useCase$features === void 0 ? void 0 : _useCase$features.id) || _common_constants__WEBPACK_IMPORTED_MODULE_4__["WORKSPACE_DETAIL_APP_ID"];
  const useCaseURL = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__["formatUrlWithWorkspaceId"])(application.getUrlForApp(appId, {
    absolute: false
  }), workspaceId, http.basePath);
  return useCaseURL;
};
const fetchDataSourceConnectionsByDataSourceIds = async (dataSourceIds, http) => {
  const directQueryConnectionsPromises = dataSourceIds.map(dataSourceId => getDirectQueryConnections(dataSourceId, http).catch(() => []));
  const directQueryConnectionsResult = await Promise.all(directQueryConnectionsPromises);
  return directQueryConnectionsResult.flat();
};
const fetchDataSourceConnections = async (dataSources, http, notifications, mode) => {
  try {
    let directQueryConnections = [];
    if (mode === _common_constants__WEBPACK_IMPORTED_MODULE_4__["AssociationDataSourceModalMode"].DirectQueryConnections) {
      directQueryConnections = await fetchDataSourceConnectionsByDataSourceIds(
      // Only data source saved object type needs to fetch data source connections, data connection type object not.
      dataSources.filter(ds => ds.type === _data_source_common__WEBPACK_IMPORTED_MODULE_10__["DATA_SOURCE_SAVED_OBJECT_TYPE"]).map(ds => ds.id), http);
    }
    return mergeDataSourcesWithConnections(dataSources, directQueryConnections, mode);
  } catch (error) {
    notifications === null || notifications === void 0 || notifications.toasts.addDanger(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.detail.dataSources.error.message', {
      defaultMessage: 'Cannot fetch direct query connections'
    }));
    return [];
  }
};
const getUseCase = (workspace, availableUseCases) => {
  if (!workspace.features) {
    return;
  }
  const useCaseId = getFirstUseCaseOfFeatureConfigs(workspace.features);
  return availableUseCases.find(useCase => useCase.id === useCaseId);
};

/***/ }),

/***/ "./public/workspace_client.ts":
/*!************************************!*\
  !*** ./public/workspace_client.ts ***!
  \************************************/
/*! exports provided: WorkspaceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceClient", function() { return WorkspaceClient; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_data_source_association_data_source_association__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/data_source_association/data_source_association */ "./public/components/data_source_association/data_source_association.tsx");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const WORKSPACES_API_BASE_URL = '/api/workspaces';
const join = (...uriComponents) => uriComponents.filter(comp => Boolean(comp)).map(encodeURIComponent).join('/');

/**
 * Workspaces is OpenSearchDashboards's visualize mechanism allowing admins to
 * organize related features
 *
 * @public
 */
class WorkspaceClient {
  constructor(http, workspaces) {
    _defineProperty(this, "http", void 0);
    _defineProperty(this, "workspaces", void 0);
    /**
     * Add a non-throw-error fetch method,
     * so that consumers only need to care about
     * if the success is false instead of wrapping the call with a try catch
     * and judge the error both in catch clause and if(!success) clause.
     */
    _defineProperty(this, "safeFetch", async (path, options) => {
      try {
        return await this.http.fetch(path, options);
      } catch (error) {
        if (error instanceof _core_public__WEBPACK_IMPORTED_MODULE_1__["HttpFetchError"]) {
          var _error$body, _error$body2;
          return {
            success: false,
            error: ((_error$body = error.body) === null || _error$body === void 0 ? void 0 : _error$body.message) || ((_error$body2 = error.body) === null || _error$body2 === void 0 ? void 0 : _error$body2.error) || error.message
          };
        }
        if (error instanceof Error) {
          return {
            success: false,
            error: error.message
          };
        }
        return {
          success: false,
          error: 'Unknown error'
        };
      }
    });
    this.http = http;
    this.workspaces = workspaces;
  }

  /**
   * Initialize workspace list:
   * 1. Retrieve the list of workspaces
   * 2. Change the initialized flag to true
   */
  async init() {
    await this.updateWorkspaceList();
    this.workspaces.initialized$.next(true);
  }
  /**
   * Filter empty sub path and join all of the sub paths into a standard http path
   *
   * @param path
   * @returns path
   */
  getPath(...path) {
    return [WORKSPACES_API_BASE_URL, join(...path)].filter(item => item).join('/');
  }

  /**
   * Fetch latest list of workspaces and update workspaceList$ to notify subscriptions
   */
  async updateWorkspaceList() {
    const result = await this.list({
      perPage: 999
    });
    if (result !== null && result !== void 0 && result.success) {
      const [resultWithWritePermission, resultWithOwnerPermission] = await Promise.all([this.list({
        perPage: 999,
        permissionModes: [_core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].LibraryWrite]
      }), this.list({
        perPage: 999,
        permissionModes: [_core_public__WEBPACK_IMPORTED_MODULE_1__["WorkspacePermissionMode"].Write]
      })]);
      if (resultWithWritePermission !== null && resultWithWritePermission !== void 0 && resultWithWritePermission.success && resultWithOwnerPermission !== null && resultWithOwnerPermission !== void 0 && resultWithOwnerPermission.success) {
        const workspaceIdsWithWritePermission = resultWithWritePermission.result.workspaces.map(workspace => workspace.id);
        const workspaceIdsWithOwnerPermission = resultWithOwnerPermission.result.workspaces.map(workspace => workspace.id);
        const workspaces = result.result.workspaces.map(workspace => ({
          ...workspace,
          readonly: !workspaceIdsWithWritePermission.includes(workspace.id),
          owner: workspaceIdsWithOwnerPermission.includes(workspace.id)
        }));
        this.workspaces.workspaceList$.next(workspaces);
      }
    } else {
      this.workspaces.workspaceList$.next([]);
    }
  }

  /**
   * This method will check if a valid workspace can be found by the given workspace id,
   * If so, perform a side effect of updating the core.workspace.currentWorkspaceId$.
   *
   * @param id workspace id
   * @returns {Promise<IResponse<null>>} result for this operation
   */
  async enterWorkspace(id) {
    const workspaceResp = await this.get(id);
    if (workspaceResp.success) {
      this.workspaces.currentWorkspaceId$.next(id);
      return {
        success: true,
        result: null
      };
    } else {
      return workspaceResp;
    }
  }

  /**
   * A bypass layer to get current workspace id
   */
  getCurrentWorkspaceId() {
    const currentWorkspaceId = this.workspaces.currentWorkspaceId$.getValue();
    if (!currentWorkspaceId) {
      return {
        success: false,
        error: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('workspace.error.notInWorkspace', {
          defaultMessage: 'You are not in any workspace yet.'
        })
      };
    }
    return {
      success: true,
      result: currentWorkspaceId
    };
  }

  /**
   * Do a find in the latest workspace list with current workspace id
   */
  async getCurrentWorkspace() {
    const currentWorkspaceIdResp = this.getCurrentWorkspaceId();
    if (currentWorkspaceIdResp.success) {
      const currentWorkspaceResp = await this.get(currentWorkspaceIdResp.result);
      return currentWorkspaceResp;
    } else {
      return currentWorkspaceIdResp;
    }
  }

  /**
   * Create a workspace
   *
   * @param attributes
   * @returns {Promise<IResponse<Pick<WorkspaceAttribute, 'id'>>>} id of the new created workspace
   */
  async create(attributes, settings) {
    const path = this.getPath();
    const result = await this.safeFetch(path, {
      method: 'POST',
      body: JSON.stringify({
        attributes,
        settings
      })
    });
    if (result.success) {
      await this.updateWorkspaceList();
    }
    return result;
  }

  /**
   * Deletes a workspace by workspace id
   *
   * @param id
   * @returns {Promise<IResponse<null>>} result for this operation
   */
  async delete(id) {
    const result = await this.safeFetch(this.getPath(id), {
      method: 'DELETE'
    });
    if (result.success) {
      // After deleting workspace, need to reset current workspace ID.
      this.workspaces.currentWorkspaceId$.next('');
      await this.updateWorkspaceList();
    }
    return result;
  }

  /**
   * Search for workspaces
   *
   * @param {object} [options={}]
   * @property {string} options.search
   * @property {string} options.searchFields - see OpenSearch Simple Query String
   *                                        Query field argument for more information
   * @property {integer} [options.page=1]
   * @property {integer} [options.perPage=20]
   * @property {array} options.fields
   * @property {string array} permissionModes
   * @returns A find result with workspaces matching the specified search.
   */
  list(options) {
    const path = this.getPath('_list');
    return this.safeFetch(path, {
      method: 'POST',
      body: JSON.stringify(options || {})
    });
  }

  /**
   * Fetches a single workspace by a workspace id
   *
   * @param {string} id
   * @returns {Promise<IResponse<WorkspaceAttributeWithPermission>>} The metadata of the workspace for the given id.
   */
  get(id) {
    const path = this.getPath(id);
    return this.safeFetch(path, {
      method: 'GET'
    });
  }

  /**
   * Updates a workspace
   *
   * @param {string} id
   * @param {object} attributes
   * @returns {Promise<IResponse<boolean>>} result for this operation
   */
  async update(id, attributes, settings) {
    const path = this.getPath(id);
    const body = {
      attributes,
      settings
    };
    const result = await this.safeFetch(path, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
    if (result.success) {
      await this.updateWorkspaceList();
    }
    return result;
  }

  /**
   * copy saved objects to target workspace
   *
   * @param {Array<{ id: string; type: string }>} objects
   * @param {string} targetWorkspace
   * @param {boolean} includeReferencesDeep
   * @returns {Promise<SavedObjectsImportResponse>} result for this operation
   */
  async copy(objects, targetWorkspace, includeReferencesDeep = true) {
    const path = this.getPath('_duplicate_saved_objects');
    const body = {
      objects,
      targetWorkspace,
      includeReferencesDeep
    };
    const result = await this.http.fetch(path, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return result;
  }
  async associate(savedObjects, workspaceId) {
    const path = this.getPath('_associate');
    const body = {
      savedObjects,
      workspaceId
    };
    const result = await this.safeFetch(path, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return result;
  }
  async dissociate(savedObjects, workspaceId) {
    const path = this.getPath('_dissociate');
    const body = {
      savedObjects,
      workspaceId
    };
    const result = await this.safeFetch(path, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return result;
  }
  ui() {
    return {
      DataSourceAssociation: _components_data_source_association_data_source_association__WEBPACK_IMPORTED_MODULE_2__["DataSourceAssociation"]
    };
  }
  stop() {
    this.workspaces.workspaceList$.unsubscribe();
    this.workspaces.currentWorkspaceId$.unsubscribe();
  }
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

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

/***/ "entry/core/public":
/*!******************************************!*\
  !*** @osd/bundleRef "entry/core/public" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('entry/core/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "entry/core/public/utils":
/*!************************************************!*\
  !*** @osd/bundleRef "entry/core/public/utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('entry/core/public/utils');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

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

/***/ "plugin/contentManagement/public":
/*!********************************************************!*\
  !*** @osd/bundleRef "plugin/contentManagement/public" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/contentManagement/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/dataSource/common":
/*!*************************************************!*\
  !*** @osd/bundleRef "plugin/dataSource/common" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/dataSource/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/dataSource/common/data_sources":
/*!**************************************************************!*\
  !*** @osd/bundleRef "plugin/dataSource/common/data_sources" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/dataSource/common/data_sources');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/dataSourceManagement/public":
/*!***********************************************************!*\
  !*** @osd/bundleRef "plugin/dataSourceManagement/public" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/dataSourceManagement/public');
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

/***/ "react-router-dom":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.ReactRouterDom" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactRouterDom;

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
//# sourceMappingURL=workspace.plugin.js.map