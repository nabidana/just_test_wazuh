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
/******/ 		"advancedSettings": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "advancedSettings.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["advancedSettings_bundle_jsonpfunction"] = window["advancedSettings_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=advancedSettings!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=advancedSettings!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['advancedSettings']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_advancedSettings_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=advancedSettings!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=advancedSettings!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_advancedSettings_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_advancedSettings_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/advancedSettings/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/advanced_settings/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/component_registry/component_registry.ts":
/*!*********************************************************!*\
  !*** ./public/component_registry/component_registry.ts ***!
  \*********************************************************/
/*! exports provided: ComponentRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return ComponentRegistry; });
/* harmony import */ var _page_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_title */ "./public/component_registry/page_title/index.ts");
/* harmony import */ var _page_subtitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_subtitle */ "./public/component_registry/page_subtitle/index.ts");
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_footer */ "./public/component_registry/page_footer/index.ts");
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




const componentType = {
  PAGE_TITLE_COMPONENT: 'advanced_settings_page_title',
  PAGE_SUBTITLE_COMPONENT: 'advanced_settings_page_subtitle',
  PAGE_FOOTER_COMPONENT: 'advanced_settings_page_footer'
};
class ComponentRegistry {
  constructor() {
    _defineProperty(this, "registry", {});
    _defineProperty(this, "setup", {
      componentType: ComponentRegistry.componentType,
      register: this.register.bind(this)
    });
    _defineProperty(this, "start", {
      componentType: ComponentRegistry.componentType,
      get: this.get.bind(this)
    });
  }
  /**
   * Attempts to register the provided component, with the ability to optionally allow
   * the component to override an existing one.
   *
   * If the intent is to override, then `allowOverride` must be set to true, otherwise an exception is thrown.
   *
   * @param {*} id the id of the component to register
   * @param {*} component the component
   * @param {*} allowOverride (default: false) - optional flag to allow this component to override a previously registered component
   */
  register(id, component, allowOverride = false) {
    if (!allowOverride && id in this.registry) {
      throw new Error(`Component with id ${id} is already registered.`);
    }

    // Setting a display name if one does not already exist.
    // This enhances the snapshots, as well as the debugging experience.
    if (!component.displayName) {
      component.displayName = id;
    }
    this.registry[id] = component;
  }

  /**
   * Retrieve a registered component by its ID.
   * If the component does not exist, then an exception is thrown.
   *
   * @param {*} id the ID of the component to retrieve
   */
  get(id) {
    return this.registry[id] || ComponentRegistry.defaultRegistry[id];
  }
}
_defineProperty(ComponentRegistry, "componentType", componentType);
_defineProperty(ComponentRegistry, "defaultRegistry", {
  advanced_settings_page_title: _page_title__WEBPACK_IMPORTED_MODULE_0__["PageTitle"],
  advanced_settings_page_subtitle: _page_subtitle__WEBPACK_IMPORTED_MODULE_1__["PageSubtitle"],
  advanced_settings_page_footer: _page_footer__WEBPACK_IMPORTED_MODULE_2__["PageFooter"]
});

/***/ }),

/***/ "./public/component_registry/index.ts":
/*!********************************************!*\
  !*** ./public/component_registry/index.ts ***!
  \********************************************/
/*! exports provided: ComponentRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component_registry */ "./public/component_registry/component_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return _component_registry__WEBPACK_IMPORTED_MODULE_0__["ComponentRegistry"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/component_registry/page_footer/index.ts":
/*!********************************************************!*\
  !*** ./public/component_registry/page_footer/index.ts ***!
  \********************************************************/
/*! exports provided: PageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_footer */ "./public/component_registry/page_footer/page_footer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageFooter", function() { return _page_footer__WEBPACK_IMPORTED_MODULE_0__["PageFooter"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/component_registry/page_footer/page_footer.ts":
/*!**************************************************************!*\
  !*** ./public/component_registry/page_footer/page_footer.ts ***!
  \**************************************************************/
/*! exports provided: PageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooter", function() { return PageFooter; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const PageFooter = () => null;

/***/ }),

/***/ "./public/component_registry/page_subtitle/index.ts":
/*!**********************************************************!*\
  !*** ./public/component_registry/page_subtitle/index.ts ***!
  \**********************************************************/
