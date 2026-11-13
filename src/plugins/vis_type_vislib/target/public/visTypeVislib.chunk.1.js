(window["visTypeVislib_bundle_jsonpfunction"] = window["visTypeVislib_bundle_jsonpfunction"] || []).push([[1],{

/***/ "../../../packages/opensearch-safer-lodash-set/index.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

exports.set = __webpack_require__(/*! ./lodash/set */ "../../../packages/opensearch-safer-lodash-set/lodash/set.js");
exports.setWith = __webpack_require__(/*! ./lodash/setWith */ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js");

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/_baseSet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var assignValue = __webpack_require__(/*! lodash/_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
  castPath = __webpack_require__(/*! lodash/_castPath */ "../../../node_modules/lodash/_castPath.js"),
  isFunction = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js"),
  isIndex = __webpack_require__(/*! lodash/_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
  isObject = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js"),
  toKey = __webpack_require__(/*! lodash/_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
      newValue = value;
    if (key == 'prototype' && isFunction(nested)) {
      throw new Error('Illegal access of function prototype');
    }
    if (index != lastIndex) {
      var objValue = hasOwnProperty.call(nested, key) ? nested[key] : undefined;
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
module.exports = baseSet;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/set.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/set.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
module.exports = set;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/setWith.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}
module.exports = setWith;

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: DIMMING_OPACITY_SETTING, HEATMAP_MAX_BUCKETS_SETTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIMMING_OPACITY_SETTING", function() { return DIMMING_OPACITY_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_MAX_BUCKETS_SETTING", function() { return HEATMAP_MAX_BUCKETS_SETTING; });
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

const DIMMING_OPACITY_SETTING = 'visualization:dimmingOpacity';
const HEATMAP_MAX_BUCKETS_SETTING = 'visualization:heatmap:maxBuckets';

/***/ }),

/***/ "./public/vislib/components/labels/data_array.js":
/*!*******************************************************!*\
  !*** ./public/vislib/components/labels/data_array.js ***!
  \*******************************************************/
/*! exports provided: dataArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataArray", function() { return dataArray; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flatten_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flatten_series */ "./public/vislib/components/labels/flatten_series.js");
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




/*
 * Accepts a OpenSearch Dashboards data object and returns an array of values objects.
 */
function dataArray(obj) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj) || !obj.rows && !obj.columns && !obj.series) {
    throw new TypeError('GetArrayUtilService expects an object with a series, rows, or columns key');
  }
  if (!obj.series) return Object(_flatten_series__WEBPACK_IMPORTED_MODULE_1__["flattenSeries"])(obj);
  return obj.series;
}

/***/ }),

/***/ "./public/vislib/components/labels/flatten_series.js":
/*!***********************************************************!*\
  !*** ./public/vislib/components/labels/flatten_series.js ***!
  \***********************************************************/
/*! exports provided: flattenSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenSeries", function() { return flattenSeries; });
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



/*
 * Accepts a OpenSearch Dashboards data object with a rows or columns key
 * and returns an array of flattened series values.
 */
function flattenSeries(obj) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj) || !obj.rows && !obj.columns) {
    throw new TypeError('GetSeriesUtilService expects an object with either a rows or columns key');
  }
  obj = obj.rows ? obj.rows : obj.columns;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(obj).map('series').flattenDeep().value();
}

/***/ }),

/***/ "./public/vislib/components/labels/labels.js":
/*!***************************************************!*\
  !*** ./public/vislib/components/labels/labels.js ***!
  \***************************************************/
/*! exports provided: labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_array */ "./public/vislib/components/labels/data_array.js");
/* harmony import */ var _uniq_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniq_labels */ "./public/vislib/components/labels/uniq_labels.js");
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





/*
 * Accepts a OpenSearch Dashboards data object and returns an array of unique labels (strings).
 * Extracts the field formatter from the raw object and passes it to the
 * getArrOfUniqLabels function.
 *
 * Currently, this service is only used for vertical bar charts and line charts.
 */
function labels(obj) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj)) {
    throw new TypeError('LabelUtil expects an object');
  }
  return Object(_uniq_labels__WEBPACK_IMPORTED_MODULE_2__["uniqLabels"])(Object(_data_array__WEBPACK_IMPORTED_MODULE_1__["dataArray"])(obj));
}

/***/ }),

/***/ "./public/vislib/components/labels/truncate_labels.js":
/*!************************************************************!*\
  !*** ./public/vislib/components/labels/truncate_labels.js ***!
  \************************************************************/
/*! exports provided: truncateLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateLabel", function() { return truncateLabel; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
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




/***
 *
 * @param text (d3 node containing text)
 * @param size (number of characters to leave)
 * @returns {text} the updated text
 */
const truncateLabel = function (text, size) {
  const node = d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(text).node();
  const str = jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).text();
  if (size === 0) return str;
  if (size >= str.length) return str;
  return str.substr(0, size) + '…';
};


/***/ }),

/***/ "./public/vislib/components/labels/uniq_labels.js":
/*!********************************************************!*\
  !*** ./public/vislib/components/labels/uniq_labels.js ***!
  \********************************************************/
/*! exports provided: uniqLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqLabels", function() { return uniqLabels; });
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



/*
 * Accepts an array of data objects and a formatter function.
 * Returns a unique list of formatted labels (strings).
 */
function uniqLabels(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('UniqLabelUtil expects an array of objects');
  }
  return lodash__WEBPACK_IMPORTED_MODULE_0___default()(arr).map('label').uniq().value();
}

/***/ }),

/***/ "./public/vislib/components/tooltip/_collect_branch.js":
/*!*************************************************************!*\
  !*** ./public/vislib/components/tooltip/_collect_branch.js ***!
  \*************************************************************/
/*! exports provided: collectBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectBranch", function() { return collectBranch; });
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

function collectBranch(leaf) {
  // walk up the branch for each parent
  function walk(item, memo) {
    // record the depth
    const depth = item.depth - 1;

    // For buckets, we use the column name to determine what the field name is.
    // If item.rawData doesn't exist, it is a metric in which case we use the
    // value of item.name. If neither exists, we fall back to the leve for the
    // field name.
    function getFieldName(i) {
      if (i.rawData && i.rawData.column > -1) {
        const {
          column,
          table
        } = i.rawData;
        return table.columns[column].name;
      }
      return i.name || `level ${i.depth}`;
    }

    // Add the row to the tooltipScope.rows
    memo.unshift({
      depth: depth,
      field: getFieldName(item),
      bucket: item.name,
      metric: item.size,
      item: item
    });

    // If the item has a parent and it's also a child then continue walking
    // up the branch
    if (item.parent && item.parent.parent) {
      return walk(item.parent, memo);
    } else {
      return memo;
    }
  }
  return walk(leaf, []);
}

/***/ }),

/***/ "./public/vislib/components/tooltip/_hierarchical_tooltip_formatter.js":
/*!*****************************************************************************!*\
  !*** ./public/vislib/components/tooltip/_hierarchical_tooltip_formatter.js ***!
  \*****************************************************************************/
/*! exports provided: hierarchicalTooltipFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hierarchicalTooltipFormatter", function() { return hierarchicalTooltipFormatter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/numeral */ "@elastic/numeral");
/* harmony import */ var _elastic_numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _collect_branch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_collect_branch */ "./public/vislib/components/tooltip/_collect_branch.js");
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







function hierarchicalTooltipFormatter(metricFieldFormatter) {
  return function ({
    datum
  }) {
    // Collect the current leaf and parents into an array of values
    const rows = Object(_collect_branch__WEBPACK_IMPORTED_MODULE_5__["collectBranch"])(datum);

    // Map those values to what the tooltipSource.rows format.
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEachRight(rows, function (row) {
      row.spacer = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.repeat('&nbsp;', row.depth));
      let percent;
      if (row.item.percentOfGroup !== null && row.item.percentOfGroup !== undefined) {
        percent = row.item.percentOfGroup;
      }
      row.metric = metricFieldFormatter ? metricFieldFormatter.convert(row.metric) : row.metric;
      if (percent !== null && percent !== undefined) {
        row.metric += ' (' + _elastic_numeral__WEBPACK_IMPORTED_MODULE_2___default()(percent).format('0.[00]%') + ')';
      }
      return row;
    });
    return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToStaticMarkup"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "visTooltip__table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "eui-textLeft visTooltip__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      tagName: "th",
      scope: "col",
      id: "visTypeVislib.vislib.tooltip.fieldLabel",
      defaultMessage: "field"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      tagName: "th",
      scope: "col",
      id: "visTypeVislib.vislib.tooltip.valueLabel",
      defaultMessage: "value"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      scope: "col"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, rows.map((row, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "visTooltip__value",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visTooltip__labelContainer"
    }, row.field)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visTooltip__labelContainer"
    }, row.bucket)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.metric)))))));
  };
}

/***/ }),

/***/ "./public/vislib/components/tooltip/_pointseries_tooltip_formatter.js":
/*!****************************************************************************!*\
  !*** ./public/vislib/components/tooltip/_pointseries_tooltip_formatter.js ***!
  \****************************************************************************/
/*! exports provided: pointSeriesTooltipFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointSeriesTooltipFormatter", function() { return pointSeriesTooltipFormatter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
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



function pointSeriesTooltipFormatter() {
  return function tooltipFormatter({
    datum,
    data
  }) {
    if (!datum) return '';
    const details = [];
    const currentSeries = data.series && data.series.find(series => series.rawId === datum.seriesId);
    const addDetail = (label, value) => details.push({
      label,
      value
    });
    if (datum.extraMetrics) {
      datum.extraMetrics.forEach(metric => {
        addDetail(metric.label, metric.value);
      });
    }
    if (datum.x !== null && datum.x !== undefined) {
      addDetail(data.xAxisLabel, data.xAxisFormatter(datum.x));
    }
    if (datum.y !== null && datum.y !== undefined) {
      var _datum$yRaw;
      const value = datum.yScale ? datum.yScale * datum.y : datum.y;
      let label = currentSeries.label;

      // For stacked charts the y axis data is only available in the raw table
      const tableColumns = datum === null || datum === void 0 || (_datum$yRaw = datum.yRaw) === null || _datum$yRaw === void 0 || (_datum$yRaw = _datum$yRaw.table) === null || _datum$yRaw === void 0 ? void 0 : _datum$yRaw.columns;
      if (tableColumns && tableColumns.length > 2) {
        const yColumn = datum.yRaw.column ? tableColumns[datum.yRaw.column] : {};
        label = yColumn.name || label;
      }
      addDetail(label, currentSeries.yAxisFormatter(value));
    }
    if (datum.z !== null && datum.z !== undefined) {
      addDetail(currentSeries.zLabel, currentSeries.zAxisFormatter(datum.z));
    }
    if (datum.series && datum.parent) {
      const dimension = datum.parent;
      addDetail(dimension.title, datum.series);
    }
    if (datum.tableRaw) {
      addDetail(datum.tableRaw.title, datum.tableRaw.value);
    }
    return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToStaticMarkup"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, details.map((detail, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "visTooltip__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visTooltip__labelContainer"
    }, detail.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "visTooltip__value"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "visTooltip__valueContainer"
    }, detail.value, detail.percent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " (", detail.percent, ")"))))))));
  };
}

/***/ }),

/***/ "./public/vislib/components/tooltip/index.js":
/*!***************************************************!*\
  !*** ./public/vislib/components/tooltip/index.js ***!
  \***************************************************/
/*! exports provided: Tooltip, hierarchicalTooltipFormatter, pointSeriesTooltipFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip */ "./public/vislib/components/tooltip/tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _tooltip__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]; });

/* harmony import */ var _hierarchical_tooltip_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hierarchical_tooltip_formatter */ "./public/vislib/components/tooltip/_hierarchical_tooltip_formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchicalTooltipFormatter", function() { return _hierarchical_tooltip_formatter__WEBPACK_IMPORTED_MODULE_1__["hierarchicalTooltipFormatter"]; });

/* harmony import */ var _pointseries_tooltip_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_pointseries_tooltip_formatter */ "./public/vislib/components/tooltip/_pointseries_tooltip_formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointSeriesTooltipFormatter", function() { return _pointseries_tooltip_formatter__WEBPACK_IMPORTED_MODULE_2__["pointSeriesTooltipFormatter"]; });

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

/***/ "./public/vislib/components/tooltip/position_tooltip.js":
/*!**************************************************************!*\
  !*** ./public/vislib/components/tooltip/position_tooltip.js ***!
  \**************************************************************/
/*! exports provided: positionTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionTooltip", function() { return positionTooltip; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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



const OFFSET = 10;
let $clone;

// translate css properties into their basic direction
const propDirs = {
  top: 'north',
  left: 'west'
};
function positionTooltip(opts, html) {
  if (!opts) return;
  const $chart = jquery__WEBPACK_IMPORTED_MODULE_1___default()(opts.$chart);
  const $el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(opts.$el);
  const $window = jquery__WEBPACK_IMPORTED_MODULE_1___default()(opts.$window || window);
  const $sizer = jquery__WEBPACK_IMPORTED_MODULE_1___default()(opts.$sizer);
  const prev = $chart.data('previousPlacement') || {};
  const event = opts.event;
  if (!$chart.length || !$el.length) return;
  const size = getTtSize(html || $el.html(), $sizer);
  const pos = getBasePosition(size, event);
  const overflow = getOverflow(size, pos, [$chart, $window]);
  const placement = placeToAvoidOverflow(pos, prev, overflow);
  $chart.data('previousPlacement', placement);
  return placement;
}
function getTtSize(ttHtml, $sizer) {
  if ($sizer.html() !== ttHtml) {
    $sizer.html(ttHtml);
  }
  const size = {
    width: $sizer.outerWidth(),
    height: $sizer.outerHeight()
  };
  return size;
}
function getBasePosition(size, event) {
  return {
    east: event.clientX + OFFSET,
    west: event.clientX - size.width - OFFSET,
    south: event.clientY + OFFSET,
    north: event.clientY - size.height - OFFSET
  };
}
function getBounds($el) {
  // in testing, $window is not actually a window, so we need to add
  // the offsets to make it work right.
  // Sometimes $el is a $(window), which doesn't have getBoundingClientRect()
  // which breaks in jQuery 3
  const bounds = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.isWindow($el[0]) ? {
    top: 0,
    left: 0
  } : $el.offset();
  bounds.top += $el.scrollTop();
  bounds.left += $el.scrollLeft();
  bounds.bottom = bounds.top + $el.outerHeight();
  bounds.right = bounds.left + $el.outerWidth();
  bounds.area = (bounds.bottom - bounds.top) * (bounds.right - bounds.left);
  return bounds;
}
function getOverflow(size, pos, containers) {
  const overflow = {};
  containers.map(getBounds).sort(function (a, b) {
    // ensure smallest containers are merged first
    return a.area - b.area;
  }).forEach(function (bounds) {
    // number of pixels that the tooltip would overflow it's far
    // side, if we placed it that way. (negative === no overflow)
    mergeOverflows(overflow, {
      north: bounds.top - pos.north,
      east: pos.east + size.width - bounds.right,
      south: pos.south + size.height - bounds.bottom,
      west: bounds.left - pos.west
    });
  });
  (window.overflows || (window.overflows = [])).push(overflow);
  return overflow;
}
function mergeOverflows(dest, src) {
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mergeWith(dest, src, function (a, b) {
    if (a == null || b == null) return a || b;
    if (a < 0 && b < 0) return Math.min(a, b);
    return Math.max(a, b);
  });

  // When tooltip overflows both sides of smaller container,
  // remove overflow on one side if the outer container can contain tooltip.
  if (dest.east && dest.west && dest.east > 0 && dest.west > 0 && (src.east < 0 || src.west < 0)) {
    if (src.east < src.west) {
      dest.east = src.east;
    } else {
      dest.west = src.west;
    }
  }
}
function pickPlacement(prop, pos, overflow, prev, pref, fallback, placement) {
  const stash = '_' + prop;

  // list of directions in order of preference
  const dirs = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq([prev[stash], pref, fallback].filter(Boolean));
  let dir;
  let value;

  // find the first direction that doesn't overflow
  for (let i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (overflow[dir] > 0) continue;
    value = pos[dir];
    break;
  }

  // if we don't find one that doesn't overflow, use
  // the first choice and offset based on overflow
  if (value == null) {
    dir = dirs[0];
    let offset = overflow[dir];
    if (propDirs[prop] === dir) {
      // when the property represents the same direction
      // as dir, we flip the overflow
      offset = offset * -1;
    }
    value = pos[dir] - offset;
  }
  placement[prop] = value;
  placement[stash] = dir;
}
function placeToAvoidOverflow(pos, prev, overflow) {
  const placement = {};
  pickPlacement('top', pos, overflow, prev, 'south', 'north', placement);
  pickPlacement('left', pos, overflow, prev, 'east', 'west', placement);
  return placement;
}

// expose units/helpers for testing
positionTooltip.getTtSize = getTtSize;
positionTooltip.getBasePosition = getBasePosition;
positionTooltip.getOverflow = getOverflow;
positionTooltip.getBounds = getBounds;
positionTooltip.placeToAvoidOverflow = placeToAvoidOverflow;
positionTooltip.removeClone = function () {
  $clone && $clone.remove();
  $clone = null;
};

/***/ }),

/***/ "./public/vislib/components/tooltip/tooltip.js":
/*!*****************************************************!*\
  !*** ./public/vislib/components/tooltip/tooltip.js ***!
  \*****************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/binder */ "./public/vislib/lib/binder.ts");
/* harmony import */ var _position_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position_tooltip */ "./public/vislib/components/tooltip/position_tooltip.js");
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/ui-shared-deps/theme */ "@osd/ui-shared-deps/theme");
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__);
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







let allContents = [];
const tooltipColumnPadding = parseInt(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiSizeXS || 0, 10) * 2;
const tooltipTableMargin = parseInt(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiSizeS || 0, 10) * 2;
const tooltipMaxWidth = parseInt(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_5__["euiThemeVars"].euiSizeXL || 0, 10) * 10;

/**
 * Add tooltip and listeners to visualization elements
 *
 * @class Tooltip
 * @constructor
 * @param el {HTMLElement} Reference to DOM element
 * @param formatter {Function} Tooltip formatter
 * @param events {Constructor} Allows tooltip to return event response data
 */
function Tooltip(id, el, formatter, events) {
  if (!(this instanceof Tooltip)) {
    return new Tooltip(id, el, formatter, events);
  }
  this.id = id; // unique id for this tooltip type
  this.el = el;
  this.order = 100; // higher ordered contents are rendered below the others
  this.formatter = formatter;
  this.events = events;
  this.containerClass = 'visWrapper';
  this.tooltipClass = 'visTooltip';
  this.tooltipSizerClass = 'visTooltip__sizingClone';
  this.showCondition = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.constant(true);
  this.binder = new _lib_binder__WEBPACK_IMPORTED_MODULE_3__["Binder"]();
}

/**
 * Get jquery reference to the tooltip node
 *
 * @return {Object} jQuery node object
 */
Tooltip.prototype.$get = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.once(function () {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div>').addClass(this.tooltipClass).appendTo(document.body);
});

/**
 * Get jquery reference to the tooltip sizer node
 *
 * @return {Object} jQuery node object
 */
Tooltip.prototype.$getSizer = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.once(function () {
  return this.$get().clone().removeClass(this.tooltipClass).addClass(this.tooltipSizerClass).appendTo(document.body);
});

/**
 * Show the tooltip, positioning it based on the content and chart container
 */
Tooltip.prototype.show = function () {
  const $tooltip = this.$get();
  const $chart = this.$getChart();
  const html = $tooltip.html();
  if (!$chart) return;
  const placement = Object(_position_tooltip__WEBPACK_IMPORTED_MODULE_4__["positionTooltip"])({
    $window: jquery__WEBPACK_IMPORTED_MODULE_2___default()(window),
    $chart: $chart,
    $el: $tooltip,
    $sizer: this.$getSizer(),
    event: d3__WEBPACK_IMPORTED_MODULE_0___default.a.event
  }, html);
  $tooltip.css({
    visibility: 'visible',
    left: placement.left,
    top: placement.top
  });
  // The number of columns on the tooltip is currently the only
  // thing that differenciate one tooltip; from another
  const tooltipColumns = $tooltip.find('tbody > tr:nth-of-type(1) > td').length;
  if (tooltipColumns === 2) {
    // on pointseries tooltip
    const tooltipWidth = $tooltip.outerWidth();
    // get the last column to the right
    const valueColumn = $tooltip.find('tr:nth-of-type(1) > td:nth-child(2)');
    if (valueColumn.length !== 1) {
      return;
    }
    const valueColumnSize = valueColumn.outerWidth();
    const isGratherThanHalf = valueColumnSize > tooltipWidth / 2;
    const containerMaxWidth = isGratherThanHalf ? tooltipWidth / 2 - tooltipTableMargin - tooltipColumnPadding * 2 : tooltipWidth - valueColumnSize - tooltipTableMargin - tooltipColumnPadding;
    $tooltip.find('.visTooltip__labelContainer').css({
      'max-width': containerMaxWidth
    });
    if (isGratherThanHalf && tooltipWidth === tooltipMaxWidth) {
      $tooltip.find('.visTooltip__valueContainer').css({
        'max-width': containerMaxWidth
      });
    }
  } else if (tooltipColumns === 3) {
    // on hierarchical tooltip
    const tooltipWidth = $tooltip.outerWidth();
    // get the last column to the right (3rd column)
    const valueColumn = $tooltip.find('tr:nth-of-type(1) > td:nth-child(3)');
    if (valueColumn.length !== 1) {
      return;
    }
    const valueColumnSize = valueColumn.outerWidth();
    const containerMaxWidth = (tooltipWidth - valueColumnSize - tooltipTableMargin) / 2 - tooltipColumnPadding;
    $tooltip.find('.visTooltip__labelContainer').css({
      'max-width': containerMaxWidth
    });
  }
};

/**
 * Hide the tooltip, clearing its contents
 */
Tooltip.prototype.hide = function () {
  const $tooltip = this.$get();
  allContents = [];
  $tooltip.css({
    visibility: 'hidden',
    left: '-500px',
    top: '-500px'
  });
};

/**
 * Get the jQuery chart node, based on the container object
 * NOTE: the container is a d3 selection
 *
 * @return {Object} jQuery node for the chart
 */
Tooltip.prototype.$getChart = function () {
  const chart = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.container && this.container.node());
  return chart.length ? chart : false;
};

/**
 * Renders tooltip
 *
 * @method render
 * @return {Function} Renders tooltip on a D3 selection
 */
Tooltip.prototype.render = function () {
  const self = this;

  /**
   * Calculates values for the tooltip placement
   *
   * @param {Object} selection D3 selection object
   */
  return function (selection) {
    const $tooltip = self.$get();
    const id = self.id;
    const order = self.order;
    if (self.container === undefined || self.container !== d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(self.el).select('.' + self.containerClass)) {
      self.container = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(self.el).select('.' + self.containerClass);
    }
    const $chart = self.$getChart();
    if ($chart) {
      self.binder.jqOn($chart, 'mouseleave', function () {
        // only clear when we leave the chart, so that
        // moving between points doesn't make it reposition
        $chart.removeData('previousPlacement');
      });
    }
    selection.each(function (d, i) {
      const element = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
      function render(html) {
        allContents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(allContents, function (content) {
          return content.id !== id;
        });
        if (html) allContents.push({
          id,
          html,
          order
        });
        const allHtml = lodash__WEBPACK_IMPORTED_MODULE_1___default()(allContents).sortBy('order').map('html').compact().join('\n');
        if (allHtml) {
          $tooltip.html(allHtml);
          self.show();
        } else {
          self.hide();
        }
      }
      self.binder.fakeD3Bind(this, 'mousemove', function () {
        if (!self.showCondition.call(element, d, i)) {
          return render();
        }
        const events = self.events ? self.events.eventResponse(d, i) : d;
        return render(self.formatter(events));
      });
      self.binder.fakeD3Bind(this, 'mouseleave', function () {
        render();
      });
    });
  };
};
Tooltip.prototype.destroy = function () {
  this.hide();
  this.binder.destroy();
};

/***/ }),

/***/ "./public/vislib/components/zero_injection/flatten_data.js":
/*!*****************************************************************!*\
  !*** ./public/vislib/components/zero_injection/flatten_data.js ***!
  \*****************************************************************/
/*! exports provided: flattenData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenData", function() { return flattenData; });
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



/*
 * Accepts a OpenSearch Dashboards data object, flattens the data.series values array,
 * and returns an array of values objects.
 */
function flattenData(obj) {
  let charts;
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj) || !obj.rows && !obj.columns && !obj.series) {
    throw new TypeError('flattenData expects an object with a series, rows, or columns key');
  }
  if (!obj.series) {
    charts = obj.rows ? obj.rows : obj.columns;
  }
  return lodash__WEBPACK_IMPORTED_MODULE_0___default()(charts ? charts : [obj]).map('series').flattenDeep().map('values').flattenDeep().filter(Boolean).value();
}

/***/ }),

/***/ "./public/vislib/components/zero_injection/inject_zeros.js":
/*!*****************************************************************!*\
  !*** ./public/vislib/components/zero_injection/inject_zeros.js ***!
  \*****************************************************************/
/*! exports provided: injectZeros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectZeros", function() { return injectZeros; });
/* harmony import */ var _ordered_x_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordered_x_keys */ "./public/vislib/components/zero_injection/ordered_x_keys.js");
/* harmony import */ var _zero_filled_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zero_filled_array */ "./public/vislib/components/zero_injection/zero_filled_array.js");
/* harmony import */ var _zero_fill_data_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zero_fill_data_array */ "./public/vislib/components/zero_injection/zero_fill_data_array.js");
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





/*
 * A OpenSearch Dashboards data object may have multiple series with different array lengths.
 * This proves an impediment to stacking in the visualization library.
 * Therefore, zero values must be injected wherever these arrays do not line up.
 * That is, each array must have the same x values with zeros filled in where the
 * x values were added.
 *
 * This function and its helper functions accepts a OpenSearch Dashboards data object
 * and injects zeros where needed.
 */

function injectZeros(obj, data, orderBucketsBySum = false) {
  const keys = Object(_ordered_x_keys__WEBPACK_IMPORTED_MODULE_0__["orderXValues"])(data, orderBucketsBySum);
  obj.forEach(function (series) {
    const zeroArray = Object(_zero_filled_array__WEBPACK_IMPORTED_MODULE_1__["createZeroFilledArray"])(keys, series.label);
    series.values = Object(_zero_fill_data_array__WEBPACK_IMPORTED_MODULE_2__["zeroFillDataArray"])(zeroArray, series.values);
  });
  return obj;
}

/***/ }),

/***/ "./public/vislib/components/zero_injection/ordered_x_keys.js":
/*!*******************************************************************!*\
  !*** ./public/vislib/components/zero_injection/ordered_x_keys.js ***!
  \*******************************************************************/
/*! exports provided: orderXValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderXValues", function() { return orderXValues; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uniq_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uniq_keys */ "./public/vislib/components/zero_injection/uniq_keys.js");
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





/*
 * Accepts a OpenSearch Dashboards data object and returns
 * an array of x axis values.
 * values sorted by timestamp if isDate and Date Histogram agg
 * else values sorted by index
 */
