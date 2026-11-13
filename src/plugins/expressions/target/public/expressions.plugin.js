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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,uBAAuB,iBAAiB,CAAC,YAAY,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,UAAU,CAAC,WAAW,CAAC,mCAAmC,YAAY,CAAC,qBAAqB,CAAC,UAAU,CAAC,WAAW,CAAC,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,qIAAqI,YAAY","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.expExpressionRenderer{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.expExpressionRenderer__expression{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;flex:1 1 100%}.expExpressionRenderer-isEmpty .expExpressionRenderer__expression,.expExpressionRenderer-hasError .expExpressionRenderer__expression{display:none}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/fast-shallow-equal/index.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-shallow-equal/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCustomCompareEffect.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCustomCompareEffect.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports.default = useCustomCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useShallowCompareEffect.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useShallowCompareEffect.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var fast_shallow_equal_1 = __webpack_require__(/*! fast-shallow-equal */ "../../../node_modules/fast-shallow-equal/index.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports.default = useShallowCompareEffect;


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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=expressions!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=expressions!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['expressions']

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/index.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Fn", {
  enumerable: true,
  get: function () {
    return _fn.Fn;
  }
});
Object.defineProperty(exports, "Registry", {
  enumerable: true,
  get: function () {
    return _registry.Registry;
  }
});
Object.defineProperty(exports, "addRegistries", {
  enumerable: true,
  get: function () {
    return _registries.addRegistries;
  }
});
Object.defineProperty(exports, "castProvider", {
  enumerable: true,
  get: function () {
    return _cast.castProvider;
  }
});
Object.defineProperty(exports, "fromExpression", {
  enumerable: true,
  get: function () {
    return _ast.fromExpression;
  }
});
Object.defineProperty(exports, "getByAlias", {
  enumerable: true,
  get: function () {
    return _get_by_alias.getByAlias;
  }
});
Object.defineProperty(exports, "getType", {
  enumerable: true,
  get: function () {
    return _get_type.getType;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _grammar.parse;
  }
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function () {
    return _registries.register;
  }
});
Object.defineProperty(exports, "registryFactory", {
  enumerable: true,
  get: function () {
    return _registries.registryFactory;
  }
});
Object.defineProperty(exports, "safeElementFromExpression", {
  enumerable: true,
  get: function () {
    return _ast.safeElementFromExpression;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return _ast.toExpression;
  }
});
var _ast = __webpack_require__(/*! ./lib/ast */ "../../../packages/osd-interpreter/target/common/lib/ast.js");
var _fn = __webpack_require__(/*! ./lib/fn */ "../../../packages/osd-interpreter/target/common/lib/fn.js");
var _get_type = __webpack_require__(/*! ./lib/get_type */ "../../../packages/osd-interpreter/target/common/lib/get_type.js");
var _cast = __webpack_require__(/*! ./lib/cast */ "../../../packages/osd-interpreter/target/common/lib/cast.js");
var _grammar = __webpack_require__(/*! ./lib/grammar */ "../../../packages/osd-interpreter/target/common/lib/grammar.js");
var _get_by_alias = __webpack_require__(/*! ./lib/get_by_alias */ "../../../packages/osd-interpreter/target/common/lib/get_by_alias.js");
var _registry = __webpack_require__(/*! ./lib/registry */ "../../../packages/osd-interpreter/target/common/lib/registry.js");
var _registries = __webpack_require__(/*! ./registries */ "../../../packages/osd-interpreter/target/common/registries.js");

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/arg.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/arg.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arg = Arg;
var _lodash = __webpack_require__(/*! lodash */ "lodash");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function Arg(config) {
  if (config.name === '_') throw Error('Arg names must not be _. Use it in aliases instead.');
  this.name = config.name;
  this.required = config.required || false;
  this.help = config.help || '';
  this.types = config.types || [];
  this.default = config.default;
  this.aliases = config.aliases || [];
  this.multi = config.multi == null ? false : config.multi;
  this.resolve = config.resolve == null ? true : config.resolve;
  this.options = config.options || [];
  this.accepts = type => {
    if (!this.types.length) return true;
    return (0, _lodash.includes)(config.types, type);
  };
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/ast.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/ast.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromExpression = fromExpression;
exports.safeElementFromExpression = safeElementFromExpression;
exports.toExpression = toExpression;
var _get_type = __webpack_require__(/*! ./get_type */ "../../../packages/osd-interpreter/target/common/lib/get_type.js");
var _grammar = __webpack_require__(/*! ./grammar */ "../../../packages/osd-interpreter/target/common/lib/grammar.js");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getArgumentString(arg, argKey) {
  let level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const type = (0, _get_type.getType)(arg);
  function maybeArgKey(argKey, argString) {
    return argKey == null || argKey === '_' ? argString : `${argKey}=${argString}`;
  }
  if (type === 'string') {
    // correctly (re)escape double quotes
    const escapedArg = arg.replace(/[\\"]/g, '\\$&'); // $& means the whole matched string
    return maybeArgKey(argKey, `"${escapedArg}"`);
  }
  if (type === 'boolean' || type === 'null' || type === 'number') {
    // use values directly
    return maybeArgKey(argKey, `${arg}`);
  }
  if (type === 'expression') {
    // build subexpressions
    return maybeArgKey(argKey, `{${getExpression(arg.chain, level + 1)}}`);
  }

  // unknown type, throw with type value
  throw new Error(`Invalid argument type in AST: ${type}`);
}
function getExpressionArgs(block) {
  let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const args = block.arguments;
  const hasValidArgs = typeof args === 'object' && args != null && !Array.isArray(args);
  if (!hasValidArgs) throw new Error('Arguments can only be an object');
  const argKeys = Object.keys(args);
  const MAX_LINE_LENGTH = 80; // length before wrapping arguments
  return argKeys.map(argKey => args[argKey].reduce((acc, arg) => {
    const argString = getArgumentString(arg, argKey, level);
    const lineLength = acc.split('\n').pop().length;

    // if arg values are too long, move it to the next line
    if (level === 0 && lineLength + argString.length > MAX_LINE_LENGTH) {
      return `${acc}\n  ${argString}`;
    }

    // append arg values to existing arg values
    if (lineLength > 0) return `${acc} ${argString}`;

    // start the accumulator with the first arg value
    return argString;
  }, ''));
}
function fnWithArgs(fnName, args) {
  if (!args || args.length === 0) return fnName;
  return `${fnName} ${args.join(' ')}`;
}
function getExpression(chain) {
  let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!chain) throw new Error('Expressions must contain a chain');

  // break new functions onto new lines if we're not in a nested/sub-expression
  const separator = level > 0 ? ' | ' : '\n| ';
  return chain.map(chainObj => {
    const type = (0, _get_type.getType)(chainObj);
    if (type === 'function') {
      const fn = chainObj.function;
      if (!fn || fn.length === 0) throw new Error('Functions must have a function name');
      const expArgs = getExpressionArgs(chainObj, level);
      return fnWithArgs(fn, expArgs);
    }
  }, []).join(separator);
}
function fromExpression(expression) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'expression';
  try {
    return (0, _grammar.parse)(String(expression), {
      startRule: type
    });
  } catch (e) {
    throw new Error(`Unable to parse expression: ${e.message}`);
  }
}

// TODO: OMG This is so bad, we need to talk about the right way to handle bad expressions since some are element based and others not
function safeElementFromExpression(expression) {
  try {
    return fromExpression(expression);
  } catch (e) {
    return fromExpression(`markdown
"## Crud.
Canvas could not parse this element's expression. I am so sorry this error isn't more useful. I promise it will be soon.

Thanks for understanding,
#### Management
"`);
  }
}

// TODO: Respect the user's existing formatting
function toExpression(astObj) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'expression';
  if (type === 'argument') return getArgumentString(astObj);
  const validType = ['expression', 'function'].includes((0, _get_type.getType)(astObj));
  if (!validType) throw new Error('Expression must be an expression or argument function');
  if ((0, _get_type.getType)(astObj) === 'expression') {
    if (!Array.isArray(astObj.chain)) throw new Error('Expressions must contain a chain');
    return getExpression(astObj.chain);
  }
  const expArgs = getExpressionArgs(astObj);
  return fnWithArgs(astObj.function, expArgs);
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/cast.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/cast.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castProvider = castProvider;
var _get_type = __webpack_require__(/*! ../lib/get_type */ "../../../packages/osd-interpreter/target/common/lib/get_type.js");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function castProvider(types) {
  return function cast(node, toTypeNames) {
    // If you don't give us anything to cast to, you'll get your input back
    if (!toTypeNames || toTypeNames.length === 0) return node;

    // No need to cast if node is already one of the valid types
    const fromTypeName = (0, _get_type.getType)(node);
    if (toTypeNames.includes(fromTypeName)) return node;
    const fromTypeDef = types[fromTypeName];
    for (let i = 0; i < toTypeNames.length; i++) {
      // First check if the current type can cast to this type
      if (fromTypeDef && fromTypeDef.castsTo(toTypeNames[i])) {
        return fromTypeDef.to(node, toTypeNames[i], types);
      }

      // If that isn't possible, check if this type can cast from the current type
      const toTypeDef = types[toTypeNames[i]];
      if (toTypeDef && toTypeDef.castsFrom(fromTypeName)) return toTypeDef.from(node, types);
    }
    throw new Error(`Can not cast '${fromTypeName}' to any of '${toTypeNames.join(', ')}'`);
  };
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/fn.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/fn.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fn = Fn;
var _lodash = __webpack_require__(/*! lodash */ "lodash");
var _arg = __webpack_require__(/*! ./arg */ "../../../packages/osd-interpreter/target/common/lib/arg.js");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function Fn(config) {
  // Required
  this.name = config.name; // Name of function

  // Return type of function.
  // This SHOULD be supplied. We use it for UI and autocomplete hinting,
  // We may also use it for optimizations in the future.
  this.type = config.type;
  this.aliases = config.aliases || [];

  // Function to run function (context, args)
  this.fn = function () {
    return Promise.resolve(config.fn(...arguments));
  };

  // Optional
  this.help = config.help || ''; // A short help text
  this.args = (0, _lodash.mapValues)(config.args || {}, (arg, name) => new _arg.Arg({
    name,
    ...arg
  }));
  this.context = config.context || {};
  this.accepts = type => {
    if (!this.context.types) return true; // If you don't tell us about context, we'll assume you don't care what you get
    return (0, _lodash.includes)(this.context.types, type); // Otherwise, check it
  };
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/get_by_alias.js":
/*!****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/get_by_alias.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByAlias = getByAlias;
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * This is used for looking up function/argument definitions. It looks through
 * the given object/array for a case-insensitive match, which could be either the
 * `name` itself, or something under the `aliases` property.
 */
function getByAlias(specs, name) {
  const lowerCaseName = name.toLowerCase();
  return Object.values(specs).find(_ref => {
    let {
      name,
      aliases
    } = _ref;
    if (name.toLowerCase() === lowerCaseName) return true;
    return (aliases || []).some(alias => {
      return alias.toLowerCase() === lowerCaseName;
    });
  });
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/get_type.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/get_type.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = getType;
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getType(node) {
  if (node == null) return 'null';
  if (typeof node === 'object') {
    if (!node.type) throw new Error('Objects must have a type property');
    return node.type;
  }
  return typeof node;
}

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/grammar.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/grammar.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}
function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = 'SyntaxError';
  if (typeof Error.captureStackTrace === 'function') {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}
peg$subclass(peg$SyntaxError, Error);
peg$SyntaxError.buildMessage = function (expected, found) {
  const DESCRIBE_EXPECTATION_FNS = {
    literal: function (expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },
    class: function (expectation) {
      let escapedParts = '';
      let i;
      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + '-' + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }
      return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
    },
    any: function (expectation) {
      return 'any character';
    },
    end: function (expectation) {
      return 'end of input';
    },
    other: function (expectation) {
      return expectation.description;
    }
  };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }
  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected) {
    const descriptions = new Array(expected.length);
    let i;
    let j;
    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + ' or ' + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(', ') + ', or ' + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found) {
    return found ? '"' + literalEscape(found) + '"' : 'end of input';
  }
  return 'Expected ' + describeExpected(expected) + ' but ' + describeFound(found) + ' found.';
};
function peg$parse(input, options) {
  options = options !== void 0 ? options : {};
  const peg$FAILED = {};
  const peg$startRuleFunctions = {
    expression: peg$parseexpression,
    argument: peg$parseargument
  };
  let peg$startRuleFunction = peg$parseexpression;
  const peg$c0 = '|';
  const peg$c1 = peg$literalExpectation('|', false);
  const peg$c2 = function (first, fn) {
    return fn;
  };
  const peg$c3 = function (first, rest) {
    return addMeta({
      type: 'expression',
      chain: [first].concat(rest)
    }, text(), location());
  };
  const peg$c4 = peg$otherExpectation('function');
  const peg$c5 = function (name, arg_list) {
    return addMeta({
      type: 'function',
      function: name,
      arguments: arg_list
    }, text(), location());
  };
  const peg$c6 = '=';
  const peg$c7 = peg$literalExpectation('=', false);
  const peg$c8 = function (name, value) {
    return {
      name,
      value
    };
  };
  const peg$c9 = function (value) {
    return {
      name: '_',
      value
    };
  };
  const peg$c10 = '$';
  const peg$c11 = peg$literalExpectation('$', false);
  const peg$c12 = '{';
  const peg$c13 = peg$literalExpectation('{', false);
  const peg$c14 = '}';
  const peg$c15 = peg$literalExpectation('}', false);
  const peg$c16 = function (expression) {
    return expression;
  };
  const peg$c17 = function (value) {
    return addMeta(value, text(), location());
  };
  const peg$c18 = function (arg) {
    return arg;
  };
  const peg$c19 = function (args) {
    return args.reduce((accumulator, _ref) => {
      let {
        name,
        value
      } = _ref;
      return {
        ...accumulator,
        [name]: (accumulator[name] || []).concat(value)
      };
    }, {});
  };
  const peg$c20 = /^[a-zA-Z0-9_\-]/;
  const peg$c21 = peg$classExpectation([['a', 'z'], ['A', 'Z'], ['0', '9'], '_', '-'], false, false);
  const peg$c22 = function (name) {
    return name.join('');
  };
  const peg$c23 = peg$otherExpectation('literal');
  const peg$c24 = '"';
  const peg$c25 = peg$literalExpectation('"', false);
  const peg$c26 = function (chars) {
    return chars.join('');
  };
  const peg$c27 = "'";
  const peg$c28 = peg$literalExpectation("'", false);
  const peg$c29 = function (string) {
    // this also matches nulls, booleans, and numbers
    const result = string.join('');
    // Sort of hacky, but PEG doesn't have backtracking so
    // a null/boolean/number rule is hard to read, and performs worse
    if (result === 'null') return null;
    if (result === 'true') return true;
    if (result === 'false') return false;
    if (isNaN(Number(result))) return result; // 5bears
    return Number(result);
  };
  const peg$c30 = /^[ \t\r\n]/;
  const peg$c31 = peg$classExpectation([' ', '\t', '\r', '\n'], false, false);
  const peg$c32 = '\\';
  const peg$c33 = peg$literalExpectation('\\', false);
  const peg$c34 = /^["'(){}<>[\]$`|= \t\n\r]/;
  const peg$c35 = peg$classExpectation(['"', "'", '(', ')', '{', '}', '<', '>', '[', ']', '$', '`', '|', '=', ' ', '\t', '\n', '\r'], false, false);
  const peg$c36 = function (sequence) {
    return sequence;
  };
  const peg$c37 = /^[^"'(){}<>[\]$`|= \t\n\r]/;
  const peg$c38 = peg$classExpectation(['"', "'", '(', ')', '{', '}', '<', '>', '[', ']', '$', '`', '|', '=', ' ', '\t', '\n', '\r'], true, false);
  const peg$c39 = /^[^"]/;
  const peg$c40 = peg$classExpectation(['"'], true, false);
  const peg$c41 = /^[^']/;
  const peg$c42 = peg$classExpectation(["'"], true, false);
  let peg$currPos = 0;
  let peg$savedPos = 0;
  const peg$posDetailsCache = [{
    line: 1,
    column: 1
  }];
  let peg$maxFailPos = 0;
  let peg$maxFailExpected = [];
  let peg$silentFails = 0;
  let peg$result;
  if ('startRule' in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error('Can\'t start parsing from rule "' + options.startRule + '".');
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }
  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }
  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: 'literal',
      text: text,
      ignoreCase: ignoreCase
    };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: 'class',
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }
  function peg$anyExpectation() {
    return {
      type: 'any'
    };
  }
  function peg$endExpectation() {
    return {
      type: 'end'
    };
  }
  function peg$otherExpectation(description) {
    return {
      type: 'other',
      description: description
    };
  }
  function peg$computePosDetails(pos) {
    let details = peg$posDetailsCache[pos];
    let p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    const startPosDetails = peg$computePosDetails(startPos);
    const endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected);
  }
  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }
  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }
  function peg$parseexpression() {
    let s0;
    let s1;
    let s2;
    let s3;
    let s4;
    let s5;
    let s6;
    let s7;
    s0 = peg$currPos;
    s1 = peg$parsespace();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsefunction();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 124) {
          s5 = peg$c0;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c1);
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parsespace();
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          if (s6 !== peg$FAILED) {
            s7 = peg$parsefunction();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c2(s2, s7);
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 124) {
            s5 = peg$c0;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c1);
            }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsespace();
            if (s6 === peg$FAILED) {
              s6 = null;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parsefunction();
              if (s7 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c2(s2, s7);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsefunction() {
    let s0;
    let s1;
    let s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseidentifier();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsearg_list();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c5(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c4);
      }
    }
    return s0;
  }
  function peg$parseargument_assignment() {
    let s0;
    let s1;
    let s2;
    let s3;
    let s4;
    let s5;
    s0 = peg$currPos;
    s1 = peg$parseidentifier();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsespace();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c6;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c7);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsespace();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseargument();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c8(s1, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseargument();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c9(s1);
      }
      s0 = s1;
    }
    return s0;
  }
  function peg$parseargument() {
    let s0;
    let s1;
    let s2;
    let s3;
    let s4;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 36) {
      s1 = peg$c10;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c11);
      }
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 123) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c13);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexpression();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s4 = peg$c14;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c15);
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c16(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseliteral();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c17(s1);
      }
      s0 = s1;
    }
    return s0;
  }
  function peg$parsearg_list() {
    let s0;
    let s1;
    let s2;
    let s3;
    let s4;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parsespace();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseargument_assignment();
      if (s4 !== peg$FAILED) {
        peg$savedPos = s2;
        s3 = peg$c18(s4);
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      s3 = peg$parsespace();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseargument_assignment();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c18(s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsespace();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c19(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseidentifier() {
    let s0;
    let s1;
    let s2;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c20.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c21);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c20.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c21);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c22(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseliteral() {
    let s0;
    let s1;
    peg$silentFails++;
    s0 = peg$parsephrase();
    if (s0 === peg$FAILED) {
      s0 = peg$parseunquoted_string_or_number();
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }
    return s0;
  }
  function peg$parsephrase() {
    let s0;
    let s1;
    let s2;
    let s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c24;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsedq_char();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsedq_char();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c24;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c26(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c27;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c28);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsesq_char();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsesq_char();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c27;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c28);
            }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c26(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parseunquoted_string_or_number() {
    let s0;
    let s1;
    let s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseunquoted();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseunquoted();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c29(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parsespace() {
    let s0;
    let s1;
    s0 = [];
    if (peg$c30.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c31);
      }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c30.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c31);
          }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseunquoted() {
    let s0;
    let s1;
    let s2;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c33);
      }
    }
    if (s1 !== peg$FAILED) {
      if (peg$c34.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c35);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 92) {
          s2 = peg$c32;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c33);
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (peg$c37.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c38);
        }
      }
    }
    return s0;
  }
  function peg$parsedq_char() {
    let s0;
    let s1;
    let s2;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c33);
      }
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c24;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c25);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 92) {
          s2 = peg$c32;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c33);
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c40);
        }
      }
    }
    return s0;
  }
  function peg$parsesq_char() {
    let s0;
    let s1;
    let s2;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c33);
      }
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 39) {
        s2 = peg$c27;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c28);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 92) {
          s2 = peg$c32;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c33);
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c36(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c42);
        }
      }
    }
    return s0;
  }
  function addMeta(node, text, _ref2) {
    let {
      start: {
        offset: start
      },
      end: {
        offset: end
      }
    } = _ref2;
    if (!options.addMeta) return node;
    return {
      node,
      text,
      start,
      end
    };
  }
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}
module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/lib/registry.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/lib/registry.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registry = void 0;
var _lodash = __webpack_require__(/*! lodash */ "lodash");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

