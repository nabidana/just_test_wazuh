(window["visTypeVega_bundle_jsonpfunction"] = window["visTypeVega_bundle_jsonpfunction"] || []).push([[1],{

/***/ "../../../packages/osd-std/target/web/assert_never.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/assert_never.js ***!
  \*************************************************************************************/
/*! exports provided: assertNever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
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
 * Can be used in switch statements to ensure we perform exhaustive checks, see
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
 *
 * @public
 */
function assertNever(x) {
  throw new Error(`Unexpected object: ${x}`);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/clean.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/clean.js ***!
  \******************************************************************************/
/*! exports provided: cleanControlSequences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanControlSequences", function() { return cleanControlSequences; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* Replaces a bunch of characters that should not be printed:
 *    0x03  ETX: End of Text
 *    0x04  EOT: End of Transmission
 *    0x05  ENQ: Enquiry
 *    0x07  BEL: Bell
 *    0x08  BS:  Backspace
 *    0x0B  VT:  Vertical Tabulation
 *    0x0C  FF:  Form Feed
 *    0x0D  CR:  Carriage Return
 *    0x0E  SO:  Shift Out
 *    0x0F  SI:  Shift In
 *    0x10  DLE: Data Link Escape
 *    0x11  DC1: Device Control One
 *    0x12  DC2: Device Control Two
 *    0x13  DC3: Device Control Three
 *    0x14  DC4: Device Control Four
 *    0x15  NAK: Negative Acknowledge
 *    0x16  SYN: Synchronous Idle
 *    0x17  ETB: End of Transmission Block
 *    0x18  CAN: Cancel
 *    0x19  EM:  End of Medium
 *    0x1A  SUB: EoF on Windows
 *    0x1B  ESC: Starts all the escape sequences
 *    0x1C  FS:  File Separator
 *    0x1D  GS:  Group Separator
 *    0x1E  RS:  Record Separator
 *    0x1F  US:  Unit Separator
 *    0x7F  Del
 *    0x90  DCS: Device Control String
 *    0x9B  CSI: Control Sequence Introducer
 *    0x9C  OSC: Operating System Command
 *
 * Ref: https://en.wikipedia.org/wiki/Control_character
 */
const cleanControlSequences = text => {
  return text.replace(/[\x03-\x05\x07\x08\x0B-\x1F\x7F\x90\x9B\x9C]/g, char => `(U+${char.charCodeAt(0).toString(16).padStart(4, '0')})`);
};

/***/ }),

/***/ "../../../packages/osd-std/target/web/deep_freeze.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/deep_freeze.js ***!
  \************************************************************************************/
/*! exports provided: deepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return deepFreeze; });
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

/**
 * Apply Object.freeze to a value recursively and convert the return type to
 * Readonly variant recursively
 *
 * @public
 */
function deepFreeze(object) {
  // for any properties that reference an object, makes sure that object is
  // recursively frozen as well
  for (const value of Object.values(object)) {
    if (value !== null && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/get.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/get.js ***!
  \****************************************************************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
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
 * Retrieve the value for the specified path
 *
 * Note that dot is _not_ allowed to specify a deeper key, it will assume that
 * the dot is part of the key itself.
 */

function get(obj, path) {
  if (typeof path === 'string') {
    if (path.includes('.')) {
      throw new Error('Using dots in `get` with a string is not allowed, use array instead');
    }
    return obj[path];
  }
  for (const key of path) {
    obj = obj[key];
  }
  return obj;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/get_flattened_object.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/get_flattened_object.js ***!
  \*********************************************************************************************/
/*! exports provided: getFlattenedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlattenedObject", function() { return getFlattenedObject; });
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

function shouldReadKeys(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 *  Flattens a deeply nested object to a map of dot-separated
 *  paths pointing to all primitive values **and arrays**
 *  from `rootValue`.
 *
 *  example:
 *    getFlattenedObject({ a: { b: 1, c: [2,3] } })
 *    // => { 'a.b': 1, 'a.c': [2,3] }
 *
 *  @public
 */
function getFlattenedObject(rootValue) {
  if (!shouldReadKeys(rootValue)) {
    throw new TypeError(`Root value is not flatten-able, received ${rootValue}`);
  }
  const result = {};
  (function flatten(prefix, object) {
    for (const [key, value] of Object.entries(object)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (shouldReadKeys(value)) {
        flatten(path, value);
      } else {
        result[path] = value;
      }
    }
  })('', rootValue);
  return result;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/index.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/index.js ***!
  \******************************************************************************/
/*! exports provided: assertNever, deepFreeze, get, mapToObject, merge, pick, withTimeout, isRelativeUrl, modifyUrl, getUrlOrigin, unset, getFlattenedObject, validateObject, firstValueFrom, lastValueFrom, parse, stringify, cleanControlSequences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert_never__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert_never */ "../../../packages/osd-std/target/web/assert_never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assert_never__WEBPACK_IMPORTED_MODULE_0__["assertNever"]; });

/* harmony import */ var _deep_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deep_freeze */ "../../../packages/osd-std/target/web/deep_freeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return _deep_freeze__WEBPACK_IMPORTED_MODULE_1__["deepFreeze"]; });

/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "../../../packages/osd-std/target/web/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_2__["get"]; });

/* harmony import */ var _map_to_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map_to_object */ "../../../packages/osd-std/target/web/map_to_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapToObject", function() { return _map_to_object__WEBPACK_IMPORTED_MODULE_3__["mapToObject"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "../../../packages/osd-std/target/web/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_4__["merge"]; });

/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pick */ "../../../packages/osd-std/target/web/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick__WEBPACK_IMPORTED_MODULE_5__["pick"]; });

/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promise */ "../../../packages/osd-std/target/web/promise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return _promise__WEBPACK_IMPORTED_MODULE_6__["withTimeout"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "../../../packages/osd-std/target/web/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["isRelativeUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifyUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["modifyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlOrigin", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["getUrlOrigin"]; });

/* harmony import */ var _unset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unset */ "../../../packages/osd-std/target/web/unset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return _unset__WEBPACK_IMPORTED_MODULE_8__["unset"]; });

/* harmony import */ var _get_flattened_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get_flattened_object */ "../../../packages/osd-std/target/web/get_flattened_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlattenedObject", function() { return _get_flattened_object__WEBPACK_IMPORTED_MODULE_9__["getFlattenedObject"]; });

/* harmony import */ var _validate_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate_object */ "../../../packages/osd-std/target/web/validate_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateObject", function() { return _validate_object__WEBPACK_IMPORTED_MODULE_10__["validateObject"]; });

/* harmony import */ var _rxjs_7__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rxjs_7 */ "../../../packages/osd-std/target/web/rxjs_7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return _rxjs_7__WEBPACK_IMPORTED_MODULE_11__["firstValueFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return _rxjs_7__WEBPACK_IMPORTED_MODULE_11__["lastValueFrom"]; });

/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./json */ "../../../packages/osd-std/target/web/json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _json__WEBPACK_IMPORTED_MODULE_12__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _json__WEBPACK_IMPORTED_MODULE_12__["stringify"]; });

/* harmony import */ var _clean__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clean */ "../../../packages/osd-std/target/web/clean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanControlSequences", function() { return _clean__WEBPACK_IMPORTED_MODULE_13__["cleanControlSequences"]; });

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

/***/ "../../../packages/osd-std/target/web/json.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/json.js ***!
  \*****************************************************************************/
/*! exports provided: stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var json11__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json11 */ "../../../node_modules/json11/dist/umd/index.js");
/* harmony import */ var json11__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json11__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const stringify = (obj, replacer, space) => {
  let text;
  let numeralsAreNumbers = true;
  /* For better performance, instead of testing for existence of `replacer` on each value, two almost
   * identical functions are used.
   *
   * Note: Converting BigInt values to numbers, `Number()` is much faster that `parseInt()`. Since we
   * check the `type`, it is safe to just use `Number()`.
   */
  const checkForBigInts = replacer ? function (key, val) {
    if (typeof val === 'bigint') {
      numeralsAreNumbers = false;
      return replacer.call(this, key, Number(val));
    }
    return replacer.call(this, key, val);
  } : (key, val) => {
    if (typeof val === 'bigint') {
      numeralsAreNumbers = false;
      return Number(val);
    }
    return val;
  };

  /* While this is a check for possibly having BigInt values, if none were found, the results is
   * sufficient to fulfill the purpose of the function. However, if BigInt values were found, we will
   * use `stringifyObjectWithBigInts` to do this again.
   *
   * The goal was not to punish every object that doesn't have a BigInt with the more expensive
   * `stringifyObjectWithBigInts`. Those with BigInt values are also not unduly burdened because we
   * still need it in its string form to find a suitable marker.
   */
  text = JSON.stringify(obj, checkForBigInts, space);
  if (!numeralsAreNumbers) {
    const temp = json11__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(obj, {
      replacer,
      space,
      withBigInt: false,
      quote: '"',
      quoteNames: true
    });
    if (temp) text = temp;
  }
  return text;
};
const parse = (text, reviver) => {
  let obj;
  let numeralsAreNumbers = true;
  const inspectValueForLargeNumerals = val => {
    if (numeralsAreNumbers && typeof val === 'number' && isFinite(val) && (val < Number.MIN_SAFE_INTEGER || val > Number.MAX_SAFE_INTEGER)) {
      numeralsAreNumbers = false;
    }

    // This function didn't have to have a return value but having it makes the rest cleaner
    return val;
  };

  /* For better performance, instead of testing for existence of `reviver` on each value, two almost
   * identical functions are used.
   */
  const checkForLargeNumerals = reviver ? function (key, val) {
    return inspectValueForLargeNumerals(reviver.call(this, key, val));
  } : (key, val) => inspectValueForLargeNumerals(val);

  /* While this is a check for possibly having BigInt values, if none were found, the results is
   * sufficient to fulfill the purpose of the function. However, if BigInt values were found, we will
   * use `stringifyObjectWithBigInts` to do this again.
   *
   * The goal was not to punish every object that doesn't have a BigInt with the more expensive
   * `stringifyObjectWithBigInts`. Those with BigInt values are also not unduly burdened because we
   * still need it in its string form to find a suitable marker.
   */
  obj = JSON.parse(text, checkForLargeNumerals);
  if (!numeralsAreNumbers) {
    const temp = json11__WEBPACK_IMPORTED_MODULE_0___default.a.parse(text, reviver, {
      withLongNumerals: true
    });
    if (temp) obj = temp;
  }
  return obj;
};

/***/ }),

/***/ "../../../packages/osd-std/target/web/map_to_object.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/map_to_object.js ***!
  \**************************************************************************************/
/*! exports provided: mapToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToObject", function() { return mapToObject; });
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

function mapToObject(map) {
  const result = Object.create(null);
  for (const [key, value] of map) {
    result[key] = value;
  }
  return result;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/merge.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/merge.js ***!
  \******************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
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
 * Deeply merges two objects, omitting undefined values, and not deeply merging Arrays.
 *
 * @remarks
 * Should behave identically to lodash.merge, however it will not merge Array values like lodash does.
 * Any properties with `undefined` values on both objects will be ommitted from the returned object.
 */

function merge(baseObj) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  const firstSource = sources[0];
  if (firstSource === undefined) {
    return baseObj;
  }
  return sources.slice(1).reduce((merged, nextSource) => mergeObjects(merged, nextSource), mergeObjects(baseObj, firstSource));
}
const isMergable = obj => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj);
const mergeObjects = (baseObj, overrideObj) => [...new Set([...Object.keys(baseObj), ...Object.keys(overrideObj)])].reduce((merged, key) => {
  const baseVal = baseObj[key];
  const overrideVal = overrideObj[key];
  if (isMergable(baseVal) && isMergable(overrideVal)) {
    merged[key] = mergeObjects(baseVal, overrideVal);
  } else if (overrideVal !== undefined) {
    merged[key] = overrideVal;
  } else if (baseVal !== undefined) {
    merged[key] = baseVal;
  }
  return merged;
}, {});