function orderXValues(obj, orderBucketsBySum = false) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj)) {
    throw new Error('orderXValues expects an object');
  }
  const uniqKeys = Object(_uniq_keys__WEBPACK_IMPORTED_MODULE_2__["getUniqKeys"])(obj);
  const uniqKeysPairs = [...uniqKeys.entries()];
  const interval = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(obj, 'ordered.interval');
  const dateInterval = moment__WEBPACK_IMPORTED_MODULE_1___default.a.isDuration(interval) ? interval : false;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default()(uniqKeysPairs).sortBy(function (d) {
    if (d[1].isDate || d[1].isOrdered) {
      return +d[0];
    }
    return orderBucketsBySum ? -d[1].sum : d[1].index;
  }).map(function (d, i, list) {
    if (!d[1].isNumber) return d[0];
    const val = +d[0];
    if (interval == null) return val;
    const gapEdge = parseFloat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(list, [i + 1, 0]));
    if (isNaN(gapEdge)) return val;
    const vals = [];
    let next = val;
    if (dateInterval) {
      next = moment__WEBPACK_IMPORTED_MODULE_1___default()(val);
      while (next < gapEdge) {
        vals.push(next.valueOf());
        next.add(dateInterval);
      }
    } else {
      while (next < gapEdge) {
        vals.push(next);
        next += interval;
      }
    }
    return vals;
  }).flatten().value();
}

/***/ }),

/***/ "./public/vislib/components/zero_injection/uniq_keys.js":
/*!**************************************************************!*\
  !*** ./public/vislib/components/zero_injection/uniq_keys.js ***!
  \**************************************************************/
/*! exports provided: getUniqKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqKeys", function() { return getUniqKeys; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flatten_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flatten_data */ "./public/vislib/components/zero_injection/flatten_data.js");
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




/*
 * Accepts a OpenSearch Dashboards data object.
 * Returns an object with unique x axis values as keys with an object of
 * their index numbers and an isNumber boolean as their values.
 * e.g. { 'xAxisValue': { index: 1, isNumber: false }}, ...
 */
function getUniqKeys(obj) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj)) {
    throw new TypeError('getUniqKeys expects an object');
  }
  const flattenedData = Object(_flatten_data__WEBPACK_IMPORTED_MODULE_1__["flattenData"])(obj);
  const uniqueXValues = new Map();
  let charts;
  if (!obj.series) {
    charts = obj.rows ? obj.rows : obj.columns;
  } else {
    charts = [obj];
  }
  const isDate = charts.every(chart => {
    return chart.ordered && chart.ordered.date;
  });
  const isOrdered = charts.every(chart => {
    return chart.ordered;
  });
  const initXValue = (key, index) => {
    uniqueXValues.set(key, {
      index,
      isDate,
      isOrdered,
      isNumber: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(key),
      sum: 0
    });
  };

  // Populate `uniqueXValues` with the preserved x key order from the
  // original tabified data. `flattenedData` only contains the first
  // non-zero values in each series, and therefore is not guaranteed
  // to match the order that came back from OpenSearch.
  if (obj.xAxisOrderedValues) {
    obj.xAxisOrderedValues.forEach(initXValue);
  }

  // Generate a sum for each value
  flattenedData.forEach(d => {
    const key = d.x;
    let prev = uniqueXValues.get(key);
    if (!prev) {
      // Value doesn't exist in xAxisOrderedValues, so we create it
      // and index it at the end.
      initXValue(key, uniqueXValues.size);
      prev = uniqueXValues.get(key);
    }
    uniqueXValues.set(key, {
      ...prev,
      sum: prev.sum + d.y
    });
  });
  return uniqueXValues;
}

/***/ }),

/***/ "./public/vislib/components/zero_injection/zero_fill_data_array.js":
/*!*************************************************************************!*\
  !*** ./public/vislib/components/zero_injection/zero_fill_data_array.js ***!
  \*************************************************************************/
/*! exports provided: zeroFillDataArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroFillDataArray", function() { return zeroFillDataArray; });
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



/*
 * Accepts an array of zero-filled y value objects (arr1)
 * and a OpenSearch Dashboards data.series[i].values array of objects (arr2).
 * Return a zero-filled array of objects (arr1).
 */

function zeroFillDataArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('zeroFillDataArray expects 2 arrays');
  }
  let i;
  let val;
  let index;
  const max = arr2.length;
  const getX = function (d) {
    return d.x === val.x;
  };
  for (i = 0; i < max; i++) {
    val = arr2[i];
    index = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.findIndex(arr1, getX);
    arr1.splice(index, 1, val);
  }
  return arr1;
}

/***/ }),

/***/ "./public/vislib/components/zero_injection/zero_filled_array.js":
/*!**********************************************************************!*\
  !*** ./public/vislib/components/zero_injection/zero_filled_array.js ***!
  \**********************************************************************/
/*! exports provided: createZeroFilledArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZeroFilledArray", function() { return createZeroFilledArray; });
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

/*
 * Accepts an array of x axis values (strings or numbers).
 * Returns a zero filled array.
 */
function createZeroFilledArray(arr, label) {
  if (!Array.isArray(arr)) {
    throw new Error('createZeroFilledArray expects an array of strings or numbers');
  }
  const zeroFilledArray = [];
  arr.forEach(function (val) {
    zeroFilledArray.push({
      x: val,
      xi: Infinity,
      y: 0,
      series: label
    });
  });
  return zeroFilledArray;
}

/***/ }),

/***/ "./public/vislib/errors.ts":
/*!*********************************!*\
  !*** ./public/vislib/errors.ts ***!
  \*********************************/
/*! exports provided: VislibError, InvalidLogScaleValues, ContainerTooSmall, PieContainsAllZeros, NoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VislibError", function() { return VislibError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidLogScaleValues", function() { return InvalidLogScaleValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTooSmall", function() { return ContainerTooSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieContainsAllZeros", function() { return PieContainsAllZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResults", function() { return NoResults; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__);
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

/* eslint-disable max-classes-per-file */



class VislibError extends _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["OsdError"] {
  constructor(message) {
    super(message);
  }
  displayToScreen(handler) {
    handler.error(this.message);
  }
}
class InvalidLogScaleValues extends VislibError {
  constructor() {
    super('Values less than 1 cannot be displayed on a log scale');
  }
}
class ContainerTooSmall extends VislibError {
  constructor() {
    super('This container is too small to render the visualization');
  }
}
class PieContainsAllZeros extends VislibError {
  constructor() {
    super('No results displayed because all values equal 0.');
  }
}
class NoResults extends VislibError {
  constructor() {
    super(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVislib.vislib.errors.noResultsFoundTitle', {
      defaultMessage: 'No results found'
    }));
  }
}

/***/ }),

/***/ "./public/vislib/lib/_data_label.js":
/*!******************************************!*\
  !*** ./public/vislib/lib/_data_label.js ***!
  \******************************************/
/*! exports provided: dataLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataLabel", function() { return dataLabel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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
 * Creates a string based on the hex color passed in
 *
 * @method dataLabel
 * @param d {Object} object to wrap in d3.select
 * @returns {string} label value
 */
function dataLabel(selection, label) {
  d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(selection).attr('data-label', label);
}

/***/ }),

/***/ "./public/vislib/lib/_error_handler.js":
/*!*********************************************!*\
  !*** ./public/vislib/lib/_error_handler.js ***!
  \*********************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors */ "./public/vislib/errors.ts");
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
 * Common errors shared between constructors
 *
 * @class ErrorHandler
 * @constructor
 */
class ErrorHandler {
  constructor() {}

  /**
   * Validates the height and width are > 0
   * min size must be at least 1 px
   *
   * @method validateWidthandHeight
   * @param width {Number} HTMLElement width
   * @param height {Number} HTMLElement height
   * @returns {HTMLElement} HTML div with an error message
   */
  validateWidthandHeight(width, height) {
    const badWidth = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(width) || width <= 0;
    const badHeight = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(height) || height <= 0;
    if (badWidth || badHeight) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__["ContainerTooSmall"]();
    }
  }
}

/***/ }),

/***/ "./public/vislib/lib/alerts.js":
/*!*************************************!*\
  !*** ./public/vislib/lib/alerts.js ***!
  \*************************************/
/*! exports provided: Alerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alerts", function() { return Alerts; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
 * Adds alerts that float in front of a visualization
 *
 * @class Alerts
 * @constructor
 * @param el {HTMLElement} Reference to DOM element
 */
class Alerts {
  constructor(vis, alertDefs) {
    this.vis = vis;
    this.data = vis.data;
    this.alertDefs = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(alertDefs);
    this.alerts = lodash__WEBPACK_IMPORTED_MODULE_1___default()(alertDefs).map(alertDef => {
      if (!alertDef) return;
      if (alertDef.test && !alertDef.test(vis, this.data)) return;
      return this._addAlert(alertDef);
    }).compact();
  }
  _addAlert(alertDef) {
    const type = alertDef.type || 'info';
    const icon = alertDef.icon || type;
    const msg = alertDef.msg;
    // alert container
    const $icon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('visAlerts__icon fa fa-' + icon);
    const $text = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p>').addClass('visAlerts__text').text(msg);
    const $closeIcon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').addClass('fa fa-close');
    const $closeDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('visAlerts__close').append($closeIcon);
    const $alert = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('visAlert visAlert--' + type).append([$icon, $text, $closeDiv]);
    $closeDiv.on('click', () => {
      $alert.remove();
    });
    return $alert;
  }

  // renders initial alerts
  render() {
    const alerts = this.alerts;
    const vis = this.vis;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(vis.element).find('.visWrapper__alerts').append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('visAlerts__tray'));
    if (!alerts.size()) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(vis.element).find('.visAlerts__tray').append(alerts.value());
  }

  // shows new alert
  show(msg, type) {
    const vis = this.vis;
    const alert = {
      msg: msg,
      type: type
    };
    if (this.alertDefs.find(alertDef => alertDef.msg === alert.msg)) return;
    this.alertDefs.push(alert);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(vis.element).find('.visAlerts__tray').append(this._addAlert(alert));
  }
  destroy() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.vis.element).find('.visWrapper__alerts').remove();
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/axis.js":
/*!****************************************!*\
  !*** ./public/vislib/lib/axis/axis.js ***!
  \****************************************/
/*! exports provided: Axis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_error_handler */ "./public/vislib/lib/_error_handler.js");
/* harmony import */ var _axis_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./axis_title */ "./public/vislib/lib/axis/axis_title.js");
/* harmony import */ var _axis_labels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axis_labels */ "./public/vislib/lib/axis/axis_labels.js");
/* harmony import */ var _axis_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./axis_scale */ "./public/vislib/lib/axis/axis_scale.js");
/* harmony import */ var _axis_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./axis_config */ "./public/vislib/lib/axis/axis_config.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors */ "./public/vislib/errors.ts");
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










class Axis extends _error_handler__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"] {
  constructor(visConfig, axisConfigArgs) {
    super();
    this.visConfig = visConfig;
    this.axisConfig = new _axis_config__WEBPACK_IMPORTED_MODULE_7__["AxisConfig"](this.visConfig, axisConfigArgs);
    if (this.axisConfig.get('type') === 'category') {
      this.values = this.axisConfig.values;
      this.ordered = this.axisConfig.ordered;
    }
    this.axisScale = new _axis_scale__WEBPACK_IMPORTED_MODULE_6__["AxisScale"](this.axisConfig, visConfig);
    this.axisTitle = new _axis_title__WEBPACK_IMPORTED_MODULE_4__["AxisTitle"](this.axisConfig);
    this.axisLabels = new _axis_labels__WEBPACK_IMPORTED_MODULE_5__["AxisLabels"](this.axisConfig, this.axisScale);
    this.stack = d3__WEBPACK_IMPORTED_MODULE_0___default.a.layout.stack().x(d => {
      return d.x;
    }).y(d => {
      if (typeof this.axisConfig.get('scale.offset') === 'function' && this.axisConfig.get('scale.offset').name === 'expand') {
        return Math.abs(d.y);
      }
      return d.y;
    }).offset(this.axisConfig.get('scale.offset', 'zero'));
    const stackedMode = ['normal', 'grouped'].includes(this.axisConfig.get('scale.mode'));
    if (stackedMode) {
      this.stack = this._stackNegAndPosVals;
    }
  }
  _stackNegAndPosVals(data) {
    const cache = {};
    data.forEach(series => {
      series.forEach(value => {
        if (!cache[value.x]) cache[value.x] = [0, 0];
        value.y0 = cache[value.x][value.y < 0 ? 0 : 1];
        cache[value.x][value.y < 0 ? 0 : 1] += value.y;
      });
    });
    return data;
  }
  render() {
    const elSelector = this.axisConfig.get('elSelector');
    const rootEl = this.axisConfig.get('rootEl');
    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(rootEl).selectAll(elSelector).call(this.draw());
  }
  destroy() {
    const elSelector = this.axisConfig.get('elSelector');
    const rootEl = this.axisConfig.get('rootEl');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(rootEl).find(elSelector).find('svg').remove();
    this.axisTitle.destroy();
  }
  getAxis(length) {
    const scale = this.axisScale.getScale(length);
    const position = this.axisConfig.get('position');
    const axisFormatter = this.axisConfig.get('labels.axisFormatter');
    const d3Axis = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.axis().scale(scale).tickFormat(axisFormatter).orient(position);
    if (this.axisConfig.isTimeDomain()) {
      // use custom overwritten tick function on time domains to get nice
      // tick positions (e.g. at the start of the day) even for custom timezones
      d3Axis.tickValues(scale.timezoneCorrectedTicks(this.tickScale(length)));
    } else {
      d3Axis.ticks(this.tickScale(length));
    }
    return d3Axis;
  }
  getScale() {
    return this.axisScale.scale;
  }
  addInterval(interval) {
    return this.axisScale.addInterval(interval);
  }
  substractInterval(interval) {
    return this.axisScale.substractInterval(interval);
  }
  tickScale(length) {
    const yTickScale = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().clamp(true).domain([20, 40, 1000]).range([0, 3, 11]);
    return Math.ceil(yTickScale(length));
  }
  getLength(el) {
    if (this.axisConfig.isHorizontal()) {
      return jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).width();
    } else {
      return jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).height();
    }
  }
  adjustSize() {
    const config = this.axisConfig;
    const style = config.get('style');
    const chartEl = this.visConfig.get('el');
    const position = config.get('position');
    const axisPadding = 5;
    return function (selection) {
      const text = selection.selectAll('.tick text');
      const lengths = [];
      text.each(function textWidths() {
        lengths.push((() => {
          if (config.isHorizontal()) {
            return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.parentNode).node().getBBox().height;
          } else {
            return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.parentNode).node().getBBox().width;
          }
        })());
      });
      let length = lengths.length > 0 ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.max(lengths) : 0;
      length += axisPadding;
      if (config.isHorizontal()) {
        selection.attr('height', Math.ceil(length));
        if (position === 'top') {
          selection.select('g').attr('transform', `translate(0, ${length - parseInt(style.lineWidth)})`);
          selection.select('path').attr('transform', 'translate(1,0)');
        }
        if (config.get('type') === 'value') {
          const spacerNodes = jquery__WEBPACK_IMPORTED_MODULE_2___default()(chartEl).find(`.visAxis__spacer--y-${position}`);
          const elHeight = jquery__WEBPACK_IMPORTED_MODULE_2___default()(chartEl).find(`.visAxis__column--${position}`).height();
          spacerNodes.height(elHeight);
        }
      } else {
        const axisWidth = Math.ceil(length);
        selection.attr('width', axisWidth);
        if (position === 'left') {
          selection.select('g').attr('transform', `translate(${axisWidth},0)`);
        }
      }
    };
  }
  validate() {
    if (this.axisConfig.isLogScale() && this.axisConfig.isPercentage()) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_8__["VislibError"](`Can't mix percentage mode with log scale.`);
    }
  }
  draw() {
    const svgs = [];
    const self = this;
    const config = this.axisConfig;
    const style = config.get('style');
    return function (selection) {
      const n = selection[0].length;
      if (config.get('show') && self.axisTitle && ['left', 'top'].includes(config.get('position'))) {
        self.axisTitle.render(selection);
      }
      selection.each(function () {
        const el = this;
        const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el);
        const width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).width();
        const height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).height();
        const length = self.getLength(el, n);
        self.validate();
        const axis = self.getAxis(length);
        if (config.get('show')) {
          const svg = div.append('svg').attr('focusable', 'false').attr('width', width).attr('height', height);
          svgs.push(svg);
          const axisClass = self.axisConfig.isHorizontal() ? 'x' : 'y';
          svg.append('g').attr('class', `${axisClass} axis ${config.get('id')}`).call(axis);
          const container = svg.select('g.axis').node();
          if (container) {
            svg.select('path').style('stroke', style.color).style('stroke-width', style.lineWidth).style('stroke-opacity', style.opacity);
            svg.selectAll('line').style('stroke', style.tickColor).style('stroke-width', style.tickWidth).style('stroke-opacity', style.opacity);
          }
          if (self.axisLabels) self.axisLabels.render(svg);
        }
      });
      if (self.axisTitle && ['right', 'bottom'].includes(config.get('position'))) {
        self.axisTitle.render(selection);
      }
      svgs.forEach(svg => svg.call(self.adjustSize()));
    };
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/axis_config.js":
/*!***********************************************!*\
  !*** ./public/vislib/lib/axis/axis_config.js ***!
  \***********************************************/
/*! exports provided: AxisConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisConfig", function() { return AxisConfig; });
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scale_modes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scale_modes */ "./public/vislib/lib/axis/scale_modes.js");
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





const defaults = {
  show: true,
  type: 'value',
  elSelector: '.visAxis__column--{pos} .axis-div',
  position: 'left',
  scale: {
    type: 'linear',
    expandLastBucket: true,
    inverted: false,
    defaultYExtents: null,
    boundsMargin: 0,
    setYExtents: null,
    min: null,
    max: null,
    mode: _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].NORMAL
  },
  style: {
    color: '#ddd',
    lineWidth: '1px',
    opacity: 1,
    tickColor: '#ddd',
    tickWidth: '1px',
    tickLength: '6px',
    rangePadding: 0.1,
    rangeOuterPadding: 0
  },
  labels: {
    axisFormatter: null,
    show: true,
    rotate: 0,
    rotateAnchor: 'center',
    filter: false,
    color: '#ddd',
    font: '"Open Sans", "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '8pt',
    truncate: 100
  },
  title: {
    text: '',
    elSelector: '.visAxis__column--{pos} .axis-div'
  },
  padForLabels: 0
};
const padForLabelsX = 40;
const padForLabelsY = 15;
const categoryDefaults = {
  type: 'category',
  position: 'bottom'
};
const valueDefaults = {
  labels: {
    axisFormatter: d3__WEBPACK_IMPORTED_MODULE_2___default.a.format('n')
  }
};
const horizontalDefaults = {
  labels: {
    rotate: 0,
    rotateAnchor: 'end',
    filter: true,
    truncate: 0
  }
};
const verticalDefaults = {
  labels: {
    rotateAnchor: 'middle'
  }
};
class AxisConfig {
  constructor(chartConfig, axisConfigArgs) {
    const isCategoryType = axisConfigArgs.type === 'category';
    const typeDefaults = isCategoryType ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(categoryDefaults) : lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(valueDefaults);
    // _.defaultsDeep mutates axisConfigArgs nested values so we clone it first
    const axisConfigArgsClone = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(axisConfigArgs);
    const isCategoryAxis = axisConfigArgsClone.type === 'category';
    const isHorizontal = axisConfigArgsClone.position && ['top', 'bottom'].includes(axisConfigArgsClone.position);
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.merge(typeDefaults, isHorizontal || isCategoryAxis ? horizontalDefaults : verticalDefaults);
    this._values = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep({}, axisConfigArgsClone, typeDefaults, defaults);
    this._values.elSelector = this._values.elSelector.replace('{pos}', this._values.position);
    this._values.rootEl = chartConfig.get('el');
    this.data = chartConfig.data;
    if (isCategoryAxis) {
      if (!this._values.values) {
        this.values = this.data.xValues(chartConfig.get('orderBucketsBySum', false));
        this.ordered = this.data.get('ordered');
      } else {
        this.values = this._values.values;
      }
      if (!this._values.labels.axisFormatter) {
        this._values.labels.axisFormatter = this.data.data.xAxisFormatter || this.data.get('xAxisFormatter');
      }
    }
    if (this.get('type') === 'value') {
      const isWiggleOrSilhouette = this.get('scale.mode') === _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].WIGGLE || this.get('scale.mode') === _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].SILHOUETTE;
      // if show was not explicitly set and wiggle or silhouette option was checked
      if (isWiggleOrSilhouette) {
        this._values.scale.defaultYExtents = false;
        if (!axisConfigArgs.show) {
          this._values.show = false;
          this._values.title.show = true;
        }
      }
      if (this.isLogScale()) {
        this._values.labels.filter = true;
      }
    }
    if (axisConfigArgs.title == null || axisConfigArgs.title.text == null) {
      const label = isCategoryAxis ? 'xAxisLabel' : 'yAxisLabel';
      this.set('title.text', this.data.get(label));
    }

    // horizontal axis with ordinal scale should have labels rotated (so we can fit more)
    // unless explicitly overridden by user
    if (this.isHorizontal() && this.isOrdinal()) {
      this._values.labels.filter = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(axisConfigArgs, 'labels.filter', false);
      this._values.labels.rotate = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(axisConfigArgs, 'labels.rotate', 90);
      this._values.labels.truncate = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(axisConfigArgs, 'labels.truncate', 100);
    }
    if (this.get('type') === 'category' && !this.isHorizontal()) {
      this._values.scale.inverted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(axisConfigArgs, 'scale.inverted', true);
    }
    if (chartConfig.get('labels.show', false) && !isCategoryAxis) {
      this._values.padForLabels = isHorizontal ? padForLabelsX : padForLabelsY;
    }
    let offset;
    let stacked = true;
    switch (this.get('scale.mode')) {
      case _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].NORMAL:
        offset = 'zero';
        stacked = false;
        break;
      case _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].GROUPED:
        offset = 'group';
        stacked = false;
        break;
      case _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].PERCENTAGE:
        offset = function expand(data) {
          // taken from https://github.com/d3/d3/blob/v3.5.6/src/layout/stack.js#L193
          // fixed to support zeros
          const n = data.length;
          const m = data[0].length;
          const y0 = [];
          for (let j = 0; j < m; ++j) {
            let o = 0;
            for (let i = 0; i < n; i++) {
              o += data[i][j][1];
            }
            if (o) {
              for (let i = 0; i < n; i++) {
                data[i][j][1] /= o;
              }
            }
          }
          for (let j = 0; j < m; ++j) {
            y0[j] = 0;
          }
          return y0;
        };
        break;
      default:
        offset = this.get('scale.mode');
    }
    this.set('scale.offset', lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(axisConfigArgs, 'scale.offset', offset));
    /* axis.scale.stacked means that axis stacking function should be run */
    this.set('scale.stacked', stacked);
  }
  get(property, defaults) {
    if (typeof defaults === 'undefined' && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this._values, property)) {
      throw new Error(`Accessing invalid config property: ${property}`);
    }
    const val = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(this._values, property, defaults);
    if (val == null && defaults != null) return defaults;
    return val;
  }
  set(property, value) {
    return Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__["set"])(this._values, property, value);
  }
  isHorizontal() {
    return this._values.position === 'top' || this._values.position === 'bottom';
  }
  isOrdinal() {
    return !!this.values && !this.isTimeDomain();
  }
  isTimeDomain() {
    return this.ordered && this.ordered.date;
  }
  isPercentage() {
    return this._values.scale.mode === _scale_modes__WEBPACK_IMPORTED_MODULE_3__["SCALE_MODES"].PERCENTAGE;
  }
  isUserDefined() {
    return this._values.scale.setYExtents;
  }
  isYExtents() {
    return this._values.scale.defaultYExtents;
  }
  isLogScale() {
    return this.getScaleType() === 'log';
  }
  getScaleType() {
    return this._values.scale.type;
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/axis_labels.js":
/*!***********************************************!*\
  !*** ./public/vislib/lib/axis/axis_labels.js ***!
  \***********************************************/
/*! exports provided: AxisLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisLabels", function() { return AxisLabels; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_labels_truncate_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/labels/truncate_labels */ "./public/vislib/components/labels/truncate_labels.js");
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




