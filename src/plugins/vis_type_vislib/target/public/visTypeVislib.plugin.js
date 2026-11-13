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
/******/ 		"visTypeVislib": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeVislib.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["visTypeVislib_bundle_jsonpfunction"] = window["visTypeVislib_bundle_jsonpfunction"] || [];
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#08334a;color:#1ba9f5}.visAlert--success{background-color:#26443f;color:#7de2d1}.visAlert--warning{background-color:#4d3e25;color:#ffce7a}.visAlert--danger{background-color:#4d1f1f;color:#f66}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(152,162,179,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(152,162,179,.2)}.visWrapper .label-text{font-size:12px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11px;font-size:0.6875rem;fill:#98a2b3}.visWrapper .axis-title text{font-size:12px;font-size:0.75rem;font-weight:700;fill:#98a2b3}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11px;font-size:0.6875rem;fill:#98a2b3}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#343741;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#98a2b3}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(255,255,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#1d1e24}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(255,255,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);border-radius:4px;background-color:#000;color:#fff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#ccc}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#1d1e24;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#093b56 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(212,218,229,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fff}.visGauge__meter--outline{stroke:#343741}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#08334a;color:#1ba9f5}.visAlert--success{background-color:#26443f;color:#7de2d1}.visAlert--warning{background-color:#4d3e25;color:#ffce7a}.visAlert--danger{background-color:#4d1f1f;color:#f66}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(152,162,179,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(152,162,179,.2)}.visWrapper .label-text{font-size:12px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11px;font-size:0.6875rem;fill:#98a2b3}.visWrapper .axis-title text{font-size:12px;font-size:0.75rem;font-weight:700;fill:#98a2b3}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11px;font-size:0.6875rem;fill:#98a2b3}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#343741;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#98a2b3}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(255,255,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#1d1e24}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(255,255,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);border-radius:4px;background-color:#000;color:#fff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#ccc}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#1d1e24;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#093b56 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(212,218,229,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fff}.visGauge__meter--outline{stroke:#343741}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e6f0f8;color:#006bb4}.visAlert--success{background-color:#e6f2f1;color:#01776d}.visAlert--warning{background-color:#fef6e6;color:#936400}.visAlert--danger{background-color:#f8e9e9;color:#bd271e}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(105,112,125,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(105,112,125,.2)}.visWrapper .label-text{font-size:12px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11px;font-size:0.6875rem;fill:#69707d}.visWrapper .axis-title text{font-size:12px;font-size:0.75rem;font-weight:700;fill:#69707d}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11px;font-size:0.6875rem;fill:#69707d}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d3dae6;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#69707d}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(0,0,0,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(0,0,0,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);border-radius:4px;background-color:#404040;color:#fff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#ccc}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e6f0f8 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(52,55,65,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fff}.visGauge__meter--outline{stroke:#d3dae6}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e6f0f8;color:#006bb4}.visAlert--success{background-color:#e6f2f1;color:#01776d}.visAlert--warning{background-color:#fef6e6;color:#936400}.visAlert--danger{background-color:#f8e9e9;color:#bd271e}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(105,112,125,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(105,112,125,.2)}.visWrapper .label-text{font-size:12px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11px;font-size:0.6875rem;fill:#69707d}.visWrapper .axis-title text{font-size:12px;font-size:0.75rem;font-weight:700;fill:#69707d}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11px;font-size:0.6875rem;fill:#69707d}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d3dae6;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#69707d}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(0,0,0,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(0,0,0,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(0,0,0,.1),0 6px 12px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1);border-radius:4px;background-color:#404040;color:#fff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12px;font-size:0.75rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#ccc}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e6f0f8 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(52,55,65,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fff}.visGauge__meter--outline{stroke:#d3dae6}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#0d3c3d;color:#40afa2}.visAlert--success{background-color:#2d5051;color:#7de2d1}.visAlert--warning{background-color:#544a37;color:#ffce7a}.visAlert--danger{background-color:#542b31;color:#ff7575}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(141,152,163,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(141,152,163,.2)}.visWrapper .label-text{font-size:13.5px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:12.5px;font-size:0.6944444444rem;fill:#8d98a3}.visWrapper .axis-title text{font-size:13.5px;font-size:0.75rem;font-weight:700;fill:#8d98a3}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:12.5px;font-size:0.6944444444rem;fill:#8d98a3}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#293847;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#8d98a3}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(252,254,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#0a121a}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(252,254,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(10,18,26,.1),0 6px 12px 0 rgba(10,18,26,.1),0 4px 4px 0 rgba(10,18,26,.1),0 2px 2px 0 rgba(10,18,26,.1);border-radius:4px;background-color:#293847;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cccfd1}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#0a121a;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#0e4342 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(223,227,232,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:13.5px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#293847}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#0d3c3d;color:#40afa2}.visAlert--success{background-color:#2d5051;color:#7de2d1}.visAlert--warning{background-color:#544a37;color:#ffce7a}.visAlert--danger{background-color:#542b31;color:#ff7575}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(141,152,163,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(141,152,163,.2)}.visWrapper .label-text{font-size:13.5px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:12.5px;font-size:0.6944444444rem;fill:#8d98a3}.visWrapper .axis-title text{font-size:13.5px;font-size:0.75rem;font-weight:700;fill:#8d98a3}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:12.5px;font-size:0.6944444444rem;fill:#8d98a3}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#293847;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#8d98a3}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(252,254,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#0a121a}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(252,254,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(10,18,26,.1),0 6px 12px 0 rgba(10,18,26,.1),0 4px 4px 0 rgba(10,18,26,.1),0 2px 2px 0 rgba(10,18,26,.1);border-radius:4px;background-color:#293847;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cccfd1}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#0a121a;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#0e4342 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(223,227,232,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:13.5px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#293847}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e4f2f2;color:#077774}.visAlert--success{background-color:#e3f1f1;color:#01786f}.visAlert--warning{background-color:#fbf5e6;color:#8f680b}.visAlert--danger{background-color:#f6e9e9;color:#bd271e}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(90,104,117,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(90,104,117,.2)}.visWrapper .label-text{font-size:13.5px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:12.5px;font-size:0.6944444444rem;fill:#5a6875}.visWrapper .axis-title text{font-size:13.5px;font-size:0.75rem;font-weight:700;fill:#5a6875}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:12.5px;font-size:0.6944444444rem;fill:#5a6875}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d6d9dd;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#5a6875}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(10,18,25,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fcfeff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(10,18,25,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(10,18,26,.1),0 6px 12px 0 rgba(10,18,26,.1),0 4px 4px 0 rgba(10,18,26,.1),0 2px 2px 0 rgba(10,18,26,.1);border-radius:4px;background-color:#293847;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cccfd1}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fcfeff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e4f2f2 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(42,57,71,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:13.5px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#d6d9dd}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,4BAA4B,0BAA0B,CAAC,6BAA6B,kBAAkB,CAAC,2BAA2B,6BAA6B,CAAC,8BAA8B,qBAAqB,CAAC,eAAe,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,UAAU,CAAC,MAAM,CAAC,OAAO,CAAC,eAAe,CAAC,SAAS,CAAC,2BAA2B,CAAC,qBAAqB,CAAC,wBAAwB,CAAC,iBAAiB,QAAQ,CAAC,aAAa,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,aAAa,CAAC,QAAQ,CAAC,SAAS,CAAC,kBAAkB,cAAc,CAAC,UAAU,gBAAgB,CAAC,uBAAuB,CAAC,YAAY,CAAC,gBAAgB,wBAAwB,CAAC,aAAa,CAAC,mBAAmB,wBAAwB,CAAC,aAAa,CAAC,mBAAmB,wBAAwB,CAAC,aAAa,CAAC,kBAAkB,wBAAwB,CAAC,aAAa,CAAC,UAAU,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,iBAAiB,CAAC,eAAe,qBAAqB,CAAC,kBAAkB,mBAAmB,CAAC,mBAAmB,cAAc,CAAC,eAAe,CAAC,YAAY,YAAY,CAAC,aAAa,CAAC,kBAAkB,CAAC,YAAY,CAAC,WAAW,CAAC,eAAe,CAAC,cAAc,CAAC,oBAAoB,YAAY,CAAC,UAAU,CAAC,qBAAqB,CAAC,YAAY,CAAC,WAAW,CAAC,iCAAiC,YAAY,CAAC,aAAa,CAAC,kBAAkB,CAAC,YAAY,CAAC,WAAW,CAAC,oDAAoD,YAAY,CAAC,eAAe,CAAC,8BAA8B,YAAY,CAAC,qBAAqB,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,iDAAiD,aAAa,CAAC,cAAc,CAAC,mBAAmB,YAAY,CAAC,UAAU,CAAC,gBAAgB,CAAC,UAAU,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,iBAAiB,CAAC,oCAAoC,kBAAkB,CAAC,wBAAwB,YAAY,CAAC,qBAAqB,CAAC,YAAY,CAAC,WAAW,CAAC,YAAY,gBAAgB,CAAC,oBAAoB,YAAY,CAAC,oBAAoB,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,yBAAyB,YAAY,CAAC,qBAAqB,CAAC,eAAe,CAAC,WAAW,CAAC,yBAAyB,YAAY,CAAC,kBAAkB,CAAC,cAAc,CAAC,eAAe,CAAC,cAAc,CAAC,8CAA8C,YAAY,CAAC,qBAAqB,CAAC,eAAe,CAAC,WAAW,CAAC,uBAAuB,kBAAkB,CAAC,YAAY,CAAC,gBAAgB,gBAAgB,CAAC,iBAAiB,SAAS,CAAC,uBAAuB,UAAU,CAAC,mBAAmB,SAAS,CAAC,yBAAyB,SAAS,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,uBAAuB,0BAA0B,CAAC,wBAAwB,SAAS,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,wBAAwB,gBAAgB,CAAC,iBAAiB,CAAC,eAAe,CAAC,wBAAwB,aAAa,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,wBAAwB,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,UAAU,CAAC,4BAA4B,UAAU,CAAC,uBAAuB,gBAAgB,CAAC,yBAAyB,CAAC,YAAY,CAAC,6BAA6B,gBAAgB,CAAC,iBAAiB,CAAC,eAAe,CAAC,YAAY,CAAC,0BAA0B,eAAe,CAAC,aAAa,CAAC,0BAA0B,cAAc,CAAC,yBAAyB,aAAa,CAAC,eAAe,CAAC,cAAc,CAAC,8BAA8B,gBAAgB,CAAC,yBAAyB,CAAC,YAAY,CAAC,mBAAmB,oBAAoB,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,gBAAgB,CAAC,sCAAsC,UAAU,CAAC,WAAW,CAAC,4CAA4C,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,yFAAyF,8BAA8B,CAAC,uBAAuB,aAAa,CAAC,iDAAiD,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,sCAAsC,YAAY,CAAC,aAAa,CAAC,qCAAqC,eAAe,CAAC,cAAc,CAAC,kBAAkB,0BAA0B,CAAC,gBAAgB,CAAC,8CAA8C,cAAc,CAAC,SAAS,CAAC,0BAA0B,CAAC,yEAAyE,YAAY,CAAC,2BAA2B,0BAA0B,CAAC,sBAAsB,CAAC,uCAAuC,UAAU,CAAC,kDAAkD,gBAAgB,CAAC,cAAc,CAAC,yBAAyB,eAAe,CAAC,wBAAwB,qBAAqB,CAAC,mBAAmB,gBAAgB,CAAC,cAAc,CAAC,yBAAyB,UAAU,CAAC,yBAAyB,SAAS,CAAC,+BAA+B,gBAAgB,CAAC,iBAAiB,CAAC,qBAAqB,mBAAmB,CAAC,sBAAsB,CAAC,qCAAqC,qIAAqI,CAAC,iBAAiB,CAAC,wBAAwB,CAAC,aAAa,CAAC,YAAY,CAAC,eAAe,CAAC,wBAAwB,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,oBAAoB,CAAC,WAAW,CAAC,iBAAiB,CAAC,mBAAmB,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,SAAS,CAAC,6DAA6D,iBAAiB,CAAC,yCAAyC,gBAAgB,CAAC,8GAA8G,eAAe,CAAC,WAAW,CAAC,wBAAwB,CAAC,oBAAoB,CAAC,oBAAoB,cAAc,CAAC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,+BAA+B,eAAe,CAAC,sBAAsB,cAAc,CAAC,wDAAwD,wBAAwB,CAAC,oBAAoB,CAAC,wBAAwB,aAAa,CAAC,iBAAiB,CAAC,wBAAwB,aAAa,CAAC,mBAAmB,eAAe,CAAC,aAAa,CAAC,yBAAyB,UAAU,CAAC,WAAW,CAAC,mBAAmB,iBAAiB,CAAC,YAAY,CAAC,WAAW,CAAC,wBAAwB,CAAC,iIAAiI,CAAC,yBAAyB,eAAe,CAAC,mCAAmC,CAAC,gCAAgC,iBAAiB,CAAC,QAAQ,CAAC,MAAM,CAAC,2BAA2B,kCAAkC,CAAC,SAAS,CAAC,WAAW,YAAY,CAAC,YAAY,CAAC,WAAW,CAAC,sCAAsC,kBAAkB,CAAC,wCAAwC,gBAAgB,CAAC,iBAAiB,oBAAoB,CAAC,YAAY,CAAC,WAAW,CAAC,aAAa,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,eAAe,CAAC,oCAAoC,UAAU,CAAC,WAAW,CAAC,0CAA0C,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qFAAqF,8BAA8B,CAAC,oCAAoC,gBAAgB,CAAC,eAAe,CAAC,eAAe,CAAC,2DAA2D,qBAAqB,CAAC,6EAA6E,UAAU,CAAC,kBAAkB,CAAC,iHAAiH,WAAW,CAAC,eAAe,CAAC,wBAAwB,iBAAiB,CAAC,6BAA6B,WAAW,CAAC,gCAAgC,cAAc,CAAC,sCAAsC,oBAAoB,CAAC,2CAA2C,gBAAgB,CAAC,kBAAkB,CAAC,0BAA0B,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,yBAAyB,CAAC,kBAAkB,CAAC,iCAAiC,SAAS,CAAC,kCAAkC,YAAY,CAAC,0BAA0B,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e4f2f2;color:#077774}.visAlert--success{background-color:#e3f1f1;color:#01786f}.visAlert--warning{background-color:#fbf5e6;color:#8f680b}.visAlert--danger{background-color:#f6e9e9;color:#bd271e}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(90,104,117,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(90,104,117,.2)}.visWrapper .label-text{font-size:13.5px;font-size:0.75rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:12.5px;font-size:0.6944444444rem;fill:#5a6875}.visWrapper .axis-title text{font-size:13.5px;font-size:0.75rem;font-weight:700;fill:#5a6875}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:12.5px;font-size:0.6944444444rem;fill:#5a6875}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d6d9dd;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#5a6875}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(10,18,25,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fcfeff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(10,18,25,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(10,18,26,.1),0 6px 12px 0 rgba(10,18,26,.1),0 4px 4px 0 rgba(10,18,26,.1),0 2px 2px 0 rgba(10,18,26,.1);border-radius:4px;background-color:#293847;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:13.5px;font-size:0.75rem;line-height:1.333333;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cccfd1}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fcfeff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e4f2f2 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(42,57,71,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:13.5px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#d6d9dd}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#012f49;color:#169fd3}.visAlert--success{background-color:#072d2e;color:#38a08e}.visAlert--warning{background-color:#4b3616;color:#f4ae27}.visAlert--danger{background-color:#3f1d24;color:#d17671}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(149,155,162,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(149,155,162,.2)}.visWrapper .label-text{font-size:12.000002px;font-size:0.857143rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11.000002px;font-size:0.7857144286rem;fill:#959ba2}.visWrapper .axis-title text{font-size:12.000002px;font-size:0.857143rem;font-weight:500;fill:#959ba2}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11.000002px;font-size:0.7857144286rem;fill:#959ba2}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#2a3540;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#959ba2}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(252,254,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#0f171f}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(252,254,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(2,2,14,.1),0 6px 12px 0 rgba(2,2,14,.1),0 4px 4px 0 rgba(2,2,14,.1),0 2px 2px 0 rgba(2,2,14,.1);border-radius:4px;background-color:#19222b;color:#e3e5e9;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#b6b8bd}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#0f171f;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#013652 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(227,229,233,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12.000002px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#e3e5e9}.visGauge__meter--outline{stroke:#2a3540}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#012f49;color:#169fd3}.visAlert--success{background-color:#072d2e;color:#38a08e}.visAlert--warning{background-color:#4b3616;color:#f4ae27}.visAlert--danger{background-color:#3f1d24;color:#d17671}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(149,155,162,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(149,155,162,.2)}.visWrapper .label-text{font-size:12.000002px;font-size:0.857143rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11.000002px;font-size:0.7857144286rem;fill:#959ba2}.visWrapper .axis-title text{font-size:12.000002px;font-size:0.857143rem;font-weight:500;fill:#959ba2}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11.000002px;font-size:0.7857144286rem;fill:#959ba2}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#2a3540;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#959ba2}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(252,254,255,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#0f171f}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(252,254,255,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(2,2,14,.1),0 6px 12px 0 rgba(2,2,14,.1),0 4px 4px 0 rgba(2,2,14,.1),0 2px 2px 0 rgba(2,2,14,.1);border-radius:4px;background-color:#19222b;color:#e3e5e9;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#b6b8bd}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#0f171f;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#013652 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(227,229,233,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12.000002px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#e3e5e9}.visGauge__meter--outline{stroke:#2a3540}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e3eff8;color:#0268bc}.visAlert--success{background-color:#e4f1f0;color:#0e7564}.visAlert--warning{background-color:#f9f5ea;color:#8e6625}.visAlert--danger{background-color:#f6ebeb;color:#ba3a33}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(90,104,117,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(90,104,117,.2)}.visWrapper .label-text{font-size:12.000002px;font-size:0.857143rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11.000002px;font-size:0.7857144286rem;fill:#5a6875}.visWrapper .axis-title text{font-size:12.000002px;font-size:0.857143rem;font-weight:500;fill:#5a6875}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11.000002px;font-size:0.7857144286rem;fill:#5a6875}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d6d9dd;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#5a6875}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(10,18,25,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fcfeff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(10,18,25,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(2,2,14,.1),0 6px 12px 0 rgba(2,2,14,.1),0 4px 4px 0 rgba(2,2,14,.1),0 2px 2px 0 rgba(2,2,14,.1);border-radius:4px;background-color:#2a3947;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cacccf}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fcfeff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e3eff8 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(42,57,71,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12.000002px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#d6d9dd}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visLib{flex:1 1 0;display:flex;flex-direction:row;overflow:auto}.visLib.visLib--legend-left{flex-direction:row-reverse}.visLib.visLib--legend-right{flex-direction:row}.visLib.visLib--legend-top{flex-direction:column-reverse}.visLib.visLib--legend-bottom{flex-direction:column}.visLib__chart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visAlerts__tray{position:absolute;bottom:5px;left:0;right:0;list-style:none;padding:0;transition-property:opacity;transition-delay:90ms;transition-duration:90ms}.visAlerts__icon{margin:0;padding:0 8px;flex:0 0 auto;align-self:center}.visAlerts__text{flex:1 1 auto;margin:0;padding:0}.visAlerts__close{cursor:pointer}.visAlert{margin:0 8px 8px;padding:4px 8px 4px 4px;display:flex}.visAlert--info{background-color:#e3eff8;color:#0268bc}.visAlert--success{background-color:#e4f1f0;color:#0e7564}.visAlert--warning{background-color:#f9f5ea;color:#8e6625}.visAlert--danger{background-color:#f6ebeb;color:#ba3a33}.visError{flex:1 1 0;display:flex;align-items:center;justify-content:center;text-align:center}.visError .top{align-self:flex-start}.visError .bottom{align-self:flex-end}.visError--request{max-width:100%;max-height:100%}.visWrapper{display:flex;flex:1 1 100%;flex-direction:row;min-height:0;min-width:0;overflow:hidden;padding:10px 0}.visWrapper__column{display:flex;flex:1 0 0;flex-direction:column;min-height:0;min-width:0}.visWrapper__splitCharts--column{display:flex;flex:1 0 20px;flex-direction:row;min-height:0;min-width:0}.visWrapper__splitCharts--column .visWrapper__chart{margin-top:0;margin-bottom:0}.visWrapper__splitCharts--row{display:flex;flex-direction:column;flex:1 1 100%;min-height:0;min-width:0}.visWrapper__splitCharts--row .visWrapper__chart{margin-left:0;margin-right:0}.visWrapper__chart{display:flex;flex:1 0 0;overflow:visible;margin:5px;min-height:0;min-width:0}.visWrapper__alerts{position:relative}.visAxis__column--top .axis-div svg{margin-bottom:-5px}.visAxis--x,.visAxis--y{display:flex;flex-direction:column;min-height:0;min-width:0}.visAxis--x{overflow:visible}.visAxis__spacer--y{min-height:0}.visAxis__column--y{display:flex;flex-direction:row;flex:1 0 36px;min-height:0;min-width:0}.visAxis__splitTitles--y{display:flex;flex-direction:column;min-height:12px;min-width:0}.visAxis__splitTitles--x{display:flex;flex-direction:row;min-height:1px;max-height:16px;min-width:16px}.visAxis__splitAxes--x,.visAxis__splitAxes--y{display:flex;flex-direction:column;min-height:20px;min-width:0}.visAxis__splitAxes--x{flex-direction:row;min-height:0}.visWrapper svg{overflow:visible}.visWrapper rect{opacity:1}.visWrapper rect:hover{opacity:.8}.visWrapper circle{opacity:0}.visWrapper circle:hover{opacity:1;stroke-width:8px;stroke-opacity:.8}.visWrapper .grid>path{stroke:rgba(90,104,117,.2)}.visWrapper .label-line{fill:none;stroke-width:2px;stroke:rgba(90,104,117,.2)}.visWrapper .label-text{font-size:12.000002px;font-size:0.857143rem;font-weight:400}.visWrapper .y-axis-div{flex:1 1 24px;min-width:1px;min-height:12px;margin:5px 0}.visWrapper .x-axis-div{min-height:0;min-width:1px;margin:0 5px;width:100%}.visWrapper .x-axis-div svg{float:left}.visWrapper .tick text{font-size:11.000002px;font-size:0.7857144286rem;fill:#5a6875}.visWrapper .axis-title text{font-size:12.000002px;font-size:0.857143rem;font-weight:500;fill:#5a6875}.visWrapper .y-axis-title{min-height:14px;min-width:1px}.visWrapper .x-axis-title{min-width:16px}.visWrapper .chart-title{flex:1 1 100%;min-height:14px;min-width:14px}.visWrapper .chart-title text{font-size:11.000002px;font-size:0.7857144286rem;fill:#5a6875}.visWrapper .chart{scrollbar-width:thin;flex:1 1 100%;min-height:0;min-width:0;overflow:visible}.visWrapper .chart::-webkit-scrollbar{width:16px;height:16px}.visWrapper .chart::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visWrapper .chart::-webkit-scrollbar-corner,.visWrapper .chart::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visWrapper .chart>svg{display:block}.visWrapper .chart-row,.visWrapper .chart-column{flex:1 1 auto;min-height:0;min-width:0}.visWrapper .visWrapper__chart--first{margin-top:0;margin-left:0}.visWrapper .visWrapper__chart--last{margin-bottom:0;margin-right:0}.visWrapper .axis{shape-rendering:crispEdges;stroke-width:1px}.visWrapper .axis line,.visWrapper .axis path{stroke:#d6d9dd;fill:none;shape-rendering:crispEdges}.visWrapper .chart-label,.visWrapper .label-text,.visWrapper .chart-text{fill:#5a6875}.visWrapper .brush .extent{shape-rendering:crispEdges;fill:rgba(10,18,25,.1)}.visWrapper .visAreaChart__overlapArea{opacity:.8}.visWrapper .series>path,.visWrapper .series>rect{stroke-opacity:1;stroke-width:0}.visWrapper .series>path{fill-opacity:.8}.visWrapper .blur_shape{opacity:.3 !important}.visWrapper .slice{stroke-width:2px;stroke:#fcfeff}.visWrapper .slice:hover{opacity:.8}.visWrapper .line circle{opacity:1}.visWrapper .line circle:hover{stroke-width:8px;stroke-opacity:.8}.visWrapper .endzone{pointer-events:none;fill:rgba(10,18,25,.1)}.visTooltip,.visTooltip__sizingClone{box-shadow:0 12px 24px 0 rgba(2,2,14,.1),0 6px 12px 0 rgba(2,2,14,.1),0 4px 4px 0 rgba(2,2,14,.1),0 2px 2px 0 rgba(2,2,14,.1);border-radius:4px;background-color:#2a3947;color:#fcfeff;z-index:9000;max-width:256px;overflow-wrap:break-word;font-size:12.000002px;font-size:0.857143rem;line-height:1.5;padding:8px;visibility:hidden;pointer-events:none;position:fixed;max-width:320px;overflow:hidden;padding:0}.visTooltip>:last-child,.visTooltip__sizingClone>:last-child{margin-bottom:8px}.visTooltip>*,.visTooltip__sizingClone>*{margin:8px 8px 0}.visTooltip table td,.visTooltip table th,.visTooltip__sizingClone table td,.visTooltip__sizingClone table th{text-align:left;padding:4px;overflow-wrap:break-word;word-wrap:break-word}.visTooltip__header{margin:0 0 8px;padding:4px 8px;display:flex;align-items:center}.visTooltip__header:last-child{margin-bottom:0}.visTooltip__header+*{margin-top:8px}.visTooltip__labelContainer,.visTooltip__valueContainer{overflow-wrap:break-word;word-wrap:break-word}.visTooltip__headerIcon{flex:0 0 auto;padding-right:8px}.visTooltip__headerText{flex:1 1 100%}.visTooltip__label{font-weight:500;color:#cacccf}.visTooltip__sizingClone{top:-500px;left:-500px}.visLegend__toggle{border-radius:4px;display:flex;padding:4px;background-color:#fcfeff;transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1),background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1) 500ms}.visLegend__toggle:focus{box-shadow:none;background-color:#e3eff8 !important}.visLegend__toggleTooltipAnchor{position:absolute;bottom:0;left:0}.visLegend__toggle--isOpen{background-color:rgba(42,57,71,.1);opacity:1}.visLegend{display:flex;min-height:0;height:100%}.visLib--legend-left .visLegend__list{margin-bottom:24px}.visLib--legend-bottom .visLegend__list{margin-left:24px}.visLegend__list{scrollbar-width:thin;display:flex;width:150px;flex:1 1 auto;flex-direction:column;overflow-x:hidden;overflow-y:auto}.visLegend__list::-webkit-scrollbar{width:16px;height:16px}.visLegend__list::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visLegend__list::-webkit-scrollbar-corner,.visLegend__list::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visLegend__list .visLegend__button{font-size:12.000002px;text-align:left;overflow:hidden}.visLegend__list .visLegend__button .visLegend__valueTitle{vertical-align:middle}.visLib--legend-top .visLegend__list,.visLib--legend-bottom .visLegend__list{width:auto;flex-flow:row wrap}.visLib--legend-top .visLegend__list .visLegend__value,.visLib--legend-bottom .visLegend__list .visLegend__value{flex-grow:0;max-width:150px}.visLegend__list.hidden{visibility:hidden}.visLegend__valueColorPicker{width:240px}.visLegend__valueColorPickerDot{cursor:pointer}.visLegend__valueColorPickerDot:hover{transform:scale(1.4)}.visLegend__valueColorPickerDot-isSelected{border:4px solid;border-radius:100%}.visColumnChart__barLabel{font-size:8pt;pointer-events:none}.visColumnChart__barLabel--stack{dominant-baseline:central;text-anchor:middle}.visColumnChart__bar-label--dark{fill:#000}.visColumnChart__bar-label--light{fill:#fcfeff}.visGauge__meter--outline{stroke:#d6d9dd}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeVislib!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeVislib!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeVislib']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeVislib_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeVislib!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeVislib!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeVislib_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeVislib_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeVislib/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_vislib/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/area.ts":
/*!************************!*\
  !*** ./public/area.ts ***!
  \************************/
