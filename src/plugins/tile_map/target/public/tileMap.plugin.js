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
/******/ 		"tileMap": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "tileMap.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["tileMap_bundle_jsonpfunction"] = window["tileMap_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=tileMap!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=tileMap!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['tileMap']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_tileMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=tileMap!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=tileMap!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_tileMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_tileMap_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/tileMap/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/tile_map/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/tile_map_options.tsx":
/*!************************************************!*\
  !*** ./public/components/tile_map_options.tsx ***!
  \************************************************/
/*! exports provided: TileMapOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMapOptions", function() { return TileMapOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






function TileMapOptions(props) {
  var _vis$type$visConfig;
  const {
    stateParams,
    setValue,
    vis
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!stateParams.mapType) {
      setValue('mapType', vis.type.editorConfig.collections.mapTypes[0]);
    }
  }, [setValue, stateParams.mapType, vis.type.editorConfig.collections.mapTypes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('tileMap.visParams.mapTypeLabel', {
      defaultMessage: 'Map type'
    }),
    options: vis.type.editorConfig.collections.mapTypes,
    paramName: "mapType",
    value: stateParams.mapType,
    setValue: setValue
  }), stateParams.mapType === _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["MapTypes"].Heatmap ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["RangeOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('tileMap.visParams.clusterSizeLabel', {
      defaultMessage: 'Cluster size'
    }),
    max: 3,
    min: 1,
    paramName: "heatClusterSize",
    step: 0.1,
    value: stateParams.heatClusterSize,
    setValue: setValue
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('tileMap.visParams.colorSchemaLabel', {
      defaultMessage: 'Color schema'
    }),
    options: vis.type.editorConfig.collections.colorSchemas,
    paramName: "colorSchema",
    value: stateParams.colorSchema,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["BasicOptions"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_3__["SwitchOption"], {
    disabled: !((_vis$type$visConfig = vis.type.visConfig) !== null && _vis$type$visConfig !== void 0 && _vis$type$visConfig.canDesaturate),
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('tileMap.visParams.desaturateTilesLabel', {
      defaultMessage: 'Desaturate tiles'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('tileMap.visParams.reduceVibrancyOfTileColorsTip', {
      defaultMessage: 'Reduce the vibrancy of tile colors. This does not work in any version of Internet Explorer.'
    }),
    paramName: "isDesaturated",
    value: stateParams.isDesaturated,
    setValue: setValue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["WmsOptions"], props));
}


/***/ }),

/***/ "./public/css_filters.js":
/*!*******************************!*\
  !*** ./public/css_filters.js ***!
  \*******************************/
/*! exports provided: supportsCssFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssFilters", function() { return supportsCssFilters; });
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
 * just a place to put feature detection checks
 */
const supportsCssFilters = function () {
  const e = document.createElement('img');
  const rules = ['webkitFilter', 'mozFilter', 'msFilter', 'filter'];
  const test = 'grayscale(1)';
  rules.forEach(function (rule) {
    e.style[rule] = test;
  });
  document.body.appendChild(e);
  const styles = window.getComputedStyle(e);
  const can = lodash__WEBPACK_IMPORTED_MODULE_0___default()(styles).pick(rules).includes(test);
  document.body.removeChild(e);
  return can;
}();

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
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["TileMapPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: TileMapPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMapPlugin", function() { return TileMapPlugin; });
/* harmony import */ var _tile_map_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile_map_fn */ "./public/tile_map_fn.js");
/* harmony import */ var _tile_map_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile_map_type */ "./public/tile_map_type.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./public/services.ts");
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

// @ts-ignore

// @ts-ignore



/** @private */

/** @internal */

/** @internal */

// eslint-disable-next-line @typescript-eslint/no-empty-interface

/** @internal */
class TileMapPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);
    this.initializerContext = initializerContext;
  }
  async setup(core, {
    expressions,
    visualizations,
    mapsLegacy
  }) {
    const {
      getZoomPrecision,
      getPrecision,
      getServiceSettings
    } = mapsLegacy;
    const visualizationDependencies = {
      getZoomPrecision,
      getPrecision,
      BaseMapsVisualization: mapsLegacy.getBaseMapsVis(),
      uiSettings: core.uiSettings,
      getServiceSettings
    };
    expressions.registerFunction(() => Object(_tile_map_fn__WEBPACK_IMPORTED_MODULE_0__["createTileMapFn"])(visualizationDependencies));
    visualizations.createBaseVisualization(Object(_tile_map_type__WEBPACK_IMPORTED_MODULE_1__["createTileMapTypeDefinition"])(visualizationDependencies));
    const config = this.initializerContext.config.get();
    return {
      config
    };
  }
  start(core, plugins) {
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setFormatService"])(plugins.data.fieldFormats);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setQueryService"])(plugins.data.query);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setOpenSearchDashboardsLegacy"])(plugins.opensearchDashboardsLegacy);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setShareService"])(plugins.share);
    Object(_services__WEBPACK_IMPORTED_MODULE_2__["setCoreService"])(core);
    return {};
  }
}

