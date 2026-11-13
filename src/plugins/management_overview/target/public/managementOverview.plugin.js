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
/******/ 		"managementOverview": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "managementOverview.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["managementOverview_bundle_jsonpfunction"] = window["managementOverview_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=managementOverview!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=managementOverview!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['managementOverview']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_managementOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=managementOverview!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=managementOverview!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_managementOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_managementOverview_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/managementOverview/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/management_overview/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/*! exports provided: MANAGEMENT_OVERVIEW_PLUGIN_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGEMENT_OVERVIEW_PLUGIN_ID", function() { return MANAGEMENT_OVERVIEW_PLUGIN_ID; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const MANAGEMENT_OVERVIEW_PLUGIN_ID = 'opensearch_management_overview';

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: OverviewApp, ManagementOverViewPluginSetup, ManagementOverViewPluginStart, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _overview_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview_app */ "./public/overview_app.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewApp", function() { return _overview_app__WEBPACK_IMPORTED_MODULE_1__["OverviewApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagementOverViewPluginSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["ManagementOverViewPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagementOverViewPluginStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["ManagementOverViewPluginStart"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const plugin = () => new _plugin__WEBPACK_IMPORTED_MODULE_0__["ManagementOverViewPlugin"]();

/***/ }),

/***/ "./public/overview_app.ts":
/*!********************************!*\
  !*** ./public/overview_app.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: ManagementOverViewPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementOverViewPlugin", function() { return ManagementOverViewPlugin; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/public */ "plugin/home/public");
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






// eslint-disable-next-line @typescript-eslint/no-empty-interface

/** @public */
class ManagementOverViewPlugin {
  constructor() {
    _defineProperty(this, "overviewApps", new Map());
  }
  getSortedOverviewApps() {
    return [...this.overviewApps.values()].sort((a, b) => a.order - b.order);
  }
  setup(coreSetup, {
    home
  }) {
    const {
      application,
      getStartServices
    } = coreSetup;
    if (home) {
      home.featureCatalogue.register({
        id: _common_constants__WEBPACK_IMPORTED_MODULE_3__["MANAGEMENT_OVERVIEW_PLUGIN_ID"],
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('management.stackManagement.managementLabel', {
          defaultMessage: 'Management'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('management.stackManagement.managementDescription', {
          defaultMessage: 'Your center location for managing the OpenSearch Stack.'
        }),
        icon: 'managementApp',
        path: `/app/${_common_constants__WEBPACK_IMPORTED_MODULE_3__["MANAGEMENT_OVERVIEW_PLUGIN_ID"]}`,
        showOnHomePage: false,
        category: _home_public__WEBPACK_IMPORTED_MODULE_2__["FeatureCatalogueCategory"].ADMIN
      });
    }
    application.register({
      id: _common_constants__WEBPACK_IMPORTED_MODULE_3__["MANAGEMENT_OVERVIEW_PLUGIN_ID"],
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('management.overview.overviewTitle', {
        defaultMessage: 'Overview'
      }),
      icon: '/ui/logos/opensearch_mark.svg',
      order: 9000,
      category: _core_public__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_APP_CATEGORIES"].management,
      status: _core_public__WEBPACK_IMPORTED_MODULE_1__["AppStatus"].inaccessible,
      mount: async params => {
        const {
          element
        } = params;
        const [core] = await getStartServices();
        const overviewApps = this.getSortedOverviewApps();
        const {
          renderApp
        } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./application */ "./public/application.tsx"));
        return renderApp(core, overviewApps, element);
      }
    });
    return {
      register: app => {
        if (this.overviewApps.has(app.id)) {
          throw new Error(`Management overview App tool with id [${app.id}] has already been registered. Use a unique id.`);
        }
        this.overviewApps.set(app.id, app);
      }
    };
  }
  start(core) {
    return {};
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

/***/ "plugin/home/public":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/home/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/home/public');
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

/***/ "tslib":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.TsLib" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.TsLib;

/***/ })

/******/ });
//# sourceMappingURL=managementOverview.plugin.js.map