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
/******/ 		"visTypeTimeline": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "visTypeTimeline.chunk." + chunkId + ".js"
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
/******/ 	var jsonpArray = window["visTypeTimeline_bundle_jsonpfunction"] = window["visTypeTimeline_bundle_jsonpfunction"] || [];
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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeline!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=visTypeTimeline!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['visTypeTimeline']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTimeline_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeline!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=visTypeTimeline!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_visTypeTimeline_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeTimeline_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/visTypeTimeline/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/vis_type_timeline/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/lib/calculate_interval.ts":
/*!******************************************!*\
  !*** ./common/lib/calculate_interval.ts ***!
  \******************************************/
/*! exports provided: calculateInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateInterval", function() { return calculateInterval; });
/* harmony import */ var _to_milliseconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to_milliseconds */ "./common/lib/to_milliseconds.ts");
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

// Totally cribbed this from OpenSearch Dashboards 3.
// I bet there's something similar in the OpenSearch Dashboards 4 code. Somewhere. Somehow.

function roundInterval(interval) {
  switch (true) {
    case interval <= 500:
      // <= 0.5s
      return '100ms';
    case interval <= 5000:
      // <= 5s
      return '1s';
    case interval <= 7500:
      // <= 7.5s
      return '5s';
    case interval <= 15000:
      // <= 15s
      return '10s';
    case interval <= 45000:
      // <= 45s
      return '30s';
    case interval <= 180000:
      // <= 3m
      return '1m';
    case interval <= 450000:
      // <= 9m
      return '5m';
    case interval <= 1200000:
      // <= 20m
      return '10m';
    case interval <= 2700000:
      // <= 45m
      return '30m';
    case interval <= 7200000:
      // <= 2h
      return '1h';
    case interval <= 21600000:
      // <= 6h
      return '3h';
    case interval <= 86400000:
      // <= 24h
      return '12h';
    case interval <= 604800000:
      // <= 1w
      return '24h';
    case interval <= 1814400000:
      // <= 3w
      return '1w';
    case interval < 3628800000:
      // <  2y
      return '30d';
    default:
      return '1y';
  }
}
function calculateInterval(from, to, size, interval, min) {
  if (interval !== 'auto') {
    return interval;
  }
  const dateMathInterval = roundInterval((to - from) / size);
  const dateMathIntervalMs = Object(_to_milliseconds__WEBPACK_IMPORTED_MODULE_0__["toMS"])(dateMathInterval);
  const minMs = Object(_to_milliseconds__WEBPACK_IMPORTED_MODULE_0__["toMS"])(min);
  if (dateMathIntervalMs !== undefined && minMs !== undefined && dateMathIntervalMs < minMs) {
    return min;
  }
  return dateMathInterval;
}

/***/ }),

/***/ "./common/lib/index.ts":
/*!*****************************!*\
  !*** ./common/lib/index.ts ***!
  \*****************************/
/*! exports provided: calculateInterval, toMS, DEFAULT_TIME_FORMAT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIME_FORMAT", function() { return DEFAULT_TIME_FORMAT; });
/* harmony import */ var _calculate_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate_interval */ "./common/lib/calculate_interval.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateInterval", function() { return _calculate_interval__WEBPACK_IMPORTED_MODULE_0__["calculateInterval"]; });

/* harmony import */ var _to_milliseconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_milliseconds */ "./common/lib/to_milliseconds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMS", function() { return _to_milliseconds__WEBPACK_IMPORTED_MODULE_1__["toMS"]; });

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



const DEFAULT_TIME_FORMAT = 'MMMM Do YYYY, HH:mm:ss.SSS';

/***/ }),

/***/ "./common/lib/to_milliseconds.ts":
/*!***************************************!*\
  !*** ./common/lib/to_milliseconds.ts ***!
  \***************************************/
