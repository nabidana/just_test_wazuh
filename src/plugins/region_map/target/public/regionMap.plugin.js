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
/******/ 		"regionMap": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "regionMap.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["regionMap_bundle_jsonpfunction"] = window["regionMap_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v7dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/map_choice_options.scss?v7dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v7light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/map_choice_options.scss?v7light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v8dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/map_choice_options.scss?v8dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v8light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/map_choice_options.scss?v8light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v9dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/map_choice_options.scss?v9dark ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v9light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/map_choice_options.scss?v9light ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n", "",{"version":3,"sources":["webpack://./public/components/map_choice_options.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,eAAe","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapChoiceGroup{font-size:small}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=regionMap!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=regionMap!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['regionMap']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_regionMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=regionMap!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=regionMap!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_regionMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_regionMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/regionMap/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/region_map/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants/shared.ts":
/*!************************************!*\
  !*** ./common/constants/shared.ts ***!
  \************************************/
/*! exports provided: DEFAULT_MAP_CHOICE, CUSTOM_MAP_CHOICE, CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAP_CHOICE", function() { return DEFAULT_MAP_CHOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_MAP_CHOICE", function() { return CUSTOM_MAP_CHOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING", function() { return CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const DEFAULT_MAP_CHOICE = 'default';
const CUSTOM_MAP_CHOICE = 'custom';
const CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING = 'visualization:regionmap:customVectorMapMaxSize';

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: DEFAULT_MAP_CHOICE, CUSTOM_MAP_CHOICE, CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/shared */ "./common/constants/shared.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MAP_CHOICE", function() { return _constants_shared__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MAP_CHOICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_MAP_CHOICE", function() { return _constants_shared__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_MAP_CHOICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING", function() { return _constants_shared__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/components/default_map_options.tsx":
/*!***************************************************!*\
  !*** ./public/components/default_map_options.tsx ***!
  \***************************************************/
/*! exports provided: DefaultMapOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMapOptions", function() { return DefaultMapOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const mapLayerForOption = ({
  layerId,
  name
}) => ({
  text: name,
  value: layerId
});
const mapFieldForOption = ({
  description,
  name
}) => ({
  text: description,
  value: name
});
function DefaultMapOptions(props) {
  const {
    getServiceSettings,
    stateParams,
    vis,
    setValue
  } = props;
  const vectorLayers = vis.type.editorConfig.collections.vectorLayers;
  const vectorLayerOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => vectorLayers.map(mapLayerForOption), [vectorLayers]);
  const fieldOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (stateParams.selectedLayer && stateParams.selectedLayer.fields || []).map(mapFieldForOption), [stateParams.selectedLayer]);
  const setEmsHotLink = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async layer => {
    const serviceSettings = await getServiceSettings();
    const emsHotLink = await serviceSettings.getEMSHotLink(layer);
    setValue('emsHotLink', emsHotLink);
  }, [setValue, getServiceSettings]);
  const setLayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (paramName, value) => {
    const newLayer = vectorLayers.find(({
      layerId
    }) => layerId === value);
    if (newLayer) {
      setValue(paramName, newLayer);
      setValue('selectedJoinField', newLayer.fields[0]);
      setEmsHotLink(newLayer);
    }
  }, [vectorLayers, setEmsHotLink, setValue]);
  const setField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    if (stateParams.selectedLayer) {
      setValue(paramName, stateParams.selectedLayer.fields.find(f => f.name === value));
    }
  }, [setValue, stateParams.selectedLayer]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "regionMap.visParams.layerSettingsTitle",
    defaultMessage: "Layer settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    id: "defaultMapSelection",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: "regionMapOptionsSelectLayer",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.vectorMapLabel', {
      defaultMessage: 'Vector map'
    }),
    options: vectorLayerOptions,
    paramName: "selectedLayer",
    value: stateParams.selectedLayer && stateParams.selectedLayer.layerId,
    setValue: setLayer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: "regionMapOptionsSelectJoinField",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.joinFieldLabel', {
      defaultMessage: 'Join field'
    }),
    options: fieldOptions,
    paramName: "selectedJoinField",
    value: stateParams.selectedJoinField && stateParams.selectedJoinField.name,
    setValue: setField
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.displayWarningsLabel', {
      defaultMessage: 'Display warnings'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.switchWarningsTipText', {
      defaultMessage: 'Turns on/off warnings. When turned on, warning will be shown for each term that cannot be matched to a shape in the vector layer based on the join field. When turned off, these warnings will be turned off.'
    }),
    paramName: "isDisplayWarning",
    value: stateParams.isDisplayWarning,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.showAllShapesLabel', {
      defaultMessage: 'Show all shapes'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.turnOffShowingAllShapesTipText', {
      defaultMessage: 'Turning this off only shows the shapes that were matched with a corresponding term.'
    }),
    paramName: "showAllShapes",
    value: stateParams.showAllShapes,
    setValue: setValue
  }));
}


/***/ }),

