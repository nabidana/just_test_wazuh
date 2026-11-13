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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v7dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/embeddable/_visualize_lab_disabled.scss?v7dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v7light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/embeddable/_visualize_lab_disabled.scss?v7light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,cAAc","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v8dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/embeddable/_visualize_lab_disabled.scss?v8dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v8light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/embeddable/_visualize_lab_disabled.scss?v8light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,gBAAgB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v9dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/embeddable/_visualize_lab_disabled.scss?v9dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,qBAAqB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v9light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/embeddable/_visualize_lab_disabled.scss?v9light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}\n", "",{"version":3,"sources":["webpack://./public/embeddable/_visualize_lab_disabled.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,qBAAqB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,cAAc,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,cAAc,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:28px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,gBAAgB,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(141,152,163,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,gBAAgB,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:31.5px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,qBAAqB,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,qCAAqC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318191E' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%2315161B' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(149,155,162,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,iBAAiB,eAAe,CAAC,srFAAsrF,CAAC,2BAA2B,CAAC,qDAAqD,CAAC,mBAAmB,CAAC,uBAAuB,WAAW,CAAC,gBAAgB,CAAC,uBAAuB,YAAY,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,YAAY,CAAC,gCAAgC,aAAa,CAAC,+BAA+B,4HAA4H,CAAC,aAAa,CAAC,eAAe,CAAC,YAAY,CAAC,cAAc,CAAC,eAAe,CAAC,wBAAwB,oBAAoB,CAAC,UAAU,CAAC,eAAe,CAAC,gBAAgB,CAAC,sBAAsB,CAAC,mBAAmB,CAAC,2CAA2C,UAAU,CAAC,WAAW,CAAC,iDAAiD,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,mGAAmG,8BAA8B,CAAC,8BAA8B,WAAW,CAAC,gCAAgC,UAAU,CAAC,mBAAmB,CAAC,4BAA4B,UAAU,CAAC,WAAW,CAAC,0CAA0C,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,gEAAgE,iBAAiB,qBAAqB,CAAC,+BAA+B,cAAc,CAAC,wBAAwB,0BAA0B,CAAC,8BAA8B,YAAY,CAAC,CAAC,mFAAmF,iBAAiB,WAAW,CAAC,uBAAuB,gBAAgB,CAAC,CAAC,6BAA6B,UAAU,CAAC,YAAY,CAAC,qBAAqB,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,mCAAmC,qBAAqB,CAAC,yBAAyB,oBAAoB,CAAC,4CAA4C,UAAU,CAAC,WAAW,CAAC,kDAAkD,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,qGAAqG,8BAA8B,CAAC,8CAA8C,gBAAgB,CAAC,6BAA6B,4BAA4B,CAAC,wBAAwB,CAAC,mGAAmG,SAAS,CAAC,6BAA6B,SAAS,CAAC,mCAAmC,SAAS,CAAC,sCAAsC,SAAS,CAAC,WAAW,YAAY,CAAC,aAAa,CAAC,eAAe,CAAC,eAAe,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,WAAW,CAAC,aAAa,CAAC,oCAAoC,oBAAoB,CAAC,YAAY,CAAC,UAAU,CAAC,YAAY,CAAC,kBAAkB,CAAC,aAAa,CAAC,uBAAuB,CAAC,uDAAuD,UAAU,CAAC,WAAW,CAAC,6DAA6D,oCAAoC,CAAC,8BAA8B,CAAC,2BAA2B,CAAC,2HAA2H,8BAA8B,CAAC,mFAAmF,oCAAoC,QAAQ,CAAC,CAAC,0CAA0C,eAAe,CAAC,wBAAwB,UAAU,CAAC,wBAAwB,iBAAiB,CAAC,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,UAAU,CAAC,UAAU,CAAC,UAAU,YAAY,CAAC,aAAa,CAAC,YAAY,CAAC,WAAW,CAAC,oBAAoB,qBAAqB,CAAC,mBAAmB,YAAY,CAAC,aAAa,CAAC,sBAAsB,CAAC,kBAAkB","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.visNewVisDialog{max-width:100vw;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='313' height='461' viewBox='0 0 313 461'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F5F7FA' d='M294.009,184.137 C456.386,184.137 588.018,315.77 588.018,478.146 C588.018,640.523 456.386,772.156 294.009,772.156 C131.632,772.156 0,640.523 0,478.146 C0,315.77 131.632,184.137 294.009,184.137 Z M294.009,384.552 C242.318,384.552 200.415,426.456 200.415,478.146 C200.415,529.837 242.318,571.741 294.009,571.741 C345.7,571.741 387.604,529.837 387.604,478.146 C387.604,426.456 345.7,384.552 294.009,384.552 Z'/%3E%3Cpath fill='%23E6EBF2' d='M202.958,365.731 L202.958,380.991 L187.698,380.991 L187.698,365.731 L202.958,365.731 Z M202.958,327.073 L202.958,342.333 L187.698,342.333 L187.698,327.073 L202.958,327.073 Z M243.651,325.038 L243.651,340.298 L228.391,340.298 L228.391,325.038 L243.651,325.038 Z M243.651,286.379 L243.651,301.639 L228.391,301.639 L228.391,286.379 L243.651,286.379 Z M202.958,285.362 L202.958,300.622 L187.698,300.622 L187.698,285.362 L202.958,285.362 Z M284.345,284.345 L284.345,299.605 L269.085,299.605 L269.085,284.345 L284.345,284.345 Z M284.345,245.686 L284.345,260.946 L269.085,260.946 L269.085,245.686 L284.345,245.686 Z M243.651,244.669 L243.651,259.929 L228.391,259.929 L228.391,244.669 L243.651,244.669 Z M202.958,243.651 L202.958,258.911 L187.698,258.911 L187.698,243.651 L202.958,243.651 Z M284.345,203.975 L284.345,219.235 L269.085,219.235 L269.085,203.975 L284.345,203.975 Z M202.958,203.975 L202.958,219.235 L187.698,219.235 L187.698,203.975 L202.958,203.975 Z M243.651,202.958 L243.651,218.218 L228.391,218.218 L228.391,202.958 L243.651,202.958 Z M243.651,163.282 L243.651,178.542 L228.391,178.542 L228.391,163.282 L243.651,163.282 Z M202.958,163.282 L202.958,178.542 L187.698,178.542 L187.698,163.282 L202.958,163.282 Z M284.345,162.265 L284.345,177.525 L269.085,177.525 L269.085,162.265 L284.345,162.265 Z M284.345,122.589 L284.345,137.849 L269.085,137.849 L269.085,122.589 L284.345,122.589 Z M243.651,122.589 L243.651,137.849 L228.391,137.849 L228.391,122.589 L243.651,122.589 Z M202.958,122.589 L202.958,137.849 L187.698,137.849 L187.698,122.589 L202.958,122.589 Z M284.345,81.8954 L284.345,97.1554 L269.085,97.1554 L269.085,81.8954 L284.345,81.8954 Z M243.651,81.8954 L243.651,97.1554 L228.391,97.1554 L228.391,81.8954 L243.651,81.8954 Z M202.958,81.8954 L202.958,97.1554 L187.698,97.1554 L187.698,81.8954 L202.958,81.8954 Z M284.345,41.202 L284.345,56.462 L269.085,56.462 L269.085,41.202 L284.345,41.202 Z M243.651,41.202 L243.651,56.462 L228.391,56.462 L228.391,41.202 L243.651,41.202 Z M284.345,0.508789 L284.345,15.7688 L269.085,15.7688 L269.085,0.508789 L284.345,0.508789 Z'/%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:calc(100% + 1px) calc(100% + 1px);background-size:30%}.visNewVisSearchDialog{width:720px;min-height:600px}.visNewVisDialog__body{display:flex;padding:12px 24px 0;min-height:0}.visNewVisDialog__list{min-height:0}.visNewVisDialog__searchWrapper{flex-shrink:0}.visNewVisDialog__typesWrapper{mask-image:linear-gradient(to bottom, rgba(255, 0, 0, 0.1) 0%, red 7.5px, red calc(100% - 7.5px), rgba(255, 0, 0, 0.1) 100%);contain:paint;max-width:400px;min-height:0;margin-top:2px;overflow:hidden}.visNewVisDialog__types{scrollbar-width:thin;width:auto;overflow-y:auto;padding-top:16px;justify-content:center;padding-bottom:16px}.visNewVisDialog__types::-webkit-scrollbar{width:16px;height:16px}.visNewVisDialog__types::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visNewVisDialog__types::-webkit-scrollbar-corner,.visNewVisDialog__types::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.visNewVisDialog__description{width:320px}.visNewVisDialog__type:disabled{opacity:.2;pointer-events:none}.visNewVisDialog__typeImage{width:24px;height:24px}@media only screen and (max-width: 574px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media only screen and (min-width: 575px)and (max-width: 767px){.visNewVisDialog{background-image:none}.visNewVisDialog__typesWrapper{max-width:none}.visNewVisDialog__types{justify-content:flex-start}.visNewVisDialog__description{display:none}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visNewVisDialog{width:820px}.visNewVisDialog__body{flex-basis:800px}}.visDisabledLabVisualization{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.visDisabledLabVisualization__icon{font-size:24.000004px}.embPanel .visualization{scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visualization .visChart__container{overflow:visible}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0}.embPanel_optionsMenuPopover[class*=-isOpen] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel .visLegend__toggle{opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}.visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visualization .visChart__container{scrollbar-width:thin;min-height:0;flex:1 1 0;display:flex;flex-direction:row;overflow:auto;transition:opacity .01s}.visualization .visChart__container::-webkit-scrollbar{width:16px;height:16px}.visualization .visChart__container::-webkit-scrollbar-thumb{background-color:rgba(90,104,117,.5);border:6px solid rgba(0,0,0,0);background-clip:content-box}.visualization .visChart__container::-webkit-scrollbar-corner,.visualization .visChart__container::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.visualization .visChart__container{flex:1 0}}.visualization .visChart__container:focus{box-shadow:none}.visualization .loading{opacity:.5}.visualization .spinner{position:absolute;top:40%;left:0;right:0;z-index:20;opacity:.5}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner{display:flex;flex:1 1 auto;justify-content:center;align-items:center}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/lodash/_Hash.js":
/*!**********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_Hash.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../../../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../../../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../../../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../../../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../../../node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "../../../node_modules/lodash/_ListCache.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_ListCache.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../../../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../../../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../../../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../../../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../../../node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "../../../node_modules/lodash/_Map.js":
/*!*********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_Map.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../../node_modules/lodash/_MapCache.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_MapCache.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../../../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../../../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../../../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../../../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../../../node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "../../../node_modules/lodash/_Symbol.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_Symbol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../../node_modules/lodash/_arrayMap.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_arrayMap.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "../../../node_modules/lodash/_assignValue.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_assignValue.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../../../node_modules/lodash/_assocIndexOf.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_assocIndexOf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../../../node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "../../../node_modules/lodash/_baseAssignValue.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_baseAssignValue.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../../node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "../../../node_modules/lodash/_baseGetTag.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_baseGetTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../../node_modules/lodash/_baseIsNative.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_baseIsNative.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../../../node_modules/lodash/_baseToString.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_baseToString.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "../../../node_modules/lodash/_castPath.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_castPath.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../../node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "../../../node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "../../../node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "../../../node_modules/lodash/_coreJsData.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_coreJsData.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../../node_modules/lodash/_defineProperty.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_defineProperty.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../../../node_modules/lodash/_freeGlobal.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_freeGlobal.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/lodash/_getMapData.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_getMapData.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../../../node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "../../../node_modules/lodash/_getNative.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_getNative.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../../../node_modules/lodash/_getRawTag.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_getRawTag.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../../node_modules/lodash/_getValue.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_getValue.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../../node_modules/lodash/_hashClear.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_hashClear.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "../../../node_modules/lodash/_hashDelete.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_hashDelete.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "../../../node_modules/lodash/_hashGet.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_hashGet.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "../../../node_modules/lodash/_hashHas.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_hashHas.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "../../../node_modules/lodash/_hashSet.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_hashSet.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "../../../node_modules/lodash/_isIndex.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_isIndex.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../../node_modules/lodash/_isKey.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_isKey.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "../../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "../../../node_modules/lodash/_isKeyable.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_isKeyable.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "../../../node_modules/lodash/_isMasked.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_isMasked.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheClear.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_listCacheClear.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheDelete.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_listCacheDelete.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheGet.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_listCacheGet.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheHas.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_listCacheHas.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "../../../node_modules/lodash/_listCacheSet.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_listCacheSet.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../../node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheClear.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_mapCacheClear.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "../../../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../../node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheDelete.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_mapCacheDelete.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheGet.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_mapCacheGet.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheHas.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_mapCacheHas.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "../../../node_modules/lodash/_mapCacheSet.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_mapCacheSet.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../../node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "../../../node_modules/lodash/_memoizeCapped.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_memoizeCapped.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "../../../node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "../../../node_modules/lodash/_nativeCreate.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_nativeCreate.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../../node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "../../../node_modules/lodash/_objectToString.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_objectToString.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../../node_modules/lodash/_root.js":
/*!**********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_root.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../../node_modules/lodash/_stringToPath.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_stringToPath.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "../../../node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "../../../node_modules/lodash/_toKey.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_toKey.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "../../../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "../../../node_modules/lodash/_toSource.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/_toSource.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../../../node_modules/lodash/eq.js":
/*!*******************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/eq.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../../../node_modules/lodash/isArray.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/isArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../../node_modules/lodash/isFunction.js":
/*!***************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/isFunction.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../../node_modules/lodash/isObject.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/isObject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../../node_modules/lodash/isObjectLike.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/isObjectLike.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../../node_modules/lodash/isSymbol.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/isSymbol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "../../../node_modules/lodash/memoize.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/memoize.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../../../node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "../../../node_modules/lodash/toString.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/lodash/toString.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "../../../node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visualizations!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visualizations!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visualizations']

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

/***/ "../../../packages/opensearch-safer-lodash-set/index.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

exports.set = __webpack_require__(/*! ./lodash/set */ "../../../packages/opensearch-safer-lodash-set/lodash/set.js");
exports.setWith = __webpack_require__(/*! ./lodash/setWith */ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js");

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/_baseSet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var assignValue = __webpack_require__(/*! lodash/_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
  castPath = __webpack_require__(/*! lodash/_castPath */ "../../../node_modules/lodash/_castPath.js"),
  isFunction = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js"),
  isIndex = __webpack_require__(/*! lodash/_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
  isObject = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js"),
  toKey = __webpack_require__(/*! lodash/_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
      newValue = value;
    if (key == 'prototype' && isFunction(nested)) {
      throw new Error('Illegal access of function prototype');
    }
    if (index != lastIndex) {
      var objValue = hasOwnProperty.call(nested, key) ? nested[key] : undefined;
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
module.exports = baseSet;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/set.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/set.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
module.exports = set;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/setWith.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}
module.exports = setWith;

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/index.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/index.js ***!
  \************************************************************************************/
/*! exports provided: ReportHTTP, Reporter, ReporterConfig, UiStatsMetricType, METRIC_TYPE, Report, ReportManager, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporter */ "../../../packages/osd-analytics/target/web/reporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportHTTP", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["ReportHTTP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reporter", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["Reporter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReporterConfig", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["ReporterConfig"]; });

/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetricType", function() { return _metrics__WEBPACK_IMPORTED_MODULE_1__["UiStatsMetricType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METRIC_TYPE", function() { return _metrics__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPE"]; });

