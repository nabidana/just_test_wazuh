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
/******/ 		"home": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "home.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["home_bundle_jsonpfunction"] = window["home_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=home!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=home!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['home']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_home_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=home!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=home!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_home_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_home_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/home/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/home/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: PLUGIN_ID, HOME_APP_BASE_PATH, USE_NEW_HOME_PAGE, IMPORT_SAMPLE_DATA_APP_ID, SEARCH_WORKSPACE_DISMISS_GET_STARTED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_ID", function() { return PLUGIN_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_APP_BASE_PATH", function() { return HOME_APP_BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_NEW_HOME_PAGE", function() { return USE_NEW_HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT_SAMPLE_DATA_APP_ID", function() { return IMPORT_SAMPLE_DATA_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_WORKSPACE_DISMISS_GET_STARTED", function() { return SEARCH_WORKSPACE_DISMISS_GET_STARTED; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const PLUGIN_ID = 'home';
const HOME_APP_BASE_PATH = `/app/${PLUGIN_ID}`;
const USE_NEW_HOME_PAGE = 'home:useNewHomePage';

/**
 * The id is used in src/plugins/workspace/public/plugin.ts and please change that accordingly if you change the id here.
 */
const IMPORT_SAMPLE_DATA_APP_ID = 'import_sample_data';
const SEARCH_WORKSPACE_DISMISS_GET_STARTED = 'searchWorkspace:dismissGetStarted';

/***/ }),

/***/ "./common/instruction_variant.ts":
/*!***************************************!*\
  !*** ./common/instruction_variant.ts ***!
  \***************************************/
/*! exports provided: INSTRUCTION_VARIANT, getDisplayText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_VARIANT", function() { return INSTRUCTION_VARIANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayText", function() { return getDisplayText; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const INSTRUCTION_VARIANT = {
  ESC: 'esc',
  OSX: 'osx',
  DEB: 'deb',
  RPM: 'rpm',
  DOCKER: 'docker',
  WINDOWS: 'windows',
  NODE: 'node',
  DJANGO: 'django',
  FLASK: 'flask',
  RAILS: 'rails',
  RACK: 'rack',
  JS: 'js',
  GO: 'go',
  JAVA: 'java',
  DOTNET: 'dotnet',
  LINUX: 'linux'
};
const DISPLAY_MAP = {
  [INSTRUCTION_VARIANT.ESC]: 'Elastic Cloud',
  [INSTRUCTION_VARIANT.OSX]: 'macOS',
  [INSTRUCTION_VARIANT.DEB]: 'DEB',
  [INSTRUCTION_VARIANT.RPM]: 'RPM',
  [INSTRUCTION_VARIANT.DOCKER]: 'Docker',
  [INSTRUCTION_VARIANT.WINDOWS]: 'Windows',
  [INSTRUCTION_VARIANT.NODE]: 'Node.js',
  [INSTRUCTION_VARIANT.DJANGO]: 'Django',
  [INSTRUCTION_VARIANT.FLASK]: 'Flask',
  [INSTRUCTION_VARIANT.RAILS]: 'Ruby on Rails',
  [INSTRUCTION_VARIANT.RACK]: 'Rack',
  [INSTRUCTION_VARIANT.JS]: 'RUM (JS)',
  [INSTRUCTION_VARIANT.GO]: 'Go',
  [INSTRUCTION_VARIANT.JAVA]: 'Java',
  [INSTRUCTION_VARIANT.DOTNET]: '.NET',
  [INSTRUCTION_VARIANT.LINUX]: 'Linux'
};

/**
 * Convert instruction variant id into display text.
 *
 * @params {String} id - instruction variant id as defined from INSTRUCTION_VARIANT
 * @return {String} display name
 */
function getDisplayText(id) {
  if (id in DISPLAY_MAP) {
    return DISPLAY_MAP[id];
  }
  return id;
}

/***/ }),

/***/ "./public/application/components/home_icon.tsx":
/*!*****************************************************!*\
  !*** ./public/application/components/home_icon.tsx ***!
  \*****************************************************/
/*! exports provided: HomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return HomeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




function HomeIcon({
  core,
  appId
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
    content: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.icon.nav.title', {
      defaultMessage: 'Home'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
    "aria-label": "go-to-home",
    iconType: "home",
    color: "text",
    onClick: () => {
      core.application.navigateToApp(appId);
    }
  }));
}

/***/ }),

/***/ "./public/application/components/home_list_card.tsx":
/*!**********************************************************!*\
  !*** ./public/application/components/home_list_card.tsx ***!
  \**********************************************************/
/*! exports provided: getLearnOpenSearchConfig, getWhatsNewConfig, HomeListCard, registerHomeListCard, registerHomeListCardToPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLearnOpenSearchConfig", function() { return getLearnOpenSearchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWhatsNewConfig", function() { return getWhatsNewConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListCard", function() { return HomeListCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerHomeListCard", function() { return registerHomeListCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerHomeListCardToPage", function() { return registerHomeListCardToPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_management_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const getLearnOpenSearchConfig = docLinks => ({
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.card.learnOpenSearch.title', {
    defaultMessage: 'OpenSearch Documentation'
  }),
  list: [{
    label: 'Quickstart guide',
    href: docLinks.links.opensearchDashboards.dashboards.quickStart,
    description: 'Start using OpenSearch Dashboards in minutes.'
  }, {
    label: 'Building data visualizations',
    href: docLinks.links.opensearchDashboards.visualize.guide,
    description: 'Design interactive charts and graphs to unlock insights form your data.'
  }, {
    label: 'Creating dashboards',
    href: docLinks.links.opensearchDashboards.dashboards.createDashboards,
    description: 'Build interactive dashboards to explore and analyze your data.'
  }],
  allLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    href: docLinks.links.opensearchDashboards.introduction,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s",
    className: "eui-displayInline"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.list.card.documentation', {
    defaultMessage: 'Learn more in Documentation'
  })))
});
const getWhatsNewConfig = docLinks => ({
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.card.whatsNew.title', {
    defaultMessage: `What's New`
  }),
  list: [{
    label: 'Quickstart guide',
    href: docLinks.links.opensearchDashboards.dashboards.quickStart,
    description: 'Get started in minutes with OpenSearch Dashboards'
  }],
  allLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    href: docLinks.OPENSEARCH_WEBSITE_URL,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s",
    className: "eui-displayInline"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.list.card.whatsnew', {
    defaultMessage: 'View all on OpenSearch.org'
  })))
});
const HomeListCard = ({
  config
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    hasBorder: false,
    hasShadow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    direction: "column",
    justifyContent: "spaceBetween",
    style: {
      height: '100%'
    },
    gutterSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, config.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    style: {
      overflow: 'auto'
    },
    grow: true
  }, config.list.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDescriptionList"], null, config.list.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: item.href
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDescriptionListTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
    href: item.href,
    target: "_blank"
  }, item.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiDescriptionListDescription"], null, item.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, config.allLink))));
};
const registerHomeListCard = (contentManagement, {
  target,
  order,
  width,
  config,
  id
}) => {
  contentManagement.registerContentProvider({
    id: `${id}_${target}_cards`,
    getContent: () => ({
      id,
      kind: 'custom',
      order,
      width,
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeListCard, {
        config
      })
    }),
    getTargetArea: () => target
  });
};
const registerHomeListCardToPage = (contentManagement, docLinks) => {
  registerHomeListCard(contentManagement, {
    id: 'learn_opensearch_new',
    order: 20,
    config: getLearnOpenSearchConfig(docLinks),
    target: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ESSENTIAL_OVERVIEW_CONTENT_AREAS"].SERVICE_CARDS,
    width: 48
  });
  registerHomeListCard(contentManagement, {
    id: 'learn_opensearch_new',
    order: 40,
    config: getLearnOpenSearchConfig(docLinks),
    target: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ANALYTICS_ALL_OVERVIEW_CONTENT_AREAS"].SERVICE_CARDS,
    width: 16
  });
};

/***/ }),

