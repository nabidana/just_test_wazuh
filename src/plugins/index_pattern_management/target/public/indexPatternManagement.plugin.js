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
/******/ 		"indexPatternManagement": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "indexPatternManagement.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["indexPatternManagement_bundle_jsonpfunction"] = window["indexPatternManagement_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n", "",{"version":3,"sources":["webpack://./public/components/field_editor/components/field_format_editor/samples/samples.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,qCAAqC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldFormatEditor__samples audio{max-width:100%}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=indexPatternManagement!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=indexPatternManagement!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['indexPatternManagement']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_indexPatternManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=indexPatternManagement!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=indexPatternManagement!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_indexPatternManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_indexPatternManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/indexPatternManagement/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/index_pattern_management/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/bytes/bytes.ts":
/*!**********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/bytes/bytes.ts ***!
  \**********************************************************************************************/
/*! exports provided: BytesFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesFormatEditor", function() { return BytesFormatEditor; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./public/components/field_editor/components/field_format_editor/editors/number/index.ts");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
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



class BytesFormatEditor extends _number__WEBPACK_IMPORTED_MODULE_0__["NumberFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_1__["defaultState"],
      sampleInputs: [256, 1024, 5150000, 1990000000]
    });
  }
}
_defineProperty(BytesFormatEditor, "formatId", 'bytes');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/bytes/index.ts":
/*!**********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/bytes/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: BytesFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytes */ "./public/components/field_editor/components/field_format_editor/editors/bytes/bytes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BytesFormatEditor", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["BytesFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/color/color.tsx":
/*!***********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/color/color.tsx ***!
  \***********************************************************************************************/
/*! exports provided: ColorFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFormatEditor", function() { return ColorFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
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







class ColorFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_4__["DefaultFormatEditor"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "onColorChange", (newColorParams, index) => {
      const colors = [...this.props.formatParams.colors];
      colors[index] = {
        ...colors[index],
        ...newColorParams
      };
      this.onChange({
        colors
      });
    });
    _defineProperty(this, "addColor", () => {
      const colors = [...this.props.formatParams.colors];
      this.onChange({
        colors: [...colors, {
          ..._data_public__WEBPACK_IMPORTED_MODULE_5__["fieldFormats"].DEFAULT_CONVERTER_COLOR
        }]
      });
    });
    _defineProperty(this, "removeColor", index => {
      const colors = [...this.props.formatParams.colors];
      colors.splice(index, 1);
      this.onChange({
        colors
      });
    });
    this.onChange({
      fieldType: props.fieldType
    });
  }
  render() {
    const {
      formatParams,
      fieldType
    } = this.props;
    const items = formatParams.colors && formatParams.colors.length && formatParams.colors.map((color, index) => {
      return {
        ...color,
        index
      };
    }) || [];
    const columns = [fieldType === 'string' ? {
      field: 'regex',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.color.patternLabel",
        defaultMessage: "Pattern (regular expression)"
      }),
      render: (value, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
          value: value,
          onChange: e => {
            this.onColorChange({
              regex: e.target.value
            }, item.index);
          }
        });
      }
    } : {
      field: 'range',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.color.rangeLabel",
        defaultMessage: "Range (min:max)"
      }),
      render: (value, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
          value: value,
          onChange: e => {
            this.onColorChange({
              range: e.target.value
            }, item.index);
          }
        });
      }
    }, {
      field: 'text',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.color.textColorLabel",
        defaultMessage: "Text color"
      }),
      render: (color, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiColorPicker"], {
          color: color,
          onChange: newColor => {
            this.onColorChange({
              text: newColor
            }, item.index);
          }
        });
      }
    }, {
      field: 'background',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.color.backgroundLabel",
        defaultMessage: "Background color"
      }),
      render: (color, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiColorPicker"], {
          color: color,
          onChange: newColor => {
            this.onColorChange({
              background: newColor
            }, item.index);
          }
        });
      }
    }, {
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.color.exampleLabel",
        defaultMessage: "Example"
      }),
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            background: item.background,
            color: item.text
          }
        }, "123456");
      }
    }, {
      field: 'actions',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.color.actions', {
        defaultMessage: 'Actions'
      }),
      actions: [{
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.color.deleteAria', {
          defaultMessage: 'Delete'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.color.deleteTitle', {
          defaultMessage: 'Delete color format'
        }),
        onClick: item => {
          this.removeColor(item.index);
        },
        type: 'icon',
        icon: 'trash',
        color: 'danger',
        available: () => items.length > 1
      }]
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
      items: items,
      columns: columns
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
      iconType: "plusInCircle",
      size: "s",
      onClick: this.addColor
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "indexPatternManagement.color.addColorButton",
      defaultMessage: "Add color"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "l"
    }));
  }
}
_defineProperty(ColorFormatEditor, "formatId", 'color');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/color/index.ts":
/*!**********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/color/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: ColorFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./public/components/field_editor/components/field_format_editor/editors/color/color.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorFormatEditor", function() { return _color__WEBPACK_IMPORTED_MODULE_0__["ColorFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/date/date.tsx":
/*!*********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/date/date.tsx ***!
  \*********************************************************************************************/
/*! exports provided: DateFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatEditor", function() { return DateFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
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







class DateFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_4__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_4__["defaultState"],
      sampleInputs: [Date.now(), moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('year').valueOf(), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf('year').valueOf()]
    });
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples
    } = this.state;
    const defaultPattern = format.getParamDefaults().pattern;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.date.momentLabel",
        defaultMessage: "Moment.js format pattern (Default: {defaultPattern})",
        values: {
          defaultPattern: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCode"], null, defaultPattern)
        }
      }),
      isInvalid: !!error,
      error: error,
      helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
        target: "_blank",
        href: "https://momentjs.com/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.date.documentationLabel",
        defaultMessage: "Documentation"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
        type: "link"
      })))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFieldText"], {
      "data-test-subj": "dateEditorPattern",
      value: formatParams.pattern,
      placeholder: defaultPattern,
      onChange: e => {
        this.onChange({
          pattern: e.target.value
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_5__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(DateFormatEditor, "formatId", 'date');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/date/index.ts":
/*!*********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/date/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: DateFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./public/components/field_editor/components/field_format_editor/editors/date/date.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatEditor", function() { return _date__WEBPACK_IMPORTED_MODULE_0__["DateFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/date_nanos/date_nanos.tsx":
/*!*********************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/date_nanos/date_nanos.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: DateNanosFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateNanosFormatEditor", function() { return DateNanosFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
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






class DateNanosFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_3__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_3__["defaultState"],
      sampleInputs: ['2015-01-01T12:10:30.123456789Z', '2019-05-08T06:55:21.567891234Z', '2019-08-06T17:22:30.987654321Z']
    });
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples
    } = this.state;
    const defaultPattern = format.getParamDefaults().pattern;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.date.momentLabel",
        defaultMessage: "Moment.js format pattern (Default: {defaultPattern})",
        values: {
          defaultPattern: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, defaultPattern)
        }
      }),
      isInvalid: !!error,
      error: error,
      helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
        target: "_blank",
        href: "https://momentjs.com/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.date.documentationLabel",
        defaultMessage: "Documentation"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: "link"
      })))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      "data-test-subj": "dateEditorPattern",
      value: formatParams.pattern,
      placeholder: defaultPattern,
      onChange: e => {
        this.onChange({
          pattern: e.target.value
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_4__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(DateNanosFormatEditor, "formatId", 'date_nanos');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/date_nanos/index.ts":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/date_nanos/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: DateNanosFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_nanos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date_nanos */ "./public/components/field_editor/components/field_format_editor/editors/date_nanos/date_nanos.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateNanosFormatEditor", function() { return _date_nanos__WEBPACK_IMPORTED_MODULE_0__["DateNanosFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/default/default.tsx":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/default/default.tsx ***!
  \***************************************************************************************************/
/*! exports provided: convertSampleInput, defaultState, DefaultFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSampleInput", function() { return convertSampleInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatEditor", function() { return DefaultFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
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



const convertSampleInput = (converter, inputs) => {
  let error;
  let samples = [];
  try {
    samples = inputs.map(input => {
      return {
        input,
        output: converter(input)
      };
    });
  } catch (e) {
    error = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('indexPatternManagement.defaultErrorMessage', {
      defaultMessage: 'An error occurred while trying to use this format configuration: {message}',
      values: {
        message: e.message
      }
    });
  }
  return {
    error,
    samples
  };
};
const defaultState = {
  sampleInputs: [],
  sampleConverterType: 'text',
  error: undefined,
  samples: [],
  sampleInputsByType: {}
};
class DefaultFormatEditor extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", defaultState);
    _defineProperty(this, "onChange", (newParams = {}) => {
      const {
        onChange,
        formatParams
      } = this.props;
      onChange({
        ...formatParams,
        ...newParams
      });
    });
  }
  static getDerivedStateFromProps(nextProps, state) {
    const {
      format,
      formatParams,
      onError
    } = nextProps;
    const {
      sampleInputsByType,
      sampleInputs,
      sampleConverterType
    } = state;
    const converter = format.getConverterFor(sampleConverterType);
    const type = typeof sampleInputsByType === 'object' && formatParams.type;
    const inputs = type ? sampleInputsByType[formatParams.type] || [] : sampleInputs;
    const output = convertSampleInput(converter, inputs);
    onError(output.error);
    return output;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
}
_defineProperty(DefaultFormatEditor, "formatId", 'default');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts":
/*!************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/default/index.ts ***!
  \************************************************************************************************/
/*! exports provided: DefaultFormatEditor, defaultState, FormatEditorProps, FormatEditorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./public/components/field_editor/components/field_format_editor/editors/default/default.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatEditor", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["DefaultFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["defaultState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatEditorProps", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["FormatEditorProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatEditorState", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["FormatEditorState"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/duration/duration.tsx":
/*!*****************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/duration/duration.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: DurationFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationFormatEditor", function() { return DurationFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
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







class DurationFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_4__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_4__["defaultState"],
      sampleInputs: [-123, 1, 12, 123, 658, 1988, 3857, 123292, 923528271],
      hasDecimalError: false
    });
  }
  static getDerivedStateFromProps(nextProps, state) {
    const output = super.getDerivedStateFromProps(nextProps, state);
    let error = null;
    if (!nextProps.format.isHuman() && nextProps.formatParams.outputPrecision > 20) {
      error = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('indexPatternManagement.durationErrorMessage', {
        defaultMessage: 'Decimal places must be between 0 and 20'
      });
      nextProps.onError(error);
      return {
        ...output,
        error,
        hasDecimalError: true
      };
    }
    return {
      ...output,
      hasDecimalError: false
    };
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples,
      hasDecimalError
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.duration.inputFormatLabel",
        defaultMessage: "Input format"
      }),
      isInvalid: !!error,
      error: hasDecimalError ? null : error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSelect"], {
      value: formatParams.inputFormat,
      options: format.type.inputFormats.map(fmt => {
        return {
          value: fmt.kind,
          text: fmt.text
        };
      }),
      onChange: e => {
        this.onChange({
          inputFormat: e.target.value
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.duration.outputFormatLabel",
        defaultMessage: "Output format"
      }),
      isInvalid: !!error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSelect"], {
      value: formatParams.outputFormat,
      options: format.type.outputFormats.map(fmt => {
        return {
          value: fmt.method,
          text: fmt.text
        };
      }),
      onChange: e => {
        this.onChange({
          outputFormat: e.target.value
        });
      },
      isInvalid: !!error
    })), !format.isHuman() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.duration.decimalPlacesLabel",
        defaultMessage: "Decimal places"
      }),
      isInvalid: !!error,
      error: hasDecimalError ? error : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
      value: formatParams.outputPrecision,
      min: 0,
      max: 20,
      onChange: e => {
        this.onChange({
          outputPrecision: e.target.value ? Number(e.target.value) : null
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.duration.showSuffixLabel",
        defaultMessage: "Show suffix"
      }),
      checked: Boolean(formatParams.showSuffix),
      onChange: e => {
        this.onChange({
          showSuffix: !formatParams.showSuffix
        });
      }
    }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_5__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(DurationFormatEditor, "formatId", 'duration');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/duration/index.tsx":
/*!**************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/duration/index.tsx ***!
  \**************************************************************************************************/
/*! exports provided: DurationFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration */ "./public/components/field_editor/components/field_format_editor/editors/duration/duration.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationFormatEditor", function() { return _duration__WEBPACK_IMPORTED_MODULE_0__["DurationFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/index.ts":
/*!****************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/index.ts ***!
  \****************************************************************************************/
/*! exports provided: DefaultFormatEditor, BytesFormatEditor, ColorFormatEditor, DateFormatEditor, DateNanosFormatEditor, DurationFormatEditor, NumberFormatEditor, PercentFormatEditor, StaticLookupFormatEditor, StringFormatEditor, TruncateFormatEditor, UrlFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatEditor", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["DefaultFormatEditor"]; });

/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytes */ "./public/components/field_editor/components/field_format_editor/editors/bytes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BytesFormatEditor", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["BytesFormatEditor"]; });

/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./public/components/field_editor/components/field_format_editor/editors/color/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorFormatEditor", function() { return _color__WEBPACK_IMPORTED_MODULE_2__["ColorFormatEditor"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./public/components/field_editor/components/field_format_editor/editors/date/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatEditor", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["DateFormatEditor"]; });

/* harmony import */ var _date_nanos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date_nanos */ "./public/components/field_editor/components/field_format_editor/editors/date_nanos/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateNanosFormatEditor", function() { return _date_nanos__WEBPACK_IMPORTED_MODULE_4__["DateNanosFormatEditor"]; });

