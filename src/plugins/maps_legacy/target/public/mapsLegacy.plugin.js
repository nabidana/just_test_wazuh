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
/******/ 		"mapsLegacy": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "mapsLegacy.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["mapsLegacy_bundle_jsonpfunction"] = window["mapsLegacy_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v7dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/map/index.scss?v7dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#1d1e24;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#343741;border-color:#535966 !important;color:#dfe5ef !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#25262e}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28223, 229, 239%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6875rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#000;color:#fff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:0.875rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#343741;color:#98a2b3}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.6875rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#98a2b3;padding:8px;background:rgba(29,30,36,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #98a2b3;background:#98a2b3}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,kGAAkG,CAAC,WAAW,CAAC,kCAAkC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,wBAAwB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,21CAA21C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,mBAAmB,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,UAAU,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,wBAAwB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,4qBAA4qB,CAAC,wDAAwD,kgBAAkgB,CAAC,gCAAgC,8CAA8C,CAAC,cAAc,cAAc,CAAC,mBAAmB,CAAC,kGAAkG,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,WAAW,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#1d1e24;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#343741;border-color:#535966 !important;color:#dfe5ef !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#25262e}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28223, 229, 239%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6875rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#000;color:#fff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:0.875rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#343741;color:#98a2b3}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.6875rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#98a2b3;padding:8px;background:rgba(29,30,36,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #98a2b3;background:#98a2b3}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v7light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/map/index.scss?v7light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(65,78,101,.2),0 4px 4px -1px rgba(65,78,101,.2),0 2px 2px 0 rgba(65,78,101,.2);border:none}.visualization .leaflet-container{background:#fff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fff;border-color:#d3dae6 !important;color:#343741 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#f5f7fa}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2852, 55, 65%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6875rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#404040;color:#fff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:0.875rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fff;color:#69707d}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2852, 55, 65%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2852, 55, 65%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.6875rem;box-shadow:0 6px 12px -1px rgba(65,78,101,.1),0 4px 4px -1px rgba(65,78,101,.1),0 2px 2px 0 rgba(65,78,101,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#69707d;padding:8px;background:rgba(255,255,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #69707d;background:#69707d}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,8GAA8G,CAAC,WAAW,CAAC,kCAAkC,eAAe,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,qBAAqB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,w1CAAw1C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,mBAAmB,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,kBAAkB,CAAC,UAAU,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,cAAc,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,qBAAqB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,yqBAAyqB,CAAC,wDAAwD,+fAA+f,CAAC,gCAAgC,uCAAuC,CAAC,4CAA4C,WAAW,CAAC,cAAc,cAAc,CAAC,mBAAmB,CAAC,8GAA8G,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,WAAW,CAAC,+BAA+B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(65,78,101,.2),0 4px 4px -1px rgba(65,78,101,.2),0 2px 2px 0 rgba(65,78,101,.2);border:none}.visualization .leaflet-container{background:#fff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fff;border-color:#d3dae6 !important;color:#343741 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#f5f7fa}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2852, 55, 65%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6875rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#404040;color:#fff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:0.875rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fff;color:#69707d}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2852, 55, 65%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2852, 55, 65%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.6875rem;box-shadow:0 6px 12px -1px rgba(65,78,101,.1),0 4px 4px -1px rgba(65,78,101,.1),0 2px 2px 0 rgba(65,78,101,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#69707d;padding:8px;background:rgba(255,255,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #69707d;background:#69707d}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v8dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/map/index.scss?v8dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#0a121a;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#293847;border-color:#5b6875 !important;color:#dfe5ef !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#101b25}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28223, 229, 239%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6111111111rem;font-family:var(--font-text);font-weight:500;line-height:1.333333}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#293847;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:15.75px;font-size:0.875rem;line-height:1.333333;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#293847;color:#8d98a3}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.6111111111rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.333333;color:#8d98a3;padding:8px;background:rgba(10,18,26,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #8d98a3;background:#8d98a3}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,kGAAkG,CAAC,WAAW,CAAC,kCAAkC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,wBAAwB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,21CAA21C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,yBAAyB,CAAC,4BAA4B,CAAC,eAAe,CAAC,oBAAoB,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,kBAAkB,CAAC,aAAa,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,wBAAwB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,4qBAA4qB,CAAC,wDAAwD,kgBAAkgB,CAAC,gCAAgC,8CAA8C,CAAC,cAAc,cAAc,CAAC,yBAAyB,CAAC,kGAAkG,CAAC,4BAA4B,CAAC,eAAe,CAAC,oBAAoB,CAAC,aAAa,CAAC,WAAW,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#0a121a;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#293847;border-color:#5b6875 !important;color:#dfe5ef !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#101b25}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28223, 229, 239%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6111111111rem;font-family:var(--font-text);font-weight:500;line-height:1.333333}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#293847;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:15.75px;font-size:0.875rem;line-height:1.333333;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#293847;color:#8d98a3}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28223, 229, 239%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.6111111111rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.333333;color:#8d98a3;padding:8px;background:rgba(10,18,26,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #8d98a3;background:#8d98a3}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v8light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/map/index.scss?v8light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(82,100,116,.2),0 4px 4px -1px rgba(82,100,116,.2),0 2px 2px 0 rgba(82,100,116,.2);border:none}.visualization .leaflet-container{background:#fcfeff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fcfeff;border-color:#d6d9dd !important;color:#2a3947 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#e3e5e8}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2842, 57, 71%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6111111111rem;font-family:var(--font-text);font-weight:500;line-height:1.333333}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#293847;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:15.75px;font-size:0.875rem;line-height:1.333333;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fcfeff;color:#5a6875}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.6111111111rem;box-shadow:0 6px 12px -1px rgba(82,100,116,.1),0 4px 4px -1px rgba(82,100,116,.1),0 2px 2px 0 rgba(82,100,116,.1);font-family:var(--font-text);font-weight:500;line-height:1.333333;color:#5a6875;padding:8px;background:rgba(252,254,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #5a6875;background:#5a6875}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,iHAAiH,CAAC,WAAW,CAAC,kCAAkC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,wBAAwB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,w1CAAw1C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,yBAAyB,CAAC,4BAA4B,CAAC,eAAe,CAAC,oBAAoB,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,kBAAkB,CAAC,aAAa,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,wBAAwB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,yqBAAyqB,CAAC,wDAAwD,+fAA+f,CAAC,gCAAgC,uCAAuC,CAAC,4CAA4C,WAAW,CAAC,cAAc,cAAc,CAAC,yBAAyB,CAAC,iHAAiH,CAAC,4BAA4B,CAAC,eAAe,CAAC,oBAAoB,CAAC,aAAa,CAAC,WAAW,CAAC,+BAA+B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(82,100,116,.2),0 4px 4px -1px rgba(82,100,116,.2),0 2px 2px 0 rgba(82,100,116,.2);border:none}.visualization .leaflet-container{background:#fcfeff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fcfeff;border-color:#d6d9dd !important;color:#2a3947 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#e3e5e8}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2842, 57, 71%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.6111111111rem;font-family:var(--font-text);font-weight:500;line-height:1.333333}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#293847;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:15.75px;font-size:0.875rem;line-height:1.333333;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fcfeff;color:#5a6875}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.6111111111rem;box-shadow:0 6px 12px -1px rgba(82,100,116,.1),0 4px 4px -1px rgba(82,100,116,.1),0 2px 2px 0 rgba(82,100,116,.1);font-family:var(--font-text);font-weight:500;line-height:1.333333;color:#5a6875;padding:8px;background:rgba(252,254,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #5a6875;background:#5a6875}.visMapLegend__title{font-weight:700}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v9dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/map/index.scss?v9dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#0f171f;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#2a3540;border-color:#5c666f !important;color:#959ba2 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#19222b}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28149, 155, 162%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.7857142857rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#19222b;color:#e3e5e9;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:1rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#2a3540;color:#959ba2}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28149, 155, 162%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28149, 155, 162%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.7857142857rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#959ba2;padding:8px;background:rgba(15,23,31,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #959ba2;background:#959ba2}.visMapLegend__title{font-weight:500}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,kGAAkG,CAAC,WAAW,CAAC,kCAAkC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,wBAAwB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,21CAA21C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,yBAAyB,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,kBAAkB,CAAC,aAAa,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,wBAAwB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,4qBAA4qB,CAAC,wDAAwD,kgBAAkgB,CAAC,gCAAgC,8CAA8C,CAAC,cAAc,cAAc,CAAC,yBAAyB,CAAC,kGAAkG,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,WAAW,CAAC,4BAA4B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(0,0,0,.2),0 4px 4px -1px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.2);border:none}.visualization .leaflet-container{background:#0f171f;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#2a3540;border-color:#5c666f !important;color:#959ba2 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#19222b}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%28149, 155, 162%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.7857142857rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#19222b;color:#e3e5e9;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:1rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#2a3540;color:#959ba2}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28149, 155, 162%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%28149, 155, 162%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:invert(1) brightness(1.75) grayscale(1)}.visMapLegend{font-size:11px;font-size:0.7857142857rem;box-shadow:0 6px 12px -1px rgba(0,0,0,.1),0 4px 4px -1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#959ba2;padding:8px;background:rgba(15,23,31,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #959ba2;background:#959ba2}.visMapLegend__title{font-weight:500}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v9light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/map/index.scss?v9light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(78,92,110,.2),0 4px 4px -1px rgba(78,92,110,.2),0 2px 2px 0 rgba(78,92,110,.2);border:none}.visualization .leaflet-container{background:#fcfeff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fcfeff;border-color:#d6d9dd !important;color:#2a3947 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#e3e5e8}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2842, 57, 71%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.7857142857rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#2a3947;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:1rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fcfeff;color:#5a6875}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.7857142857rem;box-shadow:0 6px 12px -1px rgba(78,92,110,.1),0 4px 4px -1px rgba(78,92,110,.1),0 2px 2px 0 rgba(78,92,110,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#5a6875;padding:8px;background:rgba(252,254,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #5a6875;background:#5a6875}.visMapLegend__title{font-weight:500}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n", "",{"version":3,"sources":["webpack://./public/map/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,WAAW,oBAAoB,CAAC,uDAAuD,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,kCAAkC,CAAC,iCAAiC,CAAC,gFAAgF,8GAA8G,CAAC,WAAW,CAAC,kCAAkC,kBAAkB,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,yBAAyB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,CAAC,yEAAyE,wBAAwB,CAAC,+BAA+B,CAAC,wBAAwB,CAAC,qFAAqF,wBAAwB,CAAC,uCAAuC,4BAA4B,CAAC,yDAAyD,0BAA0B,CAAC,2BAA2B,CAAC,wDAAwD,6BAA6B,CAAC,8BAA8B,CAAC,uDAAuD,w1CAAw1C,CAAC,gDAAgD,SAAS,CAAC,QAAQ,CAAC,cAAc,CAAC,yBAAyB,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,sDAAsD,eAAe,CAAC,QAAQ,CAAC,SAAS,CAAC,8CAA8C,QAAQ,CAAC,SAAS,CAAC,kBAAkB,CAAC,aAAa,CAAC,4BAA4B,CAAC,8BAA8B,mBAAmB,CAAC,sCAAsC,QAAQ,CAAC,cAAc,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,oBAAoB,CAAC,eAAe,CAAC,mBAAmB,CAAC,wCAAwC,gBAAgB,CAAC,kDAAkD,iBAAiB,CAAC,8FAA8F,WAAW,CAAC,4HAA4H,uBAAuB,CAAC,+DAA+D,wBAAwB,CAAC,aAAa,CAAC,iEAAiE,cAAc,CAAC,+GAA+G,oBAAoB,CAAC,2BAA2B,CAAC,0BAA0B,CAAC,uDAAuD,yqBAAyqB,CAAC,wDAAwD,+fAA+f,CAAC,gCAAgC,uCAAuC,CAAC,4CAA4C,WAAW,CAAC,cAAc,cAAc,CAAC,yBAAyB,CAAC,8GAA8G,CAAC,4BAA4B,CAAC,eAAe,CAAC,eAAe,CAAC,aAAa,CAAC,WAAW,CAAC,+BAA+B,CAAC,iBAAiB,CAAC,gBAAgB,UAAU,CAAC,WAAW,CAAC,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,qBAAqB,eAAe,CAAC,iDAAiD,iBAAiB,CAAC,SAAS,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mapButton{display:inline-block;font:normal normal normal 14px/1 FontAwesome,sans-serif;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visualization .leaflet-touch .leaflet-bar,.visualization .leaflet-draw-actions{box-shadow:0 6px 12px -1px rgba(78,92,110,.2),0 4px 4px -1px rgba(78,92,110,.2),0 2px 2px 0 rgba(78,92,110,.2);border:none}.visualization .leaflet-container{background:#fcfeff;font-family:var(--font-text);min-width:1px !important;min-height:1px !important}.visualization .leaflet-clickable:hover{stroke-width:8px;stroke-opacity:.8}.visualization .leaflet-draw-actions a,.visualization .leaflet-control a{background-color:#fcfeff;border-color:#d6d9dd !important;color:#2a3947 !important}.visualization .leaflet-draw-actions a:hover,.visualization .leaflet-control a:hover{background-color:#e3e5e8}.visualization .leaflet-draw-actions a{font-family:var(--font-text)}.visualization .leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.visualization .leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.visualization .leaflet-retina .leaflet-draw-toolbar a{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 60' height='60' width='600'%3E%3Cg fill='rgb%2842, 57, 71%29'%3E%3Cg%3E%3Cpath d='M18 36v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M36 18v6h6v-6h-6zm4 4h-2v-2h2v2z'/%3E%3Cpath d='M23.142 39.145l-2.285-2.29 16-15.998 2.285 2.285z'/%3E%3C/g%3E%3Cpath d='M100 24.565l-2.096 14.83L83.07 42 76 28.773 86.463 18z'/%3E%3Cpath d='M140 20h20v20h-20z'/%3E%3Cpath d='M221 30c0 6.078-4.926 11-11 11s-11-4.922-11-11c0-6.074 4.926-11 11-11s11 4.926 11 11z'/%3E%3Cpath d='M270,19c-4.971,0-9,4.029-9,9c0,4.971,5.001,12,9,14c4.001-2,9-9.029,9-14C279,23.029,274.971,19,270,19z M270,31.5c-2.484,0-4.5-2.014-4.5-4.5c0-2.484,2.016-4.5,4.5-4.5c2.485,0,4.5,2.016,4.5,4.5C274.5,29.486,272.485,31.5,270,31.5z'/%3E%3Cg%3E%3Cpath d='M337,30.156v0.407v5.604c0,1.658-1.344,3-3,3h-10c-1.655,0-3-1.342-3-3v-10c0-1.657,1.345-3,3-3h6.345 l3.19-3.17H324c-3.313,0-6,2.687-6,6v10c0,3.313,2.687,6,6,6h10c3.314,0,6-2.687,6-6v-8.809L337,30.156'/%3E%3Cpath d='M338.72 24.637l-8.892 8.892H327V30.7l8.89-8.89z'/%3E%3Cpath d='M338.697 17.826h4v4h-4z' transform='rotate(-134.99 340.703 19.817)'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M381 42h18V24h-18v18zm14-16h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26zm-4 0h2v14h-2V26z'/%3E%3Cpath d='M395 20v-4h-10v4h-6v2h22v-2h-6zm-2 0h-6v-2h6v2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\")}.visualization .leaflet-control-layers-expanded{padding:0;margin:0;font-size:11px;font-size:0.7857142857rem;font-family:var(--font-text);font-weight:500;line-height:1.5}.visualization .leaflet-control-layers-expanded label{font-weight:500;margin:0;padding:0}.visualization .leaflet-popup-content-wrapper{margin:0;padding:0;background:#2a3947;color:#fcfeff;border-radius:4px !important}.visualization .leaflet-popup{pointer-events:none}.visualization .leaflet-popup-content{margin:0;font-size:14px;font-size:1rem;line-height:1.5;font-weight:400;word-wrap:break-word;overflow:hidden;pointer-events:none}.visualization .leaflet-popup-content>*{margin:8px 8px 0}.visualization .leaflet-popup-content>:last-child{margin-bottom:8px}.visualization .leaflet-popup-content table td,.visualization .leaflet-popup-content table th{padding:4px}.visualization .leaflet-popup-tip-container,.visualization .leaflet-popup-close-button,.visualization .leaflet-draw-tooltip{display:none !important}.visualization .leaflet-container .leaflet-control-attribution{background-color:#fcfeff;color:#5a6875}.visualization .leaflet-container .leaflet-control-attribution p{display:inline}.visualization .leaflet-touch .leaflet-control-zoom-in,.visualization .leaflet-touch .leaflet-control-zoom-out{text-indent:-10000px;background-repeat:no-repeat;background-position:center}.visualization .leaflet-touch .leaflet-control-zoom-in{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M8,7 L8,3.5 C8,3.22385763 7.77614237,3 7.5,3 C7.22385763,3 7,3.22385763 7,3.5 L7,7 L3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L7,8 L7,11.5 C7,11.7761424 7.22385763,12 7.5,12 C7.77614237,12 8,11.7761424 8,11.5 L8,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L8,7 Z M7.5,15 C3.35786438,15 0,11.6421356 0,7.5 C0,3.35786438 3.35786438,0 7.5,0 C11.6421356,0 15,3.35786438 15,7.5 C15,11.6421356 11.6421356,15 7.5,15 Z' /%3E%3C/svg%3E\")}.visualization .leaflet-touch .leaflet-control-zoom-out{background-image:url(\"data:image/svg+xml,%0A%3Csvg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb%2842, 57, 71%29' d='M7.5,0 C11.6355882,0 15,3.36441176 15,7.5 C15,11.6355882 11.6355882,15 7.5,15 C3.36441176,15 0,11.6355882 0,7.5 C0,3.36441176 3.36441176,0 7.5,0 Z M3.5,7 C3.22385763,7 3,7.22385763 3,7.5 C3,7.77614237 3.22385763,8 3.5,8 L11.5,8 C11.7761424,8 12,7.77614237 12,7.5 C12,7.22385763 11.7761424,7 11.5,7 L3.5,7 Z' /%3E%3C/svg%3E\")}.visualization img.leaflet-tile{filter:brightness(1.03) grayscale(0.73)}.visualization img.leaflet-tile.filters-off{filter:none}.visMapLegend{font-size:11px;font-size:0.7857142857rem;box-shadow:0 6px 12px -1px rgba(78,92,110,.1),0 4px 4px -1px rgba(78,92,110,.1),0 2px 2px 0 rgba(78,92,110,.1);font-family:var(--font-text);font-weight:500;line-height:1.5;color:#5a6875;padding:8px;background:rgba(252,254,255,.8);border-radius:4px}.visMapLegend i{width:10px;height:10px;display:inline-block;margin:3px 4px 0 0;border-radius:50%;border:1px solid #5a6875;background:#5a6875}.visMapLegend__title{font-weight:500}.leaflet-top.leaflet-left .visMapLegend__wrapper{position:absolute;left:40px;white-space:nowrap}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/node-libs-browser/node_modules/events/events.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/node-libs-browser/node_modules/events/events.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=mapsLegacy!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=mapsLegacy!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['mapsLegacy']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_mapsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=mapsLegacy!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=mapsLegacy!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_mapsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_mapsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/mapsLegacy/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/maps_legacy/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/common/constants/origin.ts":
/*!*******************************************!*\
  !*** ./public/common/constants/origin.ts ***!
  \*******************************************/