/***/ "./public/application/components/homepage/sections/learn_basics.tsx":
/*!**************************************************************************!*\
  !*** ./public/application/components/homepage/sections/learn_basics.tsx ***!
  \**************************************************************************/
/*! exports provided: learnBasicsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnBasicsSection", function() { return learnBasicsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./public/application/components/homepage/sections/utils.tsx");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../opensearch_dashboards_services */ "./public/application/opensearch_dashboards_services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const Card = ({
  iconType,
  title,
  listItems
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
  grow: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
  direction: "row",
  alignItems: "center",
  gutterSize: "m",
  responsive: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
  grow: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
  type: iconType,
  size: "xl"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
  grow: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
  size: "s"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
  grow: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
  type: "popout"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
  size: "m"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiListGroup"], {
  listItems: listItems,
  flush: true
}));
const render = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderFn"])(() => {
  const services = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__["getServices"])();
  const logos = services.chrome.logos;
  const gettingStartedLinks = [{
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.gettingStarted.quickstart', {
      defaultMessage: 'OpenSearch Dashboards quickstart'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/quickstart/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.gettingStarted.dataVis', {
      defaultMessage: 'Building data visualizations'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/visualize/viz-index/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.gettingStarted.dashboards', {
      defaultMessage: 'Creating dashboards'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/dashboard/index/',
    target: '_blank'
  }];
  const dataDiscoveryLinks = [{
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.dataDiscovery.getFamiliar', {
      defaultMessage: 'Get familiar with Discover'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/discover/index-discover/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.dataDiscovery.runQueries', {
      defaultMessage: 'Run queries in the Dev Tools Console'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/dev-tools/run-queries/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.dataDiscovery.indexes', {
      defaultMessage: 'Working with indexes'
    }),
    href: 'https://opensearch.org/docs/latest/dashboards/im-dashboards/index/',
    target: '_blank'
  }];
  const observabilityLinks = [{
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.observability.logExplorer', {
      defaultMessage: 'Get familiar with Log Explorer'
    }),
    href: 'https://opensearch.org/docs/latest/observing-your-data/event-analytics/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.observability.prometheus', {
      defaultMessage: 'Explore prometheus metrics'
    }),
    href: 'https://opensearch.org/docs/latest/observing-your-data/prometheusmetrics/',
    target: '_blank'
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.observability.traces', {
      defaultMessage: 'Dive into traces and spans'
    }),
    href: 'https://opensearch.org/docs/latest/observing-your-data/trace/ta-dashboards/',
    target: '_blank'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    wrap: true,
    direction: "row",
    alignItems: "stretch",
    gutterSize: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    iconType: logos.Mark.url,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.gettingStarted.title', {
      defaultMessage: 'Getting started'
    }),
    listItems: gettingStartedLinks
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    iconType: "discoverApp",
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.dataDiscovery.title', {
      defaultMessage: 'Explore data'
    }),
    listItems: dataDiscoveryLinks
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    iconType: "eye",
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.observability.title', {
      defaultMessage: 'Observability'
    }),
    listItems: observabilityLinks
  })));
});
const learnBasicsSection = {
  id: 'home:learnBasics',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.title', {
    defaultMessage: 'Learn OpenSearch basics'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.description', {
    defaultMessage: 'Core concepts to get you started with OpenSearch.'
  }),
  links: [{
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.learnBasics.documentation', {
      defaultMessage: 'Documentation'
    }),
    url: 'https://opensearch.org/docs/latest/',
    props: {
      external: true,
      target: '_blank'
    }
  }],
  render
};

/***/ }),

/***/ "./public/application/components/homepage/sections/utils.tsx":
/*!*******************************************************************!*\
  !*** ./public/application/components/homepage/sections/utils.tsx ***!
  \*******************************************************************/
/*! exports provided: renderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFn", function() { return renderFn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const renderFn = Component => element => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
};

/***/ }),

/***/ "./public/application/components/homepage/sections/work_with_data.tsx":
/*!****************************************************************************!*\
  !*** ./public/application/components/homepage/sections/work_with_data.tsx ***!
  \****************************************************************************/
/*! exports provided: workWithDataSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workWithDataSection", function() { return workWithDataSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./public/application/components/homepage/sections/utils.tsx");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../opensearch_dashboards_services */ "./public/application/opensearch_dashboards_services.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  footerButtonProps,
  footerUrl,
  footerText,
  footerExternal
}) => {
  const {
    addBasePath
  } = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__["getServices"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCard"], {
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiImage"], {
      src: addBasePath(imgSrc),
      alt: imgAlt
    }),
    title: title,
    description: description,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], _extends({
      size: "s",
      fullWidth: true,
      href: footerUrl,
      target: footerExternal ? '_blank' : undefined
    }, footerButtonProps), footerText),
    textAlign: "left"
  }));
};
const render = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderFn"])(() => {
  const services = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__["getServices"])();
  const getUrl = services.application.getUrlForApp;
  const darkMode = services.injectedMetadata.getBranding().darkMode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    wrap: true,
    direction: "row",
    alignItems: "stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    imgSrc: `/plugins/home/assets/sample_data_resources/ecommerce/${darkMode ? 'dashboard_dark_new.png' : 'dashboard_new.png'}`,
    imgAlt: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.sampleData.alt', {
      defaultMessage: 'Sample data image'
    }),
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.sampleData.title', {
      defaultMessage: 'Start with sample data'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.sampleData.description', {
      defaultMessage: 'These sample data sets allow you to explore dashboards, visualizations and features without needing to ingest your own data.'
    }),
    footerUrl: getUrl('home', {
      path: '#/tutorial_directory'
    }),
    footerText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.sampleData.button', {
      defaultMessage: 'Manage sample data'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    imgSrc: "/plugins/home/assets/ingestion.png",
    imgAlt: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.ingest.alt', {
      defaultMessage: 'Ingestion image'
    }),
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.ingest.title', {
      defaultMessage: 'Ingest data'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.ingest.description', {
      defaultMessage: 'Filter, enrich, transform, normalize, and aggregate data for analytics and visualization.'
    }),
    footerButtonProps: {
      iconType: 'popout',
      iconSide: 'right'
    },
    footerUrl: "https://opensearch.org/docs/latest/data-prepper/index/",
    footerText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.ingest.button', {
      defaultMessage: 'Ingestion Documentation'
    }),
    footerExternal: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
    imgSrc: `/plugins/home/assets/${darkMode ? 'discover_dark.png' : 'discover_light.png'}`,
    imgAlt: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.explore.alt', {
      defaultMessage: 'Explore image'
    }),
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.explore.title', {
      defaultMessage: 'Explore data'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.explore.description', {
      defaultMessage: 'Discover makes it simple to query, filter, and visualize your data for intuitive and in-depth data analysis.'
    }),
    footerButtonProps: {
      iconType: 'popout',
      iconSide: 'right'
    },
    footerUrl: "https://opensearch.org/docs/latest/dashboards/discover/index-discover/",
    footerText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.explore.button', {
      defaultMessage: 'Discover documentation'
    }),
    footerExternal: true
  }));
});
const workWithDataSection = {
  id: 'home:workWithData',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.title', {
    defaultMessage: 'Work with data'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sections.workWithData.description', {
    defaultMessage: 'Get started by ingesting data to access robust and visual data exploration capabilities. Not ready to ingest data yet? Use our sample data to explore and get familiar with OpenSearch capabilities.'
  }),
  render
};