/*! exports provided: toMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMS", function() { return toMS; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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



// map of moment's short/long unit ids and opensearch's long unit ids
// to their value in milliseconds
const unitMappings = [['ms', 'milliseconds', 'millisecond'], ['s', 'seconds', 'second', 'sec'], ['m', 'minutes', 'minute', 'min'], ['h', 'hours', 'hour'], ['d', 'days', 'day'], ['w', 'weeks', 'week'], ['M', 'months', 'month'], ['quarter'], ['y', 'years', 'year']];
const vals = {};
unitMappings.forEach(units => {
  const normal = moment__WEBPACK_IMPORTED_MODULE_1___default.a.normalizeUnits(units[0]);
  const val = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(1, normal).asMilliseconds();
  [].concat(normal, units).forEach(unit => {
    vals[unit] = val;
  });
});

// match any key from the vals object preceded by an optional number
const parseRE = new RegExp('^(\\d+(?:\\.\\d*)?)?\\s*(' + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["keys"])(vals).join('|') + ')$');
function toMS(expr) {
  const match = expr.match(parseRE);
  if (match) {
    if (match[2] === 'M' && match[1] !== '1') {
      throw new Error('Invalid interval. 1M is only valid monthly interval.');
    }
    return parseFloat(match[1] || '1') * vals[match[2]];
  }
}

/***/ }),

/***/ "./public/helpers/arg_value_suggestions.ts":
/*!*************************************************!*\
  !*** ./public/helpers/arg_value_suggestions.ts ***!
  \*************************************************/
/*! exports provided: getArgValueSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArgValueSuggestions", function() { return getArgValueSuggestions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugin_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin_services */ "./public/helpers/plugin_services.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
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




function getArgValueSuggestions() {
  const indexPatterns = Object(_plugin_services__WEBPACK_IMPORTED_MODULE_1__["getIndexPatterns"])();
  const savedObjectsClient = Object(_plugin_services__WEBPACK_IMPORTED_MODULE_1__["getSavedObjectsClient"])();
  async function getIndexPattern(functionArgs) {
    const indexPatternArg = functionArgs.find(({
      name
    }) => name === 'index');
    if (!indexPatternArg) {
      // index argument not provided
      return;
    }
    const indexPatternTitle = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(indexPatternArg, 'value.text');
    const {
      savedObjects
    } = await savedObjectsClient.find({
      type: 'index-pattern',
      fields: ['title'],
      search: `"${indexPatternTitle}"`,
      searchFields: ['title'],
      perPage: 10
    });
    const indexPatternSavedObject = savedObjects.find(({
      attributes
    }) => attributes.title === indexPatternTitle);
    if (!indexPatternSavedObject) {
      // index argument does not match an index pattern
      return;
    }
    return await indexPatterns.get(indexPatternSavedObject.id);
  }
  function containsFieldName(partial, field) {
    if (!partial) {
      return true;
    }
    return field.name.includes(partial);
  }

  // Argument value suggestion handlers requiring custom client side code
  // Could not put with function definition since functions are defined on server
  const customHandlers = {
    es: {
      async index(partial) {
        const search = partial ? `${partial}*` : '*';
        const resp = await savedObjectsClient.find({
          type: 'index-pattern',
          fields: ['title', 'type'],
          search: `${search}`,
          searchFields: ['title'],
          perPage: 25
        });
        return resp.savedObjects.filter(savedObject => !savedObject.get('type')).map(savedObject => {
          return {
            name: savedObject.attributes.title
          };
        });
      },
      async metric(partial, functionArgs) {
        if (!partial || !partial.includes(':')) {
          return [{
            name: 'avg:'
          }, {
            name: 'cardinality:'
          }, {
            name: 'count'
          }, {
            name: 'max:'
          }, {
            name: 'min:'
          }, {
            name: 'percentiles:'
          }, {
            name: 'sum:'
          }];
        }
        const indexPattern = await getIndexPattern(functionArgs);
        if (!indexPattern) {
          return [];
        }
        const valueSplit = partial.split(':');
        return indexPattern.fields.getAll().filter(field => {
          return field.aggregatable && 'number' === field.type && containsFieldName(valueSplit[1], field) && !_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field);
        }).map(field => {
          return {
            name: `${valueSplit[0]}:${field.name}`,
            help: field.type
          };
        });
      },
      async split(partial, functionArgs) {
        const indexPattern = await getIndexPattern(functionArgs);
        if (!indexPattern) {
          return [];
        }
        return indexPattern.fields.getAll().filter(field => {
          return field.aggregatable && ['number', 'boolean', 'date', 'ip', 'string'].includes(field.type) && containsFieldName(partial, field) && !_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field);
        }).map(field => {
          return {
            name: field.name,
            help: field.type
          };
        });
      },
      async timefield(partial, functionArgs) {
        const indexPattern = await getIndexPattern(functionArgs);
        if (!indexPattern) {
          return [];
        }
        return indexPattern.fields.getAll().filter(field => {
          return 'date' === field.type && containsFieldName(partial, field) && !_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field);
        }).map(field => {
          return {
            name: field.name
          };
        });
      }
    }
  };
  return {
    /**
     * @param {string} functionName - user provided function name containing argument
     * @param {string} argName - user provided argument name
     * @return {boolean} true when dynamic suggestion handler provided for function argument
     */
    hasDynamicSuggestionsForArgument: (functionName, argName) => {
      return customHandlers[functionName] && customHandlers[functionName][argName];
    },
    /**
     * @param {string} functionName - user provided function name containing argument
     * @param {string} argName - user provided argument name
     * @param {object} functionArgs - user provided function arguments parsed ahead of current argument
     * @param {string} partial - user provided argument value
     * @return {array} array of dynamic suggestions matching partial
     */
    getDynamicSuggestionsForArgument: async (functionName, argName, functionArgs, partialInput = '') => {
      // @ts-ignore
      return await customHandlers[functionName][argName](partialInput, functionArgs);
    },
    /**
     * @param {string} partial - user provided argument value
     * @param {array} staticSuggestions - argument value suggestions
     * @return {array} array of static suggestions matching partial
     */
    getStaticSuggestionsForInput: (partialInput = '', staticSuggestions = []) => {
      if (partialInput) {
        return staticSuggestions.filter(suggestion => {
          return suggestion.name.includes(partialInput);
        });
      }
      return staticSuggestions;
    }
  };
}

