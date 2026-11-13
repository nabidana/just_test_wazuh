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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#141519}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #282a30}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#141519}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #282a30}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#fafbfd}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e4e8ee}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#fafbfd}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e4e8ee}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#172430}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #31404e}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#172430}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #31404e}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#f0f2f4}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e5e8ea}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#f0f2f4}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e5e8ea}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#02020e}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #303f4d}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#02020e}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #303f4d}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#f0f2f4}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e4e7ea}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,eAAe,gBAAgB,CAAC,gCAAgC,cAAc,CAAC,6BAA6B,wBAAwB,CAAC,8CAA8C,QAAQ,CAAC,8SAA8S,eAAe,CAAC,wBAAwB,CAAC,wRAAwR,mBAAmB,CAAC,2BAA2B,CAAC,wBAAwB,CAAC,oRAAoR,4BAA4B,CAAC,yBAAyB,CAAC,wBAAwB,cAAc,CAAC,2BAA2B,kBAAkB,CAAC,oCAAoC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,sBAAsB,CAAC,2CAA2C,oCAAoC,cAAc,CAAC,CAAC,2CAA2C,UAAU,CAAC,6BAA6B","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.osdTopNavMenu{margin-right:4px}.newTopNavHeader .osdTopNavMenu{margin-right:0}.osdTopNavMenuGroupedActions{background-color:#f0f2f4}.newTopNavHeader .osdTopNavMenuGroupedActions{margin:0}.osdTopNavMenuGroupedActions>.euiSwitch,.osdTopNavMenuGroupedActions>.euiButton,.osdTopNavMenuGroupedActions>.euiButtonIcon,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor>.euiButtonIcon{border-radius:0;border:1px solid #e4e7ea}.osdTopNavMenuGroupedActions>:not(:first-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:first-child)>.euiButtonIcon{border-left-width:0;border-bottom-left-radius:0;border-top-left-radius:0}.osdTopNavMenuGroupedActions>:not(:last-child),.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiSwitch,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButton,.osdTopNavMenuGroupedActions>.euiToolTipAnchor:not(:last-child)>.euiButtonIcon{border-bottom-right-radius:0;border-top-right-radius:0}.osdTopNavGroup--button{min-width:auto}.osdTopNavGroup-isDisabled{cursor:not-allowed}.osdTopNavMenuScreenTitle .euiTitle{line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 1680px){.osdTopNavMenuScreenTitle .euiTitle{max-width:18ch}}.osdTopNavMenuSpread .euiHeaderLinks__list{width:100%;justify-content:space-between}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=navigation!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=navigation!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['navigation']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_navigation_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=navigation!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=navigation!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_navigation_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_navigation_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/navigation/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/navigation/public */ "./public/index.ts"))

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
/*! exports provided: plugin, TopNavMenu, TopNavMenuData, TopNavMenuButtonData, TopNavMenuSwitchData, TopNavMenuIconData, TopNavMenuLegacyData, TopNavMenuItemRenderType, TopNavControls, TopNavControlData, TopNavControlButtonData, TopNavControlLinkData, TopNavControlIconData, TopNavControlTextData, TopNavControlDescriptionData, TopNavControlComponentData, NavigationPublicPluginSetup, NavigationPublicPluginStart, Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top_nav_menu */ "./public/top_nav_menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenu", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuButtonData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuButtonData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuSwitchData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuSwitchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuIconData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuIconData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuLegacyData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuLegacyData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuItemRenderType", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuItemRenderType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControls", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlButtonData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlButtonData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlLinkData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlLinkData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlIconData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlIconData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlTextData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlTextData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlDescriptionData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlDescriptionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlComponentData", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavControlComponentData"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationPublicPluginSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["NavigationPublicPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationPublicPluginStart", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["NavigationPublicPluginStart"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_3__["NavigationPublicPlugin"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
  return new _plugin__WEBPACK_IMPORTED_MODULE_3__["NavigationPublicPlugin"](initializerContext);
}



// Export plugin after all other imports



/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: NavigationPublicPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPublicPlugin", function() { return NavigationPublicPlugin; });
/* harmony import */ var _top_nav_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top_nav_menu */ "./public/top_nav_menu/index.ts");
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


class NavigationPublicPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "topNavMenuExtensionsRegistry", new _top_nav_menu__WEBPACK_IMPORTED_MODULE_0__["TopNavMenuExtensionsRegistry"]());
  }
  setup(core) {
    return {
      registerMenuItem: this.topNavMenuExtensionsRegistry.register.bind(this.topNavMenuExtensionsRegistry)
    };
  }
  start({
    i18n,
    chrome
  }, {
    data
  }) {
    const extensions = this.topNavMenuExtensionsRegistry.getAll();
    return {
      ui: {
        TopNavMenu: Object(_top_nav_menu__WEBPACK_IMPORTED_MODULE_0__["createTopNav"])(data, extensions, i18n, chrome.navGroup.getNavGroupEnabled()),
        HeaderControl: Object(_top_nav_menu__WEBPACK_IMPORTED_MODULE_0__["createTopNavControl"])(i18n)
      }
    };
  }
  stop() {}
}