/*! exports provided: ORIGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN", function() { return ORIGIN; });
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

const ORIGIN = {
  // TODO: Rename EMS
  EMS: 'elastic_maps_service',
  OPENSEARCH_DASHBOARDS_YML: 'self_hosted'
};

/***/ }),

/***/ "./public/common/types/external_basemap_types.ts":
/*!*******************************************************!*\
  !*** ./public/common/types/external_basemap_types.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/common/types/index.ts":
/*!**************************************!*\
  !*** ./public/common/types/index.ts ***!
  \**************************************/
/*! exports provided: MapTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _external_basemap_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external_basemap_types */ "./public/common/types/external_basemap_types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _map_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map_types */ "./public/common/types/map_types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapTypes", function() { return _map_types__WEBPACK_IMPORTED_MODULE_1__["MapTypes"]; });

/* harmony import */ var _region_map_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region_map_types */ "./public/common/types/region_map_types.ts");
/* empty/unused harmony star reexport *//*
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
 * Use * syntax so that these exports do not break when internal
 * types are stripped.
 */




/***/ }),

/***/ "./public/common/types/map_types.ts":
/*!******************************************!*\
  !*** ./public/common/types/map_types.ts ***!
  \******************************************/
/*! exports provided: MapTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypes", function() { return MapTypes; });
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

let MapTypes = /*#__PURE__*/function (MapTypes) {
  MapTypes["ScaledCircleMarkers"] = "Scaled Circle Markers";
  MapTypes["ShadedCircleMarkers"] = "Shaded Circle Markers";
  MapTypes["ShadedGeohashGrid"] = "Shaded Geohash Grid";
  MapTypes["Heatmap"] = "Heatmap";
  return MapTypes;
}({});