/***/ }),

/***/ "../../../packages/osd-std/target/web/pick.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/pick.js ***!
  \*****************************************************************************/
/*! exports provided: pick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
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

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/promise.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/promise.js ***!
  \********************************************************************************/
/*! exports provided: withTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return withTimeout; });
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

function withTimeout(_ref) {
  let {
    promise,
    timeout,
    errorMessage
  } = _ref;
  return Promise.race([promise, new Promise((resolve, reject) => setTimeout(() => reject(new Error(errorMessage)), timeout))]);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/rxjs_7.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/rxjs_7.js ***!
  \*******************************************************************************/
/*! exports provided: firstValueFrom, lastValueFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return firstValueFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return lastValueFrom; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
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


function firstValueFrom(source) {
  // we can't use SafeSubscriber the same way that RxJS 7 does, so instead we
  return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).toPromise();
}
function lastValueFrom(source) {
  return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["last"])()).toPromise();
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/unset.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/unset.js ***!
  \******************************************************************************/
/*! exports provided: unset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return unset; });
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "../../../packages/osd-std/target/web/get.js");
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
 * Unset a (potentially nested) key from given object.
 * This mutates the original object.
 *
 * @example
 * ```
 * unset(myObj, 'someRootProperty');
 * unset(myObj, 'some.nested.path');
 * ```
 */