/***/ }),

/***/ "./public/services.ts":
/*!****************************!*\
  !*** ./public/services.ts ***!
  \****************************/
/*! exports provided: getCoreService, setCoreService, getFormatService, setFormatService, getQueryService, setQueryService, getShareService, setShareService, getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoreService", function() { return getCoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCoreService", function() { return setCoreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatService", function() { return getFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFormatService", function() { return setFormatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryService", function() { return getQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQueryService", function() { return setQueryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareService", function() { return getShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setShareService", function() { return setShareService; });
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


const [getCoreService, setCoreService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Core');
const [getFormatService, setFormatService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('vislib data.fieldFormats');
const [getQueryService, setQueryService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Query');
const [getShareService, setShareService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('Share');
const [getOpenSearchDashboardsLegacy, setOpenSearchDashboardsLegacy] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('OpenSearchDashboardsLegacy');

/***/ }),

/***/ "./public/tile_map_fn.js":
/*!*******************************!*\
  !*** ./public/tile_map_fn.js ***!
  \*******************************/
/*! exports provided: createTileMapFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileMapFn", function() { return createTileMapFn; });
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const createTileMapFn = () => ({
  name: 'tilemap',
  type: 'render',
  context: {
    types: ['opensearch_dashboards_datatable']
  },
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.function.help', {
    defaultMessage: 'Tilemap visualization'
  }),
  args: {
    visConfig: {
      types: ['string', 'null'],
      default: '"{}"'
    }
  },
  fn(context, args) {
    const visConfig = JSON.parse(args.visConfig);
    const {
      geohash,
      metric,
      geocentroid
    } = visConfig.dimensions;
    const convertedData = Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__["convertToGeoJson"])(context, {
      geohash,
      metric,
      geocentroid
    });
    if (geohash && geohash.accessor) {
      convertedData.meta.geohash = context.columns[geohash.accessor].meta;
    }
    return {
      type: 'render',
      as: 'visualization',
      value: {
        visData: convertedData,
        visType: 'tile_map',
        visConfig,
        params: {
          listenOnChange: true
        }
      }
    };
  }
});

/***/ }),

/***/ "./public/tile_map_type.js":
/*!*********************************!*\
  !*** ./public/tile_map_type.js ***!
  \*********************************/
/*! exports provided: createTileMapTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileMapTypeDefinition", function() { return createTileMapTypeDefinition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tile_map_visualization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tile_map_visualization */ "./public/tile_map_visualization.js");
/* harmony import */ var _components_tile_map_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tile_map_options */ "./public/components/tile_map_options.tsx");
/* harmony import */ var _css_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css_filters */ "./public/css_filters.js");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_7__);
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