/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report */ "../../../packages/osd-analytics/target/web/report.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return _report__WEBPACK_IMPORTED_MODULE_2__["Report"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportManager", function() { return _report__WEBPACK_IMPORTED_MODULE_2__["ReportManager"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "../../../packages/osd-analytics/target/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]; });

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

/***/ "../../../packages/osd-analytics/target/web/metrics/application_usage.js":
/*!********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/application_usage.js ***!
  \********************************************************************************************************/
/*! exports provided: ApplicationUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsage", function() { return ApplicationUsage; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "../../../packages/osd-analytics/target/web/metrics/index.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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



class ApplicationUsage {
  constructor() {
    _defineProperty(this, "currentUsage", void 0);
  }
  start() {
    // Count any clicks and assign it to the current app
    if (window) window.addEventListener('click', () => this.currentUsage && this.currentUsage.numberOfClicks++);
  }
  appChanged(appId) {
    const currentUsage = this.currentUsage;
    if (appId) {
      this.currentUsage = {
        type: ___WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPE"].APPLICATION_USAGE,
        appId,
        startTime: moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(),
        numberOfClicks: 0
      };
    } else {
      this.currentUsage = void 0;
    }
    return currentUsage;
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/index.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/index.js ***!
  \********************************************************************************************/
/*! exports provided: UiStatsMetric, createUiStatsMetric, UiStatsMetricType, Stats, trackUsageAgent, ApplicationUsage, ApplicationUsageCurrent, METRIC_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METRIC_TYPE", function() { return METRIC_TYPE; });
/* harmony import */ var _ui_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_stats */ "../../../packages/osd-analytics/target/web/metrics/ui_stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetric", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["UiStatsMetric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUiStatsMetric", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["createUiStatsMetric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetricType", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["UiStatsMetricType"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats */ "../../../packages/osd-analytics/target/web/metrics/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _stats__WEBPACK_IMPORTED_MODULE_1__["Stats"]; });

/* harmony import */ var _user_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_agent */ "../../../packages/osd-analytics/target/web/metrics/user_agent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackUsageAgent", function() { return _user_agent__WEBPACK_IMPORTED_MODULE_2__["trackUsageAgent"]; });

/* harmony import */ var _application_usage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application_usage */ "../../../packages/osd-analytics/target/web/metrics/application_usage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsage", function() { return _application_usage__WEBPACK_IMPORTED_MODULE_3__["ApplicationUsage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsageCurrent", function() { return _application_usage__WEBPACK_IMPORTED_MODULE_3__["ApplicationUsageCurrent"]; });

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





let METRIC_TYPE = /*#__PURE__*/function (METRIC_TYPE) {
  METRIC_TYPE["COUNT"] = "count";
  METRIC_TYPE["LOADED"] = "loaded";
  METRIC_TYPE["CLICK"] = "click";
  METRIC_TYPE["USER_AGENT"] = "user_agent";
  METRIC_TYPE["APPLICATION_USAGE"] = "application_usage";
  return METRIC_TYPE;
}({});

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/stats.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/stats.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/ui_stats.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/ui_stats.js ***!
  \***********************************************************************************************/
/*! exports provided: createUiStatsMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUiStatsMetric", function() { return createUiStatsMetric; });
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

function createUiStatsMetric(_ref) {
  let {
    type,
    appName,
    eventName,
    count = 1
  } = _ref;
  return {
    type,
    appName,
    eventName,
    count
  };
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/user_agent.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/user_agent.js ***!
  \*************************************************************************************************/
/*! exports provided: trackUsageAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackUsageAgent", function() { return trackUsageAgent; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "../../../packages/osd-analytics/target/web/metrics/index.js");
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


function trackUsageAgent(appName) {
  const userAgent = window && window.navigator && window.navigator.userAgent || '';
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"].USER_AGENT,
    appName,
    userAgent
  };
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/report.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/report.js ***!
  \*************************************************************************************/
/*! exports provided: ReportManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportManager", function() { return ReportManager; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../../../packages/osd-analytics/target/web/util.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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




const REPORT_VERSION = 1;
class ReportManager {
  constructor(report) {
    _defineProperty(this, "report", void 0);
    this.report = report || ReportManager.createReport();
  }
  static createReport() {
    return {
      reportVersion: REPORT_VERSION
    };
  }
  clearReport() {
    this.report = ReportManager.createReport();
  }
  isReportEmpty() {
    const {
      uiStatsMetrics,
      userAgent,
      application_usage: appUsage
    } = this.report;
    const noUiStats = !uiStatsMetrics || Object.keys(uiStatsMetrics).length === 0;
    const noUserAgent = !userAgent || Object.keys(userAgent).length === 0;
    const noAppUsage = !appUsage || Object.keys(appUsage).length === 0;
    return noUiStats && noUserAgent && noAppUsage;
  }
  incrementStats(count, stats) {
    const {
      min = 0,
      max = 0,
      sum = 0
    } = stats || {};
    const newMin = Math.min(min, count);
    const newMax = Math.max(max, count);
    const newAvg = newMin + newMax / 2;
    const newSum = sum + count;
    return {
      min: newMin,
      max: newMax,
      avg: newAvg,
      sum: newSum
    };
  }
  assignReports(newMetrics) {
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["wrapArray"])(newMetrics).forEach(newMetric => this.assignReport(this.report, newMetric));
    return {
      report: this.report
    };
  }
  static createMetricKey(metric) {
    switch (metric.type) {
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].USER_AGENT:
        {
          const {
            appName,
            type
          } = metric;
          return `${appName}-${type}`;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].CLICK:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].LOADED:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].COUNT:
        {
          const {
            appName,
            eventName,
            type
          } = metric;
          return `${appName}-${type}-${eventName}`;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].APPLICATION_USAGE:
        return metric.appId;
      default:
        throw new _util__WEBPACK_IMPORTED_MODULE_1__["UnreachableCaseError"](metric);
    }
  }
  assignReport(report, metric) {
    const key = ReportManager.createMetricKey(metric);
    switch (metric.type) {
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].USER_AGENT:
        {
          const {
            appName,
            type,
            userAgent
          } = metric;
          if (userAgent) {
            report.userAgent = {
              [key]: {
                key,
                appName,
                type,
                userAgent: metric.userAgent
              }
            };
          }
          return;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].CLICK:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].LOADED:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].COUNT:
        {
          const {
            appName,
            type,
            eventName,
            count
          } = metric;
          report.uiStatsMetrics = report.uiStatsMetrics || {};
          const existingStats = (report.uiStatsMetrics[key] || {}).stats;
          report.uiStatsMetrics[key] = {
            key,
            appName,
            eventName,
            type,
            stats: this.incrementStats(count, existingStats)
          };
          return;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].APPLICATION_USAGE:
        const {
          numberOfClicks,
          startTime
        } = metric;
        const minutesOnScreen = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().diff(startTime, 'minutes', true);
        report.application_usage = report.application_usage || {};
        const appExistingData = report.application_usage[key] || {
          minutesOnScreen: 0,
          numberOfClicks: 0
        };
        report.application_usage[key] = {
          minutesOnScreen: appExistingData.minutesOnScreen + minutesOnScreen,
          numberOfClicks: appExistingData.numberOfClicks + numberOfClicks
        };
        break;
      default:
        throw new _util__WEBPACK_IMPORTED_MODULE_1__["UnreachableCaseError"](metric);
    }
  }
}
_defineProperty(ReportManager, "REPORT_VERSION", REPORT_VERSION);

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/reporter.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/reporter.js ***!
  \***************************************************************************************/
/*! exports provided: Reporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reporter", function() { return Reporter; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../../../packages/osd-analytics/target/web/util.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "../../../packages/osd-analytics/target/web/storage.js");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report */ "../../../packages/osd-analytics/target/web/report.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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






class Reporter {
  constructor(config) {
    _defineProperty(this, "checkInterval", void 0);
    _defineProperty(this, "interval", void 0);
    _defineProperty(this, "lastAppId", void 0);
    _defineProperty(this, "http", void 0);
    _defineProperty(this, "reportManager", void 0);
    _defineProperty(this, "storageManager", void 0);
    _defineProperty(this, "applicationUsage", void 0);
    _defineProperty(this, "debug", void 0);
    _defineProperty(this, "retryCount", 0);
    _defineProperty(this, "maxRetries", 3);
    _defineProperty(this, "started", false);
    _defineProperty(this, "start", () => {
      if (!this.interval) {
        this.interval = setTimeout(() => {
          this.interval = undefined;
          this.sendReports();
        }, this.checkInterval);
      }
      if (this.started) {
        return;
      }
      if (window && document) {
        // Before leaving the page, make sure we store the current usage
        window.addEventListener('beforeunload', () => this.reportApplicationUsage());

        // Monitoring dashboards might be open in background and we are fine with that
        // but we don't want to report hours if the user goes to another tab and OpenSearch Dashboards is not shown
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && this.lastAppId) {
            this.reportApplicationUsage(this.lastAppId);
          } else if (document.visibilityState === 'hidden') {
            this.reportApplicationUsage();

            // We also want to send the report now because intervals and timeouts be stalled when too long in the "hidden" state
            this.sendReports();
          }
        });
      }
      this.started = true;
      this.applicationUsage.start();
    });
    _defineProperty(this, "reportUiStats", (appName, type, eventNames, count) => {
      const metrics = Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrapArray"])(eventNames).map(eventName => {
        this.log(`${type} Metric -> (${appName}:${eventName}):`);
        const report = Object(_metrics__WEBPACK_IMPORTED_MODULE_1__["createUiStatsMetric"])({
          type,
          appName,
          eventName,
          count
        });
        this.log(report);
        return report;
      });
      this.saveToReport(metrics);
    });
    _defineProperty(this, "reportUserAgent", appName => {
      this.log(`Reporting user-agent.`);
      const report = Object(_metrics__WEBPACK_IMPORTED_MODULE_1__["trackUsageAgent"])(appName);
      this.saveToReport([report]);
    });
    _defineProperty(this, "sendReports", async () => {
      if (!this.reportManager.isReportEmpty()) {
        try {
          await this.http(this.reportManager.report);
          this.flushReport();
        } catch (err) {
          this.log(`Error Sending Metrics Report ${err}`);
          this.retryCount = this.retryCount + 1;
          const versionMismatch = this.reportManager.report.reportVersion !== _report__WEBPACK_IMPORTED_MODULE_3__["ReportManager"].REPORT_VERSION;
          if (versionMismatch || this.retryCount > this.maxRetries) {
            this.flushReport();
          }
        }
      }
      this.start();
    });
    const {
      http,
      storage,
      debug,
      checkInterval = 90000,
      storageKey = 'analytics'
    } = config;
    this.http = http;
    this.checkInterval = checkInterval;
    this.applicationUsage = new _metrics__WEBPACK_IMPORTED_MODULE_1__["ApplicationUsage"]();
    this.storageManager = new _storage__WEBPACK_IMPORTED_MODULE_2__["ReportStorageManager"](storageKey, storage);
    const storedReport = this.storageManager.get();
    this.reportManager = new _report__WEBPACK_IMPORTED_MODULE_3__["ReportManager"](storedReport);
    this.debug = !!debug;
  }
  saveToReport(newMetrics) {
    this.reportManager.assignReports(newMetrics);
    this.storageManager.store(this.reportManager.report);
  }
  flushReport() {
    this.retryCount = 0;
    this.reportManager.clearReport();
    this.storageManager.store(this.reportManager.report);
  }
  log(message) {
    if (this.debug) {
      // eslint-disable-next-line
      console.debug(message);
    }
  }
  reportApplicationUsage(appId) {
    this.log(`Reporting application changed to ${appId}`);
    this.lastAppId = appId || this.lastAppId;
    const appChangedReport = this.applicationUsage.appChanged(appId);
    if (appChangedReport) this.saveToReport([appChangedReport]);
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/storage.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/storage.js ***!
  \**************************************************************************************/
/*! exports provided: ReportStorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStorageManager", function() { return ReportStorageManager; });
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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

class ReportStorageManager {
  constructor(storageKey, storage) {
    _defineProperty(this, "storageKey", void 0);
    _defineProperty(this, "storage", void 0);
    this.storageKey = storageKey;
    this.storage = storage;
  }
  get() {
    if (!this.storage) return;
    return this.storage.get(this.storageKey);
  }
  store(report) {
    if (!this.storage) return;
    this.storage.set(this.storageKey, report);
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/util.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/util.js ***!
  \***********************************************************************************/
/*! exports provided: wrapArray, UnreachableCaseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapArray", function() { return wrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreachableCaseError", function() { return UnreachableCaseError; });
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

function wrapArray(subj) {
  return Array.isArray(subj) ? subj : [subj];
}
class UnreachableCaseError extends Error {
  constructor(val) {
    super(`Unreachable case: ${val}`);
  }
}

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visualizations_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visualizations!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visualizations!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visualizations_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visualizations_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visualizations/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/visualizations/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: VISUALIZE_ENABLE_LABS_SETTING, VISUALIZE_DISABLE_BUCKET_AGG_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_ENABLE_LABS_SETTING", function() { return VISUALIZE_ENABLE_LABS_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_DISABLE_BUCKET_AGG_SETTING", function() { return VISUALIZE_DISABLE_BUCKET_AGG_SETTING; });
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

const VISUALIZE_ENABLE_LABS_SETTING = 'visualize:enableLabs';
const VISUALIZE_DISABLE_BUCKET_AGG_SETTING = 'visualize:disableBucketAgg';

/***/ }),

/***/ "./public/components/index.ts":
/*!************************************!*\
  !*** ./public/components/index.ts ***!
  \************************************/
/*! exports provided: Visualization, VisualizationContainer, VisualizationNoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualization */ "./public/components/visualization.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Visualization", function() { return _visualization__WEBPACK_IMPORTED_MODULE_0__["Visualization"]; });

/* harmony import */ var _visualization_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualization_container */ "./public/components/visualization_container.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationContainer", function() { return _visualization_container__WEBPACK_IMPORTED_MODULE_1__["VisualizationContainer"]; });

/* harmony import */ var _visualization_noresults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualization_noresults */ "./public/components/visualization_noresults.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationNoResults", function() { return _visualization_noresults__WEBPACK_IMPORTED_MODULE_2__["VisualizationNoResults"]; });

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

/***/ "./public/components/visualization.tsx":
/*!*********************************************!*\
  !*** ./public/components/visualization.tsx ***!
  \*********************************************/
/*! exports provided: Visualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visualization", function() { return Visualization; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _legacy_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../legacy/memoize */ "./public/legacy/memoize.ts");
/* harmony import */ var _visualization_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualization_chart */ "./public/components/visualization_chart.tsx");
/* harmony import */ var _visualization_noresults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualization_noresults */ "./public/components/visualization_noresults.tsx");
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






function shouldShowNoResultsMessage(vis, visData) {
  const requiresSearch = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(vis, 'type.requiresSearch');
  const rows = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(visData, 'rows');
  const isZeroHits = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(visData, 'hits') === 0 || rows && !rows.length;
  const shouldShowMessage = !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(vis, 'type.useCustomNoDataScreen');
  return Boolean(requiresSearch && isZeroHits && shouldShowMessage);
}
class Visualization extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "showNoResultsMessage", Object(_legacy_memoize__WEBPACK_IMPORTED_MODULE_2__["memoizeLast"])(shouldShowNoResultsMessage));
    props.vis.setUiState(props.uiState);
  }
  render() {
    const {
      vis,
      visData,
      visParams,
      onInit,
      uiState,
      listenOnChange
    } = this.props;
    const noResults = this.showNoResultsMessage(vis, visData);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "visualization"
    }, noResults ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visualization_noresults__WEBPACK_IMPORTED_MODULE_4__["VisualizationNoResults"], {
      onInit: onInit
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visualization_chart__WEBPACK_IMPORTED_MODULE_3__["VisualizationChart"], {
      vis: vis,
      visData: visData,
      visParams: visParams,
      onInit: onInit,
      uiState: uiState,
      listenOnChange: listenOnChange
    }));
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.uiState !== this.props.uiState) {
      throw new Error('Changing uiState on <Visualization/> is not supported!');
    }
    return true;
  }
}

/***/ }),

/***/ "./public/components/visualization_chart.tsx":
/*!***************************************************!*\
  !*** ./public/components/visualization_chart.tsx ***!
  \***************************************************/
/*! exports provided: VisualizationChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationChart", function() { return VisualizationChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__);
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





class VisualizationChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "resizeChecker", void 0);
    _defineProperty(this, "visualization", void 0);
    _defineProperty(this, "chartDiv", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());
    _defineProperty(this, "containerDiv", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());
    _defineProperty(this, "renderSubject", void 0);
    _defineProperty(this, "renderSubscription", void 0);
    _defineProperty(this, "onUiStateChanged", () => {
      this.startRenderVisualization();
    });
    this.renderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const render$ = this.renderSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    const success$ = render$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(({
      vis,
      visData
    }) => vis && (!vis.type.requiresSearch || visData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(async ({
      vis,
      visData,
      visParams
    }) => {
      if (!this.visualization) {
        // This should never happen, since we only should trigger another rendering
        // after this component has mounted and thus the visualization implementation
        // has been initialized
        throw new Error('Visualization implementation was not initialized on first render.');
      }
      return this.visualization.render(visData, visParams);
    }));
    this.renderSubscription = success$.subscribe(() => {
      if (this.props.onInit) {
        this.props.onInit();
      }
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visChart__container osd-resetFocusState",
      tabIndex: 0,
      ref: this.containerDiv
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visChart",
      ref: this.chartDiv
    }));
  }
  componentDidMount() {
    if (!this.chartDiv.current || !this.containerDiv.current) {
      throw new Error('chartDiv and currentDiv reference should always be present.');
    }
    const {
      vis
    } = this.props;
    const Visualization = vis.type.visualization;
    if (!Visualization) {
      throw new Error('Tried to use VisualizationChart component with a vis without visualization property.');
    }
    this.visualization = new Visualization(this.chartDiv.current, vis);

    // We know that containerDiv.current will never be null, since we will always
    // have rendered and the div is always rendered into the tree (i.e. not
    // inside any condition).
    this.resizeChecker = new _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_3__["ResizeChecker"](this.containerDiv.current);
    this.resizeChecker.on('resize', () => this.startRenderVisualization());
    if (this.props.listenOnChange) {
      this.props.uiState.on('change', this.onUiStateChanged);
    }
    this.startRenderVisualization();
  }
  componentDidUpdate() {
    this.startRenderVisualization();
  }
  componentWillUnmount() {
    if (this.renderSubscription) {
      this.renderSubscription.unsubscribe();
    }
    if (this.resizeChecker) {
      this.resizeChecker.destroy();
    }
    if (this.visualization) {
      this.visualization.destroy();
    }
  }
  startRenderVisualization() {
    if (this.containerDiv.current && this.chartDiv.current) {
      this.renderSubject.next({
        vis: this.props.vis,
        visData: this.props.visData,
        visParams: this.props.visParams
      });
    }
  }
}


/***/ }),

/***/ "./public/components/visualization_container.tsx":
/*!*******************************************************!*\
  !*** ./public/components/visualization_container.tsx ***!
  \*******************************************************/
/*! exports provided: VisualizationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationContainer", function() { return VisualizationContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visualization_noresults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualization_noresults */ "./public/components/visualization_noresults.tsx");
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





const VisualizationContainer = ({
  className,
  children,
  showNoResult = false
}) => {
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('visualization', className);
  const fallBack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visChart__spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingChart"], {
    mono: true,
    size: "l"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: fallBack
  }, showNoResult ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_visualization_noresults__WEBPACK_IMPORTED_MODULE_3__["VisualizationNoResults"], null) : children));
};

/***/ }),

/***/ "./public/components/visualization_noresults.tsx":
/*!*******************************************************!*\
  !*** ./public/components/visualization_noresults.tsx ***!
  \*******************************************************/
/*! exports provided: VisualizationNoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationNoResults", function() { return VisualizationNoResults; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




class VisualizationNoResults extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "containerDiv", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef());
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "visError",
      ref: this.containerDiv
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item top"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      size: "xs",
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
      type: "visualizeApp",
      size: "m",
      color: "subdued"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.noResultsFoundTitle', {
      defaultMessage: '결과를 찾을 수 없습니다'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "item bottom"
    }));
  }
  componentDidMount() {
    this.afterRender();
  }
  componentDidUpdate() {
    this.afterRender();
  }
  afterRender() {
    if (this.props.onInit) {
      this.props.onInit();
    }
  }
}

/***/ }),

/***/ "./public/embeddable/_visualize_lab_disabled.scss":
/*!********************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v7dark */ "./public/embeddable/_visualize_lab_disabled.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v7light */ "./public/embeddable/_visualize_lab_disabled.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v8dark */ "./public/embeddable/_visualize_lab_disabled.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v8light */ "./public/embeddable/_visualize_lab_disabled.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v9dark */ "./public/embeddable/_visualize_lab_disabled.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./_visualize_lab_disabled.scss?v9light */ "./public/embeddable/_visualize_lab_disabled.scss?v9light");
}

/***/ }),

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v7dark":
/*!***************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v7dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./_visualize_lab_disabled.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v7dark");

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

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v7light":
/*!****************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v7light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./_visualize_lab_disabled.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v7light");

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

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v8dark":
/*!***************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v8dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./_visualize_lab_disabled.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v8dark");

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

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v8light":
/*!****************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v8light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./_visualize_lab_disabled.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v8light");

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

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v9dark":
/*!***************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v9dark ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./_visualize_lab_disabled.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v9dark");

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

/***/ "./public/embeddable/_visualize_lab_disabled.scss?v9light":
/*!****************************************************************!*\
  !*** ./public/embeddable/_visualize_lab_disabled.scss?v9light ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./_visualize_lab_disabled.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/embeddable/_visualize_lab_disabled.scss?v9light");

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

/***/ "./public/embeddable/constants.ts":
/*!****************************************!*\
  !*** ./public/embeddable/constants.ts ***!
  \****************************************/
/*! exports provided: VISUALIZE_EMBEDDABLE_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_EMBEDDABLE_TYPE", function() { return VISUALIZE_EMBEDDABLE_TYPE; });
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

const VISUALIZE_EMBEDDABLE_TYPE = 'visualization';

/***/ }),

/***/ "./public/embeddable/create_vis_embeddable_from_object.ts":
/*!****************************************************************!*\
  !*** ./public/embeddable/create_vis_embeddable_from_object.ts ***!
  \****************************************************************/
/*! exports provided: createVisEmbeddableFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVisEmbeddableFromObject", function() { return createVisEmbeddableFromObject; });
/* harmony import */ var _visualize_embeddable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualize_embeddable */ "./public/embeddable/visualize_embeddable.ts");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_embeddable_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _disabled_lab_embeddable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disabled_lab_embeddable */ "./public/embeddable/disabled_lab_embeddable.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.ts");
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






const createVisEmbeddableFromObject = deps => async (vis, input, savedVisualizationsLoader, attributeService, parent) => {
  const savedVisualizations = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedVisualizationsLoader"])();
  try {
    const visId = vis.id;
    const editPath = visId ? savedVisualizations.urlFor(visId) : '#/edit_by_value';
    const editUrl = visId ? Object(_services__WEBPACK_IMPORTED_MODULE_3__["getHttp"])().basePath.prepend(`/app/visualize${savedVisualizations.urlFor(visId)}`) : '';
    const isLabsEnabled = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getUISettings"])().get(_common_constants__WEBPACK_IMPORTED_MODULE_4__["VISUALIZE_ENABLE_LABS_SETTING"]);
    if (!isLabsEnabled && vis.type.stage === 'experimental') {
      return new _disabled_lab_embeddable__WEBPACK_IMPORTED_MODULE_2__["DisabledLabEmbeddable"](vis.title, input);
    }
    let indexPatterns = [];
    if (vis.type.getUsedIndexPattern) {
      indexPatterns = await vis.type.getUsedIndexPattern(vis.params);
    } else if (vis.data.indexPattern) {
      indexPatterns = [vis.data.indexPattern];
    }
    const editable = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getCapabilities"])().visualize.save;
    const savedAugmentVisLoader = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedAugmentVisLoader"])();
    return new _visualize_embeddable__WEBPACK_IMPORTED_MODULE_0__["VisualizeEmbeddable"](Object(_services__WEBPACK_IMPORTED_MODULE_3__["getTimeFilter"])(), {
      vis,
      indexPatterns,
      editPath,
      editUrl,
      editable,
      deps
    }, input, attributeService, savedVisualizationsLoader, savedAugmentVisLoader, parent);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    return new _embeddable_public__WEBPACK_IMPORTED_MODULE_1__["ErrorEmbeddable"](e, input, parent);
  }
};

/***/ }),

/***/ "./public/embeddable/disabled_lab_embeddable.tsx":
/*!*******************************************************!*\
  !*** ./public/embeddable/disabled_lab_embeddable.tsx ***!
  \*******************************************************/
/*! exports provided: DisabledLabEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledLabEmbeddable", function() { return DisabledLabEmbeddable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_embeddable_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _disabled_lab_visualization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disabled_lab_visualization */ "./public/embeddable/disabled_lab_visualization.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./public/embeddable/constants.ts");
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






class DisabledLabEmbeddable extends _embeddable_public__WEBPACK_IMPORTED_MODULE_2__["Embeddable"] {
  constructor(title, initialInput) {
    super(initialInput, {
      title
    });
    this.title = title;
    _defineProperty(this, "domNode", void 0);
    _defineProperty(this, "type", _constants__WEBPACK_IMPORTED_MODULE_4__["VISUALIZE_EMBEDDABLE_TYPE"]);
  }
  reload() {}
  render(domNode) {
    if (this.title) {
      this.domNode = domNode;
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_disabled_lab_visualization__WEBPACK_IMPORTED_MODULE_3__["DisabledLabVisualization"], {
        title: this.title
      }), domNode);
    }
  }
  destroy() {
    if (this.domNode) {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(this.domNode);
    }
  }
}