class Registry {
  constructor() {
    let prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
    if (typeof prop !== 'string') throw new Error('Registry property name must be a string');
    this._prop = prop;
    this._indexed = new Object();
  }
  wrapper(obj) {
    return obj;
  }
  register(fn) {
    const obj = typeof fn === 'function' ? fn() : fn;
    if (typeof obj !== 'object' || !obj[this._prop]) {
      throw new Error(`Registered functions must return an object with a ${this._prop} property`);
    }
    this._indexed[obj[this._prop].toLowerCase()] = this.wrapper(obj);
  }
  toJS() {
    return Object.keys(this._indexed).reduce((acc, key) => {
      acc[key] = this.get(key);
      return acc;
    }, {});
  }
  toArray() {
    return Object.keys(this._indexed).map(key => this.get(key));
  }
  get(name) {
    if (name === undefined) return null;
    const lowerCaseName = name.toLowerCase();
    return this._indexed[lowerCaseName] ? (0, _lodash.clone)(this._indexed[lowerCaseName]) : null;
  }
  getProp() {
    return this._prop;
  }
  reset() {
    this._indexed = new Object();
  }
}
exports.Registry = Registry;

/***/ }),

/***/ "../../../packages/osd-interpreter/target/common/registries.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-interpreter/target/common/registries.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRegistries = addRegistries;
exports.register = register;
exports.registryFactory = registryFactory;
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Add a new set of registries to an existing set of registries.
 *
 * @param {*} registries - The existing set of registries
 * @param {*} newRegistries - The new set of registries
 */
function addRegistries(registries, newRegistries) {
  Object.keys(newRegistries).forEach(registryName => {
    if (registries[registryName]) {
      throw new Error(`There is already a registry named "${registryName}".`);
    }
    registries[registryName] = newRegistries[registryName];
  });
  return registries;
}

/**
 * Register a set of interpreter specs (functions, types, renderers, etc)
 *
 * @param {*} registries - The set of registries
 * @param {*} specs - The specs to be regsitered (e.g. { types: [], browserFunctions: [] })
 */
function register(registries, specs) {
  Object.keys(specs).forEach(registryName => {
    if (!registries[registryName]) {
      throw new Error(`There is no registry named "${registryName}".`);
    }
    if (!registries[registryName].register) {
      throw new Error(`Registry "${registryName}" must have a register function.`);
    }
    specs[registryName].forEach(f => registries[registryName].register(f));
  });
  return registries;
}

/**
 * A convenience function for exposing registries and register in a plugin-friendly way
 * as a global in the browser, and as server.plugins.interpreter.register | registries
 * on the server.
 *
 * @param {*} registries - The registries to wrap.
 */
function registryFactory(registries) {
  return {
    // This is a getter function. We can't make it a property or a proper
    // getter, because OpenSearch Dashboards server will improperly clone it.
    registries() {
      return registries;
    },
    register(specs) {
      return register(registries, specs);
    }
  };
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
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_expressions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=expressions!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=expressions!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_expressions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_expressions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/expressions/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/expressions/public */ "./public/index.ts"))
__osdBundles__.define('plugin/expressions/common', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/expressions/common */ "./common/index.ts"))
__osdBundles__.define('plugin/expressions/common/fonts', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/expressions/common/fonts */ "./common/fonts.ts"))

/***/ }),

/***/ "./common/ast/build_expression.ts":
/*!****************************************!*\
  !*** ./common/ast/build_expression.ts ***!
  \****************************************/
/*! exports provided: isExpressionAstBuilder, isExpressionAst, buildExpression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpressionAstBuilder", function() { return isExpressionAstBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpressionAst", function() { return isExpressionAst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExpression", function() { return buildExpression; });
/* harmony import */ var _build_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build_function */ "./common/ast/build_function.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "./common/ast/format.ts");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse */ "./common/ast/parse.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Type guard that checks whether a given value is an
 * `ExpressionAstExpressionBuilder`. This is useful when working
 * with subexpressions, where you might be retrieving a function
 * argument, and need to know whether it is an expression builder
 * instance which you can perform operations on.
 *
 * @example
 * const arg = myFunction.getArgument('foo');
 * if (isExpressionAstBuilder(foo)) {
 *   foo.toAst();
 * }
 *
 * @param val Value you want to check.
 * @return boolean
 */
function isExpressionAstBuilder(val) {
  return (val === null || val === void 0 ? void 0 : val.type) === 'expression_builder';
}

/** @internal */
function isExpressionAst(val) {
  return (val === null || val === void 0 ? void 0 : val.type) === 'expression';
}
const generateExpressionAst = fns => ({
  type: 'expression',
  chain: fns.map(fn => fn.toAst())
});

/**
 * Makes it easy to progressively build, update, and traverse an
 * expression AST. You can either start with an empty AST, or
 * provide an expression string, AST, or array of expression
 * function builders to use as initial state.
 *
 * @param initialState Optional. An expression string, AST, or array of `ExpressionAstFunctionBuilder[]`.
 * @return `this`
 */
function buildExpression(initialState) {
  const chainToFunctionBuilder = chain => chain.map(fn => Object(_build_function__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])(fn.function, fn.arguments));

  // Takes `initialState` and converts it to an array of `ExpressionAstFunctionBuilder`
  const extractFunctionsFromState = state => {
    if (typeof state === 'string') {
      return chainToFunctionBuilder(Object(_parse__WEBPACK_IMPORTED_MODULE_2__["parse"])(state, 'expression').chain);
    } else if (!Array.isArray(state)) {
      // If it isn't an array, it is an `ExpressionAstExpression`
      return chainToFunctionBuilder(state.chain);
    }
    return state;
  };
  const fns = initialState ? extractFunctionsFromState(initialState) : [];
  return {
    type: 'expression_builder',
    functions: fns,
    findFunction(fnName) {
      const foundFns = [];
      return fns.reduce((found, currFn) => {
        Object.values(currFn.arguments).forEach(values => {
          values.forEach(value => {
            if (isExpressionAstBuilder(value)) {
              // `value` is a subexpression, recurse and continue searching
              found = found.concat(value.findFunction(fnName));
            }
          });
        });
        if (currFn.name === fnName) {
          found.push(currFn);
        }
        return found;
      }, foundFns);
    },
    toAst() {
      if (fns.length < 1) {
        throw new Error('Functions have not been added to the expression builder');
      }
      return generateExpressionAst(fns);
    },
    toString() {
      if (fns.length < 1) {
        throw new Error('Functions have not been added to the expression builder');
      }
      return Object(_format__WEBPACK_IMPORTED_MODULE_1__["format"])(generateExpressionAst(fns), 'expression');
    }
  };
}

/***/ }),

/***/ "./common/ast/build_function.ts":
/*!**************************************!*\
  !*** ./common/ast/build_function.ts ***!
  \**************************************/
/*! exports provided: buildExpressionFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExpressionFunction", function() { return buildExpressionFunction; });
/* harmony import */ var _build_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build_expression */ "./common/ast/build_expression.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "./common/ast/format.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




// Infers the types from an ExpressionFunctionDefinition.
// @internal

// Shortcut for inferring args from a function definition.

// Gets a list of possible arg names for a given function.

// Gets all optional string keys from an interface.

// Represents the shape of arguments as they are stored
// in the function builder.

/**
 * Manages an AST for a single expression function. The return value
 * can be provided to `buildExpression` to add this function to an
 * expression.
 *
 * Note that to preserve type safety and ensure no args are missing,
 * all required arguments for the specified function must be provided
 * up front. If desired, they can be changed or removed later.
 *
 * @param fnName String representing the name of this expression function.
 * @param initialArgs Object containing the arguments to this function.
 * @return `this`
 */
function buildExpressionFunction(fnName,
/**
 * To support subexpressions, we override all args to also accept an
 * ExpressionBuilder. This isn't perfectly typesafe since we don't
 * know with certainty that the builder's output matches the required
 * argument input, so we trust that folks using subexpressions in the
 * builder know what they're doing.
 */
initialArgs) {
  const args = Object.entries(initialArgs).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value.map(v => {
        return Object(_build_expression__WEBPACK_IMPORTED_MODULE_0__["isExpressionAst"])(v) ? Object(_build_expression__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])(v) : v;
      });
    } else if (value !== undefined) {
      acc[key] = Object(_build_expression__WEBPACK_IMPORTED_MODULE_0__["isExpressionAst"])(value) ? [Object(_build_expression__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])(value)] : [value];
    } else {
      delete acc[key];
    }
    return acc;
  }, initialArgs);
  return {
    type: 'expression_function_builder',
    name: fnName,
    arguments: args,
    addArgument(key, value) {
      if (value !== undefined) {
        if (!args.hasOwnProperty(key)) {
          args[key] = [];
        }
        args[key].push(value);
      }
      return this;
    },
    getArgument(key) {
      if (!args.hasOwnProperty(key)) {
        return;
      }
      return args[key];
    },
    replaceArgument(key, values) {
      if (!args.hasOwnProperty(key)) {
        throw new Error('Argument to replace does not exist on this function');
      }
      args[key] = values;
      return this;
    },
    removeArgument(key) {
      delete args[key];
      return this;
    },
    toAst() {
      const ast = {};
      return {
        type: 'function',
        function: fnName,
        arguments: Object.entries(args).reduce((acc, [key, values]) => {
          acc[key] = values.map(val => {
            return Object(_build_expression__WEBPACK_IMPORTED_MODULE_0__["isExpressionAstBuilder"])(val) ? val.toAst() : val;
          });
          return acc;
        }, ast)
      };
    },
    toString() {
      return Object(_format__WEBPACK_IMPORTED_MODULE_1__["format"])({
        type: 'expression',
        chain: [this.toAst()]
      }, 'expression');
    }
  };
}

/***/ }),

/***/ "./common/ast/format.ts":
/*!******************************!*\
  !*** ./common/ast/format.ts ***!
  \******************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  toExpression
} = __webpack_require__(/*! @osd/interpreter/common */ "../../../packages/osd-interpreter/target/common/index.js");
function format(ast, type) {
  return toExpression(ast, type);
}

/***/ }),

/***/ "./common/ast/format_expression.ts":
/*!*****************************************!*\
  !*** ./common/ast/format_expression.ts ***!
  \*****************************************/
/*! exports provided: formatExpression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatExpression", function() { return formatExpression; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./common/ast/format.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Given expression pipeline AST, returns formatted string.
 *
 * @param ast Expression pipeline AST.
 */
function formatExpression(ast) {
  return Object(_format__WEBPACK_IMPORTED_MODULE_0__["format"])(ast, 'expression');
}

/***/ }),

/***/ "./common/ast/index.ts":
/*!*****************************!*\
  !*** ./common/ast/index.ts ***!
  \*****************************/
/*! exports provided: isExpressionAstBuilder, isExpressionAst, buildExpression, buildExpressionFunction, formatExpression, format, parseExpression, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build_expression */ "./common/ast/build_expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionAstBuilder", function() { return _build_expression__WEBPACK_IMPORTED_MODULE_0__["isExpressionAstBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionAst", function() { return _build_expression__WEBPACK_IMPORTED_MODULE_0__["isExpressionAst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpression", function() { return _build_expression__WEBPACK_IMPORTED_MODULE_0__["buildExpression"]; });

/* harmony import */ var _build_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build_function */ "./common/ast/build_function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpressionFunction", function() { return _build_function__WEBPACK_IMPORTED_MODULE_1__["buildExpressionFunction"]; });

/* harmony import */ var _format_expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format_expression */ "./common/ast/format_expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatExpression", function() { return _format_expression__WEBPACK_IMPORTED_MODULE_2__["formatExpression"]; });

/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ "./common/ast/format.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format__WEBPACK_IMPORTED_MODULE_3__["format"]; });

/* harmony import */ var _parse_expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse_expression */ "./common/ast/parse_expression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExpression", function() { return _parse_expression__WEBPACK_IMPORTED_MODULE_4__["parseExpression"]; });

/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse */ "./common/ast/parse.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse__WEBPACK_IMPORTED_MODULE_5__["parse"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./common/ast/types.ts");
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









/***/ }),

/***/ "./common/ast/parse.ts":
/*!*****************************!*\
  !*** ./common/ast/parse.ts ***!
  \*****************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  parse: parseRaw
} = __webpack_require__(/*! @osd/interpreter/common */ "../../../packages/osd-interpreter/target/common/index.js");
function parse(expression, startRule) {
  try {
    return parseRaw(String(expression), {
      startRule
    });
  } catch (e) {
    throw new Error(`Unable to parse expression: ${e.message}`);
  }
}

/***/ }),

/***/ "./common/ast/parse_expression.ts":
/*!****************************************!*\
  !*** ./common/ast/parse_expression.ts ***!
  \****************************************/
/*! exports provided: parseExpression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExpression", function() { return parseExpression; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./common/ast/parse.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Given expression pipeline string, returns parsed AST.
 *
 * @param expression Expression pipeline string.
 */
function parseExpression(expression) {
  return Object(_parse__WEBPACK_IMPORTED_MODULE_0__["parse"])(expression, 'expression');
}

/***/ }),

/***/ "./common/ast/types.ts":
/*!*****************************!*\
  !*** ./common/ast/types.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/execution/container.ts":
/*!***************************************!*\
  !*** ./common/execution/container.ts ***!
  \***************************************/
/*! exports provided: executionPureTransitions, createExecutionContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executionPureTransitions", function() { return executionPureTransitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExecutionContainer", function() { return createExecutionContainer; });
/* harmony import */ var _opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/common/state_containers */ "plugin/opensearchDashboardsUtils/common/state_containers");
/* harmony import */ var _opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _executor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../executor */ "./common/executor/index.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const executionDefaultState = {
  ..._executor__WEBPACK_IMPORTED_MODULE_1__["defaultState"],
  state: 'not-started',
  ast: {
    type: 'expression',
    chain: []
  }
};
const executionPureTransitions = {
  start: state => () => ({
    ...state,
    state: 'pending'
  }),
  setResult: state => result => ({
    ...state,
    state: 'result',
    result
  }),
  setError: state => error => ({
    ...state,
    state: 'error',
    error
  })
};
const freeze = state => state;
const createExecutionContainer = (state = executionDefaultState) => {
  const container = Object(_opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__["createStateContainer"])(state, executionPureTransitions, {}, {
    freeze
  });
  return container;
};

/***/ }),

/***/ "./common/execution/execution.ts":
/*!***************************************!*\
  !*** ./common/execution/execution.ts ***!
  \***************************************/