/*! exports provided: createAreaVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaVisTypeDefinition", function() { return createAreaVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _utils_common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common_config */ "./public/utils/common_config.tsx");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_8__);
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








const createAreaVisTypeDefinition = deps => ({
  name: 'area',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.areaTitle', {
    defaultMessage: 'Area'
  }),
  icon: 'visArea',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.areaDescription', {
    defaultMessage: 'Emphasize the quantity beneath a line chart'
  }),
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_6__["createVislibVisController"])(deps),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].filter, _visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].brush];
  },
  visConfig: {
    defaults: {
      type: 'area',
      grid: {
        categoryLines: false
      },
      categoryAxes: [{
        id: 'CategoryAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].CATEGORY,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].BOTTOM,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR
        },
        labels: {
          show: true,
          filter: true,
          truncate: 100
        },
        title: {}
      }],
      valueAxes: [{
        id: 'ValueAxis-1',
        name: 'LeftAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].VALUE,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].LEFT,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR,
          mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisModes"].NORMAL
        },
        labels: {
          show: true,
          rotate: _charts_public__WEBPACK_IMPORTED_MODULE_7__["Rotates"].HORIZONTAL,
          filter: false,
          truncate: 100
        },
        title: {
          text: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"]
        }
      }],
      seriesParams: [{
        show: true,
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartTypes"].AREA,
        mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartModes"].STACKED,
        data: {
          label: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"],
          id: '1'
        },
        drawLinesBetweenPoints: true,
        lineWidth: 2,
        showCircles: true,
        interpolate: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["InterpolationModes"].LINEAR,
        valueAxis: 'ValueAxis-1'
      }],
      addTooltip: true,
      addLegend: true,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].RIGHT,
      times: [],
      addTimeMarker: false,
      thresholdLine: {
        show: false,
        value: 10,
        width: 1,
        style: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ThresholdLineStyles"].FULL,
        color: Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[9]
      },
      labels: {}
    }
  },
  events: {
    brush: {
      disabled: false
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getConfigCollections"])(),
    optionTabs: Object(_utils_common_config__WEBPACK_IMPORTED_MODULE_5__["getAreaOptionTabs"])(),
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.metricsTitle', {
        defaultMessage: 'Y-axis'
      }),
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      min: 1,
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'radius',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.radiusTitle', {
        defaultMessage: 'Dot size'
      }),
      min: 0,
      max: 1,
      aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.segmentTitle', {
        defaultMessage: 'X-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.groupTitle', {
        defaultMessage: 'Split series'
      }),
      min: 0,
      max: 3,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.area.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  }
});

/***/ }),

/***/ "./public/components/common/index.ts":
/*!*******************************************!*\
  !*** ./public/components/common/index.ts ***!
  \*******************************************/
/*! exports provided: TruncateLabelsOption, ValidationWrapper, ValidationVisOptionsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truncate_labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate_labels */ "./public/components/common/truncate_labels.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateLabelsOption", function() { return _truncate_labels__WEBPACK_IMPORTED_MODULE_0__["TruncateLabelsOption"]; });

/* harmony import */ var _validation_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation_wrapper */ "./public/components/common/validation_wrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationWrapper", function() { return _validation_wrapper__WEBPACK_IMPORTED_MODULE_1__["ValidationWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationVisOptionsProps", function() { return _validation_wrapper__WEBPACK_IMPORTED_MODULE_1__["ValidationVisOptionsProps"]; });

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

/***/ "./public/components/common/truncate_labels.tsx":
/*!******************************************************!*\
  !*** ./public/components/common/truncate_labels.tsx ***!
  \******************************************************/
/*! exports provided: TruncateLabelsOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateLabelsOption", function() { return TruncateLabelsOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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




function TruncateLabelsOption({
  disabled,
  value = null,
  setValue
}) {
  const onChange = ev => setValue('truncate', ev.target.value === '' ? null : parseFloat(ev.target.value));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.truncateLabel', {
      defaultMessage: 'Truncate'
    }),
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFieldNumber"], {
    disabled: disabled,
    value: value === null ? '' : value,
    onChange: onChange,
    fullWidth: true,
    compressed: true
  }));
}


/***/ }),

/***/ "./public/components/common/validation_wrapper.tsx":
/*!*********************************************************!*\
  !*** ./public/components/common/validation_wrapper.tsx ***!
  \*********************************************************/
/*! exports provided: ValidationWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationWrapper", function() { return ValidationWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


function ValidationWrapper({
  component: Component,
  ...rest
}) {
  const [panelState, setPanelState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const isPanelValid = Object.values(panelState).every(item => item.isValid);
  const {
    setValidity
  } = rest;
  const setValidityHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, isValid) => {
    setPanelState(state => ({
      ...state,
      [paramName]: {
        isValid
      }
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(isPanelValid);
  }, [isPanelValid, setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, rest, {
    setMultipleValidity: setValidityHandler
  }));
}


/***/ }),

/***/ "./public/components/options/gauge/index.tsx":
/*!***************************************************!*\
  !*** ./public/components/options/gauge/index.tsx ***!
  \***************************************************/
/*! exports provided: GaugeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeOptions", function() { return GaugeOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ranges_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranges_panel */ "./public/components/options/gauge/ranges_panel.tsx");
/* harmony import */ var _style_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_panel */ "./public/components/options/gauge/style_panel.tsx");
/* harmony import */ var _labels_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labels_panel */ "./public/components/options/gauge/labels_panel.tsx");
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






function GaugeOptions(props) {
  const {
    stateParams,
    setValue
  } = props;
  const setGaugeValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('gauge', {
    ...stateParams.gauge,
    [paramName]: value
  }), [setValue, stateParams.gauge]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_panel__WEBPACK_IMPORTED_MODULE_3__["StylePanel"], _extends({}, props, {
    setGaugeValue: setGaugeValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ranges_panel__WEBPACK_IMPORTED_MODULE_2__["RangesPanel"], _extends({}, props, {
    setGaugeValue: setGaugeValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_labels_panel__WEBPACK_IMPORTED_MODULE_4__["LabelsPanel"], _extends({}, props, {
    setGaugeValue: setGaugeValue
  })));
}


/***/ }),

/***/ "./public/components/options/gauge/labels_panel.tsx":
/*!**********************************************************!*\
  !*** ./public/components/options/gauge/labels_panel.tsx ***!
  \**********************************************************/
/*! exports provided: LabelsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsPanel", function() { return LabelsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






function LabelsPanel({
  stateParams,
  setValue,
  setGaugeValue
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.gaugeOptions.labelsTitle",
    defaultMessage: "Labels"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.showLabelsLabel', {
      defaultMessage: 'Show labels'
    }),
    paramName: "show",
    value: stateParams.gauge.labels.show,
    setValue: (paramName, value) => setGaugeValue('labels', {
      ...stateParams.gauge.labels,
      [paramName]: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["TextInputOption"], {
    disabled: !stateParams.gauge.labels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.subTextLabel', {
      defaultMessage: 'Sub label'
    }),
    paramName: "subText",
    value: stateParams.gauge.style.subText,
    setValue: (paramName, value) => setGaugeValue('style', {
      ...stateParams.gauge.style,
      [paramName]: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: !stateParams.gauge.labels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.displayWarningsLabel', {
      defaultMessage: 'Display warnings'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.switchWarningsTooltip', {
      defaultMessage: 'Turns on/off warnings. When turned on, a warning will be shown if not all labels could be displayed.'
    }),
    paramName: "isDisplayWarning",
    value: stateParams.isDisplayWarning,
    setValue: setValue
  }));
}


/***/ }),

/***/ "./public/components/options/gauge/ranges_panel.tsx":
/*!**********************************************************!*\
  !*** ./public/components/options/gauge/ranges_panel.tsx ***!
  \**********************************************************/
/*! exports provided: RangesPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangesPanel", function() { return RangesPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






function RangesPanel({
  setGaugeValue,
  setTouched,
  setValidity,
  setValue,
  stateParams,
  uiState,
  vis
}) {
  const setColorSchemaOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setGaugeValue(paramName, value);
    // set outline if color schema is changed to greys
    // if outline wasn't set explicitly yet
    if (paramName === 'colorSchema' && value === _charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorSchemas"].Greys && typeof stateParams.gauge.outline === 'undefined') {
      setGaugeValue('outline', true);
    }
  }, [setGaugeValue, stateParams]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.gaugeOptions.rangesTitle",
    defaultMessage: "Ranges"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorRanges"], {
    "data-test-subj": "gaugeColorRange",
    colorsRange: stateParams.gauge.colorsRange,
    setValue: setGaugeValue,
    setTouched: setTouched,
    setValidity: setValidity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: stateParams.gauge.colorsRange.length < 2,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.autoExtendRangeLabel', {
      defaultMessage: 'Auto extend range'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.extendRangeTooltip', {
      defaultMessage: 'Extends range to the maximum value in your data.'
    }),
    paramName: "extendRange",
    value: stateParams.gauge.extendRange,
    setValue: setGaugeValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    "data-test-subj": "gaugePercentageMode",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.percentageModeLabel', {
      defaultMessage: 'Percentage mode'
    }),
    paramName: "percentageMode",
    value: stateParams.gauge.percentageMode,
    setValue: setGaugeValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorSchemaOptions"], {
    disabled: stateParams.gauge.colorsRange.length < 2,
    colorSchema: stateParams.gauge.colorSchema,
    colorSchemas: vis.type.editorConfig.collections.colorSchemas,
    invertColors: stateParams.gauge.invertColors,
    uiState: uiState,
    setValue: setColorSchemaOptions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.showOutline', {
      defaultMessage: 'Show outline'
    }),
    paramName: "outline",
    value: stateParams.gauge.outline,
    setValue: setGaugeValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.showLegendLabel', {
      defaultMessage: 'Show legend'
    }),
    paramName: "addLegend",
    value: stateParams.addLegend,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.showScaleLabel', {
      defaultMessage: 'Show scale'
    }),
    paramName: "show",
    value: stateParams.gauge.scale.show,
    setValue: (paramName, value) => setGaugeValue('scale', {
      ...stateParams.gauge.scale,
      [paramName]: value
    })
  }));
}


/***/ }),

/***/ "./public/components/options/gauge/style_panel.tsx":
/*!*********************************************************!*\
  !*** ./public/components/options/gauge/style_panel.tsx ***!
  \*********************************************************/
/*! exports provided: StylePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylePanel", function() { return StylePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/public */ "plugin/data/public");
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







function StylePanel({
  aggs,
  setGaugeValue,
  stateParams,
  vis
}) {
  const diasableAlignment = aggs.byType(_data_public__WEBPACK_IMPORTED_MODULE_5__["AggGroupNames"].Metrics).length === 1 && !aggs.byType(_data_public__WEBPACK_IMPORTED_MODULE_5__["AggGroupNames"].Buckets);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.gaugeOptions.styleTitle",
    defaultMessage: "Style"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.gaugeTypeLabel', {
      defaultMessage: 'Gauge type'
    }),
    options: vis.type.editorConfig.collections.gaugeTypes,
    paramName: "gaugeType",
    value: stateParams.gauge.gaugeType,
    setValue: setGaugeValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    disabled: diasableAlignment,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.gaugeOptions.alignmentLabel', {
      defaultMessage: 'Alignment'
    }),
    options: vis.type.editorConfig.collections.alignments,
    paramName: "alignment",
    value: stateParams.gauge.alignment,
    setValue: setGaugeValue
  }));
}