function unset(obj, atPath) {
  const paths = atPath.split('.').map(s => s.trim()).filter(v => v !== '');
  if (paths.length === 0) {
    return;
  }
  if (paths.length === 1) {
    delete obj[paths[0]];
    return;
  }
  const property = paths.pop();
  const parent = Object(_get__WEBPACK_IMPORTED_MODULE_0__["get"])(obj, paths);
  if (parent !== undefined) {
    delete parent[property];
  }
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/url.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/url.js ***!
  \****************************************************************************/
/*! exports provided: modifyUrl, isRelativeUrl, getUrlOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyUrl", function() { return modifyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return isRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlOrigin", function() { return getUrlOrigin; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "../../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
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
 * We define our own typings because the current version of @types/node
 * declares properties to be optional "hostname?: string".
 * Although, parse call returns "hostname: null | string".
 *
 * @public
 */

/**
 *  Takes a URL and a function that takes the meaningful parts
 *  of the URL as a key-value object, modifies some or all of
 *  the parts, and returns the modified parts formatted again
 *  as a url.
 *
 *  Url Parts sent:
 *    - protocol
 *    - slashes (does the url have the //)
 *    - auth
 *    - hostname (just the name of the host, no port or auth information)
 *    - port
 *    - pathname (the path after the hostname, no query or hash, starts
 *        with a slash if there was a path)
 *    - query (always an object, even when no query on original url)
 *    - hash
 *
 *  Why?
 *    - The default url library in node produces several conflicting
 *      properties on the "parsed" output. Modifying any of these might
 *      lead to the modifications being ignored (depending on which
 *      property was modified)
 *    - It's not always clear whether to use path/pathname, host/hostname,
 *      so this tries to add helpful constraints
 *
 *  @param url The string url to parse.
 *  @param urlModifier A function that will modify the parsed url, or return a new one.
 *  @returns The modified and reformatted url
 *  @public
 */
function modifyUrl(url, urlModifier) {
  const parsed = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(url, true);

  // Copy over the most specific version of each property. By default, the parsed url includes several
  // conflicting properties (like path and pathname + search, or search and query) and keeping track
  // of which property is actually used when they are formatted is harder than necessary.
  const meaningfulParts = {
    auth: parsed.auth,
    hash: parsed.hash,
    hostname: parsed.hostname,
    pathname: parsed.pathname,
    port: parsed.port,
    protocol: parsed.protocol,
    query: parsed.query || {},
    slashes: parsed.slashes
  };

  // The urlModifier modifies the meaningfulParts object, or returns a new one.
  const modifiedParts = urlModifier(meaningfulParts) || meaningfulParts;

  // Format the modified/replaced meaningfulParts back into a url.
  return Object(url__WEBPACK_IMPORTED_MODULE_0__["format"])({
    auth: modifiedParts.auth,
    hash: modifiedParts.hash,
    hostname: modifiedParts.hostname,
    pathname: modifiedParts.pathname,
    port: modifiedParts.port,
    protocol: modifiedParts.protocol,
    query: modifiedParts.query,
    slashes: modifiedParts.slashes
  });
}

/**
 * Determine if a url is relative. Any url including a protocol, hostname, or
 * port is not considered relative. This means that absolute *paths* are considered
 * to be relative *urls*
 * @public
 */
function isRelativeUrl(candidatePath) {
  // validate that `candidatePath` is not attempting a redirect to somewhere
  // outside of this OpenSearch Dashboards install
  const all = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(candidatePath, false /* parseQueryString */, true /* slashesDenoteHost */);
  const {
    protocol,
    hostname,
    port
  } = all;
  // We should explicitly compare `protocol`, `port` and `hostname` to null to make sure these are not
  // detected in the URL at all. For example `hostname` can be empty string for Node URL parser, but
  // browser (because of various bwc reasons) processes URL differently (e.g. `///abc.com` - for browser
  // hostname is `abc.com`, but for Node hostname is an empty string i.e. everything between schema (`//`)
  // and the first slash that belongs to path.
  if (protocol !== null || hostname !== null || port !== null) {
    return false;
  }
  return true;
}

/**
 * Returns the origin (protocol + host + port) from given `url` if `url` is a valid absolute url, or null otherwise
 */
function getUrlOrigin(url) {
  const obj = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(url);
  if (!obj.protocol && !obj.hostname) {
    return null;
  }
  return `${obj.protocol}//${obj.hostname}${obj.port ? `:${obj.port}` : ''}`;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/validate_object.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/validate_object.js ***!
  \****************************************************************************************/
/*! exports provided: validateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateObject", function() { return validateObject; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// we have to do Object.prototype.hasOwnProperty because when you create an object using
// Object.create(null), and I assume other methods, you get an object without a prototype,
// so you can't use current.hasOwnProperty
const hasOwnProperty = (obj, property) => Object.prototype.hasOwnProperty.call(obj, property);
const isObject = obj => typeof obj === 'object' && obj !== null;

// we're using a stack instead of recursion so we aren't limited by the call stack
function validateObject(obj) {
  if (!isObject(obj)) {
    return;
  }
  const stack = [{
    value: obj,
    previousKey: null
  }];
  const seen = new WeakSet([obj]);
  while (stack.length > 0) {
    const {
      value,
      previousKey
    } = stack.pop();
    if (!isObject(value)) {
      continue;
    }
    if (hasOwnProperty(value, '__proto__')) {
      throw new Error(`'__proto__' is an invalid key`);
    }
    if (hasOwnProperty(value, 'prototype') && previousKey === 'constructor') {
      throw new Error(`'constructor.prototype' is an invalid key`);
    }

    // iterating backwards through an array is reportedly more performant
    const entries = Object.entries(value);
    for (let i = entries.length - 1; i >= 0; --i) {
      const [key, childValue] = entries[i];
      if (isObject(childValue)) {
        if (seen.has(childValue)) {
          throw new Error('circular reference detected');
        }
        seen.add(childValue);
      }
      stack.push({
        value: childValue,
        previousKey: key
      });
    }
  }
}

/***/ }),

