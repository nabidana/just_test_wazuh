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
/******/ 		"visTypeTagcloud": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeTagcloud.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["visTypeTagcloud_bundle_jsonpfunction"] = window["visTypeTagcloud_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTagcloud!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeTagcloud!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeTagcloud']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTagcloud_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeTagcloud!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTagcloud!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTagcloud_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeTagcloud_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeTagcloud/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_tagcloud/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/components/tag_cloud_options.tsx":
/*!*************************************************!*\
  !*** ./public/components/tag_cloud_options.tsx ***!
  \*************************************************/
/*! exports provided: TagCloudOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagCloudOptions", function() { return TagCloudOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
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






function TagCloudOptions({
  stateParams,
  setValue,
  vis
}) {
  const handleFontSizeChange = ([minFontSize, maxFontSize]) => {
    setValue('minFontSize', Number(minFontSize));
    setValue('maxFontSize', Number(maxFontSize));
  };
  const fontSizeRangeLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeTagCloud.visParams.fontSizeLabel', {
    defaultMessage: 'Font size range in pixels'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeTagCloud.visParams.textScaleLabel', {
      defaultMessage: 'Text scale'
    }),
    options: vis.type.editorConfig.collections.scales,
    paramName: "scale",
    value: stateParams.scale,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeTagCloud.visParams.orientationsLabel', {
      defaultMessage: 'Orientations'
    }),
    options: vis.type.editorConfig.collections.orientations,
    paramName: "orientation",
    value: stateParams.orientation,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["ValidatedDualRange"], {
    allowEmptyRange: false,
    "aria-label": fontSizeRangeLabel,
    formRowDisplay: 'rowCompressed',
    fullWidth: true,
    label: fontSizeRangeLabel,
    max: 100,
    min: 1,
    value: [stateParams.minFontSize, stateParams.maxFontSize],
    onChange: handleFontSizeChange,
    showInput: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_4__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('visTypeTagCloud.visParams.showLabelToggleLabel', {
      defaultMessage: 'Show label'
    }),
    paramName: "showLabel",
    value: stateParams.showLabel,
    setValue: setValue
  }));
}


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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["TagCloudPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: TagCloudPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagCloudPlugin", function() { return TagCloudPlugin; });
/* harmony import */ var _tag_cloud_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag_cloud_fn */ "./public/tag_cloud_fn.ts");
/* harmony import */ var _tag_cloud_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag_cloud_type */ "./public/tag_cloud_type.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _tag_cloud_vis_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag_cloud_vis_renderer */ "./public/tag_cloud_vis_renderer.tsx");
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

/** @internal */
class TagCloudPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "initializerContext", void 0);
    this.initializerContext = initializerContext;
  }
  setup(core, {
    expressions,
    visualizations,
    charts
  }) {
    const visualizationDependencies = {
      colors: charts.colors
    };
    expressions.registerFunction(_tag_cloud_fn__WEBPACK_IMPORTED_MODULE_0__["createTagCloudFn"]);
    expressions.registerRenderer(Object(_tag_cloud_vis_renderer__WEBPACK_IMPORTED_MODULE_3__["getTagCloudVisRenderer"])(visualizationDependencies));
    visualizations.createBaseVisualization(_tag_cloud_type__WEBPACK_IMPORTED_MODULE_1__["tagCloudVisTypeDefinition"]);
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


const [getFormatService, setFormatService] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('data.fieldFormats');

/***/ }),

/***/ "./public/tag_cloud_fn.ts":
/*!********************************!*\
  !*** ./public/tag_cloud_fn.ts ***!
  \********************************/
/*! exports provided: createTagCloudFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTagCloudFn", function() { return createTagCloudFn; });
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


const name = 'tagcloud';
const createTagCloudFn = () => ({
  name,
  type: 'render',
  inputTypes: ['opensearch_dashboards_datatable'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.function.help', {
    defaultMessage: 'Tagcloud visualization'
  }),
  args: {
    scale: {
      types: ['string'],
      default: 'linear',
      options: ['linear', 'log', 'square root'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.function.scale.help', {
        defaultMessage: 'Scale to determine font size of a word'
      })
    },
    orientation: {
      types: ['string'],
      default: 'single',
      options: ['single', 'right angled', 'multiple'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.function.orientation.help', {
        defaultMessage: 'Orientation of words inside tagcloud'
      })
    },
    minFontSize: {
      types: ['number'],
      default: 18,
      help: ''
    },
    maxFontSize: {
      types: ['number'],
      default: 72,
      help: ''
    },
    showLabel: {
      types: ['boolean'],
      default: true,
      help: ''
    },
    metric: {
      types: ['vis_dimension'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.function.metric.help', {
        defaultMessage: 'metric dimension configuration'
      }),
      required: true
    },
    bucket: {
      types: ['vis_dimension'],
      help: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.function.bucket.help', {
        defaultMessage: 'bucket dimension configuration'
      })
    }
  },
  fn(input, args) {
    const visParams = {
      scale: args.scale,
      orientation: args.orientation,
      minFontSize: args.minFontSize,
      maxFontSize: args.maxFontSize,
      showLabel: args.showLabel,
      metric: args.metric
    };
    if (args.bucket !== undefined) {
      visParams.bucket = args.bucket;
    }
    return {
      type: 'render',
      as: 'tagloud_vis',
      value: {
        visData: input,
        visType: name,
        visParams
      }
    };
  }
});

/***/ }),