/***/ }),

/***/ "./public/embeddable/disabled_lab_visualization.tsx":
/*!**********************************************************!*\
  !*** ./public/embeddable/disabled_lab_visualization.tsx ***!
  \**********************************************************/
/*! exports provided: DisabledLabVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledLabVisualization", function() { return DisabledLabVisualization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _visualize_lab_disabled_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_visualize_lab_disabled.scss */ "./public/embeddable/_visualize_lab_disabled.scss");
/* harmony import */ var _visualize_lab_disabled_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_visualize_lab_disabled_scss__WEBPACK_IMPORTED_MODULE_4__);
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






function DisabledLabVisualization({
  title
}) {
  const docLinks = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getDocLinks"])();
  const advancedSettingsLink = docLinks.links.opensearchDashboards.management.advancedSettings;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "visDisabledLabVisualization"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiEmptyPrompt"], {
    iconType: "beaker",
    titleSize: "xs",
    "data-test-subj": "visDisabledLabVisualization",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "visualizations.disabledLabVisualizationTitle",
      defaultMessage: "{title} is an experimental visualization.",
      values: {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
          className: "visDisabledLabVisualizationtitle"
        }, title)
      }
    }),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      size: "s",
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Enable experimental visualizations within", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
      href: advancedSettingsLink
    }, "Advanced Settings"), ".")))
  }));
}

/***/ }),

/***/ "./public/embeddable/events.ts":
/*!*************************************!*\
  !*** ./public/embeddable/events.ts ***!
  \*************************************/
/*! exports provided: VIS_EVENT_TO_TRIGGER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIS_EVENT_TO_TRIGGER", function() { return VIS_EVENT_TO_TRIGGER; });
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui_actions/public */ "plugin/uiActions/public");
/* harmony import */ var _ui_actions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_actions_public__WEBPACK_IMPORTED_MODULE_0__);
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


const VIS_EVENT_TO_TRIGGER = {
  applyFilter: _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["APPLY_FILTER_TRIGGER"],
  brush: _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["SELECT_RANGE_TRIGGER"],
  filter: _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["VALUE_CLICK_TRIGGER"],
  externalAction: _ui_actions_public__WEBPACK_IMPORTED_MODULE_0__["EXTERNAL_ACTION_TRIGGER"]
};

/***/ }),

/***/ "./public/embeddable/index.ts":
/*!************************************!*\
  !*** ./public/embeddable/index.ts ***!
  \************************************/
/*! exports provided: DisabledLabEmbeddable, VisualizeEmbeddable, VisualizeInput, VisualizeEmbeddableFactory, VISUALIZE_EMBEDDABLE_TYPE, VIS_EVENT_TO_TRIGGER, createVisEmbeddableFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disabled_lab_embeddable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disabled_lab_embeddable */ "./public/embeddable/disabled_lab_embeddable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisabledLabEmbeddable", function() { return _disabled_lab_embeddable__WEBPACK_IMPORTED_MODULE_0__["DisabledLabEmbeddable"]; });

/* harmony import */ var _visualize_embeddable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visualize_embeddable */ "./public/embeddable/visualize_embeddable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeEmbeddable", function() { return _visualize_embeddable__WEBPACK_IMPORTED_MODULE_1__["VisualizeEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeInput", function() { return _visualize_embeddable__WEBPACK_IMPORTED_MODULE_1__["VisualizeInput"]; });

/* harmony import */ var _visualize_embeddable_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visualize_embeddable_factory */ "./public/embeddable/visualize_embeddable_factory.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeEmbeddableFactory", function() { return _visualize_embeddable_factory__WEBPACK_IMPORTED_MODULE_2__["VisualizeEmbeddableFactory"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/embeddable/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_EMBEDDABLE_TYPE", function() { return _constants__WEBPACK_IMPORTED_MODULE_3__["VISUALIZE_EMBEDDABLE_TYPE"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./public/embeddable/events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIS_EVENT_TO_TRIGGER", function() { return _events__WEBPACK_IMPORTED_MODULE_4__["VIS_EVENT_TO_TRIGGER"]; });

/* harmony import */ var _create_vis_embeddable_from_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create_vis_embeddable_from_object */ "./public/embeddable/create_vis_embeddable_from_object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVisEmbeddableFromObject", function() { return _create_vis_embeddable_from_object__WEBPACK_IMPORTED_MODULE_5__["createVisEmbeddableFromObject"]; });

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

/***/ "./public/embeddable/visualize_embeddable.ts":
/*!***************************************************!*\
  !*** ./public/embeddable/visualize_embeddable.ts ***!
  \***************************************************/
/*! exports provided: VisualizeEmbeddable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizeEmbeddable", function() { return VisualizeEmbeddable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/embeddable/constants.ts");
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../plugins/data/public */ "plugin/data/public");
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_data_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../plugins/embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../legacy/build_pipeline */ "./public/legacy/build_pipeline.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events */ "./public/embeddable/events.ts");
/* harmony import */ var _dashboard_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dashboard/public */ "plugin/dashboard/public");
/* harmony import */ var _dashboard_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dashboard_public__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__);
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
class VisualizeEmbeddable extends _plugins_embeddable_public__WEBPACK_IMPORTED_MODULE_5__["Embeddable"] {
  constructor(timefilter, {
    vis,
    editPath,
    editUrl,
    indexPatterns,
    editable,
    deps
  }, initialInput, attributeService, savedVisualizationsLoader, savedAugmentVisLoader, parent) {
    super(initialInput, {
      defaultTitle: vis.title,
      editPath,
      editApp: 'visualize',
      editUrl,
      indexPatterns,
      editable,
      visTypeName: vis.type.name
    }, parent);
    _defineProperty(this, "handler", void 0);
    _defineProperty(this, "timefilter", void 0);
    _defineProperty(this, "timeRange", void 0);
    _defineProperty(this, "query", void 0);
    _defineProperty(this, "filters", void 0);
    _defineProperty(this, "visCustomizations", void 0);
    _defineProperty(this, "subscriptions", []);
    _defineProperty(this, "expression", '');
    _defineProperty(this, "vis", void 0);
    _defineProperty(this, "domNode", void 0);
    _defineProperty(this, "type", _constants__WEBPACK_IMPORTED_MODULE_3__["VISUALIZE_EMBEDDABLE_TYPE"]);
    _defineProperty(this, "autoRefreshFetchSubscription", void 0);
    _defineProperty(this, "abortController", void 0);
    _defineProperty(this, "deps", void 0);
    _defineProperty(this, "inspectorAdapters", void 0);
    _defineProperty(this, "attributeService", void 0);
    _defineProperty(this, "savedVisualizationsLoader", void 0);
    _defineProperty(this, "savedAugmentVisLoader", void 0);
    _defineProperty(this, "visLayers", void 0);
    _defineProperty(this, "visAugmenterConfig", void 0);
    _defineProperty(this, "getInspectorAdapters", () => {
      if (!this.handler || this.inspectorAdapters && !Object.keys(this.inspectorAdapters).length) {
        return undefined;
      }
      return this.handler.inspect();
    });
    _defineProperty(this, "openInspector", () => {
      if (!this.handler) return;
      const adapters = this.handler.inspect();
      if (!adapters) return;
      return this.deps.start().plugins.inspector.open(adapters, {
        title: this.getTitle()
      });
    });
    // this is a hack to make editor still work, will be removed once we clean up editor
    // @ts-ignore
    _defineProperty(this, "hasInspector", () => Boolean(this.getInspectorAdapters()));
    _defineProperty(this, "onContainerLoading", () => {
      this.renderComplete.dispatchInProgress();
      this.updateOutput({
        loading: true,
        error: undefined
      });
    });
    _defineProperty(this, "onContainerRender", () => {
      this.renderComplete.dispatchComplete();
      this.updateOutput({
        loading: false,
        error: undefined
      });
    });
    _defineProperty(this, "onContainerError", error => {
      if (this.abortController) {
        this.abortController.abort();
      }
      this.renderComplete.dispatchError();
      this.updateOutput({
        loading: false,
        error
      });
    });
    _defineProperty(this, "reload", () => {
      this.handleVisUpdate();
    });
    _defineProperty(this, "handleVisUpdate", async () => {
      this.updateHandler();
    });
    _defineProperty(this, "uiStateChangeHandler", () => {
      this.updateInput({
        ...this.vis.uiState.toJSON()
      });
    });
    _defineProperty(this, "inputIsRefType", input => {
      if (!this.attributeService) {
        throw new Error('AttributeService must be defined for getInputAsRefType');
      }
      return this.attributeService.inputIsRefType(input);
    });
    _defineProperty(this, "getInputAsValueType", async () => {
      const input = {
        savedVis: this.vis.serialize()
      };
      if (this.getTitle()) {
        input.savedVis.title = this.getTitle();
      }
      delete input.savedVis.id;
      return new Promise(resolve => {
        resolve({
          ...input
        });
      });
    });
    _defineProperty(this, "getInputAsRefType", async () => {
      var _this$savedVisualizat;
      const savedVis = await ((_this$savedVisualizat = this.savedVisualizationsLoader) === null || _this$savedVisualizat === void 0 ? void 0 : _this$savedVisualizat.get({}));
      if (!savedVis) {
        throw new Error('Error creating a saved vis object');
      }
      if (!this.attributeService) {
        throw new Error('AttributeService must be defined for getInputAsRefType');
      }
      const saveModalTitle = this.getTitle() ? this.getTitle() : _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visualizations.embeddable.placeholderTitle', {
        defaultMessage: 'Placeholder Title'
      });
      // @ts-ignore
      const attributes = {
        savedVis,
        vis: this.vis,
        title: this.vis.title
      };
      return this.attributeService.getInputAsRefType({
        id: this.id,
        attributes
      }, {
        showSaveModal: true,
        saveModalTitle
      });
    });
    /**
     * Collects any VisLayers from plugin expressions functions
     * by fetching all AugmentVisSavedObjects that meets below criteria:
     * - includes a reference to the vis saved object id
     * - includes any of the plugin resource IDs, if specified
     */
    _defineProperty(this, "fetchVisLayers", async () => {
      try {
        var _this$visAugmenterCon;
        const expressionParams = {
          searchContext: {
            timeRange: this.timeRange,
            query: this.input.query,
            filters: this.input.filters
          },
          uiState: this.vis.uiState,
          inspectorAdapters: this.inspectorAdapters
        };
        const aborted = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.abortController, 'signal.aborted', false);
        const augmentVisSavedObjs = await Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__["getAugmentVisSavedObjs"])(this.vis.id, this.savedAugmentVisLoader, undefined, (_this$visAugmenterCon = this.visAugmenterConfig) === null || _this$visAugmenterCon === void 0 ? void 0 : _this$visAugmenterCon.visLayerResourceIds);
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(augmentVisSavedObjs) && !aborted && Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__["isEligibleForVisLayers"])(this.vis)) {
          const visLayersPipeline = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__["buildPipelineFromAugmentVisSavedObjs"])(augmentVisSavedObjs);
          // The initial input for the pipeline will just be an empty arr of VisLayers. As plugin
          // expression functions are ran, they will incrementally append their generated VisLayers to it.
          const visLayersPipelineInput = {
            type: 'vis_layers',
            layers: []
          };
          // We cannot use this.handler in this case, since it does not support the run() cmd
          // we need here. So, we consume the expressions service to run this directly instead.
          const exprVisLayers = await Object(_services__WEBPACK_IMPORTED_MODULE_7__["getExpressions"])().run(visLayersPipeline, visLayersPipelineInput, expressionParams);
          const visLayers = exprVisLayers.layers;

          /**
           * There may be some stale saved objs if any plugin resources have been deleted since last time
           * data was fetched from them via the expression functions. Execute this trigger so any listening
           * action can perform cleanup.
           *
           * TODO: this should be automatically handled by the saved objects plugin. Tracking issue:
           * https://github.com/opensearch-project/OpenSearch-Dashboards/issues/4499
           */
          Object(_services__WEBPACK_IMPORTED_MODULE_7__["getUiActions"])().getTrigger(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__["PLUGIN_RESOURCE_DELETE_TRIGGER"]).exec({
            savedObjs: augmentVisSavedObjs,
            visLayers
          });
          const err = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_10__["getAnyErrors"])(visLayers, this.vis.title);
          // This is only true when one or more VisLayers has an error
          if (err !== undefined) {
            const {
              toasts
            } = Object(_services__WEBPACK_IMPORTED_MODULE_7__["getNotifications"])();
            toasts.addError(err, {
              title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visualizations.renderVisTitle', {
                defaultMessage: 'Error loading data on the {visTitle} chart',
                values: {
                  visTitle: this.vis.title
                }
              }),
              toastMessage: ' ',
              id: this.id
            });
          }
          return visLayers;
        }
      } catch {
        return [];
      }
      return [];
    });
    this.deps = deps;
    this.timefilter = timefilter;
    this.vis = vis;
    this.vis.uiState.on('change', this.uiStateChangeHandler);
    this.vis.uiState.on('reload', this.reload);
    this.attributeService = attributeService;
    this.savedVisualizationsLoader = savedVisualizationsLoader;
    this.savedAugmentVisLoader = savedAugmentVisLoader;
    this.visAugmenterConfig = initialInput.visAugmenterConfig;
    this.autoRefreshFetchSubscription = timefilter.getAutoRefreshFetch$().subscribe(this.updateHandler.bind(this));
    this.subscriptions.push(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"](this.getOutput$(), this.getInput$()).subscribe(() => {
      this.handleChanges();
    }));
    const inspectorAdapters = this.vis.type.inspectorAdapters;
    if (inspectorAdapters) {
      this.inspectorAdapters = typeof inspectorAdapters === 'function' ? inspectorAdapters() : inspectorAdapters;
    }
  }
  getDescription() {
    return this.vis.description;
  }
  /**
   * Transfers all changes in the containerState.customization into
   * the uiState of this visualization.
   */
  transferCustomizationsToUiState() {
    // Check for changes that need to be forwarded to the uiState
    // Since the vis has an own listener on the uiState we don't need to
    // pass anything from here to the handler.update method
    const visCustomizations = {
      vis: this.input.vis,
      table: this.input.table
    };
    if (visCustomizations.vis || visCustomizations.table) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(visCustomizations, this.visCustomizations)) {
        this.visCustomizations = visCustomizations;
        // Turn this off or the uiStateChangeHandler will fire for every modification.
        this.vis.uiState.off('change', this.uiStateChangeHandler);
        this.vis.uiState.clearAllKeys();
        if (visCustomizations.vis) {
          this.vis.uiState.set('vis', visCustomizations.vis);
          getKeys(visCustomizations).forEach(key => {
            this.vis.uiState.set(key, visCustomizations[key]);
          });
        }
        if (visCustomizations.table) {
          this.vis.uiState.set('table', visCustomizations.table);
        }
        this.vis.uiState.on('change', this.uiStateChangeHandler);
      }
    } else if (this.parent) {
      this.vis.uiState.clearAllKeys();
    }
  }
  async handleChanges() {
    this.transferCustomizationsToUiState();
    let dirty = false;

    // Check if timerange has changed
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(this.input.timeRange, this.timeRange)) {
      this.timeRange = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(this.input.timeRange);
      dirty = true;
    }

    // Check if filters has changed
    if (!_plugins_data_public__WEBPACK_IMPORTED_MODULE_4__["opensearchFilters"].onlyDisabledFiltersChanged(this.input.filters, this.filters)) {
      this.filters = this.input.filters;
      dirty = true;
    }

    // Check if query has changed
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(this.input.query, this.query)) {
      this.query = this.input.query;
      dirty = true;
    }
    if (this.vis.description && this.domNode) {
      this.domNode.setAttribute('data-description', this.vis.description);
    }
    if (this.handler && dirty) {
      this.updateHandler();
    }
  }
  /**
   *
   * @param {Element} domNode
   */
  async render(domNode) {
    this.timeRange = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(this.input.timeRange);
    this.transferCustomizationsToUiState();
    const div = document.createElement('div');
    div.className = `visualize panel-content panel-content--fullWidth`;
    domNode.appendChild(div);
    this.domNode = div;
    super.render(this.domNode);
    const expressions = Object(_services__WEBPACK_IMPORTED_MODULE_7__["getExpressions"])();
    this.handler = new expressions.ExpressionLoader(this.domNode, undefined, {
      onRenderError: (element, error) => {
        this.onContainerError(error);
      }
    });
    this.subscriptions.push(this.handler.events$.subscribe(async event => {
      // maps hack, remove once esaggs function is cleaned up and ready to accept variables
      if (event.name === 'bounds') {
        const agg = this.vis.data.aggs.aggs.find(a => {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(a, 'type.dslName') === 'geohash_grid';
        });
        if (agg && agg.params.precision !== event.data.precision || agg && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(agg.params.boundingBox, event.data.boundingBox)) {
          agg.params.boundingBox = event.data.boundingBox;
          agg.params.precision = event.data.precision;
          this.reload();
        }
        return;
      }
      if (!this.input.disableTriggers) {
        const triggerId = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_events__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"], event.name, _events__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].filter);
        let context;
        if (triggerId === _events__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].applyFilter) {
          var _this$vis$data$indexP;
          context = {
            embeddable: this,
            timeFieldName: (_this$vis$data$indexP = this.vis.data.indexPattern) === null || _this$vis$data$indexP === void 0 ? void 0 : _this$vis$data$indexP.timeFieldName,
            ...event.data
          };
        } else if (triggerId === _events__WEBPACK_IMPORTED_MODULE_8__["VIS_EVENT_TO_TRIGGER"].externalAction) {
          context = {
            savedObjectId: this.vis.id
          };
        } else {
          var _this$vis$data$indexP2;
          context = {
            embeddable: this,
            data: {
              timeFieldName: (_this$vis$data$indexP2 = this.vis.data.indexPattern) === null || _this$vis$data$indexP2 === void 0 ? void 0 : _this$vis$data$indexP2.timeFieldName,
              ...event.data
            }
          };
        }
        Object(_services__WEBPACK_IMPORTED_MODULE_7__["getUiActions"])().getTrigger(triggerId).exec(context);
      }
    }));
    if (this.vis.description) {
      div.setAttribute('data-description', this.vis.description);
    }
    div.setAttribute('data-test-subj', 'visualizationLoader');
    div.setAttribute('data-shared-item', '');
    this.subscriptions.push(this.handler.loading$.subscribe(this.onContainerLoading));
    this.subscriptions.push(this.handler.render$.subscribe(this.onContainerRender));
    this.updateHandler();
  }
  destroy() {
    super.destroy();
    this.subscriptions.forEach(s => s.unsubscribe());
    this.vis.uiState.off('change', this.uiStateChangeHandler);
    this.vis.uiState.off('reload', this.reload);
    if (this.handler) {
      this.handler.destroy();
      this.handler.getElement().remove();
    }
    this.autoRefreshFetchSubscription.unsubscribe();
  }
  async updateHandler() {
    var _this$parent, _this$visAugmenterCon2;
    const expressionParams = {
      searchContext: {
        timeRange: this.timeRange,
        query: this.input.query,
        filters: this.input.filters
      },
      uiState: this.vis.uiState,
      inspectorAdapters: this.inspectorAdapters
    };
    if (this.abortController) {
      this.abortController.abort();
    }
    this.abortController = new AbortController();
    const abortController = this.abortController;

    // By waiting for this to complete, this.visLayers will be populated.
    // Note we only fetch when in the context of a dashboard or in the view
    // events flyout - we do not show events or have event functionality when
    // in the vis edit view.
    const shouldFetchVisLayers = ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.type) === _dashboard_public__WEBPACK_IMPORTED_MODULE_9__["DASHBOARD_CONTAINER_TYPE"] || ((_this$visAugmenterCon2 = this.visAugmenterConfig) === null || _this$visAugmenterCon2 === void 0 ? void 0 : _this$visAugmenterCon2.inFlyout);
    if (shouldFetchVisLayers) {
      await this.populateVisLayers();
    }
    this.expression = await Object(_legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_6__["buildPipeline"])(this.vis, {
      timefilter: this.timefilter,
      timeRange: this.timeRange,
      abortSignal: this.abortController.signal,
      visLayers: this.visLayers,
      visAugmenterConfig: this.visAugmenterConfig
    });
    if (this.handler && !abortController.signal.aborted) {
      this.handler.update(this.expression, expressionParams);
    }
  }
  supportedTriggers() {
    var _this$vis$type$getSup, _this$vis$type$getSup2, _this$vis$type;
    return (_this$vis$type$getSup = (_this$vis$type$getSup2 = (_this$vis$type = this.vis.type).getSupportedTriggers) === null || _this$vis$type$getSup2 === void 0 ? void 0 : _this$vis$type$getSup2.call(_this$vis$type)) !== null && _this$vis$type$getSup !== void 0 ? _this$vis$type$getSup : [];
  }
  /**
   * Fetches any VisLayers, and filters out to only include ones in the list of
   * input resource IDs, if specified. Assigns them to this.visLayers.
   * Note this fn is public so we can fetch vislayers on demand when needed,
   * e.g., generating other vis embeddables in the view events flyout.
   */
  async populateVisLayers() {
    this.visLayers = await this.fetchVisLayers();
  }
}

