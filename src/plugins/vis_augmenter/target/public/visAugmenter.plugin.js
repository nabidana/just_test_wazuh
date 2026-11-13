/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages/osd-optimizer/target/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v7dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/view_events_flyout/components/styles.scss?v7dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v7light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/view_events_flyout/components/styles.scss?v7light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v8dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/view_events_flyout/components/styles.scss?v8dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v8light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/view_events_flyout/components/styles.scss?v8light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v9dark":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/view_events_flyout/components/styles.scss?v9dark ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v9light":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/view_events_flyout/components/styles.scss?v9light ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n", "",{"version":3,"sources":["webpack://./public/view_events_flyout/components/styles.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,eAAe,CAAC,8BAA8B,WAAW,CAAC,mCAAmC,WAAW,CAAC,oCAAoC,eAAe,CAAC,eAAe,CAAC,qBAAqB,CAAC,6BAA6B,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,kCAAkC,oBAAoB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,aAAa,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,kCAAkC,CAAC,qDAAqD,UAAU,CAAC,WAAW,CAAC,2DAA2D,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,uHAAuH,8BAA8B,CAAC,wCAAwC,YAAY,CAAC,oEAAoE,kBAAkB,CAAC,eAAe,iBAAiB,CAAC,yBAAyB,WAAW,CAAC,uBAAuB,WAAW,CAAC,oBAAoB,iBAAiB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.view-events-flyout__baseVis{min-height:25vh}.view-events-flyout__eventVis{height:55px}.view-events-flyout__timelinePanel{height:90px}.view-events-flyout__visDescription{min-width:200px;max-width:200px;word-break:break-word}.view-events-flyout__content{position:absolute;top:110px;right:12px;bottom:12px;left:12px}.view-events-flyout__contentPanel{scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;overflow:auto;overflow-x:hidden;overflow-y:hidden;scrollbar-gutter:stable both-edges}.view-events-flyout__contentPanel::-webkit-scrollbar{width:16px;height:16px}.view-events-flyout__contentPanel::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.view-events-flyout__contentPanel::-webkit-scrollbar-corner,.view-events-flyout__contentPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.view-events-flyout__contentPanel:focus{outline:none}.view-events-flyout__contentPanel[tabindex=\"0\"]:focus:focus-visible{outline-style:auto}.show-y-scroll{overflow-y:scroll}.date-range-panel-height{height:45px}.timeline-panel-height{height:90px}.error-icon-padding{margin-right:-8px}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visAugmenter!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visAugmenter!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visAugmenter']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visAugmenter_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visAugmenter!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visAugmenter!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visAugmenter_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visAugmenter_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visAugmenter/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_augmenter/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/augment_vis_saved_object_attributes.ts":
/*!*******************************************************!*\
  !*** ./common/augment_vis_saved_object_attributes.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: APP_PATH, APP_API, PLUGIN_AUGMENTATION_ENABLE_SETTING, PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_PATH", function() { return APP_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_API", function() { return APP_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_AUGMENTATION_ENABLE_SETTING", function() { return PLUGIN_AUGMENTATION_ENABLE_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING", function() { return PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const APP_PATH = {
  STATS: '/stats'
};
const APP_API = '/api/vis_augmenter';
const PLUGIN_AUGMENTATION_ENABLE_SETTING = 'visualization:enablePluginAugmentation';
const PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING = 'visualization:enablePluginAugmentation.maxPluginObjects';

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: APP_PATH, APP_API, PLUGIN_AUGMENTATION_ENABLE_SETTING, PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING, AugmentVisSavedObjectAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./common/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_PATH", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["APP_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_API", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["APP_API"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_AUGMENTATION_ENABLE_SETTING", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["PLUGIN_AUGMENTATION_ENABLE_SETTING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING"]; });

/* harmony import */ var _augment_vis_saved_object_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./augment_vis_saved_object_attributes */ "./common/augment_vis_saved_object_attributes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AugmentVisSavedObjectAttributes", function() { return _augment_vis_saved_object_attributes__WEBPACK_IMPORTED_MODULE_1__["AugmentVisSavedObjectAttributes"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/actions/index.ts":
/*!*********************************!*\
  !*** ./public/actions/index.ts ***!
  \*********************************/
/*! exports provided: PLUGIN_RESOURCE_DELETE_ACTION, PluginResourceDeleteAction, SAVED_OBJECT_DELETE_ACTION, SavedObjectDeleteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_resource_delete_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin_resource_delete_action */ "./public/actions/plugin_resource_delete_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_ACTION", function() { return _plugin_resource_delete_action__WEBPACK_IMPORTED_MODULE_0__["PLUGIN_RESOURCE_DELETE_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginResourceDeleteAction", function() { return _plugin_resource_delete_action__WEBPACK_IMPORTED_MODULE_0__["PluginResourceDeleteAction"]; });

/* harmony import */ var _saved_object_delete_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved_object_delete_action */ "./public/actions/saved_object_delete_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_ACTION", function() { return _saved_object_delete_action__WEBPACK_IMPORTED_MODULE_1__["SAVED_OBJECT_DELETE_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectDeleteAction", function() { return _saved_object_delete_action__WEBPACK_IMPORTED_MODULE_1__["SavedObjectDeleteAction"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/actions/plugin_resource_delete_action.ts":
/*!*********************************************************!*\
  !*** ./public/actions/plugin_resource_delete_action.ts ***!
  \*********************************************************/
/*! exports provided: PLUGIN_RESOURCE_DELETE_ACTION, PluginResourceDeleteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_ACTION", function() { return PLUGIN_RESOURCE_DELETE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginResourceDeleteAction", function() { return PluginResourceDeleteAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./public/utils/index.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const PLUGIN_RESOURCE_DELETE_ACTION = 'PLUGIN_RESOURCE_DELETE_ACTION';
class PluginResourceDeleteAction {
  constructor() {
    _defineProperty(this, "type", PLUGIN_RESOURCE_DELETE_ACTION);
    _defineProperty(this, "id", PLUGIN_RESOURCE_DELETE_ACTION);
    _defineProperty(this, "order", 1);
  }
  getIconType() {
    return `trash`;
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visAugmenter.actions.deleteSavedObject.name', {
      defaultMessage: 'Clean up all augment-vis saved objects associated to the deleted visualization'
    });
  }
  async isCompatible({
    savedObjs,
    visLayers
  }) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(savedObjs) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(visLayers);
  }

  /**
   * If we have just collected all of the saved objects and generated vis layers,
   * sweep through them all and if any of the resources are deleted, delete those
   * corresponding saved objects
   */
  async execute({
    savedObjs,
    visLayers
  }) {
    if (!(await this.isCompatible({
      savedObjs,
      visLayers
    }))) {
      throw new _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__["IncompatibleActionError"]();
    }
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cleanupStaleObjects"])(savedObjs, visLayers, Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedAugmentVisLoader"])());
  }
}

/***/ }),

/***/ "./public/actions/saved_object_delete_action.ts":
/*!******************************************************!*\
  !*** ./public/actions/saved_object_delete_action.ts ***!
  \******************************************************/
/*! exports provided: SAVED_OBJECT_DELETE_ACTION, SavedObjectDeleteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_ACTION", function() { return SAVED_OBJECT_DELETE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectDeleteAction", function() { return SavedObjectDeleteAction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/utils/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const SAVED_OBJECT_DELETE_ACTION = 'SAVED_OBJECT_DELETE_ACTION';
class SavedObjectDeleteAction {
  constructor() {
    _defineProperty(this, "type", SAVED_OBJECT_DELETE_ACTION);
    _defineProperty(this, "id", SAVED_OBJECT_DELETE_ACTION);
    _defineProperty(this, "order", 1);
  }
  getIconType() {
    return `trash`;
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visAugmenter.actions.deleteSavedObject.name', {
      defaultMessage: 'Clean up all augment-vis saved objects associated to the deleted visualization'
    });
  }
  async isCompatible({
    type,
    savedObjectId
  }) {
    return type === 'visualization' && !!savedObjectId;
  }

  /**
   * If deletion of a vis saved object has been triggered, we want to clean up
   * any augment-vis saved objects that have a reference to this vis since it
   * is now stale.
   * TODO: this should be automatically handled by the saved objects plugin, instead
   * of this specific scenario in the vis_augmenter plugin. Tracking issue:
   * https://github.com/opensearch-project/OpenSearch-Dashboards/issues/4499
   */
  async execute({
    type,
    savedObjectId
  }) {
    if (!(await this.isCompatible({
      type,
      savedObjectId
    }))) {
      throw new _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__["IncompatibleActionError"]();
    }
    try {
      const loader = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getSavedAugmentVisLoader"])();
      const augmentVisObjs = await Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAugmentVisSavedObjs"])(savedObjectId, loader);
      const augmentVisIdsToDelete = augmentVisObjs.map(augmentVisObj => augmentVisObj.id);
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(augmentVisIdsToDelete)) loader.delete(augmentVisIdsToDelete);
      // silently fail. this is because this is doing extra cleanup on objects unrelated
      // to the user flow so we dont want to add confusing errors on UI.
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}

/***/ }),

/***/ "./public/constants.ts":
/*!*****************************!*\
  !*** ./public/constants.ts ***!
  \*****************************/
/*! exports provided: VIS_LAYER_COLUMN_TYPE, EVENT_COLOR, HOVER_PARAM, EVENT_MARK_SIZE, EVENT_MARK_SIZE_ENLARGED, EVENT_MARK_SHAPE, EVENT_TIMELINE_HEIGHT, EVENT_TOOLTIP_CENTER_ON_MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIS_LAYER_COLUMN_TYPE", function() { return VIS_LAYER_COLUMN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_COLOR", function() { return EVENT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOVER_PARAM", function() { return HOVER_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SIZE", function() { return EVENT_MARK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SIZE_ENLARGED", function() { return EVENT_MARK_SIZE_ENLARGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SHAPE", function() { return EVENT_MARK_SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TIMELINE_HEIGHT", function() { return EVENT_TIMELINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TOOLTIP_CENTER_ON_MARK", function() { return EVENT_TOOLTIP_CENTER_ON_MARK; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const VIS_LAYER_COLUMN_TYPE = 'vis_layer';
const EVENT_COLOR = '#D36086'; // This is the value of ouiColorVis2 - we need the raw value so that vega can understand it
const HOVER_PARAM = 'HOVER';
const EVENT_MARK_SIZE = 40;
const EVENT_MARK_SIZE_ENLARGED = 80;
const EVENT_MARK_SHAPE = 'triangle-up';
const EVENT_TIMELINE_HEIGHT = 25;
const EVENT_TOOLTIP_CENTER_ON_MARK = 5;

/***/ }),

/***/ "./public/expressions/index.ts":
/*!*************************************!*\
  !*** ./public/expressions/index.ts ***!
  \*************************************/
/*! exports provided: visLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./public/expressions/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visLayers", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["visLayers"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/expressions/types.ts":
/*!*************************************!*\
  !*** ./public/expressions/types.ts ***!
  \*************************************/
/*! exports provided: visLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visLayers", function() { return visLayers; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const name = 'vis_layers';
// Setting default empty arrays for null & undefined edge cases
const visLayers = {
  name,
  from: {
    null: () => {
      return {
        type: name,
        layers: []
      };
    },
    undefined: () => {
      return {
        type: name,
        layers: []
      };
    }
  }
};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, VisAugmenterSetup, VisAugmenterStart, VisLayer, VisLayers, VisLayerTypes, VisLayerErrorTypes, VisLayerError, PluginResource, PointInTimeEvent, PointInTimeEventsVisLayer, isPointInTimeEventsVisLayer, isVisLayerWithError, VisAugmenterEmbeddableConfig, VisFlyoutContext, AugmentVisContext, visLayers, isEligibleForVisLayers, getAugmentVisSavedObjs, buildPipelineFromAugmentVisSavedObjs, getAnyErrors, cleanupStaleObjects, VIS_LAYER_COLUMN_TYPE, EVENT_COLOR, HOVER_PARAM, EVENT_MARK_SIZE, EVENT_MARK_SIZE_ENLARGED, EVENT_MARK_SHAPE, EVENT_TIMELINE_HEIGHT, EVENT_TOOLTIP_CENTER_ON_MARK, enableVisLayersInSpecConfig, addVisEventSignalsToSpecConfig, getXAxisId, isVisLayerColumn, generateVisLayerFilterString, generateVisLayerTooltipFields, addMissingRowsToTableBounds, addPointInTimeEventsLayersToTable, addPointInTimeEventsLayersToSpec, calculateYAxisPadding, augmentEventChartSpec, SavedObjectLoaderAugmentVis, createSavedAugmentVisLoader, createAugmentVisSavedObject, generateAugmentVisSavedObject, getMockAugmentVisSavedObjectClient, TEST_COLUMNS_NO_VIS_LAYERS, TEST_COLUMNS_NO_VIS_LAYERS_DIRTY, TEST_COLUMNS_SINGLE_VIS_LAYER, TEST_COLUMNS_MULTIPLE_VIS_LAYERS, TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS, TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER, TEST_DATATABLE_ONLY_VIS_LAYERS, TEST_DATATABLE_NO_VIS_LAYERS, TEST_DATATABLE_NO_VIS_LAYERS_DIRTY, TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY, TEST_DATATABLE_SINGLE_VIS_LAYER, TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS, TEST_DATATABLE_MULTIPLE_VIS_LAYERS, TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY, TEST_SPEC_NO_VIS_LAYERS, TEST_SPEC_SINGLE_VIS_LAYER, TEST_SPEC_MULTIPLE_VIS_LAYERS, TEST_DIMENSIONS, TEST_DIMENSIONS_SINGLE_ROW, TEST_DIMENSIONS_INVALID_BOUNDS, TEST_VIS_LAYERS_SINGLE, TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS, TEST_VIS_LAYERS_SINGLE_ON_BOUNDS, TEST_VIS_LAYERS_MULTIPLE, TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY, TEST_RESULT_SPEC_SINGLE_VIS_LAYER, TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY, TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS, PLUGIN_RESOURCE_DELETE_TRIGGER, pluginResourceDeleteTrigger, PLUGIN_RESOURCE_DELETE_ACTION, PluginResourceDeleteAction, SAVED_OBJECT_DELETE_ACTION, SavedObjectDeleteAction, fetchVisEmbeddable, setUISettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisAugmenterSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisAugmenterSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisAugmenterStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisAugmenterStart"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLayer", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLayers", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLayerTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLayerErrorTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisLayerErrorTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisLayerError", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisLayerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginResource", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["PluginResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointInTimeEvent", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["PointInTimeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointInTimeEventsVisLayer", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["PointInTimeEventsVisLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPointInTimeEventsVisLayer", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["isPointInTimeEventsVisLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisLayerWithError", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["isVisLayerWithError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisAugmenterEmbeddableConfig", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisAugmenterEmbeddableConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisFlyoutContext", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisFlyoutContext"]; });

/* harmony import */ var _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_actions_bootstrap */ "./public/ui_actions_bootstrap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AugmentVisContext", function() { return _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_2__["AugmentVisContext"]; });