/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duration */ "./public/components/field_editor/components/field_format_editor/editors/duration/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationFormatEditor", function() { return _duration__WEBPACK_IMPORTED_MODULE_5__["DurationFormatEditor"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number */ "./public/components/field_editor/components/field_format_editor/editors/number/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberFormatEditor", function() { return _number__WEBPACK_IMPORTED_MODULE_6__["NumberFormatEditor"]; });

/* harmony import */ var _percent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./percent */ "./public/components/field_editor/components/field_format_editor/editors/percent/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentFormatEditor", function() { return _percent__WEBPACK_IMPORTED_MODULE_7__["PercentFormatEditor"]; });

/* harmony import */ var _static_lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static_lookup */ "./public/components/field_editor/components/field_format_editor/editors/static_lookup/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticLookupFormatEditor", function() { return _static_lookup__WEBPACK_IMPORTED_MODULE_8__["StaticLookupFormatEditor"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./public/components/field_editor/components/field_format_editor/editors/string/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatEditor", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["StringFormatEditor"]; });

/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./truncate */ "./public/components/field_editor/components/field_format_editor/editors/truncate/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateFormatEditor", function() { return _truncate__WEBPACK_IMPORTED_MODULE_10__["TruncateFormatEditor"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./url */ "./public/components/field_editor/components/field_format_editor/editors/url/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlFormatEditor", function() { return _url__WEBPACK_IMPORTED_MODULE_11__["UrlFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/number/index.ts":
/*!***********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/number/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: NumberFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./public/components/field_editor/components/field_format_editor/editors/number/number.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberFormatEditor", function() { return _number__WEBPACK_IMPORTED_MODULE_0__["NumberFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/number/number.tsx":
/*!*************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/number/number.tsx ***!
  \*************************************************************************************************/
/*! exports provided: NumberFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatEditor", function() { return NumberFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
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






class NumberFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_3__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_3__["defaultState"],
      sampleInputs: [10000, 12.345678, -1, -999, 0.52]
    });
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples
    } = this.state;
    const defaultPattern = format.getParamDefaults().pattern;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.number.numeralLabel",
        defaultMessage: "Numeral.js format pattern (Default: {defaultPattern})",
        values: {
          defaultPattern: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, defaultPattern)
        }
      }),
      helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
        target: "_blank",
        href: "https://adamwdraper.github.io/Numeral-js/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.number.documentationLabel",
        defaultMessage: "Documentation"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: "link"
      }))),
      isInvalid: !!error,
      error: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      value: formatParams.pattern,
      placeholder: defaultPattern,
      onChange: e => {
        this.onChange({
          pattern: e.target.value
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_4__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(NumberFormatEditor, "formatId", 'number');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/percent/index.ts":
/*!************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/percent/index.ts ***!
  \************************************************************************************************/
/*! exports provided: PercentFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _percent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./percent */ "./public/components/field_editor/components/field_format_editor/editors/percent/percent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentFormatEditor", function() { return _percent__WEBPACK_IMPORTED_MODULE_0__["PercentFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/percent/percent.tsx":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/percent/percent.tsx ***!
  \***************************************************************************************************/
/*! exports provided: PercentFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentFormatEditor", function() { return PercentFormatEditor; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ "./public/components/field_editor/components/field_format_editor/editors/number/index.ts");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
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



class PercentFormatEditor extends _number__WEBPACK_IMPORTED_MODULE_0__["NumberFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_1__["defaultState"],
      sampleInputs: [0.1, 0.99999, 1, 100, 1000]
    });
  }
}
_defineProperty(PercentFormatEditor, "formatId", 'percent');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/static_lookup/index.ts":
/*!******************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/static_lookup/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: StaticLookupFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_lookup */ "./public/components/field_editor/components/field_format_editor/editors/static_lookup/static_lookup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticLookupFormatEditor", function() { return _static_lookup__WEBPACK_IMPORTED_MODULE_0__["StaticLookupFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/static_lookup/static_lookup.tsx":
/*!***************************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/static_lookup/static_lookup.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: StaticLookupFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticLookupFormatEditor", function() { return StaticLookupFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
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






class StaticLookupFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_4__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "onLookupChange", (newLookupParams, index) => {
      const lookupEntries = [...this.props.formatParams.lookupEntries];
      lookupEntries[index] = {
        ...lookupEntries[index],
        ...newLookupParams
      };
      this.onChange({
        lookupEntries
      });
    });
    _defineProperty(this, "addLookup", () => {
      const lookupEntries = [...this.props.formatParams.lookupEntries];
      this.onChange({
        lookupEntries: [...lookupEntries, {}]
      });
    });
    _defineProperty(this, "removeLookup", index => {
      const lookupEntries = [...this.props.formatParams.lookupEntries];
      lookupEntries.splice(index, 1);
      this.onChange({
        lookupEntries
      });
    });
  }
  render() {
    const {
      formatParams
    } = this.props;
    const items = formatParams.lookupEntries && formatParams.lookupEntries.length && formatParams.lookupEntries.map((lookup, index) => {
      return {
        ...lookup,
        index
      };
    }) || [];
    const columns = [{
      field: 'key',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.staticLookup.keyLabel",
        defaultMessage: "Key"
      }),
      render: (value, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
          value: value || '',
          onChange: e => {
            this.onLookupChange({
              key: e.target.value
            }, item.index);
          }
        });
      }
    }, {
      field: 'value',
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.staticLookup.valueLabel",
        defaultMessage: "Value"
      }),
      render: (value, item) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
          value: value || '',
          onChange: e => {
            this.onLookupChange({
              value: e.target.value
            }, item.index);
          }
        });
      }
    }, {
      field: 'actions',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.staticLookup.actions', {
        defaultMessage: 'actions'
      }),
      actions: [{
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.staticLookup.deleteAria', {
          defaultMessage: 'Delete'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.staticLookup.deleteTitle', {
          defaultMessage: 'Delete entry'
        }),
        onClick: item => {
          this.removeLookup(item.index);
        },
        type: 'icon',
        icon: 'trash',
        color: 'danger',
        available: () => items.length > 1
      }],
      width: '30px'
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
      items: items,
      columns: columns,
      style: {
        maxWidth: '400px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
      iconType: "plusInCircle",
      size: "s",
      onClick: this.addLookup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "indexPatternManagement.staticLookup.addEntryButton",
      defaultMessage: "Add entry"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "l"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.staticLookup.unknownKeyLabel",
        defaultMessage: "Value for unknown key"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      value: formatParams.unknownKeyValue || '',
      placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.staticLookup.leaveBlankPlaceholder', {
        defaultMessage: 'Leave blank to keep value as-is'
      }),
      onChange: e => {
        this.onChange({
          unknownKeyValue: e.target.value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }));
  }
}
_defineProperty(StaticLookupFormatEditor, "formatId", 'static_lookup');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/string/index.ts":
/*!***********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/string/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: StringFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./public/components/field_editor/components/field_format_editor/editors/string/string.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatEditor", function() { return _string__WEBPACK_IMPORTED_MODULE_0__["StringFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/string/string.tsx":
/*!*************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/string/string.tsx ***!
  \*************************************************************************************************/
/*! exports provided: StringFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFormatEditor", function() { return StringFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
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






class StringFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_3__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_3__["defaultState"],
      sampleInputs: ['A Quick Brown Fox.', 'STAY CALM!', 'com.organizations.project.ClassName', 'hostname.net', 'SGVsbG8gd29ybGQ=', '%EC%95%88%EB%85%95%20%ED%82%A4%EB%B0%94%EB%82%98']
    });
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.string.transformLabel",
        defaultMessage: "Transform"
      }),
      isInvalid: !!error,
      error: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSelect"], {
      "data-test-subj": "stringEditorTransform",
      defaultValue: formatParams.transform,
      options: (format.type.transformOptions || []).map(option => {
        return {
          value: option.kind,
          text: option.text
        };
      }),
      onChange: e => {
        this.onChange({
          transform: e.target.value
        });
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_4__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(StringFormatEditor, "formatId", 'string');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/truncate/index.ts":
/*!*************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/truncate/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: TruncateFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate */ "./public/components/field_editor/components/field_format_editor/editors/truncate/truncate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateFormatEditor", function() { return _truncate__WEBPACK_IMPORTED_MODULE_0__["TruncateFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/truncate/sample.ts":
/*!**************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/truncate/sample.ts ***!
  \**************************************************************************************************/
/*! exports provided: sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
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

const sample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae sem consequat, sollicitudin enim a, feugiat mi. Curabitur congue laoreet elit, eu dictum nisi commodo ut. Nullam congue sem a blandit commodo. Suspendisse eleifend sodales leo ac hendrerit. Nam fringilla tempor fermentum. Ut tristique pharetra sapien sit amet pharetra. Ut turpis massa, viverra id erat quis, fringilla vehicula risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tincidunt gravida gravida. Praesent et ligula viverra, semper lacus in, tristique elit. Cras ac eleifend diam. Nulla facilisi. Morbi id sagittis magna. Sed fringilla, magna in suscipit aliquet."; // eslint-disable-line

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/truncate/truncate.tsx":
/*!*****************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/truncate/truncate.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: TruncateFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateFormatEditor", function() { return TruncateFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample */ "./public/components/field_editor/components/field_format_editor/editors/truncate/sample.ts");
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







class TruncateFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_3__["DefaultFormatEditor"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      ..._default__WEBPACK_IMPORTED_MODULE_3__["defaultState"],
      sampleInputs: [_sample__WEBPACK_IMPORTED_MODULE_5__["sample"]]
    });
  }
  render() {
    const {
      formatParams,
      onError
    } = this.props;
    const {
      error,
      samples
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.truncate.lengthLabel",
        defaultMessage: "Field length"
      }),
      isInvalid: !!error,
      error: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
      defaultValue: formatParams.fieldLength,
      min: 1,
      onChange: e => {
        if (e.target.checkValidity()) {
          this.onChange({
            fieldLength: e.target.value ? Number(e.target.value) : null
          });
        } else {
          onError(e.target.validationMessage);
        }
      },
      isInvalid: !!error
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_4__["FormatEditorSamples"], {
      samples: samples
    }));
  }
}
_defineProperty(TruncateFormatEditor, "formatId", 'truncate');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/url/index.ts":
/*!********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/url/index.ts ***!
  \********************************************************************************************/
/*! exports provided: UrlFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./public/components/field_editor/components/field_format_editor/editors/url/url.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlFormatEditor", function() { return _url__WEBPACK_IMPORTED_MODULE_0__["UrlFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/editors/url/label_template_flyout.tsx":
/*!*************************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/url/label_template_flyout.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: LabelTemplateFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelTemplateFlyout", function() { return LabelTemplateFlyout; });
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





const items = [{
  input: 1234,
  urlTemplate: 'http://company.net/profiles?user_id={{value}}',
  labelTemplate: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.example.idLabel', {
    defaultMessage: 'User #{value}',
    values: {
      value: '{{value}}'
    }
  }),
  output: '<a href="http://company.net/profiles?user_id=1234">' + _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.example.output.idLabel', {
    defaultMessage: 'User'
  }) + ' #1234</a>'
}, {
  input: '/assets/main.css',
  urlTemplate: 'http://site.com{{rawValue}}',
  labelTemplate: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.example.pathLabel', {
    defaultMessage: 'View Asset'
  }),
  output: '<a href="http://site.com/assets/main.css">' + _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.example.output.pathLabel', {
    defaultMessage: 'View Asset'
  }) + '</a>'
}];
const LabelTemplateFlyout = ({
  isVisible = false,
  onClose = () => {}
}) => {
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.labelTemplateHeader",
    defaultMessage: "Label Template"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.labelTemplateLabel",
    defaultMessage: "If the URL in this field is large, it might be useful to provide an alternate template for the text version of the URL. This will be displayed instead of the url, but will still link to the URL. The format is a string which uses double curly brace notation {doubleCurlyBraces} to inject values. The following values can be accessed:",
    values: {
      doubleCurlyBraces: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, '{{ }}')
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, "value"), " \u2014\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.labelTemplate.valueLabel",
    defaultMessage: "The fields value"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, "url"), " \u2014\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.labelTemplate.urlLabel",
    defaultMessage: "The formatted URL"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.labelTemplate.examplesHeader",
    defaultMessage: "Examples"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
    items: items,
    columns: [{
      field: 'input',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.inputHeader', {
        defaultMessage: 'Input'
      }),
      width: '160px'
    }, {
      field: 'urlTemplate',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.urlHeader', {
        defaultMessage: 'URL Template'
      })
    }, {
      field: 'labelTemplate',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.labelHeader', {
        defaultMessage: 'Label Template'
      })
    }, {
      field: 'output',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.labelTemplate.outputHeader', {
        defaultMessage: 'Output'
      }),
      render: value => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          /*
           * Justification for dangerouslySetInnerHTML:
           * Example output produces anchor link.
           */
          dangerouslySetInnerHTML: {
            __html: value
          } // eslint-disable-line react/no-danger
        });
      }
    }]
  })))) : null;
};
LabelTemplateFlyout.displayName = 'LabelTemplateFlyout';

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/url/url.tsx":
/*!*******************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/url/url.tsx ***!
  \*******************************************************************************************/
