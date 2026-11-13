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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n", "",{"version":3,"sources":["webpack://./public/index.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,yBAAyB,SAAS,CAAC,kBAAkB,CAAC,cAAc,UAAU,CAAC,YAAY,CAAC,WAAW","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.icvControlEditor__panel{z-index:1;margin-bottom:16px}.icvContainer{width:100%;margin:0 4px;padding:8px}\n"],"sourceRoot":""}]);
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=inputControlVis!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=inputControlVis!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['inputControlVis']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_inputControlVis_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=inputControlVis!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=inputControlVis!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_inputControlVis_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_inputControlVis_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/inputControlVis/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/input_control_vis/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/editor/control_editor.tsx":
/*!*****************************************************!*\
  !*** ./public/components/editor/control_editor.tsx ***!
  \*****************************************************/
/*! exports provided: ControlEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlEditor", function() { return ControlEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _range_control_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range_control_editor */ "./public/components/editor/range_control_editor.tsx");
/* harmony import */ var _list_control_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list_control_editor */ "./public/components/editor/list_control_editor.tsx");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../editor_utils */ "./public/editor_utils.ts");
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







class ControlEditorUi extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "changeLabel", event => {
      this.props.handleLabelChange(this.props.controlIndex, event.target.value);
    });
    _defineProperty(this, "removeControl", () => {
      this.props.handleRemoveControl(this.props.controlIndex);
    });
    _defineProperty(this, "moveUpControl", () => {
      this.props.moveControl(this.props.controlIndex, -1);
    });
    _defineProperty(this, "moveDownControl", () => {
      this.props.moveControl(this.props.controlIndex, 1);
    });
    _defineProperty(this, "changeIndexPattern", indexPatternId => {
      this.props.handleIndexPatternChange(this.props.controlIndex, indexPatternId);
    });
    _defineProperty(this, "changeFieldName", fieldName => {
      this.props.handleFieldNameChange(this.props.controlIndex, fieldName);
    });
  }
  renderEditor() {
    let controlEditor = null;
    switch (this.props.controlParams.type) {
      case _editor_utils__WEBPACK_IMPORTED_MODULE_5__["CONTROL_TYPES"].LIST:
        controlEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_control_editor__WEBPACK_IMPORTED_MODULE_4__["ListControlEditor"], {
          controlIndex: this.props.controlIndex,
          controlParams: this.props.controlParams,
          handleIndexPatternChange: this.changeIndexPattern,
          handleFieldNameChange: this.changeFieldName,
          getIndexPattern: this.props.getIndexPattern,
          handleOptionsChange: this.props.handleOptionsChange,
          parentCandidates: this.props.parentCandidates,
          handleParentChange: this.props.handleParentChange,
          deps: this.props.deps
        });
        break;
      case _editor_utils__WEBPACK_IMPORTED_MODULE_5__["CONTROL_TYPES"].RANGE:
        controlEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_range_control_editor__WEBPACK_IMPORTED_MODULE_3__["RangeControlEditor"], {
          controlIndex: this.props.controlIndex,
          controlParams: this.props.controlParams,
          handleIndexPatternChange: this.changeIndexPattern,
          handleFieldNameChange: this.changeFieldName,
          getIndexPattern: this.props.getIndexPattern,
          handleOptionsChange: this.props.handleOptionsChange,
          deps: this.props.deps
        });
        break;
      default:
        throw new Error(`Unhandled control editor type ${this.props.controlParams.type}`);
    }
    const labelId = `controlLabel${this.props.controlIndex}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      id: labelId,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "inputControl.editor.controlEditor.controlLabel",
        defaultMessage: "Control Label"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFieldText"], {
      value: this.props.controlParams.label,
      onChange: this.changeLabel
    })), controlEditor);
  }
  renderEditorButtons() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButtonIcon"], {
      "aria-label": this.props.intl.formatMessage({
        id: 'inputControl.editor.controlEditor.moveControlUpAriaLabel',
        defaultMessage: 'Move control up'
      }),
      color: "primary",
      onClick: this.moveUpControl,
      iconType: "sortUp",
      "data-test-subj": `inputControlEditorMoveUpControl${this.props.controlIndex}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButtonIcon"], {
      "aria-label": this.props.intl.formatMessage({
        id: 'inputControl.editor.controlEditor.moveControlDownAriaLabel',
        defaultMessage: 'Move control down'
      }),
      color: "primary",
      onClick: this.moveDownControl,
      iconType: "sortDown",
      "data-test-subj": `inputControlEditorMoveDownControl${this.props.controlIndex}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButtonIcon"], {
      "aria-label": this.props.intl.formatMessage({
        id: 'inputControl.editor.controlEditor.removeControlAriaLabel',
        defaultMessage: 'Remove control'
      }),
      color: "danger",
      onClick: this.removeControl,
      iconType: "cross",
      "data-test-subj": `inputControlEditorRemoveControl${this.props.controlIndex}`
    }));
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPanel"], {
      grow: false,
      className: "icvControlEditor__panel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiAccordion"], {
      id: "controlEditorAccordion",
      buttonContent: Object(_editor_utils__WEBPACK_IMPORTED_MODULE_5__["getTitle"])(this.props.controlParams, this.props.controlIndex),
      extraAction: this.renderEditorButtons(),
      initialIsOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), this.renderEditor()));
  }
}
const ControlEditor = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(ControlEditorUi);

/***/ }),

/***/ "./public/components/editor/controls_tab.tsx":
/*!***************************************************!*\
  !*** ./public/components/editor/controls_tab.tsx ***!
  \***************************************************/
/*! exports provided: ControlsTab, getControlsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsTab", function() { return ControlsTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlsTab", function() { return getControlsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _control_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control_editor */ "./public/components/editor/control_editor.tsx");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor_utils */ "./public/editor_utils.ts");
/* harmony import */ var _lineage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lineage */ "./public/lineage/index.ts");
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







class ControlsTabUi extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      type: _editor_utils__WEBPACK_IMPORTED_MODULE_4__["CONTROL_TYPES"].LIST
    });
    _defineProperty(this, "getIndexPattern", async indexPatternId => {
      const [, startDeps] = await this.props.deps.core.getStartServices();
      return await startDeps.data.indexPatterns.get(indexPatternId);
    });
    _defineProperty(this, "onChange", value => this.props.setValue('controls', value));
    _defineProperty(this, "handleLabelChange", (controlIndex, label) => {
      const updatedControl = {
        ...this.props.stateParams.controls[controlIndex],
        label
      };
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["setControl"])(this.props.stateParams.controls, controlIndex, updatedControl));
    });
    _defineProperty(this, "handleIndexPatternChange", (controlIndex, indexPattern) => {
      const updatedControl = {
        ...this.props.stateParams.controls[controlIndex],
        indexPattern,
        fieldName: ''
      };
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["setControl"])(this.props.stateParams.controls, controlIndex, updatedControl));
    });
    _defineProperty(this, "handleFieldNameChange", (controlIndex, fieldName) => {
      const updatedControl = {
        ...this.props.stateParams.controls[controlIndex],
        fieldName
      };
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["setControl"])(this.props.stateParams.controls, controlIndex, updatedControl));
    });
    _defineProperty(this, "handleOptionsChange", (controlIndex, optionName, value) => {
      const control = this.props.stateParams.controls[controlIndex];
      const updatedControl = {
        ...control,
        options: {
          ...control.options,
          [optionName]: value
        }
      };
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["setControl"])(this.props.stateParams.controls, controlIndex, updatedControl));
    });
    _defineProperty(this, "handleRemoveControl", controlIndex => {
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["removeControl"])(this.props.stateParams.controls, controlIndex));
    });
    _defineProperty(this, "moveControl", (controlIndex, direction) => {
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["moveControl"])(this.props.stateParams.controls, controlIndex, direction));
    });
    _defineProperty(this, "handleAddControl", () => {
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["addControl"])(this.props.stateParams.controls, Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["newControl"])(this.state.type)));
    });
    _defineProperty(this, "handleParentChange", (controlIndex, parent) => {
      const updatedControl = {
        ...this.props.stateParams.controls[controlIndex],
        parent
      };
      this.onChange(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_4__["setControl"])(this.props.stateParams.controls, controlIndex, updatedControl));
    });
  }
  renderControls() {
    const lineageMap = Object(_lineage__WEBPACK_IMPORTED_MODULE_5__["getLineageMap"])(this.props.stateParams.controls);
    return this.props.stateParams.controls.map((controlParams, controlIndex) => {
      const parentCandidates = Object(_lineage__WEBPACK_IMPORTED_MODULE_5__["getParentCandidates"])(this.props.stateParams.controls, controlParams.id, lineageMap);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_control_editor__WEBPACK_IMPORTED_MODULE_3__["ControlEditor"], {
        key: controlParams.id,
        controlIndex: controlIndex,
        controlParams: controlParams,
        handleLabelChange: this.handleLabelChange,
        moveControl: this.moveControl,
        handleRemoveControl: this.handleRemoveControl,
        handleIndexPatternChange: this.handleIndexPatternChange,
        handleFieldNameChange: this.handleFieldNameChange,
        getIndexPattern: this.getIndexPattern,
        handleOptionsChange: this.handleOptionsChange,
        parentCandidates: parentCandidates,
        handleParentChange: this.handleParentChange,
        deps: this.props.deps
      });
    });
  }
  render() {
    const {
      intl
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPanel"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      id: "selectControlType"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSelect"], {
      "data-test-subj": "selectControlType",
      options: [{
        value: _editor_utils__WEBPACK_IMPORTED_MODULE_4__["CONTROL_TYPES"].RANGE,
        text: intl.formatMessage({
          id: 'inputControl.editor.controlsTab.select.rangeDropDownOptionLabel',
          defaultMessage: 'Range slider'
        })
      }, {
        value: _editor_utils__WEBPACK_IMPORTED_MODULE_4__["CONTROL_TYPES"].LIST,
        text: intl.formatMessage({
          id: 'inputControl.editor.controlsTab.select.listDropDownOptionLabel',
          defaultMessage: 'Options list'
        })
      }],
      value: this.state.type,
      onChange: event => this.setState({
        type: event.target.value
      }),
      "aria-label": intl.formatMessage({
        id: 'inputControl.editor.controlsTab.select.controlTypeAriaLabel',
        defaultMessage: 'Select control type'
      })
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      id: "addControl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
      onClick: this.handleAddControl,
      iconType: "plusInCircle",
      "data-test-subj": "inputControlEditorAddBtn",
      "aria-label": intl.formatMessage({
        id: 'inputControl.editor.controlsTab.select.addControlAriaLabel',
        defaultMessage: 'Add control'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "inputControl.editor.controlsTab.addButtonLabel",
      defaultMessage: "Add"
    })))))));
  }
}
const ControlsTab = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(ControlsTabUi);
const getControlsTab = deps => props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ControlsTab, _extends({}, props, {
  deps: deps
}));

/***/ }),

/***/ "./public/components/editor/field_select.tsx":
/*!***************************************************!*\
  !*** ./public/components/editor/field_select.tsx ***!
  \***************************************************/
/*! exports provided: FieldSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSelect", function() { return FieldSelect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
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





class FieldSelectUi extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "hasUnmounted", void 0);
    _defineProperty(this, "loadFields", indexPatternId => {
      this.setState({
        isLoading: true,
        fields: [],
        indexPatternId
      }, this.debouncedLoad.bind(null, indexPatternId));
    });
    _defineProperty(this, "debouncedLoad", lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(async indexPatternId => {
      var _this$props$filterFie;
      if (!indexPatternId || indexPatternId.length === 0) {
        return;
      }
      let indexPattern;
      try {
        indexPattern = await this.props.getIndexPattern(indexPatternId);
      } catch (err) {
        // index pattern no longer exists
        return;
      }
      if (this.hasUnmounted) {
        return;
      }

      // props.indexPatternId may be updated before getIndexPattern returns
      // ignore response when fetched index pattern does not match active index pattern
      if (indexPattern.id !== this.state.indexPatternId) {
        return;
      }
      const fieldsByTypeMap = new Map();
      const fields = [];
      indexPattern.fields.filter((_this$props$filterFie = this.props.filterField) !== null && _this$props$filterFie !== void 0 ? _this$props$filterFie : () => true).forEach(field => {
        var _fieldsByTypeMap$get;
        const fieldsList = (_fieldsByTypeMap$get = fieldsByTypeMap.get(field.type)) !== null && _fieldsByTypeMap$get !== void 0 ? _fieldsByTypeMap$get : [];
        fieldsList.push(field.name);
        fieldsByTypeMap.set(field.type, fieldsList);
      });
      fieldsByTypeMap.forEach((fieldsList, fieldType) => {
        fields.push({
          label: fieldType,
          options: fieldsList.sort().map(fieldName => {
            return {
              value: fieldName,
              label: fieldName
            };
          })
        });
      });
      fields.sort((a, b) => {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
      this.setState({
        isLoading: false,
        fields
      });
    }, 300));
    _defineProperty(this, "onChange", selectedOptions => {
      this.props.onChange(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(selectedOptions, '0.value'));
    });
    this.hasUnmounted = false;
    this.state = {
      isLoading: false,
      fields: [],
      indexPatternId: props.indexPatternId
    };
  }
  componentWillUnmount() {
    this.hasUnmounted = true;
  }
  componentDidMount() {
    this.loadFields(this.state.indexPatternId);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.indexPatternId !== nextProps.indexPatternId) {
      var _nextProps$indexPatte;
      this.loadFields((_nextProps$indexPatte = nextProps.indexPatternId) !== null && _nextProps$indexPatte !== void 0 ? _nextProps$indexPatte : '');
    }
  }
  render() {
    if (!this.props.indexPatternId || this.props.indexPatternId.trim().length === 0) {
      return null;
    }
    const selectId = `fieldSelect-${this.props.controlIndex}`;
    const selectedOptions = [];
    const {
      intl
    } = this.props;
    if (this.props.fieldName) {
      selectedOptions.push({
        value: this.props.fieldName,
        label: this.props.fieldName
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedFormRow"], {
      id: selectId,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.fieldSelect.fieldLabel",
        defaultMessage: "Field"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedComboBox"], {
      placeholder: intl.formatMessage({
        id: 'inputControl.editor.fieldSelect.selectFieldPlaceholder',
        defaultMessage: 'Select field...'
      }),
      singleSelection: true,
      isLoading: this.state.isLoading,
      options: this.state.fields,
      selectedOptions: selectedOptions,
      onChange: this.onChange,
      "data-test-subj": selectId
    }));
  }
}
const FieldSelect = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(FieldSelectUi);

/***/ }),

/***/ "./public/components/editor/index_pattern_select_form_row.tsx":
/*!********************************************************************!*\
  !*** ./public/components/editor/index_pattern_select_form_row.tsx ***!
  \********************************************************************/
/*! exports provided: IndexPatternSelectFormRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPatternSelectFormRow", function() { return IndexPatternSelectFormRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
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




function IndexPatternSelectFormRowUi(props) {
  const {
    controlIndex,
    indexPatternId,
    intl,
    onChange
  } = props;
  const selectId = `indexPatternSelect-${controlIndex}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
    id: selectId,
    label: intl.formatMessage({
      id: 'inputControl.editor.indexPatternSelect.patternLabel',
      defaultMessage: 'Index Pattern'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(props.IndexPatternSelect, {
    placeholder: intl.formatMessage({
      id: 'inputControl.editor.indexPatternSelect.patternPlaceholder',
      defaultMessage: 'Select index pattern...'
    }),
    indexPatternId: indexPatternId,
    onChange: onChange,
    "data-test-subj": selectId
    // TODO: supply actual savedObjectsClient here
    ,
    savedObjectsClient: {}
  }));
}
const IndexPatternSelectFormRow = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(IndexPatternSelectFormRowUi);