class AxisLabels {
  constructor(axisConfig, scale) {
    this.axisConfig = axisConfig;
    this.axisScale = scale;
  }
  render(selection) {
    selection.call(this.draw());
  }
  rotateAxisLabels() {
    const config = this.axisConfig;
    return function (selection) {
      const text = selection.selectAll('.tick text');
      if (config.get('labels.rotate')) {
        text.style('text-anchor', function () {
          const currentValue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('text-anchor');
          const rotateDeg = config.get('labels.rotate');
          if (!rotateDeg) return currentValue;else {
            const position = config.get('position');
            switch (position) {
              case 'top':
                return 'end';
              case 'bottom':
                return 'end';
              default:
                if (rotateDeg === 90 || rotateDeg === -90) return 'middle';
                return currentValue;
            }
          }
        }).attr('dy', function () {
          return config.isHorizontal() ? '0.3em' : '0';
        }).attr('transform', function rotate(d, j) {
          const position = config.get('position');
          const rotateDeg = position === 'top' ? config.get('labels.rotate') : -config.get('labels.rotate');
          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css('text-anchor') === 'middle') {
            const coord = text[0][j].getBBox();
            const transX = coord.x + coord.width / 2;
            const transY = coord.y + coord.height / 2;
            return `rotate(${rotateDeg}, ${transX}, ${transY})`;
          } else {
            const transX = this.attributes.x.nodeValue;
            const transY = this.attributes.y.nodeValue;
            return `rotate(${rotateDeg}, ${transX}, ${transY})`;
          }
        });
      }
    };
  }
  truncateLabels() {
    const config = this.axisConfig;
    return function (selection) {
      if (!config.get('labels.truncate')) return;
      selection.selectAll('.tick text').text(function () {
        return Object(_components_labels_truncate_labels__WEBPACK_IMPORTED_MODULE_2__["truncateLabel"])(this, config.get('labels.truncate'));
      });
    };
  }
  filterAxisLabels() {
    const self = this;
    const config = this.axisConfig;
    const padding = 1.1;
    let lastTickStartEdge = Number.POSITIVE_INFINITY;
    let lastTickEndEdge = Number.NEGATIVE_INFINITY;
    return function (selection) {
      if (!config.get('labels.filter')) return;
      const el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(config.get('rootEl')).find(config.get('elSelector'));
      const upperBound = config.isHorizontal() ? el.width() : el.height();
      const lowerBound = 0;
      const scaleRange = self.axisScale.scale.range();
      const scaleWidth = Math.abs(scaleRange[scaleRange.length - 1] - scaleRange[0]);
      const scaleStartPad = 0.5 * (upperBound - scaleWidth);
      selection.selectAll('.tick text').text(function (d) {
        const parentNode = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.parentNode).node();
        const currentTickCenter = config.isHorizontal() ? scaleStartPad + self.axisScale.scale(d) : upperBound - scaleStartPad - self.axisScale.scale(d);
        const currentTickSize = (config.isHorizontal() ? parentNode.getBBox().width : parentNode.getBBox().height) * padding;
        const currentTickHalfSize = currentTickSize / 2;
        const currentTickStartEdge = currentTickCenter - currentTickHalfSize;
        const currentTickEndEdge = currentTickCenter + currentTickHalfSize;
        const outsideUpperBound = currentTickEndEdge > upperBound;
        const outsideLowerBound = currentTickStartEdge < lowerBound;
        const overlapsLastTick = currentTickEndEdge >= lastTickStartEdge && currentTickStartEdge <= lastTickEndEdge;
        if (outsideUpperBound || outsideLowerBound || overlapsLastTick) {
          d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.parentNode).remove();
        } else {
          lastTickStartEdge = currentTickCenter - currentTickHalfSize;
          lastTickEndEdge = currentTickCenter + currentTickHalfSize;
          return this.textContent;
        }
      });
    };
  }
  draw() {
    const self = this;
    const config = this.axisConfig;
    return function (selection) {
      selection.each(function () {
        selection.selectAll('text').attr('style', function () {
          const currentStyle = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).attr('style');
          return `${currentStyle} font-size: ${config.get('labels.fontSize')};`;
        });
        if (!config.get('labels.show')) selection.selectAll('text').attr('style', 'display: none;');
        selection.call(self.truncateLabels());
        selection.call(self.rotateAxisLabels());
        selection.call(self.filterAxisLabels());
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/axis_scale.js":
/*!**********************************************!*\
  !*** ./public/vislib/lib/axis/axis_scale.js ***!
  \**********************************************/
/*! exports provided: AxisScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisScale", function() { return AxisScale; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors */ "./public/vislib/errors.ts");
/* harmony import */ var _time_ticks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time_ticks */ "./public/vislib/lib/axis/time_ticks.js");
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






class AxisScale {
  constructor(axisConfig, visConfig) {
    this.axisConfig = axisConfig;
    this.visConfig = visConfig;
    if (this.axisConfig.get('type') === 'category') {
      this.values = this.axisConfig.values;
      this.ordered = this.axisConfig.ordered;
    }
  }
  getScaleType() {
    return this.axisConfig.getScaleType();
  }
  validateUserExtents(domain) {
    const config = this.axisConfig;
    return domain.map(val => {
      val = parseFloat(val);
      if (isNaN(val)) throw new Error(val + ' is not a valid number');
      if (config.isPercentage() && config.isUserDefined()) return val / 100;
      return val;
    });
  }
  getTimeDomain(data) {
    return [this.minExtent(data), this.maxExtent(data)];
  }
  minExtent(data) {
    return this.calculateExtent(data || this.values, 'min');
  }
  maxExtent(data) {
    return this.calculateExtent(data || this.values, 'max');
  }
  calculateExtent(data, extent) {
    const ordered = this.ordered;
    const opts = [ordered[extent]];
    let point = d3__WEBPACK_IMPORTED_MODULE_0___default.a[extent](data);
    if (this.axisConfig.get('scale.expandLastBucket') && extent === 'max') {
      point = this.addInterval(point);
    }
    opts.push(point);
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a[extent](opts.reduce(function (opts, v) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(v)) v = +v;
      if (!isNaN(v)) opts.push(v);
      return opts;
    }, []));
  }
  addInterval(x) {
    return this.modByInterval(x, +1);
  }
  subtractInterval(x) {
    return this.modByInterval(x, -1);
  }
  modByInterval(x, n) {
    const ordered = this.ordered;
    if (!ordered) return x;
    const interval = ordered.interval;
    if (!interval) return x;
    if (!ordered.date) {
      return x += ordered.interval * n;
    }
    const y = moment__WEBPACK_IMPORTED_MODULE_2___default()(x);
    const method = n > 0 ? 'add' : 'subtract';
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.times(Math.abs(n), function () {
      y[method](interval);
    });
    return y.valueOf();
  }
  getAllPoints() {
    const config = this.axisConfig;
    const data = this.visConfig.data.chartData();
    const chartPoints = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(data, (chartPoints, chart, chartIndex) => {
      const points = chart.series.reduce((points, seri, seriIndex) => {
        const seriConfig = this.visConfig.get(`charts[${chartIndex}].series[${seriIndex}]`);
        const matchingValueAxis = !!seriConfig.valueAxis && seriConfig.valueAxis === config.get('id');
        const isFirstAxis = config.get('id') === this.visConfig.get('valueAxes[0].id');
        if (matchingValueAxis || !seriConfig.valueAxis && isFirstAxis) {
          const axisPoints = seri.values.map(val => {
            if (val.y0) {
              return val.y0 + val.y;
            }
            return val.y;
          });
          return points.concat(axisPoints);
        }
        return points;
      }, []);
      return chartPoints.concat(points);
    }, []);
    return chartPoints;
  }
  getYMin() {
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.min(this.getAllPoints());
  }
  getYMax() {
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.max(this.getAllPoints());
  }
  getExtents() {
    if (this.axisConfig.get('type') === 'category') {
      if (this.axisConfig.isTimeDomain()) return this.getTimeDomain(this.values);
      if (this.axisConfig.isOrdinal()) return this.values;
    }
    const min = this.axisConfig.get('scale.min', this.getYMin());
    const max = this.axisConfig.get('scale.max', this.getYMax());
    const domain = [min, max];
    if (this.axisConfig.isUserDefined()) return this.validateUserExtents(domain);
    if (this.axisConfig.isLogScale()) return this.logDomain(min, max);
    if (this.axisConfig.isYExtents()) {
      const scaleBoundsMargin = this.axisConfig.get('scale.boundsMargin');
      if (scaleBoundsMargin === 0) {
        return domain;
      } else {
        if (max < 0) {
          domain[1] = domain[1] + scaleBoundsMargin;
        }
        if (min > 0) {
          domain[0] = domain[0] - scaleBoundsMargin;
        }
        return domain;
      }
    }
    return [Math.min(0, min), Math.max(0, max)];
  }
  getDomain(length) {
    const domain = this.getExtents();
    const pad = this.axisConfig.get('padForLabels');
    if (pad > 0 && this.canApplyNice()) {
      const domainLength = domain[1] - domain[0];
      const valuePerPixel = domainLength / length;
      const padValue = valuePerPixel * pad;
      if (domain[0] < 0) {
        domain[0] -= padValue;
      }
      domain[1] += padValue;
    }
    return domain;
  }
  getRange(length) {
    if (this.axisConfig.isHorizontal()) {
      return !this.axisConfig.get('scale.inverted') ? [0, length] : [length, 0];
    } else {
      return this.axisConfig.get('scale.inverted') ? [0, length] : [length, 0];
    }
  }
  throwCustomError(message) {
    throw new Error(message);
  }
  throwLogScaleValuesError() {
    throw new _errors__WEBPACK_IMPORTED_MODULE_3__["InvalidLogScaleValues"]();
  }
  logDomain(min, max) {
    if (min < 0 || max < 0) return this.throwLogScaleValuesError();
    return [1, max];
  }
  getD3Scale(scaleTypeArg) {
    let scaleType = scaleTypeArg || 'linear';
    if (scaleType === 'square root') scaleType = 'sqrt';
    if (this.axisConfig.isTimeDomain()) {
      return d3__WEBPACK_IMPORTED_MODULE_0___default.a.time.scale.utc(); // allow time scale
    }

    if (this.axisConfig.isOrdinal()) return d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.ordinal();
    if (typeof d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale[scaleType] !== 'function') {
      return this.throwCustomError(`Axis.getScaleType: ${scaleType} is not a function`);
    }
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale[scaleType]();
  }
  canApplyNice() {
    const config = this.axisConfig;
    return !config.isUserDefined() && !config.isYExtents() && !config.isOrdinal() && !config.isTimeDomain();
  }
  getScale(length) {
    const config = this.axisConfig;
    const scale = this.getD3Scale(config.getScaleType());
    const domain = this.getDomain(length);
    const range = this.getRange(length);
    const padding = config.get('style.rangePadding');
    const outerPadding = config.get('style.rangeOuterPadding');
    this.scale = scale.domain(domain);
    if (config.isOrdinal()) {
      this.scale.rangeBands(range, padding, outerPadding);
    } else {
      this.scale.range(range);
    }
    if (this.canApplyNice()) this.scale.nice();
    // Prevents bars from going off the chart when the y extents are within the domain range
    if (this.scale.clamp) this.scale.clamp(true);
    this.validateScale(this.scale);
    if (this.axisConfig.isTimeDomain()) {
      this.scale.timezoneCorrectedTicks = Object(_time_ticks__WEBPACK_IMPORTED_MODULE_4__["timeTicks"])(scale);
    }
    return this.scale;
  }
  validateScale(scale) {
    if (!scale || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNaN(scale)) throw new Error('scale is ' + scale);
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/axis_title.js":
/*!**********************************************!*\
  !*** ./public/vislib/lib/axis/axis_title.js ***!
  \**********************************************/
/*! exports provided: AxisTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisTitle", function() { return AxisTitle; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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



class AxisTitle {
  constructor(axisConfig) {
    this.axisConfig = axisConfig;
    this.elSelector = this.axisConfig.get('title.elSelector').replace('{pos}', this.axisConfig.get('position'));
  }
  render() {
    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.axisConfig.get('rootEl')).selectAll(this.elSelector).call(this.draw());
  }
  destroy() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.axisConfig.get('rootEl')).find(this.elSelector).find('svg').remove();
  }
  draw() {
    const config = this.axisConfig;
    return function (selection) {
      selection.each(function () {
        if (!config.get('show') && !config.get('title.show', false)) return;
        const el = this;
        const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el);
        const width = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).width();
        const height = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el).height();
        const axisPrefix = config.isHorizontal() ? 'x' : 'y';
        const svg = div.append('svg').attr('focusable', 'false').attr('width', width).attr('height', height).attr('class', `axis-title ${axisPrefix}-axis-title`);
        const bbox = svg.append('text').attr('transform', function () {
          if (config.isHorizontal()) {
            return `translate(${width / 2},0)`;
          }
          return `translate(0,${height / 2}) rotate(270)`;
        }).attr('text-anchor', 'middle').attr('dominant-baseline', 'hanging').text(config.get('title.text')).node().getBBox();
        if (config.isHorizontal()) {
          svg.attr('height', Math.ceil(bbox.height));
        } else {
          svg.attr('width', Math.ceil(bbox.height));
        }
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/lib/axis/index.js":
/*!*****************************************!*\
  !*** ./public/vislib/lib/axis/index.js ***!
  \*****************************************/
/*! exports provided: Axis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis */ "./public/vislib/lib/axis/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return _axis__WEBPACK_IMPORTED_MODULE_0__["Axis"]; });

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

/***/ "./public/vislib/lib/axis/scale_modes.js":
/*!***********************************************!*\
  !*** ./public/vislib/lib/axis/scale_modes.js ***!
  \***********************************************/
/*! exports provided: SCALE_MODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_MODES", function() { return SCALE_MODES; });
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

const SCALE_MODES = {
  NORMAL: 'normal',
  PERCENTAGE: 'percentage',
  WIGGLE: 'wiggle',
  SILHOUETTE: 'silhouette',
  GROUPED: 'grouped',
  // this should not be a scale mode but it is at this point to make it compatible with old charts
  ALL: ['normal', 'percentage', 'wiggle', 'silhouette']
};

/***/ }),

/***/ "./public/vislib/lib/axis/time_ticks.js":
/*!**********************************************!*\
  !*** ./public/vislib/lib/axis/time_ticks.js ***!
  \**********************************************/
/*! exports provided: timeTicks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeTicks", function() { return timeTicks; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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


const timeTicks = scale => {
  // on a time domain shift it to have the buckets start at nice points in time (e.g. at the start of the day) in UTC
  // then shift the calculated tick positions back into the real domain to have a nice tick position in the actual
  // time zone. This is necessary because the d3 time scale doesn't provide a function to get nice time positions in
  // a configurable time zone directly.
  const domain = scale.domain();
  const startOffset = moment__WEBPACK_IMPORTED_MODULE_0___default()(domain[0]).utcOffset();
  const shiftedDomain = domain.map(val => moment__WEBPACK_IMPORTED_MODULE_0___default()(val).add(startOffset, 'minute'));
  const tickScale = scale.copy().domain(shiftedDomain);
  return n => {
    const ticks = tickScale.ticks(n);
    const timePerTick = (domain[1] - domain[0]) / ticks.length;
    const hourTicks = timePerTick < 1000 * 60 * 60 * 12;
    return ticks.map(d => {
      // To get a nice date for the tick, we have to shift the offset of the current UTC tick. This is
      // relevant in cases where the domain spans various DSTs.
      // However if there are multiple ticks per day, this would cause a gap because the ticks are placed
      // in UTC which doesn't have DST. In this case, always shift by the offset of the beginning of the domain.
      const currentOffset = moment__WEBPACK_IMPORTED_MODULE_0___default()(d).utcOffset();
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(d).subtract(hourTicks ? startOffset : currentOffset, 'minute').valueOf();
    });
  };
};

/***/ }),

/***/ "./public/vislib/lib/binder.ts":
/*!*************************************!*\
  !*** ./public/vislib/lib/binder.ts ***!
  \*************************************/
/*! exports provided: Binder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binder", function() { return Binder; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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



class Binder {
  constructor() {
    _defineProperty(this, "disposal", []);
  }
  on(emitter, ...args) {
    const on = emitter.on || emitter.addListener;
    const off = emitter.off || emitter.removeListener;
    on.apply(emitter, args);
    this.disposal.push(() => off.apply(emitter, args));
  }
  destroy() {
    const destroyers = this.disposal;
    this.disposal = [];
    destroyers.forEach(fn => fn());
  }
  jqOn(el, ...args) {
    const $el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el);
    $el.on(...args);
    this.disposal.push(() => $el.off(...args));
  }
  fakeD3Bind(el, event, handler) {
    this.jqOn(el, event, e => {
      // mimic https://github.com/mbostock/d3/blob/3abb00113662463e5c19eb87cd33f6d0ddc23bc0/src/selection/on.js#L87-L94
      const o = d3__WEBPACK_IMPORTED_MODULE_0___default.a.event; // Events can be reentrant (e.g., focus).
      d3__WEBPACK_IMPORTED_MODULE_0___default.a.event = e;
      try {
        // @ts-ignore
        handler.apply(this, [this.__data__]);
      } finally {
        d3__WEBPACK_IMPORTED_MODULE_0___default.a.event = o;
      }
    });
  }
}

/***/ }),

/***/ "./public/vislib/lib/chart_grid.js":
/*!*****************************************!*\
  !*** ./public/vislib/lib/chart_grid.js ***!
  \*****************************************/
/*! exports provided: ChartGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartGrid", function() { return ChartGrid; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__);
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




const defaults = {
  style: {
    color: 'rgba(105,112,125,0.2)'
  },
  categoryLines: false,
  valueAxis: undefined
};
class ChartGrid {
  constructor(handler, gridConfig) {
    if (!gridConfig) return;
    this._handler = handler;
    this._values = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaultsDeep({}, gridConfig, defaults);
  }
  drawLine(svg, tick, axis, width, height) {
    const isHorizontal = axis.axisConfig.isHorizontal();
    const scale = axis.getScale();
    svg.append('path').attr('d', () => {
      const x0 = isHorizontal ? tick : 0;
      const x1 = isHorizontal ? tick : width;
      const y0 = !isHorizontal ? tick : 0;
      const y1 = !isHorizontal ? tick : height;
      const d3Line = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.line().x(d => isHorizontal ? scale(d[0]) : d[0]).y(d => !isHorizontal ? scale(d[1]) : d[1]);
      return d3Line([[x0, y0], [x1, y1]]);
    }).attr('fill', 'none').attr('stroke', this.get('style.color')).attr('stroke-width', 1);
  }
  drawCategoryLines(svg, width, height) {
    const axis = this._handler.categoryAxes[0];
    if (!axis) return;
    const ticks = axis.getScale().ticks;
    if (!ticks) return;
    ticks().forEach(tick => {
      this.drawLine(svg, tick, axis, width, height);
    });
  }
  drawValueLines(svg, width, height) {
    const axis = this._handler.valueAxes.find(axis => axis.axisConfig.get('id') === this.get('valueAxis'));
    if (!axis) return;
    const ticks = axis.getScale().ticks;
    if (!ticks) return;
    ticks().forEach(tick => {
      this.drawLine(svg, tick, axis, width, height);
    });
  }
  draw(width, height) {
    const self = this;
    return function (selection) {
      if (!self._values) return;
      selection.each(function () {
        if (self.get('categoryLines')) self.drawCategoryLines(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this), width, height);
        if (self.get('valueAxis', false)) self.drawValueLines(d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this), width, height);
      });
    };
  }
  get(property, defaults) {
    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(this._values, property) || typeof defaults !== 'undefined') {
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this._values, property, defaults);
    } else {
      throw new Error(`Accessing invalid config property: ${property}`);
      return defaults;
    }
  }
  set(property, value) {
    return Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_1__["set"])(this._values, property, value);
  }
}

/***/ }),

/***/ "./public/vislib/lib/chart_title.js":
/*!******************************************!*\
  !*** ./public/vislib/lib/chart_title.js ***!
  \******************************************/
/*! exports provided: ChartTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return ChartTitle; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error_handler */ "./public/vislib/lib/_error_handler.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tooltip */ "./public/vislib/components/tooltip/index.js");
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





class ChartTitle extends _error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"] {
  constructor(visConfig) {
    super();
    this.el = visConfig.get('el');
    this.tooltip = new _components_tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"]('chart-title', this.el, function (d) {
      return '<p>' + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(d.label) + '</p>';
    });
  }
  render() {
    const el = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.el).select('.chart-title').node();
    const width = el ? el.clientWidth : 0;
    const height = el ? el.clientHeight : 0;
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.el).selectAll('.chart-title').call(this.draw(width, height));
  }
  truncate(size) {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const text = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        const n = text[0].length;
        const maxWidth = size / n * 0.9;
        const length = this.getComputedTextLength();
        let str;
        let avg;
        let end;
        if (length > maxWidth) {
          str = text.text();
          avg = length / str.length;
          end = Math.floor(maxWidth / avg) - 5;
          str = str.substr(0, end) + '...';
          self.addMouseEvents(text);
          return text.text(str);
        }
        return text.text();
      });
    };
  }
  addMouseEvents(target) {
    if (this.tooltip) {
      return target.call(this.tooltip.render());
    }
  }
  draw(width, height) {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        const dataType = this.parentNode.__data__.rows ? 'rows' : 'columns';
        const size = dataType === 'rows' ? height : width;
        const txtHtOffset = 11;
        self.validateWidthandHeight(width, height);
        div.append('svg').attr('focusable', 'false').attr('width', width).attr('height', height).append('text').attr('transform', function () {
          if (dataType === 'rows') {
            return 'translate(' + txtHtOffset + ',' + height / 2 + ')rotate(270)';
          }
          return 'translate(' + width / 2 + ',' + txtHtOffset + ')';
        }).attr('text-anchor', 'middle').text(function (d) {
          return d.label;
        });

        // truncate long chart titles
        div.selectAll('text').call(self.truncate(size));
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/lib/data.js":
/*!***********************************!*\
  !*** ./public/vislib/lib/data.js ***!
  \***********************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_zero_injection_inject_zeros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/zero_injection/inject_zeros */ "./public/vislib/components/zero_injection/inject_zeros.js");
/* harmony import */ var _components_zero_injection_ordered_x_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/zero_injection/ordered_x_keys */ "./public/vislib/components/zero_injection/ordered_x_keys.js");
/* harmony import */ var _components_labels_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/labels/labels */ "./public/vislib/components/labels/labels.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
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








// X axis and split series values in a data table can sometimes be objects,
// e.g. when working with date ranges. d3 casts all ordinal values to strings
// which is a problem for these objects because they just return `[object Object]`
// and thus all map to the same value.
// This little helper overwrites the toString method of an object and keeps it the
// same otherwise - allowing d3 to correctly work with the values.
class D3MappableObject {
  constructor(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }
  toString() {
    return JSON.stringify(this);
  }
}

/**
 * Provides an API for pulling values off the data
 * and calculating values using the data
 *
 * @class Data
 * @constructor
 * @param data {Object} Elasticsearch query results
 * @param attr {Object|*} Visualization options
 */
class Data {
  constructor(data, uiState, createColorLookupFunction) {
    this.uiState = uiState;
    this.createColorLookupFunction = createColorLookupFunction;
    this.data = this.copyDataObj(data);
    this.type = this.getDataType();
    this._cleanVisData();
    this.labels = this._getLabels(this.data);
    this.color = this.labels ? createColorLookupFunction(this.labels, uiState.get('vis.colors')) : undefined;
    this._normalizeOrdered();
  }
  copyDataObj(data) {
    const copyChart = data => {
      const newData = {};
      Object.keys(data).forEach(key => {
        if (key === 'xAxisOrderedValues') {
          newData[key] = data[key].map(val => {
            if (typeof val === 'object') {
              return new D3MappableObject(val);
            }
            return val;
          });
        } else if (key === 'series') {
          newData[key] = data[key].map(seri => {
            const converter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(seri.format);
            const zConverter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(seri.zFormat);
            return {
              id: seri.id,
              rawId: seri.rawId,
              label: seri.label,
              zLabel: seri.zLabel,
              values: seri.values.map(val => {
                const newVal = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.clone(val);
                newVal.extraMetrics = val.extraMetrics;
                newVal.series = val.series || seri.label;
                if (typeof newVal.x === 'object') {
                  newVal.x = new D3MappableObject(newVal.x);
                }
                return newVal;
              }),
              yAxisFormatter: val => converter.convert(val),
              zAxisFormatter: val => zConverter.convert(val)
            };
          });
        } else {
          newData[key] = data[key];
        }
      });
      const xConverter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(newData.xAxisFormat);
      const yConverter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(newData.yAxisFormat);
      const zConverter = Object(_services__WEBPACK_IMPORTED_MODULE_5__["getFormatService"])().deserialize(newData.zAxisFormat);
      newData.xAxisFormatter = val => xConverter.convert(val);
      newData.yAxisFormatter = val => yConverter.convert(val);
      newData.zAxisFormatter = val => zConverter.convert(val);
      return newData;
    };
    if (!data.series) {
      const newData = {};
      Object.keys(data).forEach(key => {
        if (!['rows', 'columns'].includes(key)) {
          newData[key] = data[key];
        } else {
          newData[key] = data[key].map(chart => {
            return copyChart(chart);
          });
        }
      });
      return newData;
    }
    return copyChart(data);
  }
  _getLabels(data) {
    if (this.type === 'series') {
      return Object(_components_labels_labels__WEBPACK_IMPORTED_MODULE_4__["labels"])(data);
    }
    return [];
  }
  getDataType() {
    const data = this.getVisData();
    let type;
    data.forEach(function (obj) {
      if (obj.series) {
        type = 'series';
      } else if (obj.slices) {
        type = 'slices';
      } else if (obj.geoJson) {
        type = 'geoJson';
      }
    });
    return type;
  }

  /**
   * Returns an array of the actual x and y data value objects
   * from data with series keys
   *
   * @method chartData
   * @returns {*} Array of data objects
   */
  chartData() {
    if (!this.data.series) {
      const arr = this.data.rows ? this.data.rows : this.data.columns;
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.toArray(arr);
    }
    return [this.data];
  }
  shouldBeStacked(seriesConfig) {
    if (!seriesConfig) return false;
    return seriesConfig.mode === 'stacked';
  }
  getStackedSeries(chartConfig, axis, series, first = false) {
    const matchingSeries = [];
    chartConfig.series.forEach((seriArgs, i) => {
      const matchingAxis = seriArgs.valueAxis === axis.axisConfig.get('id') || !seriArgs.valueAxis && first;
      if (matchingAxis && (this.shouldBeStacked(seriArgs) || axis.axisConfig.get('scale.stacked'))) {
        matchingSeries.push(series[i]);
      }
    });
    return matchingSeries;
  }
  stackChartData(handler, data, chartConfig) {
    const stackedData = {};
    handler.valueAxes.forEach((axis, i) => {
      const id = axis.axisConfig.get('id');
      stackedData[id] = this.getStackedSeries(chartConfig, axis, data, i === 0);
      stackedData[id] = this.injectZeros(stackedData[id], handler.visConfig.get('orderBucketsBySum', false));
      axis.axisConfig.set('stackedSeries', stackedData[id].length);
      axis.stack(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(stackedData[id], 'values'));
    });
    return stackedData;
  }
  stackData(handler) {
    const data = this.data;
    if (data.rows || data.columns) {
      const charts = data.rows ? data.rows : data.columns;
      charts.forEach((chart, i) => {
        this.stackChartData(handler, chart.series, handler.visConfig.get(`charts[${i}]`));
      });
    } else {
      this.stackChartData(handler, data.series, handler.visConfig.get('charts[0]'));
    }
  }

  /**
   * Returns an array of chart data objects
   *
   * @method getVisData
   * @returns {*} Array of chart data objects
   */
  getVisData() {
    let visData;
    if (this.data.rows) {
      visData = this.data.rows;
    } else if (this.data.columns) {
      visData = this.data.columns;
    } else {
      visData = [this.data];
    }
    return visData;
  }