/*! exports provided: UrlFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlFormatEditor", function() { return UrlFormatEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./public/components/field_editor/components/field_format_editor/editors/default/index.ts");
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../samples */ "./public/components/field_editor/components/field_format_editor/samples/index.ts");
/* harmony import */ var _label_template_flyout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label_template_flyout */ "./public/components/field_editor/components/field_format_editor/editors/url/label_template_flyout.tsx");
/* harmony import */ var _url_template_flyout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url_template_flyout */ "./public/components/field_editor/components/field_format_editor/editors/url/url_template_flyout.tsx");
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








class UrlFormatEditor extends _default__WEBPACK_IMPORTED_MODULE_3__["DefaultFormatEditor"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "iconPattern", void 0);
    _defineProperty(this, "sanitizeNumericValue", val => {
      const sanitizedValue = parseInt(val, 10);
      if (isNaN(sanitizedValue)) {
        return '';
      }
      return sanitizedValue;
    });
    _defineProperty(this, "onTypeChange", newType => {
      const {
        urlTemplate,
        width,
        height
      } = this.props.formatParams;
      const params = {
        type: newType
      };
      if (newType === 'img') {
        params.width = width;
        params.height = height;
        if (!urlTemplate) {
          params.urlTemplate = this.iconPattern;
        }
      } else if (newType !== 'img' && urlTemplate === this.iconPattern) {
        params.urlTemplate = undefined;
      }
      this.onChange(params);
    });
    _defineProperty(this, "showUrlTemplateHelp", () => {
      this.setState({
        showLabelTemplateHelp: false,
        showUrlTemplateHelp: true
      });
    });
    _defineProperty(this, "hideUrlTemplateHelp", () => {
      this.setState({
        showUrlTemplateHelp: false
      });
    });
    _defineProperty(this, "showLabelTemplateHelp", () => {
      this.setState({
        showLabelTemplateHelp: true,
        showUrlTemplateHelp: false
      });
    });
    _defineProperty(this, "hideLabelTemplateHelp", () => {
      this.setState({
        showLabelTemplateHelp: false
      });
    });
    _defineProperty(this, "renderWidthHeightParameters", () => {
      const width = this.sanitizeNumericValue(this.props.formatParams.width);
      const height = this.sanitizeNumericValue(this.props.formatParams.height);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "indexPatternManagement.url.widthLabel",
          defaultMessage: "Width"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
        "data-test-subj": "urlEditorWidth",
        value: width,
        onChange: e => {
          this.onChange({
            width: e.target.value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "indexPatternManagement.url.heightLabel",
          defaultMessage: "Height"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
        "data-test-subj": "urlEditorHeight",
        value: height,
        onChange: e => {
          this.onChange({
            height: e.target.value
          });
        }
      })));
    });
    this.iconPattern = `/plugins/indexPatternManagement/assets/icons/{{value}}.png`;
    this.state = {
      ...this.state,
      sampleInputsByType: {
        a: ['john', '/some/pathname/asset.png', 1234],
        img: ['go', 'stop', ['de', 'ne', 'us', 'ni'], 'cv'],
        audio: ['hello.mp3']
      },
      sampleConverterType: 'html',
      showUrlTemplateHelp: false,
      showLabelTemplateHelp: false
    };
  }
  render() {
    const {
      format,
      formatParams
    } = this.props;
    const {
      error,
      samples,
      sampleConverterType
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_template_flyout__WEBPACK_IMPORTED_MODULE_5__["LabelTemplateFlyout"], {
      isVisible: this.state.showLabelTemplateHelp,
      onClose: this.hideLabelTemplateHelp
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_url_template_flyout__WEBPACK_IMPORTED_MODULE_6__["UrlTemplateFlyout"], {
      isVisible: this.state.showUrlTemplateHelp,
      onClose: this.hideUrlTemplateHelp
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.typeLabel",
        defaultMessage: "Type"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSelect"], {
      "data-test-subj": "urlEditorType",
      value: formatParams.type,
      options: format.type.urlTypes.map(type => {
        return {
          value: type.kind,
          text: type.text
        };
      }),
      onChange: e => {
        this.onTypeChange(e.target.value);
      }
    })), formatParams.type === 'a' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.openTabLabel",
        defaultMessage: "Open in a new tab"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      label: formatParams.openLinkInCurrentTab ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.offLabel",
        defaultMessage: "Off"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.onLabel",
        defaultMessage: "On"
      }),
      checked: !formatParams.openLinkInCurrentTab,
      onChange: e => {
        this.onChange({
          openLinkInCurrentTab: !e.target.checked
        });
      }
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.urlTemplateLabel",
        defaultMessage: "URL template"
      }),
      helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
        onClick: this.showUrlTemplateHelp
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.template.helpLinkText",
        defaultMessage: "URL template help"
      })),
      isInvalid: !!error,
      error: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      "data-test-subj": "urlEditorUrlTemplate",
      value: formatParams.urlTemplate || '',
      onChange: e => {
        this.onChange({
          urlTemplate: e.target.value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.labelTemplateLabel",
        defaultMessage: "Label template"
      }),
      helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
        onClick: this.showLabelTemplateHelp
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "indexPatternManagement.url.labelTemplateHelpText",
        defaultMessage: "Label template help"
      })),
      isInvalid: !!error,
      error: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      "data-test-subj": "urlEditorLabelTemplate",
      value: formatParams.labelTemplate || '',
      onChange: e => {
        this.onChange({
          labelTemplate: e.target.value
        });
      }
    })), formatParams.type === 'img' && this.renderWidthHeightParameters(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_samples__WEBPACK_IMPORTED_MODULE_4__["FormatEditorSamples"], {
      samples: samples,
      sampleType: sampleConverterType
    }));
  }
}
_defineProperty(UrlFormatEditor, "formatId", 'url');

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/editors/url/url_template_flyout.tsx":
/*!***********************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/editors/url/url_template_flyout.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: UrlTemplateFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlTemplateFlyout", function() { return UrlTemplateFlyout; });
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





const UrlTemplateFlyout = ({
  isVisible = false,
  onClose = () => {}
}) => {
  return isVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.urlTemplateHeader",
    defaultMessage: "Url Template"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.urlTemplateLabel.fieldDetail",
    defaultMessage: "If a field only contains part of a URL then a {strongUrlTemplate} can be used to format the value as a complete URL. The format is a string which uses double curly brace notation {doubleCurlyBraces} to inject values. The following values can be accessed:",
    values: {
      doubleCurlyBraces: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, '{{ }}'),
      strongUrlTemplate: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "indexPatternManagement.urlTemplateLabel.strongUrlTemplateLabel",
        defaultMessage: "Url Template"
      }))
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, "value"), " \u2014\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.urlTemplate.valueLabel",
    defaultMessage: "The URI-escaped value"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, "rawValue"), " \u2014\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.urlTemplate.rawValueLabel",
    defaultMessage: "The unescaped value"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "indexPatternManagement.urlTemplate.examplesHeader",
    defaultMessage: "Examples"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
    items: [{
      input: 1234,
      template: 'http://company.net/profiles?user_id={{value}}',
      output: 'http://company.net/profiles?user_id=1234'
    }, {
      input: 'users/admin',
      template: 'http://company.net/groups?id={{value}}',
      output: 'http://company.net/groups?id=users%2Fadmin'
    }, {
      input: '/images/favicon.ico',
      template: 'http://www.site.com{{rawValue}}',
      output: 'http://www.site.com/images/favicon.ico'
    }],
    columns: [{
      field: 'input',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.urlTemplate.inputHeader', {
        defaultMessage: 'Input'
      }),
      width: '160px'
    }, {
      field: 'template',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.urlTemplate.templateHeader', {
        defaultMessage: 'Template'
      })
    }, {
      field: 'output',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('indexPatternManagement.urlTemplate.outputHeader', {
        defaultMessage: 'Output'
      })
    }]
  })))) : null;
};

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/field_format_editor.tsx":
/*!***********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/field_format_editor.tsx ***!
  \***********************************************************************************************/
