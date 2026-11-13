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
/******/ 		"opensearchDashboardsReact": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "opensearchDashboardsReact.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["opensearchDashboardsReact_bundle_jsonpfunction"] = window["opensearchDashboardsReact_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/classnames/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/classnames/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v7dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/exit_full_screen_button/index.scss?v7dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#1d1e24}.dshExitFullScreenButton__text{line-height:1.2;color:#535966}.dshExitFullScreenButton__icon{color:#535966}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,yHAAyH,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,eAAe,CAAC,8DAA8D,aAAa,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#1d1e24}.dshExitFullScreenButton__text{line-height:1.2;color:#535966}.dshExitFullScreenButton__icon{color:#535966}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v7light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/exit_full_screen_button/index.scss?v7light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(65,78,101,.1),0 6px 12px 0 rgba(65,78,101,.1),0 4px 4px 0 rgba(65,78,101,.1),0 2px 2px 0 rgba(65,78,101,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#000;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#000}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fff}.dshExitFullScreenButton__text{line-height:1.2;color:#98a2b3}.dshExitFullScreenButton__icon{color:#98a2b3}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,yIAAyI,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,eAAe,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,eAAe,CAAC,8DAA8D,UAAU,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(65,78,101,.1),0 6px 12px 0 rgba(65,78,101,.1),0 4px 4px 0 rgba(65,78,101,.1),0 2px 2px 0 rgba(65,78,101,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#000;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#000}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fff}.dshExitFullScreenButton__text{line-height:1.2;color:#98a2b3}.dshExitFullScreenButton__icon{color:#98a2b3}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v8dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/exit_full_screen_button/index.scss?v8dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fcfeff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fcfeff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#0a121a}.dshExitFullScreenButton__text{line-height:1.2;color:#5b6875}.dshExitFullScreenButton__icon{color:#5b6875}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,yHAAyH,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,kBAAkB,CAAC,8DAA8D,aAAa,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fcfeff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fcfeff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#0a121a}.dshExitFullScreenButton__text{line-height:1.2;color:#5b6875}.dshExitFullScreenButton__icon{color:#5b6875}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v8light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/exit_full_screen_button/index.scss?v8light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(82,100,116,.1),0 6px 12px 0 rgba(82,100,116,.1),0 4px 4px 0 rgba(82,100,116,.1),0 2px 2px 0 rgba(82,100,116,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#0a1219;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#0a1219}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fcfeff}.dshExitFullScreenButton__text{line-height:1.2;color:#adb4ba}.dshExitFullScreenButton__icon{color:#adb4ba}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,6IAA6I,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,kBAAkB,CAAC,8DAA8D,aAAa,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(82,100,116,.1),0 6px 12px 0 rgba(82,100,116,.1),0 4px 4px 0 rgba(82,100,116,.1),0 2px 2px 0 rgba(82,100,116,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#0a1219;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#0a1219}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fcfeff}.dshExitFullScreenButton__text{line-height:1.2;color:#adb4ba}.dshExitFullScreenButton__icon{color:#adb4ba}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v9dark":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/exit_full_screen_button/index.scss?v9dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fcfeff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fcfeff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#0f171f}.dshExitFullScreenButton__text{line-height:1.2;color:#5c666f}.dshExitFullScreenButton__icon{color:#5c666f}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,yHAAyH,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,kBAAkB,CAAC,8DAA8D,aAAa,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#fcfeff;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#fcfeff}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#0f171f}.dshExitFullScreenButton__text{line-height:1.2;color:#5c666f}.dshExitFullScreenButton__icon{color:#5c666f}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v9light":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/exit_full_screen_button/index.scss?v9light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(78,92,110,.1),0 6px 12px 0 rgba(78,92,110,.1),0 4px 4px 0 rgba(78,92,110,.1),0 2px 2px 0 rgba(78,92,110,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#0a1219;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#0a1219}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fcfeff}.dshExitFullScreenButton__text{line-height:1.2;color:#adb4ba}.dshExitFullScreenButton__icon{color:#adb4ba}\n", "",{"version":3,"sources":["webpack://./public/exit_full_screen_button/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,yIAAyI,CAAC,QAAQ,CAAC,UAAU,CAAC,cAAc,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC,SAAS,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,+BAA+B,kBAAkB,CAAC,8DAA8D,aAAa,CAAC,+BAA+B,eAAe,CAAC,aAAa,CAAC,+BAA+B,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.dshExitFullScreenButton{box-shadow:0 12px 24px 0 rgba(78,92,110,.1),0 6px 12px 0 rgba(78,92,110,.1),0 4px 4px 0 rgba(78,92,110,.1),0 2px 2px 0 rgba(78,92,110,.1);left:8px;bottom:8px;position:fixed;display:block;padding:4px 8px;border:none;z-index:5;background:#0a1219;border-radius:4px;text-align:left}.dshExitFullScreenButton:hover{background:#0a1219}.dshExitFullScreenButton:hover .dshExitFullScreenButton__icon{color:#fcfeff}.dshExitFullScreenButton__text{line-height:1.2;color:#adb4ba}.dshExitFullScreenButton__icon{color:#adb4ba}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v7dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/field_button/field_button.scss?v7dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:0.875rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#25262e}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,kBAAkB,CAAC,gHAAgH,kGAAkG,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,cAAc,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:0.875rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#25262e}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v7light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/field_button/field_button.scss?v7light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:0.875rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(152,162,179,.2),0 4px 4px -1px rgba(152,162,179,.2),0 2px 2px 0 rgba(152,162,179,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,eAAe,CAAC,gHAAgH,oHAAoH,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,cAAc,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:0.875rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(152,162,179,.2),0 4px 4px -1px rgba(152,162,179,.2),0 2px 2px 0 rgba(152,162,179,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v8dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/field_button/field_button.scss?v8dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:15.75px;font-size:0.875rem;line-height:1.333333;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#101b25}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:13.5px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,kBAAkB,CAAC,gHAAgH,kGAAkG,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,gBAAgB,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:15.75px;font-size:0.875rem;line-height:1.333333;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#101b25}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:13.5px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v8light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/field_button/field_button.scss?v8light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:15.75px;font-size:0.875rem;line-height:1.333333;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fcfeff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(173,180,186,.2),0 4px 4px -1px rgba(173,180,186,.2),0 2px 2px 0 rgba(173,180,186,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:13.5px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,kBAAkB,CAAC,gHAAgH,oHAAoH,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,gBAAgB,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:15.75px;font-size:0.875rem;line-height:1.333333;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fcfeff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(173,180,186,.2),0 4px 4px -1px rgba(173,180,186,.2),0 2px 2px 0 rgba(173,180,186,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:13.5px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v9dark":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/field_button/field_button.scss?v9dark ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:1rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#19222b}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12.000002px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,kBAAkB,CAAC,gHAAgH,kGAAkG,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,qBAAqB,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:1rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#19222b}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12.000002px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v9light":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/field_button/field_button.scss?v9light ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:1rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fcfeff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(173,180,186,.2),0 4px 4px -1px rgba(173,180,186,.2),0 2px 2px 0 rgba(173,180,186,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12.000002px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n", "",{"version":3,"sources":["webpack://./public/field_button/field_button.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,gBAAgB,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,8HAA8H,CAAC,sDAAsD,mGAAmG,CAAC,6BAA6B,kBAAkB,CAAC,gHAAgH,oHAAoH,CAAC,iBAAiB,CAAC,SAAS,CAAC,sHAAsH,WAAW,CAAC,wBAAwB,WAAW,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,sBAAsB,CAAC,2BAA2B,aAAa,CAAC,aAAa,CAAC,gBAAgB,CAAC,sBAAsB,WAAW,CAAC,qBAAqB,CAAC,0BAA0B,aAAa,CAAC,eAAe,CAAC,6BAA6B,gBAAgB,CAAC,uBAAuB,qBAAqB,CAAC,+CAA+C,WAAW,CAAC,sGAAsG,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdFieldButton{font-size:14px;font-size:1rem;line-height:1.5;border-radius:4px;margin-bottom:4px;display:flex;align-items:center;transition:box-shadow 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.osdFieldButton:focus-within,.osdFieldButton-isActive{animation:350ms cubic-bezier(0.694, 0.0482, 0.335, 1) 1 normal forwards focusRingAnimate !important}.osdFieldButton--isDraggable{background:#fcfeff}.osdFieldButton--isDraggable:hover,.osdFieldButton--isDraggable:focus,.osdFieldButton--isDraggable:focus-within{box-shadow:0 6px 12px -1px rgba(173,180,186,.2),0 4px 4px -1px rgba(173,180,186,.2),0 2px 2px 0 rgba(173,180,186,.2);border-radius:4px;z-index:2}.osdFieldButton--isDraggable .osdFieldButton__button:hover,.osdFieldButton--isDraggable .osdFieldButton__button:focus{cursor:grab}.osdFieldButton__button{flex-grow:1;text-align:left;padding:8px;display:flex;align-items:flex-start}.osdFieldButton__fieldIcon{flex-shrink:0;line-height:0;margin-right:8px}.osdFieldButton__name{flex-grow:1;word-break:break-word}.osdFieldButton__infoIcon{flex-shrink:0;margin-left:4px}.osdFieldButton__fieldAction{margin-right:8px}.osdFieldButton--small{font-size:12.000002px}.osdFieldButton--small .osdFieldButton__button{padding:4px}.osdFieldButton--small .osdFieldButton__fieldIcon,.osdFieldButton--small .osdFieldButton__fieldAction{margin-right:4px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v7dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/overview_page/overview_page_header/index.scss?v7dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#141519;border-bottom:1px solid #343741}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#141519;border-bottom:1px solid #343741}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v7light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/overview_page/overview_page_header/index.scss?v7light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#fafbfd;border-bottom:1px solid #d3dae6}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#fafbfd;border-bottom:1px solid #d3dae6}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v8dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/overview_page/overview_page_header/index.scss?v8dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#172430;border-bottom:1px solid #293847}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#172430;border-bottom:1px solid #293847}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v8light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/overview_page/overview_page_header/index.scss?v8light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#f0f2f4;border-bottom:1px solid #d6d9dd}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#f0f2f4;border-bottom:1px solid #d6d9dd}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v9dark":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/overview_page/overview_page_header/index.scss?v9dark ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#02020e;border-bottom:1px solid #2a3540}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#02020e;border-bottom:1px solid #2a3540}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v9light":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/overview_page/overview_page_header/index.scss?v9light ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#f0f2f4;border-bottom:1px solid #d6d9dd}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n", "",{"version":3,"sources":["webpack://./public/overview_page/overview_page_header/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,wBAAwB,CAAC,+BAA+B,CAAC,8BAA8B,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,iEAAiE,mBAAmB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewPageHeader{background-color:#f0f2f4;border-bottom:1px solid #d6d9dd}.osdOverviewPageHeader__inner{margin:0 auto;max-width:1200px;padding:32px 16px}.osdOverviewPageHeader--hasOverlap .osdOverviewPageHeader__inner{padding-bottom:56px}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsReact!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsReact!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['opensearchDashboardsReact']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsReact_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsReact!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsReact!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsReact_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsReact_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/opensearchDashboardsReact/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/opensearch_dashboards_react/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/adapters/index.ts":
/*!**********************************!*\
  !*** ./public/adapters/index.ts ***!
  \**********************************/