/***/ }),

/***/ "./public/common/types/region_map_types.ts":
/*!*************************************************!*\
  !*** ./public/common/types/region_map_types.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/components/wms_internal_options.tsx":
/*!****************************************************!*\
  !*** ./public/components/wms_internal_options.tsx ***!
  \****************************************************/
/*! exports provided: WmsInternalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmsInternalOptions", function() { return WmsInternalOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_3__);
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





function WmsInternalOptions({
  wms,
  setValue
}) {
  const wmsLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    href: "http://www.opengeospatial.org/standards/wms",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "maps_legacy.wmsOptions.wmsLinkText",
    defaultMessage: "OGC standard"
  }));
  const footnoteText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "maps_legacy.wmsOptions.mapLoadFailDescription",
    defaultMessage: "If this parameter is incorrect, maps will fail to load."
  }));
  const footnote = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, footnoteText));
  const setOptions = (paramName, value) => setValue('options', {
    ...wms.options,
    [paramName]: value
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "maps_legacy.wmsOptions.wmsDescription",
    defaultMessage: "WMS is an {wmsLink} for map image services.",
    values: {
      wmsLink
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsUrlLabel",
      defaultMessage: "WMS url"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "*")),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.urlOfWMSWebServiceTip",
      defaultMessage: "The URL of the WMS web service."
    }), footnote),
    paramName: "url",
    value: wms.url,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsLayersLabel",
      defaultMessage: "WMS layers"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "*")),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.listOfLayersToUseTip",
      defaultMessage: "A comma separated list of layers to use."
    }), footnote),
    paramName: "layers",
    value: wms.options.layers,
    setValue: setOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsVersionLabel",
      defaultMessage: "WMS version"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "*")),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.versionOfWMSserverSupportsTip",
      defaultMessage: "The version of WMS the server supports."
    }), footnote),
    paramName: "version",
    value: wms.options.version,
    setValue: setOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsFormatLabel",
      defaultMessage: "WMS format"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "*")),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.imageFormatToUseTip",
      defaultMessage: "Usually image/png or image/jpeg. Use png if the server will return transparent layers."
    }), footnote),
    paramName: "format",
    value: wms.options.format,
    setValue: setOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsAttributionLabel",
      defaultMessage: "WMS attribution"
    }),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.attributionStringTip",
      defaultMessage: "Attribution string for the lower right corner."
    }),
    paramName: "attribution",
    value: wms.options.attribution,
    setValue: setOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["TextInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsStylesLabel",
      defaultMessage: "WMS styles"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "*")),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "maps_legacy.wmsOptions.wmsServerSupportedStylesListTip",
      defaultMessage: "A comma separated list of WMS server supported styles to use. Blank in most cases."
    }), footnote),
    paramName: "styles",
    value: wms.options.styles,
    setValue: setOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "aria-hidden": "true"
  }, footnoteText)));
}


/***/ }),