/***/ }),

/***/ "./public/helpers/get_timezone.ts":
/*!****************************************!*\
  !*** ./public/helpers/get_timezone.ts ***!
  \****************************************/
/*! exports provided: getTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimezone", function() { return getTimezone; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
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


function getTimezone(config) {
  if (config.isDefault('dateFormat:tz')) {
    const detectedTimezone = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.guess();
    if (detectedTimezone) return detectedTimezone;else return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().format('Z');
  } else {
    return config.get('dateFormat:tz', 'Browser');
  }
}

/***/ }),

/***/ "./public/helpers/plugin_services.ts":
/*!*******************************************!*\
  !*** ./public/helpers/plugin_services.ts ***!
  \*******************************************/
/*! exports provided: getIndexPatterns, setIndexPatterns, getSavedObjectsClient, setSavedObjectsClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexPatterns", function() { return getIndexPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndexPatterns", function() { return setIndexPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectsClient", function() { return getSavedObjectsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSavedObjectsClient", function() { return setSavedObjectsClient; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
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


const [getIndexPatterns, setIndexPatterns] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('IndexPatterns');
const [getSavedObjectsClient, setSavedObjectsClient] = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])('SavedObjectsClient');

/***/ }),

/***/ "./public/helpers/tick_formatters.ts":
/*!*******************************************!*\
  !*** ./public/helpers/tick_formatters.ts ***!
  \*******************************************/