/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expressions */ "./public/expressions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visLayers", function() { return _expressions__WEBPACK_IMPORTED_MODULE_3__["visLayers"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEligibleForVisLayers", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["isEligibleForVisLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAugmentVisSavedObjs", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getAugmentVisSavedObjs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildPipelineFromAugmentVisSavedObjs", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["buildPipelineFromAugmentVisSavedObjs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnyErrors", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["getAnyErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupStaleObjects", function() { return _utils__WEBPACK_IMPORTED_MODULE_4__["cleanupStaleObjects"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./public/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIS_LAYER_COLUMN_TYPE", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["VIS_LAYER_COLUMN_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_COLOR", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOVER_PARAM", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["HOVER_PARAM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SIZE", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_MARK_SIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SIZE_ENLARGED", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_MARK_SIZE_ENLARGED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_MARK_SHAPE", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_MARK_SHAPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_TIMELINE_HEIGHT", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_TIMELINE_HEIGHT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_TOOLTIP_CENTER_ON_MARK", function() { return _constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_TOOLTIP_CENTER_ON_MARK"]; });

/* harmony import */ var _vega__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vega */ "./public/vega/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableVisLayersInSpecConfig", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["enableVisLayersInSpecConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVisEventSignalsToSpecConfig", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["addVisEventSignalsToSpecConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getXAxisId", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["getXAxisId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisLayerColumn", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["isVisLayerColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerFilterString", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["generateVisLayerFilterString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerTooltipFields", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["generateVisLayerTooltipFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMissingRowsToTableBounds", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["addMissingRowsToTableBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToTable", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["addPointInTimeEventsLayersToTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToSpec", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["addPointInTimeEventsLayersToSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateYAxisPadding", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["calculateYAxisPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "augmentEventChartSpec", function() { return _vega__WEBPACK_IMPORTED_MODULE_6__["augmentEventChartSpec"]; });

/* harmony import */ var _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saved_augment_vis */ "./public/saved_augment_vis/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectLoaderAugmentVis", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__["SavedObjectLoaderAugmentVis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedAugmentVisLoader", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__["createSavedAugmentVisLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAugmentVisSavedObject", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__["createAugmentVisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateAugmentVisSavedObject", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__["generateAugmentVisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMockAugmentVisSavedObjectClient", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_7__["getMockAugmentVisSavedObjectClient"]; });

/* harmony import */ var _test_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_constants */ "./public/test_constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_NO_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_COLUMNS_NO_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_NO_VIS_LAYERS_DIRTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_COLUMNS_NO_VIS_LAYERS_DIRTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_SINGLE_VIS_LAYER", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_COLUMNS_SINGLE_VIS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_MULTIPLE_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_COLUMNS_MULTIPLE_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_ONLY_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_ONLY_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_NO_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_NO_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_NO_VIS_LAYERS_DIRTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_NO_VIS_LAYERS_DIRTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_SINGLE_VIS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_MULTIPLE_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_MULTIPLE_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_NO_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_SPEC_NO_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_SINGLE_VIS_LAYER", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_SPEC_SINGLE_VIS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_MULTIPLE_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_SPEC_MULTIPLE_VIS_LAYERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DIMENSIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS_SINGLE_ROW", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DIMENSIONS_SINGLE_ROW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS_INVALID_BOUNDS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_DIMENSIONS_INVALID_BOUNDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_VIS_LAYERS_SINGLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE_ON_BOUNDS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_VIS_LAYERS_SINGLE_ON_BOUNDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_MULTIPLE", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_VIS_LAYERS_MULTIPLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_SINGLE_VIS_LAYER", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_RESULT_SPEC_SINGLE_VIS_LAYER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS", function() { return _test_constants__WEBPACK_IMPORTED_MODULE_8__["TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS"]; });

/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_9__["PLUGIN_RESOURCE_DELETE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluginResourceDeleteTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_9__["pluginResourceDeleteTrigger"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./public/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_ACTION", function() { return _actions__WEBPACK_IMPORTED_MODULE_10__["PLUGIN_RESOURCE_DELETE_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluginResourceDeleteAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_10__["PluginResourceDeleteAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_ACTION", function() { return _actions__WEBPACK_IMPORTED_MODULE_10__["SAVED_OBJECT_DELETE_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectDeleteAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_10__["SavedObjectDeleteAction"]; });

/* harmony import */ var _view_events_flyout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view_events_flyout */ "./public/view_events_flyout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchVisEmbeddable", function() { return _view_events_flyout__WEBPACK_IMPORTED_MODULE_11__["fetchVisEmbeddable"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["setUISettings"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["VisAugmenterPlugin"](initializerContext);
}












 // Needed for plugin tests related to the CRUD saved object functions

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: VisAugmenterPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisAugmenterPlugin", function() { return VisAugmenterPlugin; });
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions */ "./public/expressions/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _saved_augment_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved_augment_vis */ "./public/saved_augment_vis/index.ts");
/* harmony import */ var _view_events_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_events_flyout */ "./public/view_events_flyout/index.ts");
/* harmony import */ var _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_actions_bootstrap */ "./public/ui_actions_bootstrap.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








// eslint-disable-next-line @typescript-eslint/no-empty-interface

class VisAugmenterPlugin {
  constructor(initializerContext) {}
  setup(core, {
    expressions
  }) {
    expressions.registerType(_expressions__WEBPACK_IMPORTED_MODULE_0__["visLayers"]);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setUISettings"])(core.uiSettings);
    return {};
  }
  start(core, {
    uiActions,
    embeddable,
    data,
    visualizations
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setUiActions"])(uiActions);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setEmbeddable"])(embeddable);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setQueryService"])(data.query);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setVisualizations"])(visualizations);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setCore"])(core);
    Object(_view_events_flyout__WEBPACK_IMPORTED_MODULE_3__["setFlyoutState"])(_view_events_flyout__WEBPACK_IMPORTED_MODULE_3__["VIEW_EVENTS_FLYOUT_STATE"].CLOSED);
    const savedAugmentVisLoader = Object(_saved_augment_vis__WEBPACK_IMPORTED_MODULE_2__["createSavedAugmentVisLoader"])({
      savedObjectsClient: core.savedObjects.client,
      indexPatterns: data.indexPatterns,
      search: data.search,
      chrome: core.chrome,
      overlays: core.overlays
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setSavedAugmentVisLoader"])(savedAugmentVisLoader);

    // sets up the context mappings and registers any triggers/actions for the plugin
    Object(_ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_4__["bootstrapUiActions"])(uiActions);
    return {
      savedAugmentVisLoader
    };
  }
  stop() {}
}

/***/ }),

/***/ "./public/saved_augment_vis/_saved_augment_vis.ts":
/*!********************************************************!*\
  !*** ./public/saved_augment_vis/_saved_augment_vis.ts ***!
  \********************************************************/
/*! exports provided: createSavedAugmentVisClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedAugmentVisClass", function() { return createSavedAugmentVisClass; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saved_augment_vis_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved_augment_vis_references */ "./public/saved_augment_vis/saved_augment_vis_references.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @name SavedAugmentVis
 *
 * @extends SavedObject.
 */



const name = 'augment-vis';
function createSavedAugmentVisClass(services) {
  const SavedObjectClass = Object(_saved_objects_public__WEBPACK_IMPORTED_MODULE_1__["createSavedObjectClass"])(services);
  class SavedAugmentVis extends SavedObjectClass {
    constructor(opts = {}) {
      // The default delete() fn from the saved object loader will only
      // pass a string ID. To handle that case here, we embed it within
      // an opts object.
      if (typeof opts !== 'object') {
        opts = {
          id: opts
        };
      }
      super({
        type: SavedAugmentVis.type,
        mapping: SavedAugmentVis.mapping,
        extractReferences: _saved_augment_vis_references__WEBPACK_IMPORTED_MODULE_2__["extractReferences"],
        injectReferences: _saved_augment_vis_references__WEBPACK_IMPORTED_MODULE_2__["injectReferences"],
        id: opts.id || '',
        defaults: {
          description: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, 'description', ''),
          originPlugin: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, 'originPlugin', ''),
          pluginResource: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, 'pluginResource', {}),
          visId: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, 'visId', ''),
          visLayerExpressionFn: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(opts, 'visLayerExpressionFn', {}),
          version: 1
        }
      });
      this.showInRecentlyAccessed = false;
    }
  }
  _defineProperty(SavedAugmentVis, "type", name);
  _defineProperty(SavedAugmentVis, "mapping", {
    title: 'text',
    description: 'text',
    originPlugin: 'text',
    pluginResource: 'object',
    visLayerExpressionFn: 'object',
    visId: 'keyword,',
    version: 'integer'
  });
  return SavedAugmentVis;
}

/***/ }),

/***/ "./public/saved_augment_vis/index.ts":
/*!*******************************************!*\
  !*** ./public/saved_augment_vis/index.ts ***!
  \*******************************************/
/*! exports provided: SavedObjectLoaderAugmentVis, createSavedAugmentVisLoader, createAugmentVisSavedObject, generateAugmentVisSavedObject, getMockAugmentVisSavedObjectClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_augment_vis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_augment_vis */ "./public/saved_augment_vis/saved_augment_vis.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectLoaderAugmentVis", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_0__["SavedObjectLoaderAugmentVis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedAugmentVisLoader", function() { return _saved_augment_vis__WEBPACK_IMPORTED_MODULE_0__["createSavedAugmentVisLoader"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./public/saved_augment_vis/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAugmentVisSavedObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["createAugmentVisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateAugmentVisSavedObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["generateAugmentVisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMockAugmentVisSavedObjectClient", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["getMockAugmentVisSavedObjectClient"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/saved_augment_vis/types.ts");
/* empty/unused harmony star reexport *//*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





/***/ }),

/***/ "./public/saved_augment_vis/saved_augment_vis.ts":
/*!*******************************************************!*\
  !*** ./public/saved_augment_vis/saved_augment_vis.ts ***!
  \*******************************************************/
/*! exports provided: SavedObjectLoaderAugmentVis, createSavedAugmentVisLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectLoaderAugmentVis", function() { return SavedObjectLoaderAugmentVis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedAugmentVisLoader", function() { return createSavedAugmentVisLoader; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saved_augment_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_saved_augment_vis */ "./public/saved_augment_vis/_saved_augment_vis.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./public/types.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








// eslint-disable-next-line @typescript-eslint/no-empty-interface

class SavedObjectLoaderAugmentVis extends _saved_objects_public__WEBPACK_IMPORTED_MODULE_1__["SavedObjectLoader"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "config", Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUISettings"])());
    _defineProperty(this, "mapHitSource", (source, id) => {
      source.id = id;
      source.visId = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(source, 'visReference.id', '');
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(source.visReference)) {
        source.error = 'visReference is missing in augment-vis saved object';
        return source;
      }
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(source.visLayerExpressionFn)) {
        source.error = 'visLayerExpressionFn is missing in augment-vis saved object';
        return source;
      }
      if (!(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(source, 'visLayerExpressionFn.type', '') in _types__WEBPACK_IMPORTED_MODULE_3__["VisLayerTypes"])) {
        source.error = 'Unknown VisLayer expression function type';
        return source;
      }
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(source, 'originPlugin', undefined) === undefined) {
        source.error = 'originPlugin is missing in augment-vis saved object';
        return source;
      }
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(source, 'pluginResource.type', undefined) === undefined) {
        source.error = 'pluginResource.type is missing in augment-vis saved object';
        return source;
      }
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(source, 'pluginResource.id', undefined) === undefined) {
        source.error = 'pluginResource.id is missing in augment-vis saved object';
        return source;
      }
      return source;
    });
  }
  /**
   * Updates hit.attributes to contain an id related to the referenced visualization
   * (visId) and returns the updated attributes object.
   * @param hit
   * @returns {hit.attributes} The modified hit.attributes object, with an id and url field.
   */
  mapSavedObjectApiHits(hit) {
    // For now we are assuming only one vis reference per saved object.
    // If we change to multiple, we will need to dynamically handle that
    const visReference = hit.references[0];
    return this.mapHitSource({
      ...hit.attributes,
      visReference
    }, hit.id);
  }

  /**
   * Retrieve a saved object by id or create new one.
   * Returns a promise that completes when the object finishes
   * initializing. Throws exception when the setting is set to false.
   * @param opts
   * @returns {Promise<SavedObject>}
   */
  get(opts) {
    this.isAugmentationEnabled();
    return super.get(opts);
  }

  /**
   * TODO: Rather than use a hardcoded limit, implement pagination. See
   * https://github.com/elastic/kibana/issues/8044 for reference.
   *
   * @param search
   * @param size
   * @param fields
   * @param hasReference Optional field to specify a reference
   * @param searchFields Optional field to specify the search fields in the query
   * @returns {Promise}
   */
  findAll(search = '', size = 100, fields, hasReference, searchFields) {
    this.isAugmentationEnabled();
    return super.findAll(search, size, fields, hasReference, searchFields);
  }
  find(search = '', size = 100) {
    this.isAugmentationEnabled();
    return super.find(search, size);
  }
  isAugmentationEnabled() {
    const isAugmentationEnabled = this.config.get(_common__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_AUGMENTATION_ENABLE_SETTING"], true);
    if (!isAugmentationEnabled) {
      throw new Error('Visualization augmentation is disabled, please enable visualization:enablePluginAugmentation.');
    }
  }
}
function createSavedAugmentVisLoader(services) {
  const {
    savedObjectsClient
  } = services;
  const SavedAugmentVis = Object(_saved_augment_vis__WEBPACK_IMPORTED_MODULE_2__["createSavedAugmentVisClass"])(services);
  return new SavedObjectLoaderAugmentVis(SavedAugmentVis, savedObjectsClient);
}

/***/ }),

/***/ "./public/saved_augment_vis/saved_augment_vis_references.ts":
/*!******************************************************************!*\
  !*** ./public/saved_augment_vis/saved_augment_vis_references.ts ***!
  \******************************************************************/
/*! exports provided: VIS_REFERENCE_NAME, extractReferences, injectReferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIS_REFERENCE_NAME", function() { return VIS_REFERENCE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractReferences", function() { return extractReferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReferences", function() { return injectReferences; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Note that references aren't stored in the object's client-side interface (AugmentVisSavedObject).
 * Rather, just the ID/type is. The concept of references is a server-side definition used to define
 * relationships between saved objects. They are visible in the saved objs management page or
 * when making direct saved obj API calls.
 *
 * So, we need helper fns to construct & deconstruct references when creating and reading the
 * indexed/stored saved objects, respectively.
 */

/**
 * Using a constant value for the visualization name to easily extact/inject
 * the reference. Setting as "_0" which could be expanded and incremented upon
 * in the future if we decide to persist multiple visualizations per
 * AugmentVisSavedObject.
 */
const VIS_REFERENCE_NAME = 'visualization_0';

/**
 * Used during creation. Converting from AugmentVisSavedObject to the actual indexed saved object
 * with references.
 */
function extractReferences({
  attributes,
  references = []
}) {
  const updatedAttributes = {
    ...attributes
  };
  const updatedReferences = [...references];

  // Extract saved object
  if (updatedAttributes.visId) {
    updatedReferences.push({
      name: VIS_REFERENCE_NAME,
      type: 'visualization',
      id: String(updatedAttributes.visId)
    });
    delete updatedAttributes.visId;
    updatedAttributes.visName = VIS_REFERENCE_NAME;
  }
  return {
    references: updatedReferences,
    attributes: updatedAttributes
  };
}

/**
 * Used during reading. Converting from the indexed saved object with references
 * to a AugmentVisSavedObject
 */
function injectReferences(savedObject, references) {
  if (savedObject.visName) {
    const visReference = references.find(reference => reference.name === savedObject.visName);
    if (!visReference) {
      throw new Error(`Could not find visualization reference "${savedObject.visName}"`);
    }
    savedObject.visId = visReference.id;
    delete savedObject.visName;
  }
}

/***/ }),

/***/ "./public/saved_augment_vis/types.ts":
/*!*******************************************!*\
  !*** ./public/saved_augment_vis/types.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/saved_augment_vis/utils/helpers.ts":
/*!***************************************************!*\
  !*** ./public/saved_augment_vis/utils/helpers.ts ***!
  \***************************************************/
/*! exports provided: createAugmentVisSavedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAugmentVisSavedObject", function() { return createAugmentVisSavedObject; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/**
 * Create an augment vis saved object given an object that
 * implements the ISavedAugmentVis interface
 */
const createAugmentVisSavedObject = async (AugmentVis, savedObjLoader, uiSettings) => {
  // Using optional services provided, or the built-in services from this plugin
  const loader = savedObjLoader !== undefined ? savedObjLoader : Object(_services__WEBPACK_IMPORTED_MODULE_2__["getSavedAugmentVisLoader"])();
  const config = uiSettings !== undefined ? uiSettings : Object(_services__WEBPACK_IMPORTED_MODULE_2__["getUISettings"])();
  const isAugmentationEnabled = config.get(_common_constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_AUGMENTATION_ENABLE_SETTING"]);
  if (!isAugmentationEnabled) {
    throw new Error('Visualization augmentation is disabled, please enable visualization:enablePluginAugmentation.');
  }
  const maxAssociatedCount = config.get(_common_constants__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_AUGMENTATION_MAX_OBJECTS_SETTING"]);
  await loader.findAll('', 100, [], {
    type: 'visualization',
    id: AugmentVis.visId
  }).then(async resp => {
    if (resp !== undefined) {
      const savedObjectsForThisVisualization = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(resp, 'hits', []);
      if (maxAssociatedCount <= savedObjectsForThisVisualization.length) {
        throw new Error(`Cannot associate the plugin resource to the visualization due to the limit of the max
          amount of associated plugin resources (${maxAssociatedCount}) with
          ${savedObjectsForThisVisualization.length} associated to the visualization`);
      }
    }
  });
  return await loader.get(AugmentVis);
};

/***/ }),

/***/ "./public/saved_augment_vis/utils/index.ts":
/*!*************************************************!*\
  !*** ./public/saved_augment_vis/utils/index.ts ***!
  \*************************************************/
/*! exports provided: createAugmentVisSavedObject, generateAugmentVisSavedObject, getMockAugmentVisSavedObjectClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./public/saved_augment_vis/utils/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAugmentVisSavedObject", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["createAugmentVisSavedObject"]; });

/* harmony import */ var _test_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test_helpers */ "./public/saved_augment_vis/utils/test_helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateAugmentVisSavedObject", function() { return _test_helpers__WEBPACK_IMPORTED_MODULE_1__["generateAugmentVisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMockAugmentVisSavedObjectClient", function() { return _test_helpers__WEBPACK_IMPORTED_MODULE_1__["getMockAugmentVisSavedObjectClient"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/saved_augment_vis/utils/test_helpers.ts":
/*!********************************************************!*\
  !*** ./public/saved_augment_vis/utils/test_helpers.ts ***!
  \********************************************************/
/*! exports provided: generateAugmentVisSavedObject, getMockAugmentVisSavedObjectClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAugmentVisSavedObject", function() { return generateAugmentVisSavedObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMockAugmentVisSavedObjectClient", function() { return getMockAugmentVisSavedObjectClient; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_augment_vis_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../saved_augment_vis_references */ "./public/saved_augment_vis/saved_augment_vis_references.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const title = 'test-title';
const version = 1;
const generateAugmentVisSavedObject = (idArg, exprFnArg, visIdArg, originPluginArg, pluginResourceArg) => {
  return {
    id: idArg,
    title,
    originPlugin: originPluginArg,
    pluginResource: pluginResourceArg,
    visLayerExpressionFn: exprFnArg,
    VIS_REFERENCE_NAME: _saved_augment_vis_references__WEBPACK_IMPORTED_MODULE_1__["VIS_REFERENCE_NAME"],
    visId: visIdArg,
    version
  };
};
const getMockAugmentVisSavedObjectClient = (augmentVisSavedObjs, keepReferences = true) => {
  const savedObjs = augmentVisSavedObjs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(augmentVisSavedObjs);
  const client = {
    find: jest.fn(() => Promise.resolve({
      total: savedObjs.length,
      savedObjects: savedObjs.map(savedObj => {
        const objVisId = savedObj.visId;
        const objId = savedObj.id;
        delete savedObj.visId;
        delete savedObj.id;
        return {
          id: objId,
          attributes: savedObj,
          references: keepReferences ? [{
            name: savedObj.visName,
            type: 'visualization',
            id: objVisId
          }] : []
        };
      })
    }))
  };
  return client;
};

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getSavedAugmentVisLoader, setSavedAugmentVisLoader, getUISettings, setUISettings, getUiActions, setUiActions, getEmbeddable, setEmbeddable, getQueryService, setQueryService, getVisualizations, setVisualizations, getCore, setCore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedAugmentVisLoader", function() { return getSavedAugmentVisLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedAugmentVisLoader", function() { return setSavedAugmentVisLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISettings", function() { return getUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return setUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiActions", function() { return getUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUiActions", function() { return setUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbeddable", function() { return getEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmbeddable", function() { return setEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryService", function() { return getQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQueryService", function() { return setQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualizations", function() { return getVisualizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVisualizations", function() { return setVisualizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCore", function() { return getCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCore", function() { return setCore; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const [getSavedAugmentVisLoader, setSavedAugmentVisLoader] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('savedAugmentVisLoader');
const [getUISettings, setUISettings] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UISettings');
const [getUiActions, setUiActions] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UIActions');
const [getEmbeddable, setEmbeddable] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('embeddable');
const [getQueryService, setQueryService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Query');
const [getVisualizations, setVisualizations] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('visualizations');
const [getCore, setCore] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Core');

// This is primarily used for mocking this module and each of its fns in tests.
// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = ({
  getSavedAugmentVisLoader,
  getUISettings,
  getUiActions,
  getEmbeddable,
  getQueryService,
  getVisualizations,
  getCore
});

/***/ }),

/***/ "./public/test_constants.ts":
/*!**********************************!*\
  !*** ./public/test_constants.ts ***!
  \**********************************/
/*! exports provided: TEST_COLUMNS_NO_VIS_LAYERS, TEST_COLUMNS_NO_VIS_LAYERS_DIRTY, TEST_COLUMNS_SINGLE_VIS_LAYER, TEST_COLUMNS_MULTIPLE_VIS_LAYERS, TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS, TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER, TEST_DATATABLE_ONLY_VIS_LAYERS, TEST_DATATABLE_NO_VIS_LAYERS, TEST_DATATABLE_NO_VIS_LAYERS_DIRTY, TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY, TEST_DATATABLE_SINGLE_VIS_LAYER, TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS, TEST_DATATABLE_MULTIPLE_VIS_LAYERS, TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY, TEST_SPEC_NO_VIS_LAYERS, TEST_SPEC_SINGLE_VIS_LAYER, TEST_SPEC_MULTIPLE_VIS_LAYERS, TEST_DIMENSIONS, TEST_DIMENSIONS_SINGLE_ROW, TEST_DIMENSIONS_INVALID_BOUNDS, TEST_VIS_LAYERS_SINGLE, TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS, TEST_VIS_LAYERS_SINGLE_ON_BOUNDS, TEST_VIS_LAYERS_MULTIPLE, TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY, TEST_RESULT_SPEC_SINGLE_VIS_LAYER, TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY, TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_NO_VIS_LAYERS", function() { return TEST_COLUMNS_NO_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_NO_VIS_LAYERS_DIRTY", function() { return TEST_COLUMNS_NO_VIS_LAYERS_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_SINGLE_VIS_LAYER", function() { return TEST_COLUMNS_SINGLE_VIS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_COLUMNS_MULTIPLE_VIS_LAYERS", function() { return TEST_COLUMNS_MULTIPLE_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS", function() { return TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER", function() { return TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_ONLY_VIS_LAYERS", function() { return TEST_DATATABLE_ONLY_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_NO_VIS_LAYERS", function() { return TEST_DATATABLE_NO_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_NO_VIS_LAYERS_DIRTY", function() { return TEST_DATATABLE_NO_VIS_LAYERS_DIRTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY", function() { return TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER", function() { return TEST_DATATABLE_SINGLE_VIS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS", function() { return TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_MULTIPLE_VIS_LAYERS", function() { return TEST_DATATABLE_MULTIPLE_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY", function() { return TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_NO_VIS_LAYERS", function() { return TEST_SPEC_NO_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_SINGLE_VIS_LAYER", function() { return TEST_SPEC_SINGLE_VIS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_SPEC_MULTIPLE_VIS_LAYERS", function() { return TEST_SPEC_MULTIPLE_VIS_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS", function() { return TEST_DIMENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS_SINGLE_ROW", function() { return TEST_DIMENSIONS_SINGLE_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_DIMENSIONS_INVALID_BOUNDS", function() { return TEST_DIMENSIONS_INVALID_BOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE", function() { return TEST_VIS_LAYERS_SINGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS", function() { return TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_SINGLE_ON_BOUNDS", function() { return TEST_VIS_LAYERS_SINGLE_ON_BOUNDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_MULTIPLE", function() { return TEST_VIS_LAYERS_MULTIPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY", function() { return TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_SINGLE_VIS_LAYER", function() { return TEST_RESULT_SPEC_SINGLE_VIS_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY", function() { return TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS", function() { return TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS; });
/* harmony import */ var _vega_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vega/constants */ "./public/vega/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./public/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const TEST_X_AXIS_ID = 'test-x-axis-id';
const TEST_X_AXIS_ID_DIRTY = 'test.x.axis.id';
const TEST_VALUE_AXIS_ID = 'test-value-axis-id';
const TEST_VALUE_AXIS_ID_DIRTY = 'test.value.axis.id';
const TEST_X_AXIS_TITLE = 'time';
const TEST_VALUE_AXIS_TITLE = 'avg value';
const TEST_PLUGIN = 'test-plugin';
const TEST_PLUGIN_EVENT_TYPE = 'test-plugin-event-type';
const TEST_PLUGIN_EVENT_TYPE_2 = 'test-plugin-event-type-2';
const TEST_PLUGIN_RESOURCE_TYPE = 'test-resource-type';
const TEST_PLUGIN_RESOURCE_ID = 'test-resource-id';
const TEST_PLUGIN_RESOURCE_ID_2 = 'test-resource-id-2';
const TEST_PLUGIN_RESOURCE_NAME = 'test-resource-name';
const TEST_PLUGIN_RESOURCE_NAME_2 = 'test-resource-name-2';
const TEST_PLUGIN_RESOURCE_PATH = `${TEST_PLUGIN}/${TEST_PLUGIN_RESOURCE_TYPE}/${TEST_PLUGIN_RESOURCE_ID}`;
const TEST_PLUGIN_RESOURCE_PATH_2 = `${TEST_PLUGIN}/${TEST_PLUGIN_RESOURCE_TYPE}/${TEST_PLUGIN_RESOURCE_ID_2}`;
const TEST_VALUES_SINGLE_ROW_NO_VIS_LAYERS = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5
}];
const TEST_VALUES_SINGLE_ROW_SINGLE_VIS_LAYER = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 3
}];
const TEST_VALUES_ONLY_VIS_LAYERS = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 2
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 1
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}];
const TEST_VALUES_NO_VIS_LAYERS = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5
}, {
  [TEST_X_AXIS_ID]: 25
}, {
  [TEST_X_AXIS_ID]: 30
}, {
  [TEST_X_AXIS_ID]: 35
}, {
  [TEST_X_AXIS_ID]: 40
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5
}];
const TEST_VALUES_SINGLE_VIS_LAYER_EMPTY = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}];
const TEST_VALUES_NO_VIS_LAYERS_DIRTY = [{
  [TEST_X_AXIS_ID_DIRTY]: 0,
  [TEST_VALUE_AXIS_ID_DIRTY]: 5
}, {
  [TEST_X_AXIS_ID_DIRTY]: 5,
  [TEST_VALUE_AXIS_ID_DIRTY]: 10
}, {
  [TEST_X_AXIS_ID_DIRTY]: 10,
  [TEST_VALUE_AXIS_ID_DIRTY]: 6
}, {
  [TEST_X_AXIS_ID_DIRTY]: 15,
  [TEST_VALUE_AXIS_ID_DIRTY]: 4
}, {
  [TEST_X_AXIS_ID_DIRTY]: 20,
  [TEST_VALUE_AXIS_ID_DIRTY]: 5
}, {
  [TEST_X_AXIS_ID_DIRTY]: 25
}, {
  [TEST_X_AXIS_ID_DIRTY]: 30
}, {
  [TEST_X_AXIS_ID_DIRTY]: 35
}, {
  [TEST_X_AXIS_ID_DIRTY]: 40
}, {
  [TEST_X_AXIS_ID_DIRTY]: 45,
  [TEST_VALUE_AXIS_ID_DIRTY]: 3
}, {
  [TEST_X_AXIS_ID_DIRTY]: 50,
  [TEST_VALUE_AXIS_ID_DIRTY]: 5
}];
const TEST_VALUES_SINGLE_VIS_LAYER = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 2
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 1
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}];
const TEST_VALUES_SINGLE_VIS_LAYER_ON_BOUNDS = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 2
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3,
  [TEST_PLUGIN_EVENT_TYPE]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 1
}];
const TEST_VALUES_MULTIPLE_VIS_LAYERS = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 2,
  [TEST_PLUGIN_EVENT_TYPE_2]: 1
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 1
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 1,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 2
}];
const TEST_VALUES_MULTIPLE_VIS_LAYERS_ONE_EMPTY = [{
  [TEST_X_AXIS_ID]: 0,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 5,
  [TEST_VALUE_AXIS_ID]: 10,
  [TEST_PLUGIN_EVENT_TYPE]: 2,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 10,
  [TEST_VALUE_AXIS_ID]: 6,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 15,
  [TEST_VALUE_AXIS_ID]: 4,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 20,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 25,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 30,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 35,
  [TEST_PLUGIN_EVENT_TYPE]: 1,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 40,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 45,
  [TEST_VALUE_AXIS_ID]: 3,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}, {
  [TEST_X_AXIS_ID]: 50,
  [TEST_VALUE_AXIS_ID]: 5,
  [TEST_PLUGIN_EVENT_TYPE]: 0,
  [TEST_PLUGIN_EVENT_TYPE_2]: 0
}];
const TEST_COLUMNS_NO_VIS_LAYERS = [{
  id: TEST_X_AXIS_ID,
  name: TEST_X_AXIS_TITLE
}, {
  id: TEST_VALUE_AXIS_ID,
  name: TEST_VALUE_AXIS_TITLE
}];
const TEST_COLUMNS_NO_VIS_LAYERS_DIRTY = [{
  id: TEST_X_AXIS_ID_DIRTY,
  name: TEST_X_AXIS_TITLE
}, {
  id: TEST_VALUE_AXIS_ID_DIRTY,
  name: TEST_VALUE_AXIS_TITLE
}];
const TEST_COLUMNS_SINGLE_VIS_LAYER = [...TEST_COLUMNS_NO_VIS_LAYERS, {
  id: TEST_PLUGIN_EVENT_TYPE,
  name: `${TEST_PLUGIN_EVENT_TYPE} count`,
  meta: {
    type: ___WEBPACK_IMPORTED_MODULE_1__["VIS_LAYER_COLUMN_TYPE"]
  }
}];
const TEST_COLUMNS_MULTIPLE_VIS_LAYERS = [...TEST_COLUMNS_SINGLE_VIS_LAYER, {
  id: TEST_PLUGIN_EVENT_TYPE_2,
  name: `${TEST_PLUGIN_EVENT_TYPE_2} count`,
  meta: {
    type: ___WEBPACK_IMPORTED_MODULE_1__["VIS_LAYER_COLUMN_TYPE"]
  }
}];
const TEST_DATATABLE_SINGLE_ROW_NO_VIS_LAYERS = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_NO_VIS_LAYERS,
  rows: TEST_VALUES_SINGLE_ROW_NO_VIS_LAYERS
};
const TEST_DATATABLE_SINGLE_ROW_SINGLE_VIS_LAYER = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_SINGLE_VIS_LAYER,
  rows: TEST_VALUES_SINGLE_ROW_SINGLE_VIS_LAYER
};
const TEST_DATATABLE_ONLY_VIS_LAYERS = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_SINGLE_VIS_LAYER,
  rows: TEST_VALUES_ONLY_VIS_LAYERS
};
const TEST_DATATABLE_NO_VIS_LAYERS = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_NO_VIS_LAYERS,
  rows: TEST_VALUES_NO_VIS_LAYERS
};
const TEST_DATATABLE_NO_VIS_LAYERS_DIRTY = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_NO_VIS_LAYERS_DIRTY,
  rows: TEST_VALUES_NO_VIS_LAYERS_DIRTY
};
const TEST_DATATABLE_SINGLE_VIS_LAYER_EMPTY = {
  ...TEST_DATATABLE_NO_VIS_LAYERS,
  columns: TEST_COLUMNS_SINGLE_VIS_LAYER,
  rows: TEST_VALUES_SINGLE_VIS_LAYER_EMPTY
};
const TEST_DATATABLE_SINGLE_VIS_LAYER = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_SINGLE_VIS_LAYER,
  rows: TEST_VALUES_SINGLE_VIS_LAYER
};
const TEST_DATATABLE_SINGLE_VIS_LAYER_ON_BOUNDS = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_SINGLE_VIS_LAYER,
  rows: TEST_VALUES_SINGLE_VIS_LAYER_ON_BOUNDS
};
const TEST_DATATABLE_MULTIPLE_VIS_LAYERS = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_MULTIPLE_VIS_LAYERS,
  rows: TEST_VALUES_MULTIPLE_VIS_LAYERS
};
const TEST_DATATABLE_MULTIPLE_VIS_LAYERS_ONE_EMPTY = {
  type: 'opensearch_dashboards_datatable',
  columns: TEST_COLUMNS_MULTIPLE_VIS_LAYERS,
  rows: TEST_VALUES_MULTIPLE_VIS_LAYERS_ONE_EMPTY
};
const TEST_BASE_CONFIG = {
  view: {
    stroke: null
  },
  concat: {
    spacing: 0
  },
  legend: {
    orient: 'right'
  },
  kibana: {
    hideWarnings: true
  }
};
const TEST_BASE_VIS_LAYER = {
  mark: {
    type: 'line',
    interpolate: 'linear',
    strokeWidth: 2,
    point: true
  },
  encoding: {
    x: {
      axis: {
        title: TEST_X_AXIS_TITLE,
        grid: false
      },
      field: TEST_X_AXIS_ID,
      type: 'temporal'
    },
    y: {
      axis: {
        title: TEST_VALUE_AXIS_TITLE,
        grid: '',
        orient: 'left',
        labels: true,
        labelAngle: 0
      },
      field: TEST_VALUE_AXIS_ID,
      type: 'quantitative'
    },
    tooltip: [{
      field: TEST_X_AXIS_ID,
      type: 'temporal',
      title: TEST_VALUE_AXIS_TITLE
    }, {
      field: TEST_VALUE_AXIS_ID,
      type: 'quantitative',
      title: TEST_VALUE_AXIS_TITLE
    }],
    color: {
      datum: TEST_VALUE_AXIS_TITLE
    }
  }
};
const TEST_SPEC_NO_VIS_LAYERS = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: TEST_VALUES_NO_VIS_LAYERS
  },
  config: TEST_BASE_CONFIG,
  layer: [TEST_BASE_VIS_LAYER]
};
const TEST_SPEC_SINGLE_VIS_LAYER = {
  ...TEST_SPEC_NO_VIS_LAYERS,
  data: {
    ...TEST_SPEC_NO_VIS_LAYERS.data,
    values: TEST_VALUES_SINGLE_VIS_LAYER
  }
};
const TEST_SPEC_MULTIPLE_VIS_LAYERS = {
  ...TEST_SPEC_NO_VIS_LAYERS,
  data: {
    ...TEST_SPEC_NO_VIS_LAYERS.data,
    values: TEST_VALUES_MULTIPLE_VIS_LAYERS
  }
};
const TEST_DIMENSIONS = {
  x: {
    params: {
      interval: 5,
      bounds: {
        min: 0,
        max: 50
      }
    },
    label: TEST_X_AXIS_TITLE
  }
};
const TEST_DIMENSIONS_SINGLE_ROW = {
  x: {
    params: {
      interval: 5,
      bounds: {
        min: 0,
        max: 0
      }
    },
    label: TEST_X_AXIS_TITLE
  }
};
const TEST_DIMENSIONS_INVALID_BOUNDS = {
  x: {
    params: {
      interval: 5,
      bounds: {
        min: 50,
        max: 0
      }
    },
    label: TEST_X_AXIS_TITLE
  }
};
const TEST_VIS_LAYERS_SINGLE = [{
  originPlugin: TEST_PLUGIN,
  type: ___WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents,
  pluginResource: {
    type: TEST_PLUGIN_RESOURCE_TYPE,
    id: TEST_PLUGIN_RESOURCE_ID,
    name: TEST_PLUGIN_RESOURCE_NAME,
    urlPath: TEST_PLUGIN_RESOURCE_PATH
  },
  pluginEventType: TEST_PLUGIN_EVENT_TYPE,
  events: [{
    timestamp: 4,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: 6,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: 35,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }]
}];
const TEST_VIS_LAYERS_SINGLE_INVALID_BOUNDS = [{
  originPlugin: TEST_PLUGIN,
  type: ___WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents,
  pluginResource: {
    type: TEST_PLUGIN_RESOURCE_TYPE,
    id: TEST_PLUGIN_RESOURCE_ID,
    name: TEST_PLUGIN_RESOURCE_NAME,
    urlPath: TEST_PLUGIN_RESOURCE_PATH
  },
  pluginEventType: TEST_PLUGIN_EVENT_TYPE,
  events: [{
    timestamp: -5,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: -100,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: 75,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }]
}];
const TEST_VIS_LAYERS_SINGLE_ON_BOUNDS = [{
  originPlugin: TEST_PLUGIN,
  type: ___WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents,
  pluginResource: {
    type: TEST_PLUGIN_RESOURCE_TYPE,
    id: TEST_PLUGIN_RESOURCE_ID,
    name: TEST_PLUGIN_RESOURCE_NAME,
    urlPath: TEST_PLUGIN_RESOURCE_PATH
  },
  pluginEventType: TEST_PLUGIN_EVENT_TYPE,
  events: [{
    timestamp: 0,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: 2,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }, {
    timestamp: 55,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID
    }
  }]
}];
const TEST_VIS_LAYERS_MULTIPLE = [...TEST_VIS_LAYERS_SINGLE, {
  originPlugin: TEST_PLUGIN,
  type: ___WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents,
  pluginResource: {
    type: TEST_PLUGIN_RESOURCE_TYPE,
    id: TEST_PLUGIN_RESOURCE_ID_2,
    name: TEST_PLUGIN_RESOURCE_NAME_2,
    urlPath: TEST_PLUGIN_RESOURCE_PATH_2
  },
  pluginEventType: TEST_PLUGIN_EVENT_TYPE_2,
  events: [{
    timestamp: 5,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID_2
    }
  }, {
    timestamp: 15,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID_2
    }
  }, {
    timestamp: 49,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID_2
    }
  }, {
    timestamp: 50,
    metadata: {
      pluginResourceId: TEST_PLUGIN_RESOURCE_ID_2
    }
  }]
}];
const TEST_VIS_LAYERS_MULTIPLE_ONE_EMPTY = [...TEST_VIS_LAYERS_SINGLE, {
  originPlugin: TEST_PLUGIN,
  type: ___WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents,
  pluginResource: {
    type: TEST_PLUGIN_RESOURCE_TYPE,
    id: TEST_PLUGIN_RESOURCE_ID_2,
    name: TEST_PLUGIN_RESOURCE_NAME_2,
    urlPath: TEST_PLUGIN_RESOURCE_PATH_2
  },
  pluginEventType: TEST_PLUGIN_EVENT_TYPE_2,
  events: []
}];
const TEST_RULE_LAYER_SINGLE_VIS_LAYER = {
  mark: {
    type: 'rule',
    color: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_COLOR"],
    opacity: 1
  },
  transform: [{
    filter: `datum['${TEST_PLUGIN_EVENT_TYPE}'] > 0`
  }],
  encoding: {
    x: {
      field: TEST_X_AXIS_ID,
      type: 'temporal'
    },
    opacity: {
      value: 0,
      condition: {
        empty: false,
        param: ___WEBPACK_IMPORTED_MODULE_1__["HOVER_PARAM"],
        value: 1
      }
    }
  }
};
const TEST_RULE_LAYER_MULTIPLE_VIS_LAYERS = {
  ...TEST_RULE_LAYER_SINGLE_VIS_LAYER,
  transform: [{
    filter: `datum['${TEST_PLUGIN_EVENT_TYPE}'] > 0 || datum['${TEST_PLUGIN_EVENT_TYPE_2}'] > 0`
  }]
};
const TEST_EVENTS_LAYER_SINGLE_VIS_LAYER = {
  height: 25,
  mark: {
    type: 'point',
    shape: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_MARK_SHAPE"],
    fill: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_COLOR"],
    fillOpacity: 1,
    stroke: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_COLOR"],
    strokeOpacity: 1,
    style: [`${_vega_constants__WEBPACK_IMPORTED_MODULE_0__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}`],
    tooltip: true
  },
  transform: [{
    filter: `datum['${TEST_PLUGIN_EVENT_TYPE}'] > 0`
  }, {
    calculate: `'${_vega_constants__WEBPACK_IMPORTED_MODULE_0__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}'`,
    as: 'annotationType'
  }],
  params: [{
    name: ___WEBPACK_IMPORTED_MODULE_1__["HOVER_PARAM"],
    select: {
      type: 'point',
      on: 'mouseover'
    }
  }],
  encoding: {
    x: {
      axis: {
        title: TEST_X_AXIS_TITLE,
        grid: false,
        ticks: true,
        orient: 'bottom',
        domain: true
      },
      field: TEST_X_AXIS_ID,
      type: 'temporal',
      scale: {
        domain: [{
          year: 2022,
          month: 'December',
          date: 1,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }, {
          year: 2023,
          month: 'March',
          date: 2,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        }]
      }
    },
    size: {
      condition: {
        empty: false,
        param: ___WEBPACK_IMPORTED_MODULE_1__["HOVER_PARAM"],
        value: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_MARK_SIZE_ENLARGED"]
      },
      value: ___WEBPACK_IMPORTED_MODULE_1__["EVENT_MARK_SIZE"]
    },
    tooltip: [{
      field: TEST_PLUGIN_EVENT_TYPE
    }]
  }
};
const TEST_EVENTS_LAYER_MULTIPLE_VIS_LAYERS = {
  ...TEST_EVENTS_LAYER_SINGLE_VIS_LAYER,
  transform: [{
    filter: `datum['${TEST_PLUGIN_EVENT_TYPE}'] > 0 || datum['${TEST_PLUGIN_EVENT_TYPE_2}'] > 0`
  }, {
    calculate: `'${_vega_constants__WEBPACK_IMPORTED_MODULE_0__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}'`,
    as: 'annotationType'
  }],
  encoding: {
    ...TEST_EVENTS_LAYER_SINGLE_VIS_LAYER.encoding,
    tooltip: [{
      field: TEST_PLUGIN_EVENT_TYPE
    }, {
      field: TEST_PLUGIN_EVENT_TYPE_2
    }]
  }
};
const TEST_RESULT_SPEC_SINGLE_VIS_LAYER = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: TEST_VALUES_SINGLE_VIS_LAYER
  },
  config: TEST_BASE_CONFIG,
  vconcat: [{
    layer: [{
      ...TEST_BASE_VIS_LAYER,
      encoding: {
        ...TEST_BASE_VIS_LAYER.encoding,
        x: {
          ...TEST_BASE_VIS_LAYER.encoding.x,
          axis: {
            title: null,
            grid: false,
            labels: false
          }
        }
      }
    }, TEST_RULE_LAYER_SINGLE_VIS_LAYER]
  }, TEST_EVENTS_LAYER_SINGLE_VIS_LAYER]
};
const TEST_RESULT_SPEC_SINGLE_VIS_LAYER_EMPTY = {
  ...TEST_RESULT_SPEC_SINGLE_VIS_LAYER,
  data: {
    values: TEST_VALUES_NO_VIS_LAYERS
  }
};
const TEST_RESULT_SPEC_MULTIPLE_VIS_LAYERS = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: TEST_VALUES_MULTIPLE_VIS_LAYERS
  },
  config: TEST_BASE_CONFIG,
  vconcat: [{
    layer: [{
      ...TEST_BASE_VIS_LAYER,
      encoding: {
        ...TEST_BASE_VIS_LAYER.encoding,
        x: {
          ...TEST_BASE_VIS_LAYER.encoding.x,
          axis: {
            title: null,
            grid: false,
            labels: false
          }
        }
      }
    }, TEST_RULE_LAYER_MULTIPLE_VIS_LAYERS]
  }, TEST_EVENTS_LAYER_MULTIPLE_VIS_LAYERS]
};

