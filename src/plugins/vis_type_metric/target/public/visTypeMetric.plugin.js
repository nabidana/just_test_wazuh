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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v7dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/components/metric_vis.scss?v7dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#1d1e24}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,aAAa,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#1d1e24}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v7light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/components/metric_vis.scss?v7light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,UAAU,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v8dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/components/metric_vis.scss?v8dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#0a121a}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,aAAa,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#0a121a}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v8light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/components/metric_vis.scss?v8light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fcfeff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,aAAa,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:700}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fcfeff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v9dark":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/components/metric_vis.scss?v9dark ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:500}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#0f171f}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,aAAa,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:500}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#0f171f}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v9light":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/components/metric_vis.scss?v9light ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:500}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fcfeff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n", "",{"version":3,"sources":["webpack://./public/components/metric_vis.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,QAAQ,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,cAAc,CAAC,0BAA0B,CAAC,iCAAiC,CAAC,6BAA6B,CAAC,2BAA2B,CAAC,eAAe,CAAC,mBAAmB,kBAAkB,CAAC,cAAc,CAAC,YAAY,CAAC,iBAAiB,CAAC,0BAA0B,aAAa,CAAC,gCAAgC,cAAc,CAAC,gEAAgE,CAAC,yBAAyB,CAAC,4EAA4E,eAAe,CAAC,4BAA4B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.mtrVis{width:100%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.mtrVis__value{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important;font-weight:500}.mtrVis__container{line-height:normal;max-width:100%;padding:16px;text-align:center}.mtrVis__container--light{color:#fcfeff}.mtrVis__container-isFilterable{cursor:pointer;transition:transform 250ms cubic-bezier(0.694, 0.0482, 0.335, 1);transform:translate(0, 0)}.mtrVis__container-isFilterable:hover,.mtrVis__container-isFilterable:focus{box-shadow:none;transform:translate(0, -2px)}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeMetric!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeMetric!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeMetric']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeMetric_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeMetric!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeMetric!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeMetric_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeMetric_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeMetric/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_metric/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/metric_vis.scss":
/*!*******************************************!*\
  !*** ./public/components/metric_vis.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./metric_vis.scss?v7dark */ "./public/components/metric_vis.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./metric_vis.scss?v7light */ "./public/components/metric_vis.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./metric_vis.scss?v8dark */ "./public/components/metric_vis.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./metric_vis.scss?v8light */ "./public/components/metric_vis.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./metric_vis.scss?v9dark */ "./public/components/metric_vis.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./metric_vis.scss?v9light */ "./public/components/metric_vis.scss?v9light");
}

/***/ }),

/***/ "./public/components/metric_vis.scss?v7dark":
/*!**************************************************!*\
  !*** ./public/components/metric_vis.scss?v7dark ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./metric_vis.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v7dark");

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

/***/ "./public/components/metric_vis.scss?v7light":
/*!***************************************************!*\
  !*** ./public/components/metric_vis.scss?v7light ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./metric_vis.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v7light");

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

/***/ "./public/components/metric_vis.scss?v8dark":
/*!**************************************************!*\
  !*** ./public/components/metric_vis.scss?v8dark ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./metric_vis.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v8dark");

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

/***/ "./public/components/metric_vis.scss?v8light":
/*!***************************************************!*\
  !*** ./public/components/metric_vis.scss?v8light ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./metric_vis.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v8light");

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

/***/ "./public/components/metric_vis.scss?v9dark":
/*!**************************************************!*\
  !*** ./public/components/metric_vis.scss?v9dark ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./metric_vis.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v9dark");

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

/***/ "./public/components/metric_vis.scss?v9light":
/*!***************************************************!*\
  !*** ./public/components/metric_vis.scss?v9light ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./metric_vis.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/components/metric_vis.scss?v9light");

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

/***/ "./public/components/metric_vis_component.tsx":
/*!****************************************************!*\
  !*** ./public/components/metric_vis_component.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetricVisComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metric_vis_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metric_vis_value */ "./public/components/metric_vis_value.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _metric_vis_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metric_vis.scss */ "./public/components/metric_vis.scss");
/* harmony import */ var _metric_vis_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_metric_vis_scss__WEBPACK_IMPORTED_MODULE_7__);
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









class MetricVisComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "getFormattedValue", (fieldFormatter, value, format = 'text') => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNaN"])(value)) return '-';
      return fieldFormatter.convert(value, format);
    });
    _defineProperty(this, "filterBucket", metric => {
      const dimensions = this.props.visParams.dimensions;
      if (!dimensions.bucket) {
        return;
      }
      const table = this.props.visData;
      this.props.fireEvent({
        name: 'filterBucket',
        data: {
          data: [{
            table,
            column: dimensions.bucket.accessor,
            row: metric.rowIndex
          }]
        }
      });
    });
    _defineProperty(this, "renderMetric", (metric, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_metric_vis_value__WEBPACK_IMPORTED_MODULE_3__["MetricVisValue"], {
        key: index,
        metric: metric,
        fontSize: this.props.visParams.metric.style.fontSize,
        onFilter: this.props.visParams.dimensions.bucket ? this.filterBucket : undefined,
        showLabel: this.props.visParams.metric.labels.show
      });
    });
  }
  getLabels() {
    const config = this.props.visParams.metric;
    const isPercentageMode = config.percentageMode;
    const colorsRange = config.colorsRange;
    const max = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(colorsRange).to;
    const labels = [];
    colorsRange.forEach(range => {
      const from = isPercentageMode ? Math.round(100 * range.from / max) : range.from;
      const to = isPercentageMode ? Math.round(100 * range.to / max) : range.to;
      labels.push(`${from} - ${to}`);
    });
    return labels;
  }
  getColors() {
    const config = this.props.visParams.metric;
    const invertColors = config.invertColors;
    const colorSchema = config.colorSchema;
    const colorsRange = config.colorsRange;
    const labels = this.getLabels();
    const colors = {};
    for (let i = 0; i < labels.length; i += 1) {
      const divider = Math.max(colorsRange.length - 1, 1);
      const val = invertColors ? 1 - i / divider : i / divider;
      colors[labels[i]] = Object(_charts_public__WEBPACK_IMPORTED_MODULE_4__["getHeatmapColors"])(val, colorSchema);
    }
    return colors;
  }
  getBucket(val) {
    const config = this.props.visParams.metric;
    let bucket = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(config.colorsRange, range => {
      return range.from <= val && range.to > val;
    });
    if (bucket === -1) {
      if (val < config.colorsRange[0].from) bucket = 0;else bucket = config.colorsRange.length - 1;
    }
    return bucket;
  }
  getColor(val, labels, colors) {
    const bucket = this.getBucket(val);
    const label = labels[bucket];
    return colors[label];
  }
  needsLightText(bgColor) {
    const colors = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(bgColor);
    if (!colors) {
      return false;
    }
    const [red, green, blue] = colors.slice(1).map(c => parseInt(c, 10));
    return Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["isColorDark"])(red, green, blue);
  }
  processTableGroups(table) {
    const config = this.props.visParams.metric;
    const dimensions = this.props.visParams.dimensions;
    const isPercentageMode = config.percentageMode;
    const min = config.colorsRange[0].from;
    const max = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(config.colorsRange).to;
    const colors = this.getColors();
    const labels = this.getLabels();
    const metrics = [];
    let bucketColumnId;
    let bucketFormatter;
    if (dimensions.bucket) {
      bucketColumnId = table.columns[dimensions.bucket.accessor].id;
      bucketFormatter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(dimensions.bucket.format);
    }
    dimensions.metrics.forEach(metric => {
      const columnIndex = metric.accessor;
      const column = table === null || table === void 0 ? void 0 : table.columns[columnIndex];
      const formatter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(metric.format);
      table.rows.forEach((row, rowIndex) => {
        let title = column.name;
        let value = row[column.id];
        const color = this.getColor(value, labels, colors);
        if (isPercentageMode) {
          value = (value - min) / (max - min);
        }
        value = this.getFormattedValue(formatter, value, 'html');
        if (bucketColumnId) {
          const bucketValue = this.getFormattedValue(bucketFormatter, row[bucketColumnId]);
          title = `${bucketValue} - ${title}`;
        }
        const shouldColor = config.colorsRange.length > 1;
        metrics.push({
          label: title,
          value,
          color: shouldColor && config.style.labelColor ? color : undefined,
          bgColor: shouldColor && config.style.bgColor ? color : undefined,
          lightText: shouldColor && config.style.bgColor && this.needsLightText(color),
          rowIndex
        });
      });
    });
    return metrics;
  }
  componentDidMount() {
    this.props.renderComplete();
  }
  componentDidUpdate() {
    this.props.renderComplete();
  }
  render() {
    const metrics = this.props.visData.rows ? this.processTableGroups(this.props.visData) : [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visualizations_public__WEBPACK_IMPORTED_MODULE_6__["VisualizationContainer"], {
      className: "mtrVis",
      showNoResult: metrics.length === 0
    }, metrics.length > 0 ? metrics.map(this.renderMetric) : null);
  }
}

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export