/***/ }),

/***/ "./public/application/components/sample_data/sample_data_card.tsx":
/*!************************************************************************!*\
  !*** ./public/application/components/sample_data/sample_data_card.tsx ***!
  \************************************************************************/
/*! exports provided: registerSampleDataCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSampleDataCard", function() { return registerSampleDataCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_management_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/constants */ "./common/constants.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const registerSampleDataCard = (contentManagement, core) => {
  const sampleDataCard = (order, targetArea) => ({
    id: `get_start_sample_data_${targetArea}`,
    getTargetArea: () => targetArea,
    getContent: () => ({
      id: 'sample_data',
      kind: 'card',
      order,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.sampleData.card.description', {
        defaultMessage: 'Install sample data to experiment with OpenSearch.'
      }),
      title: '',
      onClick: () => {
        // TODO change to a modal
        core.application.navigateToApp(_common_constants__WEBPACK_IMPORTED_MODULE_4__["IMPORT_SAMPLE_DATA_APP_ID"]);
      },
      getIcon: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        type: "functionAdd",
        size: "l",
        color: "primary"
      }),
      getFooter: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
        color: "subdued"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiI18n"], {
        token: "home.sampleData.card.footer",
        default: "Sample datasets"
      })),
      cardProps: {
        className: 'usecaseOverviewGettingStartedCard'
      }
    })
  });
  contentManagement.registerContentProvider(sampleDataCard(0, _content_management_public__WEBPACK_IMPORTED_MODULE_3__["ESSENTIAL_OVERVIEW_CONTENT_AREAS"].GET_STARTED));
};

/***/ }),

/***/ "./public/application/components/use_case_card.ts":
/*!********************************************************!*\
  !*** ./public/application/components/use_case_card.ts ***!
  \********************************************************/
/*! exports provided: registerUseCaseCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUseCaseCard", function() { return registerUseCaseCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const registerUseCaseCard = (contentManagement, core, {
  target,
  order,
  id,
  title,
  description,
  icon,
  navigateAppId
}) => {
  contentManagement.registerContentProvider({
    id: `home_get_started_${id}`,
    getTargetArea: () => target,
    getContent: () => ({
      id,
      kind: 'card',
      order,
      description,
      title,
      cardProps: {
        layout: 'horizontal'
      },
      onClick: () => {
        core.application.navigateToApp(navigateAppId);
      },
      getIcon: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        size: 'l',
        color: 'subdued',
        type: icon
      })
    })
  });
};

/***/ }),

/***/ "./public/application/components/usecase_overview/search_use_case_setup.tsx":
/*!**********************************************************************************!*\
  !*** ./public/application/components/usecase_overview/search_use_case_setup.tsx ***!
  \**********************************************************************************/
/*! exports provided: getStartedSection, setupSearchUseCase, registerContentToSearchUseCasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStartedSection", function() { return getStartedSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSearchUseCase", function() { return setupSearchUseCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerContentToSearchUseCasePage", function() { return registerContentToSearchUseCasePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_management_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const DISCOVER_APP_ID = 'discover';
const getStartedSection = {
  id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].GET_STARTED,
  order: 1000,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.setupSection.title', {
    defaultMessage: 'Set up search'
  }),
  kind: 'card'
};
const setupSearchUseCase = contentManagement => {
  contentManagement.registerPage({
    id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SEARCH_OVERVIEW_PAGE_ID"],
    title: 'Overview',
    sections: [getStartedSection, {
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].DIFFERENT_SEARCH_TYPES,
      order: 2000,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.differentSearchTypes.title', {
        defaultMessage: 'Try out different search techniques'
      }),
      kind: 'card',
      grid: true,
      columns: 2
    }, {
      id: _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SECTIONS"].CONFIG_EVALUATE_SEARCH,
      order: 3000,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.configEvaluate.title', {
        defaultMessage: 'Configure and evaluate search'
      }),
      kind: 'card',
      grid: true,
      columns: 2
    }]
  });
};
const registerContentToSearchUseCasePage = (contentManagement, core) => {
  // Replicate external EuiLink icon as doc links can't use EuiLink for visual consistency
  const externalLinkIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    size: "s",
    type: "popout"
  }));
  const getStartedCards = [{
    id: 'access_search_functionality',
    order: 10,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "bookOpen",
      size: "l",
      color: "primary"
    }),
    title: '',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.setup.accessSearch.description', {
      defaultMessage: 'Explore search capabilities and functionality of OpenSearch.'
    }),
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiI18n"], {
      token: "home.searchOverview.setup.accessSearch.footer",
      default: "Documentation"
    }), externalLinkIcon),
    documentURL: 'https://opensearch.org/docs/latest/search-plugins/'
  }, {
    id: 'create_document_index',
    order: 20,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "bookOpen",
      size: "l",
      color: "primary"
    }),
    title: '',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.setup.createDocumentIndex.description', {
      defaultMessage: 'Create a document collection (an index) to query your data.'
    }),
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiI18n"], {
      token: "home.search_overview.createDocumentIndex.card.footer",
      default: "Documentation"
    }), externalLinkIcon),
    documentURL: 'https://opensearch.org/docs/latest/getting-started/intro/'
  }, {
    id: 'get_start_discover',
    order: 30,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "compass",
      size: "l",
      color: "primary"
    }),
    title: '',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.setup.discover.description', {
      defaultMessage: 'Explore data to uncover and discover insights.'
    }),
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
      color: "subdued"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiI18n"], {
      token: "workspace.essential_overview.discover.card.footer",
      default: "Discover"
    })),
    documentURL: 'https://opensearch.org/docs/latest/getting-started/intro/',
    navigateAppId: DISCOVER_APP_ID
  }];
  getStartedCards.forEach(card => {
    contentManagement.registerContentProvider({
      id: card.id,
      getContent: () => ({
        id: card.id,
        kind: 'card',
        order: card.order,
        title: card.title,
        description: card.description,
        onClick: () => {
          if (card.navigateAppId) {
            core.application.navigateToApp(card.navigateAppId);
          } else {
            window.open(card.documentURL, '_blank');
          }
        },
        getFooter: () => card.footer,
        getIcon: () => card.icon,
        cardProps: {
          className: 'usecaseOverviewGettingStartedCard'
        }
      }),
      getTargetArea: () => _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SEARCH_OVERVIEW_CONTENT_AREAS"].GET_STARTED
    });
  });
  const searchIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    className: "searchIcon",
    size: "l",
    type: "search"
  });
  const searchTypeCards = [{
    id: 'text_search',
    order: 10,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.textSearch.title', {
      defaultMessage: 'Text search'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.textSearch.description', {
      defaultMessage: 'Lexical or keyword search matches documents based on exact words or phrases. Search the text using human-friendly query string query syntax or create complex, customizable queries using Query DSL—the OpenSearch query language.'
    }),
    icon: searchIcon,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      external: true,
      target: "_blank",
      href: "https://opensearch.org/docs/latest/query-dsl/full-text/"
    }, "View Documentation")
  }, {
    id: 'analyzer',
    order: 10,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.analyzer.title', {
      defaultMessage: 'Analyzers'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.analyzer.description', {
      defaultMessage: 'Analyzers prepare text for indexing. For example, HTML text typically has its tags removed. English text typically treats paint, painted, and painting as equivalent by mapping them all to the token paint. You can use OpenSearch’s extensive library of standard analyzers or create your own.'
    }),
    icon: searchIcon,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      external: true,
      target: "_blank",
      href: "https://opensearch.org/docs/latest/analyzers/search-analyzers/"
    }, "View Documentation")
  }, {
    id: 'semantic_vector_search',
    order: 10,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.semanticVectorSearch.title', {
      defaultMessage: 'Semantic vector search'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.semanticVectorSearch.description', {
      defaultMessage: 'Using semantic vector search, you can search for documents similar to your query in a vector space. With OpenSearch’s neural search capability, you specify an embedding model, and OpenSearch manages the operational complexity for you.'
    }),
    icon: searchIcon,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      external: true,
      target: "_blank",
      href: "https://opensearch.org/docs/latest/search-plugins/neural-search/"
    }, "View Documentation")
  }, {
    id: 'neural_sparse_search',
    order: 10,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.neuralSparseSearch.title', {
      defaultMessage: 'Neural sparse search'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.neuralSparseSearch.description', {
      defaultMessage: 'Neural sparse search combines many of the advantages of lexical and semantic search.'
    }),
    icon: searchIcon,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      external: true,
      target: "_blank",
      href: "https://opensearch.org/docs/latest/search-plugins/neural-sparse-search/"
    }, "View Documentation")
  }, {
    id: 'hybrid_search',
    order: 10,
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.hybridSearch.title', {
      defaultMessage: 'Hybrid search'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('home.searchOverview.searchTypes.hybridSearch.description', {
      defaultMessage: 'For many uses, lexical and semantic search are complementary: lexical search performs better on highly specific queries, while semantic search performs better on broader queries. Hybrid search runs both search types and combines the results, generally producing better results than either one separately.'
    }),
    icon: searchIcon,
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
      external: true,
      target: "_blank",
      href: "https://opensearch.org/docs/latest/search-plugins/hybrid-search/"
    }, "View Documentation")
  }];
  searchTypeCards.forEach(card => {
    contentManagement.registerContentProvider({
      id: card.id,
      getContent: () => ({
        id: card.id,
        kind: 'card',
        order: card.order,
        title: card.title,
        description: card.description,
        getIcon: () => card.icon,
        cardProps: {
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "euiCard__footer"
          }, card.footer),
          layout: 'horizontal',
          titleElement: 'h3',
          titleSize: 's'
        }
      }),
      getTargetArea: () => _content_management_public__WEBPACK_IMPORTED_MODULE_3__["SEARCH_OVERVIEW_CONTENT_AREAS"].DIFFERENT_SEARCH_TYPES
    });
  });
};

/***/ }),