/*! exports provided: FieldFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFormatEditor", function() { return FieldFormatEditor; });
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


class FieldFormatEditor extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      EditorComponent: props.fieldFormatEditors.getById(props.fieldFormatId)
    };
  }
  static getDerivedStateFromProps(nextProps) {
    return {
      EditorComponent: nextProps.fieldFormatEditors.getById(nextProps.fieldFormatId) || null
    };
  }
  render() {
    const {
      EditorComponent
    } = this.state;
    const {
      fieldType,
      fieldFormat,
      fieldFormatParams,
      onChange,
      onError
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, EditorComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorComponent, {
      fieldType: fieldType,
      format: fieldFormat,
      formatParams: fieldFormatParams,
      onChange: onChange,
      onError: onError
    }) : null);
  }
}

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/index.ts":
/*!********************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/index.ts ***!
  \********************************************************************************/
/*! exports provided: FieldFormatEditor, DefaultFormatEditor, BytesFormatEditor, ColorFormatEditor, DateFormatEditor, DateNanosFormatEditor, DurationFormatEditor, NumberFormatEditor, PercentFormatEditor, StaticLookupFormatEditor, StringFormatEditor, TruncateFormatEditor, UrlFormatEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_format_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_format_editor */ "./public/components/field_editor/components/field_format_editor/field_format_editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldFormatEditor", function() { return _field_format_editor__WEBPACK_IMPORTED_MODULE_0__["FieldFormatEditor"]; });