/***/ }),

/***/ "./public/components/metric_vis_options.tsx":
/*!**************************************************!*\
  !*** ./public/components/metric_vis_options.tsx ***!
  \**************************************************/
/*! exports provided: MetricVisOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricVisOptions", function() { return MetricVisOptions; });
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






function MetricVisOptions({
  stateParams,
  setValue,
  setValidity,
  setTouched,
  vis,
  uiState
}) {
  const setMetricValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setValue('metric', {
    ...stateParams.metric,
    [paramName]: value
  }), [setValue, stateParams.metric]);
  const setMetricLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setMetricValue('labels', {
    ...stateParams.metric.labels,
    [paramName]: value
  }), [setMetricValue, stateParams.metric.labels]);
  const setMetricStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((paramName, value) => setMetricValue('style', {
    ...stateParams.metric.style,
    [paramName]: value
  }), [setMetricValue, stateParams.metric.style]);
  const setColorMode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => setMetricValue('metricColorMode', id), [setMetricValue]);
  const metricColorModeLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMetric.params.color.useForLabel', {
    defaultMessage: 'Use color for'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeMetric.params.settingsTitle",
    defaultMessage: "Settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMetric.params.percentageModeLabel', {
      defaultMessage: 'Percentage mode'
    }),
    paramName: "percentageMode",
    value: stateParams.metric.percentageMode,
    setValue: setMetricValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMetric.params.showTitleLabel', {
      defaultMessage: 'Show title'
    }),
    paramName: "show",
    value: stateParams.metric.labels.show,
    setValue: setMetricLabels
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeMetric.params.rangesTitle",
    defaultMessage: "Ranges"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorRanges"], {
    "data-test-subj": "metricColorRange",
    colorsRange: stateParams.metric.colorsRange,
    setValue: setMetricValue,
    setTouched: setTouched,
    setValidity: setValidity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
    fullWidth: true,
    display: "rowCompressed",
    label: metricColorModeLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonGroup"], {
    buttonSize: "compressed",
    idSelected: stateParams.metric.metricColorMode,
    isDisabled: stateParams.metric.colorsRange.length === 1,
    isFullWidth: true,
    legend: metricColorModeLabel,
    options: vis.type.editorConfig.collections.metricColorMode,
    onChange: setColorMode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorSchemaOptions"], {
    colorSchema: stateParams.metric.colorSchema,
    colorSchemas: vis.type.editorConfig.collections.colorSchemas,
    disabled: stateParams.metric.colorsRange.length === 1 || stateParams.metric.metricColorMode === _charts_public__WEBPACK_IMPORTED_MODULE_4__["ColorModes"].NONE,
    invertColors: stateParams.metric.invertColors,
    setValue: setMetricValue,
    showHelpText: false,
    uiState: uiState
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "visTypeMetric.params.style.styleTitle",
    defaultMessage: "Style"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["RangeOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeMetric.params.style.fontSizeLabel', {
      defaultMessage: 'Metric font size in points'
    }),
    min: 12,
    max: 120,
    paramName: "fontSize",
    value: stateParams.metric.style.fontSize,
    setValue: setMetricStyle,
    showInput: true,
    showLabels: true,
    showValue: false
  })));
}


/***/ }),

/***/ "./public/components/metric_vis_value.tsx":
/*!************************************************!*\
  !*** ./public/components/metric_vis_value.tsx ***!
  \************************************************/