/***/ }),

/***/ "./public/components/options/heatmap/index.tsx":
/*!*****************************************************!*\
  !*** ./public/components/options/heatmap/index.tsx ***!
  \*****************************************************/
/*! exports provided: HeatmapOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapOptions", function() { return HeatmapOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _labels_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labels_panel */ "./public/components/options/heatmap/labels_panel.tsx");
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







function HeatmapOptions(props) {
  const {
    stateParams,
    vis,
    uiState,
    setValue,
    setValidity,
    setTouched
  } = props;
  const [valueAxis] = stateParams.valueAxes;
  const isColorsNumberInvalid = stateParams.colorsNumber < 2 || stateParams.colorsNumber > 10;
  const [isColorRangesValid, setIsColorRangesValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const setValueAxisScale = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('valueAxes', [{
    ...valueAxis,
    scale: {
      ...valueAxis.scale,
      [paramName]: value
    }
  }]), [valueAxis, setValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValidity(stateParams.setColorRange ? isColorRangesValid : !isColorsNumberInvalid);
  }, [stateParams.setColorRange, isColorRangesValid, isColorsNumberInvalid, setValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.heatmap.basicSettingsTitle",
    defaultMessage: "Basic settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["BasicOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.heatmap.highlightLabel', {
      defaultMessage: 'Highlight range'
    }),
    paramName: "enableHover",
    value: stateParams.enableHover,
    setValue: setValue,
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.heatmap.highlightLabelTooltip', {
      defaultMessage: 'Highlight hovered range in the chart and corresponding label in the legend.'
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.heatmap.heatmapSettingsTitle",
    defaultMessage: "Heatmap settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorSchemaOptions"], {
    colorSchema: stateParams.colorSchema,
    colorSchemas: vis.type.editorConfig.collections.colorSchemas,
    invertColors: stateParams.invertColors,
    uiState: uiState,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.colorScaleLabel', {
      defaultMessage: 'Color scale'
    }),
    options: vis.type.editorConfig.collections.scales,
    paramName: "type",
    value: valueAxis.scale.type,
    setValue: setValueAxisScale
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.scaleToDataBoundsLabel', {
      defaultMessage: 'Scale to data bounds'
    }),
    paramName: "defaultYExtents",
    value: valueAxis.scale.defaultYExtents,
    setValue: setValueAxisScale
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: stateParams.setColorRange,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.percentageModeLabel', {
      defaultMessage: 'Percentage mode'
    }),
    paramName: "percentageMode",
    value: stateParams.setColorRange ? false : stateParams.percentageMode,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    "data-test-subj": "heatmapColorsNumber",
    disabled: stateParams.setColorRange,
    isInvalid: isColorsNumberInvalid,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.colorsNumberLabel', {
      defaultMessage: 'Number of colors'
    }),
    max: 10,
    min: 2,
    paramName: "colorsNumber",
    value: stateParams.colorsNumber,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    "data-test-subj": "heatmapUseCustomRanges",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.useCustomRangesLabel', {
      defaultMessage: 'Use custom ranges'
    }),
    paramName: "setColorRange",
    value: stateParams.setColorRange,
    setValue: setValue
  }), stateParams.setColorRange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorRanges"], {
    "data-test-subj": "heatmapColorRange",
    colorsRange: stateParams.colorsRange,
    setValue: setValue,
    setTouched: setTouched,
    setValidity: setIsColorRangesValid
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_labels_panel__WEBPACK_IMPORTED_MODULE_5__["LabelsPanel"], {
    valueAxis: valueAxis,
    setValue: setValue
  }));
}


/***/ }),

/***/ "./public/components/options/heatmap/labels_panel.tsx":
/*!************************************************************!*\
  !*** ./public/components/options/heatmap/labels_panel.tsx ***!
  \************************************************************/
/*! exports provided: LabelsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsPanel", function() { return LabelsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






const VERTICAL_ROTATION = 270;
function LabelsPanel({
  valueAxis,
  setValue
}) {
  const rotateLabels = valueAxis.labels.rotate === VERTICAL_ROTATION;
  const setValueAxisLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('valueAxes', [{
    ...valueAxis,
    labels: {
      ...valueAxis.labels,
      [paramName]: value
    }
  }]), [valueAxis, setValue]);
  const setRotateLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValueAxisLabels(paramName, value ? VERTICAL_ROTATION : 0), [setValueAxisLabels]);
  const setColor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setValueAxisLabels('color', value), [setValueAxisLabels]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.heatmapOptions.labelsTitle",
    defaultMessage: "Labels"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.showLabelsTitle', {
      defaultMessage: 'Show labels'
    }),
    paramName: "show",
    value: valueAxis.labels.show,
    setValue: setValueAxisLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: !valueAxis.labels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.rotateLabel', {
      defaultMessage: 'Rotate'
    }),
    paramName: "rotate",
    value: rotateLabels,
    setValue: setRotateLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: !valueAxis.labels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.overwriteAutomaticColorLabel', {
      defaultMessage: 'Overwrite automatic color'
    }),
    paramName: "overwriteColor",
    value: valueAxis.labels.overwriteColor,
    setValue: setValueAxisLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    display: "rowCompressed",
    fullWidth: true,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.heatmapOptions.colorLabel', {
      defaultMessage: 'Color'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiColorPicker"], {
    compressed: true,
    fullWidth: true,
    disabled: !valueAxis.labels.show || !valueAxis.labels.overwriteColor,
    color: valueAxis.labels.color,
    onChange: setColor
  })));
}


/***/ }),

/***/ "./public/components/options/index.ts":
/*!********************************************!*\
  !*** ./public/components/options/index.ts ***!
  \********************************************/
/*! exports provided: GaugeOptions, PieOptions, PointSeriesOptions, HeatmapOptions, MetricsAxisOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauge */ "./public/components/options/gauge/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GaugeOptions", function() { return _gauge__WEBPACK_IMPORTED_MODULE_0__["GaugeOptions"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "./public/components/options/pie.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieOptions", function() { return _pie__WEBPACK_IMPORTED_MODULE_1__["PieOptions"]; });

/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point_series */ "./public/components/options/point_series/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesOptions", function() { return _point_series__WEBPACK_IMPORTED_MODULE_2__["PointSeriesOptions"]; });

/* harmony import */ var _heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heatmap */ "./public/components/options/heatmap/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeatmapOptions", function() { return _heatmap__WEBPACK_IMPORTED_MODULE_3__["HeatmapOptions"]; });

/* harmony import */ var _metrics_axes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metrics_axes */ "./public/components/options/metrics_axes/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricsAxisOptions", function() { return _metrics_axes__WEBPACK_IMPORTED_MODULE_4__["MetricsAxisOptions"]; });

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

/***/ "./public/components/options/metrics_axes/category_axis_panel.tsx":
/*!************************************************************************!*\
  !*** ./public/components/options/metrics_axes/category_axis_panel.tsx ***!
  \************************************************************************/
/*! exports provided: CategoryAxisPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAxisPanel", function() { return CategoryAxisPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _label_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label_options */ "./public/components/options/metrics_axes/label_options.tsx");
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







function CategoryAxisPanel({
  axis,
  onPositionChanged,
  vis,
  setCategoryAxis
}) {
  const setAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const updatedAxis = {
      ...axis,
      [paramName]: value
    };
    setCategoryAxis(updatedAxis);
  }, [setCategoryAxis, axis]);
  const setPosition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setAxis(paramName, value);
    onPositionChanged(value);
  }, [setAxis, onPositionChanged]);
  const setAxisLabel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const labels = {
      ...axis.labels,
      [paramName]: value
    };
    setAxis('labels', labels);
  }, [axis.labels, setAxis]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.pointSeries.categoryAxis.xAxisTitle",
    defaultMessage: "X-axis"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.categoryAxis.positionLabel', {
      defaultMessage: 'Position'
    }),
    options: vis.type.editorConfig.collections.positions,
    paramName: "position",
    value: axis.position,
    setValue: setPosition,
    "data-test-subj": "categoryAxisPosition"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.categoryAxis.showLabel', {
      defaultMessage: 'Show axis lines and labels'
    }),
    paramName: "show",
    value: axis.show,
    setValue: setAxis
  }), axis.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_options__WEBPACK_IMPORTED_MODULE_5__["LabelOptions"], {
    axisLabels: axis.labels,
    axisFilterCheckboxName: `xAxisFilterLabelsCheckbox${axis.id}`,
    setAxisLabel: setAxisLabel
  }));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/chart_options.tsx":
/*!******************************************************************!*\
  !*** ./public/components/options/metrics_axes/chart_options.tsx ***!
  \******************************************************************/
/*! exports provided: ChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartOptions", function() { return ChartOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _line_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line_options */ "./public/components/options/metrics_axes/line_options.tsx");
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