/***/ "./public/components/wms_options.tsx":
/*!*******************************************!*\
  !*** ./public/components/wms_options.tsx ***!
  \*******************************************/
/*! exports provided: WmsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmsOptions", function() { return WmsOptions; });
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
/* harmony import */ var _wms_internal_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wms_internal_options */ "./public/components/wms_internal_options.tsx");
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
  id
}) => ({
  text: id,
  value: id
});
function WmsOptions({
  stateParams,
  setValue,
  vis
}) {
  const {
    wms
  } = stateParams;
  const {
    tmsLayers
  } = vis.type.editorConfig.collections;
  const tmsLayerOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => tmsLayers.map(mapLayerForOption), [tmsLayers]);
  const setWmsOption = (paramName, value) => setValue('wms', {
    ...wms,
    [paramName]: value
  });
  const selectTmsLayer = id => {
    const layer = tmsLayers.find(l => l.id === id);
    if (layer) {
      setWmsOption('selectedTmsLayer', layer);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "maps_legacy.wmsOptions.baseLayerSettingsTitle",
    defaultMessage: "Base layer settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('maps_legacy.wmsOptions.wmsMapServerLabel', {
      defaultMessage: 'WMS map server'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('maps_legacy.wmsOptions.useWMSCompliantMapTileServerTip', {
      defaultMessage: 'Use WMS compliant map tile server. For advanced users only.'
    }),
    paramName: "enabled",
    value: wms.enabled,
    setValue: setWmsOption
  }), !wms.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: "wmsOptionsSelectTmsLayer",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('maps_legacy.wmsOptions.layersLabel', {
      defaultMessage: 'Layers'
    }),
    options: tmsLayerOptions,
    paramName: "selectedTmsLayer",
    value: wms.selectedTmsLayer && wms.selectedTmsLayer.id,
    setValue: (param, value) => selectTmsLayer(value)
  })), wms.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wms_internal_options__WEBPACK_IMPORTED_MODULE_5__["WmsInternalOptions"], {
    wms: wms,
    setValue: setWmsOption
  }));
}


/***/ }),

/***/ "./public/get_service_settings.ts":
/*!****************************************!*\
  !*** ./public/get_service_settings.ts ***!
  \****************************************/
/*! exports provided: getServiceSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceSettings", function() { return getServiceSettings; });
/* harmony import */ var _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy_load_bundle */ "./public/lazy_load_bundle/index.ts");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opensearch_dashboards_services */ "./public/opensearch_dashboards_services.js");
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

let loadPromise;
async function getServiceSettings() {
  if (typeof loadPromise !== 'undefined') {
    return loadPromise;
  }
  loadPromise = new Promise(async resolve => {
    const modules = await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_0__["lazyLoadMapsLegacyModules"])();
    const config = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getMapsLegacyConfig"])();
    // @ts-expect-error
    resolve(new modules.ServiceSettings(config, config.tilemap));
  });
  return loadPromise;
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, getPrecision, geoContains, colorUtil, convertToGeoJson, IServiceSettings, OpenSearchDashboardsMapLayer, VectorLayer, FileLayerField, FileLayer, TmsLayer, mapTooltipProvider, MapTypes, ORIGIN, WmsOptions, lazyLoadMapsLegacyModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _map_color_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/color_util */ "./public/map/color_util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "colorUtil", function() { return _map_color_util__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _map_opensearch_dashboards_map_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/opensearch_dashboards_map_layer */ "./public/map/opensearch_dashboards_map_layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsMapLayer", function() { return _map_opensearch_dashboards_map_layer__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsMapLayer"]; });

/* harmony import */ var _map_convert_to_geojson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/convert_to_geojson */ "./public/map/convert_to_geojson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToGeoJson", function() { return _map_convert_to_geojson__WEBPACK_IMPORTED_MODULE_3__["convertToGeoJson"]; });

/* harmony import */ var _map_decode_geo_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/decode_geo_hash */ "./public/map/decode_geo_hash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return _map_decode_geo_hash__WEBPACK_IMPORTED_MODULE_4__["getPrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return _map_decode_geo_hash__WEBPACK_IMPORTED_MODULE_4__["geoContains"]; });