/* harmony import */ var _editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editors */ "./public/components/field_editor/components/field_format_editor/editors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["DefaultFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BytesFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["BytesFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["ColorFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["DateFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateNanosFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["DateNanosFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["DurationFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["NumberFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["PercentFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticLookupFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["StaticLookupFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["StringFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["TruncateFormatEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlFormatEditor", function() { return _editors__WEBPACK_IMPORTED_MODULE_1__["UrlFormatEditor"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/index.ts":
/*!****************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/index.ts ***!
  \****************************************************************************************/
/*! exports provided: FormatEditorSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _samples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples */ "./public/components/field_editor/components/field_format_editor/samples/samples.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatEditorSamples", function() { return _samples__WEBPACK_IMPORTED_MODULE_0__["FormatEditorSamples"]; });

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss":
/*!********************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./samples.scss?v7dark */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./samples.scss?v7light */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./samples.scss?v8dark */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./samples.scss?v8light */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./samples.scss?v9dark */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./samples.scss?v9light */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light");
}

/***/ }),

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./samples.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7dark");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light":
/*!****************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./samples.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v7light");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./samples.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8dark");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light":
/*!****************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./samples.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v8light");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark":
/*!***************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./samples.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9dark");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light":
/*!****************************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./samples.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/field_editor/components/field_format_editor/samples/samples.scss?v9light");

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

/***/ "./public/components/field_editor/components/field_format_editor/samples/samples.tsx":
/*!*******************************************************************************************!*\
  !*** ./public/components/field_editor/components/field_format_editor/samples/samples.tsx ***!
  \*******************************************************************************************/
/*! exports provided: FormatEditorSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatEditorSamples", function() { return FormatEditorSamples; });
/* harmony import */ var _samples_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples.scss */ "./public/components/field_editor/components/field_format_editor/samples/samples.scss");
/* harmony import */ var _samples_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_samples_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
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