/***/ "./public/components/map_choice_options.scss":
/*!***************************************************!*\
  !*** ./public/components/map_choice_options.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./map_choice_options.scss?v7dark */ "./public/components/map_choice_options.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./map_choice_options.scss?v7light */ "./public/components/map_choice_options.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./map_choice_options.scss?v8dark */ "./public/components/map_choice_options.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./map_choice_options.scss?v8light */ "./public/components/map_choice_options.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./map_choice_options.scss?v9dark */ "./public/components/map_choice_options.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./map_choice_options.scss?v9light */ "./public/components/map_choice_options.scss?v9light");
}

/***/ }),

/***/ "./public/components/map_choice_options.scss?v7dark":
/*!**********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v7dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./map_choice_options.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v7dark");

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

/***/ "./public/components/map_choice_options.scss?v7light":
/*!***********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v7light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./map_choice_options.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v7light");

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

/***/ "./public/components/map_choice_options.scss?v8dark":
/*!**********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v8dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./map_choice_options.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v8dark");

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

/***/ "./public/components/map_choice_options.scss?v8light":
/*!***********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v8light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./map_choice_options.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v8light");

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

/***/ "./public/components/map_choice_options.scss?v9dark":
/*!**********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v9dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./map_choice_options.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v9dark");

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

/***/ "./public/components/map_choice_options.scss?v9light":
/*!***********************************************************!*\
  !*** ./public/components/map_choice_options.scss?v9light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./map_choice_options.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/map_choice_options.scss?v9light");

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

/***/ "./public/components/map_choice_options.tsx":
/*!**************************************************!*\
  !*** ./public/components/map_choice_options.tsx ***!
  \**************************************************/
/*! exports provided: MapChoiceOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChoiceOptions", function() { return MapChoiceOptions; });
/* harmony import */ var _map_choice_options_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map_choice_options.scss */ "./public/components/map_choice_options.scss");
/* harmony import */ var _map_choice_options_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map_choice_options_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








const mapLayerForOption = ({
  layerId,
  name
}) => ({
  text: name,
  value: layerId
});
const mapFieldForOption = ({
  description,
  name
}) => ({
  text: description,
  value: name
});
const mapCustomJoinFieldForOption = ({
  description,
  name
}) => ({
  label: name,
  text: description,
  value: name
});
function MapChoiceOptions(props) {
  const {
    getServiceSettings,
    stateParams,
    vis,
    setValue
  } = props;
  const vectorLayers = vis.type.editorConfig.collections.vectorLayers;
  const customVectorLayers = vis.type.editorConfig.collections.customVectorLayers;
  const vectorLayerOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => vectorLayers.map(mapLayerForOption), [vectorLayers]);
  const customVectorLayerOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => customVectorLayers.map(mapLayerForOption), [customVectorLayers]);
  const fieldOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => (stateParams.selectedLayer && stateParams.selectedLayer.fields || []).map(mapFieldForOption), [stateParams.selectedLayer]);
  const customFieldOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => (stateParams.selectedCustomLayer && stateParams.selectedCustomLayer.fields || []).map(mapCustomJoinFieldForOption), [stateParams.selectedCustomLayer]);
  const selectDefaultVectorMap = () => {
    setValue('layerChosenByUser', _common__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_MAP_CHOICE"]);
  };
  const selectCustomVectorMap = () => {
    setValue('layerChosenByUser', _common__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_MAP_CHOICE"]);
  };
  const setEmsHotLink = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async layer => {
    const serviceSettings = await getServiceSettings();
    const emsHotLink = await serviceSettings.getEMSHotLink(layer);
    setValue('emsHotLink', emsHotLink);
  }, [setValue, getServiceSettings]);
  const setLayer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (paramName, value) => {
    const newLayer = vectorLayers.find(({
      layerId
    }) => layerId === value);
    if (newLayer) {
      setValue(paramName, newLayer);
      setValue('selectedJoinField', newLayer.fields[0]);
      setEmsHotLink(newLayer);
    }
  }, [vectorLayers, setEmsHotLink, setValue]);
  const setCustomLayer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (paramName, value) => {
    const newLayer = customVectorLayers.find(({
      layerId
    }) => layerId === value);
    if (newLayer) {
      setValue(paramName, newLayer);
      setValue('selectedJoinField', newLayer.fields[0]);
    }
  }, [customVectorLayers, setValue]);
  const setCustomJoinField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (paramName, value) => {
    if (stateParams.selectedCustomLayer) {
      setValue(paramName, stateParams.selectedCustomLayer.fields.find(f => f.name === value));
    }
  }, [setValue, stateParams.selectedCustomLayer]);
  const setField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((paramName, value) => {
    if (stateParams.selectedLayer) {
      setValue(paramName, stateParams.selectedLayer.fields.find(f => f.name === value));
    }
  }, [setValue, stateParams.selectedLayer]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "regionMap.visParams.layerSettingsTitle",
    defaultMessage: "Layer settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTextColor"], {
    color: "default"
  }, "Choose a vector map layer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    className: "mapChoiceGroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCheckableCard"], {
    id: "defaultVectorMap",
    "data-test-subj": "defaultVectorMap",
    label: "Default vector map",
    name: "defaultVectorMap",
    value: "default",
    checked: _common__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_MAP_CHOICE"] === stateParams.layerChosenByUser,
    onChange: selectDefaultVectorMap
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCheckableCard"], {
    id: "customVectorMap",
    "data-test-subj": "customVectorMap",
    label: "Custom vector map",
    name: "customVectorMap",
    value: "custom",
    checked: _common__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_MAP_CHOICE"] === stateParams.layerChosenByUser,
    onChange: selectCustomVectorMap
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), _common__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_MAP_CHOICE"] === stateParams.layerChosenByUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    id: "defaultMapSelection",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SelectOption"], {
    id: "regionMapOptionsSelectLayer",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.vectorMapLabel', {
      defaultMessage: 'Vector map'
    }),
    options: vectorLayerOptions,
    paramName: "selectedLayer",
    value: stateParams.selectedLayer && stateParams.selectedLayer.layerId,
    setValue: setLayer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SelectOption"], {
    id: "regionMapOptionsSelectJoinField",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.joinFieldLabel', {
      defaultMessage: 'Join field'
    }),
    options: fieldOptions,
    paramName: "selectedJoinField",
    value: stateParams.selectedJoinField && stateParams.selectedJoinField.name,
    setValue: setField
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    id: "customMapSelection",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SelectOption"], {
    id: "regionMapOptionsCustomSelectLayer",
    label: "Vector map",
    options: customVectorLayerOptions,
    paramName: "selectedCustomLayer",
    value: stateParams.selectedCustomLayer && stateParams.selectedCustomLayer.layerId,
    setValue: setCustomLayer
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SelectOption"], {
    id: "regionMapOptionsCustomSelectJoinField",
    label: "Join field",
    options: customFieldOptions,
    paramName: "selectedCustomJoinField",
    value: stateParams.selectedCustomJoinField && stateParams.selectedCustomJoinField.name,
    setValue: setCustomJoinField
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.displayWarningsLabel', {
      defaultMessage: 'Display warnings'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.switchWarningsTipText', {
      defaultMessage: 'Turns on/off warnings. When turned on, warning will be shown for each term that cannot be matched to a shape in the vector layer based on the join field. When turned off, these warnings will be turned off.'
    }),
    paramName: "isDisplayWarning",
    value: stateParams.isDisplayWarning,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.showAllShapesLabel', {
      defaultMessage: 'Show all shapes'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.visParams.turnOffShowingAllShapesTipText', {
      defaultMessage: 'Turning this off only shows the shapes that were matched with a corresponding term.'
    }),
    paramName: "showAllShapes",
    value: stateParams.showAllShapes,
    setValue: setValue
  }));
}