/*! exports provided: PageSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_subtitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_subtitle */ "./public/component_registry/page_subtitle/page_subtitle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSubtitle", function() { return _page_subtitle__WEBPACK_IMPORTED_MODULE_0__["PageSubtitle"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/component_registry/page_subtitle/page_subtitle.ts":
/*!******************************************************************!*\
  !*** ./public/component_registry/page_subtitle/page_subtitle.ts ***!
  \******************************************************************/
/*! exports provided: PageSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSubtitle", function() { return PageSubtitle; });
/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const PageSubtitle = () => null;

/***/ }),

/***/ "./public/component_registry/page_title/index.ts":
/*!*******************************************************!*\
  !*** ./public/component_registry/page_title/index.ts ***!
  \*******************************************************/
/*! exports provided: PageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_title */ "./public/component_registry/page_title/page_title.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return _page_title__WEBPACK_IMPORTED_MODULE_0__["PageTitle"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "./public/component_registry/page_title/page_title.tsx":
/*!*************************************************************!*\
  !*** ./public/component_registry/page_title/page_title.tsx ***!
  \*************************************************************/
/*! exports provided: PageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
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




const PageTitle = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    "data-test-subj": "managementSettingsTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "advancedSettings.pageTitle",
    defaultMessage: "Settings"
  })));
};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: AdvancedSettingsSetup, AdvancedSettingsStart, ComponentRegistry, LazyField, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyField", function() { return LazyField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedSettingsSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["AdvancedSettingsSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedSettingsStart", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["AdvancedSettingsStart"]; });

/* harmony import */ var _component_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component_registry */ "./public/component_registry/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return _component_registry__WEBPACK_IMPORTED_MODULE_3__["ComponentRegistry"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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
 * Exports the field component as a React.lazy component. We're explicitly naming it lazy here
 * so any plugin that would import that can clearly see it's lazy loaded and can only be used
 * inside a suspense context.
 */
const LazyField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./management_app/components/field */ "./public/management_app/components/field/index.ts")));

function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_1__["AdvancedSettingsPlugin"]();
}

/***/ }),

/***/ "./public/management_app/user_settings.tsx":
/*!*************************************************!*\
  !*** ./public/management_app/user_settings.tsx ***!
  \*************************************************/
/*! exports provided: setupUserSettingsPage, UserSettingsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupUserSettingsPage", function() { return setupUserSettingsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsApp", function() { return UserSettingsApp; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const sectionRender = contents => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, contents.map(content => {
    if (content.kind === 'custom') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        key: content.id
      }, content.render());
    }
    return null;
  }));
};
const setupUserSettingsPage = contentManagement => {
  contentManagement === null || contentManagement === void 0 || contentManagement.registerPage({
    id: 'user_settings',
    title: 'User Settings',
    sections: [{
      id: 'user_profile',
      order: 1000,
      title: `User's profile`,
      kind: 'custom',
      render: sectionRender
    }, {
      id: 'default_workspace',
      order: 2000,
      kind: 'custom',
      render: sectionRender
    }, {
      id: 'user_identity_role',
      order: 3000,
      kind: 'custom',
      render: sectionRender
    }]
  });
};
const UserSettingsApp = () => {
  const {
    services: {
      contentManagement,
      application,
      chrome,
      navigation: {
        ui: {
          HeaderControl
        }
      }
    }
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const breadcrumbs = [{
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('advancedSettings.userSettingsLabel', {
        defaultMessage: 'User settings'
      })
    }];
    chrome.setBreadcrumbs(breadcrumbs);
  }, [chrome]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPage"], {
    paddingSize: "m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderControl, {
    controls: [{
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('advancedSettings.userSettings.description', {
        defaultMessage: 'Configure your personal preferences.'
      })
    }],
    setMountPoint: application.setAppDescriptionControls
  }), contentManagement ? contentManagement.renderPage('user_settings', {
    fragmentOnly: true
  }) : null);
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: AdvancedSettingsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSettingsPlugin", function() { return AdvancedSettingsPlugin; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/public */ "plugin/home/public");
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component_registry */ "./public/component_registry/index.ts");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _management_app_user_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management_app/user_settings */ "./public/management_app/user_settings.tsx");
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