/***/ "./public/application/home_render.tsx":
/*!********************************************!*\
  !*** ./public/application/home_render.tsx ***!
  \********************************************/
/*! exports provided: setupHome, initHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupHome", function() { return setupHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHome", function() { return initHome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins/content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_list_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home_list_card */ "./public/application/components/home_list_card.tsx");
/* harmony import */ var _components_use_case_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/use_case_card */ "./public/application/components/use_case_card.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






const setupHome = contentManagement => {
  contentManagement.registerPage({
    id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["HOME_PAGE_ID"],
    title: 'Home',
    sections: [{
      id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].RECENTLY_VIEWED,
      order: 2000,
      title: 'Recently viewed',
      kind: 'custom',
      render: contents => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, contents.map(content => {
          if (content.kind === 'custom') {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: content.id
            }, content.render());
          }
          return null;
        }));
      }
    }, {
      id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].SERVICE_CARDS,
      order: 3000,
      kind: 'dashboard'
    }, {
      id: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["SECTIONS"].GET_STARTED,
      order: 1000,
      title: "Get started with OpenSearch's powerful features",
      kind: 'card',
      collapsible: true
    }]
  });
};
const initHome = (contentManagement, core) => {
  const workspaceEnabled = core.application.capabilities.workspaces.enabled;
  if (!workspaceEnabled) {
    const useCases = [{
      ..._core_public__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_NAV_GROUPS"].observability,
      navigateAppId: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["OBSERVABILITY_OVERVIEW_PAGE_ID"]
    }, {
      ..._core_public__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_NAV_GROUPS"].search,
      navigateAppId: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["SEARCH_OVERVIEW_PAGE_ID"]
    }, {
      ..._core_public__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_NAV_GROUPS"]['security-analytics'],
      navigateAppId: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["SECURITY_ANALYTICS_OVERVIEW_PAGE_ID"]
    }];
    useCases.forEach((useCase, index) => {
      var _useCase$icon;
      Object(_components_use_case_card__WEBPACK_IMPORTED_MODULE_4__["registerUseCaseCard"])(contentManagement, core, {
        id: useCase.id,
        order: index + 1,
        description: useCase.description,
        title: useCase.title,
        target: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["HOME_CONTENT_AREAS"].GET_STARTED,
        icon: (_useCase$icon = useCase.icon) !== null && _useCase$icon !== void 0 ? _useCase$icon : '',
        navigateAppId: useCase.navigateAppId
      });
    });
  }
  Object(_components_home_list_card__WEBPACK_IMPORTED_MODULE_3__["registerHomeListCard"])(contentManagement, {
    id: 'learn_opensearch_new',
    order: 11,
    config: Object(_components_home_list_card__WEBPACK_IMPORTED_MODULE_3__["getLearnOpenSearchConfig"])(core.docLinks),
    target: _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_2__["HOME_CONTENT_AREAS"].SERVICE_CARDS,
    width: workspaceEnabled ? 32 : 48
  });
};

/***/ }),

/***/ "./public/application/opensearch_dashboards_services.ts":
/*!**************************************************************!*\
  !*** ./public/application/opensearch_dashboards_services.ts ***!
  \**************************************************************/