/*! exports provided: tickFormatters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickFormatters", function() { return tickFormatters; });
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


function baseTickFormatter(value, axis) {
  const factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
  const formatted = '' + Math.round(value * factor) / factor;

  // If tickDecimals was specified, ensure that we have exactly that
  // much precision; otherwise default to the value's own precision.

  if (axis.tickDecimals != null) {
    const decimal = formatted.indexOf('.');
    const precision = decimal === -1 ? 0 : formatted.length - decimal - 1;
    if (precision < axis.tickDecimals) {
      return (precision ? formatted : formatted + '.') + ('' + factor).substr(1, axis.tickDecimals - precision);
    }
  }
  return formatted;
}
function unitFormatter(divisor, units) {
  return val => {
    let index = 0;
    const isNegative = val < 0;
    val = Math.abs(val);
    while (val >= divisor && index < units.length) {
      val /= divisor;
      index++;
    }
    const value = Math.round(val * 100) / 100 * (isNegative ? -1 : 1);
    return `${value}${units[index]}`;
  };
}
function tickFormatters() {
  return {
    bits: unitFormatter(1000, ['b', 'kb', 'mb', 'gb', 'tb', 'pb']),
    'bits/s': unitFormatter(1000, ['b/s', 'kb/s', 'mb/s', 'gb/s', 'tb/s', 'pb/s']),
    bytes: unitFormatter(1024, ['B', 'KB', 'MB', 'GB', 'TB', 'PB']),
    'bytes/s': unitFormatter(1024, ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s', 'PB/s']),
    currency(val, axis) {
      return val.toLocaleString('en', {
        style: 'currency',
        currency: axis && axis.options && axis.options.units.prefix || 'USD'
      });
    },
    percent(val, axis) {
      let precision = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis, 'tickDecimals', 0) - Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis, 'options.units.tickDecimalsShift', 0);
      // toFixed only accepts values between 0 and 20
      if (precision < 0) {
        precision = 0;
      } else if (precision > 20) {
        precision = 20;
      }
      return (val * 100).toFixed(precision) + '%';
    },
    custom(val, axis) {
      const formattedVal = baseTickFormatter(val, axis);
      const prefix = axis && axis.options && axis.options.units.prefix;
      const suffix = axis && axis.options && axis.options.units.suffix;
      return prefix + formattedVal + suffix;
    }
  };
}

/***/ }),

/***/ "./public/helpers/tick_generator.ts":
/*!******************************************!*\
  !*** ./public/helpers/tick_generator.ts ***!
  \******************************************/
/*! exports provided: generateTicksProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTicksProvider", function() { return generateTicksProvider; });
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

function generateTicksProvider() {
  function floorInBase(n, base) {
    return base * Math.floor(n / base);
  }
  function generateTicks(axis) {
    const returnTicks = [];
    let tickSize = 2;
    let delta = axis.delta || 0;
    let steps = 0;
    let tickVal;
    let tickCount = 0;

    // Count the steps
    while (Math.abs(delta) >= 1024) {
      steps++;
      delta /= 1024;
    }

    // Set the tick size relative to the remaining delta
    while (tickSize <= 1024) {
      if (delta <= tickSize) {
        break;
      }
      tickSize *= 2;
    }
    axis.tickSize = tickSize * Math.pow(1024, steps);

    // Calculate the new ticks
    const tickMin = floorInBase(axis.min || 0, axis.tickSize);
    do {
      tickVal = tickMin + tickCount++ * axis.tickSize;
      returnTicks.push(tickVal);
    } while (tickVal < (axis.max || 0));
    return returnTicks;
  }
  return axis => generateTicks(axis);
}

/***/ }),

/***/ "./public/helpers/timeline_request_handler.ts":
/*!****************************************************!*\
  !*** ./public/helpers/timeline_request_handler.ts ***!
  \****************************************************/
/*! exports provided: getTimelineRequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimelineRequestHandler", function() { return getTimelineRequestHandler; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_timezone */ "./public/helpers/get_timezone.ts");
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