/*! exports provided: reactToUiComponent, uiToReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_to_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react_to_ui_component */ "./public/adapters/react_to_ui_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactToUiComponent", function() { return _react_to_ui_component__WEBPACK_IMPORTED_MODULE_0__["reactToUiComponent"]; });

/* harmony import */ var _ui_to_react_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_to_react_component */ "./public/adapters/ui_to_react_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiToReactComponent", function() { return _ui_to_react_component__WEBPACK_IMPORTED_MODULE_1__["uiToReactComponent"]; });

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

/***/ "./public/adapters/react_to_ui_component.ts":
/*!**************************************************!*\
  !*** ./public/adapters/react_to_ui_component.ts ***!
  \**************************************************/
/*! exports provided: reactToUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactToUiComponent", function() { return reactToUiComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
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
 * Transform a React component into a `UiComponent`.
 *
 * @param ReactComp A React component.
 */
const reactToUiComponent = ReactComp => () => {
  let lastEl;
  const render = (el, props) => {
    lastEl = el;
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ReactComp, props), el);
  };
  const unmount = () => {
    if (lastEl) Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(lastEl);
  };
  const comp = {
    render,
    unmount
  };
  return comp;
};

/***/ }),

/***/ "./public/adapters/ui_to_react_component.ts":
/*!**************************************************!*\
  !*** ./public/adapters/ui_to_react_component.ts ***!
  \**************************************************/
/*! exports provided: uiToReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiToReactComponent", function() { return uiToReactComponent; });
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


/**
 * Transforms `UiComponent` into a React component.
 */
const uiToReactComponent = (Comp, as = 'div') => props => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const comp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Comp(), [Comp]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (!ref.current) return;
    comp.render(ref.current, props);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (!comp.unmount) return;
    return () => {
      if (comp.unmount) comp.unmount();
    };
  }, [comp]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, {
    ref
  });
};

/***/ }),

/***/ "./public/app_links/click_handler.ts":
/*!*******************************************!*\
  !*** ./public/app_links/click_handler.ts ***!
  \*******************************************/
/*! exports provided: createNavigateToUrlClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigateToUrlClickHandler", function() { return createNavigateToUrlClickHandler; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./public/app_links/utils.ts");
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


const createNavigateToUrlClickHandler = ({
  container,
  navigateToUrl
}) => {
  return e => {
    if (container == null) {
      return;
    }
    // see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    const target = e.target;
    const link = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getClosestLink"])(target, container);
    if (!link) {
      return;
    }
    if (link.href && (
    // ignore links with empty hrefs
    link.target === '' || link.target === '_self') &&
    // ignore links having a target
    e.button === 0 &&
    // ignore everything but left clicks
    !e.defaultPrevented &&
    // ignore default prevented events
    !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hasActiveModifierKey"])(e) // ignore clicks with modifier keys
    ) {
      e.preventDefault();
      navigateToUrl(link.href);
    }
  };
};

/***/ }),

/***/ "./public/app_links/index.ts":
/*!***********************************!*\
  !*** ./public/app_links/index.ts ***!
  \***********************************/
/*! exports provided: RedirectAppLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redirect_app_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirect_app_link */ "./public/app_links/redirect_app_link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedirectAppLinks", function() { return _redirect_app_link__WEBPACK_IMPORTED_MODULE_0__["RedirectAppLinks"]; });

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

/***/ "./public/app_links/redirect_app_link.tsx":
/*!************************************************!*\
  !*** ./public/app_links/redirect_app_link.tsx ***!
  \************************************************/
/*! exports provided: RedirectAppLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectAppLinks", function() { return RedirectAppLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use/lib/useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _click_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./click_handler */ "./public/app_links/click_handler.ts");
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





/**
 * Utility component that will intercept click events on children anchor (`<a>`) elements to call
 * `application.navigateToUrl` with the link's href. This will trigger SPA friendly navigation
 * when the link points to a valid OpenSearch Dashboards app.
 *
 * @example
 * ```tsx
 * <RedirectCrossAppLinks application={application}>
 *   <a href="/base-path/app/another-app/some-path">Go to another-app</a>
 * </RedirectCrossAppLinks>
 * ```
 *
 * @remarks
 * It is recommended to use the component at the highest possible level of the component tree that would
 * require to handle the links. A good practice is to consider it as a context provider and to use it
 * at the root level of an application or of the page that require the feature.
 */
const RedirectAppLinks = ({
  application,
  children,
  className,
  ...otherProps
}) => {
  const currentAppId = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_2___default()(application.currentAppId$, undefined);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const clickHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => containerRef.current && currentAppId ? Object(_click_handler__WEBPACK_IMPORTED_MODULE_3__["createNavigateToUrlClickHandler"])({
    container: containerRef.current,
    navigateToUrl: application.navigateToUrl
  }) : undefined, [containerRef.current, application, currentAppId]);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
      ref: containerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'osdRedirectCrossAppLinks'),
      onClick: clickHandler
    }, otherProps), children)
  );
};

/***/ }),

/***/ "./public/app_links/utils.ts":
/*!***********************************!*\
  !*** ./public/app_links/utils.ts ***!
  \***********************************/
/*! exports provided: hasActiveModifierKey, getClosestLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasActiveModifierKey", function() { return hasActiveModifierKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestLink", function() { return getClosestLink; });
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
 * Returns true if any modifier key is active on the event, false otherwise.
 */
const hasActiveModifierKey = event => {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
};

/**
 * Returns the closest anchor (`<a>`) element in the element parents (self included) up to the given container (excluded), or undefined if none is found.
 */
const getClosestLink = (element, container) => {
  let current = element;
  while (true) {
    if (current.tagName.toLowerCase() === 'a') {
      return current;
    }
    const parent = current.parentElement;
    if (!parent || parent === document.body || parent === container) {
      break;
    }
    current = parent;
  }
  return undefined;
};

/***/ }),

/***/ "./public/code_editor/index.tsx":
/*!**************************************!*\
  !*** ./public/code_editor/index.tsx ***!
  \**************************************/
/*! exports provided: CodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditor", function() { return CodeEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui_settings */ "./public/ui_settings/index.ts");
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




const LazyBaseEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./code_editor */ "./public/code_editor/code_editor.tsx")));
const Fallback = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDelayRender"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingContent"], {
  lines: 3
}));
const CodeEditor = props => {
  const darkMode = Object(_ui_settings__WEBPACK_IMPORTED_MODULE_2__["useUiSetting"])('theme:darkMode');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fallback, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyBaseEditor, _extends({}, props, {
    useDarkTheme: darkMode
  })));
};

/***/ }),

/***/ "./public/context/context.tsx":
/*!************************************!*\
  !*** ./public/context/context.tsx ***!
  \************************************/
/*! exports provided: context, useOpenSearchDashboards, withOpenSearchDashboards, UseOpenSearchDashboards, createOpenSearchDashboardsReactContext, OpenSearchDashboardsContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOpenSearchDashboards", function() { return useOpenSearchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withOpenSearchDashboards", function() { return withOpenSearchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseOpenSearchDashboards", function() { return UseOpenSearchDashboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOpenSearchDashboardsReactContext", function() { return createOpenSearchDashboardsReactContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsContextProvider", function() { return OpenSearchDashboardsContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../overlays */ "./public/overlays/index.tsx");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications */ "./public/notifications/index.tsx");
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
  useMemo,
  useContext,
  createElement,
  createContext
} = react__WEBPACK_IMPORTED_MODULE_0__;
const defaultContextValue = {
  services: {},
  overlays: Object(_overlays__WEBPACK_IMPORTED_MODULE_1__["createReactOverlays"])({}),
  notifications: Object(_notifications__WEBPACK_IMPORTED_MODULE_2__["createNotifications"])({})
};
const context = createContext(defaultContextValue);
const useOpenSearchDashboards = () => useContext(context);
const withOpenSearchDashboards = type => {
  const EnhancedType = props => {
    const opensearchDashboards = useOpenSearchDashboards();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](type, {
      ...props,
      opensearchDashboards
    });
  };
  return EnhancedType;
};
const UseOpenSearchDashboards = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children(useOpenSearchDashboards()));
const createOpenSearchDashboardsReactContext = services => {
  const value = {
    services,
    overlays: Object(_overlays__WEBPACK_IMPORTED_MODULE_1__["createReactOverlays"])(services),
    notifications: Object(_notifications__WEBPACK_IMPORTED_MODULE_2__["createNotifications"])(services)
  };
  const Provider = ({
    services: newServices = {},
    children
  }) => {
    const oldValue = useOpenSearchDashboards();
    const {
      value: newValue
    } = useMemo(() => createOpenSearchDashboardsReactContext({
      ...services,
      ...oldValue.services,
      ...newServices
    }), [services, oldValue, newServices]);
    return createElement(context.Provider, {
      value: newValue,
      children
    });
  };
  return {
    value,
    Provider,
    Consumer: context.Consumer
  };
};
const {
  Provider: OpenSearchDashboardsContextProvider
} = createOpenSearchDashboardsReactContext({});

/***/ }),

/***/ "./public/context/index.ts":
/*!*********************************!*\
  !*** ./public/context/index.ts ***!
  \*********************************/
/*! exports provided: context, createOpenSearchDashboardsReactContext, OpenSearchDashboardsContextProvider, useOpenSearchDashboards, withOpenSearchDashboards, UseOpenSearchDashboards, OpenSearchDashboardsReactContext, OpenSearchDashboardsReactContextValue, OpenSearchDashboardsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./public/context/context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "context", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOpenSearchDashboardsReactContext", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["createOpenSearchDashboardsReactContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsContextProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["OpenSearchDashboardsContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["useOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["UseOpenSearchDashboards"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/context/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsReactContext", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["OpenSearchDashboardsReactContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsReactContextValue", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["OpenSearchDashboardsReactContextValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsServices", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["OpenSearchDashboardsServices"]; });

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

/***/ "./public/context/types.ts":
/*!*********************************!*\
  !*** ./public/context/types.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/exit_full_screen_button/exit_full_screen_button.tsx":
/*!********************************************************************!*\
  !*** ./public/exit_full_screen_button/exit_full_screen_button.tsx ***!
  \********************************************************************/
