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
/******/ 		"opensearchDashboardsOverview": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "opensearchDashboardsOverview.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["opensearchDashboardsOverview_bundle_jsonpfunction"] = window["opensearchDashboardsOverview_bundle_jsonpfunction"] || [];
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#1d1e24;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#1d1e24 !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,mCAAmC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#1d1e24;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#1d1e24 !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,qBAAqB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,gCAAgC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#0a121a;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#0a121a !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,mCAAmC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#0a121a;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#0a121a !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fcfeff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fcfeff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,mCAAmC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fcfeff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fcfeff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#0f171f;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#0f171f !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,mCAAmC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#0f171f;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#0f171f !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fcfeff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fcfeff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,oBAAoB,wBAAwB,CAAC,YAAY,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,sCAAsC,6BAA6B,CAAC,oBAAoB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,UAAU,CAAC,8CAA8C,sBAAsB,CAAC,YAAY,CAAC,MAAM,CAAC,qBAAqB,CAAC,gEAAgE,wDAAwD,0BAA0B,CAAC,CAAC,iEAAiE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,kEAAkE,wDAAwD,0BAA0B,CAAC,CAAC,gEAAgE,0DAA0D,0BAA0B,CAAC,CAAC,iEAAiE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,kEAAkE,0DAA0D,0BAA0B,CAAC,CAAC,2CAA2C,0DAA0D,0BAA0B,CAAC,CAAC,0CAA0C,eAAe,CAAC,mFAAmF,cAAc,CAAC,qCAAqC,mBAAmB,CAAC,gEAAgE,uBAAuB,+BAA+B,CAAC,CAAC,iEAAiE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,kEAAkE,uBAAuB,+BAA+B,CAAC,CAAC,2CAA2C,uBAAuB,+BAA+B,CAAC,CAAC,2BAA2B,mCAAmC,CAAC,0BAA0B,CAAC,WAAW,CAAC,YAAY,CAAC,UAAU,CAAC,gEAAgE,oDAAoD,iBAAiB,CAAC,CAAC,iEAAiE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,kEAAkE,oDAAoD,iBAAiB,CAAC,CAAC,2CAA2C,oDAAoD,iBAAiB,CAAC,CAAC,gEAAgE,2EAA2E,sBAAsB,CAAC,CAAC,iEAAiE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,kEAAkE,2EAA2E,sBAAsB,CAAC,CAAC,2CAA2C,2EAA2E,sBAAsB,CAAC,CAAC,2BAA2B,qBAAqB,CAAC,wDAAwD,0BAA0B,CAAC,uBAAuB,CAAC,kCAAkC,cAAc,CAAC,gEAAgE,8CAA8C,yBAAyB,CAAC,CAAC,iEAAiE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,kEAAkE,8CAA8C,yBAAyB,CAAC,CAAC,2CAA2C,8CAA8C,yBAAyB,CAAC","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdOverviewWrapper{background-color:#fcfeff;display:flex;flex-direction:column;min-height:calc(100vh - 49px)}.headerIsExpanded .osdOverviewWrapper{min-height:calc(100vh - 98px)}.osdOverviewContent{margin:0 auto;max-width:1200px;padding:32px 16px;width:100%}.osdOverviewContent .osdRedirectCrossAppLinks{align-items:flex-start;display:flex;flex:1;flex-direction:column}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--primary .osdOverviewApps__item{max-width:calc(50% - 24px)}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewApps__group--secondary .osdOverviewApps__item{max-width:calc(25% - 24px)}}.osdOverviewNews__content article+article{margin-top:24px}.osdOverviewNews__content article>*+*,.osdOverviewNews__content article header>*+*{margin-top:4px}.osdOverviewNews__content article h3{font-weight:inherit}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewMore__item{max-width:calc(33.3333% - 24px)}}.osdOverviewSolution__icon{background-color:#fcfeff !important;box-shadow:none !important;height:48px;padding:12px;width:48px}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore h2{text-align:center}}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}@media only screen and (min-width: 1920px){.osdOverviewSupplements--noNews .osdOverviewMore .osdOverviewMore__content{justify-content:center}}.osdOverviewData--expanded{flex-direction:column}.osdOverviewData--expanded,.osdOverviewData--expanded>*{margin-bottom:0 !important;margin-top:0 !important}.osdOverviewDataAdd__actionButton{margin-right:0}@media only screen and (min-width: 768px)and (max-width: 991px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 992px)and (max-width: 1199px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1200px)and (max-width: 1679px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1680px)and (max-width: 1919px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}@media only screen and (min-width: 1920px){.osdOverviewDataManage__item:not(:only-child){flex:0 0 calc(50% - 24px)}}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsOverview!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsOverview!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['opensearchDashboardsOverview']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsOverview!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsOverview!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/opensearchDashboardsOverview/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/opensearch_dashboards_overview/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: PLUGIN_ID, PLUGIN_NAME, PLUGIN_PATH, PLUGIN_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_ID", function() { return PLUGIN_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_PATH", function() { return PLUGIN_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_ICON", function() { return PLUGIN_ICON; });
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