function ChartOptions({
  chart,
  index,
  valueAxes,
  vis,
  changeValueAxis,
  setParamByIndex
}) {
  const setChart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setParamByIndex('seriesParams', index, paramName, value);
  }, [setParamByIndex, index]);
  const setValueAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    changeValueAxis(index, paramName, value);
  }, [changeValueAxis, index]);
  const valueAxesOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...valueAxes.map(({
    id,
    name
  }) => ({
    text: name,
    value: id
  })), {
    text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.newAxisLabel', {
      defaultMessage: 'New axis…'
    }),
    value: 'new'
  }], [valueAxes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: `seriesValueAxis${index}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.valueAxisLabel', {
      defaultMessage: 'Value axis'
    }),
    options: valueAxesOptions,
    paramName: "valueAxis",
    value: chart.valueAxis,
    setValue: setValueAxis
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: `seriesType${index}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.chartTypeLabel', {
      defaultMessage: 'Chart type'
    }),
    options: vis.type.editorConfig.collections.chartTypes,
    paramName: "type",
    value: chart.type,
    setValue: setChart
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: `seriesMode${index}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.modeLabel', {
      defaultMessage: 'Mode'
    }),
    options: vis.type.editorConfig.collections.chartModes,
    paramName: "mode",
    value: chart.mode,
    setValue: setChart
  }))), chart.type === _utils_collections__WEBPACK_IMPORTED_MODULE_3__["ChartTypes"].AREA && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.lineModeLabel', {
      defaultMessage: 'Line mode'
    }),
    options: vis.type.editorConfig.collections.interpolationModes,
    paramName: "interpolate",
    value: chart.interpolate,
    setValue: setChart
  })), chart.type === _utils_collections__WEBPACK_IMPORTED_MODULE_3__["ChartTypes"].LINE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_line_options__WEBPACK_IMPORTED_MODULE_5__["LineOptions"], {
    chart: chart,
    vis: vis,
    setChart: setChart
  }));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/custom_extents_options.tsx":
/*!***************************************************************************!*\
  !*** ./public/components/options/metrics_axes/custom_extents_options.tsx ***!
  \***************************************************************************/
/*! exports provided: CustomExtentsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomExtentsOptions", function() { return CustomExtentsOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _y_extents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./y_extents */ "./public/components/options/metrics_axes/y_extents.tsx");
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





function CustomExtentsOptions({
  axisScale,
  setMultipleValidity,
  setValueAxis,
  setValueAxisScale
}) {
  const invalidBoundsMarginMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.scaleToDataBounds.minNeededBoundsMargin', {
    defaultMessage: 'Bounds margin must be greater than or equal to 0.'
  });
  const isBoundsMarginValid = !axisScale.defaultYExtents || !axisScale.boundsMargin || axisScale.boundsMargin >= 0;
  const setBoundsMargin = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValueAxisScale(paramName, value === '' ? undefined : value), [setValueAxisScale]);
  const onDefaultYExtentsChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const scale = {
      ...axisScale,
      [paramName]: value
    };
    if (!scale.defaultYExtents) {
      delete scale.boundsMargin;
    }
    setValueAxis('scale', scale);
  }, [axisScale, setValueAxis]);
  const onSetYExtentsChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const scale = {
      ...axisScale,
      [paramName]: value
    };
    if (!scale.setYExtents) {
      delete scale.min;
      delete scale.max;
    }
    setValueAxis('scale', scale);
  }, [axisScale, setValueAxis]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setMultipleValidity('boundsMargin', isBoundsMarginValid);
    return () => setMultipleValidity('boundsMargin', true);
  }, [isBoundsMarginValid, setMultipleValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_2__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.scaleToDataBoundsLabel', {
      defaultMessage: 'Scale to data bounds'
    }),
    paramName: "defaultYExtents",
    value: axisScale.defaultYExtents,
    setValue: onDefaultYExtentsChange
  }), axisScale.defaultYExtents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_2__["NumberInputOption"], {
    error: !isBoundsMarginValid && invalidBoundsMarginMessage,
    isInvalid: !isBoundsMarginValid,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.scaleToDataBounds.boundsMargin', {
      defaultMessage: 'Bounds margin'
    }),
    step: 0.1,
    min: 0,
    paramName: "boundsMargin",
    value: axisScale.boundsMargin,
    setValue: setBoundsMargin
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_2__["SwitchOption"], {
    "data-test-subj": "yAxisSetYExtents",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.setAxisExtentsLabel', {
      defaultMessage: 'Set axis extents'
    }),
    paramName: "setYExtents",
    value: axisScale.setYExtents,
    setValue: onSetYExtentsChange
  }), axisScale.setYExtents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_y_extents__WEBPACK_IMPORTED_MODULE_3__["YExtents"], {
    scale: axisScale,
    setScale: setValueAxisScale,
    setMultipleValidity: setMultipleValidity
  }));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/index.tsx":
/*!**********************************************************!*\
  !*** ./public/components/options/metrics_axes/index.tsx ***!
  \**********************************************************/
/*! exports provided: MetricsAxisOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsAxisOptions", function() { return MetricsAxisOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _series_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series_panel */ "./public/components/options/metrics_axes/series_panel.tsx");
/* harmony import */ var _category_axis_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category_axis_panel */ "./public/components/options/metrics_axes/category_axis_panel.tsx");
/* harmony import */ var _value_axes_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value_axes_panel */ "./public/components/options/metrics_axes/value_axes_panel.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./public/components/options/metrics_axes/utils.ts");
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








const VALUE_AXIS_PREFIX = 'ValueAxis-';
function MetricsAxisOptions(props) {
  const {
    stateParams,
    setValue,
    aggs,
    vis,
    isTabSelected
  } = props;
  const [isCategoryAxisHorizontal, setIsCategoryAxisHorizontal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const setParamByIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((axesName, index, paramName, value) => {
    const items = stateParams[axesName];
    const array = [...items];
    array[index] = {
      ...array[index],
      [paramName]: value
    };
    setValue(axesName, array);
  }, [stateParams, setValue]);
  const setCategoryAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    const categoryAxes = [...stateParams.categoryAxes];
    categoryAxes[0] = value;
    setValue('categoryAxes', categoryAxes);
  }, [setValue, stateParams.categoryAxes]);

  // stores previous aggs' custom labels
  const [lastCustomLabels, setLastCustomLabels] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  // stores previous aggs' field and type
  const [lastSeriesAgg, setLastSeriesAgg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const updateAxisTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(seriesParams => {
    const series = seriesParams || stateParams.seriesParams;
    let isAxesChanged = false;
    let lastValuesChanged = false;
    const lastLabels = {
      ...lastCustomLabels
    };
    const lastMatchingSeriesAgg = {
      ...lastSeriesAgg
    };
    const axes = stateParams.valueAxes.map((axis, axisNumber) => {
      let newCustomLabel = '';
      let updatedAxis;
      const matchingSeries = [];
      series.forEach((serie, seriesIndex) => {
        if (axisNumber === 0 && !serie.valueAxis || serie.valueAxis === axis.id) {
          const aggByIndex = aggs.bySchemaName('metric')[seriesIndex];
          matchingSeries.push(aggByIndex);
        }
      });
      if (matchingSeries.length === 1) {
        // if several series matches to the axis, axis title is set according to the first serie.
        newCustomLabel = matchingSeries[0].makeLabel();
      }
      if (lastCustomLabels[axis.id] !== newCustomLabel && newCustomLabel !== '') {
        const lastSeriesAggType = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(lastSeriesAgg, `${matchingSeries[0].id}.type`);
        const lastSeriesAggField = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(lastSeriesAgg, `${matchingSeries[0].id}.field`);
        const matchingSeriesAggType = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(matchingSeries, '[0]type.name', '');
        const matchingSeriesAggField = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(matchingSeries, '[0]params.field.name', '');
        const aggTypeIsChanged = lastSeriesAggType !== matchingSeriesAggType;
        const aggFieldIsChanged = lastSeriesAggField !== matchingSeriesAggField;
        lastMatchingSeriesAgg[matchingSeries[0].id] = {
          type: matchingSeriesAggType,
          field: matchingSeriesAggField
        };
        lastLabels[axis.id] = newCustomLabel;
        lastValuesChanged = true;
        if (Object.keys(lastCustomLabels).length !== 0 && (aggTypeIsChanged || aggFieldIsChanged || axis.title.text === '' || lastCustomLabels[axis.id] === axis.title.text) && newCustomLabel !== axis.title.text) {
          // Override axis title with new custom label
          updatedAxis = {
            ...axis,
            title: {
              ...axis.title,
              text: newCustomLabel
            }
          };
          isAxesChanged = true;
        }
      }
      return updatedAxis || axis;
    });
    if (isAxesChanged) {
      setValue('valueAxes', axes);
    }
    if (lastValuesChanged) {
      setLastSeriesAgg(lastMatchingSeriesAgg);
      setLastCustomLabels(lastLabels);
    }
  }, [aggs, lastCustomLabels, lastSeriesAgg, setValue, stateParams.seriesParams, stateParams.valueAxes]);
  const onValueAxisPositionChanged = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((index, value) => {
    const valueAxes = [...stateParams.valueAxes];
    const name = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getUpdatedAxisName"])(value, valueAxes);
    valueAxes[index] = {
      ...valueAxes[index],
      name,
      position: value
    };
    setValue('valueAxes', valueAxes);
  }, [stateParams.valueAxes, setValue]);
  const onCategoryAxisPositionChanged = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(chartPosition => {
    const isChartHorizontal = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isAxisHorizontal"])(chartPosition);
    setIsCategoryAxisHorizontal(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isAxisHorizontal"])(chartPosition));
    stateParams.valueAxes.forEach((axis, index) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isAxisHorizontal"])(axis.position) === isChartHorizontal) {
        const position = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["mapPosition"])(axis.position);
        onValueAxisPositionChanged(index, position);
      }
    });
  }, [stateParams.valueAxes, onValueAxisPositionChanged]);
  const addValueAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const nextAxisIdNumber = stateParams.valueAxes.reduce(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["countNextAxisNumber"])(VALUE_AXIS_PREFIX), 1);
    const newAxis = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(stateParams.valueAxes[0]);
    newAxis.id = VALUE_AXIS_PREFIX + nextAxisIdNumber;
    newAxis.position = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["mapPositionOpposite"])(newAxis.position);
    newAxis.name = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getUpdatedAxisName"])(newAxis.position, stateParams.valueAxes);
    setValue('valueAxes', [...stateParams.valueAxes, newAxis]);
    return newAxis;
  }, [stateParams.valueAxes, setValue]);
  const removeValueAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(axis => {
    const newValueAxes = stateParams.valueAxes.filter(valAxis => valAxis.id !== axis.id);
    setValue('valueAxes', newValueAxes);
    let isSeriesUpdated = false;
    const series = stateParams.seriesParams.map(ser => {
      if (axis.id === ser.valueAxis) {
        isSeriesUpdated = true;
        return {
          ...ser,
          valueAxis: newValueAxes[0].id
        };
      }
      return ser;
    });
    if (isSeriesUpdated) {
      // if seriesParams have valueAxis equals to removed one, then we reset it to the first valueAxis
      setValue('seriesParams', series);
    }
    if (stateParams.grid.valueAxis === axis.id) {
      // reset Y-axis grid lines setting
      setValue('grid', {
        ...stateParams.grid,
        valueAxis: undefined
      });
    }
  }, [stateParams.seriesParams, stateParams.valueAxes, setValue, stateParams.grid]);
  const changeValueAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((index, paramName, selectedValueAxis) => {
    let newValueAxis = selectedValueAxis;
    if (selectedValueAxis === 'new') {
      const axis = addValueAxis();
      newValueAxis = axis.id;
    }
    setParamByIndex('seriesParams', index, paramName, newValueAxis);
    updateAxisTitle();
  }, [addValueAxis, setParamByIndex, updateAxisTitle]);
  const schemaName = vis.type.schemas.metrics[0].name;
  const metrics = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return aggs.bySchemaName(schemaName);
  }, [schemaName, aggs]);
  const firstValueAxesId = stateParams.valueAxes[0].id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const updatedSeries = metrics.map(agg => {
      const params = stateParams.seriesParams.find(param => param.data.id === agg.id);
      const label = agg.makeLabel();

      // update labels for existing params or create new one
      if (params) {
        return {
          ...params,
          data: {
            ...params.data,
            label
          }
        };
      } else {
        const series = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["makeSerie"])(agg.id, label, firstValueAxesId, stateParams.seriesParams[stateParams.seriesParams.length - 1]);
        return series;
      }
    });
    setValue('seriesParams', updatedSeries);
    updateAxisTitle(updatedSeries);
  }, [metrics, firstValueAxesId, setValue, stateParams.seriesParams, updateAxisTitle]);
  return isTabSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_series_panel__WEBPACK_IMPORTED_MODULE_3__["SeriesPanel"], {
    changeValueAxis: changeValueAxis,
    setParamByIndex: setParamByIndex,
    seriesParams: stateParams.seriesParams,
    valueAxes: stateParams.valueAxes,
    vis: vis
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_value_axes_panel__WEBPACK_IMPORTED_MODULE_5__["ValueAxesPanel"], {
    addValueAxis: addValueAxis,
    isCategoryAxisHorizontal: isCategoryAxisHorizontal,
    removeValueAxis: removeValueAxis,
    onValueAxisPositionChanged: onValueAxisPositionChanged,
    setParamByIndex: setParamByIndex,
    setMultipleValidity: props.setMultipleValidity,
    seriesParams: stateParams.seriesParams,
    valueAxes: stateParams.valueAxes,
    vis: vis
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_category_axis_panel__WEBPACK_IMPORTED_MODULE_4__["CategoryAxisPanel"], {
    axis: stateParams.categoryAxes[0],
    onPositionChanged: onCategoryAxisPositionChanged,
    setCategoryAxis: setCategoryAxis,
    vis: vis
  })) : null;
}


/***/ }),

/***/ "./public/components/options/metrics_axes/label_options.tsx":
/*!******************************************************************!*\
  !*** ./public/components/options/metrics_axes/label_options.tsx ***!
  \******************************************************************/
/*! exports provided: LabelOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelOptions", function() { return LabelOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./public/components/common/index.ts");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_6__);
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








function LabelOptions({
  axisLabels,
  axisFilterCheckboxName,
  setAxisLabel
}) {
  const setAxisLabelRotate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setAxisLabel(paramName, Number(value));
  }, [setAxisLabel]);
  const rotateOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(_utils_collections__WEBPACK_IMPORTED_MODULE_5__["getRotateOptions"], []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xxs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.pointSeries.categoryAxis.labelsTitle",
    defaultMessage: "Labels"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.categoryAxis.showLabelsLabel', {
      defaultMessage: 'Show labels'
    }),
    paramName: "show",
    value: axisLabels.show,
    setValue: setAxisLabel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SwitchOption"], {
    "data-test-subj": axisFilterCheckboxName,
    disabled: !axisLabels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.categoryAxis.filterLabelsLabel', {
      defaultMessage: 'Filter labels'
    }),
    paramName: "filter",
    value: axisLabels.filter,
    setValue: setAxisLabel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SelectOption"], {
    disabled: !axisLabels.show,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.categoryAxis.alignLabel', {
      defaultMessage: 'Align'
    }),
    options: rotateOptions,
    paramName: "rotate",
    value: axisLabels.rotate,
    setValue: setAxisLabelRotate
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["TruncateLabelsOption"], {
    disabled: !axisLabels.show,
    value: axisLabels.truncate,
    setValue: setAxisLabel
  }))));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/line_options.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/options/metrics_axes/line_options.tsx ***!
  \*****************************************************************/
/*! exports provided: LineOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineOptions", function() { return LineOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
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





function LineOptions({
  chart,
  vis,
  setChart
}) {
  const setLineWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setChart(paramName, value === '' ? undefined : value);
  }, [setChart]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.showLineLabel', {
      defaultMessage: 'Show line'
    }),
    paramName: "drawLinesBetweenPoints",
    value: chart.drawLinesBetweenPoints,
    setValue: setChart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SelectOption"], {
    disabled: !chart.drawLinesBetweenPoints,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.lineModeLabel', {
      defaultMessage: 'Line mode'
    }),
    options: vis.type.editorConfig.collections.interpolationModes,
    paramName: "interpolate",
    value: chart.interpolate,
    setValue: setChart
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["NumberInputOption"], {
    disabled: !chart.drawLinesBetweenPoints,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.lineWidthLabel', {
      defaultMessage: 'Line width'
    }),
    paramName: "lineWidth",
    step: 0.5,
    min: 0,
    value: chart.lineWidth,
    setValue: setLineWidth
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.series.showDotsLabel', {
      defaultMessage: 'Show dots'
    }),
    paramName: "showCircles",
    value: chart.showCircles,
    setValue: setChart
  }));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/series_panel.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/options/metrics_axes/series_panel.tsx ***!
  \*****************************************************************/
/*! exports provided: SeriesPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPanel", function() { return SeriesPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chart_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart_options */ "./public/components/options/metrics_axes/chart_options.tsx");
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






function SeriesPanel({
  seriesParams,
  ...chartProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.pointSeries.series.metricsTitle",
    defaultMessage: "Metrics"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), seriesParams.map((chart, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiAccordion"], {
    id: `visEditorSeriesAccordion${chart.data.id}`,
    key: index,
    className: "visEditorSidebar__section visEditorSidebar__collapsible",
    initialIsOpen: index === 0,
    buttonContent: chart.data.label,
    buttonContentClassName: "visEditorSidebar__aggGroupAccordionButtonContent eui-textTruncate",
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.seriesAccordionAriaLabel', {
      defaultMessage: 'Toggle {agg} options',
      values: {
        agg: chart.data.label
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chart_options__WEBPACK_IMPORTED_MODULE_4__["ChartOptions"], _extends({
    index: index,
    chart: chart
  }, chartProps))))));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/utils.ts":
/*!*********************************************************!*\
  !*** ./public/components/options/metrics_axes/utils.ts ***!
  \*********************************************************/
/*! exports provided: makeSerie, isAxisHorizontal, countNextAxisNumber, getUpdatedAxisName, mapPositionOpposite, mapPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSerie", function() { return makeSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAxisHorizontal", function() { return isAxisHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countNextAxisNumber", function() { return countNextAxisNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdatedAxisName", function() { return getUpdatedAxisName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPositionOpposite", function() { return mapPositionOpposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPosition", function() { return mapPosition; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
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



const makeSerie = (id, label, defaultValueAxis, lastSerie) => {
  const data = {
    id,
    label
  };
  const defaultSerie = {
    show: true,
    mode: _utils_collections__WEBPACK_IMPORTED_MODULE_1__["ChartModes"].NORMAL,
    type: _utils_collections__WEBPACK_IMPORTED_MODULE_1__["ChartTypes"].LINE,
    drawLinesBetweenPoints: true,
    showCircles: true,
    interpolate: _utils_collections__WEBPACK_IMPORTED_MODULE_1__["InterpolationModes"].LINEAR,
    lineWidth: 2,
    valueAxis: defaultValueAxis,
    data
  };
  return lastSerie ? {
    ...lastSerie,
    data
  } : defaultSerie;
};
const isAxisHorizontal = position => [_utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].TOP, _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].BOTTOM].includes(position);
const RADIX = 10;
function countNextAxisNumber(axisName, axisProp = 'id') {
  return (value, axis) => {
    const nameLength = axisName.length;
    if (axis[axisProp].substr(0, nameLength) === axisName) {
      const num = parseInt(axis[axisProp].substr(nameLength), RADIX);
      if (num >= value) {
        value = num + 1;
      }
    }
    return value;
  };
}
const AXIS_PREFIX = 'Axis-';
const getUpdatedAxisName = (axisPosition, valueAxes) => {
  const axisName = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(axisPosition) + AXIS_PREFIX;
  const nextAxisNameNumber = valueAxes.reduce(countNextAxisNumber(axisName, 'name'), 1);
  return `${axisName}${nextAxisNameNumber}`;
};
function mapPositionOpposite(position) {
  switch (position) {
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].BOTTOM:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].TOP;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].TOP:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].BOTTOM;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].LEFT:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].RIGHT;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].RIGHT:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].LEFT;
    default:
      throw new Error('Invalid legend position.');
  }
}
function mapPosition(position) {
  switch (position) {
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].BOTTOM:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].LEFT;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].TOP:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].RIGHT;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].LEFT:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].BOTTOM;
    case _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].RIGHT:
      return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["Positions"].TOP;
  }
}


/***/ }),

/***/ "./public/components/options/metrics_axes/value_axes_panel.tsx":
/*!*********************************************************************!*\
  !*** ./public/components/options/metrics_axes/value_axes_panel.tsx ***!
  \*********************************************************************/
/*! exports provided: ValueAxesPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxesPanel", function() { return ValueAxesPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _value_axis_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value_axis_options */ "./public/components/options/metrics_axes/value_axis_options.tsx");
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






function ValueAxesPanel(props) {
  const {
    addValueAxis,
    removeValueAxis,
    seriesParams,
    valueAxes
  } = props;
  const getSeries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(axis => {
    const isFirst = valueAxes[0].id === axis.id;
    const series = seriesParams.filter(serie => serie.valueAxis === axis.id || isFirst && !serie.valueAxis);
    return series.map(serie => serie.data.label).join(', ');
  }, [seriesParams, valueAxes]);
  const removeButtonTooltip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.removeButtonTooltip', {
    defaultMessage: 'Remove Y-axis'
  }), []);
  const renderRemoveButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(axis => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "bottom",
    content: removeButtonTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    color: "danger",
    iconType: "cross",
    onClick: () => removeValueAxis(axis),
    "aria-label": removeButtonTooltip,
    "data-test-subj": "removeValueAxisBtn"
  })), [removeValueAxis, removeButtonTooltip]);
  const addButtonTooltip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.addButtonTooltip', {
    defaultMessage: 'Add Y-axis'
  }), []);
  const getButtonContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(axis => {
    const description = getSeries(axis);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, axis.name, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
      content: description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, description)));
  }, [getSeries]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "none",
    justifyContent: "spaceBetween",
    alignItems: "baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.pointSeries.valueAxes.yAxisTitle",
    defaultMessage: "Y-axes"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "bottom",
    content: addButtonTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
    iconType: "plusInCircleFilled",
    onClick: addValueAxis,
    "aria-label": addButtonTooltip,
    "data-test-subj": "visualizeAddYAxisButton"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), valueAxes.map((axis, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiAccordion"], {
    id: `yAxisAccordion${axis.id}`,
    key: axis.id,
    "data-test-subj": `toggleYAxisOptions-${axis.id}`,
    className: "visEditorSidebar__section visEditorSidebar__collapsible",
    initialIsOpen: false,
    buttonContent: getButtonContent(axis),
    buttonClassName: "eui-textTruncate",
    buttonContentClassName: "visEditorSidebar__aggGroupAccordionButtonContent eui-textTruncate",
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.toggleOptionsAriaLabel', {
      defaultMessage: 'Toggle {axisName} options',
      values: {
        axisName: axis.name
      }
    }),
    extraAction: valueAxes.length === 1 ? undefined : renderRemoveButton(axis)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_value_axis_options__WEBPACK_IMPORTED_MODULE_4__["ValueAxisOptions"], {
    axis: axis,
    index: index,
    valueAxis: valueAxes[index],
    isCategoryAxisHorizontal: props.isCategoryAxisHorizontal,
    onValueAxisPositionChanged: props.onValueAxisPositionChanged,
    setParamByIndex: props.setParamByIndex,
    setMultipleValidity: props.setMultipleValidity,
    vis: props.vis
  })))));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/value_axis_options.tsx":
/*!***********************************************************************!*\
  !*** ./public/components/options/metrics_axes/value_axis_options.tsx ***!
  \***********************************************************************/
/*! exports provided: ValueAxisOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAxisOptions", function() { return ValueAxisOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _label_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label_options */ "./public/components/options/metrics_axes/label_options.tsx");
/* harmony import */ var _custom_extents_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom_extents_options */ "./public/components/options/metrics_axes/custom_extents_options.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/options/metrics_axes/utils.ts");
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









function ValueAxisOptions({
  axis,
  index,
  isCategoryAxisHorizontal,
  valueAxis,
  vis,
  onValueAxisPositionChanged,
  setParamByIndex,
  setMultipleValidity
}) {
  const setValueAxis = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setParamByIndex('valueAxes', index, paramName, value), [setParamByIndex, index]);
  const setValueAxisTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const title = {
      ...valueAxis.title,
      [paramName]: value
    };
    setParamByIndex('valueAxes', index, 'title', title);
  }, [valueAxis.title, setParamByIndex, index]);
  const setValueAxisScale = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const scale = {
      ...valueAxis.scale,
      [paramName]: value
    };
    setParamByIndex('valueAxes', index, 'scale', scale);
  }, [valueAxis.scale, setParamByIndex, index]);
  const setAxisLabel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    const labels = {
      ...valueAxis.labels,
      [paramName]: value
    };
    setParamByIndex('valueAxes', index, 'labels', labels);
  }, [valueAxis.labels, setParamByIndex, index]);
  const onPositionChanged = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    onValueAxisPositionChanged(index, value);
  }, [index, onValueAxisPositionChanged]);
  const isPositionDisabled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(position => {
    if (isCategoryAxisHorizontal) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isAxisHorizontal"])(position);
    }
    return [_utils_collections__WEBPACK_IMPORTED_MODULE_3__["Positions"].LEFT, _utils_collections__WEBPACK_IMPORTED_MODULE_3__["Positions"].RIGHT].includes(position);
  }, [isCategoryAxisHorizontal]);
  const positions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => vis.type.editorConfig.collections.positions.map(position => ({
    ...position,
    disabled: isPositionDisabled(position.value)
  })), [vis.type.editorConfig.collections.positions, isPositionDisabled]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.positionLabel', {
      defaultMessage: 'Position'
    }),
    options: positions,
    paramName: "position",
    value: axis.position,
    setValue: onPositionChanged
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: `valueAxisMode${index}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.modeLabel', {
      defaultMessage: 'Mode'
    }),
    options: vis.type.editorConfig.collections.axisModes,
    paramName: "mode",
    value: axis.scale.mode,
    setValue: setValueAxisScale
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: `scaleSelectYAxis-${axis.id}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.scaleTypeLabel', {
      defaultMessage: 'Scale type'
    }),
    options: vis.type.editorConfig.collections.scaleTypes,
    paramName: "type",
    value: axis.scale.type,
    setValue: setValueAxisScale
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHorizontalRule"], {
    margin: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.showLabel', {
      defaultMessage: 'Show axis lines and labels'
    }),
    "data-test-subj": `valueAxisShow-${axis.id}`,
    paramName: "show",
    value: axis.show,
    setValue: setValueAxis
  }), axis.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["TextInputOption"], {
    "data-test-subj": `valueAxisTitle${index}`,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.titleLabel', {
      defaultMessage: 'Title'
    }),
    paramName: "text",
    value: axis.title.text,
    setValue: setValueAxisTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_options__WEBPACK_IMPORTED_MODULE_5__["LabelOptions"], {
    axisLabels: axis.labels,
    axisFilterCheckboxName: `yAxisFilterLabelsCheckbox-${axis.id}`,
    setAxisLabel: setAxisLabel
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "xs"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHorizontalRule"], {
    margin: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiAccordion"], {
    id: `yAxisOptionsAccordion${axis.id}`,
    className: "visEditorSidebar__section visEditorSidebar__collapsible",
    initialIsOpen: false,
    buttonContentClassName: "euiText euiText--small",
    buttonContent: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.customExtentsLabel', {
      defaultMessage: 'Custom extents'
    }),
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.toggleCustomExtendsAriaLabel', {
      defaultMessage: 'Toggle custom extents'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_custom_extents_options__WEBPACK_IMPORTED_MODULE_6__["CustomExtentsOptions"], {
    axisScale: axis.scale,
    setMultipleValidity: setMultipleValidity,
    setValueAxisScale: setValueAxisScale,
    setValueAxis: setValueAxis
  }))));
}


/***/ }),

/***/ "./public/components/options/metrics_axes/y_extents.tsx":
/*!**************************************************************!*\
  !*** ./public/components/options/metrics_axes/y_extents.tsx ***!
  \**************************************************************/
/*! exports provided: YExtents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YExtents", function() { return YExtents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






const rangeError = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.minErrorMessage', {
  defaultMessage: 'Min should be less than Max.'
});
const minError = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.minNeededScaleText', {
  defaultMessage: 'Min must exceed 0 when a log scale is selected.'
});
function areExtentsValid(min = null, max = null) {
  if (min === null || max === null) {
    return true;
  }
  return max > min;
}
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
function YExtents({
  scale,
  setScale,
  setMultipleValidity
}) {
  const {
    min,
    max,
    type
  } = scale;
  const errors = [];
  if (!areExtentsValid(min, max)) {
    errors.push(rangeError);
  }
  if (type === _utils_collections__WEBPACK_IMPORTED_MODULE_3__["ScaleTypes"].LOG && (isNullOrUndefined(min) || min <= 0)) {
    errors.push(minError);
  }
  const isValid = !errors.length;
  const setExtents = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => {
    setScale(paramName, value === '' ? null : value);
  }, [setScale]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setMultipleValidity('yExtents', isValid);
    return () => setMultipleValidity('yExtents', true);
  }, [isValid, setMultipleValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    error: errors,
    isInvalid: !!errors.length,
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    "data-test-subj": "yAxisYExtentsMin",
    isInvalid: !!errors.length,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.minLabel', {
      defaultMessage: 'Min'
    }),
    step: 0.1,
    paramName: "min",
    value: isNullOrUndefined(min) ? '' : min,
    setValue: setExtents
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["NumberInputOption"], {
    "data-test-subj": "yAxisYExtentsMax",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.valueAxes.maxLabel', {
      defaultMessage: 'Max'
    }),
    step: 0.1,
    paramName: "max",
    value: isNullOrUndefined(max) ? '' : max,
    setValue: setExtents
  })))));
}


/***/ }),

/***/ "./public/components/options/pie.tsx":
/*!*******************************************!*\
  !*** ./public/components/options/pie.tsx ***!
  \*******************************************/
/*! exports provided: PieOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieOptions", function() { return PieOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./public/components/common/index.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
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







function PieOptions(props) {
  const {
    stateParams,
    setValue
  } = props;
  const setLabels = (paramName, value) => setValue('labels', {
    ...stateParams.labels,
    [paramName]: value
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.pie.pieSettingsTitle",
    defaultMessage: "Pie settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pie.donutLabel', {
      defaultMessage: 'Donut'
    }),
    paramName: "isDonut",
    value: stateParams.isDonut,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["BasicOptions"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.pie.labelsSettingsTitle",
    defaultMessage: "Labels settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pie.showLabelsLabel', {
      defaultMessage: 'Show labels'
    }),
    paramName: "show",
    value: stateParams.labels.show,
    setValue: setLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pie.showTopLevelOnlyLabel', {
      defaultMessage: 'Show top level only'
    }),
    paramName: "last_level",
    value: stateParams.labels.last_level,
    setValue: setLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pie.showValuesLabel', {
      defaultMessage: 'Show values'
    }),
    paramName: "values",
    value: stateParams.labels.values,
    setValue: setLabels
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["TruncateLabelsOption"], {
    value: stateParams.labels.truncate,
    setValue: setLabels
  })));
}


/***/ }),

/***/ "./public/components/options/point_series/grid_panel.tsx":
/*!***************************************************************!*\
  !*** ./public/components/options/point_series/grid_panel.tsx ***!
  \***************************************************************/
/*! exports provided: GridPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPanel", function() { return GridPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






function GridPanel({
  stateParams,
  setValue,
  hasHistogramAgg
}) {
  const setGrid = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('grid', {
    ...stateParams.grid,
    [paramName]: value
  }), [stateParams.grid, setValue]);
  const options = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...stateParams.valueAxes.map(({
    id,
    name
  }) => ({
    text: name,
    value: id
  })), {
    text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.gridAxis.dontShowLabel', {
      defaultMessage: "Don't show"
    }),
    value: ''
  }], [stateParams.valueAxes]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (hasHistogramAgg) {
      setGrid('categoryLines', false);
    }
  }, [hasHistogramAgg, setGrid]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.controls.pointSeries.gridAxis.gridText",
    defaultMessage: "Grid"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    disabled: hasHistogramAgg,
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.gridAxis.xAxisLinesLabel', {
      defaultMessage: 'Show X-axis lines'
    }),
    paramName: "categoryLines",
    tooltip: hasHistogramAgg ? _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.gridAxis.yAxisLinesDisabledTooltip', {
      defaultMessage: "X-axis lines can't show for histograms."
    }) : undefined,
    value: stateParams.grid.categoryLines,
    setValue: setGrid,
    "data-test-subj": "showCategoryLines"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    id: "gridAxis",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.controls.pointSeries.gridAxis.yAxisLinesLabel', {
      defaultMessage: 'Y-axis lines'
    }),
    options: options,
    paramName: "valueAxis",
    value: stateParams.grid.valueAxis || '',
    setValue: setGrid
  }));
}


/***/ }),

/***/ "./public/components/options/point_series/index.ts":
/*!*********************************************************!*\
  !*** ./public/components/options/point_series/index.ts ***!
  \*********************************************************/
/*! exports provided: PointSeriesOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_series */ "./public/components/options/point_series/point_series.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesOptions", function() { return _point_series__WEBPACK_IMPORTED_MODULE_0__["PointSeriesOptions"]; });

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

/***/ "./public/components/options/point_series/point_series.tsx":
/*!*****************************************************************!*\
  !*** ./public/components/options/point_series/point_series.tsx ***!
  \*****************************************************************/
/*! exports provided: PointSeriesOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSeriesOptions", function() { return PointSeriesOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grid_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid_panel */ "./public/components/options/point_series/grid_panel.tsx");
/* harmony import */ var _threshold_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold_panel */ "./public/components/options/point_series/threshold_panel.tsx");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/collections */ "./public/utils/collections.ts");
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










function PointSeriesOptions(props) {
  const {
    stateParams,
    setValue,
    vis
  } = props;
  const currentChartTypes = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(lodash__WEBPACK_IMPORTED_MODULE_4__["uniq"])(stateParams.seriesParams.map(({
    type
  }) => type)), [stateParams.seriesParams]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.pointSeries.settingsTitle",
    defaultMessage: "Settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["BasicOptions"], props), vis.data.aggs.aggs.some(agg => agg.schema === 'segment' && agg.type.name === 'date_histogram') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.currentTimeMarkerLabel', {
      defaultMessage: 'Current time marker'
    }),
    paramName: "addTimeMarker",
    value: stateParams.addTimeMarker,
    setValue: setValue
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.orderBucketsBySumLabel', {
      defaultMessage: 'Order buckets by sum'
    }),
    paramName: "orderBucketsBySum",
    value: stateParams.orderBucketsBySum,
    setValue: setValue
  }), currentChartTypes.includes(_utils_collections__WEBPACK_IMPORTED_MODULE_8__["ChartTypes"].HISTOGRAM) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_5__["SwitchOption"], {
    "data-test-subj": "showValuesOnChart",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.showLabels', {
      defaultMessage: 'Show values on chart'
    }),
    paramName: "show",
    value: stateParams.labels.show,
    setValue: (paramName, value) => setValue('labels', {
      ...stateParams.labels,
      [paramName]: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grid_panel__WEBPACK_IMPORTED_MODULE_6__["GridPanel"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), stateParams.thresholdLine && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_threshold_panel__WEBPACK_IMPORTED_MODULE_7__["ThresholdPanel"], props));
}


/***/ }),

/***/ "./public/components/options/point_series/threshold_panel.tsx":
/*!********************************************************************!*\
  !*** ./public/components/options/point_series/threshold_panel.tsx ***!
  \********************************************************************/
/*! exports provided: ThresholdPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdPanel", function() { return ThresholdPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
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






function ThresholdPanel({
  stateParams,
  setValue,
  setMultipleValidity,
  vis
}) {
  const setThresholdLine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('thresholdLine', {
    ...stateParams.thresholdLine,
    [paramName]: value
  }), [stateParams.thresholdLine, setValue]);
  const setThresholdLineColor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setThresholdLine('color', value), [setThresholdLine]);
  const setThresholdLineValidity = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, isValid) => setMultipleValidity(`thresholdLine__${paramName}`, isValid), [setMultipleValidity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.editors.pointSeries.thresholdLineSettingsTitle",
    defaultMessage: "Threshold line"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.thresholdLine.showLabel', {
      defaultMessage: 'Show threshold line'
    }),
    paramName: "show",
    value: stateParams.thresholdLine.show,
    setValue: setThresholdLine
  }), stateParams.thresholdLine.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["RequiredNumberInputOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.thresholdLine.valueLabel', {
      defaultMessage: 'Threshold value'
    }),
    paramName: "value",
    value: stateParams.thresholdLine.value,
    setValue: setThresholdLine,
    setValidity: setThresholdLineValidity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["RequiredNumberInputOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.thresholdLine.widthLabel', {
      defaultMessage: 'Line width'
    }),
    paramName: "width",
    min: 1,
    step: 1,
    value: stateParams.thresholdLine.width,
    setValue: setThresholdLine,
    setValidity: setThresholdLineValidity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.thresholdLine.styleLabel', {
      defaultMessage: 'Line style'
    }),
    options: vis.type.editorConfig.collections.thresholdLineStyles,
    paramName: "style",
    value: stateParams.thresholdLine.style,
    setValue: setThresholdLine
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.editors.pointSeries.thresholdLine.colorLabel', {
      defaultMessage: 'Line color'
    }),
    fullWidth: true,
    display: 'rowCompressed'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiColorPicker"], {
    compressed: true,
    color: stateParams.thresholdLine.color,
    fullWidth: true,
    onChange: setThresholdLineColor
  }))));
}


/***/ }),

/***/ "./public/gauge.ts":
/*!*************************!*\
  !*** ./public/gauge.ts ***!
  \*************************/
/*! exports provided: createGaugeVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGaugeVisTypeDefinition", function() { return createGaugeVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/options */ "./public/components/options/index.ts");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
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








const createGaugeVisTypeDefinition = deps => ({
  name: 'gauge',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.gaugeTitle', {
    defaultMessage: 'Gauge'
  }),
  icon: 'visGauge',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.gaugeDescription', {
    defaultMessage: "Gauges indicate the status of a metric. Use it to show how a metric's value relates to reference threshold values."
  }),
  visConfig: {
    defaults: {
      type: 'gauge',
      addTooltip: true,
      addLegend: true,
      isDisplayWarning: false,
      gauge: {
        alignment: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Alignments"].AUTOMATIC,
        extendRange: true,
        percentageMode: false,
        gaugeType: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["GaugeTypes"].ARC,
        gaugeStyle: 'Full',
        backStyle: 'Full',
        orientation: 'vertical',
        colorSchema: _charts_public__WEBPACK_IMPORTED_MODULE_5__["ColorSchemas"].GreenToRed,
        gaugeColorMode: _charts_public__WEBPACK_IMPORTED_MODULE_5__["ColorModes"].LABELS,
        colorsRange: [{
          from: 0,
          to: 50
        }, {
          from: 50,
          to: 75
        }, {
          from: 75,
          to: 100
        }],
        invertColors: false,
        labels: {
          show: true,
          color: 'black'
        },
        scale: {
          show: true,
          labels: false,
          color: 'rgba(105,112,125,0.2)'
        },
        type: 'meter',
        style: {
          bgWidth: 0.9,
          width: 0.9,
          mask: false,
          bgMask: false,
          maskBars: 50,
          bgFill: 'rgba(105,112,125,0.2)',
          bgColor: true,
          subText: '',
          fontSize: 60
        }
      }
    }
  },
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_6__["createVislibVisController"])(deps),
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getGaugeCollections"])(),
    optionsTemplate: _components_options__WEBPACK_IMPORTED_MODULE_3__["GaugeOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.metricTitle', {
        defaultMessage: 'Metric'
      }),
      min: 1,
      aggFilter: ['!std_dev', '!geo_centroid', '!percentiles', '!percentile_ranks', '!derivative', '!serial_diff', '!moving_avg', '!cumulative_sum', '!geo_bounds'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.groupTitle', {
        defaultMessage: 'Split group'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  },
  useCustomNoDataScreen: true
});

/***/ }),

/***/ "./public/goal.ts":
/*!************************!*\
  !*** ./public/goal.ts ***!
  \************************/
/*! exports provided: createGoalVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGoalVisTypeDefinition", function() { return createGoalVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/options */ "./public/components/options/index.ts");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__);
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








const createGoalVisTypeDefinition = deps => ({
  name: 'goal',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.goal.goalTitle', {
    defaultMessage: 'Goal'
  }),
  icon: 'visGoal',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.goal.goalDescription', {
    defaultMessage: 'A goal chart indicates how close you are to your final goal.'
  }),
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_3__["createVislibVisController"])(deps),
  visConfig: {
    defaults: {
      addTooltip: true,
      addLegend: false,
      isDisplayWarning: false,
      type: 'gauge',
      gauge: {
        verticalSplit: false,
        autoExtend: false,
        percentageMode: true,
        gaugeType: _utils_collections__WEBPACK_IMPORTED_MODULE_2__["GaugeTypes"].ARC,
        gaugeStyle: 'Full',
        backStyle: 'Full',
        orientation: 'vertical',
        useRanges: false,
        colorSchema: _charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorSchemas"].GreenToRed,
        gaugeColorMode: _charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorModes"].NONE,
        colorsRange: [{
          from: 0,
          to: 10000
        }],
        invertColors: false,
        labels: {
          show: true,
          color: 'black'
        },
        scale: {
          show: false,
          labels: false,
          color: 'rgba(105,112,125,0.2)',
          width: 2
        },
        type: 'meter',
        style: {
          bgFill: 'rgba(105,112,125,0.2)',
          bgColor: false,
          labelColor: false,
          subText: '',
          fontSize: 60
        }
      }
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_2__["getGaugeCollections"])(),
    optionsTemplate: _components_options__WEBPACK_IMPORTED_MODULE_1__["GaugeOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_6__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_5__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.goal.metricTitle', {
        defaultMessage: 'Metric'
      }),
      min: 1,
      aggFilter: ['!std_dev', '!geo_centroid', '!percentiles', '!percentile_ranks', '!derivative', '!serial_diff', '!moving_avg', '!cumulative_sum', '!geo_bounds'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_5__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.goal.groupTitle', {
        defaultMessage: 'Split group'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  },
  useCustomNoDataScreen: true
});

/***/ }),

/***/ "./public/heatmap.ts":
/*!***************************!*\
  !*** ./public/heatmap.ts ***!
  \***************************/
/*! exports provided: createHeatmapVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeatmapVisTypeDefinition", function() { return createHeatmapVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _components_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/options */ "./public/components/options/index.ts");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_7__);
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









const createHeatmapVisTypeDefinition = deps => ({
  name: 'heatmap',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.heatmapTitle', {
    defaultMessage: 'Heat Map'
  }),
  icon: 'heatmap',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.heatmapDescription', {
    defaultMessage: 'Shade cells within a matrix'
  }),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_7__["VIS_EVENT_TO_TRIGGER"].filter];
  },
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_5__["createVislibVisController"])(deps),
  visConfig: {
    defaults: {
      type: 'heatmap',
      addTooltip: true,
      addLegend: true,
      enableHover: false,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_3__["Positions"].RIGHT,
      times: [],
      colorsNumber: 4,
      colorSchema: _charts_public__WEBPACK_IMPORTED_MODULE_6__["ColorSchemas"].Greens,
      setColorRange: false,
      colorsRange: [],
      invertColors: false,
      percentageMode: false,
      valueAxes: [{
        show: false,
        id: 'ValueAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_3__["AxisTypes"].VALUE,
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_3__["ScaleTypes"].LINEAR,
          defaultYExtents: false
        },
        labels: {
          show: false,
          rotate: 0,
          overwriteColor: false,
          color: 'black'
        }
      }]
    }
  },
  events: {
    brush: {
      disabled: false
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_3__["getHeatmapCollections"])(),
    optionsTemplate: _components_options__WEBPACK_IMPORTED_MODULE_4__["HeatmapOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.metricTitle', {
        defaultMessage: 'Value'
      }),
      min: 1,
      max: 1,
      aggFilter: ['count', 'avg', 'median', 'sum', 'min', 'max', 'cardinality', 'std_dev', 'top_hits'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.segmentTitle', {
        defaultMessage: 'X-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.groupTitle', {
        defaultMessage: 'Y-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.heatmap.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  }
});

/***/ }),

/***/ "./public/histogram.ts":
/*!*****************************!*\
  !*** ./public/histogram.ts ***!
  \*****************************/
/*! exports provided: createHistogramVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistogramVisTypeDefinition", function() { return createHistogramVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _utils_common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common_config */ "./public/utils/common_config.tsx");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_8__);
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








const createHistogramVisTypeDefinition = deps => ({
  name: 'histogram',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.histogramTitle', {
    defaultMessage: 'Vertical Bar'
  }),
  icon: 'visBarVertical',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.histogramDescription', {
    defaultMessage: 'Assign a continuous variable to each axis'
  }),
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_6__["createVislibVisController"])(deps),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].filter, _visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].brush];
  },
  visConfig: {
    defaults: {
      type: 'histogram',
      grid: {
        categoryLines: false
      },
      categoryAxes: [{
        id: 'CategoryAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].CATEGORY,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].BOTTOM,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR
        },
        labels: {
          show: true,
          filter: true,
          truncate: 100
        },
        title: {}
      }],
      valueAxes: [{
        id: 'ValueAxis-1',
        name: 'LeftAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].VALUE,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].LEFT,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR,
          mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisModes"].NORMAL
        },
        labels: {
          show: true,
          rotate: _charts_public__WEBPACK_IMPORTED_MODULE_7__["Rotates"].HORIZONTAL,
          filter: false,
          truncate: 100
        },
        title: {
          text: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"]
        }
      }],
      seriesParams: [{
        show: true,
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartTypes"].HISTOGRAM,
        mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartModes"].STACKED,
        data: {
          label: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"],
          id: '1'
        },
        valueAxis: 'ValueAxis-1',
        drawLinesBetweenPoints: true,
        lineWidth: 2,
        showCircles: true
      }],
      addTooltip: true,
      addLegend: true,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].RIGHT,
      times: [],
      addTimeMarker: false,
      labels: {
        show: false
      },
      thresholdLine: {
        show: false,
        value: 10,
        width: 1,
        style: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ThresholdLineStyles"].FULL,
        color: Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[9]
      }
    }
  },
  events: {
    brush: {
      disabled: false
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getConfigCollections"])(),
    optionTabs: Object(_utils_common_config__WEBPACK_IMPORTED_MODULE_5__["getAreaOptionTabs"])(),
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.metricTitle', {
        defaultMessage: 'Y-axis'
      }),
      min: 1,
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'radius',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.radiusTitle', {
        defaultMessage: 'Dot size'
      }),
      min: 0,
      max: 1,
      aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.segmentTitle', {
        defaultMessage: 'X-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.groupTitle', {
        defaultMessage: 'Split series'
      }),
      min: 0,
      max: 3,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.histogram.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  }
});

/***/ }),

/***/ "./public/horizontal_bar.ts":
/*!**********************************!*\
  !*** ./public/horizontal_bar.ts ***!
  \**********************************/
/*! exports provided: createHorizontalBarVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHorizontalBarVisTypeDefinition", function() { return createHorizontalBarVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _utils_common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common_config */ "./public/utils/common_config.tsx");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_8__);
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








const createHorizontalBarVisTypeDefinition = deps => ({
  name: 'horizontal_bar',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.horizontalBarTitle', {
    defaultMessage: 'Horizontal Bar'
  }),
  icon: 'visBarHorizontal',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.horizontalBarDescription', {
    defaultMessage: 'Assign a continuous variable to each axis'
  }),
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_6__["createVislibVisController"])(deps),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].filter, _visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].brush];
  },
  visConfig: {
    defaults: {
      type: 'histogram',
      grid: {
        categoryLines: false
      },
      categoryAxes: [{
        id: 'CategoryAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].CATEGORY,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].LEFT,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR
        },
        labels: {
          show: true,
          rotate: _charts_public__WEBPACK_IMPORTED_MODULE_7__["Rotates"].HORIZONTAL,
          filter: false,
          truncate: 200
        },
        title: {}
      }],
      valueAxes: [{
        id: 'ValueAxis-1',
        name: 'LeftAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].VALUE,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].BOTTOM,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR,
          mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisModes"].NORMAL
        },
        labels: {
          show: true,
          rotate: _charts_public__WEBPACK_IMPORTED_MODULE_7__["Rotates"].ANGLED,
          filter: true,
          truncate: 100
        },
        title: {
          text: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"]
        }
      }],
      seriesParams: [{
        show: true,
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartTypes"].HISTOGRAM,
        mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartModes"].NORMAL,
        data: {
          label: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"],
          id: '1'
        },
        valueAxis: 'ValueAxis-1',
        drawLinesBetweenPoints: true,
        lineWidth: 2,
        showCircles: true
      }],
      addTooltip: true,
      addLegend: true,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].RIGHT,
      times: [],
      addTimeMarker: false,
      labels: {},
      thresholdLine: {
        show: false,
        value: 10,
        width: 1,
        style: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ThresholdLineStyles"].FULL,
        color: Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[9]
      }
    }
  },
  events: {
    brush: {
      disabled: false
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getConfigCollections"])(),
    optionTabs: Object(_utils_common_config__WEBPACK_IMPORTED_MODULE_5__["getAreaOptionTabs"])(),
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.metricTitle', {
        defaultMessage: 'Y-axis'
      }),
      min: 1,
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'radius',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.radiusTitle', {
        defaultMessage: 'Dot size'
      }),
      min: 0,
      max: 1,
      aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.segmentTitle', {
        defaultMessage: 'X-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.groupTitle', {
        defaultMessage: 'Split series'
      }),
      min: 0,
      max: 3,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.horizontalBar.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
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
/*! exports provided: plugin, getConfigCollections, vislibSeriesResponseHandler, vislibSlicesResponseHandler, Positions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfigCollections", function() { return _utils_collections__WEBPACK_IMPORTED_MODULE_1__["getConfigCollections"]; });

/* harmony import */ var _vislib_response_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vislib/response_handler */ "./public/vislib/response_handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vislibSeriesResponseHandler", function() { return _vislib_response_handler__WEBPACK_IMPORTED_MODULE_2__["vislibSeriesResponseHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vislibSlicesResponseHandler", function() { return _vislib_response_handler__WEBPACK_IMPORTED_MODULE_2__["vislibSlicesResponseHandler"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["Positions"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["VisTypeVislibPlugin"](initializerContext);
}




/***/ }),

/***/ "./public/line.ts":
/*!************************!*\
  !*** ./public/line.ts ***!
  \************************/
/*! exports provided: createLineVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineVisTypeDefinition", function() { return createLineVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _utils_common_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common_config */ "./public/utils/common_config.tsx");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _line_to_expression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line_to_expression */ "./public/line_to_expression.ts");
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









const createLineVisTypeDefinition = deps => ({
  name: 'line',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.lineTitle', {
    defaultMessage: 'Line'
  }),
  icon: 'visLine',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.lineDescription', {
    defaultMessage: 'Emphasize trends'
  }),
  toExpressionAst: _line_to_expression__WEBPACK_IMPORTED_MODULE_9__["toExpressionAst"],
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_6__["createVislibVisController"])(deps),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].filter, _visualizations_public__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].brush];
  },
  visConfig: {
    defaults: {
      type: 'line',
      grid: {
        categoryLines: false
      },
      categoryAxes: [{
        id: 'CategoryAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].CATEGORY,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].BOTTOM,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR
        },
        labels: {
          show: true,
          filter: true,
          truncate: 100
        },
        title: {}
      }],
      valueAxes: [{
        id: 'ValueAxis-1',
        name: 'LeftAxis-1',
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisTypes"].VALUE,
        position: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].LEFT,
        show: true,
        style: {},
        scale: {
          type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ScaleTypes"].LINEAR,
          mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["AxisModes"].NORMAL
        },
        labels: {
          show: true,
          rotate: _charts_public__WEBPACK_IMPORTED_MODULE_7__["Rotates"].HORIZONTAL,
          filter: false,
          truncate: 100
        },
        title: {
          text: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"]
        }
      }],
      seriesParams: [{
        show: true,
        type: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartTypes"].LINE,
        mode: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ChartModes"].NORMAL,
        data: {
          label: _utils_common_config__WEBPACK_IMPORTED_MODULE_5__["countLabel"],
          id: '1'
        },
        valueAxis: 'ValueAxis-1',
        drawLinesBetweenPoints: true,
        lineWidth: 2,
        interpolate: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["InterpolationModes"].LINEAR,
        showCircles: true
      }],
      addTooltip: true,
      addLegend: true,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].RIGHT,
      times: [],
      addTimeMarker: false,
      labels: {},
      thresholdLine: {
        show: false,
        value: 10,
        width: 1,
        style: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["ThresholdLineStyles"].FULL,
        color: Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[9]
      }
    }
  },
  events: {
    brush: {
      disabled: false
    }
  },
  editorConfig: {
    collections: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getConfigCollections"])(),
    optionTabs: Object(_utils_common_config__WEBPACK_IMPORTED_MODULE_5__["getAreaOptionTabs"])(),
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.metricTitle', {
        defaultMessage: 'Y-axis'
      }),
      min: 1,
      aggFilter: ['!geo_centroid', '!geo_bounds'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Metrics,
      name: 'radius',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.radiusTitle', {
        defaultMessage: 'Dot size'
      }),
      min: 0,
      max: 1,
      aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'top_hits']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.segmentTitle', {
        defaultMessage: 'X-axis'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.groupTitle', {
        defaultMessage: 'Split series'
      }),
      min: 0,
      max: 3,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_2__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.line.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  }
});

/***/ }),

/***/ "./public/line_to_expression.ts":
/*!**************************************!*\
  !*** ./public/line_to_expression.ts ***!
  \**************************************/
/*! exports provided: toExpressionAst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExpressionAst", function() { return toExpressionAst; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expressions/public */ "plugin/expressions/public");
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_expressions_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const toExpressionAst = async (vis, params) => {
  // Construct the existing expr fns that are ran for vislib line chart, up until the render fn.
  // That way we get the exact same data table of results as if it was a vislib chart.
  const opensearchaggsFn = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('opensearchaggs', {
    index: vis.data.indexPattern.id,
    metricsAtAllLevels: vis.isHierarchical(),
    partialRows: vis.params.showPartialRows || false,
    aggConfigs: JSON.stringify(vis.data.aggs.aggs),
    includeFormatHints: false
  });

  // Checks if there are vislayers to overlay. If not, default to the vislib implementation.
  const dimensions = await Object(_visualizations_public__WEBPACK_IMPORTED_MODULE_1__["buildVislibDimensions"])(vis, params);
  if (params.visLayers == null || Object.keys(params.visLayers).length === 0 || !Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_3__["isEligibleForVisLayers"])(vis)) {
    // Render using vislib instead of vega-lite
    const visConfig = {
      ...vis.params,
      dimensions
    };
    const vislib = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('vislib', {
      type: 'line',
      visConfig: JSON.stringify(visConfig)
    });
    const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])([opensearchaggsFn, vislib]);
    return ast.toAst();
  } else {
    const visAugmenterConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(params, 'visAugmenterConfig', {});

    // adding the new expr fn here that takes the datatable and converts to a vega spec
    const vegaSpecFn = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('line_vega_spec', {
      visLayers: JSON.stringify(params.visLayers),
      visParams: JSON.stringify(vis.params),
      dimensions: JSON.stringify(dimensions),
      visAugmenterConfig: JSON.stringify(visAugmenterConfig)
    });
    const vegaSpecFnExpressionBuilder = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])([vegaSpecFn]);

    // build vega expr fn. use nested expression fn syntax to first construct the
    // spec via 'line_vega_spec' fn, then set as the arg for the final 'vega' fn
    const vegaFn = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('vega', {
      spec: vegaSpecFnExpressionBuilder
    });
    const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])([opensearchaggsFn, vegaFn]);
    return ast.toAst();
  }
};

/***/ }),

/***/ "./public/pie.ts":
/*!***********************!*\
  !*** ./public/pie.ts ***!
  \***********************/
/*! exports provided: createPieVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieVisTypeDefinition", function() { return createPieVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/options */ "./public/components/options/index.ts");
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_6__);
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








const createPieVisTypeDefinition = deps => ({
  name: 'pie',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.pie.pieTitle', {
    defaultMessage: 'Pie'
  }),
  icon: 'visPie',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.pie.pieDescription', {
    defaultMessage: 'Compare parts of a whole'
  }),
  visualization: Object(_vis_controller__WEBPACK_IMPORTED_MODULE_5__["createVislibVisController"])(deps),
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_6__["VIS_EVENT_TO_TRIGGER"].filter];
  },
  visConfig: {
    defaults: {
      type: 'pie',
      addTooltip: true,
      addLegend: true,
      legendPosition: _utils_collections__WEBPACK_IMPORTED_MODULE_4__["Positions"].RIGHT,
      isDonut: true,
      labels: {
        show: false,
        values: true,
        last_level: true,
        truncate: 100
      }
    }
  },
  editorConfig: {
    collections: {
      legendPositions: Object(_utils_collections__WEBPACK_IMPORTED_MODULE_4__["getPositions"])()
    },
    optionsTemplate: _components_options__WEBPACK_IMPORTED_MODULE_3__["PieOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.pie.metricTitle', {
        defaultMessage: 'Slice size'
      }),
      min: 1,
      max: 1,
      aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.pie.segmentTitle', {
        defaultMessage: 'Split slices'
      }),
      min: 0,
      max: Infinity,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_1__["AggGroupNames"].Buckets,
      name: 'split',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.pie.splitTitle', {
        defaultMessage: 'Split chart'
      }),
      mustBeFirst: true,
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  },
  hierarchicalData: true,
  responseHandler: 'vislib_slices'
});

/***/ }),

/***/ "./public/pie_fn.ts":
/*!**************************!*\
  !*** ./public/pie_fn.ts ***!
  \**************************/
/*! exports provided: createPieVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieVisFn", function() { return createPieVisFn; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vislib_response_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vislib/response_handler */ "./public/vislib/response_handler.js");
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

const createPieVisFn = () => ({
  name: 'opensearch_dashboards_pie',
  type: 'render',
  inputTypes: ['opensearch_dashboards_datatable'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.functions.pie.help', {
    defaultMessage: 'Pie visualization'
  }),
  args: {
    visConfig: {
      types: ['string'],
      default: '"{}"',
      help: ''
    }
  },
  fn(input, args) {
    const visConfig = JSON.parse(args.visConfig);
    const convertedData = Object(_vislib_response_handler__WEBPACK_IMPORTED_MODULE_1__["vislibSlicesResponseHandler"])(input, visConfig.dimensions);
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: convertedData,
        visType: 'pie',
        visConfig,
        params: {
          listenOnChange: true
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: VisTypeVislibPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisTypeVislibPlugin", function() { return VisTypeVislibPlugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_type_vislib_vis_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis_type_vislib_vis_fn */ "./public/vis_type_vislib_vis_fn.ts");
/* harmony import */ var _pie_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie_fn */ "./public/pie_fn.ts");
/* harmony import */ var _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vis_type_vislib_vis_types */ "./public/vis_type_vislib_vis_types.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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
class VisTypeVislibPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
  }
  async setup(core, {
    expressions,
    visualizations,
    charts,
    visTypeXy
  }) {
    const visualizationDependencies = {
      uiSettings: core.uiSettings,
      charts
    };
    const vislibTypes = [_vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createHistogramVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createLineVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createPieVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createAreaVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createHeatmapVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createHorizontalBarVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createGaugeVisTypeDefinition"], _vis_type_vislib_vis_types__WEBPACK_IMPORTED_MODULE_3__["createGoalVisTypeDefinition"]];
    const vislibFns = [Object(_vis_type_vislib_vis_fn__WEBPACK_IMPORTED_MODULE_1__["createVisTypeVislibVisFn"])(), Object(_pie_fn__WEBPACK_IMPORTED_MODULE_2__["createPieVisFn"])()];

    // if visTypeXy plugin is disabled it's config will be undefined
    if (!visTypeXy) {
      const convertedTypes = [];
      const convertedFns = [];

      // Register legacy vislib types that have been converted
      convertedFns.forEach(expressions.registerFunction);
      convertedTypes.forEach(vis => visualizations.createBaseVisualization(vis(visualizationDependencies)));
    }

    // Register non-converted types
    vislibFns.forEach(expressions.registerFunction);
    vislibTypes.forEach(vis => visualizations.createBaseVisualization(vis(visualizationDependencies)));
  }
  start(core, {
    data,
    opensearchDashboardsLegacy
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_4__["setFormatService"])(data.fieldFormats);
    Object(_services__WEBPACK_IMPORTED_MODULE_4__["setDataActions"])(data.actions);
    Object(_services__WEBPACK_IMPORTED_MODULE_4__["setOpenSearchDashboardsLegacy"])(opensearchDashboardsLegacy);
  }
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getDataActions, setDataActions, getFormatService, setFormatService, getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataActions", function() { return getDataActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataActions", function() { return setDataActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatService", function() { return getFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormatService", function() { return setFormatService; });
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


const [getDataActions, setDataActions] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('vislib data.actions');
const [getFormatService, setFormatService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('vislib data.fieldFormats');
const [getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('vislib opensearchDashboardsLegacy');

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: Positions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/collections */ "./public/utils/collections.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return _utils_collections__WEBPACK_IMPORTED_MODULE_0__["Positions"]; });

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

/***/ "./public/utils/collections.ts":
/*!*************************************!*\
  !*** ./public/utils/collections.ts ***!
  \*************************************/
/*! exports provided: Positions, ChartTypes, ChartModes, InterpolationModes, AxisTypes, ScaleTypes, AxisModes, ThresholdLineStyles, GaugeTypes, Alignments, getConfigCollections, getGaugeCollections, getHeatmapCollections, getPositions, getRotateOptions, getScaleTypes, getInterpolationModes, getChartTypes, getChartModes, getAxisModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positions", function() { return Positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTypes", function() { return ChartTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModes", function() { return ChartModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolationModes", function() { return InterpolationModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisTypes", function() { return AxisTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleTypes", function() { return ScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisModes", function() { return AxisModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdLineStyles", function() { return ThresholdLineStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeTypes", function() { return GaugeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alignments", function() { return Alignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigCollections", function() { return getConfigCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGaugeCollections", function() { return getGaugeCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeatmapCollections", function() { return getHeatmapCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotateOptions", function() { return getRotateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleTypes", function() { return getScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterpolationModes", function() { return getInterpolationModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartTypes", function() { return getChartTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartModes", function() { return getChartModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisModes", function() { return getAxisModes; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_1__);
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



const Positions = Object.freeze({
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom'
});
const getPositions = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.legendPositions.topText', {
    defaultMessage: 'Top'
  }),
  value: Positions.TOP
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.legendPositions.leftText', {
    defaultMessage: 'Left'
  }),
  value: Positions.LEFT
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.legendPositions.rightText', {
    defaultMessage: 'Right'
  }),
  value: Positions.RIGHT
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.legendPositions.bottomText', {
    defaultMessage: 'Bottom'
  }),
  value: Positions.BOTTOM
}];
const ChartTypes = Object.freeze({
  LINE: 'line',
  AREA: 'area',
  HISTOGRAM: 'histogram'
});
const getChartTypes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.chartTypes.lineText', {
    defaultMessage: 'Line'
  }),
  value: ChartTypes.LINE
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.chartTypes.areaText', {
    defaultMessage: 'Area'
  }),
  value: ChartTypes.AREA
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.chartTypes.barText', {
    defaultMessage: 'Bar'
  }),
  value: ChartTypes.HISTOGRAM
}];
const ChartModes = Object.freeze({
  NORMAL: 'normal',
  STACKED: 'stacked'
});
const getChartModes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.chartModes.normalText', {
    defaultMessage: 'Normal'
  }),
  value: ChartModes.NORMAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.chartModes.stackedText', {
    defaultMessage: 'Stacked'
  }),
  value: ChartModes.STACKED
}];
const InterpolationModes = Object.freeze({
  LINEAR: 'linear',
  CARDINAL: 'cardinal',
  STEP_AFTER: 'step-after'
});
const getInterpolationModes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.interpolationModes.straightText', {
    defaultMessage: 'Straight'
  }),
  value: InterpolationModes.LINEAR
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.interpolationModes.smoothedText', {
    defaultMessage: 'Smoothed'
  }),
  value: InterpolationModes.CARDINAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.interpolationModes.steppedText', {
    defaultMessage: 'Stepped'
  }),
  value: InterpolationModes.STEP_AFTER
}];
const AxisTypes = Object.freeze({
  CATEGORY: 'category',
  VALUE: 'value'
});
const ScaleTypes = Object.freeze({
  LINEAR: 'linear',
  LOG: 'log',
  SQUARE_ROOT: 'square root'
});
const getScaleTypes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.scaleTypes.linearText', {
    defaultMessage: 'Linear'
  }),
  value: ScaleTypes.LINEAR
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.scaleTypes.logText', {
    defaultMessage: 'Log'
  }),
  value: ScaleTypes.LOG
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.scaleTypes.squareRootText', {
    defaultMessage: 'Square root'
  }),
  value: ScaleTypes.SQUARE_ROOT
}];
const AxisModes = Object.freeze({
  NORMAL: 'normal',
  PERCENTAGE: 'percentage',
  WIGGLE: 'wiggle',
  SILHOUETTE: 'silhouette'
});
const getAxisModes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.axisModes.normalText', {
    defaultMessage: 'Normal'
  }),
  value: AxisModes.NORMAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.axisModes.percentageText', {
    defaultMessage: 'Percentage'
  }),
  value: AxisModes.PERCENTAGE
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.axisModes.wiggleText', {
    defaultMessage: 'Wiggle'
  }),
  value: AxisModes.WIGGLE
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.axisModes.silhouetteText', {
    defaultMessage: 'Silhouette'
  }),
  value: AxisModes.SILHOUETTE
}];
const ThresholdLineStyles = Object.freeze({
  FULL: 'full',
  DASHED: 'dashed',
  DOT_DASHED: 'dot-dashed'
});
const getThresholdLineStyles = () => [{
  value: ThresholdLineStyles.FULL,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.thresholdLine.style.fullText', {
    defaultMessage: 'Full'
  })
}, {
  value: ThresholdLineStyles.DASHED,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.thresholdLine.style.dashedText', {
    defaultMessage: 'Dashed'
  })
}, {
  value: ThresholdLineStyles.DOT_DASHED,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.thresholdLine.style.dotdashedText', {
    defaultMessage: 'Dot-dashed'
  })
}];
const getRotateOptions = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.categoryAxis.rotate.horizontalText', {
    defaultMessage: 'Horizontal'
  }),
  value: _charts_public__WEBPACK_IMPORTED_MODULE_1__["Rotates"].HORIZONTAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.categoryAxis.rotate.verticalText', {
    defaultMessage: 'Vertical'
  }),
  value: _charts_public__WEBPACK_IMPORTED_MODULE_1__["Rotates"].VERTICAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.categoryAxis.rotate.angledText', {
    defaultMessage: 'Angled'
  }),
  value: _charts_public__WEBPACK_IMPORTED_MODULE_1__["Rotates"].ANGLED
}];
const GaugeTypes = Object.freeze({
  ARC: 'Arc',
  CIRCLE: 'Circle'
});
const getGaugeTypes = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.gaugeTypes.arcText', {
    defaultMessage: 'Arc'
  }),
  value: GaugeTypes.ARC
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.gaugeTypes.circleText', {
    defaultMessage: 'Circle'
  }),
  value: GaugeTypes.CIRCLE
}];
const Alignments = Object.freeze({
  AUTOMATIC: 'automatic',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
});
const getAlignments = () => [{
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.alignmentAutomaticTitle', {
    defaultMessage: 'Automatic'
  }),
  value: Alignments.AUTOMATIC
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.alignmentHorizontalTitle', {
    defaultMessage: 'Horizontal'
  }),
  value: Alignments.HORIZONTAL
}, {
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.gauge.alignmentVerticalTitle', {
    defaultMessage: 'Vertical'
  }),
  value: Alignments.VERTICAL
}];
const getConfigCollections = () => ({
  legendPositions: getPositions(),
  positions: getPositions(),
  chartTypes: getChartTypes(),
  axisModes: getAxisModes(),
  scaleTypes: getScaleTypes(),
  chartModes: getChartModes(),
  interpolationModes: getInterpolationModes(),
  thresholdLineStyles: getThresholdLineStyles()
});
const getGaugeCollections = () => ({
  gaugeTypes: getGaugeTypes(),
  alignments: getAlignments(),
  colorSchemas: _charts_public__WEBPACK_IMPORTED_MODULE_1__["colorSchemas"]
});
const getHeatmapCollections = () => ({
  legendPositions: getPositions(),
  scales: getScaleTypes(),
  colorSchemas: _charts_public__WEBPACK_IMPORTED_MODULE_1__["colorSchemas"]
});


/***/ }),

/***/ "./public/utils/common_config.tsx":
/*!****************************************!*\
  !*** ./public/utils/common_config.tsx ***!
  \****************************************/
/*! exports provided: getAreaOptionTabs, countLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaOptionTabs", function() { return getAreaOptionTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countLabel", function() { return countLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/options */ "./public/components/options/index.ts");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common */ "./public/components/common/index.ts");
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





function getAreaOptionTabs() {
  return [{
    name: 'advanced',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.area.tabs.metricsAxesTitle', {
      defaultMessage: 'Metrics & axes'
    }),
    editor: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_3__["ValidationWrapper"], _extends({}, props, {
      component: _components_options__WEBPACK_IMPORTED_MODULE_2__["MetricsAxisOptions"]
    }))
  }, {
    name: 'options',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.area.tabs.panelSettingsTitle', {
      defaultMessage: 'Panel settings'
    }),
    editor: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_3__["ValidationWrapper"], _extends({}, props, {
      component: _components_options__WEBPACK_IMPORTED_MODULE_2__["PointSeriesOptions"]
    }))
  }];
}
const countLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.area.countText', {
  defaultMessage: 'Count'
});


/***/ }),

/***/ "./public/vis_controller.tsx":
/*!***********************************!*\
  !*** ./public/vis_controller.tsx ***!
  \***********************************/
/*! exports provided: createVislibVisController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVislibVisController", function() { return createVislibVisController; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vislib_components_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vislib/components/legend */ "./public/vislib/components/legend/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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






const legendClassName = {
  top: 'visLib--legend-top',
  bottom: 'visLib--legend-bottom',
  left: 'visLib--legend-left',
  right: 'visLib--legend-right'
};
const createVislibVisController = deps => {
  return class VislibVisController {
    constructor(el, vis) {
      this.el = el;
      this.vis = vis;
      _defineProperty(this, "unmount", null);
      _defineProperty(this, "visParams", void 0);
      _defineProperty(this, "legendRef", void 0);
      _defineProperty(this, "container", void 0);
      _defineProperty(this, "chartEl", void 0);
      _defineProperty(this, "legendEl", void 0);
      _defineProperty(this, "vislibVis", void 0);
      this.el = el;
      this.vis = vis;
      this.unmount = null;
      this.legendRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

      // vis mount point
      this.container = document.createElement('div');
      this.container.className = 'visLib';
      this.el.appendChild(this.container);

      // chart mount point
      this.chartEl = document.createElement('div');
      this.chartEl.className = 'visLib__chart';
      this.container.appendChild(this.chartEl);

      // legend mount point
      this.legendEl = document.createElement('div');
      this.legendEl.className = 'visLib__legend';
      this.container.appendChild(this.legendEl);
    }
    render(opensearchResponse, visParams) {
      if (this.vislibVis) {
        this.destroy();
      }
      Object(_services__WEBPACK_IMPORTED_MODULE_4__["getOpenSearchDashboardsLegacy"])().loadFontAwesome();
      return new Promise(async resolve => {
        if (this.el.clientWidth === 0 || this.el.clientHeight === 0) {
          return resolve();
        }

        // @ts-expect-error
        const {
          Vis: Vislib
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./vislib/vis */ "./public/vislib/vis.js"));
        this.vislibVis = new Vislib(this.chartEl, visParams, deps);
        this.vislibVis.on('brush', this.vis.API.events.brush);
        this.vislibVis.on('click', this.vis.API.events.filter);
        this.vislibVis.on('renderComplete', resolve);
        this.vislibVis.initVisConfig(opensearchResponse, this.vis.getUiState());
        if (visParams.addLegend) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.container).attr('class', (i, cls) => {
            return cls.replace(/visLib--legend-\S+/g, '');
          }).addClass(legendClassName[visParams.legendPosition]);
          this.mountLegend(opensearchResponse, visParams.legendPosition);
        }
        this.vislibVis.render(opensearchResponse, this.vis.getUiState());

        // refreshing the legend after the chart is rendered.
        // this is necessary because some visualizations
        // provide data necessary for the legend only after a render cycle.
        if (visParams.addLegend && _vislib_components_legend__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_LEGEND_VIS_TYPES"].includes(this.vislibVis.visConfigArgs.type)) {
          this.unmountLegend();
          this.mountLegend(opensearchResponse, visParams.legendPosition);
          this.vislibVis.render(opensearchResponse, this.vis.getUiState());
        }
      });
    }
    mountLegend(visData, position) {
      this.unmount = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_2__["mountReactNode"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vislib_components_legend__WEBPACK_IMPORTED_MODULE_3__["VisLegend"], {
        ref: this.legendRef,
        vis: this.vis,
        vislibVis: this.vislibVis,
        visData: visData,
        position: position,
        uiState: this.vis.getUiState()
      }))(this.legendEl);
    }
    unmountLegend() {
      if (this.unmount) {
        this.unmount();
      }
    }
    destroy() {
      if (this.unmount) {
        this.unmount();
      }
      if (this.vislibVis) {
        this.vislibVis.off('brush', this.vis.API.events.brush);
        this.vislibVis.off('click', this.vis.API.events.filter);
        this.vislibVis.destroy();
        delete this.vislibVis;
      }
    }
  };
};

/***/ }),

/***/ "./public/vis_type_vislib_vis_fn.ts":
/*!******************************************!*\
  !*** ./public/vis_type_vislib_vis_fn.ts ***!
  \******************************************/
/*! exports provided: createVisTypeVislibVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVisTypeVislibVisFn", function() { return createVisTypeVislibVisFn; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vislib_response_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vislib/response_handler */ "./public/vislib/response_handler.js");
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

const createVisTypeVislibVisFn = () => ({
  name: 'vislib',
  type: 'render',
  inputTypes: ['opensearch_dashboards_datatable'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.functions.vislib.help', {
    defaultMessage: 'Vislib visualization'
  }),
  args: {
    type: {
      types: ['string'],
      default: '""',
      help: 'vislib vis type'
    },
    visConfig: {
      types: ['string'],
      default: '"{}"',
      help: ''
    }
  },
  fn(context, args) {
    const visConfigParams = JSON.parse(args.visConfig);
    const convertedData = Object(_vislib_response_handler__WEBPACK_IMPORTED_MODULE_1__["vislibSeriesResponseHandler"])(context, visConfigParams.dimensions);
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: convertedData,
        visType: args.type,
        visConfig: visConfigParams,
        params: {
          listenOnChange: true
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/vis_type_vislib_vis_types.ts":
/*!*********************************************!*\
  !*** ./public/vis_type_vislib_vis_types.ts ***!
  \*********************************************/
/*! exports provided: createHistogramVisTypeDefinition, createLineVisTypeDefinition, createPieVisTypeDefinition, createAreaVisTypeDefinition, createHeatmapVisTypeDefinition, createHorizontalBarVisTypeDefinition, createGaugeVisTypeDefinition, createGoalVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./histogram */ "./public/histogram.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHistogramVisTypeDefinition", function() { return _histogram__WEBPACK_IMPORTED_MODULE_0__["createHistogramVisTypeDefinition"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./public/line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLineVisTypeDefinition", function() { return _line__WEBPACK_IMPORTED_MODULE_1__["createLineVisTypeDefinition"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie */ "./public/pie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPieVisTypeDefinition", function() { return _pie__WEBPACK_IMPORTED_MODULE_2__["createPieVisTypeDefinition"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area */ "./public/area.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAreaVisTypeDefinition", function() { return _area__WEBPACK_IMPORTED_MODULE_3__["createAreaVisTypeDefinition"]; });

/* harmony import */ var _heatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heatmap */ "./public/heatmap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHeatmapVisTypeDefinition", function() { return _heatmap__WEBPACK_IMPORTED_MODULE_4__["createHeatmapVisTypeDefinition"]; });

/* harmony import */ var _horizontal_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal_bar */ "./public/horizontal_bar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHorizontalBarVisTypeDefinition", function() { return _horizontal_bar__WEBPACK_IMPORTED_MODULE_5__["createHorizontalBarVisTypeDefinition"]; });

/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gauge */ "./public/gauge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGaugeVisTypeDefinition", function() { return _gauge__WEBPACK_IMPORTED_MODULE_6__["createGaugeVisTypeDefinition"]; });

/* harmony import */ var _goal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goal */ "./public/goal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGoalVisTypeDefinition", function() { return _goal__WEBPACK_IMPORTED_MODULE_7__["createGoalVisTypeDefinition"]; });

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

/***/ "./public/vislib/components/legend/index.ts":
/*!**************************************************!*\
  !*** ./public/vislib/components/legend/index.ts ***!
  \**************************************************/
/*! exports provided: VisLegend, CUSTOM_LEGEND_VIS_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legend */ "./public/vislib/components/legend/legend.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLegend", function() { return _legend__WEBPACK_IMPORTED_MODULE_0__["VisLegend"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./public/vislib/components/legend/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_LEGEND_VIS_TYPES", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_LEGEND_VIS_TYPES"]; });

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

/***/ "./public/vislib/components/legend/legend.tsx":
/*!****************************************************!*\
  !*** ./public/vislib/components/legend/legend.tsx ***!
  \****************************************************/
/*! exports provided: VisLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisLegend", function() { return VisLegend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./public/services.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./public/vislib/components/legend/models.ts");
/* harmony import */ var _legend_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legend_item */ "./public/vislib/components/legend/legend_item.tsx");
/* harmony import */ var _pie_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pie_utils */ "./public/vislib/components/legend/pie_utils.ts");
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









class VisLegend extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "legendId", Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["htmlIdGenerator"])()('legend'));
    _defineProperty(this, "getColor", () => '');
    _defineProperty(this, "toggleLegend", () => {
      const bwcAddLegend = this.props.vis.params.addLegend;
      const bwcLegendStateDefault = bwcAddLegend == null ? true : bwcAddLegend;
      const newOpen = !this.props.uiState.get('vis.legendOpen', bwcLegendStateDefault);
      this.setState({
        open: newOpen
      });
      // open should be applied on template before we update uiState
      setTimeout(() => {
        this.props.uiState.set('vis.legendOpen', newOpen);
      });
    });
    _defineProperty(this, "setColor", (label, color) => event => {
      if (event.key && event.key !== _elastic_eui__WEBPACK_IMPORTED_MODULE_3__["keys"].ENTER) {
        return;
      }
      const colors = this.props.uiState.get('vis.colors') || {};
      if (colors[label] === color) delete colors[label];else colors[label] = color;
      this.props.uiState.setSilent('vis.colors', null);
      this.props.uiState.set('vis.colors', colors);
      this.props.uiState.emit('colorChanged');
      this.refresh();
    });
    _defineProperty(this, "filter", ({
      values: data
    }, negate) => {
      this.props.vis.API.events.filter({
        data,
        negate
      });
    });
    _defineProperty(this, "canFilter", async item => {
      if (_models__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_LEGEND_VIS_TYPES"].includes(this.props.vislibVis.visConfigArgs.type)) {
        return false;
      }
      if (item.values && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["every"])(item.values, lodash__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])) {
        return false;
      }
      const filters = await Object(_services__WEBPACK_IMPORTED_MODULE_4__["getDataActions"])().createFiltersFromValueClickAction({
        data: item.values
      });
      return Boolean(filters.length);
    });
    _defineProperty(this, "toggleDetails", label => event => {
      if (event && event.key && event.key !== _elastic_eui__WEBPACK_IMPORTED_MODULE_3__["keys"].ENTER) {
        return;
      }
      this.setState({
        selectedLabel: this.state.selectedLabel === label ? null : label
      });
    });
    _defineProperty(this, "getSeriesLabels", data => {
      const values = data.map(chart => chart.series).reduce((a, b) => a.concat(b), []);
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["compact"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"])(values, 'label')).map(label => ({
        ...label,
        values: [label.values[0].seriesRaw]
      }));
    });
    _defineProperty(this, "setFilterableLabels", items => new Promise(async resolve => {
      const filterableLabels = new Set();
      items.forEach(async item => {
        const canFilter = await this.canFilter(item);
        if (canFilter) {
          filterableLabels.add(item.label);
        }
      });
      this.setState({
        filterableLabels
      }, resolve);
    }));
    _defineProperty(this, "setLabels", (data, type) => {
      let labels = [];
      if (_models__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_LEGEND_VIS_TYPES"].includes(type)) {
        const legendLabels = this.props.vislibVis.getLegendLabels();
        if (legendLabels) {
          labels = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(legendLabels, label => {
            return {
              label
            };
          });
        }
      } else {
        if (!data) return [];
        data = data.columns || data.rows || [data];
        labels = type === 'pie' ? Object(_pie_utils__WEBPACK_IMPORTED_MODULE_7__["getPieNames"])(data) : this.getSeriesLabels(data);
      }
      this.setFilterableLabels(labels);
      this.setState({
        labels
      });
    });
    _defineProperty(this, "refresh", () => {
      const vislibVis = this.props.vislibVis;
      if (!vislibVis || !vislibVis.visConfig) {
        this.setState({
          labels: [{
            label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.vislib.legend.loadingLabel', {
              defaultMessage: 'loading…'
            })
          }]
        });
        return;
      } // make sure vislib is defined at this point

      if (this.props.uiState.get('vis.legendOpen') == null && this.props.vis.params.addLegend != null) {
        this.setState({
          open: this.props.vis.params.addLegend
        });
      }
      if (vislibVis.visConfig) {
        this.getColor = this.props.vislibVis.visConfig.data.getColorFunc();
      }
      this.setLabels(this.props.visData, vislibVis.visConfigArgs.type);
    });
    _defineProperty(this, "highlight", event => {
      const el = event.currentTarget;
      const handler = this.props.vislibVis && this.props.vislibVis.handler;

      // there is no guarantee that a Chart will set the highlight-function on its handler
      if (!handler || typeof handler.highlight !== 'function') {
        return;
      }
      handler.highlight.call(el, handler.el);
    });
    _defineProperty(this, "unhighlight", event => {
      const el = event.currentTarget;
      const handler = this.props.vislibVis && this.props.vislibVis.handler;

      // there is no guarantee that a Chart will set the unhighlight-function on its handler
      if (!handler || typeof handler.unHighlight !== 'function') {
        return;
      }
      handler.unHighlight.call(el, handler.el);
    });
    _defineProperty(this, "getAnchorPosition", () => {
      const {
        position
      } = this.props;
      switch (position) {
        case 'bottom':
          return 'upCenter';
        case 'left':
          return 'rightUp';
        case 'right':
          return 'leftUp';
        default:
          return 'downCenter';
      }
    });
    _defineProperty(this, "renderLegend", anchorPosition => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "visLegend__list",
      id: this.legendId
    }, this.state.labels.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_legend_item__WEBPACK_IMPORTED_MODULE_6__["VisLegendItem"], {
      item: item,
      key: item.label,
      anchorPosition: anchorPosition,
      selected: this.state.selectedLabel === item.label,
      canFilter: this.state.filterableLabels.has(item.label),
      onFilter: this.filter,
      onSelect: this.toggleDetails,
      legendId: this.legendId,
      setColor: this.setColor,
      getColor: this.getColor,
      onHighlight: this.highlight,
      onUnhighlight: this.unhighlight
    }))));
    const open = props.uiState.get('vis.legendOpen', true);
    this.state = {
      open,
      labels: [],
      filterableLabels: new Set(),
      selectedLabel: null
    };
  }
  componentDidMount() {
    this.refresh();
  }
  render() {
    const anchorPosition = this.getAnchorPosition();

    // GS 인증용: 좌측 하단 "Toggle legend" 버튼 삭제, 범례는 항상 표시
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visLegend"
    }, this.renderLegend(anchorPosition));
  }
}

/***/ }),

/***/ "./public/vislib/components/legend/legend_item.tsx":
/*!*********************************************************!*\
  !*** ./public/vislib/components/legend/legend_item.tsx ***!
  \*********************************************************/
/*! exports provided: legendColors, VisLegendItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendColors", function() { return legendColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisLegendItem", function() { return VisLegendItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
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






// starting from the default categorical colors, we generate 6 additional variants,
// 3 lighter and 3 darker
const legendColors = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["euiPaletteColorBlind"])({
  rotations: 7,
  direction: 'both'
});
const VisLegendItemComponent = ({
  item,
  legendId,
  selected,
  canFilter,
  anchorPosition,
  onFilter,
  onSelect,
  onHighlight,
  onUnhighlight,
  setColor,
  getColor
}) => {
  /**
   * Keydown listener for a legend entry.
   * This will close the details panel of this legend entry when pressing Escape.
   */
  const onLegendEntryKeydown = event => {
    if (event.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_4__["keys"].ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(null)();
    }
  };
  const filterOptions = [{
    id: 'filterIn',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.vislib.legend.filterForValueButtonAriaLabel', {
      defaultMessage: 'Filter for value {legendDataLabel}',
      values: {
        legendDataLabel: item.label
      }
    }),
    iconType: 'plusInCircle',
    'data-test-subj': `legend-${item.label}-filterIn`
  }, {
    id: 'filterOut',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.vislib.legend.filterOutValueButtonAriaLabel', {
      defaultMessage: 'Filter out value {legendDataLabel}',
      values: {
        legendDataLabel: item.label
      }
    }),
    iconType: 'minusInCircle',
    'data-test-subj': `legend-${item.label}-filterOut`
  }];
  const handleFilterChange = id => {
    onFilter(item, id !== 'filterIn');
  };
  const renderFilterBar = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButtonGroup"], {
    type: "multi",
    isIconOnly: true,
    isFullWidth: true,
    legend: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.vislib.legend.filterOptionsLegend', {
      defaultMessage: '{legendDataLabel}, filter options',
      values: {
        legendDataLabel: item.label
      }
    }),
    options: filterOptions,
    onChange: handleFilterChange,
    "data-test-subj": `legend-${item.label}-filters`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }));
  const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButtonEmpty"], {
    size: "xs",
    color: "text",
    flush: "left",
    className: "visLegend__button",
    onKeyDown: onLegendEntryKeydown,
    onMouseEnter: onHighlight,
    onFocus: onHighlight,
    onClick: onSelect(item.label),
    onMouseLeave: onUnhighlight,
    onBlur: onUnhighlight,
    "data-label": item.label,
    title: item.label,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeVislib.vislib.legend.toggleOptionsButtonAriaLabel', {
      defaultMessage: '{legendDataLabel}, toggle options',
      values: {
        legendDataLabel: item.label
      }
    }),
    "data-test-subj": `legend-${item.label}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
    size: "l",
    type: "dot",
    color: getColor(item.label),
    "data-test-subj": `legendSelectedColor-${getColor(item.label)}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "visLegend__valueTitle"
  }, item.label));
  const renderDetails = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPopover"], {
    ownFocus: true,
    display: "block",
    button: button,
    isOpen: selected,
    anchorPosition: anchorPosition,
    closePopover: onSelect(null),
    panelPaddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visLegend__valueDetails"
  }, canFilter && renderFilterBar(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visLegend__valueColorPicker",
    role: "listbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: `${legendId}ColorPickerDesc`,
    className: "euiScreenReaderOnly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeVislib.vislib.legend.setColorScreenReaderDescription",
    defaultMessage: "Set color for value {legendDataLabel}",
    values: {
      legendDataLabel: item.label
    }
  })), legendColors.map(color => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
    role: "option",
    tabIndex: 0,
    type: "dot",
    size: "l",
    color: getColor(item.label),
    key: color,
    "aria-label": color,
    "aria-describedby": `${legendId}ColorPickerDesc`,
    "aria-selected": color === getColor(item.label),
    onClick: setColor(item.label, color),
    onKeyPress: setColor(item.label, color),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('visLegend__valueColorPickerDot', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'visLegend__valueColorPickerDot-isSelected': color === getColor(item.label)
    }),
    style: {
      color
    },
    "data-test-subj": `legendSelectColor-${color}`
  })))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: item.label,
    className: "visLegend__value"
  }, renderDetails());
};
const VisLegendItem = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(VisLegendItemComponent);

/***/ }),

/***/ "./public/vislib/components/legend/models.ts":
/*!***************************************************!*\
  !*** ./public/vislib/components/legend/models.ts ***!
  \***************************************************/
/*! exports provided: CUSTOM_LEGEND_VIS_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_LEGEND_VIS_TYPES", function() { return CUSTOM_LEGEND_VIS_TYPES; });
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

const CUSTOM_LEGEND_VIS_TYPES = ['heatmap', 'gauge'];

/***/ }),

/***/ "./public/vislib/components/legend/pie_utils.ts":
/*!******************************************************!*\
  !*** ./public/vislib/components/legend/pie_utils.ts ***!
  \******************************************************/
/*! exports provided: getPieNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieNames", function() { return getPieNames; });
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



/**
 * Returns an array of names ordered by appearance in the nested array
 * of objects
 *
 * > Duplicated utilty method from vislib Data class to decouple `vislib_vis_legend` from `vislib`
 *
 * @see src/plugins/vis_type_vislib/public/vislib/lib/data.js
 *
 * @returns {Array} Array of unique names (strings)
 */
function getPieNames(data) {
  const names = [];
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(data, function (obj) {
    const columns = obj.raw ? obj.raw.columns : undefined;
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(getNames(obj, columns), function (name) {
      names.push(name);
    });
  });
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(names, 'label');
}

/**
 * Flattens hierarchical data into an array of objects with a name and index value.
 * The indexed value determines the order of nesting in the data.
 * Returns an array with names sorted by the index value.
 *
 * @param data {Object} Chart data object
 * @param columns {Object} Contains formatter information
 * @returns {Array} Array of names (strings)
 */
function getNames(data, columns) {
  const slices = data.slices;
  if (slices.children) {
    const namedObj = returnNames(slices.children, 0, columns);
    return lodash__WEBPACK_IMPORTED_MODULE_0___default()(namedObj).sortBy(function (obj) {
      return obj.index;
    }).uniqBy(function (d) {
      return d.label;
    }).value();
  }
  return [];
}

/**
 * Helper function for getNames
 * Returns an array of objects with a name (key) value and an index value.
 * The index value allows us to sort the names in the correct nested order.
 *
 * @param array {Array} Array of data objects
 * @param index {Number} Number of times the object is nested
 * @param columns {Object} Contains name formatter information
 * @returns {Array} Array of labels (strings)
 */
function returnNames(array, index, columns) {
  const names = [];
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(array, function (obj) {
    names.push({
      label: obj.name,
      values: [obj.rawData],
      index
    });
    if (obj.children) {
      const plusIndex = index + 1;
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(returnNames(obj.children, plusIndex, columns), function (namedObj) {
        names.push(namedObj);
      });
    }
  });
  return names;
}

/***/ }),

/***/ "./public/vislib/helpers/hierarchical/build_hierarchical_data.ts":
/*!***********************************************************************!*\
  !*** ./public/vislib/helpers/hierarchical/build_hierarchical_data.ts ***!
  \***********************************************************************/
/*! exports provided: buildHierarchicalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildHierarchicalData", function() { return buildHierarchicalData; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./public/services.ts");
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



const buildHierarchicalData = (table, {
  metric,
  buckets = []
}) => {
  let slices;
  const names = {};
  const metricColumn = table.columns[metric.accessor];
  const metricFieldFormatter = metric.format;
  if (!buckets.length) {
    slices = [{
      name: metricColumn.name,
      size: table.rows[0][metricColumn.id]
    }];
    names[metricColumn.name] = metricColumn.name;
  } else {
    slices = [];
    table.rows.forEach((row, rowIndex) => {
      let parent;
      let dataLevel = slices;
      buckets.forEach(bucket => {
        const bucketColumn = table.columns[bucket.accessor];
        const bucketValueColumn = table.columns[bucket.accessor + 1];
        const bucketFormatter = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getFormatService"])().deserialize(bucket.format);
        const name = bucketFormatter.convert(row[bucketColumn.id]);
        const size = row[bucketValueColumn.id];
        names[name] = name;
        let slice = dataLevel.find(dataLevelSlice => dataLevelSlice.name === name);
        if (!slice) {
          slice = {
            name,
            size,
            parent,
            children: [],
            rawData: {
              table,
              row: rowIndex,
              column: bucket.accessor,
              value: row[bucketColumn.id]
            }
          };
          dataLevel.push(slice);
        }
        parent = slice;
        dataLevel = slice.children;
      });
    });
  }
  return {
    hits: table.rows.length,
    raw: table,
    names: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["toArray"])(names),
    tooltipFormatter: metricFieldFormatter,
    slices: {
      children: [...slices]
    }
  };
};

/***/ }),

/***/ "./public/vislib/helpers/index.ts":
/*!****************************************!*\
  !*** ./public/vislib/helpers/index.ts ***!
  \****************************************/
/*! exports provided: buildPointSeriesData, buildHierarchicalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_series */ "./public/vislib/helpers/point_series/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildPointSeriesData", function() { return _point_series__WEBPACK_IMPORTED_MODULE_0__["buildPointSeriesData"]; });

/* harmony import */ var _hierarchical_build_hierarchical_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchical/build_hierarchical_data */ "./public/vislib/helpers/hierarchical/build_hierarchical_data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildHierarchicalData", function() { return _hierarchical_build_hierarchical_data__WEBPACK_IMPORTED_MODULE_1__["buildHierarchicalData"]; });

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

/***/ "./public/vislib/helpers/point_series/_add_to_siri.ts":
/*!************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_add_to_siri.ts ***!
  \************************************************************/
/*! exports provided: addToSiri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToSiri", function() { return addToSiri; });
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

function addToSiri(series, point, id, yLabel, yFormat, zFormat, zLabel) {
  id = id == null ? '' : id + '';
  if (series.has(id)) {
    series.get(id).values.push(point);
    return;
  }
  series.set(id, {
    id: id.split('-').pop(),
    rawId: id,
    label: yLabel == null ? id : yLabel,
    count: 0,
    values: [point],
    format: yFormat,
    zLabel,
    zFormat
  });
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_fake_x_aspect.ts":
/*!**************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_fake_x_aspect.ts ***!
  \**************************************************************/
/*! exports provided: makeFakeXAspect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFakeXAspect", function() { return makeFakeXAspect; });
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


function makeFakeXAspect() {
  return {
    accessor: -1,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.aggResponse.allDocsTitle', {
      defaultMessage: 'All docs'
    }),
    params: {
      defaultValue: '_all'
    },
    format: {}
  };
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_get_aspects.ts":
/*!************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_get_aspects.ts ***!
  \************************************************************/
/*! exports provided: getAspects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAspects", function() { return getAspects; });
/* harmony import */ var _fake_x_aspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_fake_x_aspect */ "./public/vislib/helpers/point_series/_fake_x_aspect.ts");
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
 * Identify and group the columns based on the aspect of the pointSeries
 * they represent.
 *
 * @return {object} - an object with a key for each aspect (see map). The values
 *                    may be undefined or an array of aspects.
 */
function getAspects(table, dimensions) {
  const aspects = {};
  Object.keys(dimensions).forEach(name => {
    const dimension = dimensions[name];
    const dimensionList = Array.isArray(dimension) ? dimension : [dimension];
    dimensionList.forEach(d => {
      if (!d) {
        return;
      }
      const column = table.columns[d.accessor];
      if (!column) {
        return;
      }
      if (!aspects[name]) {
        aspects[name] = [];
      }
      aspects[name].push({
        accessor: column.id,
        column: d.accessor,
        title: column.name,
        format: d.format,
        params: d.params
      });
    });
  });
  if (!aspects.x) {
    aspects.x = [Object(_fake_x_aspect__WEBPACK_IMPORTED_MODULE_0__["makeFakeXAspect"])()];
  }
  return aspects;
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_get_point.ts":
/*!**********************************************************!*\
  !*** ./public/vislib/helpers/point_series/_get_point.ts ***!
  \**********************************************************/
/*! exports provided: getPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoint", function() { return getPoint; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ "./public/services.ts");
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


function getPoint(table, x, series, row, rowIndex, y, z) {
  const xRow = x.accessor === -1 ? '_all' : row[x.accessor];
  const yRow = row[y.accessor];
  const zRow = z && row[z.accessor];
  const point = {
    x: xRow,
    y: yRow,
    z: zRow,
    extraMetrics: [],
    seriesRaw: series && {
      table,
      column: series[0].column,
      row: rowIndex,
      value: row[series[0].accessor]
    },
    xRaw: {
      table,
      column: x.column,
      row: rowIndex,
      value: xRow
    },
    yRaw: {
      table,
      column: y.column,
      row: rowIndex,
      value: yRow
    },
    zRaw: z && {
      table,
      column: z.column,
      row: rowIndex,
      value: zRow
    },
    tableRaw: table.$parent && {
      table: table.$parent.table,
      column: table.$parent.column,
      row: table.$parent.row,
      value: table.$parent.key,
      title: table.$parent.name
    },
    parent: series ? series[0] : null
  };
  if (point.y === 'NaN') {
    // filter out NaN from stats
    // from metrics that are not based at zero
    return;
  }
  if (series) {
    point.series = series.map(s => {
      const fieldFormatter = Object(_services__WEBPACK_IMPORTED_MODULE_0__["getFormatService"])().deserialize(s.format);
      return fieldFormatter.convert(row[s.accessor]);
    }).join(' - ');
  } else if (y) {
    // If the data is not split up with a series aspect, then
    // each point's "series" becomes the y-agg that produced it
    point.series = y.title;
  }
  return point;
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_get_series.ts":
/*!***********************************************************!*\
  !*** ./public/vislib/helpers/point_series/_get_series.ts ***!
  \***********************************************************/
/*! exports provided: getSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeries", function() { return getSeries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_get_point */ "./public/vislib/helpers/point_series/_get_point.ts");
/* harmony import */ var _add_to_siri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_add_to_siri */ "./public/vislib/helpers/point_series/_add_to_siri.ts");
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




function getSeries(table, chart) {
  const aspects = chart.aspects;
  const xAspect = aspects.x[0];
  const yAspect = aspects.y[0];
  const zAspect = aspects.z && aspects.z[0];
  const multiY = Array.isArray(aspects.y) && aspects.y.length > 1;
  const partGetPoint = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["partial"])(_get_point__WEBPACK_IMPORTED_MODULE_1__["getPoint"], table, xAspect, aspects.series);
  const seriesMap = new Map();
  table.rows.forEach((row, rowIndex) => {
    if (!multiY) {
      const point = partGetPoint(row, rowIndex, yAspect, zAspect);
      if (point) {
        const id = `${point.series}-${yAspect.accessor}`;
        point.seriesId = id;
        Object(_add_to_siri__WEBPACK_IMPORTED_MODULE_2__["addToSiri"])(seriesMap, point, id, point.series, yAspect.format, zAspect && zAspect.format, zAspect && zAspect.title);
      }
      return;
    }
    aspects.y.forEach(function (y) {
      const point = partGetPoint(row, rowIndex, y, zAspect);
      if (!point) {
        return;
      }

      // use the point's y-axis as it's series by default,
      // but augment that with series aspect if it's actually
      // available
      let seriesId = y.accessor;
      let seriesLabel = y.title;
      if (aspects.series) {
        const prefix = point.series ? point.series + ': ' : '';
        seriesId = prefix + seriesId;
        seriesLabel = prefix + seriesLabel;
      }
      point.seriesId = seriesId;
      Object(_add_to_siri__WEBPACK_IMPORTED_MODULE_2__["addToSiri"])(seriesMap, point, seriesId, seriesLabel, y.format, zAspect && zAspect.format, zAspect && zAspect.title);
    });
  });
  return [...seriesMap.values()];
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_init_x_axis.ts":
/*!************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_init_x_axis.ts ***!
  \************************************************************/
/*! exports provided: initXAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initXAxis", function() { return initXAxis; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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



function initXAxis(chart, table) {
  const {
    format,
    title,
    params,
    accessor
  } = chart.aspects.x[0];
  chart.xAxisOrderedValues = accessor === -1 && 'defaultValue' in params ? [params.defaultValue] : Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(table.rows.map(r => r[accessor]));
  chart.xAxisFormat = format;
  chart.xAxisLabel = title;
  if ('interval' in params) {
    const {
      interval
    } = params;
    if ('date' in params) {
      const {
        intervalESUnit,
        intervalESValue
      } = params;
      chart.ordered = {
        interval: moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(interval),
        intervalESUnit,
        intervalESValue
      };
    } else {
      chart.ordered = {
        interval: params.interval
      };
    }
  }
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_init_y_axis.ts":
/*!************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_init_y_axis.ts ***!
  \************************************************************/
/*! exports provided: initYAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initYAxis", function() { return initYAxis; });
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

function initYAxis(chart) {
  const y = chart.aspects.y;
  if (Array.isArray(y)) {
    // TODO: vis option should allow choosing this format
    chart.yAxisFormat = y[0].format;
    chart.yAxisLabel = y.length > 1 ? '' : y[0].title;
  }
  const z = chart.aspects.series;
  if (z) {
    chart.zAxisFormat = z[0].format;
    chart.zAxisLabel = '';
  }
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/_ordered_date_axis.ts":
/*!******************************************************************!*\
  !*** ./public/vislib/helpers/point_series/_ordered_date_axis.ts ***!
  \******************************************************************/
/*! exports provided: orderedDateAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderedDateAxis", function() { return orderedDateAxis; });
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

function orderedDateAxis(chart) {
  const x = chart.aspects.x[0];
  const bounds = 'bounds' in x.params ? x.params.bounds : undefined;
  chart.ordered.date = true;
  if (bounds) {
    chart.ordered.min = typeof bounds.min === 'string' ? Date.parse(bounds.min) : bounds.min;
    chart.ordered.max = typeof bounds.max === 'string' ? Date.parse(bounds.max) : bounds.max;
  } else {
    chart.ordered.endzones = false;
  }
}

/***/ }),

/***/ "./public/vislib/helpers/point_series/index.ts":
/*!*****************************************************!*\
  !*** ./public/vislib/helpers/point_series/index.ts ***!
  \*****************************************************/
/*! exports provided: buildPointSeriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_series */ "./public/vislib/helpers/point_series/point_series.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildPointSeriesData", function() { return _point_series__WEBPACK_IMPORTED_MODULE_0__["buildPointSeriesData"]; });

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

/***/ "./public/vislib/helpers/point_series/point_series.ts":
/*!************************************************************!*\
  !*** ./public/vislib/helpers/point_series/point_series.ts ***!
  \************************************************************/
/*! exports provided: buildPointSeriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPointSeriesData", function() { return buildPointSeriesData; });
/* harmony import */ var _get_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_get_series */ "./public/vislib/helpers/point_series/_get_series.ts");
/* harmony import */ var _get_aspects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_get_aspects */ "./public/vislib/helpers/point_series/_get_aspects.ts");
/* harmony import */ var _init_y_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_init_y_axis */ "./public/vislib/helpers/point_series/_init_y_axis.ts");
/* harmony import */ var _init_x_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_init_x_axis */ "./public/vislib/helpers/point_series/_init_x_axis.ts");
/* harmony import */ var _ordered_date_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_ordered_date_axis */ "./public/vislib/helpers/point_series/_ordered_date_axis.ts");
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






const buildPointSeriesData = (table, dimensions) => {
  const chart = {
    aspects: Object(_get_aspects__WEBPACK_IMPORTED_MODULE_1__["getAspects"])(table, dimensions)
  };
  Object(_init_x_axis__WEBPACK_IMPORTED_MODULE_3__["initXAxis"])(chart, table);
  Object(_init_y_axis__WEBPACK_IMPORTED_MODULE_2__["initYAxis"])(chart);
  if ('date' in chart.aspects.x[0].params) {
    // initXAxis will turn `chart` into an `OrderedChart if it is a date axis`
    Object(_ordered_date_axis__WEBPACK_IMPORTED_MODULE_4__["orderedDateAxis"])(chart);
  }
  chart.series = Object(_get_series__WEBPACK_IMPORTED_MODULE_0__["getSeries"])(table, chart);

  // @ts-expect-error
  delete chart.aspects;
  return chart;
};

/***/ }),

/***/ "./public/vislib/response_handler.js":
/*!*******************************************!*\
  !*** ./public/vislib/response_handler.js ***!
  \*******************************************/
/*! exports provided: vislibSeriesResponseHandler, vislibSlicesResponseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibSeriesResponseHandler", function() { return vislibSeriesResponseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibSlicesResponseHandler", function() { return vislibSlicesResponseHandler; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./public/vislib/helpers/index.ts");
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



function tableResponseHandler(table, dimensions) {
  const converted = {
    tables: []
  };
  const split = dimensions.splitColumn || dimensions.splitRow;
  if (split) {
    converted.direction = dimensions.splitRow ? 'row' : 'column';
    const splitColumnIndex = split[0].accessor;
    const splitColumnFormatter = Object(_services__WEBPACK_IMPORTED_MODULE_0__["getFormatService"])().deserialize(split[0].format);
    const splitColumn = table.columns[splitColumnIndex];
    const splitMap = {};
    let splitIndex = 0;
    table.rows.forEach((row, rowIndex) => {
      const splitValue = row[splitColumn.id];
      if (!splitMap.hasOwnProperty(splitValue)) {
        splitMap[splitValue] = splitIndex++;
        const tableGroup = {
          $parent: converted,
          title: `${splitColumnFormatter.convert(splitValue)}: ${splitColumn.name}`,
          name: splitColumn.name,
          key: splitValue,
          column: splitColumnIndex,
          row: rowIndex,
          table,
          tables: []
        };
        tableGroup.tables.push({
          $parent: tableGroup,
          columns: table.columns,
          rows: []
        });
        converted.tables.push(tableGroup);
      }
      const tableIndex = splitMap[splitValue];
      converted.tables[tableIndex].tables[0].rows.push(row);
    });
  } else {
    converted.tables.push({
      columns: table.columns,
      rows: table.rows
    });
  }
  return converted;
}
function convertTableGroup(tableGroup, convertTable) {
  const tables = tableGroup.tables;
  if (!tables || !tables.length) return;
  const firstChild = tables[0];
  if (firstChild.columns) {
    const chart = convertTable(firstChild);
    // if chart is within a split, assign group title to its label
    if (tableGroup.$parent) {
      chart.label = tableGroup.title;
    }
    return chart;
  }
  const out = {};
  let outList;
  tables.forEach(function (table) {
    if (!outList) {
      const direction = tableGroup.direction === 'row' ? 'rows' : 'columns';
      outList = out[direction] = [];
    }
    let output;
    if (output = convertTableGroup(table, convertTable)) {
      outList.push(output);
    }
  });
  return out;
}
function handlerFunction(convertTable) {
  return function (response, dimensions) {
    const tableGroup = tableResponseHandler(response, dimensions);
    let converted = convertTableGroup(tableGroup, table => {
      return convertTable(table, dimensions);
    });
    if (!converted) {
      // mimic a row of tables that doesn't have any tables
      // https://github.com/opensearch-project/OpenSearch-Dashboards/blob/7bfb68cd24ed42b1b257682f93c50cd8d73e2520/src/opensearch-dashboards/components/vislib/components/zero_injection/inject_zeros.js#L32
      converted = {
        rows: []
      };
    }
    converted.hits = response.rows.length;
    return converted;
  };
}
const vislibSeriesResponseHandler = handlerFunction(_helpers__WEBPACK_IMPORTED_MODULE_1__["buildPointSeriesData"]);
const vislibSlicesResponseHandler = handlerFunction(_helpers__WEBPACK_IMPORTED_MODULE_1__["buildHierarchicalData"]);

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__osdSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticEui;

/***/ }),

/***/ "@elastic/eui/lib/services":
/*!**********************************************************!*\
  !*** external "__osdSharedDeps__.ElasticEuiLibServices" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticEuiLibServices;

/***/ }),

/***/ "@elastic/numeral":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.ElasticNumeral" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticNumeral;

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

/***/ "plugin/expressions/public":
/*!**************************************************!*\
  !*** @osd/bundleRef "plugin/expressions/public" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/expressions/public');
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

/***/ "react-dom/server":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.ReactDomServer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDomServer;

/***/ })

/******/ });
//# sourceMappingURL=visTypeVislib.plugin.js.map