/***/ }),

/***/ "./public/triggers/index.ts":
/*!**********************************!*\
  !*** ./public/triggers/index.ts ***!
  \**********************************/
/*! exports provided: PLUGIN_RESOURCE_DELETE_TRIGGER, pluginResourceDeleteTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugin_resource_delete_trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin_resource_delete_trigger */ "./public/triggers/plugin_resource_delete_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_TRIGGER", function() { return _plugin_resource_delete_trigger__WEBPACK_IMPORTED_MODULE_0__["PLUGIN_RESOURCE_DELETE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluginResourceDeleteTrigger", function() { return _plugin_resource_delete_trigger__WEBPACK_IMPORTED_MODULE_0__["pluginResourceDeleteTrigger"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/triggers/plugin_resource_delete_trigger.ts":
/*!***********************************************************!*\
  !*** ./public/triggers/plugin_resource_delete_trigger.ts ***!
  \***********************************************************/
/*! exports provided: PLUGIN_RESOURCE_DELETE_TRIGGER, pluginResourceDeleteTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_RESOURCE_DELETE_TRIGGER", function() { return PLUGIN_RESOURCE_DELETE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginResourceDeleteTrigger", function() { return pluginResourceDeleteTrigger; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const PLUGIN_RESOURCE_DELETE_TRIGGER = 'PLUGIN_RESOURCE_DELETE_TRIGGER';
const pluginResourceDeleteTrigger = {
  id: PLUGIN_RESOURCE_DELETE_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visAugmenter.triggers.pluginResourceDeleteTitle', {
    defaultMessage: 'Plugin resource delete'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visAugmenter.triggers.pluginResourceDeleteDescription', {
    defaultMessage: 'Delete augment-vis saved objs associated to the deleted plugin resource'
  })
};

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: VisLayerTypes, VisLayerErrorTypes, VisFlyoutContext, isPointInTimeEventsVisLayer, isValidVisLayer, isVisLayerWithError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisLayerTypes", function() { return VisLayerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisLayerErrorTypes", function() { return VisLayerErrorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisFlyoutContext", function() { return VisFlyoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInTimeEventsVisLayer", function() { return isPointInTimeEventsVisLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidVisLayer", function() { return isValidVisLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisLayerWithError", function() { return isVisLayerWithError; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

let VisLayerTypes = /*#__PURE__*/function (VisLayerTypes) {
  VisLayerTypes["PointInTimeEvents"] = "PointInTimeEvents";
  return VisLayerTypes;
}({});
let VisLayerErrorTypes = /*#__PURE__*/function (VisLayerErrorTypes) {
  VisLayerErrorTypes["PERMISSIONS_FAILURE"] = "PERMISSIONS_FAILURE";
  VisLayerErrorTypes["FETCH_FAILURE"] = "FETCH_FAILURE";
  VisLayerErrorTypes["RESOURCE_DELETED"] = "RESOURCE_DELETED";
  return VisLayerErrorTypes;
}({});
let VisFlyoutContext = /*#__PURE__*/function (VisFlyoutContext) {
  VisFlyoutContext["BASE_VIS"] = "BASE_VIS";
  VisFlyoutContext["EVENT_VIS"] = "EVENT_VIS";
  VisFlyoutContext["TIMELINE_VIS"] = "TIMELINE_VIS";
  return VisFlyoutContext;
}({});
const isPointInTimeEventsVisLayer = obj => {
  return (obj === null || obj === void 0 ? void 0 : obj.type) === VisLayerTypes.PointInTimeEvents;
};

/**
 * Used to determine if a given saved obj has a valid type and can
 * be converted into a VisLayer
 */
const isValidVisLayer = obj => {
  return (obj === null || obj === void 0 ? void 0 : obj.type) in VisLayerTypes;
};

/**
 * Used for checking if an existing VisLayer has a populated error field or not
 */
const isVisLayerWithError = visLayer => visLayer.error !== undefined;
// We need to have some extra config in order to render the charts correctly in different contexts.
// For example, we use the same base vis and modify it within the view events flyout to hide
// axes, only show events, only show timeline, add custom padding, etc.
// So, we abstract these concepts out and let the underlying implementation make changes as needed
// to support the different contexts.

/***/ }),

/***/ "./public/ui_actions_bootstrap.ts":
/*!****************************************!*\
  !*** ./public/ui_actions_bootstrap.ts ***!
  \****************************************/
/*! exports provided: bootstrapUiActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapUiActions", function() { return bootstrapUiActions; });
/* harmony import */ var _view_events_flyout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_events_flyout */ "./public/view_events_flyout/index.ts");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_embeddable_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saved_objects_management_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../saved_objects_management/public */ "plugin/savedObjectsManagement/public");
/* harmony import */ var _saved_objects_management_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_management_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./public/actions/index.ts");
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