/* harmony import */ var _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/service_settings_types */ "./public/map/service_settings_types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IServiceSettings", function() { return _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__["IServiceSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VectorLayer", function() { return _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__["VectorLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileLayerField", function() { return _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__["FileLayerField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileLayer", function() { return _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__["FileLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TmsLayer", function() { return _map_service_settings_types__WEBPACK_IMPORTED_MODULE_5__["TmsLayer"]; });

/* harmony import */ var _tooltip_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip_provider */ "./public/tooltip_provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapTooltipProvider", function() { return _tooltip_provider__WEBPACK_IMPORTED_MODULE_6__["mapTooltipProvider"]; });

/* harmony import */ var _map_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/index.scss */ "./public/map/index.scss");
/* harmony import */ var _map_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_map_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/types */ "./public/common/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapTypes", function() { return _common_types__WEBPACK_IMPORTED_MODULE_8__["MapTypes"]; });

/* harmony import */ var _common_constants_origin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/constants/origin */ "./public/common/constants/origin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIGIN", function() { return _common_constants_origin__WEBPACK_IMPORTED_MODULE_9__["ORIGIN"]; });

/* harmony import */ var _components_wms_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/wms_options */ "./public/components/wms_options.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WmsOptions", function() { return _components_wms_options__WEBPACK_IMPORTED_MODULE_10__["WmsOptions"]; });

/* harmony import */ var _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lazy_load_bundle */ "./public/lazy_load_bundle/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyLoadMapsLegacyModules", function() { return _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_11__["lazyLoadMapsLegacyModules"]; });

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

// @ts-ignore

// @ts-ignore

// @ts-ignore


// @ts-ignore


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["MapsLegacyPlugin"](initializerContext);
}

/** @public */






/***/ }),

/***/ "./public/lazy_load_bundle/index.ts":
/*!******************************************!*\
  !*** ./public/lazy_load_bundle/index.ts ***!
  \******************************************/
/*! exports provided: lazyLoadMapsLegacyModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadMapsLegacyModules", function() { return lazyLoadMapsLegacyModules; });
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

let loadModulesPromise;
async function lazyLoadMapsLegacyModules() {
  if (typeof loadModulesPromise !== 'undefined') {
    return loadModulesPromise;
  }
  loadModulesPromise = new Promise(async resolve => {
    const {
      OpenSearchDashboardsMap,
      L,
      ServiceSettings
    } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./lazy */ "./public/lazy_load_bundle/lazy/index.ts"));
    resolve({
      OpenSearchDashboardsMap,
      L,
      ServiceSettings
    });
  });
  return loadModulesPromise;
}

/***/ }),

/***/ "./public/map/base_maps_visualization.js":
/*!***********************************************!*\
  !*** ./public/map/base_maps_visualization.js ***!
  \***********************************************/
/*! exports provided: BaseMapsVisualizationProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMapsVisualizationProvider", function() { return BaseMapsVisualizationProvider; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.js");
/* harmony import */ var _lazy_load_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lazy_load_bundle */ "./public/lazy_load_bundle/index.ts");
/* harmony import */ var _get_service_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get_service_settings */ "./public/get_service_settings.ts");
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







const WMS_MINZOOM = 0;
const WMS_MAXZOOM = 22; //increase this to 22. Better for WMS