class FormatEditorSamples extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  render() {
    const {
      samples,
      sampleType
    } = this.props;
    const columns = [{
      field: 'input',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('indexPatternManagement.samples.inputHeader', {
        defaultMessage: 'Input'
      }),
      render: input => {
        return typeof input === 'object' ? JSON.stringify(input) : input;
      }
    }, {
      field: 'output',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('indexPatternManagement.samples.outputHeader', {
        defaultMessage: 'Output'
      }),
      render: output => {
        return sampleType === 'html' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          /*
           * Justification for dangerouslySetInnerHTML:
           * Sample output may contain HTML tags, like URL image/audio format.
           */
          dangerouslySetInnerHTML: {
            __html: output
          } // eslint-disable-line react/no-danger
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, output);
      }
    }];
    return samples.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "indexPatternManagement.samplesHeader",
        defaultMessage: "Samples"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBasicTable"], {
      className: "osdFieldFormatEditor__samples",
      compressed: true,
      items: samples,
      columns: columns
    })) : null;
  }
}
_defineProperty(FormatEditorSamples, "defaultProps", {
  sampleType: 'text'
});

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: IndexPatternManagementSetup, IndexPatternManagementStart, plugin, IndexPatternCreationConfig, IndexPatternCreationOption, IndexPatternListConfig, DefaultFormatEditor, MlCardState, IndexPatternTableColumn, IndexPatternTableRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternManagementSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["IndexPatternManagementSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternManagementStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["IndexPatternManagementStart"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./public/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationConfig", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["IndexPatternCreationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationOption", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["IndexPatternCreationOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListConfig", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["IndexPatternListConfig"]; });

/* harmony import */ var _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/field_editor/components/field_format_editor */ "./public/components/field_editor/components/field_format_editor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFormatEditor", function() { return _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_2__["DefaultFormatEditor"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MlCardState", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["MlCardState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternTableColumn", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["IndexPatternTableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternTableRecord", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["IndexPatternTableRecord"]; });

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
 * Management Plugin - public
 *
 * This is the entry point for the entire client-side public contract of the plugin.
 * If something is not explicitly exported here, you can safely assume it is private
 * to the plugin and not considered stable.
 *
 * All stateful contracts will be injected by the platform at runtime, and are defined
 * in the setup/start interfaces in `plugin.ts`. The remaining items exported here are
 * either types, or static code.
 */



function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["IndexPatternManagementPlugin"](initializerContext);
}




/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: IndexPatternManagementPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternManagementPlugin", function() { return IndexPatternManagementPlugin; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./public/service/index.ts");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
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





const sectionsHeader = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.indexPattern.sectionsHeader', {
  defaultMessage: 'Index patterns'
});

/**
 * The id is used in src/plugins/workspace/public/plugin.ts and please change that accordingly if you change the id here.
 */
const IPM_APP_ID = 'indexPatterns';
class IndexPatternManagementPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "indexPatternManagementService", new _service__WEBPACK_IMPORTED_MODULE_1__["IndexPatternManagementService"]());
  }
  setup(core, dependencies) {
    const {
      urlForwarding,
      management,
      dataSource
    } = dependencies;
    const opensearchDashboardsSection = management.sections.section.opensearchDashboards;
    if (!opensearchDashboardsSection) {
      throw new Error('`opensearchDashboards` management section not found.');
    }
    const newAppPath = `management/opensearch-dashboards/${IPM_APP_ID}`;
    const legacyPatternsPath = 'management/opensearch-dashboards/index_patterns';
    urlForwarding.forwardApp('management/opensearch-dashboards/index_pattern', newAppPath, path => '/create');
    urlForwarding.forwardApp(legacyPatternsPath, newAppPath, path => {
      const pathInApp = path.substr(legacyPatternsPath.length + 1);
      return pathInApp && `/patterns${pathInApp}`;
    });
    opensearchDashboardsSection.registerApp({
      id: IPM_APP_ID,
      title: sectionsHeader,
      order: 0,
      mount: async params => {
        if (core.chrome.navGroup.getNavGroupEnabled()) {
          const [coreStart] = await core.getStartServices();
          const urlForStandardIPMApp = new URL(coreStart.application.getUrlForApp(IPM_APP_ID), window.location.href);
          const targetUrl = new URL(window.location.href);
          targetUrl.pathname = urlForStandardIPMApp.pathname;
          coreStart.application.navigateToUrl(targetUrl.toString());
          return () => {};
        }
        const {
          mountManagementSection
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./management_app */ "./public/management_app/index.tsx"));
        return mountManagementSection(core.getStartServices, params, () => this.indexPatternManagementService.environmentService.getEnvironment().ml(), dataSource);
      }
    });
    core.application.register({
      id: IPM_APP_ID,
      title: sectionsHeader,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.indexPattern.description', {
        defaultMessage: 'Manage index patterns to retrieve data from OpenSearch.'
      }),
      status: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_2__["AppStatus"].accessible : _core_public__WEBPACK_IMPORTED_MODULE_2__["AppStatus"].inaccessible,
      mount: async params => {
        const {
          mountManagementSection
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./management_app */ "./public/management_app/index.tsx"));
        const [coreStart] = await core.getStartServices();
        return mountManagementSection(core.getStartServices, {
          ...params,
          basePath: core.http.basePath.get(),
          setBreadcrumbs: breadCrumbs => coreStart.chrome.setBreadcrumbs(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["getScopedBreadcrumbs"])(breadCrumbs, params.history)),
          wrapInPage: true
        }, () => this.indexPatternManagementService.environmentService.getEnvironment().ml(), dataSource);
      }
    });
    core.getStartServices().then(([coreStart]) => {
      /**
       * The `capabilities.workspaces.enabled` indicates
       * if workspace feature flag is turned on or not and
       * the global index pattern management page should only be registered
       * to settings and setup when workspace is turned off,
       */
      if (!coreStart.application.capabilities.workspaces.enabled) {
        core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_NAV_GROUPS"].settingsAndSetup, [{
          id: IPM_APP_ID,
          title: sectionsHeader,
          order: 400
        }]);
      }
    });
    return this.indexPatternManagementService.setup({
      httpClient: core.http
    });
  }
  start(core, plugins) {
    return this.indexPatternManagementService.start();
  }
  stop() {
    this.indexPatternManagementService.stop();
  }
}