function getTimelineRequestHandler({
  uiSettings,
  http,
  timefilter
}) {
  const timezone = Object(_get_timezone__WEBPACK_IMPORTED_MODULE_2__["getTimezone"])(uiSettings);
  return async function ({
    timeRange,
    filters,
    query,
    visParams
  }) {
    const expression = visParams.expression;
    if (!expression) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('timeline.emptyExpressionErrorMessage', {
        defaultMessage: 'Timeline error: No expression provided'
      }));
    }
    const opensearchQueryConfigs = _data_public__WEBPACK_IMPORTED_MODULE_1__["opensearchQuery"].getOpenSearchQueryConfig(uiSettings);

    // parse the time range client side to make sure it behaves like other charts
    const timeRangeBounds = timefilter.calculateBounds(timeRange);
    try {
      return await http.post('/api/timeline/run', {
        body: JSON.stringify({
          sheet: [expression],
          extended: {
            es: {
              filter: _data_public__WEBPACK_IMPORTED_MODULE_1__["opensearchQuery"].buildOpenSearchQuery(undefined, query, filters, opensearchQueryConfigs)
            }
          },
          time: {
            from: timeRangeBounds.min,
            to: timeRangeBounds.max,
            interval: visParams.interval,
            timezone
          }
        })
      });
    } catch (e) {
      if (e && e.body) {
        const errorTitle = e.body.attributes && e.body.attributes.title ? ` (${e.body.attributes.title})` : '';
        const err = new Error(`${_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('timeline.requestHandlerErrorTitle', {
          defaultMessage: 'Timeline request error'
        })}${errorTitle}: ${e.body.message}`);
        err.stack = e.stack;
        throw err;
      } else {
        throw e;
      }
    }
  };
}

/***/ }),

/***/ "./public/helpers/xaxis_formatter.ts":
/*!*******************************************!*\
  !*** ./public/helpers/xaxis_formatter.ts ***!
  \*******************************************/
/*! exports provided: xaxisFormatterProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xaxisFormatterProvider", function() { return xaxisFormatterProvider; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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



function xaxisFormatterProvider(config) {
  function getFormat(opensearchInterval) {
    const parts = opensearchInterval.match(/(\d+)(ms|s|m|h|d|w|M|y|)/);
    if (parts === null || parts[1] === null || parts[2] === null) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('timeline.panels.timechart.unknownIntervalErrorMessage', {
        defaultMessage: 'Unknown interval'
      }));
    }
    const interval = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(Number(parts[1]), parts[2]);

    // Cribbed from OpenSearch Dashboards's TimeBuckets class
    const rules = config.get('dateFormat:scaled');
    for (let i = rules.length - 1; i >= 0; i--) {
      const rule = rules[i];
      if (!rule[0] || interval >= moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(rule[0])) {
        return rule[1];
      }
    }
    return config.get('dateFormat');
  }
  return opensearchInterval => getFormat(opensearchInterval);
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, getTimezone, tickFormatters, xaxisFormatterProvider, generateTicksProvider, DEFAULT_TIME_FORMAT, calculateInterval, VisTypeTimelinePluginStart, VisTypeTimelinePluginSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _helpers_get_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/get_timezone */ "./public/helpers/get_timezone.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTimezone", function() { return _helpers_get_timezone__WEBPACK_IMPORTED_MODULE_1__["getTimezone"]; });

/* harmony import */ var _helpers_tick_formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/tick_formatters */ "./public/helpers/tick_formatters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormatters", function() { return _helpers_tick_formatters__WEBPACK_IMPORTED_MODULE_2__["tickFormatters"]; });

/* harmony import */ var _helpers_xaxis_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/xaxis_formatter */ "./public/helpers/xaxis_formatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xaxisFormatterProvider", function() { return _helpers_xaxis_formatter__WEBPACK_IMPORTED_MODULE_3__["xaxisFormatterProvider"]; });

/* harmony import */ var _helpers_tick_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/tick_generator */ "./public/helpers/tick_generator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTicksProvider", function() { return _helpers_tick_generator__WEBPACK_IMPORTED_MODULE_4__["generateTicksProvider"]; });

/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/lib */ "./common/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIME_FORMAT", function() { return _common_lib__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TIME_FORMAT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateInterval", function() { return _common_lib__WEBPACK_IMPORTED_MODULE_5__["calculateInterval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisTypeTimelinePluginStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisTypeTimelinePluginStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisTypeTimelinePluginSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["VisTypeTimelinePluginSetup"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["TimelineVisPlugin"](initializerContext);
}







/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: TimelineVisPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineVisPlugin", function() { return TimelineVisPlugin; });
/* harmony import */ var _timeline_vis_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline_vis_fn */ "./public/timeline_vis_fn.ts");
/* harmony import */ var _timeline_vis_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline_vis_type */ "./public/timeline_vis_type.tsx");
/* harmony import */ var _helpers_plugin_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/plugin_services */ "./public/helpers/plugin_services.ts");
/* harmony import */ var _helpers_arg_value_suggestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/arg_value_suggestions */ "./public/helpers/arg_value_suggestions.ts");
/* harmony import */ var _timeline_vis_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline_vis_renderer */ "./public/timeline_vis_renderer.tsx");
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