  /**
   * get min and max for all cols, rows of data
   *
   * @method getMaxMin
   * @return {Object}
   */
  getGeoExtents() {
    const visData = this.getVisData();
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(visData, 'geoJson.properties'), function (minMax, props) {
      return {
        min: Math.min(props.min, minMax.min),
        max: Math.max(props.max, minMax.max)
      };
    }, {
      min: Infinity,
      max: -Infinity
    });
  }

  /**
   * Returns array of chart data objects for pie data objects
   *
   * @method pieData
   * @returns {*} Array of chart data objects
   */
  pieData() {
    if (!this.data.slices) {
      return this.data.rows ? this.data.rows : this.data.columns;
    }
    return [this.data];
  }

  /**
   * Get attributes off the data, e.g. `tooltipFormatter` or `xAxisFormatter`
   * pulls the value off the first item in the array
   * these values are typically the same between data objects of the same chart
   * TODO: May need to verify this or refactor
   *
   * @method get
   * @param thing {String} Data object key
   * @returns {*} Data object value
   */
  get(thing, def) {
    const source = (this.data.rows || this.data.columns || [this.data])[0];
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(source, thing, def);
  }

  /**
   * Returns true if null values are present
   * @returns {*}
   */
  hasNullValues() {
    const chartData = this.chartData();
    return chartData.some(function (chart) {
      return chart.series.some(function (obj) {
        return obj.values.some(function (d) {
          return d.y === null;
        });
      });
    });
  }

  /**
   * Return an array of all value objects
   * Pluck the data.series array from each data object
   * Create an array of all the value objects from the series array
   *
   * @method flatten
   * @returns {Array} Value objects
   */
  flatten() {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default()(this.chartData()).map('series').flattenDeep().map('values').flattenDeep().value();
  }

  /**
   * Validates that the Y axis min value defined by user input
   * is a number.
   *
   * @param val {Number} Y axis min value
   * @returns {Number} Y axis min value
   */
  validateUserDefinedYMin(val) {
    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(val)) {
      throw new Error('validateUserDefinedYMin expects a number');
    }
    return val;
  }

  /**
   * Helper function for getNames
   * Returns an array of objects with a name (key) value and an index value.
   * The index value allows us to sort the names in the correct nested order.
   *
   * @method returnNames
   * @param array {Array} Array of data objects
   * @param index {Number} Number of times the object is nested
   * @param columns {Object} Contains name formatter information
   * @returns {Array} Array of labels (strings)
   */
  returnNames(array, index, columns) {
    const names = [];
    const self = this;
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(array, function (obj) {
      names.push({
        label: obj.name,
        values: [obj.rawData],
        index: index
      });
      if (obj.children) {
        const plusIndex = index + 1;
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(self.returnNames(obj.children, plusIndex, columns), function (namedObj) {
          names.push(namedObj);
        });
      }
    });
    return names;
  }

  /**
   * Flattens hierarchical data into an array of objects with a name and index value.
   * The indexed value determines the order of nesting in the data.
   * Returns an array with names sorted by the index value.
   *
   * @method getNames
   * @param data {Object} Chart data object
   * @param columns {Object} Contains formatter information
   * @returns {Array} Array of names (strings)
   */
  getNames(data, columns) {
    const slices = data.slices;
    if (slices.children) {
      const namedObj = this.returnNames(slices.children, 0, columns);
      return lodash__WEBPACK_IMPORTED_MODULE_1___default()(namedObj).sortBy(function (obj) {
        return obj.index;
      }).uniqBy(function (d) {
        return d.label;
      }).value();
    }
  }

  /**
   * Clean visualization data from missing/wrong values.
   * Currently used only to clean remove zero slices from
   * pie chart.
   */
  _cleanVisData() {
    const visData = this.getVisData();
    if (this.type === 'slices') {
      this._cleanPieChartData(visData);
    }
  }

  /**
   * Mutate the current pie chart vis data to remove slices with
   * zero values.
   * @param {Array} data
   */
  _cleanPieChartData(data) {
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(data, obj => {
      obj.slices = this._removeZeroSlices(obj.slices);
    });
  }

  /**
   * Removes zeros from pie chart data, mutating the passed values.
   * @param slices
   * @returns {*}
   */
  _removeZeroSlices(slices) {
    if (!slices.children) {
      return slices;
    }
    slices = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.clone(slices);
    slices.children = slices.children.reduce((children, child) => {
      if (child.size !== 0) {
        return [...children, this._removeZeroSlices(child)];
      }
      return children;
    }, []);
    return slices;
  }

  /**
   * Returns an array of names ordered by appearance in the nested array
   * of objects
   *
   * @method pieNames
   * @returns {Array} Array of unique names (strings)
   */
  pieNames(data) {
    const self = this;
    const names = [];
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(data, function (obj) {
      const columns = obj.raw ? obj.raw.columns : undefined;
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(self.getNames(obj, columns), function (name) {
        names.push(name);
      });
    });
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniqBy(names, 'label');
  }

  /**
   * Inject zeros into the data
   *
   * @method injectZeros
   * @returns {Object} Data object with zeros injected
   */
  injectZeros(data, orderBucketsBySum = false) {
    return Object(_components_zero_injection_inject_zeros__WEBPACK_IMPORTED_MODULE_2__["injectZeros"])(data, this.data, orderBucketsBySum);
  }

  /**
   * Returns an array of all x axis values from the data
   *
   * @method xValues
   * @returns {Array} Array of x axis values
   */
  xValues(orderBucketsBySum = false) {
    return Object(_components_zero_injection_ordered_x_keys__WEBPACK_IMPORTED_MODULE_3__["orderXValues"])(this.data, orderBucketsBySum);
  }

  /**
   * Return an array of unique labels
   * Currently, only used for vertical bar and line charts,
   * or any data object with series values
   *
   * @method getLabels
   * @returns {Array} Array of labels (strings)
   */
  getLabels() {
    return Object(_components_labels_labels__WEBPACK_IMPORTED_MODULE_4__["labels"])(this.data);
  }

  /**
   * Returns a function that does color lookup on labels
   *
   * @method getColorFunc
   * @returns {Function} Performs lookup on string and returns hex color
   */
  getColorFunc() {
    if (this.type === 'slices') {
      return this.getPieColorFunc();
    }
    const defaultColors = this.uiState.get('vis.defaultColors');
    const overwriteColors = this.uiState.get('vis.colors');
    const colors = defaultColors ? lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults({}, overwriteColors, defaultColors) : overwriteColors;
    return this.createColorLookupFunction(this.getLabels(), colors);
  }

  /**
   * Returns a function that does color lookup on names for pie charts
   *
   * @method getPieColorFunc
   * @returns {Function} Performs lookup on string and returns hex color
   */
  getPieColorFunc() {
    return this.createColorLookupFunction(this.pieNames(this.getVisData()).map(function (d) {
      return d.label;
    }), this.uiState.get('vis.colors'));
  }

  /**
   * ensure that the datas ordered property has a min and max
   * if the data represents an ordered date range.
   *
   * @return {undefined}
   */
  _normalizeOrdered() {
    const data = this.getVisData();
    const self = this;
    data.forEach(function (d) {
      if (!d.ordered || !d.ordered.date) return;
      const missingMin = d.ordered.min == null;
      const missingMax = d.ordered.max == null;
      if (missingMax || missingMin) {
        const extent = d3__WEBPACK_IMPORTED_MODULE_0___default.a.extent(self.xValues());
        if (missingMin) d.ordered.min = extent[0];
        if (missingMax) d.ordered.max = extent[1];
      }
    });
  }

  /**
   * Calculates min and max values for all map data
   * series.rows is an array of arrays
   * each row is an array of values
   * last value in row array is bucket count
   *
   * @method mapDataExtents
   * @param series {Array} Array of data objects
   * @returns {Array} min and max values
   */
  mapDataExtents(series) {
    const values = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(series.rows, function (row) {
      return row[row.length - 1];
    });
    return [lodash__WEBPACK_IMPORTED_MODULE_1___default.a.min(values), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.max(values)];
  }

  /**
   * Get the maximum number of series, considering each chart
   * individually.
   *
   * @return {number} - the largest number of series from all charts
   */
  maxNumberOfSeries() {
    return this.chartData().reduce(function (max, chart) {
      return Math.max(max, chart.series.length);
    }, 0);
  }
}

/***/ }),

/***/ "./public/vislib/lib/dispatch.js":
/*!***************************************!*\
  !*** ./public/vislib/lib/dispatch.js ***!
  \***************************************/
/*! exports provided: Dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatch", function() { return Dispatch; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
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
 * Handles event responses
 *
 * @class Dispatch
 * @constructor
 * @param handler {Object} Reference to Handler Class Object
 */
class Dispatch {
  constructor(handler, uiSettings) {
    /**
     * Emit an event and all arguments to all listeners for an event name
     *
     * @param  {string} name
     * @param  {*} [arg...] - any number of arguments that will be applied to each handler
     * @return {Dispatch} - this, for chaining
     */
    _defineProperty(this, "emit", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["rest"])(function (name, args) {
      if (!this._listeners[name]) {
        return this;
      }
      const listeners = this.listeners(name);
      let i = -1;
      while (++i < listeners.length) {
        listeners[i].apply(this, args);
      }
      return this;
    }));
    this.handler = handler;
    this.uiSettings = uiSettings;
    this._listeners = {};
  }

  /**
   * Add an event handler
   *
   * @param  {string} name
   * @param  {function} handler
   * @return {Dispatch} - this, for chaining
   */
  on(name, handler) {
    let handlers = this._listeners[name];
    if (!handlers) {
      this._listeners[name] = [];
      handlers = this._listeners[name];
    }
    handlers.push(handler);
    return this;
  }

  /**
   * Remove an event handler
   *
   * @param  {string} name
   * @param  {function} [handler] - optional handler to remove, if no handler is
   *                              passed then all are removed
   * @return {Dispatch} - this, for chaining
   */
  off(name, handler) {
    if (!this._listeners[name]) {
      return this;
    }

    // remove a specific handler
    if (handler) {
      Object(lodash__WEBPACK_IMPORTED_MODULE_1__["pull"])(this._listeners[name], handler);
    }
    // or remove all listeners
    else {
      this._listeners[name] = null;
    }
    return this;
  }

  /**
   * Remove all event listeners bound to this emitter.
   *
   * @return {Dispatch} - this, for chaining
   */
  removeAllListeners() {
    this._listeners = {};
    return this;
  }
  /**
   * Get a list of the handler functions for a specific event
   *
   * @param  {string} name
   * @return {array[function]}
   */
  listeners(name) {
    return this._listeners[name] ? this._listeners[name].slice(0) : [];
  }

  /**
   * Get the count of handlers for a specific event
   *
   * @param  {string} [name] - optional event name to filter by
   * @return {number}
   */
  listenerCount(name) {
    if (name) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(this._listeners[name]);
    }
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"])(this._listeners, (count, handlers) => count + Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(handlers), 0);
  }
  _pieClickResponse(data) {
    const points = [];
    let dataPointer = data;
    while (dataPointer && dataPointer.rawData) {
      points.push(dataPointer.rawData);
      dataPointer = dataPointer.parent;
    }
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(data, 'rawData.table.$parent')) {
      const {
        table,
        column,
        row,
        key
      } = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(data, 'rawData.table.$parent');
      points.push({
        table,
        column,
        row,
        value: key
      });
    }
    return points;
  }
  _seriesClickResponse(data) {
    const points = [];
    ['xRaw', 'yRaw', 'zRaw', 'seriesRaw', 'rawData', 'tableRaw'].forEach(val => {
      if (data[val] && data[val].column !== undefined && data[val].row !== undefined) {
        points.push(data[val]);
      }
    });
    return points;
  }

  /**
   * Response to click  events
   *
   * @param d {Object} Data point
   * @returns event with list of data points related to the click
   */
  clickEventResponse(d, props = {}) {
    let isSlices = props.isSlices;
    if (isSlices === undefined) {
      const _data = d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.nearestViewportElement ? d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.nearestViewportElement.__data__ : d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.__data__;
      isSlices = !!(_data && _data.slices);
    }
    const data = d.input || d;
    return {
      e: d3__WEBPACK_IMPORTED_MODULE_0___default.a.event,
      data: isSlices ? this._pieClickResponse(data) : this._seriesClickResponse(data)
    };
  }

  /**
   * Determine whether rendering a series is configured in percentage mode
   * Used to display a value percentage formatted in it's popover
   *
   * @param rawId {string} The rawId of series to check
   * @param series {Array} Array of all series data
   * @param visConfig {VisConfig}
   * @returns {Boolean}
   */
  _isSeriesInPercentageMode(rawId, series, visConfig) {
    if (!rawId || !Array.isArray(series) || !visConfig) {
      return false;
    }
    //find the primary id by the rawId, that id is used in the config's seriesParams
    const {
      id
    } = series.find(series => series.rawId === rawId);
    if (!id) {
      return false;
    }

    //find the matching seriesParams of the series, to get the id of the valueAxis
    const seriesParams = visConfig.get('seriesParams', []);
    const {
      valueAxis: valueAxisId
    } = seriesParams.find(param => param.data.id === id) || {};
    if (!valueAxisId) {
      return false;
    }
    const usedValueAxis = visConfig.get('valueAxes', []).find(valueAxis => valueAxis.id === valueAxisId);
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(usedValueAxis, 'scale.mode') === 'percentage';
  }

  /**
   * Response to hover events
   *
   * @param d {Object} Data point
   * @param i {Number} Index number of data point
   * @returns {{value: *, point: *, label: *, color: *, pointIndex: *,
   * series: *, config: *, data: (Object|*),
   * e: (d3.event|*), handler: (Object|*)}} Event response object
   */
  eventResponse(d, i) {
    const datum = d._input || d;
    const data = d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.nearestViewportElement ? d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.nearestViewportElement.__data__ : d3__WEBPACK_IMPORTED_MODULE_0___default.a.event.target.__data__;
    const label = d.label ? d.label : d.series || 'Count';
    const isSeries = !!(data && data.series);
    const isSlices = !!(data && data.slices);
    const series = isSeries ? data.series : undefined;
    const slices = isSlices ? data.slices : undefined;
    const handler = this.handler;
    const color = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(handler, 'data.color');
    const config = handler && handler.visConfig;
    const isPercentageMode = this._isSeriesInPercentageMode(d.seriesId, series, config);
    const eventData = {
      value: d.y,
      point: datum,
      datum,
      label,
      color: color ? color(label) : undefined,
      pointIndex: i,
      series,
      slices,
      config,
      data,
      e: d3__WEBPACK_IMPORTED_MODULE_0___default.a.event,
      handler,
      isPercentageMode
    };
    return eventData;
  }

  /**
   * Returns a function that adds events and listeners to a D3 selection
   *
   * @method addEvent
   * @param event {String}
   * @param callback {Function}
   * @returns {Function}
   */
  addEvent(event, callback) {
    return function (selection) {
      selection.each(function () {
        const element = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        if (typeof callback === 'function') {
          return element.on(event, callback);
        }
      });
    };
  }

  /**
   *
   * @method addHoverEvent
   * @returns {Function}
   */
  addHoverEvent() {
    const self = this;
    const isClickable = this.listenerCount('click') > 0;
    const addEvent = this.addEvent;
    const $el = this.handler.el;
    if (!this.handler.highlight) {
      this.handler.highlight = self.getHighlighter(self.uiSettings);
    }
    function hover(d, i) {
      // Add pointer if item is clickable
      if (isClickable) {
        self.addMousePointer.call(this, arguments);
      }
      self.handler.highlight.call(this, $el);
      self.emit('hover', self.eventResponse(d, i));
    }
    return addEvent('mouseover', hover);
  }

  /**
   *
   * @method addMouseoutEvent
   * @returns {Function}
   */
  addMouseoutEvent() {
    const self = this;
    const addEvent = this.addEvent;
    const $el = this.handler.el;
    if (!this.handler.unHighlight) {
      this.handler.unHighlight = self.unHighlight;
    }
    function mouseout() {
      self.handler.unHighlight.call(this, $el);
    }
    return addEvent('mouseout', mouseout);
  }

  /**
   *
   * @method addClickEvent
   * @returns {Function}
   */
  addClickEvent() {
    const onClick = d => this.emit('click', this.clickEventResponse(d));
    return this.addEvent('click', onClick);
  }

  /**
   * Determine if we will allow brushing
   *
   * @method allowBrushing
   * @returns {Boolean}
   */
  allowBrushing() {
    const xAxis = this.handler.categoryAxes[0];

    //Allow brushing for ordered axis - date histogram and histogram
    return Boolean(xAxis.ordered);
  }

  /**
   * Determine if brushing is currently enabled
   *
   * @method isBrushable
   * @returns {Boolean}
   */
  isBrushable() {
    return this.allowBrushing() && this.listenerCount('brush') > 0;
  }

  /**
   *
   * @param svg
   * @returns {Function}
   */
  addBrushEvent(svg) {
    if (!this.isBrushable()) return;
    const xScale = this.handler.categoryAxes[0].getScale();
    this.createBrush(xScale, svg);
  }

  /**
   * Mouseover Behavior
   *
   * @method addMousePointer
   * @returns {d3.Selection}
   */
  addMousePointer() {
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).style('cursor', 'pointer');
  }

  /**
   * return function to Highlight the element that is under the cursor
   * by reducing the opacity of all the elements on the graph.
   * @param uiSettings
   * @method getHighlighter
   */
  getHighlighter(uiSettings) {
    return function highlight(element) {
      const label = this.getAttribute('data-label');
      if (!label) return;
      const dimming = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_3__["DIMMING_OPACITY_SETTING"]);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(element).parent().find('[data-label]').css('opacity', 1) //Opacity 1 is needed to avoid the css application
      .not((els, el) => String(jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('label')) === label).css('opacity', justifyOpacity(dimming));
    };
  }

  /**
   * Mouseout Behavior
   *
   * @param element {d3.Selection}
   * @method unHighlight
   */
  unHighlight(element) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-label]', element.parentNode).css('opacity', 1);
  }

  /**
   * Adds D3 brush to SVG and returns the brush function
   *
   * @param xScale {Function} D3 xScale function
   * @param svg {HTMLElement} Reference to SVG
   * @returns {*} Returns a D3 brush function and a SVG with a brush group attached
   */
  createBrush(xScale, svg) {
    const self = this;
    const visConfig = self.handler.visConfig;
    const {
      width,
      height
    } = svg.node().getBBox();
    const isHorizontal = self.handler.categoryAxes[0].axisConfig.isHorizontal();

    // Brush scale
    const brush = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.brush();
    if (isHorizontal) {
      brush.x(xScale);
    } else {
      brush.y(xScale);
    }
    brush.on('brushend', function brushEnd() {
      // Assumes data is selected at the chart level
      // In this case, the number of data objects should always be 1
      const data = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).data()[0];
      const isTimeSeries = data.ordered && data.ordered.date;

      // Allows for brushing on d3.scale.ordinal()
      const selected = xScale.domain().filter(d => brush.extent()[0] <= xScale(d) && xScale(d) <= brush.extent()[1]);
      const range = isTimeSeries ? brush.extent() : selected;
      return self.emit('brush', {
        range,
        config: visConfig,
        e: d3__WEBPACK_IMPORTED_MODULE_0___default.a.event,
        data
      });
    });

    // if `addBrushing` is true, add brush canvas
    if (self.listenerCount('brush')) {
      const rect = svg.insert('g', 'g').attr('class', 'brush').call(brush).call(brushG => {
        // hijack the brush start event to filter out right/middle clicks
        const brushHandler = brushG.on('mousedown.brush');
        if (!brushHandler) return; // touch events in use
        brushG.on('mousedown.brush', function () {
          if (validBrushClick(d3__WEBPACK_IMPORTED_MODULE_0___default.a.event)) brushHandler.apply(this, arguments);
        });
      }).selectAll('rect');
      if (isHorizontal) {
        rect.attr('height', height);
      } else {
        rect.attr('width', width);
      }
      return brush;
    }
  }
}
function validBrushClick(event) {
  return event.button === 0;
}
function justifyOpacity(opacity) {
  const decimalNumber = parseFloat(opacity, 10);
  const fallbackOpacity = 0.5;
  return 0 <= decimalNumber && decimalNumber <= 1 ? decimalNumber : fallbackOpacity;
}

/***/ }),

/***/ "./public/vislib/lib/handler.js":
/*!**************************************!*\
  !*** ./public/vislib/lib/handler.js ***!
  \**************************************/
/*! exports provided: Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "../../../node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors */ "./public/vislib/errors.ts");
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout */ "./public/vislib/lib/layout/layout.js");
/* harmony import */ var _chart_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart_title */ "./public/vislib/lib/chart_title.js");
/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts */ "./public/vislib/lib/alerts.js");
/* harmony import */ var _axis_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./axis/axis */ "./public/vislib/lib/axis/axis.js");
/* harmony import */ var _chart_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart_grid */ "./public/vislib/lib/chart_grid.js");
/* harmony import */ var _visualizations_vis_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../visualizations/vis_types */ "./public/vislib/visualizations/vis_types.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./binder */ "./public/vislib/lib/binder.ts");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_11__);
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













const markdownIt = new markdown_it__WEBPACK_IMPORTED_MODULE_2___default.a({
  html: false,
  linkify: true
});

/**
 * Handles building all the components of the visualization
 *
 * @class Handler
 * @constructor
 * @param vis {Object} Reference to the Vis Class Constructor
 * @param opts {Object} Reference to Visualization constructors needed to
 * create the visualization
 */
class Handler {
  constructor(vis, visConfig, deps) {
    this.el = visConfig.get('el');
    this.ChartClass = _visualizations_vis_types__WEBPACK_IMPORTED_MODULE_9__["visTypes"][visConfig.get('type')];
    this.deps = deps;
    this.charts = [];
    this.vis = vis;
    this.visConfig = visConfig;
    this.data = visConfig.data;
    this.categoryAxes = visConfig.get('categoryAxes').map(axisArgs => new _axis_axis__WEBPACK_IMPORTED_MODULE_7__["Axis"](visConfig, axisArgs));
    this.valueAxes = visConfig.get('valueAxes').map(axisArgs => new _axis_axis__WEBPACK_IMPORTED_MODULE_7__["Axis"](visConfig, axisArgs));
    this.chartTitle = new _chart_title__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"](visConfig);
    this.alerts = new _alerts__WEBPACK_IMPORTED_MODULE_6__["Alerts"](this, visConfig.get('alerts'));
    this.grid = new _chart_grid__WEBPACK_IMPORTED_MODULE_8__["ChartGrid"](this, visConfig.get('grid'));
    if (visConfig.get('type') === 'point_series') {
      this.data.stackData(this);
    }
    if (visConfig.get('resize', false)) {
      this.resize = visConfig.get('resize');
    }
    this.layout = new _layout_layout__WEBPACK_IMPORTED_MODULE_4__["Layout"](visConfig);
    this.binder = new _binder__WEBPACK_IMPORTED_MODULE_10__["Binder"]();
    this.renderArray = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter([this.layout, this.chartTitle, this.alerts], Boolean);
    this.renderArray = this.renderArray.concat(this.valueAxes)
    // category axes need to render in reverse order https://github.com/elastic/kibana/issues/13551
    .concat(this.categoryAxes.slice().reverse());

    // memoize so that the same function is returned every time,
    // allowing us to remove/re-add the same function
    this.getProxyHandler = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.memoize(function (eventType) {
      const self = this;
      return function (eventPayload) {
        switch (eventType) {
          case 'brush':
            const xRaw = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(eventPayload.data, 'series[0].values[0].xRaw');
            if (!xRaw) return; // not sure if this is possible?
            return self.vis.emit(eventType, {
              table: xRaw.table,
              range: eventPayload.range,
              column: xRaw.column
            });
          case 'click':
            return self.vis.emit(eventType, eventPayload);
        }
      };
    });

    /**
     * Enables events, i.e. binds specific events to the chart
     * object(s) `on` method. For example, `click` or `mousedown` events.
     *
     * @method enable
     * @param event {String} Event type
     * @param chart {Object} Chart
     * @returns {*}
     */
    this.enable = this.chartEventProxyToggle('on');

    /**
     * Disables events for all charts
     *
     * @method disable
     * @param event {String} Event type
     * @param chart {Object} Chart
     * @returns {*}
     */
    this.disable = this.chartEventProxyToggle('off');
  }
  /**
   * Validates whether data is actually present in the data object
   * used to render the Vis. Throws a no results error if data is not
   * present.
   *
   * @private
   */
  _validateData() {
    const dataType = this.data.type;
    if (!dataType) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_3__["NoResults"]();
    }
  }

  /**
   * Renders the constructors that create the visualization,
   * including the chart constructor
   *
   * @method render
   * @returns {HTMLElement} With the visualization child element
   */
  render() {
    if (this.visConfig.get('error', null)) return this.error(this.visConfig.get('error'));
    const self = this;
    const {
      binder,
      charts = []
    } = this;
    const selection = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.el);
    selection.selectAll('*').remove();
    this._validateData();
    this.renderArray.forEach(function (property) {
      if (typeof property.render === 'function') {
        property.render();
      }
    });

    // render the chart(s)
    let loadedCount = 0;
    const chartSelection = selection.selectAll('.chart');
    chartSelection.each(function (chartData) {
      const chart = new self.ChartClass(self, this, chartData, self.deps);
      self.vis.eventNames().forEach(function (event) {
        self.enable(event, chart);
      });
      binder.on(chart.events, 'rendered', () => {
        loadedCount++;
        if (loadedCount === chartSelection.length) {
          // events from all charts are propagated to vis, we only need to fire renderComplete once they all finish
          self.vis.emit('renderComplete');
        }
      });
      charts.push(chart);
      chart.render();
    });
  }
  chartEventProxyToggle(method) {
    return function (event, chart) {
      const proxyHandler = this.getProxyHandler(event);
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(chart ? [chart] : this.charts, function (chart) {
        chart.events[method](event, proxyHandler);
      });
    };
  }

  /**
   * Removes all DOM elements from the HTML element provided
   *
   * @method removeAll
   * @param el {HTMLElement} Reference to the HTML Element that
   * contains the chart
   * @returns {D3.Selection|D3.Transition.Transition} With the chart
   * child element removed
   */
  removeAll(el) {
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el).selectAll('*').remove();
  }

  /**
   * Displays an error message in the DOM
   *
   * @method error
   * @param message {String} Error message to display
   * @returns {HTMLElement} Displays the input message
   */
  error(message) {
    this.removeAll(this.el);
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.el).append('div')
    // class name needs `chart` in it for the polling checkSize function
    // to continuously call render on resize
    .attr('class', 'visError chart error').attr('data-test-subj', 'visLibVisualizeError');
    div.append('h4').text(markdownIt.renderInline(message));
    Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_11__["dispatchRenderComplete"])(this.el);
    return div;
  }

  /**
   * Destroys all the charts in the visualization
   *
   * @method destroy
   */
  destroy() {
    this.binder.destroy();
    this.renderArray.forEach(function (renderable) {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(renderable.destroy)) {
        renderable.destroy();
      }
    });
    this.charts.splice(0).forEach(function (chart) {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(chart.destroy)) {
        chart.destroy();
      }
    });
  }
}

/***/ }),

/***/ "./public/vislib/lib/layout/layout.js":
/*!********************************************!*\
  !*** ./public/vislib/lib/layout/layout.js ***!
  \********************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout_types */ "./public/vislib/lib/layout/layout_types.js");
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axis */ "./public/vislib/lib/axis/index.js");
/* harmony import */ var _chart_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart_title */ "./public/vislib/lib/chart_title.js");
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
 * Builds the visualization DOM layout
 *
 * The Layout Constructor is responsible for rendering the visualization
 * layout, which includes all the DOM div elements.
 * Input:
 *   1. DOM div - parent element for which the layout is attached
 *   2. data - data is bound to the div element
 *   3. chartType (e.g. 'histogram') - specifies the layout type to grab
 *
 * @class Layout
 * @constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param data {Object} Elasticsearch query results for this specific chart
 * @param chartType {Object} Reference to chart functions, i.e. Pie
 */
class Layout {
  constructor(config) {
    this.el = config.get('el');
    this.data = config.data.data;
    this.opts = config;
    this.layoutType = _layout_types__WEBPACK_IMPORTED_MODULE_3__["layoutTypes"][config.get('type')](this.el, this.data);
  }

  // Render the layout
  /**
   * Renders visualization HTML layout
   * Remove all elements from the current visualization and creates the layout
   *
   * @method render
   */
  render() {
    this.removeAll(this.el);
    this.createLayout(this.layoutType);
    // update y-axis-spacer height based on precalculated horizontal axis heights
    if (this.opts.get('type') === 'point_series') {
      this.updateCategoryAxisSize();
    }
  }