/*! exports provided: setServices, getServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setServices", function() { return setServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

let services = null;
function setServices(newServices) {
  services = newServices;
}
function getServices() {
  if (!services) {
    throw new Error('OpenSearch Dashboards services not set - are you trying to import this module from outside of the home app?');
  }
  return services;
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: FeatureCatalogueSetup, EnvironmentSetup, TutorialSetup, HomePublicPluginSetup, HomePublicPluginStart, HomePluginBranding, FeatureCatalogueEntry, FeatureCatalogueSolution, FeatureCatalogueCategory, Environment, TutorialVariables, TutorialDirectoryNoticeComponent, TutorialDirectoryHeaderLinkComponent, TutorialModuleNoticeComponent, INSTRUCTION_VARIANT, getDisplayText, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["EnvironmentSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["TutorialSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePublicPluginSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["HomePublicPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePublicPluginStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["HomePublicPluginStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomePluginBranding", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["HomePluginBranding"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueEntry", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FeatureCatalogueEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueSolution", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FeatureCatalogueSolution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueCategory", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FeatureCatalogueCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["Environment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialVariables", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TutorialVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryNoticeComponent", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TutorialDirectoryNoticeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryHeaderLinkComponent", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TutorialDirectoryHeaderLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialModuleNoticeComponent", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TutorialModuleNoticeComponent"]; });

/* harmony import */ var _common_instruction_variant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/instruction_variant */ "./common/instruction_variant.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INSTRUCTION_VARIANT", function() { return _common_instruction_variant__WEBPACK_IMPORTED_MODULE_2__["INSTRUCTION_VARIANT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayText", function() { return _common_instruction_variant__WEBPACK_IMPORTED_MODULE_2__["getDisplayText"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





const plugin = initializerContext => new _plugin__WEBPACK_IMPORTED_MODULE_0__["HomePublicPlugin"](initializerContext);

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: HomePublicPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePublicPlugin", function() { return HomePublicPlugin; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony import */ var _application_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/opensearch_dashboards_services */ "./public/application/opensearch_dashboards_services.ts");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* harmony import */ var _application_components_homepage_sections_work_with_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/components/homepage/sections/work_with_data */ "./public/application/components/homepage/sections/work_with_data.tsx");
/* harmony import */ var _application_components_homepage_sections_learn_basics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/components/homepage/sections/learn_basics */ "./public/application/components/homepage/sections/learn_basics.tsx");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _content_management_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_content_management_public__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _application_home_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application/home_render */ "./public/application/home_render.tsx");
/* harmony import */ var _application_components_sample_data_sample_data_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application/components/sample_data/sample_data_card */ "./public/application/components/sample_data/sample_data_card.tsx");
/* harmony import */ var _application_components_home_list_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./application/components/home_list_card */ "./public/application/components/home_list_card.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _application_components_home_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/components/home_icon */ "./public/application/components/home_icon.tsx");
/* harmony import */ var _application_components_usecase_overview_search_use_case_setup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/components/usecase_overview/search_use_case_setup */ "./public/application/components/usecase_overview/search_use_case_setup.tsx");
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


















class HomePublicPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
    _defineProperty(this, "featuresCatalogueRegistry", new _services__WEBPACK_IMPORTED_MODULE_3__["FeatureCatalogueRegistry"]());
    _defineProperty(this, "environmentService", new _services__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]());
    _defineProperty(this, "tutorialService", new _services__WEBPACK_IMPORTED_MODULE_3__["TutorialService"]());
    _defineProperty(this, "sectionTypeService", new _services__WEBPACK_IMPORTED_MODULE_3__["SectionTypeService"]());
  }
  setup(core, {
    urlForwarding,
    usageCollection,
    contentManagement
  }) {
    const setCommonService = async homeOpenSearchDashboardsServices => {
      const trackUiMetric = usageCollection ? usageCollection.reportUiStats.bind(usageCollection, 'OpenSearch_Dashboards_home') : () => {};
      const [coreStart, {
        telemetry,
        data,
        urlForwarding: urlForwardingStart,
        dataSource,
        contentManagement: contentManagementStart
      }] = await core.getStartServices();
      Object(_application_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_4__["setServices"])({
        trackUiMetric,
        opensearchDashboardsVersion: this.initializerContext.env.packageInfo.version,
        http: coreStart.http,
        toastNotifications: core.notifications.toasts,
        banners: coreStart.overlays.banners,
        docLinks: coreStart.docLinks,
        savedObjectsClient: coreStart.savedObjects.client,
        chrome: coreStart.chrome,
        application: coreStart.application,
        telemetry,
        uiSettings: core.uiSettings,
        addBasePath: core.http.basePath.prepend,
        getBasePath: core.http.basePath.get,
        indexPatternService: data.indexPatterns,
        environmentService: this.environmentService,
        urlForwarding: urlForwardingStart,
        contentManagement: contentManagementStart,
        homeConfig: this.initializerContext.config.get(),
        tutorialService: this.tutorialService,
        featureCatalogue: this.featuresCatalogueRegistry,
        injectedMetadata: coreStart.injectedMetadata,
        dataSource,
        sectionTypes: this.sectionTypeService,
        workspaces: core.workspaces,
        ...homeOpenSearchDashboardsServices
      });
    };
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_6__["PLUGIN_ID"],
      title: 'Home',
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_5__["AppNavLinkStatus"].hidden,
      mount: async params => {
        var _coreStart$applicatio;
        const [coreStart, {
          navigation
        }] = await core.getStartServices();
        if (!!((_coreStart$applicatio = coreStart.application.capabilities.workspaces) !== null && _coreStart$applicatio !== void 0 && _coreStart$applicatio.enabled)) {
          coreStart.application.navigateToApp('workspace_initial');
          return () => {};
        }
        setCommonService();
        coreStart.chrome.docTitle.change(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('home.pageTitle', {
          defaultMessage: 'Home'
        }));
        const {
          renderApp
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./application */ "./public/application/index.ts"));
        return await renderApp(params.element, {
          ...coreStart,
          navigation,
          setHeaderActionMenu: params.setHeaderActionMenu
        }, params.history);
      },
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_5__["WorkspaceAvailability"].outsideWorkspace
    });
    if (core.chrome.navGroup.getNavGroupEnabled()) {
      // register search use case overview page
      core.application.register({
        id: _content_management_public__WEBPACK_IMPORTED_MODULE_9__["SEARCH_OVERVIEW_PAGE_ID"],
        title: 'Overview',
        mount: async params => {
          const [coreStart, {
            contentManagement: contentManagementStart,
            navigation
          }] = await core.getStartServices();
          setCommonService();
          const {
            renderSearchUseCaseOverviewApp
          } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./application */ "./public/application/index.ts"));
          return await renderSearchUseCaseOverviewApp(params.element, coreStart, contentManagementStart, navigation);
        }
      });

      // add to search group
      core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_NAV_GROUPS"].search, [{
        id: _content_management_public__WEBPACK_IMPORTED_MODULE_9__["SEARCH_OVERVIEW_PAGE_ID"],
        order: -1,
        showInAllNavGroup: true
      }]);
    }

    // Register import sample data as a standalone app so that it is available inside workspace.
    core.application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_6__["IMPORT_SAMPLE_DATA_APP_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('home.tutorialDirectory.featureCatalogueTitle', {
        defaultMessage: 'Add sample data'
      }),
      navLinkStatus: _core_public__WEBPACK_IMPORTED_MODULE_5__["AppNavLinkStatus"].hidden,
      mount: async params => {
        const [coreStart, {
          navigation
        }] = await core.getStartServices();
        setCommonService();
        coreStart.chrome.docTitle.change(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('home.tutorialDirectory.featureCatalogueTitle', {
          defaultMessage: 'Add sample data'
        }));
        const {
          renderImportSampleDataApp
        } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./application */ "./public/application/index.ts"));
        return await renderImportSampleDataApp(params.element, {
          ...coreStart,
          navigation,
          setHeaderActionMenu: params.setHeaderActionMenu
        });
      }
    });
    urlForwarding.forwardApp('home', 'home');
    const featureCatalogue = {
      ...this.featuresCatalogueRegistry.setup()
    };
    // Disable sample data in home/view app directory
    // To activate it again, remove visible() and change showOnHomePage to true.
    featureCatalogue.register({
      id: 'home_tutorial_directory',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('home.tutorialDirectory.featureCatalogueTitle', {
        defaultMessage: 'Add sample data'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('home.tutorialDirectory.featureCatalogueDescription', {
        defaultMessage: 'Get started with sample data, visualizations, and dashboards.'
      }),
      icon: 'indexOpen',
      showOnHomePage: false,
      path: `${_common_constants__WEBPACK_IMPORTED_MODULE_6__["HOME_APP_BASE_PATH"]}#/tutorial_directory`,
      category: 'data',
      visible() {
        return false;
      },
      order: 500
    });
    const sectionTypes = {
      ...this.sectionTypeService.setup()
    };
    sectionTypes.registerSection(_application_components_homepage_sections_work_with_data__WEBPACK_IMPORTED_MODULE_7__["workWithDataSection"]);
    sectionTypes.registerSection(_application_components_homepage_sections_learn_basics__WEBPACK_IMPORTED_MODULE_8__["learnBasicsSection"]);
    Object(_application_home_render__WEBPACK_IMPORTED_MODULE_10__["setupHome"])(contentManagement);
    Object(_application_components_usecase_overview_search_use_case_setup__WEBPACK_IMPORTED_MODULE_15__["setupSearchUseCase"])(contentManagement);
    return {
      featureCatalogue,
      environment: {
        ...this.environmentService.setup()
      },
      tutorials: {
        ...this.tutorialService.setup()
      },
      sectionTypes
    };
  }
  start(core, {
    data,
    urlForwarding,
    contentManagement
  }) {
    const {
      application: {
        capabilities,
        currentAppId$
      },
      http
    } = core;

    // initialize homepage
    Object(_application_home_render__WEBPACK_IMPORTED_MODULE_10__["initHome"])(contentManagement, core);

    // register sample data card to use case overview page
    Object(_application_components_sample_data_sample_data_card__WEBPACK_IMPORTED_MODULE_11__["registerSampleDataCard"])(contentManagement, core);
    Object(_application_components_usecase_overview_search_use_case_setup__WEBPACK_IMPORTED_MODULE_15__["registerContentToSearchUseCasePage"])(contentManagement, core);

    // register what's new learn opensearch card to use case overview page
    Object(_application_components_home_list_card__WEBPACK_IMPORTED_MODULE_12__["registerHomeListCardToPage"])(contentManagement, core.docLinks);
    this.featuresCatalogueRegistry.start({
      capabilities
    });
    this.sectionTypeService.start({
      core,
      data
    });

    // If the home app is the initial location when loading OpenSearch Dashboards...
    if (window.location.pathname === http.basePath.prepend(_common_constants__WEBPACK_IMPORTED_MODULE_6__["HOME_APP_BASE_PATH"]) && window.location.hash === '') {
      // ...wait for the app to mount initially and then...
      currentAppId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(appId => {
        if (appId === 'home') {
          // ...navigate to default app set by `opensearchDashboards.defaultAppId`.
          // This doesn't do anything as along as the default settings are kept.
          urlForwarding.navigateToDefaultApp({
            overwriteHash: false
          });
        }
      });
    }
    if (core.chrome.navGroup.getNavGroupEnabled()) {
      core.chrome.navControls.registerLeftBottom({
        order: 0,
        mount: Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_13__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_application_components_home_icon__WEBPACK_IMPORTED_MODULE_14__["HomeIcon"], {
          core,
          appId: _common_constants__WEBPACK_IMPORTED_MODULE_6__["PLUGIN_ID"]
        }))
      });
    }
    return {
      featureCatalogue: this.featuresCatalogueRegistry,
      getSavedHomepageLoader: () => this.sectionTypeService.getSavedHomepageLoader()
    };
  }
}