// Overriding the mappings defined in UIActions plugin so that
// the new trigger and action definitions resolve.
// This is a common pattern among internal Dashboards plugins.

const bootstrapUiActions = uiActions => {
  const openEventsFlyoutAction = new _view_events_flyout__WEBPACK_IMPORTED_MODULE_0__["OpenEventsFlyoutAction"]();
  const viewEventsOptionAction = new _view_events_flyout__WEBPACK_IMPORTED_MODULE_0__["ViewEventsOptionAction"]();
  const savedObjectDeleteAction = new _actions__WEBPACK_IMPORTED_MODULE_4__["SavedObjectDeleteAction"]();
  const pluginResourceDeleteAction = new _actions__WEBPACK_IMPORTED_MODULE_4__["PluginResourceDeleteAction"]();
  uiActions.registerAction(openEventsFlyoutAction);
  uiActions.registerAction(viewEventsOptionAction);
  uiActions.registerAction(savedObjectDeleteAction);
  uiActions.registerAction(pluginResourceDeleteAction);
  uiActions.registerTrigger(_ui_actions_public__WEBPACK_IMPORTED_MODULE_3__["externalActionTrigger"]);
  uiActions.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_5__["pluginResourceDeleteTrigger"]);
  uiActions.addTriggerAction(_triggers__WEBPACK_IMPORTED_MODULE_5__["PLUGIN_RESOURCE_DELETE_TRIGGER"], pluginResourceDeleteAction);
  uiActions.addTriggerAction(_ui_actions_public__WEBPACK_IMPORTED_MODULE_3__["EXTERNAL_ACTION_TRIGGER"], openEventsFlyoutAction);

  // These triggers are registered by other plugins. If they are disabled can throw an error.
  try {
    uiActions.addTriggerAction(_embeddable_public__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_MENU_TRIGGER"], viewEventsOptionAction);
    uiActions.addTriggerAction(_saved_objects_management_public__WEBPACK_IMPORTED_MODULE_2__["SAVED_OBJECT_DELETE_TRIGGER"], savedObjectDeleteAction);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

/***/ }),