function createTileMapTypeDefinition(dependencies) {
  const CoordinateMapsVisualization = Object(_tile_map_visualization__WEBPACK_IMPORTED_MODULE_4__["createTileMapVisualization"])(dependencies);
  const {
    uiSettings,
    getServiceSettings
  } = dependencies;
  return {
    name: 'tile_map',
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.mapTitle', {
      defaultMessage: 'Coordinate Map'
    }),
    icon: 'visMapCoordinate',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.mapDescription', {
      defaultMessage: 'Plot latitude and longitude coordinates on a map'
    }),
    visConfig: {
      canDesaturate: Boolean(_css_filters__WEBPACK_IMPORTED_MODULE_6__["supportsCssFilters"]),
      defaults: {
        colorSchema: 'Yellow to Red',
        mapType: 'Scaled Circle Markers',
        isDesaturated: true,
        addTooltip: true,
        heatClusterSize: 1.5,
        legendPosition: 'bottomright',
        mapZoom: 2,
        mapCenter: [0, 0],
        wms: uiSettings.get('visualization:tileMap:WMSdefaults')
      }
    },
    visualization: CoordinateMapsVisualization,
    responseHandler: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["convertToGeoJson"],
    editorConfig: {
      collections: {
        colorSchemas: _charts_public__WEBPACK_IMPORTED_MODULE_7__["truncatedColorSchemas"],
        legendPositions: [{
          value: 'bottomleft',
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.legendPositions.bottomLeftText', {
            defaultMessage: 'Bottom left'
          })
        }, {
          value: 'bottomright',
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.legendPositions.bottomRightText', {
            defaultMessage: 'Bottom right'
          })
        }, {
          value: 'topleft',
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.legendPositions.topLeftText', {
            defaultMessage: 'Top left'
          })
        }, {
          value: 'topright',
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.legendPositions.topRightText', {
            defaultMessage: 'Top right'
          })
        }],
        mapTypes: [{
          value: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ScaledCircleMarkers,
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.mapTypes.scaledCircleMarkersText', {
            defaultMessage: 'Scaled circle markers'
          })
        }, {
          value: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ShadedCircleMarkers,
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.mapTypes.shadedCircleMarkersText', {
            defaultMessage: 'Shaded circle markers'
          })
        }, {
          value: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ShadedGeohashGrid,
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.mapTypes.shadedGeohashGridText', {
            defaultMessage: 'Shaded geohash grid'
          })
        }, {
          value: _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].Heatmap,
          text: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.editorConfig.mapTypes.heatmapText', {
            defaultMessage: 'Heatmap'
          })
        }],
        tmsLayers: []
      },
      optionsTemplate: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tile_map_options__WEBPACK_IMPORTED_MODULE_5__["TileMapOptions"], props),
      schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_3__["Schemas"]([{
        group: 'metrics',
        name: 'metric',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.map.editorConfig.schemas.metricTitle', {
          defaultMessage: 'Value'
        }),
        min: 1,
        max: 1,
        aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'top_hits'],
        defaults: [{
          schema: 'metric',
          type: 'count'
        }]
      }, {
        group: 'buckets',
        name: 'segment',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.vis.map.editorConfig.schemas.geoCoordinatesTitle', {
          defaultMessage: 'Geo coordinates'
        }),
        aggFilter: ['geohash_grid'],
        min: 1,
        max: 1
      }])
    },
    setup: async vis => {
      let tmsLayers;
      try {
        const serviceSettings = await getServiceSettings();
        tmsLayers = await serviceSettings.getTMSServices();
      } catch (e) {
        return vis;
      }
      vis.type.editorConfig.collections.tmsLayers = tmsLayers;
      if (!vis.params.wms.selectedTmsLayer && tmsLayers.length) {
        vis.params.wms.selectedTmsLayer = tmsLayers[0];
      }
      return vis;
    }
  };
}

/***/ }),

/***/ "./public/tile_map_visualization.js":
/*!******************************************!*\
  !*** ./public/tile_map_visualization.js ***!
  \******************************************/
/*! exports provided: createTileMapVisualization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileMapVisualization", function() { return createTileMapVisualization; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tooltip_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip_formatter */ "./public/tooltip_formatter.js");
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





