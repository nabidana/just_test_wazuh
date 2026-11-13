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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#dfe5ef;font-size:12px;font-size:0.75rem;line-height:1.5rem;font-weight:700;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#535966}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(212,218,229,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#093b56}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#535966;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(255,206,122,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#7a7f89}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,qCAAqC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,oEAAoE,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,qCAAqC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#dfe5ef;font-size:12px;font-size:0.75rem;line-height:1.5rem;font-weight:700;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#535966}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(212,218,229,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#093b56}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#535966;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(255,206,122,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#7a7f89}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#1a1c21;font-size:12px;font-size:0.75rem;line-height:1.5rem;font-weight:700;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#98a2b3}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(52,55,65,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e6f0f8}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#98a2b3;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(245,167,0,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#6a717d}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,cAAc,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,kCAAkC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,gFAAgF,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,mCAAmC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#1a1c21;font-size:12px;font-size:0.75rem;line-height:1.5rem;font-weight:700;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#98a2b3}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(52,55,65,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e6f0f8}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#98a2b3;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(152,162,179,.15),0 2px 2px -1px rgba(152,162,179,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(245,167,0,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#6a717d}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#dfe5ef;font-size:13.5px;font-size:0.75rem;line-height:1.3333333333rem;font-weight:700;letter-spacing:-0.005em;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#5b6875}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(223,227,232,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#0e4342}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#5b6875;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(255,206,122,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#9fa6af}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,2BAA2B,CAAC,eAAe,CAAC,uBAAuB,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,qCAAqC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,oEAAoE,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,qCAAqC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#dfe5ef;font-size:13.5px;font-size:0.75rem;line-height:1.3333333333rem;font-weight:700;letter-spacing:-0.005em;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#5b6875}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(223,227,232,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#0e4342}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#5b6875;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(255,206,122,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#9fa6af}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#1a2631;font-size:13.5px;font-size:0.75rem;line-height:1.3333333333rem;font-weight:700;letter-spacing:-0.005em;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#adb4ba}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(42,57,71,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e4f2f2}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#adb4ba;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(245,167,0,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#676e75}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,2BAA2B,CAAC,eAAe,CAAC,uBAAuB,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,kCAAkC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,gFAAgF,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,mCAAmC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#1a2631;font-size:13.5px;font-size:0.75rem;line-height:1.3333333333rem;font-weight:700;letter-spacing:-0.005em;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#adb4ba}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(42,57,71,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e4f2f2}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#adb4ba;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(245,167,0,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#676e75}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#c6c9ce;font-size:14px;font-size:1rem;line-height:1.2143rem;font-weight:500;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#5c666f}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(227,229,233,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#013652}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#5c666f;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(244,174,39,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#798189}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,qBAAqB,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,qCAAqC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,oEAAoE,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,oCAAoC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#c6c9ce;font-size:14px;font-size:1rem;line-height:1.2143rem;font-weight:500;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#5c666f}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(227,229,233,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#013652}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#5c666f;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.15),0 2px 2px -1px rgba(0,0,0,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(244,174,39,.3);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#798189}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#161e2b;font-size:14px;font-size:1rem;line-height:1.2143rem;font-weight:500;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#adb4ba}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(42,57,71,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e3eff8}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#adb4ba;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(224,161,48,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#686c75}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,UAAU,YAAY,CAAC,MAAM,CAAC,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,eAAe,CAAC,iBAAiB,CAAC,oBAAoB,sBAAsB,CAAC,kBAAkB,CAAC,6BAA6B,YAAY,CAAC,aAAa,CAAC,SAAS,CAAC,YAAY,CAAC,wCAAwC,UAAU,CAAC,kBAAkB,aAAa,CAAC,YAAY,CAAC,wBAAwB,CAAC,iBAAiB,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,qBAAqB,CAAC,eAAe,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,YAAY,CAAC,cAAc,CAAC,kBAAkB,CAAC,6BAA6B,gBAAgB,CAAC,gBAAgB,CAAC,uCAAuC,eAAe,CAAC,YAAY,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,+CAA+C,cAAc,CAAC,sCAAsC,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,iDAAiD,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,aAAa,CAAC,yCAAyC,WAAW,CAAC,2BAA2B,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,MAAM,CAAC,YAAY,CAAC,6BAA6B,kCAAkC,CAAC,4BAA4B,CAAC,wBAAwB,CAAC,mCAAmC,wBAAwB,CAAC,uCAAuC,SAAS,CAAC,6CAA6C,SAAS,CAAC,6CAA6C,SAAS,CAAC,mBAAmB,mBAAmB,CAAC,oBAAoB,CAAC,0DAA0D,CAAC,kDAAkD,gFAAgF,CAAC,sCAAsC,uEAAuE,CAAC,4CAA4C,oCAAoC,CAAC,WAAW,CAAC,gDAAgD,SAAS,CAAC,oCAAoC,aAAa,CAAC,iBAAiB,iBAAiB,CAAC,sBAAsB,CAAC,qBAAqB,CAAC,aAAa,CAAC,WAAW,CAAC,iBAAiB,iBAAiB,CAAC,gBAAgB,CAAC,gEAAgE,mBAAmB,CAAC,sBAAsB,CAAC,WAAW,CAAC,2BAA2B,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.embPanel{z-index:auto;flex:1;display:flex;flex-direction:column;height:100%;min-height:26px;position:relative}.embPanel-isLoading{justify-content:center;align-items:center}.embPanel .embPanel__content{display:flex;flex:1 1 100%;z-index:1;min-height:0}.embPanel .embPanel__content--fullWidth{width:100%}.embPanel__header{flex:0 0 auto;display:flex;justify-content:flex-end}.embPanel__title{color:#161e2b;font-size:14px;font-size:1rem;line-height:1.2143rem;font-weight:500;overflow:hidden;line-height:1.5;flex-grow:1;display:flex;flex-wrap:wrap;align-items:center}.embPanel__title:not(:empty){line-height:24px;padding-left:8px}.embPanel__title .embPanel__titleInner{overflow:hidden;display:flex;align-items:center;padding-right:8px}.embPanel__title .embPanel__titleTooltipAnchor{max-width:100%}.embPanel__title .embPanel__titleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.embPanel__title .embPanel__placeholderTitleText{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:400;color:#adb4ba}.embPanel__dragger:not(.embPanel__title){flex-grow:1}.embPanel__header--floater{position:absolute;right:0;top:0;left:0;z-index:1000}.embPanel__optionsMenuButton{background-color:rgba(42,57,71,.1);border-bottom-right-radius:0;border-top-left-radius:0}.embPanel__optionsMenuButton:focus{background-color:#e3eff8}.embPanel .embPanel__optionsMenuButton{opacity:0}.embPanel .embPanel__optionsMenuButton:focus{opacity:1}.embPanel:hover .embPanel__optionsMenuButton{opacity:1}.embPanel--editing{border-style:dashed;border-color:#adb4ba;transition:all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing:hover,.embPanel--editing:focus{box-shadow:0 4px 8px 0 rgba(173,180,186,.15),0 2px 2px -1px rgba(173,180,186,.3)}.embPanel--editing .embPanel__dragger{transition:background-color 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}.embPanel--editing .embPanel__dragger:hover{background-color:rgba(224,161,48,.1);cursor:move}.embPanel--editing .embPanel__optionsMenuButton{opacity:1}.embPanel--loading .embPanel__title{color:#686c75}.embPanel__error{text-align:center;justify-content:center;flex-direction:column;overflow:auto;padding:8px}.embPanel__label{position:absolute;padding-left:8px}.embPanel__content[data-error],.embPanel__content[data-loading]{pointer-events:none;filter:grayscale(100%);filter:gray}.embPanel__optionsMenuForm{padding:16px}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/uuid/index.js":
/*!********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/uuid/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../../node_modules/uuid/lib/bytesToUuid.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/uuid/lib/bytesToUuid.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../../node_modules/uuid/lib/rng-browser.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/uuid/lib/rng-browser.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../../node_modules/uuid/v1.js":
/*!*****************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/uuid/v1.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../../node_modules/uuid/v4.js":
/*!*****************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/uuid/v4.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=embeddable!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=embeddable!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['embeddable']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_embeddable_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=embeddable!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=embeddable!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_embeddable_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_embeddable_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/embeddable/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/embeddable/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/lib/migrate_base_input.ts":
/*!******************************************!*\
  !*** ./common/lib/migrate_base_input.ts ***!
  \******************************************/
/*! exports provided: telemetryBaseEmbeddableInput, extractBaseEmbeddableInput, injectBaseEmbeddableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "telemetryBaseEmbeddableInput", function() { return telemetryBaseEmbeddableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBaseEmbeddableInput", function() { return extractBaseEmbeddableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectBaseEmbeddableInput", function() { return injectBaseEmbeddableInput; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const telemetryBaseEmbeddableInput = (state, telemetryData) => {
  return telemetryData;
};
const extractBaseEmbeddableInput = state => {
  return {
    state,
    references: []
  };
};
const injectBaseEmbeddableInput = (state, references) => {
  return state;
};

/***/ }),

/***/ "./common/types.ts":
/*!*************************!*\
  !*** ./common/types.ts ***!
  \*************************/
/*! exports provided: ViewMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return ViewMode; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let ViewMode = /*#__PURE__*/function (ViewMode) {
  ViewMode["EDIT"] = "edit";
  ViewMode["VIEW"] = "view";
  return ViewMode;
}({});

/***/ }),

/***/ "./public/bootstrap.ts":
/*!*****************************!*\
  !*** ./public/bootstrap.ts ***!
  \*****************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./public/lib/index.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * This method initializes Embeddable plugin with initial set of
 * triggers and actions.
 */
const bootstrap = uiActions => {
  uiActions.registerTrigger(_lib__WEBPACK_IMPORTED_MODULE_0__["contextMenuTrigger"]);
  uiActions.registerTrigger(_lib__WEBPACK_IMPORTED_MODULE_0__["panelBadgeTrigger"]);
  uiActions.registerTrigger(_lib__WEBPACK_IMPORTED_MODULE_0__["panelNotificationTrigger"]);
};

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
/*! exports provided: ACTION_ADD_PANEL, ACTION_EDIT_PANEL, Adapters, AddPanelAction, ReferenceOrValueEmbeddable, isReferenceOrValueEmbeddable, ChartActionContext, Container, ContainerInput, ContainerOutput, CONTEXT_MENU_TRIGGER, contextMenuTrigger, defaultEmbeddableFactoryProvider, EditPanelAction, Embeddable, EmbeddableChildPanel, EmbeddableChildPanelProps, EmbeddableContext, EmbeddableFactory, EmbeddableFactoryDefinition, EmbeddableFactoryNotFoundError, EmbeddableInput, EmbeddableInstanceConfiguration, EmbeddableOutput, EmbeddablePanel, EmbeddableRoot, ValueClickContext, RangeSelectContext, ErrorEmbeddable, IContainer, IEmbeddable, isErrorEmbeddable, openAddPanelFlyout, OutputSpec, PANEL_BADGE_TRIGGER, panelBadgeTrigger, PANEL_NOTIFICATION_TRIGGER, panelNotificationTrigger, PanelNotFoundError, PanelState, PropertySpec, ViewMode, withEmbeddableSubscription, SavedObjectEmbeddableInput, isSavedObjectEmbeddableInput, isRangeSelectTriggerContext, isValueClickTriggerContext, EmbeddableStateTransfer, EmbeddableEditorState, EmbeddablePackageState, EmbeddableRenderer, EmbeddableRendererProps, EnhancementRegistryDefinition, plugin, EmbeddableSetup, EmbeddableStart, EmbeddableSetupDependencies, EmbeddableStartDependencies, EmbeddablePanelHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.tsx");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./public/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_EDIT_PANEL", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ACTION_EDIT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapters", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["Adapters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["AddPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceOrValueEmbeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ReferenceOrValueEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReferenceOrValueEmbeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["isReferenceOrValueEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartActionContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ChartActionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerInput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ContainerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerOutput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ContainerOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU_TRIGGER", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_MENU_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contextMenuTrigger", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["contextMenuTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultEmbeddableFactoryProvider", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["defaultEmbeddableFactoryProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPanelAction", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EditPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["Embeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableChildPanel", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableChildPanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableChildPanelProps", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableChildPanelProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableFactory", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableFactoryDefinition", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableFactoryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableFactoryNotFoundError", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableFactoryNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableInput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableInstanceConfiguration", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableInstanceConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableOutput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePanel", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddablePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRoot", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueClickContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ValueClickContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeSelectContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["RangeSelectContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorEmbeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ErrorEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IContainer", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["IContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IEmbeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["IEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEmbeddable", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["isErrorEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["openAddPanelFlyout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutputSpec", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["OutputSpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_BADGE_TRIGGER", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["PANEL_BADGE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelBadgeTrigger", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["panelBadgeTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_NOTIFICATION_TRIGGER", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["PANEL_NOTIFICATION_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelNotificationTrigger", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["panelNotificationTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelNotFoundError", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["PanelNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelState", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["PanelState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertySpec", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["PropertySpec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmbeddableSubscription", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["withEmbeddableSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectEmbeddableInput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["SavedObjectEmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSavedObjectEmbeddableInput", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["isSavedObjectEmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRangeSelectTriggerContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["isRangeSelectTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueClickTriggerContext", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["isValueClickTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStateTransfer", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableStateTransfer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableEditorState", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableEditorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePackageState", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddablePackageState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRenderer", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRendererProps", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["EmbeddableRendererProps"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnhancementRegistryDefinition", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["EnhancementRegistryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddableSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddableStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableSetupDependencies", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddableSetupDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStartDependencies", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddableStartDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePanelHOC", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddablePanelHOC"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["EmbeddablePublicPlugin"](initializerContext);
}


/***/ }),

/***/ "./public/lib/actions/edit_panel_action.ts":
/*!*************************************************!*\
  !*** ./public/lib/actions/edit_panel_action.ts ***!
  \*************************************************/
