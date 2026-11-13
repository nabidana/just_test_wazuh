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
/******/ 		"opensearchDashboardsLegacy": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "opensearchDashboardsLegacy.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["opensearchDashboardsLegacy_bundle_jsonpfunction"] = window["opensearchDashboardsLegacy_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsLegacy!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsLegacy!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['opensearchDashboardsLegacy']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsLegacy!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=opensearchDashboardsLegacy!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_opensearchDashboardsLegacy_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/opensearchDashboardsLegacy/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/opensearch_dashboards_legacy/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/dashboard_config.ts":
/*!************************************!*\
  !*** ./public/dashboard_config.ts ***!
  \************************************/
/*! exports provided: getDashboardConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboardConfig", function() { return getDashboardConfig; });
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

function getDashboardConfig(hideWriteControls) {
  let _hideWriteControls = hideWriteControls;
  return {
    /**
     * Part of the exposed plugin API - do not remove without careful consideration.
     * @type {boolean}
     */
    turnHideWriteControlsOn() {
      _hideWriteControls = true;
    },
    getHideWriteControls() {
      return _hideWriteControls;
    }
  };
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, OpenSearchDashboardsLegacyPlugin, ToastNotifications, formatOpenSearchMsg, formatMsg, formatStack, addFatalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsLegacyPlugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["OpenSearchDashboardsLegacyPlugin"]; });

/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "./public/notify/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastNotifications", function() { return _notify__WEBPACK_IMPORTED_MODULE_1__["ToastNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOpenSearchMsg", function() { return _notify__WEBPACK_IMPORTED_MODULE_1__["formatOpenSearchMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMsg", function() { return _notify__WEBPACK_IMPORTED_MODULE_1__["formatMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatStack", function() { return _notify__WEBPACK_IMPORTED_MODULE_1__["formatStack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFatalError", function() { return _notify__WEBPACK_IMPORTED_MODULE_1__["addFatalError"]; });

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


const plugin = initializerContext => new _plugin__WEBPACK_IMPORTED_MODULE_0__["OpenSearchDashboardsLegacyPlugin"](initializerContext);



/***/ }),

/***/ "./public/notify/index.ts":
/*!********************************!*\
  !*** ./public/notify/index.ts ***!
  \********************************/
/*! exports provided: ToastNotifications, formatOpenSearchMsg, formatMsg, formatStack, addFatalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts */ "./public/notify/toasts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastNotifications", function() { return _toasts__WEBPACK_IMPORTED_MODULE_0__["ToastNotifications"]; });

/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./public/notify/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOpenSearchMsg", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["formatOpenSearchMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMsg", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["formatMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatStack", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["formatStack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFatalError", function() { return _lib__WEBPACK_IMPORTED_MODULE_1__["addFatalError"]; });

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

/***/ "./public/notify/lib/add_fatal_error.ts":
/*!**********************************************!*\
  !*** ./public/notify/lib/add_fatal_error.ts ***!
  \**********************************************/
/*! exports provided: addFatalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFatalError", function() { return addFatalError; });
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
 * Adds an error to the list of fatal errors.
 * @deprecated Use `core.fatalErrors.add` instead
 */
function addFatalError(fatalErrors, error, location) {
  fatalErrors.add(error, location);
}

/***/ }),

/***/ "./public/notify/lib/format_msg.ts":
/*!*****************************************!*\
  !*** ./public/notify/lib/format_msg.ts ***!
  \*****************************************/
/*! exports provided: formatMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMsg", function() { return formatMsg; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _format_opensearch_msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format_opensearch_msg */ "./public/notify/lib/format_opensearch_msg.ts");
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




const has = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has;

/**
 * Formats the error message from an error object, extended opensearch
 * object or simple string; prepends optional second parameter to the message
 * @param  {Error|String} err
 * @param  {String} source - Prefix for message indicating source (optional)
 * @returns {string}
 */
function formatMsg(err, source = '') {
  let message = '';
  if (source) {
    message += source + ': ';
  }
  const opensearchMsg = Object(_format_opensearch_msg__WEBPACK_IMPORTED_MODULE_2__["formatOpenSearchMsg"])(err);
  if (typeof err === 'string') {
    message += err;
  } else if (opensearchMsg) {
    message += opensearchMsg;
  } else if (err instanceof Error) {
    message += formatMsg.describeError(err);
  } else if (has(err, 'status') && has(err, 'data')) {
    // is an Angular $http "error object"
    if (err.status === -1) {
      // status = -1 indicates that the request was failed to reach the server
      message += _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('opensearch_dashboards_legacy.notify.toaster.unavailableServerErrorMessage', {
        defaultMessage: 'An HTTP request has failed to connect. ' + 'Please check if the OpenSearch Dashboards server is running and that your browser has a working connection, ' + 'or contact your system administrator.'
      });
    } else {
      message += _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('opensearch_dashboards_legacy.notify.toaster.errorStatusMessage', {
        defaultMessage: 'Error {errStatus} {errStatusText}: {errMessage}',
        values: {
          errStatus: err.status,
          errStatusText: err.statusText,
          errMessage: err.data.message
        }
      });
    }
  }
  return message;
}
formatMsg.describeError = function (err) {
  if (!err) return undefined;
  if (err.shortMessage) return err.shortMessage;
  if (err.body && err.body.message) return err.body.message;
  if (err.message) return err.message;
  return '' + err;
};

/***/ }),