/***/ }),

/***/ "./public/components/region_map_options.tsx":
/*!**************************************************!*\
  !*** ./public/components/region_map_options.tsx ***!
  \**************************************************/
/*! exports provided: RegionMapOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMapOptions", function() { return RegionMapOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _default_map_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default_map_options */ "./public/components/default_map_options.tsx");
/* harmony import */ var _map_choice_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map_choice_options */ "./public/components/map_choice_options.tsx");
/* harmony import */ var _style_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style_options */ "./public/components/style_options.tsx");
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







const mapLayerForOption = ({
  layerId,
  name
}) => ({
  text: name,
  value: layerId
});
function RegionMapOptions(props) {
  const customVectorLayers = props.vis.type.editorConfig.collections.customVectorLayers;
  const customVectorLayerOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => customVectorLayers.map(mapLayerForOption), [customVectorLayers]);
  if (customVectorLayerOptions.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "defaultMapOption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_default_map_options__WEBPACK_IMPORTED_MODULE_3__["DefaultMapOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_options__WEBPACK_IMPORTED_MODULE_5__["StyleOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["WmsOptions"], props));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "customMapOption"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_map_choice_options__WEBPACK_IMPORTED_MODULE_4__["MapChoiceOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_options__WEBPACK_IMPORTED_MODULE_5__["StyleOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["WmsOptions"], props));
  }
}


/***/ }),

/***/ "./public/components/style_options.tsx":
/*!*********************************************!*\
  !*** ./public/components/style_options.tsx ***!
  \*********************************************/
/*! exports provided: StyleOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleOptions", function() { return StyleOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






function StyleOptions(props) {
  const {
    stateParams,
    vis,
    setValue
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs",
    id: "styleSettingTitleId"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "regionMap.visParams.styleSettingsLabel",
    defaultMessage: "Style settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.colorSchemaLabel', {
      defaultMessage: 'Color schema'
    }),
    options: vis.type.editorConfig.collections.colorSchemas,
    paramName: "colorSchema",
    value: stateParams.colorSchema,
    setValue: setValue,
    id: "colorSchemaId"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('regionMap.visParams.outlineWeightLabel', {
      defaultMessage: 'Border thickness'
    }),
    min: 0,
    paramName: "outlineWeight",
    value: stateParams.outlineWeight,
    setValue: setValue,
    id: "borderThicknessId"
  }));
}


/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, RegionMapPluginSetup, RegionMapVisualizationDependencies, RegionMapOptionsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionMapPluginSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["RegionMapPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionMapVisualizationDependencies", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["RegionMapVisualizationDependencies"]; });

/* harmony import */ var _components_region_map_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/region_map_options */ "./public/components/region_map_options.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegionMapOptionsProps", function() { return _components_region_map_options__WEBPACK_IMPORTED_MODULE_1__["RegionMapOptionsProps"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["RegionMapPlugin"](initializerContext);
}



/***/ }),