/*! exports provided: Execution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Execution", function() { return Execution; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./common/execution/container.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./common/util/index.ts");
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/common */ "plugin/opensearchDashboardsUtils/common");
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_common_utils_abort_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/common/utils/abort_utils */ "plugin/data/common/utils/abort_utils");
/* harmony import */ var _data_common_utils_abort_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_common_utils_abort_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inspector/common */ "plugin/inspector/common");
/* harmony import */ var _inspector_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inspector_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _expression_types_specs_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../expression_types/specs/error */ "./common/expression_types/specs/error.ts");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ast */ "./common/ast/index.ts");
/* harmony import */ var _expression_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../expression_types */ "./common/expression_types/index.ts");
/* harmony import */ var _util_get_by_alias__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/get_by_alias */ "./common/util/get_by_alias.ts");
/* harmony import */ var _execution_contract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./execution_contract */ "./common/execution/execution_contract.ts");
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












const createAbortErrorValue = () => Object(_util__WEBPACK_IMPORTED_MODULE_2__["createError"])({
  message: 'The expression was aborted.',
  name: 'AbortError'
});
const createDefaultInspectorAdapters = () => ({
  requests: new _inspector_common__WEBPACK_IMPORTED_MODULE_5__["RequestAdapter"](),
  data: new _inspector_common__WEBPACK_IMPORTED_MODULE_5__["DataAdapter"]()
});
class Execution {
  /**
   * Races a given promise against the "abort" event of `abortController`.
   */
  race(promise) {
    return Promise.race([this.abortRejection.promise, promise]);
  }

  /**
   * Whether .start() method has been called.
   */

  get result() {
    return this.firstResultFuture.promise;
  }
  get inspectorAdapters() {
    return this.context.inspectorAdapters;
  }
  constructor(params) {
    this.params = params;
    /**
     * Dynamic state of the execution.
     */
    _defineProperty(this, "state", void 0);
    /**
     * Initial input of the execution.
     *
     * N.B. It is initialized to `null` rather than `undefined` for legacy reasons,
     * because in legacy interpreter it was set to `null` by default.
     */
    _defineProperty(this, "input", null);
    /**
     * Execution context - object that allows to do side-effects. Context is passed
     * to every function.
     */
    _defineProperty(this, "context", void 0);
    /**
     * AbortController to cancel this Execution.
     */
    _defineProperty(this, "abortController", new AbortController());
    /**
     * Promise that rejects if/when abort controller sends "abort" signal.
     */
    _defineProperty(this, "abortRejection", Object(_data_common_utils_abort_utils__WEBPACK_IMPORTED_MODULE_4__["toPromise"])(this.abortController.signal));
    _defineProperty(this, "hasStarted", false);
    /**
     * Future that tracks result or error of this execution.
     */
    _defineProperty(this, "firstResultFuture", new _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__["Defer"]());
    /**
     * Contract is a public representation of `Execution` instances. Contract we
     * can return to other plugins for their consumption.
     */
    _defineProperty(this, "contract", new _execution_contract__WEBPACK_IMPORTED_MODULE_10__["ExecutionContract"](this));
    _defineProperty(this, "expression", void 0);
    const {
      executor
    } = params;
    if (!params.ast && !params.expression) {
      throw new TypeError('Execution params should contain at least .ast or .expression key.');
    } else if (params.ast && params.expression) {
      throw new TypeError('Execution params cannot contain both .ast and .expression key.');
    }
    this.expression = params.expression || Object(_ast__WEBPACK_IMPORTED_MODULE_7__["formatExpression"])(params.ast);
    const ast = params.ast || Object(_ast__WEBPACK_IMPORTED_MODULE_7__["parseExpression"])(this.expression);
    this.state = Object(_container__WEBPACK_IMPORTED_MODULE_1__["createExecutionContainer"])({
      ...executor.state.get(),
      state: 'not-started',
      ast
    });
    this.context = {
      getInitialInput: () => this.input,
      variables: {},
      types: executor.getTypes(),
      abortSignal: this.abortController.signal,
      ...(params.context || {}),
      inspectorAdapters: params.context && params.context.inspectorAdapters ? params.context.inspectorAdapters : createDefaultInspectorAdapters()
    };
  }

  /**
   * Stop execution of expression.
   */
  cancel() {
    this.abortController.abort();
  }

  /**
   * Call this method to start execution.
   *
   * N.B. `input` is initialized to `null` rather than `undefined` for legacy reasons,
   * because in legacy interpreter it was set to `null` by default.
   */
  start(input = null) {
    if (this.hasStarted) throw new Error('Execution already started.');
    this.hasStarted = true;
    this.input = input;
    this.state.transitions.start();
    const {
      resolve,
      reject
    } = this.firstResultFuture;
    const chainPromise = this.invokeChain(this.state.get().ast.chain, input);
    this.race(chainPromise).then(resolve, error => {
      if (this.abortController.signal.aborted) resolve(createAbortErrorValue());else reject(error);
    });
    this.firstResultFuture.promise.then(result => {
      this.state.transitions.setResult(result);
    }, error => {
      this.state.transitions.setError(error);
    }).finally(() => this.abortRejection.cleanup());
  }
  async invokeChain(chainArr, input) {
    if (!chainArr.length) return input;
    for (const link of chainArr) {
      const {
        function: fnName,
        arguments: fnArgs
      } = link;
      const fn = Object(_util_get_by_alias__WEBPACK_IMPORTED_MODULE_9__["getByAlias"])(this.state.get().functions, fnName);
      if (!fn) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_2__["createError"])({
          message: `Function ${fnName} could not be found.`
        });
      }
      let args = {};
      let timeStart;
      try {
        // `resolveArgs` returns an object because the arguments themselves might
        // actually have a `then` function which would be treated as a `Promise`.
        const {
          resolvedArgs
        } = await this.race(this.resolveArgs(fn, input, fnArgs));
        args = resolvedArgs;
        timeStart = this.params.debug ? Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__["now"])() : 0;
        const output = await this.race(this.invokeFunction(fn, input, resolvedArgs));
        if (this.params.debug) {
          const timeEnd = Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__["now"])();
          link.debug = {
            success: true,
            fn: fn.name,
            input,
            args: resolvedArgs,
            output,
            duration: timeEnd - timeStart
          };
        }
        if (Object(_expression_types__WEBPACK_IMPORTED_MODULE_8__["getType"])(output) === 'error') return output;
        input = output;
      } catch (rawError) {
        const timeEnd = this.params.debug ? Object(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_3__["now"])() : 0;
        const error = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createError"])(rawError);
        error.error.message = `[${fnName}] > ${error.error.message}`;
        if (this.params.debug) {
          link.debug = {
            success: false,
            fn: fn.name,
            input,
            args,
            error,
            rawError,
            duration: timeStart ? timeEnd - timeStart : undefined
          };
        }
        return error;
      }
    }
    return input;
  }
  async invokeFunction(fn, input, args) {
    const normalizedInput = this.cast(input, fn.inputTypes);
    const output = await this.race(fn.fn(normalizedInput, args, this.context));

    // Validate that the function returned the type it said it would.
    // This isn't required, but it keeps function developers honest.
    const returnType = Object(_expression_types__WEBPACK_IMPORTED_MODULE_8__["getType"])(output);
    const expectedType = fn.type;
    if (expectedType && returnType !== expectedType) {
      throw new Error(`Function '${fn.name}' should return '${expectedType}',` + ` actually returned '${returnType}'`);
    }

    // Validate the function output against the type definition's validate function.
    const type = this.context.types[fn.type];
    if (type && type.validate) {
      try {
        type.validate(output);
      } catch (e) {
        throw new Error(`Output of '${fn.name}' is not a valid type '${fn.type}': ${e}`);
      }
    }
    return output;
  }
  cast(value, toTypeNames) {
    // If you don't give us anything to cast to, you'll get your input back
    if (!toTypeNames || toTypeNames.length === 0) return value;

    // No need to cast if node is already one of the valid types
    const fromTypeName = Object(_expression_types__WEBPACK_IMPORTED_MODULE_8__["getType"])(value);
    if (toTypeNames.includes(fromTypeName)) return value;
    const {
      types
    } = this.state.get();
    const fromTypeDef = types[fromTypeName];
    for (const toTypeName of toTypeNames) {
      // First check if the current type can cast to this type
      if (fromTypeDef && fromTypeDef.castsTo(toTypeName)) {
        return fromTypeDef.to(value, toTypeName, types);
      }

      // If that isn't possible, check if this type can cast from the current type
      const toTypeDef = types[toTypeName];
      if (toTypeDef && toTypeDef.castsFrom(fromTypeName)) return toTypeDef.from(value, types);
    }
    throw new Error(`Can not cast '${fromTypeName}' to any of '${toTypeNames.join(', ')}'`);
  }

  // Processes the multi-valued AST argument values into arguments that can be passed to the function
  async resolveArgs(fnDef, input, argAsts) {
    const argDefs = fnDef.args;

    // Use the non-alias name from the argument definition
    const dealiasedArgAsts = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(argAsts, (acc, argAst, argName) => {
      const argDef = Object(_util_get_by_alias__WEBPACK_IMPORTED_MODULE_9__["getByAlias"])(argDefs, argName);
      if (!argDef) {
        throw new Error(`Unknown argument '${argName}' passed to function '${fnDef.name}'`);
      }
      acc[argDef.name] = (acc[argDef.name] || []).concat(argAst);
      return acc;
    }, {});

    // Check for missing required arguments.
    for (const argDef of Object.values(argDefs)) {
      const {
        aliases,
        default: argDefault,
        name: argName,
        required
      } = argDef;
      if (typeof argDefault !== 'undefined' || !required || typeof dealiasedArgAsts[argName] !== 'undefined') continue;
      if (!aliases || aliases.length === 0) {
        throw new Error(`${fnDef.name} requires an argument`);
      }

      // use an alias if _ is the missing arg
      const errorArg = argName === '_' ? aliases[0] : argName;
      throw new Error(`${fnDef.name} requires an "${errorArg}" argument`);
    }

    // Fill in default values from argument definition
    const argAstsWithDefaults = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(argDefs, (acc, argDef, argName) => {
      if (typeof acc[argName] === 'undefined' && typeof argDef.default !== 'undefined') {
        acc[argName] = [Object(_ast__WEBPACK_IMPORTED_MODULE_7__["parse"])(argDef.default, 'argument')];
      }
      return acc;
    }, dealiasedArgAsts);

    // Create the functions to resolve the argument ASTs into values
    // These are what are passed to the actual functions if you opt out of resolving
    const resolveArgFns = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(argAstsWithDefaults, (asts, argName) => {
      return asts.map(item => {
        return async (subInput = input) => {
          const output = await this.interpret(item, subInput, {
            debug: this.params.debug
          });
          if (Object(_expression_types_specs_error__WEBPACK_IMPORTED_MODULE_6__["isExpressionValueError"])(output)) throw output.error;
          const casted = this.cast(output, argDefs[argName].types);
          return casted;
        };
      });
    });
    const argNames = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["keys"])(resolveArgFns);

    // Actually resolve unless the argument definition says not to
    const resolvedArgValues = await Promise.all(argNames.map(argName => {
      const interpretFns = resolveArgFns[argName];
      if (!argDefs[argName].resolve) return interpretFns;
      return Promise.all(interpretFns.map(fn => fn()));
    }));
    const resolvedMultiArgs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["zipObject"])(argNames, resolvedArgValues);

    // Just return the last unless the argument definition allows multiple
    const resolvedArgs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapValues"])(resolvedMultiArgs, (argValues, argName) => {
      if (argDefs[argName].multi) return argValues;
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(argValues);
    });

    // Return an object here because the arguments themselves might actually have a 'then'
    // function which would be treated as a promise
    return {
      resolvedArgs
    };
  }
  async interpret(ast, input, options) {
    switch (Object(_expression_types__WEBPACK_IMPORTED_MODULE_8__["getType"])(ast)) {
      case 'expression':
        const execution = this.params.executor.createExecution(ast, this.context, options);
        execution.start(input);
        return await execution.result;
      case 'string':
      case 'number':
      case 'null':
      case 'boolean':
        return ast;
      default:
        throw new Error(`Unknown AST object: ${JSON.stringify(ast)}`);
    }
  }
}

/***/ }),

/***/ "./common/execution/execution_contract.ts":
/*!************************************************!*\
  !*** ./common/execution/execution_contract.ts ***!
  \************************************************/
/*! exports provided: ExecutionContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionContract", function() { return ExecutionContract; });
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
 * `ExecutionContract` is a wrapper around `Execution` class. It provides the
 * same functionality but does not expose Expressions plugin internals.
 */
class ExecutionContract {
  get isPending() {
    const state = this.execution.state.get().state;
    const finished = state === 'error' || state === 'result';
    return !finished;
  }
  constructor(execution) {
    this.execution = execution;
    /**
     * Cancel the execution of the expression. This will set abort signal
     * (available in execution context) to aborted state, letting expression
     * functions to stop their execution.
     */
    _defineProperty(this, "cancel", () => {
      this.execution.cancel();
    });
    /**
     * Returns the final output of expression, if any error happens still
     * wraps that error into `ExpressionValueError` type and returns that.
     * This function never throws.
     */
    _defineProperty(this, "getData", async () => {
      try {
        return await this.execution.result;
      } catch (e) {
        return {
          type: 'error',
          error: {
            type: e.type,
            message: e.message,
            stack: e.stack
          }
        };
      }
    });
    /**
     * Get string representation of the expression. Returns the original string
     * if execution was started from a string. If execution was started from an
     * AST this method returns a string generated from AST.
     */
    _defineProperty(this, "getExpression", () => {
      return this.execution.expression;
    });
    /**
     * Get AST used to execute the expression.
     */
    _defineProperty(this, "getAst", () => this.execution.state.get().ast);
    /**
     * Get Inspector adapters provided to all functions of expression through
     * execution context.
     */
    _defineProperty(this, "inspect", () => this.execution.inspectorAdapters);
  }
}

/***/ }),

/***/ "./common/execution/index.ts":
/*!***********************************!*\
  !*** ./common/execution/index.ts ***!
  \***********************************/
/*! exports provided: executionPureTransitions, createExecutionContainer, Execution, ExecutionContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/execution/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./common/execution/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executionPureTransitions", function() { return _container__WEBPACK_IMPORTED_MODULE_1__["executionPureTransitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExecutionContainer", function() { return _container__WEBPACK_IMPORTED_MODULE_1__["createExecutionContainer"]; });

/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./execution */ "./common/execution/execution.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Execution", function() { return _execution__WEBPACK_IMPORTED_MODULE_2__["Execution"]; });

/* harmony import */ var _execution_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./execution_contract */ "./common/execution/execution_contract.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContract", function() { return _execution_contract__WEBPACK_IMPORTED_MODULE_3__["ExecutionContract"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/execution/types.ts":
/*!***********************************!*\
  !*** ./common/execution/types.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/executor/container.ts":
/*!**************************************!*\
  !*** ./common/executor/container.ts ***!
  \**************************************/
/*! exports provided: defaultState, pureTransitions, pureSelectors, createExecutorContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureTransitions", function() { return pureTransitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureSelectors", function() { return pureSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExecutorContainer", function() { return createExecutorContainer; });
/* harmony import */ var _opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/common/state_containers */ "plugin/opensearchDashboardsUtils/common/state_containers");
/* harmony import */ var _opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const defaultState = {
  functions: {},
  types: {},
  context: {}
};
const pureTransitions = {
  addFunction: state => fn => ({
    ...state,
    functions: {
      ...state.functions,
      [fn.name]: fn
    }
  }),
  addType: state => type => ({
    ...state,
    types: {
      ...state.types,
      [type.name]: type
    }
  }),
  extendContext: state => extraContext => ({
    ...state,
    context: {
      ...state.context,
      ...extraContext
    }
  })
};
const pureSelectors = {
  getFunction: state => id => state.functions[id] || null,
  getType: state => id => state.types[id] || null,
  getContext: ({
    context
  }) => () => context
};
const createExecutorContainer = (state = defaultState) => {
  const container = Object(_opensearch_dashboards_utils_common_state_containers__WEBPACK_IMPORTED_MODULE_0__["createStateContainer"])(state, pureTransitions, pureSelectors);
  return container;
};

/***/ }),

/***/ "./common/executor/executor.ts":
/*!*************************************!*\
  !*** ./common/executor/executor.ts ***!
  \*************************************/
/*! exports provided: TypesRegistry, FunctionsRegistry, Executor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesRegistry", function() { return TypesRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegistry", function() { return FunctionsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Executor", function() { return Executor; });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./common/executor/container.ts");
/* harmony import */ var _expression_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expression_functions */ "./common/expression_functions/index.ts");
/* harmony import */ var _execution_execution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../execution/execution */ "./common/execution/execution.ts");
/* harmony import */ var _expression_types_expression_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expression_types/expression_type */ "./common/expression_types/expression_type.ts");
/* harmony import */ var _expression_types_specs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expression_types/specs */ "./common/expression_types/specs/index.ts");
/* harmony import */ var _expression_functions_specs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../expression_functions/specs */ "./common/expression_functions/specs/index.ts");
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