  /**
   * Create the layout based on the json array provided
   * for each object in the layout array, call the layout function
   *
   * @method createLayout
   * @param arr {Array} Json array
   * @returns {*} Creates the visualization layout
   */
  createLayout(arr) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(arr, obj => {
      this.layout(obj);
    });
  }
  updateCategoryAxisSize() {
    const visConfig = this.opts;
    const axisConfig = visConfig.get('categoryAxes[0]');
    const axis = new _axis__WEBPACK_IMPORTED_MODULE_4__["Axis"](visConfig, axisConfig);
    const position = axis.axisConfig.get('position');
    const chartTitle = new _chart_title__WEBPACK_IMPORTED_MODULE_5__["ChartTitle"](visConfig);
    const axisWrapperElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.el).find(`.visAxis__column--${position}`);
    axisWrapperElement.css('visibility', 'hidden');
    axis.render();
    chartTitle.render();
    const width = axisWrapperElement.width();
    const height = axisWrapperElement.height();
    axis.destroy();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.el).find('.chart-title svg').remove();
    axisWrapperElement.css('visibility', '');
    if (axis.axisConfig.isHorizontal()) {
      const spacerNodes = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.el).find(`.visAxis__spacer--y-${position}`);
      spacerNodes.height(`${height}px`);
    } else {
      axisWrapperElement.find('.visAxis__splitAxes--y').width(`${width}px`);
    }
  }

  /**
   * Appends a DOM element based on the object keys
   * check to see if reference to DOM element is string but not class selector
   * Create a class selector
   *
   * @method layout
   * @param obj {Object} Instructions for creating the layout of a DOM Element
   * @returns {*} DOM Element
   */
  layout(obj) {
    if (!obj.parent) {
      throw new Error('No parent element provided');
    }
    if (!obj.type) {
      throw new Error('No element type provided');
    }
    if (typeof obj.type !== 'string') {
      throw new Error(obj.type + ' must be a string');
    }
    if (typeof obj.parent === 'string' && obj.parent.charAt(0) !== '.') {
      obj.parent = '.' + obj.parent;
    }
    const childEl = this.appendElem(obj.parent, obj.type, obj.class);
    if (obj.datum) {
      childEl.datum(obj.datum);
    }
    if (obj.splits) {
      childEl.call(obj.splits, obj.parent, this.opts);
    }
    if (obj.children) {
      const newParent = childEl[0][0];
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(obj.children, function (obj) {
        if (!obj.parent) {
          obj.parent = newParent;
        }
      });
      this.createLayout(obj.children);
    }
    return childEl;
  }

  /**
   * Appends a `type` of DOM element to `el` and gives it a class name attribute `className`
   *
   * @method appendElem
   * @param el {HTMLElement} Reference to a DOM Element
   * @param type {String} DOM element type
   * @param className {String} CSS class name
   * @returns {*} Reference to D3 Selection
   */
  appendElem(el, type, className) {
    if (!el || !type || !className) {
      throw new Error('Function requires that an el, type, and class be provided');
    }
    if (typeof el === 'string') {
      // Create a DOM reference with a d3 selection
      // Need to make sure that the `el` is bound to this object
      // to prevent it from being appended to another Layout
      el = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.el).select(el)[0][0];
    }
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el).append(type).attr('class', className);
  }

  /**
   * Removes all DOM elements from DOM element
   *
   * @method removeAll
   * @param el {HTMLElement} Reference to DOM element
   * @returns {D3.Selection|D3.Transition.Transition} Reference to an empty DOM element
   */
  removeAll(el) {
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el).selectAll('*').remove();
  }
}

/***/ }),

/***/ "./public/vislib/lib/layout/layout_types.js":
/*!**************************************************!*\
  !*** ./public/vislib/lib/layout/layout_types.js ***!
  \**************************************************/
/*! exports provided: layoutTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutTypes", function() { return layoutTypes; });
/* harmony import */ var _types_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/column_layout */ "./public/vislib/lib/layout/types/column_layout.js");
/* harmony import */ var _types_pie_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/pie_layout */ "./public/vislib/lib/layout/types/pie_layout.js");
/* harmony import */ var _types_gauge_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/gauge_layout */ "./public/vislib/lib/layout/types/gauge_layout.js");
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




const layoutTypes = {
  pie: _types_pie_layout__WEBPACK_IMPORTED_MODULE_1__["pieLayout"],
  gauge: _types_gauge_layout__WEBPACK_IMPORTED_MODULE_2__["gaugeLayout"],
  goal: _types_gauge_layout__WEBPACK_IMPORTED_MODULE_2__["gaugeLayout"],
  metric: _types_gauge_layout__WEBPACK_IMPORTED_MODULE_2__["gaugeLayout"],
  point_series: _types_column_layout__WEBPACK_IMPORTED_MODULE_0__["columnLayout"]
};

/***/ }),

/***/ "./public/vislib/lib/layout/splits/column_chart/chart_split.js":
/*!*********************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/column_chart/chart_split.js ***!
  \*********************************************************************/
/*! exports provided: chartSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartSplit", function() { return chartSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to the `.visWrapper__chart` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.chart` elements as row objects.
 */
function chartSplit(selection, parent) {
  selection.each(function (data) {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).attr('class', function () {
      if (data.rows) {
        return 'visWrapper__splitCharts--row';
      } else if (data.columns) {
        return 'visWrapper__splitCharts--column';
      } else {
        if (parent) {
          return 'visWrapper__chart--first visWrapper__chart--last visWrapper__chart';
        }
        return this.className + ' visWrapper__chart';
      }
    });
    let divClass = '';
    let chartsNumber;
    const charts = div.selectAll('charts').append('div').data(function (d) {
      if (d.rows) {
        chartsNumber = d.rows.length;
        return d.rows;
      } else if (d.columns) {
        chartsNumber = d.columns.length;
        return d.columns;
      } else {
        divClass = 'chart';
        chartsNumber = 1;
        return [d];
      }
    }).enter().append('div').attr('class', function (d, i) {
      let fullDivClass = divClass;
      if (fullDivClass !== 'chart') {
        if (chartsNumber > 1) {
          if (i === 0) {
            fullDivClass += ' visWrapper__chart--first';
          } else if (i === chartsNumber - 1) {
            fullDivClass += ' visWrapper__chart--last';
          }
        } else {
          fullDivClass += ' visWrapper__chart--first visWrapper__chart--last';
        }
      }
      return fullDivClass;
    });
    if (!data.series) {
      charts.call(chartSplit);
    }
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/column_chart/chart_title_split.js":
/*!***************************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/column_chart/chart_title_split.js ***!
  \***************************************************************************/
/*! exports provided: chartTitleSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartTitleSplit", function() { return chartTitleSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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




/*
 * Adds div DOM elements to either the `.visAxis__splitTitles--y` element or the
 * `.visAxis__splitTitles--x` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.chart-title` elements as row objects.
 * if not data.rows or data.columns, return no chart titles
 */
function chartTitleSplit(selection) {
  selection.each(function (data) {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
    const parent = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.visWrapper');
    if (!data.series) {
      div.selectAll('.chart-title').data(function (d) {
        return d.rows ? d.rows : d.columns;
      }).enter().append('div').attr('class', 'chart-title');
      if (data.rows) {
        parent.find('.visAxis__splitTitles--x').remove();
      } else {
        parent.find('.visAxis__splitTitles--y').remove();
      }
      return div;
    }
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).remove();
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/column_chart/x_axis_split.js":
/*!**********************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/column_chart/x_axis_split.js ***!
  \**********************************************************************/
/*! exports provided: xAxisSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisSplit", function() { return xAxisSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to the `.visAxis__splitAxes--x` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.x-axis-div` elements as row objects.
 */

function xAxisSplit(selection) {
  selection.each(function () {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
    let columns;
    div.selectAll('.x-axis-div').append('div').data(function (d) {
      columns = d.columns ? d.columns.length : 1;
      return d.columns ? d.columns : [d];
    }).enter().append('div').attr('class', (d, i) => {
      let divClass = '';
      if (i === 0) {
        divClass += ' visWrapper__chart--first';
      }
      if (i === columns - 1) {
        divClass += ' visWrapper__chart--last';
      }
      return 'x-axis-div axis-div' + divClass;
    });
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/column_chart/y_axis_split.js":
/*!**********************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/column_chart/y_axis_split.js ***!
  \**********************************************************************/
/*! exports provided: yAxisSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisSplit", function() { return yAxisSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to the `.visAxis__splitAxes--y` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.y-axis-div` elements as row objects.
 */

// render and get bounding box width
function yAxisSplit(selection) {
  selection.each(function () {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
    let rows;
    div.selectAll('.y-axis-div').append('div').data(function (d) {
      rows = d.rows ? d.rows.length : 1;
      return d.rows ? d.rows : [d];
    }).enter().append('div').attr('class', (d, i) => {
      let divClass = '';
      if (i === 0) {
        divClass += ' visWrapper__chart--first';
      }
      if (i === rows - 1) {
        divClass += ' visWrapper__chart--last';
      }
      return 'y-axis-div axis-div' + divClass;
    });
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/gauge_chart/chart_split.js":
/*!********************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/gauge_chart/chart_split.js ***!
  \********************************************************************/
/*! exports provided: chartSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartSplit", function() { return chartSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to the `.visWrapper__chart` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.chart` elements as row objects.
 */

function chartSplit(selection) {
  selection.each(function (data) {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).attr('class', function () {
      if (data.rows) {
        return 'visWrapper__splitCharts--row';
      } else if (data.columns) {
        return 'visWrapper__splitCharts--column';
      } else {
        return 'visWrapper__chart';
      }
    });
    let divClass;
    const charts = div.selectAll('charts').append('div').data(function (d) {
      if (d.rows) {
        divClass = 'chart-row';
        return d.rows;
      } else if (d.columns) {
        divClass = 'chart-column';
        return d.columns;
      } else {
        divClass = 'chart';
        return [d];
      }
    }).enter().append('div').attr('class', function () {
      return divClass;
    });
    if (!data.series) {
      charts.call(chartSplit);
    }
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/pie_chart/chart_split.js":
/*!******************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/pie_chart/chart_split.js ***!
  \******************************************************************/
/*! exports provided: chartSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartSplit", function() { return chartSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to the `.visWrapper__chart` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.chart` elements as row objects.
 */

function chartSplit(selection) {
  selection.each(function (data) {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).attr('class', function () {
      if (data.rows) {
        return 'visWrapper__splitCharts--row';
      } else if (data.columns) {
        return 'visWrapper__splitCharts--column';
      } else {
        return 'visWrapper__chart';
      }
    });
    let divClass;
    const charts = div.selectAll('charts').append('div').data(function (d) {
      if (d.rows) {
        divClass = 'chart-row';
        return d.rows;
      } else if (d.columns) {
        divClass = 'chart-column';
        return d.columns;
      } else {
        divClass = 'chart';
        return [d];
      }
    }).enter().append('div').attr('class', function () {
      return divClass;
    });
    if (!data.slices) {
      charts.call(chartSplit);
    }
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/splits/pie_chart/chart_title_split.js":
/*!************************************************************************!*\
  !*** ./public/vislib/lib/layout/splits/pie_chart/chart_title_split.js ***!
  \************************************************************************/
/*! exports provided: chartTitleSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartTitleSplit", function() { return chartTitleSplit; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
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



/*
 * Adds div DOM elements to either the `.visAxis__splitTitles--y` element or the
 * `.visAxis__splitTitles--x` element based on the data layout.
 * For example, if the data has rows, it returns the same number of
 * `.chart-title` elements as row objects.
 * if not data.rows or data.columns, return no chart titles
 */

function chartTitleSplit(selection, parent) {
  selection.each(function (data) {
    const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
    if (!data.slices) {
      div.selectAll('.chart-title').append('div').data(function (d) {
        return d.rows ? d.rows : d.columns;
      }).enter().append('div').attr('class', 'chart-title');
      if (data.rows) {
        d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(parent).select('.visAxis__splitTitles--x').remove();
      } else {
        d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(parent).select('.visAxis__splitTitles--y').remove();
      }
      return div;
    }
    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).remove();
  });
}

/***/ }),

/***/ "./public/vislib/lib/layout/types/column_layout.js":
/*!*********************************************************!*\
  !*** ./public/vislib/lib/layout/types/column_layout.js ***!
  \*********************************************************/
/*! exports provided: columnLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnLayout", function() { return columnLayout; });
/* harmony import */ var _splits_column_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../splits/column_chart/chart_split */ "./public/vislib/lib/layout/splits/column_chart/chart_split.js");
/* harmony import */ var _splits_column_chart_y_axis_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../splits/column_chart/y_axis_split */ "./public/vislib/lib/layout/splits/column_chart/y_axis_split.js");
/* harmony import */ var _splits_column_chart_x_axis_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../splits/column_chart/x_axis_split */ "./public/vislib/lib/layout/splits/column_chart/x_axis_split.js");
/* harmony import */ var _splits_column_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../splits/column_chart/chart_title_split */ "./public/vislib/lib/layout/splits/column_chart/chart_title_split.js");
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
 * Specifies the visualization layout for column charts.
 *
 * This is done using an array of objects. The first object has
 * a `parent` DOM element,  a DOM `type` (e.g. div, svg, etc),
 * and a `class` (required). Each child can omit the parent object,
 * but must include a type and class.
 *
 * Optionally, you can specify `datum` to be bound to the DOM
 * element, a `splits` function that divides the selected element
 * into more DOM elements based on a callback function provided, or
 * a children array which nests other layout objects.
 *
 * Objects in children arrays are children of the current object and return
 * DOM elements which are children of their respective parent element.
 */

function columnLayout(el, data) {
  if (!el || !data) {
    throw new Error('Both an el and data need to be specified');
  }
  return [{
    parent: el,
    type: 'div',
    class: 'visWrapper',
    datum: data,
    children: [{
      type: 'div',
      class: 'visAxis--y',
      children: [{
        type: 'div',
        class: 'visAxis__spacer--y visAxis__spacer--y-top'
      }, {
        type: 'div',
        class: 'visAxis__column--y visAxis__column--left',
        children: [{
          type: 'div',
          class: 'visAxis__splitTitles--y',
          splits: _splits_column_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_3__["chartTitleSplit"]
        }, {
          type: 'div',
          class: 'visAxis__splitAxes--y',
          splits: _splits_column_chart_y_axis_split__WEBPACK_IMPORTED_MODULE_1__["yAxisSplit"]
        }]
      }, {
        type: 'div',
        class: 'visAxis__spacer--y visAxis__spacer--y-bottom'
      }]
    }, {
      type: 'div',
      class: 'visWrapper__column',
      children: [{
        type: 'div',
        class: 'visAxis--x visAxis__column--top',
        children: [{
          type: 'div',
          class: 'visAxis__splitAxes--x',
          splits: _splits_column_chart_x_axis_split__WEBPACK_IMPORTED_MODULE_2__["xAxisSplit"]
        }]
      }, {
        type: 'div',
        class: 'visWrapper__chart',
        splits: _splits_column_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__["chartSplit"]
      }, {
        type: 'div',
        class: 'visWrapper__alerts'
      }, {
        type: 'div',
        class: 'visAxis--x visAxis__column--bottom',
        children: [{
          type: 'div',
          class: 'visAxis__splitAxes--x',
          splits: _splits_column_chart_x_axis_split__WEBPACK_IMPORTED_MODULE_2__["xAxisSplit"]
        }, {
          type: 'div',
          class: 'visAxis__splitTitles--x',
          splits: _splits_column_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_3__["chartTitleSplit"]
        }]
      }]
    }, {
      type: 'div',
      class: 'visAxis--y',
      children: [{
        type: 'div',
        class: 'visAxis__spacer--y visAxis__spacer--y-top'
      }, {
        type: 'div',
        class: 'visAxis__column--y visAxis__column--right',
        children: [{
          type: 'div',
          class: 'visAxis__splitAxes--y',
          splits: _splits_column_chart_y_axis_split__WEBPACK_IMPORTED_MODULE_1__["yAxisSplit"]
        }]
      }, {
        type: 'div',
        class: 'visAxis__spacer--y visAxis__spacer--y-bottom'
      }]
    }]
  }];
}

/***/ }),

/***/ "./public/vislib/lib/layout/types/gauge_layout.js":
/*!********************************************************!*\
  !*** ./public/vislib/lib/layout/types/gauge_layout.js ***!
  \********************************************************/
/*! exports provided: gaugeLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaugeLayout", function() { return gaugeLayout; });
/* harmony import */ var _splits_gauge_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../splits/gauge_chart/chart_split */ "./public/vislib/lib/layout/splits/gauge_chart/chart_split.js");
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
 * Specifies the visualization layout for column charts.
 *
 * This is done using an array of objects. The first object has
 * a `parent` DOM element,  a DOM `type` (e.g. div, svg, etc),
 * and a `class` (required). Each child can omit the parent object,
 * but must include a type and class.
 *
 * Optionally, you can specify `datum` to be bound to the DOM
 * element, a `splits` function that divides the selected element
 * into more DOM elements based on a callback function provided, or
 * a children array which nests other layout objects.
 *
 * Objects in children arrays are children of the current object and return
 * DOM elements which are children of their respective parent element.
 */

function gaugeLayout(el, data) {
  if (!el || !data) {
    throw new Error('Both an el and data need to be specified');
  }
  return [{
    parent: el,
    type: 'div',
    class: 'visWrapper',
    datum: data,
    children: [{
      type: 'div',
      class: 'visAxis__splitTitles--y'
      //splits: chartTitleSplit
    }, {
      type: 'div',
      class: 'visWrapper__column',
      children: [{
        type: 'div',
        class: 'visWrapper__chart',
        splits: _splits_gauge_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__["chartSplit"]
      }, {
        type: 'div',
        class: 'visWrapper__alerts'
      }, {
        type: 'div',
        class: 'visAxis__splitTitles--x'
        //splits: chartTitleSplit
      }]
    }]
  }];
}

/***/ }),

/***/ "./public/vislib/lib/layout/types/pie_layout.js":
/*!******************************************************!*\
  !*** ./public/vislib/lib/layout/types/pie_layout.js ***!
  \******************************************************/
/*! exports provided: pieLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieLayout", function() { return pieLayout; });
/* harmony import */ var _splits_pie_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../splits/pie_chart/chart_split */ "./public/vislib/lib/layout/splits/pie_chart/chart_split.js");
/* harmony import */ var _splits_pie_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../splits/pie_chart/chart_title_split */ "./public/vislib/lib/layout/splits/pie_chart/chart_title_split.js");
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
 * Specifies the visualization layout for column charts.
 *
 * This is done using an array of objects. The first object has
 * a `parent` DOM element,  a DOM `type` (e.g. div, svg, etc),
 * and a `class` (required). Each child can omit the parent object,
 * but must include a type and class.
 *
 * Optionally, you can specify `datum` to be bound to the DOM
 * element, a `splits` function that divides the selected element
 * into more DOM elements based on a callback function provided, or
 * a children array which nests other layout objects.
 *
 * Objects in children arrays are children of the current object and return
 * DOM elements which are children of their respective parent element.
 */

function pieLayout(el, data) {
  if (!el || !data) {
    throw new Error('Both an el and data need to be specified');
  }
  return [{
    parent: el,
    type: 'div',
    class: 'visWrapper',
    datum: data,
    children: [{
      type: 'div',
      class: 'visAxis__splitTitles--y',
      splits: _splits_pie_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_1__["chartTitleSplit"]
    }, {
      type: 'div',
      class: 'visWrapper__column',
      children: [{
        type: 'div',
        class: 'visWrapper__chart',
        splits: _splits_pie_chart_chart_split__WEBPACK_IMPORTED_MODULE_0__["chartSplit"]
      }, {
        type: 'div',
        class: 'visAxis__splitTitles--x',
        splits: _splits_pie_chart_chart_title_split__WEBPACK_IMPORTED_MODULE_1__["chartTitleSplit"]
      }]
    }]
  }];
}

/***/ }),

/***/ "./public/vislib/lib/types/gauge.js":
/*!******************************************!*\
  !*** ./public/vislib/lib/types/gauge.js ***!
  \******************************************/
/*! exports provided: vislibGaugeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibGaugeConfig", function() { return vislibGaugeConfig; });
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

function vislibGaugeConfig(config) {
  return config;
}

/***/ }),

/***/ "./public/vislib/lib/types/index.js":
/*!******************************************!*\
  !*** ./public/vislib/lib/types/index.js ***!
  \******************************************/
/*! exports provided: vislibTypesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibTypesConfig", function() { return vislibTypesConfig; });
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_series */ "./public/vislib/lib/types/point_series.js");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "./public/vislib/lib/types/pie.js");
/* harmony import */ var _gauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gauge */ "./public/vislib/lib/types/gauge.js");
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




const vislibTypesConfig = {
  histogram: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].column,
  horizontal_bar: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].column,
  line: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].line,
  pie: _pie__WEBPACK_IMPORTED_MODULE_1__["vislibPieConfig"],
  area: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].area,
  point_series: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].line,
  heatmap: _point_series__WEBPACK_IMPORTED_MODULE_0__["vislibPointSeriesTypes"].heatmap,
  gauge: _gauge__WEBPACK_IMPORTED_MODULE_2__["vislibGaugeConfig"],
  goal: _gauge__WEBPACK_IMPORTED_MODULE_2__["vislibGaugeConfig"],
  metric: _gauge__WEBPACK_IMPORTED_MODULE_2__["vislibGaugeConfig"]
};

/***/ }),

/***/ "./public/vislib/lib/types/pie.js":
/*!****************************************!*\
  !*** ./public/vislib/lib/types/pie.js ***!
  \****************************************/
/*! exports provided: vislibPieConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibPieConfig", function() { return vislibPieConfig; });
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


function vislibPieConfig(config) {
  if (!config.chart) {
    config.chart = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults({}, config, {
      type: 'pie',
      labels: {
        show: false,
        truncate: 100
      }
    });
  }
  return config;
}

/***/ }),

/***/ "./public/vislib/lib/types/point_series.js":
/*!*************************************************!*\
  !*** ./public/vislib/lib/types/point_series.js ***!
  \*************************************************/
/*! exports provided: vislibPointSeriesTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vislibPointSeriesTypes", function() { return vislibPointSeriesTypes; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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



function getSeriId(seri) {
  if (!seri.id) {
    return;
  }
  // Ideally the format should be either ID or "ID.SERIES"
  // but for some values the SERIES components gets a bit more complex

  // Float values are serialized as strings tuples (i.e. ['99.1']) rather than regular numbers (99.1)
  // so the complete ids are in the format ID.['SERIES']: hence the specific brackets handler
  const bracketsMarker = seri.id.indexOf('[');
  if (bracketsMarker > -1) {
    return seri.id.substring(0, bracketsMarker);
  }
  // Here's the dot check is enough
  if (seri.id.indexOf('.') > -1) {
    return seri.id.split('.')[0];
  }
  return seri.id;
}
const createSeriesFromParams = (cfg, seri) => {
  //percentile data id format is {mainId}.{percentileValue}, this has to be cleaned
  //up to match with ids in cfg.seriesParams entry that contain only {mainId}
  const seriId = getSeriId(seri);
  const matchingSeriesParams = cfg.seriesParams ? cfg.seriesParams.find(seriConfig => {
    return seriId === seriConfig.data.id;
  }) : null;
  const interpolate = cfg.smoothLines ? 'cardinal' : cfg.interpolate;
  if (!matchingSeriesParams) {
    const seriesParams0 = Array.isArray(cfg.seriesParams) && cfg.seriesParams[0] ? cfg.seriesParams[0] : cfg;
    const stacked = ['stacked', 'percentage', 'wiggle', 'silhouette'].includes(cfg.mode);
    return {
      show: true,
      type: cfg.type || 'line',
      mode: stacked ? 'stacked' : 'normal',
      interpolate: interpolate,
      drawLinesBetweenPoints: seriesParams0.drawLinesBetweenPoints,
      showCircles: seriesParams0.showCircles,
      radiusRatio: cfg.radiusRatio,
      data: seri
    };
  }
  return {
    ...matchingSeriesParams,
    data: seri,
    radiusRatio: cfg.radiusRatio
  };
};
const createSeries = (cfg, series) => {
  return {
    type: 'point_series',
    addTimeMarker: cfg.addTimeMarker,
    series: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(series, seri => {
      return createSeriesFromParams(cfg, seri);
    })
  };
};
const createCharts = (cfg, data) => {
  if (data.rows || data.columns) {
    const charts = data.rows ? data.rows : data.columns;
    return charts.map(chart => {
      return createSeries(cfg, chart.series);
    });
  }
  return [createSeries(cfg, data.series)];
};
/*
 * Create handlers for Area, Column, and Line charts which
 * are all nearly the same minus a few details
 */
function create(opts) {
  opts = opts || {};
  return function (cfg, data) {
    const isUserDefinedYAxis = cfg.setYExtents;
    const defaultYExtents = cfg.defaultYExtents;
    const config = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(cfg);
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultsDeep(config, {
      chartTitle: {},
      mode: 'normal'
    }, opts);
    config.type = 'point_series';
    if (!config.tooltip) {
      config.tooltip = {
        show: cfg.addTooltip
      };
    }
    if (!config.valueAxes) {
      let mode = config.mode;
      if (['stacked', 'overlap'].includes(mode)) mode = 'normal';
      config.valueAxes = [{
        id: 'ValueAxis-1',
        type: 'value',
        scale: {
          type: config.scale,
          setYExtents: config.setYExtents,
          defaultYExtents: config.defaultYExtents,
          boundsMargin: defaultYExtents ? config.boundsMargin : 0,
          min: isUserDefinedYAxis ? config.yAxis.min : undefined,
          max: isUserDefinedYAxis ? config.yAxis.max : undefined,
          mode: mode
        },
        labels: {
          axisFormatter: data.data.yAxisFormatter || data.get('yAxisFormatter')
        },
        title: {
          text: data.get('yAxisLabel')
        }
      }];
    } else {
      config.valueAxes.forEach(axis => {
        if (axis.labels) {
          axis.labels.axisFormatter = data.data.yAxisFormatter || data.get('yAxisFormatter');
          const seriesParams = config.seriesParams && config.seriesParams.find(seriesParams => seriesParams.valueAxis === axis.id);
          // if there are series assigned to this axis, get the format from the first one
          if (seriesParams) {
            const seriesDataId = seriesParams.data.id;
            const series = (data.data.series || data.get('series')).find(series => getSeriId(series) === seriesDataId);
            if (series) {
              axis.labels.axisFormatter = series.yAxisFormatter;
            }
          }
        }
      });
    }
    if (!config.categoryAxes) {
      config.categoryAxes = [{
        id: 'CategoryAxis-1',
        type: 'category',
        labels: {
          axisFormatter: data.data.xAxisFormatter || data.get('xAxisFormatter')
        },
        scale: {
          expandLastBucket: opts.expandLastBucket
        },
        title: {
          text: data.get('xAxisLabel')
        }
      }];
    } else {
      const categoryAxis1 = config.categoryAxes.find(categoryAxis => {
        return categoryAxis.id === 'CategoryAxis-1';
      });
      if (categoryAxis1) {
        categoryAxis1.title.text = data.get('xAxisLabel');
      }
    }
    if (!config.charts) {
      config.charts = createCharts(cfg, data.data);
    }
    if (typeof config.enableHover === 'undefined') config.enableHover = true;
    return config;
  };
}
const vislibPointSeriesTypes = {
  line: create(),
  column: create({
    expandLastBucket: true
  }),
  area: create({
    alerts: [{
      type: 'warning',
      msg: 'Positive and negative values are not accurately represented by stacked ' + 'area charts. Either changing the chart mode to "overlap" or using a ' + 'bar chart is recommended.',
      test: function (_, data) {
        if (!data.shouldBeStacked() || data.maxNumberOfSeries() < 2) return;
        const hasPos = data.getYMax(data._getY) > 0;
        const hasNeg = data.getYMin(data._getY) < 0;
        return hasPos && hasNeg;
      }
    }, {
      type: 'warning',
      msg: 'Parts of or the entire area chart might not be displayed due to null ' + 'values in the data. A line chart is recommended when displaying data ' + 'with null values.',
      test: function (_, data) {
        return data.hasNullValues();
      }
    }]
  }),
  heatmap: (cfg, data) => {
    const defaults = create()(cfg, data);
    const hasCharts = defaults.charts.length;
    const tooManySeries = defaults.charts.length && defaults.charts[0].series.length > cfg.heatmapMaxBuckets;
    if (hasCharts && tooManySeries) {
      defaults.error = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('visTypeVislib.vislib.heatmap.maxBucketsText', {
        defaultMessage: 'There are too many series defined ({nr}). The configured maximum is {max}.',
        values: {
          max: cfg.heatmapMaxBuckets,
          nr: defaults.charts[0].series.length
        },
        description: 'This message appears at heatmap visualizations'
      });
    }
    defaults.valueAxes[0].show = false;
    defaults.categoryAxes[0].style = {
      rangePadding: 0,
      rangeOuterPadding: 0
    };
    defaults.categoryAxes.push({
      id: 'CategoryAxis-2',
      type: 'category',
      position: 'left',
      values: data.getLabels(),
      scale: {
        inverted: true
      },
      labels: {
        filter: false,
        axisFormatter: function (val) {
          return val;
        }
      },
      style: {
        rangePadding: 0,
        rangeOuterPadding: 0
      },
      title: {
        text: data.get('zAxisLabel') || ''
      }
    });
    return defaults;
  }
};