/***/ "./public/tag_cloud_type.ts":
/*!**********************************!*\
  !*** ./public/tag_cloud_type.ts ***!
  \**********************************/
/*! exports provided: tagCloudVisTypeDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagCloudVisTypeDefinition", function() { return tagCloudVisTypeDefinition; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tag_cloud_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tag_cloud_options */ "./public/components/tag_cloud_options.tsx");
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
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






const tagCloudVisTypeDefinition = {
  name: 'tagcloud',
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.tagCloudTitle', {
    defaultMessage: 'Tag Cloud'
  }),
  icon: 'visTagCloud',
  getSupportedTriggers: () => {
    return [_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["VIS_EVENT_TO_TRIGGER"].filter];
  },
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.tagCloudDescription', {
    defaultMessage: 'A group of words, sized according to their importance'
  }),
  visConfig: {
    defaults: {
      scale: 'linear',
      orientation: 'single',
      minFontSize: 18,
      maxFontSize: 72,
      showLabel: true
    }
  },
  toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_4__["toExpressionAst"],
  editorConfig: {
    collections: {
      scales: [{
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.scales.linearText', {
          defaultMessage: 'Linear'
        }),
        value: 'linear'
      }, {
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.scales.logText', {
          defaultMessage: 'Log'
        }),
        value: 'log'
      }, {
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.scales.squareRootText', {
          defaultMessage: 'Square root'
        }),
        value: 'square root'
      }],
      orientations: [{
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.orientations.singleText', {
          defaultMessage: 'Single'
        }),
        value: 'single'
      }, {
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.orientations.rightAngledText', {
          defaultMessage: 'Right angled'
        }),
        value: 'right angled'
      }, {
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.editorConfig.orientations.multipleText', {
          defaultMessage: 'Multiple'
        }),
        value: 'multiple'
      }]
    },
    optionsTemplate: _components_tag_cloud_options__WEBPACK_IMPORTED_MODULE_3__["TagCloudOptions"],
    schemas: new _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_1__["Schemas"]([{
      group: 'metrics',
      name: 'metric',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.schemas.metricTitle', {
        defaultMessage: 'Tag size'
      }),
      min: 1,
      max: 1,
      aggFilter: ['!std_dev', '!percentiles', '!percentile_ranks', '!derivative', '!geo_bounds', '!geo_centroid'],
      defaults: [{
        schema: 'metric',
        type: 'count'
      }]
    }, {
      group: 'buckets',
      name: 'segment',
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTagCloud.vis.schemas.segmentTitle', {
        defaultMessage: 'Tags'
      }),
      min: 1,
      max: 1,
      aggFilter: ['terms', 'significant_terms']
    }])
  }
};

/***/ }),

/***/ "./public/tag_cloud_vis_renderer.tsx":
/*!*******************************************!*\
  !*** ./public/tag_cloud_vis_renderer.tsx ***!
  \*******************************************/
/*! exports provided: getTagCloudVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagCloudVisRenderer", function() { return getTagCloudVisRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_2__);
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




const TagCloudChart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./components/tag_cloud_chart */ "./public/components/tag_cloud_chart.tsx")));
const getTagCloudVisRenderer = ({
  colors
}) => ({
  name: 'tagloud_vis',
  displayName: 'Tag Cloud visualization',
  reuseDomNode: true,
  render: async (domNode, config, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_visualizations_public__WEBPACK_IMPORTED_MODULE_2__["VisualizationContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TagCloudChart, _extends({}, config, {
      colors: colors,
      renderComplete: handlers.done,
      fireEvent: handlers.event
    }))), domNode);
  }
});

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
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../expressions/public */ "plugin/expressions/public");
/* harmony import */ var _expressions_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_expressions_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_1__);
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
  const visdimension = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('visdimension', {
    accessor: params.accessor
  });
  if (params.format) {
    visdimension.addArgument('format', params.format.id);
    visdimension.addArgument('formatParams', JSON.stringify(params.format.params));
  }
  return Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([visdimension]);
};
const toExpressionAst = (vis, params) => {
  const opensearchaggs = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('opensearchaggs', {
    index: vis.data.indexPattern.id,
    metricsAtAllLevels: vis.isHierarchical(),
    partialRows: false,
    aggConfigs: JSON.stringify(vis.data.aggs.aggs),
    includeFormatHints: false
  });
  const schemas = Object(_visualizations_public__WEBPACK_IMPORTED_MODULE_1__["getVisSchemas"])(vis, params);
  const {
    scale,
    orientation,
    minFontSize,
    maxFontSize,
    showLabel
  } = vis.params;
  const tagcloud = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('tagcloud', {
    scale,
    orientation,
    minFontSize,
    maxFontSize,
    showLabel,
    metric: prepareDimension(schemas.metric[0])
  });
  if (schemas.segment) {
    tagcloud.addArgument('bucket', prepareDimension(schemas.segment[0]));
  }
  const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([opensearchaggs, tagcloud]);
  return ast.toAst();
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
//# sourceMappingURL=visTypeTagcloud.plugin.js.map