/*! exports provided: MetricVisValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricVisValue", function() { return MetricVisValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
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




class MetricVisValue extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "onClick", () => {
      if (this.props.onFilter) {
        this.props.onFilter(this.props.metric);
      }
    });
    _defineProperty(this, "onKeyPress", event => {
      if (event.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["keys"].ENTER) {
        this.onClick();
      }
    });
  }
  render() {
    const {
      fontSize,
      metric,
      onFilter,
      showLabel
    } = this.props;
    const hasFilter = Boolean(onFilter);
    const metricValueStyle = {
      fontSize: `${fontSize}pt`,
      color: metric.color
    };
    const containerClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('mtrVis__container', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'mtrVis__container--light': metric.lightText,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'mtrVis__container-isfilterable': hasFilter
    });
    const metricComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: containerClassName,
      style: {
        backgroundColor: metric.bgColor
      },
      onClick: hasFilter ? this.onClick : undefined,
      onKeyPress: hasFilter ? this.onKeyPress : undefined,
      tabIndex: hasFilter ? 0 : undefined,
      role: hasFilter ? 'button' : undefined
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mtrVis__value",
      style: metricValueStyle
      /*
       * Justification for dangerouslySetInnerHTML:
       * This is one of the visualizations which makes use of the HTML field formatters.
       * Since these formatters produce raw HTML, this visualization needs to be able to render them as-is, relying
       * on the field formatter to only produce safe HTML.
       * `metric.value` is set by the MetricVisComponent, so this component must make sure this value never contains
       * any unsafe HTML (e.g. by bypassing the field formatter).
       */,
      dangerouslySetInnerHTML: {
        __html: metric.value
      } // eslint-disable-line react/no-danger
    }), showLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, metric.label));
    if (hasFilter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiKeyboardAccessible"], null, metricComponent);
    }
    return metricComponent;
  }
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, MetricVisExpressionFunctionDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _metric_vis_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metric_vis_fn */ "./public/metric_vis_fn.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetricVisExpressionFunctionDefinition", function() { return _metric_vis_fn__WEBPACK_IMPORTED_MODULE_1__["MetricVisExpressionFunctionDefinition"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["MetricVisPlugin"](initializerContext);
}

/* Public Types */


/***/ }),

/***/ "./public/metric_vis_fn.ts":
/*!*********************************!*\
  !*** ./public/metric_vis_fn.ts ***!
  \*********************************/
/*! exports provided: createMetricVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMetricVisFn", function() { return createMetricVisFn; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_2__);
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




const createMetricVisFn = () => ({
  name: 'metricVis',
  type: 'render',
  inputTypes: ['opensearch_dashboards_datatable'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.help', {
    defaultMessage: 'Metric visualization'
  }),
  args: {
    percentageMode: {
      types: ['boolean'],
      default: false,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.percentageMode.help', {
        defaultMessage: 'Shows metric in percentage mode. Requires colorRange to be set.'
      })
    },
    colorSchema: {
      types: ['string'],
      default: '"Green to Red"',
      options: Object.values(_charts_public__WEBPACK_IMPORTED_MODULE_2__["vislibColorMaps"]).map(value => value.id),
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.colorSchema.help', {
        defaultMessage: 'Color schema to use'
      })
    },
    colorMode: {
      types: ['string'],
      default: '"None"',
      options: [_charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].NONE, _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].LABELS, _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].BACKGROUND],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.colorMode.help', {
        defaultMessage: 'Which part of metric to color'
      })
    },
    colorRange: {
      types: ['range'],
      multi: true,
      default: '{range from=0 to=10000}',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.colorRange.help', {
        defaultMessage: 'A range object specifying groups of values to which different colors should be applied.'
      })
    },
    useRanges: {
      types: ['boolean'],
      default: false,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.useRanges.help', {
        defaultMessage: 'Enabled color ranges.'
      })
    },
    invertColors: {
      types: ['boolean'],
      default: false,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.invertColors.help', {
        defaultMessage: 'Inverts the color ranges'
      })
    },
    showLabels: {
      types: ['boolean'],
      default: true,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.showLabels.help', {
        defaultMessage: 'Shows labels under the metric values.'
      })
    },
    bgFill: {
      types: ['string'],
      default: '"#000"',
      aliases: ['backgroundFill', 'bgColor', 'backgroundColor'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.bgFill.help', {
        defaultMessage: 'Color as html hex code (#123456), html color (red, blue) or rgba value (rgba(255,255,255,1)).'
      })
    },
    font: {
      types: ['style'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.font.help', {
        defaultMessage: 'Font settings.'
      }),
      default: '{font size=60}'
    },
    subText: {
      types: ['string'],
      aliases: ['label', 'text', 'description'],
      default: '""',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.subText.help', {
        defaultMessage: 'Custom text to show under the metric'
      })
    },
    metric: {
      types: ['vis_dimension'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.metric.help', {
        defaultMessage: 'metric dimension configuration'
      }),
      required: true,
      multi: true
    },
    bucket: {
      types: ['vis_dimension'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.function.bucket.help', {
        defaultMessage: 'bucket dimension configuration'
      })
    }
  },
  fn(input, args) {
    const dimensions = {
      metrics: args.metric
    };
    if (args.bucket) {
      dimensions.bucket = args.bucket;
    }
    if (args.percentageMode && (!args.colorRange || args.colorRange.length === 0)) {
      throw new Error('colorRange must be provided when using percentageMode');
    }
    const fontSize = Number.parseInt(args.font.spec.fontSize || '', 10);
    return {
      type: 'render',
      as: 'metric_vis',
      value: {
        visData: input,
        visType: _types__WEBPACK_IMPORTED_MODULE_1__["visType"],
        visConfig: {
          metric: {
            percentageMode: args.percentageMode,
            useRanges: args.useRanges,
            colorSchema: args.colorSchema,
            metricColorMode: args.colorMode,
            colorsRange: args.colorRange,
            labels: {
              show: args.showLabels
            },
            invertColors: args.invertColors,
            style: {
              bgFill: args.bgFill,
              bgColor: args.colorMode === _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].BACKGROUND,
              labelColor: args.colorMode === _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].LABELS,
              subText: args.subText,
              fontSize
            }
          },
          dimensions
        },
        params: {
          listenOnChange: true
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/metric_vis_renderer.tsx":
/*!****************************************!*\
  !*** ./public/metric_vis_renderer.tsx ***!
  \****************************************/