/***/ }),

/***/ "./public/embeddable/visualize_embeddable_factory.tsx":
/*!************************************************************!*\
  !*** ./public/embeddable/visualize_embeddable_factory.tsx ***!
  \************************************************************/
/*! exports provided: VisualizeEmbeddableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizeEmbeddableFactory", function() { return VisualizeEmbeddableFactory; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../embeddable/public */ "plugin/embeddable/public");
/* harmony import */ var _embeddable_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_embeddable_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./public/embeddable/constants.ts");
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vis */ "./public/vis.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wizard */ "./public/wizard/index.ts");
/* harmony import */ var _saved_visualizations_saved_vis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../saved_visualizations/_saved_vis */ "./public/saved_visualizations/_saved_vis.ts");
/* harmony import */ var _create_vis_embeddable_from_object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create_vis_embeddable_from_object */ "./public/embeddable/create_vis_embeddable_from_object.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.ts");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_10__);
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












class VisualizeEmbeddableFactory {
  constructor(deps) {
    this.deps = deps;
    _defineProperty(this, "type", _constants__WEBPACK_IMPORTED_MODULE_3__["VISUALIZE_EMBEDDABLE_TYPE"]);
    _defineProperty(this, "attributeService", void 0);
    _defineProperty(this, "savedObjectMetaData", {
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.savedObjectName', {
        defaultMessage: 'Visualization'
      }),
      includeFields: ['visState'],
      type: 'visualization',
      getIconForSavedObject: savedObject => {
        return Object(_services__WEBPACK_IMPORTED_MODULE_5__["getTypes"])().get(JSON.parse(savedObject.attributes.visState).type).icon || 'visualizeApp';
      },
      getTooltipForSavedObject: savedObject => {
        return `${savedObject.attributes.title} (${Object(_services__WEBPACK_IMPORTED_MODULE_5__["getTypes"])().get(JSON.parse(savedObject.attributes.visState).type).title})`;
      },
      showSavedObject: savedObject => {
        const typeName = JSON.parse(savedObject.attributes.visState).type;
        const visType = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getTypes"])().get(typeName);
        if (!visType) {
          return false;
        }
        if (Object(_services__WEBPACK_IMPORTED_MODULE_5__["getUISettings"])().get(_common_constants__WEBPACK_IMPORTED_MODULE_9__["VISUALIZE_ENABLE_LABS_SETTING"])) {
          return true;
        }
        return visType.stage !== 'experimental';
      }
    });
  }
  async isEditable() {
    return Object(_services__WEBPACK_IMPORTED_MODULE_5__["getCapabilities"])().visualize.save;
  }
  getDisplayName() {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.displayName', {
      defaultMessage: 'visualization'
    });
  }
  async getCurrentAppId() {
    return await this.deps.start().core.application.currentAppId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).toPromise();
  }
  async getAttributeService() {
    if (!this.attributeService) {
      this.attributeService = await this.deps.start().plugins.dashboard.getAttributeService(this.type, {
        saveMethod: this.saveMethod.bind(this),
        checkForDuplicateTitle: this.checkTitle.bind(this)
      });
    }
    return this.attributeService;
  }
  async createFromSavedObject(savedObjectId, input, parent) {
    const savedVisualizations = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getSavedVisualizationsLoader"])();
    try {
      const savedObject = await savedVisualizations.get(savedObjectId);
      const visState = Object(_saved_visualizations_saved_vis__WEBPACK_IMPORTED_MODULE_7__["convertToSerializedVis"])(savedObject);
      const vis = new _vis__WEBPACK_IMPORTED_MODULE_4__["Vis"](savedObject.visState.type, visState);
      await vis.setState(visState);
      return Object(_create_vis_embeddable_from_object__WEBPACK_IMPORTED_MODULE_8__["createVisEmbeddableFromObject"])(this.deps)(vis, input, savedVisualizations, await this.getAttributeService(), parent);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
      return new _embeddable_public__WEBPACK_IMPORTED_MODULE_2__["ErrorEmbeddable"](e, input, parent);
    }
  }
  async create(input, parent) {
    // TODO: This is a bit of a hack to preserve the original functionality. Ideally we will clean this up
    // to allow for in place creation of visualizations without having to navigate away to a new URL.
    if (input.savedVis) {
      const visState = input.savedVis;
      const vis = new _vis__WEBPACK_IMPORTED_MODULE_4__["Vis"](visState.type, visState);
      await vis.setState(visState);
      const savedVisualizations = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getSavedVisualizationsLoader"])();
      return Object(_create_vis_embeddable_from_object__WEBPACK_IMPORTED_MODULE_8__["createVisEmbeddableFromObject"])(this.deps)(vis, input, savedVisualizations, await this.getAttributeService(), parent);
    } else {
      Object(_wizard__WEBPACK_IMPORTED_MODULE_6__["showNewVisModal"])({
        originatingApp: await this.getCurrentAppId(),
        outsideVisualizeApp: true
      });
      return undefined;
    }
  }
  async saveMethod(attributes) {
    try {
      var _visObj$data$searchSo;
      const {
        title,
        savedVis
      } = attributes;
      const visObj = attributes.vis;
      if (!savedVis) {
        throw new Error('No Saved Vis');
      }
      const saveOptions = {
        confirmOverwrite: false,
        returnToOrigin: true
      };
      savedVis.title = title;
      savedVis.copyOnSave = false;
      savedVis.description = '';
      savedVis.searchSourceFields = visObj === null || visObj === void 0 || (_visObj$data$searchSo = visObj.data.searchSource) === null || _visObj$data$searchSo === void 0 ? void 0 : _visObj$data$searchSo.getSerializedFields();
      const serializedVis = visObj.serialize();
      const {
        params,
        data
      } = serializedVis;
      savedVis.visState = {
        title,
        type: serializedVis.type,
        params,
        aggs: data.aggs
      };
      if (visObj) {
        savedVis.uiStateJSON = visObj === null || visObj === void 0 ? void 0 : visObj.uiState.toString();
      }
      const id = await savedVis.save(saveOptions);
      if (!id || id === '') {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.savingVisualizationFailed.errorMsg', {
          defaultMessage: 'Saving a visualization failed'
        }));
      }
      return {
        id
      };
    } catch (error) {
      throw error;
    }
  }
  async checkTitle(props) {
    const savedObjectsClient = await this.deps.start().core.savedObjects.client;
    const overlays = await this.deps.start().core.overlays;
    return Object(_saved_objects_public__WEBPACK_IMPORTED_MODULE_10__["checkForDuplicateTitle"])({
      title: props.newTitle,
      copyOnSave: false,
      lastSavedTitle: '',
      getOpenSearchType: () => this.type,
      getDisplayName: this.getDisplayName || (() => this.type)
    }, props.isTitleDuplicateConfirmed, props.onTitleDuplicate, {
      savedObjectsClient,
      overlays
    });
  }
}

/***/ }),

/***/ "./public/expression_functions/range.ts":
/*!**********************************************!*\
  !*** ./public/expression_functions/range.ts ***!
  \**********************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
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


const range = () => ({
  name: 'range',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.range.help', {
    defaultMessage: 'Generates range object'
  }),
  type: 'range',
  args: {
    from: {
      types: ['number'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.range.from.help', {
        defaultMessage: 'Start of range'
      }),
      required: true
    },
    to: {
      types: ['number'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.range.to.help', {
        defaultMessage: 'End of range'
      }),
      required: true
    }
  },
  fn: (context, args) => {
    return {
      type: 'range',
      from: args.from,
      to: args.to
    };
  }
});

/***/ }),

/***/ "./public/expression_functions/vis_dimension.ts":
/*!******************************************************!*\
  !*** ./public/expression_functions/vis_dimension.ts ***!
  \******************************************************/
/*! exports provided: visDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visDimension", function() { return visDimension; });
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


const visDimension = () => ({
  name: 'visdimension',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.visDimension.help', {
    defaultMessage: 'Generates visConfig dimension object'
  }),
  type: 'vis_dimension',
  inputTypes: ['opensearch_dashboards_datatable'],
  args: {
    accessor: {
      types: ['string', 'number'],
      aliases: ['_'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.visDimension.accessor.help', {
        defaultMessage: 'Column in your dataset to use (either column index or column name)'
      })
    },
    format: {
      types: ['string'],
      default: 'string',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.visDimension.format.help', {
        defaultMessage: 'Format'
      })
    },
    formatParams: {
      types: ['string'],
      default: '"{}"',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.visDimension.formatParams.help', {
        defaultMessage: 'Format params'
      })
    }
  },
  fn: (input, args) => {
    const accessor = typeof args.accessor === 'number' ? args.accessor : input.columns.find(c => c.id === args.accessor);
    if (accessor === undefined) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.function.visDimension.error.accessor', {
        defaultMessage: 'Column name provided is invalid'
      }));
    }
    return {
      type: 'vis_dimension',
      accessor,
      format: {
        id: args.format,
        params: JSON.parse(args.formatParams)
      }
    };
  }
});

/***/ }),

/***/ "./public/expressions/vis.ts":
/*!***********************************!*\
  !*** ./public/expressions/vis.ts ***!
  \***********************************/
/*! exports provided: ExprVis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExprVis", function() { return ExprVis; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins/visualizations/public */ "./public/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
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
 * @name Vis
 *
 * @description This class consists of aggs, params, listeners, title, and type.
 *  - Aggs: Instances of AggConfig.
 *  - Params: The settings in the Options tab.
 *
 * Not to be confused with vislib/vis.js.
 */





class ExprVis extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
  constructor(visState = {
    type: 'histogram'
  }) {
    super();
    _defineProperty(this, "title", '');
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "params", {});
    _defineProperty(this, "sessionState", {});
    _defineProperty(this, "API", void 0);
    _defineProperty(this, "eventsSubject", void 0);
    _defineProperty(this, "uiState", void 0);
    this.type = this.getType(visState.type);
    this.uiState = new _plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["PersistedState"]();
    this.setState(visState);
    this.API = {
      events: {
        filter: data => {
          if (!this.eventsSubject) return;
          this.eventsSubject.next({
            name: 'filterBucket',
            data: data.data ? {
              data: data.data,
              negate: data.negate
            } : {
              data: [data]
            }
          });
        },
        brush: data => {
          if (!this.eventsSubject) return;
          this.eventsSubject.next({
            name: 'brush',
            data
          });
        },
        applyFilter: data => {
          if (!this.eventsSubject) return;
          this.eventsSubject.next({
            name: 'applyFilter',
            data
          });
        },
        externalAction: data => {
          if (!this.eventsSubject) return;
          this.eventsSubject.next({
            name: 'externalAction',
            data
          });
        }
      }
    };
  }
  getType(type) {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isString(type)) {
      const newType = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getTypes"])().get(type);
      if (!newType) {
        throw new Error(`Invalid type "${type}"`);
      }
      return newType;
    } else {
      return type;
    }
  }
  setState(state) {
    this.title = state.title || '';
    if (state.type) {
      this.type = this.getType(state.type);
    }
    this.params = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep({}, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(state.params || {}), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.type.visConfig.defaults || {}));
  }
  getState() {
    return {
      title: this.title,
      type: this.type.name,
      params: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(this.params)
    };
  }
  updateState() {
    this.emit('update');
  }
  forceReload() {
    this.emit('reload');
  }
  isHierarchical() {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(this.type.hierarchicalData)) {
      return !!this.type.hierarchicalData(this);
    } else {
      return !!this.type.hierarchicalData;
    }
  }
  hasUiState() {
    return !!this.uiState;
  }
  getUiState() {
    return this.uiState;
  }
  setUiState(state) {
    this.uiState = state;
  }

  /**
   * Currently this is only used to extract map-specific information
   * (e.g. mapZoom, mapCenter).
   */
  uiStateVal(key, val) {
    if (this.hasUiState()) {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isUndefined(val)) {
        return this.uiState.get(key);
      }
      return this.uiState.set(key, val);
    }
    return val;
  }
}

/***/ }),

/***/ "./public/expressions/visualization_function.ts":
/*!******************************************************!*\
  !*** ./public/expressions/visualization_function.ts ***!
  \******************************************************/
/*! exports provided: visualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualization", function() { return visualization; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins/visualizations/public */ "./public/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./public/services.ts");
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





const visualization = () => ({
  name: 'visualization',
  type: 'render',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.functions.visualization.help', {
    defaultMessage: 'A simple visualization'
  }),
  args: {
    // TODO: Below `help` keys should be internationalized once this function
    // TODO: is moved to visualizations plugin.
    index: {
      types: ['string', 'null'],
      default: null,
      help: 'Index'
    },
    metricsAtAllLevels: {
      types: ['boolean'],
      default: false,
      help: 'Metrics levels'
    },
    partialRows: {
      types: ['boolean'],
      default: false,
      help: 'Partial rows'
    },
    type: {
      types: ['string'],
      default: '',
      help: 'Type'
    },
    schemas: {
      types: ['string'],
      default: '"{}"',
      help: 'Schemas'
    },
    visConfig: {
      types: ['string'],
      default: '"{}"',
      help: 'Visualization configuration'
    },
    uiState: {
      types: ['string'],
      default: '"{}"',
      help: 'User interface state'
    },
    aggConfigs: {
      types: ['string'],
      default: '"{}"',
      help: 'Aggregation configurations'
    }
  },
  async fn(input, args, {
    inspectorAdapters
  }) {
    const visConfigParams = args.visConfig ? JSON.parse(args.visConfig) : {};
    const schemas = args.schemas ? JSON.parse(args.schemas) : {};
    const visType = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getTypes"])().get(args.type || 'histogram');
    const indexPattern = args.index ? await Object(_services__WEBPACK_IMPORTED_MODULE_3__["getIndexPatterns"])().get(args.index) : null;
    const uiStateParams = args.uiState ? JSON.parse(args.uiState) : {};
    const uiState = new _plugins_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["PersistedState"](uiStateParams);
    const aggConfigsState = args.aggConfigs ? JSON.parse(args.aggConfigs) : [];
    const aggs = indexPattern ? Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSearch"])().aggs.createAggConfigs(indexPattern, aggConfigsState) : undefined;
    if (typeof visType.requestHandler === 'function') {
      input = await visType.requestHandler({
        partialRows: args.partialRows,
        metricsAtAllLevels: args.metricsAtAllLevels,
        index: indexPattern,
        visParams: visConfigParams,
        timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'timeRange', null),
        query: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'query', null),
        filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'filters', null),
        uiState,
        inspectorAdapters,
        queryFilter: Object(_services__WEBPACK_IMPORTED_MODULE_3__["getFilterManager"])(),
        aggs
      });
    }
    if (typeof visType.responseHandler === 'function') {
      if (input.columns) {
        // assign schemas to aggConfigs
        input.columns.forEach(column => {
          if (column.aggConfig) {
            column.aggConfig.aggConfigs.schemas = visType.schemas.all;
          }
        });
        Object.keys(schemas).forEach(key => {
          schemas[key].forEach(i => {
            if (input.columns[i] && input.columns[i].aggConfig) {
              input.columns[i].aggConfig.schema = key;
            }
          });
        });
      }
      input = await visType.responseHandler(input, visConfigParams.dimensions);
    }
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: input,
        visType: args.type || '',
        visConfig: visConfigParams
      }
    };
  }
});

/***/ }),

/***/ "./public/expressions/visualization_renderer.tsx":
/*!*******************************************************!*\
  !*** ./public/expressions/visualization_renderer.tsx ***!
  \*******************************************************/
/*! exports provided: visualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualization", function() { return visualization; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis */ "./public/expressions/vis.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./public/components/index.ts");
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


const visualization = () => ({
  name: 'visualization',
  displayName: 'visualization',
  reuseDomNode: true,
  render: async (domNode, config, handlers) => {
    const {
      visData,
      visConfig,
      params
    } = config;
    const visType = config.visType || visConfig.type;
    const vis = new _vis__WEBPACK_IMPORTED_MODULE_2__["ExprVis"]({
      title: config.title,
      type: visType,
      params: visConfig
    });
    vis.eventsSubject = {
      next: handlers.event
    };
    const uiState = handlers.uiState || vis.getUiState();
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    const listenOnChange = params ? params.listenOnChange : false;
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Visualization"], {
      vis: vis,
      visData: visData,
      visParams: vis.params,
      uiState: uiState,
      listenOnChange: listenOnChange,
      onInit: handlers.done
    }), domNode);
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
/*! exports provided: plugin, Vis, TypesService, VISUALIZE_EMBEDDABLE_TYPE, VIS_EVENT_TO_TRIGGER, VisualizeEmbeddable, DisabledLabEmbeddable, VisualizationContainer, VisualizationNoResults, getVisSchemas, buildVislibDimensions, VislibDimensions, VisualizationsSetup, VisualizationsStart, VisTypeAlias, VisType, BaseVisTypeOptions, ReactVisTypeOptions, VisParams, SerializedVis, SerializedVisData, VisData, VisualizeInput, SchemaConfig, BuildPipelineParams, updateOldState, PersistedState, VisualizationController, SavedVisState, ISavedVis, VisSavedObject, VisResponseValue, ExprVisAPIEvents, VisualizationListItem, VISUALIZE_ENABLE_LABS_SETTING, createSavedVisLoader, prepareJson, buildPipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationsSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisualizationsSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationsStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisualizationsStart"]; });

/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis */ "./public/vis.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vis", function() { return _vis__WEBPACK_IMPORTED_MODULE_1__["Vis"]; });

/* harmony import */ var _vis_types_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vis_types/types_service */ "./public/vis_types/types_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return _vis_types_types_service__WEBPACK_IMPORTED_MODULE_2__["TypesService"]; });