function BaseMapsVisualizationProvider() {
  /**
   * Abstract base class for a visualization consisting of a map with a single baselayer.
   * @class BaseMapsVisualization
   * @constructor
   */
  return class BaseMapsVisualization {
    constructor(element, vis) {
      this.vis = vis;
      this._container = element;
      this._opensearchDashboardsMap = null;
      this._chartData = null; //reference to data currently on the map.
      this._baseLayerDirty = true;
      this._mapIsLoaded = this._makeOpenSearchDashboardsMap();
    }
    isLoaded() {
      return this._mapIsLoaded;
    }
    destroy() {
      if (this._opensearchDashboardsMap) {
        this._opensearchDashboardsMap.destroy();
        this._opensearchDashboardsMap = null;
      }
    }

    /**
     * Implementation of Visualization#render.
     * Child-classes can extend this method if the render-complete function requires more time until rendering has completed.
     * @param opensearchResponse
     * @param status
     * @return {Promise}
     */
    async render(opensearchResponse, visParams) {
      if (!this._opensearchDashboardsMap) {
        //the visualization has been destroyed;
        return;
      }
      await this._mapIsLoaded;
      this._opensearchDashboardsMap.resize();
      this._params = visParams;
      await this._updateParams();
      if (this._hasOpenSearchResponseChanged(opensearchResponse)) {
        await this._updateData(opensearchResponse);
      }
      this._opensearchDashboardsMap.useUiStateFromVisualization(this.vis);
      await this._whenBaseLayerIsLoaded();
    }

    /**
     * Creates an instance of a opensearch-dashboards-map with a single baselayer and assigns it to the this._opensearchDashboardsMap property.
     * Clients can override this method to customize the initialization.
     * @private
     */
    async _makeOpenSearchDashboardsMap() {
      const options = {};
      const uiState = this.vis.getUiState();
      const zoomFromUiState = parseInt(uiState.get('mapZoom'));
      const centerFromUIState = uiState.get('mapCenter');
      options.zoom = !isNaN(zoomFromUiState) ? zoomFromUiState : this.vis.params.mapZoom;
      options.center = centerFromUIState ? centerFromUIState : this.vis.params.mapCenter;
      const modules = await Object(_lazy_load_bundle__WEBPACK_IMPORTED_MODULE_4__["lazyLoadMapsLegacyModules"])();
      this._opensearchDashboardsMap = new modules.OpenSearchDashboardsMap(this._container, options);
      this._opensearchDashboardsMap.setMinZoom(WMS_MINZOOM); //use a default
      this._opensearchDashboardsMap.setMaxZoom(WMS_MAXZOOM); //use a default

      this._opensearchDashboardsMap.addLegendControl();
      this._opensearchDashboardsMap.addFitControl();
      this._opensearchDashboardsMap.persistUiStateForVisualization(this.vis);
      this._opensearchDashboardsMap.on('baseLayer:loaded', () => {
        this._baseLayerDirty = false;
      });
      this._opensearchDashboardsMap.on('baseLayer:loading', () => {
        this._baseLayerDirty = true;
      });
      await this._updateBaseLayer();
    }
    _tmsConfigured() {
      const {
        wms
      } = this._getMapsParams();
      const hasTmsBaseLayer = wms && !!wms.selectedTmsLayer;
      return hasTmsBaseLayer;
    }
    _wmsConfigured() {
      const {
        wms
      } = this._getMapsParams();
      const hasWmsBaseLayer = wms && !!wms.enabled;
      return hasWmsBaseLayer;
    }
    async _updateBaseLayer() {
      const emsTileLayerId = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_3__["getEmsTileLayerId"])();
      if (!this._opensearchDashboardsMap) {
        return;
      }
      const mapParams = this._getMapsParams();
      if (!this._tmsConfigured()) {
        try {
          const serviceSettings = await Object(_get_service_settings__WEBPACK_IMPORTED_MODULE_5__["getServiceSettings"])();
          const tmsServices = await serviceSettings.getTMSServices();
          const userConfiguredTmsLayer = tmsServices[0];
          const initBasemapLayer = userConfiguredTmsLayer ? userConfiguredTmsLayer : tmsServices.find(s => s.id === emsTileLayerId.bright);
          if (initBasemapLayer) {
            this._setTmsLayer(initBasemapLayer);
          }
        } catch (e) {
          Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_3__["getToasts"])().addWarning(e.message);
          return;
        }
        return;
      }
      try {
        if (this._wmsConfigured()) {
          const currentMaxZoomLevel = this._opensearchDashboardsMap.getMaxZoomLevel();
          if (WMS_MINZOOM < currentMaxZoomLevel || WMS_MAXZOOM > currentMaxZoomLevel) {
            this._opensearchDashboardsMap.setMinZoom(WMS_MINZOOM);
            this._opensearchDashboardsMap.setMaxZoom(WMS_MAXZOOM);
          }
          this._opensearchDashboardsMap.setBaseLayer({
            baseLayerType: 'wms',
            options: {
              minZoom: WMS_MINZOOM,
              maxZoom: WMS_MAXZOOM,
              url: mapParams.wms.url,
              ...mapParams.wms.options
            }
          });
        } else if (this._tmsConfigured()) {
          const selectedTmsLayer = mapParams.wms.selectedTmsLayer;
          this._setTmsLayer(selectedTmsLayer);
        }
      } catch (tmsLoadingError) {
        Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_3__["getToasts"])().addWarning(tmsLoadingError.message);
      }
    }
    async _setTmsLayer(tmsLayer) {
      this._opensearchDashboardsMap.setMinZoom(tmsLayer.minZoom);
      this._opensearchDashboardsMap.setMaxZoom(tmsLayer.maxZoom);
      if (this._opensearchDashboardsMap.getZoomLevel() > tmsLayer.maxZoom) {
        this._opensearchDashboardsMap.setZoomLevel(tmsLayer.maxZoom);
      }
      let isDesaturated = this._getMapsParams().isDesaturated;
      if (typeof isDesaturated !== 'boolean') {
        isDesaturated = true;
      }
      const isDarkMode = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_3__["getUiSettings"])().get('theme:darkMode');
      const serviceSettings = await Object(_get_service_settings__WEBPACK_IMPORTED_MODULE_5__["getServiceSettings"])();
      const meta = await serviceSettings.getAttributesForTMSLayer(tmsLayer, isDesaturated, isDarkMode);
      const showZoomMessage = serviceSettings.shouldShowZoomMessage(tmsLayer);
      const showRegionDeniedWarning = serviceSettings.shouldShowRegionDeniedWarning();
      const options = {
        ...tmsLayer
      };
      delete options.id;
      delete options.subdomains;
      this._opensearchDashboardsMap.setBaseLayer({
        baseLayerType: 'tms',
        options: {
          ...options,
          showZoomMessage,
          showRegionDeniedWarning,
          ...meta
        }
      });
    }
    async _updateData() {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('maps_legacy.baseMapsVisualization.childShouldImplementMethodErrorMessage', {
        defaultMessage: 'Child should implement this method to respond to data-update'
      }));
    }
    _hasOpenSearchResponseChanged(data) {
      return this._chartData !== data;
    }

    /**
     * called on options change (vis.params change)
     */
    async _updateParams() {
      const mapParams = this._getMapsParams();
      await this._updateBaseLayer();
      this._opensearchDashboardsMap.setLegendPosition(mapParams.legendPosition);
      this._opensearchDashboardsMap.setShowTooltip(mapParams.addTooltip);
      this._opensearchDashboardsMap.useUiStateFromVisualization(this.vis);
    }
    _getMapsParams() {
      return {
        ...this.vis.type.visConfig.defaults,
        type: this.vis.type.name,
        ...this._params
      };
    }
    _whenBaseLayerIsLoaded() {
      if (!this._tmsConfigured()) {
        return true;
      }
      const maxTimeForBaseLayer = 10000;
      const interval$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"](10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !this._baseLayerDirty));
      const timer$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"](maxTimeForBaseLayer);
      return rxjs__WEBPACK_IMPORTED_MODULE_1__["race"](interval$, timer$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
    }
  };
}

/***/ }),

/***/ "./public/map/color_util.js":
/*!**********************************!*\
  !*** ./public/map/color_util.js ***!
  \**********************************/
/*! exports provided: getLegendColors, getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegendColors", function() { return getLegendColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
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

function getLegendColors(colorRamp, numLegendColors = 4) {
  const colors = [];
  colors[0] = getColor(colorRamp, 0);
  for (let i = 1; i < numLegendColors - 1; i++) {
    colors[i] = getColor(colorRamp, Math.floor(colorRamp.length * i / numLegendColors));
  }
  colors[numLegendColors - 1] = getColor(colorRamp, colorRamp.length - 1);
  return colors;
}
function getColor(colorRamp, i) {
  const color = colorRamp[i][1];
  const red = Math.floor(color[0] * 255);
  const green = Math.floor(color[1] * 255);
  const blue = Math.floor(color[2] * 255);
  return `rgb(${red},${green},${blue})`;
}

/***/ }),

/***/ "./public/map/convert_to_geojson.js":
/*!******************************************!*\
  !*** ./public/map/convert_to_geojson.js ***!
  \******************************************/
/*! exports provided: convertToGeoJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToGeoJson", function() { return convertToGeoJson; });
/* harmony import */ var _decode_geo_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decode_geo_hash */ "./public/map/decode_geo_hash.ts");
/* harmony import */ var _grid_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid_dimensions */ "./public/map/grid_dimensions.js");
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