/*! exports provided: ACTION_EDIT_PANEL, EditPanelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_EDIT_PANEL", function() { return ACTION_EDIT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPanelAction", function() { return EditPanelAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./public/lib/types.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./public/lib/errors.ts");
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





const ACTION_EDIT_PANEL = 'editPanel';
class EditPanelAction {
  constructor(getEmbeddableFactory, application, stateTransfer) {
    var _this$application;
    this.getEmbeddableFactory = getEmbeddableFactory;
    this.application = application;
    this.stateTransfer = stateTransfer;
    _defineProperty(this, "type", ACTION_EDIT_PANEL);
    _defineProperty(this, "id", ACTION_EDIT_PANEL);
    _defineProperty(this, "order", 50);
    _defineProperty(this, "currentAppId", void 0);
    if ((_this$application = this.application) !== null && _this$application !== void 0 && _this$application.currentAppId$) {
      this.application.currentAppId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(appId => this.currentAppId = appId);
    }
  }
  getDisplayName({
    embeddable
  }) {
    const factory = this.getEmbeddableFactory(embeddable.type);
    if (!factory) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["EmbeddableFactoryNotFoundError"](embeddable.type);
    }
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.editPanel.displayName', {
      defaultMessage: 'Edit {value}',
      values: {
        value: factory.getDisplayName()
      }
    });
  }
  getIconType() {
    return 'pencil';
  }
  async isCompatible({
    embeddable
  }) {
    const canEditEmbeddable = Boolean(embeddable && embeddable.getOutput().editable && (embeddable.getOutput().editUrl || embeddable.getOutput().editApp && embeddable.getOutput().editPath));
    const inDashboardEditMode = embeddable.getInput().viewMode === _types__WEBPACK_IMPORTED_MODULE_2__["ViewMode"].EDIT;
    return Boolean(canEditEmbeddable && inDashboardEditMode);
  }
  async execute(context) {
    const appTarget = this.getAppTarget(context);
    if (appTarget) {
      if (this.stateTransfer && appTarget.state) {
        await this.stateTransfer.navigateToEditor(appTarget.app, {
          path: appTarget.path,
          state: appTarget.state
        });
      } else {
        await this.application.navigateToApp(appTarget.app, {
          path: appTarget.path
        });
      }
      return;
    }
    const href = await this.getHref(context);
    if (href) {
      window.location.href = href;
      return;
    }
  }
  getAppTarget({
    embeddable
  }) {
    const app = embeddable ? embeddable.getOutput().editApp : undefined;
    const path = embeddable ? embeddable.getOutput().editPath : undefined;
    if (app && path) {
      if (this.currentAppId) {
        const byValueMode = !embeddable.getInput().savedObjectId;
        const state = {
          originatingApp: this.currentAppId,
          valueInput: byValueMode ? this.getExplicitInput({
            embeddable
          }) : undefined,
          embeddableId: embeddable.id
        };
        return {
          app,
          path,
          state
        };
      }
      return {
        app,
        path
      };
    }
  }
  async getHref({
    embeddable
  }) {
    const editUrl = embeddable ? embeddable.getOutput().editUrl : undefined;
    return editUrl ? editUrl : '';
  }
  getExplicitInput({
    embeddable
  }) {
    var _getInput$panels$embe, _embeddable$getRoot;
    return (_getInput$panels$embe = (_embeddable$getRoot = embeddable.getRoot()) === null || _embeddable$getRoot === void 0 || (_embeddable$getRoot = _embeddable$getRoot.getInput()) === null || _embeddable$getRoot === void 0 || (_embeddable$getRoot = _embeddable$getRoot.panels) === null || _embeddable$getRoot === void 0 || (_embeddable$getRoot = _embeddable$getRoot[embeddable.id]) === null || _embeddable$getRoot === void 0 ? void 0 : _embeddable$getRoot.explicitInput) !== null && _getInput$panels$embe !== void 0 ? _getInput$panels$embe : embeddable.getInput();
  }
}

/***/ }),

/***/ "./public/lib/actions/index.ts":
/*!*************************************!*\
  !*** ./public/lib/actions/index.ts ***!
  \*************************************/
/*! exports provided: ACTION_EDIT_PANEL, EditPanelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_panel_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_panel_action */ "./public/lib/actions/edit_panel_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_EDIT_PANEL", function() { return _edit_panel_action__WEBPACK_IMPORTED_MODULE_0__["ACTION_EDIT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPanelAction", function() { return _edit_panel_action__WEBPACK_IMPORTED_MODULE_0__["EditPanelAction"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/containers/container.ts":
/*!********************************************!*\
  !*** ./public/lib/containers/container.ts ***!
  \********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "../../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _embeddables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../embeddables */ "./public/lib/embeddables/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./public/lib/errors.ts");
/* harmony import */ var _embeddables_saved_object_embeddable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../embeddables/saved_object_embeddable */ "./public/lib/embeddables/saved_object_embeddable.ts");
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






const getKeys = o => Object.keys(o);
class Container extends _embeddables__WEBPACK_IMPORTED_MODULE_2__["Embeddable"] {
  constructor(input, output, getFactory, parent) {
    super(input, output, parent);
    this.getFactory = getFactory;
    _defineProperty(this, "isContainer", true);
    _defineProperty(this, "children", {});
    _defineProperty(this, "subscription", void 0);
    this.subscription = this.getInput$().subscribe(() => this.maybeUpdateChildren());
  }
  updateInputForChild(id, changes) {
    if (!this.input.panels[id]) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["PanelNotFoundError"]();
    }
    const panels = {
      panels: {
        ...this.input.panels,
        [id]: {
          ...this.input.panels[id],
          explicitInput: {
            ...this.input.panels[id].explicitInput,
            ...changes
          }
        }
      }
    };
    this.updateInput(panels);
  }
  reload() {
    Object.values(this.children).forEach(child => child.reload());
  }
  async addNewEmbeddable(type, explicitInput) {
    const factory = this.getFactory(type);
    if (!factory) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["EmbeddableFactoryNotFoundError"](type);
    }
    const panelState = this.createNewPanelState(factory, explicitInput);
    return this.createAndSaveEmbeddable(type, panelState);
  }
  removeEmbeddable(embeddableId) {
    // Just a shortcut for removing the panel from input state, all internal state will get cleaned up naturally
    // by the listener.
    const panels = {
      ...this.input.panels
    };
    delete panels[embeddableId];
    this.updateInput({
      panels
    });
  }
  getChildIds() {
    return Object.keys(this.children);
  }
  getChild(id) {
    return this.children[id];
  }
  getInputForChild(embeddableId) {
    const containerInput = this.getInheritedInput(embeddableId);
    const panelState = this.getPanelState(embeddableId);
    const explicitInput = panelState.explicitInput;
    const explicitFiltered = {};
    const keys = getKeys(panelState.explicitInput);

    // If explicit input for a particular value is undefined, and container has that input defined,
    // we will use the inherited container input. This way children can set a value to undefined in order
    // to default back to inherited input. However, if the particular value is not part of the container, then
    // the caller may be trying to explicitly tell the child to clear out a given value, so in that case, we want
    // to pass it along.
    keys.forEach(key => {
      if (explicitInput[key] === undefined && containerInput[key] !== undefined) {
        return;
      }
      explicitFiltered[key] = explicitInput[key];
    });
    return {
      ...containerInput,
      ...explicitFiltered
      // Typescript has difficulties with inferring this type but it is accurate with all
      // tests I tried. Could probably be revisted with future releases of TS to see if
      // it can accurately infer the type.
    };
  }

  destroy() {
    super.destroy();
    Object.values(this.children).forEach(child => child.destroy());
    this.subscription.unsubscribe();
  }
  async untilEmbeddableLoaded(id) {
    if (!this.input.panels[id]) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["PanelNotFoundError"]();
    }
    if (this.output.embeddableLoaded[id]) {
      return this.children[id];
    }
    return new Promise((resolve, reject) => {
      const subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.getOutput$(), this.getInput$()).subscribe(() => {
        if (this.output.embeddableLoaded[id]) {
          subscription.unsubscribe();
          resolve(this.children[id]);
        }

        // If we hit this, the panel was removed before the embeddable finished loading.
        if (this.input.panels[id] === undefined) {
          subscription.unsubscribe();
          resolve(undefined);
        }
      });
    });
  }
  createNewPanelState(factory, partial = {}) {
    const embeddableId = partial.id || uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
    const explicitInput = this.createNewExplicitEmbeddableInput(embeddableId, factory, partial);
    return {
      type: factory.type,
      explicitInput: {
        ...explicitInput,
        id: embeddableId
      }
    };
  }
  getPanelState(embeddableId) {
    if (this.input.panels[embeddableId] === undefined) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["PanelNotFoundError"]();
    }
    const panelState = this.input.panels[embeddableId];
    return panelState;
  }

  /**
   * Return state that comes from the container and is passed down to the child. For instance, time range and
   * filters are common inherited input state. Note that any state stored in `this.input.panels[embeddableId].explicitInput`
   * will override inherited input.
   */

  async createAndSaveEmbeddable(type, panelState) {
    this.updateInput({
      panels: {
        ...this.input.panels,
        [panelState.explicitInput.id]: panelState
      }
    });
    return await this.untilEmbeddableLoaded(panelState.explicitInput.id);
  }
  createNewExplicitEmbeddableInput(id, factory, partial = {}) {
    const inheritedInput = this.getInheritedInput(id);
    const defaults = factory.getDefaultInput(partial);

    // Container input overrides defaults.
    const explicitInput = partial;
    getKeys(defaults).forEach(key => {
      // @ts-ignore We know this key might not exist on inheritedInput.
      const inheritedValue = inheritedInput[key];
      if (inheritedValue === undefined && explicitInput[key] === undefined) {
        explicitInput[key] = defaults[key];
      }
    });
    return explicitInput;
  }
  onPanelRemoved(id) {
    // Clean up
    const embeddable = this.getChild(id);
    if (embeddable) {
      embeddable.destroy();

      // Remove references.
      delete this.children[id];
    }
    this.updateOutput({
      embeddableLoaded: {
        ...this.output.embeddableLoaded,
        [id]: undefined
      }
    });
  }
  async onPanelAdded(panel) {
    this.updateOutput({
      embeddableLoaded: {
        ...this.output.embeddableLoaded,
        [panel.explicitInput.id]: false
      }
    });
    let embeddable;
    const inputForChild = this.getInputForChild(panel.explicitInput.id);
    try {
      const factory = this.getFactory(panel.type);
      if (!factory) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_3__["EmbeddableFactoryNotFoundError"](panel.type);
      }

      // TODO: lets get rid of this distinction with factories, I don't think it will be needed
      // anymore after this change.
      embeddable = Object(_embeddables_saved_object_embeddable__WEBPACK_IMPORTED_MODULE_4__["isSavedObjectEmbeddableInput"])(inputForChild) ? await factory.createFromSavedObject(inputForChild.savedObjectId, inputForChild, this) : await factory.create(inputForChild, this);
    } catch (e) {
      embeddable = new _embeddables__WEBPACK_IMPORTED_MODULE_2__["ErrorEmbeddable"](e, {
        id: panel.explicitInput.id
      }, this);
    }

    // EmbeddableFactory.create can return undefined without throwing an error, which indicates that an embeddable
    // can't be created.  This logic essentially only exists to support the current use case of
    // visualizations being created from the add panel, which redirects the user to the visualize app. Once we
    // switch over to inline creation we can probably clean this up, and force EmbeddableFactory.create to always
    // return an embeddable, or throw an error.
    if (embeddable) {
      // make sure the panel wasn't removed in the mean time, since the embeddable creation is async
      if (!this.input.panels[panel.explicitInput.id]) {
        embeddable.destroy();
        return;
      }
      this.children[embeddable.id] = embeddable;
      this.updateOutput({
        embeddableLoaded: {
          ...this.output.embeddableLoaded,
          [panel.explicitInput.id]: true
        }
      });
    } else if (embeddable === undefined) {
      this.removeEmbeddable(panel.explicitInput.id);
    }
    return embeddable;
  }
  maybeUpdateChildren() {
    const allIds = Object.keys({
      ...this.input.panels,
      ...this.output.embeddableLoaded
    });
    allIds.forEach(id => {
      if (this.input.panels[id] !== undefined && this.output.embeddableLoaded[id] === undefined) {
        this.onPanelAdded(this.input.panels[id]);
      } else if (this.input.panels[id] === undefined && this.output.embeddableLoaded[id] !== undefined) {
        this.onPanelRemoved(id);
      }
    });
  }
}

/***/ }),

/***/ "./public/lib/containers/embeddable_child_panel.tsx":
/*!**********************************************************!*\
  !*** ./public/lib/containers/embeddable_child_panel.tsx ***!
  \**********************************************************/
/*! exports provided: EmbeddableChildPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableChildPanel", function() { return EmbeddableChildPanel; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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
 * This component can be used by embeddable containers using react to easily render children. It waits
 * for the child to be initialized, showing a loading indicator until that is complete.
 */

class EmbeddableChildPanel extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "mounted", void 0);
    _defineProperty(this, "embeddable", void 0);
    _defineProperty(this, "subscription", void 0);
    this.state = {
      loading: true
    };
    this.mounted = false;
  }
  async componentDidMount() {
    this.mounted = true;
    const {
      container
    } = this.props;
    this.embeddable = await container.untilEmbeddableLoaded(this.props.embeddableId);
    if (this.mounted) {
      this.setState({
        loading: false
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  render() {
    const {
      PanelComponent
    } = this.props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()('embPanel', {
      'embPanel-isLoading': this.state.loading
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes
    }, this.state.loading || !this.embeddable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingChart"], {
      size: "l",
      mono: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PanelComponent, {
      embeddable: this.embeddable
    }));
  }
}

/***/ }),

/***/ "./public/lib/containers/i_container.ts":
/*!**********************************************!*\
  !*** ./public/lib/containers/i_container.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/lib/containers/index.ts":
/*!****************************************!*\
  !*** ./public/lib/containers/index.ts ***!
  \****************************************/