/* harmony import */ var _embeddable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embeddable */ "./public/embeddable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_EMBEDDABLE_TYPE", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_3__["VISUALIZE_EMBEDDABLE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIS_EVENT_TO_TRIGGER", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_3__["VIS_EVENT_TO_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeEmbeddable", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_3__["VisualizeEmbeddable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisabledLabEmbeddable", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_3__["DisabledLabEmbeddable"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./public/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationContainer", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["VisualizationContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationNoResults", function() { return _components__WEBPACK_IMPORTED_MODULE_4__["VisualizationNoResults"]; });

/* harmony import */ var _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy/build_pipeline */ "./public/legacy/build_pipeline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisSchemas", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["getSchemas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildVislibDimensions", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["buildVislibDimensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VislibDimensions", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["VislibDimensions"]; });

/* harmony import */ var _vis_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis_types */ "./public/vis_types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisTypeAlias", function() { return _vis_types__WEBPACK_IMPORTED_MODULE_6__["VisTypeAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisType", function() { return _vis_types__WEBPACK_IMPORTED_MODULE_6__["VisType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseVisTypeOptions", function() { return _vis_types__WEBPACK_IMPORTED_MODULE_6__["BaseVisTypeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactVisTypeOptions", function() { return _vis_types__WEBPACK_IMPORTED_MODULE_6__["ReactVisTypeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisParams", function() { return _vis__WEBPACK_IMPORTED_MODULE_1__["VisParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedVis", function() { return _vis__WEBPACK_IMPORTED_MODULE_1__["SerializedVis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedVisData", function() { return _vis__WEBPACK_IMPORTED_MODULE_1__["SerializedVisData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisData", function() { return _vis__WEBPACK_IMPORTED_MODULE_1__["VisData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeInput", function() { return _embeddable__WEBPACK_IMPORTED_MODULE_3__["VisualizeInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaConfig", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["SchemaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildPipelineParams", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["BuildPipelineParams"]; });

/* harmony import */ var _legacy_vis_update_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./legacy/vis_update_state */ "./public/legacy/vis_update_state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateOldState", function() { return _legacy_vis_update_state__WEBPACK_IMPORTED_MODULE_7__["updateOldState"]; });

/* harmony import */ var _persisted_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./persisted_state */ "./public/persisted_state/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistedState", function() { return _persisted_state__WEBPACK_IMPORTED_MODULE_8__["PersistedState"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationController", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["VisualizationController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedVisState", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["SavedVisState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISavedVis", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["ISavedVis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisSavedObject", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["VisSavedObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisResponseValue", function() { return _types__WEBPACK_IMPORTED_MODULE_9__["VisResponseValue"]; });

/* harmony import */ var _expressions_vis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expressions/vis */ "./public/expressions/vis.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExprVisAPIEvents", function() { return _expressions_vis__WEBPACK_IMPORTED_MODULE_10__["ExprVisAPIEvents"]; });

/* harmony import */ var _vis_types_vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vis_types/vis_type_alias_registry */ "./public/vis_types/vis_type_alias_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizationListItem", function() { return _vis_types_vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_11__["VisualizationListItem"]; });

/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_ENABLE_LABS_SETTING", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_12__["VISUALIZE_ENABLE_LABS_SETTING"]; });

/* harmony import */ var _saved_visualizations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./saved_visualizations */ "./public/saved_visualizations/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedVisLoader", function() { return _saved_visualizations__WEBPACK_IMPORTED_MODULE_13__["createSavedVisLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepareJson", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["prepareJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildPipeline", function() { return _legacy_build_pipeline__WEBPACK_IMPORTED_MODULE_5__["buildPipeline"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["VisualizationsPlugin"](initializerContext);
}

/** @public static code */






/** @public types */





// @ts-ignore









/***/ }),

/***/ "./public/legacy/build_pipeline.ts":
/*!*****************************************!*\
  !*** ./public/legacy/build_pipeline.ts ***!
  \*****************************************/
/*! exports provided: getSchemas, prepareJson, escapeString, prepareString, prepareValue, prepareDimension, buildPipelineVisFunction, buildVislibDimensions, buildPipeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemas", function() { return getSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareJson", function() { return prepareJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeString", function() { return escapeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareString", function() { return prepareString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareValue", function() { return prepareValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareDimension", function() { return prepareDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPipelineVisFunction", function() { return buildPipelineVisFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildVislibDimensions", function() { return buildVislibDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPipeline", function() { return buildPipeline; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_expressions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins/expressions/public */ "plugin/expressions/public");
/* harmony import */ var _plugins_expressions_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../plugins/data/public */ "plugin/data/public");
/* harmony import */ var _plugins_data_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugins_data_public__WEBPACK_IMPORTED_MODULE_3__);
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
  isDateHistogramBucketAggConfig
} = _plugins_data_public__WEBPACK_IMPORTED_MODULE_3__["search"].aggs;

// eslint-disable-next-line @typescript-eslint/naming-convention

const vislibCharts = ['area', 'gauge', 'goal', 'heatmap', 'histogram', 'horizontal_bar', 'line'];
const getSchemas = (vis, {
  timeRange,
  timefilter
}) => {
  const createSchemaConfig = (accessor, agg) => {
    if (isDateHistogramBucketAggConfig(agg)) {
      agg.params.timeRange = timeRange;
      const bounds = agg.params.timeRange && agg.fieldIsTimeField() ? timefilter.calculateBounds(agg.params.timeRange) : undefined;
      agg.buckets.setBounds(bounds);
      agg.buckets.setInterval(agg.params.interval);
    }
    const hasSubAgg = ['derivative', 'moving_avg', 'serial_diff', 'cumulative_sum', 'sum_bucket', 'avg_bucket', 'min_bucket', 'max_bucket'].includes(agg.type.name);
    const formatAgg = hasSubAgg ? agg.params.customMetric || agg.aggConfigs.getRequestAggById(agg.params.metricAgg) : agg;
    const params = {};
    if (agg.type.name === 'geohash_grid') {
      params.precision = agg.params.precision;
      params.useGeocentroid = agg.params.useGeocentroid;
    }
    const label = agg.makeLabel && agg.makeLabel();
    return {
      accessor,
      format: formatAgg.toSerializedFieldFormat(),
      params,
      label,
      aggType: agg.type.name
    };
  };
  let cnt = 0;
  const schemas = {
    metric: []
  };
  if (!vis.data.aggs) {
    return schemas;
  }
  const responseAggs = vis.data.aggs.getResponseAggs().filter(agg => agg.enabled);
  const isHierarchical = vis.isHierarchical();
  const metrics = responseAggs.filter(agg => agg.type.type === 'metrics');
  responseAggs.forEach(agg => {
    let skipMetrics = false;
    let schemaName = agg.schema;
    if (!schemaName) {
      if (agg.type.name === 'geo_centroid') {
        schemaName = 'geo_centroid';
      } else {
        cnt++;
        return;
      }
    }
    if (schemaName === 'split') {
      // TODO: We should check if there's a better way then casting to `any` here
      schemaName = `split_${vis.params.row ? 'row' : 'column'}`;
      skipMetrics = responseAggs.length - metrics.length > 1;
    }
    if (!schemas[schemaName]) {
      schemas[schemaName] = [];
    }
    if (!isHierarchical || agg.type.type !== 'metrics') {
      schemas[schemaName].push(createSchemaConfig(cnt++, agg));
    }
    if (isHierarchical && (agg.type.type !== 'metrics' || metrics.length === responseAggs.length)) {
      metrics.forEach(metric => {
        const schemaConfig = createSchemaConfig(cnt++, metric);
        if (!skipMetrics) {
          schemas.metric.push(schemaConfig);
        }
      });
    }
  });
  return schemas;
};
const prepareJson = (variable, data) => {
  if (data === undefined) {
    return '';
  }
  return `${variable}='${JSON.stringify(data).replace(/\\/g, `\\\\`).replace(/'/g, `\\'`)}' `;
};
const escapeString = data => {
  return data.replace(/\\/g, `\\\\`).replace(/'/g, `\\'`);
};
const prepareString = (variable, data) => {
  if (data === undefined) {
    return '';
  }
  return `${variable}='${escapeString(data)}' `;
};
const prepareValue = (variable, data, raw = false) => {
  if (data === undefined) {
    return '';
  }
  if (raw) {
    return `${variable}=${data} `;
  }
  switch (typeof data) {
    case 'string':
      return prepareString(variable, data);
    case 'object':
      return prepareJson(variable, data);
    default:
      return `${variable}=${data} `;
  }
};
const prepareDimension = (variable, data) => {
  if (data === undefined) {
    return '';
  }
  let expr = `${variable}={visdimension ${data.accessor} `;
  if (data.format) {
    expr += prepareValue('format', data.format.id);
    expr += prepareJson('formatParams', data.format.params);
  }
  expr += '} ';
  return expr;
};
const adjustVislibDimensionFormmaters = (vis, dimensions) => {
  const visConfig = vis.params;
  const responseAggs = vis.data.aggs.getResponseAggs().filter(agg => agg.enabled);
  (dimensions.y || []).forEach(yDimension => {
    const yAgg = responseAggs[yDimension.accessor];
    const seriesParam = (visConfig.seriesParams || []).find(param => param.data.id === yAgg.id);
    if (seriesParam) {
      const usedValueAxis = (visConfig.valueAxes || []).find(valueAxis => valueAxis.id === seriesParam.valueAxis);
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(usedValueAxis, 'scale.mode') === 'percentage') {
        yDimension.format = {
          id: 'percent'
        };
      }
    }
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(visConfig, 'gauge.percentageMode') === true) {
      yDimension.format = {
        id: 'percent'
      };
    }
  });
};
const buildPipelineVisFunction = {
  vega: params => {
    return `vega ${prepareString('spec', params.spec)}`;
  },
  input_control_vis: params => {
    return `input_control_vis ${prepareJson('visConfig', params)}`;
  },
  metrics: ({
    title,
    ...params
  }, schemas, uiState = {}) => {
    const paramsJson = prepareJson('params', params);
    const uiStateJson = prepareJson('uiState', uiState);
    const paramsArray = [paramsJson, uiStateJson].filter(param => Boolean(param));
    return `tsvb ${paramsArray.join(' ')}`;
  },
  region_map: (params, schemas) => {
    const visConfig = {
      ...params,
      ...buildVisConfig.region_map(schemas)
    };
    return `regionmap ${prepareJson('visConfig', visConfig)}`;
  },
  tile_map: (params, schemas) => {
    const visConfig = {
      ...params,
      ...buildVisConfig.tile_map(schemas)
    };
    return `tilemap ${prepareJson('visConfig', visConfig)}`;
  },
  pie: (params, schemas) => {
    const visConfig = {
      ...params,
      ...buildVisConfig.pie(schemas)
    };
    return `opensearch_dashboards_pie ${prepareJson('visConfig', visConfig)}`;
  }
};
const buildVisConfig = {
  region_map: schemas => {
    const visConfig = {};
    visConfig.metric = schemas.metric[0];
    if (schemas.segment) {
      visConfig.bucket = schemas.segment[0];
    }
    return visConfig;
  },
  tile_map: schemas => {
    const visConfig = {};
    visConfig.dimensions = {
      metric: schemas.metric[0],
      geohash: schemas.segment ? schemas.segment[0] : null,
      geocentroid: schemas.geo_centroid ? schemas.geo_centroid[0] : null
    };
    return visConfig;
  },
  pie: schemas => {
    const visConfig = {};
    visConfig.dimensions = {
      metric: schemas.metric[0],
      buckets: schemas.segment,
      splitRow: schemas.split_row,
      splitColumn: schemas.split_column
    };
    return visConfig;
  }
};
const buildVislibDimensions = async (vis, params) => {
  const schemas = getSchemas(vis, {
    timeRange: params.timeRange,
    timefilter: params.timefilter
  });
  const dimensions = {
    x: schemas.segment ? schemas.segment[0] : null,
    y: schemas.metric,
    z: schemas.radius,
    width: schemas.width,
    series: schemas.group,
    splitRow: schemas.split_row,
    splitColumn: schemas.split_column
  };
  if (schemas.segment) {
    const a = vis.data.aggs.getResponseAggs();
    const xAgg = a[dimensions.x.accessor];
    if (xAgg.type.name === 'date_histogram') {
      dimensions.x.params.date = true;
      const {
        opensearchUnit,
        opensearchValue
      } = xAgg.buckets.getInterval();
      dimensions.x.params.interval = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(opensearchValue, opensearchUnit);
      dimensions.x.params.intervalESValue = opensearchValue;
      dimensions.x.params.intervalESUnit = opensearchUnit;
      dimensions.x.params.format = xAgg.buckets.getScaledDateFormat();
      dimensions.x.params.bounds = xAgg.buckets.getBounds();
    } else if (xAgg.type.name === 'histogram') {
      const intervalParam = xAgg.type.paramByName('interval');
      const output = {
        params: {}
      };
      await intervalParam.modifyAggConfigOnSearchRequestStart(xAgg, vis.data.searchSource, {
        abortSignal: params.abortSignal
      });
      intervalParam.write(xAgg, output);
      dimensions.x.params.interval = output.params.interval;
    }
  }
  adjustVislibDimensionFormmaters(vis, dimensions);
  return dimensions;
};
const buildPipeline = async (vis, params) => {
  const {
    indexPattern,
    searchSource
  } = vis.data;
  const query = searchSource === null || searchSource === void 0 ? void 0 : searchSource.getField('query');
  const filters = searchSource === null || searchSource === void 0 ? void 0 : searchSource.getField('filter');
  const {
    uiState,
    title
  } = vis;

  // context
  let pipeline = `opensearchDashboards | opensearch_dashboards_context `;
  if (query) {
    pipeline += prepareJson('query', query);
  }
  if (filters) {
    pipeline += prepareJson('filters', filters);
  }
  if (vis.data.savedSearchId) {
    pipeline += prepareString('savedSearchId', vis.data.savedSearchId);
  }
  pipeline += '| ';
  if (vis.type.toExpressionAst) {
    const visAst = await vis.type.toExpressionAst(vis, params);
    pipeline += Object(_plugins_expressions_public__WEBPACK_IMPORTED_MODULE_2__["formatExpression"])(visAst);
  } else {
    // request handler
    if (vis.type.requestHandler === 'courier') {
      pipeline += `opensearchaggs
        ${prepareString('index', indexPattern.id)}
        metricsAtAllLevels=${vis.isHierarchical()}
        partialRows=${vis.params.showPartialRows || false}
        ${prepareJson('aggConfigs', vis.data.aggs.aggs)} | `;
    }
    const schemas = getSchemas(vis, params);
    if (buildPipelineVisFunction[vis.type.name]) {
      pipeline += buildPipelineVisFunction[vis.type.name]({
        title,
        ...vis.params
      }, schemas, uiState);
    } else if (vislibCharts.includes(vis.type.name)) {
      const visConfig = {
        ...vis.params
      };
      visConfig.dimensions = await buildVislibDimensions(vis, params);
      pipeline += `vislib type='${vis.type.name}' ${prepareJson('visConfig', visConfig)}`;
    } else {
      const visConfig = {
        ...vis.params
      };
      visConfig.dimensions = schemas;
      visConfig.title = title;
      pipeline += `visualization type='${vis.type.name}'
    ${prepareJson('visConfig', visConfig)}
    ${prepareJson('uiState', uiState)}
    metricsAtAllLevels=${vis.isHierarchical()}
    partialRows=${vis.params.showPartialRows || false} `;
      if (indexPattern) {
        pipeline += `${prepareString('index', indexPattern.id)} `;
        if (vis.data.aggs) {
          pipeline += `${prepareJson('aggConfigs', vis.data.aggs.aggs)}`;
        }
      }
    }
  }
  return pipeline;
};

/***/ }),

/***/ "./public/legacy/memoize.ts":
/*!**********************************!*\
  !*** ./public/legacy/memoize.ts ***!
  \**********************************/
/*! exports provided: memoizeLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeLast", function() { return memoizeLast; });
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

// A symbol expressing, that the memoized function has never been called
const neverCalled = Symbol();
/**
 * A simple memoize function, that only stores the last returned value
 * and uses the identity of all passed parameters as a cache key.
 */
function memoizeLast(func) {
  let prevCall = neverCalled;

  // We need to use a `function` here for proper this passing.
  const memoizedFunction = function (...args) {
    if (prevCall !== neverCalled && prevCall.this === this && prevCall.args.length === args.length && prevCall.args.every((arg, index) => arg === args[index])) {
      return prevCall.returnValue;
    }
    prevCall = {
      args,
      this: this,
      returnValue: func.apply(this, args)
    };
    return prevCall.returnValue;
  };
  return memoizedFunction;
}


/***/ }),

/***/ "./public/legacy/vis_update_state.js":
/*!*******************************************!*\
  !*** ./public/legacy/vis_update_state.js ***!
  \*******************************************/
/*! exports provided: updateOldState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOldState", function() { return updateOldState; });
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
 * Will figure out if an heatmap state was saved before the auto coloring
 * feature of heatmaps was created. If so it will set the overwriteColor flag
 * for the label to true if labels are enabled and a non default color has been used.
 * So that those earlier created heatmaps will still use the manual specified color.
 */
function convertHeatmapLabelColor(visState) {
  const hasOverwriteColorParam = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState, 'params.valueAxes[0].labels.overwriteColor') !== undefined;
  if (visState.type === 'heatmap' && visState.params && !hasOverwriteColorParam) {
    const showLabels = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState, 'params.valueAxes[0].labels.show', false);
    const color = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState, 'params.valueAxes[0].labels.color', '#555');
    Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__["set"])(visState, 'params.valueAxes[0].labels.overwriteColor', showLabels && color !== '#555');
  }
}

/**
 * Update old terms aggregation format to new terms aggregation format. This will
 * update the following things:
 * - Rewrite orderBy: _term to orderBy: _key (new API in OpenSearch)
 */
function convertTermAggregation(visState) {
  if (visState.aggs) {
    visState.aggs.forEach(agg => {
      if (agg.type === 'terms' && agg.params && agg.params.orderBy === '_term') {
        agg.params.orderBy = '_key';
      }
    });
  }
}
function convertPropertyNames(visState) {
  // 'showMeticsAtAllLevels' is a legacy typo we'll fix by changing it to 'showMetricsAtAllLevels'.
  if (typeof lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState, 'params.showMeticsAtAllLevels') === 'boolean') {
    visState.params.showMetricsAtAllLevels = visState.params.showMeticsAtAllLevels;
    delete visState.params.showMeticsAtAllLevels;
  }
}
function convertDateHistogramScaleMetrics(visState) {
  if (visState.aggs) {
    visState.aggs.forEach(agg => {
      if (agg.type === 'date_histogram' && agg.params && agg.params.interval !== 'auto' && agg.params.scaleMetricValues === undefined) {
        // Set scaleMetricValues to true for existing date histograms, that haven't had it defined and used an interval that's not equal auto,
        // so that we keep the previous metric scaling example for existing visualizations that might be effected.
        agg.params.scaleMetricValues = true;
      }
    });
  }
}
function convertSeriesParams(visState) {
  if (visState.params.seriesParams) {
    return;
  }

  // update value axis options
  const isUserDefinedYAxis = visState.params.setYExtents;
  const defaultYExtents = visState.params.defaultYExtents;
  const mode = ['stacked', 'overlap'].includes(visState.params.mode) ? 'normal' : visState.params.mode || 'normal';
  if (!visState.params.valueAxes || !visState.params.valueAxes.length) {
    visState.params.valueAxes = [{
      id: 'ValueAxis-1',
      name: 'LeftAxis-1',
      type: 'value',
      position: 'left',
      show: true,
      style: {},
      scale: {
        type: 'linear',
        mode: 'normal'
      },
      labels: {
        show: true,
        rotate: 0,
        filter: false,
        truncate: 100
      },
      title: {
        text: 'Count'
      }
    }];
  }
  visState.params.valueAxes[0].scale = {
    ...visState.params.valueAxes[0].scale,
    type: visState.params.scale || 'linear',
    setYExtents: visState.params.setYExtents || false,
    defaultYExtents: visState.params.defaultYExtents || false,
    boundsMargin: defaultYExtents ? visState.params.boundsMargin : 0,
    min: isUserDefinedYAxis ? visState.params.yAxis.min : undefined,
    max: isUserDefinedYAxis ? visState.params.yAxis.max : undefined,
    mode: mode
  };

  // update series options
  const interpolate = visState.params.smoothLines ? 'cardinal' : visState.params.interpolate;
  const stacked = ['stacked', 'percentage', 'wiggle', 'silhouette'].includes(visState.params.mode);
  visState.params.seriesParams = [{
    show: true,
    type: visState.params.type || 'line',
    mode: stacked ? 'stacked' : 'normal',
    interpolate: interpolate,
    drawLinesBetweenPoints: visState.params.drawLinesBetweenPoints,
    showCircles: visState.params.showCircles,
    radiusRatio: visState.params.radiusRatio,
    data: {
      label: 'Count',
      id: '1'
    },
    lineWidth: 2,
    valueAxis: 'ValueAxis-1'
  }];
}

/**
 * This function is responsible for updating old visStates - the actual saved object
 * object - into the format, that will be required by the current OpenSearch Dashboards version.
 * This method will be executed for each saved vis object, that will be loaded.
 * It will return the updated version as OpenSearch Dashboards would expect it. It does not modify
 * the passed state.
 */
const updateOldState = visState => {
  if (!visState) return visState;
  const newState = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(visState);
  convertTermAggregation(newState);
  convertPropertyNames(newState);
  convertDateHistogramScaleMetrics(newState);
  if (visState.params && ['line', 'area', 'histogram'].includes(visState.params.type)) {
    convertSeriesParams(newState);
  }
  if (visState.type === 'gauge' && visState.fontSize) {
    delete newState.fontSize;
    Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__["set"])(newState, 'gauge.style.fontSize', visState.fontSize);
  }

  // update old metric to the new one
  // Changed from 6.0 -> 6.1
  if (['gauge', 'metric'].includes(visState.type) && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState.params, 'gauge.gaugeType', null) === 'Metric') {
    newState.type = 'metric';
    newState.params.addLegend = false;
    newState.params.type = 'metric';
    newState.params.metric = newState.params.gauge;
    delete newState.params.gauge;
    delete newState.params.metric.gaugeType;
    delete newState.params.metric.gaugeStyle;
    delete newState.params.metric.backStyle;
    delete newState.params.metric.scale;
    delete newState.params.metric.type;
    delete newState.params.metric.orientation;
    delete newState.params.metric.verticalSplit;
    delete newState.params.metric.autoExtend;
    newState.params.metric.metricColorMode = newState.params.metric.gaugeColorMode;
    delete newState.params.metric.gaugeColorMode;
  } else if (visState.type === 'metric' && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(visState.params, 'gauge.gaugeType', 'Metric') !== 'Metric') {
    newState.type = 'gauge';
    newState.params.type = 'gauge';
  }
  convertHeatmapLabelColor(newState);
  return newState;
};

/***/ }),

/***/ "./public/persisted_state/index.ts":
/*!*****************************************!*\
  !*** ./public/persisted_state/index.ts ***!
  \*****************************************/
/*! exports provided: PersistedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _persisted_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persisted_state */ "./public/persisted_state/persisted_state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistedState", function() { return _persisted_state__WEBPACK_IMPORTED_MODULE_0__["PersistedState"]; });

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

/***/ "./public/persisted_state/persisted_state.ts":
/*!***************************************************!*\
  !*** ./public/persisted_state/persisted_state.ts ***!
  \***************************************************/
/*! exports provided: PersistedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistedState", function() { return PersistedState; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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




function prepSetParams(key, value, path) {
  // key must be the value, set the entire state using it
  if (value === undefined && (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(key) || path.length > 0)) {
    // setting entire tree, swap the key and value to write to the state
    value = key;
    key = undefined;
  }

  // ensure the value being passed in is never mutated
  return {
    value: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(value),
    key
  };
}
class PersistedState extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
  constructor(value, path) {
    super();
    _defineProperty(this, "_path", void 0);
    _defineProperty(this, "_initialized", void 0);
    _defineProperty(this, "_changedState", void 0);
    _defineProperty(this, "_defaultState", void 0);
    _defineProperty(this, "_mergedState", void 0);
    this._path = this.setPath(path);

    // Some validations
    if (!this._path.length && value && !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(value)) {
      throw new Error('State value must be a plain object');
    }
    value = value || this.getDefault();

    // copy passed state values and create internal trackers
    this.set(value);
    this._initialized = true; // used to track state changes
  }

  get(key, defaultValue) {
    // no path and no key, get the whole state
    if (!this.hasPath() && key === undefined) {
      return this._mergedState;
    }
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this._mergedState, this.getIndex(key || ''), defaultValue));
  }
  set(key, value) {
    const params = prepSetParams(key, value, this._path);
    const val = this.setValue(params.key, params.value);
    this.emit('set');
    return val;
  }
  setSilent(key, value) {
    const params = prepSetParams(key, value, this._path);
    if (params.key || params.value) {
      return this.setValue(params.key, params.value, true);
    }
  }
  clearAllKeys() {
    Object.getOwnPropertyNames(this._changedState).forEach(key => {
      this.set(key, null);
    });
  }
  reset(path) {
    const keyPath = this.getIndex(path);
    const origValue = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this._defaultState, keyPath);
    const currentValue = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this._mergedState, keyPath);
    if (origValue === undefined) {
      this.cleanPath(path, this._mergedState);
    } else {
      Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__["set"])(this._mergedState, keyPath, origValue);
    }

    // clean up the changedState tree
    this.cleanPath(path, this._changedState);
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(currentValue, origValue)) this.emit('change');
  }
  getChanges() {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._changedState);
  }
  toJSON() {
    return this.get();
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  fromString(input) {
    return this.set(JSON.parse(input));
  }
  getIndex(key) {
    if (key === undefined) return this._path;
    return [...(this._path || []), ...Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toPath"])(key)];
  }
  getPartialIndex(key) {
    const keyPath = this.getIndex(key);
    return keyPath.slice(this._path.length);
  }
  cleanPath(path, stateTree) {
    const partialPath = this.getPartialIndex(path);
    let remove = true;
    if (Array.isArray(partialPath)) {
      // recursively delete value tree, when no other keys exist
      while (partialPath.length > 0) {
        const lastKey = partialPath.splice(partialPath.length - 1, 1)[0];
        const statePath = [...this._path, partialPath];
        const stateVal = statePath.length > 0 ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(stateTree, statePath) : stateTree;

        // if stateVal isn't an object, do nothing
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(stateVal)) return;
        if (remove) delete stateVal[lastKey];
        if (Object.keys(stateVal).length > 0) remove = false;
      }
    }
  }
  getDefault() {
    return this.hasPath() ? undefined : {};
  }
  setPath(path) {
    if (Array.isArray(path)) {
      return path;
    }
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(path)) {
      return [...this.getIndex(path)];
    }
    return [];
  }
  hasPath() {
    return this._path.length > 0;
  }
  setValue(key, value, silent = false) {
    const self = this;
    let stateChanged = false;
    const initialState = !this._initialized;
    const keyPath = this.getIndex(key);
    const hasKeyPath = keyPath.length > 0;

    // if this is the initial state value, save value as the default
    if (initialState) {
      this._changedState = {};
      if (!this.hasPath() && key === undefined) this._defaultState = value;else this._defaultState = Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__["set"])({}, keyPath, value);
    }
    if (!initialState) {
      // no path and no key, set the whole state
      if (!this.hasPath() && key === undefined) {
        // compare changedState and new state, emit an event when different
        stateChanged = !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(this._changedState, value);
        this._changedState = value;
        this._mergedState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(value);
      } else {
        // check for changes at path, emit an event when different
        const curVal = hasKeyPath ? this.get(keyPath) : this._mergedState;
        stateChanged = !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(curVal, value);

        // arrays are merge by index, not desired - ensure they are replaced
        if (Array.isArray(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this._mergedState, keyPath))) {
          if (hasKeyPath) {
            Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__["set"])(this._mergedState, keyPath, undefined);
          } else {
            this._mergedState = undefined;
          }
        }
        if (hasKeyPath) {
          Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__["set"])(this._changedState, keyPath, value);
        } else {
          this._changedState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(value) ? value : {};
        }
      }
    }

    // update the merged state value
    const targetObj = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._mergedState) || Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this._defaultState);
    const sourceObj = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])({}, this._changedState);

    // handler arguments are (targetValue, sourceValue, key, target, source)
    const mergeMethod = function (targetValue, sourceValue, mergeKey) {
      // if not initial state, skip default merge method (ie. return value, see note below)
      if (!initialState && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(keyPath, self.getIndex(mergeKey))) {
        // use the sourceValue or fall back to targetValue
        return sourceValue === undefined ? targetValue : sourceValue;
      }
    };

    // If `mergeMethod` is provided it is invoked to produce the merged values of the
    // destination and source properties.
    // If `mergeMethod` returns `undefined` the default merging method is used
    this._mergedState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mergeWith"])(targetObj, sourceObj, mergeMethod);

    // sanity check; verify that there are actually changes
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(this._mergedState, this._defaultState)) this._changedState = {};
    if (!silent && stateChanged) this.emit('change', key);
    return this;
  }
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: VisualizationsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationsPlugin", function() { return VisualizationsPlugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis_types */ "./public/vis_types/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _embeddable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embeddable */ "./public/embeddable/index.ts");
/* harmony import */ var _expressions_visualization_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expressions/visualization_function */ "./public/expressions/visualization_function.ts");
/* harmony import */ var _expressions_visualization_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expressions/visualization_renderer */ "./public/expressions/visualization_renderer.tsx");
/* harmony import */ var _expression_functions_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expression_functions/range */ "./public/expression_functions/range.ts");
/* harmony import */ var _expression_functions_vis_dimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expression_functions/vis_dimension */ "./public/expression_functions/vis_dimension.ts");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _saved_visualizations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saved_visualizations */ "./public/saved_visualizations/index.ts");
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vis */ "./public/vis.ts");
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard */ "./public/wizard/index.ts");
/* harmony import */ var _saved_visualizations_saved_vis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./saved_visualizations/_saved_vis */ "./public/saved_visualizations/_saved_vis.ts");
/* harmony import */ var _discover_public__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../discover/public */ "plugin/discover/public");
/* harmony import */ var _discover_public__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_discover_public__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_14__);
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
 * Interface for this plugin's returned setup/start contracts.
 *
 * @public
 */