/** @public */

/** @public */

/** @public */

/** @public */

/** @public */

/***/ }),

/***/ "./public/saved_homepage/_saved_homepage.ts":
/*!**************************************************!*\
  !*** ./public/saved_homepage/_saved_homepage.ts ***!
  \**************************************************/
/*! exports provided: createSavedHomepageClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedHomepageClass", function() { return createSavedHomepageClass; });
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


function createSavedHomepageClass(services) {
  const SavedObjectClass = Object(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__["createSavedObjectClass"])(services);
  class SavedHomepage extends SavedObjectClass {
    constructor(opts) {
      if (typeof opts !== 'object') {
        opts = {
          id: opts
        };
      }
      super({
        type: SavedHomepage.type,
        mapping: SavedHomepage.mapping,
        id: opts.id || '',
        defaults: {
          heroes: [],
          sections: [{
            id: 'home:workWithData'
          }, {
            id: 'home:learnBasics'
          }]
        }
      });
    }
  }
  _defineProperty(SavedHomepage, "type", 'homepage');
  _defineProperty(SavedHomepage, "mapping", {
    heroes: 'object',
    sections: 'object'
  });
  return SavedHomepage;
}

/***/ }),

/***/ "./public/saved_homepage/index.ts":
/*!****************************************!*\
  !*** ./public/saved_homepage/index.ts ***!
  \****************************************/
/*! exports provided: SavedHomepage, createSavedHomepageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_saved_homepage */ "./public/saved_homepage/_saved_homepage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedHomepage", function() { return _saved_homepage__WEBPACK_IMPORTED_MODULE_0__["SavedHomepage"]; });

/* harmony import */ var _saved_homepages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved_homepages */ "./public/saved_homepage/saved_homepages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSavedHomepageLoader", function() { return _saved_homepages__WEBPACK_IMPORTED_MODULE_1__["createSavedHomepageLoader"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




/***/ }),

/***/ "./public/saved_homepage/saved_homepages.ts":
/*!**************************************************!*\
  !*** ./public/saved_homepage/saved_homepages.ts ***!
  \**************************************************/
/*! exports provided: createSavedHomepageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSavedHomepageLoader", function() { return createSavedHomepageLoader; });
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../saved_objects/public */ "plugin/savedObjects/public");
/* harmony import */ var _saved_objects_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_saved_objects_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_saved_homepage */ "./public/saved_homepage/_saved_homepage.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



function createSavedHomepageLoader(services) {
  const SavedHomepage = Object(_saved_homepage__WEBPACK_IMPORTED_MODULE_1__["createSavedHomepageClass"])(services);
  return new _saved_objects_public__WEBPACK_IMPORTED_MODULE_0__["SavedObjectLoader"](SavedHomepage, services.savedObjectsClient);
}

/***/ }),

/***/ "./public/services/environment/environment.ts":
/*!****************************************************!*\
  !*** ./public/services/environment/environment.ts ***!
  \****************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
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

/** @public */