/** @public */

/** @internal */
class TimelineVisPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
  }
  setup(core, {
    expressions,
    visualizations,
    data
  }) {
    const dependencies = {
      uiSettings: core.uiSettings,
      http: core.http,
      timefilter: data.query.timefilter.timefilter
    };
    expressions.registerFunction(() => Object(_timeline_vis_fn__WEBPACK_IMPORTED_MODULE_0__["getTimelineVisualizationConfig"])(dependencies));
    expressions.registerRenderer(Object(_timeline_vis_renderer__WEBPACK_IMPORTED_MODULE_4__["getTimelineVisRenderer"])(dependencies));
    visualizations.createBaseVisualization(Object(_timeline_vis_type__WEBPACK_IMPORTED_MODULE_1__["getTimelineVisDefinition"])(dependencies));
  }
  start(core, plugins) {
    Object(_helpers_plugin_services__WEBPACK_IMPORTED_MODULE_2__["setIndexPatterns"])(plugins.data.indexPatterns);
    Object(_helpers_plugin_services__WEBPACK_IMPORTED_MODULE_2__["setSavedObjectsClient"])(core.savedObjects.client);
    return {
      getArgValueSuggestions: _helpers_arg_value_suggestions__WEBPACK_IMPORTED_MODULE_3__["getArgValueSuggestions"]
    };
  }
}

/***/ }),

/***/ "./public/timeline_vis_fn.ts":
/*!***********************************!*\
  !*** ./public/timeline_vis_fn.ts ***!
  \***********************************/
/*! exports provided: getTimelineVisualizationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimelineVisualizationConfig", function() { return getTimelineVisualizationConfig; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_timeline_request_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/timeline_request_handler */ "./public/helpers/timeline_request_handler.ts");
/* harmony import */ var _timeline_vis_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline_vis_type */ "./public/timeline_vis_type.tsx");
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





const getTimelineVisualizationConfig = dependencies => ({
  name: 'timeline_vis',
  type: 'render',
  inputTypes: ['opensearch_dashboards_context', 'null'],
  help: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('timeline.function.help', {
    defaultMessage: 'Timeline visualization'
  }),
  args: {
    expression: {
      types: ['string'],
      aliases: ['_'],
      default: '".opensearch(*)"',
      help: ''
    },
    interval: {
      types: ['string'],
      default: 'auto',
      help: ''
    }
  },
  async fn(input, args) {
    const timelineRequestHandler = Object(_helpers_timeline_request_handler__WEBPACK_IMPORTED_MODULE_2__["getTimelineRequestHandler"])(dependencies);
    const visParams = {
      expression: args.expression,
      interval: args.interval
    };
    const response = await timelineRequestHandler({
      timeRange: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'timeRange'),
      query: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'query'),
      filters: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(input, 'filters'),
      visParams
    });
    response.visType = _timeline_vis_type__WEBPACK_IMPORTED_MODULE_3__["TIMELINE_VIS_NAME"];
    return {
      type: 'render',
      as: 'timeline_vis',
      value: {
        visParams,
        visType: _timeline_vis_type__WEBPACK_IMPORTED_MODULE_3__["TIMELINE_VIS_NAME"],
        visData: response
      }
    };
  }
});

/***/ }),

/***/ "./public/timeline_vis_renderer.tsx":
/*!******************************************!*\
  !*** ./public/timeline_vis_renderer.tsx ***!
  \******************************************/