/***/ }),

/***/ "./public/vislib/lib/vis_config.js":
/*!*****************************************!*\
  !*** ./public/vislib/lib/vis_config.js ***!
  \*****************************************/
/*! exports provided: VisConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisConfig", function() { return VisConfig; });
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./public/vislib/lib/types/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./public/vislib/lib/data.js");
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
 * Provides vislib configuration, throws error if invalid property is accessed without providing defaults
 */




const DEFAULT_VIS_CONFIG = {
  style: {
    margin: {
      top: 10,
      right: 3,
      bottom: 5,
      left: 3
    }
  },
  alerts: [],
  categoryAxes: [],
  valueAxes: [],
  grid: {}
};
class VisConfig {
  constructor(visConfigArgs, data, uiState, el, createColorLookupFunction) {
    this.data = new _data__WEBPACK_IMPORTED_MODULE_3__["Data"](data, uiState, createColorLookupFunction);
    const visType = _types__WEBPACK_IMPORTED_MODULE_2__["vislibTypesConfig"][visConfigArgs.type];
    const typeDefaults = visType(visConfigArgs, this.data);
    this._values = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep({
      ...typeDefaults
    }, DEFAULT_VIS_CONFIG);
    this._values.el = el;
  }
  get(property, defaults) {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this._values, property) || typeof defaults !== 'undefined') {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(this._values, property, defaults);
    } else {
      throw new Error(`Accessing invalid config property: ${property}`);
      return defaults;
    }
  }
  set(property, value) {
    return Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_0__["set"])(this._values, property, value);
  }
}

/***/ }),

/***/ "./public/vislib/partials/touchdown.tmpl.html":
/*!****************************************************!*\
  !*** ./public/vislib/partials/touchdown.tmpl.html ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"visTooltip__header\">\n  <i class=\"fa fa-info-circle visTooltip__headerIcon\"></i>\n  <span class=\"visTooltip__headerText\">\n    <%= wholeBucket ? 'Part of this bucket' : 'This area' %>\n    may contain partial data. The selected time range does not fully cover it.\n  </span>\n</p>\n");

/***/ }),

/***/ "./public/vislib/vis.js":
/*!******************************!*\
  !*** ./public/vislib/vis.js ***!
  \******************************/
/*! exports provided: Vis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vis", function() { return Vis; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors */ "./public/vislib/errors.ts");
/* harmony import */ var _lib_vis_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/vis_config */ "./public/vislib/lib/vis_config.js");
/* harmony import */ var _lib_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/handler */ "./public/vislib/lib/handler.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
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
 * Creates the visualizations.
 *
 * @class Vis
 * @constructor
 * @param element {HTMLElement} jQuery selected HTML element
 * @param config {Object} Parameters that define the chart type and chart options
 */
class Vis extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {
  constructor(element, visConfigArgs, deps) {
    super();
    this.element = element.get ? element.get(0) : element;
    this.visConfigArgs = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(visConfigArgs);
    this.visConfigArgs.dimmingOpacity = deps.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["DIMMING_OPACITY_SETTING"]);
    this.visConfigArgs.heatmapMaxBuckets = deps.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["HEATMAP_MAX_BUCKETS_SETTING"]);
    this.deps = deps;
  }
  hasLegend() {
    return this.visConfigArgs.addLegend;
  }
  initVisConfig(data, uiState) {
    this.data = data;
    this.uiState = uiState;
    this.visConfig = new _lib_vis_config__WEBPACK_IMPORTED_MODULE_4__["VisConfig"](this.visConfigArgs, this.data, this.uiState, this.element, this.deps.charts.colors.createColorLookupFunction.bind(this.deps.charts.colors));
  }

  /**
   * Renders the visualization
   *
   * @method render
   * @param data {Object} Elasticsearch query results
   */
  render(data, uiState) {
    if (!data) {
      throw new Error('No valid data!');
    }
    if (this.handler) {
      this.data = null;
      this._runOnHandler('destroy');
    }
    this.initVisConfig(data, uiState);
    this.handler = new _lib_handler__WEBPACK_IMPORTED_MODULE_5__["Handler"](this, this.visConfig, this.deps);
    this._runOnHandler('render');
  }
  getLegendLabels() {
    return this.visConfig ? this.visConfig.get('legend.labels', null) : null;
  }
  getLegendColors() {
    return this.visConfig ? this.visConfig.get('legend.colors', null) : null;
  }
  _runOnHandler(method) {
    try {
      this.handler[method]();
    } catch (error) {
      if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_3__["VislibError"]) {
        error.displayToScreen(this.handler);
      } else {
        throw error;
      }
    }
  }

  /**
   * Destroys the visualization
   * Removes chart and all elements associated with it.
   * Removes chart and all elements associated with it.
   * Remove event listeners and pass destroy call down to owned objects.
   *
   * @method destroy
   */
  destroy() {
    const selection = d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(this.element).select('.visWrapper');
    if (this.handler) this._runOnHandler('destroy');
    selection.remove();
  }

  /**
   * Sets attributes on the visualization
   *
   * @method set
   * @param name {String} An attribute name
   * @param val {*} Value to which the attribute name is set
   */
  set(name, val) {
    this.visConfigArgs[name] = val;
    this.render(this.data, this.uiState);
  }

  /**
   * Gets attributes from the visualization
   *
   * @method get
   * @param name {String} An attribute name
   * @returns {*} The value of the attribute name
   */
  get(name) {
    return this.visConfig.get(name);
  }

  /**
   * Turns on event listeners.
   *
   * @param event {String}
   * @param listener{Function}
   * @returns {*}
   */
  on(event, listener) {
    const first = this.listenerCount(event) === 0;
    const ret = events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"].prototype.on.call(this, event, listener);
    const added = this.listenerCount(event) > 0;

    // if this is the first listener added for the event
    // enable the event in the handler
    if (first && added && this.handler) this.handler.enable(event);
    return ret;
  }

  /**
   * Turns off event listeners.
   *
   * @param event {String}
   * @param listener{Function}
   * @returns {*}
   */
  off(event, listener) {
    const last = this.listenerCount(event) === 1;
    const ret = events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"].prototype.off.call(this, event, listener);
    const removed = this.listenerCount(event) === 0;

    // Once all listeners are removed, disable the events in the handler
    if (last && removed && this.handler) this.handler.disable(event);
    return ret;
  }
  removeAllListeners(event) {
    const ret = events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"].prototype.removeAllListeners.call(this, event);
    this.handler.disable(event);
    return ret;
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/_chart.js":
/*!************************************************!*\
  !*** ./public/vislib/visualizations/_chart.js ***!
  \************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_data_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/_data_label */ "./public/vislib/lib/_data_label.js");
/* harmony import */ var _lib_dispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dispatch */ "./public/vislib/lib/dispatch.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tooltip */ "./public/vislib/components/tooltip/index.js");
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
 * The Base Class for all visualizations.
 *
 * @class Chart
 * @constructor
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class Chart {
  constructor(handler, element, chartData, deps) {
    this.handler = handler;
    this.chartEl = element;
    this.chartData = chartData;
    this.tooltips = [];
    const events = this.events = new _lib_dispatch__WEBPACK_IMPORTED_MODULE_3__["Dispatch"](handler, deps.uiSettings);
    const fieldFormatter = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getFormatService"])().deserialize(this.handler.data.get('tooltipFormatter'));
    const tooltipFormatterProvider = this.handler.visConfig.get('type') === 'pie' ? _components_tooltip__WEBPACK_IMPORTED_MODULE_5__["hierarchicalTooltipFormatter"] : _components_tooltip__WEBPACK_IMPORTED_MODULE_5__["pointSeriesTooltipFormatter"];
    const tooltipFormatter = tooltipFormatterProvider(fieldFormatter);
    if (this.handler.visConfig && this.handler.visConfig.get('addTooltip', false)) {
      const element = this.handler.el;

      // Add tooltip
      this.tooltip = new _components_tooltip__WEBPACK_IMPORTED_MODULE_5__["Tooltip"]('chart', element, tooltipFormatter, events);
      this.tooltips.push(this.tooltip);
    }
    this._addIdentifier = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.bind(this._addIdentifier, this);
  }

  /**
   * Renders the chart(s)
   *
   * @method render
   * @returns {HTMLElement} Contains the D3 chart
   */
  render() {
    const selection = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.chartEl);
    selection.selectAll('*').remove();
    selection.call(this.draw());
  }

  /**
   * Append the data label to the element
   *
   * @method _addIdentifier
   * @param selection {Object} d3 select object
   */
  _addIdentifier(selection, labelProp) {
    labelProp = labelProp || 'label';
    const labels = this.handler.data.labels;
    function resolveLabel(datum) {
      if (labels.length === 1) return labels[0];
      if (datum[0]) return datum[0][labelProp];
      return datum[labelProp];
    }
    selection.each(function (datum) {
      const label = resolveLabel(datum);
      if (label != null) Object(_lib_data_label__WEBPACK_IMPORTED_MODULE_2__["dataLabel"])(this, label);
    });
  }

  /**
   * Removes all DOM elements from the root element
   *
   * @method destroy
   */
  destroy() {
    const selection = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.chartEl);
    this.events.removeAllListeners();
    this.tooltips.forEach(function (tooltip) {
      tooltip.destroy();
    });
    selection.remove();
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/gauge_chart.js":
/*!*****************************************************!*\
  !*** ./public/vislib/visualizations/gauge_chart.js ***!
  \*****************************************************/
/*! exports provided: GaugeChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeChart", function() { return GaugeChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_chart */ "./public/vislib/visualizations/_chart.js");
/* harmony import */ var _gauges_gauge_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gauges/gauge_types */ "./public/vislib/visualizations/gauges/gauge_types.js");
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




class GaugeChart extends _chart__WEBPACK_IMPORTED_MODULE_1__["Chart"] {
  constructor(handler, chartEl, chartData, deps) {
    super(handler, chartEl, chartData, deps);
    this.gaugeConfig = handler.visConfig.get('gauge', {});
    this.gauge = new _gauges_gauge_types__WEBPACK_IMPORTED_MODULE_2__["gaugeTypes"][this.gaugeConfig.type](this);
  }
  addEvents(element) {
    const events = this.events;
    return element.call(events.addHoverEvent()).call(events.addMouseoutEvent());
  }

  /**
   * returns the displayed width and height of a single gauge depending on selected alignment
   * @param alignment - automatic | horizontal | vertical
   * @param containerDom
   * @param nrOfItems
   * @returns {{width: number, height: number}}
   */
  calcGaugeDim(alignment, containerDom, nrOfItems) {
    const containerWidth = containerDom.clientWidth;
    const containerHeight = containerDom.clientHeight;
    const containerMargin = 25;

    //there are a few pixel of margin between multiple gauges
    //subtracting this margin prevents displaying scrollbars
    //this is because of the "chart-title" element,
    //that's inserted after the gauges
    const gaugeBottomMargin = Math.ceil(25 / nrOfItems);
    const availableWidth = containerWidth - containerMargin;
    const availableHeight = containerHeight - containerMargin;
    const adaptedWidth = Math.floor(availableWidth / nrOfItems);
    const adaptedHeight = Math.floor(availableHeight / nrOfItems) - gaugeBottomMargin;
    switch (alignment) {
      case 'vertical':
        return {
          width: containerWidth,
          //for compatiblity with tests
          height: adaptedHeight,
          alignment
        };
      case 'horizontal':
        return {
          width: adaptedWidth,
          height: availableHeight,
          alignment
        };
      default:
        return {
          width: availableWidth < availableHeight ? containerWidth : adaptedWidth,
          height: availableWidth < availableHeight ? adaptedHeight : availableHeight,
          alignment: availableWidth < availableHeight ? 'vertical' : 'horizontal'
        };
    }
  }
  draw() {
    const self = this;
    const {
      gaugeConfig
    } = this;
    return function (selection) {
      selection.each(function (data) {
        const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        const {
          width,
          height
        } = self.calcGaugeDim(gaugeConfig.alignment, this, data.series.length);
        if (height < 0 || width < 0) return;
        div.style('text-align', 'center').style('overflow-y', 'auto');
        data.series.forEach(series => {
          const svg = div.append('svg').style('display', 'inline-block').style('overflow', 'hidden').attr('focusable', 'false').attr('width', width);
          const g = svg.append('g');
          const gauges = self.gauge.drawGauge(g, series, width, height);
          svg.attr('height', height);
          self.addEvents(gauges);
        });
        div.append('div').attr('class', 'chart-title').style('text-align', 'center').text(data.label || data.yAxisLabel);
        self.events.emit('rendered', {
          chart: data
        });
        return div;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/gauges/gauge_types.js":
/*!************************************************************!*\
  !*** ./public/vislib/visualizations/gauges/gauge_types.js ***!
  \************************************************************/
/*! exports provided: gaugeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaugeTypes", function() { return gaugeTypes; });
/* harmony import */ var _meter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meter */ "./public/vislib/visualizations/gauges/meter.js");
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


const gaugeTypes = {
  meter: _meter__WEBPACK_IMPORTED_MODULE_0__["MeterGauge"]
};

/***/ }),

/***/ "./public/vislib/visualizations/gauges/meter.js":
/*!******************************************************!*\
  !*** ./public/vislib/visualizations/gauges/meter.js ***!
  \******************************************************/
/*! exports provided: MeterGauge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterGauge", function() { return MeterGauge; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_2__);
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




const arcAngles = {
  angleFactor: 0.75,
  maxAngle: 2 * Math.PI * 1.3,
  minAngle: 2 * Math.PI * 0.7
};
const circleAngles = {
  angleFactor: 1,
  maxAngle: 2 * Math.PI,
  minAngle: 0
};
const defaultConfig = {
  showTooltip: true,
  percentageMode: true,
  innerSpace: 5,
  extents: [0, 10000],
  outline: false,
  scale: {
    show: true,
    color: '#666',
    width: 2,
    ticks: 10,
    tickLength: 8
  },
  labels: {
    show: true,
    color: '#666'
  },
  style: {
    bgWidth: 0.5,
    width: 0.9
  }
};
class MeterGauge {
  constructor(gaugeChart) {
    this.gaugeChart = gaugeChart;
    this.gaugeConfig = gaugeChart.gaugeConfig;
    this.gaugeConfig = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaultsDeep(this.gaugeConfig, defaultConfig);
    this.gaugeChart.handler.visConfig.set('legend', {
      labels: this.getLabels(),
      colors: this.getColors()
    });
    const colors = this.gaugeChart.handler.visConfig.get('legend.colors', null);
    if (colors) {
      this.gaugeChart.handler.vis.uiState.setSilent('vis.defaultColors', null);
      this.gaugeChart.handler.vis.uiState.setSilent('vis.defaultColors', colors);
    }
    this.colorFunc = this.gaugeChart.handler.data.getColorFunc();
  }
  getLabels() {
    const isPercentageMode = this.gaugeConfig.percentageMode;
    const colorsRange = this.gaugeConfig.colorsRange;
    const max = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(colorsRange).to;
    const labels = [];
    colorsRange.forEach(range => {
      const from = isPercentageMode ? Math.round(100 * range.from / max) : range.from;
      const to = isPercentageMode ? Math.round(100 * range.to / max) : range.to;
      labels.push(`${from} - ${to}`);
    });
    return labels;
  }
  getColors() {
    const invertColors = this.gaugeConfig.invertColors;
    const colorSchema = this.gaugeConfig.colorSchema;
    const colorsRange = this.gaugeConfig.colorsRange;
    const labels = this.getLabels();
    const colors = {};
    for (let i = 0; i < labels.length; i += 1) {
      const divider = Math.max(colorsRange.length - 1, 1);
      const val = invertColors ? 1 - i / divider : i / divider;
      colors[labels[i]] = Object(_charts_public__WEBPACK_IMPORTED_MODULE_2__["getHeatmapColors"])(val, colorSchema);
    }
    return colors;
  }
  getBucket(val) {
    let bucket = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(this.gaugeConfig.colorsRange, range => {
      return range.from <= val && range.to > val;
    });
    if (bucket === -1) {
      if (val < this.gaugeConfig.colorsRange[0].from) bucket = 0;else bucket = this.gaugeConfig.colorsRange.length - 1;
    }
    return bucket;
  }
  getLabel(val) {
    const bucket = this.getBucket(val);
    const labels = this.gaugeChart.handler.visConfig.get('legend.labels');
    return labels[bucket];
  }
  getColorBucket(val) {
    const bucket = this.getBucket(val);
    const labels = this.gaugeChart.handler.visConfig.get('legend.labels');
    return this.colorFunc(labels[bucket]);
  }
  drawScale(svg, radius, angle) {
    const scaleWidth = this.gaugeConfig.scale.width;
    const tickLength = this.gaugeConfig.scale.tickLength;
    const scaleTicks = this.gaugeConfig.scale.ticks;
    const scale = svg.append('g');
    this.gaugeConfig.colorsRange.forEach(range => {
      const color = this.getColorBucket(range.from);
      const scaleArc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().startAngle(angle(range.from)).endAngle(angle(range.to)).innerRadius(radius).outerRadius(radius + scaleWidth);
      scale.append('path').attr('d', scaleArc).style('stroke', color).style('fill', color);
    });
    const extents = angle.domain();
    for (let i = 0; i <= scaleTicks; i++) {
      const val = i * (extents[1] - extents[0]) / scaleTicks;
      const tickAngle = angle(val) - Math.PI / 2;
      const x0 = Math.cos(tickAngle) * radius;
      const x1 = Math.cos(tickAngle) * (radius - tickLength);
      const y0 = Math.sin(tickAngle) * radius;
      const y1 = Math.sin(tickAngle) * (radius - tickLength);
      const color = this.getColorBucket(val);
      scale.append('line').attr('x1', x0).attr('x2', x1).attr('y1', y0).attr('y2', y1).style('stroke-width', scaleWidth).style('stroke', color);
    }
    return scale;
  }
  drawGauge(svg, data, width, height) {
    const marginFactor = 0.95;
    const tooltip = this.gaugeChart.tooltip;
    const isTooltip = this.gaugeChart.handler.visConfig.get('addTooltip');
    const isDisplayWarning = this.gaugeChart.handler.visConfig.get('isDisplayWarning', false);
    const {
      angleFactor,
      maxAngle,
      minAngle
    } = this.gaugeConfig.gaugeType === 'Circle' ? circleAngles : arcAngles;
    const maxRadius = Math.min(width, height / angleFactor) / 2 * marginFactor;
    const extendRange = this.gaugeConfig.extendRange;
    const maxY = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.max(data.values, 'y').y;
    const min = this.gaugeConfig.colorsRange[0].from;
    const max = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(this.gaugeConfig.colorsRange).to;
    const angle = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().range([minAngle, maxAngle]).domain([min, extendRange && max < maxY ? maxY : max]);
    const radius = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().range([0, maxRadius]).domain([this.gaugeConfig.innerSpace + 1, 0]);
    const totalWidth = Math.abs(radius(0) - radius(1));
    const bgPadding = totalWidth * (1 - this.gaugeConfig.style.bgWidth) / 2;
    const gaugePadding = totalWidth * (1 - this.gaugeConfig.style.width) / 2;

    /**
     * Function to calculate the free space in the center of the gauge. This takes into account
     * whether ticks are enabled or not.
     *
     * This is calculated using the inner diameter (radius(1) * 2) of the gauge.
     * If ticks/scale are enabled we need to still subtract the tick length * 2 to make space for a tick
     * on every side. If ticks/scale are disabled, the radius(1) function actually leaves space for the scale,
     * so we add that free space (which is expressed via the paddings, we just use the larger of those) to the diameter.
     */
    const getInnerFreeSpace = () => radius(1) * 2 - (this.gaugeConfig.scale.show ? this.gaugeConfig.scale.tickLength * 2 : -Math.max(bgPadding, gaugePadding) * 2);
    const arc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().startAngle(minAngle).endAngle(function (d) {
      return Math.max(0, Math.min(maxAngle, angle(Math.max(min, d.y))));
    }).innerRadius(function (d, i, j) {
      return Math.max(0, radius(j + 1) + gaugePadding);
    }).outerRadius(function (d, i, j) {
      return Math.max(0, radius(j) - gaugePadding);
    });
    const bgArc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().startAngle(minAngle).endAngle(maxAngle).innerRadius(function (d, i, j) {
      return Math.max(0, radius(j + 1) + bgPadding);
    }).outerRadius(function (d, i, j) {
      return Math.max(0, radius(j) - bgPadding);
    });
    const gaugeHolders = svg.selectAll('path').data([data]).enter().append('g').attr('data-label', d => this.getLabel(d.values[0].y));
    const gauges = gaugeHolders.selectAll('g').data(d => d.values).enter();
    gauges.append('path').attr('d', bgArc).attr('class', this.gaugeConfig.outline ? 'visGauge__meter--outline' : undefined).style('fill', this.gaugeConfig.style.bgFill);
    const series = gauges.append('path').attr('d', arc).attr('class', this.gaugeConfig.outline ? 'visGauge__meter--outline' : undefined).style('fill', d => this.getColorBucket(Math.max(min, d.y)));
    const smallContainer = svg.node().getBBox().height < 70;
    let hiddenLabels = smallContainer;

    // If the value label is hidden we later want to hide also all other labels
    // since they don't make sense as long as the actual value is hidden.
    let valueLabelHidden = false;
    gauges.append('text').attr('class', 'chart-label').attr('y', -5).text(d => {
      if (this.gaugeConfig.percentageMode) {
        const percentage = (d.y - min) / (max - min);
        return data.yAxisFormatter(percentage);
      }
      return data.yAxisFormatter(d.y);
    }).attr('style', 'dominant-baseline: central;').style('text-anchor', 'middle').style('font-size', '2em').style('display', function () {
      const textLength = this.getBBox().width;
      // The text is too long if it's larger than the inner free space minus a couple of random pixels for padding.
      const textTooLong = textLength >= getInnerFreeSpace() - 6;
      if (textTooLong) {
        hiddenLabels = true;
        valueLabelHidden = true;
      }
      return textTooLong ? 'none' : 'initial';
    });
    if (this.gaugeConfig.labels.show) {
      svg.append('text').attr('class', 'chart-label').text(data.label).attr('y', -30).attr('style', 'dominant-baseline: central; text-anchor: middle;').style('display', function () {
        const textLength = this.getBBox().width;
        const textTooLong = textLength > maxRadius;
        if (textTooLong) {
          hiddenLabels = true;
        }
        return smallContainer || textTooLong ? 'none' : 'initial';
      });
      svg.append('text').attr('class', 'chart-label').text(this.gaugeConfig.style.subText).attr('y', 20).attr('style', 'dominant-baseline: central; text-anchor: middle;').style('display', function () {
        const textLength = this.getBBox().width;
        const textTooLong = textLength > maxRadius;
        if (textTooLong) {
          hiddenLabels = true;
        }
        return valueLabelHidden || smallContainer || textTooLong ? 'none' : 'initial';
      });
    }
    if (this.gaugeConfig.scale.show) {
      this.drawScale(svg, radius(1), angle);
    }
    if (isTooltip) {
      series.each(function () {
        const gauge = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        gauge.call(tooltip.render());
      });
    }
    if (hiddenLabels && isDisplayWarning) {
      this.gaugeChart.handler.alerts.show('Some labels were hidden due to size constraints');
    }

    //center the visualization
    const transformX = width / 2;
    const transformY = height / 2 > maxRadius ? height / 2 : maxRadius;
    svg.attr('transform', `translate(${transformX}, ${transformY})`);
    return series;
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/pie_chart.js":
/*!***************************************************!*\
  !*** ./public/vislib/visualizations/pie_chart.js ***!
  \***************************************************/
/*! exports provided: PieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return PieChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/numeral */ "@elastic/numeral");
/* harmony import */ var _elastic_numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors */ "./public/vislib/errors.ts");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_chart */ "./public/vislib/visualizations/_chart.js");
/* harmony import */ var _components_labels_truncate_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/labels/truncate_labels */ "./public/vislib/components/labels/truncate_labels.js");
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