/**
 * Visualizations Plugin - public
 *
 * This plugin's stateful contracts are returned from the `setup` and `start` methods
 * below. The interfaces for these contracts are provided above.
 *
 * @internal
 */
class VisualizationsPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "types", new _vis_types__WEBPACK_IMPORTED_MODULE_1__["TypesService"]());
    _defineProperty(this, "getStartServicesOrDie", void 0);
  }
  setup(core, {
    expressions,
    embeddable,
    usageCollection,
    data
  }) {
    const start = this.getStartServicesOrDie = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_8__["createStartServicesGetter"])(core.getStartServices);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setUISettings"])(core.uiSettings);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setUsageCollector"])(usageCollection);
    expressions.registerFunction(_expressions_visualization_function__WEBPACK_IMPORTED_MODULE_4__["visualization"]);
    expressions.registerRenderer(_expressions_visualization_renderer__WEBPACK_IMPORTED_MODULE_5__["visualization"]);
    expressions.registerFunction(_expression_functions_range__WEBPACK_IMPORTED_MODULE_6__["range"]);
    expressions.registerFunction(_expression_functions_vis_dimension__WEBPACK_IMPORTED_MODULE_7__["visDimension"]);
    const embeddableFactory = new _embeddable__WEBPACK_IMPORTED_MODULE_3__["VisualizeEmbeddableFactory"]({
      start
    });
    embeddable.registerEmbeddableFactory(_embeddable__WEBPACK_IMPORTED_MODULE_3__["VISUALIZE_EMBEDDABLE_TYPE"], embeddableFactory);
    return {
      ...this.types.setup()
    };
  }
  start(core, {
    data,
    expressions,
    uiActions,
    embeddable,
    dashboard
  }) {
    const types = this.types.start();
    const savedAugmentVisLoader = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_14__["createSavedAugmentVisLoader"])({
      savedObjectsClient: core.savedObjects.client,
      indexPatterns: data.indexPatterns,
      search: data.search,
      chrome: core.chrome,
      overlays: core.overlays
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setDataStart"])(data);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setSavedAugmentVisLoader"])(savedAugmentVisLoader);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setI18n"])(core.i18n);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setTypes"])(types);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setEmbeddable"])(embeddable);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setApplication"])(core.application);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setCapabilities"])(core.application.capabilities);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setHttp"])(core.http);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setSavedObjects"])(core.savedObjects);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setIndexPatterns"])(data.indexPatterns);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setSearch"])(data.search);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setFilterManager"])(data.query.filterManager);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setExpressions"])(expressions);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setUiActions"])(uiActions);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setTimeFilter"])(data.query.timefilter.timefilter);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setAggs"])(data.search.aggs);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setOverlays"])(core.overlays);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setChrome"])(core.chrome);
    const savedVisualizationsLoader = Object(_saved_visualizations__WEBPACK_IMPORTED_MODULE_9__["createSavedVisLoader"])({
      savedObjectsClient: core.savedObjects.client,
      indexPatterns: data.indexPatterns,
      search: data.search,
      chrome: core.chrome,
      overlays: core.overlays,
      visualizationTypes: types
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setSavedVisualizationsLoader"])(savedVisualizationsLoader);
    const savedSearchLoader = Object(_discover_public__WEBPACK_IMPORTED_MODULE_13__["createSavedSearchesLoader"])({
      savedObjectsClient: core.savedObjects.client,
      indexPatterns: data.indexPatterns,
      search: data.search,
      chrome: core.chrome,
      overlays: core.overlays
    });
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setSavedSearchLoader"])(savedSearchLoader);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setNotifications"])(core.notifications);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setDocLinks"])(core.docLinks);
    return {
      ...types,
      showNewVisModal: _wizard__WEBPACK_IMPORTED_MODULE_11__["showNewVisModal"],
      /**
       * creates new instance of Vis
       * @param {IIndexPattern} indexPattern - index pattern to use
       * @param {VisState} visState - visualization configuration
       */
      createVis: async (visType, visState) => {
        const vis = new _vis__WEBPACK_IMPORTED_MODULE_10__["Vis"](visType);
        await vis.setState(visState);
        return vis;
      },
      convertToSerializedVis: _saved_visualizations_saved_vis__WEBPACK_IMPORTED_MODULE_12__["convertToSerializedVis"],
      convertFromSerializedVis: _saved_visualizations_saved_vis__WEBPACK_IMPORTED_MODULE_12__["convertFromSerializedVis"],
      savedVisualizationsLoader,
      __LEGACY: {
        createVisEmbeddableFromObject: Object(_embeddable__WEBPACK_IMPORTED_MODULE_3__["createVisEmbeddableFromObject"])({
          start: this.getStartServicesOrDie
        })
      }
    };
  }
  stop() {
    this.types.stop();
  }
}

/***/ }),

/***/ "./public/saved_visualizations/_saved_vis.ts":
/*!***************************************************!*\
  !*** ./public/saved_visualizations/_saved_vis.ts ***!
  \***************************************************/
/*! exports provided: convertToSerializedVis, convertFromSerializedVis, createSavedVisClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToSerializedVis", function() { return convertToSerializedVis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromSerializedVis", function() { return convertFromSerializedVis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedVisClass", function() { return createSavedVisClass; });
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legacy_vis_update_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legacy/vis_update_state */ "./public/legacy/vis_update_state.js");
/* harmony import */ var _saved_visualization_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saved_visualization_references */ "./public/saved_visualizations/saved_visualization_references.ts");
/* harmony import */ var _discover_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../discover/public */ "plugin/discover/public");
/* harmony import */ var _discover_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_discover_public__WEBPACK_IMPORTED_MODULE_3__);
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
 * @name SavedVis
 *
 * @extends SavedObject.
 *
 * NOTE: It's a type of SavedObject, but specific to visualizations.
 */

// @ts-ignore



const convertToSerializedVis = savedVis => {
  const {
    id,
    title,
    description,
    visState,
    uiStateJSON,
    searchSourceFields
  } = savedVis;
  const aggs = searchSourceFields && searchSourceFields.index ? visState.aggs || [] : visState.aggs;
  return {
    id,
    title,
    type: visState.type,
    description,
    params: visState.params,
    uiState: JSON.parse(uiStateJSON || '{}'),
    data: {
      aggs,
      searchSource: searchSourceFields,
      savedSearchId: savedVis.savedSearchId
    }
  };
};
const convertFromSerializedVis = vis => {
  return {
    id: vis.id,
    title: vis.title,
    description: vis.description,
    visState: {
      title: vis.title,
      type: vis.type,
      aggs: vis.data.aggs,
      params: vis.params
    },
    uiStateJSON: JSON.stringify(vis.uiState),
    searchSourceFields: vis.data.searchSource,
    savedSearchId: vis.data.savedSearchId
  };
};
function createSavedVisClass(services) {
  const SavedObjectClass = Object(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__["createSavedObjectClass"])(services);
  const savedSearch = Object(_discover_public__WEBPACK_IMPORTED_MODULE_3__["createSavedSearchesLoader"])(services);
  class SavedVis extends SavedObjectClass {
    constructor(opts = {}) {
      if (typeof opts !== 'object') {
        opts = {
          id: opts
        };
      }
      const visState = !opts.type ? null : {
        type: opts.type
      };
      // Gives our SavedWorkspace the properties of a SavedObject
      super({
        type: SavedVis.type,
        mapping: SavedVis.mapping,
        extractReferences: _saved_visualization_references__WEBPACK_IMPORTED_MODULE_2__["extractReferences"],
        injectReferences: _saved_visualization_references__WEBPACK_IMPORTED_MODULE_2__["injectReferences"],
        id: opts.id || '',
        indexPattern: opts.indexPattern,
        defaults: {
          title: '',
          visState,
          uiStateJSON: '{}',
          description: '',
          savedSearchId: opts.savedSearchId,
          version: 1
        },
        afterOpenSearchResp: async savedObject => {
          var _savedVis$searchSourc;
          const savedVis = savedObject;
          savedVis.visState = await Object(_legacy_vis_update_state__WEBPACK_IMPORTED_MODULE_1__["updateOldState"])(savedVis.visState);
          if ((_savedVis$searchSourc = savedVis.searchSourceFields) !== null && _savedVis$searchSourc !== void 0 && _savedVis$searchSourc.index) {
            await services.indexPatterns.get(savedVis.searchSourceFields.index);
          }
          if (savedVis.savedSearchId) {
            await savedSearch.get(savedVis.savedSearchId);
          }
          return savedVis;
        }
      });
      this.showInRecentlyAccessed = true;
      this.getFullPath = () => {
        return `/app/visualize#/edit/${this.id}`;
      };
    }
  }
  _defineProperty(SavedVis, "type", 'visualization');
  _defineProperty(SavedVis, "mapping", {
    title: 'text',
    visState: 'json',
    uiStateJSON: 'text',
    description: 'text',
    savedSearchId: 'keyword',
    version: 'integer'
  });
  // Order these fields to the top, the rest are alphabetical
  _defineProperty(SavedVis, "fieldOrder", ['title', 'description']);
  return SavedVis;
}

/***/ }),

/***/ "./public/saved_visualizations/find_list_items.ts":
/*!********************************************************!*\
  !*** ./public/saved_visualizations/find_list_items.ts ***!
  \********************************************************/
/*! exports provided: findListItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findListItems", function() { return findListItems; });
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
 * Search for visualizations and convert them into a list display-friendly format.
 */
async function findListItems({
  visTypes,
  search,
  size,
  savedObjectsClient,
  mapSavedObjectApiHits
}) {
  const extensions = visTypes.map(v => {
    var _v$appExtensions;
    return (_v$appExtensions = v.appExtensions) === null || _v$appExtensions === void 0 ? void 0 : _v$appExtensions.visualizations;
  }).filter(Boolean);
  const extensionByType = extensions.reduce((acc, m) => {
    return m.docTypes.reduce((_acc, type) => {
      acc[type] = m;
      return acc;
    }, acc);
  }, {});
  const searchOption = (field, ...defaults) => lodash__WEBPACK_IMPORTED_MODULE_0___default()(extensions).map(field).concat(defaults).compact().flatten().uniq().value();
  const searchOptions = {
    type: searchOption('docTypes', 'visualization'),
    searchFields: searchOption('searchFields', 'title^3', 'description'),
    search: search ? `${search}*` : undefined,
    perPage: size,
    page: 1,
    defaultSearchOperator: 'AND'
  };
  const {
    total,
    savedObjects
  } = await savedObjectsClient.find(searchOptions);
  return {
    total,
    hits: savedObjects.map(savedObject => {
      const config = extensionByType[savedObject.type];
      if (config) {
        return config.toListItem(savedObject);
      } else {
        return mapSavedObjectApiHits(savedObject);
      }
    })
  };
}

/***/ }),

/***/ "./public/saved_visualizations/index.ts":
/*!**********************************************!*\
  !*** ./public/saved_visualizations/index.ts ***!
  \**********************************************/
/*! exports provided: createSavedVisLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_visualizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_visualizations */ "./public/saved_visualizations/saved_visualizations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedVisLoader", function() { return _saved_visualizations__WEBPACK_IMPORTED_MODULE_0__["createSavedVisLoader"]; });

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

/***/ "./public/saved_visualizations/saved_visualization_references.ts":
/*!***********************************************************************!*\
  !*** ./public/saved_visualizations/saved_visualization_references.ts ***!
  \***********************************************************************/
/*! exports provided: extractReferences, injectReferences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractReferences", function() { return extractReferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReferences", function() { return injectReferences; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
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


function extractReferences({
  attributes,
  references = []
}) {
  const updatedAttributes = {
    ...attributes
  };
  const updatedReferences = [...references];
  if (updatedAttributes.searchSourceFields) {
    const [searchSource, searchSourceReferences] = Object(_data_public__WEBPACK_IMPORTED_MODULE_0__["extractSearchSourceReferences"])(updatedAttributes.searchSourceFields);
    updatedAttributes.searchSourceFields = searchSource;
    searchSourceReferences.forEach(r => updatedReferences.push(r));
  }

  // Extract saved search
  if (updatedAttributes.savedSearchId) {
    updatedReferences.push({
      name: 'search_0',
      type: 'search',
      id: String(updatedAttributes.savedSearchId)
    });
    delete updatedAttributes.savedSearchId;
    updatedAttributes.savedSearchRefName = 'search_0';
  }

  // Extract index patterns from controls
  if (updatedAttributes.visState) {
    const visState = JSON.parse(String(updatedAttributes.visState));
    const controls = visState.params && visState.params.controls || [];
    controls.forEach((control, i) => {
      if (!control.indexPattern) {
        return;
      }
      control.indexPatternRefName = `control_${i}_index_pattern`;
      updatedReferences.push({
        name: control.indexPatternRefName,
        type: 'index-pattern',
        id: control.indexPattern
      });
      delete control.indexPattern;
    });
    updatedAttributes.visState = JSON.stringify(visState);
  }
  return {
    references: updatedReferences,
    attributes: updatedAttributes
  };
}
function injectReferences(savedObject, references) {
  if (savedObject.searchSourceFields) {
    savedObject.searchSourceFields = Object(_data_public__WEBPACK_IMPORTED_MODULE_0__["injectSearchSourceReferences"])(savedObject.searchSourceFields, references);
  }
  if (savedObject.savedSearchRefName) {
    const savedSearchReference = references.find(reference => reference.name === savedObject.savedSearchRefName);
    if (!savedSearchReference) {
      throw new Error(`Could not find saved search reference "${savedObject.savedSearchRefName}"`);
    }
    savedObject.savedSearchId = savedSearchReference.id;
    delete savedObject.savedSearchRefName;
  }
  if (savedObject.visState) {
    const controls = savedObject.visState.params && savedObject.visState.params.controls || [];
    controls.forEach(control => {
      if (!control.indexPatternRefName) {
        return;
      }
      const reference = references.find(ref => ref.name === control.indexPatternRefName);
      if (!reference) {
        throw new Error(`Could not find index pattern reference "${control.indexPatternRefName}"`);
      }
      control.indexPattern = reference.id;
      delete control.indexPatternRefName;
    });
  }
}

/***/ }),

