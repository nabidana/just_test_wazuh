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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=bfetch!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=bfetch!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['bfetch']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_bfetch_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=bfetch!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=bfetch!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_bfetch_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_bfetch_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/bfetch/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/bfetch/public */ "./public/index.ts"))

/***/ }),

/***/ "./common/batch.ts":
/*!*************************!*\
  !*** ./common/batch.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/buffer/create_batched_function.ts":
/*!**************************************************!*\
  !*** ./common/buffer/create_batched_function.ts ***!
  \**************************************************/
/*! exports provided: createBatchedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBatchedFunction", function() { return createBatchedFunction; });
/* harmony import */ var _timed_item_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timed_item_buffer */ "./common/buffer/timed_item_buffer.ts");
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


const createBatchedFunction = params => {
  const {
    onCall,
    onBatch,
    maxItemAge = 10,
    flushOnMaxItems = 25
  } = params;
  const buffer = new _timed_item_buffer__WEBPACK_IMPORTED_MODULE_0__["TimedItemBuffer"]({
    onFlush: onBatch,
    maxItemAge,
    flushOnMaxItems
  });
  const fn = (...args) => {
    const [result, batchEntry] = onCall(...args);
    buffer.write(batchEntry);
    return result;
  };
  return [fn, buffer];
};

/***/ }),

/***/ "./common/buffer/index.ts":
/*!********************************!*\
  !*** ./common/buffer/index.ts ***!
  \********************************/
/*! exports provided: ItemBuffer, TimedItemBuffer, createBatchedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item_buffer */ "./common/buffer/item_buffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemBuffer", function() { return _item_buffer__WEBPACK_IMPORTED_MODULE_0__["ItemBuffer"]; });

/* harmony import */ var _timed_item_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timed_item_buffer */ "./common/buffer/timed_item_buffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimedItemBuffer", function() { return _timed_item_buffer__WEBPACK_IMPORTED_MODULE_1__["TimedItemBuffer"]; });

/* harmony import */ var _create_batched_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_batched_function */ "./common/buffer/create_batched_function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBatchedFunction", function() { return _create_batched_function__WEBPACK_IMPORTED_MODULE_2__["createBatchedFunction"]; });

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

/***/ "./common/buffer/item_buffer.ts":
/*!**************************************!*\
  !*** ./common/buffer/item_buffer.ts ***!
  \**************************************/
/*! exports provided: ItemBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemBuffer", function() { return ItemBuffer; });
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
 * A simple buffer that collects items. Can be cleared or flushed; and can
 * automatically flush when specified number of items is reached.
 */
class ItemBuffer {
  constructor(params) {
    this.params = params;
    _defineProperty(this, "list", []);
  }

  /**
   * Get current buffer size.
   */
  get length() {
    return this.list.length;
  }

  /**
   * Add item to the buffer.
   */
  write(item) {
    this.list.push(item);
    const {
      flushOnMaxItems
    } = this.params;
    if (flushOnMaxItems) {
      if (this.list.length >= flushOnMaxItems) {
        this.flush();
      }
    }
  }

  /**
   * Remove all items from the buffer.
   */
  clear() {
    this.list = [];
  }

  /**
   * Call `.onflush` method and clear buffer.
   */
  flush() {
    let list;
    [list, this.list] = [this.list, []];
    this.params.onFlush(list);
  }
}

/***/ }),

/***/ "./common/buffer/timed_item_buffer.ts":
/*!********************************************!*\
  !*** ./common/buffer/timed_item_buffer.ts ***!
  \********************************************/
/*! exports provided: TimedItemBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimedItemBuffer", function() { return TimedItemBuffer; });
/* harmony import */ var _item_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item_buffer */ "./common/buffer/item_buffer.ts");
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


