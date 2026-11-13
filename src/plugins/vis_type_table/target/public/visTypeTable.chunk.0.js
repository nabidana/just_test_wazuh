(window["visTypeTable_bundle_jsonpfunction"] = window["visTypeTable_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/components/table_vis_options.tsx":
/*!*************************************************!*\
  !*** ./public/components/table_vis_options.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableOptions; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./public/components/utils.ts");
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









const {
  tabifyGetColumns
} = _data_public__WEBPACK_IMPORTED_MODULE_5__["search"];
function TableOptions({
  aggs,
  stateParams,
  setValidity,
  setValue
}) {
  const percentageColumns = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => [{
    value: '',
    text: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.defaultPercentageCol', {
      defaultMessage: 'Don’t show'
    })
  }, ...tabifyGetColumns(aggs.getResponseAggs(), true).filter(col => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(col.aggConfig.toSerializedFieldFormat(), 'id') === 'number').map(({
    name
  }) => ({
    value: name,
    text: name
  }))], [aggs]);
  const isPerPageValid = stateParams.perPage === '' || stateParams.perPage > 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setValidity(isPerPageValid);
  }, [isPerPageValid, setValidity]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!percentageColumns.find(({
      value
    }) => value === stateParams.percentageCol) && percentageColumns[0] && percentageColumns[0].value !== stateParams.percentageCol) {
      setValue('percentageCol', percentageColumns[0].value);
    }
  }, [percentageColumns, stateParams.percentageCol, setValidity, setValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPanel"], {
    paddingSize: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["NumberInputOption"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "visTypeTable.params.perPageLabel",
      defaultMessage: "Max rows per page"
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIconTip"], {
      content: "Leaving this field empty means it will use number of buckets from the response.",
      position: "right"
    })),
    isInvalid: !isPerPageValid,
    min: 1,
    paramName: "perPage",
    value: stateParams.perPage,
    setValue: setValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.showMetricsLabel', {
      defaultMessage: 'Show metrics for every bucket/level'
    }),
    paramName: "showMetricsAtAllLevels",
    value: stateParams.showMetricsAtAllLevels,
    setValue: setValue,
    "data-test-subj": "showMetricsAtAllLevels"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.showPartialRowsLabel', {
      defaultMessage: 'Show partial rows'
    }),
    tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.showPartialRowsTip', {
      defaultMessage: 'Show rows that have partial data. This will still calculate metrics for every bucket/level, even if they are not displayed.'
    }),
    paramName: "showPartialRows",
    value: stateParams.showPartialRows,
    setValue: setValue,
    "data-test-subj": "showPartialRows"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SwitchOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.showTotalLabel', {
      defaultMessage: 'Show total'
    }),
    paramName: "showTotal",
    value: stateParams.showTotal,
    setValue: setValue,
    "data-test-subj": "showTotal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.totalFunctionLabel', {
      defaultMessage: 'Total function'
    }),
    disabled: !stateParams.showTotal,
    options: _utils__WEBPACK_IMPORTED_MODULE_7__["totalAggregations"],
    paramName: "totalFunc",
    value: stateParams.totalFunc,
    setValue: setValue,
    "data-test-subj": "totalFunctionOptions"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_charts_public__WEBPACK_IMPORTED_MODULE_6__["SelectOption"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('visTypeTable.params.PercentageColLabel', {
      defaultMessage: 'Percentage column'
    }),
    options: percentageColumns,
    paramName: "percentageCol",
    value: stateParams.percentageCol,
    setValue: setValue,
    "data-test-subj": "datatableVisualizationPercentageCol"
  }));
}
// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export


/***/ }),

/***/ "./public/components/utils.ts":
/*!************************************!*\
  !*** ./public/components/utils.ts ***!
  \************************************/
/*! exports provided: totalAggregations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalAggregations", function() { return totalAggregations; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./public/types.ts");
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



const totalAggregations = [{
  value: _types__WEBPACK_IMPORTED_MODULE_1__["AggTypes"].SUM,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTable.totalAggregations.sumText', {
    defaultMessage: 'Sum'
  })
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_1__["AggTypes"].AVG,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTable.totalAggregations.averageText', {
    defaultMessage: 'Average'
  })
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_1__["AggTypes"].MIN,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTable.totalAggregations.minText', {
    defaultMessage: 'Min'
  })
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_1__["AggTypes"].MAX,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTable.totalAggregations.maxText', {
    defaultMessage: 'Max'
  })
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_1__["AggTypes"].COUNT,
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeTable.totalAggregations.countText', {
    defaultMessage: 'Count'
  })
}];


/***/ })

}]);
//# sourceMappingURL=visTypeTable.chunk.0.js.map