/*! exports provided: metricVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metricVisRenderer", function() { return metricVisRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_metric_vis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/metric_vis_component */ "./public/components/metric_vis_component.tsx");
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

const metricVisRenderer = () => ({
  name: 'metric_vis',
  displayName: 'metric visualization',
  reuseDomNode: true,
  render: async (domNode, {
    visData,
    visConfig
  }, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_metric_vis_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      visData: visData,
      visParams: visConfig,
      renderComplete: handlers.done,
      fireEvent: handlers.event
    }), domNode);
  }
});

/***/ }),

/***/ "./public/metric_vis_type.ts":
/*!***********************************!*\
  !*** ./public/metric_vis_type.ts ***!
  \***********************************/
/*! exports provided: createMetricVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMetricVisTypeDefinition", function() { return createMetricVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_metric_vis_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/metric_vis_options */ "./public/components/metric_vis_options.tsx");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
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







const createMetricVisTypeDefinition = () => ({
  name: 'metric',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.metricTitle', {
    defaultMessage: 'Metric'
  }),
  icon: 'visMetric',
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.metricDescription', {
    defaultMessage: 'Display a calculation as a single number'
  }),
  toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_5__["toExpressionAst"],
  visConfig: {
    defaults: {
      addTooltip: true,
      addLegend: false,
      type: 'metric',
      metric: {
        percentageMode: false,
        useRanges: false,
        colorSchema: _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorSchemas"].GreenToRed,
        metricColorMode: _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].NONE,
        colorsRange: [{
          from: 0,
          to: 10000
        }],
        labels: {
          show: true
        },
        invertColors: false,
        style: {
          bgFill: '#000',
          bgColor: false,
          labelColor: false,
          subText: '',
          fontSize: 60
        }
      }
    }
  },
  editorConfig: {
    collections: {
      metricColorMode: [{
        id: _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].NONE,
        label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.colorModes.noneOptionLabel', {
          defaultMessage: 'None'
        })
      }, {
        id: _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].LABELS,
        label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.colorModes.labelsOptionLabel', {
          defaultMessage: 'Labels'
        })
      }, {
        id: _charts_public__WEBPACK_IMPORTED_MODULE_2__["ColorModes"].BACKGROUND,
        label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.colorModes.backgroundOptionLabel', {
          defaultMessage: 'Background'
        })
      }],
      colorSchemas: _charts_public__WEBPACK_IMPORTED_MODULE_2__["colorSchemas"]
    },
    optionsTemplate: _components_metric_vis_options__WEBPACK_IMPORTED_MODULE_1__["MetricVisOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_4__["Schemas"]([{
      group: _data_public__WEBPACK_IMPORTED_MODULE_3__["AggGroupNames"].Metrics,
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.schemas.metricTitle', {
        defaultMessage: 'Metric'
      }),
      min: 1,
      aggFilter: ['!std_dev', '!geo_centroid', '!derivative', '!serial_diff', '!moving_avg', '!cumulative_sum', '!geo_bounds'],
      aggSettings: {
        top_hits: {
          allowStrings: true
        }
      },
      defaults: [{
        type: 'count',
        schema: 'metric'
      }]
    }, {
      group: _data_public__WEBPACK_IMPORTED_MODULE_3__["AggGroupNames"].Buckets,
      name: 'group',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeMetric.schemas.splitGroupTitle', {
        defaultMessage: 'Split group'
      }),
      min: 0,
      max: 1,
      aggFilter: ['!geohash_grid', '!geotile_grid', '!filter']
    }])
  }
});

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: MetricVisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricVisPlugin", function() { return MetricVisPlugin; });
/* harmony import */ var _metric_vis_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metric_vis_fn */ "./public/metric_vis_fn.ts");
/* harmony import */ var _metric_vis_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metric_vis_type */ "./public/metric_vis_type.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _metric_vis_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metric_vis_renderer */ "./public/metric_vis_renderer.tsx");
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
class MetricVisPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);
    this.initializerContext = initializerContext;
  }
  setup(core, {
    expressions,
    visualizations,
    charts
  }) {
    expressions.registerFunction(_metric_vis_fn__WEBPACK_IMPORTED_MODULE_0__["createMetricVisFn"]);
    expressions.registerRenderer(_metric_vis_renderer__WEBPACK_IMPORTED_MODULE_3__["metricVisRenderer"]);
    visualizations.createBaseVisualization(Object(_metric_vis_type__WEBPACK_IMPORTED_MODULE_1__["createMetricVisTypeDefinition"])());
  }
  start(core, {
    data
  }) {
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setFormatService"])(data.fieldFormats);
  }
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getFormatService, setFormatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatService", function() { return getFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormatService", function() { return setFormatService; });
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../opensearch_dashboards_utils/common */ "plugin/opensearchDashboardsUtils/common");
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__);
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