/*! exports provided: ExitFullScreenButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitFullScreenButton", function() { return ExitFullScreenButton; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./public/exit_full_screen_button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
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






class ExitFullScreenButtonUi extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "onKeyDown", e => {
      if (e.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["keys"].ESCAPE) {
        this.props.onExitFullScreenMode();
      }
    });
  }
  UNSAFE_componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);
  }
  render() {
    const colorScheme = this.props.logos.colorScheme !== 'dark' ? 'dark' : 'light';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      "aria-live": "polite"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.exitFullScreenButton.fullScreenModeDescription', {
      defaultMessage: 'In full screen mode, press ESC to exit.'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.exitFullScreenButton.exitFullScreenModeButtonAriaLabel', {
        defaultMessage: 'Exit full screen mode'
      }),
      className: "dshExitFullScreenButton",
      onClick: this.props.onExitFullScreenMode,
      "data-test-subj": "exitFullScreenModeLogo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      component: "span",
      responsive: false,
      alignItems: "center",
      gutterSize: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
      type: this.props.logos.Mark[colorScheme].url,
      size: "l"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false,
      "data-test-subj": "exitFullScreenModeText"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      size: "s",
      className: "dshExitFullScreenButton__text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.exitFullScreenButton.exitFullScreenModeButtonText', {
      defaultMessage: 'Exit full screen'
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
      type: "fullScreen",
      className: "dshExitFullScreenButton__icon"
    }))))));
  }
}
const ExitFullScreenButton = ExitFullScreenButtonUi;

/***/ }),

/***/ "./public/exit_full_screen_button/index.scss":
/*!***************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "./public/exit_full_screen_button/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "./public/exit_full_screen_button/index.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/exit_full_screen_button/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/exit_full_screen_button/index.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./index.scss?v9dark */ "./public/exit_full_screen_button/index.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./index.scss?v9light */ "./public/exit_full_screen_button/index.scss?v9light");
}

/***/ }),

/***/ "./public/exit_full_screen_button/index.scss?v7dark":
/*!**********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v7dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v7dark");

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

/***/ "./public/exit_full_screen_button/index.scss?v7light":
/*!***********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v7light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v7light");

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

/***/ "./public/exit_full_screen_button/index.scss?v8dark":
/*!**********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v8dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./index.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v8dark");

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

/***/ "./public/exit_full_screen_button/index.scss?v8light":
/*!***********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v8light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./index.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v8light");

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

/***/ "./public/exit_full_screen_button/index.scss?v9dark":
/*!**********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v9dark ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./index.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v9dark");

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

/***/ "./public/exit_full_screen_button/index.scss?v9light":
/*!***********************************************************!*\
  !*** ./public/exit_full_screen_button/index.scss?v9light ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/exit_full_screen_button/index.scss?v9light");

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

/***/ "./public/exit_full_screen_button/index.tsx":
/*!**************************************************!*\
  !*** ./public/exit_full_screen_button/index.tsx ***!
  \**************************************************/
/*! exports provided: ExitFullScreenButton, ExitFullScreenButtonProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exit_full_screen_button */ "./public/exit_full_screen_button/exit_full_screen_button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExitFullScreenButton", function() { return _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_0__["ExitFullScreenButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExitFullScreenButtonProps", function() { return _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_0__["ExitFullScreenButtonProps"]; });

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

/***/ "./public/field_button/field_button.scss":
/*!***********************************************!*\
  !*** ./public/field_button/field_button.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./field_button.scss?v7dark */ "./public/field_button/field_button.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./field_button.scss?v7light */ "./public/field_button/field_button.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./field_button.scss?v8dark */ "./public/field_button/field_button.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./field_button.scss?v8light */ "./public/field_button/field_button.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./field_button.scss?v9dark */ "./public/field_button/field_button.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./field_button.scss?v9light */ "./public/field_button/field_button.scss?v9light");
}

/***/ }),

/***/ "./public/field_button/field_button.scss?v7dark":
/*!******************************************************!*\
  !*** ./public/field_button/field_button.scss?v7dark ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./field_button.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v7dark");

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

/***/ "./public/field_button/field_button.scss?v7light":
/*!*******************************************************!*\
  !*** ./public/field_button/field_button.scss?v7light ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./field_button.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v7light");

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

/***/ "./public/field_button/field_button.scss?v8dark":
/*!******************************************************!*\
  !*** ./public/field_button/field_button.scss?v8dark ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./field_button.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v8dark");

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

/***/ "./public/field_button/field_button.scss?v8light":
/*!*******************************************************!*\
  !*** ./public/field_button/field_button.scss?v8light ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./field_button.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v8light");

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

/***/ "./public/field_button/field_button.scss?v9dark":
/*!******************************************************!*\
  !*** ./public/field_button/field_button.scss?v9dark ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./field_button.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v9dark");

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

/***/ "./public/field_button/field_button.scss?v9light":
/*!*******************************************************!*\
  !*** ./public/field_button/field_button.scss?v9light ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./field_button.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/field_button/field_button.scss?v9light");

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

/***/ "./public/field_button/field_button.tsx":
/*!**********************************************!*\
  !*** ./public/field_button/field_button.tsx ***!
  \**********************************************/
/*! exports provided: SIZES, FieldButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldButton", function() { return FieldButton; });
/* harmony import */ var _field_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_button.scss */ "./public/field_button/field_button.scss");
/* harmony import */ var _field_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_field_button_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




const sizeToClassNameMap = {
  s: 'osdFieldButton--small',
  m: null
};
const SIZES = Object.keys(sizeToClassNameMap);
function FieldButton({
  size = 'm',
  isActive = false,
  fieldIcon,
  fieldName,
  fieldInfoIcon,
  fieldAction,
  className,
  isDraggable = false,
  onClick,
  dataTestSubj,
  buttonProps,
  ...rest
}) {
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('osdFieldButton', size ? sizeToClassNameMap[size] : null, {
    'osdFieldButton-isActive': isActive
  }, {
    'osdFieldButton--isDraggable': isDraggable
  }, className);
  const contentClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('osd-resetFocusState', 'osdFieldButton__button');
  const innerContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, fieldIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "osdFieldButton__fieldIcon"
  }, fieldIcon), fieldName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "osdFieldButton__name"
  }, fieldName), fieldInfoIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "osdFieldButton__infoIcon"
  }, fieldInfoIcon));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _extends({
    className: classes
  }, rest), onClick ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", _extends({
    onClick: e => {
      if (e.type === 'click') {
        e.currentTarget.focus();
      }
      onClick();
    },
    "data-test-subj": dataTestSubj,
    className: contentClasses
  }, buttonProps), innerContent) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: contentClasses,
    "data-test-subj": dataTestSubj
  }, innerContent), fieldAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "osdFieldButton__fieldAction"
  }, fieldAction));
}

/***/ }),

/***/ "./public/field_button/index.ts":
/*!**************************************!*\
  !*** ./public/field_button/index.ts ***!
  \**************************************/
/*! exports provided: SIZES, FieldButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_button */ "./public/field_button/field_button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return _field_button__WEBPACK_IMPORTED_MODULE_0__["SIZES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldButton", function() { return _field_button__WEBPACK_IMPORTED_MODULE_0__["FieldButton"]; });

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

/***/ "./public/field_icon/field_icon.tsx":
/*!******************************************!*\
  !*** ./public/field_icon/field_icon.tsx ***!
  \******************************************/
/*! exports provided: typeToEuiIconMap, FieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeToEuiIconMap", function() { return typeToEuiIconMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldIcon", function() { return FieldIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
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




// defaultIcon => a unknown datatype
const defaultIcon = {
  iconType: 'questionInCircle',
  color: 'gray'
};
const typeToEuiIconMap = {
  boolean: {
    iconType: 'tokenBoolean'
  },
  // icon for an index pattern mapping conflict in discover
  conflict: {
    iconType: 'alert',
    color: 'euiVisColor9'
  },
  date: {
    iconType: 'tokenDate'
  },
  geo_point: {
    iconType: 'tokenGeo'
  },
  geo_shape: {
    iconType: 'tokenGeo'
  },
  ip: {
    iconType: 'tokenIP'
  },
  // is a plugin's data type https://opensearch.org/docs/latest/opensearch/install/plugins/#available-plugins
  murmur3: {
    iconType: 'tokenFile'
  },
  number: {
    iconType: 'tokenNumber'
  },
  _source: {
    iconType: 'editorCodeBlock',
    color: 'gray'
  },
  string: {
    iconType: 'tokenString'
  },
  nested: {
    iconType: 'tokenNested'
  }
};

/**
 * Field token icon used across the app
 */
function FieldIcon({
  type,
  label,
  size = 's',
  scripted,
  className,
  ...rest
}) {
  const token = typeToEuiIconMap[type] || defaultIcon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToken"], _extends({}, token, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('osdFieldIcon', className),
    "aria-label": label || type,
    title: label || type,
    size: size,
    fill: scripted ? 'dark' : undefined
  }, rest));
}

/***/ }),

/***/ "./public/field_icon/index.ts":
/*!************************************!*\
  !*** ./public/field_icon/index.ts ***!
  \************************************/
/*! exports provided: typeToEuiIconMap, FieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field_icon */ "./public/field_icon/field_icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeToEuiIconMap", function() { return _field_icon__WEBPACK_IMPORTED_MODULE_0__["typeToEuiIconMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldIcon", function() { return _field_icon__WEBPACK_IMPORTED_MODULE_0__["FieldIcon"]; });

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

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: CodeEditor, ExitFullScreenButton, ExitFullScreenButtonProps, context, createOpenSearchDashboardsReactContext, OpenSearchDashboardsContextProvider, useOpenSearchDashboards, withOpenSearchDashboards, UseOpenSearchDashboards, OpenSearchDashboardsReactContext, OpenSearchDashboardsReactContextValue, OpenSearchDashboardsServices, OverviewPageFooter, OverviewPageHeader, createReactOverlays, useUiSetting, useUiSetting$, typeToEuiIconMap, FieldIcon, SIZES, FieldButton, TableListView, Panel, PanelsContainer, reactRouterNavigate, reactRouterOnClickHandler, getScopedBreadcrumbs, ValidatedDualRange, Value, createNotifications, Markdown, MarkdownSimple, reactToUiComponent, uiToReactComponent, useUrlTracker, toMountPoint, MountPointPortal, RedirectAppLinks, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _code_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code_editor */ "./public/code_editor/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeEditor", function() { return _code_editor__WEBPACK_IMPORTED_MODULE_0__["CodeEditor"]; });