/*! exports provided: IContainer, PanelState, ContainerInput, ContainerOutput, Container, EmbeddableChildPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i_container */ "./public/lib/containers/i_container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IContainer", function() { return _i_container__WEBPACK_IMPORTED_MODULE_0__["IContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelState", function() { return _i_container__WEBPACK_IMPORTED_MODULE_0__["PanelState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerInput", function() { return _i_container__WEBPACK_IMPORTED_MODULE_0__["ContainerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerOutput", function() { return _i_container__WEBPACK_IMPORTED_MODULE_0__["ContainerOutput"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./public/lib/containers/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_1__["Container"]; });

/* harmony import */ var _embeddable_child_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embeddable_child_panel */ "./public/lib/containers/embeddable_child_panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableChildPanel", function() { return _embeddable_child_panel__WEBPACK_IMPORTED_MODULE_2__["EmbeddableChildPanel"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/embeddables/default_embeddable_factory_provider.ts":
/*!***********************************************************************!*\
  !*** ./public/lib/embeddables/default_embeddable_factory_provider.ts ***!
  \***********************************************************************/
/*! exports provided: defaultEmbeddableFactoryProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEmbeddableFactoryProvider", function() { return defaultEmbeddableFactoryProvider; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const defaultEmbeddableFactoryProvider = def => {
  var _def$isContainerType;
  const factory = {
    isContainerType: (_def$isContainerType = def.isContainerType) !== null && _def$isContainerType !== void 0 ? _def$isContainerType : false,
    canCreateNew: def.canCreateNew ? def.canCreateNew.bind(def) : () => true,
    getDefaultInput: def.getDefaultInput ? def.getDefaultInput.bind(def) : () => ({}),
    getExplicitInput: def.getExplicitInput ? def.getExplicitInput.bind(def) : () => Promise.resolve({}),
    createFromSavedObject: def.createFromSavedObject ? def.createFromSavedObject.bind(def) : (savedObjectId, input, parent) => {
      throw new Error(`Creation from saved object not supported by type ${def.type}`);
    },
    create: def.create.bind(def),
    type: def.type,
    isEditable: def.isEditable.bind(def),
    getDisplayName: def.getDisplayName.bind(def),
    savedObjectMetaData: def.savedObjectMetaData,
    telemetry: def.telemetry || (() => ({})),
    inject: def.inject || (state => state),
    extract: def.extract || (state => ({
      state,
      references: []
    }))
  };
  return factory;
};

/***/ }),

/***/ "./public/lib/embeddables/embeddable.tsx":
/*!***********************************************!*\
  !*** ./public/lib/embeddables/embeddable.tsx ***!
  \***********************************************/
/*! exports provided: Embeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embeddable", function() { return Embeddable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/types */ "./common/types.ts");
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






function getPanelTitle(input, output) {
  return input.hidePanelTitles ? '' : input.title === undefined ? output.defaultTitle : input.title;
}
class Embeddable {
  constructor(input, output, parent) {
    _defineProperty(this, "runtimeId", Embeddable.runtimeId++);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "isContainer", false);
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "fatalError", void 0);
    _defineProperty(this, "output", void 0);
    _defineProperty(this, "input", void 0);
    _defineProperty(this, "input$", void 0);
    _defineProperty(this, "output$", void 0);
    _defineProperty(this, "renderComplete", new _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__["RenderCompleteDispatcher"]());
    // Listener to parent changes, if this embeddable exists in a parent, in order
    // to update input when the parent changes.
    _defineProperty(this, "parentSubscription", void 0);
    _defineProperty(this, "destroyed", false);
    this.id = input.id;
    this.output = {
      title: getPanelTitle(input, output),
      ...output
    };
    this.input = {
      viewMode: _common_types__WEBPACK_IMPORTED_MODULE_4__["ViewMode"].EDIT,
      ...input
    };
    this.parent = parent;
    this.input$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.input);
    this.output$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.output);
    if (parent) {
      this.parentSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"](parent.getInput$(), parent.getOutput$()).subscribe(() => {
        // Make sure this panel hasn't been removed immediately after it was added, but before it finished loading.
        if (!parent.getInput().panels[this.id]) return;
        const newInput = parent.getInputForChild(this.id);
        this.onResetInput(newInput);
      });
    }
    this.getOutput$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({
      title
    }) => title || ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(title => {
      this.renderComplete.setTitle(title);
    }, () => {});
  }
  getIsContainer() {
    return this.isContainer === true;
  }

  /**
   * Reload will be called when there is a request to refresh the data or view, even if the
   * input data did not change.
   */

  getInput$() {
    return this.input$.asObservable();
  }
  getOutput$() {
    return this.output$.asObservable();
  }
  getOutput() {
    return this.output;
  }
  getInput() {
    return this.input;
  }
  getTitle() {
    return this.output.title || '';
  }

  /**
   * Returns the top most parent embeddable, or itself if this embeddable
   * is not within a parent.
   */
  getRoot() {
    let root = this;
    while (root.parent) {
      root = root.parent;
    }
    return root;
  }
  updateInput(changes) {
    if (this.destroyed) {
      throw new Error('Embeddable has been destroyed');
    }
    if (this.parent) {
      // Ensures state changes flow from container downward.
      this.parent.updateInputForChild(this.id, changes);
    } else {
      this.onInputChanged(changes);
    }
  }
  render(el) {
    this.renderComplete.setEl(el);
    this.renderComplete.setTitle(this.output.title || '');
    if (this.destroyed) {
      throw new Error('Embeddable has been destroyed');
    }
    return;
  }

  /**
   * An embeddable can return inspector adapters if it want the inspector to be
   * available via the context menu of that panel.
   * @return Inspector adapters that will be used to open an inspector for.
   */
  getInspectorAdapters() {
    return undefined;
  }

  /**
   * Called when this embeddable is no longer used, this should be the place for
   * implementors to add any additional clean up tasks, like unmounting and unsubscribing.
   */
  destroy() {
    this.destroyed = true;
    this.input$.complete();
    this.output$.complete();
    if (this.parentSubscription) {
      this.parentSubscription.unsubscribe();
    }
    return;
  }
  updateOutput(outputChanges) {
    const newOutput = {
      ...this.output,
      ...outputChanges
    };
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this.output, newOutput)) {
      this.output = newOutput;
      this.output$.next(this.output);
    }
  }
  onFatalError(e) {
    this.fatalError = e;
    this.output$.error(e);
  }
  onResetInput(newInput) {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this.input, newInput)) {
      if (this.input.lastReloadRequestTime !== newInput.lastReloadRequestTime) {
        this.reload();
      }
      this.input = newInput;
      this.input$.next(newInput);
      this.updateOutput({
        title: getPanelTitle(this.input, this.output)
      });
    }
  }
  onInputChanged(changes) {
    const newInput = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])({
      ...this.input,
      ...changes
    });
    this.onResetInput(newInput);
  }
  supportedTriggers() {
    return [];
  }
}
_defineProperty(Embeddable, "runtimeId", 0);

/***/ }),

/***/ "./public/lib/embeddables/embeddable_factory.ts":
/*!******************************************************!*\
  !*** ./public/lib/embeddables/embeddable_factory.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/lib/embeddables/embeddable_factory_definition.ts":
/*!*****************************************************************!*\
  !*** ./public/lib/embeddables/embeddable_factory_definition.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/lib/embeddables/embeddable_renderer.tsx":
/*!********************************************************!*\
  !*** ./public/lib/embeddables/embeddable_renderer.tsx ***!
  \********************************************************/
/*! exports provided: EmbeddableRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRenderer", function() { return EmbeddableRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _embeddable_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embeddable_root */ "./public/lib/embeddables/embeddable_root.tsx");
/* harmony import */ var _error_embeddable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error_embeddable */ "./public/lib/embeddables/error_embeddable.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * This type is a publicly exposed props of {@link EmbeddableRenderer}
 * Union is used to validate that or factory or embeddable is passed in, but it can't be both simultaneously
 * In case when embeddable is passed in, input is optional, because there is already an input inside of embeddable object
 * In case when factory is used, then input is required, because it will be used as initial input to create an embeddable object
 */

function isWithEmbeddable(props) {
  return 'embeddable' in props;
}
function isWithFactory(props) {
  return 'factory' in props;
}

/**
 * Helper react component to render an embeddable
 * Can be used if you have an embeddable object or an embeddable factory
 * Supports updating input by passing `input` prop
 *
 * @remarks
 * This component shouldn't be used inside an embeddable container to render embeddable children
 * because children may lose inherited input, here is why:
 *
 * When passing `input` inside a prop, internally there is a call:
 *
 * ```ts
 * embeddable.updateInput(input);
 * ```
 * If you are simply rendering an embeddable, it's no problem.
 *
 * However when you are dealing with containers,
 * you want to be sure to only pass into updateInput the actual state that changed.
 * This is because calling child.updateInput({ foo }) will make foo explicit state.
 * It cannot be inherited from it's parent.
 *
 * For example, on a dashboard, the time range is inherited by all children,
 * unless they had their time range set explicitly.
 * This is how "per panel time range" works.
 * That action calls embeddable.updateInput({ timeRange }),
 * and the time range will no longer be inherited from the container.
 *
 * see: https://github.com/elastic/kibana/pull/67783#discussion_r435447657 for more details.
 * refer to: examples/embeddable_explorer for examples with correct usage of this component.
 *
 * @public
 * @param props - {@link EmbeddableRendererProps}
 */
const EmbeddableRenderer = props => {
  const {
    input,
    onInputUpdated
  } = props;
  const [embeddable, setEmbeddable] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isWithEmbeddable(props) ? props.embeddable : undefined);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isWithEmbeddable(props));
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const latestInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(props.input);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    latestInput.current = input;
  }, [input]);
  const factoryFromProps = isWithFactory(props) ? props.factory : undefined;
  const embeddableFromProps = isWithEmbeddable(props) ? props.embeddable : undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let canceled = false;
    if (embeddableFromProps) {
      setEmbeddable(embeddableFromProps);
      return;
    }

    // keeping track of embeddables created by this component to be able to destroy them
    let createdEmbeddableRef;
    if (factoryFromProps) {
      setEmbeddable(undefined);
      setLoading(true);
      factoryFromProps.create(latestInput.current).then(createdEmbeddable => {
        if (canceled) {
          if (createdEmbeddable) {
            createdEmbeddable.destroy();
          }
        } else {
          createdEmbeddableRef = createdEmbeddable;
          setEmbeddable(createdEmbeddable);
        }
      }).catch(err => {
        if (canceled) return;
        setError(err === null || err === void 0 ? void 0 : err.message);
      }).finally(() => {
        if (canceled) return;
        setLoading(false);
      });
    }
    return () => {
      canceled = true;
      if (createdEmbeddableRef) {
        createdEmbeddableRef.destroy();
      }
    };
  }, [factoryFromProps, embeddableFromProps]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!embeddable) return;
    if (Object(_error_embeddable__WEBPACK_IMPORTED_MODULE_2__["isErrorEmbeddable"])(embeddable)) return;
    if (!onInputUpdated) return;
    const sub = embeddable.getInput$().subscribe(newInput => {
      onInputUpdated(newInput);
    });
    return () => {
      sub.unsubscribe();
    };
  }, [embeddable, onInputUpdated]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_embeddable_root__WEBPACK_IMPORTED_MODULE_1__["EmbeddableRoot"], {
    embeddable: embeddable,
    loading: loading,
    error: error,
    input: input
  });
};

/***/ }),

/***/ "./public/lib/embeddables/embeddable_root.tsx":
/*!****************************************************!*\
  !*** ./public/lib/embeddables/embeddable_root.tsx ***!
  \****************************************************/
/*! exports provided: EmbeddableRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRoot", function() { return EmbeddableRoot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
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




class EmbeddableRoot extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "alreadyMounted", false);
    _defineProperty(this, "lastUsedInput", void 0);
    this.root = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }
  componentDidMount() {
    if (this.root && this.root.current && this.props.embeddable) {
      this.alreadyMounted = true;
      this.props.embeddable.render(this.root.current);
      this.lastUsedInput = this.props.input;
    }
  }
  componentDidUpdate(prevProps) {
    let justRendered = false;
    if (this.root && this.root.current && this.props.embeddable && !this.alreadyMounted) {
      this.alreadyMounted = true;
      this.props.embeddable.render(this.root.current);
      /**
       * When an embeddable was created with an value asynchronously, at the time when calling embeddable.render()
       * The current input value might already changed, so it needs to call embeddable.updateInput() with the
       * latest input here. It cannot simply compare prevProps.input and this.props.input because input may already
       * be changed before embeddable was created.
       */
      if (this.lastUsedInput !== this.props.input && this.props.input) {
        this.props.embeddable.updateInput(this.props.input);
        this.lastUsedInput = this.props.input;
      }
      justRendered = true;
    }
    if (!justRendered && this.root && this.root.current && this.props.embeddable && this.alreadyMounted && this.props.input && this.lastUsedInput !== this.props.input) {
      this.props.embeddable.updateInput(this.props.input);
      this.lastUsedInput = this.props.input;
    }
  }
  shouldComponentUpdate(newProps) {
    return Boolean(newProps.error !== this.props.error || newProps.loading !== this.props.loading || newProps.embeddable !== this.props.embeddable || this.root && this.root.current && newProps.embeddable && !this.alreadyMounted || newProps.input !== this.props.input);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: this.root
    }), this.props.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingSpinner"], {
      "data-test-subj": "embedSpinner"
    }), this.props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s",
      "data-test-subj": "embedError"
    }, this.props.error));
  }
}

/***/ }),

/***/ "./public/lib/embeddables/error_embeddable.tsx":
/*!*****************************************************!*\
  !*** ./public/lib/embeddables/error_embeddable.tsx ***!
  \*****************************************************/
/*! exports provided: ERROR_EMBEDDABLE_TYPE, isErrorEmbeddable, ErrorEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_EMBEDDABLE_TYPE", function() { return ERROR_EMBEDDABLE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEmbeddable", function() { return isErrorEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorEmbeddable", function() { return ErrorEmbeddable; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _embeddable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./embeddable */ "./public/lib/embeddables/embeddable.tsx");
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