const [getFormatService, setFormatService] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('metric data.fieldFormats');

/***/ }),

/***/ "./public/to_ast.ts":
/*!**************************!*\
  !*** ./public/to_ast.ts ***!
  \**************************/
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




const prepareDimension = params => {
  const visdimension = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('visdimension', {
    accessor: params.accessor
  });
  if (params.format) {
    visdimension.addArgument('format', params.format.id);
    visdimension.addArgument('formatParams', JSON.stringify(params.format.params));
  }
  return Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])([visdimension]);
};
const toExpressionAst = (vis, params) => {
  // soon this becomes: const opensearchaggs = vis.data.aggs!.toExpressionAst();
  const opensearchaggs = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('opensearchaggs', {
    index: vis.data.indexPattern.id,
    metricsAtAllLevels: vis.isHierarchical(),
    partialRows: vis.params.showPartialRows || false,
    aggConfigs: JSON.stringify(vis.data.aggs.aggs),
    includeFormatHints: false
  });
  const schemas = Object(_visualizations_public__WEBPACK_IMPORTED_MODULE_1__["getVisSchemas"])(vis, params);
  const {
    percentageMode,
    useRanges,
    colorSchema,
    metricColorMode,
    colorsRange,
    labels,
    invertColors,
    style
  } = vis.params.metric;

  // fix formatter for percentage mode
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(vis.params, 'metric.percentageMode') === true) {
    schemas.metric.forEach(metric => {
      metric.format = {
        id: 'percent'
      };
    });
  }

  // @ts-expect-error
  const metricVis = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpressionFunction"])('metricVis', {
    percentageMode,
    colorSchema,
    colorMode: metricColorMode,
    useRanges,
    invertColors,
    showLabels: labels && labels.show
  });
  if (style) {
    metricVis.addArgument('bgFill', style.bgFill);
    metricVis.addArgument('font', Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])(`font size=${style.fontSize}`));
    metricVis.addArgument('subText', style.subText);
  }
  if (colorsRange) {
    colorsRange.forEach(range => {
      metricVis.addArgument('colorRange', Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])(`range from=${range.from} to=${range.to}`));
    });
  }
  if (schemas.group) {
    metricVis.addArgument('bucket', prepareDimension(schemas.group[0]));
  }
  schemas.metric.forEach(metric => {
    metricVis.addArgument('metric', prepareDimension(metric));
  });
  const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_2__["buildExpression"])([opensearchaggs, metricVis]);
  return ast.toAst();
};

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: visType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visType", function() { return visType; });
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

const visType = 'metric';

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

/***/ "plugin/opensearchDashboardsUtils/common":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsUtils/common" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsUtils/common');
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

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__osdSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDom;

/***/ })

/******/ });
//# sourceMappingURL=visTypeMetric.plugin.js.map