/* harmony import */ var _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exit_full_screen_button */ "./public/exit_full_screen_button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExitFullScreenButton", function() { return _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_1__["ExitFullScreenButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExitFullScreenButtonProps", function() { return _exit_full_screen_button__WEBPACK_IMPORTED_MODULE_1__["ExitFullScreenButtonProps"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./public/context/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "context", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOpenSearchDashboardsReactContext", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["createOpenSearchDashboardsReactContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsContextProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["useOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["withOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UseOpenSearchDashboards", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["UseOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsReactContext", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsReactContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsReactContextValue", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsReactContextValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsServices", function() { return _context__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsServices"]; });

/* harmony import */ var _overview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview_page */ "./public/overview_page/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageFooter", function() { return _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPageFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageHeader", function() { return _overview_page__WEBPACK_IMPORTED_MODULE_3__["OverviewPageHeader"]; });

/* harmony import */ var _overlays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays */ "./public/overlays/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReactOverlays", function() { return _overlays__WEBPACK_IMPORTED_MODULE_4__["createReactOverlays"]; });

/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui_settings */ "./public/ui_settings/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUiSetting", function() { return _ui_settings__WEBPACK_IMPORTED_MODULE_5__["useUiSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUiSetting$", function() { return _ui_settings__WEBPACK_IMPORTED_MODULE_5__["useUiSetting$"]; });

/* harmony import */ var _field_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field_icon */ "./public/field_icon/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeToEuiIconMap", function() { return _field_icon__WEBPACK_IMPORTED_MODULE_6__["typeToEuiIconMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldIcon", function() { return _field_icon__WEBPACK_IMPORTED_MODULE_6__["FieldIcon"]; });

/* harmony import */ var _field_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field_button */ "./public/field_button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIZES", function() { return _field_button__WEBPACK_IMPORTED_MODULE_7__["SIZES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldButton", function() { return _field_button__WEBPACK_IMPORTED_MODULE_7__["FieldButton"]; });

/* harmony import */ var _table_list_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table_list_view */ "./public/table_list_view/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableListView", function() { return _table_list_view__WEBPACK_IMPORTED_MODULE_8__["TableListView"]; });

/* harmony import */ var _split_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./split_panel */ "./public/split_panel/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _split_panel__WEBPACK_IMPORTED_MODULE_9__["Panel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelsContainer", function() { return _split_panel__WEBPACK_IMPORTED_MODULE_9__["PanelsContainer"]; });

/* harmony import */ var _react_router_navigate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./react_router_navigate */ "./public/react_router_navigate/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterNavigate", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_10__["reactRouterNavigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterOnClickHandler", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_10__["reactRouterOnClickHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScopedBreadcrumbs", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_10__["getScopedBreadcrumbs"]; });

/* harmony import */ var _validated_range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validated_range */ "./public/validated_range/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidatedDualRange", function() { return _validated_range__WEBPACK_IMPORTED_MODULE_11__["ValidatedDualRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _validated_range__WEBPACK_IMPORTED_MODULE_11__["Value"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notifications */ "./public/notifications/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNotifications", function() { return _notifications__WEBPACK_IMPORTED_MODULE_12__["createNotifications"]; });

/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./markdown */ "./public/markdown/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return _markdown__WEBPACK_IMPORTED_MODULE_13__["Markdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkdownSimple", function() { return _markdown__WEBPACK_IMPORTED_MODULE_13__["MarkdownSimple"]; });

/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adapters */ "./public/adapters/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactToUiComponent", function() { return _adapters__WEBPACK_IMPORTED_MODULE_14__["reactToUiComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uiToReactComponent", function() { return _adapters__WEBPACK_IMPORTED_MODULE_14__["uiToReactComponent"]; });

/* harmony import */ var _use_url_tracker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./use_url_tracker */ "./public/use_url_tracker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUrlTracker", function() { return _use_url_tracker__WEBPACK_IMPORTED_MODULE_15__["useUrlTracker"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util */ "./public/util/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMountPoint", function() { return _util__WEBPACK_IMPORTED_MODULE_16__["toMountPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MountPointPortal", function() { return _util__WEBPACK_IMPORTED_MODULE_16__["MountPointPortal"]; });

/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app_links */ "./public/app_links/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedirectAppLinks", function() { return _app_links__WEBPACK_IMPORTED_MODULE_17__["RedirectAppLinks"]; });

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




















/** Custom branding configurations for opensearch dashboards react plugin */

/** dummy plugin, we just want opensearchDashboardsReact to have its own bundle */
function plugin() {
  return new class OpenSearchDashboardsReactPlugin {
    setup() {}
    start() {}
  }();
}

/***/ }),

/***/ "./public/markdown/index.tsx":
/*!***********************************!*\
  !*** ./public/markdown/index.tsx ***!
  \***********************************/
/*! exports provided: MarkdownSimple, Markdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownSimple", function() { return MarkdownSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markdown", function() { return Markdown; });
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



const Fallback = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDelayRender"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingContent"], {
  lines: 3
}));
const LazyMarkdownSimple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./markdown_simple */ "./public/markdown/markdown_simple.tsx")));
const MarkdownSimple = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fallback, null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyMarkdownSimple, props));
const LazyMarkdown = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./markdown */ "./public/markdown/markdown.tsx")));
const Markdown = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fallback, null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyMarkdown, props));

/***/ }),

/***/ "./public/notifications/create_notifications.tsx":
/*!*******************************************************!*\
  !*** ./public/notifications/create_notifications.tsx ***!
  \*******************************************************/
/*! exports provided: createNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotifications", function() { return createNotifications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./public/util/index.ts");
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



const createNotifications = services => {
  const show = ({
    title,
    body,
    color,
    iconType,
    toastLifeTimeMs,
    onClose
  }) => {
    if (!services.notifications) {
      throw new TypeError('Could not show notification as notifications service is not available.');
    }
    services.notifications.toasts.add({
      title: Object(_util__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])(title),
      text: Object(_util__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, body || null)),
      color,
      iconType,
      toastLifeTimeMs,
      onClose
    });
  };
  const success = input => show({
    color: 'success',
    iconType: 'check',
    ...input
  });
  const warning = input => show({
    color: 'warning',
    iconType: 'help',
    ...input
  });
  const danger = input => show({
    color: 'danger',
    iconType: 'alert',
    ...input
  });
  const notifications = {
    toasts: {
      show,
      success,
      warning,
      danger
    }
  };
  return notifications;
};

/***/ }),

/***/ "./public/notifications/index.tsx":
/*!****************************************!*\
  !*** ./public/notifications/index.tsx ***!
  \****************************************/
/*! exports provided: createNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./public/notifications/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _create_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_notifications */ "./public/notifications/create_notifications.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNotifications", function() { return _create_notifications__WEBPACK_IMPORTED_MODULE_1__["createNotifications"]; });

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

/***/ "./public/notifications/types.ts":
/*!***************************************!*\
  !*** ./public/notifications/types.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/overlays/create_react_overlays.tsx":
/*!***************************************************!*\
  !*** ./public/overlays/create_react_overlays.tsx ***!
  \***************************************************/
/*! exports provided: createReactOverlays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactOverlays", function() { return createReactOverlays; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./public/util/index.ts");
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



const createReactOverlays = services => {
  const checkCoreService = () => {
    if (!services.overlays) {
      throw new TypeError('Could not show overlay as overlays service is not available.');
    }
  };
  const openFlyout = (node, options) => {
    checkCoreService();
    return services.overlays.openFlyout(Object(_util__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, node)), options);
  };
  const openModal = (node, options) => {
    checkCoreService();
    return services.overlays.openModal(Object(_util__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, node)), options);
  };
  const sidecar = () => {
    checkCoreService();
    return services.overlays.sidecar;
  };
  const overlays = {
    openFlyout,
    openModal,
    sidecar
  };
  return overlays;
};

/***/ }),

/***/ "./public/overlays/index.tsx":
/*!***********************************!*\
  !*** ./public/overlays/index.tsx ***!
  \***********************************/
/*! exports provided: createReactOverlays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./public/overlays/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _create_react_overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_react_overlays */ "./public/overlays/create_react_overlays.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReactOverlays", function() { return _create_react_overlays__WEBPACK_IMPORTED_MODULE_1__["createReactOverlays"]; });

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

/***/ "./public/overlays/types.ts":
/*!**********************************!*\
  !*** ./public/overlays/types.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/overview_page/index.ts":
/*!***************************************!*\
  !*** ./public/overview_page/index.ts ***!
  \***************************************/
/*! exports provided: OverviewPageFooter, OverviewPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_page_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview_page_footer */ "./public/overview_page/overview_page_footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageFooter", function() { return _overview_page_footer__WEBPACK_IMPORTED_MODULE_0__["OverviewPageFooter"]; });

/* harmony import */ var _overview_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview_page_header */ "./public/overview_page/overview_page_header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageHeader", function() { return _overview_page_header__WEBPACK_IMPORTED_MODULE_1__["OverviewPageHeader"]; });

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

/***/ "./public/overview_page/overview_page_footer/index.ts":
/*!************************************************************!*\
  !*** ./public/overview_page/overview_page_footer/index.ts ***!
  \************************************************************/
/*! exports provided: OverviewPageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_page_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview_page_footer */ "./public/overview_page/overview_page_footer/overview_page_footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageFooter", function() { return _overview_page_footer__WEBPACK_IMPORTED_MODULE_0__["OverviewPageFooter"]; });

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

/***/ "./public/overview_page/overview_page_footer/overview_page_footer.tsx":
/*!****************************************************************************!*\
  !*** ./public/overview_page/overview_page_footer/overview_page_footer.tsx ***!
  \****************************************************************************/
/*! exports provided: OverviewPageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageFooter", function() { return OverviewPageFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app_links */ "./public/app_links/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./public/context/index.ts");
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui_settings */ "./public/ui_settings/index.ts");
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