/***/ "./public/opensearch_dashboards_services.ts":
/*!**************************************************!*\
  !*** ./public/opensearch_dashboards_services.ts ***!
  \**************************************************/
/*! exports provided: getCoreService, setCoreService, getFormatService, setFormatService, getNotifications, setNotifications, getQueryService, setQueryService, getShareService, setShareService, getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoreService", function() { return getCoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCoreService", function() { return setCoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatService", function() { return getFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormatService", function() { return setFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryService", function() { return getQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQueryService", function() { return setQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareService", function() { return getShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setShareService", function() { return setShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenSearchDashboardsLegacy", function() { return getOpenSearchDashboardsLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenSearchDashboardsLegacy", function() { return setOpenSearchDashboardsLegacy; });
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


const [getCoreService, setCoreService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Core');
const [getFormatService, setFormatService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('data.fieldFormats');
const [getNotifications, setNotifications] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');
const [getQueryService, setQueryService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Query');
const [getShareService, setShareService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Share');
const [getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('OpenSearchDashboardsLegacy');

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: RegionMapPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMapPlugin", function() { return RegionMapPlugin; });
/* harmony import */ var _region_map_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./region_map_fn */ "./public/region_map_fn.js");
/* harmony import */ var _region_map_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region_map_type */ "./public/region_map_type.js");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
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

// @ts-ignore

// @ts-ignore



/** @private */

/** @internal */

/** @internal */

/** @internal */

// eslint-disable-next-line @typescript-eslint/no-empty-interface

/** @internal */
class RegionMapPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "_initializerContext", void 0);
    _defineProperty(this, "additionalOptions", void 0);
    this._initializerContext = initializerContext;
    this.additionalOptions = [];
  }
  async setup(core, {
    expressions,
    visualizations,
    mapsLegacy
  }) {
    const config = {
      ...this._initializerContext.config.get(),
      // The maps legacy plugin updates the regionmap config directly in service_settings,
      // future work on how configurations across the different plugins are organized would
      // ideally constrain regionmap config updates to occur only from this plugin
      ...mapsLegacy.config.regionmap
    };
    const visualizationDependencies = {
      http: core.http,
      uiSettings: core.uiSettings,
      regionmapsConfig: config,
      getServiceSettings: mapsLegacy.getServiceSettings,
      BaseMapsVisualization: mapsLegacy.getBaseMapsVis(),
      additionalOptions: this.additionalOptions
    };
    expressions.registerFunction(_region_map_fn__WEBPACK_IMPORTED_MODULE_0__["createRegionMapFn"]);
    visualizations.createBaseVisualization(Object(_region_map_type__WEBPACK_IMPORTED_MODULE_1__["createRegionMapTypeDefinition"])(visualizationDependencies));
    return {
      config,
      addOptionTab: importMapTabConfig => this.additionalOptions.push(importMapTabConfig)
    };
  }
  start(core, plugins) {
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setCoreService"])(core);
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setFormatService"])(plugins.data.fieldFormats);
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setQueryService"])(plugins.data.query);
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setNotifications"])(core.notifications);
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setOpenSearchDashboardsLegacy"])(plugins.opensearchDashboardsLegacy);
    Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["setShareService"])(plugins.share);
    return {};
  }
}

/***/ }),

/***/ "./public/region_map_fn.js":
/*!*********************************!*\
  !*** ./public/region_map_fn.js ***!
  \*********************************/
/*! exports provided: createRegionMapFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegionMapFn", function() { return createRegionMapFn; });
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


const createRegionMapFn = () => ({
  name: 'regionmap',
  type: 'render',
  context: {
    types: ['opensearch_dashboards_datatable']
  },
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('regionMap.function.help', {
    defaultMessage: 'Regionmap visualization'
  }),
  args: {
    visConfig: {
      types: ['string', 'null'],
      default: '"{}"'
    }
  },
  fn(context, args) {
    const visConfig = JSON.parse(args.visConfig);
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: context,
        visType: 'region_map',
        visConfig,
        params: {
          listenOnChange: true
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/region_map_type.js":
/*!***********************************!*\
  !*** ./public/region_map_type.js ***!
  \***********************************/
/*! exports provided: createRegionMapTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegionMapTypeDefinition", function() { return createRegionMapTypeDefinition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./public/util.ts");
/* harmony import */ var _region_map_visualization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region_map_visualization */ "./public/region_map_visualization.js");
/* harmony import */ var _components_region_map_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/region_map_options */ "./public/components/region_map_options.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./common/index.ts");
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