/***/ }),

/***/ "./public/service/column_service/column_service.ts":
/*!*********************************************************!*\
  !*** ./public/service/column_service/column_service.ts ***!
  \*********************************************************/
/*! exports provided: IndexPatternTableColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternTableColumnService", function() { return IndexPatternTableColumnService; });
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

class IndexPatternTableColumnService {
  constructor() {
    _defineProperty(this, "columns", new Map());
  }
  setup() {
    return {
      register: column => {
        if (this.columns.has(column.id)) {
          throw new Error(`Index Pattern Table Column with id '${column.id}' already exists`);
        }
        this.columns.set(column.id, column);
      }
    };
  }
  start() {
    return {
      getAll: () => [...this.columns.values()]
    };
  }
}

/***/ }),

/***/ "./public/service/column_service/index.ts":
/*!************************************************!*\
  !*** ./public/service/column_service/index.ts ***!
  \************************************************/
/*! exports provided: IndexPatternTableColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column_service */ "./public/service/column_service/column_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternTableColumnService", function() { return _column_service__WEBPACK_IMPORTED_MODULE_0__["IndexPatternTableColumnService"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/service/creation/config.ts":
/*!*******************************************!*\
  !*** ./public/service/creation/config.ts ***!
  \*******************************************/
/*! exports provided: IndexPatternCreationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationConfig", function() { return IndexPatternCreationConfig; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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


const indexPatternTypeName = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.editIndexPattern.createIndex.defaultTypeName', {
  defaultMessage: 'index pattern'
});
const indexPatternButtonText = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.editIndexPattern.createIndex.defaultButtonText', {
  defaultMessage: 'Standard index pattern'
});
const indexPatternButtonDescription = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.editIndexPattern.createIndex.defaultButtonDescription', {
  defaultMessage: 'Perform full aggregations against any data'
});
class IndexPatternCreationConfig {
  constructor({
    type = undefined,
    name = indexPatternTypeName,
    showSystemIndices = true,
    httpClient = null,
    isBeta = false
  }) {
    _defineProperty(this, "key", 'default');
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "showSystemIndices", void 0);
    _defineProperty(this, "httpClient", void 0);
    _defineProperty(this, "isBeta", void 0);
    this.type = type;
    this.name = name;
    this.showSystemIndices = showSystemIndices;
    this.httpClient = httpClient;
    this.isBeta = isBeta;
  }
  getIndexPatternCreationOption(urlHandler) {
    return {
      text: indexPatternButtonText,
      description: indexPatternButtonDescription,
      testSubj: `createStandardIndexPatternButton`,
      onClick: () => {
        urlHandler('/create');
      }
    };
  }
  getIndexPatternType() {
    return this.type;
  }
  getIndexPatternName() {
    return this.name;
  }
  getIsBeta() {
    return this.isBeta;
  }
  getShowSystemIndices() {
    return this.showSystemIndices;
  }
  getIndexTags(indexName) {
    return [];
  }
  checkIndicesForErrors(indices) {
    return undefined;
  }
  getIndexPatternMappings() {
    return {};
  }
  renderPrompt() {
    return null;
  }
  getFetchForWildcardOptions() {
    return {};
  }
}

/***/ }),

/***/ "./public/service/creation/index.ts":
/*!******************************************!*\
  !*** ./public/service/creation/index.ts ***!
  \******************************************/
/*! exports provided: IndexPatternCreationConfig, IndexPatternCreationOption, IndexPatternCreationManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./public/service/creation/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["IndexPatternCreationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationOption", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["IndexPatternCreationOption"]; });

/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./public/service/creation/manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationManager", function() { return _manager__WEBPACK_IMPORTED_MODULE_1__["IndexPatternCreationManager"]; });

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

/***/ "./public/service/creation/manager.ts":
/*!********************************************!*\
  !*** ./public/service/creation/manager.ts ***!
  \********************************************/
/*! exports provided: IndexPatternCreationManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationManager", function() { return IndexPatternCreationManager; });
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

class IndexPatternCreationManager {
  constructor() {
    _defineProperty(this, "configs", []);
  }
  setup(httpClient) {
    return {
      addCreationConfig: Config => {
        const config = new Config({
          httpClient
        });
        if (this.configs.findIndex(c => c.key === config.key) !== -1) {
          throw new Error(`${config.key} exists in IndexPatternCreationManager.`);
        }
        this.configs.push(config);
      }
    };
  }
  start() {
    const getType = key => {
      if (key) {
        const index = this.configs.findIndex(config => config.key === key);
        const config = this.configs[index];
        if (config) {
          return config;
        } else {
          throw new Error(`Index pattern creation type not found: ${key}`);
        }
      } else {
        return getType('default');
      }
    };
    return {
      getType,
      getIndexPatternCreationOptions: async urlHandler => {
        const options = [];
        await Promise.all(this.configs.map(async config => {
          const option = config.getIndexPatternCreationOption ? await config.getIndexPatternCreationOption(urlHandler) : null;
          if (option) {
            options.push(option);
          }
        }));
        return options;
      }
    };
  }
}

/***/ }),

/***/ "./public/service/environment/environment.ts":
/*!***************************************************!*\
  !*** ./public/service/environment/environment.ts ***!
  \***************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./public/types.ts");
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



/** @public */

class EnvironmentService {
  constructor() {
    _defineProperty(this, "environment", {
      ml: () => _types__WEBPACK_IMPORTED_MODULE_0__["MlCardState"].DISABLED
    });
  }
  setup() {
    return {
      /**
       * Update the environment to influence how available features are presented.
       * @param update
       */
      update: update => {
        this.environment = Object.assign({}, this.environment, update);
      }
    };
  }
  getEnvironment() {
    return this.environment;
  }
}

/***/ }),

/***/ "./public/service/environment/index.ts":
/*!*********************************************!*\
  !*** ./public/service/environment/index.ts ***!
  \*********************************************/
/*! exports provided: EnvironmentService, Environment, EnvironmentServiceSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./public/service/environment/environment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["EnvironmentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["Environment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentServiceSetup", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["EnvironmentServiceSetup"]; });

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

/***/ "./public/service/field_format_editors/field_format_editors.ts":
/*!*********************************************************************!*\
  !*** ./public/service/field_format_editors/field_format_editors.ts ***!
  \*********************************************************************/
/*! exports provided: FieldFormatEditors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFormatEditors", function() { return FieldFormatEditors; });
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

class FieldFormatEditors {
  constructor() {
    _defineProperty(this, "editors", []);
  }
  setup(defaultFieldEditors = []) {
    this.editors = defaultFieldEditors;
    return {
      register: editor => {
        this.editors.push(editor);
      }
    };
  }
  start() {
    return {
      getAll: () => [...this.editors],
      getById: id => {
        return this.editors.find(editor => editor.formatId === id);
      }
    };
  }
}

/***/ }),

/***/ "./public/service/field_format_editors/index.ts":
/*!******************************************************!*\
  !*** ./public/service/field_format_editors/index.ts ***!
  \******************************************************/