const defaults = {
  isDonut: false,
  showTooltip: true,
  color: undefined,
  fillColor: undefined
};
/**
 * Pie Chart Visualization
 *
 * @class PieChart
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class PieChart extends _chart__WEBPACK_IMPORTED_MODULE_5__["Chart"] {
  constructor(handler, chartEl, chartData, deps) {
    super(handler, chartEl, chartData, deps);
    const charts = this.handler.data.getVisData();
    this._validatePieData(charts);
    this._attr = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(handler.visConfig.get('chart', {}), defaults);
  }

  /**
   * Checks whether pie slices have all zero values.
   * If so, an error is thrown.
   */
  _validatePieData(charts) {
    const isAllZeros = charts.every(chart => {
      return chart.slices.children.length === 0;
    });
    if (isAllZeros) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_4__["PieContainsAllZeros"]();
    }
  }

  /**
   * Adds Events to SVG paths
   *
   * @method addPathEvents
   * @param element {D3.Selection} Reference to SVG path
   * @returns {D3.Selection} SVG path with event listeners attached
   */
  addPathEvents(element) {
    const events = this.events;
    return element.call(events.addHoverEvent()).call(events.addMouseoutEvent()).call(events.addClickEvent());
  }
  convertToPercentage(slices) {
    (function assignPercentages(slices) {
      if (slices.sumOfChildren != null) return;
      const parent = slices;
      const children = parent.children;
      const parentPercent = parent.percentOfParent;
      const sum = parent.sumOfChildren = Math.abs(children.reduce(function (sum, child) {
        return sum + Math.abs(child.size);
      }, 0));
      children.forEach(function (child) {
        child.percentOfGroup = Math.abs(child.size) / sum;
        child.percentOfParent = child.percentOfGroup;
        if (parentPercent != null) {
          child.percentOfParent *= parentPercent;
        }
        if (child.children) {
          assignPercentages(child);
        }
      });
    })(slices);
  }

  /**
   * Adds pie paths to SVG
   *
   * @method addPath
   * @param width {Number} Width of SVG
   * @param height {Number} Height of SVG
   * @param svg {HTMLElement} Chart SVG
   * @param slices {Object} Chart data
   * @returns {D3.Selection} SVG with paths attached
   */
  addPath(width, height, svg, slices) {
    const self = this;
    const marginFactor = 0.95;
    const isDonut = self._attr.isDonut;
    const radius = Math.min(width, height) / 2 * marginFactor;
    const color = self.handler.data.getPieColorFunc();
    const tooltip = self.tooltip;
    const isTooltip = self._attr.addTooltip;
    const arcs = svg.append('g').attr('class', 'arcs');
    const labels = svg.append('g').attr('class', 'labels');
    const showLabels = self._attr.labels.show;
    const showValues = self._attr.labels.values;
    const truncateLabelLength = self._attr.labels.truncate;
    const showOnlyOnLastLevel = self._attr.labels.last_level;
    const partition = d3__WEBPACK_IMPORTED_MODULE_0___default.a.layout.partition().sort(null).value(function (d) {
      return d.percentOfParent * 100;
    });
    const x = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().range([0, 2 * Math.PI]);
    const y = d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.sqrt().range([0, showLabels ? radius * 0.7 : radius]);
    const startAngle = function (d) {
      return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
    };
    const endAngle = function (d) {
      if (d.dx < 1e-8) return x(d.x);
      return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
    };
    const arc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().startAngle(startAngle).endAngle(endAngle).innerRadius(function (d) {
      // option for a single layer, i.e pie chart
      if (d.depth === 1 && !isDonut) {
        // return no inner radius
        return 0;
      }
      return Math.max(0, y(d.y));
    }).outerRadius(function (d) {
      return Math.max(0, y(d.y + d.dy));
    });
    const outerArc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().startAngle(startAngle).endAngle(endAngle).innerRadius(radius * 0.8).outerRadius(radius * 0.8);
    let maxDepth = 0;
    const path = arcs.datum(slices).selectAll('path').data(partition.nodes).enter().append('path').attr('d', arc).attr('class', function (d) {
      if (d.depth === 0) {
        return;
      }
      if (d.depth > maxDepth) maxDepth = d.depth;
      return 'slice';
    }).attr('data-test-subj', function (d) {
      if (d.name) {
        return `pieSlice-${d.name.split(' ').join('-')}`;
      }
    }).call(self._addIdentifier, 'name').style('fill', function (d) {
      if (d.depth === 0) {
        return 'none';
      }
      return color(d.name);
    });

    // add labels
    if (showLabels) {
      const labelGroups = labels.datum(slices).selectAll('.label').data(partition.nodes);

      // create an empty quadtree to hold label positions
      const svgParentNode = svg.node().parentNode.parentNode;
      const svgBBox = {
        width: svgParentNode.clientWidth,
        height: svgParentNode.clientHeight
      };
      const labelLayout = d3__WEBPACK_IMPORTED_MODULE_0___default.a.geom.quadtree().extent([[-svgBBox.width, -svgBBox.height], [svgBBox.width, svgBBox.height]]).x(function (d) {
        return d.position.x;
      }).y(function (d) {
        return d.position.y;
      })([]);
      labelGroups.enter().append('g').attr('class', 'label').append('text').text(function (d) {
        if (d.depth === 0) {
          d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this.parentNode).remove();
          return;
        }
        if (showValues) {
          const value = _elastic_numeral__WEBPACK_IMPORTED_MODULE_3___default()(d.value / 100).format('0.[00]%');
          return `${d.name} (${value})`;
        }
        return d.name;
      }).text(function () {
        return Object(_components_labels_truncate_labels__WEBPACK_IMPORTED_MODULE_6__["truncateLabel"])(this, truncateLabelLength);
      }).attr('text-anchor', function (d) {
        const midAngle = startAngle(d) + (endAngle(d) - startAngle(d)) / 2;
        return midAngle < Math.PI ? 'start' : 'end';
      }).attr('class', 'label-text').each(function resolveConflicts(d) {
        if (d.depth === 0) return;
        const parentNode = this.parentNode;
        if (showOnlyOnLastLevel && maxDepth !== d.depth) {
          d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(parentNode).remove();
          return;
        }
        const bbox = this.getBBox();
        const pos = outerArc.centroid(d);
        const midAngle = startAngle(d) + (endAngle(d) - startAngle(d)) / 2;
        pos[1] += 4;
        pos[0] = (0.7 + d.depth / 10) * radius * (midAngle < Math.PI ? 1 : -1);
        d.position = {
          x: pos[0],
          y: pos[1],
          left: midAngle < Math.PI ? pos[0] : pos[0] - bbox.width,
          right: midAngle > Math.PI ? pos[0] + bbox.width : pos[0],
          bottom: pos[1] + 5,
          top: pos[1] - bbox.height - 5
        };
        const conflicts = [];
        labelLayout.visit(function (node) {
          if (!node.point) return;
          if (conflicts.length) return true;
          const point = node.point.position;
          const current = d.position;
          if (point) {
            const horizontalConflict = point.left < 0 && current.left < 0 || point.left > 0 && current.left > 0;
            const verticalConflict = point.top >= current.top && point.top <= current.bottom || point.top <= current.top && point.bottom >= current.top;
            if (horizontalConflict && verticalConflict) {
              point.point = node.point;
              conflicts.push(point);
            }
            return true;
          }
        });
        if (conflicts.length) {
          d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(parentNode).remove();
          return;
        }
        labelLayout.add(d);
      }).attr('x', function (d) {
        if (d.depth === 0 || !d.position) {
          return;
        }
        return d.position.x;
      }).attr('y', function (d) {
        if (d.depth === 0 || !d.position) {
          return;
        }
        return d.position.y;
      });
      labelGroups.append('polyline').attr('points', function (d) {
        if (d.depth === 0 || !d.position) {
          return;
        }
        const pos1 = outerArc.centroid(d);
        const x2 = d.position.x > 0 ? d.position.x - 10 : d.position.x + 10;
        const pos2 = [x2, d.position.y - 4];
        pos1[1] = pos2[1];
        return [arc.centroid(d), pos1, pos2];
      }).attr('class', 'label-line');
    }
    if (isTooltip) {
      path.call(tooltip.render());
    }
    return path;
  }
  _validateContainerSize(width, height) {
    const minWidth = 20;
    const minHeight = 20;
    if (width <= minWidth || height <= minHeight) {
      throw new _errors__WEBPACK_IMPORTED_MODULE_4__["ContainerTooSmall"]();
    }
  }

  /**
   * Renders d3 visualization
   *
   * @method draw
   * @returns {Function} Creates the pie chart
   */
  draw() {
    const self = this;
    return function (selection) {
      selection.each(function (data) {
        const slices = data.slices;
        const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this);
        const width = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).width();
        const height = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).height();
        if (!slices.children.length) return;
        self.convertToPercentage(slices);
        self._validateContainerSize(width, height);
        const svg = div.append('svg').attr('width', width).attr('height', height).attr('focusable', 'false').append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
        const path = self.addPath(width, height, svg, slices);
        self.addPathEvents(path);
        self.events.emit('rendered', {
          chart: data
        });
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series.js":
/*!******************************************************!*\
  !*** ./public/vislib/visualizations/point_series.js ***!
  \******************************************************/
/*! exports provided: PointSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSeries", function() { return PointSeries; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tooltip */ "./public/vislib/components/tooltip/index.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chart */ "./public/vislib/visualizations/_chart.js");
/* harmony import */ var _time_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time_marker */ "./public/vislib/visualizations/time_marker.js");
/* harmony import */ var _point_series_series_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point_series/series_types */ "./public/vislib/visualizations/point_series/series_types.js");
/* harmony import */ var _partials_touchdown_tmpl_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../partials/touchdown.tmpl.html */ "./public/vislib/partials/touchdown.tmpl.html");
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









const seriTypes = _point_series_series_types__WEBPACK_IMPORTED_MODULE_6__["seriesTypes"];
const touchdownTmpl = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.template(_partials_touchdown_tmpl_html__WEBPACK_IMPORTED_MODULE_7__["default"]);
/**
 * Line Chart Visualization
 *
 * @class PointSeries
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class PointSeries extends _chart__WEBPACK_IMPORTED_MODULE_4__["Chart"] {
  constructor(handler, chartEl, chartData, deps) {
    super(handler, chartEl, chartData, deps);
    this.deps = deps;
    this.handler = handler;
    this.chartData = chartData;
    this.chartEl = chartEl;
    this.chartConfig = this.findChartConfig();
    this.handler.pointSeries = this;
  }
  findChartConfig() {
    const charts = this.handler.visConfig.get('charts');
    const chartIndex = this.handler.data.chartData().indexOf(this.chartData);
    return charts[chartIndex];
  }
  getSeries(seriesId) {
    return this.series.find(series => series.chartData.aggId === seriesId);
  }
  addBackground(svg, width, height) {
    const startX = 0;
    const startY = 0;
    return svg.append('rect').attr('x', startX).attr('y', startY).attr('width', width).attr('height', height).attr('fill', 'transparent').attr('class', 'background');
  }
  addGrid(svg) {
    const {
      width,
      height
    } = svg.node().getBBox();
    return svg.append('g').attr('class', 'grid').call(this.handler.grid.draw(width, height));
  }
  addClipPath(svg) {
    const {
      width,
      height
    } = svg.node().getBBox();
    const startX = 0;
    const startY = 0;
    this.clipPathId = 'chart-area' + lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniqueId();

    // Creating clipPath
    return svg.append('clipPath').attr('id', this.clipPathId).append('rect').attr('x', startX).attr('y', startY).attr('width', width).attr('height', height);
  }
  addEvents(svg) {
    const isBrushable = this.events.isBrushable();
    if (isBrushable) {
      this.events.addBrushEvent(svg);
    }
  }
  createEndZones(svg) {
    const self = this;
    const xAxis = this.handler.categoryAxes[0];
    const xScale = xAxis.getScale();
    const ordered = xAxis.ordered;
    const isHorizontal = xAxis.axisConfig.isHorizontal();
    const missingMinMax = !ordered || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isUndefined(ordered.min) || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isUndefined(ordered.max);
    if (missingMinMax || ordered.endzones === false) return;
    const {
      width,
      height
    } = svg.node().getBBox();

    // we don't want to draw endzones over our min and max values, they
    // are still a part of the dataset. We want to start the endzones just
    // outside of them so we will use these values rather than ordered.min/max
    const oneUnit = (ordered.units || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.identity)(1);
    const drawInverted = isHorizontal || xAxis.axisConfig.get('scale.inverted', false);
    const size = isHorizontal ? width : height;
    // points on this axis represent the amount of time they cover,
    // so draw the endzones at the actual time bounds
    const leftEndzone = {
      x: drawInverted ? 0 : Math.max(xScale(ordered.min), 0),
      w: drawInverted ? Math.max(xScale(ordered.min), 0) : height - Math.max(xScale(ordered.min), 0)
    };
    const expandLastBucket = xAxis.axisConfig.get('scale.expandLastBucket');
    const rightLastVal = expandLastBucket ? ordered.max : Math.min(ordered.max, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(xAxis.values));
    const rightStart = rightLastVal + oneUnit;
    const rightEndzone = {
      x: drawInverted ? xScale(rightStart) : 0,
      w: drawInverted ? Math.max(size - xScale(rightStart), 0) : xScale(rightStart)
    };
    this.endzones = svg.selectAll('.layer').data([leftEndzone, rightEndzone]).enter().insert('g', '.brush').attr('class', 'endzone').append('rect').attr('class', 'zone').attr('x', d => isHorizontal ? d.x : 0).attr('y', d => isHorizontal ? 0 : d.x).attr('height', d => isHorizontal ? height : d.w).attr('width', d => isHorizontal ? d.w : width);
    function callPlay(event) {
      const boundData = event.target.__data__;
      const mouseChartXCoord = event.clientX - self.chartEl.getBoundingClientRect().left;
      const mouseChartYCoord = event.clientY - self.chartEl.getBoundingClientRect().top;
      const wholeBucket = boundData && boundData.x != null;

      // the min and max that the endzones start in
      const min = drawInverted ? leftEndzone.w : rightEndzone.w;
      const max = drawInverted ? rightEndzone.x : leftEndzone.x;

      // bounds of the cursor to consider
      let xLeft = isHorizontal ? mouseChartXCoord : mouseChartYCoord;
      let xRight = isHorizontal ? mouseChartXCoord : mouseChartYCoord;
      if (wholeBucket) {
        xLeft = xScale(boundData.x);
        xRight = xScale(xAxis.addInterval(boundData.x));
      }
      return {
        wholeBucket: wholeBucket,
        touchdown: min > xLeft || max < xRight
      };
    }
    function textFormatter() {
      return touchdownTmpl(callPlay(d3__WEBPACK_IMPORTED_MODULE_0___default.a.event));
    }
    const endzoneTT = new _components_tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"]('endzones', this.handler.el, textFormatter, null);
    this.tooltips.push(endzoneTT);
    endzoneTT.order = 0;
    endzoneTT.showCondition = function inEndzone() {
      return callPlay(d3__WEBPACK_IMPORTED_MODULE_0___default.a.event).touchdown;
    };
    endzoneTT.render()(svg);
  }
  calculateRadiusLimits(data) {
    this.radii = lodash__WEBPACK_IMPORTED_MODULE_1___default()(data.series).map(function (series) {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(series.values, 'z');
    }).flattenDeep().reduce(function (result, val) {
      if (result.min > val) result.min = val;
      if (result.max < val) result.max = val;
      return result;
    }, {
      min: Infinity,
      max: -Infinity
    });
  }
  draw() {
    const self = this;
    const $elem = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this.chartEl);
    const width = this.chartConfig.width = $elem.width();
    const height = this.chartConfig.height = $elem.height();
    const xScale = this.handler.categoryAxes[0].getScale();
    const addTimeMarker = this.chartConfig.addTimeMarker;
    const times = this.chartConfig.times || [];
    let div;
    let svg;
    return function (selection) {
      selection.each(function (data) {
        const el = this;
        div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(el);
        svg = div.append('svg').attr('focusable', 'false').attr('width', width).attr('height', height);
        self.addBackground(svg, width, height);
        self.addGrid(svg);
        self.addClipPath(svg);
        self.addEvents(svg);
        self.createEndZones(svg);
        self.calculateRadiusLimits(data);
        self.series = [];
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(self.chartConfig.series, (seriArgs, i) => {
          if (!seriArgs.show) return;
          const SeriClass = seriTypes[seriArgs.type || self.handler.visConfig.get('chart.type')] || seriTypes.line;
          const series = new SeriClass(self.handler, svg, data.series[i], seriArgs, self.deps);
          series.events = self.events;
          svg.call(series.draw());
          self.series.push(series);
        });
        if (addTimeMarker) {
          //Domain end of 'now' will be milliseconds behind current time
          //Extend toTime by 1 minute to ensure those cases have a TimeMarker
          const toTime = new Date(xScale.domain()[1].getTime() + 60000);
          const currentTime = new Date();
          if (toTime > currentTime) {
            new _time_marker__WEBPACK_IMPORTED_MODULE_5__["TimeMarker"](times, xScale, height).render(svg);
          }
        }
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/_point_series.js":
/*!********************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/_point_series.js ***!
  \********************************************************************/
/*! exports provided: PointSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSeries", function() { return PointSeries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__);
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



const thresholdLineDefaults = {
  show: false,
  value: 10,
  width: 1,
  style: 'full',
  color: Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_1__["euiPaletteColorBlind"])()[9]
};
class PointSeries {
  constructor(handler, seriesEl, seriesData, seriesConfig) {
    this.handler = handler;
    this.baseChart = handler.pointSeries;
    this.chartEl = seriesEl;
    this.chartData = seriesData;
    this.seriesConfig = seriesConfig;
    this.thresholdLineOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(handler.visConfig.get('thresholdLine', {}), thresholdLineDefaults);
  }
  getGroupedCount() {
    const stacks = [];
    return this.baseChart.chartConfig.series.reduce((sum, series) => {
      const valueAxis = series.valueAxis || this.baseChart.handler.valueAxes[0].id;
      const isStacked = series.mode === 'stacked';
      const isHistogram = series.type === 'histogram';
      if (!isHistogram) return sum;
      if (isStacked && stacks.includes(valueAxis)) return sum;
      if (isStacked) stacks.push(valueAxis);
      return sum + 1;
    }, 0);
  }
  getGroupedNum(seriesId) {
    let i = 0;
    const stacks = [];
    for (const seri of this.baseChart.chartConfig.series) {
      const valueAxis = seri.valueAxis || this.baseChart.handler.valueAxes[0].id;
      const isStacked = seri.mode === 'stacked';
      if (!isStacked) {
        if (seri.data.rawId === seriesId) return i;
        i++;
      } else {
        if (!(valueAxis in stacks)) stacks[valueAxis] = i++;
        if (seri.data.rawId === seriesId) return stacks[valueAxis];
      }
    }
    return 0;
  }
  getValueAxis() {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.handler.valueAxes, axis => {
      return axis.axisConfig.get('id') === this.seriesConfig.valueAxis;
    }) || this.handler.valueAxes[0];
  }
  getCategoryAxis() {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.handler.categoryAxes, axis => {
      return axis.axisConfig.get('id') === this.seriesConfig.categoryAxis;
    }) || this.handler.categoryAxes[0];
  }
  addCircleEvents(element) {
    const events = this.events;
    if (this.handler.visConfig.get('enableHover')) {
      const hover = events.addHoverEvent();
      const mouseout = events.addMouseoutEvent();
      element.call(hover).call(mouseout);
    }
    const click = events.addClickEvent();
    return element.call(click);
  }
  addThresholdLine(svgElem) {
    const chartData = this.chartData;
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const valueAxisDomain = this.getValueAxis().axisScale.getDomain(chartData.values.length);
    const yScale = this.getValueAxis().getScale();
    const svgParentWidth = svgElem[0][0].attributes.width.value;
    const svgParentHeight = svgElem[0][0].attributes.height.value;
    const thresholdLineWidth = this.thresholdLineOptions.width;
    let thresholdLineStyle = '0';
    if (this.thresholdLineOptions.style === 'dashed') {
      thresholdLineStyle = '10,5';
    } else if (this.thresholdLineOptions.style === 'dot-dashed') {
      thresholdLineStyle = '20,5,5,5';
    }
    const thresholdValue = this.thresholdLineOptions.value;
    const lineColor = this.thresholdLineOptions.color;
    function y(y) {
      return yScale(y);
    }
    if (valueAxisDomain && valueAxisDomain[0] <= thresholdValue && valueAxisDomain[1] >= thresholdValue) {
      svgElem.append('line').attr('x1', isHorizontal ? 0 : y(thresholdValue)).attr('y1', isHorizontal ? y(thresholdValue) : 0).attr('x2', isHorizontal ? svgParentWidth : y(thresholdValue)).attr('y2', isHorizontal ? y(thresholdValue) : svgParentHeight).attr('stroke-width', thresholdLineWidth).attr('stroke-dasharray', thresholdLineStyle).attr('stroke', lineColor);
    }
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/area_chart.js":
/*!*****************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/area_chart.js ***!
  \*****************************************************************/
/*! exports provided: AreaChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChart", function() { return AreaChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_point_series */ "./public/vislib/visualizations/point_series/_point_series.js");
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





const defaults = {
  mode: 'normal',
  showCircles: true,
  radiusRatio: 9,
  showLines: true,
  interpolate: 'linear',
  color: undefined,
  fillColor: undefined
};
/**
 * Area chart visualization
 *
 * @class AreaChart
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific
 * chart
 */
class AreaChart extends _point_series__WEBPACK_IMPORTED_MODULE_3__["PointSeries"] {
  constructor(handler, chartEl, chartData, seriesConfigArgs, deps) {
    super(handler, chartEl, chartData, seriesConfigArgs, deps);
    this.seriesConfig = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(seriesConfigArgs || {}, defaults);
    this.isOverlapping = this.seriesConfig.mode !== 'stacked';
    if (this.isOverlapping) {
      // Default opacity should return to 0.6 on mouseout
      const defaultOpacity = 0.6;
      this.seriesConfig.defaultOpacity = defaultOpacity;
      handler.highlight = function (element) {
        const label = this.getAttribute('data-label');
        if (!label) return;
        const highlightOpacity = 0.8;
        const highlightElements = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-label]', element.parentNode).filter(function (els, el) {
          return `${jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('label')}` === label;
        });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-label]', element.parentNode).not(highlightElements).css('opacity', defaultOpacity / 2); // half of the default opacity
        highlightElements.css('opacity', highlightOpacity);
      };
      handler.unHighlight = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-label]', element).css('opacity', defaultOpacity);

        //The legend should keep max opacity
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-label]', jquery__WEBPACK_IMPORTED_MODULE_2___default()(element).siblings()).css('opacity', 1);
      };
    }
  }
  addPath(svg, data) {
    const ordered = this.handler.data.get('ordered');
    const isTimeSeries = ordered && ordered.date;
    const isOverlapping = this.isOverlapping;
    const color = this.handler.data.getColorFunc();
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const interpolate = this.seriesConfig.interpolate;
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();

    // Data layers
    const layer = svg.append('g').attr('class', function (d, i) {
      return 'series series-' + i;
    });

    // Append path
    const path = layer.append('path').attr('data-label', data.label).style('fill', () => color(data.label)).style('stroke', () => color(data.label)).classed('visAreaChart__overlapArea', function () {
      return isOverlapping;
    }).attr('clip-path', 'url(#' + this.baseChart.clipPathId + ')');
    function x(d) {
      if (isTimeSeries) {
        return xScale(d.x);
      }
      return xScale(d.x) + xScale.rangeBand() / 2;
    }
    function y1(d) {
      const y0 = d.y0 || 0;
      const y = d.y || 0;
      return yScale(y0 + y);
    }
    function y0(d) {
      const y0 = d.y0 || 0;
      return yScale(y0);
    }
    function getArea() {
      if (isHorizontal) {
        return d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.area().x(x).y0(y0).y1(y1);
      } else {
        return d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.area().y(x).x0(y0).x1(y1);
      }
    }

    // update
    path.attr('d', function () {
      const area = getArea().defined(function (d) {
        return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(d.y);
      }).interpolate(interpolate);
      return area(data.values);
    }).style('stroke-width', '1px');
    return path;
  }

  /**
   * Adds SVG circles to area chart
   *
   * @method addCircles
   * @param svg {HTMLElement} SVG to which circles are appended
   * @param data {Array} Chart data array
   * @returns {D3.UpdateSelection} SVG with circles added
   */
  addCircles(svg, data) {
    const color = this.handler.data.getColorFunc();
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const ordered = this.handler.data.get('ordered');
    const circleRadius = 12;
    const circleStrokeWidth = 0;
    const tooltip = this.baseChart.tooltip;
    const isTooltip = this.handler.visConfig.get('tooltip.show');
    const isOverlapping = this.isOverlapping;
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const layer = svg.append('g').attr('class', 'points area').attr('clip-path', 'url(#' + this.baseChart.clipPathId + ')');

    // append the circles
    const circles = layer.selectAll('circles').data(function appendData() {
      return data.values.filter(function isZeroOrNull(d) {
        return d.y !== 0 && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(d.y);
      });
    });

    // exit
    circles.exit().remove();

    // enter
    circles.enter().append('circle').attr('data-label', data.label).attr('stroke', () => {
      return color(data.label);
    }).attr('fill', 'transparent').attr('stroke-width', circleStrokeWidth);
    function cx(d) {
      if (ordered && ordered.date) {
        return xScale(d.x);
      }
      return xScale(d.x) + xScale.rangeBand() / 2;
    }
    function cy(d) {
      const y = d.y || 0;
      if (isOverlapping) {
        return yScale(y);
      }
      return yScale(d.y0 + y);
    }

    // update
    circles.attr('cx', isHorizontal ? cx : cy).attr('cy', isHorizontal ? cy : cx).attr('r', circleRadius);

    // Add tooltip
    if (isTooltip) {
      circles.call(tooltip.render());
    }
    return circles;
  }
  addPathEvents(path) {
    const events = this.events;
    if (this.handler.visConfig.get('enableHover')) {
      const hover = events.addHoverEvent();
      const mouseout = events.addMouseoutEvent();
      path.call(hover).call(mouseout);
    }
  }

  /**
   * Renders d3 visualization
   *
   * @method draw
   * @returns {Function} Creates the area chart
   */
  draw() {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const svg = self.chartEl.append('g');
        svg.data([self.chartData]);
        const path = self.addPath(svg, self.chartData);
        self.addPathEvents(path);
        const circles = self.addCircles(svg, self.chartData);
        self.addCircleEvents(circles);
        if (self.thresholdLineOptions.show) {
          self.addThresholdLine(self.chartEl);
        }
        self.events.emit('rendered', {
          chart: self.chartData
        });
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/column_chart.js":
/*!*******************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/column_chart.js ***!
  \*******************************************************************/
/*! exports provided: ColumnChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChart", function() { return ColumnChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_point_series */ "./public/vislib/visualizations/point_series/_point_series.js");
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





const defaults = {
  mode: 'normal',
  showTooltip: true,
  color: undefined,
  fillColor: undefined,
  showLabel: true
};

/**
 * Histogram intervals are not always equal widths, e.g, monthly time intervals.
 * It is more visually appealing to vary bar width so that gutter width is constant.
 */
function datumWidth(defaultWidth, datum, nextDatum, scale, gutterWidth, groupCount = 1) {
  let datumWidth = defaultWidth;
  if (nextDatum) {
    datumWidth = (scale(nextDatum.x) - scale(datum.x) - gutterWidth) / groupCount;
    // To handle data-sets with holes, do not let width be larger than default.
    if (datumWidth > defaultWidth) {
      datumWidth = defaultWidth;
    }
  }
  return datumWidth;
}