/***/ }),

/***/ "./public/components/editor/list_control_editor.tsx":
/*!**********************************************************!*\
  !*** ./public/components/editor/list_control_editor.tsx ***!
  \**********************************************************/
/*! exports provided: ListControlEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControlEditor", function() { return ListControlEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_pattern_select_form_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index_pattern_select_form_row */ "./public/components/editor/index_pattern_select_form_row.tsx");
/* harmony import */ var _field_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field_select */ "./public/components/editor/field_select.tsx");
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






function filterField(field) {
  return Boolean(field.aggregatable) && ['number', 'boolean', 'date', 'ip', 'string'].includes(field.type);
}
class ListControlEditor extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "isMounted", false);
    _defineProperty(this, "state", {
      isLoadingFieldType: true,
      isStringField: false,
      prevFieldName: this.props.controlParams.fieldName,
      IndexPatternSelect: null
    });
    _defineProperty(this, "componentDidUpdate", () => {
      if (this.state.isLoadingFieldType) {
        this.loadIsStringField();
      }
    });
    _defineProperty(this, "loadIsStringField", async () => {
      if (!this.props.controlParams.indexPattern || !this.props.controlParams.fieldName) {
        this.setState({
          isLoadingFieldType: false
        });
        return;
      }
      let indexPattern;
      try {
        indexPattern = await this.props.getIndexPattern(this.props.controlParams.indexPattern);
      } catch (err) {
        // index pattern no longer exists
        return;
      }
      if (!this.isMounted) {
        return;
      }
      const field = indexPattern.fields.find(({
        name
      }) => name === this.props.controlParams.fieldName);
      if (!field) {
        return;
      }
      this.setState({
        isLoadingFieldType: false,
        isStringField: field.type === 'string'
      });
    });
    _defineProperty(this, "renderOptions", () => {
      var _this$props$controlPa, _this$props$controlPa2;
      if (this.state.isLoadingFieldType || !this.props.controlParams.fieldName) {
        return;
      }
      const options = [];
      if (this.props.parentCandidates && this.props.parentCandidates.length > 0) {
        const parentCandidatesOptions = [{
          value: '',
          text: ''
        }, ...this.props.parentCandidates];
        options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
          id: `parentSelect-${this.props.controlIndex}`,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "inputControl.editor.listControl.parentLabel",
            defaultMessage: "Parent control"
          }),
          helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "inputControl.editor.listControl.parentDescription",
            defaultMessage: "Options are based on the value of parent control. Disabled if parent is not set."
          }),
          key: "parentSelect"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSelect"], {
          options: parentCandidatesOptions,
          value: this.props.controlParams.parent,
          onChange: event => {
            this.props.handleParentChange(this.props.controlIndex, event.target.value);
          }
        })));
      }
      options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
        id: `multiselect-${this.props.controlIndex}`,
        key: "multiselect",
        helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
          id: "inputControl.editor.listControl.multiselectDescription",
          defaultMessage: "Allow multiple selection"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSwitch"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
          id: "inputControl.editor.listControl.multiselectLabel",
          defaultMessage: "Multiselect"
        }),
        checked: (_this$props$controlPa = this.props.controlParams.options.multiselect) !== null && _this$props$controlPa !== void 0 ? _this$props$controlPa : true,
        onChange: event => {
          this.props.handleOptionsChange(this.props.controlIndex, 'multiselect', event.target.checked);
        },
        "data-test-subj": "listControlMultiselectInput"
      })));
      const dynamicOptionsHelpText = this.state.isStringField ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "inputControl.editor.listControl.dynamicOptions.updateDescription",
        defaultMessage: "Update options in response to user input"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "inputControl.editor.listControl.dynamicOptions.stringFieldDescription",
        defaultMessage: "Only available for \"string\" fields"
      });
      options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
        id: `dynamicOptions-${this.props.controlIndex}`,
        key: "dynamicOptions",
        helpText: dynamicOptionsHelpText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSwitch"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
          id: "inputControl.editor.listControl.dynamicOptionsLabel",
          defaultMessage: "Dynamic Options"
        }),
        checked: (_this$props$controlPa2 = this.props.controlParams.options.dynamicOptions) !== null && _this$props$controlPa2 !== void 0 ? _this$props$controlPa2 : false,
        onChange: event => {
          this.props.handleOptionsChange(this.props.controlIndex, 'dynamicOptions', event.target.checked);
        },
        disabled: this.state.isStringField ? false : true,
        "data-test-subj": "listControlDynamicOptionsSwitch"
      })));

      // size is not used when dynamic options is set
      if (!this.props.controlParams.options.dynamicOptions || !this.state.isStringField) {
        options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
          id: `size-${this.props.controlIndex}`,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "inputControl.editor.listControl.sizeLabel",
            defaultMessage: "Size"
          }),
          key: "size",
          helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
            id: "inputControl.editor.listControl.sizeDescription",
            defaultMessage: "Number of options"
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFieldNumber"], {
          min: 1,
          value: this.props.controlParams.options.size,
          onChange: event => {
            this.props.handleOptionsChange(this.props.controlIndex, 'size', event.target.valueAsNumber);
          },
          "data-test-subj": "listControlSizeInput"
        })));
      }
      return options;
    });
  }
  componentDidMount() {
    this.isMounted = true;
    this.loadIsStringField();
    this.getIndexPatternSelect();
  }
  componentWillUnmount() {
    this.isMounted = false;
  }
  async getIndexPatternSelect() {
    const [, {
      data
    }] = await this.props.deps.core.getStartServices();
    this.setState({
      IndexPatternSelect: data.ui.IndexPatternSelect
    });
  }
  render() {
    if (this.state.IndexPatternSelect === null) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_pattern_select_form_row__WEBPACK_IMPORTED_MODULE_3__["IndexPatternSelectFormRow"], {
      indexPatternId: this.props.controlParams.indexPattern,
      onChange: this.props.handleIndexPatternChange,
      controlIndex: this.props.controlIndex,
      IndexPatternSelect: this.state.IndexPatternSelect
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_field_select__WEBPACK_IMPORTED_MODULE_4__["FieldSelect"], {
      fieldName: this.props.controlParams.fieldName,
      indexPatternId: this.props.controlParams.indexPattern,
      filterField: filterField,
      onChange: this.props.handleFieldNameChange,
      getIndexPattern: this.props.getIndexPattern,
      controlIndex: this.props.controlIndex
    }), this.renderOptions());
  }
}
_defineProperty(ListControlEditor, "getDerivedStateFromProps", (nextProps, prevState) => {
  const isNewFieldName = prevState.prevFieldName !== nextProps.controlParams.fieldName;
  if (!prevState.isLoadingFieldType && isNewFieldName) {
    return {
      prevFieldName: nextProps.controlParams.fieldName,
      isLoadingFieldType: true
    };
  }
  return null;
});