/***/ "./public/utils/index.ts":
/*!*******************************!*\
  !*** ./public/utils/index.ts ***!
  \*******************************/
/*! exports provided: isEligibleForVisLayers, getAugmentVisSavedObjs, buildPipelineFromAugmentVisSavedObjs, getAnyErrors, cleanupStaleObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./public/utils/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEligibleForVisLayers", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isEligibleForVisLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAugmentVisSavedObjs", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getAugmentVisSavedObjs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildPipelineFromAugmentVisSavedObjs", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["buildPipelineFromAugmentVisSavedObjs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAnyErrors", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getAnyErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupStaleObjects", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["cleanupStaleObjects"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/utils/utils.ts":
/*!*******************************!*\
  !*** ./public/utils/utils.ts ***!
  \*******************************/
/*! exports provided: isEligibleForVisLayers, getAugmentVisSavedObjs, buildPipelineFromAugmentVisSavedObjs, getAnyErrors, cleanupStaleObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEligibleForVisLayers", function() { return isEligibleForVisLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAugmentVisSavedObjs", function() { return getAugmentVisSavedObjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPipelineFromAugmentVisSavedObjs", function() { return buildPipelineFromAugmentVisSavedObjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnyErrors", function() { return getAnyErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupStaleObjects", function() { return cleanupStaleObjects; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../plugins/expressions/public */ "plugin/expressions/public");
/* harmony import */ var _plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./public/index.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const isEligibleForVisLayers = (vis, uiSettingsClient) => {
  var _vis$data, _vis$data$byTypeName, _vis$params, _xAxis$, _aggs;
  // Only support a date histogram
  const dateHistograms = (_vis$data = vis.data) === null || _vis$data === void 0 || (_vis$data = _vis$data.aggs) === null || _vis$data === void 0 || (_vis$data$byTypeName = _vis$data.byTypeName) === null || _vis$data$byTypeName === void 0 ? void 0 : _vis$data$byTypeName.call(_vis$data, 'date_histogram');
  if (!Array.isArray(dateHistograms) || dateHistograms.length !== 1) return false;

  // Ensure there is only 1 x-axis and it has to be on the bottom
  const xAxis = (_vis$params = vis.params) === null || _vis$params === void 0 ? void 0 : _vis$params.categoryAxes;
  if (!Array.isArray(xAxis) || xAxis.length !== 1 || ((_xAxis$ = xAxis[0]) === null || _xAxis$ === void 0 ? void 0 : _xAxis$.position) !== 'bottom') return false;

  // Additionally, to have a valid x-axis, there needs to be a segment aggregation
  const segmentAggs = vis.data.aggs.bySchemaName('segment');
  if (!Array.isArray(segmentAggs) || segmentAggs.length === 0) return false;

  // Require metrics for multiple supported y-axis only and no other aggregation types
  const metricAggs = vis.data.aggs.bySchemaName('metric');
  if (!Array.isArray(metricAggs) || metricAggs.length === 0 || metricAggs.length !== ((_aggs = vis.data.aggs.aggs) === null || _aggs === void 0 ? void 0 : _aggs.length) - 1) return false;

  // Must have only line series
  if (!Array.isArray(vis.params.seriesParams) || vis.params.type !== 'line' || vis.params.seriesParams.some(seriesParam => seriesParam.type !== 'line')) return false;

  // Checks if the augmentation setting is enabled
  const config = uiSettingsClient !== null && uiSettingsClient !== void 0 ? uiSettingsClient : Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUISettings"])();
  return config.get(_common_constants__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_AUGMENTATION_ENABLE_SETTING"]);
};

/**
 * Using a SavedAugmentVisLoader, fetch all saved objects that are of 'augment-vis' type.
 * Filter by vis ID by passing in a 'hasReferences' obj with the vis ID to the findAll() fn call,
 * and optionally by plugin resource ID list, if specified.
 */
const getAugmentVisSavedObjs = async (visId, loader, uiSettings, pluginResourceIds) => {
  // Using optional services provided, or the built-in services from this plugin
  const config = uiSettings !== undefined ? uiSettings : Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUISettings"])();
  const isAugmentationEnabled = config.get(_common_constants__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_AUGMENTATION_ENABLE_SETTING"]);
  if (!isAugmentationEnabled) {
    throw new Error('Visualization augmentation is disabled, please enable visualization:enablePluginAugmentation.');
  }
  try {
    // If there are any plugin resource IDs specified, add a search string and search field
    // into findAll() call
    const pluginResourceIdsSpecified = Array.isArray(pluginResourceIds) && pluginResourceIds.length > 0;
    const resp = await (loader === null || loader === void 0 ? void 0 : loader.findAll(pluginResourceIdsSpecified ? pluginResourceIds.join('|') : '', 100, undefined, {
      type: 'visualization',
      id: visId
    }, pluginResourceIdsSpecified ? ['pluginResource.id'] : undefined));
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(resp, 'hits', []);
  } catch (e) {
    return [];
  }
};

/**
 * Given an array of augment-vis saved objects that contain expression function details,
 * construct a pipeline that will execute each of these expression functions.
 * Note that the order does not matter; each expression function should be taking
 * in the current output and appending its results to it, such that the end result
 * contains the results from each expression function that was ran.
 */
const buildPipelineFromAugmentVisSavedObjs = objs => {
  try {
    const visLayerExpressionFns = objs.map(obj => Object(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1__["buildExpressionFunction"])(obj.visLayerExpressionFn.name, obj.visLayerExpressionFn.args));
    const ast = Object(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1__["buildExpression"])(visLayerExpressionFns).toAst();
    return Object(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_1__["formatExpression"])(ast);
  } catch (e) {
    throw new Error('Expression function from augment-vis saved objects could not be generated');
  }
};

/**
 * Returns an error with an aggregated message about all of the
 * errors found in the set of VisLayers. If no errors, returns undefined.
 */
const getAnyErrors = (visLayers, visTitle) => {
  const visLayersWithErrors = visLayers.filter(visLayer => Object(___WEBPACK_IMPORTED_MODULE_2__["isVisLayerWithError"])(visLayer));
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(visLayersWithErrors)) {
    // Aggregate by unique plugin resource type
    const resourceTypes = [...new Set(visLayersWithErrors.map(visLayer => visLayer.pluginResource.type))];
    let msgDetails = '';
    resourceTypes.forEach((type, index) => {
      const matchingVisLayers = visLayersWithErrors.filter(visLayer => visLayer.pluginResource.type === type);
      if (index !== 0) msgDetails += '\n\n\n';
      msgDetails += `-----${type}-----`;
      matchingVisLayers.forEach((visLayer, idx) => {
        var _visLayer$error;
        if (idx !== 0) msgDetails += '\n';
        msgDetails += `\nID: ${visLayer.pluginResource.id}`;
        msgDetails += `\nMessage: "${(_visLayer$error = visLayer.error) === null || _visLayer$error === void 0 ? void 0 : _visLayer$error.message}"`;
      });
    });
    const err = new Error(`Certain plugin resources failed to load on the ${visTitle} chart`);
    // We set as the stack here so it can be parsed and shown cleanly in the details modal coming from the error toast notification.
    err.stack = msgDetails;
    return err;
  } else {
    return undefined;
  }
};

/**
 * Cleans up any stale saved objects caused by plugin resources being deleted. Kicks
 * off an async call to delete the stale objs.
 *
 * @param augmentVisSavedObs the original augment-vis saved objs for this particular vis
 * @param visLayers the produced VisLayers containing details if the resource has been deleted
 * @param visualizationsLoader the visualizations saved object loader to handle deletion
 */

const cleanupStaleObjects = (augmentVisSavedObjs, visLayers, loader) => {
  const staleVisLayers = visLayers.filter(visLayer => Object(___WEBPACK_IMPORTED_MODULE_2__["isVisLayerWithError"])(visLayer)).filter(visLayerWithError => {
    var _visLayerWithError$er;
    return ((_visLayerWithError$er = visLayerWithError.error) === null || _visLayerWithError$er === void 0 ? void 0 : _visLayerWithError$er.type) === ___WEBPACK_IMPORTED_MODULE_2__["VisLayerErrorTypes"].RESOURCE_DELETED;
  });
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(staleVisLayers)) {
    const objIdsToDelete = [];
    staleVisLayers.forEach(staleVisLayer => {
      var _augmentVisSavedObjs$;
      // Match the VisLayer to its origin saved obj to extract the to-be-deleted saved obj ID
      const deletedPluginResourceId = staleVisLayer.pluginResource.id;
      const savedObjId = (_augmentVisSavedObjs$ = augmentVisSavedObjs.find(savedObj => savedObj.pluginResource.id === deletedPluginResourceId)) === null || _augmentVisSavedObjs$ === void 0 ? void 0 : _augmentVisSavedObjs$.id;
      if (savedObjId !== undefined) objIdsToDelete.push(savedObjId);
    });
    loader === null || loader === void 0 || loader.delete(objIdsToDelete);
  }
};

/***/ }),

/***/ "./public/vega/constants.ts":
/*!**********************************!*\
  !*** ./public/vega/constants.ts ***!
  \**********************************/
/*! exports provided: VisAnnotationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisAnnotationType", function() { return VisAnnotationType; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

let VisAnnotationType = /*#__PURE__*/function (VisAnnotationType) {
  VisAnnotationType["POINT_IN_TIME_ANNOTATION"] = "POINT_IN_TIME_ANNOTATION";
  return VisAnnotationType;
}({});

/***/ }),

/***/ "./public/vega/helpers.ts":
/*!********************************!*\
  !*** ./public/vega/helpers.ts ***!
  \********************************/
/*! exports provided: enableVisLayersInSpecConfig, addVisEventSignalsToSpecConfig, getXAxisId, isVisLayerColumn, generateVisLayerFilterString, generateVisLayerTooltipFields, addMissingRowsToTableBounds, addPointInTimeEventsLayersToTable, addPointInTimeEventsLayersToSpec, calculateYAxisPadding, augmentEventChartSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableVisLayersInSpecConfig", function() { return enableVisLayersInSpecConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVisEventSignalsToSpecConfig", function() { return addVisEventSignalsToSpecConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXAxisId", function() { return getXAxisId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisLayerColumn", function() { return isVisLayerColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerFilterString", function() { return generateVisLayerFilterString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerTooltipFields", function() { return generateVisLayerTooltipFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMissingRowsToTableBounds", function() { return addMissingRowsToTableBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToTable", function() { return addPointInTimeEventsLayersToTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToSpec", function() { return addPointInTimeEventsLayersToSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateYAxisPadding", function() { return calculateYAxisPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentEventChartSpec", function() { return augmentEventChartSpec; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./public/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/vega/constants.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






// Given any visLayers, create a map to indicate which VisLayer types are present.
// Convert to an array since ES6 Maps cannot be stringified.
const enableVisLayersInSpecConfig = (spec, visLayers) => {
  const config = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(spec, 'config', {
    kibana: {}
  });
  const visibleVisLayers = new Map();

  // Currently only support PointInTimeEventsVisLayers. Set the flag to true
  // if there are any
  const pointInTimeEventsVisLayers = visLayers.filter(visLayer => Object(___WEBPACK_IMPORTED_MODULE_2__["isPointInTimeEventsVisLayer"])(visLayer));
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(pointInTimeEventsVisLayers)) {
    visibleVisLayers.set(___WEBPACK_IMPORTED_MODULE_2__["VisLayerTypes"].PointInTimeEvents, true);
  }
  return {
    ...config,
    kibana: {
      ...config.kibana,
      visibleVisLayers: [...visibleVisLayers]
    }
  };
};

/**
 * Adds the signals which vega will use to trigger required events on the point in time annotation marks
 */
const addVisEventSignalsToSpecConfig = spec => {
  const config = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(spec, 'config', {
    kibana: {}
  });
  const signals = {
    ...(config.kibana.signals || {}),
    [`${_constants__WEBPACK_IMPORTED_MODULE_3__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}`]: [{
      name: 'PointInTimeAnnotationVisEvent',
      on: [{
        events: 'click',
        update: 'opensearchDashboardsVisEventTriggered(event, datum)'
      }]
    }]
  };
  return {
    ...config,
    kibana: {
      ...config.kibana,
      signals,
      tooltips: {
        centerOnMark: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_TOOLTIP_CENTER_ON_MARK"]
      }
    }
  };
};

// Get the first xaxis field as only 1 setup of X Axis will be supported and
// there won't be support for split series and split chart
const getXAxisId = (dimensions, columns) => {
  return columns.filter(column => column.name === dimensions.x.label)[0].id;
};
const isVisLayerColumn = column => {
  var _column$meta;
  return ((_column$meta = column.meta) === null || _column$meta === void 0 ? void 0 : _column$meta.type) === ___WEBPACK_IMPORTED_MODULE_2__["VIS_LAYER_COLUMN_TYPE"];
};

/**
 * For temporal domain ranges, there is a bug when passing timestamps in vega lite
 * that is still present in the current libraries we are using when developing in a
 * dev env. See https://github.com/vega/vega-lite/issues/6060 for bug details.
 * So, we convert to a vega-lite Date Time object and pass that instead.
 * See https://vega.github.io/vega-lite/docs/datetime.html for details on Date Time.
 */
const convertToDateTimeObj = timestamp => {
  const momentObj = moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);
  return {
    year: Number(momentObj.format('YYYY')),
    month: momentObj.format('MMMM'),
    date: momentObj.date(),
    hours: momentObj.hours(),
    minutes: momentObj.minutes(),
    seconds: momentObj.seconds(),
    milliseconds: momentObj.milliseconds()
  };
};
const generateVisLayerFilterString = visLayerColumnIds => {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(visLayerColumnIds)) {
    const filterString = visLayerColumnIds.map(visLayerColumnId => `datum['${visLayerColumnId}'] > 0`);
    return filterString.join(' || ');
  } else {
    // if there is no VisLayers to display, then filter out everything by always returning false
    return 'false';
  }
};
const generateVisLayerTooltipFields = visLayerColumnIds => {
  return visLayerColumnIds.map(id => {
    return {
      field: id
    };
  });
};