/**
 * Vertical Bar Chart Visualization: renders vertical and/or stacked bars
 *
 * @class ColumnChart
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class ColumnChart extends _point_series__WEBPACK_IMPORTED_MODULE_3__["PointSeries"] {
  constructor(handler, chartEl, chartData, seriesConfigArgs, deps) {
    super(handler, chartEl, chartData, seriesConfigArgs, deps);
    this.seriesConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(seriesConfigArgs || {}, defaults);
    this.labelOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(handler.visConfig.get('labels', {}), defaults.showLabel);
  }
  addBars(svg, data) {
    const self = this;
    const color = this.handler.data.getColorFunc();
    const tooltip = this.baseChart.tooltip;
    const isTooltip = this.handler.visConfig.get('tooltip.show');
    const layer = svg.append('g').attr('class', 'series histogram').attr('clip-path', 'url(#' + this.baseChart.clipPathId + ')');
    const bars = layer.selectAll('rect').data(data.values.filter(function (d) {
      return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(d.y);
    }));
    bars.exit().remove();
    bars.enter().append('rect').attr('data-label', data.label).attr('fill', () => color(data.label)).attr('stroke', () => color(data.label));
    self.updateBars(bars);

    // Add tooltip
    if (isTooltip) {
      bars.call(tooltip.render());
    }
    return bars;
  }

  /**
   * Determines whether bars are grouped or stacked and updates the D3
   * selection
   *
   * @method updateBars
   * @param bars {D3.UpdateSelection} SVG with rect added
   * @returns {D3.UpdateSelection}
   */
  updateBars(bars) {
    if (this.seriesConfig.mode === 'stacked') {
      return this.addStackedBars(bars);
    }
    return this.addGroupedBars(bars);
  }

  /**
   * Adds stacked bars to column chart visualization
   *
   * @method addStackedBars
   * @param bars {D3.UpdateSelection} SVG with rect added
   * @returns {D3.UpdateSelection}
   */
  addStackedBars(bars) {
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const isTimeScale = this.getCategoryAxis().axisConfig.isTimeDomain();
    const isLabels = this.labelOptions.show;
    const yMin = yScale.domain()[0];
    const gutterSpacingPercentage = 0.15;
    const chartData = this.chartData;
    const getGroupedNum = this.getGroupedNum.bind(this);
    const groupCount = this.getGroupedCount();
    let barWidth;
    let gutterWidth;
    if (isTimeScale) {
      const {
        min,
        interval
      } = this.handler.data.get('ordered');
      let intervalWidth = xScale(min + interval) - xScale(min);
      intervalWidth = Math.abs(intervalWidth);
      gutterWidth = intervalWidth * gutterSpacingPercentage;
      barWidth = (intervalWidth - gutterWidth) / groupCount;
    }
    function x(d, i) {
      const groupNum = getGroupedNum(d.seriesId);
      if (isTimeScale) {
        return xScale(d.x) + datumWidth(barWidth, d, bars.data()[i + 1], xScale, gutterWidth, groupCount) * groupNum;
      }
      return xScale(d.x) + xScale.rangeBand() / groupCount * groupNum;
    }
    function y(d) {
      if (isHorizontal && d.y < 0 || !isHorizontal && d.y > 0) {
        return yScale(d.y0);
      }
      return yScale(d.y0 + d.y);
    }
    function labelX(d, i) {
      return x(d, i) + widthFunc(d, i) / 2;
    }
    function labelY(d) {
      return y(d) + heightFunc(d) / 2;
    }
    function labelDisplay(d, i) {
      if (isHorizontal && this.getBBox().width > widthFunc(d, i)) return 'none';
      if (!isHorizontal && this.getBBox().width > heightFunc(d)) return 'none';
      if (isHorizontal && this.getBBox().height > heightFunc(d)) return 'none';
      if (!isHorizontal && this.getBBox().height > widthFunc(d, i)) return 'none';
      return 'block';
    }
    function widthFunc(d, i) {
      if (isTimeScale) {
        return datumWidth(barWidth, d, bars.data()[i + 1], xScale, gutterWidth, groupCount);
      }
      return xScale.rangeBand() / groupCount;
    }
    function heightFunc(d) {
      // for split bars or for one series,
      // last series will have d.y0 = 0
      if (d.y0 === 0 && yMin > 0) {
        return yScale(yMin) - yScale(d.y);
      }
      return Math.abs(yScale(d.y0) - yScale(d.y0 + d.y));
    }
    function formatValue(d) {
      return chartData.yAxisFormatter(d.y);
    }

    // update
    bars.attr('x', isHorizontal ? x : y).attr('width', isHorizontal ? widthFunc : heightFunc).attr('y', isHorizontal ? y : x).attr('height', isHorizontal ? heightFunc : widthFunc);
    const layer = d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(bars[0].parentNode);
    const barLabels = layer.selectAll('text').data(chartData.values.filter(function (d) {
      return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(d.y);
    }));
    if (isLabels) {
      const colorFunc = this.handler.data.getColorFunc();
      const d3Color = d3__WEBPACK_IMPORTED_MODULE_1___default.a.rgb(colorFunc(chartData.label));
      let labelClass;
      if (Object(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__["isColorDark"])(d3Color.r, d3Color.g, d3Color.b)) {
        labelClass = 'visColumnChart__bar-label--light';
      } else {
        labelClass = 'visColumnChart__bar-label--dark';
      }
      barLabels.enter().append('text').text(formatValue).attr('class', `visColumnChart__barLabel visColumnChart__barLabel--stack ${labelClass}`).attr('x', isHorizontal ? labelX : labelY).attr('y', isHorizontal ? labelY : labelX)

      // display must apply last, because labelDisplay decision it based
      // on text bounding box which depends on actual applied style.
      .attr('display', labelDisplay);
    }
    return bars;
  }

  /**
   * Adds grouped bars to column chart visualization
   *
   * @method addGroupedBars
   * @param bars {D3.UpdateSelection} SVG with rect added
   * @returns {D3.UpdateSelection}
   */
  addGroupedBars(bars) {
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const chartData = this.chartData;
    const groupCount = this.getGroupedCount();
    const gutterSpacingPercentage = 0.15;
    const isTimeScale = this.getCategoryAxis().axisConfig.isTimeDomain();
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const isLogScale = this.getValueAxis().axisConfig.isLogScale();
    const isLabels = this.labelOptions.show;
    const getGroupedNum = this.getGroupedNum.bind(this);
    let barWidth;
    let gutterWidth;
    if (isTimeScale) {
      const {
        min,
        interval
      } = this.handler.data.get('ordered');
      let intervalWidth = xScale(min + interval) - xScale(min);
      intervalWidth = Math.abs(intervalWidth);
      gutterWidth = intervalWidth * gutterSpacingPercentage;
      barWidth = (intervalWidth - gutterWidth) / groupCount;
    }
    function x(d, i) {
      const groupNum = getGroupedNum(d.seriesId);
      if (isTimeScale) {
        return xScale(d.x) + datumWidth(barWidth, d, bars.data()[i + 1], xScale, gutterWidth, groupCount) * groupNum;
      }
      return xScale(d.x) + xScale.rangeBand() / groupCount * groupNum;
    }
    function y(d) {
      if (isHorizontal && d.y < 0 || !isHorizontal && d.y > 0) {
        return yScale(0);
      }
      return yScale(d.y);
    }
    function labelX(d, i) {
      return x(d, i) + widthFunc(d, i) / 2;
    }
    function labelY(d) {
      if (isHorizontal) {
        return d.y >= 0 ? y(d) - 4 : y(d) + heightFunc(d) + this.getBBox().height;
      }
      return d.y >= 0 ? y(d) + heightFunc(d) + 4 : y(d) - this.getBBox().width - 4;
    }
    function labelDisplay(d, i) {
      if (isHorizontal && this.getBBox().width > widthFunc(d, i)) {
        return 'none';
      }
      if (!isHorizontal && this.getBBox().height > widthFunc(d)) {
        return 'none';
      }
      return 'block';
    }
    function widthFunc(d, i) {
      if (isTimeScale) {
        return datumWidth(barWidth, d, bars.data()[i + 1], xScale, gutterWidth, groupCount);
      }
      return xScale.rangeBand() / groupCount;
    }
    function heightFunc(d) {
      const baseValue = isLogScale ? 1 : 0;
      return Math.abs(yScale(baseValue) - yScale(d.y));
    }
    function formatValue(d) {
      return chartData.yAxisFormatter(d.y);
    }

    // update
    bars.attr('x', isHorizontal ? x : y).attr('width', isHorizontal ? widthFunc : heightFunc).attr('y', isHorizontal ? y : x).attr('height', isHorizontal ? heightFunc : widthFunc);
    const layer = d3__WEBPACK_IMPORTED_MODULE_1___default.a.select(bars[0].parentNode);
    const barLabels = layer.selectAll('text').data(chartData.values.filter(function (d) {
      return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(d.y);
    }));
    barLabels.exit().remove();
    if (isLabels) {
      const labelColor = this.handler.data.getColorFunc()(chartData.label);
      barLabels.enter().append('text').text(formatValue).attr('class', 'visColumnChart__barLabel').attr('x', isHorizontal ? labelX : labelY).attr('y', isHorizontal ? labelY : labelX).attr('dominant-baseline', isHorizontal ? 'auto' : 'central').attr('text-anchor', isHorizontal ? 'middle' : 'start').attr('fill', labelColor)

      // display must apply last, because labelDisplay decision it based
      // on text bounding box which depends on actual applied style.
      .attr('display', labelDisplay);
    }
    return bars;
  }

  /**
   * Renders d3 visualization
   *
   * @method draw
   * @returns {Function} Creates the vertical bar chart
   */
  draw() {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const svg = self.chartEl.append('g');
        svg.data([self.chartData]);
        const bars = self.addBars(svg, self.chartData);
        self.addCircleEvents(bars);
        if (self.thresholdLineOptions.show) {
          self.addThresholdLine(self.chartEl);
        }
        self.events.emit('rendered', {
          chart: self.chartData
        });
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/heatmap_chart.js":
/*!********************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/heatmap_chart.js ***!
  \********************************************************************/
/*! exports provided: HeatmapChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapChart", function() { return HeatmapChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_point_series */ "./public/vislib/visualizations/point_series/_point_series.js");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../charts/public */ "plugin/charts/public");
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






const defaults = {
  color: undefined,
  // todo
  fillColor: undefined // todo
};
/**
 * Line Chart Visualization
 *
 * @class HeatmapChart
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class HeatmapChart extends _point_series__WEBPACK_IMPORTED_MODULE_3__["PointSeries"] {
  constructor(handler, chartEl, chartData, seriesConfigArgs, deps) {
    super(handler, chartEl, chartData, seriesConfigArgs, deps);
    this.seriesConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(seriesConfigArgs || {}, defaults);
    this.handler.visConfig.set('legend', {
      labels: this.getHeatmapLabels(this.handler.visConfig),
      colors: this.getHeatmapColors(this.handler.visConfig)
    });
    const colors = this.handler.visConfig.get('legend.colors', null);
    if (colors) {
      this.handler.vis.uiState.setSilent('vis.defaultColors', null);
      this.handler.vis.uiState.setSilent('vis.defaultColors', colors);
    }
  }
  getHeatmapLabels(cfg) {
    const percentageMode = cfg.get('percentageMode');
    const colorsNumber = cfg.get('colorsNumber');
    const colorsRange = cfg.get('colorsRange');
    const zAxisConfig = this.getValueAxis().axisConfig;
    const zAxisFormatter = zAxisConfig.get('labels.axisFormatter');
    const zScale = this.getValueAxis().getScale();
    const [min, max] = zScale.domain();
    const labels = [];
    const maxColorCnt = 10;
    if (cfg.get('setColorRange')) {
      colorsRange.forEach(range => {
        const from = isFinite(range.from) ? zAxisFormatter(range.from) : range.from;
        const to = isFinite(range.to) ? zAxisFormatter(range.to) : range.to;
        labels.push(`${from} - ${to}`);
      });
    } else {
      if (max === min) {
        return [min.toString()];
      }
      for (let i = 0; i < colorsNumber; i++) {
        let label;
        let val = i / colorsNumber;
        let nextVal = (i + 1) / colorsNumber;
        if (percentageMode) {
          val = Math.ceil(val * 100);
          nextVal = Math.ceil(nextVal * 100);
          label = `${val}% - ${nextVal}%`;
        } else {
          val = val * (max - min) + min;
          nextVal = nextVal * (max - min) + min;
          if (max - min > maxColorCnt) {
            const valInt = Math.ceil(val);
            if (i === 0) {
              val = valInt === val ? val : valInt - 1;
            } else {
              val = valInt;
            }
            nextVal = Math.ceil(nextVal);
          }
          if (isFinite(val)) val = zAxisFormatter(val);
          if (isFinite(nextVal)) nextVal = zAxisFormatter(nextVal);
          label = `${val} - ${nextVal}`;
        }
        labels.push(label);
      }
    }
    return labels;
  }
  getHeatmapColors(cfg) {
    const invertColors = cfg.get('invertColors');
    const colorSchema = cfg.get('colorSchema');
    const labels = this.getHeatmapLabels(cfg);
    const colors = {};
    for (const i in labels) {
      if (labels[i]) {
        const val = invertColors ? 1 - i / labels.length : i / labels.length;
        colors[labels[i]] = Object(_charts_public__WEBPACK_IMPORTED_MODULE_4__["getHeatmapColors"])(val, colorSchema);
      }
    }
    return colors;
  }
  addSquares(svg, data) {
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.handler.categoryAxes[1].getScale();
    const zScale = this.getValueAxis().getScale();
    const tooltip = this.baseChart.tooltip;
    const isTooltip = this.handler.visConfig.get('tooltip.show');
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const colorsNumber = this.handler.visConfig.get('colorsNumber');
    const setColorRange = this.handler.visConfig.get('setColorRange');
    const colorsRange = this.handler.visConfig.get('colorsRange');
    const color = this.handler.data.getColorFunc();
    const labels = this.handler.visConfig.get('legend.labels');
    const zAxisConfig = this.getValueAxis().axisConfig;
    const zAxisFormatter = zAxisConfig.get('labels.axisFormatter');
    const showLabels = zAxisConfig.get('labels.show');
    const overwriteLabelColor = zAxisConfig.get('labels.overwriteColor', false);
    const layer = svg.append('g').attr('class', 'series');
    const squares = layer.selectAll('g.square').data(data.values);
    squares.exit().remove();
    let barWidth;
    if (this.getCategoryAxis().axisConfig.isTimeDomain()) {
      const {
        min,
        interval
      } = this.handler.data.get('ordered');
      const start = min;
      const end = moment__WEBPACK_IMPORTED_MODULE_1___default()(min).add(interval).valueOf();
      barWidth = xScale(end) - xScale(start);
      if (!isHorizontal) barWidth *= -1;
    }
    function x(d) {
      return xScale(d.x);
    }
    function y(d) {
      return yScale(d.series);
    }
    const [min, max] = zScale.domain();
    function getColorBucket(d) {
      let val = 0;
      if (setColorRange && colorsRange.length) {
        const bucket = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(colorsRange, range => {
          return range.from <= d.y && range.to > d.y;
        });
        return bucket ? colorsRange.indexOf(bucket) : -1;
      } else {
        if (isNaN(min) || isNaN(max)) {
          val = colorsNumber - 1;
        } else if (min === max) {
          val = 0;
        } else {
          val = (d.y - min) / (max - min); /* get val from 0 - 1 */
          val = Math.min(colorsNumber - 1, Math.floor(val * colorsNumber));
        }
      }
      if (d.y == null) {
        return -1;
      }
      return !isNaN(val) ? val : -1;
    }
    function label(d) {
      const colorBucket = getColorBucket(d);
      // colorBucket id should always GTE 0
      if (colorBucket < 0) d.hide = true;
      return labels[colorBucket];
    }
    function z(d) {
      if (label(d) === '') return 'transparent';
      return color(label(d));
    }
    const squareWidth = barWidth || xScale.rangeBand();
    const squareHeight = yScale.rangeBand();
    squares.enter().append('g').attr('class', 'square');
    squares.append('rect').attr('x', x).attr('width', squareWidth).attr('y', y).attr('height', squareHeight).attr('data-label', label).attr('fill', z).attr('style', 'cursor: pointer; stroke: black; stroke-width: 0.1px').style('display', d => {
      return d.hide ? 'none' : 'initial';
    });

    // todo: verify that longest label is not longer than the barwidth
    // or barwidth is not smaller than textheight (and vice versa)
    //
    if (showLabels) {
      const rotate = zAxisConfig.get('labels.rotate');
      const rotateRad = rotate * Math.PI / 180;
      const cellPadding = 5;
      const maxLength = Math.min(Math.abs(squareWidth / Math.cos(rotateRad)), Math.abs(squareHeight / Math.sin(rotateRad))) - cellPadding;
      const maxHeight = Math.min(Math.abs(squareWidth / Math.sin(rotateRad)), Math.abs(squareHeight / Math.cos(rotateRad))) - cellPadding;
      let labelColor;
      if (overwriteLabelColor) {
        // If overwriteLabelColor is true, use the manual specified color
        labelColor = zAxisConfig.get('labels.color');
      } else {
        // Otherwise provide a function that will calculate a light or dark color
        labelColor = d => {
          const bgColor = z(d);
          const color = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(bgColor);
          return color && Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["isColorDark"])(parseInt(color[1]), parseInt(color[2]), parseInt(color[3])) ? '#FFF' : '#222';
        };
      }
      let hiddenLabels = false;
      squares.append('text').text(d => zAxisFormatter(d.y)).style('display', function (d) {
        const textLength = this.getBBox().width;
        const textHeight = this.getBBox().height;
        const textTooLong = textLength > maxLength;
        const textTooWide = textHeight > maxHeight;
        if (!d.hide && (textTooLong || textTooWide)) {
          hiddenLabels = true;
        }
        return d.hide || textTooLong || textTooWide ? 'none' : 'initial';
      }).style('dominant-baseline', 'central').style('text-anchor', 'middle').style('fill', labelColor).attr('x', function (d) {
        const center = x(d) + squareWidth / 2;
        return center;
      }).attr('y', function (d) {
        const center = y(d) + squareHeight / 2;
        return center;
      }).attr('transform', function (d) {
        const horizontalCenter = x(d) + squareWidth / 2;
        const verticalCenter = y(d) + squareHeight / 2;
        return `rotate(${rotate},${horizontalCenter},${verticalCenter})`;
      });
      if (hiddenLabels) {
        this.baseChart.handler.alerts.show('Some labels were hidden due to size constraints');
      }
    }
    if (isTooltip) {
      squares.call(tooltip.render());
    }
    return squares.selectAll('rect');
  }

  /**
   * Renders d3 visualization
   *
   * @method draw
   * @returns {Function} Creates the line chart
   */
  draw() {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const svg = self.chartEl.append('g');
        svg.data([self.chartData]);
        const squares = self.addSquares(svg, self.chartData);
        self.addCircleEvents(squares);
        self.events.emit('rendered', {
          chart: self.chartData
        });
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/line_chart.js":
/*!*****************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/line_chart.js ***!
  \*****************************************************************/
/*! exports provided: LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_point_series */ "./public/vislib/visualizations/point_series/_point_series.js");
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




const defaults = {
  mode: 'normal',
  showCircles: true,
  radiusRatio: 9,
  showLines: true,
  interpolate: 'linear',
  lineWidth: 2,
  color: undefined,
  fillColor: undefined
};
/**
 * Line Chart Visualization
 *
 * @class LineChart
 * @constructor
 * @extends Chart
 * @param handler {Object} Reference to the Handler Class Constructor
 * @param el {HTMLElement} HTML element to which the chart will be appended
 * @param chartData {Object} Elasticsearch query results for this specific chart
 */
class LineChart extends _point_series__WEBPACK_IMPORTED_MODULE_2__["PointSeries"] {
  constructor(handler, chartEl, chartData, seriesConfigArgs, deps) {
    super(handler, chartEl, chartData, seriesConfigArgs, deps);
    this.seriesConfig = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.defaults(seriesConfigArgs || {}, defaults);
  }
  addCircles(svg, data) {
    const self = this;
    const showCircles = this.seriesConfig.showCircles;
    const color = this.handler.data.getColorFunc();
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const ordered = this.handler.data.get('ordered');
    const tooltip = this.baseChart.tooltip;
    const isTooltip = this.handler.visConfig.get('tooltip.show');
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const lineWidth = this.seriesConfig.lineWidth;
    const radii = this.baseChart.radii;
    const radiusStep = (radii.max - radii.min || radii.max * 100) / Math.pow(this.seriesConfig.radiusRatio, 2);
    const layer = svg.append('g').attr('class', 'points line').attr('clip-path', 'url(#' + this.baseChart.clipPathId + ')');
    const circles = layer.selectAll('circle').data(function appendData() {
      return data.values.filter(function (d) {
        return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(d.y) && (d.y || !d.y0);
      });
    });
    circles.exit().remove();
    function cx(d) {
      if (ordered && ordered.date) {
        return xScale(d.x);
      }
      return xScale(d.x) + xScale.rangeBand() / 2;
    }
    function cy(d) {
      const y0 = d.y0 || 0;
      const y = d.y || 0;
      return yScale(y0 + y);
    }
    function cColor() {
      return color(data.label);
    }
    function colorCircle() {
      const parent = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).node().parentNode;
      const lengthOfParent = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(parent).data()[0].length;
      const isVisible = lengthOfParent === 1;

      // If only 1 point exists, show circle
      if (!showCircles && !isVisible) return 'none';
      return cColor();
    }
    function getCircleRadiusFn(modifier) {
      return function getCircleRadius(d) {
        const width = self.baseChart.chartConfig.width;
        const height = self.baseChart.chartConfig.height;
        const circleRadius = (d.z - radii.min) / radiusStep;
        const baseMagicNumber = 2;
        const base = circleRadius ? Math.sqrt(circleRadius + baseMagicNumber) + lineWidth : lineWidth;
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.min([base, width, height]) + (modifier || 0);
      };
    }
    circles.enter().append('circle').attr('r', getCircleRadiusFn()).attr('fill-opacity', this.seriesConfig.drawLinesBetweenPoints ? 1 : 0.7).attr('cx', isHorizontal ? cx : cy).attr('cy', isHorizontal ? cy : cx).attr('class', 'circle-decoration').attr('data-label', data.label).attr('fill', colorCircle);
    circles.enter().append('circle').attr('r', getCircleRadiusFn(10)).attr('cx', isHorizontal ? cx : cy).attr('cy', isHorizontal ? cy : cx).attr('fill', 'transparent').attr('class', 'circle').attr('data-label', data.label).attr('stroke', cColor).attr('stroke-width', 0);
    if (isTooltip) {
      circles.call(tooltip.render());
    }
    return circles;
  }

  /**
   * Adds path to SVG
   *
   * @method addLines
   * @param svg {HTMLElement} SVG to which path are appended
   * @param data {Array} Array of object data points
   * @returns {D3.UpdateSelection} SVG with paths added
   */
  addLine(svg, data) {
    const xScale = this.getCategoryAxis().getScale();
    const yScale = this.getValueAxis().getScale();
    const color = this.handler.data.getColorFunc();
    const ordered = this.handler.data.get('ordered');
    const lineWidth = this.seriesConfig.lineWidth;
    const interpolate = this.seriesConfig.interpolate;
    const isHorizontal = this.getCategoryAxis().axisConfig.isHorizontal();
    const line = svg.append('g').attr('class', 'pathgroup lines').attr('clip-path', 'url(#' + this.baseChart.clipPathId + ')');
    function cx(d) {
      if (ordered && ordered.date) {
        return xScale(d.x);
      }
      return xScale(d.x) + xScale.rangeBand() / 2;
    }
    function cy(d) {
      const y = d.y || 0;
      const y0 = d.y0 || 0;
      return yScale(y0 + y);
    }
    line.append('path').attr('data-label', data.label).attr('d', () => {
      const d3Line = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.line().defined(function (d) {
        return !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(d.y);
      }).interpolate(interpolate).x(isHorizontal ? cx : cy).y(isHorizontal ? cy : cx);
      return d3Line(data.values);
    }).attr('fill', 'none').attr('stroke', () => {
      return color(data.label);
    }).attr('stroke-width', lineWidth);
    return line;
  }

  /**
   * Renders d3 visualization
   *
   * @method draw
   * @returns {Function} Creates the line chart
   */
  draw() {
    const self = this;
    return function (selection) {
      selection.each(function () {
        const svg = self.chartEl.append('g');
        svg.data([self.chartData]);
        if (self.seriesConfig.drawLinesBetweenPoints) {
          self.addLine(svg, self.chartData);
        }
        const circles = self.addCircles(svg, self.chartData);
        self.addCircleEvents(circles);
        if (self.thresholdLineOptions.show) {
          self.addThresholdLine(self.chartEl);
        }
        self.events.emit('rendered', {
          chart: self.chartData
        });
        return svg;
      });
    };
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/point_series/series_types.js":
/*!*******************************************************************!*\
  !*** ./public/vislib/visualizations/point_series/series_types.js ***!
  \*******************************************************************/
/*! exports provided: seriesTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seriesTypes", function() { return seriesTypes; });
/* harmony import */ var _column_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column_chart */ "./public/vislib/visualizations/point_series/column_chart.js");
/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line_chart */ "./public/vislib/visualizations/point_series/line_chart.js");
/* harmony import */ var _area_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area_chart */ "./public/vislib/visualizations/point_series/area_chart.js");
/* harmony import */ var _heatmap_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heatmap_chart */ "./public/vislib/visualizations/point_series/heatmap_chart.js");
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





const seriesTypes = {
  histogram: _column_chart__WEBPACK_IMPORTED_MODULE_0__["ColumnChart"],
  line: _line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChart"],
  area: _area_chart__WEBPACK_IMPORTED_MODULE_2__["AreaChart"],
  heatmap: _heatmap_chart__WEBPACK_IMPORTED_MODULE_3__["HeatmapChart"]
};

/***/ }),

/***/ "./public/vislib/visualizations/time_marker.js":
/*!*****************************************************!*\
  !*** ./public/vislib/visualizations/time_marker.js ***!
  \*****************************************************/
/*! exports provided: TimeMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMarker", function() { return TimeMarker; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_1__);
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



class TimeMarker {
  constructor(times, xScale, height) {
    const currentTimeArr = [{
      time: new Date().getTime(),
      class: 'time-marker',
      color: '#c80000',
      opacity: 0.3,
      width: 2
    }];
    this.xScale = xScale;
    this.height = height;
    this.times = times.length ? times.map(function (d) {
      return {
        time: _elastic_datemath__WEBPACK_IMPORTED_MODULE_1___default.a.parse(d.time),
        class: d.class || 'time-marker',
        color: d.color || '#c80000',
        opacity: d.opacity || 0.3,
        width: d.width || 2
      };
    }) : currentTimeArr;
  }
  _isTimeBasedChart(selection) {
    const data = selection.data();
    return data.every(function (datum) {
      return datum.ordered && datum.ordered.date;
    });
  }
  render(selection) {
    const self = this;

    // return if not time based chart
    if (!self._isTimeBasedChart(selection)) return;
    selection.each(function () {
      d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).selectAll('time-marker').data(self.times).enter().append('line').attr('class', function (d) {
        return d.class;
      }).attr('pointer-events', 'none').attr('stroke', function (d) {
        return d.color;
      }).attr('stroke-width', function (d) {
        return d.width;
      }).attr('stroke-opacity', function (d) {
        return d.opacity;
      }).attr('x1', function (d) {
        return self.xScale(d.time);
      }).attr('x2', function (d) {
        return self.xScale(d.time);
      }).attr('y1', self.height).attr('y2', self.xScale.range()[0]);
    });
  }
}

/***/ }),

/***/ "./public/vislib/visualizations/vis_types.js":
/*!***************************************************!*\
  !*** ./public/vislib/visualizations/vis_types.js ***!
  \***************************************************/
/*! exports provided: visTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visTypes", function() { return visTypes; });
/* harmony import */ var _point_series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point_series */ "./public/vislib/visualizations/point_series.js");
/* harmony import */ var _pie_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie_chart */ "./public/vislib/visualizations/pie_chart.js");
/* harmony import */ var _gauge_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gauge_chart */ "./public/vislib/visualizations/gauge_chart.js");
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




const visTypes = {
  pie: _pie_chart__WEBPACK_IMPORTED_MODULE_1__["PieChart"],
  point_series: _point_series__WEBPACK_IMPORTED_MODULE_0__["PointSeries"],
  gauge: _gauge_chart__WEBPACK_IMPORTED_MODULE_2__["GaugeChart"],
  goal: _gauge_chart__WEBPACK_IMPORTED_MODULE_2__["GaugeChart"],
  metric: _gauge_chart__WEBPACK_IMPORTED_MODULE_2__["GaugeChart"]
};

/***/ })

}]);
//# sourceMappingURL=visTypeVislib.chunk.1.js.map