/***/ }),

/***/ "./public/components/editor/options_tab.tsx":
/*!**************************************************!*\
  !*** ./public/components/editor/options_tab.tsx ***!
  \**************************************************/
/*! exports provided: OptionsTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsTab", function() { return OptionsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
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




class OptionsTab extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleUpdateFiltersChange", event => {
      this.props.setValue('updateFiltersOnChange', event.target.checked);
    });
    _defineProperty(this, "handleUseTimeFilter", event => {
      this.props.setValue('useTimeFilter', event.target.checked);
    });
    _defineProperty(this, "handlePinFilters", event => {
      this.props.setValue('pinFilters', event.target.checked);
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      id: "updateFiltersOnChange"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.optionsTab.updateFilterLabel",
        defaultMessage: "Update OpenSearch Dashboards filters on each change"
      }),
      checked: this.props.stateParams.updateFiltersOnChange,
      onChange: this.handleUpdateFiltersChange,
      "data-test-subj": "inputControlEditorUpdateFiltersOnChangeCheckbox"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      id: "useTimeFilter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.optionsTab.useTimeFilterLabel",
        defaultMessage: "Use time filter"
      }),
      checked: this.props.stateParams.useTimeFilter,
      onChange: this.handleUseTimeFilter,
      "data-test-subj": "inputControlEditorUseTimeFilterCheckbox"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      id: "pinFilters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.optionsTab.pinFiltersLabel",
        defaultMessage: "Pin filters for all applications"
      }),
      checked: this.props.stateParams.pinFilters,
      onChange: this.handlePinFilters,
      "data-test-subj": "inputControlEditorPinFiltersCheckbox"
    })));
  }
}

/***/ }),

/***/ "./public/components/editor/range_control_editor.tsx":
/*!***********************************************************!*\
  !*** ./public/components/editor/range_control_editor.tsx ***!
  \***********************************************************/
/*! exports provided: RangeControlEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControlEditor", function() { return RangeControlEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_pattern_select_form_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index_pattern_select_form_row */ "./public/components/editor/index_pattern_select_form_row.tsx");
/* harmony import */ var _field_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field_select */ "./public/components/editor/field_select.tsx");
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






function filterField(field) {
  return field.type === 'number';
}
class RangeControlEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      IndexPatternSelect: null
    });
  }
  componentDidMount() {
    this.getIndexPatternSelect();
  }
  async getIndexPatternSelect() {
    const [, {
      data
    }] = await this.props.deps.core.getStartServices();
    this.setState({
      IndexPatternSelect: data.ui.IndexPatternSelect
    });
  }
  render() {
    const stepSizeId = `stepSize-${this.props.controlIndex}`;
    const decimalPlacesId = `decimalPlaces-${this.props.controlIndex}`;
    if (this.state.IndexPatternSelect === null) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index_pattern_select_form_row__WEBPACK_IMPORTED_MODULE_3__["IndexPatternSelectFormRow"], {
      indexPatternId: this.props.controlParams.indexPattern,
      onChange: this.props.handleIndexPatternChange,
      controlIndex: this.props.controlIndex,
      IndexPatternSelect: this.state.IndexPatternSelect
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_field_select__WEBPACK_IMPORTED_MODULE_4__["FieldSelect"], {
      fieldName: this.props.controlParams.fieldName,
      indexPatternId: this.props.controlParams.indexPattern,
      filterField: filterField,
      onChange: this.props.handleFieldNameChange,
      getIndexPattern: this.props.getIndexPattern,
      controlIndex: this.props.controlIndex
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      id: stepSizeId,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.rangeControl.stepSizeLabel",
        defaultMessage: "Step Size"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
      value: this.props.controlParams.options.step,
      onChange: event => {
        this.props.handleOptionsChange(this.props.controlIndex, 'step', event.target.valueAsNumber);
      },
      "data-test-subj": `rangeControlSizeInput${this.props.controlIndex}`
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      id: decimalPlacesId,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "inputControl.editor.rangeControl.decimalPlacesLabel",
        defaultMessage: "Decimal Places"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
      min: 0,
      value: this.props.controlParams.options.decimalPlaces,
      onChange: event => {
        this.props.handleOptionsChange(this.props.controlIndex, 'decimalPlaces', event.target.valueAsNumber);
      },
      "data-test-subj": `rangeControlDecimalPlacesInput${this.props.controlIndex}`
    })));
  }
}

/***/ }),

/***/ "./public/components/vis/form_row.tsx":
/*!********************************************!*\
  !*** ./public/components/vis/form_row.tsx ***!
  \********************************************/
/*! exports provided: FormRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRow", function() { return FormRow; });
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



function FormRow(props) {
  let control = props.children;
  if (props.disableMsg) {
    control = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
      position: "top",
      content: props.disableMsg,
      anchorClassName: "eui-displayBlock"
    }, control);
  }
  const label = props.warningMsg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    position: "top",
    content: props.warningMsg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "alert"
  })), props.label) : props.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    label: label,
    id: props.id,
    "data-test-subj": 'inputControl' + props.controlIndex
  }, control);
}

/***/ }),

/***/ "./public/components/vis/input_control_vis.tsx":
/*!*****************************************************!*\
  !*** ./public/components/vis/input_control_vis.tsx ***!
  \*****************************************************/
/*! exports provided: InputControlVis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputControlVis", function() { return InputControlVis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../editor_utils */ "./public/editor_utils.ts");
/* harmony import */ var _list_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list_control */ "./public/components/vis/list_control.tsx");
/* harmony import */ var _range_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range_control */ "./public/components/vis/range_control.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */







function isListControl(control) {
  return control.type === _editor_utils__WEBPACK_IMPORTED_MODULE_3__["CONTROL_TYPES"].LIST;
}
function isRangeControl(control) {
  return control.type === _editor_utils__WEBPACK_IMPORTED_MODULE_3__["CONTROL_TYPES"].RANGE;
}
class InputControlVis extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }
  handleSubmit() {
    this.props.submitFilters();
  }
  handleReset() {
    this.props.resetControls();
  }
  handleClearAll() {
    this.props.clearControls();
  }
  renderControls() {
    return this.props.controls.map((control, index) => {
      let controlComponent = null;
      if (isListControl(control)) {
        controlComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_control__WEBPACK_IMPORTED_MODULE_4__["ListControl"], {
          id: control.id,
          label: control.label,
          options: control.selectOptions,
          selectedOptions: control.value,
          formatOptionLabel: control.format,
          disableMsg: control.isEnabled() ? undefined : control.disabledReason,
          multiselect: control.options.multiselect,
          partialResults: control.partialResults,
          dynamicOptions: control.options.dynamicOptions,
          controlIndex: index,
          stageFilter: this.props.stageFilter,
          fetchOptions: query => {
            this.props.refreshControl(index, query);
          }
        });
      } else if (isRangeControl(control)) {
        controlComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_range_control__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
          control: control,
          controlIndex: index,
          stageFilter: this.props.stageFilter
        });
      } else {
        throw new Error(`Unhandled control type ${control.type}`);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
        key: control.id,
        style: {
          minWidth: '250px'
        },
        "data-test-subj": "inputControlItem"
      }, controlComponent);
    });
  }
  renderStagingButtons() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      wrap: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
      onClick: this.handleSubmit,
      disabled: !this.props.hasChanges(),
      "data-test-subj": "inputControlSubmitBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "inputControl.vis.inputControlVis.applyChangesButtonLabel",
      defaultMessage: "Apply changes"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
      onClick: this.handleReset,
      disabled: !this.props.hasChanges(),
      "data-test-subj": "inputControlCancelBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "inputControl.vis.inputControlVis.cancelChangesButtonLabel",
      defaultMessage: "Cancel changes"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
      onClick: this.handleClearAll,
      disabled: !this.props.hasValues(),
      "data-test-subj": "inputControlClearBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "inputControl.vis.inputControlVis.clearFormButtonLabel",
      defaultMessage: "Clear form"
    }))));
  }
  render() {
    let stagingButtons;
    if (this.props.controls.length > 0 && !this.props.updateFiltersOnChange) {
      stagingButtons = this.renderStagingButtons();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "icvContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      wrap: true
    }, this.renderControls()), stagingButtons);
  }
}

/***/ }),

/***/ "./public/components/vis/list_control.tsx":
/*!************************************************!*\
  !*** ./public/components/vis/list_control.tsx ***!
  \************************************************/
/*! exports provided: ListControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControl", function() { return ListControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form_row */ "./public/components/vis/form_row.tsx");
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







class ListControlUi extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "isMounted", false);
    _defineProperty(this, "state", {
      isLoading: false
    });
    _defineProperty(this, "textInput", void 0);
    _defineProperty(this, "componentDidMount", () => {
      if (this.textInput) {
        this.textInput.setAttribute('focusable', 'false'); // remove when #59039 is fixed
      }

      this.isMounted = true;
    });
    _defineProperty(this, "componentWillUnmount", () => {
      this.isMounted = false;
    });
    _defineProperty(this, "setTextInputRef", ref => {
      this.textInput = ref;
    });
    _defineProperty(this, "handleOnChange", selectedOptions => {
      const selectedValues = selectedOptions.map(({
        value
      }) => {
        return value;
      });
      this.props.stageFilter(this.props.controlIndex, selectedValues);
    });
    _defineProperty(this, "debouncedFetch", lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce(async searchValue => {
      if (this.props.fetchOptions) {
        await this.props.fetchOptions(searchValue);
      }
      if (this.isMounted) {
        this.setState({
          isLoading: false
        });
      }
    }, 300));
    _defineProperty(this, "onSearchChange", searchValue => {
      this.setState({
        isLoading: true
      }, this.debouncedFetch.bind(null, searchValue));
    });
    this.textInput = null;
  }
  renderControl() {
    var _this$props$options;
    const {
      intl
    } = this.props;
    if (this.props.disableMsg) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedFieldText"], {
        "aria-label": intl.formatMessage({
          id: 'inputControl.vis.listControl.selectTextPlaceholder',
          defaultMessage: 'Select...'
        }),
        placeholder: intl.formatMessage({
          id: 'inputControl.vis.listControl.selectTextPlaceholder',
          defaultMessage: 'Select...'
        }),
        disabled: true
      });
    }
    const options = (_this$props$options = this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.map(option => {
      return {
        label: this.props.formatOptionLabel(option).toString(),
        value: option,
        ['data-test-subj']: `option_${option.toString().replace(' ', '_')}`
      };
    }).sort((a, b) => {
      return a.label.toLowerCase().localeCompare(b.label.toLowerCase());
    });
    const selectedOptions = this.props.selectedOptions.map(selectedOption => {
      return {
        label: this.props.formatOptionLabel(selectedOption).toString(),
        value: selectedOption
      };
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedComboBox"], {
      placeholder: intl.formatMessage({
        id: 'inputControl.vis.listControl.selectPlaceholder',
        defaultMessage: 'Select...'
      }),
      options: options,
      isLoading: this.state.isLoading,
      async: this.props.dynamicOptions,
      onSearchChange: this.props.dynamicOptions ? this.onSearchChange : undefined,
      selectedOptions: selectedOptions,
      onChange: this.handleOnChange,
      singleSelection: !this.props.multiselect,
      "data-test-subj": `listControlSelect${this.props.controlIndex}`,
      inputRef: this.setTextInputRef
    });
  }
  render() {
    const partialResultsWarningMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('inputControl.vis.listControl.partialResultsWarningMessage', {
      defaultMessage: 'Terms list might be incomplete because the request is taking too long. ' + 'Adjust the autocomplete settings in opensearch_dashboards.yml for complete results.'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_row__WEBPACK_IMPORTED_MODULE_5__["FormRow"], {
      id: this.props.id,
      label: this.props.label,
      warningMsg: this.props.partialResults ? partialResultsWarningMessage : undefined,
      controlIndex: this.props.controlIndex,
      disableMsg: this.props.disableMsg
    }, this.renderControl());
  }
}
_defineProperty(ListControlUi, "defaultProps", {
  dynamicOptions: false,
  multiselect: true,
  selectedOptions: [],
  options: []
});
const ListControl = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(ListControlUi);

/***/ }),

/***/ "./public/components/vis/range_control.tsx":
/*!*************************************************!*\
  !*** ./public/components/vis/range_control.tsx ***!
  \*************************************************/
/*! exports provided: ceilWithPrecision, floorWithPrecision, RangeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilWithPrecision", function() { return ceilWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorWithPrecision", function() { return floorWithPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControl", function() { return RangeControl; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form_row */ "./public/components/vis/form_row.tsx");
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





function roundWithPrecision(value, decimalPlaces, roundFunction) {
  if (decimalPlaces <= 0) {
    return roundFunction(value);
  }
  let results = value;
  results = results * Math.pow(10, decimalPlaces);
  results = roundFunction(results);
  results = results / Math.pow(10, decimalPlaces);
  return results;
}
function ceilWithPrecision(value, decimalPlaces) {
  return roundWithPrecision(value, decimalPlaces, Math.ceil);
}
function floorWithPrecision(value, decimalPlaces) {
  return roundWithPrecision(value, decimalPlaces, Math.floor);
}
class RangeControl extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {});
    _defineProperty(this, "onChangeComplete", lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(value => {
      const controlValue = {
        min: value[0],
        max: value[1]
      };
      this.props.stageFilter(this.props.controlIndex, controlValue);
    }, 200));
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const nextValue = nextProps.control.hasValue() ? [nextProps.control.value.min, nextProps.control.value.max] : ['', ''];
    if (nextProps.control.hasValue() && nextProps.control.value.min == null) {
      nextValue[0] = '';
    }
    if (nextProps.control.hasValue() && nextProps.control.value.max == null) {
      nextValue[1] = '';
    }
    if (nextValue !== prevState.prevValue) {
      return {
        value: nextValue,
        prevValue: nextValue
      };
    }
    return null;
  }
  renderControl() {
    if (!this.props.control.isEnabled()) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["ValidatedDualRange"], {
        disabled: true,
        showInput: true,
        formRowDisplay: "rowCompressed"
      });
    }
    const decimalPlaces = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.props, 'control.options.decimalPlaces', 0);
    const min = floorWithPrecision(this.props.control.min, decimalPlaces);
    const max = ceilWithPrecision(this.props.control.max, decimalPlaces);
    const ticks = [{
      value: min,
      label: min
    }, {
      value: max,
      label: max
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["ValidatedDualRange"], {
      id: this.props.control.id,
      min: min,
      max: max,
      formRowDisplay: "rowCompressed",
      value: this.state.value,
      onChange: this.onChangeComplete,
      showInput: true,
      showRange: true,
      showTicks: true,
      ticks: ticks
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_row__WEBPACK_IMPORTED_MODULE_3__["FormRow"], {
      id: this.props.control.id,
      label: this.props.control.label,
      controlIndex: this.props.controlIndex,
      disableMsg: this.props.control.isEnabled() ? undefined : this.props.control.disabledReason
    }, this.renderControl());
  }
}

/***/ }),

/***/ "./public/control/control.ts":
/*!***********************************!*\
  !*** ./public/control/control.ts ***!
  \***********************************/