class TimedItemBuffer extends _item_buffer__WEBPACK_IMPORTED_MODULE_0__["ItemBuffer"] {
  constructor(params) {
    super(params);
    this.params = params;
    _defineProperty(this, "timer", void 0);
    _defineProperty(this, "onTimeout", () => {
      this.flush();
    });
  }
  write(item) {
    super.write(item);
    if (this.params.maxItemAge && this.length === 1) {
      this.timer = setTimeout(this.onTimeout, this.params.maxItemAge);
    }
  }
  clear() {
    clearTimeout(this.timer);
    super.clear();
  }
  flush() {
    clearTimeout(this.timer);
    super.flush();
  }
}

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: normalizeError, removeLeadingSlash, ItemBuffer, TimedItemBuffer, createBatchedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./common/util/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeError", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["normalizeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLeadingSlash", function() { return _util__WEBPACK_IMPORTED_MODULE_0__["removeLeadingSlash"]; });

/* harmony import */ var _streaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streaming */ "./common/streaming/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./common/buffer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemBuffer", function() { return _buffer__WEBPACK_IMPORTED_MODULE_2__["ItemBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimedItemBuffer", function() { return _buffer__WEBPACK_IMPORTED_MODULE_2__["TimedItemBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBatchedFunction", function() { return _buffer__WEBPACK_IMPORTED_MODULE_2__["createBatchedFunction"]; });

/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch */ "./common/batch.ts");
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

/***/ "./common/streaming/index.ts":
/*!***********************************!*\
  !*** ./common/streaming/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/streaming/types.ts");
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

/***/ "./common/streaming/types.ts":
/*!***********************************!*\
  !*** ./common/streaming/types.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./common/util/index.ts":
/*!******************************!*\
  !*** ./common/util/index.ts ***!
  \******************************/
/*! exports provided: normalizeError, removeLeadingSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize_error */ "./common/util/normalize_error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeError", function() { return _normalize_error__WEBPACK_IMPORTED_MODULE_0__["normalizeError"]; });

/* harmony import */ var _remove_leading_slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove_leading_slash */ "./common/util/remove_leading_slash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLeadingSlash", function() { return _remove_leading_slash__WEBPACK_IMPORTED_MODULE_1__["removeLeadingSlash"]; });

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

/***/ "./common/util/normalize_error.ts":
/*!****************************************!*\
  !*** ./common/util/normalize_error.ts ***!
  \****************************************/
/*! exports provided: normalizeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeError", function() { return normalizeError; });
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

const normalizeError = err => {
  if (!err) {
    return {
      message: 'Unknown error.'
    };
  }
  if (err instanceof Error) {
    return {
      message: err.message
    };
  }
  if (typeof err === 'object') {
    return {
      ...err,
      message: err.message || 'Unknown error.'
    };
  }
  return {
    message: String(err)
  };
};

/***/ }),

/***/ "./common/util/remove_leading_slash.ts":
/*!*********************************************!*\
  !*** ./common/util/remove_leading_slash.ts ***!
  \*********************************************/
/*! exports provided: removeLeadingSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLeadingSlash", function() { return removeLeadingSlash; });
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

const removeLeadingSlash = text => text[0] === '/' ? text.substr(1) : text;

/***/ }),

/***/ "./public/batching/create_streaming_batched_function.ts":
/*!**************************************************************!*\
  !*** ./public/batching/create_streaming_batched_function.ts ***!
  \**************************************************************/
/*! exports provided: createStreamingBatchedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStreamingBatchedFunction", function() { return createStreamingBatchedFunction; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
/* harmony import */ var _streaming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../streaming */ "./public/streaming/index.ts");
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
 * Returns a function that does not execute immediately but buffers the call internally until
 * `params.flushOnMaxItems` is reached or after `params.maxItemAge` timeout in milliseconds is reached. Once
 * one of those thresholds is reached all buffered calls are sent in one batch to the
 * server using `params.fetchStreaming` in a POST request. Responses are streamed back
 * and each batch item is resolved once corresponding response is received.
 */