class EnvironmentService {
  constructor() {
    _defineProperty(this, "environment", {
      cloud: false,
      apmUi: false,
      ml: false
    });
  }
  setup() {
    return {
      /**
       * Update the environment to influence how the home app is presenting available features.
       * This API should not be extended for new features and will be removed in future versions
       * in favor of display specific extension apis.
       * @deprecated
       * @param update
       */
      update: update => {
        this.environment = Object.assign({}, this.environment, update);
      }
    };
  }
  getEnvironment() {
    return this.environment;
  }
}

/***/ }),

/***/ "./public/services/environment/index.ts":
/*!**********************************************!*\
  !*** ./public/services/environment/index.ts ***!
  \**********************************************/
/*! exports provided: EnvironmentService, Environment, EnvironmentServiceSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./public/services/environment/environment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["EnvironmentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["Environment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentServiceSetup", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__["EnvironmentServiceSetup"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/services/feature_catalogue/feature_catalogue_registry.ts":
/*!*************************************************************************!*\
  !*** ./public/services/feature_catalogue/feature_catalogue_registry.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureCatalogueCategory, FeatureCatalogueRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueCategory", function() { return FeatureCatalogueCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueRegistry", function() { return FeatureCatalogueRegistry; });
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

/** @public */
let FeatureCatalogueCategory = /*#__PURE__*/function (FeatureCatalogueCategory) {
  FeatureCatalogueCategory["ADMIN"] = "admin";
  FeatureCatalogueCategory["DATA"] = "data";
  FeatureCatalogueCategory["OTHER"] = "other";
  return FeatureCatalogueCategory;
}({});

/** @public */

/** @public */

class FeatureCatalogueRegistry {
  constructor() {
    _defineProperty(this, "capabilities", null);
    _defineProperty(this, "features", new Map());
    _defineProperty(this, "solutions", new Map());
  }
  setup() {
    return {
      register: feature => {
        if (this.features.has(feature.id)) {
          throw new Error(`Feature with id [${feature.id}] has already been registered. Use a unique id.`);
        }
        this.features.set(feature.id, feature);
      },
      registerSolution: solution => {
        if (this.solutions.has(solution.id)) {
          throw new Error(`Solution with id [${solution.id}] has already been registered. Use a unique id.`);
        }
        this.solutions.set(solution.id, solution);
      }
    };
  }
  start({
    capabilities
  }) {
    this.capabilities = capabilities;
  }
  get() {
    if (this.capabilities === null) {
      throw new Error('Catalogue entries are only available after start phase');
    }
    const capabilities = this.capabilities;
    return [...this.features.values()].filter(entry => capabilities.catalogue[entry.id] !== false && (entry.visible ? entry.visible() : true)).sort(compareByKey('title'));
  }
  getSolutions() {
    if (this.capabilities === null) {
      throw new Error('Catalogue entries are only available after start phase');
    }
    const capabilities = this.capabilities;
    return [...this.solutions.values()].filter(solution => capabilities.catalogue[solution.id] !== false).sort(compareByKey('title'));
  }
  removeFeature(appId) {
    this.features.delete(appId);
  }
}
const compareByKey = key => (left, right) => {
  if (left[key] < right[key]) {
    return -1;
  } else if (left[key] > right[key]) {
    return 1;
  } else {
    return 0;
  }
};

/***/ }),

/***/ "./public/services/feature_catalogue/index.ts":
/*!****************************************************!*\
  !*** ./public/services/feature_catalogue/index.ts ***!
  \****************************************************/