function createRegionMapTypeDefinition(dependencies) {
  const {
    http,
    uiSettings,
    regionmapsConfig,
    getServiceSettings,
    additionalOptions
  } = dependencies;
  const services = Object(_services__WEBPACK_IMPORTED_MODULE_8__["getServices"])(http);
  const visualization = Object(_region_map_visualization__WEBPACK_IMPORTED_MODULE_3__["createRegionMapVisualization"])(dependencies);
  const diffArray = (arr1, arr2) => {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
  };
  const getCustomIndices = async dataSourceRefId => {
    try {
      const result = await services.getCustomIndices(dataSourceRefId);
      return result.resp;
    } catch (e) {
      return false;
    }
  };
  const getJoinFields = async (indexName, dataSourceRefId) => {
    try {
      const result = await services.getIndexMapping(indexName, dataSourceRefId);
      const properties = diffArray(Object.keys(result.resp[indexName].mappings.properties), ['location']);
      return properties.map(function (property) {
        return {
          type: 'id',
          name: property,
          description: property
        };
      });
    } catch (e) {
      return false;
    }
  };
  const addSchemaToCustomLayer = async (customlayer, dataSourceRefId) => {
    const joinFields = await getJoinFields(customlayer, dataSourceRefId);
    const customLayerWithSchema = {
      attribution: '<a rel="noreferrer noopener" href="http://www.naturalearthdata.com/about/terms-of-use">Made with NaturalEarth</a>',
      created_at: '2017-04-26T17:12:15.978370',
      format: 'geojson',
      fields: joinFields,
      id: customlayer,
      meta: undefined,
      name: customlayer,
      origin: 'user-upload'
    };
    return customLayerWithSchema;
  };
  return {
    name: 'region_map',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('regionMap.mapVis.regionMapTitle', {
      defaultMessage: 'Region Map'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('regionMap.mapVis.regionMapDescription', {
      defaultMessage: 'Show metrics on a thematic map. Use one of the \
provided base maps, or add your own. Darker colors represent higher values.'
    }),
    icon: 'visMapRegion',
    visConfig: {
      defaults: {
        layerChosenByUser: _common__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_MAP_CHOICE"],
        legendPosition: 'bottomright',
        addTooltip: true,
        colorSchema: 'Yellow to Red',
        emsHotLink: '',
        isDisplayWarning: true,
        wms: uiSettings.get('visualization:tileMap:WMSdefaults'),
        mapZoom: 2,
        mapCenter: [0, 0],
        outlineWeight: 1,
        showAllShapes: true //still under consideration
      }
    },

    visualization,
    editorConfig: {
      optionTabs: () => {
        return [{
          name: 'options',
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('regionMap.mapVis.regionMapEditorConfig.optionTabs.optionsTitle', {
            defaultMessage: 'Layer Options'
          }),
          editor: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_region_map_options__WEBPACK_IMPORTED_MODULE_4__["RegionMapOptions"], _extends({}, props, {
            getServiceSettings: getServiceSettings
          }))
        }, ...additionalOptions];
      },
      collections: {
        colorSchemas: _charts_public__WEBPACK_IMPORTED_MODULE_5__["truncatedColorSchemas"],
        vectorLayers: [],
        customVectorLayers: [],
        tmsLayers: [],
        dataSourceRefId: ''
      },
      schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__["Schemas"]([{
        group: 'metrics',
        name: 'metric',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('regionMap.mapVis.regionMapEditorConfig.schemas.metricTitle', {
          defaultMessage: 'Value'
        }),
        min: 1,
        max: 1,
        aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'top_hits', 'sum_bucket', 'min_bucket', 'max_bucket', 'avg_bucket'],
        defaults: [{
          schema: 'metric',
          type: 'count'
        }]
      }, {
        group: 'buckets',
        name: 'segment',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('regionMap.mapVis.regionMapEditorConfig.schemas.segmentTitle', {
          defaultMessage: 'Shape field'
        }),
        min: 1,
        max: 1,
        aggFilter: ['terms']
      }])
    },
    setup: async vis => {
      var _vis$data$indexPatter;
      const serviceSettings = await getServiceSettings();
      const tmsLayers = await serviceSettings.getTMSServices();
      vis.type.editorConfig.collections.tmsLayers = tmsLayers;
      if (!vis.params.wms.selectedTmsLayer && tmsLayers.length) {
        vis.params.wms.selectedTmsLayer = tmsLayers[0];
      }
      const vectorLayers = regionmapsConfig.layers.map(_util__WEBPACK_IMPORTED_MODULE_2__["mapToLayerWithId"].bind(null, _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["ORIGIN"].OPENSEARCH_DASHBOARDS_YML));
      const customVectorLayers = regionmapsConfig.layers.map(_util__WEBPACK_IMPORTED_MODULE_2__["mapToLayerWithId"].bind(null, _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["ORIGIN"].OPENSEARCH_DASHBOARDS_YML));

      // Read the data source reference id from index pattern if available, empty string means for local clusters
      const dataSourceRefId = ((_vis$data$indexPatter = vis.data.indexPattern) === null || _vis$data$indexPatter === void 0 || (_vis$data$indexPatter = _vis$data$indexPatter.dataSourceRef) === null || _vis$data$indexPatter === void 0 ? void 0 : _vis$data$indexPatter.id) || '';
      vis.type.editorConfig.collections.dataSourceRefId = dataSourceRefId;
      const customIndices = await getCustomIndices(dataSourceRefId);
      let selectedLayer = vectorLayers[0];
      let selectedJoinField = selectedLayer ? selectedLayer.fields[0] : null;
      let selectedCustomLayer = customVectorLayers[0];
      let selectedCustomJoinField = selectedCustomLayer ? selectedCustomLayer.fields[0] : null;
      if (regionmapsConfig.includeOpenSearchMapsService) {
        const layers = await serviceSettings.getFileLayers();
        const newLayers = layers.map(_util__WEBPACK_IMPORTED_MODULE_2__["mapToLayerWithId"].bind(null, _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["ORIGIN"].EMS)).filter(layer => !vectorLayers.some(vectorLayer => vectorLayer.layerId === layer.layerId));
        const promises = customIndices.map(idx => addSchemaToCustomLayer(idx, dataSourceRefId));
        const newCustomLayers = await Promise.all(promises);

        // backfill v1 manifest for now
        newLayers.forEach(layer => {
          if (layer.format === 'geojson') {
            layer.format = {
              type: 'geojson'
            };
          }
        });
        newCustomLayers.forEach(layer => {
          if (layer.format === 'geojson') {
            layer.format = {
              type: 'geojson'
            };
            layer.isEMS = false;
            layer.layerId = layer.origin + '.' + layer.name;
          }
        });
        vis.type.editorConfig.collections.vectorLayers = [...vectorLayers, ...newLayers];
        vis.type.editorConfig.collections.customVectorLayers = [...customVectorLayers, ...newCustomLayers];
        [selectedLayer] = vis.type.editorConfig.collections.vectorLayers;
        selectedJoinField = selectedLayer ? selectedLayer.fields[0] : null;
        [selectedCustomLayer] = vis.type.editorConfig.collections.customVectorLayers;
        selectedCustomJoinField = selectedCustomLayer ? selectedCustomLayer.fields[0] : null;
        if (selectedLayer && !vis.params.selectedLayer && selectedLayer.isEMS) {
          vis.params.emsHotLink = await serviceSettings.getEMSHotLink(selectedLayer);
        }
      }
      if (!vis.params.selectedLayer) {
        vis.params.selectedLayer = selectedLayer;
        vis.params.selectedJoinField = selectedJoinField;
      }
      if (!vis.params.selectedCustomLayer) {
        vis.params.selectedCustomLayer = selectedCustomLayer;
        vis.params.selectedCustomJoinField = selectedCustomJoinField;
      }
      vis.params.layerChosenByUser = vis.params.layerChosenByUser ? vis.params.layerChosenByUser : _common__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_MAP_CHOICE"];
      return vis;
    }
  };
}