/**
 * By default, the source datatable will not include rows with empty data.
 * For handling events that may belong in missing buckets that are not yet
 * created, we need to create them. For more details, see description in
 * https://github.com/opensearch-project/OpenSearch-Dashboards/pull/3145
 *
 * Note that this may add buckets with start/end times out of the chart bounds.
 * This is the current default behavior of histogram aggregations with intervals,
 * in order for the bucket keys to have "clean" timestamp keys (e.g., 1/1 @ 12AM).
 * For more details, see
 * https://opensearch.org/docs/latest/opensearch/bucket-agg/#histogram-date_histogram
 *
 * Also note this is only adding empty buckets at the beginning/end of a table. We are
 * not taking into account missing buckets within source datapoints. Because of this
 * limitation, it is possible that charted events may not be put into the most precise
 * bucket based on their raw event timestamps, if there is missing / sparse source data.
 */
const addMissingRowsToTableBounds = (datatable, dimensions) => {
  const augmentedTable = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(datatable);
  const intervalMillis = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(dimensions.x.params.interval).asMilliseconds();
  const xAxisId = getXAxisId(dimensions, augmentedTable.columns);
  const chartStartTime = new Date(dimensions.x.params.bounds.min).valueOf();
  const chartEndTime = new Date(dimensions.x.params.bounds.max).valueOf();
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(augmentedTable.rows)) {
    const dataStartTime = augmentedTable.rows[0][xAxisId];
    const dataEndTime = augmentedTable.rows[augmentedTable.rows.length - 1][xAxisId];
    let curStartTime = dataStartTime;
    while (curStartTime > chartStartTime) {
      curStartTime -= intervalMillis;
      augmentedTable.rows.unshift({
        [xAxisId]: curStartTime
      });
    }
    let curEndTime = dataEndTime;
    while (curEndTime < chartEndTime) {
      curEndTime += intervalMillis;
      augmentedTable.rows.push({
        [xAxisId]: curEndTime
      });
    }
  } else {
    // if there's no existing rows, create them all
    let curTime = chartStartTime;
    while (curTime <= chartEndTime) {
      augmentedTable.rows.push({
        [xAxisId]: curTime
      });
      curTime += intervalMillis;
    }
  }
  return augmentedTable;
};

/**
 * Adding events into the correct x-axis key (the time bucket)
 * based on the table. As of now only results from
 * PointInTimeEventsVisLayers are supported
 */
const addPointInTimeEventsLayersToTable = (datatable, dimensions, visLayers) => {
  const augmentedTable = addMissingRowsToTableBounds(datatable, dimensions);
  const xAxisId = getXAxisId(dimensions, augmentedTable.columns);
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(visLayers) || augmentedTable.rows.length === 0) return augmentedTable;

  // Create columns for every unique event type. This is so we can aggregate on the different event types
  // (e.g., 'Anomalies', 'Alerts')
  [...new Set(visLayers.map(visLayer => visLayer.pluginEventType))].forEach(pluginEventType => {
    augmentedTable.columns.push({
      id: pluginEventType,
      name: `${pluginEventType} count`,
      meta: {
        type: ___WEBPACK_IMPORTED_MODULE_2__["VIS_LAYER_COLUMN_TYPE"]
      }
    });
  });
  visLayers.forEach(visLayer => {
    const visLayerColumnId = `${visLayer.pluginEventType}`;

    // Add placeholder values of 0 for every event value. This is so the tooltip
    // can render correctly without showing the 'undefined' string
    let row = 0;
    while (row < augmentedTable.rows.length) {
      augmentedTable.rows[row] = {
        ...augmentedTable.rows[row],
        [visLayerColumnId]: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(augmentedTable.rows[row], visLayerColumnId, 0)
      };
      row++;
    }

    // if only one row / one datapoint, put all events into this bucket
    if (augmentedTable.rows.length === 1) {
      augmentedTable.rows[0] = {
        ...augmentedTable.rows[0],
        [visLayerColumnId]: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(augmentedTable.rows[0], visLayerColumnId, 0) + visLayer.events.length
      };
      return;
    }

    // Bin the timestamps to the closest x-axis key, adding
    // an entry for this vis layer ID. Sorting the timestamps first
    // so that we will only search a particular row value once.
    // There could be some optimizations, such as binary search + dynamically
    // changing the bounds, but performance benefits would be very minimal
    // if any, given the upper bounds limit on n already due to chart constraints.
    let rowIndex = 0;
    const minVal = augmentedTable.rows[0][xAxisId];
    const maxVal = augmentedTable.rows[augmentedTable.rows.length - 1][xAxisId] + moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(dimensions.x.params.interval).asMilliseconds();
    const sortedTimestamps = visLayer.events.map(event => event.timestamp).filter(timestamp => timestamp >= minVal && timestamp <= maxVal).sort((n1, n2) => n1 - n2);
    sortedTimestamps.forEach(timestamp => {
      while (rowIndex < augmentedTable.rows.length - 1) {
        const smallerVal = augmentedTable.rows[rowIndex][xAxisId];
        const higherVal = augmentedTable.rows[rowIndex + 1][xAxisId];
        let rowIndexToInsert;

        // timestamp is on the left bounds of the chart
        if (timestamp === smallerVal) {
          rowIndexToInsert = rowIndex;

          // timestamp is in between the right 2 buckets. determine which one it is closer to
        } else if (timestamp <= higherVal) {
          const smallerValDiff = Math.abs(timestamp - smallerVal);
          const higherValDiff = Math.abs(timestamp - higherVal);
          rowIndexToInsert = smallerValDiff <= higherValDiff ? rowIndex : rowIndex + 1;
        }

        // timestamp is on the right bounds of the chart
        else if (rowIndex + 1 === augmentedTable.rows.length - 1) {
          rowIndexToInsert = rowIndex + 1;
          // timestamp is still too small; traverse to next bucket
        } else {
          rowIndex += 1;
          continue;
        }

        // inserting the value. increment if the mapping/property already exists
        augmentedTable.rows[rowIndexToInsert][visLayerColumnId] = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(augmentedTable.rows[rowIndexToInsert], visLayerColumnId, 0) + 1;
        break;
      }
    });
  });
  return augmentedTable;
};

/**
 * Updating the vega lite spec to include layers and marks related to
 * PointInTimeEventsVisLayers. It is assumed the datatable has already been
 * augmented with columns and row data containing the vis layers.
 */
const addPointInTimeEventsLayersToSpec = (datatable, dimensions, spec) => {
  const newSpec = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(spec);
  const xAxisId = getXAxisId(dimensions, datatable.columns);
  const xAxisTitle = dimensions.x.label.replaceAll('"', '');
  const bucketStartTime = convertToDateTimeObj(datatable.rows[0][xAxisId]);
  const bucketEndTime = convertToDateTimeObj(datatable.rows[datatable.rows.length - 1][xAxisId]);
  const visLayerColumns = datatable.columns.filter(column => isVisLayerColumn(column));
  const visLayerColumnIds = visLayerColumns.map(column => column.id);

  // Hide x axes text on existing chart so they are only visible on the event chart
  newSpec.layer.forEach(dataSeries => {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(dataSeries, 'encoding.x.axis', null) !== null) {
      dataSeries.encoding.x.axis = {
        ...dataSeries.encoding.x.axis,
        labels: false,
        title: null
      };
    }
  });

  // Add a rule to the existing layer for showing lines on the chart if a dot is hovered on
  newSpec.layer.push({
    mark: {
      type: 'rule',
      color: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_COLOR"],
      opacity: 1
    },
    transform: [{
      filter: generateVisLayerFilterString(visLayerColumnIds)
    }],
    encoding: {
      x: {
        field: xAxisId,
        type: 'temporal'
      },
      opacity: {
        value: 0,
        condition: {
          empty: false,
          param: ___WEBPACK_IMPORTED_MODULE_2__["HOVER_PARAM"],
          value: 1
        }
      }
    }
  });

  // Nesting layer into a vconcat field so we can append event chart.
  newSpec.vconcat = [];
  newSpec.vconcat.push({
    layer: newSpec.layer
  });
  delete newSpec.layer;

  // Adding the event timeline chart
  newSpec.vconcat.push({
    height: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_TIMELINE_HEIGHT"],
    mark: {
      type: 'point',
      shape: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_MARK_SHAPE"],
      fill: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_COLOR"],
      stroke: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_COLOR"],
      strokeOpacity: 1,
      fillOpacity: 1,
      // This style is only used to locate this mark when trying to add signals in the compiled vega spec.
      // @see @method vega_parser._compileVegaLite
      style: [`${_constants__WEBPACK_IMPORTED_MODULE_3__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}`],
      tooltip: true
    },
    transform: [{
      filter: generateVisLayerFilterString(visLayerColumnIds)
    }, {
      calculate: `'${_constants__WEBPACK_IMPORTED_MODULE_3__["VisAnnotationType"].POINT_IN_TIME_ANNOTATION}'`,
      as: 'annotationType'
    }],
    params: [{
      name: ___WEBPACK_IMPORTED_MODULE_2__["HOVER_PARAM"],
      select: {
        type: 'point',
        on: 'mouseover'
      }
    }],
    encoding: {
      x: {
        axis: {
          title: xAxisTitle,
          grid: false,
          ticks: true,
          orient: 'bottom',
          domain: true
        },
        field: xAxisId,
        type: 'temporal',
        scale: {
          domain: [bucketStartTime, bucketEndTime]
        }
      },
      size: {
        condition: {
          empty: false,
          param: ___WEBPACK_IMPORTED_MODULE_2__["HOVER_PARAM"],
          value: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_MARK_SIZE_ENLARGED"]
        },
        value: ___WEBPACK_IMPORTED_MODULE_2__["EVENT_MARK_SIZE"]
      },
      tooltip: generateVisLayerTooltipFields(visLayerColumnIds)
    }
  });
  return newSpec;
};

// This is the total y-axis padding such that if this is added to the "padding" value of the view, if there is no axis,
// it will align values on the x-axis
const calculateYAxisPadding = config => {
  // TODO: figure out where this value is coming from
  const defaultPadding = 3;
  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'minExtent', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'offset', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'translate', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'domainWidth', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'labelPadding', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'titlePadding', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'tickOffset', 0) + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'tickSize', 0) + defaultPadding;
};

// Parse the vis augmenter config to apply different visual changes to the event chart spec.
// This includes potentially removing the original vis data, hiding axes, moving the legend, etc.
// Primarily used within the view events flyout to render the charts in different ways, and to
// ensure the stacked event charts are aligned with the base vis chart.
const augmentEventChartSpec = (config, origSpec) => {
  const inFlyout = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'inFlyout', false);
  const flyoutContext = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(config, 'flyoutContext', ___WEBPACK_IMPORTED_MODULE_2__["VisFlyoutContext"].BASE_VIS);
  const newVconcat = [];
  // @ts-ignore
  const newConfig = origSpec === null || origSpec === void 0 ? void 0 : origSpec.config;
  const visChart = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(origSpec, 'vconcat[0]', {});
  const eventChart = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(origSpec, 'vconcat[1]', {});
  if (inFlyout) {
    switch (flyoutContext) {
      case ___WEBPACK_IMPORTED_MODULE_2__["VisFlyoutContext"].BASE_VIS:
        newConfig.legend = {
          ...newConfig.legend,
          orient: 'top',
          // need to set offset to 0 so we don't cut off the chart canvas within the embeddable
          offset: 0
        };
        break;
      case ___WEBPACK_IMPORTED_MODULE_2__["VisFlyoutContext"].EVENT_VIS:
        eventChart.encoding.x.axis = {
          domain: true,
          grid: false,
          ticks: false,
          labels: false,
          title: null
        };
        eventChart.mark.fillOpacity = 0;
        break;
      case ___WEBPACK_IMPORTED_MODULE_2__["VisFlyoutContext"].TIMELINE_VIS:
        eventChart.transform = [{
          filter: 'false'
        }];
        break;
    }

    // if coming from view events page, need to standardize the y axis padding values so we can
    // align all of the charts correctly
    newConfig.axisY = {
      // We need minExtent and maxExtent to be the same. We cannot calculate these on-the-fly
      // so we need to force a static value. We choose 40 as a good middleground for sufficient
      // axis space without taking up too much actual chart space.
      minExtent: 40,
      maxExtent: 40,
      offset: 0,
      translate: 0,
      domainWidth: 1,
      labelPadding: 2,
      titlePadding: 2,
      tickOffset: 0,
      tickSize: 5
    };
  }
  if (flyoutContext === ___WEBPACK_IMPORTED_MODULE_2__["VisFlyoutContext"].BASE_VIS) {
    newVconcat.push(visChart);
  }
  newVconcat.push(eventChart);
  return {
    ...Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(origSpec),
    config: newConfig,
    vconcat: newVconcat
  };
};

/***/ }),

/***/ "./public/vega/index.ts":
/*!******************************!*\
  !*** ./public/vega/index.ts ***!
  \******************************/
/*! exports provided: enableVisLayersInSpecConfig, addVisEventSignalsToSpecConfig, getXAxisId, isVisLayerColumn, generateVisLayerFilterString, generateVisLayerTooltipFields, addMissingRowsToTableBounds, addPointInTimeEventsLayersToTable, addPointInTimeEventsLayersToSpec, calculateYAxisPadding, augmentEventChartSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./public/vega/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableVisLayersInSpecConfig", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["enableVisLayersInSpecConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addVisEventSignalsToSpecConfig", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["addVisEventSignalsToSpecConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getXAxisId", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["getXAxisId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisLayerColumn", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["isVisLayerColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerFilterString", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["generateVisLayerFilterString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateVisLayerTooltipFields", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["generateVisLayerTooltipFields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMissingRowsToTableBounds", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["addMissingRowsToTableBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToTable", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["addPointInTimeEventsLayersToTable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPointInTimeEventsLayersToSpec", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["addPointInTimeEventsLayersToSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateYAxisPadding", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["calculateYAxisPadding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "augmentEventChartSpec", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["augmentEventChartSpec"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/view_events_flyout/actions/index.ts":
/*!****************************************************!*\
  !*** ./public/view_events_flyout/actions/index.ts ***!
  \****************************************************/
/*! exports provided: OPEN_EVENTS_FLYOUT_ACTION, OpenEventsFlyoutAction, VIEW_EVENTS_OPTION_ACTION, ViewEventsOptionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _open_events_flyout_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open_events_flyout_action */ "./public/view_events_flyout/actions/open_events_flyout_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_EVENTS_FLYOUT_ACTION", function() { return _open_events_flyout_action__WEBPACK_IMPORTED_MODULE_0__["OPEN_EVENTS_FLYOUT_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenEventsFlyoutAction", function() { return _open_events_flyout_action__WEBPACK_IMPORTED_MODULE_0__["OpenEventsFlyoutAction"]; });

/* harmony import */ var _view_events_option_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_events_option_action */ "./public/view_events_flyout/actions/view_events_option_action.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEW_EVENTS_OPTION_ACTION", function() { return _view_events_option_action__WEBPACK_IMPORTED_MODULE_1__["VIEW_EVENTS_OPTION_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEventsOptionAction", function() { return _view_events_option_action__WEBPACK_IMPORTED_MODULE_1__["ViewEventsOptionAction"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/view_events_flyout/actions/open_events_flyout.tsx":
/*!******************************************************************!*\
  !*** ./public/view_events_flyout/actions/open_events_flyout.tsx ***!
  \******************************************************************/
/*! exports provided: openViewEventsFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openViewEventsFlyout", function() { return openViewEventsFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./public/view_events_flyout/components/index.ts");
/* harmony import */ var _flyout_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flyout_state */ "./public/view_events_flyout/flyout_state.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





async function openViewEventsFlyout(props) {
  Object(_flyout_state__WEBPACK_IMPORTED_MODULE_3__["setFlyoutState"])(_flyout_state__WEBPACK_IMPORTED_MODULE_3__["VIEW_EVENTS_FLYOUT_STATE"].OPEN);
  const flyoutSession = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getCore"])().overlays.openFlyout(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ViewEventsFlyout"], {
    onClose: () => {
      if (flyoutSession) {
        flyoutSession.close();
        Object(_flyout_state__WEBPACK_IMPORTED_MODULE_3__["setFlyoutState"])(_flyout_state__WEBPACK_IMPORTED_MODULE_3__["VIEW_EVENTS_FLYOUT_STATE"].CLOSED);
      }
    },
    savedObjectId: props.savedObjectId
  })), {
    'data-test-subj': 'viewEventsFlyout',
    ownFocus: true
  });
}

/***/ }),

