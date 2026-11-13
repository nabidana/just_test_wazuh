(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[7],{

/***/ "./public/ui/filter_bar/filter_editor/lib/filter_label.tsx":
/*!*****************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/lib/filter_label.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _filter_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter_operators */ "./public/ui/filter_bar/filter_editor/lib/filter_operators.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
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








// @internal

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
function FilterLabel({
  filter,
  valueLabel,
  filterLabelStatus
}) {
  const prefixText = filter.meta.negate ? ` ${_osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.filter.filterBar.negatedFilterPrefix', {
    defaultMessage: 'NOT '
  })}` : '';
  const prefix = filter.meta.negate && !filter.meta.disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
    color: "danger"
  }, prefixText) : prefixText;
  const getValue = text => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "globalFilterLabel__value",
      "data-test-subj": "globalFilterLabelValue"
    }, text);
  };

  // GS 인증용: 필터 칩에 표시되는 필드명에서 "wazuh." 접두사 제거 (표시만 변경, 실제 필터 값/필드는 그대로 유지)
  const displayKey = key => key ? key.replace(/^wazuh\./, '') : key;
  if (filter.meta.alias !== null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, filter.meta.alias, filterLabelStatus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ": ", getValue(valueLabel)));
  }
  switch (filter.meta.type) {
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].EXISTS:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, displayKey(filter.meta.key), ": ", getValue(`${_filter_operators__WEBPACK_IMPORTED_MODULE_4__["existsOperator"].message}`));
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].GEO_BOUNDING_BOX:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, displayKey(filter.meta.key), ": ", getValue(valueLabel));
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].GEO_POLYGON:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, displayKey(filter.meta.key), ": ", getValue(valueLabel));
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].PHRASES:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, displayKey(filter.meta.key), ": ", getValue(`${_filter_operators__WEBPACK_IMPORTED_MODULE_4__["isOneOfOperator"].message} ${valueLabel}`));
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].QUERY_STRING:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, getValue(`${valueLabel}`));
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].PHRASE:
    case _common__WEBPACK_IMPORTED_MODULE_5__["FILTERS"].RANGE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, displayKey(filter.meta.key), ": ", getValue(valueLabel));
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, prefix, getValue(`${Object(_osd_std__WEBPACK_IMPORTED_MODULE_3__["stringify"])(filter.query) || filter.meta.value}`));
  }
}

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/lib/filter_operators.ts":
/*!********************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/lib/filter_operators.ts ***!
  \********************************************************************/
/*! exports provided: isOperator, isNotOperator, isOneOfOperator, isNotOneOfOperator, isBetweenOperator, isNotBetweenOperator, existsOperator, doesNotExistOperator, FILTER_OPERATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperator", function() { return isOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotOperator", function() { return isNotOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneOfOperator", function() { return isOneOfOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotOneOfOperator", function() { return isNotOneOfOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetweenOperator", function() { return isBetweenOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotBetweenOperator", function() { return isNotBetweenOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existsOperator", function() { return existsOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesNotExistOperator", function() { return doesNotExistOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_OPERATORS", function() { return FILTER_OPERATORS; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/opensearch_query/filters */ "./common/opensearch_query/filters/index.ts");
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



const isOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isOperatorOptionLabel', {
    defaultMessage: '같음'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].PHRASE,
  negate: false
};
const isNotOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isNotOperatorOptionLabel', {
    defaultMessage: '같지 않음'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].PHRASE,
  negate: true
};
const isOneOfOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isOneOfOperatorOptionLabel', {
    defaultMessage: '다음 중 하나'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].PHRASES,
  negate: false,
  fieldTypes: ['string', 'number', 'date', 'ip', 'geo_point', 'geo_shape']
};
const isNotOneOfOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isNotOneOfOperatorOptionLabel', {
    defaultMessage: '다음 중 하나가 아님'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].PHRASES,
  negate: true,
  fieldTypes: ['string', 'number', 'date', 'ip', 'geo_point', 'geo_shape']
};
const isBetweenOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isBetweenOperatorOptionLabel', {
    defaultMessage: '범위 내'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].RANGE,
  negate: false,
  fieldTypes: ['number', 'date', 'ip']
};
const isNotBetweenOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.isNotBetweenOperatorOptionLabel', {
    defaultMessage: '범위 밖'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].RANGE,
  negate: true,
  fieldTypes: ['number', 'date', 'ip']
};
const existsOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.existsOperatorOptionLabel', {
    defaultMessage: '존재함'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].EXISTS,
  negate: false
};
const doesNotExistOperator = {
  message: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterEditor.doesNotExistOperatorOptionLabel', {
    defaultMessage: '존재하지 않음'
  }),
  type: _common_opensearch_query_filters__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].EXISTS,
  negate: true
};
const FILTER_OPERATORS = [isOperator, isNotOperator, isOneOfOperator, isNotOneOfOperator, isBetweenOperator, isNotBetweenOperator, existsOperator, doesNotExistOperator];

/***/ })

}]);
//# sourceMappingURL=data.chunk.7.js.map