/***/ }),

/***/ "./public/region_map_visualization.js":
/*!********************************************!*\
  !*** ./public/region_map_visualization.js ***!
  \********************************************/
/*! exports provided: createRegionMapVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRegionMapVisualization", function() { return createRegionMapVisualization; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tooltip_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip_formatter */ "./public/tooltip_formatter.js");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./common/index.ts");
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







function createRegionMapVisualization({
  http,
  regionmapsConfig,
  uiSettings,
  BaseMapsVisualization,
  getServiceSettings
}) {
  return class RegionMapsVisualization extends BaseMapsVisualization {
    constructor(container, vis) {
      super(container, vis);
      this._vis = this.vis;
      this._choroplethLayer = null;
      this._tooltipFormatter = Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["mapTooltipProvider"])(container, _tooltip_formatter__WEBPACK_IMPORTED_MODULE_3__["tooltipFormatter"]);
    }
    async render(opensearchResponse, visParams) {
      var _this$_choroplethLaye, _this$_choroplethLaye2;
      Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getOpenSearchDashboardsLegacy"])().loadFontAwesome();
      (_this$_choroplethLaye = this._choroplethLayer) === null || _this$_choroplethLaye === void 0 || _this$_choroplethLaye.setLayerChosenByUser(visParams.layerChosenByUser);
      (_this$_choroplethLaye2 = this._choroplethLayer) === null || _this$_choroplethLaye2 === void 0 || _this$_choroplethLaye2.setVisParams(visParams);
      await super.render(opensearchResponse, visParams);

      // fetches geojson data
      if (this._choroplethLayer) {
        this._choroplethLayer.setLayerChosenByUser(visParams.layerChosenByUser);
        this._choroplethLayer.setVisParams(visParams);
        await this._choroplethLayer.whenDataLoaded();
      }
    }
    async _updateData(table) {
      this._chartData = table;
      const termColumn = this._params.bucket ? table.columns[this._params.bucket.accessor] : null;
      const valueColumn = table.columns[this._params.metric.accessor];
      let results;
      if (!this._hasColumns() || !table.rows.length) {
        results = [];
      } else {
        results = table.rows.map(row => {
          const term = row[termColumn.id];
          const value = row[valueColumn.id];
          return {
            term: term,
            value: value
          };
        });
      }
      let selectedLayer;
      if (_common__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MAP_CHOICE"] === this._params.layerChosenByUser) {
        var _selectedLayer;
        selectedLayer = await this._loadConfig(this._params.selectedLayer);
        this._params.selectedJoinField = (_selectedLayer = selectedLayer) === null || _selectedLayer === void 0 ? void 0 : _selectedLayer.fields[0];
      } else {
        selectedLayer = this._params.selectedCustomLayer;
        this._params.selectedJoinField = this._params.selectedCustomJoinField;
      }
      if (!this._params.selectedJoinField && selectedLayer) {
        this._params.selectedJoinField = selectedLayer.fields[0];
      }
      if (!selectedLayer) {
        return;
      }
      await this._updateChoroplethLayerForNewMetrics(selectedLayer.name, selectedLayer.attribution, this._params.showAllShapes, results);
      const metricFieldFormatter = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getFormatService"])().deserialize(this._params.metric.format);
      this._choroplethLayer.setMetrics(results, metricFieldFormatter, valueColumn.name);
      if (termColumn && valueColumn) {
        this._choroplethLayer.setTooltipFormatter(this._tooltipFormatter, metricFieldFormatter, termColumn.name, valueColumn.name);
      }
      this._opensearchDashboardsMap.useUiStateFromVisualization(this._vis);
    }
    async _loadConfig(fileLayerConfig) {
      // Load the selected layer from the metadata-service.
      // Do not use the selectedLayer from the visState.
      // These settings are stored in the URL and can be used to inject dirty display content.

      const {
        escape
      } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! lodash */ "lodash", 7));
      if (fileLayerConfig && (fileLayerConfig.isEMS ||
      //Hosted by EMS. Metadata needs to be resolved through EMS
      fileLayerConfig.layerId && fileLayerConfig.layerId.startsWith(`${_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["ORIGIN"].EMS}.`))
      //fallback for older saved objects
      ) {
        const serviceSettings = await getServiceSettings();
        return await serviceSettings.loadFileLayerConfig(fileLayerConfig);
      }

      //Configured in the opensearch_dashboards.yml. Needs to be resolved through the settings.
      const configuredLayer = regionmapsConfig.layers.find(layer => layer.name === fileLayerConfig.name);
      if (configuredLayer) {
        return {
          ...configuredLayer,
          attribution: escape(configuredLayer.attribution ? configuredLayer.attribution : '')
        };
      }
      return null;
    }
    async _updateParams() {
      await super._updateParams();
      let selectedLayer;
      if (_common__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MAP_CHOICE"] === this._params.layerChosenByUser && this._params.selectedLayer) {
        selectedLayer = await this._loadConfig(this._params.selectedLayer);
      } else if (_common__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_MAP_CHOICE"] === this._params.layerChosenByUser && this._params.selectedCustomLayer) {
        var _this$_params;
        selectedLayer = this._params.selectedCustomLayer;
        this._params.selectedJoinField = (_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.selectedCustomJoinField;
      }
      if (!this._params.selectedJoinField && selectedLayer) {
        this._params.selectedJoinField = selectedLayer.fields[0];
      }
      if (!this._params.selectedJoinField || !selectedLayer) {
        return;
      }
      await this._updateChoroplethLayerForNewProperties(selectedLayer.name, selectedLayer.attribution, this._params.showAllShapes);
      const metricFieldFormatter = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getFormatService"])().deserialize(this._params.metric.format);
      this._choroplethLayer.setLayerChosenByUser(this._params.layerChosenByUser);
      this._choroplethLayer.setJoinField(this._params.selectedJoinField.name);
      this._choroplethLayer.setColorRamp(_charts_public__WEBPACK_IMPORTED_MODULE_2__["truncatedColorMaps"][this._params.colorSchema].value);
      this._choroplethLayer.setLineWeight(this._params.outlineWeight);
      this._choroplethLayer.setTooltipFormatter(this._tooltipFormatter, metricFieldFormatter, this._metricLabel);
    }
    async _updateChoroplethLayerForNewMetrics(name, attribution, showAllData, newMetrics) {
      this._choroplethLayer.setLayerChosenByUser(this._params.layerChosenByUser);
      if (this._choroplethLayer && this._choroplethLayer.canReuseInstanceForNewMetrics(name, showAllData, newMetrics)) {
        return;
      }
      await this._recreateChoroplethLayer(name, attribution, showAllData);
    }
    async _updateChoroplethLayerForNewProperties(name, attribution, showAllData) {
      if (this._choroplethLayer && this._choroplethLayer.canReuseInstance(name, showAllData)) {
        return;
      }
      await this._recreateChoroplethLayer(name, attribution, showAllData);
    }
    async _recreateChoroplethLayer(name, attribution, showAllData) {
      const selectedLayer = _common__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_MAP_CHOICE"] === this._params.layerChosenByUser ? await this._loadConfig(this._params.selectedLayer) : this._params.selectedCustomLayer;
      this._opensearchDashboardsMap.removeLayer(this._choroplethLayer);
      if (this._choroplethLayer) {
        this._choroplethLayer = this._choroplethLayer.cloneChoroplethLayerForNewData(name, attribution, selectedLayer.format, showAllData, selectedLayer.meta, selectedLayer, await getServiceSettings(), (await Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["lazyLoadMapsLegacyModules"])()).L, this._params.layerChosenByUser, http, uiSettings, this.vis.type.editorConfig.collections.dataSourceRefId);
      } else {
        const {
          ChoroplethLayer
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./choropleth_layer */ "./public/choropleth_layer.js"));
        this._choroplethLayer = new ChoroplethLayer(name, attribution, selectedLayer.format, showAllData, selectedLayer.meta, selectedLayer, await getServiceSettings(), (await Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["lazyLoadMapsLegacyModules"])()).L, this._params.layerChosenByUser, http, uiSettings, this.vis.type.editorConfig.collections.dataSourceRefId);
      }
      this._choroplethLayer.setLayerChosenByUser(this._params.layerChosenByUser);
      this._choroplethLayer.on('select', event => {
        const {
          rows,
          columns
        } = this._chartData;
        const rowIndex = rows.findIndex(row => row[columns[0].id] === event);
        this._vis.API.events.filter({
          table: this._chartData,
          column: 0,
          row: rowIndex,
          value: event
        });
      });
      this._choroplethLayer.on('styleChanged', event => {
        const shouldShowWarning = this._params.isDisplayWarning && uiSettings.get('visualization:regionmap:showWarnings');
        if (event.mismatches.length > 0 && shouldShowWarning) {
          Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getNotifications"])().toasts.addWarning({
            title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('regionMap.visualization.unableToShowMismatchesWarningTitle', {
              defaultMessage: 'Unable to show {mismatchesLength} {oneMismatch, plural, one {result} other {results}} on map',
              values: {
                mismatchesLength: event.mismatches.length,
                oneMismatch: event.mismatches.length > 1 ? 0 : 1
              }
            }),
            text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('regionMap.visualization.unableToShowMismatchesWarningText', {
              defaultMessage: "Ensure that each of these term matches a shape on that shape's join field: {mismatches}",
              values: {
                mismatches: event.mismatches ? event.mismatches.join(', ') : ''
              }
            })
          });
        }
      });
      this._opensearchDashboardsMap.addLayer(this._choroplethLayer);
    }
    _hasColumns() {
      return this._chartData && this._chartData.columns.length === 2;
    }
  };
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