/*! exports provided: FeatureCatalogueCategory, FeatureCatalogueEntry, FeatureCatalogueSolution, FeatureCatalogueRegistry, FeatureCatalogueRegistrySetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature_catalogue_registry */ "./public/services/feature_catalogue/feature_catalogue_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueCategory", function() { return _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueEntry", function() { return _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueSolution", function() { return _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueSolution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueRegistry", function() { return _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueRegistrySetup", function() { return _feature_catalogue_registry__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueRegistrySetup"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/services/index.ts":
/*!**********************************!*\
  !*** ./public/services/index.ts ***!
  \**********************************/
/*! exports provided: FeatureCatalogueCategory, FeatureCatalogueEntry, FeatureCatalogueSolution, FeatureCatalogueRegistry, FeatureCatalogueRegistrySetup, EnvironmentService, Environment, EnvironmentServiceSetup, TutorialService, TutorialVariables, TutorialServiceSetup, TutorialDirectoryNoticeComponent, TutorialDirectoryHeaderLinkComponent, TutorialModuleNoticeComponent, SectionTypeService, SectionTypeServiceSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature_catalogue */ "./public/services/feature_catalogue/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueCategory", function() { return _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueEntry", function() { return _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueSolution", function() { return _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueSolution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueRegistry", function() { return _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureCatalogueRegistrySetup", function() { return _feature_catalogue__WEBPACK_IMPORTED_MODULE_0__["FeatureCatalogueRegistrySetup"]; });

/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./public/services/environment/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return _environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_1__["Environment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvironmentServiceSetup", function() { return _environment__WEBPACK_IMPORTED_MODULE_1__["EnvironmentServiceSetup"]; });

/* harmony import */ var _tutorials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutorials */ "./public/services/tutorials/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialService", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialVariables", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialServiceSetup", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialServiceSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryNoticeComponent", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialDirectoryNoticeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryHeaderLinkComponent", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialDirectoryHeaderLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialModuleNoticeComponent", function() { return _tutorials__WEBPACK_IMPORTED_MODULE_2__["TutorialModuleNoticeComponent"]; });

/* harmony import */ var _section_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section_type */ "./public/services/section_type/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTypeService", function() { return _section_type__WEBPACK_IMPORTED_MODULE_3__["SectionTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTypeServiceSetup", function() { return _section_type__WEBPACK_IMPORTED_MODULE_3__["SectionTypeServiceSetup"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/services/section_type/index.ts":
/*!***********************************************!*\
  !*** ./public/services/section_type/index.ts ***!
  \***********************************************/
/*! exports provided: SectionTypeService, SectionTypeServiceSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section_type */ "./public/services/section_type/section_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTypeService", function() { return _section_type__WEBPACK_IMPORTED_MODULE_0__["SectionTypeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTypeServiceSetup", function() { return _section_type__WEBPACK_IMPORTED_MODULE_0__["SectionTypeServiceSetup"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/services/section_type/section_type.ts":
/*!******************************************************!*\
  !*** ./public/services/section_type/section_type.ts ***!
  \******************************************************/
/*! exports provided: SectionTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTypeService", function() { return SectionTypeService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saved_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../saved_homepage */ "./public/saved_homepage/index.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





// TODO: this should support error handling explicitly
// TODO: this should support async rendering through a promise

class SectionTypeService {
  constructor() {
    _defineProperty(this, "heroSections", {});
    _defineProperty(this, "sections", {});
    _defineProperty(this, "savedHomepageLoader", void 0);
  }
  setup() {
    return {
      /**
       * Register a new hero section type. The id must be unique.
       */
      registerHeroSection: heroSection => {
        if (this.heroSections[heroSection.id]) {
          throw new Error(`Hero section with id '${heroSection.id}' already exists.`);
        }
        this.heroSections[heroSection.id] = heroSection;
      },
      /**
       * Register a new section type. The id must be unique.
       */
      registerSection: section => {
        if (this.sections[section.id]) {
          throw new Error(`Section with id '${section.id}' already exists.`);
        }
        this.sections[section.id] = section;
      }
    };
  }
  start({
    core,
    data
  }) {
    this.savedHomepageLoader = Object(_saved_homepage__WEBPACK_IMPORTED_MODULE_2__["createSavedHomepageLoader"])({
      savedObjectsClient: core.savedObjects.client,
      indexPatterns: data.indexPatterns,
      search: data.search,
      chrome: core.chrome,
      overlays: core.overlays
    });
  }

  /**
   * Gets the current homepage in any scenario. If no homepage exists, one will be created.
   * The actual homepage that is returned is opaque to the caller, meaning this may be an
   * application-wide homepage, a workspace-specific homepage, or a user-specific homepage.
   *
   * An edge case to be aware of is if a user creates a homepage with sections from plugins,
   * then uninstalls those plugins, and navigates to the homepage. In this case, those sections
   * are ignored so that if the user installs the plugins again, they will see the sections again.
   *
   * Currently, if there are multiple candidates for the homepage, the first one will be returned.
   * This may change in the future.
   */
  getHomepage() {
    // TODO: this should return some sort of way to know if the homepage is still loading
    // TODO: errors should be tested
    if (!this.savedHomepageLoader) {
      throw new Error('SectionTypeService has not been started yet.');
    }
    const heroes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
    const sections$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
    const error$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined);
    const subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    this.fetchHomepageData().then(homepage => {
      const initialHeroes = Array.isArray(homepage.heroes) ? homepage.heroes : [homepage.heroes];
      const initialSections = Array.isArray(homepage.sections) ? homepage.sections : [homepage.sections];
      heroes$.next(initialHeroes.map(hero => this.heroSections[hero.id]).filter(Boolean));
      sections$.next(initialSections.map(section => this.sections[section.id]).filter(Boolean));
      error$.next(undefined);

      // TODO: make this debounce time configurable
      const combinedSave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([heroes$, sections$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000));
      subscriptions.add(combinedSave$.subscribe(([heroes, sections]) => {
        if (heroes) {
          homepage.heroes = heroes.map(hero => ({
            id: hero.id
          }));
        }
        if (sections) {
          homepage.sections = sections.map(section => ({
            id: section.id
          }));
        }
        if (heroes || sections) {
          homepage.save({});
        }
      }));
    }).catch(e => {
      error$.next(e);
    });
    return {
      heroes$: heroes$.asObservable(),
      sections$: sections$.asObservable(),
      error$: error$.asObservable(),
      saveHomepage: (heroes, sections) => {
        heroes$.next(heroes);
        sections$.next(sections);
      },
      cleanup: () => {
        subscriptions.unsubscribe();
      }
    };
  }

  // In the future, it may be useful to get the current state of the homepage without using observables. If that
  // is the case, this function could be extended to produce usable heroes and sections, as well as a save function
  // that properly saves the data.
  async fetchHomepageData() {
    var _hits$;
    if (!this.savedHomepageLoader) {
      throw new Error('SectionTypeService has not been started yet.');
    }

    // TODO: this will use the first hit even if there are more than one homepage. Maybe we want some other logic here?
    const {
      hits
    } = await this.savedHomepageLoader.find();
    const id = (_hits$ = hits[0]) === null || _hits$ === void 0 ? void 0 : _hits$.id;
    const homepage = await this.savedHomepageLoader.get(id);
    if (!id) {
      await homepage.save({});
    }
    return homepage;
  }
  getHeroSectionTypes() {
    return Object.values(this.heroSections);
  }
  getSectionTypes() {
    return Object.values(this.sections);
  }
  getSavedHomepageLoader() {
    if (!this.savedHomepageLoader) {
      throw new Error('SectionTypeService has not been started yet.');
    }
    return this.savedHomepageLoader;
  }
}

// NOTE: we don't currently export a start type since start doesn't expose any APIs

/***/ }),

/***/ "./public/services/tutorials/index.ts":
/*!********************************************!*\
  !*** ./public/services/tutorials/index.ts ***!
  \********************************************/
/*! exports provided: TutorialService, TutorialVariables, TutorialServiceSetup, TutorialDirectoryNoticeComponent, TutorialDirectoryHeaderLinkComponent, TutorialModuleNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutorial_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_service */ "./public/services/tutorials/tutorial_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialService", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialVariables", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialServiceSetup", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialServiceSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryNoticeComponent", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialDirectoryNoticeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialDirectoryHeaderLinkComponent", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialDirectoryHeaderLinkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorialModuleNoticeComponent", function() { return _tutorial_service__WEBPACK_IMPORTED_MODULE_0__["TutorialModuleNoticeComponent"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/services/tutorials/tutorial_service.ts":
/*!*******************************************************!*\
  !*** ./public/services/tutorials/tutorial_service.ts ***!
  \*******************************************************/
/*! exports provided: TutorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialService", function() { return TutorialService; });
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

/** @public */

/** @public */

/** @public */

/** @public */

class TutorialService {
  constructor() {
    _defineProperty(this, "tutorialVariables", {});
    _defineProperty(this, "tutorialDirectoryNotices", {});
    _defineProperty(this, "tutorialDirectoryHeaderLinks", {});
    _defineProperty(this, "tutorialModuleNotices", {});
  }
  setup() {
    return {
      /**
       * Set a variable usable in tutorial templates. Access with `{config.<key>}`.
       */
      setVariable: (key, value) => {
        if (this.tutorialVariables[key]) {
          throw new Error('variable already set');
        }
        this.tutorialVariables[key] = value;
      },
      /**
       * Registers a component that will be rendered at the top of tutorial directory page.
       */
      registerDirectoryNotice: (id, component) => {
        if (this.tutorialDirectoryNotices[id]) {
          throw new Error(`directory notice ${id} already set`);
        }
        this.tutorialDirectoryNotices[id] = component;
      },
      /**
       * Registers a component that will be rendered next to tutorial directory title/header area.
       */
      registerDirectoryHeaderLink: (id, component) => {
        if (this.tutorialDirectoryHeaderLinks[id]) {
          throw new Error(`directory header link ${id} already set`);
        }
        this.tutorialDirectoryHeaderLinks[id] = component;
      },
      /**
       * Registers a component that will be rendered in the description of a tutorial that is associated with a module.
       */
      registerModuleNotice: (id, component) => {
        if (this.tutorialModuleNotices[id]) {
          throw new Error(`module notice ${id} already set`);
        }
        this.tutorialModuleNotices[id] = component;
      }
    };
  }
  getVariables() {
    return this.tutorialVariables;
  }
  getDirectoryNotices() {
    return Object.values(this.tutorialDirectoryNotices);
  }
  getDirectoryHeaderLinks() {
    return Object.values(this.tutorialDirectoryHeaderLinks);
  }
  getModuleNotices() {
    return Object.values(this.tutorialModuleNotices);
  }
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

/***/ "moment-timezone":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.MomentTimezone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.MomentTimezone;

/***/ }),

/***/ "plugin/contentManagement/public":
/*!********************************************************!*\
  !*** @osd/bundleRef "plugin/contentManagement/public" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/contentManagement/public');
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
//# sourceMappingURL=home.plugin.js.map