/***/ "./public/data_model/utils.ts":
/*!************************************!*\
  !*** ./public/data_model/utils.ts ***!
  \************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-stringify-pretty-compact */ "../../../node_modules/json-stringify-pretty-compact/index.js");
/* harmony import */ var json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
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



class Utils {
  /**
   * If the 2nd array parameter in args exists, append it to the warning/error string value
   */
  static formatWarningToStr(...args) {
    let value = args[0];
    if (args.length >= 2) {
      try {
        if (typeof args[1] === 'string') {
          value += `\n${args[1]}`;
        } else {
          value += '\n' + json_stringify_pretty_compact__WEBPACK_IMPORTED_MODULE_0___default()(args[1], {
            maxLength: 70
          });
        }
      } catch (err) {
        // ignore
      }
    }
    return value;
  }
  static formatErrorToStr(...args) {
    let error = args[0];
    if (!error) {
      error = 'ERR';
    } else if (error instanceof Error) {
      error = error.message;
    }
    return Utils.formatWarningToStr(error, ...Array.from(args).slice(1));
  }
  static handleNonStringIndex(index) {
    return typeof index === 'string' ? index : undefined;
  }
  static handleInvalidQuery(query) {
    if (Utils.isObject(query) && !Utils.checkForFunctionProperty(query)) {
      // Validating object against prototype pollution
      Object(_osd_std__WEBPACK_IMPORTED_MODULE_1__["validateObject"])(query);
      return JSON.parse(JSON.stringify(query));
    }
    return null;
  }
  static isObject(object) {
    return !!(object && typeof object === 'object' && !Array.isArray(object));
  }
  static checkForFunctionProperty(object) {
    for (const value of Object.values(object)) {
      if (typeof value === 'function') {
        return true;
      } else if (Utils.isObject(value) && Utils.checkForFunctionProperty(value)) {
        return true;
      } else if (Array.isArray(value)) {
        // Check each element in the array for function properties
        for (const item of value) {
          if (typeof item === 'function') {
            return true;
          } else if (Utils.isObject(item) && item !== null) {
            // Properly handle objects inside arrays by recursively checking them
            if (Utils.checkForFunctionProperty(item)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  static handleInvalidDate(date) {
    if (typeof date === 'number') {
      return !isNaN(date) ? date : null;
    } else if (date instanceof Date || typeof date === 'string') {
      return date;
    }
    return null;
  }
}

/***/ }),

/***/ "./public/lib/vega.js":
/*!****************************!*\
  !*** ./public/lib/vega.js ***!
  \****************************/
/*! exports provided: vega, vegaLite, vegaExpressionInterpreter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vegaLite", function() { return vegaLite; });
/* harmony import */ var vega_lite_build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vega-lite/build/index.js */ "../../../node_modules/vega-lite/build/index.js");
/* harmony import */ var vega_build_vega_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega/build/vega.js */ "../../../node_modules/vega/build/vega.js");
/* harmony import */ var vega_build_vega_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vega_build_vega_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vega", function() { return vega_build_vega_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var vega_interpreter_build_vega_interpreter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vega-interpreter/build/vega-interpreter.module */ "../../../node_modules/vega-interpreter/build/vega-interpreter.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vegaExpressionInterpreter", function() { return vega_interpreter_build_vega_interpreter_module__WEBPACK_IMPORTED_MODULE_2__["expressionInterpreter"]; });

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

/* eslint-disable import/namespace */




const vegaLite = {
  compile: vega_lite_build_index_js__WEBPACK_IMPORTED_MODULE_0__["compile"],
  version: vega_lite_build_index_js__WEBPACK_IMPORTED_MODULE_0__["version"]
};


/***/ }),