class TypesRegistry {
  constructor(executor) {
    this.executor = executor;
  }
  register(typeDefinition) {
    this.executor.registerType(typeDefinition);
  }
  get(id) {
    return this.executor.state.selectors.getType(id);
  }
  toJS() {
    return this.executor.getTypes();
  }
  toArray() {
    return Object.values(this.toJS());
  }
}
class FunctionsRegistry {
  constructor(executor) {
    this.executor = executor;
  }
  register(functionDefinition) {
    this.executor.registerFunction(functionDefinition);
  }
  get(id) {
    return this.executor.state.selectors.getFunction(id);
  }
  toJS() {
    return this.executor.getFunctions();
  }
  toArray() {
    return Object.values(this.toJS());
  }
}
class Executor {
  static createWithDefaults(state) {
    const executor = new Executor(state);
    for (const type of _expression_types_specs__WEBPACK_IMPORTED_MODULE_4__["typeSpecs"]) executor.registerType(type);
    for (const func of _expression_functions_specs__WEBPACK_IMPORTED_MODULE_5__["functionSpecs"]) executor.registerFunction(func);
    return executor;
  }
  constructor(state) {
    _defineProperty(this, "state", void 0);
    /**
     * @deprecated
     */
    _defineProperty(this, "functions", void 0);
    /**
     * @deprecated
     */
    _defineProperty(this, "types", void 0);
    this.state = Object(_container__WEBPACK_IMPORTED_MODULE_0__["createExecutorContainer"])(state);
    this.functions = new FunctionsRegistry(this);
    this.types = new TypesRegistry(this);
  }
  registerFunction(functionDefinition) {
    const fn = new _expression_functions__WEBPACK_IMPORTED_MODULE_1__["ExpressionFunction"](typeof functionDefinition === 'object' ? functionDefinition : functionDefinition());
    this.state.transitions.addFunction(fn);
  }
  getFunction(name) {
    return this.state.get().functions[name];
  }
  getFunctions() {
    return {
      ...this.state.get().functions
    };
  }
  registerType(typeDefinition) {
    const type = new _expression_types_expression_type__WEBPACK_IMPORTED_MODULE_3__["ExpressionType"](typeof typeDefinition === 'object' ? typeDefinition : typeDefinition());
    this.state.transitions.addType(type);
  }
  getType(name) {
    return this.state.get().types[name];
  }
  getTypes() {
    return {
      ...this.state.get().types
    };
  }
  extendContext(extraContext) {
    this.state.transitions.extendContext(extraContext);
  }
  get context() {
    return this.state.selectors.getContext();
  }

  /**
   * Execute expression and return result.
   *
   * @param ast Expression AST or a string representing expression.
   * @param input Initial input to the first expression function.
   * @param context Extra global context object that will be merged into the
   *    expression global context object that is provided to each function to allow side-effects.
   */
  async run(ast, input, context) {
    const execution = this.createExecution(ast, context);
    execution.start(input);
    return await execution.result;
  }
  createExecution(ast, context = {}, {
    debug
  } = {}) {
    const params = {
      executor: this,
      context: {
        ...this.context,
        ...context
      },
      debug
    };
    if (typeof ast === 'string') params.expression = ast;else params.ast = ast;
    const execution = new _execution_execution__WEBPACK_IMPORTED_MODULE_2__["Execution"](params);
    return execution;
  }
  fork() {
    const initialState = this.state.get();
    const fork = new Executor(initialState);

    /**
     * Synchronize registry state - make any new types, functions and context
     * also available in the forked instance of `Executor`.
     */
    this.state.state$.subscribe(({
      types,
      functions,
      context
    }) => {
      const state = fork.state.get();
      fork.state.set({
        ...state,
        types: {
          ...types,
          ...state.types
        },
        functions: {
          ...functions,
          ...state.functions
        },
        context: {
          ...context,
          ...state.context
        }
      });
    });
    return fork;
  }
}

/***/ }),

/***/ "./common/executor/index.ts":
/*!**********************************!*\
  !*** ./common/executor/index.ts ***!
  \**********************************/
/*! exports provided: defaultState, pureTransitions, pureSelectors, createExecutorContainer, TypesRegistry, FunctionsRegistry, Executor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./common/executor/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["defaultState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pureTransitions", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["pureTransitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pureSelectors", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["pureSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExecutorContainer", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["createExecutorContainer"]; });

/* harmony import */ var _executor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executor */ "./common/executor/executor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesRegistry", function() { return _executor__WEBPACK_IMPORTED_MODULE_1__["TypesRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegistry", function() { return _executor__WEBPACK_IMPORTED_MODULE_1__["FunctionsRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Executor", function() { return _executor__WEBPACK_IMPORTED_MODULE_1__["Executor"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/expression_functions/arguments.ts":
/*!**************************************************!*\
  !*** ./common/expression_functions/arguments.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/expression_functions/expression_function.ts":
/*!************************************************************!*\
  !*** ./common/expression_functions/expression_function.ts ***!
  \************************************************************/
/*! exports provided: ExpressionFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunction", function() { return ExpressionFunction; });
/* harmony import */ var _expression_function_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression_function_parameter */ "./common/expression_functions/expression_function_parameter.ts");
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


class ExpressionFunction {
  constructor(functionDefinition) {
    /**
     * Name of function
     */
    _defineProperty(this, "name", void 0);
    /**
     * Aliases that can be used instead of `name`.
     */
    _defineProperty(this, "aliases", void 0);
    /**
     * Return type of function. This SHOULD be supplied. We use it for UI
     * and autocomplete hinting. We may also use it for optimizations in
     * the future.
     */
    _defineProperty(this, "type", void 0);
    /**
     * Function to run function (context, args)
     */
    _defineProperty(this, "fn", void 0);
    /**
     * A short help text.
     */
    _defineProperty(this, "help", void 0);
    /**
     * Specification of expression function parameters.
     */
    _defineProperty(this, "args", {});
    /**
     * Type of inputs that this function supports.
     */
    _defineProperty(this, "inputTypes", void 0);
    _defineProperty(this, "accepts", type => {
      // If you don't tell us input types, we'll assume you don't care what you get.
      if (!this.inputTypes) return true;
      return this.inputTypes.indexOf(type) > -1;
    });
    const {
      name,
      type: _type,
      aliases,
      fn,
      help,
      args,
      inputTypes,
      context
    } = functionDefinition;
    this.name = name;
    this.type = _type;
    this.aliases = aliases || [];
    this.fn = (input, params, handlers) => Promise.resolve(fn(input, params, handlers));
    this.help = help || '';
    this.inputTypes = inputTypes || (context === null || context === void 0 ? void 0 : context.types);
    for (const [key, arg] of Object.entries(args || {})) {
      this.args[key] = new _expression_function_parameter__WEBPACK_IMPORTED_MODULE_0__["ExpressionFunctionParameter"](key, arg);
    }
  }
}

/***/ }),

/***/ "./common/expression_functions/expression_function_parameter.ts":
/*!**********************************************************************!*\
  !*** ./common/expression_functions/expression_function_parameter.ts ***!
  \**********************************************************************/
/*! exports provided: ExpressionFunctionParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionParameter", function() { return ExpressionFunctionParameter; });
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

class ExpressionFunctionParameter {
  constructor(name, arg) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "required", void 0);
    _defineProperty(this, "help", void 0);
    _defineProperty(this, "types", void 0);
    _defineProperty(this, "default", void 0);
    _defineProperty(this, "aliases", void 0);
    _defineProperty(this, "multi", void 0);
    _defineProperty(this, "resolve", void 0);
    _defineProperty(this, "options", void 0);
    const {
      required,
      help,
      types,
      aliases,
      multi,
      resolve,
      options
    } = arg;
    if (name === '_') {
      throw Error('Arg names must not be _. Use it in aliases instead.');
    }
    this.name = name;
    this.required = !!required;
    this.help = help || '';
    this.types = types || [];
    this.default = arg.default;
    this.aliases = aliases || [];
    this.multi = !!multi;
    this.resolve = resolve == null ? true : resolve;
    this.options = options || [];
  }
  accepts(type) {
    if (!this.types.length) return true;
    return this.types.indexOf(type) > -1;
  }
}

/***/ }),

/***/ "./common/expression_functions/index.ts":
/*!**********************************************!*\
  !*** ./common/expression_functions/index.ts ***!
  \**********************************************/
/*! exports provided: ExpressionFunctionParameter, ExpressionFunction, functionSpecs, clog, font, opensearchDashboards, opensearchDashboardsContextFunction, variableSet, variable, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/expression_functions/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arguments */ "./common/expression_functions/arguments.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _expression_function_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression_function_parameter */ "./common/expression_functions/expression_function_parameter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionParameter", function() { return _expression_function_parameter__WEBPACK_IMPORTED_MODULE_2__["ExpressionFunctionParameter"]; });

/* harmony import */ var _expression_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expression_function */ "./common/expression_functions/expression_function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunction", function() { return _expression_function__WEBPACK_IMPORTED_MODULE_3__["ExpressionFunction"]; });

/* harmony import */ var _specs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specs */ "./common/expression_functions/specs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionSpecs", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["functionSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clog", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["clog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "font", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboards", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContextFunction", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboardsContextFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variableSet", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["variableSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["variable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["theme"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/expression_functions/specs/clog.ts":
/*!***************************************************!*\
  !*** ./common/expression_functions/specs/clog.ts ***!
  \***************************************************/
/*! exports provided: clog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clog", function() { return clog; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const clog = {
  name: 'clog',
  args: {},
  help: 'Outputs the context to the console',
  fn: input => {
    // eslint-disable-next-line no-console
    console.log(input);
    return input;
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/font.ts":
/*!***************************************************!*\
  !*** ./common/expression_functions/specs/font.ts ***!
  \***************************************************/
/*! exports provided: font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "font", function() { return font; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fonts */ "./common/fonts.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./common/types/index.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const dashify = str => {
  return str.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, m => /[À-ž]/.test(m) ? m : '-').replace(/^-+|-+$/g, '').toLowerCase();
};
const inlineStyle = obj => {
  if (!obj) return '';
  const styles = Object.keys(obj).map(key => {
    const prop = dashify(key);
    const line = prop.concat(':').concat(String(obj[key]));
    return line;
  });
  return styles.join(';');
};
const font = {
  name: 'font',
  aliases: [],
  type: 'style',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.fontHelpText', {
    defaultMessage: 'Create a font style.'
  }),
  inputTypes: ['null'],
  args: {
    align: {
      default: '{ theme "font.align" default="left" }',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.alignHelpText', {
        defaultMessage: 'The horizontal text alignment.'
      }),
      options: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["TextAlignment"]),
      types: ['string']
    },
    color: {
      default: `{ theme "font.color" }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.colorHelpText', {
        defaultMessage: 'The text color.'
      }),
      types: ['string']
    },
    family: {
      default: `{ theme "font.family" default="${_fonts__WEBPACK_IMPORTED_MODULE_1__["openSans"].value}" }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.familyHelpText', {
        defaultMessage: 'An acceptable {css} web font string',
        values: {
          css: 'CSS'
        }
      }),
      types: ['string']
    },
    italic: {
      default: `{ theme "font.italic" default=false }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.italicHelpText', {
        defaultMessage: 'Italicize the text?'
      }),
      options: [true, false],
      types: ['boolean']
    },
    lHeight: {
      default: `{ theme "font.lHeight" }`,
      aliases: ['lineHeight'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.lHeightHelpText', {
        defaultMessage: 'The line height in pixels'
      }),
      types: ['number', 'null']
    },
    size: {
      default: `{ theme "font.size" default=14 }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.sizeHelpText', {
        defaultMessage: 'The font size in pixels'
      }),
      types: ['number']
    },
    underline: {
      default: `{ theme "font.underline" default=false }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.underlineHelpText', {
        defaultMessage: 'Underline the text?'
      }),
      options: [true, false],
      types: ['boolean']
    },
    weight: {
      default: `{ theme "font.weight" default="normal" }`,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.args.weightHelpText', {
        defaultMessage: 'The font weight. For example, {list}, or {end}.',
        values: {
          list: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["FontWeight"]).slice(0, -1).map(weight => `\`"${weight}"\``).join(', '),
          end: `\`"${Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["FontWeight"]).slice(-1)[0]}"\``
        }
      }),
      options: Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["FontWeight"]),
      types: ['string']
    }
  },
  fn: (input, args) => {
    if (!Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["FontWeight"]).includes(args.weight)) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.invalidFontWeightErrorMessage', {
        defaultMessage: "Invalid font weight: '{weight}'",
        values: {
          weight: args.weight
        }
      }));
    }
    if (!Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["TextAlignment"]).includes(args.align)) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.font.invalidTextAlignmentErrorMessage', {
        defaultMessage: "Invalid text alignment: '{align}'",
        values: {
          align: args.align
        }
      }));
    }

    // the line height shouldn't ever be lower than the size, and apply as a
    // pixel setting
    const lineHeight = args.lHeight != null ? `${args.lHeight}px` : '1';
    const spec = {
      fontFamily: args.family,
      fontWeight: args.weight,
      fontStyle: args.italic ? _types__WEBPACK_IMPORTED_MODULE_2__["FontStyle"].ITALIC : _types__WEBPACK_IMPORTED_MODULE_2__["FontStyle"].NORMAL,
      textDecoration: args.underline ? _types__WEBPACK_IMPORTED_MODULE_2__["TextDecoration"].UNDERLINE : _types__WEBPACK_IMPORTED_MODULE_2__["TextDecoration"].NONE,
      textAlign: args.align,
      fontSize: `${args.size}px`,
      // apply font size as a pixel setting
      lineHeight // apply line height as a pixel setting
    };

    // conditionally apply styles based on input
    if (args.color) {
      spec.color = args.color;
    }
    return {
      type: 'style',
      spec,
      css: inlineStyle(spec)
    };
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/index.ts":
/*!****************************************************!*\
  !*** ./common/expression_functions/specs/index.ts ***!
  \****************************************************/