/***/ }),

/***/ "./public/top_nav_menu/create_top_nav_menu.tsx":
/*!*****************************************************!*\
  !*** ./public/top_nav_menu/create_top_nav_menu.tsx ***!
  \*****************************************************/
/*! exports provided: createTopNav, createTopNavControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopNav", function() { return createTopNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopNavControl", function() { return createTopNavControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _top_nav_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top_nav_controls */ "./public/top_nav_menu/top_nav_controls.tsx");
/* harmony import */ var _top_nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_nav_menu */ "./public/top_nav_menu/top_nav_menu.tsx");
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




function createTopNav(data, extraConfig, i18n, groupActions) {
  return props => {
    const relevantConfig = extraConfig.filter(dataItem => dataItem.appName === undefined || dataItem.appName === props.appName);
    const config = (props.config || []).concat(relevantConfig);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i18n.Context, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_nav_menu__WEBPACK_IMPORTED_MODULE_2__["TopNavMenu"], _extends({}, props, {
      data: data,
      groupActions: groupActions,
      config: config
    })));
  };
}
function createTopNavControl(i18n) {
  return props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(i18n.Context, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_nav_controls__WEBPACK_IMPORTED_MODULE_1__["TopNavControls"], props));
  };
}

/***/ }),

/***/ "./public/top_nav_menu/index.ts":
/*!**************************************!*\
  !*** ./public/top_nav_menu/index.ts ***!
  \**************************************/
/*! exports provided: createTopNav, createTopNavControl, TopNavMenu, TopNavMenuProps, TopNavMenuItemRenderType, TopNavControls, TopNavControlsProps, TopNavControlData, TopNavControlButtonData, TopNavControlLinkData, TopNavControlIconData, TopNavControlTextData, TopNavControlDescriptionData, TopNavControlComponentData, TopNavMenuData, TopNavMenuButtonData, TopNavMenuSwitchData, TopNavMenuIconData, TopNavMenuLegacyData, TopNavMenuSwitchAction, TopNavMenuClickAction, TopNavMenuAction, TopNavMenuExtensionsRegistrySetup, TopNavMenuExtensionsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_top_nav_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_top_nav_menu */ "./public/top_nav_menu/create_top_nav_menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTopNav", function() { return _create_top_nav_menu__WEBPACK_IMPORTED_MODULE_0__["createTopNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTopNavControl", function() { return _create_top_nav_menu__WEBPACK_IMPORTED_MODULE_0__["createTopNavControl"]; });

/* harmony import */ var _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top_nav_menu */ "./public/top_nav_menu/top_nav_menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenu", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuProps", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuItemRenderType", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_1__["TopNavMenuItemRenderType"]; });

/* harmony import */ var _top_nav_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_nav_controls */ "./public/top_nav_menu/top_nav_controls.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControls", function() { return _top_nav_controls__WEBPACK_IMPORTED_MODULE_2__["TopNavControls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlsProps", function() { return _top_nav_controls__WEBPACK_IMPORTED_MODULE_2__["TopNavControlsProps"]; });

/* harmony import */ var _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top_nav_control_data */ "./public/top_nav_menu/top_nav_control_data.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlButtonData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlButtonData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlLinkData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlLinkData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlIconData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlIconData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlTextData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlTextData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlDescriptionData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlDescriptionData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavControlComponentData", function() { return _top_nav_control_data__WEBPACK_IMPORTED_MODULE_3__["TopNavControlComponentData"]; });