const component = new _component_registry__WEBPACK_IMPORTED_MODULE_3__["ComponentRegistry"]();
const title = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.advancedSettingsLabel', {
  defaultMessage: 'Advanced settings'
});
const titleInGroup = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.applicationSettingsLabel', {
  defaultMessage: 'Application settings'
});
const USER_SETTINGS_APPID = 'user_settings';
class AdvancedSettingsPlugin {
  constructor() {
    _defineProperty(this, "appUpdater$", new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](() => undefined));
  }
  setup(core, {
    management,
    home,
    contentManagement: contentManagementSetup
  }) {
    const opensearchDashboardsSection = management.sections.section.opensearchDashboards;
    opensearchDashboardsSection.registerApp({
      id: 'settings',
      title,
      order: 3,
      async mount(params) {
        const {
          mountManagementSection
        } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./management_app/mount_management_section */ "./public/management_app/mount_management_section.tsx"));
        return mountManagementSection(core.getStartServices, params, component.start);
      }
    });
    core.application.register({
      id: 'settings',
      title,
      navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
      workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].outsideWorkspace,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.description', {
        defaultMessage: 'Customize the appearance and behavior of OpenSearch Dashboards.'
      }),
      mount: async params => {
        const {
          mountManagementSection
        } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./management_app/mount_management_section */ "./public/management_app/mount_management_section.tsx"));
        const [coreStart] = await core.getStartServices();
        return mountManagementSection(core.getStartServices, {
          ...params,
          basePath: core.http.basePath.get(),
          setBreadcrumbs: breadCrumbs => coreStart.chrome.setBreadcrumbs(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["getScopedBreadcrumbs"])(breadCrumbs, params.history)),
          wrapInPage: true
        }, component.start);
      }
    });
    core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"].settingsAndSetup, [{
      id: 'settings',
      title: titleInGroup,
      order: 100
    }]);
    if (core.chrome.navGroup.getNavGroupEnabled()) {
      Object(_management_app_user_settings__WEBPACK_IMPORTED_MODULE_6__["setupUserSettingsPage"])(contentManagementSetup);
      const userSettingTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.userSettingsLabel', {
        defaultMessage: 'User settings'
      });
      core.application.register({
        id: USER_SETTINGS_APPID,
        title: userSettingTitle,
        updater$: this.appUpdater$,
        navLinkStatus: core.chrome.navGroup.getNavGroupEnabled() ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden,
        workspaceAvailability: _core_public__WEBPACK_IMPORTED_MODULE_4__["WorkspaceAvailability"].outsideWorkspace,
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.userSettings.description', {
          defaultMessage: 'Configure your personal preferences.'
        }),
        mount: async params => {
          const {
            renderUserSettingsApp
          } = await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./management_app/mount_management_section */ "./public/management_app/mount_management_section.tsx"));
          const [coreStart, {
            contentManagement,
            navigation
          }] = await core.getStartServices();
          return renderUserSettingsApp(params, {
            ...coreStart,
            contentManagement,
            navigation
          });
        }
      });
      core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_NAV_GROUPS"].settingsAndSetup, [{
        id: USER_SETTINGS_APPID,
        order: 101 // just right after application settings which order is 100
      }]);
    }

    if (home) {
      home.featureCatalogue.register({
        id: 'advanced_settings',
        title,
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.featureCatalogueTitle', {
          defaultMessage: 'Customize your OpenSearch Dashboards experience — change the date format, turn on dark mode, and more.'
        }),
        icon: 'gear',
        path: '/app/management/opensearch-dashboards/settings',
        showOnHomePage: false,
        category: _home_public__WEBPACK_IMPORTED_MODULE_2__["FeatureCatalogueCategory"].ADMIN
      });
    }
    return {
      component: component.setup
    };
  }
  start(core) {
    this.appUpdater$.next(app => {
      var _core$application$cap;
      const userSettingsEnabled = (_core$application$cap = core.application.capabilities.userSettings) === null || _core$application$cap === void 0 ? void 0 : _core$application$cap.enabled;
      if (app.id === USER_SETTINGS_APPID) {
        return {
          status: userSettingsEnabled ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].accessible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppStatus"].inaccessible,
          navLinkStatus: userSettingsEnabled ? _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].visible : _core_public__WEBPACK_IMPORTED_MODULE_4__["AppNavLinkStatus"].hidden
        };
      }
    });
    return {
      component: component.start
    };
  }
}

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: ComponentRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component_registry */ "./public/component_registry/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentRegistry", function() { return _component_registry__WEBPACK_IMPORTED_MODULE_0__["ComponentRegistry"]; });

/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
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

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

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

/***/ })

/******/ });
//# sourceMappingURL=advancedSettings.plugin.js.map