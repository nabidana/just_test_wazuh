(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[9],{

/***/ "./public/ui/apply_filters/apply_filter_popover_content.tsx":
/*!******************************************************************!*\
  !*** ./public/ui/apply_filters/apply_filter_popover_content.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApplyFiltersPopoverContent; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter_bar */ "./public/ui/filter_bar/index.tsx");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../query */ "./public/query/index.tsx");
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







// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
class ApplyFiltersPopoverContent extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "isFilterSelected", i => {
      return this.state.isFilterSelected[i];
    });
    _defineProperty(this, "toggleFilterSelected", i => {
      const isFilterSelected = [...this.state.isFilterSelected];
      isFilterSelected[i] = !isFilterSelected[i];
      this.setState({
        isFilterSelected
      });
    });
    _defineProperty(this, "onSubmit", () => {
      const selectedFilters = this.props.filters.filter((filter, i) => this.state.isFilterSelected[i]);
      this.props.onSubmit(selectedFilters);
    });
    this.state = {
      isFilterSelected: props.filters.map(() => true)
    };
  }
  getLabel(filter) {
    const valueLabel = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getDisplayValueFromFilter"])(filter, this.props.indexPatterns);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_filter_bar__WEBPACK_IMPORTED_MODULE_4__["FilterLabel"], {
      filter: filter,
      valueLabel: valueLabel
    });
  }
  render() {
    if (this.props.filters.length === 0) {
      return '';
    }
    const mappedFilters = Object(_query__WEBPACK_IMPORTED_MODULE_5__["mapAndFlattenFilters"])(this.props.filters);
    const form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, mappedFilters.map((filter, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedSwitch"], {
      label: this.getLabel(filter),
      checked: this.isFilterSelected(i),
      onChange: () => this.toggleFilterSelected(i)
    }))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "data.filter.applyFilters.popupHeader",
      defaultMessage: "\uC801\uC6A9\uD560 \uD544\uD130\uB97C \uC120\uD0DD\uD558\uC138\uC694"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalBody"], null, form), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
      onClick: this.props.onCancel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "data.filter.applyFiltersPopup.cancelButtonLabel",
      defaultMessage: "\uCDE8\uC18C"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButton"], {
      onClick: this.onSubmit,
      "data-test-subj": "applyFiltersPopoverButton",
      fill: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "data.filter.applyFiltersPopup.saveButtonLabel",
      defaultMessage: "\uC801\uC6A9"
    }))));
  }
}
_defineProperty(ApplyFiltersPopoverContent, "defaultProps", {
  filters: []
});

/***/ })

}]);
//# sourceMappingURL=data.chunk.9.js.map