/*! exports provided: functionSpecs, clog, font, opensearchDashboards, opensearchDashboardsContextFunction, variableSet, variable, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionSpecs", function() { return functionSpecs; });
/* harmony import */ var _clog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clog */ "./common/expression_functions/specs/clog.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./common/expression_functions/specs/font.ts");
/* harmony import */ var _opensearch_dashboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opensearch_dashboards */ "./common/expression_functions/specs/opensearch_dashboards.ts");
/* harmony import */ var _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opensearch_dashboards_context */ "./common/expression_functions/specs/opensearch_dashboards_context.ts");
/* harmony import */ var _var_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./var_set */ "./common/expression_functions/specs/var_set.ts");
/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./var */ "./common/expression_functions/specs/var.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ "./common/expression_functions/specs/theme.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clog", function() { return _clog__WEBPACK_IMPORTED_MODULE_0__["clog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "font", function() { return _font__WEBPACK_IMPORTED_MODULE_1__["font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboards", function() { return _opensearch_dashboards__WEBPACK_IMPORTED_MODULE_2__["opensearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContextFunction", function() { return _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_3__["opensearchDashboardsContextFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variableSet", function() { return _var_set__WEBPACK_IMPORTED_MODULE_4__["variableSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return _var__WEBPACK_IMPORTED_MODULE_5__["variable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_6__["theme"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */








const functionSpecs = [_clog__WEBPACK_IMPORTED_MODULE_0__["clog"], _font__WEBPACK_IMPORTED_MODULE_1__["font"], _opensearch_dashboards__WEBPACK_IMPORTED_MODULE_2__["opensearchDashboards"], _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_3__["opensearchDashboardsContextFunction"], _var_set__WEBPACK_IMPORTED_MODULE_4__["variableSet"], _var__WEBPACK_IMPORTED_MODULE_5__["variable"], _theme__WEBPACK_IMPORTED_MODULE_6__["theme"]];








/***/ }),

/***/ "./common/expression_functions/specs/opensearch_dashboards.ts":
/*!********************************************************************!*\
  !*** ./common/expression_functions/specs/opensearch_dashboards.ts ***!
  \********************************************************************/
/*! exports provided: opensearchDashboards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboards", function() { return opensearchDashboards; });
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


const toArray = query => !query ? [] : Array.isArray(query) ? query : [query];
const opensearchDashboards = {
  name: 'opensearchDashboards',
  type: 'opensearch_dashboards_context',
  inputTypes: ['opensearch_dashboards_context', 'null'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.opensearchDashboards.help', {
    defaultMessage: 'Gets OpenSearch Dashboards global context'
  }),
  args: {},
  fn(input, _, {
    search = {}
  }) {
    const output = {
      // TODO: This spread is left here for legacy reasons, possibly Lens uses it.
      // TODO: But it shouldn't be need.
      ...input,
      type: 'opensearch_dashboards_context',
      query: [...toArray(search.query), ...toArray((input || {}).query)],
      filters: [...(search.filters || []), ...((input || {}).filters || [])],
      timeRange: search.timeRange || (input ? input.timeRange : undefined)
    };
    return output;
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/opensearch_dashboards_context.ts":
/*!****************************************************************************!*\
  !*** ./common/expression_functions/specs/opensearch_dashboards_context.ts ***!
  \****************************************************************************/
/*! exports provided: opensearchDashboardsContextFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContextFunction", function() { return opensearchDashboardsContextFunction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/common */ "plugin/data/common");
/* harmony import */ var _data_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_common__WEBPACK_IMPORTED_MODULE_2__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const getParsedValue = (data, defaultValue) => typeof data === 'string' && data.length ? JSON.parse(data) || defaultValue : defaultValue;
const mergeQueries = (first = [], second) => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"])([...(Array.isArray(first) ? first : [first]), ...(Array.isArray(second) ? second : [second])], n => JSON.stringify(n.query));
const opensearchDashboardsContextFunction = {
  name: 'opensearch_dashboards_context',
  type: 'opensearch_dashboards_context',
  inputTypes: ['opensearch_dashboards_context', 'null'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('expressions.functions.opensearch_dashboards_context.help', {
    defaultMessage: 'Updates opensearch dashboards global context'
  }),
  args: {
    q: {
      types: ['string', 'null'],
      aliases: ['query', '_'],
      default: null,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('expressions.functions.opensearch_dashboards_context.q.help', {
        defaultMessage: 'Specify OpenSearch Dashboards free form text query'
      })
    },
    filters: {
      types: ['string', 'null'],
      default: '"[]"',
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('expressions.functions.opensearch_dashboards_context.filters.help', {
        defaultMessage: 'Specify OpenSearch Dashboards generic filters'
      })
    },
    timeRange: {
      types: ['string', 'null'],
      default: null,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('expressions.functions.opensearch_dashboards_context.timeRange.help', {
        defaultMessage: 'Specify OpenSearch Dashboards time range filter'
      })
    },
    savedSearchId: {
      types: ['string', 'null'],
      default: null,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('expressions.functions.opensearch_dashboards_context.savedSearchId.help', {
        defaultMessage: 'Specify saved search ID to be used for queries and filters'
      })
    }
  },
  async fn(input, args, {
    getSavedObject
  }) {
    const timeRange = getParsedValue(args.timeRange, input === null || input === void 0 ? void 0 : input.timeRange);
    let queries = mergeQueries(input === null || input === void 0 ? void 0 : input.query, getParsedValue(args === null || args === void 0 ? void 0 : args.q, []));
    let filters = [...((input === null || input === void 0 ? void 0 : input.filters) || []), ...getParsedValue(args === null || args === void 0 ? void 0 : args.filters, [])];
    if (args.savedSearchId) {
      if (typeof getSavedObject !== 'function') {
        throw new Error('"getSavedObject" function not available in execution context. ' + 'When you execute expression you need to add extra execution context ' + 'as the third argument and provide "getSavedObject" implementation.');
      }
      const obj = await getSavedObject('search', args.savedSearchId);
      const search = obj.attributes.kibanaSavedObjectMeta;
      const {
        query,
        filter
      } = getParsedValue(search.searchSourceJSON, {});
      if (query) {
        queries = mergeQueries(queries, query);
      }
      if (filter) {
        filters = [...filters, ...(Array.isArray(filter) ? filter : [filter])];
      }
    }
    return {
      type: 'opensearch_dashboards_context',
      query: queries,
      filters: Object(_data_common__WEBPACK_IMPORTED_MODULE_2__["uniqFilters"])(filters).filter(f => {
        var _f$meta;
        return !((_f$meta = f.meta) !== null && _f$meta !== void 0 && _f$meta.disabled);
      }),
      timeRange
    };
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/theme.ts":
/*!****************************************************!*\
  !*** ./common/expression_functions/specs/theme.ts ***!
  \****************************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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



const theme = {
  name: 'theme',
  aliases: [],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.themeHelpText', {
    defaultMessage: 'Reads a theme setting.'
  }),
  inputTypes: ['null'],
  args: {
    variable: {
      aliases: ['_'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.theme.args.variableHelpText', {
        defaultMessage: 'Name of the theme variable to read.'
      }),
      required: true,
      types: ['string']
    },
    default: {
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.theme.args.defaultHelpText', {
        defaultMessage: 'default value in case theming info is not available.'
      })
    }
  },
  fn: (input, args, handlers) => {
    // currently we use variable `theme`, but external theme service would be preferable
    const vars = handlers.variables.theme || {};
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(vars, args.variable, args.default);
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/var.ts":
/*!**************************************************!*\
  !*** ./common/expression_functions/specs/var.ts ***!
  \**************************************************/
/*! exports provided: variable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
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


const variable = {
  name: 'var',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.var.help', {
    defaultMessage: 'Updates the OpenSearch Dashboards global context.'
  }),
  args: {
    name: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.var.name.help', {
        defaultMessage: 'Specify the name of the variable.'
      })
    }
  },
  fn(input, args, context) {
    const variables = context.variables;
    return variables[args.name];
  }
};

/***/ }),

/***/ "./common/expression_functions/specs/var_set.ts":
/*!******************************************************!*\
  !*** ./common/expression_functions/specs/var_set.ts ***!
  \******************************************************/
/*! exports provided: variableSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableSet", function() { return variableSet; });
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


const variableSet = {
  name: 'var_set',
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.varset.help', {
    defaultMessage: 'Updates the OpenSearch Dashboards global context.'
  }),
  args: {
    name: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.varset.name.help', {
        defaultMessage: 'Specify the name of the variable.'
      })
    },
    value: {
      aliases: ['val'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.functions.varset.val.help', {
        defaultMessage: 'Specify the value for the variable. When unspecified, the input context is used.'
      })
    }
  },
  fn(input, args, context) {
    const variables = context.variables;
    variables[args.name] = args.value === undefined ? input : args.value;
    return input;
  }
};

/***/ }),

/***/ "./common/expression_functions/types.ts":
/*!**********************************************!*\
  !*** ./common/expression_functions/types.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/expression_renderers/expression_renderer.ts":
/*!************************************************************!*\
  !*** ./common/expression_renderers/expression_renderer.ts ***!
  \************************************************************/
/*! exports provided: ExpressionRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderer", function() { return ExpressionRenderer; });
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

class ExpressionRenderer {
  constructor(config) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "displayName", void 0);
    _defineProperty(this, "help", void 0);
    _defineProperty(this, "validate", void 0);
    _defineProperty(this, "reuseDomNode", void 0);
    _defineProperty(this, "render", void 0);
    const {
      name,
      displayName,
      help,
      validate,
      reuseDomNode,
      render
    } = config;
    this.name = name;
    this.displayName = displayName || name;
    this.help = help || '';
    this.validate = validate || (() => {});
    this.reuseDomNode = Boolean(reuseDomNode);
    this.render = render;
  }
}

/***/ }),

/***/ "./common/expression_renderers/expression_renderer_registry.ts":
/*!*********************************************************************!*\
  !*** ./common/expression_renderers/expression_renderer_registry.ts ***!
  \*********************************************************************/
/*! exports provided: ExpressionRendererRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererRegistry", function() { return ExpressionRendererRegistry; });
/* harmony import */ var _expression_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression_renderer */ "./common/expression_renderers/expression_renderer.ts");
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


class ExpressionRendererRegistry {
  constructor() {
    _defineProperty(this, "renderers", new Map());
  }
  register(definition) {
    if (typeof definition === 'function') definition = definition();
    const renderer = new _expression_renderer__WEBPACK_IMPORTED_MODULE_0__["ExpressionRenderer"](definition);
    this.renderers.set(renderer.name, renderer);
  }
  get(id) {
    return this.renderers.get(id) || null;
  }
  toJS() {
    return this.toArray().reduce((acc, renderer) => ({
      ...acc,
      [renderer.name]: renderer
    }), {});
  }
  toArray() {
    return [...this.renderers.values()];
  }
}

/***/ }),

/***/ "./common/expression_renderers/index.ts":
/*!**********************************************!*\
  !*** ./common/expression_renderers/index.ts ***!
  \**********************************************/
/*! exports provided: ExpressionRenderer, ExpressionRendererRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/expression_renderers/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _expression_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression_renderer */ "./common/expression_renderers/expression_renderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderer", function() { return _expression_renderer__WEBPACK_IMPORTED_MODULE_1__["ExpressionRenderer"]; });

/* harmony import */ var _expression_renderer_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression_renderer_registry */ "./common/expression_renderers/expression_renderer_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererRegistry", function() { return _expression_renderer_registry__WEBPACK_IMPORTED_MODULE_2__["ExpressionRendererRegistry"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/expression_renderers/types.ts":
/*!**********************************************!*\
  !*** ./common/expression_renderers/types.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/expression_types/expression_type.ts":
/*!****************************************************!*\
  !*** ./common/expression_types/expression_type.ts ***!
  \****************************************************/
/*! exports provided: ExpressionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionType", function() { return ExpressionType; });
/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_type */ "./common/expression_types/get_type.ts");
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


class ExpressionType {
  constructor(definition) {
    this.definition = definition;
    _defineProperty(this, "name", void 0);
    /**
     * A short help text.
     */
    _defineProperty(this, "help", void 0);
    /**
     * Type validation, useful for checking function output.
     */
    _defineProperty(this, "validate", void 0);
    _defineProperty(this, "create", void 0);
    /**
     * Optional serialization (used when passing context around client/server).
     */
    _defineProperty(this, "serialize", void 0);
    _defineProperty(this, "deserialize", void 0);
    _defineProperty(this, "getToFn", typeName => !this.definition.to ? undefined : this.definition.to[typeName] || this.definition.to['*']);
    _defineProperty(this, "getFromFn", typeName => !this.definition.from ? undefined : this.definition.from[typeName] || this.definition.from['*']);
    _defineProperty(this, "castsTo", value => typeof this.getToFn(value) === 'function');
    _defineProperty(this, "castsFrom", value => typeof this.getFromFn(value) === 'function');
    _defineProperty(this, "to", (value, toTypeName, types) => {
      const typeName = Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["getType"])(value);
      if (typeName !== this.name) {
        throw new Error(`Can not cast object of type '${typeName}' using '${this.name}'`);
      } else if (!this.castsTo(toTypeName)) {
        throw new Error(`Can not cast '${typeName}' to '${toTypeName}'`);
      }
      return this.getToFn(toTypeName)(value, types);
    });
    _defineProperty(this, "from", (value, types) => {
      const typeName = Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["getType"])(value);
      if (!this.castsFrom(typeName)) {
        throw new Error(`Can not cast '${this.name}' from ${typeName}`);
      }
      return this.getFromFn(typeName)(value, types);
    });
    const {
      name,
      help,
      deserialize,
      serialize,
      validate
    } = definition;
    this.name = name;
    this.help = help || '';
    this.validate = validate || (() => {});

    // Optional
    this.create = definition.create;
    this.serialize = serialize;
    this.deserialize = deserialize;
  }
}

/***/ }),

/***/ "./common/expression_types/get_type.ts":
/*!*********************************************!*\
  !*** ./common/expression_types/get_type.ts ***!
  \*********************************************/
/*! exports provided: getType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function getType(node) {
  if (node == null) return 'null';
  if (typeof node === 'object') {
    if (!node.type) throw new Error('Objects must have a type property');
    return node.type;
  }
  return typeof node;
}

/***/ }),

/***/ "./common/expression_types/index.ts":
/*!******************************************!*\
  !*** ./common/expression_types/index.ts ***!
  \******************************************/
/*! exports provided: getType, serializeProvider, ExpressionType, typeSpecs, boolean, isDatatable, datatable, isExpressionValueError, error, filter, image, opensearchDashboardsContext, opensearchDashboardsDatatable, nullType, num, number, pointseries, range, render, shape, string, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/expression_types/types.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_type */ "./common/expression_types/get_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _get_type__WEBPACK_IMPORTED_MODULE_1__["getType"]; });

/* harmony import */ var _serialize_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize_provider */ "./common/expression_types/serialize_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeProvider", function() { return _serialize_provider__WEBPACK_IMPORTED_MODULE_2__["serializeProvider"]; });

/* harmony import */ var _expression_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expression_type */ "./common/expression_types/expression_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionType", function() { return _expression_type__WEBPACK_IMPORTED_MODULE_3__["ExpressionType"]; });

/* harmony import */ var _specs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specs */ "./common/expression_types/specs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeSpecs", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["typeSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["boolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDatatable", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["isDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datatable", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["datatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionValueError", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["isExpressionValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContext", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboardsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsDatatable", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboardsDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullType", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["nullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "num", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["num"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointseries", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["pointseries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _specs__WEBPACK_IMPORTED_MODULE_4__["style"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/expression_types/serialize_provider.ts":
/*!*******************************************************!*\
  !*** ./common/expression_types/serialize_provider.ts ***!
  \*******************************************************/
/*! exports provided: serializeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeProvider", function() { return serializeProvider; });
/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_type */ "./common/expression_types/get_type.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const identity = x => x;
const serializeProvider = types => ({
  serialize: value => (types[Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["getType"])(value)].serialize || identity)(value),
  deserialize: value => (types[Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["getType"])(value)].deserialize || identity)(value)
});

/***/ }),

/***/ "./common/expression_types/specs/boolean.ts":
/*!**************************************************!*\
  !*** ./common/expression_types/specs/boolean.ts ***!
  \**************************************************/
/*! exports provided: boolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'boolean';
const boolean = {
  name,
  from: {
    null: () => false,
    number: n => Boolean(n),
    string: s => Boolean(s)
  },
  to: {
    render: value => {
      const text = `${value}`;
      return {
        type: 'render',
        as: 'text',
        value: {
          text
        }
      };
    },
    datatable: value => ({
      type: 'datatable',
      columns: [{
        id: 'value',
        name: 'value',
        meta: {
          type: name
        }
      }],
      rows: [{
        value
      }]
    })
  }
};

/***/ }),

/***/ "./common/expression_types/specs/datatable.ts":
/*!****************************************************!*\
  !*** ./common/expression_types/specs/datatable.ts ***!
  \****************************************************/
/*! exports provided: isDatatable, datatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDatatable", function() { return isDatatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datatable", function() { return datatable; });
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



/** @internal **/

const name = 'datatable';

/**
 * A Utility function that Typescript can use to determine if an object is a Datatable.
 * @param datatable
 */
const isDatatable = datatable => !!datatable && typeof datatable === 'object' && datatable.type === 'datatable';

/**
 * This type represents the `type` of any `DatatableColumn` in a `Datatable`.
 */

/**
 * This type represents a row in a `Datatable`.
 */

/**
 * This type represents the shape of a column in a `Datatable`.
 */

/**
 * A `Datatable` in Canvas is a unique structure that represents tabulated data.
 */