/***/ "./public/vega_view/vega_base_view.js":
/*!********************************************!*\
  !*** ./public/vega_view/vega_base_view.js ***!
  \********************************************/
/*! exports provided: bypassExternalUrlCheck, VegaBaseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bypassExternalUrlCheck", function() { return bypassExternalUrlCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaBaseView", function() { return VegaBaseView; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_vega__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/vega */ "./public/lib/vega.js");
/* harmony import */ var _data_model_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data_model/utils */ "./public/data_model/utils.ts");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vega_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vega_tooltip */ "./public/vega_view/vega_tooltip.js");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/extract_index_pattern */ "./public/lib/extract_index_pattern.ts");
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












_lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].scheme('euiPaletteColorBlind', Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["euiPaletteColorBlind"])());

// Vega's extension functions are global. When called,
// we forward execution to the instance-specific handler
// This functions must be declared in the VegaBaseView class
const vegaFunctions = {
  opensearchDashboardsAddFilter: 'addFilterHandler',
  opensearchDashboardsRemoveFilter: 'removeFilterHandler',
  opensearchDashboardsRemoveAllFilters: 'removeAllFiltersHandler',
  opensearchDashboardsSetTimeFilter: 'setTimeFilterHandler',
  opensearchDashboardsVisEventTriggered: 'triggerExternalActionHandler'
};
for (const funcName of Object.keys(vegaFunctions)) {
  if (!_lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].expressionFunction(funcName)) {
    _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].expressionFunction(funcName, function handlerFwd(...args) {
      const view = this.context.dataflow;
      view.runAfter(() => view._opensearchDashboardsView.vegaFunctionsHandler(funcName, ...args));
    });
  }
}
const bypassToken = Symbol();
function bypassExternalUrlCheck(url) {
  // processed in the  loader.sanitize  below
  return {
    url,
    bypassToken
  };
}
class VegaBaseView {
  constructor(opts) {
    this._$parentEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(opts.parentEl);
    this._parser = opts.vegaParser;
    this._serviceSettings = opts.serviceSettings;
    this._filterManager = opts.filterManager;
    this._applyFilter = opts.applyFilter;
    this._triggerExternalAction = opts.externalAction;
    this._timefilter = opts.timefilter;
    this._view = null;
    this._vegaViewConfig = null;
    this._vegaViewOptions = null;
    this._$messages = null;
    this._destroyHandlers = [];
    this._initialized = false;
    this._enableExternalUrls = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getEnableExternalUrls"])();
    this._exposeDebugObjectToWindow = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getExposeDebugObjectToWindow"])();
  }
  async init() {
    if (this._initialized) throw new Error(); // safety
    this._initialized = true;
    try {
      this._$parentEl.empty().addClass(`vgaVis`).css('flex-direction', this._parser.containerDir);

      // bypass the onWarn warning checks - in some cases warnings may still need to be shown despite being disabled
      for (const warn of this._parser.warnings) {
        this._addMessage('warn', warn);
      }
      if (this._parser.error) {
        this._addMessage('err', this._parser.error);
        return;
      }
      this._$container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="vgaVis__view">')
      // Force a height here because css is not loaded in mocha test
      .css('height', '100%').appendTo(this._$parentEl);
      this._$controls = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<div class="vgaVis__controls vgaVis__controls--${this._parser.controlsDir}">`).appendTo(this._$parentEl);
      this._addDestroyHandler(() => {
        if (this._$container) {
          this._$container.remove();
          this._$container = null;
        }
        if (this._$controls) {
          this._$controls.remove();
          this._$controls = null;
        }
        if (this._$messages) {
          this._$messages.remove();
          this._$messages = null;
        }
        if (this._view) {
          this._view.finalize();
        }
        this._view = null;
      });
      this._vegaViewConfig = this.createViewConfig();
      this._vegaViewOptions = {
        ast: true
      };

      // The derived class should create this method
      await this._initViewCustomizations();
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * Find index pattern by its title, if not given, gets it from spec or a defaults one
   * @param {string} [index]
   * @returns {Promise<string>} index id
   */
  async findIndex(index) {
    const {
      indexPatterns
    } = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getData"])();
    let idxObj;
    if (index) {
      [idxObj] = await indexPatterns.find(index);
      if (!idxObj) {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeVega.vegaParser.baseView.indexNotFoundErrorMessage', {
          defaultMessage: 'Index {index} not found',
          values: {
            index: `"${index}"`
          }
        }));
      }
    } else {
      [idxObj] = await Object(_lib_extract_index_pattern__WEBPACK_IMPORTED_MODULE_10__["extractIndexPatternsFromSpec"])(this._parser.isVegaLite ? this._parser.vlspec : this._parser.spec);
      if (!idxObj) {
        const defaultIdx = await indexPatterns.getDefault();
        if (defaultIdx) {
          idxObj = defaultIdx;
        } else {
          throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeVega.vegaParser.baseView.unableToFindDefaultIndexErrorMessage', {
            defaultMessage: 'Unable to find default index'
          }));
        }
      }
    }
    return idxObj.id;
  }
  createViewConfig() {
    const config = {
      // eslint-disable-next-line import/namespace
      logLevel: _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].Warn,
      // note: eslint has a false positive here
      renderer: this._parser.renderer,
      expr: _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vegaExpressionInterpreter"]
    };

    // Override URL sanitizer to prevent external data loading (if disabled)
    const loader = _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].loader();
    const originalSanitize = loader.sanitize.bind(loader);
    loader.sanitize = (uri, options) => {
      if (uri.bypassToken === bypassToken) {
        // If uri has a bypass token, the uri was encoded by bypassExternalUrlCheck() above.
        // because user can only supply pure JSON data structure.
        uri = uri.url;
      } else if (!this._enableExternalUrls) {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeVega.vegaParser.baseView.externalUrlsAreNotEnabledErrorMessage', {
          defaultMessage: 'External URLs are not enabled. Add   {enableExternalUrls}   to {opensearchDashboardsConfigFileName}',
          values: {
            enableExternalUrls: 'vis_type_vega.enableExternalUrls: true',
            opensearchDashboardsConfigFileName: 'opensearch_dashboards.yml'
          }
        }));
      }
      return originalSanitize(uri, options);
    };
    config.loader = loader;
    return config;
  }
  onError() {
    this._addMessage('err', _data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].formatErrorToStr(...arguments));
  }
  onWarn() {
    if (!this._parser || !this._parser.hideWarnings) {
      this._addMessage('warn', _data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].formatWarningToStr(...arguments));
    }
  }
  _addMessage(type, text) {
    if (!this._$messages) {
      this._$messages = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<ul class="vgaVis__messages">`).appendTo(this._$parentEl);
    }
    this._$messages.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<li class="vgaVis__message vgaVis__message--${type}">`).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<pre class="vgaVis__messageCode">`).text(text)));
  }
  resize() {
    if (this._parser.useResize && this._view && this.updateVegaSize(this._view)) {
      return this._view.runAsync();
    }
  }
  updateVegaSize(view) {
    // For some reason the object is slightly scrollable without the extra padding.
    // This might be due to https://github.com/jquery/jquery/issues/3808
    // Which is being fixed as part of jQuery 3.3.0
    const heightExtraPadding = 6;
    const width = Math.max(0, this._$container.width());
    const height = Math.max(0, this._$container.height()) - heightExtraPadding;
    if (view.width() !== width || view.height() !== height) {
      view.width(width).height(height);
      return true;
    }
    return false;
  }

  // This is only used when the PointInTimeEventsVisLayer type in vega parser's
  // visibleVisLayers is true. This VisLayer type is currently only supported
  // for time series chart types. It may be updated
  // in the future to expand to other chart type use cases.
  // Because there is no clean way to use autosize for concatenated views,
  // we manually set the value of the top view (the base vis) to fill in
  // space and leave enough space to show the bottom view (the events vis).
  // Ref: https://vega.github.io/vega-lite/docs/size.html#limitations
  addPointInTimeEventPadding(view) {
    // This value represents the pixel height of the event canvas. It is determined
    // based on the event mark size, such that there is sufficient but minimal space
    // needed to render the event marks.
    const eventVisHeight = 100;
    const height = Math.max(0, this._$container.height()) - eventVisHeight;
    if (view._signals.concat_0_height !== undefined) {
      view._signals.concat_0_height.value = height;
    }
  }
  setView(view) {
    if (this._view === view) return;
    if (this._view) {
      this._view.finalize();
    }
    this._view = view;
    if (view) {
      // Global vega expression handler uses it to call custom functions
      view._opensearchDashboardsView = this;
      if (this._parser.tooltips) {
        // position and padding can be specified with
        // {config:{kibana:{tooltips: {position: 'top', padding: 15 } }}}
        const tthandler = new _vega_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipHandler"](this._$container[0], view, this._parser.tooltips);

        // Vega bug workaround - need to destroy tooltip by hand
        this._addDestroyHandler(() => tthandler.hideTooltip());
      }
      return view.runAsync(); // Allows callers to await rendering
    }
  }

  /**
   * Handle
   * @param funcName
   * @param args
   * @returns {Promise<void>}
   */
  async vegaFunctionsHandler(funcName, ...args) {
    try {
      const handlerFunc = vegaFunctions[funcName];
      if (!handlerFunc || !this[handlerFunc]) {
        // in case functions don't match the list above
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeVega.vegaParser.baseView.functionIsNotDefinedForGraphErrorMessage', {
          defaultMessage: '{funcName} is not defined for this graph',
          values: {
            funcName: `${funcName}()`
          }
        }));
      }
      await this[handlerFunc](...args);
    } catch (err) {
      this.onError(err);
    }
  }

  /**
   * @param {object} query Query DSL snippet, as used in the query DSL editor
   * @param {string} [index] as defined in OpenSearch Dashboards, or default if missing
   * @param {string} alias OpenSearch Query DSL's custom label for `opensearchDashboardsAddFilter`, as used in '+ Add Filter'
   */
  async addFilterHandler(query, index, alias) {
    const indexId = await this.findIndex(_data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleNonStringIndex(index));
    const filter = _data_public__WEBPACK_IMPORTED_MODULE_8__["opensearchFilters"].buildQueryFilter(_data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleInvalidQuery(query), indexId, alias);
    this._applyFilter({
      filters: [filter]
    });
  }

  /**
   * This method is triggered using signal expression in vega-spec via @see opensearchDashboardsVisEventTriggered
   * @param {import('vega').ScenegraphEvent} event   Event triggered by the underlying vega visualization.
   * @param {import('vega').Item} datum   Data associated with the element on which the event was triggered.
   */
  triggerExternalActionHandler(event, datum) {
    this._triggerExternalAction({
      event,
      item: datum
    });
  }

  /**
   * @param {object} query Query DSL snippet, as used in the query DSL editor
   * @param {string} [index] as defined in OpenSearch Dashboards, or default if missing
   */
  async removeFilterHandler(query, index) {
    const indexId = await this.findIndex(_data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleNonStringIndex(index));
    const filterToRemove = _data_public__WEBPACK_IMPORTED_MODULE_8__["opensearchFilters"].buildQueryFilter(_data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleInvalidQuery(query), indexId);
    const currentFilters = this._filterManager.getFilters();
    const existingFilter = currentFilters.find(filter => _data_public__WEBPACK_IMPORTED_MODULE_8__["opensearchFilters"].compareFilters(filter, filterToRemove));
    if (!existingFilter) return;
    try {
      this._filterManager.removeFilter(existingFilter);
    } catch (err) {
      this.onError(err);
    }
  }
  removeAllFiltersHandler() {
    this._filterManager.removeAll();
  }

  /**
   * Update dashboard time filter to the new values
   * @param {number|string|Date} start
   * @param {number|string|Date} end
   */
  setTimeFilterHandler(start, end) {
    const {
      from,
      to,
      mode
    } = VegaBaseView._parseTimeRange(_data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleInvalidDate(start), _data_model_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].handleInvalidDate(end));
    this._applyFilter({
      timeFieldName: '*',
      filters: [{
        range: {
          '*': {
            mode,
            gte: from,
            lte: to
          }
        }
      }]
    });
  }

  /**
   * Parse start and end values, determining the mode, and if order should be reversed
   * @private
   */
  static _parseTimeRange(start, end) {
    const absStart = moment__WEBPACK_IMPORTED_MODULE_1___default()(start);
    const absEnd = moment__WEBPACK_IMPORTED_MODULE_1___default()(end);
    const isValidAbsStart = absStart.isValid();
    const isValidAbsEnd = absEnd.isValid();
    let mode = 'absolute';
    let from;
    let to;
    let reverse;
    if (isValidAbsStart && isValidAbsEnd) {
      // Both are valid absolute dates.
      from = absStart;
      to = absEnd;
      reverse = absStart.isAfter(absEnd);
    } else {
      // Try to parse as relative dates too (absolute dates will also be accepted)
      const startDate = _elastic_datemath__WEBPACK_IMPORTED_MODULE_2___default.a.parse(start);
      const endDate = _elastic_datemath__WEBPACK_IMPORTED_MODULE_2___default.a.parse(end);
      if (!startDate || !endDate || !startDate.isValid() || !endDate.isValid()) {
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('visTypeVega.vegaParser.baseView.timeValuesTypeErrorMessage', {
          defaultMessage: 'Error setting time filter: both time values must be either relative or absolute dates. {start}, {end}',
          values: {
            start: `start=${JSON.stringify(start)}`,
            end: `end=${JSON.stringify(end)}`
          }
        }));
      }
      reverse = startDate.isAfter(endDate);
      if (isValidAbsStart || isValidAbsEnd) {
        // Mixing relative and absolute - treat them as absolute
        from = startDate;
        to = endDate;
      } else {
        // Both dates are relative
        mode = 'relative';
        from = start;
        to = end;
      }
    }
    if (reverse) {
      [from, to] = [to, from];
    }
    return {
      from,
      to,
      mode
    };
  }

  /**
   * Set global debug variable to simplify vega debugging in console. Show info message first time
   */
  setDebugValues(view, spec, vlspec) {
    var _this$_parser$searchA;
    // The vega inspector can now be null when rendering line charts using vega for the overlay visualization feature.
    // This is because the inspectors get added at bootstrap to the different chart types and visualize embeddable
    // thinks the line chart is vislib line chart and uses that inspector adapter and has no way of knowing it's
    // actually a vega-lite chart and needs to use the vega inspector adapter without hacky code.
    (_this$_parser$searchA = this._parser.searchAPI.inspectorAdapters) === null || _this$_parser$searchA === void 0 || (_this$_parser$searchA = _this$_parser$searchA.vega) === null || _this$_parser$searchA === void 0 || _this$_parser$searchA.bindInspectValues({
      view,
      spec: vlspec || spec
    });
    if (window && this._exposeDebugObjectToWindow) {
      if (window.VEGA_DEBUG === undefined && console) {
        console.log('%cWelcome to OpenSearch Dashboards Vega Plugin!', 'font-size: 16px; font-weight: bold;');
        console.log('You can access the Vega view with VEGA_DEBUG. ' + 'Learn more at https://vega.github.io/vega/docs/api/debugging/.');
      }
      const debugObj = {};
      window.VEGA_DEBUG = debugObj;
      window.VEGA_DEBUG.VEGA_VERSION = _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vega"].version;
      window.VEGA_DEBUG.VEGA_LITE_VERSION = _lib_vega__WEBPACK_IMPORTED_MODULE_3__["vegaLite"].version;
      window.VEGA_DEBUG.view = view;
      window.VEGA_DEBUG.vega_spec = spec;
      window.VEGA_DEBUG.vegalite_spec = vlspec;

      // On dispose, clean up, but don't use undefined to prevent repeated debug statements
      this._addDestroyHandler(() => {
        if (debugObj === window.VEGA_DEBUG) {
          window.VEGA_DEBUG = null;
        }
      });
    }
  }
  destroy() {
    // properly handle multiple destroy() calls by converting this._destroyHandlers
    // into the _ongoingDestroy promise, while handlers are being disposed
    if (this._destroyHandlers) {
      // If no destroy is yet running, execute all handlers and wait for all of them to resolve.
      this._ongoingDestroy = Promise.all(this._destroyHandlers.map(v => v()));
      this._destroyHandlers = null;
    }
    return this._ongoingDestroy;
  }
  _addDestroyHandler(handler) {
    // If disposing hasn't started yet, enqueue it, otherwise dispose right away
    // This creates a minor issue - if disposing has started but not yet finished,
    // and we dispose the new handler right away, the destroy() does not wait for it.
    // This behavior is no different from the case when disposing has already completed,
    // so it shouldn't create any issues.
    if (this._destroyHandlers) {
      this._destroyHandlers.push(handler);
    } else {
      handler();
    }
  }
}