function convertToGeoJson(tabifiedResponse, {
  geohash,
  geocentroid,
  metric
}) {
  let features;
  let min = Infinity;
  let max = -Infinity;
  if (tabifiedResponse && tabifiedResponse.rows) {
    const table = tabifiedResponse;
    const geohashColumn = geohash ? table.columns[geohash.accessor] : null;
    if (!geohashColumn) {
      features = [];
    } else {
      const metricColumn = table.columns[metric.accessor];
      const geocentroidColumn = geocentroid ? table.columns[geocentroid.accessor] : null;
      features = table.rows.map(row => {
        const geohashValue = row[geohashColumn.id];
        if (!geohashValue) return false;
        const geohashLocation = Object(_decode_geo_hash__WEBPACK_IMPORTED_MODULE_0__["decodeGeoHash"])(geohashValue);
        let pointCoordinates;
        if (geocentroidColumn) {
          const location = row[geocentroidColumn.id];
          pointCoordinates = [location.lon, location.lat];
        } else {
          pointCoordinates = [geohashLocation.longitude[2], geohashLocation.latitude[2]];
        }
        const rectangle = [[geohashLocation.latitude[0], geohashLocation.longitude[0]], [geohashLocation.latitude[0], geohashLocation.longitude[1]], [geohashLocation.latitude[1], geohashLocation.longitude[1]], [geohashLocation.latitude[1], geohashLocation.longitude[0]]];
        const centerLatLng = [geohashLocation.latitude[2], geohashLocation.longitude[2]];
        if (geohash.params.useGeocentroid) {
          // see https://github.com/elastic/elasticsearch/issues/24694 for why clampGrid is used
          pointCoordinates[0] = clampGrid(pointCoordinates[0], geohashLocation.longitude[0], geohashLocation.longitude[1]);
          pointCoordinates[1] = clampGrid(pointCoordinates[1], geohashLocation.latitude[0], geohashLocation.latitude[1]);
        }
        const value = row[metricColumn.id];
        min = Math.min(min, value);
        max = Math.max(max, value);
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: pointCoordinates
          },
          properties: {
            geohash: geohashValue,
            geohash_meta: {
              center: centerLatLng,
              rectangle: rectangle
            },
            value: value
          }
        };
      }).filter(row => row);
    }
  } else {
    features = [];
  }
  const featureCollection = {
    type: 'FeatureCollection',
    features: features
  };
  return {
    featureCollection: featureCollection,
    meta: {
      min: min,
      max: max,
      geohashPrecision: geohash && geohash.params.precision,
      geohashGridDimensionsAtEquator: geohash && Object(_grid_dimensions__WEBPACK_IMPORTED_MODULE_1__["gridDimensions"])(geohash.params.precision)
    }
  };
}
function clampGrid(val, min, max) {
  if (val > max) val = max;else if (val < min) val = min;
  return val;
}

/***/ }),

/***/ "./public/map/decode_geo_hash.ts":
/*!***************************************!*\
  !*** ./public/map/decode_geo_hash.ts ***!
  \***************************************/
/*! exports provided: decodeGeoHash, geohashColumns, geoContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeGeoHash", function() { return decodeGeoHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geohashColumns", function() { return geohashColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return geoContains; });
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
 * Decodes geohash to object containing
 * top-left and bottom-right corners of
 * rectangle and center point.
 */
function decodeGeoHash(geohash) {
  const BITS = [16, 8, 4, 2, 1];
  const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
  let isEven = true;
  const lat = [];
  const lon = [];
  lat[0] = -90.0;
  lat[1] = 90.0;
  lon[0] = -180.0;
  lon[1] = 180.0;
  let latErr = 90.0;
  let lonErr = 180.0;
  [...geohash].forEach(nextChar => {
    const cd = BASE32.indexOf(nextChar);
    for (let j = 0; j < 5; j++) {
      const mask = BITS[j];
      if (isEven) {
        lonErr = lonErr /= 2;
        refineInterval(lon, cd, mask);
      } else {
        latErr = latErr /= 2;
        refineInterval(lat, cd, mask);
      }
      isEven = !isEven;
    }
  });
  lat[2] = (lat[0] + lat[1]) / 2;
  lon[2] = (lon[0] + lon[1]) / 2;
  return {
    latitude: lat,
    longitude: lon
  };
}
function refineInterval(interval, cd, mask) {
  if (cd & mask) {
    /* eslint-disable-line */
    interval[0] = (interval[0] + interval[1]) / 2;
  } else {
    interval[1] = (interval[0] + interval[1]) / 2;
  }
}
function geohashColumns(precision) {
  return geohashCells(precision, 0);
}

/**
 * Get the number of geohash cells for a given precision
 *
 * @param {number} precision the geohash precision (1<=precision<=12).
 * @param {number} axis constant for the axis 0=lengthwise (ie. columns, along longitude), 1=heightwise (ie. rows, along latitude).
 * @returns {number} Number of geohash cells (rows or columns) at that precision
 */
function geohashCells(precision, axis) {
  let cells = 1;
  for (let i = 1; i <= precision; i += 1) {
    /* On odd precisions, rows divide by 4 and columns by 8. Vice-versa on even precisions */
    cells *= i % 2 === axis ? 4 : 8;
  }
  return cells;
}
function geoContains(collar, bounds) {
  if (!bounds || !collar) return false;
  // test if bounds top_left is outside collar
  if (bounds.top_left.lat > collar.top_left.lat || bounds.top_left.lon < collar.top_left.lon) {
    return false;
  }

  // test if bounds bottom_right is outside collar
  if (bounds.bottom_right.lat < collar.bottom_right.lat || bounds.bottom_right.lon > collar.bottom_right.lon) {
    return false;
  }

  // both corners are inside collar so collar contains bounds
  return true;
}

/***/ }),

/***/ "./public/map/grid_dimensions.js":
/*!***************************************!*\
  !*** ./public/map/grid_dimensions.js ***!
  \***************************************/
/*! exports provided: gridDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridDimensions", function() { return gridDimensions; });
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

// geohash precision mapping of geohash grid cell dimensions (width x height, in meters) at equator.
// https://opensearch.org/docs/latest/opensearch/bucket-agg/#geo_distance-geohash_grid
const gridAtEquator = {
  1: [5009400, 4992600],
  2: [1252300, 624100],
  3: [156500, 156000],
  4: [39100, 19500],
  5: [4900, 4900],
  6: [1200, 609.4],
  7: [152.9, 152.4],
  8: [38.2, 19],
  9: [4.8, 4.8],
  10: [1.2, 0.595],
  11: [0.149, 0.149],
  12: [0.037, 0.019]
};
function gridDimensions(precision) {
  return gridAtEquator[precision];
}

/***/ }),

/***/ "./public/map/index.scss":
/*!*******************************!*\
  !*** ./public/map/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./index.scss?v7dark */ "./public/map/index.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./index.scss?v7light */ "./public/map/index.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./index.scss?v8dark */ "./public/map/index.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./index.scss?v8light */ "./public/map/index.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./index.scss?v9dark */ "./public/map/index.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./index.scss?v9light */ "./public/map/index.scss?v9light");
}

/***/ }),

/***/ "./public/map/index.scss?v7dark":
/*!**************************************!*\
  !*** ./public/map/index.scss?v7dark ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./index.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v7dark");

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

/***/ "./public/map/index.scss?v7light":
/*!***************************************!*\
  !*** ./public/map/index.scss?v7light ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./index.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v7light");

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

/***/ "./public/map/index.scss?v8dark":
/*!**************************************!*\
  !*** ./public/map/index.scss?v8dark ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./index.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v8dark");

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

/***/ "./public/map/index.scss?v8light":
/*!***************************************!*\
  !*** ./public/map/index.scss?v8light ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./index.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v8light");

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

/***/ "./public/map/index.scss?v9dark":
/*!**************************************!*\
  !*** ./public/map/index.scss?v9dark ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./index.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v9dark");

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

/***/ "./public/map/index.scss?v9light":
/*!***************************************!*\
  !*** ./public/map/index.scss?v9light ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/map/index.scss?v9light");

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

/***/ "./public/map/opensearch_dashboards_map_layer.js":
/*!*******************************************************!*\
  !*** ./public/map/opensearch_dashboards_map_layer.js ***!
  \*******************************************************/
/*! exports provided: OpenSearchDashboardsMapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsMapLayer", function() { return OpenSearchDashboardsMapLayer; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
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


class OpenSearchDashboardsMapLayer extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
  constructor() {
    super();
    this._leafletLayer = null;
  }
  async getBounds() {
    return this._leafletLayer.getBounds();
  }
  addToLeafletMap(leafletMap) {
    this._leafletLayer.addTo(leafletMap);
  }
  removeFromLeafletMap(leafletMap) {
    leafletMap.removeLayer(this._leafletLayer);
  }
  appendLegendContents() {}
  updateExtent() {}
  movePointer() {}
  getAttributions() {
    return this._attribution;
  }
}

/***/ }),

/***/ "./public/map/precision.ts":
/*!*********************************!*\
  !*** ./public/map/precision.ts ***!
  \*********************************/
/*! exports provided: getZoomPrecision, getPrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoomPrecision", function() { return getZoomPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.js");
/* harmony import */ var _decode_geo_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decode_geo_hash */ "./public/map/decode_geo_hash.ts");
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



/**
 * Get the number of geohash columns (world-wide) for a given precision
 * @param precision the geohash precision
 * @returns {number} the number of columns
 */

const DEFAULT_PRECISION = 2;
function getMaxPrecision() {
  const config = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__["getUiSettings"])();
  return parseInt(config.get('visualization:tileMap:maxPrecision'), 10) || 12;
}
function getZoomPrecision() {
  /**
   * Map Leaflet zoom levels to geohash precision levels.
   * The size of a geohash column-width on the map should be at least `minGeohashPixels` pixels wide.
   */
  const zoomPrecision = {};
  const minGeohashPixels = 16;
  const maxPrecision = getMaxPrecision();
  for (let zoom = 0; zoom <= 21; zoom += 1) {
    const worldPixels = 256 * Math.pow(2, zoom);
    zoomPrecision[zoom] = 1;
    for (let precision = 2; precision <= maxPrecision; precision += 1) {
      const columns = Object(_decode_geo_hash__WEBPACK_IMPORTED_MODULE_1__["geohashColumns"])(precision);
      if (worldPixels / columns >= minGeohashPixels) {
        zoomPrecision[zoom] = precision;
      } else {
        break;
      }
    }
  }
  return zoomPrecision;
}
function getPrecision(val) {
  let precision = parseInt(val, 10);
  const maxPrecision = getMaxPrecision();
  if (Number.isNaN(precision)) {
    precision = DEFAULT_PRECISION;
  }
  if (precision > maxPrecision) {
    return maxPrecision;
  }
  return precision;
}

/***/ }),

/***/ "./public/map/service_settings_types.ts":
/*!**********************************************!*\
  !*** ./public/map/service_settings_types.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/opensearch_dashboards_services.js":
/*!**************************************************!*\
  !*** ./public/opensearch_dashboards_services.js ***!
  \**************************************************/
/*! exports provided: setToasts, getToasts, setUiSettings, getUiSettings, setOpenSearchDashboardsVersion, getOpenSearchDashboardsVersion, setMapsLegacyConfig, getMapsLegacyConfig, getEmsTileLayerId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToasts", function() { return setToasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToasts", function() { return getToasts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUiSettings", function() { return setUiSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiSettings", function() { return getUiSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOpenSearchDashboardsVersion", function() { return setOpenSearchDashboardsVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenSearchDashboardsVersion", function() { return getOpenSearchDashboardsVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapsLegacyConfig", function() { return setMapsLegacyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapsLegacyConfig", function() { return getMapsLegacyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmsTileLayerId", function() { return getEmsTileLayerId; });
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

let toast;
const setToasts = notificationToast => toast = notificationToast;
const getToasts = () => toast;
let uiSettings;
const setUiSettings = coreUiSettings => uiSettings = coreUiSettings;
const getUiSettings = () => uiSettings;
let opensearchDashboards;
const setOpenSearchDashboardsVersion = version => opensearchDashboards = version;
const getOpenSearchDashboardsVersion = () => opensearchDashboards;
let mapsLegacyConfig;
const setMapsLegacyConfig = config => mapsLegacyConfig = config;
const getMapsLegacyConfig = () => mapsLegacyConfig;
const getEmsTileLayerId = () => getMapsLegacyConfig().emsTileLayerId;

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: bindSetupCoreAndPlugins, MapsLegacyPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSetupCoreAndPlugins", function() { return bindSetupCoreAndPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsLegacyPlugin", function() { return MapsLegacyPlugin; });
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opensearch_dashboards_services */ "./public/opensearch_dashboards_services.js");
/* harmony import */ var _map_precision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/precision */ "./public/map/precision.ts");
/* harmony import */ var _map_base_maps_visualization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/base_maps_visualization */ "./public/map/base_maps_visualization.js");
/* harmony import */ var _get_service_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_service_settings */ "./public/get_service_settings.ts");
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

// @ts-ignore

// @ts-ignore



/**
 * These are the interfaces with your public contracts. You should export these
 * for other plugins to use in _their_ `SetupDeps`/`StartDeps` interfaces.
 * @public
 */

const bindSetupCoreAndPlugins = (core, config, opensearchDashboards) => {
  Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__["setToasts"])(core.notifications.toasts);
  Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__["setUiSettings"])(core.uiSettings);
  Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__["setOpenSearchDashboardsVersion"])(opensearchDashboards);
  Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_0__["setMapsLegacyConfig"])(config);
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface

// eslint-disable-next-line @typescript-eslint/no-empty-interface

class MapsLegacyPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "_initializerContext", void 0);
    this._initializerContext = initializerContext;
  }
  setup(core, plugins) {
    const config = this._initializerContext.config.get();
    const opensearchDashboards = this._initializerContext.env.packageInfo.version;
    bindSetupCoreAndPlugins(core, config, opensearchDashboards);
    const getBaseMapsVis = () => new _map_base_maps_visualization__WEBPACK_IMPORTED_MODULE_2__["BaseMapsVisualizationProvider"]();
    return {
      getServiceSettings: _get_service_settings__WEBPACK_IMPORTED_MODULE_3__["getServiceSettings"],
      getZoomPrecision: _map_precision__WEBPACK_IMPORTED_MODULE_1__["getZoomPrecision"],
      getPrecision: _map_precision__WEBPACK_IMPORTED_MODULE_1__["getPrecision"],
      config,
      getBaseMapsVis
    };
  }
  start(core, plugins) {}
}

/***/ }),

/***/ "./public/tooltip_provider.js":
/*!************************************!*\
  !*** ./public/tooltip_provider.js ***!
  \************************************/
/*! exports provided: mapTooltipProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTooltipProvider", function() { return mapTooltipProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
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



function getToolTipContent(details) {
  return react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, details.map((detail, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "visTooltip__label"
  }, detail.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "visTooltip__value"
  }, detail.value))))));
}
function mapTooltipProvider(element, formatter) {
  return (...args) => {
    const details = formatter(...args);
    return details && getToolTipContent(details);
  };
}

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

/***/ "react-dom/server":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.ReactDomServer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDomServer;

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
//# sourceMappingURL=mapsLegacy.plugin.js.map