function scaleBounds(bounds) {
  const scale = 0.5; // scale bounds by 50%

  const topLeft = bounds.top_left;
  const bottomRight = bounds.bottom_right;
  let latDiff = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(Math.abs(topLeft.lat - bottomRight.lat), 5);
  const lonDiff = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(Math.abs(bottomRight.lon - topLeft.lon), 5);
  // map height can be zero when vis is first created
  if (latDiff === 0) latDiff = lonDiff;
  const latDelta = latDiff * scale;
  let topLeftLat = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(topLeft.lat, 5) + latDelta;
  if (topLeftLat > 90) topLeftLat = 90;
  let bottomRightLat = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(bottomRight.lat, 5) - latDelta;
  if (bottomRightLat < -90) bottomRightLat = -90;
  const lonDelta = lonDiff * scale;
  let topLeftLon = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(topLeft.lon, 5) - lonDelta;
  if (topLeftLon < -180) topLeftLon = -180;
  let bottomRightLon = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["round"])(bottomRight.lon, 5) + lonDelta;
  if (bottomRightLon > 180) bottomRightLon = 180;
  return {
    top_left: {
      lat: topLeftLat,
      lon: topLeftLon
    },
    bottom_right: {
      lat: bottomRightLat,
      lon: bottomRightLon
    }
  };
}
const createTileMapVisualization = dependencies => {
  const {
    getZoomPrecision,
    getPrecision,
    BaseMapsVisualization
  } = dependencies;
  return class CoordinateMapsVisualization extends BaseMapsVisualization {
    constructor(element, vis) {
      super(element, vis);
      _defineProperty(this, "updateGeohashAgg", () => {
        const geohashAgg = this._getGeoHashAgg();
        if (!geohashAgg) return;
        const updateVarsObject = {
          name: 'bounds',
          data: {}
        };
        const bounds = this._opensearchDashboardsMap.getBounds();
        const mapCollar = scaleBounds(bounds);
        if (!Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["geoContains"])(geohashAgg.aggConfigParams.boundingBox, mapCollar)) {
          updateVarsObject.data.boundingBox = {
            top_left: mapCollar.top_left,
            bottom_right: mapCollar.bottom_right
          };
        } else {
          updateVarsObject.data.boundingBox = geohashAgg.aggConfigParams.boundingBox;
        }
        // todo: autoPrecision should be vis parameter, not aggConfig one
        const zoomPrecision = getZoomPrecision();
        updateVarsObject.data.precision = geohashAgg.aggConfigParams.autoPrecision ? zoomPrecision[this.vis.getUiState().get('mapZoom')] : getPrecision(geohashAgg.aggConfigParams.precision);
        this.vis.eventsSubject.next(updateVarsObject);
      });
      this._geohashLayer = null;
      this._tooltipFormatter = Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["mapTooltipProvider"])(element, _tooltip_formatter__WEBPACK_IMPORTED_MODULE_3__["tooltipFormatter"]);
    }
    async render(opensearchResponse, visParams) {
      Object(_services__WEBPACK_IMPORTED_MODULE_1__["getOpenSearchDashboardsLegacy"])().loadFontAwesome();
      await super.render(opensearchResponse, visParams);
    }
    async _makeOpenSearchDashboardsMap() {
      await super._makeOpenSearchDashboardsMap();
      let previousPrecision = this._opensearchDashboardsMap.getGeohashPrecision();
      let precisionChange = false;
      const uiState = this.vis.getUiState();
      uiState.on('change', prop => {
        if (prop === 'mapZoom' || prop === 'mapCenter') {
          this.updateGeohashAgg();
        }
      });
      this._opensearchDashboardsMap.on('zoomchange', () => {
        precisionChange = previousPrecision !== this._opensearchDashboardsMap.getGeohashPrecision();
        previousPrecision = this._opensearchDashboardsMap.getGeohashPrecision();
      });
      this._opensearchDashboardsMap.on('zoomend', () => {
        const geohashAgg = this._getGeoHashAgg();
        if (!geohashAgg) {
          return;
        }
        const isAutoPrecision = typeof geohashAgg.aggConfigParams.autoPrecision === 'boolean' ? geohashAgg.aggConfigParams.autoPrecision : true;
        if (!isAutoPrecision) {
          return;
        }
        if (precisionChange) {
          this.updateGeohashAgg();
        } else {
          //when we filter queries by collar
          this._updateData(this._geoJsonFeatureCollectionAndMeta);
        }
      });
      this._opensearchDashboardsMap.addDrawControl();
      this._opensearchDashboardsMap.on('drawCreated:rectangle', event => {
        const geohashAgg = this._getGeoHashAgg();
        this.addSpatialFilter(geohashAgg, 'geo_bounding_box', event.bounds);
      });
      this._opensearchDashboardsMap.on('drawCreated:polygon', event => {
        const geohashAgg = this._getGeoHashAgg();
        this.addSpatialFilter(geohashAgg, 'geo_polygon', {
          points: event.points
        });
      });
    }
    async _updateData(geojsonFeatureCollectionAndMeta) {
      // Only recreate geohash layer when there is new aggregation data
      // Exception is Heatmap: which needs to be redrawn every zoom level because the clustering is based on meters per pixel
      if (this._getMapsParams().mapType !== 'Heatmap' && geojsonFeatureCollectionAndMeta === this._geoJsonFeatureCollectionAndMeta) {
        return;
      }
      if (this._geohashLayer) {
        this._opensearchDashboardsMap.removeLayer(this._geohashLayer);
        this._geohashLayer = null;
      }
      if (!geojsonFeatureCollectionAndMeta) {
        this._geoJsonFeatureCollectionAndMeta = null;
        this._opensearchDashboardsMap.removeLayer(this._geohashLayer);
        this._geohashLayer = null;
        return;
      }
      if (!this._geoJsonFeatureCollectionAndMeta || !geojsonFeatureCollectionAndMeta.featureCollection.features.length) {
        this._geoJsonFeatureCollectionAndMeta = geojsonFeatureCollectionAndMeta;
        this.updateGeohashAgg();
      }
      this._geoJsonFeatureCollectionAndMeta = geojsonFeatureCollectionAndMeta;
      this._recreateGeohashLayer();
    }
    async _recreateGeohashLayer() {
      const {
        GeohashLayer
      } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./geohash_layer */ "./public/geohash_layer.js"));
      if (this._geohashLayer) {
        this._opensearchDashboardsMap.removeLayer(this._geohashLayer);
        this._geohashLayer = null;
      }
      const geohashOptions = this._getGeohashOptions();
      this._geohashLayer = new GeohashLayer(this._geoJsonFeatureCollectionAndMeta.featureCollection, this._geoJsonFeatureCollectionAndMeta.meta, geohashOptions, this._opensearchDashboardsMap.getZoomLevel(), this._opensearchDashboardsMap, (await Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["lazyLoadMapsLegacyModules"])()).L);
      this._opensearchDashboardsMap.addLayer(this._geohashLayer);
    }
    async _updateParams() {
      await super._updateParams();
      this._opensearchDashboardsMap.setDesaturateBaseLayer(this._params.isDesaturated);

      //avoid recreating the leaflet layer when there are option-changes that do not effect the representation
      //e.g. tooltip-visibility, legend position, basemap-desaturation, ...
      const geohashOptions = this._getGeohashOptions();
      if (!this._geohashLayer || !this._geohashLayer.isReusable(geohashOptions)) {
        if (this._geoJsonFeatureCollectionAndMeta) {
          this._recreateGeohashLayer();
        }
        this._updateData(this._geoJsonFeatureCollectionAndMeta);
      }
    }
    _getGeohashOptions() {
      const newParams = this._getMapsParams();
      const metricDimension = this._params.dimensions.metric;
      const metricLabel = metricDimension ? metricDimension.label : '';
      const metricFormat = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getFormatService"])().deserialize(metricDimension && metricDimension.format);
      return {
        label: metricLabel,
        valueFormatter: this._geoJsonFeatureCollectionAndMeta ? metricFormat.getConverterFor('text') : null,
        tooltipFormatter: this._geoJsonFeatureCollectionAndMeta ? this._tooltipFormatter.bind(null, metricLabel, metricFormat.getConverterFor('text')) : null,
        mapType: newParams.mapType,
        isFilteredByCollar: this._isFilteredByCollar(),
        colorRamp: newParams.colorSchema,
        heatmap: {
          heatClusterSize: newParams.heatClusterSize
        }
      };
    }
    addSpatialFilter(agg, filterName, filterData) {
      if (!agg) {
        return;
      }
      const indexPatternName = agg.indexPatternId;
      const field = agg.aggConfigParams.field;
      const filter = {
        meta: {
          negate: false,
          index: indexPatternName
        }
      };
      filter[filterName] = {
        ignore_unmapped: true
      };
      filter[filterName][field] = filterData;
      const {
        filterManager
      } = Object(_services__WEBPACK_IMPORTED_MODULE_1__["getQueryService"])();
      filterManager.addFilters([filter]);
      this.vis.updateState();
    }
    _getGeoHashAgg() {
      return this._geoJsonFeatureCollectionAndMeta && this._geoJsonFeatureCollectionAndMeta.meta.geohash;
    }
    _isFilteredByCollar() {
      const DEFAULT = false;
      const agg = this._getGeoHashAgg();
      if (agg) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(agg, 'aggConfigParams.isFilteredByCollar', DEFAULT);
      } else {
        return DEFAULT;
      }
    }
  };
};

/***/ }),

/***/ "./public/tooltip_formatter.js":
/*!*************************************!*\
  !*** ./public/tooltip_formatter.js ***!
  \*************************************/
/*! exports provided: tooltipFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltipFormatter", function() { return tooltipFormatter; });
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


function tooltipFormatter(metricTitle, metricFormat, feature) {
  if (!feature) {
    return '';
  }
  return [{
    label: metricTitle,
    value: metricFormat(feature.properties.value)
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('tileMap.tooltipFormatter.latitudeLabel', {
      defaultMessage: 'Latitude'
    }),
    value: feature.geometry.coordinates[1]
  }, {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('tileMap.tooltipFormatter.longitudeLabel', {
      defaultMessage: 'Longitude'
    }),
    value: feature.geometry.coordinates[0]
  }];
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

/***/ "plugin/mapsLegacy/public":
/*!*************************************************!*\
  !*** @osd/bundleRef "plugin/mapsLegacy/public" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/mapsLegacy/public');
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

/***/ "react":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.React;

/***/ })

/******/ });
//# sourceMappingURL=tileMap.plugin.js.map