/*! exports provided: noValuesDisableMsg, noIndexPatternMsg, Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noValuesDisableMsg", function() { return noValuesDisableMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noIndexPatternMsg", function() { return noIndexPatternMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
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



function noValuesDisableMsg(fieldName, indexPatternName) {
  return _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.control.noValuesDisableTooltip', {
    defaultMessage: 'Filtering occurs on the "{fieldName}" field, which doesn\'t exist on any documents in the "{indexPatternName}" \
index pattern. Choose a different field or index documents that contain values for this field.',
    values: {
      fieldName,
      indexPatternName
    }
  });
}
function noIndexPatternMsg(indexPatternId) {
  return _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.control.noIndexPatternTooltip', {
    defaultMessage: 'Could not locate index-pattern id: {indexPatternId}.',
    values: {
      indexPatternId
    }
  });
}
class Control {
  constructor(controlParams, filterManager, useTimeFilter) {
    this.controlParams = controlParams;
    this.filterManager = filterManager;
    this.useTimeFilter = useTimeFilter;
    _defineProperty(this, "osdFilter", null);
    _defineProperty(this, "enable", false);
    _defineProperty(this, "disabledReason", '');
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "label", void 0);
    _defineProperty(this, "ancestors", []);
    _defineProperty(this, "format", value => {
      const indexPattern = this.filterManager.getIndexPattern();
      const field = this.filterManager.getField();
      if (field) {
        return indexPattern.getFormatterForField(field).convert(value);
      }
      return value;
    });
    this.id = controlParams.id;
    this.controlParams = controlParams;
    this.options = controlParams.options;
    this.type = controlParams.type;
    this.label = controlParams.label ? controlParams.label : controlParams.fieldName;

    // restore state from OpenSearch Dashboards filter context
    this.reset();
    // disable until initialized
    this.disable(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.control.notInitializedTooltip', {
      defaultMessage: 'Control has not been initialized'
    }));
  }
  setAncestors(ancestors) {
    this.ancestors = ancestors;
  }
  hasAncestors() {
    return this.ancestors && this.ancestors.length > 0;
  }
  hasUnsetAncestor() {
    return this.ancestors.reduce((accumulator, ancestor) => {
      return accumulator || !ancestor.hasValue();
    }, false);
  }
  getAncestorValues() {
    return this.ancestors.map(ancestor => {
      return ancestor.value;
    });
  }
  getAncestorFilters() {
    return this.ancestors.map(ancestor => {
      return ancestor.filterManager.createFilter(ancestor.value);
    });
  }
  isEnabled() {
    return this.enable;
  }
  disable(reason) {
    this.enable = false;
    this.disabledReason = reason;
  }
  set(newValue) {
    this.value = newValue;
    if (this.hasValue()) {
      this.osdFilter = this.filterManager.createFilter(this.value);
    } else {
      this.osdFilter = null;
    }
  }

  /*
   * Remove any user changes to value by resetting value to that as provided by OpenSearch Dashboards filter pills
   */
  reset() {
    this.osdFilter = null;
    this.value = this.filterManager.getValueFromFilterBar();
  }

  /*
   * Clear any filter on the field by setting the control value to undefined.
   */
  clear() {
    this.value = undefined;
  }
  hasChanged() {
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(this.value, this.filterManager.getValueFromFilterBar());
  }
  hasOsdFilter() {
    if (this.osdFilter) {
      return true;
    }
    return false;
  }
  getOsdFilter() {
    return this.osdFilter;
  }
  hasValue() {
    return this.value !== undefined;
  }
}

/***/ }),

/***/ "./public/control/control_factory.ts":
/*!*******************************************!*\
  !*** ./public/control/control_factory.ts ***!
  \*******************************************/
/*! exports provided: getControlFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlFactory", function() { return getControlFactory; });
/* harmony import */ var _range_control_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range_control_factory */ "./public/control/range_control_factory.ts");
/* harmony import */ var _list_control_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_control_factory */ "./public/control/list_control_factory.ts");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor_utils */ "./public/editor_utils.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




function getControlFactory(controlParams) {
  let factory = null;
  switch (controlParams.type) {
    case _editor_utils__WEBPACK_IMPORTED_MODULE_2__["CONTROL_TYPES"].RANGE:
      factory = _range_control_factory__WEBPACK_IMPORTED_MODULE_0__["rangeControlFactory"];
      break;
    case _editor_utils__WEBPACK_IMPORTED_MODULE_2__["CONTROL_TYPES"].LIST:
      factory = _list_control_factory__WEBPACK_IMPORTED_MODULE_1__["listControlFactory"];
      break;
    default:
      throw new Error(`Unhandled control type ${controlParams.type}`);
  }
  return factory;
}

/***/ }),

/***/ "./public/control/create_search_source.ts":
/*!************************************************!*\
  !*** ./public/control/create_search_source.ts ***!
  \************************************************/
/*! exports provided: createSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchSource", function() { return createSearchSource; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

async function createSearchSource({
  create
}, initialState, indexPattern, aggs, useTimeFilter, filters = [], timefilter) {
  const searchSource = await create(initialState || {});

  // Do not not inherit from rootSearchSource to avoid picking up time and globals
  searchSource.setParent(undefined);
  searchSource.setField('filter', () => {
    const activeFilters = [...filters];
    if (useTimeFilter) {
      const filter = timefilter.createFilter(indexPattern);
      if (filter) {
        activeFilters.push(filter);
      }
    }
    return activeFilters;
  });
  searchSource.setField('size', 0);
  searchSource.setField('index', indexPattern);
  searchSource.setField('aggs', aggs);
  return searchSource;
}

/***/ }),

/***/ "./public/control/filter_manager/filter_manager.ts":
/*!*********************************************************!*\
  !*** ./public/control/filter_manager/filter_manager.ts ***!
  \*********************************************************/
/*! exports provided: FilterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterManager", function() { return FilterManager; });
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


class FilterManager {
  constructor(controlId, fieldName, indexPattern, queryFilter) {
    this.controlId = controlId;
    this.fieldName = fieldName;
    this.indexPattern = indexPattern;
    this.queryFilter = queryFilter;
  }

  /**
   * Convert phrases into filter
   *
   * @param  {any[]} phrases
   * @returns PhraseFilter
   *   single phrase: match query
   *   multiple phrases: bool query with should containing list of match_phrase queries
   */

  getIndexPattern() {
    return this.indexPattern;
  }
  getField() {
    return this.indexPattern.fields.getByName(this.fieldName);
  }
  findFilters() {
    const osdFilters = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten([this.queryFilter.getAppFilters(), this.queryFilter.getGlobalFilters()]);
    return osdFilters.filter(osdFilter => {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilter, 'meta.controlledBy') === this.controlId;
    });
  }
}

/***/ }),

/***/ "./public/control/filter_manager/phrase_filter_manager.ts":
/*!****************************************************************!*\
  !*** ./public/control/filter_manager/phrase_filter_manager.ts ***!
  \****************************************************************/
/*! exports provided: PhraseFilterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseFilterManager", function() { return PhraseFilterManager; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter_manager */ "./public/control/filter_manager/filter_manager.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




class PhraseFilterManager extends _filter_manager__WEBPACK_IMPORTED_MODULE_1__["FilterManager"] {
  constructor(controlId, fieldName, indexPattern, queryFilter) {
    super(controlId, fieldName, indexPattern, queryFilter);
  }
  createFilter(phrases) {
    let newFilter;
    const value = this.indexPattern.fields.getByName(this.fieldName);
    if (!value) {
      throw new Error(`Unable to find field with name: ${this.fieldName} on indexPattern`);
    }
    if (phrases.length === 1) {
      newFilter = _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].buildPhraseFilter(value, phrases[0], this.indexPattern);
    } else {
      newFilter = _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].buildPhrasesFilter(value, phrases, this.indexPattern);
    }
    newFilter.meta.key = this.fieldName;
    newFilter.meta.controlledBy = this.controlId;
    return newFilter;
  }
  getValueFromFilterBar() {
    const osdFilters = this.findFilters();
    if (osdFilters.length === 0) {
      return;
    }
    const values = osdFilters.map(osdFilter => {
      return this.getValueFromFilter(osdFilter);
    }).filter(value => value != null);
    if (values.length === 0) {
      return;
    }
    return values.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue);
    }, []);
  }

  /**
   * Extract filtering value from OpenSearch Dashboards filters
   *
   * @param  {PhraseFilter} osdFilter
   * @return {Array.<string>} array of values pulled from filter
   */
  getValueFromFilter(osdFilter) {
    // bool filter - multiple phrase filters
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(osdFilter, 'query.bool.should')) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilter, 'query.bool.should').map(osdQueryFilter => {
        return this.getValueFromFilter(osdQueryFilter);
      }).filter(value => {
        if (value) {
          return true;
        }
        return false;
      });
    }

    // scripted field filter
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(osdFilter, 'script')) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilter, 'script.script.params.value');
    }

    // single phrase filter
    if (_data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].isPhraseFilter(osdFilter)) {
      if (_data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].getPhraseFilterField(osdFilter) !== this.fieldName) {
        return;
      }
      return _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].getPhraseFilterValue(osdFilter);
    }

    // single phrase filter from bool filter
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(osdFilter, ['match_phrase', this.fieldName])) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilter, ['match_phrase', this.fieldName]);
    }
  }
}

/***/ }),

/***/ "./public/control/filter_manager/range_filter_manager.ts":
/*!***************************************************************!*\
  !*** ./public/control/filter_manager/range_filter_manager.ts ***!
  \***************************************************************/