/***/ }),

/***/ "./public/vega_view/vega_tooltip.js":
/*!******************************************!*\
  !*** ./public/vega_view/vega_tooltip.js ***!
  \******************************************/
/*! exports provided: TooltipHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipHandler", function() { return TooltipHandler; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vega-tooltip */ "../../../node_modules/vega-tooltip/build/vega-tooltip.js");
/* harmony import */ var vega_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vega_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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





// Some of this code was adapted from https://github.com/vega/vega-tooltip

const tooltipId = 'vega-opensearch-dashboards-tooltip';

/**
 * Simulate the result of the DOM's getBoundingClientRect()
 */
function createRect(left, top, width, height) {
  return {
    left,
    top,
    width,
    height,
    x: left,
    y: top,
    right: left + width,
    bottom: top + height
  };
}

/**
 * The tooltip handler class.
 */
class TooltipHandler {
  constructor(container, view, opts) {
    this.container = container;
    this.position = opts.position;
    this.padding = opts.padding;
    this.centerOnMark = opts.centerOnMark;
    view.tooltip(this.handler.bind(this));
  }

  /**
   * The handler function.
   */
  handler(view, event, item, value) {
    this.hideTooltip();

    // hide tooltip for null, undefined, or empty string values
    if (value == null || value === '') {
      return;
    }
    const el = document.createElement('div');
    el.setAttribute('id', tooltipId);
    ['vgaVis__tooltip', 'euiToolTipPopover', 'euiToolTip', `euiToolTip--${this.position}`].forEach(className => {
      el.classList.add(className);
    });

    // Sanitized HTML is created by the tooltip library,
    // with a large number of tests, hence suppressing eslint here.
    // eslint-disable-next-line no-unsanitized/property
    el.innerHTML = Object(vega_tooltip__WEBPACK_IMPORTED_MODULE_1__["formatValue"])(value, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.escape, 2);

    // add to DOM to calculate tooltip size
    document.body.appendChild(el);

    // if centerOnMark numeric value is smaller than the size of the mark, use mouse [x,y]
    let anchorBounds;
    if (item.bounds.width() > this.centerOnMark || item.bounds.height() > this.centerOnMark) {
      // I would expect clientX/Y, but that shows incorrectly
      anchorBounds = createRect(event.clientX, event.clientY, 0, 0);
    } else {
      const containerBox = this.container.getBoundingClientRect();
      anchorBounds = createRect(containerBox.left + view._origin[0] + item.bounds.x1, containerBox.top + view._origin[1] + item.bounds.y1, item.bounds.width(), item.bounds.height());
    }
    const pos = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["calculatePopoverPosition"])(anchorBounds, el.getBoundingClientRect(), this.position, this.padding);
    el.setAttribute('style', `top: ${pos.top}px; left: ${pos.left}px`);
  }
  hideTooltip() {
    const el = document.getElementById(tooltipId);
    if (el) el.remove();
  }
}

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=visTypeVega.chunk.1.js.map