/***/ "./public/saved_visualizations/saved_visualizations.ts":
/*!*************************************************************!*\
  !*** ./public/saved_visualizations/saved_visualizations.ts ***!
  \*************************************************************/
/*! exports provided: createSavedVisLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedVisLoader", function() { return createSavedVisLoader; });
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _find_list_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find_list_items */ "./public/saved_visualizations/find_list_items.ts");
/* harmony import */ var _saved_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_saved_vis */ "./public/saved_visualizations/_saved_vis.ts");
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




function createSavedVisLoader(services) {
  const {
    savedObjectsClient,
    visualizationTypes
  } = services;
  class SavedObjectLoaderVisualize extends _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__["SavedObjectLoader"] {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "mapHitSource", (source, id) => {
        const visTypes = visualizationTypes;
        source.id = id;
        source.url = this.urlFor(id);
        let typeName = source.typeName;
        if (source.visState) {
          try {
            typeName = JSON.parse(String(source.visState)).type;
          } catch (e) {
            /* missing typename handled below */
          }
        }
        if (!typeName || !visTypes.get(typeName)) {
          source.error = 'Unknown visualization type';
          return source;
        }
        source.type = visTypes.get(typeName);
        source.savedObjectType = 'visualization';
        source.icon = source.type.icon;
        source.image = source.type.image;
        source.typeTitle = source.type.title;
        source.editUrl = `/edit/${id}`;
        return source;
      });
    }
    urlFor(id) {
      return `#/edit/${encodeURIComponent(id)}`;
    }
    // This behaves similarly to find, except it returns visualizations that are
    // defined as appExtensions and which may not conform to type: visualization
    findListItems(search = '', size = 100) {
      return Object(_find_list_items__WEBPACK_IMPORTED_MODULE_1__["findListItems"])({
        search,
        size,
        mapSavedObjectApiHits: this.mapSavedObjectApiHits.bind(this),
        savedObjectsClient,
        visTypes: visualizationTypes.getAliases()
      });
    }
  }
  const SavedVis = Object(_saved_vis__WEBPACK_IMPORTED_MODULE_2__["createSavedVisClass"])(services);
  return new SavedObjectLoaderVisualize(SavedVis, savedObjectsClient);
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getUISettings, setUISettings, getCapabilities, setCapabilities, getHttp, setHttp, getApplication, setApplication, getEmbeddable, setEmbeddable, getSavedObjects, setSavedObjects, getTypes, setTypes, getI18n, setI18n, getFilterManager, setFilterManager, getTimeFilter, setTimeFilter, getIndexPatterns, setIndexPatterns, getSearch, setSearch, getUsageCollector, setUsageCollector, getExpressions, setExpressions, getUiActions, setUiActions, getSavedVisualizationsLoader, setSavedVisualizationsLoader, getAggs, setAggs, getOverlays, setOverlays, getChrome, setChrome, getSavedSearchLoader, setSavedSearchLoader, getNotifications, setNotifications, getSavedAugmentVisLoader, setSavedAugmentVisLoader, getDocLinks, setDocLinks, getDataStart, setDataStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUISettings", function() { return getUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUISettings", function() { return setUISettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapabilities", function() { return getCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCapabilities", function() { return setCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttp", function() { return getHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHttp", function() { return setHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplication", function() { return getApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApplication", function() { return setApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmbeddable", function() { return getEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmbeddable", function() { return setEmbeddable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjects", function() { return getSavedObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedObjects", function() { return setSavedObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypes", function() { return getTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTypes", function() { return setTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getI18n", function() { return getI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setI18n", function() { return setI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterManager", function() { return getFilterManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterManager", function() { return setFilterManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFilter", function() { return getTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeFilter", function() { return setTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexPatterns", function() { return getIndexPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndexPatterns", function() { return setIndexPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return getSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearch", function() { return setSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsageCollector", function() { return getUsageCollector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsageCollector", function() { return setUsageCollector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressions", function() { return getExpressions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExpressions", function() { return setExpressions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUiActions", function() { return getUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUiActions", function() { return setUiActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedVisualizationsLoader", function() { return getSavedVisualizationsLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedVisualizationsLoader", function() { return setSavedVisualizationsLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggs", function() { return getAggs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAggs", function() { return setAggs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverlays", function() { return getOverlays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOverlays", function() { return setOverlays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChrome", function() { return getChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChrome", function() { return setChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedSearchLoader", function() { return getSavedSearchLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedSearchLoader", function() { return setSavedSearchLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedAugmentVisLoader", function() { return getSavedAugmentVisLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedAugmentVisLoader", function() { return setSavedAugmentVisLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocLinks", function() { return getDocLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocLinks", function() { return setDocLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataStart", function() { return getDataStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDataStart", function() { return setDataStart; });
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


const [getUISettings, setUISettings] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UISettings');
const [getCapabilities, setCapabilities] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Capabilities');
const [getHttp, setHttp] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Http');
const [getApplication, setApplication] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Application');
const [getEmbeddable, setEmbeddable] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Embeddable');
const [getSavedObjects, setSavedObjects] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('SavedObjects');
const [getTypes, setTypes] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Types');
const [getI18n, setI18n] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('I18n');
const [getFilterManager, setFilterManager] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('FilterManager');
const [getTimeFilter, setTimeFilter] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('TimeFilter');
const [getIndexPatterns, setIndexPatterns] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('IndexPatterns');
const [getSearch, setSearch] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Search');
const [getUsageCollector, setUsageCollector] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UsageCollection');
const [getExpressions, setExpressions] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Expressions');
const [getUiActions, setUiActions] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('UiActions');
const [getSavedVisualizationsLoader, setSavedVisualizationsLoader] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('SavedVisualisationsLoader');
const [getAggs, setAggs] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('AggConfigs');
const [getOverlays, setOverlays] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Overlays');
const [getChrome, setChrome] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Chrome');
const [getSavedSearchLoader, setSavedSearchLoader] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('savedSearchLoader');
const [getNotifications, setNotifications] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');
const [getSavedAugmentVisLoader, setSavedAugmentVisLoader] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('savedAugmentVisLoader');
const [getDocLinks, setDocLinks] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('docLinks');
const [getDataStart, setDataStart] = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('DataStart');

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: Vis, SerializedVis, VisParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis */ "./public/vis.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vis", function() { return _vis__WEBPACK_IMPORTED_MODULE_0__["Vis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedVis", function() { return _vis__WEBPACK_IMPORTED_MODULE_0__["SerializedVis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisParams", function() { return _vis__WEBPACK_IMPORTED_MODULE_0__["VisParams"]; });

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

/***/ "./public/vis.ts":
/*!***********************!*\
  !*** ./public/vis.ts ***!
  \***********************/
/*! exports provided: Vis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vis", function() { return Vis; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _persisted_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persisted_state */ "./public/persisted_state/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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
 * @name Vis
 *
 * @description This class consists of aggs, params, listeners, title, and type.
 *  - Aggs: Instances of IAggConfig.
 *  - Params: The settings in the Options tab.
 *
 * Not to be confused with vislib/vis.js.
 */





const getSearchSource = async (inputSearchSource, savedSearchId) => {
  const searchSource = inputSearchSource.createCopy();
  if (savedSearchId) {
    const savedSearch = await Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSavedSearchLoader"])().get(savedSearchId);
    searchSource.setParent(savedSearch.searchSource);
  }
  searchSource.setField('size', 0);
  return searchSource;
};
class Vis {
  constructor(visType, visState = {}) {
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "title", '');
    _defineProperty(this, "description", '');
    _defineProperty(this, "params", void 0);
    // Session state is for storing information that is transitory, and will not be saved with the visualization.
    // For instance, map bounds, which depends on the view port, browser window size, etc.
    _defineProperty(this, "sessionState", {});
    _defineProperty(this, "data", {});
    _defineProperty(this, "uiState", void 0);
    this.type = this.getType(visType);
    this.params = this.getParams(visState.params);
    this.uiState = new _persisted_state__WEBPACK_IMPORTED_MODULE_2__["PersistedState"](visState.uiState);
    this.id = visState.id;
  }
  getType(visType) {
    const type = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getTypes"])().get(visType);
    if (!type) {
      const errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.visualizationTypeInvalidMessage', {
        defaultMessage: 'Invalid visualization type "{visType}"',
        values: {
          visType
        }
      });
      throw new Error(errorMessage);
    }
    return type;
  }
  getParams(params) {
    var _this$type$visConfig$, _this$type$visConfig;
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaults"])({}, Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(params !== null && params !== void 0 ? params : {}), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])((_this$type$visConfig$ = (_this$type$visConfig = this.type.visConfig) === null || _this$type$visConfig === void 0 ? void 0 : _this$type$visConfig.defaults) !== null && _this$type$visConfig$ !== void 0 ? _this$type$visConfig$ : {}));
  }
  async setState(state) {
    let typeChanged = false;
    if (state.type && this.type.name !== state.type) {
      // @ts-ignore
      this.type = this.getType(state.type);
      typeChanged = true;
    }
    if (state.title !== undefined) {
      this.title = state.title;
    }
    if (state.description !== undefined) {
      this.description = state.description;
    }
    if (state.params || typeChanged) {
      this.params = this.getParams(state.params);
    }
    if (state.data && state.data.searchSource) {
      this.data.searchSource = await Object(_services__WEBPACK_IMPORTED_MODULE_3__["getSearch"])().searchSource.create(state.data.searchSource);
      this.data.indexPattern = this.data.searchSource.getField('index');
    }
    if (state.data && state.data.savedSearchId) {
      this.data.savedSearchId = state.data.savedSearchId;
      if (this.data.searchSource) {
        this.data.searchSource = await getSearchSource(this.data.searchSource, this.data.savedSearchId);
        this.data.indexPattern = this.data.searchSource.getField('index');
      }
    }
    if (state.data && (state.data.aggs || !this.data.aggs)) {
      const aggs = state.data.aggs ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(state.data.aggs) : [];
      const configStates = this.initializeDefaultsFromSchemas(aggs, this.type.schemas.all || []);
      if (!this.data.indexPattern) {
        if (aggs.length) {
          const errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.initializeWithoutIndexPatternErrorMessage', {
            defaultMessage: 'Trying to initialize aggs without index pattern'
          });
          throw new Error(errorMessage);
        }
        return;
      }
      this.data.aggs = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getAggs"])().createAggConfigs(this.data.indexPattern, configStates);
    }
  }
  clone() {
    const {
      data,
      ...restOfSerialized
    } = this.serialize();
    const vis = new Vis(this.type.name, restOfSerialized);
    vis.setState({
      ...restOfSerialized,
      data: {}
    });
    const aggs = this.data.indexPattern ? Object(_services__WEBPACK_IMPORTED_MODULE_3__["getAggs"])().createAggConfigs(this.data.indexPattern, data.aggs) : undefined;
    vis.data = {
      ...this.data,
      aggs
    };
    return vis;
  }
  serialize() {
    const aggs = this.data.aggs ? this.data.aggs.aggs.map(agg => agg.toJSON()) : [];
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      type: this.type.name,
      params: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.params),
      uiState: this.uiState.toJSON(),
      data: {
        aggs: aggs,
        searchSource: this.data.searchSource ? this.data.searchSource.getSerializedFields() : {},
        savedSearchId: this.data.savedSearchId
      }
    };
  }

  // deprecated
  isHierarchical() {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(this.type.hierarchicalData)) {
      return !!this.type.hierarchicalData(this);
    } else {
      return !!this.type.hierarchicalData;
    }
  }
  initializeDefaultsFromSchemas(configStates, schemas) {
    // Set the defaults for any schema which has them. If the defaults
    // for some reason has more then the max only set the max number
    // of defaults (not sure why a someone define more...
    // but whatever). Also if a schema.name is already set then don't
    // set anything.
    const newConfigs = [...configStates];
    schemas.filter(schema => Array.isArray(schema.defaults) && schema.defaults.length > 0).filter(schema => !configStates.find(agg => agg.schema && agg.schema === schema.name)).forEach(schema => {
      const defaultSchemaConfig = schema.defaults.slice(0, schema.max);
      defaultSchemaConfig.forEach(d => newConfigs.push(d));
    });
    return newConfigs;
  }
}

/***/ }),

/***/ "./public/vis_types/base_vis_type.ts":
/*!*******************************************!*\
  !*** ./public/vis_types/base_vis_type.ts ***!
  \*******************************************/
/*! exports provided: BaseVisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseVisType", function() { return BaseVisType; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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


const defaultOptions = {
  showTimePicker: true,
  showQueryBar: true,
  showFilterBar: true,
  showIndexSelection: true,
  hierarchicalData: false // we should get rid of this i guess ?
};

class BaseVisType {
  constructor(opts) {
    var _opts$description, _opts$stage, _opts$hidden, _opts$requestHandler, _opts$responseHandler, _opts$hierarchicalDat, _opts$useCustomNoData;
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "title", void 0);
    _defineProperty(this, "description", void 0);
    _defineProperty(this, "getSupportedTriggers", void 0);
    _defineProperty(this, "icon", void 0);
    _defineProperty(this, "image", void 0);
    _defineProperty(this, "stage", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "visualization", void 0);
    _defineProperty(this, "visConfig", void 0);
    _defineProperty(this, "editor", void 0);
    _defineProperty(this, "editorConfig", void 0);
    _defineProperty(this, "hidden", void 0);
    _defineProperty(this, "requestHandler", void 0);
    _defineProperty(this, "responseHandler", void 0);
    _defineProperty(this, "hierarchicalData", void 0);
    _defineProperty(this, "setup", void 0);
    _defineProperty(this, "getUsedIndexPattern", void 0);
    _defineProperty(this, "useCustomNoDataScreen", void 0);
    _defineProperty(this, "inspectorAdapters", void 0);
    _defineProperty(this, "toExpressionAst", void 0);
    _defineProperty(this, "getInfoMessage", void 0);
    if (!opts.icon && !opts.image) {
      throw new Error('vis_type must define its icon or image');
    }
    this.name = opts.name;
    this.description = (_opts$description = opts.description) !== null && _opts$description !== void 0 ? _opts$description : '';
    this.getSupportedTriggers = opts.getSupportedTriggers;
    this.title = opts.title;
    this.icon = opts.icon;
    this.image = opts.image;
    this.visualization = opts.visualization;
    this.visConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"])({}, opts.visConfig, {
      defaults: {}
    });
    this.editor = opts.editor;
    this.editorConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"])({}, opts.editorConfig, {
      collections: {}
    });
    this.options = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"])({}, opts.options, defaultOptions);
    this.stage = (_opts$stage = opts.stage) !== null && _opts$stage !== void 0 ? _opts$stage : 'production';
    this.hidden = (_opts$hidden = opts.hidden) !== null && _opts$hidden !== void 0 ? _opts$hidden : false;
    this.requestHandler = (_opts$requestHandler = opts.requestHandler) !== null && _opts$requestHandler !== void 0 ? _opts$requestHandler : 'courier';
    this.responseHandler = (_opts$responseHandler = opts.responseHandler) !== null && _opts$responseHandler !== void 0 ? _opts$responseHandler : 'none';
    this.setup = opts.setup;
    this.hierarchicalData = (_opts$hierarchicalDat = opts.hierarchicalData) !== null && _opts$hierarchicalDat !== void 0 ? _opts$hierarchicalDat : false;
    this.getUsedIndexPattern = opts.getUsedIndexPattern;
    this.useCustomNoDataScreen = (_opts$useCustomNoData = opts.useCustomNoDataScreen) !== null && _opts$useCustomNoData !== void 0 ? _opts$useCustomNoData : false;
    this.inspectorAdapters = opts.inspectorAdapters;
    this.toExpressionAst = opts.toExpressionAst;
    this.getInfoMessage = opts.getInfoMessage;
  }
  get schemas() {
    var _this$editorConfig$sc, _this$editorConfig;
    return (_this$editorConfig$sc = (_this$editorConfig = this.editorConfig) === null || _this$editorConfig === void 0 ? void 0 : _this$editorConfig.schemas) !== null && _this$editorConfig$sc !== void 0 ? _this$editorConfig$sc : [];
  }
  get requiresSearch() {
    return this.requestHandler !== 'none';
  }
}

/***/ }),

/***/ "./public/vis_types/index.ts":
/*!***********************************!*\
  !*** ./public/vis_types/index.ts ***!
  \***********************************/
/*! exports provided: TypesService, VisTypeAlias, VisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types_service */ "./public/vis_types/types_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return _types_service__WEBPACK_IMPORTED_MODULE_0__["TypesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisTypeAlias", function() { return _types_service__WEBPACK_IMPORTED_MODULE_0__["VisTypeAlias"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/vis_types/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisType", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["VisType"]; });

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

/***/ "./public/vis_types/react_vis_controller.tsx":
/*!***************************************************!*\
  !*** ./public/vis_types/react_vis_controller.tsx ***!
  \***************************************************/
/*! exports provided: ReactVisController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactVisController", function() { return ReactVisController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./public/services.ts");
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




class ReactVisController {
  constructor(element, vis) {
    this.element = element;
    this.vis = vis;
  }
  render(visData, visParams) {
    const I18nContext = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getI18n"])().Context;
    return new Promise((resolve, reject) => {
      if (!this.vis.type || !this.vis.type.visConfig || !this.vis.type.visConfig.component) {
        reject('Missing component for ReactVisType');
      }
      const Component = this.vis.type.visConfig.component;
      const config = Object(_services__WEBPACK_IMPORTED_MODULE_2__["getUISettings"])();
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
        config: config,
        vis: this.vis,
        visData: visData,
        visParams: visParams,
        renderComplete: resolve
      })), this.element);
    });
  }
  destroy() {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(this.element);
  }
}

/***/ }),

/***/ "./public/vis_types/react_vis_type.ts":
/*!********************************************!*\
  !*** ./public/vis_types/react_vis_type.ts ***!
  \********************************************/
/*! exports provided: ReactVisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactVisType", function() { return ReactVisType; });
/* harmony import */ var _base_vis_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_vis_type */ "./public/vis_types/base_vis_type.ts");
/* harmony import */ var _react_vis_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react_vis_controller */ "./public/vis_types/react_vis_controller.tsx");
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
 * This class should only be used for visualizations not using the `toExpressionAst` with a custom renderer.
 * If you implement a custom renderer you should just mount a react component inside this.
 */
class ReactVisType extends _base_vis_type__WEBPACK_IMPORTED_MODULE_0__["BaseVisType"] {
  constructor(opts) {
    super({
      ...opts,
      visualization: _react_vis_controller__WEBPACK_IMPORTED_MODULE_1__["ReactVisController"]
    });
    if (!this.visConfig.component) {
      throw new Error('Missing component for ReactVisType');
    }
  }
}

/***/ }),

/***/ "./public/vis_types/types.ts":
/*!***********************************!*\
  !*** ./public/vis_types/types.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/vis_types/types_service.ts":
/*!*******************************************!*\
  !*** ./public/vis_types/types_service.ts ***!
  \*******************************************/
/*! exports provided: TypesService, VisTypeAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return TypesService; });
/* harmony import */ var _vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis_type_alias_registry */ "./public/vis_types/vis_type_alias_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisTypeAlias", function() { return _vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_0__["VisTypeAlias"]; });

/* harmony import */ var _base_vis_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base_vis_type */ "./public/vis_types/base_vis_type.ts");
/* harmony import */ var _react_vis_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react_vis_type */ "./public/vis_types/react_vis_type.ts");
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
 * Vis Types Service
 *
 * @internal
 */
class TypesService {
  constructor() {
    _defineProperty(this, "types", {});
    _defineProperty(this, "unregisteredHiddenTypes", []);
  }
  registerVisualization(visDefinition) {
    if (this.unregisteredHiddenTypes.includes(visDefinition.name)) {
      visDefinition.hidden = true;
    }
    if (this.types[visDefinition.name]) {
      throw new Error('type already exists!');
    }
    this.types[visDefinition.name] = visDefinition;
  }
  setup() {
    return {
      /**
       * registers a visualization type
       * @param config - visualization type definition
       */
      createBaseVisualization: config => {
        const vis = new _base_vis_type__WEBPACK_IMPORTED_MODULE_1__["BaseVisType"](config);
        this.registerVisualization(vis);
      },
      /**
       * registers a visualization which uses react for rendering
       * @param config - visualization type definition
       */
      createReactVisualization: config => {
        const vis = new _react_vis_type__WEBPACK_IMPORTED_MODULE_2__["ReactVisType"](config);
        this.registerVisualization(vis);
      },
      /**
       * registers a visualization alias
       * alias is a visualization type without implementation, it just redirects somewhere in OpenSearch Dashboards
       * @param {VisTypeAlias} config - visualization alias definition
       */
      registerAlias: _vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_0__["visTypeAliasRegistry"].add,
      /**
       * allows to hide specific visualization types from create visualization dialog
       * @param {string[]} typeNames - list of type ids to hide
       */
      hideTypes: typeNames => {
        typeNames.forEach(name => {
          if (this.types[name]) {
            this.types[name].hidden = true;
          } else {
            this.unregisteredHiddenTypes.push(name);
          }
        });
      }
    };
  }
  start() {
    return {
      /**
       * returns specific visualization or undefined if not found
       * @param {string} visualization - id of visualization to return
       */
      get: visualization => {
        return this.types[visualization];
      },
      /**
       * returns all registered visualization types
       */
      all: () => {
        return [...Object.values(this.types)];
      },
      /**
       * returns all registered aliases
       */
      getAliases: _vis_type_alias_registry__WEBPACK_IMPORTED_MODULE_0__["visTypeAliasRegistry"].get
    };
  }
  stop() {
    // nothing to do here yet
  }
}

/** @internal */

/** @public types */


/** @public static code */
// TODO once items are moved from ui/vis into this service

/***/ }),