/*! exports provided: RangeFilterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeFilterManager", function() { return RangeFilterManager; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter_manager */ "./public/control/filter_manager/filter_manager.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




// Convert slider value into OPENSEARCH range filter
function toRange(sliderValue) {
  return {
    gte: sliderValue.min,
    lte: sliderValue.max
  };
}

// Convert OPENSEARCH range filter into slider value
function fromRange(range) {
  const sliderValue = {};
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(range, 'gte')) {
    sliderValue.min = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(range, 'gte');
  }
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(range, 'gt')) {
    sliderValue.min = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(range, 'gt');
  }
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(range, 'lte')) {
    sliderValue.max = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(range, 'lte');
  }
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(range, 'lt')) {
    sliderValue.max = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(range, 'lt');
  }
  return sliderValue;
}
class RangeFilterManager extends _filter_manager__WEBPACK_IMPORTED_MODULE_1__["FilterManager"] {
  /**
   * Convert slider value into filter
   *
   * @param {object} react-input-range value - POJO with `min` and `max` properties
   * @return {object} range filter
   */
  createFilter(value) {
    const newFilter = _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].buildRangeFilter(
    // TODO: Fix type to be required
    this.indexPattern.fields.getByName(this.fieldName), toRange(value), this.indexPattern);
    newFilter.meta.key = this.fieldName;
    newFilter.meta.controlledBy = this.controlId;
    return newFilter;
  }
  getValueFromFilterBar() {
    const osdFilters = this.findFilters();
    if (osdFilters.length === 0) {
      return;
    }
    let range;
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(osdFilters[0], 'script')) {
      range = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilters[0], 'script.script.params');
    } else {
      range = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(osdFilters[0], ['range', this.fieldName]);
    }
    if (!range) {
      return;
    }
    return fromRange(range);
  }
}

/***/ }),

/***/ "./public/control/list_control_factory.ts":
/*!************************************************!*\
  !*** ./public/control/list_control_factory.ts ***!
  \************************************************/
/*! exports provided: ListControl, listControlFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListControl", function() { return ListControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listControlFactory", function() { return listControlFactory; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "./public/control/control.ts");
/* harmony import */ var _filter_manager_phrase_filter_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter_manager/phrase_filter_manager */ "./public/control/filter_manager/phrase_filter_manager.ts");
/* harmony import */ var _create_search_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_search_source */ "./public/control/create_search_source.ts");
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






function getEscapedQuery(query = '') {
  // https://opensearch.org/docs/latest/opensearch/query-dsl/index/
  return query.replace(/[.?+*|{}[\]()"\\#@&<>~]/g, match => `\\${match}`);
}
const termsAgg = ({
  field,
  size,
  direction,
  query
}) => {
  const terms = {
    order: {
      _count: direction
    }
  };
  if (size) {
    terms.size = size < 1 ? 1 : size;
  }
  if (field !== null && field !== void 0 && field.scripted) {
    terms.script = {
      source: field.script,
      lang: field.lang
    };
    terms.value_type = field.type === 'number' ? 'float' : field.type;
  } else {
    terms.field = field === null || field === void 0 ? void 0 : field.name;
  }
  if (query) {
    terms.include = `.*${getEscapedQuery(query)}.*`;
  }
  return {
    termsAgg: {
      terms
    }
  };
};
class ListControl extends _control__WEBPACK_IMPORTED_MODULE_2__["Control"] {
  constructor(controlParams, filterManager, useTimeFilter, _searchSource, deps) {
    super(controlParams, filterManager, useTimeFilter);
    _defineProperty(this, "getSettings", void 0);
    _defineProperty(this, "timefilter", void 0);
    _defineProperty(this, "searchSource", void 0);
    _defineProperty(this, "abortController", void 0);
    _defineProperty(this, "lastAncestorValues", void 0);
    _defineProperty(this, "lastQuery", void 0);
    _defineProperty(this, "partialResults", void 0);
    _defineProperty(this, "selectOptions", void 0);
    _defineProperty(this, "fetch", async query => {
      // Abort any in-progress fetch
      if (this.abortController) {
        this.abortController.abort();
      }
      this.abortController = new AbortController();
      const indexPattern = this.filterManager.getIndexPattern();
      if (!indexPattern) {
        this.disable(Object(_control__WEBPACK_IMPORTED_MODULE_2__["noIndexPatternMsg"])(this.controlParams.indexPattern));
        return;
      }
      let ancestorFilters;
      if (this.hasAncestors()) {
        if (this.hasUnsetAncestor()) {
          this.disable(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.listControl.disableTooltip', {
            defaultMessage: "Disabled until '{label}' is set.",
            values: {
              label: this.ancestors[0].label
            }
          }));
          this.lastAncestorValues = undefined;
          return;
        }
        const ancestorValues = this.getAncestorValues();
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(ancestorValues, this.lastAncestorValues) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(query, this.lastQuery)) {
          // short circuit to avoid fetching options list for same ancestor values
          return;
        }
        this.lastAncestorValues = ancestorValues;
        this.lastQuery = query;
        ancestorFilters = this.getAncestorFilters();
      }
      const fieldName = this.filterManager.fieldName;
      const settings = await this.getSettings();
      const initialSearchSourceState = {
        timeout: `${settings.autocompleteTimeout}ms`,
        terminate_after: Number(settings.autocompleteTerminateAfter)
      };
      const aggs = termsAgg({
        field: indexPattern.fields.getByName(fieldName),
        size: this.options.dynamicOptions ? null : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.options, 'size', 5),
        direction: 'desc',
        query
      });
      const searchSource = await Object(_create_search_source__WEBPACK_IMPORTED_MODULE_4__["createSearchSource"])(this.searchSource, initialSearchSourceState, indexPattern, aggs, this.useTimeFilter, ancestorFilters, this.timefilter);
      const abortSignal = this.abortController.signal;
      this.lastQuery = query;
      let resp;
      try {
        resp = await searchSource.fetch({
          abortSignal
        });
      } catch (error) {
        // If the fetch was aborted then no need to surface this error in the UI
        if (error.name === 'AbortError') return;
        this.disable(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.listControl.unableToFetchTooltip', {
          defaultMessage: 'Unable to fetch terms, error: {errorMessage}',
          values: {
            errorMessage: error.message
          }
        }));
        return;
      }
      if (query && this.lastQuery !== query) {
        // search results returned out of order - ignore results from old query
        return;
      }
      const selectOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(resp, 'aggregations.termsAgg.buckets', []).map(bucket => {
        return bucket === null || bucket === void 0 ? void 0 : bucket.key;
      });
      if (selectOptions.length === 0 && !query) {
        this.disable(Object(_control__WEBPACK_IMPORTED_MODULE_2__["noValuesDisableMsg"])(fieldName, indexPattern.title));
        return;
      }

      // TODO: terminated_early is missing from response definition.
      // https://github.com/elastic/elasticsearch-js/issues/1289
      this.partialResults = resp.terminated_early || resp.timed_out;
      this.selectOptions = selectOptions;
      this.enable = true;
      this.disabledReason = '';
    });
    this.getSettings = deps.getSettings;
    this.timefilter = deps.data.query.timefilter.timefilter;
    this.searchSource = _searchSource;
  }
  destroy() {
    if (this.abortController) this.abortController.abort();
  }
  hasValue() {
    return typeof this.value !== 'undefined' && this.value.length > 0;
  }
}
async function listControlFactory(controlParams, useTimeFilter, deps) {
  const [, {
    data: dataPluginStart
  }] = await deps.core.getStartServices();
  const indexPattern = await dataPluginStart.indexPatterns.get(controlParams.indexPattern);

  // dynamic options are only allowed on String fields but the setting defaults to true so it could
  // be enabled for non-string fields (since UI input is hidden for non-string fields).
  // If field is not string, then disable dynamic options.
  const field = indexPattern.fields.getAll().find(({
    name
  }) => name === controlParams.fieldName);
  if (field && field.type !== 'string') {
    controlParams.options.dynamicOptions = false;
  }
  const listControl = new ListControl(controlParams, new _filter_manager_phrase_filter_manager__WEBPACK_IMPORTED_MODULE_3__["PhraseFilterManager"](controlParams.id, controlParams.fieldName, indexPattern, deps.data.query.filterManager), useTimeFilter, dataPluginStart.search.searchSource, deps);
  return listControl;
}

/***/ }),

/***/ "./public/control/range_control_factory.ts":
/*!*************************************************!*\
  !*** ./public/control/range_control_factory.ts ***!
  \*************************************************/
/*! exports provided: RangeControl, rangeControlFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControl", function() { return RangeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeControlFactory", function() { return rangeControlFactory; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "./public/control/control.ts");
/* harmony import */ var _filter_manager_range_filter_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter_manager/range_filter_manager */ "./public/control/filter_manager/range_filter_manager.ts");
/* harmony import */ var _create_search_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create_search_source */ "./public/control/create_search_source.ts");
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