/*! exports provided: getTimelineVisRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimelineVisRenderer", function() { return getTimelineVisRenderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_3__);
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
const TimelineVisComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./components/timeline_vis_component */ "./public/components/timeline_vis_component.tsx")));
const getTimelineVisRenderer = deps => ({
  name: 'timeline_vis',
  displayName: 'Timeline visualization',
  reuseDomNode: true,
  render: (domNode, {
    visData,
    visParams
  }, handlers) => {
    handlers.onDestroy(() => {
      Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(domNode);
    });
    const [seriesList] = visData.sheet;
    const showNoResult = !seriesList || !seriesList.list.length;
    if (showNoResult) {
      // send the render complete event when there is no data to show
      // to notify that a chart is updated
      handlers.done();
    }
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_visualizations_public__WEBPACK_IMPORTED_MODULE_3__["VisualizationContainer"], {
      showNoResult: showNoResult
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsContextProvider"], {
      services: {
        ...deps
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineVisComponent, {
      interval: visParams.interval,
      seriesList: seriesList,
      renderComplete: handlers.done,
      fireEvent: handlers.event
    }))), domNode);
  }
});

/***/ }),

/***/ "./public/timeline_vis_type.tsx":
/*!**************************************!*\
  !*** ./public/timeline_vis_type.tsx ***!
  \**************************************/
/*! exports provided: TIMELINE_VIS_NAME, getTimelineVisDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMELINE_VIS_NAME", function() { return TIMELINE_VIS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimelineVisDefinition", function() { return getTimelineVisDefinition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vis_default_editor/public */ "plugin/visDefaultEditor/public");
/* harmony import */ var _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_timeline_request_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/timeline_request_handler */ "./public/helpers/timeline_request_handler.ts");
/* harmony import */ var _to_ast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to_ast */ "./public/to_ast.ts");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visualizations/public */ "plugin/visualizations/public");
/* harmony import */ var _visualizations_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_visualizations_public__WEBPACK_IMPORTED_MODULE_5__);
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







const TimelineOptions = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./timeline_options */ "./public/timeline_options.tsx")));
const TIMELINE_VIS_NAME = 'timelion';
function getTimelineVisDefinition(dependencies) {
  const timelineRequestHandler = Object(_helpers_timeline_request_handler__WEBPACK_IMPORTED_MODULE_3__["getTimelineRequestHandler"])(dependencies);

  // return the visType object, which OpenSearch Dashboards will use to display and configure new
  // Vis object of this type.
  return {
    name: TIMELINE_VIS_NAME,
    title: 'Timeline',
    icon: 'timeline',
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('timeline.timelineDescription', {
      defaultMessage: 'Build time-series using functional expressions'
    }),
    visConfig: {
      defaults: {
        expression: '.opensearch(*)',
        interval: 'auto'
      }
    },
    editorConfig: {
      optionsTemplate: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineOptions, _extends({
        services: dependencies
      }, props)),
      defaultSize: _vis_default_editor_public__WEBPACK_IMPORTED_MODULE_2__["DefaultEditorSize"].MEDIUM
    },
    requestHandler: timelineRequestHandler,
    toExpressionAst: _to_ast__WEBPACK_IMPORTED_MODULE_4__["toExpressionAst"],
    responseHandler: 'none',
    inspectorAdapters: {},
    getSupportedTriggers: () => {
      return [_visualizations_public__WEBPACK_IMPORTED_MODULE_5__["VIS_EVENT_TO_TRIGGER"].applyFilter];
    },
    options: {
      showIndexSelection: false,
      showQueryBar: false,
      showFilterBar: false
    }
  };
}

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


const toExpressionAst = vis => {
  const {
    expression,
    interval
  } = vis.params;
  const timeline = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpressionFunction"])('timeline_vis', {
    expression,
    interval
  });
  const ast = Object(_expressions_public__WEBPACK_IMPORTED_MODULE_0__["buildExpression"])([timeline]);
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

/***/ "@osd/monaco":
/*!**********************************************!*\
  !*** external "__osdSharedDeps__.OsdMonaco" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdMonaco;

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

/***/ })

/******/ });
//# sourceMappingURL=visTypeTimeline.plugin.js.map