const OverviewPageFooter = ({
  addBasePath,
  path
}) => {
  var _application$capabili;
  const [defaultRoute, setDefaultRoute] = Object(_ui_settings__WEBPACK_IMPORTED_MODULE_6__["useUiSetting$"])('defaultRoute');
  const {
    services: {
      application,
      notifications: {
        toasts
      }
    }
  } = Object(_context__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])();
  const {
    show,
    save
  } = (_application$capabili = application.capabilities.advancedSettings) !== null && _application$capabili !== void 0 ? _application$capabili : {};
  const isAdvancedSettingsEnabled = show && save;
  const defaultRoutebutton = defaultRoute === path ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_links__WEBPACK_IMPORTED_MODULE_4__["RedirectAppLinks"], {
    application: application
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    className: "osdOverviewPageFooter__button",
    flush: "both",
    href: addBasePath('/app/management/opensearch-dashboards/settings#defaultRoute'),
    iconType: "home",
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "opensearch-dashboards-react.pageFooter.changeHomeRouteLink",
    defaultMessage: "Display a different page on log in"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    className: "osdOverviewPageFooter__button",
    flush: "both",
    iconType: "home",
    onClick: () => {
      setDefaultRoute(path);
      toasts.addSuccess({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('opensearch-dashboards-react.pageFooter.changeDefaultRouteSuccessToast', {
          defaultMessage: 'Landing page updated'
        })
      });
    },
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "opensearch-dashboards-react.pageFooter.makeDefaultRouteLink",
    defaultMessage: "Make this my landing page"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "osdOverviewPageFooter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, isAdvancedSettingsEnabled ? defaultRoutebutton : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_links__WEBPACK_IMPORTED_MODULE_4__["RedirectAppLinks"], {
    application: application
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    className: "osdOverviewPageFooter__button",
    "data-test-subj": "allPlugins",
    flush: "both",
    href: addBasePath('/app/home#/feature_directory'),
    iconType: "apps",
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "opensearch-dashboards-react.pageFooter.appDirectoryButtonLabel",
    defaultMessage: "View app directory"
  })))))));
};

/***/ }),

/***/ "./public/overview_page/overview_page_header/index.scss":
/*!**************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "./public/overview_page/overview_page_header/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "./public/overview_page/overview_page_header/index.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/overview_page/overview_page_header/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/overview_page/overview_page_header/index.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./index.scss?v9dark */ "./public/overview_page/overview_page_header/index.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./index.scss?v9light */ "./public/overview_page/overview_page_header/index.scss?v9light");
}

/***/ }),

/***/ "./public/overview_page/overview_page_header/index.scss?v7dark":
/*!*********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v7dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v7dark");

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

/***/ "./public/overview_page/overview_page_header/index.scss?v7light":
/*!**********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v7light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v7light");

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

/***/ "./public/overview_page/overview_page_header/index.scss?v8dark":
/*!*********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v8dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./index.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v8dark");

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

/***/ "./public/overview_page/overview_page_header/index.scss?v8light":
/*!**********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v8light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./index.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v8light");

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

/***/ "./public/overview_page/overview_page_header/index.scss?v9dark":
/*!*********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v9dark ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./index.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v9dark");

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

/***/ "./public/overview_page/overview_page_header/index.scss?v9light":
/*!**********************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.scss?v9light ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/overview_page/overview_page_header/index.scss?v9light");

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

/***/ "./public/overview_page/overview_page_header/index.ts":
/*!************************************************************!*\
  !*** ./public/overview_page/overview_page_header/index.ts ***!
  \************************************************************/
/*! exports provided: OverviewPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview_page_header */ "./public/overview_page/overview_page_header/overview_page_header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewPageHeader", function() { return _overview_page_header__WEBPACK_IMPORTED_MODULE_0__["OverviewPageHeader"]; });

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

/***/ "./public/overview_page/overview_page_header/overview_page_header.tsx":
/*!****************************************************************************!*\
  !*** ./public/overview_page/overview_page_header/overview_page_header.tsx ***!
  \****************************************************************************/
/*! exports provided: OverviewPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageHeader", function() { return OverviewPageHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app_links */ "./public/app_links/index.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./public/context/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./public/overview_page/overview_page_header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
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