/***/ "./public/vis_types/vis_type_alias_registry.ts":
/*!*****************************************************!*\
  !*** ./public/vis_types/vis_type_alias_registry.ts ***!
  \*****************************************************/
/*! exports provided: visTypeAliasRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visTypeAliasRegistry", function() { return visTypeAliasRegistry; });
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

const registry = [];
const visTypeAliasRegistry = {
  get: () => [...registry],
  add: newVisTypeAlias => {
    if (registry.find(visTypeAlias => visTypeAlias.name === newVisTypeAlias.name)) {
      throw new Error(`${newVisTypeAlias.name} already registered`);
    }
    registry.push(newVisTypeAlias);
  }
};

/***/ }),

/***/ "./public/wizard/index.ts":
/*!********************************!*\
  !*** ./public/wizard/index.ts ***!
  \********************************/
/*! exports provided: showNewVisModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_new_vis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show_new_vis */ "./public/wizard/show_new_vis.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNewVisModal", function() { return _show_new_vis__WEBPACK_IMPORTED_MODULE_0__["showNewVisModal"]; });

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

/***/ "./public/wizard/new_vis_modal.tsx":
/*!*****************************************!*\
  !*** ./public/wizard/new_vis_modal.tsx ***!
  \*****************************************/
/*! exports provided: NewVisModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVisModal", function() { return NewVisModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/analytics */ "../../../packages/osd-analytics/target/web/index.js");
/* harmony import */ var _search_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search_selection */ "./public/wizard/search_selection/index.ts");
/* harmony import */ var _type_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type_selection */ "./public/wizard/type_selection/index.ts");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constants */ "./common/constants.ts");
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








// TODO: redirect logic is specific to visualise & dashboard
// but it is likely should be decoupled. e.g. handled by the container instead
const basePath = `/create?`;
const baseUrl = `/app/visualize#${basePath}`;
class NewVisModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    var _this$props$usageColl;
    super(props);
    _defineProperty(this, "isLabsEnabled", void 0);
    _defineProperty(this, "trackUiMetric", void 0);
    _defineProperty(this, "onCloseModal", () => {
      this.setState({
        showSearchVisModal: false
      });
      this.props.onClose();
    });
    _defineProperty(this, "onVisTypeSelected", visType => {
      if (!('aliasPath' in visType) && visType.requiresSearch && visType.options.showIndexSelection) {
        this.setState({
          showSearchVisModal: true,
          visType
        });
      } else {
        this.redirectToVis(visType);
      }
    });
    _defineProperty(this, "onSearchSelected", (searchId, searchType) => {
      this.redirectToVis(this.state.visType, searchType, searchId);
    });
    this.isLabsEnabled = props.uiSettings.get(_common_constants__WEBPACK_IMPORTED_MODULE_6__["VISUALIZE_ENABLE_LABS_SETTING"]);
    this.state = {
      showSearchVisModal: false
    };
    this.trackUiMetric = (_this$props$usageColl = this.props.usageCollection) === null || _this$props$usageColl === void 0 ? void 0 : _this$props$usageColl.reportUiStats.bind(this.props.usageCollection, 'visualize');
  }
  render() {
    if (!this.props.isOpen) {
      return null;
    }
    const visNewVisDialogAriaLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visualizations.newVisWizard.helpTextAriaLabel', {
      defaultMessage: 'Start creating your visualization by selecting a type for that visualization. Hit escape to close this modal. Hit Tab key to go further.'
    });
    const selectionModal = this.state.showSearchVisModal && this.state.visType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModal"], {
      onClose: this.onCloseModal,
      className: "visNewVisSearchDialog"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_selection__WEBPACK_IMPORTED_MODULE_4__["SearchSelection"], {
      onSearchSelected: this.onSearchSelected,
      visType: this.state.visType,
      uiSettings: this.props.uiSettings,
      savedObjects: this.props.savedObjects,
      application: this.props.application,
      data: this.props.data
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModal"], {
      onClose: this.onCloseModal,
      className: "visNewVisDialog",
      "aria-label": visNewVisDialogAriaLabel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_type_selection__WEBPACK_IMPORTED_MODULE_5__["TypeSelection"], {
      showExperimental: this.isLabsEnabled,
      onVisTypeSelected: this.onVisTypeSelected,
      visTypesRegistry: this.props.visTypesRegistry,
      addBasePath: this.props.addBasePath
    }));
    return selectionModal;
  }
  redirectToVis(visType, searchType, searchId) {
    if (this.trackUiMetric) {
      this.trackUiMetric(_osd_analytics__WEBPACK_IMPORTED_MODULE_3__["METRIC_TYPE"].CLICK, visType.name);
    }
    let params;
    if ('aliasPath' in visType) {
      params = visType.aliasPath;
      this.props.onClose();
      this.navigate(visType.aliasApp, visType.aliasPath);
      return;
    }
    params = [`type=${encodeURIComponent(visType.name)}`];
    if (searchType) {
      params.push(`${searchType === 'search' ? 'savedSearchId' : 'indexPattern'}=${searchId}`);
    }
    params = params.concat(this.props.editorParams);
    this.props.onClose();
    if (this.props.outsideVisualizeApp) {
      this.navigate('visualize', `#${basePath}${params.join('&')}`);
    } else {
      location.assign(this.props.addBasePath(`${baseUrl}${params.join('&')}`));
    }
  }
  navigate(appId, params) {
    if (this.props.stateTransfer && this.props.originatingApp) {
      this.props.stateTransfer.navigateToEditor(appId, {
        path: params,
        state: {
          originatingApp: this.props.originatingApp
        }
      });
    } else {
      this.props.application.navigateToApp(appId, {
        path: params
      });
    }
  }
}
_defineProperty(NewVisModal, "defaultProps", {
  editorParams: []
});


/***/ }),

/***/ "./public/wizard/search_selection/index.ts":
/*!*************************************************!*\
  !*** ./public/wizard/search_selection/index.ts ***!
  \*************************************************/
/*! exports provided: SearchSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_selection */ "./public/wizard/search_selection/search_selection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchSelection", function() { return _search_selection__WEBPACK_IMPORTED_MODULE_0__["SearchSelection"]; });

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

/***/ "./public/wizard/search_selection/search_selection.tsx":
/*!*************************************************************!*\
  !*** ./public/wizard/search_selection/search_selection.tsx ***!
  \*************************************************************/
/*! exports provided: SearchSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelection", function() { return SearchSelection; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_4__);
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






class SearchSelection extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "fixedPageSize", 8);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visualizations.newVisWizard.newVisTypeTitle",
      defaultMessage: "New {visTypeName}",
      values: {
        visTypeName: this.props.visType.title
      }
    }), ' ', "/", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "visualizations.newVisWizard.chooseSourceTitle",
      defaultMessage: "Choose a source"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_saved_objects_public__WEBPACK_IMPORTED_MODULE_4__["SavedObjectFinderUi"], {
      key: "searchSavedObjectFinder",
      onChoose: this.props.onSearchSelected,
      showFilter: true,
      noItemsMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.newVisWizard.searchSelection.notFoundLabel', {
        defaultMessage: 'No matching indices or saved searches found.'
      }),
      savedObjectMetaData: [{
        type: 'search',
        getIconForSavedObject: () => 'search',
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.newVisWizard.searchSelection.savedObjectType.search', {
          defaultMessage: 'Saved search'
        }),
        includeFields: ['kibanaSavedObjectMeta']
      }, {
        type: 'index-pattern',
        getIconForSavedObject: () => 'indexPatternApp',
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visualizations.newVisWizard.searchSelection.savedObjectType.indexPattern', {
          defaultMessage: 'Index pattern'
        })
      }],
      fixedPageSize: this.fixedPageSize,
      uiSettings: this.props.uiSettings,
      savedObjects: this.props.savedObjects,
      application: this.props.application,
      data: this.props.data
    })));
  }
}

/***/ }),

/***/ "./public/wizard/show_new_vis.tsx":
/*!****************************************!*\
  !*** ./public/wizard/show_new_vis.tsx ***!
  \****************************************/
/*! exports provided: showNewVisModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNewVisModal", function() { return showNewVisModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _new_vis_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new_vis_modal */ "./public/wizard/new_vis_modal.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services.ts");
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
 * shows modal dialog that allows you to create new visualization
 * @param {string[]} editorParams
 * @param {function} onClose - function that will be called when dialog is closed
 */
function showNewVisModal({
  editorParams = [],
  onClose,
  originatingApp,
  outsideVisualizeApp
} = {}) {
  const container = document.createElement('div');
  let isClosed = false;
  const handleClose = () => {
    if (isClosed) return;
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(container);
    document.body.removeChild(container);
    if (onClose) {
      onClose();
    }
    isClosed = true;
  };
  document.body.appendChild(container);
  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_new_vis_modal__WEBPACK_IMPORTED_MODULE_3__["NewVisModal"], {
    isOpen: true,
    onClose: handleClose,
    originatingApp: originatingApp,
    stateTransfer: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getEmbeddable"])().getStateTransfer(),
    outsideVisualizeApp: outsideVisualizeApp,
    editorParams: editorParams,
    visTypesRegistry: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getTypes"])(),
    addBasePath: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getHttp"])().basePath.prepend,
    uiSettings: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUISettings"])(),
    savedObjects: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getSavedObjects"])(),
    usageCollection: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUsageCollector"])(),
    application: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getApplication"])(),
    data: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getDataStart"])()
  }));
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(element, container);
  return () => handleClose();
}

/***/ }),

/***/ "./public/wizard/type_selection/index.ts":
/*!***********************************************!*\
  !*** ./public/wizard/type_selection/index.ts ***!
  \***********************************************/
/*! exports provided: TypeSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type_selection */ "./public/wizard/type_selection/type_selection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeSelection", function() { return _type_selection__WEBPACK_IMPORTED_MODULE_0__["TypeSelection"]; });

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

/***/ "./public/wizard/type_selection/new_vis_help.tsx":
/*!*******************************************************!*\
  !*** ./public/wizard/type_selection/new_vis_help.tsx ***!
  \*******************************************************/
/*! exports provided: NewVisHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVisHelp", function() { return NewVisHelp; });
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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




function NewVisHelp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__["FormattedMessage"], {
    id: "visualizations.newVisWizard.helpText",
    defaultMessage: "Start creating your visualization by selecting a type for that visualization."
  })), props.promotedTypes.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: t.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, t.promotion.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
    onClick: () => props.onPromotionClicked(t),
    fill: true,
    size: "s",
    iconType: "popout",
    iconSide: "right"
  }, t.promotion.buttonText))));
}

/***/ }),

/***/ "./public/wizard/type_selection/type_selection.tsx":
/*!*********************************************************!*\
  !*** ./public/wizard/type_selection/type_selection.tsx ***!
  \*********************************************************/
/*! exports provided: TypeSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSelection", function() { return TypeSelection; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _legacy_memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../legacy/memoize */ "./public/legacy/memoize.ts");
/* harmony import */ var _new_vis_help__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new_vis_help */ "./public/wizard/type_selection/new_vis_help.tsx");
/* harmony import */ var _vis_help_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vis_help_text */ "./public/wizard/type_selection/vis_help_text.tsx");
/* harmony import */ var _vis_type_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vis_type_icon */ "./public/wizard/type_selection/vis_type_icon.tsx");
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










function isVisTypeAlias(type) {
  return 'aliasPath' in type;
}
class TypeSelection extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      highlightedType: null,
      query: ''
    });
    _defineProperty(this, "getFilteredVisTypes", Object(_legacy_memoize__WEBPACK_IMPORTED_MODULE_5__["memoizeLast"])(this.filteredVisTypes));
    _defineProperty(this, "renderVisType", visType => {
      let stage = {};
      let highlightMsg;
      if (visType.type.stage === 'experimental') {
        stage = {
          betaBadgeLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.experimentalTitle', {
            defaultMessage: 'Experimental'
          }),
          betaBadgeTooltipContent: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.experimentalTooltip', {
            defaultMessage: 'This visualization might be changed or removed in a future release and is not subject to the support SLA.'
          })
        };
        highlightMsg = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.experimentalDescription', {
          defaultMessage: 'This visualization is experimental. The design and implementation are less mature than stable visualizations and might be subject to change.'
        });
      } else if (isVisTypeAlias(visType.type) && visType.type.stage === 'beta') {
        const aliasDescription = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.betaDescription', {
          defaultMessage: 'This visualization is in beta and is subject to change. The design and code is less mature than official GA features and is being provided as-is with no warranties. Beta features are not subject to the support SLA of official GA features'
        });
        stage = {
          betaBadgeLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.betaTitle', {
            defaultMessage: 'Beta'
          }),
          betaBadgeTooltipContent: aliasDescription
        };
        highlightMsg = aliasDescription;
      }
      const isDisabled = this.state.query !== '' && !visType.highlighted;
      const onClick = () => this.props.onVisTypeSelected(visType.type);
      const highlightedType = {
        title: visType.type.title,
        name: visType.type.name,
        description: visType.type.description,
        highlightMsg
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiKeyPadMenuItem"], _extends({
        key: visType.type.name,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          "data-test-subj": "visTypeTitle"
        }, visType.type.title),
        onClick: onClick,
        onFocus: () => this.setHighlightType(highlightedType),
        onMouseEnter: () => this.setHighlightType(highlightedType),
        onMouseLeave: () => this.setHighlightType(null),
        onBlur: () => this.setHighlightType(null),
        className: "visNewVisDialog__type",
        "data-test-subj": `visType-${visType.type.name}`,
        "data-vis-stage": !isVisTypeAlias(visType.type) ? visType.type.stage : 'alias',
        disabled: isDisabled,
        "aria-describedby": `visTypeDescription-${visType.type.name}`
      }, stage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_vis_type_icon__WEBPACK_IMPORTED_MODULE_8__["VisTypeIcon"], {
        icon: visType.type.icon,
        image: 'image' in visType.type ? visType.type.image : undefined
      }));
    });
    _defineProperty(this, "onQueryChange", ev => {
      this.setState({
        query: ev.target.value
      });
    });
  }
  render() {
    const {
      query,
      highlightedType
    } = this.state;
    const visTypes = this.getFilteredVisTypes(this.props.visTypesRegistry, query);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "visualizations.newVisWizard.title",
      defaultMessage: "New Visualization"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "visNewVisDialog__body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
      gutterSize: "xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
      className: "visNewVisDialog__list",
      direction: "column",
      gutterSize: "none",
      responsive: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: false,
      className: "visNewVisDialog__searchWrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFieldSearch"], {
      placeholder: "Filter",
      value: query,
      onChange: this.onQueryChange,
      fullWidth: true,
      "data-test-subj": "filterVisType",
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visualizations.newVisWizard.filterVisTypeAriaLabel', {
        defaultMessage: 'Filter for a visualization type'
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      grow: 1,
      className: "visNewVisDialog__typesWrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-live": "polite"
    }, query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "visualizations.newVisWizard.resultsFound",
      defaultMessage: "{resultCount} {resultCount, plural, one {type} other {types} } found",
      values: {
        resultCount: visTypes.filter(type => type.highlighted).length
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiKeyPadMenu"], {
      className: "visNewVisDialog__types",
      "data-test-subj": "visNewDialogTypes"
    }, visTypes.map(this.renderVisType))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      className: "visNewVisDialog__description",
      grow: false
    }, highlightedType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_vis_help_text__WEBPACK_IMPORTED_MODULE_7__["VisHelpText"], highlightedType) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "visualizations.newVisWizard.selectVisType",
      defaultMessage: "Select a visualization type"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_new_vis_help__WEBPACK_IMPORTED_MODULE_6__["NewVisHelp"], {
      promotedTypes: visTypes.map(t => t.type).filter(t => isVisTypeAlias(t) && Boolean(t.promotion)),
      onPromotionClicked: this.props.onVisTypeSelected
    }))))));
  }
  filteredVisTypes(visTypes, query) {
    const filterExperimental = type => {
      if (!this.props.showExperimental && type.stage === 'experimental') {
        return false;
      }
      return true;
    };
    const types = visTypes.all().filter(filterExperimental).filter(type => !type.hidden); // Filter out hidden visualizations
    const aliasedTypes = visTypes.getAliases().filter(filterExperimental);
    const allTypes = [...types, ...aliasedTypes];
    let entries;
    if (!query) {
      entries = allTypes.map(type => ({
        type,
        highlighted: false
      }));
    } else {
      const q = query.toLowerCase();
      entries = allTypes.map(type => {
        const matchesQuery = type.name.toLowerCase().includes(q) || type.title.toLowerCase().includes(q) || typeof type.description === 'string' && type.description.toLowerCase().includes(q);
        return {
          type,
          highlighted: matchesQuery
        };
      });
    }
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["orderBy"])(entries, ['highlighted', 'type.promotion', 'type.title'], ['desc', 'asc', 'asc']);
  }
  setHighlightType(highlightedType) {
    this.setState({
      highlightedType
    });
  }
}


/***/ }),

/***/ "./public/wizard/type_selection/vis_help_text.tsx":
/*!********************************************************!*\
  !*** ./public/wizard/type_selection/vis_help_text.tsx ***!
  \********************************************************/
/*! exports provided: VisHelpText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisHelpText", function() { return VisHelpText; });
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



const VisHelpText = ({
  name,
  title,
  description,
  highlightMsg
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: `visTypeDescription-${name}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, highlightMsg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, highlightMsg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description))));
};

/***/ }),

/***/ "./public/wizard/type_selection/vis_type_icon.tsx":
/*!********************************************************!*\
  !*** ./public/wizard/type_selection/vis_type_icon.tsx ***!
  \********************************************************/
/*! exports provided: VisTypeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisTypeIcon", function() { return VisTypeIcon; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
 * This renders the icon for a specific visualization type.
 * This currently checks the following:
 * - If image is set, use that as the `src` of an image
 * - Otherwise use the icon as an EuiIcon or the 'empty' icon if that's not set
 */
const VisTypeIcon = ({
  icon,
  image
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    alt: "",
    className: "visNewVisDialog__typeImage"
  }), !image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: icon || 'empty',
    size: "l",
    color: "secondary"
  }));
};

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

/***/ "moment":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Moment;

/***/ }),

/***/ "moment-timezone":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.MomentTimezone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.MomentTimezone;

/***/ }),

/***/ "plugin/dashboard/public":
/*!************************************************!*\
  !*** @osd/bundleRef "plugin/dashboard/public" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/dashboard/public');
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

/***/ "plugin/discover/public":
/*!***********************************************!*\
  !*** @osd/bundleRef "plugin/discover/public" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/discover/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

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
//# sourceMappingURL=visualizations.plugin.js.map