const datatable = {
  name,
  validate: table => {
    // TODO: Check columns types. Only string, boolean, number, date, allowed for now.
    if (!table.columns) {
      throw new Error('datatable must have a columns array, even if it is empty');
    }
    if (!table.rows) {
      throw new Error('datatable must have a rows array, even if it is empty');
    }
  },
  serialize: table => {
    const {
      columns,
      rows
    } = table;
    return {
      ...table,
      rows: rows.map(row => {
        return columns.map(column => row[column.name]);
      })
    };
  },
  deserialize: table => {
    const {
      columns,
      rows
    } = table;
    return {
      ...table,
      rows: rows.map(row => {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["zipObject"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(columns, 'name'), row);
      })
    };
  },
  from: {
    null: () => ({
      type: name,
      meta: {},
      rows: [],
      columns: []
    }),
    pointseries: value => ({
      type: name,
      meta: {},
      rows: value.rows,
      columns: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(value.columns, (val, colName) => {
        return {
          id: colName,
          name: colName,
          meta: {
            type: val.type
          }
        };
      })
    })
  },
  to: {
    render: table => ({
      type: 'render',
      as: 'table',
      value: {
        datatable: table,
        paginate: true,
        perPage: 10,
        showHeader: true
      }
    }),
    pointseries: table => {
      const validFields = ['x', 'y', 'color', 'size', 'text'];
      const columns = table.columns.filter(column => validFields.includes(column.id));
      const rows = table.rows.map(row => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["pick"])(row, validFields));
      return {
        type: 'pointseries',
        columns: columns.reduce((acc, column) => {
          acc[column.name] = {
            type: column.meta.type,
            expression: column.name,
            role: 'dimension'
          };
          return acc;
        }, {}),
        rows
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/error.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/error.ts ***!
  \************************************************/
/*! exports provided: isExpressionValueError, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpressionValueError", function() { return isExpressionValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get_type */ "./common/expression_types/get_type.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const name = 'error';
const isExpressionValueError = value => Object(_get_type__WEBPACK_IMPORTED_MODULE_0__["getType"])(value) === 'error';

/**
 * @deprecated
 *
 * Exported for backwards compatibility.
 */

const error = {
  name,
  to: {
    render: input => {
      return {
        type: 'render',
        as: name,
        value: {
          error: input.error,
          info: input.info
        }
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/filter.ts":
/*!*************************************************!*\
  !*** ./common/expression_types/specs/filter.ts ***!
  \*************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Represents an object that is a Filter.
 */

const filter = {
  name: 'filter',
  from: {
    null: () => {
      return {
        type: 'filter',
        filterType: 'filter',
        // Any meta data you wish to pass along.
        meta: {},
        // And filters. If you need an "or", create a filter type for it.
        and: []
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/image.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/image.ts ***!
  \************************************************/
/*! exports provided: image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'image';
const image = {
  name,
  to: {
    render: input => {
      return {
        type: 'render',
        as: 'image',
        value: input
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/index.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/index.ts ***!
  \************************************************/
/*! exports provided: typeSpecs, boolean, isDatatable, datatable, isExpressionValueError, error, filter, image, opensearchDashboardsContext, opensearchDashboardsDatatable, nullType, num, number, pointseries, range, render, shape, string, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeSpecs", function() { return typeSpecs; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boolean */ "./common/expression_types/specs/boolean.ts");
/* harmony import */ var _datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatable */ "./common/expression_types/specs/datatable.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./common/expression_types/specs/error.ts");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./common/expression_types/specs/filter.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./common/expression_types/specs/image.ts");
/* harmony import */ var _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opensearch_dashboards_context */ "./common/expression_types/specs/opensearch_dashboards_context.ts");
/* harmony import */ var _opensearch_dashboards_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opensearch_dashboards_datatable */ "./common/expression_types/specs/opensearch_dashboards_datatable.ts");
/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./null */ "./common/expression_types/specs/null.ts");
/* harmony import */ var _num__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./num */ "./common/expression_types/specs/num.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./number */ "./common/expression_types/specs/number.ts");
/* harmony import */ var _pointseries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pointseries */ "./common/expression_types/specs/pointseries.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./range */ "./common/expression_types/specs/range.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./render */ "./common/expression_types/specs/render.ts");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shape */ "./common/expression_types/specs/shape.ts");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./string */ "./common/expression_types/specs/string.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./style */ "./common/expression_types/specs/style.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_0__["boolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDatatable", function() { return _datatable__WEBPACK_IMPORTED_MODULE_1__["isDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datatable", function() { return _datatable__WEBPACK_IMPORTED_MODULE_1__["datatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionValueError", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["isExpressionValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _error__WEBPACK_IMPORTED_MODULE_2__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_3__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _image__WEBPACK_IMPORTED_MODULE_4__["image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContext", function() { return _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_5__["opensearchDashboardsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsDatatable", function() { return _opensearch_dashboards_datatable__WEBPACK_IMPORTED_MODULE_6__["opensearchDashboardsDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullType", function() { return _null__WEBPACK_IMPORTED_MODULE_7__["nullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "num", function() { return _num__WEBPACK_IMPORTED_MODULE_8__["num"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _number__WEBPACK_IMPORTED_MODULE_9__["number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointseries", function() { return _pointseries__WEBPACK_IMPORTED_MODULE_10__["pointseries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_11__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_12__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return _shape__WEBPACK_IMPORTED_MODULE_13__["shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _string__WEBPACK_IMPORTED_MODULE_14__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _style__WEBPACK_IMPORTED_MODULE_15__["style"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

















const typeSpecs = [_boolean__WEBPACK_IMPORTED_MODULE_0__["boolean"], _datatable__WEBPACK_IMPORTED_MODULE_1__["datatable"], _error__WEBPACK_IMPORTED_MODULE_2__["error"], _filter__WEBPACK_IMPORTED_MODULE_3__["filter"], _image__WEBPACK_IMPORTED_MODULE_4__["image"], _opensearch_dashboards_context__WEBPACK_IMPORTED_MODULE_5__["opensearchDashboardsContext"], _opensearch_dashboards_datatable__WEBPACK_IMPORTED_MODULE_6__["opensearchDashboardsDatatable"], _null__WEBPACK_IMPORTED_MODULE_7__["nullType"], _num__WEBPACK_IMPORTED_MODULE_8__["num"], _number__WEBPACK_IMPORTED_MODULE_9__["number"], _pointseries__WEBPACK_IMPORTED_MODULE_10__["pointseries"], _range__WEBPACK_IMPORTED_MODULE_11__["range"], _render__WEBPACK_IMPORTED_MODULE_12__["render"], _shape__WEBPACK_IMPORTED_MODULE_13__["shape"], _string__WEBPACK_IMPORTED_MODULE_14__["string"], _style__WEBPACK_IMPORTED_MODULE_15__["style"]];

















/***/ }),

/***/ "./common/expression_types/specs/null.ts":
/*!***********************************************!*\
  !*** ./common/expression_types/specs/null.ts ***!
  \***********************************************/
/*! exports provided: nullType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullType", function() { return nullType; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'null';
const nullType = {
  name,
  from: {
    '*': () => null
  }
};

/***/ }),

/***/ "./common/expression_types/specs/num.ts":
/*!**********************************************!*\
  !*** ./common/expression_types/specs/num.ts ***!
  \**********************************************/
/*! exports provided: num */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "num", function() { return num; });
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


const num = {
  name: 'num',
  from: {
    null: () => ({
      type: 'num',
      value: 0
    }),
    boolean: b => ({
      type: 'num',
      value: Number(b)
    }),
    string: n => {
      const value = Number(n);
      if (Number.isNaN(value)) {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.types.number.fromStringConversionErrorMessage', {
          defaultMessage: 'Can\'t typecast "{string}" string to number',
          values: {
            string: n
          }
        }));
      }
      return {
        type: 'num',
        value
      };
    },
    '*': value => ({
      type: 'num',
      value: Number(value)
    })
  },
  to: {
    render: ({
      value
    }) => {
      const text = `${value}`;
      return {
        type: 'render',
        as: 'text',
        value: {
          text
        }
      };
    },
    datatable: ({
      value
    }) => ({
      type: 'datatable',
      columns: [{
        id: 'value',
        name: 'value',
        meta: {
          type: 'number'
        }
      }],
      rows: [{
        value
      }]
    })
  }
};

/***/ }),

/***/ "./common/expression_types/specs/number.ts":
/*!*************************************************!*\
  !*** ./common/expression_types/specs/number.ts ***!
  \*************************************************/
/*! exports provided: number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
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


const name = 'number';
const number = {
  name,
  from: {
    null: () => 0,
    boolean: b => Number(b),
    string: n => {
      const value = Number(n);
      if (Number.isNaN(value)) {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.types.number.fromStringConversionErrorMessage', {
          defaultMessage: 'Can\'t typecast "{string}" string to number',
          values: {
            string: n
          }
        }));
      }
      return value;
    }
  },
  to: {
    render: value => {
      const text = `${value}`;
      return {
        type: 'render',
        as: 'text',
        value: {
          text
        }
      };
    },
    datatable: value => ({
      type: 'datatable',
      columns: [{
        id: 'value',
        name: 'value',
        meta: {
          type: 'number'
        }
      }],
      rows: [{
        value
      }]
    })
  }
};

/***/ }),

/***/ "./common/expression_types/specs/opensearch_dashboards_context.ts":
/*!************************************************************************!*\
  !*** ./common/expression_types/specs/opensearch_dashboards_context.ts ***!
  \************************************************************************/
/*! exports provided: opensearchDashboardsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContext", function() { return opensearchDashboardsContext; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// TODO: These two are exported for legacy reasons - remove them eventually.

const opensearchDashboardsContext = {
  name: 'opensearch_dashboards_context',
  from: {
    null: () => {
      return {
        type: 'opensearch_dashboards_context'
      };
    }
  },
  to: {
    null: () => {
      return {
        type: 'null'
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/opensearch_dashboards_datatable.ts":
/*!**************************************************************************!*\
  !*** ./common/expression_types/specs/opensearch_dashboards_datatable.ts ***!
  \**************************************************************************/
/*! exports provided: opensearchDashboardsDatatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsDatatable", function() { return opensearchDashboardsDatatable; });
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


const name = 'opensearch_dashboards_datatable';
const opensearchDashboardsDatatable = {
  name,
  from: {
    datatable: context => {
      return {
        type: name,
        rows: context.rows,
        columns: context.columns.map(column => {
          return {
            id: column.name,
            name: column.name
          };
        })
      };
    },
    pointseries: context => {
      const columns = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(context.columns, (column, n) => {
        return {
          id: n,
          name: n,
          ...column
        };
      });
      return {
        type: name,
        rows: context.rows,
        columns
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/pointseries.ts":
/*!******************************************************!*\
  !*** ./common/expression_types/specs/pointseries.ts ***!
  \******************************************************/
/*! exports provided: pointseries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointseries", function() { return pointseries; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'pointseries';

/**
 * Allowed column names in a PointSeries
 */

/**
 * Column in a PointSeries
 */

/**
 * Represents a collection of valid Columns in a PointSeries
 */

/**
 * A `PointSeries` is a unique structure that represents dots on a chart.
 */

const pointseries = {
  name,
  from: {
    null: () => {
      return {
        type: name,
        rows: [],
        columns: {}
      };
    }
  },
  to: {
    render: (pseries, types) => {
      const datatable = types.datatable.from(pseries, types);
      return {
        type: 'render',
        as: 'table',
        value: {
          datatable,
          showHeader: true
        }
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/range.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/range.ts ***!
  \************************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'range';
const range = {
  name,
  from: {
    null: () => {
      return {
        type: 'range',
        from: 0,
        to: 0
      };
    }
  },
  to: {
    render: value => {
      const text = `from ${value.from} to ${value.to}`;
      return {
        type: 'render',
        as: 'text',
        value: {
          text
        }
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/render.ts":
/*!*************************************************!*\
  !*** ./common/expression_types/specs/render.ts ***!
  \*************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'render';

/**
 * Represents an object that is intended to be rendered.
 */

/**
 * @deprecated
 *
 * Use `ExpressionValueRender` instead.
 */

const render = {
  name,
  from: {
    '*': v => ({
      type: name,
      as: 'debug',
      value: v
    })
  }
};

/***/ }),

/***/ "./common/expression_types/specs/shape.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/shape.ts ***!
  \************************************************/
/*! exports provided: shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return shape; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'shape';
const shape = {
  name: 'shape',
  to: {
    render: input => {
      return {
        type: 'render',
        as: name,
        value: input
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/specs/string.ts":
/*!*************************************************!*\
  !*** ./common/expression_types/specs/string.ts ***!
  \*************************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'string';
const string = {
  name,
  from: {
    null: () => '',
    boolean: b => String(b),
    number: n => String(n)
  },
  to: {
    render: text => {
      return {
        type: 'render',
        as: 'text',
        value: {
          text
        }
      };
    },
    datatable: value => ({
      type: 'datatable',
      columns: [{
        id: 'value',
        name: 'value',
        meta: {
          type: 'string'
        }
      }],
      rows: [{
        value
      }]
    })
  }
};

/***/ }),

/***/ "./common/expression_types/specs/style.ts":
/*!************************************************!*\
  !*** ./common/expression_types/specs/style.ts ***!
  \************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const name = 'style';
const style = {
  name,
  from: {
    null: () => {
      return {
        type: 'style',
        spec: {},
        css: ''
      };
    }
  }
};

/***/ }),

/***/ "./common/expression_types/types.ts":
/*!******************************************!*\
  !*** ./common/expression_types/types.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/fonts.ts":
/*!*************************!*\
  !*** ./common/fonts.ts ***!
  \*************************/
/*! exports provided: americanTypewriter, arial, baskerville, bookAntiqua, brushScript, chalkboard, didot, futura, gillSans, helveticaNeue, hoeflerText, lucidaGrande, myriad, openSans, optima, palatino, fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "americanTypewriter", function() { return americanTypewriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arial", function() { return arial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baskerville", function() { return baskerville; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookAntiqua", function() { return bookAntiqua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brushScript", function() { return brushScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chalkboard", function() { return chalkboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "didot", function() { return didot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "futura", function() { return futura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gillSans", function() { return gillSans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helveticaNeue", function() { return helveticaNeue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoeflerText", function() { return hoeflerText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lucidaGrande", function() { return lucidaGrande; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myriad", function() { return myriad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSans", function() { return openSans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optima", function() { return optima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palatino", function() { return palatino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return fonts; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * This type contains a unions of all supported font labels, or the name of
 * the font the user would see in a UI.
 */

/**
 * This type contains a union of all supported font values, equivalent to the CSS
 * `font-value` property.
 */

/**
 * An interface representing a font in Canvas, with a textual label and the CSS
 * `font-value`.
 */

// This function allows one to create a strongly-typed font for inclusion in
// the font collection.  As a result, the values and labels are known to the
// type system, preventing one from specifying a non-existent font at build
// time.
function createFont(font) {
  return font;
}
const americanTypewriter = createFont({
  label: 'American Typewriter',
  value: "'American Typewriter', 'Courier New', Courier, Monaco, mono"
});
const arial = createFont({
  label: 'Arial',
  value: 'Arial, sans-serif'
});
const baskerville = createFont({
  label: 'Baskerville',
  value: "Baskerville, Georgia, Garamond, 'Times New Roman', Times, serif"
});
const bookAntiqua = createFont({
  label: 'Book Antiqua',
  value: "'Book Antiqua', Georgia, Garamond, 'Times New Roman', Times, serif"
});
const brushScript = createFont({
  label: 'Brush Script',
  value: "'Brush Script MT', 'Comic Sans', sans-serif"
});
const chalkboard = createFont({
  label: 'Chalkboard',
  value: "Chalkboard, 'Comic Sans', sans-serif"
});
const didot = createFont({
  label: 'Didot',
  value: "Didot, Georgia, Garamond, 'Times New Roman', Times, serif"
});
const futura = createFont({
  label: 'Futura',
  value: 'Futura, Impact, Helvetica, Arial, sans-serif'
});
const gillSans = createFont({
  label: 'Gill Sans',
  value: "'Gill Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, Helvetica, Arial, sans-serif"
});
const helveticaNeue = createFont({
  label: 'Helvetica Neue',
  value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
});
const hoeflerText = createFont({
  label: 'Hoefler Text',
  value: "'Hoefler Text', Garamond, Georgia, 'Times New Roman', Times, serif"
});
const lucidaGrande = createFont({
  label: 'Lucida Grande',
  value: "'Lucida Grande', 'Lucida Sans Unicode', Lucida, Verdana, Helvetica, Arial, sans-serif"
});
const myriad = createFont({
  label: 'Myriad',
  value: 'Myriad, Helvetica, Arial, sans-serif'
});
const openSans = createFont({
  label: 'Open Sans',
  value: "'Open Sans', Helvetica, Arial, sans-serif"
});
const optima = createFont({
  label: 'Optima',
  value: "Optima, 'Lucida Grande', 'Lucida Sans Unicode', Verdana, Helvetica, Arial, sans-serif"
});
const palatino = createFont({
  label: 'Palatino',
  value: "Palatino, 'Book Antiqua', Georgia, Garamond, 'Times New Roman', Times, serif"
});

/**
 * A collection of supported fonts.
 */
const fonts = [americanTypewriter, arial, baskerville, bookAntiqua, brushScript, chalkboard, didot, futura, gillSans, helveticaNeue, hoeflerText, lucidaGrande, myriad, openSans, optima, palatino];

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: TypeToString, KnownTypeToString, TypeString, UnmappedTypeStrings, SerializedFieldFormat, BackgroundRepeat, BackgroundSize, FontStyle, FontWeight, Overflow, TextAlignment, TextDecoration, isExpressionAstBuilder, isExpressionAst, buildExpression, buildExpressionFunction, formatExpression, format, parseExpression, parse, americanTypewriter, arial, baskerville, bookAntiqua, brushScript, chalkboard, didot, futura, gillSans, helveticaNeue, hoeflerText, lucidaGrande, myriad, openSans, optima, palatino, fonts, getType, serializeProvider, ExpressionType, typeSpecs, boolean, isDatatable, datatable, isExpressionValueError, error, filter, image, opensearchDashboardsContext, opensearchDashboardsDatatable, nullType, num, number, pointseries, range, render, shape, string, style, ExpressionFunctionParameter, ExpressionFunction, functionSpecs, clog, font, opensearchDashboards, opensearchDashboardsContextFunction, variableSet, variable, theme, ExpressionRenderer, ExpressionRendererRegistry, defaultState, pureTransitions, pureSelectors, createExecutorContainer, TypesRegistry, FunctionsRegistry, Executor, executionPureTransitions, createExecutionContainer, Execution, ExecutionContract, ExpressionsService, createError, getByAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeToString", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["TypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeToString", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["KnownTypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeString", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["TypeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnmappedTypeStrings", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["UnmappedTypeStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedFieldFormat", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["SerializedFieldFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundRepeat", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["BackgroundRepeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundSize", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["BackgroundSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeight", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overflow", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["Overflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlignment", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["TextAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDecoration", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["TextDecoration"]; });

/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./common/ast/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionAstBuilder", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["isExpressionAstBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionAst", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["isExpressionAst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpression", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["buildExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpressionFunction", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["buildExpressionFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatExpression", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["formatExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExpression", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["parseExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _ast__WEBPACK_IMPORTED_MODULE_1__["parse"]; });

/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts */ "./common/fonts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "americanTypewriter", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["americanTypewriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arial", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["arial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baskerville", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["baskerville"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bookAntiqua", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["bookAntiqua"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brushScript", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["brushScript"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chalkboard", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["chalkboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "didot", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["didot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "futura", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["futura"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gillSans", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["gillSans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helveticaNeue", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["helveticaNeue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoeflerText", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["hoeflerText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lucidaGrande", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["lucidaGrande"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "myriad", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["myriad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSans", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["openSans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optima", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["optima"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palatino", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["palatino"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _fonts__WEBPACK_IMPORTED_MODULE_2__["fonts"]; });

/* harmony import */ var _expression_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expression_types */ "./common/expression_types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["getType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeProvider", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["serializeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionType", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["ExpressionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeSpecs", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["typeSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["boolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDatatable", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["isDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datatable", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["datatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionValueError", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["isExpressionValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "image", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContext", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["opensearchDashboardsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsDatatable", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["opensearchDashboardsDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullType", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["nullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "num", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["num"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointseries", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["pointseries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _expression_types__WEBPACK_IMPORTED_MODULE_3__["style"]; });

/* harmony import */ var _expression_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expression_functions */ "./common/expression_functions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionParameter", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["ExpressionFunctionParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunction", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["ExpressionFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionSpecs", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["functionSpecs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clog", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["clog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "font", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboards", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opensearchDashboardsContextFunction", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["opensearchDashboardsContextFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variableSet", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["variableSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["variable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _expression_functions__WEBPACK_IMPORTED_MODULE_4__["theme"]; });

/* harmony import */ var _expression_renderers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expression_renderers */ "./common/expression_renderers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderer", function() { return _expression_renderers__WEBPACK_IMPORTED_MODULE_5__["ExpressionRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererRegistry", function() { return _expression_renderers__WEBPACK_IMPORTED_MODULE_5__["ExpressionRendererRegistry"]; });

/* harmony import */ var _executor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./executor */ "./common/executor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["defaultState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pureTransitions", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["pureTransitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pureSelectors", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["pureSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExecutorContainer", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["createExecutorContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesRegistry", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["TypesRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegistry", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["FunctionsRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Executor", function() { return _executor__WEBPACK_IMPORTED_MODULE_6__["Executor"]; });

/* harmony import */ var _execution__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./execution */ "./common/execution/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "executionPureTransitions", function() { return _execution__WEBPACK_IMPORTED_MODULE_7__["executionPureTransitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExecutionContainer", function() { return _execution__WEBPACK_IMPORTED_MODULE_7__["createExecutionContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Execution", function() { return _execution__WEBPACK_IMPORTED_MODULE_7__["Execution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContract", function() { return _execution__WEBPACK_IMPORTED_MODULE_7__["ExecutionContract"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service */ "./common/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionsService", function() { return _service__WEBPACK_IMPORTED_MODULE_8__["ExpressionsService"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./common/util/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createError", function() { return _util__WEBPACK_IMPORTED_MODULE_9__["createError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getByAlias", function() { return _util__WEBPACK_IMPORTED_MODULE_9__["getByAlias"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/service/expressions_services.ts":
/*!************************************************!*\
  !*** ./common/service/expressions_services.ts ***!
  \************************************************/
/*! exports provided: ExpressionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionsService", function() { return ExpressionsService; });
/* harmony import */ var _executor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../executor */ "./common/executor/index.ts");
/* harmony import */ var _expression_renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expression_renderers */ "./common/expression_renderers/index.ts");
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
 * The public contract that `ExpressionsService` provides to other plugins
 * in OpenSearch Dashboards Platform in *setup* life-cycle.
 */

/**
 * The public contract that `ExpressionsService` provides to other plugins
 * in OpenSearch Dashboards Platform in *start* life-cycle.
 */

/**
 * `ExpressionsService` class is used for multiple purposes:
 *
 * 1. It implements the same Expressions service that can be used on both:
 *    (1) server-side and (2) browser-side.
 * 2. It implements the same Expressions service that users can fork/clone,
 *    thus have their own instance of the Expressions plugin.
 * 3. `ExpressionsService` defines the public contracts of *setup* and *start*
 *    OpenSearch Dashboards Platform life-cycles for ease-of-use on server-side and browser-side.
 * 4. `ExpressionsService` creates a bound version of all exported contract functions.
 * 5. Functions are bound the way there are:
 *
 *    ```ts
 *    registerFunction = (...args: Parameters<Executor['registerFunction']>
 *      ): ReturnType<Executor['registerFunction']> => this.executor.registerFunction(...args);
 *    ```
 *
 *    so that JSDoc appears in developers IDE when they use those `plugins.expressions.registerFunction(`.
 */
class ExpressionsService {
  constructor({
    executor: _executor = _executor__WEBPACK_IMPORTED_MODULE_0__["Executor"].createWithDefaults(),
    renderers: _renderers = new _expression_renderers__WEBPACK_IMPORTED_MODULE_1__["ExpressionRendererRegistry"]()
  } = {}) {
    _defineProperty(this, "executor", void 0);
    _defineProperty(this, "renderers", void 0);
    /**
     * Register an expression function, which will be possible to execute as
     * part of the expression pipeline.
     *
     * Below we register a function which simply sleeps for given number of
     * milliseconds to delay the execution and outputs its input as-is.
     *
     * ```ts
     * expressions.registerFunction({
     *   name: 'sleep',
     *   args: {
     *     time: {
     *       aliases: ['_'],
     *       help: 'Time in milliseconds for how long to sleep',
     *       types: ['number'],
     *     },
     *   },
     *   help: '',
     *   fn: async (input, args, context) => {
     *     await new Promise(r => setTimeout(r, args.time));
     *     return input;
     *   },
     * }
     * ```
     *
     * The actual function is defined in the `fn` key. The function can be *async*.
     * It receives three arguments: (1) `input` is the output of the previous function
     * or the initial input of the expression if the function is first in chain;
     * (2) `args` are function arguments as defined in expression string, that can
     * be edited by user (e.g in case of Canvas); (3) `context` is a shared object
     * passed to all functions that can be used for side-effects.
     */
    _defineProperty(this, "registerFunction", (...args) => this.executor.registerFunction(...args));
    _defineProperty(this, "registerType", (...args) => this.executor.registerType(...args));
    _defineProperty(this, "registerRenderer", (...args) => this.renderers.register(...args));
    /**
     * Executes expression string or a parsed expression AST and immediately
     * returns the result.
     *
     * Below example will execute `sleep 100 | clog` expression with `123` initial
     * input to the first function.
     *
     * ```ts
     * expressions.run('sleep 100 | clog', 123);
     * ```
     *
     * - `sleep 100` will delay execution by 100 milliseconds and pass the `123` input as
     *   its output.
     * - `clog` will print to console `123` and pass it as its output.
     * - The final result of the execution will be `123`.
     *
     * Optionally, you can pass an object as the third argument which will be used
     * to extend the `ExecutionContext`&mdash;an object passed to each function
     * as the third argument, that allows functions to perform side-effects.
     *
     * ```ts
     * expressions.run('...', null, { opensearchClient });
     * ```
     */
    _defineProperty(this, "run", (ast, input, context) => this.executor.run(ast, input, context));
    /**
     * Get a registered `ExpressionFunction` by its name, which was registered
     * using the `registerFunction` method. The returned `ExpressionFunction`
     * instance is an internal representation of the function in Expressions
     * service - do not mutate that object.
     */
    _defineProperty(this, "getFunction", name => this.executor.getFunction(name));
    /**
     * Returns POJO map of all registered expression functions, where keys are
     * names of the functions and values are `ExpressionFunction` instances.
     */
    _defineProperty(this, "getFunctions", () => this.executor.getFunctions());
    /**
     * Get a registered `ExpressionRenderer` by its name, which was registered
     * using the `registerRenderer` method. The returned `ExpressionRenderer`
     * instance is an internal representation of the renderer in Expressions
     * service - do not mutate that object.
     */
    _defineProperty(this, "getRenderer", name => this.renderers.get(name));
    /**
     * Returns POJO map of all registered expression renderers, where keys are
     * names of the renderers and values are `ExpressionRenderer` instances.
     */
    _defineProperty(this, "getRenderers", () => this.renderers.toJS());
    /**
     * Get a registered `ExpressionType` by its name, which was registered
     * using the `registerType` method. The returned `ExpressionType`
     * instance is an internal representation of the type in Expressions
     * service - do not mutate that object.
     */
    _defineProperty(this, "getType", name => this.executor.getType(name));
    /**
     * Returns POJO map of all registered expression types, where keys are
     * names of the types and values are `ExpressionType` instances.
     */
    _defineProperty(this, "getTypes", () => this.executor.getTypes());
    /**
     * Starts expression execution and immediately returns `ExecutionContract`
     * instance that tracks the progress of the execution and can be used to
     * interact with the execution.
     */
    _defineProperty(this, "execute", (ast,
    // This any is for legacy reasons.
    input = {
      type: 'null'
    }, context) => {
      const execution = this.executor.createExecution(ast, context);
      execution.start(input);
      return execution.contract;
    });
    /**
     * Create a new instance of `ExpressionsService`. The new instance inherits
     * all state of the original `ExpressionsService`, including all expression
     * types, expression functions and context. Also, all new types and functions
     * registered in the original services AFTER the forking event will be
     * available in the forked instance. However, all new types and functions
     * registered in the forked instances will NOT be available to the original
     * service.
     */
    _defineProperty(this, "fork", () => {
      const executor = this.executor.fork();
      const renderers = this.renderers;
      const fork = new ExpressionsService({
        executor,
        renderers
      });
      return fork;
    });
    this.executor = _executor;
    this.renderers = _renderers;
  }
  /**
   * Returns OpenSearch Dashboards Platform *setup* life-cycle contract. Useful to return the
   * same contract on server-side and browser-side.
   */
  setup() {
    return this;
  }

  /**
   * Returns OpenSearch Dashboards Platform *start* life-cycle contract. Useful to return the
   * same contract on server-side and browser-side.
   */
  start() {
    return this;
  }
  stop() {}
}

/***/ }),

/***/ "./common/service/index.ts":
/*!*********************************!*\
  !*** ./common/service/index.ts ***!
  \*********************************/
/*! exports provided: ExpressionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expressions_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions_services */ "./common/service/expressions_services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionsService", function() { return _expressions_services__WEBPACK_IMPORTED_MODULE_0__["ExpressionsService"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./common/types/common.ts":
/*!********************************!*\
  !*** ./common/types/common.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/types/index.ts":
/*!*******************************!*\
  !*** ./common/types/index.ts ***!
  \*******************************/
/*! exports provided: TypeToString, KnownTypeToString, TypeString, UnmappedTypeStrings, SerializedFieldFormat, BackgroundRepeat, BackgroundSize, FontStyle, FontWeight, Overflow, TextAlignment, TextDecoration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./common/types/common.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeToString", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["TypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeToString", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["KnownTypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeString", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["TypeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnmappedTypeStrings", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["UnmappedTypeStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedFieldFormat", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SerializedFieldFormat"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./common/types/style.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundRepeat", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["BackgroundRepeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundSize", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["BackgroundSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["FontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeight", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["FontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overflow", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["Overflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlignment", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["TextAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDecoration", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["TextDecoration"]; });

/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registry */ "./common/types/registry.ts");
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





/***/ }),

/***/ "./common/types/registry.ts":
/*!**********************************!*\
  !*** ./common/types/registry.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/types/style.ts":
/*!*******************************!*\
  !*** ./common/types/style.ts ***!
  \*******************************/
/*! exports provided: BackgroundRepeat, BackgroundSize, FontStyle, FontWeight, Overflow, TextAlignment, TextDecoration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundRepeat", function() { return BackgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundSize", function() { return BackgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return FontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeight", function() { return FontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overflow", function() { return Overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlignment", function() { return TextAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoration", function() { return TextDecoration; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Enum of supported CSS `background-repeat` properties.
 */
let BackgroundRepeat = /*#__PURE__*/function (BackgroundRepeat) {
  BackgroundRepeat["REPEAT"] = "repeat";
  BackgroundRepeat["REPEAT_NO"] = "no-repeat";
  BackgroundRepeat["REPEAT_X"] = "repeat-x";
  BackgroundRepeat["REPEAT_Y"] = "repeat-y";
  BackgroundRepeat["ROUND"] = "round";
  BackgroundRepeat["SPACE"] = "space";
  return BackgroundRepeat;
}({});

/**
 * Enum of supported CSS `background-size` properties.
 */
let BackgroundSize = /*#__PURE__*/function (BackgroundSize) {
  BackgroundSize["AUTO"] = "auto";
  BackgroundSize["CONTAIN"] = "contain";
  BackgroundSize["COVER"] = "cover";
  return BackgroundSize;
}({});

/**
 * Enum of supported CSS `font-style` properties.
 */
let FontStyle = /*#__PURE__*/function (FontStyle) {
  FontStyle["ITALIC"] = "italic";
  FontStyle["NORMAL"] = "normal";
  return FontStyle;
}({});

/**
 * Enum of supported CSS `font-weight` properties.
 */
let FontWeight = /*#__PURE__*/function (FontWeight) {
  FontWeight["NORMAL"] = "normal";
  FontWeight["BOLD"] = "bold";
  FontWeight["BOLDER"] = "bolder";
  FontWeight["LIGHTER"] = "lighter";
  FontWeight["ONE"] = "100";
  FontWeight["TWO"] = "200";
  FontWeight["THREE"] = "300";
  FontWeight["FOUR"] = "400";
  FontWeight["FIVE"] = "500";
  FontWeight["SIX"] = "600";
  FontWeight["SEVEN"] = "700";
  FontWeight["EIGHT"] = "800";
  FontWeight["NINE"] = "900";
  return FontWeight;
}({});

/**
 * Enum of supported CSS `overflow` properties.
 */
let Overflow = /*#__PURE__*/function (Overflow) {
  Overflow["AUTO"] = "auto";
  Overflow["HIDDEN"] = "hidden";
  Overflow["SCROLL"] = "scroll";
  Overflow["VISIBLE"] = "visible";
  return Overflow;
}({});

/**
 * Enum of supported CSS `text-align` properties.
 */
let TextAlignment = /*#__PURE__*/function (TextAlignment) {
  TextAlignment["CENTER"] = "center";
  TextAlignment["JUSTIFY"] = "justify";
  TextAlignment["LEFT"] = "left";
  TextAlignment["RIGHT"] = "right";
  return TextAlignment;
}({});

/**
 * Enum of supported CSS `text-decoration` properties.
 */
let TextDecoration = /*#__PURE__*/function (TextDecoration) {
  TextDecoration["NONE"] = "none";
  TextDecoration["UNDERLINE"] = "underline";
  return TextDecoration;
}({});

/**
 * Represents the various style properties that can be applied to an element.
 */

/**
 * Represents an object containing style information for a Container.
 */

/**
 * An object that represents style information, typically CSS.
 */

/***/ }),

/***/ "./common/util/create_error.ts":
/*!*************************************!*\
  !*** ./common/util/create_error.ts ***!
  \*************************************/
/*! exports provided: createError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createError", function() { return createError; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const createError = err => ({
  type: 'error',
  error: {
    stack:  false ? undefined : typeof err === 'object' ? err.stack : undefined,
    message: typeof err === 'string' ? err : String(err.message),
    name: typeof err === 'object' ? err.name || 'Error' : 'Error',
    original: err instanceof Error ? err : typeof err === 'object' && 'original' in err && err.original instanceof Error ? err.original : undefined
  }
});

/***/ }),

/***/ "./common/util/get_by_alias.ts":
/*!*************************************!*\
  !*** ./common/util/get_by_alias.ts ***!
  \*************************************/
/*! exports provided: getByAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByAlias", function() { return getByAlias; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * This is used for looking up function/argument definitions. It looks through
 * the given object/array for a case-insensitive match, which could be either the
 * `name` itself, or something under the `aliases` property.
 */
function getByAlias(node, nodeName) {
  const lowerCaseName = nodeName.toLowerCase();
  return Object.values(node).find(({
    name,
    aliases
  }) => {
    if (!name) return false;
    if (name.toLowerCase() === lowerCaseName) return true;
    return (aliases || []).some(alias => {
      return alias.toLowerCase() === lowerCaseName;
    });
  });
}

/***/ }),

/***/ "./common/util/index.ts":
/*!******************************!*\
  !*** ./common/util/index.ts ***!
  \******************************/
/*! exports provided: createError, getByAlias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_error */ "./common/util/create_error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createError", function() { return _create_error__WEBPACK_IMPORTED_MODULE_0__["createError"]; });

/* harmony import */ var _get_by_alias__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_by_alias */ "./common/util/get_by_alias.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getByAlias", function() { return _get_by_alias__WEBPACK_IMPORTED_MODULE_1__["getByAlias"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
/*! exports provided: Plugin, ExpressionsPublicPlugin, plugin, ExpressionExecutor, IExpressionLoaderParams, ExpressionRenderError, ExpressionRendererComponent, ReactExpressionRenderer, ReactExpressionRendererProps, ReactExpressionRendererType, ExpressionRenderHandler, ExpressionRendererEvent, AnyExpressionFunctionDefinition, AnyExpressionTypeDefinition, ArgumentType, buildExpression, buildExpressionFunction, Datatable, DatatableColumn, DatatableColumnType, DatatableRow, Execution, ExecutionContract, ExecutionContainer, ExecutionContext, ExecutionParams, ExecutionState, Executor, ExecutorContainer, ExecutorState, ExpressionAstArgument, ExpressionAstExpression, ExpressionAstExpressionBuilder, ExpressionAstFunction, ExpressionAstFunctionBuilder, ExpressionAstNode, ExpressionFunction, ExpressionFunctionDefinition, ExpressionFunctionDefinitions, ExpressionFunctionOpenSearchDashboards, ExpressionFunctionParameter, ExpressionImage, ExpressionRenderDefinition, ExpressionRenderer, ExpressionRendererRegistry, ExpressionType, ExpressionTypeDefinition, ExpressionTypeStyle, ExpressionValue, ExpressionValueBoxed, ExpressionValueConverter, ExpressionValueError, ExpressionValueNum, ExpressionValueRender, ExpressionValueSearchContext, ExpressionValueUnboxed, ExpressionValueFilter, Font, FontLabel, FontStyle, FontValue, FontWeight, format, formatExpression, FunctionsRegistry, IInterpreterRenderHandlers, InterpreterErrorType, IRegistry, isExpressionAstBuilder, OPENSEARCH_DASHBOARDS_CONTEXT_NAME, OpenSearchDashboardsContext, OpenSearchDashboardsDatatable, OpenSearchDashboardsDatatableColumn, OpenSearchDashboardsDatatableColumnMeta, OpenSearchDashboardsDatatableRow, KnownTypeToString, Overflow, parse, parseExpression, PointSeries, PointSeriesColumn, PointSeriesColumnName, PointSeriesColumns, PointSeriesRow, Range, SerializedDatatable, SerializedFieldFormat, Style, TextAlignment, TextDecoration, TypesRegistry, TypeString, TypeToString, UnmappedTypeStrings, Render, getExpressionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["ExpressionsPublicPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionsPublicPlugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["ExpressionsPublicPlugin"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionExecutor", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["ExpressionExecutor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IExpressionLoaderParams", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["IExpressionLoaderParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderError", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["ExpressionRenderError"]; });

/* harmony import */ var _react_expression_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./react_expression_renderer */ "./public/react_expression_renderer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererComponent", function() { return _react_expression_renderer__WEBPACK_IMPORTED_MODULE_3__["ExpressionRendererComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactExpressionRenderer", function() { return _react_expression_renderer__WEBPACK_IMPORTED_MODULE_3__["ReactExpressionRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactExpressionRendererProps", function() { return _react_expression_renderer__WEBPACK_IMPORTED_MODULE_3__["ReactExpressionRendererProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactExpressionRendererType", function() { return _react_expression_renderer__WEBPACK_IMPORTED_MODULE_3__["ReactExpressionRendererType"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./public/render.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderHandler", function() { return _render__WEBPACK_IMPORTED_MODULE_4__["ExpressionRenderHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererEvent", function() { return _render__WEBPACK_IMPORTED_MODULE_4__["ExpressionRendererEvent"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./common/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnyExpressionFunctionDefinition", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["AnyExpressionFunctionDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnyExpressionTypeDefinition", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["AnyExpressionTypeDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentType", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ArgumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpression", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["buildExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildExpressionFunction", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["buildExpressionFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Datatable", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Datatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatableColumn", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["DatatableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatableColumnType", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["DatatableColumnType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatatableRow", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["DatatableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Execution", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Execution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContract", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutionContract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContainer", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutionContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionContext", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionParams", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutionParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutionState", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Executor", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Executor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutorContainer", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutorContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutorState", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExecutorState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstArgument", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstExpression", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstExpressionBuilder", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstExpressionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstFunction", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstFunctionBuilder", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstFunctionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionAstNode", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionAstNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunction", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionDefinition", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionFunctionDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionDefinitions", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionFunctionDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionOpenSearchDashboards", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionFunctionOpenSearchDashboards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionFunctionParameter", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionFunctionParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionImage", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderDefinition", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionRenderDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderer", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionRendererRegistry", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionRendererRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionType", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionTypeDefinition", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionTypeDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionTypeStyle", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionTypeStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValue", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueBoxed", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueBoxed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueConverter", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueError", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueNum", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueNum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueRender", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueSearchContext", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueSearchContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueUnboxed", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueUnboxed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionValueFilter", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Font"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontLabel", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["FontLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["FontStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontValue", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["FontValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeight", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["FontWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatExpression", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["formatExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegistry", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["FunctionsRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IInterpreterRenderHandlers", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["IInterpreterRenderHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InterpreterErrorType", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["InterpreterErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IRegistry", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["IRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExpressionAstBuilder", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["isExpressionAstBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPENSEARCH_DASHBOARDS_CONTEXT_NAME", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OPENSEARCH_DASHBOARDS_CONTEXT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsContext", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OpenSearchDashboardsContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsDatatable", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OpenSearchDashboardsDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsDatatableColumn", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OpenSearchDashboardsDatatableColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsDatatableColumnMeta", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OpenSearchDashboardsDatatableColumnMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsDatatableRow", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["OpenSearchDashboardsDatatableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeToString", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["KnownTypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overflow", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Overflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExpression", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["parseExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeries", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["PointSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesColumn", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["PointSeriesColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesColumnName", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["PointSeriesColumnName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesColumns", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["PointSeriesColumns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointSeriesRow", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["PointSeriesRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedDatatable", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["SerializedDatatable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SerializedFieldFormat", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["SerializedFieldFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["Style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAlignment", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["TextAlignment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDecoration", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["TextDecoration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesRegistry", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["TypesRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeString", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["TypeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeToString", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["TypeToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnmappedTypeStrings", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["UnmappedTypeStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return _common__WEBPACK_IMPORTED_MODULE_5__["ExpressionValueRender"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExpressionsService", function() { return _services__WEBPACK_IMPORTED_MODULE_6__["getExpressionsService"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




// OpenSearchDashboards Platform.


function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["ExpressionsPublicPlugin"](initializerContext);
}

// Static exports.






/***/ }),

/***/ "./public/loader.ts":
/*!**************************!*\
  !*** ./public/loader.ts ***!
  \**************************/
/*! exports provided: ExpressionLoader, loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionLoader", function() { return ExpressionLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./public/render.ts");
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






class ExpressionLoader {
  constructor(element, _expression, _params) {
    _defineProperty(this, "data$", void 0);
    _defineProperty(this, "update$", void 0);
    _defineProperty(this, "render$", void 0);
    _defineProperty(this, "events$", void 0);
    _defineProperty(this, "loading$", void 0);
    _defineProperty(this, "execution", void 0);
    _defineProperty(this, "renderHandler", void 0);
    _defineProperty(this, "dataSubject", void 0);
    _defineProperty(this, "loadingSubject", void 0);
    _defineProperty(this, "data", void 0);
    _defineProperty(this, "params", {});
    _defineProperty(this, "loadData", async (expression, params) => {
      if (this.execution && this.execution.isPending) {
        this.execution.cancel();
      }
      this.setParams(params);
      this.execution = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getExpressionsService"])().execute(expression, params.context, {
        search: params.searchContext,
        variables: params.variables || {},
        inspectorAdapters: params.inspectorAdapters
      });
      const prevDataHandler = this.execution;
      const data = await prevDataHandler.getData();
      if (this.execution !== prevDataHandler) {
        return;
      }
      this.dataSubject.next(data);
    });
    this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    this.data$ = this.dataSubject.asObservable();
    this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    // loading is a "hot" observable,
    // as loading$ could emit straight away in the constructor
    // and we want to notify subscribers about it, but all subscriptions will happen later
    this.loading$ = this.loadingSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(_ => _ === true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => void 0));
    this.renderHandler = new _render__WEBPACK_IMPORTED_MODULE_3__["ExpressionRenderHandler"](element, {
      onRenderError: _params && _params.onRenderError
    });
    this.render$ = this.renderHandler.render$;
    this.update$ = this.renderHandler.update$;
    this.events$ = this.renderHandler.events$;
    this.update$.subscribe(value => {
      if (value) {
        const {
          newExpression,
          newParams
        } = value;
        this.update(newExpression, newParams);
      }
    });
    this.data$.subscribe(data => {
      this.render(data);
    });
    this.render$.subscribe(() => {
      this.loadingSubject.next(false);
    });
    this.setParams(_params);
    if (_expression) {
      this.loadingSubject.next(true);
      this.loadData(_expression, this.params);
    }
  }
  destroy() {
    this.dataSubject.complete();
    this.loadingSubject.complete();
    this.renderHandler.destroy();
    if (this.execution) {
      this.execution.cancel();
    }
  }
  cancel() {
    if (this.execution) {
      this.execution.cancel();
    }
  }
  getExpression() {
    if (this.execution) {
      return this.execution.getExpression();
    }
  }
  getAst() {
    if (this.execution) {
      return this.execution.getAst();
    }
  }
  getElement() {
    return this.renderHandler.getElement();
  }
  inspect() {
    return this.execution ? this.execution.inspect() : undefined;
  }
  update(expression, params) {
    this.setParams(params);
    this.loadingSubject.next(true);
    if (expression) {
      this.loadData(expression, this.params);
    } else if (this.data) {
      this.render(this.data);
    }
  }
  render(data) {
    this.renderHandler.render(data, this.params.uiState);
  }
  setParams(params) {
    var _this$execution;
    if (!params || !Object.keys(params).length) {
      return;
    }
    if (params.searchContext) {
      this.params.searchContext = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["defaults"])({}, params.searchContext, this.params.searchContext || {});
    }
    if (params.uiState && this.params) {
      this.params.uiState = params.uiState;
    }
    if (params.variables && this.params) {
      this.params.variables = params.variables;
    }
    this.params.inspectorAdapters = params.inspectorAdapters || ((_this$execution = this.execution) === null || _this$execution === void 0 ? void 0 : _this$execution.inspect());
  }
}
const loader = (element, expression, params) => {
  return new ExpressionLoader(element, expression, params);
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: ExpressionsPublicPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionsPublicPlugin", function() { return ExpressionsPublicPlugin; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./common/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _react_expression_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react_expression_renderer */ "./public/react_expression_renderer.tsx");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader */ "./public/loader.ts");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render */ "./public/render.ts");
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






class ExpressionsPublicPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "expressions", new _common__WEBPACK_IMPORTED_MODULE_0__["ExpressionsService"]());
  }
  configureExecutor(core) {
    const {
      executor
    } = this.expressions;
    const getSavedObject = async (type, id) => {
      const [start] = await core.getStartServices();
      return start.savedObjects.client.get(type, id);
    };
    executor.extendContext({
      environment: 'client',
      getSavedObject
    });
  }
  setup(core) {
    this.configureExecutor(core);
    const {
      expressions
    } = this;
    const {
      renderers
    } = expressions;
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setRenderersRegistry"])(renderers);
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setExpressionsService"])(expressions);
    const setup = expressions.setup();
    return Object.freeze(setup);
  }
  start(core) {
    Object(_services__WEBPACK_IMPORTED_MODULE_1__["setNotifications"])(core.notifications);
    const {
      expressions
    } = this;
    const start = {
      ...expressions.start(),
      ExpressionLoader: _loader__WEBPACK_IMPORTED_MODULE_3__["ExpressionLoader"],
      ExpressionRenderHandler: _render__WEBPACK_IMPORTED_MODULE_4__["ExpressionRenderHandler"],
      loader: _loader__WEBPACK_IMPORTED_MODULE_3__["loader"],
      ReactExpressionRenderer: _react_expression_renderer__WEBPACK_IMPORTED_MODULE_2__["ReactExpressionRenderer"],
      render: _render__WEBPACK_IMPORTED_MODULE_4__["render"]
    };
    return Object.freeze(start);
  }
  stop() {
    this.expressions.stop();
  }
}

/***/ }),

/***/ "./public/react_expression_renderer.tsx":
/*!**********************************************!*\
  !*** ./public/react_expression_renderer.tsx ***!
  \**********************************************/
/*! exports provided: ReactExpressionRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactExpressionRenderer", function() { return ReactExpressionRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use/lib/useShallowCompareEffect */ "../../../node_modules/react-use/lib/useShallowCompareEffect.js");
/* harmony import */ var react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/ui-shared-deps/theme */ "@osd/ui-shared-deps/theme");
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader */ "./public/loader.ts");
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









// Accept all options of the runner as props except for the
// dom element which is provided by the component itself

const defaultState = {
  isEmpty: true,
  isLoading: false,
  error: null
};
const ReactExpressionRenderer = ({
  className,
  dataAttrs,
  padding,
  renderError,
  expression,
  onEvent,
  reload$,
  ...expressionLoaderOptions
}) => {
  const mountpoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    ...defaultState
  });
  const hasCustomRenderErrorHandler = !!renderError;
  const expressionLoaderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  // flag to skip next render$ notification,
  // because of just handled error
  const hasHandledErrorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  // will call done() in LayoutEffect when done with rendering custom error state
  const errorRenderHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  // OK to ignore react-hooks/exhaustive-deps because options update is handled by calling .update()
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subs = [];
    expressionLoaderRef.current = new _loader__WEBPACK_IMPORTED_MODULE_6__["ExpressionLoader"](mountpoint.current, expression, {
      ...expressionLoaderOptions,
      // react component wrapper provides different
      // error handling api which is easier to work with from react
      // if custom renderError is not provided then we fallback to default error handling from ExpressionLoader
      onRenderError: hasCustomRenderErrorHandler ? (domNode, error, handlers) => {
        errorRenderHandlerRef.current = handlers;
        setState(() => ({
          ...defaultState,
          isEmpty: false,
          error
        }));
        if (expressionLoaderOptions.onRenderError) {
          expressionLoaderOptions.onRenderError(domNode, error, handlers);
        }
      } : expressionLoaderOptions.onRenderError
    });
    if (onEvent) {
      subs.push(expressionLoaderRef.current.events$.subscribe(event => {
        onEvent(event);
      }));
    }
    subs.push(expressionLoaderRef.current.loading$.subscribe(() => {
      hasHandledErrorRef.current = false;
      setState(prevState => ({
        ...prevState,
        isLoading: true
      }));
    }), expressionLoaderRef.current.render$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !hasHandledErrorRef.current)).subscribe(item => {
      setState(() => ({
        ...defaultState,
        isEmpty: false
      }));
    }));
    return () => {
      subs.forEach(s => s.unsubscribe());
      if (expressionLoaderRef.current) {
        expressionLoaderRef.current.destroy();
        expressionLoaderRef.current = null;
      }
      errorRenderHandlerRef.current = null;
    };
  }, [hasCustomRenderErrorHandler, onEvent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const subscription = reload$ === null || reload$ === void 0 ? void 0 : reload$.subscribe(() => {
      if (expressionLoaderRef.current) {
        expressionLoaderRef.current.update(expression, expressionLoaderOptions);
      }
    });
    return () => subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
  }, [reload$, expression, ...Object.values(expressionLoaderOptions)]);

  // Re-fetch data automatically when the inputs change
  react_use_lib_useShallowCompareEffect__WEBPACK_IMPORTED_MODULE_3___default()(() => {
    if (expressionLoaderRef.current) {
      expressionLoaderRef.current.update(expression, expressionLoaderOptions);
    }
  },
  // when expression is changed by reference and when any other loaderOption is changed by reference
  [{
    expression,
    ...expressionLoaderOptions
  }]);

  /* eslint-enable react-hooks/exhaustive-deps */
  // call expression loader's done() handler when finished rendering custom error state
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (state.error && errorRenderHandlerRef.current) {
      hasHandledErrorRef.current = true;
      errorRenderHandlerRef.current.done();
      errorRenderHandlerRef.current = null;
    }
  }, [state.error]);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('expExpressionRenderer', className, {
    'expExpressionRenderer-isEmpty': state.isEmpty,
    'expExpressionRenderer-hasError': !!state.error
  });
  const expressionStyles = {};

  // TODO: refactor to SCSS instead of getting values from theme: https://github.com/opensearch-project/OpenSearch-Dashboards/issues/5661
  if (padding) {
    expressionStyles.padding = _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].paddingSizes[padding];
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, dataAttrs, {
    className: classes
  }), state.isEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiLoadingChart"], {
    mono: true,
    size: "l"
  }), state.isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiProgress"], {
    size: "xs",
    color: "accent",
    position: "absolute"
  }), !state.isLoading && state.error && renderError && renderError(state.error.message, state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "expExpressionRenderer__expression",
    style: expressionStyles,
    ref: mountpoint
  }));
};

/***/ }),

/***/ "./public/render.ts":
/*!**************************!*\
  !*** ./public/render.ts ***!
  \**************************/
/*! exports provided: ExpressionRenderHandler, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionRenderHandler", function() { return ExpressionRenderHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render_error_handler */ "./public/render_error_handler.ts");
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





class ExpressionRenderHandler {
  constructor(element, {
    onRenderError
  } = {}) {
    _defineProperty(this, "render$", void 0);
    _defineProperty(this, "update$", void 0);
    _defineProperty(this, "events$", void 0);
    _defineProperty(this, "element", void 0);
    _defineProperty(this, "destroyFn", void 0);
    _defineProperty(this, "renderCount", 0);
    _defineProperty(this, "renderSubject", void 0);
    _defineProperty(this, "eventsSubject", void 0);
    _defineProperty(this, "updateSubject", void 0);
    _defineProperty(this, "handlers", void 0);
    _defineProperty(this, "onRenderError", void 0);
    _defineProperty(this, "render", async (data, uiState) => {
      if (!data || typeof data !== 'object') {
        return this.handleRenderError(new Error('invalid data provided to the expression renderer'));
      }
      if (data.type !== 'render' || !data.as) {
        if (data.type === 'error') {
          return this.handleRenderError(data.error);
        } else {
          return this.handleRenderError(new Error('invalid data provided to the expression renderer'));
        }
      }
      if (!Object(_services__WEBPACK_IMPORTED_MODULE_3__["getRenderersRegistry"])().get(data.as)) {
        return this.handleRenderError(new Error(`invalid renderer id '${data.as}'`));
      }
      try {
        // Rendering is asynchronous, completed by handlers.done()
        await Object(_services__WEBPACK_IMPORTED_MODULE_3__["getRenderersRegistry"])().get(data.as).render(this.element, data.value, {
          ...this.handlers,
          uiState
        });
      } catch (e) {
        return this.handleRenderError(e);
      }
    });
    _defineProperty(this, "destroy", () => {
      this.renderSubject.complete();
      this.eventsSubject.complete();
      this.updateSubject.complete();
      if (this.destroyFn) {
        this.destroyFn();
      }
    });
    _defineProperty(this, "getElement", () => {
      return this.element;
    });
    _defineProperty(this, "handleRenderError", error => {
      this.onRenderError(this.element, error, this.handlers);
    });
    this.element = element;
    this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    this.events$ = this.eventsSubject.asObservable();
    this.onRenderError = onRenderError || _render_error_handler__WEBPACK_IMPORTED_MODULE_2__["renderErrorHandler"];
    this.renderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    this.render$ = this.renderSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(_ => _ !== null));
    this.updateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    this.update$ = this.updateSubject.asObservable();
    this.handlers = {
      onDestroy: fn => {
        this.destroyFn = fn;
      },
      done: () => {
        this.renderCount++;
        this.renderSubject.next(this.renderCount);
      },
      reload: () => {
        this.updateSubject.next(null);
      },
      update: params => {
        this.updateSubject.next(params);
      },
      event: data => {
        this.eventsSubject.next(data);
      }
    };
  }
}
function render(element, data, options) {
  const handler = new ExpressionRenderHandler(element, options);
  handler.render(data);
  return handler;
}

/***/ }),

/***/ "./public/render_error_handler.ts":
/*!****************************************!*\
  !*** ./public/render_error_handler.ts ***!
  \****************************************/
/*! exports provided: renderErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderErrorHandler", function() { return renderErrorHandler; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const renderErrorHandler = (element, error, handlers) => {
  if (error.name === 'AbortError') {
    handlers.done();
    return;
  }
  Object(_services__WEBPACK_IMPORTED_MODULE_1__["getNotifications"])().toasts.addError(error, {
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('expressions.defaultErrorRenderer.errorTitle', {
      defaultMessage: 'Error in visualisation'
    }),
    toastMessage: error.message
  });
  handlers.done();
};

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getNotifications, setNotifications, getRenderersRegistry, setRenderersRegistry, getExpressionsService, setExpressionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotifications", function() { return getNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderersRegistry", function() { return getRenderersRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRenderersRegistry", function() { return setRenderersRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpressionsService", function() { return getExpressionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExpressionsService", function() { return setExpressionsService; });
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


const [getNotifications, setNotifications] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Notifications');
const [getRenderersRegistry, setRenderersRegistry] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Renderers registry');
const [getExpressionsService, setExpressionsService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('ExpressionsService');

/***/ }),

/***/ "./public/types/index.ts":
/*!*******************************!*\
  !*** ./public/types/index.ts ***!
  \*******************************/
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

/***/ "@osd/ui-shared-deps/theme":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.Theme" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Theme;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

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

/***/ "plugin/data/common/utils/abort_utils":
/*!*************************************************************!*\
  !*** @osd/bundleRef "plugin/data/common/utils/abort_utils" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/data/common/utils/abort_utils');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/inspector/common":
/*!************************************************!*\
  !*** @osd/bundleRef "plugin/inspector/common" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/inspector/common');
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

/***/ "plugin/opensearchDashboardsUtils/common/state_containers":
/*!*********************************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsUtils/common/state_containers" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsUtils/common/state_containers');
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
//# sourceMappingURL=expressions.plugin.js.map