/***/ "./public/view_events_flyout/actions/open_events_flyout_action.ts":
/*!************************************************************************!*\
  !*** ./public/view_events_flyout/actions/open_events_flyout_action.ts ***!
  \************************************************************************/
/*! exports provided: OPEN_EVENTS_FLYOUT_ACTION, OpenEventsFlyoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_EVENTS_FLYOUT_ACTION", function() { return OPEN_EVENTS_FLYOUT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenEventsFlyoutAction", function() { return OpenEventsFlyoutAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _open_events_flyout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open_events_flyout */ "./public/view_events_flyout/actions/open_events_flyout.tsx");
/* harmony import */ var _flyout_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flyout_state */ "./public/view_events_flyout/flyout_state.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const OPEN_EVENTS_FLYOUT_ACTION = 'OPEN_EVENTS_FLYOUT_ACTION';

/**
 * This action is identical to VIEW_EVENTS_OPTION_ACTION, but with different context.
 * This is because the chart doesn't persist the embeddable, which is the default
 * context used by the CONTEXT_MENU_TRIGGER. Because of that, we need a separate
 * one that can be persisted in the chart - in this case, the AugmentVisContext,
 * which is just a saved object ID.
 */

class OpenEventsFlyoutAction {
  constructor() {
    _defineProperty(this, "type", OPEN_EVENTS_FLYOUT_ACTION);
    _defineProperty(this, "id", OPEN_EVENTS_FLYOUT_ACTION);
    _defineProperty(this, "order", 1);
  }
  getIconType() {
    return undefined;
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visAugmenter.actions.viewEvents.displayName', {
      defaultMessage: 'View Events'
    });
  }
  async isCompatible({
    savedObjectId
  }) {
    // checks for null / undefined / empty string
    return savedObjectId ? true : false;
  }
  async execute({
    savedObjectId
  }) {
    if (!(await this.isCompatible({
      savedObjectId
    }))) {
      throw new _ui_actions_public__WEBPACK_IMPORTED_MODULE_1__["IncompatibleActionError"]();
    }

    // This action may get triggered even when the flyout is already open (e.g.,
    // clicking on an annotation point within a chart displayed in the flyout).
    // In such case, we want to ignore it such that users can't keep endlessly
    // re-opening it.
    if (Object(_flyout_state__WEBPACK_IMPORTED_MODULE_3__["getFlyoutState"])() === _flyout_state__WEBPACK_IMPORTED_MODULE_3__["VIEW_EVENTS_FLYOUT_STATE"].CLOSED) {
      Object(_open_events_flyout__WEBPACK_IMPORTED_MODULE_2__["openViewEventsFlyout"])({
        savedObjectId
      });
    }
  }
}

/***/ }),

/***/ "./public/view_events_flyout/actions/view_events_option_action.tsx":
/*!*************************************************************************!*\
  !*** ./public/view_events_flyout/actions/view_events_option_action.tsx ***!
  \*************************************************************************/
/*! exports provided: VIEW_EVENTS_OPTION_ACTION, ViewEventsOptionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_EVENTS_OPTION_ACTION", function() { return VIEW_EVENTS_OPTION_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventsOptionAction", function() { return ViewEventsOptionAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _open_events_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open_events_flyout */ "./public/view_events_flyout/actions/open_events_flyout.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./public/utils/index.ts");
/* harmony import */ var _flyout_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flyout_state */ "./public/view_events_flyout/flyout_state.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







const VIEW_EVENTS_OPTION_ACTION = 'VIEW_EVENTS_OPTION_ACTION';
class ViewEventsOptionAction {
  constructor() {
    _defineProperty(this, "type", VIEW_EVENTS_OPTION_ACTION);
    _defineProperty(this, "id", VIEW_EVENTS_OPTION_ACTION);
    _defineProperty(this, "order", 1);
    _defineProperty(this, "grouping", [{
      id: VIEW_EVENTS_OPTION_ACTION,
      getDisplayName: this.getDisplayName,
      getIconType: this.getIconType,
      category: 'vis_augmenter',
      order: 10
    }]);
  }
  getIconType() {
    return 'inspect';
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visAugmenter.actions.viewEvents.displayName', {
      defaultMessage: 'View Events'
    });
  }
  async isCompatible({
    embeddable
  }) {
    const vis = embeddable.vis;
    return vis !== undefined && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isEligibleForVisLayers"])(vis) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(embeddable.visLayers);
  }
  async execute({
    embeddable
  }) {
    if (!(await this.isCompatible({
      embeddable
    }))) {
      throw new _ui_actions_public__WEBPACK_IMPORTED_MODULE_2__["IncompatibleActionError"]();
    }
    const visEmbeddable = embeddable;
    const savedObjectId = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(visEmbeddable.getInput(), 'savedObjectId', '');

    // This action may get triggered even when the flyout is already open (e.g.,
    // clicking on an annotation point within a chart displayed in the flyout).
    // In such case, we want to ignore it such that users can't keep endlessly
    // re-opening it.
    if (Object(_flyout_state__WEBPACK_IMPORTED_MODULE_5__["getFlyoutState"])() === _flyout_state__WEBPACK_IMPORTED_MODULE_5__["VIEW_EVENTS_FLYOUT_STATE"].CLOSED) {
      Object(_open_events_flyout__WEBPACK_IMPORTED_MODULE_3__["openViewEventsFlyout"])({
        savedObjectId
      });
    }
  }
}

/***/ }),

/***/ "./public/view_events_flyout/components/base_vis_item.tsx":
/*!****************************************************************!*\
  !*** ./public/view_events_flyout/components/base_vis_item.tsx ***!
  \****************************************************************/
/*! exports provided: BaseVisItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseVisItem", function() { return BaseVisItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function BaseVisItem(props) {
  const PanelComponent = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getEmbeddable"])().getEmbeddablePanel();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "view-events-flyout__visDescription",
    grow: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: true,
    className: "view-events-flyout__baseVis",
    "data-test-subj": "baseVis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelComponent, {
    embeddable: props.embeddable,
    hideHeader: true,
    hasBorder: false,
    hasShadow: false
  })));
}

/***/ }),

/***/ "./public/view_events_flyout/components/date_range_item.tsx":
/*!******************************************************************!*\
  !*** ./public/view_events_flyout/components/date_range_item.tsx ***!
  \******************************************************************/
/*! exports provided: DateRangeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeItem", function() { return DateRangeItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_events_flyout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_events_flyout */ "./public/view_events_flyout/components/view_events_flyout.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function DateRangeItem(props) {
  const [lastUpdatedTime, setLastUpdatedTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format(_view_events_flyout__WEBPACK_IMPORTED_MODULE_3__["DATE_RANGE_FORMAT"]));
  const durationText = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["prettyDuration"])(props.timeRange.from, props.timeRange.to, [], _view_events_flyout__WEBPACK_IMPORTED_MODULE_3__["DATE_RANGE_FORMAT"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "m",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
    type: "calendar"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    "data-test-subj": "durationText"
  }, durationText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
    iconType: 'refresh',
    isDisabled: false,
    onClick: () => {
      props.reload();
      setLastUpdatedTime(moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format(_view_events_flyout__WEBPACK_IMPORTED_MODULE_3__["DATE_RANGE_FORMAT"]));
    },
    "data-test-subj": "refreshButton"
  }, "Refresh")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "refreshDescriptionText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s",
    color: "subdued",
    style: {
      whiteSpace: 'pre-line'
    }
  }, `This view is not updated to load the latest events automatically.
         Last updated: ${lastUpdatedTime}`)));
}

/***/ }),

/***/ "./public/view_events_flyout/components/error_flyout_body.tsx":
/*!********************************************************************!*\
  !*** ./public/view_events_flyout/components/error_flyout_body.tsx ***!
  \********************************************************************/
/*! exports provided: ErrorFlyoutBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorFlyoutBody", function() { return ErrorFlyoutBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



function ErrorFlyoutBody(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
    color: "danger",
    iconType: "alert",
    "data-test-subj": "errorCallOut"
  }, props.errorMessage))));
}

/***/ }),

/***/ "./public/view_events_flyout/components/event_vis_item.tsx":
/*!*****************************************************************!*\
  !*** ./public/view_events_flyout/components/event_vis_item.tsx ***!
  \*****************************************************************/
/*! exports provided: EventVisItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventVisItem", function() { return EventVisItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_vis_item_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event_vis_item_icon */ "./public/view_events_flyout/components/event_vis_item_icon.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







function EventVisItem(props) {
  const PanelComponent = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getEmbeddable"])().getEmbeddablePanel();
  const baseUrl = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getCore"])().http.basePath;
  const name = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props, 'item.visLayer.pluginResource.name', '');
  const urlPath = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props, 'item.visLayer.pluginResource.urlPath', '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    className: "view-events-flyout__visDescription",
    "data-test-subj": "pluginResourceDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
    href: `${baseUrl.prepend(`${urlPath}`)}`,
    target: "_blank"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_vis_item_icon__WEBPACK_IMPORTED_MODULE_5__["EventVisItemIcon"], {
    visLayer: props.item.visLayer
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: true,
    className: "view-events-flyout__eventVis",
    "data-test-subj": "eventVis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelComponent, {
    embeddable: props.item.embeddable,
    hideHeader: true,
    hasBorder: false,
    hasShadow: false
  }))));
}

/***/ }),

/***/ "./public/view_events_flyout/components/event_vis_item_icon.tsx":
/*!**********************************************************************!*\
  !*** ./public/view_events_flyout/components/event_vis_item_icon.tsx ***!
  \**********************************************************************/
/*! exports provided: EventVisItemIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventVisItemIcon", function() { return EventVisItemIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ */ "./public/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






/**
 * Returns a badge with the event count for this particular VisLayer (only PointInTimeEventVisLayers
 * are currently supported), or an error icon which can be clicked to view the error message.
 */
function EventVisItemIcon(props) {
  const [isErrorPopoverOpen, setIsErrorPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onButtonClick = () => setIsErrorPopoverOpen(isOpen => !isOpen);
  const closeErrorPopover = () => setIsErrorPopoverOpen(false);
  const errorMsg = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props, 'visLayer.error.message', undefined);
  const isError = errorMsg !== undefined;
  const showEventCount = props.visLayer.type === ___WEBPACK_IMPORTED_MODULE_4__["VisLayerTypes"].PointInTimeEvents && !isError;
  const dangerButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
    "data-test-subj": "dangerButton",
    "aria-label": "Open error details",
    className: "error-icon-padding",
    iconType: 'alert',
    color: "danger",
    size: "xs",
    display: "empty",
    onClick: onButtonClick
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showEventCount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "eventCount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiNotificationBadge"], {
    color: "subdued"
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(props.visLayer, 'events.length', 0))) : isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false,
    "data-test-subj": "errorButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
    button: dangerButton,
    isOpen: isErrorPopoverOpen,
    closePopover: closeErrorPopover,
    panelPaddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, errorMsg))) : null);
}

/***/ }),

/***/ "./public/view_events_flyout/components/events_panel.tsx":
/*!***************************************************************!*\
  !*** ./public/view_events_flyout/components/events_panel.tsx ***!
  \***************************************************************/
/*! exports provided: EventsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPanel", function() { return EventsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugin_events_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin_events_panel */ "./public/view_events_flyout/components/plugin_events_panel.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function EventsPanel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Array.from(props.eventVisEmbeddablesMap.keys()).map((key, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index
    }, index !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "l"
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_plugin_events_panel__WEBPACK_IMPORTED_MODULE_3__["PluginEventsPanel"], {
      pluginTitle: key,
      items: props.eventVisEmbeddablesMap.get(key)
    }));
  }));
}

/***/ }),

/***/ "./public/view_events_flyout/components/index.ts":
/*!*******************************************************!*\
  !*** ./public/view_events_flyout/components/index.ts ***!
  \*******************************************************/
/*! exports provided: ViewEventsFlyout, EventVisEmbeddablesMap, EventVisEmbeddableItem, fetchVisEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_events_flyout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_events_flyout */ "./public/view_events_flyout/components/view_events_flyout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEventsFlyout", function() { return _view_events_flyout__WEBPACK_IMPORTED_MODULE_0__["ViewEventsFlyout"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/view_events_flyout/components/types.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventVisEmbeddablesMap", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["EventVisEmbeddablesMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventVisEmbeddableItem", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["EventVisEmbeddableItem"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./public/view_events_flyout/components/utils.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchVisEmbeddable", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["fetchVisEmbeddable"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





/***/ }),

/***/ "./public/view_events_flyout/components/loading_flyout_body.tsx":
/*!**********************************************************************!*\
  !*** ./public/view_events_flyout/components/loading_flyout_body.tsx ***!
  \**********************************************************************/
/*! exports provided: LoadingFlyoutBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingFlyoutBody", function() { return LoadingFlyoutBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



function LoadingFlyoutBody() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "spaceAround"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingSpinner"], {
    size: "xl",
    "data-test-subj": "loadingSpinner"
  }))));
}

/***/ }),

/***/ "./public/view_events_flyout/components/plugin_events_panel.tsx":
/*!**********************************************************************!*\
  !*** ./public/view_events_flyout/components/plugin_events_panel.tsx ***!
  \**********************************************************************/
/*! exports provided: PluginEventsPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginEventsPanel", function() { return PluginEventsPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_vis_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event_vis_item */ "./public/view_events_flyout/components/event_vis_item.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function PluginEventsPanel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false,
    style: {
      marginBottom: '12px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "m",
    style: {
      fontWeight: 'bold'
    }
  }, props.pluginTitle)), props.items.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_vis_item__WEBPACK_IMPORTED_MODULE_3__["EventVisItem"], {
    key: index,
    item: item
  })));
}

/***/ }),

/***/ "./public/view_events_flyout/components/styles.scss":
/*!**********************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./styles.scss?v7dark */ "./public/view_events_flyout/components/styles.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./styles.scss?v7light */ "./public/view_events_flyout/components/styles.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./styles.scss?v8dark */ "./public/view_events_flyout/components/styles.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./styles.scss?v8light */ "./public/view_events_flyout/components/styles.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./styles.scss?v9dark */ "./public/view_events_flyout/components/styles.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./styles.scss?v9light */ "./public/view_events_flyout/components/styles.scss?v9light");
}

/***/ }),

/***/ "./public/view_events_flyout/components/styles.scss?v7dark":
/*!*****************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v7dark ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./styles.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v7dark");

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

/***/ "./public/view_events_flyout/components/styles.scss?v7light":
/*!******************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v7light ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./styles.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v7light");

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

/***/ "./public/view_events_flyout/components/styles.scss?v8dark":
/*!*****************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v8dark ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./styles.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v8dark");

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

/***/ "./public/view_events_flyout/components/styles.scss?v8light":
/*!******************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v8light ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./styles.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v8light");

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

/***/ "./public/view_events_flyout/components/styles.scss?v9dark":
/*!*****************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v9dark ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./styles.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v9dark");

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

/***/ "./public/view_events_flyout/components/styles.scss?v9light":
/*!******************************************************************!*\
  !*** ./public/view_events_flyout/components/styles.scss?v9light ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./styles.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/view_events_flyout/components/styles.scss?v9light");

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

/***/ "./public/view_events_flyout/components/timeline_panel.tsx":
/*!*****************************************************************!*\
  !*** ./public/view_events_flyout/components/timeline_panel.tsx ***!
  \*****************************************************************/
/*! exports provided: TimelinePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePanel", function() { return TimelinePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function TimelinePanel(props) {
  const PanelComponent = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getEmbeddable"])().getEmbeddablePanel();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false,
    className: "view-events-flyout__visDescription"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: true,
    className: "view-events-flyout__timelinePanel",
    "data-test-subj": "timelineVis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelComponent, {
    embeddable: props.embeddable,
    hideHeader: true,
    hasBorder: false,
    hasShadow: false
  })));
}

/***/ }),

/***/ "./public/view_events_flyout/components/types.tsx":
/*!********************************************************!*\
  !*** ./public/view_events_flyout/components/types.tsx ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/view_events_flyout/components/utils.tsx":
/*!********************************************************!*\
  !*** ./public/view_events_flyout/components/utils.tsx ***!
  \********************************************************/