/***/ "./public/notify/lib/format_opensearch_msg.ts":
/*!****************************************************!*\
  !*** ./public/notify/lib/format_opensearch_msg.ts ***!
  \****************************************************/
/*! exports provided: formatOpenSearchMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatOpenSearchMsg", function() { return formatOpenSearchMsg; });
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


const getRootCause = err => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(err, 'resp.error.root_cause');

/**
 * Utilize the extended error information returned from opensearch
 * @param  {Error|String} err
 * @returns {string}
 */
const formatOpenSearchMsg = err => {
  const rootCause = getRootCause(err);
  if (!Array.isArray(rootCause)) {
    return;
  }
  return rootCause.map(cause => cause.reason).join('\n');
};

/***/ }),

/***/ "./public/notify/lib/format_stack.ts":
/*!*******************************************!*\
  !*** ./public/notify/lib/format_stack.ts ***!
  \*******************************************/
/*! exports provided: formatStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatStack", function() { return formatStack; });
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



// browsers format Error.stack differently; always include message
function formatStack(err) {
  if (err.stack && err.stack.indexOf(err.message) === -1) {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('opensearch_dashboards_legacy.notify.toaster.errorMessage', {
      defaultMessage: `Error: {errorMessage}
      {errorStack}`,
      values: {
        errorMessage: err.message,
        errorStack: err.stack
      }
    });
  }
  return err.stack;
}

/***/ }),

/***/ "./public/notify/lib/index.ts":
/*!************************************!*\
  !*** ./public/notify/lib/index.ts ***!
  \************************************/
/*! exports provided: formatOpenSearchMsg, formatMsg, formatStack, addFatalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_opensearch_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format_opensearch_msg */ "./public/notify/lib/format_opensearch_msg.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatOpenSearchMsg", function() { return _format_opensearch_msg__WEBPACK_IMPORTED_MODULE_0__["formatOpenSearchMsg"]; });

/* harmony import */ var _format_msg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format_msg */ "./public/notify/lib/format_msg.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatMsg", function() { return _format_msg__WEBPACK_IMPORTED_MODULE_1__["formatMsg"]; });

/* harmony import */ var _format_stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format_stack */ "./public/notify/lib/format_stack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatStack", function() { return _format_stack__WEBPACK_IMPORTED_MODULE_2__["formatStack"]; });

/* harmony import */ var _add_fatal_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add_fatal_error */ "./public/notify/lib/add_fatal_error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFatalError", function() { return _add_fatal_error__WEBPACK_IMPORTED_MODULE_3__["addFatalError"]; });

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

/***/ "./public/notify/toasts/index.ts":
/*!***************************************!*\
  !*** ./public/notify/toasts/index.ts ***!
  \***************************************/
/*! exports provided: ToastNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast_notifications */ "./public/notify/toasts/toast_notifications.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastNotifications", function() { return _toast_notifications__WEBPACK_IMPORTED_MODULE_0__["ToastNotifications"]; });

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