function getServices(http) {
  return {
    getCustomIndices: async dataSourceRefId => {
      try {
        return await http.post('../api/geospatial/_indices', {
          body: JSON.stringify({
            index: '*-map'
          }),
          query: {
            dataSourceId: dataSourceRefId
          }
        });
      } catch (e) {
        return e;
      }
    },
    getIndexData: async (indexName, size, dataSourceRefId) => {
      try {
        return await http.post('../api/geospatial/_search', {
          body: JSON.stringify({
            index: indexName,
            size
          }),
          query: {
            dataSourceId: dataSourceRefId
          }
        });
      } catch (e) {
        return e;
      }
    },
    getIndexMapping: async (indexName, dataSourceRefId) => {
      try {
        return await http.post('../api/geospatial/_mappings', {
          body: JSON.stringify({
            index: indexName
          }),
          query: {
            dataSourceId: dataSourceRefId
          }
        });
      } catch (e) {
        return e;
      }
    }
  };
}

/***/ }),

/***/ "./public/tooltip_formatter.js":
/*!*************************************!*\
  !*** ./public/tooltip_formatter.js ***!
  \*************************************/
/*! exports provided: tooltipFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltipFormatter", function() { return tooltipFormatter; });
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

function tooltipFormatter(metric, fieldFormatter, fieldName, metricName) {
  if (!metric) {
    return '';
  }
  const details = [];
  if (fieldName && metric) {
    details.push({
      label: fieldName,
      value: metric.term
    });
  }
  if (metric) {
    details.push({
      label: metricName,
      value: fieldFormatter ? fieldFormatter.convert(metric.value, 'text') : metric.value
    });
  }
  return details;
}

/***/ }),

/***/ "./public/util.ts":
/*!************************!*\
  !*** ./public/util.ts ***!
  \************************/
/*! exports provided: mapToLayerWithId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToLayerWithId", function() { return mapToLayerWithId; });
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__);
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


const mapToLayerWithId = (prefix, layer) => ({
  ...layer,
  layerId: `${prefix}.${layer.name}`,
  isEMS: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__["ORIGIN"].EMS === prefix
});

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

/***/ "plugin/charts/public":
/*!*********************************************!*\
  !*** @osd/bundleRef "plugin/charts/public" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/charts/public');
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

/***/ "react":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.React;

/***/ })

/******/ });
//# sourceMappingURL=regionMap.plugin.js.map