/*! exports provided: getErrorMessage, fetchVisEmbeddable, fetchVisEmbeddableWithSetters, createEventEmbeddables, createTimelineEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisEmbeddable", function() { return fetchVisEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisEmbeddableWithSetters", function() { return fetchVisEmbeddableWithSetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventEmbeddables", function() { return createEventEmbeddables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimelineEmbeddable", function() { return createTimelineEmbeddable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_embeddable_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./public/types.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





function getErrorMessage(errorEmbeddable) {
  return errorEmbeddable.error instanceof Error ? errorEmbeddable.error.message : errorEmbeddable.error;
}

/**
 * Given an embeddable, check if/where there is value (y) axes located on the left and/or
 * right of the chart. This is needed so we can properly align all of the event
 * charts in the flyout appropriately.
 */
function getValueAxisPositions(embeddable) {
  let hasLeftValueAxis = false;
  let hasRightValueAxis = false;
  if (embeddable !== undefined) {
    const valueAxes = embeddable.vis.params.valueAxes;
    const positions = valueAxes.map(valueAxis => valueAxis.position);
    hasLeftValueAxis = positions.includes('left');
    hasRightValueAxis = positions.includes('right');
  }
  return {
    left: hasLeftValueAxis,
    right: hasRightValueAxis
  };
}

/**
 * Fetching the base vis to show in the flyout, based on the saved object ID. Add constraints
 * such that it is static and won't auto-refresh within the flyout.
 * @param savedObjectId the saved object id of the base vis
 * @param embeddableStart Optional EmbeddableStart passed in for plugins to utilize the function
 * @param queryServiceLoader Optional QueryStart passed in for plugins to utilize the function
 */
async function fetchVisEmbeddable(savedObjectId, embeddableStart, queryStart) {
  const embeddableLoader = embeddableStart !== null && embeddableStart !== void 0 ? embeddableStart : Object(_services__WEBPACK_IMPORTED_MODULE_2__["getEmbeddable"])();
  const embeddableVisFactory = embeddableLoader.getEmbeddableFactory('visualization');
  const queryService = queryStart !== null && queryStart !== void 0 ? queryStart : Object(_services__WEBPACK_IMPORTED_MODULE_2__["getQueryService"])();
  const contextInput = {
    filters: queryService.filterManager.getFilters(),
    query: queryService.queryString.getQuery(),
    timeRange: queryService.timefilter.timefilter.getTime()
  };
  const embeddable = await (embeddableVisFactory === null || embeddableVisFactory === void 0 ? void 0 : embeddableVisFactory.createFromSavedObject(savedObjectId, {
    ...contextInput,
    visAugmenterConfig: {
      inFlyout: true,
      flyoutContext: _types__WEBPACK_IMPORTED_MODULE_3__["VisFlyoutContext"].BASE_VIS
    }
  }));
  if (embeddable instanceof _embeddable_public__WEBPACK_IMPORTED_MODULE_1__["ErrorEmbeddable"]) {
    throw getErrorMessage(embeddable);
  }
  embeddable.updateInput({
    // @ts-ignore
    refreshConfig: {
      value: 0,
      pause: true
    }
  });

  // By waiting for this to complete, embeddable.visLayers will be populated
  await embeddable.populateVisLayers();
  return embeddable;
}

/**
 * Fetching the base vis to show in the flyout, based on the saved object ID. Add constraints
 * such that it is static and won't auto-refresh within the flyout.
 * @param savedObjectId the saved object id of the base vis
 * @param setTimeRange custom hook used in base component
 * @param setVisEmbeddable custom hook used in base component
 * @param setErrorMessage custom hook used in base component
 */
async function fetchVisEmbeddableWithSetters(savedObjectId, setTimeRange, setVisEmbeddable, setErrorMessage) {
  try {
    const embeddable = await fetchVisEmbeddable(savedObjectId);
    setTimeRange(Object(_services__WEBPACK_IMPORTED_MODULE_2__["getQueryService"])().timefilter.timefilter.getTime());
    setVisEmbeddable(embeddable);
  } catch (err) {
    setErrorMessage(String(err));
  }
}

/**
 * For each VisLayer in the base vis embeddable, generate a new filtered vis
 * embeddable (based off of the base vis), and pass in extra arguments to only
 * show datapoints for that particular VisLayer. Partition them by
 * plugin resource type via an EventVisEmbeddablesMap.
 * @param savedObjectId the saved object id of the base vis embeddable
 * @param embeddable the base vis embeddable
 * @param setEventVisEmbeddablesMap custom hook used in base component
 * @param setErrorMessage custom hook used in base component
 */
async function createEventEmbeddables(savedObjectId, embeddable, setEventVisEmbeddablesMap, setErrorMessage) {
  const embeddableVisFactory = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getEmbeddable"])().getEmbeddableFactory('visualization');
  try {
    const {
      left,
      right
    } = getValueAxisPositions(embeddable);
    const map = new Map();
    // Currently only support PointInTimeEventVisLayers. Different layer types
    // may require different logic in here
    const visLayers = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(embeddable, 'visLayers', []).filter(visLayer => Object(_types__WEBPACK_IMPORTED_MODULE_3__["isPointInTimeEventsVisLayer"])(visLayer));
    if (visLayers !== undefined) {
      const contextInput = {
        filters: embeddable.getInput().filters,
        query: embeddable.getInput().query,
        timeRange: embeddable.getInput().timeRange
      };
      await Promise.all(visLayers.map(async visLayer => {
        const pluginResourceType = visLayer.pluginResource.type;
        const eventEmbeddable = await (embeddableVisFactory === null || embeddableVisFactory === void 0 ? void 0 : embeddableVisFactory.createFromSavedObject(savedObjectId, {
          ...contextInput,
          visAugmenterConfig: {
            visLayerResourceIds: [visLayer.pluginResource.id],
            inFlyout: true,
            flyoutContext: _types__WEBPACK_IMPORTED_MODULE_3__["VisFlyoutContext"].EVENT_VIS,
            leftValueAxisPadding: left,
            rightValueAxisPadding: right
          }
        }));
        if (eventEmbeddable instanceof _embeddable_public__WEBPACK_IMPORTED_MODULE_1__["ErrorEmbeddable"]) {
          throw getErrorMessage(eventEmbeddable);
        }
        eventEmbeddable.updateInput({
          // @ts-ignore
          refreshConfig: {
            value: 0,
            pause: true
          }
        });
        const curList = map.get(pluginResourceType) === undefined ? [] : map.get(pluginResourceType);
        curList.push({
          visLayer,
          embeddable: eventEmbeddable
        });
        map.set(pluginResourceType, curList);
      }));
      setEventVisEmbeddablesMap(map);
    }
  } catch (err) {
    setErrorMessage(String(err));
  }
}

/**
 * Based on the base vis embeddable, generate a new filtered vis, and pass in extra
 * arguments to only show the x-axis (timeline).
 * @param savedObjectId the saved object id of the base vis
 * @param embeddable the base vis embeddable
 * @param setTimelineVisEmbeddable custom hook used in base component
 * @param setErrorMessage custom hook used in base component
 */
async function createTimelineEmbeddable(savedObjectId, embeddable, setTimelineVisEmbeddable, setErrorMessage) {
  const embeddableVisFactory = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getEmbeddable"])().getEmbeddableFactory('visualization');
  try {
    const {
      left,
      right
    } = getValueAxisPositions(embeddable);
    const contextInput = {
      filters: embeddable.getInput().filters,
      query: embeddable.getInput().query,
      timeRange: embeddable.getInput().timeRange
    };
    const timelineEmbeddable = await (embeddableVisFactory === null || embeddableVisFactory === void 0 ? void 0 : embeddableVisFactory.createFromSavedObject(savedObjectId, {
      ...contextInput,
      visAugmenterConfig: {
        inFlyout: true,
        flyoutContext: _types__WEBPACK_IMPORTED_MODULE_3__["VisFlyoutContext"].TIMELINE_VIS,
        leftValueAxisPadding: left,
        rightValueAxisPadding: right
      }
    }));
    if (timelineEmbeddable instanceof _embeddable_public__WEBPACK_IMPORTED_MODULE_1__["ErrorEmbeddable"]) {
      throw getErrorMessage(timelineEmbeddable);
    }
    timelineEmbeddable.updateInput({
      // @ts-ignore
      refreshConfig: {
        value: 0,
        pause: true
      }
    });
    setTimelineVisEmbeddable(timelineEmbeddable);
  } catch (err) {
    setErrorMessage(String(err));
  }
}

/***/ }),

/***/ "./public/view_events_flyout/components/view_events_flyout.tsx":
/*!*********************************************************************!*\
  !*** ./public/view_events_flyout/components/view_events_flyout.tsx ***!
  \*********************************************************************/
/*! exports provided: DATE_RANGE_FORMAT, ViewEventsFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_RANGE_FORMAT", function() { return DATE_RANGE_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventsFlyout", function() { return ViewEventsFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./public/view_events_flyout/components/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_vis_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base_vis_item */ "./public/view_events_flyout/components/base_vis_item.tsx");
/* harmony import */ var _date_range_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date_range_item */ "./public/view_events_flyout/components/date_range_item.tsx");
/* harmony import */ var _loading_flyout_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading_flyout_body */ "./public/view_events_flyout/components/loading_flyout_body.tsx");
/* harmony import */ var _error_flyout_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error_flyout_body */ "./public/view_events_flyout/components/error_flyout_body.tsx");
/* harmony import */ var _events_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events_panel */ "./public/view_events_flyout/components/events_panel.tsx");
/* harmony import */ var _timeline_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline_panel */ "./public/view_events_flyout/components/timeline_panel.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./public/view_events_flyout/components/utils.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */











const DATE_RANGE_FORMAT = 'MM/DD/YYYY HH:mm';
function ViewEventsFlyout(props) {
  const [visEmbeddable, setVisEmbeddable] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  // This map persists a plugin resource type -> a list of vis embeddables
  // for each VisLayer of that type
  const [eventVisEmbeddablesMap, setEventVisEmbeddablesMap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [timelineVisEmbeddable, setTimelineVisEmbeddable] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [timeRange, setTimeRange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [errorMessage, setErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  function reload() {
    visEmbeddable === null || visEmbeddable === void 0 || visEmbeddable.reload();
    eventVisEmbeddablesMap === null || eventVisEmbeddablesMap === void 0 || eventVisEmbeddablesMap.forEach(embeddableItems => {
      embeddableItems.forEach(embeddableItem => {
        embeddableItem.embeddable.reload();
      });
    });
  }
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["fetchVisEmbeddableWithSetters"])(props.savedObjectId, setTimeRange, setVisEmbeddable, setErrorMessage);
    // adding all of the values to the deps array cause a circular re-render. we don't want
    // to keep re-fetching the visEmbeddable after it is set.
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [props.savedObjectId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (visEmbeddable !== null && visEmbeddable !== void 0 && visEmbeddable.visLayers) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createEventEmbeddables"])(props.savedObjectId, visEmbeddable, setEventVisEmbeddablesMap, setErrorMessage);
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createTimelineEmbeddable"])(props.savedObjectId, visEmbeddable, setTimelineVisEmbeddable, setErrorMessage);
    }
  }, [visEmbeddable === null || visEmbeddable === void 0 ? void 0 : visEmbeddable.visLayers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (visEmbeddable !== undefined && eventVisEmbeddablesMap !== undefined && timeRange !== undefined && timelineVisEmbeddable !== undefined) {
      setIsLoading(false);
    }
  }, [visEmbeddable, eventVisEmbeddablesMap, timeRange, timelineVisEmbeddable]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
    size: "l",
    onClose: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingContent"], {
    lines: 1
  }) : errorMessage ? 'Error fetching events' : `${visEmbeddable === null || visEmbeddable === void 0 ? void 0 : visEmbeddable.getTitle()}`))), errorMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_flyout_body__WEBPACK_IMPORTED_MODULE_6__["ErrorFlyoutBody"], {
    errorMessage: errorMessage
  }) : isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_flyout_body__WEBPACK_IMPORTED_MODULE_5__["LoadingFlyoutBody"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: "view-events-flyout__content",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "view-events-flyout__contentPanel date-range-panel-height",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_range_item__WEBPACK_IMPORTED_MODULE_4__["DateRangeItem"], {
    timeRange: timeRange,
    reload: reload
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "view-events-flyout__contentPanel",
    grow: 7,
    style: {
      maxHeight: '40vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_vis_item__WEBPACK_IMPORTED_MODULE_3__["BaseVisItem"], {
    embeddable: visEmbeddable
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "view-events-flyout__contentPanel show-y-scroll",
    grow: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_events_panel__WEBPACK_IMPORTED_MODULE_7__["EventsPanel"], {
    eventVisEmbeddablesMap: eventVisEmbeddablesMap
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "view-events-flyout__contentPanel timeline-panel-height",
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timeline_panel__WEBPACK_IMPORTED_MODULE_8__["TimelinePanel"], {
    embeddable: timelineVisEmbeddable
  }))))));
}

/***/ }),

/***/ "./public/view_events_flyout/flyout_state.ts":
/*!***************************************************!*\
  !*** ./public/view_events_flyout/flyout_state.ts ***!
  \***************************************************/
/*! exports provided: VIEW_EVENTS_FLYOUT_STATE, getFlyoutState, setFlyoutState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_EVENTS_FLYOUT_STATE", function() { return VIEW_EVENTS_FLYOUT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlyoutState", function() { return getFlyoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFlyoutState", function() { return setFlyoutState; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


let VIEW_EVENTS_FLYOUT_STATE = /*#__PURE__*/function (VIEW_EVENTS_FLYOUT_STATE) {
  VIEW_EVENTS_FLYOUT_STATE["OPEN"] = "OPEN";
  VIEW_EVENTS_FLYOUT_STATE["CLOSED"] = "CLOSED";
  return VIEW_EVENTS_FLYOUT_STATE;
}({});
const [getFlyoutState, setFlyoutState] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])(VIEW_EVENTS_FLYOUT_STATE.CLOSED);

// This is primarily used for mocking this module and each of its fns in tests.
// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = ({
  VIEW_EVENTS_FLYOUT_STATE,
  getFlyoutState,
  setFlyoutState
});

/***/ }),

/***/ "./public/view_events_flyout/index.ts":
/*!********************************************!*\
  !*** ./public/view_events_flyout/index.ts ***!
  \********************************************/
/*! exports provided: OPEN_EVENTS_FLYOUT_ACTION, OpenEventsFlyoutAction, VIEW_EVENTS_OPTION_ACTION, ViewEventsOptionAction, ViewEventsFlyout, EventVisEmbeddablesMap, EventVisEmbeddableItem, fetchVisEmbeddable, VIEW_EVENTS_FLYOUT_STATE, getFlyoutState, setFlyoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./public/view_events_flyout/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_EVENTS_FLYOUT_ACTION", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_EVENTS_FLYOUT_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenEventsFlyoutAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["OpenEventsFlyoutAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEW_EVENTS_OPTION_ACTION", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["VIEW_EVENTS_OPTION_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEventsOptionAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["ViewEventsOptionAction"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./public/view_events_flyout/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEventsFlyout", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["ViewEventsFlyout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventVisEmbeddablesMap", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["EventVisEmbeddablesMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventVisEmbeddableItem", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["EventVisEmbeddableItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchVisEmbeddable", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["fetchVisEmbeddable"]; });

/* harmony import */ var _flyout_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flyout_state */ "./public/view_events_flyout/flyout_state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEW_EVENTS_FLYOUT_STATE", function() { return _flyout_state__WEBPACK_IMPORTED_MODULE_2__["VIEW_EVENTS_FLYOUT_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlyoutState", function() { return _flyout_state__WEBPACK_IMPORTED_MODULE_2__["getFlyoutState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFlyoutState", function() { return _flyout_state__WEBPACK_IMPORTED_MODULE_2__["setFlyoutState"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





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

/***/ "plugin/embeddable/public":
/*!*************************************************!*\
  !*** @osd/bundleRef "plugin/embeddable/public" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/embeddable/public');
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

/***/ "plugin/savedObjects/public":
/*!***************************************************!*\
  !*** @osd/bundleRef "plugin/savedObjects/public" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/savedObjects/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/savedObjectsManagement/public":
/*!*************************************************************!*\
  !*** @osd/bundleRef "plugin/savedObjectsManagement/public" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/savedObjectsManagement/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/uiActions/public":
/*!************************************************!*\
  !*** @osd/bundleRef "plugin/uiActions/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/uiActions/public');
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
//# sourceMappingURL=visAugmenter.plugin.js.map