/***/ "./public/notify/toasts/toast_notifications.ts":
/*!*****************************************************!*\
  !*** ./public/notify/toasts/toast_notifications.ts ***!
  \*****************************************************/
/*! exports provided: ToastNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotifications", function() { return ToastNotifications; });
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

class ToastNotifications {
  constructor(toasts) {
    this.toasts = toasts;
    _defineProperty(this, "list", []);
    _defineProperty(this, "onChangeCallback", void 0);
    _defineProperty(this, "onChange", callback => {
      this.onChangeCallback = callback;
    });
    _defineProperty(this, "add", toastOrTitle => this.toasts.add(toastOrTitle));
    _defineProperty(this, "remove", toast => this.toasts.remove(toast));
    _defineProperty(this, "addSuccess", toastOrTitle => this.toasts.addSuccess(toastOrTitle));
    _defineProperty(this, "addWarning", toastOrTitle => this.toasts.addWarning(toastOrTitle));
    _defineProperty(this, "addDanger", toastOrTitle => this.toasts.addDanger(toastOrTitle));
    _defineProperty(this, "addError", (error, options) => this.toasts.addError(error, options));
    toasts.get$().subscribe(list => {
      this.list = list;
      if (this.onChangeCallback) {
        this.onChangeCallback();
      }
    });
  }
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: OpenSearchDashboardsLegacyPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchDashboardsLegacyPlugin", function() { return OpenSearchDashboardsLegacyPlugin; });
/* harmony import */ var _dashboard_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard_config */ "./public/dashboard_config.ts");
/* harmony import */ var _utils_inject_header_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/inject_header_style */ "./public/utils/inject_header_style.ts");
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



class OpenSearchDashboardsLegacyPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
  }
  setup(core) {
    return {};
  }
  start({
    application,
    http: {
      basePath
    },
    uiSettings
  }) {
    var _application$capabili;
    Object(_utils_inject_header_style__WEBPACK_IMPORTED_MODULE_1__["injectHeaderStyle"])(uiSettings);
    return {
      /**
       * Used to power dashboard mode. Should be removed when dashboard mode is removed eventually.
       * @deprecated
       */
      dashboardConfig: Object(_dashboard_config__WEBPACK_IMPORTED_MODULE_0__["getDashboardConfig"])(!((_application$capabili = application.capabilities) !== null && _application$capabili !== void 0 && (_application$capabili = _application$capabili.dashboard) !== null && _application$capabili !== void 0 && _application$capabili.showWriteControls)),
      /**
       * Loads the font-awesome icon font. Should be removed once the last consumer has migrated to EUI
       * @deprecated
       */
      loadFontAwesome: async () => {
        await Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./font_awesome */ "./public/font_awesome/index.ts"));
      },
      /**
       * @deprecated
       * Just exported for wiring up with dashboard mode, should not be used.
       */
      config: this.initializerContext.config.get()
    };
  }
}

/***/ }),

/***/ "./public/utils/inject_header_style.ts":
/*!*********************************************!*\
  !*** ./public/utils/inject_header_style.ts ***!
  \*********************************************/
/*! exports provided: buildCSS, injectHeaderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCSS", function() { return buildCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectHeaderStyle", function() { return injectHeaderStyle; });
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

function buildCSS(maxHeight = 0, truncateGradientHeight = 15) {
  return `
.truncate-by-height {
  max-height: ${maxHeight > 0 ? `${maxHeight}px !important` : 'none'};
  display: inline-block;
}
.truncate-by-height:before {
  top:  ${maxHeight > 0 ? maxHeight - truncateGradientHeight : truncateGradientHeight * -1}px;
}
`;
}
function injectHeaderStyle(uiSettings) {
  const style = document.createElement('style');
  style.setAttribute('id', 'style-compile');
  document.getElementsByTagName('head')[0].appendChild(style);
  uiSettings.get$('truncate:maxHeight').subscribe(value => {
    // eslint-disable-next-line no-unsanitized/property
    style.innerHTML = buildCSS(value);
  });
}

/***/ }),

/***/ "@osd/i18n":
/*!********************************************!*\
  !*** external "__osdSharedDeps__.OsdI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdI18n;

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

/***/ })

/******/ });
//# sourceMappingURL=opensearchDashboardsLegacy.plugin.js.map