/* harmony import */ var _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top_nav_menu_data */ "./public/top_nav_menu/top_nav_menu_data.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuData", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuButtonData", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuButtonData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuSwitchData", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuSwitchData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuIconData", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuIconData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuLegacyData", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuLegacyData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuSwitchAction", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuSwitchAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuClickAction", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuClickAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuAction", function() { return _top_nav_menu_data__WEBPACK_IMPORTED_MODULE_4__["TopNavMenuAction"]; });

/* harmony import */ var _top_nav_menu_extensions_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top_nav_menu_extensions_registry */ "./public/top_nav_menu/top_nav_menu_extensions_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuExtensionsRegistrySetup", function() { return _top_nav_menu_extensions_registry__WEBPACK_IMPORTED_MODULE_5__["TopNavMenuExtensionsRegistrySetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuExtensionsRegistry", function() { return _top_nav_menu_extensions_registry__WEBPACK_IMPORTED_MODULE_5__["TopNavMenuExtensionsRegistry"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/top_nav_menu/top_nav_control_data.tsx":
/*!******************************************************!*\
  !*** ./public/top_nav_menu/top_nav_control_data.tsx ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/top_nav_menu/top_nav_control_item.tsx":
/*!******************************************************!*\
  !*** ./public/top_nav_menu/top_nav_control_item.tsx ***!
  \******************************************************/
/*! exports provided: TopNavControlItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavControlItem", function() { return TopNavControlItem; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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




function TopNavControlItem(props) {
  if ('renderComponent' in props) return props.renderComponent;
  if ('text' in props) {
    const {
      text,
      ...rest
    } = props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], _extends({
      size: "s"
    }, rest), text);
  }
  if ('description' in props) {
    const links = props.links && [props.links].flat();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      className: "descriptionHeaderControl",
      size: "s"
    }, props.description, links === null || links === void 0 ? void 0 : links.map(linkProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TopNavControlItem, _extends({}, linkProps, {
      sizeOverride: "xs"
    })))));
  }
  function isDisabled() {
    if ('isDisabled' in props) {
      const val = typeof props.isDisabled === 'function' ? props.isDisabled() : props.isDisabled;
      return val || false;
    }
    return false;
  }
  function getTooltip() {
    if ('tooltip' in props) {
      const val = typeof props.tooltip === 'function' ? props.tooltip() : props.tooltip;
      return val || '';
    }
    return '';
  }
  function handleClick(e) {
    var _props$run;
    if ('run' in props && !isDisabled()) (_props$run = props.run) === null || _props$run === void 0 || _props$run.call(props, e.currentTarget);
  }
  let component;
  switch (props.controlType) {
    case 'icon':
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonIcon"], {
        size: "s",
        iconType: props.iconType,
        iconSize: props.iconSize,
        color: props.color,
        className: props.className,
        href: props.href,
        target: props.target,
        isDisabled: isDisabled(),
        onClick: handleClick,
        "aria-label": props.ariaLabel,
        "data-test-subj": props.testId,
        display: props.display || 'empty'
      });
      break;
    case 'link':
      let {
        iconType,
        iconSide
      } = props;
      let iconGap;
      if (props.target === '_blank') {
        iconType = 'popout';
        iconSide = 'right';
        iconGap = 's';
      }
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHeaderLink"]
      // @ts-ignore using an undefined property to prevent abuse
      , {
        size: props.sizeOverride || 's',
        iconType: iconType,
        iconSide: iconSide,
        iconGap: iconGap,
        iconSize: props.iconSize,
        color: props.color,
        flush: props.flush,
        className: props.className,
        href: props.href,
        target: props.target,
        isDisabled: isDisabled(),
        onClick: handleClick,
        "aria-label": props.ariaLabel,
        "data-test-subj": props.testId,
        isLoading: props.isLoading
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(props.label || props.id));
      break;
    default:
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
        size: "s",
        iconType: props.iconType,
        iconSide: props.iconSide,
        iconSize: props.iconSize,
        color: props.color,
        fill: props.fill,
        className: props.className,
        href: props.href,
        target: props.target,
        isDisabled: isDisabled(),
        onClick: handleClick,
        "aria-label": props.ariaLabel,
        "data-test-subj": props.testId,
        isLoading: props.isLoading
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["upperFirst"])(props.label || props.id)));
  }
  const tooltip = getTooltip();
  if (tooltip) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiToolTip"], {
      content: tooltip
    }, component);
  }
  return component;
}

/***/ }),

/***/ "./public/top_nav_menu/top_nav_controls.tsx":
/*!**************************************************!*\
  !*** ./public/top_nav_menu/top_nav_controls.tsx ***!
  \**************************************************/
/*! exports provided: TopNavControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavControls", function() { return TopNavControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _top_nav_control_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top_nav_control_item */ "./public/top_nav_menu/top_nav_control_item.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function TopNavControls(props) {
  const {
    controls
  } = props;
  if (!Array.isArray(controls) || controls.length === 0) {
    return null;
  }
  function renderItems() {
    return controls.map((menuItem, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
        border: "none",
        key: `nav-control-${i}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_top_nav_control_item__WEBPACK_IMPORTED_MODULE_3__["TopNavControlItem"], menuItem));
    });
  }
  function renderLayout() {
    const {
      setMountPoint
    } = props;
    return setMountPoint ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["MountPointPortal"], {
      setMountPoint: setMountPoint
    }, renderItems()) : null;
  }
  return renderLayout();
}

/***/ }),

/***/ "./public/top_nav_menu/top_nav_menu.tsx":
/*!**********************************************!*\
  !*** ./public/top_nav_menu/top_nav_menu.tsx ***!
  \**********************************************/
/*! exports provided: TopNavMenuItemRenderType, TopNavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuItemRenderType", function() { return TopNavMenuItemRenderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenu", function() { return TopNavMenu; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_source_management_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data_source_management/public */ "plugin/dataSourceManagement/public");
/* harmony import */ var _data_source_management_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_source_management_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _top_nav_menu_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top_nav_menu_item */ "./public/top_nav_menu/top_nav_menu_item.tsx");
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







let TopNavMenuItemRenderType = /*#__PURE__*/function (TopNavMenuItemRenderType) {
  TopNavMenuItemRenderType["IN_PORTAL"] = "in_portal";
  TopNavMenuItemRenderType["IN_PLACE"] = "in_place";
  TopNavMenuItemRenderType["OMITTED"] = "omitted";
  return TopNavMenuItemRenderType;
}({});
/*
 * Top Nav Menu is a convenience wrapper component for:
 * - Top navigation menu - configured by an array of `TopNavMenuData` objects
 * - Search Bar - which includes Filter Bar \ Query Input \ Timepicker.
 *
 * See SearchBar documentation to learn more about its properties.
 *
 **/

function TopNavMenu(props) {
  const {
    config,
    showSearchBar,
    showDatePicker,
    showDataSourceMenu,
    dataSourceMenuConfig,
    groupActions,
    screenTitle,
    ...searchBarProps
  } = props;
  const datePickerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  if ((!config || config.length === 0) && (!showSearchBar || !props.data) && (!showDataSourceMenu || !dataSourceMenuConfig)) {
    return null;
  }
  function renderItems() {
    if (!config || config.length === 0) return null;
    const renderedItems = config.map((menuItem, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_top_nav_menu_item__WEBPACK_IMPORTED_MODULE_5__["TopNavMenuItem"], _extends({
        key: `nav-menu-${i}`
      }, menuItem));
    });
    return groupActions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "osdTopNavMenuGroupedActions"
    }, renderedItems) : renderedItems;
  }
  function renderMenu(className, spreadSections = false) {
    if ((!config || config.length === 0) && (!showDataSourceMenu || !dataSourceMenuConfig)) return null;
    const menuClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      osdTopNavMenuSpread: spreadSections
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiHeaderLinks"], {
      "data-test-subj": "top-nav",
      gutterSize: "xs",
      className: menuClassName,
      popoverBreakpoints: 'none'
    }, renderItems(), renderDataSourceMenu());
  }
  function renderDataSourceMenu() {
    if (!showDataSourceMenu) return null;
    const DataSourceMenu = Object(_data_source_management_public__WEBPACK_IMPORTED_MODULE_3__["createDataSourceMenu"])();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DataSourceMenu, dataSourceMenuConfig);
  }
  function renderSearchBar(overrides = {}) {
    // Validate presence of all required fields
    if (!showSearchBar || !props.data) return null;
    const {
      SearchBar
    } = props.data.ui;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SearchBar, _extends({}, searchBarProps, {
      showDatePicker: ![TopNavMenuItemRenderType.OMITTED, false].includes(showDatePicker)
    }, overrides, {
      queryStatus: props.queryStatus
    }));
  }
  function renderLayout() {
    const {
      setMenuMountPoint
    } = props;
    const menuClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('osdTopNavMenu', props.className);
    if (setMenuMountPoint) {
      if (groupActions) {
        switch (showSearchBar) {
          case TopNavMenuItemRenderType.IN_PORTAL:
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["MountPointPortal"], {
              setMountPoint: setMenuMountPoint
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
              alignItems: "stretch",
              gutterSize: "none"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              grow: false,
              className: "osdTopNavMenuScreenTitle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
              size: "xs"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, screenTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              grow: false,
              className: "osdTopNavMenu"
            }, renderMenu(menuClassName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              className: "osdTopNavSearchBar"
            }, renderSearchBar({
              isFilterBarPortable: true
            })))));
          case false:
          case TopNavMenuItemRenderType.OMITTED:
            return screenTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["MountPointPortal"], {
              setMountPoint: setMenuMountPoint
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
              alignItems: "stretch",
              gutterSize: "none"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              grow: false,
              className: "osdTopNavMenuScreenTitle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
              size: "xs"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, screenTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              className: "osdTopNavMenu"
            }, renderMenu(menuClassName, true)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["MountPointPortal"], {
              setMountPoint: setMenuMountPoint
            }, renderMenu(menuClassName));

          // Show the SearchBar in-place
          default:
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["MountPointPortal"], {
              setMountPoint: setMenuMountPoint
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
              alignItems: "stretch",
              gutterSize: "none"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              grow: false,
              className: "osdTopNavMenuScreenTitle"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
              size: "xs"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, screenTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              grow: false,
              className: "osdTopNavMenu"
            }, renderMenu(menuClassName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
              className: "globalDatePicker"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
              ref: datePickerRef
            })))), renderSearchBar({
              datePickerRef
            }));
        }
      }

      // Legacy rendering behavior when setMenuMountPoint is set
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["MountPointPortal"], {
        setMountPoint: setMenuMountPoint
      }, renderMenu(menuClassName)), renderSearchBar());
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, renderMenu(menuClassName), renderSearchBar());
  }
  return renderLayout();
}
TopNavMenu.defaultProps = {
  showSearchBar: false,
  showQueryBar: true,
  showQueryInput: true,
  showDatePicker: true,
  showFilterBar: true,
  showDataSourceMenu: false,
  screenTitle: '',
  groupActions: false
};

/***/ }),

/***/ "./public/top_nav_menu/top_nav_menu_data.tsx":
/*!***************************************************!*\
  !*** ./public/top_nav_menu/top_nav_menu_data.tsx ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/top_nav_menu/top_nav_menu_extensions_registry.ts":
/*!*****************************************************************!*\
  !*** ./public/top_nav_menu/top_nav_menu_extensions_registry.ts ***!
  \*****************************************************************/
/*! exports provided: TopNavMenuExtensionsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuExtensionsRegistry", function() { return TopNavMenuExtensionsRegistry; });
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

class TopNavMenuExtensionsRegistry {
  constructor() {
    _defineProperty(this, "menuItems", void 0);
    this.menuItems = [];
  }

  /** @public **/
  // Items registered into this registry will be appended to any TopNavMenu rendered in any application.
  register(menuItem) {
    this.menuItems.push(menuItem);
  }

  /** @internal **/
  getAll() {
    return this.menuItems;
  }

  /** @internal **/
  clear() {
    this.menuItems.length = 0;
  }
}

/***/ }),

/***/ "./public/top_nav_menu/top_nav_menu_item.tsx":
/*!***************************************************!*\
  !*** ./public/top_nav_menu/top_nav_menu_item.tsx ***!
  \***************************************************/
/*! exports provided: TopNavMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuItem", function() { return TopNavMenuItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
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





function TopNavMenuLegacyItem(props) {
  function isDisabled() {
    const val = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(props.disableButton) ? props.disableButton() : props.disableButton;
    return val;
  }
  function getTooltip() {
    const val = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(props.tooltip) ? props.tooltip() : props.tooltip;
    return val;
  }
  function handleClick(e) {
    if (isDisabled()) return;
    props.run(e.currentTarget);
  }
  const commonButtonProps = {
    isDisabled: isDisabled(),
    onClick: handleClick,
    iconType: props.iconType,
    iconSide: props.iconSide,
    'data-test-subj': props.testId,
    className: props.className,
    'aria-label': props.ariaLabel
  };
  let component;
  if (props.type === 'toggle') {
    component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedSwitch"], {
      label: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(props.label || props.id),
      checked: props.emphasize || false,
      onChange: e => {
        handleClick(e);
      },
      "data-test-subj": props.testId,
      className: props.className
    });
  } else {
    component = props.emphasize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], _extends({
      size: "s"
    }, commonButtonProps), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(props.label || props.id)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHeaderLink"], _extends({
      size: "xs",
      color: "primary"
    }, commonButtonProps), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(props.label || props.id));
  }
  const tooltip = getTooltip();
  if (tooltip) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiToolTip"], {
      content: tooltip
    }, component);
  }
  return component;
}
function TopNavMenuItem(props) {
  if (!('controlType' in props)) return TopNavMenuLegacyItem(props);
  const {
    disabled,
    tooltip,
    run
  } = props;
  const isDisabled = () => Boolean(typeof disabled === 'function' ? disabled() : disabled);
  const handleClick = e => {
    if (!isDisabled()) run === null || run === void 0 || run(e.currentTarget);
  };
  const getComponent = (addTypeClassName = false) => {
    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, {
      [`osdTopNavGroup--${props.controlType}`]: addTypeClassName,
      'osdTopNavGroup-isDisabled': isDisabled()
    });
    switch (props.controlType) {
      case 'button':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], {
          size: "s",
          iconType: props.iconType,
          iconSide: props.iconSide,
          className: className,
          isLoading: props.isLoading,
          href: props.href,
          isDisabled: isDisabled(),
          onClick: handleClick,
          "aria-label": props.ariaLabel,
          "data-test-subj": props.testId,
          color: "text"
        }, props.label));
      case 'icon':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonIcon"], {
          size: "s",
          display: "base",
          iconType: props.iconType,
          className: className,
          href: props.href,
          isDisabled: isDisabled(),
          onClick: handleClick,
          "aria-label": props.ariaLabel,
          "data-test-subj": props.testId,
          color: "text"
        });
      case 'switch':
        const {
          checked
        } = props;
        const isChecked = () => Boolean(typeof checked === 'function' ? checked() : checked);
        const handleSwitch = e => {
          if (!isDisabled()) run === null || run === void 0 || run(e.currentTarget, e.target.checked);
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSwitch"], {
          compressed: true,
          label: props.label,
          checked: isChecked(),
          className: className,
          disabled: isDisabled(),
          onChange: handleSwitch,
          "aria-label": props.ariaLabel,
          "data-test-subj": props.testId,
          color: "text",
          display: "base"
        });
    }
  };
  const tooltipContent = typeof tooltip === 'function' ? tooltip() : tooltip;
  if (tooltipContent) {
    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`osdTopNavGroup--${props.controlType}`, {
      'osdTopNavGroup-isDisabled': isDisabled()
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiToolTip"], {
      content: tooltipContent,
      anchorClassName: className
    }, getComponent());
  }
  return getComponent(true);
}
TopNavMenuItem.defaultProps = {
  disableButton: false,
  tooltip: ''
};

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

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

/***/ }),

/***/ "plugin/dataSourceManagement/public":
/*!***********************************************************!*\
  !*** @osd/bundleRef "plugin/dataSourceManagement/public" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/dataSourceManagement/public');
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

/***/ })

/******/ });
//# sourceMappingURL=navigation.plugin.js.map