const minMaxAgg = field => {
  const aggBody = {};
  if (field) {
    if (field.scripted) {
      aggBody.script = {
        source: field.script,
        lang: field.lang
      };
    } else {
      aggBody.field = field.name;
    }
  }
  return {
    maxAgg: {
      max: aggBody
    },
    minAgg: {
      min: aggBody
    }
  };
};
class RangeControl extends _control__WEBPACK_IMPORTED_MODULE_2__["Control"] {
  constructor(controlParams, filterManager, useTimeFilter, searchSource, deps) {
    super(controlParams, filterManager, useTimeFilter);
    _defineProperty(this, "searchSource", void 0);
    _defineProperty(this, "timefilter", void 0);
    _defineProperty(this, "abortController", void 0);
    _defineProperty(this, "min", void 0);
    _defineProperty(this, "max", void 0);
    this.timefilter = deps.data.query.timefilter.timefilter;
    this.searchSource = searchSource;
  }
  async fetch() {
    // Abort any in-progress fetch
    if (this.abortController) {
      this.abortController.abort();
    }
    this.abortController = new AbortController();
    const indexPattern = this.filterManager.getIndexPattern();
    if (!indexPattern) {
      this.disable(Object(_control__WEBPACK_IMPORTED_MODULE_2__["noIndexPatternMsg"])(this.controlParams.indexPattern));
      return;
    }
    const fieldName = this.filterManager.fieldName;
    const aggs = minMaxAgg(indexPattern.fields.getByName(fieldName));
    const searchSource = await Object(_create_search_source__WEBPACK_IMPORTED_MODULE_4__["createSearchSource"])(this.searchSource, null, indexPattern, aggs, this.useTimeFilter, [], this.timefilter);
    const abortSignal = this.abortController.signal;
    let resp;
    try {
      resp = await searchSource.fetch({
        abortSignal
      });
    } catch (error) {
      // If the fetch was aborted then no need to surface this error in the UI
      if (error.name === 'AbortError') return;
      this.disable(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('inputControl.rangeControl.unableToFetchTooltip', {
        defaultMessage: 'Unable to fetch range min and max, error: {errorMessage}',
        values: {
          errorMessage: error.message
        }
      }));
      return;
    }
    const min = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(resp, 'aggregations.minAgg.value', null);
    const max = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(resp, 'aggregations.maxAgg.value', null);
    if (min === null || max === null) {
      this.disable(Object(_control__WEBPACK_IMPORTED_MODULE_2__["noValuesDisableMsg"])(fieldName, indexPattern.title));
      return;
    }
    this.min = min;
    this.max = max;
    this.enable = true;
  }
  destroy() {
    if (this.abortController) this.abortController.abort();
  }
}
async function rangeControlFactory(controlParams, useTimeFilter, deps) {
  const [, {
    data: dataPluginStart
  }] = await deps.core.getStartServices();
  const indexPattern = await dataPluginStart.indexPatterns.get(controlParams.indexPattern);
  return new RangeControl(controlParams, new _filter_manager_range_filter_manager__WEBPACK_IMPORTED_MODULE_3__["RangeFilterManager"](controlParams.id, controlParams.fieldName, indexPattern, deps.data.query.filterManager), useTimeFilter, dataPluginStart.search.searchSource, deps);
}

/***/ }),

/***/ "./public/editor_utils.ts":
/*!********************************!*\
  !*** ./public/editor_utils.ts ***!
  \********************************/
/*! exports provided: CONTROL_TYPES, setControl, addControl, moveControl, removeControl, getDefaultOptions, newControl, getTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_TYPES", function() { return CONTROL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setControl", function() { return setControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addControl", function() { return addControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveControl", function() { return moveControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeControl", function() { return removeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newControl", function() { return newControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return getTitle; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const CONTROL_TYPES = {
  LIST: 'list',
  RANGE: 'range'
};
const setControl = (controls, controlIndex, control) => [...controls.slice(0, controlIndex), control, ...controls.slice(controlIndex + 1)];
const addControl = (controls, control) => [...controls, control];
const moveControl = (controls, controlIndex, direction) => {
  let newIndex;
  if (direction >= 0) {
    newIndex = controlIndex + 1;
  } else {
    newIndex = controlIndex - 1;
  }
  if (newIndex < 0) {
    // Move first item to last
    return [...controls.slice(1), controls[0]];
  } else if (newIndex >= controls.length) {
    const lastItemIndex = controls.length - 1;
    // Move last item to first
    return [controls[lastItemIndex], ...controls.slice(0, lastItemIndex)];
  } else {
    const swapped = controls.slice();
    const temp = swapped[newIndex];
    swapped[newIndex] = swapped[controlIndex];
    swapped[controlIndex] = temp;
    return swapped;
  }
};
const removeControl = (controls, controlIndex) => [...controls.slice(0, controlIndex), ...controls.slice(controlIndex + 1)];
const getDefaultOptions = type => {
  const defaultOptions = {};
  switch (type) {
    case CONTROL_TYPES.RANGE:
      defaultOptions.decimalPlaces = 0;
      defaultOptions.step = 1;
      break;
    case CONTROL_TYPES.LIST:
      defaultOptions.type = 'terms';
      defaultOptions.multiselect = true;
      defaultOptions.dynamicOptions = true;
      defaultOptions.size = 5;
      defaultOptions.order = 'desc';
      break;
  }
  return defaultOptions;
};
const newControl = type => ({
  id: new Date().getTime().toString(),
  indexPattern: '',
  fieldName: '',
  parent: '',
  label: '',
  type,
  options: getDefaultOptions(type)
});
const getTitle = (controlParams, controlIndex) => {
  let title = `${controlParams.type}: ${controlIndex}`;
  if (controlParams.label) {
    title = `${controlParams.label}`;
  } else if (controlParams.fieldName) {
    title = `${controlParams.fieldName}`;
  }
  return title;
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
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./public/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["InputControlVisPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/input_control_fn.ts":
/*!************************************!*\
  !*** ./public/input_control_fn.ts ***!
  \************************************/
/*! exports provided: createInputControlVisFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputControlVisFn", function() { return createInputControlVisFn; });
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


const createInputControlVisFn = () => ({
  name: 'input_control_vis',
  type: 'render',
  inputTypes: [],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('inputControl.function.help', {
    defaultMessage: 'Input control visualization'
  }),
  args: {
    visConfig: {
      types: ['string'],
      default: '"{}"',
      help: ''
    }
  },
  fn(input, args) {
    const params = JSON.parse(args.visConfig);
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visType: 'input_control_vis',
        visConfig: params
      }
    };
  }
});

/***/ }),

/***/ "./public/input_control_vis_type.ts":
/*!******************************************!*\
  !*** ./public/input_control_vis_type.ts ***!
  \******************************************/
/*! exports provided: createInputControlVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputControlVisTypeDefinition", function() { return createInputControlVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis_controller */ "./public/vis_controller.tsx");
/* harmony import */ var _components_editor_controls_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/editor/controls_tab */ "./public/components/editor/controls_tab.tsx");
/* harmony import */ var _components_editor_options_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editor/options_tab */ "./public/components/editor/options_tab.tsx");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function createInputControlVisTypeDefinition(deps) {
  const InputControlVisController = Object(_vis_controller__WEBPACK_IMPORTED_MODULE_1__["createInputControlVisController"])(deps);
  const ControlsTab = Object(_components_editor_controls_tab__WEBPACK_IMPORTED_MODULE_2__["getControlsTab"])(deps);
  return {
    name: 'input_control_vis',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('inputControl.register.controlsTitle', {
      defaultMessage: 'Controls'
    }),
    icon: 'controlsHorizontal',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('inputControl.register.controlsDescription', {
      defaultMessage: 'Create interactive controls for easy dashboard manipulation.'
    }),
    stage: 'experimental',
    visualization: InputControlVisController,
    visConfig: {
      defaults: {
        controls: [],
        updateFiltersOnChange: false,
        useTimeFilter: false,
        pinFilters: false
      }
    },
    editorConfig: {
      optionTabs: [{
        name: 'controls',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('inputControl.register.tabs.controlsTitle', {
          defaultMessage: 'Controls'
        }),
        editor: ControlsTab
      }, {
        name: 'options',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('inputControl.register.tabs.optionsTitle', {
          defaultMessage: 'Options'
        }),
        editor: _components_editor_options_tab__WEBPACK_IMPORTED_MODULE_3__["OptionsTab"]
      }]
    },
    inspectorAdapters: {},
    requestHandler: 'none',
    responseHandler: 'none'
  };
}

/***/ }),

/***/ "./public/lineage/index.ts":
/*!*********************************!*\
  !*** ./public/lineage/index.ts ***!
  \*********************************/
/*! exports provided: getLineageMap, getParentCandidates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lineage_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineage_map */ "./public/lineage/lineage_map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLineageMap", function() { return _lineage_map__WEBPACK_IMPORTED_MODULE_0__["getLineageMap"]; });

/* harmony import */ var _parent_candidates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent_candidates */ "./public/lineage/parent_candidates.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParentCandidates", function() { return _parent_candidates__WEBPACK_IMPORTED_MODULE_1__["getParentCandidates"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/lineage/lineage_map.ts":
/*!***************************************!*\
  !*** ./public/lineage/lineage_map.ts ***!
  \***************************************/
/*! exports provided: getLineageMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineageMap", function() { return getLineageMap; });
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


function getLineageMap(controlParamsList) {
  function getControlParamsById(controlId) {
    return controlParamsList.find(controlParams => {
      return controlParams.id === controlId;
    });
  }
  const lineageMap = new Map();
  controlParamsList.forEach(rootControlParams => {
    const lineage = [rootControlParams.id];
    const getLineage = controlParams => {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(controlParams, 'parent') && controlParams.parent !== '' && !lineage.includes(controlParams.parent)) {
        lineage.push(controlParams.parent);
        const parent = getControlParamsById(controlParams.parent);
        if (parent) {
          getLineage(parent);
        }
      }
    };
    getLineage(rootControlParams);
    lineageMap.set(rootControlParams.id, lineage);
  });
  return lineageMap;
}

/***/ }),