const createStreamingBatchedFunction = params => {
  const {
    url,
    fetchStreaming: fetchStreamingInjected = _streaming__WEBPACK_IMPORTED_MODULE_2__["fetchStreaming"],
    flushOnMaxItems = 25,
    maxItemAge = 10
  } = params;
  const [fn] = Object(_common__WEBPACK_IMPORTED_MODULE_1__["createBatchedFunction"])({
    onCall: payload => {
      const future = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["defer"])();
      const entry = {
        payload,
        future
      };
      return [future.promise, entry];
    },
    onBatch: async items => {
      try {
        let responsesReceived = 0;
        const batch = items.map(({
          payload
        }) => payload);
        const {
          stream
        } = fetchStreamingInjected({
          url,
          body: JSON.stringify({
            batch
          }),
          method: 'POST'
        });
        stream.pipe(Object(_streaming__WEBPACK_IMPORTED_MODULE_2__["split"])('\n')).subscribe({
          next: json => {
            const response = JSON.parse(json);
            if (response.error) {
              responsesReceived++;
              items[response.id].future.reject(response.error);
            } else if (response.result !== undefined) {
              responsesReceived++;
              items[response.id].future.resolve(response.result);
            }
          },
          error: error => {
            const normalizedError = Object(_common__WEBPACK_IMPORTED_MODULE_1__["normalizeError"])(error);
            normalizedError.code = 'STREAM';
            for (const {
              future
            } of items) future.reject(normalizedError);
          },
          complete: () => {
            const streamTerminatedPrematurely = responsesReceived !== items.length;
            if (streamTerminatedPrematurely) {
              const error = {
                message: 'Connection terminated prematurely.',
                code: 'CONNECTION'
              };
              for (const {
                future
              } of items) future.reject(error);
            }
          }
        });
        await stream.toPromise();
      } catch (error) {
        for (const item of items) item.future.reject(error);
      }
    },
    flushOnMaxItems,
    maxItemAge
  });
  return fn;
};

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: BfetchPublicSetup, BfetchPublicStart, BfetchPublicContract, split, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BfetchPublicSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["BfetchPublicSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BfetchPublicStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["BfetchPublicStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BfetchPublicContract", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["BfetchPublicContract"]; });

/* harmony import */ var _streaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streaming */ "./public/streaming/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _streaming__WEBPACK_IMPORTED_MODULE_1__["split"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["BfetchPublicPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: BfetchPublicPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BfetchPublicPlugin", function() { return BfetchPublicPlugin; });
/* harmony import */ var _streaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./streaming */ "./public/streaming/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./common/index.ts");
/* harmony import */ var _batching_create_streaming_batched_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batching/create_streaming_batched_function */ "./public/batching/create_streaming_batched_function.ts");
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





// eslint-disable-next-line

// eslint-disable-next-line

class BfetchPublicPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
    _defineProperty(this, "contract", void 0);
    _defineProperty(this, "fetchStreaming", (version, basePath) => params => Object(_streaming__WEBPACK_IMPORTED_MODULE_0__["fetchStreaming"])({
      ...params,
      url: `${basePath}/${Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeLeadingSlash"])(params.url)}`,
      headers: {
        'Content-Type': 'application/json',
        'osd-xsrf': 'osd-bfetch',
        'osd-version': version,
        ...(params.headers || {})
      }
    }));
    _defineProperty(this, "batchedFunction", fetchStreaming => params => Object(_batching_create_streaming_batched_function__WEBPACK_IMPORTED_MODULE_2__["createStreamingBatchedFunction"])({
      ...params,
      fetchStreaming: params.fetchStreaming || fetchStreaming
    }));
  }
  setup(core, plugins) {
    const {
      version
    } = this.initializerContext.env.packageInfo;
    const basePath = core.http.basePath.get();
    const fetchStreaming = this.fetchStreaming(version, basePath);
    const batchedFunction = this.batchedFunction(fetchStreaming);
    this.contract = {
      fetchStreaming,
      batchedFunction
    };
    return this.contract;
  }
  start(core, plugins) {
    return this.contract;
  }
  stop() {}
}

/***/ }),

/***/ "./public/streaming/fetch_streaming.ts":
/*!*********************************************!*\
  !*** ./public/streaming/fetch_streaming.ts ***!
  \*********************************************/