const ERROR_EMBEDDABLE_TYPE = 'error';
function isErrorEmbeddable(embeddable) {
  return Boolean(embeddable.fatalError || embeddable.error !== undefined);
}
class ErrorEmbeddable extends _embeddable__WEBPACK_IMPORTED_MODULE_4__["Embeddable"] {
  constructor(error, input, parent) {
    super(input, {}, parent);
    _defineProperty(this, "type", ERROR_EMBEDDABLE_TYPE);
    _defineProperty(this, "error", void 0);
    _defineProperty(this, "dom", void 0);
    this.error = error;
  }
  reload() {}
  render(dom) {
    const title = typeof this.error === 'string' ? this.error : this.error.message;
    this.dom = dom;
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(
    /*#__PURE__*/
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "embPanel__error embPanel__content",
      "data-test-subj": "embeddableStackError"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      color: "subdued",
      size: "xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
      type: "alert",
      color: "danger"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["Markdown"], {
      markdown: title,
      openLinksInNewTab: true,
      "data-test-subj": "errorMessageMarkdown"
    }))), dom);
  }
  destroy() {
    if (this.dom) {
      react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(this.dom);
    }
  }
}

/***/ }),

/***/ "./public/lib/embeddables/i_embeddable.ts":
/*!************************************************!*\
  !*** ./public/lib/embeddables/i_embeddable.ts ***!
  \************************************************/
/*! exports provided: EmbeddableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/types */ "./common/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableInput", function() { return _common_types__WEBPACK_IMPORTED_MODULE_0__["EmbeddableInput"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/embeddables/index.ts":
/*!*****************************************!*\
  !*** ./public/lib/embeddables/index.ts ***!
  \*****************************************/
/*! exports provided: EmbeddableOutput, EmbeddableInput, IEmbeddable, Embeddable, defaultEmbeddableFactoryProvider, ErrorEmbeddable, isErrorEmbeddable, withEmbeddableSubscription, EmbeddableRoot, isSavedObjectEmbeddableInput, EmbeddableRenderer, EmbeddableRendererProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i_embeddable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i_embeddable */ "./public/lib/embeddables/i_embeddable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableOutput", function() { return _i_embeddable__WEBPACK_IMPORTED_MODULE_0__["EmbeddableOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableInput", function() { return _i_embeddable__WEBPACK_IMPORTED_MODULE_0__["EmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IEmbeddable", function() { return _i_embeddable__WEBPACK_IMPORTED_MODULE_0__["IEmbeddable"]; });

/* harmony import */ var _embeddable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embeddable */ "./public/lib/embeddables/embeddable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embeddable", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_1__["Embeddable"]; });

/* harmony import */ var _embeddable_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embeddable_factory */ "./public/lib/embeddables/embeddable_factory.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _embeddable_factory_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embeddable_factory_definition */ "./public/lib/embeddables/embeddable_factory_definition.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _default_embeddable_factory_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default_embeddable_factory_provider */ "./public/lib/embeddables/default_embeddable_factory_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultEmbeddableFactoryProvider", function() { return _default_embeddable_factory_provider__WEBPACK_IMPORTED_MODULE_4__["defaultEmbeddableFactoryProvider"]; });

/* harmony import */ var _error_embeddable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error_embeddable */ "./public/lib/embeddables/error_embeddable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorEmbeddable", function() { return _error_embeddable__WEBPACK_IMPORTED_MODULE_5__["ErrorEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEmbeddable", function() { return _error_embeddable__WEBPACK_IMPORTED_MODULE_5__["isErrorEmbeddable"]; });

/* harmony import */ var _with_subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./with_subscription */ "./public/lib/embeddables/with_subscription.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmbeddableSubscription", function() { return _with_subscription__WEBPACK_IMPORTED_MODULE_6__["withEmbeddableSubscription"]; });

/* harmony import */ var _embeddable_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./embeddable_root */ "./public/lib/embeddables/embeddable_root.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRoot", function() { return _embeddable_root__WEBPACK_IMPORTED_MODULE_7__["EmbeddableRoot"]; });

/* harmony import */ var _saved_object_embeddable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./saved_object_embeddable */ "./public/lib/embeddables/saved_object_embeddable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSavedObjectEmbeddableInput", function() { return _saved_object_embeddable__WEBPACK_IMPORTED_MODULE_8__["isSavedObjectEmbeddableInput"]; });

/* harmony import */ var _embeddable_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./embeddable_renderer */ "./public/lib/embeddables/embeddable_renderer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRenderer", function() { return _embeddable_renderer__WEBPACK_IMPORTED_MODULE_9__["EmbeddableRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRendererProps", function() { return _embeddable_renderer__WEBPACK_IMPORTED_MODULE_9__["EmbeddableRendererProps"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/embeddables/saved_object_embeddable.ts":
/*!***********************************************************!*\
  !*** ./public/lib/embeddables/saved_object_embeddable.ts ***!
  \***********************************************************/
/*! exports provided: isSavedObjectEmbeddableInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSavedObjectEmbeddableInput", function() { return isSavedObjectEmbeddableInput; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function isSavedObjectEmbeddableInput(input) {
  return Boolean(input.savedObjectId);
}

/***/ }),

/***/ "./public/lib/embeddables/with_subscription.tsx":
/*!******************************************************!*\
  !*** ./public/lib/embeddables/with_subscription.tsx ***!
  \******************************************************/
/*! exports provided: withEmbeddableSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmbeddableSubscription", function() { return withEmbeddableSubscription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
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



const withEmbeddableSubscription = WrappedComponent => class WithEmbeddableSubscription extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "subscription", void 0);
    _defineProperty(this, "mounted", false);
    this.state = {
      input: this.props.embeddable.getInput(),
      output: this.props.embeddable.getOutput()
    };
  }
  componentDidMount() {
    this.mounted = true;
    this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"](this.props.embeddable.getOutput$(), this.props.embeddable.getInput$()).subscribe(() => {
      if (this.mounted) {
        this.setState({
          input: this.props.embeddable.getInput(),
          output: this.props.embeddable.getOutput()
        });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
      input: this.state.input,
      output: this.state.output
    }, this.props));
  }
};

/***/ }),

/***/ "./public/lib/errors.ts":
/*!******************************!*\
  !*** ./public/lib/errors.ts ***!
  \******************************/
/*! exports provided: PanelNotFoundError, EmbeddableFactoryNotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelNotFoundError", function() { return PanelNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableFactoryNotFoundError", function() { return EmbeddableFactoryNotFoundError; });
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

/* eslint-disable max-classes-per-file */

class PanelNotFoundError extends Error {
  constructor() {
    super(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.errors.paneldoesNotExist', {
      defaultMessage: 'Panel not found'
    }));
    _defineProperty(this, "code", 'PANEL_NOT_FOUND');
  }
}
class EmbeddableFactoryNotFoundError extends Error {
  constructor(type) {
    super(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.errors.embeddableFactoryNotFound', {
      defaultMessage: `OpenSearch Dashboards can't load "{type}" visualizations. Check for a missing plugin or an incompatible visualization type.`,
      values: {
        type
      }
    }));
    _defineProperty(this, "code", 'EMBEDDABLE_FACTORY_NOT_FOUND');
  }
}

/***/ }),

/***/ "./public/lib/index.ts":
/*!*****************************!*\
  !*** ./public/lib/index.ts ***!
  \*****************************/