const PLUGIN_ID = 'opensearchDashboardsOverview';
const PLUGIN_NAME = 'Overview';
const PLUGIN_PATH = `/app/home/`;
const PLUGIN_ICON = 'inputOutput';

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
/*! exports provided: plugin, OpenSearchDashboardsOverviewPluginSetup, OpenSearchDashboardsOverviewPluginStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsOverviewPluginSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsOverviewPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsOverviewPluginStart", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsOverviewPluginStart"]; });

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




// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
function plugin() {
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["OpenSearchDashboardsOverviewPlugin"]();
}


/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: OpenSearchDashboardsOverviewPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsOverviewPlugin", function() { return OpenSearchDashboardsOverviewPlugin; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./common/index.ts");
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

class OpenSearchDashboardsOverviewPlugin {
  setup(core, {
    home
  }) {
    const appUpdater$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(core.getStartServices()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([coreDeps]) => coreDeps.chrome.navLinks.getNavLinks$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(navLinks => {
      const hasOpenSearchDashboardsApp = Boolean(navLinks.find(({
        id,
        category,
        hidden
      }) => !hidden && (category === null || category === void 0 ? void 0 : category.id) === 'opensearchDashboards' && id !== _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_ID"]));
      return hasOpenSearchDashboardsApp;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinct"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
      return () => {
        // Wazuh: Hide the OpenSearch Dashboards Overview app
        return {
          status: _core_public__WEBPACK_IMPORTED_MODULE_3__["AppStatus"].inaccessible,
          navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_3__["AppNavLinkStatus"].hidden
        };
      };
    }));

    // Register an application into the side navigation menu
    core.application.register({
      category: _core_public__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_APP_CATEGORIES"].opensearchDashboards,
      id: _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_ID"],
      title: _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_NAME"],
      euiIconType: _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_ICON"],
      order: -2000,
      updater$: appUpdater$,
      appRoute: _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_PATH"],
      async mount(params) {
        // Load application bundle
        const {
          renderApp
        } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        // Get start services as specified in opensearch_dashboards.json
        const [coreStart, depsStart] = await core.getStartServices();

        // Render the application
        return renderApp(coreStart, depsStart, params);
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_3__["WorkspaceAvailability"].outsideWorkspace
    });
    if (home) {
      home.featureCatalogue.registerSolution({
        id: 'opensearchDashboards',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.solution.title', {
          defaultMessage: 'OpenSearch Dashboards'
        }),
        subtitle: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.solution.subtitle', {
          defaultMessage: 'Visualize & analyze'
        }),
        appDescriptions: [_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription1', {
          defaultMessage: 'Analyze data in dashboards.'
        }), _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription2', {
          defaultMessage: 'Search and find insights.'
        }), _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription3', {
          defaultMessage: 'Design pixel-perfect presentations.'
        }), _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription4', {
          defaultMessage: 'Plot geographic data.'
        }), _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription5', {
          defaultMessage: 'Model, predict, and detect.'
        }), _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearchDashboardsOverview.opensearchDashboards.appDescription6', {
          defaultMessage: 'Reveal patterns and relationships.'
        })],
        icon: 'inputOutput',
        path: _common__WEBPACK_IMPORTED_MODULE_4__["PLUGIN_PATH"],
        order: 400
      });
    }

    // Return methods that should be available to other plugins
    return {};
  }
  start(core) {
    return {};
  }
  stop() {}
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

/***/ "plugin/home/public":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/home/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/home/public');
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

/***/ })

/******/ });
//# sourceMappingURL=opensearchDashboardsOverview.plugin.js.map