/*! exports provided: fetchStreaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreaming", function() { return fetchStreaming; });
/* harmony import */ var _from_streaming_xhr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from_streaming_xhr */ "./public/streaming/from_streaming_xhr.ts");
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
 * Sends an AJAX request to the server, and processes the result as a
 * streaming HTTP/1 response. Streams data as text through observable.
 */
function fetchStreaming({
  url,
  headers = {},
  method = 'POST',
  body = ''
}) {
  const xhr = new window.XMLHttpRequest();

  // Begin the request
  xhr.open(method, url);
  xhr.withCredentials = true;

  // Set the HTTP headers
  Object.entries(headers).forEach(([k, v]) => xhr.setRequestHeader(k, v));
  const stream = Object(_from_streaming_xhr__WEBPACK_IMPORTED_MODULE_0__["fromStreamingXhr"])(xhr);

  // Send the payload to the server
  xhr.send(body);
  return {
    xhr,
    stream
  };
}

/***/ }),

/***/ "./public/streaming/from_streaming_xhr.ts":
/*!************************************************!*\
  !*** ./public/streaming/from_streaming_xhr.ts ***!
  \************************************************/
/*! exports provided: fromStreamingXhr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromStreamingXhr", function() { return fromStreamingXhr; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
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
 * Creates observable from streaming XMLHttpRequest, where each event
 * corresponds to a streamed chunk.
 */
const fromStreamingXhr = xhr => {
  const subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
  let index = 0;
  const processBatch = () => {
    const {
      responseText
    } = xhr;
    if (index >= responseText.length) return;
    subject.next(responseText.substr(index));
    index = responseText.length;
  };
  xhr.onprogress = processBatch;
  xhr.onreadystatechange = () => {
    // Older browsers don't support onprogress, so we need
    // to call this here, too. It's safe to call this multiple
    // times even for the same progress event.
    processBatch();

    // 4 is the magic number that means the request is done
    if (xhr.readyState === 4) {
      // 0 indicates a network failure. 400+ messages are considered server errors
      if (xhr.status === 0 || xhr.status >= 400) {
        subject.error(new Error(`Batch request failed with status ${xhr.status}`));
      } else {
        subject.complete();
      }
    }
  };
  return subject;
};

/***/ }),

/***/ "./public/streaming/index.ts":
/*!***********************************!*\
  !*** ./public/streaming/index.ts ***!
  \***********************************/
/*! exports provided: split, fromStreamingXhr, fetchStreaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split */ "./public/streaming/split.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _split__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony import */ var _from_streaming_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from_streaming_xhr */ "./public/streaming/from_streaming_xhr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromStreamingXhr", function() { return _from_streaming_xhr__WEBPACK_IMPORTED_MODULE_1__["fromStreamingXhr"]; });

/* harmony import */ var _fetch_streaming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch_streaming */ "./public/streaming/fetch_streaming.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStreaming", function() { return _fetch_streaming__WEBPACK_IMPORTED_MODULE_2__["fetchStreaming"]; });

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

/***/ "./public/streaming/split.ts":
/*!***********************************!*\
  !*** ./public/streaming/split.ts ***!
  \***********************************/
/*! exports provided: split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
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
 * Receives observable that emits strings, and returns a new observable
 * that also returns strings separated by delimiter.
 *
 * Input stream:
 *
 *     asdf.f -> df..aaa. -> dfsdf
 *
 * Output stream, assuming "." is used as delimiter:
 *
 *     asdf -> fdf -> aaa -> dfsdf
 *
 */
const split = (delimiter = '\n') => in$ => {
  const out$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
  let startingText = '';
  in$.subscribe(chunk => {
    const messages = (startingText + chunk).split(delimiter);

    // We don't want to send the last message here, since it may or
    // may not be a partial message.
    messages.slice(0, -1).forEach(out$.next.bind(out$));
    startingText = messages.length ? messages[messages.length - 1] : '';
  }, out$.error.bind(out$), () => {
    out$.next(startingText);
    out$.complete();
  });
  return out$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(Boolean));
};

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
//# sourceMappingURL=bfetch.plugin.js.map