/*! exports provided: FieldFormatEditors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_format_editors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_format_editors */ "./public/service/field_format_editors/field_format_editors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldFormatEditors", function() { return _field_format_editors__WEBPACK_IMPORTED_MODULE_0__["FieldFormatEditors"]; });

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

/***/ "./public/service/index.ts":
/*!*********************************!*\
  !*** ./public/service/index.ts ***!
  \*********************************/
/*! exports provided: IndexPatternManagementService, IndexPatternCreationConfig, IndexPatternCreationOption, IndexPatternListConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pattern_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_pattern_management_service */ "./public/service/index_pattern_management_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternManagementService", function() { return _index_pattern_management_service__WEBPACK_IMPORTED_MODULE_0__["IndexPatternManagementService"]; });

/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation */ "./public/service/creation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationConfig", function() { return _creation__WEBPACK_IMPORTED_MODULE_1__["IndexPatternCreationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternCreationOption", function() { return _creation__WEBPACK_IMPORTED_MODULE_1__["IndexPatternCreationOption"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./public/service/list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListConfig", function() { return _list__WEBPACK_IMPORTED_MODULE_2__["IndexPatternListConfig"]; });

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

/***/ "./public/service/index_pattern_management_service.ts":
/*!************************************************************!*\
  !*** ./public/service/index_pattern_management_service.ts ***!
  \************************************************************/
/*! exports provided: IndexPatternManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternManagementService", function() { return IndexPatternManagementService; });
/* harmony import */ var _creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation */ "./public/service/creation/index.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./public/service/list/index.ts");
/* harmony import */ var _field_format_editors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field_format_editors */ "./public/service/field_format_editors/index.ts");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment */ "./public/service/environment/index.ts");
/* harmony import */ var _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/field_editor/components/field_format_editor */ "./public/components/field_editor/components/field_format_editor/index.ts");
/* harmony import */ var _column_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./column_service */ "./public/service/column_service/index.ts");
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
 * Index patterns management service
 *
 * @internal
 */
class IndexPatternManagementService {
  constructor() {
    _defineProperty(this, "indexPatternCreationManager", void 0);
    _defineProperty(this, "indexPatternListConfig", void 0);
    _defineProperty(this, "fieldFormatEditors", void 0);
    _defineProperty(this, "environmentService", void 0);
    _defineProperty(this, "columnService", void 0);
    this.indexPatternCreationManager = new _creation__WEBPACK_IMPORTED_MODULE_0__["IndexPatternCreationManager"]();
    this.indexPatternListConfig = new _list__WEBPACK_IMPORTED_MODULE_1__["IndexPatternListManager"]();
    this.fieldFormatEditors = new _field_format_editors__WEBPACK_IMPORTED_MODULE_2__["FieldFormatEditors"]();
    this.environmentService = new _environment__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]();
    this.columnService = new _column_service__WEBPACK_IMPORTED_MODULE_5__["IndexPatternTableColumnService"]();
  }
  setup({
    httpClient
  }) {
    const creationManagerSetup = this.indexPatternCreationManager.setup(httpClient);
    creationManagerSetup.addCreationConfig(_creation__WEBPACK_IMPORTED_MODULE_0__["IndexPatternCreationConfig"]);
    const indexPatternListConfigSetup = this.indexPatternListConfig.setup();
    indexPatternListConfigSetup.addListConfig(_list__WEBPACK_IMPORTED_MODULE_1__["IndexPatternListConfig"]);
    const defaultFieldFormatEditors = [_components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["BytesFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["ColorFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["DateFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["DateNanosFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["DurationFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["NumberFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["PercentFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["StaticLookupFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["StringFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["TruncateFormatEditor"], _components_field_editor_components_field_format_editor__WEBPACK_IMPORTED_MODULE_4__["UrlFormatEditor"]];
    const fieldFormatEditorsSetup = this.fieldFormatEditors.setup(defaultFieldFormatEditors);
    return {
      creation: creationManagerSetup,
      list: indexPatternListConfigSetup,
      fieldFormatEditors: fieldFormatEditorsSetup,
      environment: this.environmentService.setup(),
      columns: this.columnService.setup()
    };
  }
  start() {
    return {
      creation: this.indexPatternCreationManager.start(),
      list: this.indexPatternListConfig.start(),
      fieldFormatEditors: this.fieldFormatEditors.start(),
      columns: this.columnService.start()
    };
  }
  stop() {
    // nothing to do here yet.
  }
}

/** @internal */

/***/ }),

/***/ "./public/service/list/config.ts":
/*!***************************************!*\
  !*** ./public/service/list/config.ts ***!
  \***************************************/
/*! exports provided: IndexPatternListConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListConfig", function() { return IndexPatternListConfig; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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


const defaultIndexPatternListName = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('indexPatternManagement.editIndexPattern.list.defaultIndexPatternListName', {
  defaultMessage: 'Default'
});
class IndexPatternListConfig {
  constructor() {
    _defineProperty(this, "key", 'default');
  }
  getIndexPatternTags(indexPattern, isDefault) {
    return isDefault ? [{
      key: 'default',
      name: defaultIndexPatternListName
    }] : [];
  }
  getFieldInfo(indexPattern, field) {
    return [];
  }
  areScriptedFieldsEnabled(indexPattern) {
    return true;
  }
}

/***/ }),

/***/ "./public/service/list/index.ts":
/*!**************************************!*\
  !*** ./public/service/list/index.ts ***!
  \**************************************/
/*! exports provided: IndexPatternListConfig, IndexPatternListManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./public/service/list/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["IndexPatternListConfig"]; });

/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./public/service/list/manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListManager", function() { return _manager__WEBPACK_IMPORTED_MODULE_1__["IndexPatternListManager"]; });

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

/***/ "./public/service/list/manager.ts":
/*!****************************************!*\
  !*** ./public/service/list/manager.ts ***!
  \****************************************/
/*! exports provided: IndexPatternListManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternListManager", function() { return IndexPatternListManager; });
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

class IndexPatternListManager {
  constructor() {
    _defineProperty(this, "configs", []);
  }
  setup() {
    return {
      addListConfig: Config => {
        const config = new Config();
        if (this.configs.findIndex(c => c.key === config.key) !== -1) {
          throw new Error(`${config.key} exists in IndexPatternListManager.`);
        }
        this.configs.push(config);
      }
    };
  }
  start() {
    return {
      getIndexPatternTags: (indexPattern, isDefault) => this.configs.reduce((tags, config) => config.getIndexPatternTags ? tags.concat(config.getIndexPatternTags(indexPattern, isDefault)) : tags, []),
      getFieldInfo: (indexPattern, field) => this.configs.reduce((info, config) => config.getFieldInfo ? info.concat(config.getFieldInfo(indexPattern, field)) : info, []),
      areScriptedFieldsEnabled: indexPattern => this.configs.every(config => config.areScriptedFieldsEnabled ? config.areScriptedFieldsEnabled(indexPattern) : true)
    };
  }
}

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: MlCardState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlCardState", function() { return MlCardState; });
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

let MlCardState = /*#__PURE__*/function (MlCardState) {
  MlCardState[MlCardState["HIDDEN"] = 0] = "HIDDEN";
  MlCardState[MlCardState["DISABLED"] = 1] = "DISABLED";
  MlCardState[MlCardState["ENABLED"] = 2] = "ENABLED";
  return MlCardState;
}({});

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

/***/ "plugin/data/common":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/data/common" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/data/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

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
//# sourceMappingURL=indexPatternManagement.plugin.js.map