const OverviewPageHeader = ({
  hideToolbar,
  showIcon = false,
  overlap,
  showDevToolsLink,
  showManagementLink,
  title,
  addBasePath,
  logos
}) => {
  const {
    services: {
      application
    }
  } = Object(_context__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])();
  const {
    management: isManagementEnabled,
    dev_tools: isDevToolsEnabled
  } = application.capabilities.navLinks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: `osdOverviewPageHeader ${overlap ? 'osdOverviewPageHeader--hasOverlap' : 'osdOverviewPageHeader--noOverlap'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "osdOverviewPageHeader__inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "m",
    responsive: false
  }, showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    size: "xxl",
    type: logos.Mark.url,
    "data-test-subj": `osdOverviewPageHeaderLogo`,
    "data-test-logo": logos.Mark.url
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "osdOverviewPageHeader__title"
  }, title))))), !hideToolbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: "osdOverviewPageHeader__actions",
    responsive: false,
    wrap: true
  }, showManagementLink && isManagementEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "osdOverviewPageHeader__actionItem",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_links__WEBPACK_IMPORTED_MODULE_3__["RedirectAppLinks"], {
    application: application
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
    className: "osdOverviewPageHeader__actionButton",
    flush: "both",
    iconType: "gear",
    href: addBasePath('/app/management')
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.osdOverviewPageHeader.stackManagementButtonLabel', {
    defaultMessage: 'Manage'
  })))) : null, showDevToolsLink && isDevToolsEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "osdOverviewPageHeader__actionItem",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_links__WEBPACK_IMPORTED_MODULE_3__["RedirectAppLinks"], {
    application: application
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
    className: "osdOverviewPageHeader__actionButton",
    flush: "both",
    iconType: "wrench",
    href: addBasePath('/app/dev_tools#/console')
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.osdOverviewPageHeader.devToolsButtonLabel', {
    defaultMessage: 'Dev tools'
  })))) : null)))));
};

/***/ }),

/***/ "./public/react_router_navigate/index.ts":
/*!***********************************************!*\
  !*** ./public/react_router_navigate/index.ts ***!
  \***********************************************/
/*! exports provided: reactRouterNavigate, reactRouterOnClickHandler, getScopedBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_router_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react_router_navigate */ "./public/react_router_navigate/react_router_navigate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterNavigate", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_0__["reactRouterNavigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterOnClickHandler", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_0__["reactRouterOnClickHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScopedBreadcrumbs", function() { return _react_router_navigate__WEBPACK_IMPORTED_MODULE_0__["getScopedBreadcrumbs"]; });

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

/***/ "./public/react_router_navigate/react_router_navigate.tsx":
/*!****************************************************************!*\
  !*** ./public/react_router_navigate/react_router_navigate.tsx ***!
  \****************************************************************/
/*! exports provided: toLocationObject, reactRouterNavigate, reactRouterOnClickHandler, getScopedBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocationObject", function() { return toLocationObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterNavigate", function() { return reactRouterNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterOnClickHandler", function() { return reactRouterOnClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScopedBreadcrumbs", function() { return getScopedBreadcrumbs; });
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

const isModifiedEvent = event => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
const isLeftClickEvent = event => event.button === 0;
const toLocationObject = to => typeof to === 'string' ? {
  pathname: to
} : to;
const reactRouterNavigate = (history, to, onClickCallback) => ({
  href: history.createHref(toLocationObject(to)),
  onClick: reactRouterOnClickHandler(history, toLocationObject(to), onClickCallback)
});
const reactRouterOnClickHandler = (history, to, onClickCallback) => event => {
  if (onClickCallback) {
    onClickCallback(event);
  }
  if (event.defaultPrevented) {
    return;
  }
  if (event.target.getAttribute('target')) {
    return;
  }
  if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    return;
  }

  // prevents page reload
  event.preventDefault();
  history.push(toLocationObject(to));
};
const getScopedBreadcrumbs = (crumbs = [], appHistory) => {
  const wrapBreadcrumb = (item, scopedHistory) => ({
    ...item,
    ...(item.href ? reactRouterNavigate(scopedHistory, item.href) : {})
  });
  return crumbs.map(item => wrapBreadcrumb(item, appHistory));
};

/***/ }),

/***/ "./public/split_panel/components/resizer.tsx":
/*!***************************************************!*\
  !*** ./public/split_panel/components/resizer.tsx ***!
  \***************************************************/
/*! exports provided: Resizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resizer", function() { return Resizer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




function Resizer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, props, {
    "data-test-subj": "splitPanelResizer",
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.splitPanel.adjustPanelSizeAriaLabel', {
      defaultMessage: 'Press left/right to adjust panels size'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "grabHorizontal"
  }));
}

/***/ }),

/***/ "./public/split_panel/containers/panel.tsx":
/*!*************************************************!*\
  !*** ./public/split_panel/containers/panel.tsx ***!
  \*************************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./public/split_panel/context.tsx");
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



function Panel({
  children,
  className,
  initialWidth = 100,
  style = {}
}) {
  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`${initialWidth}%`);
  const {
    registry
  } = Object(_context__WEBPACK_IMPORTED_MODULE_1__["usePanelContext"])();
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    registry.registerPanel({
      width: initialWidth,
      setWidth(value) {
        setWidth(value + '%');
        this.width = value;
      },
      getWidth() {
        return divRef.current.getBoundingClientRect().width;
      }
    });
  }, [initialWidth, registry]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: divRef,
    style: {
      ...style,
      width,
      display: 'flex'
    }
  }, children);
}

/***/ }),

/***/ "./public/split_panel/containers/panel_container.tsx":
/*!***********************************************************!*\
  !*** ./public/split_panel/containers/panel_container.tsx ***!
  \***********************************************************/
/*! exports provided: PanelsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsContainer", function() { return PanelsContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./public/split_panel/context.tsx");
/* harmony import */ var _components_resizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/resizer */ "./public/split_panel/components/resizer.tsx");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registry */ "./public/split_panel/registry.ts");
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






const initialState = {
  isDragging: false,
  currentResizerPos: -1
};
const pxToPercent = (proportion, whole) => proportion / whole * 100;
function PanelsContainer({
  children,
  className,
  onPanelWidthChange,
  resizerClassName
}) {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
  const [firstChild, secondChild] = childrenArray;
  const registryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new _registry__WEBPACK_IMPORTED_MODULE_4__["PanelRegistry"]());
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const getContainerWidth = () => {
    return containerRef.current.getBoundingClientRect().width;
  };
  const handleMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setState({
      ...state,
      isDragging: true,
      currentResizerPos: event.clientX
    });
  }, [state]);
  const handleKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ev => {
    const {
      key
    } = ev;
    if (key === _elastic_eui__WEBPACK_IMPORTED_MODULE_1__["keys"].ARROW_LEFT || key === _elastic_eui__WEBPACK_IMPORTED_MODULE_1__["keys"].ARROW_RIGHT) {
      ev.preventDefault();
      const {
        current: registry
      } = registryRef;
      const [left, right] = registry.getPanels();
      const leftPercent = left.width - (key === _elastic_eui__WEBPACK_IMPORTED_MODULE_1__["keys"].ARROW_LEFT ? 1 : -1);
      const rightPercent = right.width - (key === _elastic_eui__WEBPACK_IMPORTED_MODULE_1__["keys"].ARROW_RIGHT ? 1 : -1);
      left.setWidth(leftPercent);
      right.setWidth(rightPercent);
      if (onPanelWidthChange) {
        onPanelWidthChange([leftPercent, rightPercent]);
      }
    }
  }, [onPanelWidthChange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (true) {
      // For now we only support bi-split
      if (childrenArray.length > 2) {
        // eslint-disable-next-line no-console
        console.warn('[Split Panels Container] Detected more than two children; ignoring additional children.');
      }
    }
  }, [childrenArray.length]);
  const childrenWithResizer = [firstChild, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_resizer__WEBPACK_IMPORTED_MODULE_3__["Resizer"], {
    key: 'resizer',
    className: resizerClassName,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown
  }), secondChild];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["PanelContextProvider"], {
    registry: registryRef.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    ref: containerRef,
    style: {
      display: 'flex',
      height: '100%',
      width: '100%'
    },
    onMouseMove: event => {
      if (state.isDragging) {
        const {
          clientX: x
        } = event;
        const {
          current: registry
        } = registryRef;
        const [left, right] = registry.getPanels();
        const delta = x - state.currentResizerPos;
        const containerWidth = getContainerWidth();
        const leftPercent = pxToPercent(left.getWidth() + delta, containerWidth);
        const rightPercent = pxToPercent(right.getWidth() - delta, containerWidth);
        left.setWidth(leftPercent);
        right.setWidth(rightPercent);
        if (onPanelWidthChange) {
          onPanelWidthChange([leftPercent, rightPercent]);
        }
        setState({
          ...state,
          currentResizerPos: x
        });
      }
    },
    onMouseUp: () => {
      setState(initialState);
    }
  }, childrenWithResizer));
}

/***/ }),

/***/ "./public/split_panel/context.tsx":
/*!****************************************!*\
  !*** ./public/split_panel/context.tsx ***!
  \****************************************/
/*! exports provided: PanelContextProvider, usePanelContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContextProvider", function() { return PanelContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanelContext", function() { return usePanelContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry */ "./public/split_panel/registry.ts");
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



const PanelContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  registry: new _registry__WEBPACK_IMPORTED_MODULE_1__["PanelRegistry"]()
});
function PanelContextProvider({
  children,
  registry
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelContext.Provider, {
    value: {
      registry
    }
  }, children);
}
const usePanelContext = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PanelContext);
  if (context === undefined) {
    throw new Error('usePanelContext must be used within a <PanelContextProvider />');
  }
  return context;
};

/***/ }),

/***/ "./public/split_panel/index.ts":
/*!*************************************!*\
  !*** ./public/split_panel/index.ts ***!
  \*************************************/
/*! exports provided: Panel, PanelsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/panel */ "./public/split_panel/containers/panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _containers_panel__WEBPACK_IMPORTED_MODULE_0__["Panel"]; });

/* harmony import */ var _containers_panel_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/panel_container */ "./public/split_panel/containers/panel_container.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelsContainer", function() { return _containers_panel_container__WEBPACK_IMPORTED_MODULE_1__["PanelsContainer"]; });

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

/***/ "./public/split_panel/registry.ts":
/*!****************************************!*\
  !*** ./public/split_panel/registry.ts ***!
  \****************************************/
/*! exports provided: PanelRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelRegistry", function() { return PanelRegistry; });
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

class PanelRegistry {
  constructor() {
    _defineProperty(this, "panels", []);
  }
  registerPanel(panel) {
    this.panels.push(panel);
  }
  getPanels() {
    return this.panels;
  }
}

/***/ }),

/***/ "./public/table_list_view/edit_action_dropdown.tsx":
/*!*********************************************************!*\
  !*** ./public/table_list_view/edit_action_dropdown.tsx ***!
  \*********************************************************/
/*! exports provided: EditActionDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditActionDropdown", function() { return EditActionDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./public/context/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






// TODO: include more types once VisBuilder supports more visualization types
const types = ['Area', 'Vertical Bar', 'Line', 'Metric', 'Table'];
const EditActionDropdown = ({
  item,
  editItem,
  visbuilderEditItem
}) => {
  const {
    overlays
  } = Object(_context__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const [isPopoverOpen, setPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onButtonClick = () => {
    setPopoverOpen(!isPopoverOpen);
  };
  const closePopover = () => {
    setPopoverOpen(false);
  };
  // A saved object will only have the 'Import to VisBuilder' option
  // if it is a VisBuilder-compatible type and its version is <= 1.
  const typeName = item.typeTitle;
  const itemVersion = item.version;
  const isVisBuilderCompatible = types.includes(typeName) && itemVersion !== undefined && itemVersion <= 1;
  const handleImportToVisBuilder = () => {
    closePopover(); // Close the popover first

    const modal = overlays.openModal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiConfirmModal"], {
      title: "Partial Import",
      onCancel: () => modal.close(),
      onConfirm: async () => {
        modal.close();
        // Call visbuilderEditItem with the item
        if (visbuilderEditItem) {
          await visbuilderEditItem(item);
        }
      },
      cancelButtonText: "Cancel",
      confirmButtonText: "Import"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "Note that not all settings have been migrated from the original visualization. More will be included as VisBuilder supports additional settings.", ' '))));
  };
  const items = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
    key: "edit",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "pencil"
    }),
    onClick: () => {
      closePopover();
      editItem === null || editItem === void 0 || editItem(item);
    },
    "data-test-subj": "dashboardEditDashboard"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.editActionDropdown.edit', {
    defaultMessage: 'Edit'
  }))];
  if (isVisBuilderCompatible) {
    items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      key: "importToVisBuilder",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: "importAction"
      }),
      onClick: handleImportToVisBuilder,
      "data-test-subj": "dashboardImportToVisBuilder"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.editActionDropdown.importToVisBuilder', {
      defaultMessage: 'Import to VisBuilder'
    })));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "pencil",
      onClick: onButtonClick,
      "data-test-subj": "dashboardEditBtn"
    }),
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    panelPaddingSize: "none",
    anchorPosition: "downLeft",
    initialFocus: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
    items: items,
    size: "s"
  }));
};

/***/ }),

/***/ "./public/table_list_view/index.ts":
/*!*****************************************!*\
  !*** ./public/table_list_view/index.ts ***!
  \*****************************************/
/*! exports provided: TableListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table_list_view */ "./public/table_list_view/table_list_view.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableListView", function() { return _table_list_view__WEBPACK_IMPORTED_MODULE_0__["TableListView"]; });

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

/***/ "./public/table_list_view/table_list_view.tsx":
/*!****************************************************!*\
  !*** ./public/table_list_view/table_list_view.tsx ***!
  \****************************************************/
/*! exports provided: TableListView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListView", function() { return TableListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./public/util/index.ts");
/* harmony import */ var _edit_action_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit_action_dropdown */ "./public/table_list_view/edit_action_dropdown.tsx");
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








// saved object client does not support sorting by title because title is only mapped as analyzed
// the legacy implementation got around this by pulling `listingLimit` items and doing client side sorting
// and not supporting server-side paging.
// This component does not try to tackle these problems (yet) and is just feature matching the legacy component
// TODO support server side sorting/paging once title and description are sortable on the server.
class TableListView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "pagination", {});
    _defineProperty(this, "_isMounted", false);
    _defineProperty(this, "debouncedFetch", Object(lodash__WEBPACK_IMPORTED_MODULE_3__["debounce"])(async filter => {
      try {
        const response = await this.props.findItems(filter);
        if (!this._isMounted) {
          return;
        }

        // We need this check to handle the case where search results come back in a different
        // order than they were sent out. Only load results for the most recent search.
        // Also, in case filter is empty, items are being pre-sorted alphabetically.
        if (filter === this.state.filter) {
          this.setState({
            hasInitialFetchReturned: true,
            isFetchingItems: false,
            items: !filter ? Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(response.hits, 'title') : response.hits,
            totalItems: response.total,
            showLimitError: response.total > this.props.listingLimit
          });
        }
      } catch (fetchError) {
        this.setState({
          hasInitialFetchReturned: true,
          isFetchingItems: false,
          items: [],
          totalItems: 0,
          showLimitError: false,
          fetchError
        });
      }
    }, 300));
    _defineProperty(this, "fetchItems", () => {
      this.setState({
        isFetchingItems: true,
        fetchError: undefined
      }, this.debouncedFetch.bind(null, this.state.filter));
    });
    _defineProperty(this, "deleteSelectedItems", async () => {
      if (this.state.isDeletingItems || !this.props.deleteItems) {
        return;
      }
      this.setState({
        isDeletingItems: true
      });
      try {
        const itemsById = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["keyBy"])(this.state.items, 'id');
        await this.props.deleteItems(this.state.selectedIds.map(id => itemsById[id]));
      } catch (error) {
        this.props.toastNotifications.addDanger({
          title: Object(_util__WEBPACK_IMPORTED_MODULE_5__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "opensearch-dashboards-react.tableListView.listing.unableToDeleteDangerMessage",
            defaultMessage: "Unable to delete {entityName}(s)",
            values: {
              entityName: this.props.entityName
            }
          })),
          text: `${error}`
        });
      }
      this.fetchItems();
      this.setState({
        isDeletingItems: false,
        selectedIds: []
      });
      this.closeDeleteModal();
    });
    _defineProperty(this, "closeDeleteModal", () => {
      this.setState({
        showDeleteModal: false
      });
    });
    _defineProperty(this, "openDeleteModal", () => {
      this.setState({
        showDeleteModal: true
      });
    });
    this.pagination = {
      initialPageIndex: 0,
      initialPageSize: props.initialPageSize,
      pageSizeOptions: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])([10, 20, 50, props.initialPageSize]).sort()
    };
    this.state = {
      items: [],
      totalItems: 0,
      hasInitialFetchReturned: false,
      isFetchingItems: false,
      isDeletingItems: false,
      showDeleteModal: false,
      showLimitError: false,
      filter: props.initialFilter,
      selectedIds: [],
      isCreatePopoverOpen: false
    };
  }
  UNSAFE_componentWillMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
    this.debouncedFetch.cancel();
  }
  componentDidMount() {
    this.fetchItems();
  }
  setFilter({
    queryText
  }) {
    // If the user is searching, we want to clear the sort order so that
    // results are ordered by Elasticsearch's relevance.
    this.setState({
      filter: queryText
    }, this.fetchItems);
  }
  hasNoItems() {
    return !this.state.isFetchingItems && this.state.items.length === 0 && !this.state.filter;
  }
  renderConfirmDeleteModal() {
    let deleteButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "opensearch-dashboards-react.tableListView.listing.deleteSelectedItemsConfirmModal.confirmButtonLabel",
      defaultMessage: "Delete"
    });
    if (this.state.isDeletingItems) {
      deleteButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.deleteSelectedItemsConfirmModal.confirmButtonLabelDeleting",
        defaultMessage: "Deleting"
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiConfirmModal"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.deleteSelectedConfirmModal.title",
        defaultMessage: "Delete {itemCount} {entityName}?",
        values: {
          itemCount: this.state.selectedIds.length,
          entityName: this.state.selectedIds.length === 1 ? this.props.entityName : this.props.entityNamePlural
        }
      }),
      buttonColor: "danger",
      onCancel: this.closeDeleteModal,
      onConfirm: this.deleteSelectedItems,
      cancelButtonText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.deleteSelectedItemsConfirmModal.cancelButtonLabel",
        defaultMessage: "Cancel"
      }),
      confirmButtonText: deleteButton,
      defaultFocusedButton: "cancel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "opensearch-dashboards-react.tableListView.listing.deleteConfirmModalDescription",
      defaultMessage: "You can't recover deleted {entityNamePlural}.",
      values: {
        entityNamePlural: this.props.entityNamePlural
      }
    }))));
  }
  renderListingLimitWarning() {
    if (this.state.showLimitError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCallOut"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
          id: "opensearch-dashboards-react.tableListView.listing.listingLimitExceededTitle",
          defaultMessage: "Listing limit exceeded"
        }),
        color: "warning",
        iconType: "help"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.listingLimitExceededDescription",
        defaultMessage: "You have {totalItems} {entityNamePlural}, but your {listingLimitText} setting prevents the table below from displaying more than {listingLimitValue}. You can change this setting under {advancedSettingsLink}.",
        values: {
          entityNamePlural: this.props.entityNamePlural,
          totalItems: this.state.totalItems,
          listingLimitValue: this.props.listingLimit,
          listingLimitText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "listingLimit"),
          advancedSettingsLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiLink"], {
            href: "#/management/opensearch-dashboards/settings"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "opensearch-dashboards-react.tableListView.listing.listingLimitExceeded.advancedSettingsLinkText",
            defaultMessage: "Advanced Settings"
          }))
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
        size: "m"
      }));
    }
  }
  renderFetchError() {
    if (this.state.fetchError) {
      var _this$state$fetchErro;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCallOut"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
          id: "opensearch-dashboards-react.tableListView.listing.fetchErrorTitle",
          defaultMessage: "Fetching listing failed"
        }),
        color: "danger",
        iconType: "alert"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.fetchErrorDescription",
        defaultMessage: "The {entityName} listing could not be fetched: {message}.",
        values: {
          entityName: this.props.entityName,
          message: ((_this$state$fetchErro = this.state.fetchError.body) === null || _this$state$fetchErro === void 0 ? void 0 : _this$state$fetchErro.message) || this.state.fetchError.message
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
        size: "m"
      }));
    }
  }
  renderNoItemsMessage() {
    if (this.props.noItemsFragment) {
      return this.props.noItemsFragment;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "opensearch-dashboards-react.tableListView.listing.noAvailableItemsMessage",
        defaultMessage: "No {entityNamePlural} available.",
        values: {
          entityNamePlural: this.props.entityNamePlural
        }
      });
    }
  }
  renderToolsLeft() {
    const selection = this.state.selectedIds;
    if (selection.length === 0) {
      return;
    }
    const onClick = () => {
      this.openDeleteModal();
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButton"], {
      color: "danger",
      iconType: "trash",
      onClick: onClick,
      "data-test-subj": "deleteSelectedItems"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "opensearch-dashboards-react.tableListView.listing.deleteButtonMessage",
      defaultMessage: "Delete {itemCount} {entityName}",
      values: {
        itemCount: selection.length,
        entityName: selection.length === 1 ? this.props.entityName : this.props.entityNamePlural
      }
    }));
  }
  renderTable() {
    const selection = this.props.deleteItems ? {
      onSelectionChange: obj => {
        this.setState({
          selectedIds: obj.map(item => item.id).filter(id => Boolean(id))
        });
      }
    } : undefined;
    const actions = [{
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.tableListView.listing.table.editActionName', {
        defaultMessage: 'Edit'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.tableListView.listing.table.editActionDescription', {
        defaultMessage: 'Edit'
      }),
      icon: 'pencil',
      type: 'icon',
      enabled: ({
        error
      }) => !error,
      'data-test-subj': 'edit-dashboard-action',
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_edit_action_dropdown__WEBPACK_IMPORTED_MODULE_6__["EditActionDropdown"], {
        item: item,
        editItem: this.props.editItem,
        visbuilderEditItem: this.props.visbuilderEditItem
      })
    }];
    const search = {
      onChange: this.setFilter.bind(this),
      toolsLeft: this.renderToolsLeft(),
      defaultQuery: this.state.filter,
      box: {
        incremental: true
      }
    };
    const columns = this.props.tableColumns.slice();
    if (this.props.editItem || this.props.visbuilderEditItem) {
      columns.push({
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('opensearch-dashboards-react.tableListView.listing.table.actionTitle', {
          defaultMessage: 'Actions'
        }),
        width: '100px',
        actions
      });
    }
    const noItemsMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "opensearch-dashboards-react.tableListView.listing.noMatchedItemsMessage",
      defaultMessage: "No {entityNamePlural} matched your search.",
      values: {
        entityNamePlural: this.props.entityNamePlural
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiInMemoryTable"], {
      itemId: "id",
      items: this.state.items,
      columns: columns // EuiBasicTableColumn is stricter than Column
      ,
      pagination: this.pagination,
      loading: this.state.isFetchingItems,
      message: noItemsMessage,
      selection: selection,
      search: search,
      sorting: true,
      "data-test-subj": "itemsInMemTable"
    });
  }
  renderListingOrEmptyState() {
    if (!this.state.fetchError && this.hasNoItems()) {
      return this.renderNoItemsMessage();
    }
    return this.renderListing();
  }
  renderListing() {
    const defaultCreateButton = this.props.createItem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButton"], {
      onClick: this.props.createItem,
      "data-test-subj": "newItemButton",
      iconType: "plus",
      fill: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "opensearch-dashboards-react.tableListView.listing.createNewItemButtonLabel",
      defaultMessage: "Create {entityName}",
      values: {
        entityName: this.props.entityName
      }
    }))) : false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.showDeleteModal && this.renderConfirmDeleteModal(), !this.props.showUpdatedUx && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
      justifyContent: "spaceBetween",
      alignItems: "flexEnd",
      "data-test-subj": "top-nav"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      id: this.props.headingId
    }, this.props.tableListTitle))), this.props.createButton || defaultCreateButton), !this.props.showUpdatedUx && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
      size: "m"
    }), this.renderListingLimitWarning(), this.renderFetchError(), this.renderTable());
  }
  renderPageContent() {
    if (!this.state.hasInitialFetchReturned) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContent"], {
      horizontalPosition: "center"
    }, this.renderListingOrEmptyState());
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPage"], {
      "data-test-subj": this.props.entityName + 'LandingPage',
      className: "itemListing__page",
      restrictWidth: this.props.restrictWidth,
      paddingSize: this.props.paddingSize
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageBody"], {
      component: "main",
      "aria-labelledby": this.state.hasInitialFetchReturned ? this.props.headingId : undefined
    }, this.renderPageContent()));
  }
}


// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = (TableListView);

/***/ }),

/***/ "./public/ui_settings/index.ts":
/*!*************************************!*\
  !*** ./public/ui_settings/index.ts ***!
  \*************************************/
/*! exports provided: useUiSetting, useUiSetting$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_ui_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_ui_setting */ "./public/ui_settings/use_ui_setting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUiSetting", function() { return _use_ui_setting__WEBPACK_IMPORTED_MODULE_0__["useUiSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUiSetting$", function() { return _use_ui_setting__WEBPACK_IMPORTED_MODULE_0__["useUiSetting$"]; });

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

/***/ "./public/ui_settings/use_ui_setting.ts":
/*!**********************************************!*\
  !*** ./public/ui_settings/use_ui_setting.ts ***!
  \**********************************************/
/*! exports provided: useUiSetting, useUiSetting$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUiSetting", function() { return useUiSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUiSetting$", function() { return useUiSetting$; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use/lib/useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./public/context/index.ts");
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
 * Returns the current UI-settings value.
 *
 * Usage:
 *
 * ```js
 * const darkMode = useUiSetting('theme:darkMode');
 * ```
 */
const useUiSetting = (key, defaultValue) => {
  const {
    services
  } = Object(_context__WEBPACK_IMPORTED_MODULE_2__["useOpenSearchDashboards"])();
  if (typeof services.uiSettings !== 'object') {
    throw new TypeError('uiSettings service not available in opensearch-dashboards-react context.');
  }
  return services.uiSettings.get(key, defaultValue);
};
/**
 * Returns a 2-tuple, where first entry is the setting value and second is a
 * function to update the setting value.
 *
 * Synchronously returns the most current value of the setting and subscribes
 * to all subsequent updates, which will re-render your component on new values.
 *
 * Usage:
 *
 * ```js
 * const [darkMode, setDarkMode] = useUiSetting$('theme:darkMode');
 * ```
 */
const useUiSetting$ = (key, defaultValue) => {
  const {
    services
  } = Object(_context__WEBPACK_IMPORTED_MODULE_2__["useOpenSearchDashboards"])();
  if (typeof services.uiSettings !== 'object') {
    throw new TypeError('uiSettings service not available in opensearch-dashboards-react context.');
  }
  const observable$ = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => services.uiSettings.get$(key, defaultValue), [key, defaultValue, services.uiSettings]);
  const value = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_1___default()(observable$, services.uiSettings.get(key, defaultValue));
  const set = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => services.uiSettings.set(key, newValue), [key]);
  return [value, set];
};

/***/ }),

/***/ "./public/use_url_tracker/index.ts":
/*!*****************************************!*\
  !*** ./public/use_url_tracker/index.ts ***!
  \*****************************************/
/*! exports provided: useUrlTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_url_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_url_tracker */ "./public/use_url_tracker/use_url_tracker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUrlTracker", function() { return _use_url_tracker__WEBPACK_IMPORTED_MODULE_0__["useUrlTracker"]; });

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

/***/ "./public/use_url_tracker/use_url_tracker.tsx":
/*!****************************************************!*\
  !*** ./public/use_url_tracker/use_url_tracker.tsx ***!
  \****************************************************/
/*! exports provided: useUrlTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUrlTracker", function() { return useUrlTracker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_utils_public___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public/ */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public___WEBPACK_IMPORTED_MODULE_1__);
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
 * State management url_tracker in react hook form
 *
 * Replicates what src/legacy/ui/public/chrome/api/nav.ts did
 * Persists the url in sessionStorage so it could be restored if navigated back to the app
 *
 * @param key - key to use in storage
 * @param history - history instance to use
 * @param shouldRestoreUrl - cb if url should be restored
 * @param storage - storage to use. window.sessionStorage is default
 */
function useUrlTracker(key, history, shouldRestoreUrl = () => true, storage = sessionStorage) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    const urlTracker = Object(_opensearch_dashboards_utils_public___WEBPACK_IMPORTED_MODULE_1__["createUrlTracker"])(key, storage);
    const urlToRestore = urlTracker.getTrackedUrl();
    if (urlToRestore && shouldRestoreUrl(urlToRestore)) {
      history.replace(urlToRestore);
    }
    const stopTrackingUrl = urlTracker.startTrackingUrl(history);
    return () => {
      stopTrackingUrl();
    };
  }, [key, history]);
}

/***/ }),

/***/ "./public/util/index.ts":
/*!******************************!*\
  !*** ./public/util/index.ts ***!
  \******************************/
/*! exports provided: toMountPoint, MountPointPortal, useIfMounted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to_mount_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_mount_point */ "./public/util/to_mount_point.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMountPoint", function() { return _to_mount_point__WEBPACK_IMPORTED_MODULE_0__["toMountPoint"]; });

/* harmony import */ var _mount_point_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mount_point_portal */ "./public/util/mount_point_portal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MountPointPortal", function() { return _mount_point_portal__WEBPACK_IMPORTED_MODULE_1__["MountPointPortal"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./public/util/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIfMounted", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["useIfMounted"]; });

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

/***/ "./public/util/mount_point_portal.tsx":
/*!********************************************!*\
  !*** ./public/util/mount_point_portal.tsx ***!
  \********************************************/
/*! exports provided: MountPointPortal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountPointPortal", function() { return MountPointPortal; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/util/utils.ts");
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
 * Utility component to portal a part of a react application into the provided `MountPoint`.
 */
const MountPointPortal = ({
  children,
  setMountPoint
}) => {
  // state used to force re-renders when the element changes
  const [shouldRender, setShouldRender] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const el = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const ifMounted = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["useIfMounted"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setMountPoint(element => {
      ifMounted(() => {
        el.current = element;
        setShouldRender(true);
      });
      return () => {
        // the component can be unmounted from the dom before the portal target actually
        // calls the `unmount` function. This is a no-op but show a scary warning in the console
        // so we use a ifMounted effect to avoid it.
        ifMounted(() => {
          setShouldRender(false);
          el.current = undefined;
        });
      };
    });
    return () => {
      ifMounted(() => {
        setShouldRender(false);
        el.current = undefined;
      });
    };
  }, [setMountPoint]);
  if (shouldRender && el.current) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MountPointPortalErrorBoundary, null, children), el.current);
  } else {
    return null;
  }
};
class MountPointPortalErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      error: undefined
    });
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch() {
    // nothing, will just rerender to display the error message
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.mountPointPortal.errorMessage', {
        defaultMessage: 'Error rendering portal content'
      })));
    }
    return this.props.children;
  }
}

/***/ }),

/***/ "./public/util/to_mount_point.tsx":
/*!****************************************!*\
  !*** ./public/util/to_mount_point.tsx ***!
  \****************************************/
/*! exports provided: toMountPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMountPoint", function() { return toMountPoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
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
 * MountPoint converter for react nodes.
 *
 * @param node to get a mount point for
 */
const toMountPoint = node => {
  const mount = element => {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, node), element);
    return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
  };
  // only used for tests and snapshots serialization
  if (true) {
    mount.__reactMount__ = node;
  }
  return mount;
};

/***/ }),

/***/ "./public/util/utils.ts":
/*!******************************!*\
  !*** ./public/util/utils.ts ***!
  \******************************/
/*! exports provided: useIfMounted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIfMounted", function() { return useIfMounted; });
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


const useIfMounted = () => {
  const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
    isMounted.current = false;
  }, []);
  const ifMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(func => {
    if (isMounted.current && func) {
      func();
    }
  }, []);
  return ifMounted;
};

/***/ }),

/***/ "./public/validated_range/index.ts":
/*!*****************************************!*\
  !*** ./public/validated_range/index.ts ***!
  \*****************************************/
/*! exports provided: ValidatedDualRange, Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validated_dual_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validated_dual_range */ "./public/validated_range/validated_dual_range.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidatedDualRange", function() { return _validated_dual_range__WEBPACK_IMPORTED_MODULE_0__["ValidatedDualRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _validated_dual_range__WEBPACK_IMPORTED_MODULE_0__["Value"]; });

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

/***/ "./public/validated_range/is_range_valid.ts":
/*!**************************************************!*\
  !*** ./public/validated_range/is_range_valid.ts ***!
  \**************************************************/
/*! exports provided: isRangeValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeValid", function() { return isRangeValid; });
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


const LOWER_VALUE_INDEX = 0;
const UPPER_VALUE_INDEX = 1;
function isRangeValid(value = [0, 0], min = 0, max = 0, allowEmptyRange) {
  allowEmptyRange = typeof allowEmptyRange === 'boolean' ? allowEmptyRange : true; // cannot use default props since that uses falsy check
  let lowerValue = isNaN(value[LOWER_VALUE_INDEX]) ? '' : `${value[LOWER_VALUE_INDEX]}`;
  let upperValue = isNaN(value[UPPER_VALUE_INDEX]) ? '' : `${value[UPPER_VALUE_INDEX]}`;
  const isLowerValueValid = lowerValue.toString() !== '';
  const isUpperValueValid = upperValue.toString() !== '';
  if (isLowerValueValid) {
    lowerValue = parseFloat(lowerValue);
  }
  if (isUpperValueValid) {
    upperValue = parseFloat(upperValue);
  }
  let isValid = true;
  let errorMessage = '';
  const bothMustBeSetErrorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.dualRangeControl.mustSetBothErrorMessage', {
    defaultMessage: 'Both lower and upper values must be set'
  });
  if (!allowEmptyRange && (!isLowerValueValid || !isUpperValueValid)) {
    isValid = false;
    errorMessage = bothMustBeSetErrorMessage;
  } else if (!isLowerValueValid && isUpperValueValid || isLowerValueValid && !isUpperValueValid) {
    isValid = false;
    errorMessage = bothMustBeSetErrorMessage;
  } else if (isLowerValueValid && lowerValue < min || isUpperValueValid && upperValue > max) {
    isValid = false;
    errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.dualRangeControl.outsideOfRangeErrorMessage', {
      defaultMessage: 'Values must be on or between {min} and {max}',
      values: {
        min,
        max
      }
    });
  } else if (isLowerValueValid && isUpperValueValid && upperValue < lowerValue) {
    isValid = false;
    errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.dualRangeControl.upperValidErrorMessage', {
      defaultMessage: 'Upper value must be greater or equal to lower value'
    });
  }
  return {
    isValid,
    errorMessage
  };
}

/***/ }),

/***/ "./public/validated_range/validated_dual_range.tsx":
/*!*********************************************************!*\
  !*** ./public/validated_range/validated_dual_range.tsx ***!
  \*********************************************************/
/*! exports provided: ValidatedDualRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatedDualRange", function() { return ValidatedDualRange; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_range_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is_range_valid */ "./public/validated_range/is_range_valid.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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






// Wrapper around EuiDualRange that ensures onChange callback is only called when range value
// is valid and within min/max

class ValidatedDualRange extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    // @ts-ignore state populated by getDerivedStateFromProps
    _defineProperty(this, "state", {});
    _defineProperty(this, "_onChange", value => {
      const {
        isValid,
        errorMessage
      } = Object(_is_range_valid__WEBPACK_IMPORTED_MODULE_3__["isRangeValid"])(value, this.props.min, this.props.max, this.props.allowEmptyRange);
      this.setState({
        value,
        isValid,
        errorMessage
      });
      if (this.props.onChange && isValid) {
        this.props.onChange([value[0], value[1]]);
      }
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.prevValue) {
      const {
        isValid,
        errorMessage
      } = Object(_is_range_valid__WEBPACK_IMPORTED_MODULE_3__["isRangeValid"])(nextProps.value, nextProps.min, nextProps.max, nextProps.allowEmptyRange);
      return {
        value: nextProps.value,
        prevValue: nextProps.value,
        isValid,
        errorMessage
      };
    }
    return null;
  }
  render() {
    const {
      fullWidth,
      label,
      formRowDisplay,
      value,
      onChange,
      allowEmptyRange,
      ...rest // TODO: Consider alternatives for spread operator in component
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
      fullWidth: fullWidth,
      isInvalid: !this.state.isValid,
      error: this.state.errorMessage ? [this.state.errorMessage] : [],
      label: label,
      display: formRowDisplay
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiDualRange"], _extends({
      compressed: formRowDisplay === 'rowCompressed',
      fullWidth: fullWidth,
      value: this.state.value,
      onChange: this._onChange,
      minInputProps: {
        'aria-label': _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.dualRangeControl.minInputAriaLabel', {
          defaultMessage: 'Range minimum'
        })
      },
      maxInputProps: {
        'aria-label': _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch-dashboards-react.dualRangeControl.maxInputAriaLabel', {
          defaultMessage: 'Range maximum'
        })
      }
    }, rest)));
  }
}
_defineProperty(ValidatedDualRange, "defaultProps", {
  allowEmptyRange: true,
  fullWidth: false
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

/***/ "@elastic/eui/dist/eui_theme_dark.json":
/*!******************************************************!*\
  !*** external "__osdSharedDeps__.Theme.euiDarkVars" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Theme.euiDarkVars;

/***/ }),

/***/ "@elastic/eui/dist/eui_theme_light.json":
/*!*******************************************************!*\
  !*** external "__osdSharedDeps__.Theme.euiLightVars" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Theme.euiLightVars;

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

/***/ "@osd/monaco":
/*!**********************************************!*\
  !*** external "__osdSharedDeps__.OsdMonaco" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdMonaco;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

/***/ }),

/***/ "monaco-editor/esm/vs/editor/editor.api":
/*!********************************************************!*\
  !*** external "__osdSharedDeps__.MonacoBarePluginApi" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.MonacoBarePluginApi;

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
//# sourceMappingURL=opensearchDashboardsReact.plugin.js.map