/***/ "./public/lineage/parent_candidates.ts":
/*!*********************************************!*\
  !*** ./public/lineage/parent_candidates.ts ***!
  \*********************************************/
/*! exports provided: getParentCandidates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentCandidates", function() { return getParentCandidates; });
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor_utils */ "./public/editor_utils.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function getParentCandidates(controlParamsList, controlId, lineageMap) {
  return controlParamsList.filter(controlParams => {
    // Ignore controls that do not have index pattern and field set
    if (!controlParams.indexPattern || !controlParams.fieldName) {
      return false;
    }
    // Ignore controls that would create a circular graph
    const lineage = lineageMap.get(controlParams.id);
    if (lineage !== null && lineage !== void 0 && lineage.includes(controlId)) {
      return false;
    }
    return true;
  }).map((controlParams, controlIndex) => {
    return {
      value: controlParams.id,
      text: Object(_editor_utils__WEBPACK_IMPORTED_MODULE_0__["getTitle"])(controlParams, controlIndex)
    };
  });
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: InputControlVisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputControlVisPlugin", function() { return InputControlVisPlugin; });
/* harmony import */ var _input_control_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_control_fn */ "./public/input_control_fn.ts");
/* harmony import */ var _input_control_vis_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input_control_vis_type */ "./public/input_control_vis_type.ts");
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
class InputControlVisPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
    _defineProperty(this, "cachedSettings", undefined);
  }
  setup(core, {
    expressions,
    visualizations,
    data
  }) {
    const visualizationDependencies = {
      core,
      data,
      getSettings: async () => {
        if (!this.cachedSettings) {
          this.cachedSettings = await core.http.get('/api/input_control_vis/settings');
        }
        return this.cachedSettings;
      }
    };
    expressions.registerFunction(_input_control_fn__WEBPACK_IMPORTED_MODULE_0__["createInputControlVisFn"]);
    visualizations.createBaseVisualization(Object(_input_control_vis_type__WEBPACK_IMPORTED_MODULE_1__["createInputControlVisTypeDefinition"])(visualizationDependencies));
  }
  start(core, deps) {
    // nothing to do here
  }
}

/***/ }),

/***/ "./public/vis_controller.tsx":
/*!***********************************!*\
  !*** ./public/vis_controller.tsx ***!
  \***********************************/
/*! exports provided: createInputControlVisController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputControlVisController", function() { return createInputControlVisController; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_vis_input_control_vis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vis/input_control_vis */ "./public/components/vis/input_control_vis.tsx");
/* harmony import */ var _control_control_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control/control_factory */ "./public/control/control_factory.ts");
/* harmony import */ var _lineage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineage */ "./public/lineage/index.ts");
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







const createInputControlVisController = deps => {
  return class InputControlVisController {
    constructor(el, vis) {
      this.el = el;
      this.vis = vis;
      _defineProperty(this, "I18nContext", void 0);
      _defineProperty(this, "_isLoaded", false);
      _defineProperty(this, "controls", void 0);
      _defineProperty(this, "queryBarUpdateHandler", void 0);
      _defineProperty(this, "filterManager", void 0);
      _defineProperty(this, "updateSubsciption", void 0);
      _defineProperty(this, "timeFilterSubscription", void 0);
      _defineProperty(this, "visParams", void 0);
      _defineProperty(this, "drawVis", () => {
        var _this$visParams;
        if (!this.I18nContext) {
          throw new Error('no i18n context found');
        }
        Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_vis_input_control_vis__WEBPACK_IMPORTED_MODULE_3__["InputControlVis"], {
          updateFiltersOnChange: (_this$visParams = this.visParams) === null || _this$visParams === void 0 ? void 0 : _this$visParams.updateFiltersOnChange,
          controls: this.controls,
          stageFilter: this.stageFilter,
          submitFilters: this.submitFilters,
          resetControls: this.updateControlsFromOsd,
          clearControls: this.clearControls,
          hasChanges: this.hasChanges,
          hasValues: this.hasValues,
          refreshControl: this.refreshControl
        })), this.el);
      });
      _defineProperty(this, "stageFilter", async (controlIndex, newValue) => {
        var _this$visParams2;
        this.controls[controlIndex].set(newValue);
        if ((_this$visParams2 = this.visParams) !== null && _this$visParams2 !== void 0 && _this$visParams2.updateFiltersOnChange) {
          // submit filters on each control change
          this.submitFilters();
        } else {
          // Do not submit filters, just update vis so controls are updated with latest value
          await this.updateNestedControls();
          this.drawVis();
        }
      });
      _defineProperty(this, "submitFilters", () => {
        var _this$visParams3;
        const stagedControls = this.controls.filter(control => {
          return control.hasChanged();
        });
        const newFilters = stagedControls.map(control => control.getOsdFilter()).filter(filter => {
          return filter !== null;
        });
        stagedControls.forEach(control => {
          // to avoid duplicate filters, remove any old filters for control
          control.filterManager.findFilters().forEach(existingFilter => {
            this.filterManager.removeFilter(existingFilter);
          });
        });

        // Clean up filter pills for nested controls that are now disabled because ancestors are not set.
        // This has to be done after looking up the staged controls because otherwise removing a filter
        // will re-sync the controls of all other filters.
        this.controls.map(control => {
          if (control.hasAncestors() && control.hasUnsetAncestor()) {
            control.filterManager.findFilters().forEach(existingFilter => {
              this.filterManager.removeFilter(existingFilter);
            });
          }
        });
        this.filterManager.addFilters(newFilters, (_this$visParams3 = this.visParams) === null || _this$visParams3 === void 0 ? void 0 : _this$visParams3.pinFilters);
      });
      _defineProperty(this, "clearControls", async () => {
        this.controls.forEach(control => {
          control.clear();
        });
        await this.updateNestedControls();
        this.drawVis();
      });
      _defineProperty(this, "updateControlsFromOsd", async () => {
        this.controls.forEach(control => {
          control.reset();
        });
        await this.updateNestedControls();
        this.drawVis();
      });
      _defineProperty(this, "hasChanges", () => {
        return this.controls.map(control => control.hasChanged()).some(control => control);
      });
      _defineProperty(this, "hasValues", () => {
        return this.controls.map(control => {
          return control.hasValue();
        }).reduce((a, b) => {
          return a || b;
        });
      });
      _defineProperty(this, "refreshControl", async (controlIndex, query) => {
        await this.controls[controlIndex].fetch(query);
        this.drawVis();
      });
      this.controls = [];
      this.queryBarUpdateHandler = this.updateControlsFromOsd.bind(this);
      this.filterManager = deps.data.query.filterManager;
      this.updateSubsciption = this.filterManager.getUpdates$().subscribe(this.queryBarUpdateHandler);
      this.timeFilterSubscription = deps.data.query.timefilter.timefilter.getTimeUpdate$().subscribe(() => {
        var _this$visParams4;
        if ((_this$visParams4 = this.visParams) !== null && _this$visParams4 !== void 0 && _this$visParams4.useTimeFilter) {
          this._isLoaded = false;
        }
      });
    }
    async render(visData, visParams) {
      if (!this.I18nContext) {
        const [{
          i18n
        }] = await deps.core.getStartServices();
        this.I18nContext = i18n.Context;
      }
      if (!this._isLoaded || !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(visParams, this.visParams)) {
        this.visParams = visParams;
        this.controls = [];
        this.controls = await this.initControls();
        this._isLoaded = true;
      }
      this.drawVis();
    }
    destroy() {
      this.updateSubsciption.unsubscribe();
      this.timeFilterSubscription.unsubscribe();
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"])(this.el);
      this.controls.forEach(control => control.destroy());
    }
    async initControls() {
      var _this$visParams5;
      const controlParamsList = (_this$visParams5 = this.visParams) === null || _this$visParams5 === void 0 || (_this$visParams5 = _this$visParams5.controls) === null || _this$visParams5 === void 0 ? void 0 : _this$visParams5.filter(controlParams => {
        // ignore controls that do not have indexPattern or field
        return controlParams.indexPattern && controlParams.fieldName;
      });
      const controlFactoryPromises = controlParamsList.map(controlParams => {
        var _this$visParams6;
        const factory = Object(_control_control_factory__WEBPACK_IMPORTED_MODULE_4__["getControlFactory"])(controlParams);
        return factory(controlParams, (_this$visParams6 = this.visParams) === null || _this$visParams6 === void 0 ? void 0 : _this$visParams6.useTimeFilter, deps);
      });
      const controls = await Promise.all(controlFactoryPromises);
      const getControl = controlId => {
        return controls.find(({
          id
        }) => id === controlId);
      };
      const controlInitPromises = [];
      Object(_lineage__WEBPACK_IMPORTED_MODULE_5__["getLineageMap"])(controlParamsList).forEach((lineage, controlId) => {
        // first lineage item is the control. remove it
        lineage.shift();
        const ancestors = [];
        lineage.forEach(ancestorId => {
          const control = getControl(ancestorId);
          if (control) {
            ancestors.push(control);
          }
        });
        const control = getControl(controlId);
        if (control) {
          control.setAncestors(ancestors);
          controlInitPromises.push(control.fetch());
        }
      });
      await Promise.all(controlInitPromises);
      return controls;
    }
    async updateNestedControls() {
      const fetchPromises = this.controls.map(async control => {
        if (control.hasAncestors()) {
          await control.fetch();
        }
      });
      return await Promise.all(fetchPromises);
    }
  };
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

/***/ })

/******/ });
//# sourceMappingURL=inputControlVis.plugin.js.map