/*! exports provided: PanelNotFoundError, EmbeddableFactoryNotFoundError, EmbeddableOutput, EmbeddableInput, IEmbeddable, Embeddable, defaultEmbeddableFactoryProvider, ErrorEmbeddable, isErrorEmbeddable, withEmbeddableSubscription, EmbeddableRoot, isSavedObjectEmbeddableInput, EmbeddableRenderer, EmbeddableRendererProps, ViewMode, Adapters, ACTION_EDIT_PANEL, EditPanelAction, isValueClickTriggerContext, isRangeSelectTriggerContext, CONTEXT_MENU_TRIGGER, contextMenuTrigger, PANEL_BADGE_TRIGGER, panelBadgeTrigger, PANEL_NOTIFICATION_TRIGGER, panelNotificationTrigger, IContainer, PanelState, ContainerInput, ContainerOutput, Container, EmbeddableChildPanel, EmbeddablePanel, ACTION_INSPECT_PANEL, InspectPanelAction, ACTION_ADD_PANEL, AddPanelAction, openAddPanelFlyout, REMOVE_PANEL_ACTION, RemovePanelAction, ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction, EmbeddableStateTransfer, EmbeddableEditorState, EmbeddablePackageState, ReferenceOrValueEmbeddable, isReferenceOrValueEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./public/lib/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelNotFoundError", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["PanelNotFoundError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableFactoryNotFoundError", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__["EmbeddableFactoryNotFoundError"]; });

/* harmony import */ var _embeddables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embeddables */ "./public/lib/embeddables/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableOutput", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["EmbeddableOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableInput", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["EmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IEmbeddable", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["IEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embeddable", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["Embeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultEmbeddableFactoryProvider", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["defaultEmbeddableFactoryProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorEmbeddable", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["ErrorEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEmbeddable", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["isErrorEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmbeddableSubscription", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["withEmbeddableSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRoot", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["EmbeddableRoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSavedObjectEmbeddableInput", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["isSavedObjectEmbeddableInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRenderer", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["EmbeddableRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableRendererProps", function() { return _embeddables__WEBPACK_IMPORTED_MODULE_1__["EmbeddableRendererProps"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/lib/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["ViewMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapters", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["Adapters"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./public/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_EDIT_PANEL", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["ACTION_EDIT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPanelAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["EditPanelAction"]; });

/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triggers */ "./public/lib/triggers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueClickTriggerContext", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["isValueClickTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRangeSelectTriggerContext", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["isRangeSelectTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["CONTEXT_MENU_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contextMenuTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["contextMenuTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_BADGE_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["PANEL_BADGE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelBadgeTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["panelBadgeTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_NOTIFICATION_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["PANEL_NOTIFICATION_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelNotificationTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["panelNotificationTrigger"]; });

/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "./public/lib/containers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IContainer", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["IContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelState", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["PanelState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerInput", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["ContainerInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerOutput", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["ContainerOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableChildPanel", function() { return _containers__WEBPACK_IMPORTED_MODULE_5__["EmbeddableChildPanel"]; });

/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel */ "./public/lib/panel/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePanel", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["EmbeddablePanel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_INSPECT_PANEL", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["ACTION_INSPECT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectPanelAction", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["InspectPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["AddPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["openAddPanelFlyout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PANEL_ACTION", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["REMOVE_PANEL_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovePanelAction", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["RemovePanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["ACTION_CUSTOMIZE_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return _panel__WEBPACK_IMPORTED_MODULE_6__["CustomizePanelTitleAction"]; });

/* harmony import */ var _state_transfer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state_transfer */ "./public/lib/state_transfer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStateTransfer", function() { return _state_transfer__WEBPACK_IMPORTED_MODULE_7__["EmbeddableStateTransfer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableEditorState", function() { return _state_transfer__WEBPACK_IMPORTED_MODULE_7__["EmbeddableEditorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePackageState", function() { return _state_transfer__WEBPACK_IMPORTED_MODULE_7__["EmbeddablePackageState"]; });

/* harmony import */ var _reference_or_value_embeddable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reference_or_value_embeddable */ "./public/lib/reference_or_value_embeddable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceOrValueEmbeddable", function() { return _reference_or_value_embeddable__WEBPACK_IMPORTED_MODULE_8__["ReferenceOrValueEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReferenceOrValueEmbeddable", function() { return _reference_or_value_embeddable__WEBPACK_IMPORTED_MODULE_8__["isReferenceOrValueEmbeddable"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/inspector.ts":
/*!*********************************!*\
  !*** ./public/lib/inspector.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../inspector/public */ "plugin/inspector/public");
/* harmony import */ var _inspector_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inspector_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inspector_public__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inspector_public__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/embeddable_error_label.tsx":
/*!*****************************************************!*\
  !*** ./public/lib/panel/embeddable_error_label.tsx ***!
  \*****************************************************/
/*! exports provided: EmbeddableErrorLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableErrorLabel", function() { return EmbeddableErrorLabel; });
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




function EmbeddableErrorLabel(props) {
  if (!props.error) return null;
  const labelText = props.error.name === 'AbortError' ? _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('embeddableApi.panel.labelAborted', {
    defaultMessage: 'Aborted'
  }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('embeddableApi.panel.labelError', {
    defaultMessage: 'Error'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "embPanel__labelWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "embPanel__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    "data-test-subj": "embeddableErrorMessage",
    content: props.error.message
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBadge"], {
    "data-test-subj": "embeddableErrorLabel",
    color: "danger"
  }, labelText))));
}

/***/ }),

/***/ "./public/lib/panel/embeddable_panel.tsx":
/*!***********************************************!*\
  !*** ./public/lib/panel/embeddable_panel.tsx ***!
  \***********************************************/
/*! exports provided: EmbeddablePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePanel", function() { return EmbeddablePanel; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui_actions */ "./public/lib/ui_actions.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../triggers */ "./public/lib/triggers/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./public/lib/types.ts");
/* harmony import */ var _panel_header_panel_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel_header/panel_actions */ "./public/lib/panel/panel_header/panel_actions/index.ts");
/* harmony import */ var _panel_header_panel_actions_add_panel_add_panel_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel_header/panel_actions/add_panel/add_panel_action */ "./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_action.ts");
/* harmony import */ var _panel_header_panel_actions_customize_title_customize_panel_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel_header/panel_actions/customize_title/customize_panel_action */ "./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_action.ts");
/* harmony import */ var _panel_header_panel_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel_header/panel_header */ "./public/lib/panel/panel_header/panel_header.tsx");
/* harmony import */ var _panel_header_panel_actions_inspect_panel_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panel_header/panel_actions/inspect_panel_action */ "./public/lib/panel/panel_header/panel_actions/inspect_panel_action.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./public/lib/actions/index.ts");
/* harmony import */ var _panel_header_panel_actions_customize_title_customize_panel_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panel_header/panel_actions/customize_title/customize_panel_modal */ "./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_modal.tsx");
/* harmony import */ var _embeddable_error_label__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./embeddable_error_label */ "./public/lib/panel/embeddable_error_label.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! .. */ "./public/lib/index.ts");
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


















const sortByOrderField = ({
  order: orderA
}, {
  order: orderB
}) => (orderB || 0) - (orderA || 0);
const removeById = disabledActions => ({
  id
}) => disabledActions.indexOf(id) === -1;
class EmbeddablePanel extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    var _embeddable$parent, _input$viewMode;
    super(props);
    _defineProperty(this, "embeddableRoot", void 0);
    _defineProperty(this, "parentSubscription", void 0);
    _defineProperty(this, "subscription", new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]());
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "generateId", Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["htmlIdGenerator"])());
    _defineProperty(this, "onFocus", focusedPanelIndex => {
      this.setState({
        focusedPanelIndex
      });
    });
    _defineProperty(this, "onBlur", blurredPanelIndex => {
      if (this.state.focusedPanelIndex === blurredPanelIndex) {
        this.setState({
          focusedPanelIndex: undefined
        });
      }
    });
    _defineProperty(this, "closeMyContextMenuPanel", () => {
      if (this.mounted) {
        this.setState({
          closeContextMenu: true
        }, () => {
          if (this.mounted) {
            this.setState({
              closeContextMenu: false
            });
          }
        });
      }
    });
    _defineProperty(this, "getActionContextMenuPanel", async () => {
      let regularActions = await this.props.getActions(_triggers__WEBPACK_IMPORTED_MODULE_6__["CONTEXT_MENU_TRIGGER"], {
        embeddable: this.props.embeddable
      });
      const {
        disabledActions
      } = this.props.embeddable.getInput();
      if (disabledActions) {
        const removeDisabledActions = removeById(disabledActions);
        regularActions = regularActions.filter(removeDisabledActions);
      }
      const createGetUserData = overlays => async function getUserData(context) {
        return new Promise(resolve => {
          const session = overlays.openModal(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_panel_header_panel_actions_customize_title_customize_panel_modal__WEBPACK_IMPORTED_MODULE_14__["CustomizePanelModal"], {
            embeddable: context.embeddable,
            updateTitle: (title, hideTitle) => {
              session.close();
              resolve({
                title,
                hideTitle
              });
            },
            cancel: () => session.close()
          })), {
            'data-test-subj': 'customizePanel'
          });
        });
      };

      // These actions are exposed on the context menu for every embeddable, they bypass the trigger
      // registry.
      const extraActions = [new _panel_header_panel_actions_customize_title_customize_panel_action__WEBPACK_IMPORTED_MODULE_10__["CustomizePanelTitleAction"](createGetUserData(this.props.overlays)), new _panel_header_panel_actions_add_panel_add_panel_action__WEBPACK_IMPORTED_MODULE_9__["AddPanelAction"](this.props.getEmbeddableFactory, this.props.getAllEmbeddableFactories, this.props.overlays, this.props.notifications, this.props.SavedObjectFinder), new _panel_header_panel_actions_inspect_panel_action__WEBPACK_IMPORTED_MODULE_12__["InspectPanelAction"](this.props.inspector), new _panel_header_panel_actions__WEBPACK_IMPORTED_MODULE_8__["RemovePanelAction"](), new _actions__WEBPACK_IMPORTED_MODULE_13__["EditPanelAction"](this.props.getEmbeddableFactory, this.props.application, this.props.stateTransfer)];
      const sortedActions = [...regularActions, ...extraActions].sort(sortByOrderField);
      return await Object(_ui_actions__WEBPACK_IMPORTED_MODULE_4__["buildContextMenuForActions"])({
        actions: sortedActions.map(action => ({
          action,
          context: {
            embeddable: this.props.embeddable
          },
          trigger: _triggers__WEBPACK_IMPORTED_MODULE_6__["contextMenuTrigger"]
        })),
        closeMenu: this.closeMyContextMenuPanel
      });
    });
    const {
      embeddable
    } = this.props;
    const input = embeddable.getInput();
    const parentInput = (_embeddable$parent = embeddable.parent) === null || _embeddable$parent === void 0 ? void 0 : _embeddable$parent.getInput();
    const viewMode = (_input$viewMode = input === null || input === void 0 ? void 0 : input.viewMode) !== null && _input$viewMode !== void 0 ? _input$viewMode : _types__WEBPACK_IMPORTED_MODULE_7__["ViewMode"].EDIT;
    const hidePanelTitle = Boolean(parentInput === null || parentInput === void 0 ? void 0 : parentInput.hidePanelTitles) || Boolean(input === null || input === void 0 ? void 0 : input.hidePanelTitles);
    const hidePanelAction = Boolean(parentInput === null || parentInput === void 0 ? void 0 : parentInput.hidePanelActions) || Boolean(input === null || input === void 0 ? void 0 : input.hidePanelActions);
    this.state = {
      panels: [],
      viewMode,
      hidePanelTitle,
      hidePanelAction,
      closeContextMenu: false,
      badges: [],
      notifications: []
    };
    this.embeddableRoot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  }
  async refreshBadges() {
    let badges = await this.props.getActions(_triggers__WEBPACK_IMPORTED_MODULE_6__["PANEL_BADGE_TRIGGER"], {
      embeddable: this.props.embeddable
    });
    if (!this.mounted) return;
    const {
      disabledActions
    } = this.props.embeddable.getInput();
    if (disabledActions) {
      badges = badges.filter(badge => disabledActions.indexOf(badge.id) === -1);
    }
    this.setState({
      badges
    });
  }
  async refreshNotifications() {
    let notifications = await this.props.getActions(_triggers__WEBPACK_IMPORTED_MODULE_6__["PANEL_NOTIFICATION_TRIGGER"], {
      embeddable: this.props.embeddable
    });
    if (!this.mounted) return;
    const {
      disabledActions
    } = this.props.embeddable.getInput();
    if (disabledActions) {
      notifications = notifications.filter(badge => disabledActions.indexOf(badge.id) === -1);
    }
    this.setState({
      notifications
    });
  }
  UNSAFE_componentWillMount() {
    this.mounted = true;
    const {
      embeddable
    } = this.props;
    const {
      parent
    } = embeddable;
    this.subscription.add(embeddable.getInput$().subscribe(async () => {
      if (this.mounted) {
        var _embeddable$getInput$;
        this.setState({
          viewMode: (_embeddable$getInput$ = embeddable.getInput().viewMode) !== null && _embeddable$getInput$ !== void 0 ? _embeddable$getInput$ : _types__WEBPACK_IMPORTED_MODULE_7__["ViewMode"].EDIT
        });
        this.refreshBadges();
        this.refreshNotifications();
      }
    }));
    if (parent) {
      this.parentSubscription = parent.getInput$().subscribe(async () => {
        if (this.mounted && parent) {
          const input = embeddable.getInput();
          const parentInput = parent.getInput();
          this.setState({
            hidePanelTitle: Boolean(parentInput === null || parentInput === void 0 ? void 0 : parentInput.hidePanelTitles) || Boolean(input === null || input === void 0 ? void 0 : input.hidePanelTitles)
          });
          this.setState({
            hidePanelAction: Boolean(parentInput === null || parentInput === void 0 ? void 0 : parentInput.hidePanelActions) || Boolean(input === null || input === void 0 ? void 0 : input.hidePanelActions)
          });
          this.refreshBadges();
          this.refreshNotifications();
        }
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    this.subscription.unsubscribe();
    if (this.parentSubscription) {
      this.parentSubscription.unsubscribe();
    }
    if (this.state.errorEmbeddable) {
      this.state.errorEmbeddable.destroy();
    }
    this.props.embeddable.destroy();
  }
  render() {
    const viewOnlyMode = this.state.viewMode === _types__WEBPACK_IMPORTED_MODULE_7__["ViewMode"].VIEW;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('embPanel', {
      'embPanel--editing': !viewOnlyMode,
      'embPanel--loading': this.state.loading
    });
    const contentAttrs = {};
    if (this.state.loading) contentAttrs['data-loading'] = true;
    if (this.state.error) contentAttrs['data-error'] = true;
    const title = this.props.embeddable.getTitle();
    const headerId = this.generateId();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPanel"], {
      className: classes,
      "data-test-subj": "embeddablePanel",
      "data-test-embeddable-id": this.props.embeddable.id,
      paddingSize: "none",
      role: "figure",
      "aria-labelledby": headerId,
      hasBorder: this.props.hasBorder,
      hasShadow: this.props.hasShadow
    }, !this.props.hideHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_panel_header_panel_header__WEBPACK_IMPORTED_MODULE_11__["PanelHeader"], {
      getActionContextMenuPanel: this.getActionContextMenuPanel,
      hidePanelTitle: this.state.hidePanelTitle,
      hidePanelAction: this.state.hidePanelAction,
      isViewMode: viewOnlyMode,
      closeContextMenu: this.state.closeContextMenu,
      title: title,
      badges: this.state.badges,
      notifications: this.state.notifications,
      embeddable: this.props.embeddable,
      headerId: headerId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_embeddable_error_label__WEBPACK_IMPORTED_MODULE_15__["EmbeddableErrorLabel"], {
      error: this.state.error
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _extends({
      className: "embPanel__content",
      ref: this.embeddableRoot
    }, contentAttrs)));
  }
  componentDidMount() {
    if (this.embeddableRoot.current) {
      this.subscription.add(this.props.embeddable.getOutput$().subscribe(output => {
        this.setState({
          error: output.error,
          loading: output.loading
        });
      }, error => {
        if (this.embeddableRoot.current) {
          const errorEmbeddable = new ___WEBPACK_IMPORTED_MODULE_16__["ErrorEmbeddable"](error, {
            id: this.props.embeddable.id
          });
          errorEmbeddable.render(this.embeddableRoot.current);
          this.setState({
            errorEmbeddable
          });
        }
      }));
      this.props.embeddable.render(this.embeddableRoot.current);
    }
  }
}

/***/ }),

/***/ "./public/lib/panel/index.ts":
/*!***********************************!*\
  !*** ./public/lib/panel/index.ts ***!
  \***********************************/
/*! exports provided: EmbeddablePanel, ACTION_INSPECT_PANEL, InspectPanelAction, ACTION_ADD_PANEL, AddPanelAction, openAddPanelFlyout, REMOVE_PANEL_ACTION, RemovePanelAction, ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _embeddable_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embeddable_panel */ "./public/lib/panel/embeddable_panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePanel", function() { return _embeddable_panel__WEBPACK_IMPORTED_MODULE_0__["EmbeddablePanel"]; });

/* harmony import */ var _panel_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel_header */ "./public/lib/panel/panel_header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_INSPECT_PANEL", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["ACTION_INSPECT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectPanelAction", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["InspectPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["AddPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["openAddPanelFlyout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PANEL_ACTION", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["REMOVE_PANEL_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovePanelAction", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["RemovePanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["ACTION_CUSTOMIZE_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return _panel_header__WEBPACK_IMPORTED_MODULE_1__["CustomizePanelTitleAction"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/panel_header/index.ts":
/*!************************************************!*\
  !*** ./public/lib/panel/panel_header/index.ts ***!
  \************************************************/
/*! exports provided: ACTION_INSPECT_PANEL, InspectPanelAction, ACTION_ADD_PANEL, AddPanelAction, openAddPanelFlyout, REMOVE_PANEL_ACTION, RemovePanelAction, ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel_actions */ "./public/lib/panel/panel_header/panel_actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_INSPECT_PANEL", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["ACTION_INSPECT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectPanelAction", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["InspectPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["AddPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["openAddPanelFlyout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PANEL_ACTION", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PANEL_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovePanelAction", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["RemovePanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["ACTION_CUSTOMIZE_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return _panel_actions__WEBPACK_IMPORTED_MODULE_0__["CustomizePanelTitleAction"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_action.ts":
/*!***********************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_action.ts ***!
  \***********************************************************************************/
/*! exports provided: ACTION_ADD_PANEL, AddPanelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return ACTION_ADD_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return AddPanelAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types */ "./public/lib/types.ts");
/* harmony import */ var _open_add_panel_flyout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open_add_panel_flyout */ "./public/lib/panel/panel_header/panel_actions/add_panel/open_add_panel_flyout.tsx");
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




const ACTION_ADD_PANEL = 'ACTION_ADD_PANEL';
class AddPanelAction {
  constructor(getFactory, getAllFactories, overlays, notifications, SavedObjectFinder) {
    this.getFactory = getFactory;
    this.getAllFactories = getAllFactories;
    this.overlays = overlays;
    this.notifications = notifications;
    this.SavedObjectFinder = SavedObjectFinder;
    _defineProperty(this, "type", ACTION_ADD_PANEL);
    _defineProperty(this, "id", ACTION_ADD_PANEL);
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.addPanel.displayName', {
      defaultMessage: 'Add panel'
    });
  }
  getIconType() {
    return 'plusInCircleFilled';
  }
  async isCompatible(context) {
    const {
      embeddable
    } = context;
    return embeddable.getIsContainer() && embeddable.getInput().viewMode === _types__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].EDIT;
  }
  async execute(context) {
    const {
      embeddable
    } = context;
    if (!embeddable.getIsContainer() || !(await this.isCompatible(context))) {
      throw new Error('Context is incompatible');
    }
    Object(_open_add_panel_flyout__WEBPACK_IMPORTED_MODULE_2__["openAddPanelFlyout"])({
      embeddable,
      getFactory: this.getFactory,
      getAllFactories: this.getAllFactories,
      overlays: this.overlays,
      notifications: this.notifications,
      SavedObjectFinder: this.SavedObjectFinder
    });
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_flyout.tsx":
/*!************************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_flyout.tsx ***!
  \************************************************************************************/
/*! exports provided: AddPanelFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPanelFlyout", function() { return AddPanelFlyout; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../errors */ "./public/lib/errors.ts");
/* harmony import */ var _saved_object_finder_create_new__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saved_object_finder_create_new */ "./public/lib/panel/panel_header/panel_actions/add_panel/saved_object_finder_create_new.tsx");
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







function capitalize([first, ...letters]) {
  return `${first.toUpperCase()}${letters.join('')}`;
}
class AddPanelFlyout extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "lastToast", void 0);
    _defineProperty(this, "state", {
      isCreateMenuOpen: false
    });
    _defineProperty(this, "showToast", name => {
      // To avoid the clutter of having toast messages cover flyout
      // close previous toast message before creating a new one
      if (this.lastToast) {
        this.props.notifications.toasts.remove(this.lastToast);
      }
      this.lastToast = this.props.notifications.toasts.addSuccess({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.addPanel.savedObjectAddedToContainerSuccessMessageTitle', {
          defaultMessage: '{savedObjectName} was added',
          values: {
            savedObjectName: name
          }
        }),
        'data-test-subj': 'addObjectToContainerSuccess'
      });
    });
    _defineProperty(this, "createNewEmbeddable", async type => {
      this.props.onClose();
      const factory = this.props.getFactory(type);
      if (!factory) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_4__["EmbeddableFactoryNotFoundError"](type);
      }
      const explicitInput = await factory.getExplicitInput();
      const embeddable = await this.props.container.addNewEmbeddable(type, explicitInput);
      if (embeddable) {
        this.showToast(embeddable.getInput().title || '');
      }
    });
    _defineProperty(this, "onAddPanel", async (savedObjectId, savedObjectType, name) => {
      const factoryForSavedObjectType = [...this.props.getAllFactories()].find(factory => factory.savedObjectMetaData && factory.savedObjectMetaData.type === savedObjectType);
      if (!factoryForSavedObjectType) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_4__["EmbeddableFactoryNotFoundError"](savedObjectType);
      }
      this.props.container.addNewEmbeddable(factoryForSavedObjectType.type, {
        savedObjectId
      });
      this.showToast(name);
    });
  }
  getCreateMenuItems() {
    return [...this.props.getAllFactories()].filter(factory => factory.isEditable() && !factory.isContainerType && factory.canCreateNew()).map(factory => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiContextMenuItem"], {
      key: factory.type,
      "data-test-subj": `createNew-${factory.type}`,
      onClick: () => this.createNewEmbeddable(factory.type),
      className: "embPanel__addItem"
    }, capitalize(factory.getDisplayName())));
  }
  render() {
    const SavedObjectFinder = this.props.SavedObjectFinder;
    const metaData = [...this.props.getAllFactories()].filter(embeddableFactory => Boolean(embeddableFactory.savedObjectMetaData) && !embeddableFactory.isContainerType).map(({
      savedObjectMetaData
    }) => savedObjectMetaData);
    const savedObjectsFinder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SavedObjectFinder, {
      onChoose: this.onAddPanel,
      savedObjectMetaData: metaData,
      showFilter: true,
      noItemsMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.addPanel.noMatchingObjectsMessage', {
        defaultMessage: 'No matching objects found.'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_saved_object_finder_create_new__WEBPACK_IMPORTED_MODULE_5__["SavedObjectFinderCreateNew"], {
      menuItems: this.getCreateMenuItems()
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlyoutHeader"], {
      hasBorder: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "embeddableApi.addPanel.Title",
      defaultMessage: "Add panels"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlyoutBody"], null, savedObjectsFinder));
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/add_panel/index.ts":
/*!************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/add_panel/index.ts ***!
  \************************************************************************/
/*! exports provided: ACTION_ADD_PANEL, AddPanelAction, openAddPanelFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_panel_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_panel_action */ "./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _add_panel_action__WEBPACK_IMPORTED_MODULE_0__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _add_panel_action__WEBPACK_IMPORTED_MODULE_0__["AddPanelAction"]; });

/* harmony import */ var _open_add_panel_flyout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open_add_panel_flyout */ "./public/lib/panel/panel_header/panel_actions/add_panel/open_add_panel_flyout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _open_add_panel_flyout__WEBPACK_IMPORTED_MODULE_1__["openAddPanelFlyout"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/panel_header/panel_actions/add_panel/open_add_panel_flyout.tsx":
/*!*****************************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/add_panel/open_add_panel_flyout.tsx ***!
  \*****************************************************************************************/
/*! exports provided: openAddPanelFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return openAddPanelFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _add_panel_flyout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_panel_flyout */ "./public/lib/panel/panel_header/panel_actions/add_panel/add_panel_flyout.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




async function openAddPanelFlyout(options) {
  const {
    embeddable,
    getFactory,
    getAllFactories,
    overlays,
    notifications,
    SavedObjectFinder
  } = options;
  const flyoutSession = overlays.openFlyout(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_1__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_panel_flyout__WEBPACK_IMPORTED_MODULE_2__["AddPanelFlyout"], {
    container: embeddable,
    onClose: () => {
      if (flyoutSession) {
        flyoutSession.close();
      }
    },
    getFactory: getFactory,
    getAllFactories: getAllFactories,
    notifications: notifications,
    SavedObjectFinder: SavedObjectFinder
  })), {
    'data-test-subj': 'dashboardAddPanel',
    ownFocus: true
  });
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/add_panel/saved_object_finder_create_new.tsx":
/*!**************************************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/add_panel/saved_object_finder_create_new.tsx ***!
  \**************************************************************************************************/
/*! exports provided: SavedObjectFinderCreateNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectFinderCreateNew", function() { return SavedObjectFinderCreateNew; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
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






function SavedObjectFinderCreateNew({
  menuItems
}) {
  const [isCreateMenuOpen, setCreateMenuOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toggleCreateMenu = () => {
    setCreateMenuOpen(!isCreateMenuOpen);
  };
  const closeCreateMenu = () => {
    setCreateMenuOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    id: "createNew",
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
      "data-test-subj": "createNew",
      iconType: "plus",
      iconSide: "left",
      onClick: toggleCreateMenu,
      fill: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "embeddableApi.addPanel.createNewDefaultOption",
      defaultMessage: "Create new"
    })),
    isOpen: isCreateMenuOpen,
    closePopover: closeCreateMenu,
    panelPaddingSize: "none",
    anchorPosition: "downRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
    items: menuItems,
    size: "s"
  }));
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_action.ts":
/*!***********************************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_action.ts ***!
  \***********************************************************************************************/
/*! exports provided: ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return ACTION_CUSTOMIZE_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return CustomizePanelTitleAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types */ "./public/lib/types.ts");
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



const ACTION_CUSTOMIZE_PANEL = 'ACTION_CUSTOMIZE_PANEL';
class CustomizePanelTitleAction {
  constructor(getDataFromUser) {
    this.getDataFromUser = getDataFromUser;
    _defineProperty(this, "type", ACTION_CUSTOMIZE_PANEL);
    _defineProperty(this, "id", ACTION_CUSTOMIZE_PANEL);
    _defineProperty(this, "order", 40);
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.customizePanel.action.displayName', {
      defaultMessage: 'Edit panel title'
    });
  }
  getIconType() {
    return 'pencil';
  }
  async isCompatible({
    embeddable
  }) {
    return embeddable.getInput().viewMode === _types__WEBPACK_IMPORTED_MODULE_1__["ViewMode"].EDIT ? true : false;
  }
  async execute({
    embeddable
  }) {
    const data = await this.getDataFromUser({
      embeddable
    });
    const {
      title,
      hideTitle
    } = data;
    embeddable.updateInput({
      title,
      hidePanelTitles: hideTitle
    });
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_modal.tsx":
/*!***********************************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_modal.tsx ***!
  \***********************************************************************************************/
/*! exports provided: CustomizePanelModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelModal", function() { return CustomizePanelModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
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





class CustomizePanelModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    var _props$embeddable$get;
    super(props);
    _defineProperty(this, "reset", () => {
      this.setState({
        title: this.props.embeddable.getOutput().defaultTitle
      });
    });
    _defineProperty(this, "onHideTitleToggle", () => {
      this.setState(prevState => ({
        hideTitle: !prevState.hideTitle
      }));
    });
    _defineProperty(this, "save", () => {
      const newTitle = this.state.title === this.props.embeddable.getOutput().defaultTitle ? undefined : this.state.title;
      this.props.updateTitle(newTitle, this.state.hideTitle);
    });
    this.state = {
      hideTitle: props.embeddable.getInput().hidePanelTitles,
      title: (_props$embeddable$get = props.embeddable.getInput().title) !== null && _props$embeddable$get !== void 0 ? _props$embeddable$get : this.props.embeddable.getOutput().defaultTitle
    };
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeaderTitle"], {
      "data-test-subj": "customizePanelTitle"
    }, "Customize panel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      checked: !this.state.hideTitle,
      "data-test-subj": "customizePanelHideTitle",
      id: "hideTitle",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "Show panel title",
        id: "embeddableApi.customizePanel.modal.showTitle"
      }),
      onChange: this.onHideTitleToggle
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('embeddableApi.customizePanel.modal.optionsMenuForm.panelTitleFormRowLabel', {
        defaultMessage: 'Panel title'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
      id: "panelTitleInput",
      "data-test-subj": "customEmbeddablePanelTitleInput",
      name: "min",
      type: "text",
      disabled: this.state.hideTitle,
      value: this.state.title || '',
      onChange: e => this.setState({
        title: e.target.value
      }),
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('embeddableApi.customizePanel.modal.optionsMenuForm.panelTitleInputAriaLabel', {
        defaultMessage: 'Enter a custom title for your panel'
      }),
      append: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
        "data-test-subj": "resetCustomEmbeddablePanelTitle",
        onClick: this.reset,
        disabled: this.state.hideTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "embeddableApi.customizePanel.modal.optionsMenuForm.resetCustomDashboardButtonLabel",
        defaultMessage: "Reset"
      }))
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
      onClick: () => this.props.cancel()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "embeddableApi.customizePanel.modal.cancel",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
      "data-test-subj": "saveNewTitleButton",
      onClick: this.save,
      fill: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "embeddableApi.customizePanel.modal.saveButtonTitle",
      defaultMessage: "Save"
    }))));
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/customize_title/index.ts":
/*!******************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/customize_title/index.ts ***!
  \******************************************************************************/
/*! exports provided: ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customize_panel_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customize_panel_action */ "./public/lib/panel/panel_header/panel_actions/customize_title/customize_panel_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return _customize_panel_action__WEBPACK_IMPORTED_MODULE_0__["ACTION_CUSTOMIZE_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return _customize_panel_action__WEBPACK_IMPORTED_MODULE_0__["CustomizePanelTitleAction"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/panel_header/panel_actions/index.ts":
/*!**************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/index.ts ***!
  \**************************************************************/
/*! exports provided: ACTION_INSPECT_PANEL, InspectPanelAction, ACTION_ADD_PANEL, AddPanelAction, openAddPanelFlyout, REMOVE_PANEL_ACTION, RemovePanelAction, ACTION_CUSTOMIZE_PANEL, CustomizePanelTitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspect_panel_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect_panel_action */ "./public/lib/panel/panel_header/panel_actions/inspect_panel_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_INSPECT_PANEL", function() { return _inspect_panel_action__WEBPACK_IMPORTED_MODULE_0__["ACTION_INSPECT_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InspectPanelAction", function() { return _inspect_panel_action__WEBPACK_IMPORTED_MODULE_0__["InspectPanelAction"]; });

/* harmony import */ var _add_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_panel */ "./public/lib/panel/panel_header/panel_actions/add_panel/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_ADD_PANEL", function() { return _add_panel__WEBPACK_IMPORTED_MODULE_1__["ACTION_ADD_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPanelAction", function() { return _add_panel__WEBPACK_IMPORTED_MODULE_1__["AddPanelAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openAddPanelFlyout", function() { return _add_panel__WEBPACK_IMPORTED_MODULE_1__["openAddPanelFlyout"]; });

/* harmony import */ var _remove_panel_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove_panel_action */ "./public/lib/panel/panel_header/panel_actions/remove_panel_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PANEL_ACTION", function() { return _remove_panel_action__WEBPACK_IMPORTED_MODULE_2__["REMOVE_PANEL_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemovePanelAction", function() { return _remove_panel_action__WEBPACK_IMPORTED_MODULE_2__["RemovePanelAction"]; });

/* harmony import */ var _customize_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize_title */ "./public/lib/panel/panel_header/panel_actions/customize_title/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_CUSTOMIZE_PANEL", function() { return _customize_title__WEBPACK_IMPORTED_MODULE_3__["ACTION_CUSTOMIZE_PANEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizePanelTitleAction", function() { return _customize_title__WEBPACK_IMPORTED_MODULE_3__["CustomizePanelTitleAction"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/panel/panel_header/panel_actions/inspect_panel_action.ts":
/*!*****************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/inspect_panel_action.ts ***!
  \*****************************************************************************/
/*! exports provided: ACTION_INSPECT_PANEL, InspectPanelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INSPECT_PANEL", function() { return ACTION_INSPECT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectPanelAction", function() { return InspectPanelAction; });
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


const ACTION_INSPECT_PANEL = 'openInspector';
class InspectPanelAction {
  constructor(inspector) {
    this.inspector = inspector;
    _defineProperty(this, "type", ACTION_INSPECT_PANEL);
    _defineProperty(this, "id", ACTION_INSPECT_PANEL);
    _defineProperty(this, "order", 20);
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.inspectPanel.displayName', {
      defaultMessage: '검사'
    });
  }
  getIconType() {
    return 'inspect';
  }
  async isCompatible({
    embeddable
  }) {
    return this.inspector.isAvailable(embeddable.getInspectorAdapters());
  }
  async execute({
    embeddable
  }) {
    const adapters = embeddable.getInspectorAdapters();
    if (!(await this.isCompatible({
      embeddable
    })) || adapters === undefined) {
      throw new Error('Action not compatible with context');
    }
    const session = this.inspector.open(adapters, {
      title: embeddable.getTitle()
    });
    // Overwrite the embeddables.destroy() function to close the inspector
    // before calling the original destroy method
    const originalDestroy = embeddable.destroy;
    embeddable.destroy = () => {
      session.close();
      if (originalDestroy) {
        originalDestroy.call(embeddable);
      }
    };
    // In case the inspector gets closed (otherwise), restore the original destroy function
    session.onClose.finally(() => {
      embeddable.destroy = originalDestroy;
    });
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_actions/remove_panel_action.ts":
/*!****************************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_actions/remove_panel_action.ts ***!
  \****************************************************************************/
/*! exports provided: REMOVE_PANEL_ACTION, RemovePanelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PANEL_ACTION", function() { return REMOVE_PANEL_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePanelAction", function() { return RemovePanelAction; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui_actions */ "./public/lib/ui_actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types */ "./public/lib/types.ts");
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




const REMOVE_PANEL_ACTION = 'deletePanel';
function hasExpandedPanelInput(container) {
  return container.getInput().expandedPanelId !== undefined;
}
class RemovePanelAction {
  constructor() {
    _defineProperty(this, "type", REMOVE_PANEL_ACTION);
    _defineProperty(this, "id", REMOVE_PANEL_ACTION);
    _defineProperty(this, "order", 1);
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.removePanel.displayName', {
      defaultMessage: 'Delete from dashboard'
    });
  }
  getIconType() {
    return 'trash';
  }
  async isCompatible({
    embeddable
  }) {
    const isPanelExpanded = embeddable.parent && hasExpandedPanelInput(embeddable.parent) && embeddable.parent.getInput().expandedPanelId === embeddable.id;
    return Boolean(embeddable.parent && embeddable.getInput().viewMode === _types__WEBPACK_IMPORTED_MODULE_2__["ViewMode"].EDIT && !isPanelExpanded);
  }
  async execute({
    embeddable
  }) {
    if (!embeddable.parent || !(await this.isCompatible({
      embeddable
    }))) {
      throw new _ui_actions__WEBPACK_IMPORTED_MODULE_1__["IncompatibleActionError"]();
    }
    embeddable.parent.removeEmbeddable(embeddable.id);
  }
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_header.tsx":
/*!********************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_header.tsx ***!
  \********************************************************/
/*! exports provided: PanelHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeader", function() { return PanelHeader; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _panel_options_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel_options_menu */ "./public/lib/panel/panel_header/panel_options_menu.tsx");
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../triggers */ "./public/lib/triggers/index.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */








function renderBadges(badges, embeddable) {
  return badges.map(badge => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBadge"], {
    key: badge.id,
    className: "embPanel__headerBadge",
    iconType: badge.getIconType({
      embeddable,
      trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelBadgeTrigger"]
    }),
    onClick: () => badge.execute({
      embeddable,
      trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelBadgeTrigger"]
    }),
    onClickAriaLabel: badge.getDisplayName({
      embeddable,
      trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelBadgeTrigger"]
    })
  }, badge.getDisplayName({
    embeddable,
    trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelBadgeTrigger"]
  })));
}
function renderNotifications(notifications, embeddable) {
  return notifications.map(notification => {
    const context = {
      embeddable
    };
    let badge = notification.MenuItem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__["uiToReactComponent"])(notification.MenuItem)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNotificationBadge"], {
      "data-test-subj": `embeddablePanelNotification-${notification.id}`,
      key: notification.id,
      style: {
        marginTop: '4px',
        marginRight: '4px'
      },
      onClick: () => notification.execute({
        ...context,
        trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelNotificationTrigger"]
      })
    }, notification.getDisplayName({
      ...context,
      trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelNotificationTrigger"]
    }));
    if (notification.getDisplayNameTooltip) {
      const tooltip = notification.getDisplayNameTooltip({
        ...context,
        trigger: _triggers__WEBPACK_IMPORTED_MODULE_5__["panelNotificationTrigger"]
      });
      if (tooltip) {
        badge = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
          position: "top",
          delay: "regular",
          content: tooltip,
          key: notification.id
        }, badge);
      }
    }
    return badge;
  });
}
function getViewDescription(embeddable) {
  if ('getDescription' in embeddable) {
    const description = embeddable.getDescription();
    if (description) {
      return description;
    }
  }
  return '';
}
function PanelHeader({
  title,
  isViewMode,
  hidePanelTitle,
  hidePanelAction,
  getActionContextMenuPanel,
  closeContextMenu,
  badges,
  notifications,
  embeddable,
  headerId
}) {
  const description = getViewDescription(embeddable);
  const showTitle = !hidePanelTitle && (!isViewMode || title);
  const showPanelBar = !isViewMode || badges.length > 0 || notifications.length > 0 || showTitle || description;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('embPanel__header', {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'embPanel__header--floater': !showPanelBar
  });
  const placeholderTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.placeholderTitle', {
    defaultMessage: '[No Title]'
  });
  const getAriaLabel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      id: headerId
    }, showPanelBar && title ? _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.enhancedDashboardPanelAriaLabel', {
      defaultMessage: 'Dashboard panel: {title}',
      values: {
        title: title || placeholderTitle
      }
    }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.dashboardPanelAriaLabel', {
      defaultMessage: 'Dashboard panel'
    }));
  };
  if (!showPanelBar) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes
    }, !hidePanelAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_panel_options_menu__WEBPACK_IMPORTED_MODULE_4__["PanelOptionsMenu"], {
      getActionContextMenuPanel: getActionContextMenuPanel,
      isViewMode: isViewMode,
      closeContextMenu: closeContextMenu,
      title: title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiScreenReaderOnly"], null, getAriaLabel()));
  }
  const renderTitle = () => {
    const titleComponent = showTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: title ? 'embPanel__titleText' : 'embPanel__placeholderTitleText'
    }, title || placeholderTitle) : undefined;
    return description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
      content: description,
      delay: "regular",
      position: "top",
      anchorClassName: "embPanel__titleTooltipAnchor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "embPanel__titleInner"
    }, titleComponent, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "iInCircle",
      color: "subdued"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "embPanel__titleInner"
    }, titleComponent);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("figcaption", {
    className: classes,
    "data-test-subj": `embeddablePanelHeading-${(title || '').replace(/\s/g, '')}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    "data-test-subj": "dashboardPanelTitle",
    className: "embPanel__title embPanel__dragger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiScreenReaderOnly"], null, getAriaLabel()), renderTitle(), renderBadges(badges, embeddable)), renderNotifications(notifications, embeddable), !hidePanelAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_panel_options_menu__WEBPACK_IMPORTED_MODULE_4__["PanelOptionsMenu"], {
    isViewMode: isViewMode,
    getActionContextMenuPanel: getActionContextMenuPanel,
    closeContextMenu: closeContextMenu,
    title: title
  }));
}

/***/ }),

/***/ "./public/lib/panel/panel_header/panel_options_menu.tsx":
/*!**************************************************************!*\
  !*** ./public/lib/panel/panel_header/panel_options_menu.tsx ***!
  \**************************************************************/
/*! exports provided: PanelOptionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelOptionsMenu", function() { return PanelOptionsMenu; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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




class PanelOptionsMenu extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.closeContextMenu) {
      return {
        ...state,
        isPopoverOpen: false
      };
    } else {
      return state;
    }
  }
  constructor(props) {
    super(props);
    _defineProperty(this, "mounted", false);
    _defineProperty(this, "closePopover", () => {
      if (this.mounted) {
        this.setState({
          isPopoverOpen: false
        });
      }
    });
    _defineProperty(this, "toggleContextMenu", () => {
      if (!this.mounted) return;
      const after = () => {
        if (!this.state.isPopoverOpen) return;
        this.setState({
          actionContextMenuPanel: undefined
        });
        this.props.getActionContextMenuPanel().then(actionContextMenuPanel => {
          if (!this.mounted) return;
          this.setState({
            actionContextMenuPanel
          });
        }).catch(error => console.error(error)); // eslint-disable-line no-console
      };

      this.setState(({
        isPopoverOpen
      }) => ({
        isPopoverOpen: !isPopoverOpen
      }), after);
    });
    this.state = {
      actionContextMenuPanel: undefined,
      isPopoverOpen: false
    };
  }
  async componentDidMount() {
    this.mounted = true;
    this.setState({
      actionContextMenuPanel: undefined
    });
    const actionContextMenuPanel = await this.props.getActionContextMenuPanel();
    if (this.mounted) {
      this.setState({
        actionContextMenuPanel
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const {
      isViewMode,
      title
    } = this.props;
    const enhancedAriaLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.optionsMenu.panelOptionsButtonEnhancedAriaLabel', {
      defaultMessage: 'Panel options for {title}',
      values: {
        title
      }
    });
    const ariaLabelWithoutTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('embeddableApi.panel.optionsMenu.panelOptionsButtonAriaLabel', {
      defaultMessage: 'Panel options'
    });
    const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
      iconType: isViewMode ? 'boxesHorizontal' : 'gear',
      color: "text",
      className: "embPanel__optionsMenuButton",
      "aria-label": title ? enhancedAriaLabel : ariaLabelWithoutTitle,
      "data-test-subj": "embeddablePanelToggleMenuIcon",
      onClick: this.toggleContextMenu
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
      className: "embPanel__optionsMenuPopover",
      button: button,
      isOpen: this.state.isPopoverOpen,
      closePopover: this.closePopover,
      panelPaddingSize: "none",
      anchorPosition: "downRight",
      "data-test-subj": this.state.isPopoverOpen ? 'embeddablePanelContextMenuOpen' : 'embeddablePanelContextMenuClosed'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiContextMenu"], {
      initialPanelId: "mainMenu",
      panels: this.state.actionContextMenuPanel || [],
      size: "s"
    }));
  }
}

/***/ }),

/***/ "./public/lib/reference_or_value_embeddable/index.ts":
/*!***********************************************************!*\
  !*** ./public/lib/reference_or_value_embeddable/index.ts ***!
  \***********************************************************/
/*! exports provided: ReferenceOrValueEmbeddable, isReferenceOrValueEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./public/lib/reference_or_value_embeddable/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceOrValueEmbeddable", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["ReferenceOrValueEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReferenceOrValueEmbeddable", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["isReferenceOrValueEmbeddable"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/reference_or_value_embeddable/types.ts":
/*!***********************************************************!*\
  !*** ./public/lib/reference_or_value_embeddable/types.ts ***!
  \***********************************************************/
/*! exports provided: isReferenceOrValueEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReferenceOrValueEmbeddable", function() { return isReferenceOrValueEmbeddable; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Any embeddable that implements this interface will be able to use input that is
 * either by reference (backed by a saved object) OR by value, (provided
 * by the container).
 * @public
 */

function isReferenceOrValueEmbeddable(incoming) {
  return !!incoming.inputIsRefType && !!incoming.getInputAsValueType && !!incoming.getInputAsRefType;
}

/***/ }),

/***/ "./public/lib/state_transfer/embeddable_state_transfer.ts":
/*!****************************************************************!*\
  !*** ./public/lib/state_transfer/embeddable_state_transfer.ts ***!
  \****************************************************************/
/*! exports provided: EmbeddableStateTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStateTransfer", function() { return EmbeddableStateTransfer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/lib/state_transfer/types.ts");
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
 * A wrapper around the state object in {@link ScopedHistory | core scoped history} which provides
 * strongly typed helper methods for common incoming and outgoing states used by the embeddable infrastructure.
 *
 * @public
 */
class EmbeddableStateTransfer {
  constructor(navigateToApp, scopedHistory, appList) {
    this.navigateToApp = navigateToApp;
    this.scopedHistory = scopedHistory;
    this.appList = appList;
    /**
     * Fetches an internationalized app title when given an appId.
     * @param appId - The id of the app to fetch the title for
     */
    _defineProperty(this, "getAppNameFromId", appId => {
      var _this$appList;
      return (_this$appList = this.appList) === null || _this$appList === void 0 || (_this$appList = _this$appList.get(appId)) === null || _this$appList === void 0 ? void 0 : _this$appList.title;
    });
  }
  /**
   * Fetches an {@link EmbeddableEditorState | originating app} argument from the scoped
   * history's location state.
   *
   * @param history - the scoped history to fetch from
   * @param options.keysToRemoveAfterFetch - an array of keys to be removed from the state after they are retrieved
   */
  getIncomingEditorState(options) {
    return this.getIncomingState(_types__WEBPACK_IMPORTED_MODULE_1__["isEmbeddableEditorState"], {
      keysToRemoveAfterFetch: options === null || options === void 0 ? void 0 : options.keysToRemoveAfterFetch
    });
  }

  /**
   * Fetches an {@link EmbeddablePackageState | embeddable package} argument from the scoped
   * history's location state.
   *
   * @param history - the scoped history to fetch from
   * @param options.keysToRemoveAfterFetch - an array of keys to be removed from the state after they are retrieved
   */
  getIncomingEmbeddablePackage(options) {
    return this.getIncomingState(_types__WEBPACK_IMPORTED_MODULE_1__["isEmbeddablePackageState"], {
      keysToRemoveAfterFetch: options === null || options === void 0 ? void 0 : options.keysToRemoveAfterFetch
    });
  }

  /**
   * A wrapper around the {@link ApplicationStart.navigateToApp} method which navigates to the specified appId
   * with {@link EmbeddableEditorState | embeddable editor state}
   */
  async navigateToEditor(appId, options) {
    await this.navigateToWithState(appId, options);
  }

  /**
   * A wrapper around the {@link ApplicationStart.navigateToApp} method which navigates to the specified appId
   * with {@link EmbeddablePackageState | embeddable package state}
   */
  async navigateToWithEmbeddablePackage(appId, options) {
    await this.navigateToWithState(appId, options);
  }
  getIncomingState(guard, options) {
    var _this$scopedHistory$l;
    if (!this.scopedHistory) {
      throw new TypeError('ScopedHistory is required to fetch incoming state');
    }
    const incomingState = (_this$scopedHistory$l = this.scopedHistory.location) === null || _this$scopedHistory$l === void 0 ? void 0 : _this$scopedHistory$l.state;
    const castState = !guard || guard(incomingState) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(incomingState) : undefined;
    if (castState && options !== null && options !== void 0 && options.keysToRemoveAfterFetch) {
      const stateReplace = {
        ...this.scopedHistory.location.state
      };
      options.keysToRemoveAfterFetch.forEach(key => {
        delete stateReplace[key];
      });
      this.scopedHistory.replace({
        ...this.scopedHistory.location,
        state: stateReplace
      });
    }
    return castState;
  }
  async navigateToWithState(appId, options) {
    var _this$scopedHistory;
    const stateObject = options !== null && options !== void 0 && options.appendToExistingState && this.scopedHistory ? {
      ...((_this$scopedHistory = this.scopedHistory) === null || _this$scopedHistory === void 0 ? void 0 : _this$scopedHistory.location.state),
      ...options.state
    } : options === null || options === void 0 ? void 0 : options.state;
    await this.navigateToApp(appId, {
      path: options === null || options === void 0 ? void 0 : options.path,
      state: stateObject
    });
  }
}

/***/ }),

/***/ "./public/lib/state_transfer/index.ts":
/*!********************************************!*\
  !*** ./public/lib/state_transfer/index.ts ***!
  \********************************************/
/*! exports provided: EmbeddableStateTransfer, EmbeddableEditorState, EmbeddablePackageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _embeddable_state_transfer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embeddable_state_transfer */ "./public/lib/state_transfer/embeddable_state_transfer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableStateTransfer", function() { return _embeddable_state_transfer__WEBPACK_IMPORTED_MODULE_0__["EmbeddableStateTransfer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/lib/state_transfer/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddableEditorState", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["EmbeddableEditorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePackageState", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["EmbeddablePackageState"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/state_transfer/types.ts":
/*!********************************************!*\
  !*** ./public/lib/state_transfer/types.ts ***!
  \********************************************/
/*! exports provided: isEmbeddableEditorState, isEmbeddablePackageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmbeddableEditorState", function() { return isEmbeddableEditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmbeddablePackageState", function() { return isEmbeddablePackageState; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * A state package that contains information an editor will need to create or edit an embeddable then redirect back.
 * @public
 */

function isEmbeddableEditorState(state) {
  return ensureFieldOfTypeExists('originatingApp', state, 'string');
}

/**
 * A state package that contains all fields necessary to create or update an embeddable by reference or by value in a container.
 * @public
 */

function isEmbeddablePackageState(state) {
  return ensureFieldOfTypeExists('type', state, 'string') && ensureFieldOfTypeExists('input', state, 'object');
}
function ensureFieldOfTypeExists(key, obj, type) {
  return obj && key in obj && (!type || typeof obj[key] === type);
}

/***/ }),

/***/ "./public/lib/triggers/index.ts":
/*!**************************************!*\
  !*** ./public/lib/triggers/index.ts ***!
  \**************************************/
/*! exports provided: isValueClickTriggerContext, isRangeSelectTriggerContext, CONTEXT_MENU_TRIGGER, contextMenuTrigger, PANEL_BADGE_TRIGGER, panelBadgeTrigger, PANEL_NOTIFICATION_TRIGGER, panelNotificationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers */ "./public/lib/triggers/triggers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueClickTriggerContext", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["isValueClickTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRangeSelectTriggerContext", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["isRangeSelectTriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["CONTEXT_MENU_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contextMenuTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["contextMenuTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_BADGE_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["PANEL_BADGE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelBadgeTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["panelBadgeTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PANEL_NOTIFICATION_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["PANEL_NOTIFICATION_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "panelNotificationTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_0__["panelNotificationTrigger"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/triggers/triggers.ts":
/*!*****************************************!*\
  !*** ./public/lib/triggers/triggers.ts ***!
  \*****************************************/
/*! exports provided: isValueClickTriggerContext, isRangeSelectTriggerContext, CONTEXT_MENU_TRIGGER, contextMenuTrigger, PANEL_BADGE_TRIGGER, panelBadgeTrigger, PANEL_NOTIFICATION_TRIGGER, panelNotificationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueClickTriggerContext", function() { return isValueClickTriggerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeSelectTriggerContext", function() { return isRangeSelectTriggerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU_TRIGGER", function() { return CONTEXT_MENU_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextMenuTrigger", function() { return contextMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANEL_BADGE_TRIGGER", function() { return PANEL_BADGE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelBadgeTrigger", function() { return panelBadgeTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PANEL_NOTIFICATION_TRIGGER", function() { return PANEL_NOTIFICATION_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panelNotificationTrigger", function() { return panelNotificationTrigger; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const isValueClickTriggerContext = context => context.data && 'data' in context.data;
const isRangeSelectTriggerContext = context => context.data && 'range' in context.data;
const CONTEXT_MENU_TRIGGER = 'CONTEXT_MENU_TRIGGER';
const contextMenuTrigger = {
  id: CONTEXT_MENU_TRIGGER,
  title: 'Context menu',
  description: 'Triggered on top-right corner context-menu select.'
};
const PANEL_BADGE_TRIGGER = 'PANEL_BADGE_TRIGGER';
const panelBadgeTrigger = {
  id: PANEL_BADGE_TRIGGER,
  title: 'Panel badges',
  description: 'Actions appear in title bar when an embeddable loads in a panel.'
};
const PANEL_NOTIFICATION_TRIGGER = 'PANEL_NOTIFICATION_TRIGGER';
const panelNotificationTrigger = {
  id: PANEL_NOTIFICATION_TRIGGER,
  title: 'Panel notifications',
  description: 'Actions appear in top-right corner of a panel.'
};

/***/ }),

/***/ "./public/lib/types.ts":
/*!*****************************!*\
  !*** ./public/lib/types.ts ***!
  \*****************************/
/*! exports provided: ViewMode, Adapters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./public/lib/inspector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adapters", function() { return _inspector__WEBPACK_IMPORTED_MODULE_0__["Adapters"]; });

/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/types */ "./common/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewMode", function() { return _common_types__WEBPACK_IMPORTED_MODULE_1__["ViewMode"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lib/ui_actions.ts":
/*!**********************************!*\
  !*** ./public/lib/ui_actions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/plugin.tsx":
/*!***************************!*\
  !*** ./public/plugin.tsx ***!
  \***************************/
/*! exports provided: EmbeddablePublicPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddablePublicPlugin", function() { return EmbeddablePublicPlugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./public/bootstrap.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib */ "./public/lib/index.ts");
/* harmony import */ var _lib_state_transfer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/state_transfer */ "./public/lib/state_transfer/index.ts");
/* harmony import */ var _common_lib_migrate_base_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/lib/migrate_base_input */ "./common/lib/migrate_base_input.ts");
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








class EmbeddablePublicPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "embeddableFactoryDefinitions", new Map());
    _defineProperty(this, "embeddableFactories", new Map());
    _defineProperty(this, "enhancements", new Map());
    _defineProperty(this, "customEmbeddableFactoryProvider", void 0);
    _defineProperty(this, "outgoingOnlyStateTransfer", {});
    _defineProperty(this, "isRegistryReady", false);
    _defineProperty(this, "appList", void 0);
    _defineProperty(this, "appListSubscription", void 0);
    _defineProperty(this, "telemetry", (state, telemetryData = {}) => {
      const enhancements = state.enhancements || {};
      const factory = this.getEmbeddableFactory(state.id);
      let telemetry = Object(_common_lib_migrate_base_input__WEBPACK_IMPORTED_MODULE_6__["telemetryBaseEmbeddableInput"])(state, telemetryData);
      if (factory) {
        telemetry = factory.telemetry(state, telemetry);
      }
      Object.keys(enhancements).map(key => {
        if (!enhancements[key]) return;
        telemetry = this.getEnhancement(key).telemetry(enhancements[key], telemetry);
      });
      return telemetry;
    });
    _defineProperty(this, "extract", state => {
      const enhancements = state.enhancements || {};
      const factory = this.getEmbeddableFactory(state.id);
      const baseResponse = Object(_common_lib_migrate_base_input__WEBPACK_IMPORTED_MODULE_6__["extractBaseEmbeddableInput"])(state);
      let updatedInput = baseResponse.state;
      const refs = baseResponse.references;
      if (factory) {
        const factoryResponse = factory.extract(state);
        updatedInput = factoryResponse.state;
        refs.push(...factoryResponse.references);
      }
      updatedInput.enhancements = {};
      Object.keys(enhancements).forEach(key => {
        if (!enhancements[key]) return;
        const enhancementResult = this.getEnhancement(key).extract(enhancements[key]);
        refs.push(...enhancementResult.references);
        updatedInput.enhancements[key] = enhancementResult.state;
      });
      return {
        state: updatedInput,
        references: refs
      };
    });
    _defineProperty(this, "inject", (state, references) => {
      const enhancements = state.enhancements || {};
      const factory = this.getEmbeddableFactory(state.id);
      let updatedInput = Object(_common_lib_migrate_base_input__WEBPACK_IMPORTED_MODULE_6__["injectBaseEmbeddableInput"])(state, references);
      if (factory) {
        updatedInput = factory.inject(updatedInput, references);
      }
      updatedInput.enhancements = {};
      Object.keys(enhancements).forEach(key => {
        if (!enhancements[key]) return;
        updatedInput.enhancements[key] = this.getEnhancement(key).inject(enhancements[key], references);
      });
      return updatedInput;
    });
    _defineProperty(this, "registerEnhancement", enhancement => {
      if (this.enhancements.has(enhancement.id)) {
        throw new Error(`enhancement with id ${enhancement.id} already exists in the registry`);
      }
      this.enhancements.set(enhancement.id, {
        id: enhancement.id,
        telemetry: enhancement.telemetry || (() => ({})),
        inject: enhancement.inject || lodash__WEBPACK_IMPORTED_MODULE_1__["identity"],
        extract: enhancement.extract || (state => {
          return {
            state,
            references: []
          };
        })
      });
    });
    _defineProperty(this, "getEnhancement", id => {
      return this.enhancements.get(id) || {
        id: 'unknown',
        telemetry: () => ({}),
        inject: lodash__WEBPACK_IMPORTED_MODULE_1__["identity"],
        extract: state => {
          return {
            state,
            references: []
          };
        }
      };
    });
    _defineProperty(this, "getEmbeddableFactories", () => {
      this.ensureFactoriesExist();
      return this.embeddableFactories.values();
    });
    _defineProperty(this, "registerEmbeddableFactory", (embeddableFactoryId, factory) => {
      if (this.embeddableFactoryDefinitions.has(embeddableFactoryId)) {
        throw new Error(`Embeddable factory [embeddableFactoryId = ${embeddableFactoryId}] already registered in Embeddables API.`);
      }
      this.embeddableFactoryDefinitions.set(embeddableFactoryId, factory);
      return () => {
        return this.getEmbeddableFactory(embeddableFactoryId);
      };
    });
    _defineProperty(this, "getEmbeddableFactory", embeddableFactoryId => {
      if (!this.isRegistryReady) {
        throw new Error('Embeddable factories can only be retrieved after setup lifecycle.');
      }
      this.ensureFactoryExists(embeddableFactoryId);
      const factory = this.embeddableFactories.get(embeddableFactoryId);
      return factory;
    });
    // These two functions are only to support legacy plugins registering factories after the start lifecycle.
    _defineProperty(this, "ensureFactoriesExist", () => {
      this.embeddableFactoryDefinitions.forEach(def => this.ensureFactoryExists(def.type));
    });
    _defineProperty(this, "ensureFactoryExists", type => {
      if (!this.embeddableFactories.get(type)) {
        const def = this.embeddableFactoryDefinitions.get(type);
        if (!def) return;
        this.embeddableFactories.set(type, this.customEmbeddableFactoryProvider ? this.customEmbeddableFactoryProvider(def) : Object(_lib__WEBPACK_IMPORTED_MODULE_4__["defaultEmbeddableFactoryProvider"])(def));
      }
    });
  }
  setup(core, {
    uiActions
  }) {
    Object(_bootstrap__WEBPACK_IMPORTED_MODULE_3__["bootstrap"])(uiActions);
    return {
      registerEmbeddableFactory: this.registerEmbeddableFactory,
      registerEnhancement: this.registerEnhancement,
      setCustomEmbeddableFactoryProvider: provider => {
        if (this.customEmbeddableFactoryProvider) {
          throw new Error('Custom embeddable factory provider is already set, and can only be set once');
        }
        this.customEmbeddableFactoryProvider = provider;
      }
    };
  }
  start(core, {
    data,
    uiActions,
    inspector
  }) {
    this.embeddableFactoryDefinitions.forEach(def => {
      this.embeddableFactories.set(def.type, this.customEmbeddableFactoryProvider ? this.customEmbeddableFactoryProvider(def) : Object(_lib__WEBPACK_IMPORTED_MODULE_4__["defaultEmbeddableFactoryProvider"])(def));
    });
    this.appListSubscription = core.application.applications$.subscribe(appList => {
      this.appList = appList;
    });
    this.outgoingOnlyStateTransfer = new _lib_state_transfer__WEBPACK_IMPORTED_MODULE_5__["EmbeddableStateTransfer"](core.application.navigateToApp, undefined, this.appList);
    this.isRegistryReady = true;
    const getEmbeddablePanelHoc = stateTransfer => ({
      embeddable,
      hideHeader,
      hasBorder,
      hasShadow
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib__WEBPACK_IMPORTED_MODULE_4__["EmbeddablePanel"], {
      hideHeader: hideHeader,
      hasBorder: hasBorder,
      hasShadow: hasShadow,
      embeddable: embeddable,
      stateTransfer: stateTransfer ? stateTransfer : this.outgoingOnlyStateTransfer,
      getActions: uiActions.getTriggerCompatibleActions,
      getEmbeddableFactory: this.getEmbeddableFactory,
      getAllEmbeddableFactories: this.getEmbeddableFactories,
      overlays: core.overlays,
      notifications: core.notifications,
      application: core.application,
      inspector: inspector,
      SavedObjectFinder: Object(_saved_objects_public__WEBPACK_IMPORTED_MODULE_2__["getSavedObjectFinder"])(core.savedObjects, core.uiSettings, data, core.application)
    });
    return {
      getEmbeddableFactory: this.getEmbeddableFactory,
      getEmbeddableFactories: this.getEmbeddableFactories,
      getStateTransfer: history => {
        return history ? new _lib_state_transfer__WEBPACK_IMPORTED_MODULE_5__["EmbeddableStateTransfer"](core.application.navigateToApp, history, this.appList) : this.outgoingOnlyStateTransfer;
      },
      EmbeddablePanel: getEmbeddablePanelHoc(),
      getEmbeddablePanel: getEmbeddablePanelHoc,
      telemetry: this.telemetry,
      extract: this.extract,
      inject: this.inject
    };
  }
  stop() {
    if (this.appListSubscription) {
      this.appListSubscription.unsubscribe();
    }
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

/***/ "plugin/inspector/public":
/*!************************************************!*\
  !*** @osd/bundleRef "plugin/inspector/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/inspector/public');
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

/***/ })

/******/ });
//# sourceMappingURL=embeddable.plugin.js.map