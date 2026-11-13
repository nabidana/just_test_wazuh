(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[3],{

/***/ "./public/ui/filter_bar/filter_bar.tsx":
/*!*********************************************!*\
  !*** ./public/ui/filter_bar/filter_bar.tsx ***!
  \*********************************************/
/*! exports provided: FilterBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBar", function() { return FilterBar; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _filter_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter_editor */ "./public/ui/filter_bar/filter_editor/index.tsx");
/* harmony import */ var _filter_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter_item */ "./public/ui/filter_bar/filter_item.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
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












const maxFilterWidth = 600;
function FilterBarUI(props) {
  const [isAddFilterPopoverOpen, setIsAddFilterPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const opensearchDashboards = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__["useOpenSearchDashboards"])();
  const [filterWidth, setFilterWidth] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(maxFilterWidth);
  const uiSettings = opensearchDashboards.services.uiSettings;
  const useNewHeader = Boolean(uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["UI_SETTINGS"].NEW_HOME_PAGE));
  if (!uiSettings) return null;
  function onFiltersUpdated(filters) {
    if (props.onFiltersUpdated) {
      props.onFiltersUpdated(filters);
    }
  }
  function renderItems() {
    return props.filters.map((filter, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      key: i,
      grow: false,
      className: "globalFilterBar__flexItem",
      "data-test-subj": "globalFilterBar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_filter_item__WEBPACK_IMPORTED_MODULE_8__["FilterItem"], {
      id: `${i}`,
      intl: props.intl,
      filter: filter,
      onUpdate: newFilter => onUpdate(i, newFilter),
      onRemove: () => onRemove(i),
      indexPatterns: props.indexPatterns,
      uiSettings: uiSettings
    })));
  }
  function onResize(dimensions) {
    setFilterWidth(dimensions.width);
  }
  function renderAddFilter() {
    const isPinned = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["UI_SETTINGS"].FILTERS_PINNED_BY_DEFAULT);
    const [indexPattern] = props.indexPatterns;
    const index = indexPattern && indexPattern.id;
    const newFilter = Object(_common__WEBPACK_IMPORTED_MODULE_10__["buildEmptyFilter"])(isPinned, index);
    const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
      size: "s",
      onClick: () => setIsAddFilterPopoverOpen(true),
      "data-test-subj": "addFilter",
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.filter.filterBar.addFilterButtonLabel', {
        defaultMessage: '필터 추가'
      }),
      className: "globalFilterBar__addButton",
      iconType: "plusInCircle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "data.filter.filterBar.addFilterButtonLabel",
      defaultMessage: "\uD544\uD130 \uCD94\uAC00"
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
      id: "addFilterPopover",
      button: button,
      isOpen: isAddFilterPopoverOpen,
      closePopover: () => setIsAddFilterPopoverOpen(false),
      anchorPosition: "downLeft",
      panelPaddingSize: "none",
      ownFocus: true,
      initialFocus: ".globalFilterEditor__fieldInput input",
      repositionOnScroll: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiResizeObserver"], {
      onResize: onResize
    }, resizeRef => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        width: maxFilterWidth,
        maxWidth: '100%'
      },
      ref: resizeRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      style: {
        width: filterWidth
      },
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_filter_editor__WEBPACK_IMPORTED_MODULE_7__["FilterEditor"], {
      filter: newFilter,
      indexPatterns: props.indexPatterns,
      onSubmit: onAdd,
      onCancel: () => setIsAddFilterPopoverOpen(false),
      key: Object(_osd_std__WEBPACK_IMPORTED_MODULE_6__["stringify"])(newFilter)
    }))))));
  }
  function onAdd(filter) {
    setIsAddFilterPopoverOpen(false);
    const filters = [...props.filters, filter];
    onFiltersUpdated(filters);
  }
  function onRemove(i) {
    const filters = [...props.filters];
    filters.splice(i, 1);
    onFiltersUpdated(filters);
  }
  function onUpdate(i, filter) {
    const filters = [...props.filters];
    filters[i] = filter;
    onFiltersUpdated(filters);
  }
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('globalFilterBar', props.className);
  const filterBarPrefixText = _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.search.filterBar.filterBarPrefixText', {
    defaultMessage: 'Filters'
  });
  const filterGroupClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('globalFilterGroup', {
    'globalFilterGroup--compressed': useNewHeader && props.isFilterBarPortable
  });
  const filterBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: filterGroupClassName,
    gutterSize: "none",
    alignItems: "flexStart",
    responsive: false,
    "data-test-subj": "globalFilterGroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "globalFilterGroup__branch",
    grow: false
  }, useNewHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s",
    className: "globalFilterGroup__filterPrefix",
    "data-test-subj": "globalFilterGroupFilterPrefix"
  }, filterBarPrefixText, ":") :
  // GS 인증용: 검색창 하단 "필터" 아이콘(드롭다운 메뉴) 삭제
  null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    className: "globalFilterGroup__filterFlexItem",
    "data-test-subj": "globalFilterGroupFilterFlexItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: classes,
    wrap: true,
    responsive: false,
    gutterSize: "xs",
    alignItems: "center"
  }, renderItems(), renderAddFilter())));
  return useNewHeader && props.isFilterBarPortable ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["createPortal"])(filterBar, document.getElementById('applicationHeaderFilterBar')) : filterBar;
}
const FilterBar = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(FilterBarUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/generic_combo_box.tsx":
/*!******************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/generic_combo_box.tsx ***!
  \******************************************************************/
/*! exports provided: GenericComboBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericComboBox", function() { return GenericComboBox; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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



/**
 * A generic combo box. Instead of accepting a set of options that contain a `label`, it accepts
 * any type of object. It also accepts a `getLabel` function that each object will be sent through
 * to get the label to be passed to the combo box. The `onChange` will trigger with the actual
 * selected objects, rather than an option object.
 */
function GenericComboBox(props) {
  const {
    options,
    selectedOptions,
    getLabel,
    onChange,
    ...otherProps
  } = props;
  const labels = options.map(getLabel);
  const euiOptions = labels.map(label => ({
    label
  }));
  const selectedEuiOptions = selectedOptions.filter(option => {
    return options.indexOf(option) !== -1;
  }).map(option => {
    return euiOptions[options.indexOf(option)];
  });
  const onComboBoxChange = newOptions => {
    const newValues = newOptions.map(({
      label
    }) => {
      return options[labels.indexOf(label)];
    });
    onChange(newValues);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedComboBox"], _extends({
    options: euiOptions,
    selectedOptions: selectedEuiOptions,
    onChange: onComboBoxChange,
    sortMatchesBy: "startsWith"
  }, otherProps));
}

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/index.tsx":
/*!******************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/index.tsx ***!
  \******************************************************/
/*! exports provided: FilterEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEditor", function() { return FilterEditor; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _generic_combo_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generic_combo_box */ "./public/ui/filter_bar/filter_editor/generic_combo_box.tsx");
/* harmony import */ var _lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/filter_editor_utils */ "./public/ui/filter_bar/filter_editor/lib/filter_editor_utils.ts");
/* harmony import */ var _phrase_value_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phrase_value_input */ "./public/ui/filter_bar/filter_editor/phrase_value_input.tsx");
/* harmony import */ var _phrases_values_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phrases_values_input */ "./public/ui/filter_bar/filter_editor/phrases_values_input.tsx");
/* harmony import */ var _range_value_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./range_value_input */ "./public/ui/filter_bar/filter_editor/range_value_input.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
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













class FilterEditorUI extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "toggleCustomEditor", () => {
      const isCustomEditorOpen = !this.state.isCustomEditorOpen;
      this.setState({
        isCustomEditorOpen
      });
    });
    _defineProperty(this, "onIndexPatternChange", ([selectedIndexPattern]) => {
      const selectedField = undefined;
      const selectedOperator = undefined;
      const params = undefined;
      this.setState({
        selectedIndexPattern,
        selectedField,
        selectedOperator,
        params
      });
    });
    _defineProperty(this, "onFieldChange", ([selectedField]) => {
      const selectedOperator = undefined;
      const params = undefined;
      this.setState({
        selectedField,
        selectedOperator,
        params
      });
    });
    _defineProperty(this, "onOperatorChange", ([selectedOperator]) => {
      // Only reset params when the operator type changes
      const params = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.state.selectedOperator, 'type') === Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(selectedOperator, 'type') ? this.state.params : undefined;
      this.setState({
        selectedOperator,
        params
      });
    });
    _defineProperty(this, "onCustomLabelSwitchChange", event => {
      const useCustomLabel = event.target.checked;
      const customLabel = event.target.checked ? '' : null;
      this.setState({
        useCustomLabel,
        customLabel
      });
    });
    _defineProperty(this, "onCustomLabelChange", event => {
      const customLabel = event.target.value;
      this.setState({
        customLabel
      });
    });
    _defineProperty(this, "onParamsChange", params => {
      this.setState({
        params
      });
    });
    _defineProperty(this, "onQueryDslChange", queryDsl => {
      this.setState({
        queryDsl
      });
    });
    _defineProperty(this, "onSubmit", () => {
      const {
        selectedIndexPattern: indexPattern,
        selectedField: field,
        selectedOperator: operator,
        params,
        useCustomLabel,
        customLabel,
        isCustomEditorOpen,
        queryDsl
      } = this.state;
      const {
        $state
      } = this.props.filter;
      if (!$state || !$state.store) {
        return; // typescript validation
      }

      const alias = useCustomLabel ? customLabel : null;
      if (isCustomEditorOpen) {
        const {
          index,
          disabled,
          negate
        } = this.props.filter.meta;
        const newIndex = index || this.props.indexPatterns[0].id;
        const body = Object(_osd_std__WEBPACK_IMPORTED_MODULE_5__["parse"])(queryDsl);
        const filter = Object(_common__WEBPACK_IMPORTED_MODULE_11__["buildCustomFilter"])(newIndex, body, disabled, negate, alias, $state.store);
        this.props.onSubmit(filter);
      } else if (indexPattern && field && operator) {
        const filter = Object(_common__WEBPACK_IMPORTED_MODULE_11__["buildFilter"])(indexPattern, field, operator.type, operator.negate, this.props.filter.meta.disabled, params !== null && params !== void 0 ? params : '', alias, $state.store);
        this.props.onSubmit(filter);
      }
    });
    this.state = {
      selectedIndexPattern: this.getIndexPatternFromFilter(),
      selectedField: this.getFieldFromFilter(),
      selectedOperator: this.getSelectedOperator(),
      params: Object(_common__WEBPACK_IMPORTED_MODULE_11__["getFilterParams"])(props.filter),
      useCustomLabel: props.filter.meta.alias !== null,
      customLabel: props.filter.meta.alias,
      queryDsl: Object(_osd_std__WEBPACK_IMPORTED_MODULE_5__["stringify"])(Object(_common__WEBPACK_IMPORTED_MODULE_11__["cleanFilter"])(props.filter), null, 2),
      isCustomEditorOpen: this.isUnknownFilterType()
    };
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopoverTitle"], {
      paddingSize: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      alignItems: "baseline",
      responsive: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "data.filter.filterEditor.editFilterPopupTitle",
      defaultMessage: "\uD544\uD130 \uD3B8\uC9D1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false,
      className: "filterEditor__hiddenItem"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "globalFilterItem__editorForm",
      "data-test-subj": "globalFilterItemEditor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, this.renderIndexPatternInput(), this.state.isCustomEditorOpen ? this.renderCustomEditor() : this.renderRegularEditor(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedSwitch"], {
      id: "filterEditorCustomLabelSwitch",
      "data-test-subj": "createCustomLabel",
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.createCustomLabelSwitchLabel',
        //                defaultMessage: '사용자 지정 레이블 만들기?',
        defaultMessage: '사용자 지정 레이블 만들기'
      }),
      checked: this.state.useCustomLabel,
      onChange: this.onCustomLabelSwitchChange
    }), this.state.useCustomLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.createCustomLabelInputLabel',
        defaultMessage: '사용자 지정 레이블'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFieldText"], {
      fullWidth: true,
      value: `${this.state.customLabel}`,
      onChange: this.onCustomLabelChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      direction: "rowReverse",
      alignItems: "center",
      responsive: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButton"], {
      fill: true,
      onClick: this.onSubmit,
      isDisabled: !this.isFilterValid(),
      "data-test-subj": "saveFilter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "data.filter.filterEditor.saveButtonLabel",
      defaultMessage: "\uC800\uC7A5"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
      flush: "right",
      onClick: this.props.onCancel,
      "data-test-subj": "cancelSaveFilter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "data.filter.filterEditor.cancelButtonLabel",
      defaultMessage: "\uCDE8\uC18C"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null)))));
  }
  renderIndexPatternInput() {
    if (this.props.indexPatterns.length <= 1 && this.props.indexPatterns.find(indexPattern => indexPattern === this.getIndexPatternFromFilter())) {
      /**
       * Don't render the index pattern selector if there's just one \ zero index patterns
       * and if the index pattern the filter was LOADED with is in the indexPatterns list.
       **/

      return '';
    }
    const {
      selectedIndexPattern
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.indexPatternSelectLabel',
        defaultMessage: '인덱스 패턴'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(IndexPatternComboBox, {
      placeholder: this.props.intl.formatMessage({
        id: 'data.filter.filterBar.indexPatternSelectPlaceholder',
        defaultMessage: '인덱스 패턴 선택'
      }),
      options: this.props.indexPatterns,
      selectedOptions: selectedIndexPattern ? [selectedIndexPattern] : [],
      getLabel: indexPattern => indexPattern.title,
      onChange: this.onIndexPatternChange,
      singleSelection: {
        asPlainText: true
      },
      isClearable: false,
      "data-test-subj": "filterIndexPatternsSelect"
    }))));
  }
  renderRegularEditor() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      responsive: false,
      gutterSize: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: 2
    }, this.renderFieldInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false,
      style: {
        flexBasis: 160
      }
    }, this.renderOperatorInput())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      "data-test-subj": "filterParams"
    }, this.renderParamsEditor()));
  }
  renderFieldInput() {
    const {
      selectedIndexPattern,
      selectedField
    } = this.state;
    const fields = selectedIndexPattern ? Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__["getFilterableFields"])(selectedIndexPattern) : [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.fieldSelectLabel',
        defaultMessage: '필드'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FieldComboBox, {
      id: "fieldInput",
      fullWidth: true,
      isDisabled: !selectedIndexPattern,
      placeholder: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.fieldSelectPlaceholder',
        defaultMessage: '먼저 필드를 선택하세요'
      }),
      options: fields,
      selectedOptions: selectedField ? [selectedField] : [],
      getLabel: field => field.name,
      onChange: this.onFieldChange,
      singleSelection: {
        asPlainText: true
      },
      isClearable: false,
      className: "globalFilterEditor__fieldInput",
      "data-test-subj": "filterFieldSuggestionList"
    }));
  }
  renderOperatorInput() {
    const {
      selectedField,
      selectedOperator
    } = this.state;
    const operators = selectedField ? Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__["getOperatorOptions"])(selectedField) : [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.operatorSelectLabel',
        defaultMessage: '연산자'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(OperatorComboBox, {
      isDisabled: !selectedField,
      placeholder: selectedField ? this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.operatorSelectPlaceholderSelect',
        defaultMessage: '선택'
      }) : this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.operatorSelectPlaceholderWaiting',
        defaultMessage: '대기 중'
      }),
      options: operators,
      selectedOptions: selectedOperator ? [selectedOperator] : [],
      getLabel: ({
        message
      }) => message,
      onChange: this.onOperatorChange,
      singleSelection: {
        asPlainText: true
      },
      isClearable: false,
      "data-test-subj": "filterOperatorList"
    }));
  }
  renderCustomEditor() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterEditor.queryDslLabel', {
        defaultMessage: 'OpenSearch Query DSL'
      }),
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCodeEditor"], {
      value: this.state.queryDsl,
      onChange: this.onQueryDslChange,
      mode: "json",
      width: "100%",
      height: "250px"
    }));
  }
  renderParamsEditor() {
    const indexPattern = this.state.selectedIndexPattern;
    if (!indexPattern || !this.state.selectedOperator) {
      return '';
    }
    switch (this.state.selectedOperator.type) {
      case 'exists':
        return '';
      case 'phrase':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_phrase_value_input__WEBPACK_IMPORTED_MODULE_8__["PhraseValueInput"], {
          indexPattern: indexPattern,
          field: this.state.selectedField,
          value: this.state.params,
          onChange: this.onParamsChange,
          "data-test-subj": "phraseValueInput"
        });
      case 'phrases':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_phrases_values_input__WEBPACK_IMPORTED_MODULE_9__["PhrasesValuesInput"], {
          indexPattern: indexPattern,
          field: this.state.selectedField,
          values: this.state.params,
          onChange: this.onParamsChange
        });
      case 'range':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_range_value_input__WEBPACK_IMPORTED_MODULE_10__["RangeValueInput"], {
          field: this.state.selectedField,
          value: this.state.params,
          onChange: this.onParamsChange
        });
    }
  }
  isUnknownFilterType() {
    const {
      type
    } = this.props.filter.meta;
    return !!type && !['phrase', 'phrases', 'range', 'exists'].includes(type);
  }
  getIndexPatternFromFilter() {
    return Object(_common__WEBPACK_IMPORTED_MODULE_11__["getIndexPatternFromFilter"])(this.props.filter, this.props.indexPatterns);
  }
  getFieldFromFilter() {
    const indexPattern = this.getIndexPatternFromFilter();
    return indexPattern && Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__["getFieldFromFilter"])(this.props.filter, indexPattern);
  }
  getSelectedOperator() {
    return Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__["getOperatorFromFilter"])(this.props.filter);
  }
  isFilterValid() {
    const {
      isCustomEditorOpen,
      queryDsl,
      selectedIndexPattern: indexPattern,
      selectedField: field,
      selectedOperator: operator,
      params
    } = this.state;
    if (isCustomEditorOpen) {
      try {
        return Boolean(Object(_osd_std__WEBPACK_IMPORTED_MODULE_5__["parse"])(queryDsl));
      } catch (e) {
        return false;
      }
    }
    return Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_7__["isFilterValid"])(indexPattern, field, operator, params);
  }
}
function IndexPatternComboBox(props) {
  return Object(_generic_combo_box__WEBPACK_IMPORTED_MODULE_6__["GenericComboBox"])(props);
}
function FieldComboBox(props) {
  return Object(_generic_combo_box__WEBPACK_IMPORTED_MODULE_6__["GenericComboBox"])(props);
}
function OperatorComboBox(props) {
  return Object(_generic_combo_box__WEBPACK_IMPORTED_MODULE_6__["GenericComboBox"])(props);
}
const FilterEditor = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(FilterEditorUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/lib/filter_editor_utils.ts":
/*!***********************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/lib/filter_editor_utils.ts ***!
  \***********************************************************************/
/*! exports provided: getFieldFromFilter, getOperatorFromFilter, getFilterableFields, getOperatorOptions, validateParams, isFilterValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldFromFilter", function() { return getFieldFromFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorFromFilter", function() { return getOperatorFromFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterableFields", function() { return getFilterableFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperatorOptions", function() { return getOperatorOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateParams", function() { return validateParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilterValid", function() { return isFilterValid; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filter_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter_operators */ "./public/ui/filter_bar/filter_editor/lib/filter_operators.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common */ "./common/index.ts");
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




function getFieldFromFilter(filter, indexPattern) {
  return indexPattern.fields.find(field => field.name === filter.meta.key);
}
function getOperatorFromFilter(filter) {
  return _filter_operators__WEBPACK_IMPORTED_MODULE_1__["FILTER_OPERATORS"].find(operator => {
    return filter.meta.type === operator.type && filter.meta.negate === operator.negate;
  });
}
function getFilterableFields(indexPattern) {
  return indexPattern.fields.filter(_common__WEBPACK_IMPORTED_MODULE_2__["isFilterable"]);
}
function getOperatorOptions(field) {
  return _filter_operators__WEBPACK_IMPORTED_MODULE_1__["FILTER_OPERATORS"].filter(operator => {
    return !operator.fieldTypes || operator.fieldTypes.includes(field.type);
  });
}
function validateParams(params, type) {
  switch (type) {
    case 'date':
      const moment = typeof params === 'string' ? _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(params) : null;
      return Boolean(typeof params === 'string' && moment && moment.isValid());
    case 'ip':
      try {
        return params.includes('/') ? Boolean(new _common__WEBPACK_IMPORTED_MODULE_2__["CidrMask"](params)) : Boolean(new _common__WEBPACK_IMPORTED_MODULE_2__["Ipv4Address"](params));
      } catch (e) {
        return false;
      }
    default:
      return true;
  }
}
function isFilterValid(indexPattern, field, operator, params) {
  if (!indexPattern || !field || !operator) {
    return false;
  }
  switch (operator.type) {
    case 'phrase':
      return validateParams(params, field.type);
    case 'phrases':
      if (!Array.isArray(params) || !params.length) {
        return false;
      }
      return params.every(phrase => validateParams(phrase, field.type));
    case 'range':
      if (typeof params !== 'object') {
        return false;
      }
      return (!params.from || validateParams(params.from, field.type)) && (!params.to || validateParams(params.to, field.type));
    case 'exists':
      return true;
    default:
      throw new Error(`Unknown operator type: ${operator.type}`);
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

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/phrase_suggestor.tsx":
/*!*****************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/phrase_suggestor.tsx ***!
  \*****************************************************************/
/*! exports provided: PhraseSuggestorUI, PhraseSuggestor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseSuggestorUI", function() { return PhraseSuggestorUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseSuggestor", function() { return PhraseSuggestor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
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
 * Since both "phrase" and "phrases" filter inputs suggest values (if enabled and the field is
 * aggregatable), we pull out the common logic for requesting suggestions into this component
 * which both of them extend.
 */
class PhraseSuggestorUI extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "services", this.props.opensearchDashboards.services);
    _defineProperty(this, "abortController", void 0);
    _defineProperty(this, "state", {
      suggestions: [],
      isLoading: false
    });
    _defineProperty(this, "onSearchChange", value => {
      this.updateSuggestions(`${value}`);
    });
    _defineProperty(this, "updateSuggestions", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(async (query = '') => {
      if (this.abortController) this.abortController.abort();
      this.abortController = new AbortController();
      const {
        indexPattern,
        field
      } = this.props;
      if (!field || !this.isSuggestingValues()) {
        return;
      }
      this.setState({
        isLoading: true
      });
      const suggestions = await this.services.data.autocomplete.getValueSuggestions({
        indexPattern,
        field,
        query,
        signal: this.abortController.signal
      });
      this.setState({
        suggestions,
        isLoading: false
      });
    }, 500));
  }
  componentDidMount() {
    this.updateSuggestions();
  }
  componentWillUnmount() {
    if (this.abortController) this.abortController.abort();
  }
  isSuggestingValues() {
    const shouldSuggestValues = this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_3__["UI_SETTINGS"].FILTERS_EDITOR_SUGGEST_VALUES);
    const {
      field
    } = this.props;
    return shouldSuggestValues && field && field.aggregatable && field.type === 'string';
  }
}
const PhraseSuggestor = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_2__["withOpenSearchDashboards"])(PhraseSuggestorUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/phrase_value_input.tsx":
/*!*******************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/phrase_value_input.tsx ***!
  \*******************************************************************/
/*! exports provided: PhraseValueInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseValueInput", function() { return PhraseValueInput; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generic_combo_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic_combo_box */ "./public/ui/filter_bar/filter_editor/generic_combo_box.tsx");
/* harmony import */ var _phrase_suggestor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phrase_suggestor */ "./public/ui/filter_bar/filter_editor/phrase_suggestor.tsx");
/* harmony import */ var _value_input_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./value_input_type */ "./public/ui/filter_bar/filter_editor/value_input_type.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
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









class PhraseValueInputUI extends _phrase_suggestor__WEBPACK_IMPORTED_MODULE_5__["PhraseSuggestorUI"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.valueInputLabel',
        defaultMessage: '값'
      })
    }, this.isSuggestingValues() ? this.renderWithSuggestions() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_value_input_type__WEBPACK_IMPORTED_MODULE_6__["ValueInputType"], {
      fullWidth: true,
      placeholder: this.props.intl.formatMessage({
        id: 'data.filter.filterEditor.valueInputPlaceholder',
        defaultMessage: '값 입력'
      }),
      value: this.props.value,
      onChange: this.props.onChange,
      type: this.props.field ? this.props.field.type : 'string'
    }));
  }
  renderWithSuggestions() {
    const {
      suggestions
    } = this.state;
    const {
      value,
      intl,
      onChange
    } = this.props;
    // there are cases when the value is a number, this would cause an exception
    const valueAsStr = String(value);
    const options = value ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])([valueAsStr, ...suggestions]) : suggestions;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StringComboBox, {
      placeholder: intl.formatMessage({
        id: 'data.filter.filterEditor.valueSelectPlaceholder',
        defaultMessage: '값 선택'
      }),
      fullWidth: true,
      options: options,
      getLabel: option => option,
      selectedOptions: value ? [valueAsStr] : [],
      onChange: ([newValue = '']) => onChange(newValue),
      onSearchChange: this.onSearchChange,
      singleSelection: {
        asPlainText: true
      },
      onCreateOption: onChange,
      isClearable: false,
      "data-test-subj": "filterParamsComboBox phraseParamsComboxBox"
    });
  }
}
function StringComboBox(props) {
  return Object(_generic_combo_box__WEBPACK_IMPORTED_MODULE_4__["GenericComboBox"])(props);
}
const PhraseValueInput = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["withOpenSearchDashboards"])(PhraseValueInputUI));

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/phrases_values_input.tsx":
/*!*********************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/phrases_values_input.tsx ***!
  \*********************************************************************/
/*! exports provided: PhrasesValuesInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhrasesValuesInput", function() { return PhrasesValuesInput; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generic_combo_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic_combo_box */ "./public/ui/filter_bar/filter_editor/generic_combo_box.tsx");
/* harmony import */ var _phrase_suggestor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phrase_suggestor */ "./public/ui/filter_bar/filter_editor/phrase_suggestor.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__);
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








class PhrasesValuesInputUI extends _phrase_suggestor__WEBPACK_IMPORTED_MODULE_5__["PhraseSuggestorUI"] {
  render() {
    const {
      suggestions
    } = this.state;
    const {
      values,
      intl,
      onChange
    } = this.props;
    const options = values ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])([...values, ...suggestions]) : suggestions;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: intl.formatMessage({
        id: 'data.filter.filterEditor.valuesSelectLabel',
        defaultMessage: '값'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StringComboBox, {
      placeholder: intl.formatMessage({
        id: 'data.filter.filterEditor.valuesSelectPlaceholder',
        defaultMessage: '값 선택'
      }),
      fullWidth: true,
      options: options,
      getLabel: option => option,
      selectedOptions: values || [],
      onSearchChange: this.onSearchChange,
      onCreateOption: option => onChange([...(values || []), option]),
      onChange: onChange,
      isClearable: false,
      "data-test-subj": "filterParamsComboBox phrasesParamsComboxBox",
      delimiter: ","
    }));
  }
}
function StringComboBox(props) {
  return Object(_generic_combo_box__WEBPACK_IMPORTED_MODULE_4__["GenericComboBox"])(props);
}
const PhrasesValuesInput = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__["withOpenSearchDashboards"])(PhrasesValuesInputUI));

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/range_value_input.tsx":
/*!******************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/range_value_input.tsx ***!
  \******************************************************************/
/*! exports provided: RangeValueInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueInput", function() { return RangeValueInput; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _value_input_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./value_input_type */ "./public/ui/filter_bar/filter_editor/value_input_type.tsx");
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








function RangeValueInputUI(props) {
  const opensearchDashboards = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])();
  const type = props.field ? props.field.type : 'string';
  const tzConfig = opensearchDashboards.services.uiSettings.get('dateFormat:tz');
  const formatDateChange = value => {
    if (typeof value !== 'string' && typeof value !== 'number') return value;
    const momentParsedValue = moment__WEBPACK_IMPORTED_MODULE_0___default()(value).tz(tzConfig);
    if (momentParsedValue.isValid()) return momentParsedValue === null || momentParsedValue === void 0 ? void 0 : momentParsedValue.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    return value;
  };
  const onFromChange = value => {
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new Error('Range params must be a string or number');
    }
    props.onChange({
      from: value,
      to: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(props, 'value.to')
    });
  };
  const onToChange = value => {
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new Error('Range params must be a string or number');
    }
    props.onChange({
      from: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(props, 'value.from'),
      to: value
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormControlLayoutDelimited"], {
    fullWidth: true,
    "aria-label": props.intl.formatMessage({
      id: 'data.filter.filterEditor.rangeInputLabel',
      defaultMessage: '범위'
    }),
    startControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_value_input_type__WEBPACK_IMPORTED_MODULE_6__["ValueInputType"], {
      controlOnly: true,
      type: type,
      value: props.value ? props.value.from : undefined,
      onChange: onFromChange,
      onBlur: value => {
        onFromChange(formatDateChange(value));
      },
      placeholder: props.intl.formatMessage({
        id: 'data.filter.filterEditor.rangeStartInputPlaceholder',
        defaultMessage: '범위 시작'
      })
    }),
    endControl: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_value_input_type__WEBPACK_IMPORTED_MODULE_6__["ValueInputType"], {
      controlOnly: true,
      type: type,
      value: props.value ? props.value.to : undefined,
      onChange: onToChange,
      onBlur: value => {
        onToChange(formatDateChange(value));
      },
      placeholder: props.intl.formatMessage({
        id: 'data.filter.filterEditor.rangeEndInputPlaceholder',
        defaultMessage: '범위 끝'
      })
    })
  }));
}
const RangeValueInput = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(RangeValueInputUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_editor/value_input_type.tsx":
/*!*****************************************************************!*\
  !*** ./public/ui/filter_bar/filter_editor/value_input_type.tsx ***!
  \*****************************************************************/
/*! exports provided: ValueInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueInputType", function() { return ValueInputType; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/filter_editor_utils */ "./public/ui/filter_bar/filter_editor/lib/filter_editor_utils.ts");
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






class ValueInputTypeUI extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "onBoolChange", event => {
      const boolValue = event.target.value === 'true';
      this.props.onChange(boolValue);
    });
    _defineProperty(this, "onNumberChange", event => {
      var _numValue;
      const params = event.target.value;
      let numValue;
      if (typeof params === 'string') {
        numValue = parseFloat(params);
      } else if (typeof params === 'bigint') {
        numValue = params.toString();
      }
      this.props.onChange((_numValue = numValue) !== null && _numValue !== void 0 ? _numValue : params);
    });
    _defineProperty(this, "onChange", event => {
      const params = event.target.value;
      this.props.onChange(params);
    });
    _defineProperty(this, "onBlur", event => {
      if (this.props.onBlur) {
        const params = event.target.value;
        this.props.onBlur(params);
      }
    });
  }
  render() {
    const value = this.props.value;
    let inputElement;
    switch (this.props.type) {
      case 'string':
        inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFieldText"], {
          fullWidth: this.props.fullWidth,
          placeholder: this.props.placeholder,
          value: value,
          onChange: this.onChange,
          controlOnly: this.props.controlOnly,
          className: this.props.className
        });
        break;
      case 'number':
        inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFieldNumber"], {
          fullWidth: this.props.fullWidth,
          placeholder: this.props.placeholder,
          value: typeof value === 'string' ? parseFloat(value) : typeof value === 'bigint' ? value.toString() : value,
          onChange: this.onNumberChange,
          controlOnly: this.props.controlOnly,
          className: this.props.className
        });
        break;
      case 'date':
        inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFieldText"], {
          fullWidth: this.props.fullWidth,
          placeholder: this.props.placeholder,
          value: value,
          onChange: this.onChange,
          onBlur: this.onBlur,
          isInvalid: !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(value) && !Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_4__["validateParams"])(value, this.props.type),
          controlOnly: this.props.controlOnly,
          className: this.props.className
        });
        break;
      case 'ip':
        inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFieldText"], {
          fullWidth: this.props.fullWidth,
          placeholder: this.props.placeholder,
          value: value,
          onChange: this.onChange,
          isInvalid: !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(value) && !Object(_lib_filter_editor_utils__WEBPACK_IMPORTED_MODULE_4__["validateParams"])(value, this.props.type),
          controlOnly: this.props.controlOnly,
          className: this.props.className
        });
        break;
      case 'boolean':
        inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedSelect"], {
          fullWidth: this.props.fullWidth,
          options: [{
            value: undefined,
            text: this.props.placeholder
          }, {
            value: 'true',
            text: this.props.intl.formatMessage({
              id: 'data.filter.filterEditor.trueOptionLabel',
              defaultMessage: 'true'
            })
          }, {
            value: 'false',
            text: this.props.intl.formatMessage({
              id: 'data.filter.filterEditor.falseOptionLabel',
              defaultMessage: 'false'
            })
          }],
          value: value,
          onChange: this.onBoolChange,
          className: this.props.className
        });
        break;
      default:
        break;
    }
    return inputElement;
  }
}
const ValueInputType = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["injectI18n"])(ValueInputTypeUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_item.tsx":
/*!**********************************************!*\
  !*** ./public/ui/filter_bar/filter_item.tsx ***!
  \**********************************************/
/*! exports provided: FilterItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItem", function() { return FilterItem; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _filter_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter_editor */ "./public/ui/filter_bar/filter_editor/index.tsx");
/* harmony import */ var _filter_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter_view */ "./public/ui/filter_bar/filter_view/index.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
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








const FILTER_ITEM_OK = '';
const FILTER_ITEM_WARNING = 'warn';
const FILTER_ITEM_ERROR = 'error';
function FilterItem(props) {
  const [isPopoverOpen, setIsPopoverOpen] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [indexPatternExists, setIndexPatternExists] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined);
  const {
    id,
    filter,
    indexPatterns
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const index = props.filter.meta.index;
    if (index) {
      Object(_services__WEBPACK_IMPORTED_MODULE_6__["getIndexPatterns"])().get(index).then(indexPattern => {
        setIndexPatternExists(!!indexPattern);
      }).catch(() => {
        setIndexPatternExists(false);
      });
    } else {
      // Allow filters without an index pattern and don't validate them.
      setIndexPatternExists(true);
    }
  }, [props.filter.meta.index]);
  function handleBadgeClick(e) {
    if (e.shiftKey) {
      onToggleDisabled();
    } else {
      setIsPopoverOpen(!isPopoverOpen);
    }
  }
  function onSubmit(f) {
    setIsPopoverOpen(false);
    props.onUpdate(f);
  }
  function onTogglePinned() {
    const f = Object(_common__WEBPACK_IMPORTED_MODULE_5__["toggleFilterPinned"])(filter);
    props.onUpdate(f);
  }
  function onToggleNegated() {
    const f = Object(_common__WEBPACK_IMPORTED_MODULE_5__["toggleFilterNegated"])(filter);
    props.onUpdate(f);
  }
  function onToggleDisabled() {
    const f = Object(_common__WEBPACK_IMPORTED_MODULE_5__["toggleFilterDisabled"])(filter);
    props.onUpdate(f);
  }
  function isValidLabel(labelConfig) {
    return labelConfig.status === FILTER_ITEM_OK;
  }
  function isDisabled(labelConfig) {
    const {
      disabled
    } = filter.meta;
    return disabled || labelConfig.status === FILTER_ITEM_ERROR;
  }
  function getClasses(negate, labelConfig) {
    return classnames__WEBPACK_IMPORTED_MODULE_1___default()('globalFilterItem', {
      'globalFilterItem-isDisabled': isDisabled(labelConfig),
      'globalFilterItem-isError': labelConfig.status === FILTER_ITEM_ERROR,
      'globalFilterItem-isWarning': labelConfig.status === FILTER_ITEM_WARNING,
      'globalFilterItem-isPinned': Object(_common__WEBPACK_IMPORTED_MODULE_5__["isFilterPinned"])(filter),
      'globalFilterItem-isExcluded': negate
    }, props.className);
  }
  function getDataTestSubj(labelConfig) {
    const dataTestSubjKey = filter.meta.key ? `filter-key-${filter.meta.key}` : '';
    const dataTestSubjValue = filter.meta.value ? `filter-value-${isValidLabel(labelConfig) ? labelConfig.title : labelConfig.status}` : '';
    const dataTestSubjNegated = filter.meta.negate ? 'filter-negated' : '';
    const dataTestSubjDisabled = `filter-${isDisabled(labelConfig) ? 'disabled' : 'enabled'}`;
    const dataTestSubjPinned = `filter-${Object(_common__WEBPACK_IMPORTED_MODULE_5__["isFilterPinned"])(filter) ? 'pinned' : 'unpinned'}`;
    return `filter ${dataTestSubjDisabled} ${dataTestSubjKey} ${dataTestSubjValue} ${dataTestSubjPinned} ${dataTestSubjNegated}`;
  }
  function getPanels() {
    const {
      negate,
      disabled
    } = filter.meta;
    return [{
      id: 0,
      items: [{
        name: Object(_common__WEBPACK_IMPORTED_MODULE_5__["isFilterPinned"])(filter) ? props.intl.formatMessage({
          id: 'data.filter.filterBar.unpinFilterButtonLabel',
          defaultMessage: 'Unpin'
        }) : props.intl.formatMessage({
          id: 'data.filter.filterBar.pinFilterButtonLabel',
          defaultMessage: 'Pin across all apps'
        }),
        icon: 'pin',
        onClick: () => {
          setIsPopoverOpen(false);
          onTogglePinned();
        },
        'data-test-subj': 'pinFilter'
      }, {
        name: props.intl.formatMessage({
          id: 'data.filter.filterBar.editFilterButtonLabel',
          defaultMessage: 'Edit filter'
        }),
        icon: 'pencil',
        panel: 1,
        'data-test-subj': 'editFilter'
      }, {
        name: negate ? props.intl.formatMessage({
          id: 'data.filter.filterBar.includeFilterButtonLabel',
          defaultMessage: 'Include results'
        }) : props.intl.formatMessage({
          id: 'data.filter.filterBar.excludeFilterButtonLabel',
          defaultMessage: 'Exclude results'
        }),
        icon: negate ? 'plusInCircle' : 'minusInCircle',
        onClick: () => {
          setIsPopoverOpen(false);
          onToggleNegated();
        },
        'data-test-subj': 'negateFilter'
      }, {
        name: disabled ? props.intl.formatMessage({
          id: 'data.filter.filterBar.enableFilterButtonLabel',
          defaultMessage: 'Re-enable'
        }) : props.intl.formatMessage({
          id: 'data.filter.filterBar.disableFilterButtonLabel',
          defaultMessage: 'Temporarily disable'
        }),
        icon: `${disabled ? 'eye' : 'eyeClosed'}`,
        onClick: () => {
          setIsPopoverOpen(false);
          onToggleDisabled();
        },
        'data-test-subj': 'disableFilter'
      }, {
        name: props.intl.formatMessage({
          id: 'data.filter.filterBar.deleteFilterButtonLabel',
          defaultMessage: 'Delete'
        }),
        icon: 'trash',
        onClick: () => {
          setIsPopoverOpen(false);
          props.onRemove();
        },
        'data-test-subj': 'deleteFilter'
      }]
    }, {
      id: 1,
      width: 600,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_filter_editor__WEBPACK_IMPORTED_MODULE_3__["FilterEditor"], {
        filter: filter,
        indexPatterns: indexPatterns,
        onSubmit: onSubmit,
        onCancel: () => {
          setIsPopoverOpen(false);
        }
      }))
    }];
  }

  /**
   * Checks if filter field exists in any of the index patterns provided,
   * Because if so, a filter for the wrong index pattern may still be applied.
   * This function makes this behavior explicit, but it needs to be revised.
   */
  function isFilterApplicable() {
    // Any filter is applicable if no index patterns were provided to FilterBar.
    if (!props.indexPatterns.length) return true;
    const ip = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getIndexPatternFromFilter"])(filter, indexPatterns);
    if (ip) return true;
    return indexPatterns.some(indexPattern => Object(_common__WEBPACK_IMPORTED_MODULE_5__["filterMatchesIndex"])(filter, indexPattern));
  }
  function getValueLabel() {
    const label = {
      title: '',
      message: '',
      status: FILTER_ITEM_OK
    };
    if (indexPatternExists === false) {
      label.status = FILTER_ITEM_ERROR;
      label.title = props.intl.formatMessage({
        id: 'data.filter.filterBar.labelErrorText',
        defaultMessage: `Error`
      });
      label.message = props.intl.formatMessage({
        id: 'data.filter.filterBar.labelErrorInfo',
        defaultMessage: 'Index pattern {indexPattern} not found'
      }, {
        indexPattern: filter.meta.index
      });
    } else if (isFilterApplicable()) {
      try {
        label.title = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getDisplayValueFromFilter"])(filter, indexPatterns);
      } catch (e) {
        label.status = FILTER_ITEM_ERROR;
        label.title = props.intl.formatMessage({
          id: 'data.filter.filterBar.labelErrorText',
          defaultMessage: `Error`
        });
        label.message = e.message;
      }
    } else {
      label.status = FILTER_ITEM_WARNING;
      label.title = props.intl.formatMessage({
        id: 'data.filter.filterBar.labelWarningText',
        defaultMessage: `Warning`
      });
      label.message = props.intl.formatMessage({
        id: 'data.filter.filterBar.labelWarningInfo',
        defaultMessage: 'Field {fieldName} does not exist in current view'
      }, {
        fieldName: filter.meta.key
      });
    }
    return label;
  }

  // Don't render until we know if the index pattern is valid
  if (indexPatternExists === undefined) return null;
  const valueLabelConfig = getValueLabel();

  // Disable errored filters and re-render
  if (valueLabelConfig.status === FILTER_ITEM_ERROR && !filter.meta.disabled) {
    filter.meta.disabled = true;
    props.onUpdate(filter);
    return null;
  }
  const badge = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_filter_view__WEBPACK_IMPORTED_MODULE_4__["FilterView"], {
    filter: filter,
    valueLabel: valueLabelConfig.title,
    filterLabelStatus: valueLabelConfig.status,
    errorMessage: valueLabelConfig.message,
    className: getClasses(filter.meta.negate, valueLabelConfig),
    iconOnClick: () => props.onRemove(),
    onClick: handleBadgeClick,
    "data-test-subj": getDataTestSubj(valueLabelConfig)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopover"], {
    id: `popoverFor_filter${id}`,
    className: `globalFilterItem__popover`,
    anchorClassName: `globalFilterItem__popoverAnchor`,
    isOpen: isPopoverOpen,
    closePopover: () => {
      setIsPopoverOpen(false);
    },
    button: badge,
    anchorPosition: "downLeft",
    panelPaddingSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenu"], {
    initialPanelId: 0,
    panels: getPanels(),
    size: "s"
  }));
}

/***/ }),

/***/ "./public/ui/filter_bar/filter_options.tsx":
/*!*************************************************!*\
  !*** ./public/ui/filter_bar/filter_options.tsx ***!
  \*************************************************/
/*! exports provided: FilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOptions", function() { return FilterOptions; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _filter_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter_editor */ "./public/ui/filter_bar/filter_editor/index.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _saved_query_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../saved_query_management */ "./public/ui/saved_query_management/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
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











const maxFilterWidth = 600;
const FilterOptionsUI = props => {
  var _props$indexPatterns$;
  const [isPopoverOpen, setIsPopoverOpen] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false);
  const [renderedComponent, setRenderedComponent] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('menu');
  const [filterWidth, setFilterWidth] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(maxFilterWidth);
  const opensearchDashboards = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["useOpenSearchDashboards"])();
  const uiSettings = opensearchDashboards.services.uiSettings;
  const isPinned = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_5__["UI_SETTINGS"].FILTERS_PINNED_BY_DEFAULT);
  const useNewHeader = Boolean(uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_5__["UI_SETTINGS"].NEW_HOME_PAGE));
  const index = Array.isArray(props.indexPatterns) ? (_props$indexPatterns$ = props.indexPatterns[0]) === null || _props$indexPatterns$ === void 0 ? void 0 : _props$indexPatterns$.id : undefined;
  const newFilter = Object(_common__WEBPACK_IMPORTED_MODULE_5__["buildEmptyFilter"])(isPinned, index);
  const togglePopover = () => {
    setRenderedComponent('menu');
    setIsPopoverOpen(prevState => !prevState);
  };
  const closePopover = () => {
    setIsPopoverOpen(false);
  };
  function onFiltersUpdated(filters) {
    if (props.onFiltersUpdated) {
      props.onFiltersUpdated(filters);
    }
  }
  function onEnableAll() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["enableFilter"]);
    onFiltersUpdated(filters);
  }
  function onDisableAll() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["disableFilter"]);
    onFiltersUpdated(filters);
  }
  function onPinAll() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["pinFilter"]);
    onFiltersUpdated(filters);
  }
  function onUnpinAll() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["unpinFilter"]);
    onFiltersUpdated(filters);
  }
  function onToggleAllNegated() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["toggleFilterNegated"]);
    onFiltersUpdated(filters);
  }
  function onToggleAllDisabled() {
    const filters = props.filters.map(_common__WEBPACK_IMPORTED_MODULE_5__["toggleFilterDisabled"]);
    onFiltersUpdated(filters);
  }
  function onRemoveAll() {
    onFiltersUpdated([]);
  }
  function onAdd(filter) {
    setIsPopoverOpen(false);
    const filters = [...props.filters, filter];
    onFiltersUpdated(filters);
  }
  function onResize(dimensions) {
    setFilterWidth(dimensions.width);
  }
  const addFilterPanelItem = {
    name: props.intl.formatMessage({
      id: 'data.filter.options.addFiltersButtonLabel',
      defaultMessage: '필터 추가'
    }),
    icon: 'plusInCircle',
    onClick: () => {
      setRenderedComponent('addFilter');
    },
    'data-test-subj': 'addFilters',
    disabled: false
  };
  const savedQueriesPanelItem = {
    name: props.intl.formatMessage({
      id: 'data.filter.options.savedQueriesButtonLabel',
      defaultMessage: '저장된 쿼리'
    }),
    icon: 'folderOpen',
    onClick: () => {
      setRenderedComponent('saveQuery');
    },
    'data-test-subj': 'savedQueries',
    disabled: false
  };
  const menuOptionsSeparator = {
    isSeparator: true,
    key: 'sep'
  };
  const disableMenuOption = props.filters.length === 0 && useNewHeader;
  const panelTree = [{
    id: 0,
    title: 'Filters',
    items: [{
      name: props.intl.formatMessage({
        id: 'data.filter.options.enableAllFiltersButtonLabel',
        defaultMessage: 'Enable all'
      }),
      icon: 'eye',
      onClick: () => {
        closePopover();
        onEnableAll();
      },
      'data-test-subj': 'enableAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.disableAllFiltersButtonLabel',
        defaultMessage: 'Disable all'
      }),
      icon: 'eyeClosed',
      onClick: () => {
        closePopover();
        onDisableAll();
      },
      'data-test-subj': 'disableAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.pinAllFiltersButtonLabel',
        defaultMessage: 'Pin all'
      }),
      icon: 'pin',
      onClick: () => {
        closePopover();
        onPinAll();
      },
      'data-test-subj': 'pinAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.unpinAllFiltersButtonLabel',
        defaultMessage: 'Unpin all'
      }),
      icon: 'pin',
      onClick: () => {
        closePopover();
        onUnpinAll();
      },
      'data-test-subj': 'unpinAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.invertNegatedFiltersButtonLabel',
        defaultMessage: 'Invert inclusion'
      }),
      icon: 'invert',
      onClick: () => {
        closePopover();
        onToggleAllNegated();
      },
      'data-test-subj': 'invertInclusionAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.invertDisabledFiltersButtonLabel',
        defaultMessage: 'Invert enabled/disabled'
      }),
      icon: 'eye',
      onClick: () => {
        closePopover();
        onToggleAllDisabled();
      },
      'data-test-subj': 'invertEnableDisableAllFilters',
      disabled: disableMenuOption
    }, {
      name: props.intl.formatMessage({
        id: 'data.filter.options.deleteAllFiltersButtonLabel',
        defaultMessage: 'Remove all'
      }),
      icon: 'trash',
      onClick: () => {
        closePopover();
        onRemoveAll();
      },
      'data-test-subj': 'removeAllFilters',
      disabled: disableMenuOption,
      className: useNewHeader ? 'globalFilterGroup__removeAllFilters' : ''
    }]
  }];
  const handleSave = () => {
    if (props.onInitiateSave) {
      props.onInitiateSave();
    }
    setIsPopoverOpen(false);
  };
  const saveQueryPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuPanel"], {
    items: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_saved_query_management__WEBPACK_IMPORTED_MODULE_8__["SavedQueryManagementComponent"], {
      showSaveQuery: props.showSaveQuery,
      loadedSavedQuery: props.loadedSavedQuery,
      onInitiateSave: handleSave,
      onInitiateSaveAsNew: props.onInitiateSaveAsNew,
      onLoad: props.onLoad,
      savedQueryService: props.savedQueryService,
      onClearSavedQuery: props.onClearSavedQuery,
      closeMenuPopover: () => {
        setIsPopoverOpen(false);
      },
      key: 'savedQueryManagement',
      useNewSavedQueryUI: Object(_services__WEBPACK_IMPORTED_MODULE_9__["getUseNewSavedQueriesUI"])(),
      saveQuery: props.saveQuery
    })],
    "data-test-subj": "save-query-panel"
  });
  const menuPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenu"], {
    initialPanelId: 0,
    panels: panelTree,
    size: "s",
    "data-test-subj": "filter-options-menu-panel"
  });
  const addFilterPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuPanel"], {
    items: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiResizeObserver"], {
      onResize: onResize,
      key: 'filter-option-resize'
    }, resizeRef => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        width: maxFilterWidth,
        maxWidth: '100%'
      },
      ref: resizeRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      style: {
        width: filterWidth
      },
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_filter_editor__WEBPACK_IMPORTED_MODULE_6__["FilterEditor"], {
      filter: newFilter,
      indexPatterns: props.indexPatterns,
      onSubmit: onAdd,
      onCancel: () => setIsPopoverOpen(false),
      key: Object(_osd_std__WEBPACK_IMPORTED_MODULE_1__["stringify"])(newFilter)
    }))))],
    "data-test-subj": "add-filter-panel"
  });
  const renderComponent = () => {
    switch (renderedComponent) {
      case 'menu':
        return menuPanel;
      case 'addFilter':
        return addFilterPanel;
      case 'saveQuery':
        return saveQueryPanel;
    }
  };
  if (useNewHeader) {
    var _panelTree$0$items, _panelTree$0$items2, _panelTree$0$items3;
    (_panelTree$0$items = panelTree[0].items) === null || _panelTree$0$items === void 0 || _panelTree$0$items.unshift(addFilterPanelItem);
    (_panelTree$0$items2 = panelTree[0].items) === null || _panelTree$0$items2 === void 0 || _panelTree$0$items2.push(menuOptionsSeparator);
    (_panelTree$0$items3 = panelTree[0].items) === null || _panelTree$0$items3 === void 0 || _panelTree$0$items3.push(savedQueriesPanelItem);
    panelTree[0].title = '';
  }
  const label = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverButtonText', {
    defaultMessage: '저장된 쿼리 보기'
  });
  const iconForQueryEditorControlPopoverBtn = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getUseNewSavedQueriesUI"])() ? 'boxesHorizontal' : 'folderOpen';
  const savedQueryPopoverButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
    onClick: togglePopover,
    "aria-label": label,
    "data-test-subj": "saved-query-management-popover-button",
    className: "osdSavedQueryManagement__popoverButton",
    title: label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: props.isQueryEditorControl ? iconForQueryEditorControlPopoverBtn : 'save',
    className: "euiQuickSelectPopover__buttonText"
  }));
  const filterPopoverButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiToolTip"], {
    content: props.intl.formatMessage({
      id: 'data.filter.options.changeAllFiltersButtonLabel',
      defaultMessage: '모든 필터 변경'
    }),
    delay: "long",
    position: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
    onClick: togglePopover,
    "aria-label": props.intl.formatMessage({
      id: 'data.filter.options.changeAllFiltersButtonLabel',
      defaultMessage: '모든 필터 변경'
    }),
    "data-test-subj": "showFilterActions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "filter",
    className: "euiQuickSelectPopover__buttonText"
  }), useNewHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "arrowDown"
  })));
  if (props.isQueryEditorControl) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopover"], {
      id: "popoverForAllFilters",
      isOpen: isPopoverOpen,
      closePopover: closePopover,
      button: savedQueryPopoverButton,
      anchorPosition: "downLeft",
      panelPaddingSize: "none",
      ownFocus: true,
      buffer: -8,
      repositionOnScroll: true
    }, saveQueryPanel);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopover"], {
    id: "popoverForAllFilters",
    className: useNewHeader ? 'globalFilterGroup__allFiltersPopover' : undefined,
    isOpen: isPopoverOpen,
    closePopover: closePopover,
    button: props.useSaveQueryMenu ? savedQueryPopoverButton : filterPopoverButton,
    anchorPosition: "downLeft",
    panelPaddingSize: "none",
    ownFocus: true,
    buffer: -8,
    repositionOnScroll: true
  }, useNewHeader ? renderComponent() : props.useSaveQueryMenu ? saveQueryPanel : menuPanel);
};
const FilterOptions = Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["injectI18n"])(FilterOptionsUI);

/***/ }),

/***/ "./public/ui/filter_bar/filter_view/index.tsx":
/*!****************************************************!*\
  !*** ./public/ui/filter_bar/filter_view/index.tsx ***!
  \****************************************************/
/*! exports provided: FilterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return FilterView; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./public/ui/filter_bar/index.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
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






const FilterView = ({
  filter,
  iconOnClick,
  onClick,
  valueLabel,
  errorMessage,
  filterLabelStatus,
  ...rest
}) => {
  const [ref, innerText] = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["useInnerText"])();
  let title = errorMessage || _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterBar.moreFilterActionsMessage', {
    defaultMessage: 'Filter: {innerText}. Select for more filter actions.',
    values: {
      innerText
    }
  });
  if (Object(_common__WEBPACK_IMPORTED_MODULE_4__["isFilterPinned"])(filter)) {
    title = `${_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterBar.pinnedFilterPrefix', {
      defaultMessage: 'Pinned'
    })} ${title}`;
  }
  if (filter.meta.disabled) {
    title = `${_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterBar.disabledFilterPrefix', {
      defaultMessage: 'Disabled'
    })} ${title}`;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiBadge"], _extends({
    title: title,
    color: "hollow",
    iconType: "cross",
    iconSide: "right",
    closeButtonProps: {
      // Removing tab focus on close button because the same option can be obtained through the context menu
      // Also, we may want to add a `DEL` keyboard press functionality
      tabIndex: -1
    },
    iconOnClick: iconOnClick,
    iconOnClickAriaLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterBar.filterItemBadgeIconAriaLabel', {
      defaultMessage: 'Delete'
    }),
    onClick: onClick,
    onClickAriaLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.filter.filterBar.filterItemBadgeAriaLabel', {
      defaultMessage: 'Filter actions'
    })
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["FilterLabel"], {
    filter: filter,
    valueLabel: valueLabel,
    filterLabelStatus: filterLabelStatus
  })));
};

/***/ }),

/***/ "./public/ui/saved_query_flyouts/open_saved_query_flyout.tsx":
/*!*******************************************************************!*\
  !*** ./public/ui/saved_query_flyouts/open_saved_query_flyout.tsx ***!
  \*******************************************************************/
/*! exports provided: OpenSavedQueryFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSavedQueryFlyout", function() { return OpenSavedQueryFlyout; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _saved_query_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saved_query_card */ "./public/ui/saved_query_flyouts/saved_query_card.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






var OPEN_QUERY_TAB_ID = /*#__PURE__*/function (OPEN_QUERY_TAB_ID) {
  OPEN_QUERY_TAB_ID["SAVED_QUERIES"] = "saved-queries";
  OPEN_QUERY_TAB_ID["QUERY_TEMPLATES"] = "query-templates";
  return OPEN_QUERY_TAB_ID;
}(OPEN_QUERY_TAB_ID || {});
function OpenSavedQueryFlyout({
  savedQueryService,
  notifications,
  onClose,
  onQueryOpen,
  handleQueryDelete
}) {
  const [selectedTabId, setSelectedTabId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(OPEN_QUERY_TAB_ID.SAVED_QUERIES);
  const [savedQueries, setSavedQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [hasTemplateQueries, setHasTemplateQueries] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [itemsPerPage, setItemsPerPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);
  const pager = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new _elastic_eui__WEBPACK_IMPORTED_MODULE_0__["Pager"](savedQueries.length, itemsPerPage));
  const [activePage, setActivePage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pager.current.getCurrentPageIndex());
  const [queriesOnCurrentPage, setQueriesOnCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [datasetTypeFilterOptions, setDatasetTypeFilterOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [languageFilterOptions, setLanguageFilterOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [selectedQuery, setSelectedQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const [searchQuery, setSearchQuery] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSearchBar"].Query.MATCH_ALL);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const currentTabIdRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(selectedTabId);
  const queryStringManager = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getQueryService"])().queryString;
  const fetchAllSavedQueriesForSelectedTab = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    setIsLoading(true);
    try {
      var _query$dataset;
      const query = queryStringManager.getQuery();
      let templateQueries = [];

      // fetch sample query based on dataset type
      if (query !== null && query !== void 0 && (_query$dataset = query.dataset) !== null && _query$dataset !== void 0 && _query$dataset.type) {
        var _queryStringManager$g, _queryStringManager$g2;
        templateQueries = (await ((_queryStringManager$g = queryStringManager.getDatasetService()) === null || _queryStringManager$g === void 0 || (_queryStringManager$g = _queryStringManager$g.getType(query.dataset.type)) === null || _queryStringManager$g === void 0 || (_queryStringManager$g2 = _queryStringManager$g.getSampleQueries) === null || _queryStringManager$g2 === void 0 ? void 0 : _queryStringManager$g2.call(_queryStringManager$g))) || [];

        // Check if any sample query has isTemplate set to true
        const hasTemplates = templateQueries.some(q => {
          var _q$attributes;
          return q === null || q === void 0 || (_q$attributes = q.attributes) === null || _q$attributes === void 0 ? void 0 : _q$attributes.isTemplate;
        });
        setHasTemplateQueries(hasTemplates);
      }

      // Set queries based on the current tab
      if (currentTabIdRef.current === OPEN_QUERY_TAB_ID.SAVED_QUERIES) {
        const allQueries = await savedQueryService.getAllSavedQueries();
        const mutableSavedQueries = allQueries.filter(q => !q.attributes.isTemplate);
        if (currentTabIdRef.current === OPEN_QUERY_TAB_ID.SAVED_QUERIES) {
          setSavedQueries(mutableSavedQueries);
        }
      } else if (currentTabIdRef.current === OPEN_QUERY_TAB_ID.QUERY_TEMPLATES) {
        setSavedQueries(templateQueries);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error occurred while retrieving saved queries.', e);
    } finally {
      setIsLoading(false);
    }
  }, [savedQueryService, currentTabIdRef, setSavedQueries, queryStringManager]);
  const updatePageIndex = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(index => {
    pager.current.goToPageIndex(index);
    setActivePage(index);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchAllSavedQueriesForSelectedTab();
    setSearchQuery(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSearchBar"].Query.MATCH_ALL);
    updatePageIndex(0);
    setSelectedQuery(undefined);
  }, [selectedTabId, fetchAllSavedQueriesForSelectedTab, updatePageIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const queryLanguages = new Set();
    const queryDatasetTypes = new Set();
    savedQueries.forEach(q => {
      var _q$attributes$query$d;
      queryLanguages.add(q.attributes.query.language);
      if ((_q$attributes$query$d = q.attributes.query.dataset) !== null && _q$attributes$query$d !== void 0 && _q$attributes$query$d.type) {
        queryDatasetTypes.add(q.attributes.query.dataset.type);
      }
    });
    setLanguageFilterOptions(Array.from(queryLanguages));
    setDatasetTypeFilterOptions(Array.from(queryDatasetTypes));
  }, [savedQueries]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const searchableItems = savedQueries.map(q => {
      var _q$attributes$query$d2;
      return {
        id: q.id,
        title: q.attributes.title,
        description: q.attributes.description,
        language: q.attributes.query.language,
        datasetType: (_q$attributes$query$d2 = q.attributes.query.dataset) === null || _q$attributes$query$d2 === void 0 ? void 0 : _q$attributes$query$d2.type,
        savedQuery: q
      };
    });
    const filteredSavedQueries = _elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSearchBar"].Query.execute(searchQuery, searchableItems, {
      defaultFields: ['language', 'title', 'description', 'datasetType']
    });
    pager.current.setTotalItems(filteredSavedQueries.length);
    setQueriesOnCurrentPage(filteredSavedQueries.slice(pager.current.getFirstItemIndex(), pager.current.getLastItemIndex() + 1));
  }, [savedQueries, searchQuery, activePage, itemsPerPage]);
  const onChange = ({
    query,
    error
  }) => {
    if (!error) {
      setSearchQuery(query);
      updatePageIndex(0);
    }
  };
  const schema = {
    strict: true,
    fields: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      language: {
        type: 'string'
      }
    }
  };
  const flyoutBodyContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSearchBar"], {
    compressed: true,
    query: searchQuery,
    box: {
      placeholder: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.openSavedQueryFlyout.searchBarPlaceholder', {
        defaultMessage: 'Search'
      }),
      incremental: true,
      schema
    },
    filters: [{
      type: 'field_value_selection',
      field: 'datasetType',
      name: 'Data type',
      multiSelect: 'or',
      options: datasetTypeFilterOptions.map(datasetType => ({
        value: datasetType,
        view: datasetType.toUpperCase()
      }))
    }, {
      type: 'field_value_selection',
      field: 'language',
      name: 'Query language',
      multiSelect: 'or',
      options: languageFilterOptions.map(language => ({
        value: language,
        view: language.toUpperCase()
      }))
    }],
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], null), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    justifyContent: "center",
    alignItems: "center",
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiLoadingSpinner"], {
    size: "xl"
  }))) : queriesOnCurrentPage.length > 0 ? queriesOnCurrentPage.map(query => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_saved_query_card__WEBPACK_IMPORTED_MODULE_3__["SavedQueryCard"], {
    key: query.id,
    savedQuery: query.savedQuery,
    selectedQuery: selectedQuery,
    onSelect: setSelectedQuery,
    handleQueryDelete: queryToDelete => {
      handleQueryDelete(queryToDelete).then(() => {
        fetchAllSavedQueriesForSelectedTab();
      });
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiEmptyPrompt"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.openSavedQueryFlyout.queryTable.noQueryFoundText', {
      defaultMessage: 'No saved query found.'
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], null), !isLoading && queriesOnCurrentPage.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTablePagination"], {
    itemsPerPageOptions: [5, 10, 20],
    itemsPerPage: itemsPerPage,
    activePage: pager.current.getCurrentPageIndex(),
    pageCount: pager.current.getTotalPages(),
    onChangeItemsPerPage: pageSize => {
      pager.current.setItemsPerPage(pageSize);
      setItemsPerPage(pageSize);
    },
    onChangePage: pageIndex => {
      updatePageIndex(pageIndex);
    }
  }));
  const tabs = [{
    id: OPEN_QUERY_TAB_ID.SAVED_QUERIES,
    name: 'Saved queries',
    content: flyoutBodyContent
  }];
  if (hasTemplateQueries) {
    tabs.push({
      id: OPEN_QUERY_TAB_ID.QUERY_TEMPLATES,
      name: 'Templates',
      content: flyoutBodyContent
    });
  }
  const onQueryAction = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (!selectedQuery) {
      return;
    }
    if (selectedQuery !== null && selectedQuery !== void 0 && selectedQuery.attributes.isTemplate) {
      Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["copyToClipboard"])(selectedQuery.attributes.query.query);
      notifications === null || notifications === void 0 || notifications.toasts.addSuccess({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.openSavedQueryFlyout.queryCopied.title', {
          defaultMessage: 'Query copied'
        }),
        text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.openSavedQueryFlyout.queryCopied.text', {
          defaultMessage: 'Paste the query in the editor to modify and run.'
        })
      });
    } else {
      onQueryOpen({
        ...selectedQuery,
        attributes: {
          ...selectedQuery.attributes,
          query: {
            ...selectedQuery.attributes.query,
            dataset: queryStringManager.getQuery().dataset
          }
        }
      });
    }
    onClose();
  }, [onClose, onQueryOpen, notifications, selectedQuery, queryStringManager]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyout"], {
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Saved queries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutBody"], {
    "data-test-subj": "savedQueriesFlyoutBody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTabbedContent"], {
    tabs: tabs,
    initialSelectedTab: tabs[0],
    onTabClick: tab => {
      setSelectedTabId(tab.id);
      currentTabIdRef.current = tab.id;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    gutterSize: "s",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonEmpty"], {
    iconType: 'cross',
    color: "danger",
    iconSide: "left",
    onClick: onClose
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
    disabled: !selectedQuery,
    fill: true,
    onClick: onQueryAction,
    "data-testid": "open-query-action-button",
    "data-test-subj": "open-query-action-button"
  }, selectedTabId === OPEN_QUERY_TAB_ID.SAVED_QUERIES ? 'Open' : 'Copy', " query")))));
}

/***/ }),

/***/ "./public/ui/saved_query_flyouts/save_query_flyout.tsx":
/*!*************************************************************!*\
  !*** ./public/ui/saved_query_flyouts/save_query_flyout.tsx ***!
  \*************************************************************/
/*! exports provided: SaveQueryFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveQueryFlyout", function() { return SaveQueryFlyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _saved_query_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../saved_query_form */ "./public/ui/saved_query_form/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



function SaveQueryFlyout({
  savedQuery,
  savedQueryService,
  onSave,
  onClose,
  showFilterOption,
  showTimeFilterOption
}) {
  const [saveAsNew, setSaveAsNew] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!savedQuery || savedQuery.isTemplate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_saved_query_form__WEBPACK_IMPORTED_MODULE_1__["SaveQueryForm"], {
    formUiType: "Flyout",
    onClose: onClose,
    onSave: async savedQueryMeta => {
      try {
        await onSave(savedQueryMeta, saveAsNew);
        onClose();
      } catch (error) {
        // error toast is already shown inside the onSave above,
        // catching error to avoid UI crash
        // adding comment to prevent no-empty lint error
      }
    },
    savedQueryService: savedQueryService,
    showFilterOption: showFilterOption,
    showTimeFilterOption: showTimeFilterOption,
    setSaveAsNew: shouldSaveAsNew => setSaveAsNew(shouldSaveAsNew),
    savedQuery: saveAsNew ? undefined : savedQuery,
    saveAsNew: saveAsNew,
    cannotBeOverwritten: !!(savedQuery !== null && savedQuery !== void 0 && savedQuery.isTemplate)
  });
}

/***/ }),

/***/ "./public/ui/saved_query_flyouts/saved_query_card.tsx":
/*!************************************************************!*\
  !*** ./public/ui/saved_query_flyouts/saved_query_card.tsx ***!
  \************************************************************/
/*! exports provided: SavedQueryCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedQueryCard", function() { return SavedQueryCard; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-monaco-editor */ "../../../node_modules/react-monaco-editor/lib/index.js");
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_monaco_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saved_query_management_delete_saved_query_confirmation_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../saved_query_management/delete_saved_query_confirmation_modal */ "./public/ui/saved_query_management/delete_saved_query_confirmation_modal.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






function SavedQueryCard({
  savedQuery,
  selectedQuery,
  onSelect,
  handleQueryDelete
}) {
  var _savedQuery$attribute;
  const [shouldTruncate, setShouldTruncate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isTruncated, setIsTruncated] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [editorHeight, setEditorHeight] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(60);
  const customHTMLRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const [showDeletionConfirmationModal, setShowDeletionConfirmationModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [lineCount, setLineCount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const toggleView = () => {
    setIsTruncated(!isTruncated);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!shouldTruncate) {
      return;
    }
    if (isTruncated) {
      setEditorHeight(80);
      return;
    }
    const editor = customHTMLRef.current;
    if (!editor) {
      return;
    }
    const editorElement = editor.getDomNode();
    if (!editorElement) {
      return;
    }
    const height = editor.getScrollHeight();
    setEditorHeight(height);
  }, [isTruncated, shouldTruncate]);
  function handleHTMLEditorDidMount(editor) {
    var _editor$getModel;
    const scrollHeight = editor.getScrollHeight();
    setEditorHeight(scrollHeight);
    if (scrollHeight > 80) {
      setShouldTruncate(true);
    }
    setLineCount(((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getLineCount()) || 0);
    customHTMLRef.current = editor;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCheckableCard"], {
    id: savedQuery.id,
    value: savedQuery.id,
    checked: (selectedQuery === null || selectedQuery === void 0 ? void 0 : selectedQuery.id) === savedQuery.id,
    onChange: () => {
      onSelect(savedQuery);
    },
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      alignItems: "center",
      gutterSize: "xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      alignItems: "center",
      gutterSize: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, savedQuery.attributes.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiBadge"], null, savedQuery.attributes.query.language)))), !savedQuery.attributes.isTemplate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonIcon"], {
      iconType: "trash",
      color: "danger",
      "data-test-subj": "deleteSavedQueryButton",
      onClick: () => {
        setShowDeletionConfirmationModal(true);
      }
    }))), savedQuery.attributes.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, savedQuery.attributes.description)), ((_savedQuery$attribute = savedQuery.attributes.query.dataset) === null || _savedQuery$attribute === void 0 ? void 0 : _savedQuery$attribute.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
      color: "subdued",
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, savedQuery.attributes.query.dataset.title)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    gutterSize: "s",
    alignItems: "flexStart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "editor-container",
    "data-test-subj": "editorContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_monaco_editor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: editorHeight,
    language: savedQuery.attributes.query.language // Change to the appropriate language
    ,
    value: savedQuery.attributes.query.query,
    options: {
      readOnly: true,
      // Set to true to prevent editing,
      minimap: {
        showSlider: 'mouseover',
        enabled: false
      },
      wordWrap: 'on',
      automaticLayout: true
    },
    editorDidMount: handleHTMLEditorDidMount
  }), shouldTruncate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: isTruncated ? 'read-more-wrap' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiLink"], {
    className: "read-more-btn",
    onClick: toggleView,
    "data-test-subj": "readMoreButton"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.saved_query.view_more_label', {
    defaultMessage: '{viewMoreLabel}',
    values: {
      viewMoreLabel: `${isTruncated ? `View full query (${lineCount} lines)` : 'View Less'}`
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false,
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCopy"], {
    textToCopy: savedQuery.attributes.query.query
  }, copy => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonIcon"], {
    onClick: copy,
    iconType: "copy",
    iconSize: "m",
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.saved_query.copy_query_aria_label', {
      defaultMessage: 'Copy recent query'
    })
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "s"
  }), showDeletionConfirmationModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_saved_query_management_delete_saved_query_confirmation_modal__WEBPACK_IMPORTED_MODULE_4__["DeleteSavedQueryConfirmationModal"], {
    savedQuery: savedQuery,
    onConfirm: () => {
      handleQueryDelete(savedQuery);
      setShowDeletionConfirmationModal(false);
    },
    onCancel: () => {
      setShowDeletionConfirmationModal(false);
    }
  }));
}

/***/ }),

/***/ "./public/ui/saved_query_form/helpers.tsx":
/*!************************************************!*\
  !*** ./public/ui/saved_query_form/helpers.tsx ***!
  \************************************************/
/*! exports provided: useSaveQueryFormContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSaveQueryFormContent", function() { return useSaveQueryFormContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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





function useSaveQueryFormContent({
  savedQuery,
  savedQueryService,
  onSave,
  onClose,
  showFilterOption = true,
  showTimeFilterOption = true,
  formUiType,
  saveAsNew,
  setSaveAsNew,
  cannotBeOverwritten
}) {
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [enabledSaveButton, setEnabledSaveButton] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [description, setDescription] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [savedQueries, setSavedQueries] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [shouldIncludeFilters, setShouldIncludeFilters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  // Defaults to false because saved queries are meant to be as portable as possible and loading
  // a saved query with a time filter will override whatever the current value of the global timepicker
  // is. We expect this option to be used rarely and only when the user knows they want this behavior.
  const [shouldIncludeTimeFilter, setIncludeTimefilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [formErrors, setFormErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  // Need this effect so that in case when user select "Save as new" in the flyout,
  // the initial state resets since savedQuery will be undefined
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTitle((savedQuery === null || savedQuery === void 0 ? void 0 : savedQuery.title) || '');
    setEnabledSaveButton(Boolean(savedQuery));
    setDescription((savedQuery === null || savedQuery === void 0 ? void 0 : savedQuery.description) || '');
    setShouldIncludeFilters(savedQuery ? !!savedQuery.filters : true);
    setIncludeTimefilter(!!(savedQuery !== null && savedQuery !== void 0 && savedQuery.timefilter));
    setFormErrors([]);
  }, [savedQuery]);
  const titleConflictErrorText = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryForm.titleConflictText', {
    defaultMessage: 'Name conflicts with an existing saved query'
  });
  const savedQueryDescriptionText = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryDescriptionText', {
    defaultMessage: 'Save query text and filters that you want to use again.'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchQueries = async () => {
      const allSavedQueries = await savedQueryService.getAllSavedQueries();
      const sortedAllSavedQueries = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(allSavedQueries, 'attributes.title');
      setSavedQueries(sortedAllSavedQueries);
    };
    fetchQueries();
  }, [savedQueryService]);
  const validate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const errors = [];
    if (!savedQuery && savedQueries.some(existingSavedQuery => existingSavedQuery.attributes.title === title)) {
      errors.push(titleConflictErrorText);
    }
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(errors, formErrors)) {
      setFormErrors(errors);
      return false;
    }
    return !formErrors.length;
  }, [savedQueries, savedQuery, title, titleConflictErrorText, formErrors]);
  const onClickSave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (validate()) {
      onSave({
        title,
        description,
        shouldIncludeFilters,
        shouldIncludeTimeFilter
      });
    }
  }, [validate, onSave, title, description, shouldIncludeFilters, shouldIncludeTimeFilter]);
  const onInputChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setEnabledSaveButton(Boolean(event.target.value));
    setFormErrors([]);
    setTitle(event.target.value);
  }, []);
  const autoTrim = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const trimmedTitle = title.trim();
    if (title.length > trimmedTitle.length) {
      setTitle(trimmedTitle);
    }
  }, [title]);
  const hasErrors = formErrors.length > 0;
  const saveQueryFormBody = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], {
    isInvalid: hasErrors,
    error: formErrors,
    "data-test-subj": "saveQueryForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s",
    color: "subdued"
  }, savedQueryDescriptionText)), formUiType === 'Flyout' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedCheckbox"], {
    id: "save-as-new-query",
    onChange: event => setSaveAsNew === null || setSaveAsNew === void 0 ? void 0 : setSaveAsNew(event.target.checked),
    checked: saveAsNew,
    "data-test-subj": "saveAsNewQueryCheckbox",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.SaveAsNewLabelText', {
      defaultMessage: 'Save as new query'
    }),
    disabled: cannotBeOverwritten
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryNameLabelText', {
      defaultMessage: 'Name'
    }),
    helpText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryNameHelpText', {
      defaultMessage: 'Name is required and must be unique without leading or trailing spaces.'
    }),
    isInvalid: hasErrors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
    disabled: !!savedQuery,
    value: title,
    name: "title",
    onChange: onInputChange,
    "data-test-subj": "saveQueryFormTitle",
    isInvalid: hasErrors,
    onBlur: autoTrim
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryDescriptionLabelText', {
      defaultMessage: 'Description'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
    value: description,
    name: "description",
    onChange: event => {
      setDescription(event.target.value);
    },
    "data-test-subj": "saveQueryFormDescription"
  })), showFilterOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
    name: "shouldIncludeFilters",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryIncludeFiltersLabelText', {
      defaultMessage: 'Include filters'
    }),
    checked: shouldIncludeFilters,
    onChange: () => {
      setShouldIncludeFilters(!shouldIncludeFilters);
    },
    "data-test-subj": "saveQueryFormIncludeFiltersOption"
  })), showTimeFilterOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
    name: "shouldIncludeTimeFilter",
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryIncludeTimeFilterLabelText', {
      defaultMessage: 'Include time filter'
    }),
    checked: shouldIncludeTimeFilter,
    onChange: () => {
      setIncludeTimefilter(!shouldIncludeTimeFilter);
    },
    "data-test-subj": "saveQueryFormIncludeTimeFilterOption"
  })));
  const footer = formUiType === 'Modal' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
    onClick: onClose,
    "data-test-subj": "savedQueryFormCancelButton"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryFormCancelButtonText', {
    defaultMessage: 'Cancel'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
    onClick: onClickSave,
    fill: true,
    "data-test-subj": "savedQueryFormSaveButton",
    disabled: hasErrors || !enabledSaveButton
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryFormSaveButtonText', {
    defaultMessage: 'Save'
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    gutterSize: "s",
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    iconType: 'cross',
    color: "danger",
    iconSide: "left",
    onClick: onClose
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryFormCancelButtonText', {
    defaultMessage: 'Cancel'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
    fill: true,
    disabled: hasErrors || !enabledSaveButton,
    onClick: onClickSave,
    "data-test-subj": "savedQueryFormSaveButton"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryFlyoutFormSaveButtonText', {
    defaultMessage: '{saveText}',
    values: {
      saveText: savedQuery ? 'Save changes' : 'Save'
    }
  }))));
  return {
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryFormTitle', {
      defaultMessage: 'Save query'
    }))),
    body: saveQueryFormBody,
    footer
  };
}

/***/ }),

/***/ "./public/ui/saved_query_form/index.ts":
/*!*********************************************!*\
  !*** ./public/ui/saved_query_form/index.ts ***!
  \*********************************************/
/*! exports provided: SavedQueryMeta, SaveQueryForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_query_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save_query_form */ "./public/ui/saved_query_form/save_query_form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedQueryMeta", function() { return _save_query_form__WEBPACK_IMPORTED_MODULE_0__["SavedQueryMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveQueryForm", function() { return _save_query_form__WEBPACK_IMPORTED_MODULE_0__["SaveQueryForm"]; });

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


/***/ }),

/***/ "./public/ui/saved_query_form/save_query_form.tsx":
/*!********************************************************!*\
  !*** ./public/ui/saved_query_form/save_query_form.tsx ***!
  \********************************************************/
/*! exports provided: SaveQueryForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveQueryForm", function() { return SaveQueryForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./public/ui/saved_query_form/helpers.tsx");
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




function SaveQueryForm({
  formUiType,
  savedQuery,
  savedQueryService,
  onSave,
  onClose,
  showFilterOption = true,
  showTimeFilterOption = true,
  saveAsNew,
  setSaveAsNew,
  cannotBeOverwritten
}) {
  const {
    header,
    body,
    footer
  } = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["useSaveQueryFormContent"])({
    formUiType,
    savedQuery,
    savedQueryService,
    onSave,
    onClose,
    showFilterOption,
    showTimeFilterOption,
    saveAsNew,
    setSaveAsNew,
    cannotBeOverwritten
  });
  return formUiType === 'Modal' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModal"], {
    onClose: onClose,
    initialFocus: "[name=title]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalHeaderTitle"], null, header)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalBody"], null, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiModalFooter"], null, footer)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutHeader"], {
    hasBorder: true
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutFooter"], null, footer));
}

/***/ }),

/***/ "./public/ui/saved_query_management/delete_saved_query_confirmation_modal.tsx":
/*!************************************************************************************!*\
  !*** ./public/ui/saved_query_management/delete_saved_query_confirmation_modal.tsx ***!
  \************************************************************************************/
/*! exports provided: DeleteSavedQueryConfirmationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSavedQueryConfirmationModal", function() { return DeleteSavedQueryConfirmationModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




const DeleteSavedQueryConfirmationModal = ({
  savedQuery,
  onConfirm,
  onCancel
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiConfirmModal"], {
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryPopoverConfirmDeletionTitle', {
      defaultMessage: 'Delete "{savedQueryName}"?',
      values: {
        savedQueryName: savedQuery.attributes.title
      }
    }),
    confirmButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryPopoverConfirmDeletionConfirmButtonText', {
      defaultMessage: 'Delete'
    }),
    cancelButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchBar.savedQueryPopoverConfirmDeletionCancelButtonText', {
      defaultMessage: 'Cancel'
    }),
    onConfirm: onConfirm,
    buttonColor: "danger",
    onCancel: onCancel
  });
};

/***/ }),

/***/ "./public/ui/saved_query_management/index.ts":
/*!***************************************************!*\
  !*** ./public/ui/saved_query_management/index.ts ***!
  \***************************************************/
/*! exports provided: SavedQueryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_query_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_query_management_component */ "./public/ui/saved_query_management/saved_query_management_component.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedQueryManagementComponent", function() { return _saved_query_management_component__WEBPACK_IMPORTED_MODULE_0__["SavedQueryManagementComponent"]; });

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

/***/ "./public/ui/saved_query_management/saved_query_list_item.tsx":
/*!********************************************************************!*\
  !*** ./public/ui/saved_query_management/saved_query_list_item.tsx ***!
  \********************************************************************/
/*! exports provided: SavedQueryListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedQueryListItem", function() { return SavedQueryListItem; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _delete_saved_query_confirmation_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete_saved_query_confirmation_modal */ "./public/ui/saved_query_management/delete_saved_query_confirmation_modal.tsx");
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






const SavedQueryListItem = ({
  savedQuery,
  isSelected,
  onSelect,
  onDelete,
  showWriteOperations
}) => {
  const [showDeletionConfirmationModal, setShowDeletionConfirmationModal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const selectButtonAriaLabelText = isSelected ? _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverSavedQueryListItemSelectedButtonAriaLabel', {
    defaultMessage: 'Saved query button selected {savedQueryName}. Press to clear any changes.',
    values: {
      savedQueryName: savedQuery.attributes.title
    }
  }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverSavedQueryListItemButtonAriaLabel', {
    defaultMessage: 'Saved query button {savedQueryName}',
    values: {
      savedQueryName: savedQuery.attributes.title
    }
  });
  const selectButtonDataTestSubj = isSelected ? `load-saved-query-${savedQuery.attributes.title}-button saved-query-list-item-selected` : `load-saved-query-${savedQuery.attributes.title}-button`;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdSavedQueryListItem', {
    'osdSavedQueryListItem-selected': isSelected
  });
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "osdSavedQueryListItem__label",
    "data-test-subj": "osdSavedQueryListItemLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "osdSavedQueryListItem__labelText"
  }, savedQuery.attributes.title), ' ', savedQuery.attributes.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIconTip"], {
    type: "iInCircle",
    content: savedQuery.attributes.description,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverSavedQueryListItemDescriptionAriaLabel', {
      defaultMessage: '{savedQueryName} description',
      values: {
        savedQueryName: savedQuery.attributes.title
      }
    })
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiListGroupItem"], {
    size: "s",
    className: classes,
    key: savedQuery.id,
    "data-test-subj": `saved-query-list-item ${selectButtonDataTestSubj} ${isSelected ? 'saved-query-list-item-selected' : ''}`,
    isActive: isSelected,
    onClick: () => {
      onSelect(savedQuery);
    },
    "aria-label": selectButtonAriaLabelText,
    label: label,
    iconType: isSelected ? 'check' : undefined,
    extraAction: showWriteOperations ? {
      color: 'danger',
      onClick: () => setShowDeletionConfirmationModal(true),
      iconType: 'trash',
      iconSize: 's',
      'aria-label': _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverDeleteButtonAriaLabel', {
        defaultMessage: 'Delete saved query {savedQueryName}',
        values: {
          savedQueryName: savedQuery.attributes.title
        }
      }),
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchBar.savedQueryPopoverDeleteButtonAriaLabel', {
        defaultMessage: 'Delete saved query {savedQueryName}',
        values: {
          savedQueryName: savedQuery.attributes.title
        }
      }),
      'data-test-subj': `delete-saved-query-${savedQuery.attributes.title}-button`
    } : undefined
  }), showDeletionConfirmationModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delete_saved_query_confirmation_modal__WEBPACK_IMPORTED_MODULE_4__["DeleteSavedQueryConfirmationModal"], {
    savedQuery: savedQuery,
    onConfirm: () => {
      onDelete(savedQuery);
      setShowDeletionConfirmationModal(false);
    },
    onCancel: () => {
      setShowDeletionConfirmationModal(false);
    }
  }));
};

/***/ }),

/***/ "./public/ui/saved_query_management/saved_query_management_component.tsx":
/*!*******************************************************************************!*\
  !*** ./public/ui/saved_query_management/saved_query_management_component.tsx ***!
  \*******************************************************************************/
/*! exports provided: SavedQueryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedQueryManagementComponent", function() { return SavedQueryManagementComponent; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saved_query_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saved_query_list_item */ "./public/ui/saved_query_management/saved_query_list_item.tsx");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _saved_query_flyouts_save_query_flyout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../saved_query_flyouts/save_query_flyout */ "./public/ui/saved_query_flyouts/save_query_flyout.tsx");
/* harmony import */ var _saved_query_flyouts_open_saved_query_flyout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../saved_query_flyouts/open_saved_query_flyout */ "./public/ui/saved_query_flyouts/open_saved_query_flyout.tsx");
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









const perPage = 50;
function SavedQueryManagementComponent({
  showSaveQuery,
  loadedSavedQuery,
  onInitiateSave,
  onInitiateSaveAsNew,
  onLoad,
  onClearSavedQuery,
  savedQueryService,
  closeMenuPopover,
  useNewSavedQueryUI,
  saveQuery
}) {
  const [savedQueries, setSavedQueries] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const [count, setTotalCount] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [activePage, setActivePage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const cancelPendingListingRequest = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(() => {});
  const {
    services: {
      overlays,
      notifications
    }
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["useOpenSearchDashboards"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchCountAndSavedQueries = async () => {
      cancelPendingListingRequest.current();
      let requestGotCancelled = false;
      cancelPendingListingRequest.current = () => {
        requestGotCancelled = true;
      };
      const {
        total: savedQueryCount,
        queries: savedQueryItems
      } = await savedQueryService.findSavedQueries('', perPage, activePage + 1);
      if (requestGotCancelled) return;
      const sortedSavedQueryItems = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"])(savedQueryItems, 'attributes.title');
      setTotalCount(savedQueryCount);
      setSavedQueries(sortedSavedQueryItems);
    };
    fetchCountAndSavedQueries();
  }, [activePage, savedQueryService]);
  const handleClosePopover = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    closeMenuPopover();
  }, [closeMenuPopover]);
  const handleSave = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    handleClosePopover();
    onInitiateSave();
  }, [handleClosePopover, onInitiateSave]);
  const handleSaveAsNew = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    handleClosePopover();
    onInitiateSaveAsNew();
  }, [handleClosePopover, onInitiateSaveAsNew]);
  const handleSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(savedQueryToSelect => {
    handleClosePopover();
    onLoad(savedQueryToSelect);
  }, [handleClosePopover, onLoad]);
  const handleDelete = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(savedQueryToDelete => {
    const onDeleteSavedQuery = async savedQuery => {
      cancelPendingListingRequest.current();
      setSavedQueries(savedQueries.filter(currentSavedQuery => currentSavedQuery.id !== savedQuery.id));
      if (loadedSavedQuery && loadedSavedQuery.id === savedQuery.id) {
        onClearSavedQuery();
      }
      await savedQueryService.deleteSavedQuery(savedQuery.id);
      setActivePage(0);
    };
    const deletePromise = onDeleteSavedQuery(savedQueryToDelete);
    if (!useNewSavedQueryUI) {
      handleClosePopover();
    }
    return deletePromise;
  }, [handleClosePopover, loadedSavedQuery, onClearSavedQuery, savedQueries, savedQueryService, useNewSavedQueryUI]);
  const savedQueryDescriptionText = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryDescriptionText', {
    defaultMessage: 'Save query text and filters that you want to use again.'
  });
  const noSavedQueriesDescriptionText = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryNoSavedQueriesText', {
    defaultMessage: 'There are no saved queries.'
  }) + ' ' + savedQueryDescriptionText;
  const savedQueryPopoverTitleText = _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverTitleText', {
    defaultMessage: 'Saved Queries'
  });
  const goToPage = pageNumber => {
    setActivePage(pageNumber);
  };
  const savedQueryRows = () => {
    const savedQueriesWithoutCurrent = savedQueries.filter(savedQuery => {
      if (!loadedSavedQuery) return true;
      return savedQuery.id !== loadedSavedQuery.id;
    });
    const savedQueriesReordered = loadedSavedQuery && savedQueriesWithoutCurrent.length !== savedQueries.length ? [loadedSavedQuery, ...savedQueriesWithoutCurrent] : [...savedQueriesWithoutCurrent];
    return savedQueriesReordered.map(savedQuery => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_saved_query_list_item__WEBPACK_IMPORTED_MODULE_4__["SavedQueryListItem"], {
      key: savedQuery.id,
      savedQuery: savedQuery,
      isSelected: !!loadedSavedQuery && loadedSavedQuery.id === savedQuery.id,
      onSelect: handleSelect,
      onDelete: handleDelete,
      showWriteOperations: !!showSaveQuery
    }));
  };
  return useNewSavedQueryUI ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "osdSavedQueryManagement__popover",
    "data-test-subj": "saved-query-management-popover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiListGroupItem"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.saved_query_management.save_query_item_label', {
      defaultMessage: 'Save query'
    }),
    "data-test-subj": "saved-query-management-save-button",
    iconType: "save",
    onClick: () => {
      closeMenuPopover();
      const saveQueryFlyout = overlays === null || overlays === void 0 ? void 0 : overlays.openFlyout(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_saved_query_flyouts_save_query_flyout__WEBPACK_IMPORTED_MODULE_6__["SaveQueryFlyout"], {
        savedQueryService: savedQueryService,
        onClose: () => saveQueryFlyout === null || saveQueryFlyout === void 0 ? void 0 : saveQueryFlyout.close().then(),
        onSave: saveQuery,
        showFilterOption: true,
        showTimeFilterOption: true,
        savedQuery: loadedSavedQuery === null || loadedSavedQuery === void 0 ? void 0 : loadedSavedQuery.attributes
      })));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiListGroupItem"], {
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.saved_query_management.open_query_item_label', {
      defaultMessage: 'Open query'
    }),
    "data-test-subj": "saved-query-management-open-button",
    iconType: "folderOpen",
    onClick: () => {
      closeMenuPopover();
      const openSavedQueryFlyout = overlays === null || overlays === void 0 ? void 0 : overlays.openFlyout(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_saved_query_flyouts_open_saved_query_flyout__WEBPACK_IMPORTED_MODULE_7__["OpenSavedQueryFlyout"], {
        savedQueryService: savedQueryService,
        notifications: notifications,
        onClose: () => openSavedQueryFlyout === null || openSavedQueryFlyout === void 0 ? void 0 : openSavedQueryFlyout.close().then(),
        onQueryOpen: onLoad,
        handleQueryDelete: handleDelete
      })));
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "osdSavedQueryManagement__popover",
    "data-test-subj": "saved-query-management-popover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopoverTitle"], {
    id: 'savedQueryManagementPopoverTitle'
  }, savedQueryPopoverTitleText), savedQueries.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "s",
    color: "subdued",
    className: "osdSavedQueryManagement__text",
    "data-test-subj": "osdSavedQueryManagementText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, savedQueryDescriptionText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "osdSavedQueryManagement__listWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiListGroup"], {
    flush: true,
    className: "osdSavedQueryManagement__list",
    "data-test-subj": "osdSavedQueryManagementList",
    "aria-labelledby": 'savedQueryManagementPopoverTitle'
  }, savedQueryRows())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPagination"], {
    className: "osdSavedQueryManagement__pagination",
    "data-test-subj": "osdSavedQueryManagementPagination",
    pageCount: Math.ceil(count / perPage),
    activePage: activePage,
    onPageClick: goToPage
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "s",
    color: "subdued",
    className: "osdSavedQueryManagement__text",
    "data-test-subj": "osdSavedQueryManagementNoSavedQueryText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, noSavedQueriesDescriptionText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
    size: "s"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopoverFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    direction: "rowReverse",
    gutterSize: "s",
    alignItems: "center",
    justifyContent: "flexEnd",
    responsive: false,
    wrap: true
  }, showSaveQuery && loadedSavedQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
    size: "s",
    fill: true,
    onClick: handleSave,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveChangesButtonAriaLabel', {
      defaultMessage: 'Save changes to {title}',
      values: {
        title: loadedSavedQuery.attributes.title
      }
    }),
    "data-test-subj": "saved-query-management-save-changes-button"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveChangesButtonText', {
    defaultMessage: 'Save changes'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
    size: "s",
    onClick: handleSaveAsNew,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveAsNewButtonAriaLabel', {
      defaultMessage: 'Save as new saved query'
    }),
    "data-test-subj": "saved-query-management-save-as-new-button"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveAsNewButtonText', {
    defaultMessage: 'Save as new'
  })))), showSaveQuery && !loadedSavedQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
    size: "s",
    fill: true,
    onClick: handleSave,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveButtonAriaLabel', {
      defaultMessage: 'Save a new saved query'
    }),
    "data-test-subj": "saved-query-management-save-button"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverSaveButtonText', {
    defaultMessage: 'Save current query'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
    grow: false
  }, loadedSavedQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonEmpty"], {
    size: "s",
    flush: "left",
    onClick: onClearSavedQuery,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverClearButtonAriaLabel', {
      defaultMessage: 'Clear current saved query'
    }),
    "data-test-subj": "saved-query-management-clear-button"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.search.searchBar.savedQueryPopoverClearButtonText', {
    defaultMessage: 'Clear'
  }))))));
}

/***/ }),

/***/ "./public/ui/search_bar/search_bar.tsx":
/*!*********************************************!*\
  !*** ./public/ui/search_bar/search_bar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _filter_bar_filter_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter_bar/filter_bar */ "./public/ui/filter_bar/filter_bar.tsx");
/* harmony import */ var _query_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../query_editor */ "./public/ui/query_editor/index.tsx");
/* harmony import */ var _query_string_input_query_bar_top_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../query_string_input/query_bar_top_row */ "./public/ui/query_string_input/query_bar_top_row.tsx");
/* harmony import */ var _saved_query_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../saved_query_form */ "./public/ui/saved_query_form/index.ts");
/* harmony import */ var _filter_bar_filter_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../filter_bar/filter_options */ "./public/ui/filter_bar/filter_options.tsx");
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














// TODO: MQL: include query enhancement in state in case make adding data sources at runtime?

class SearchBarUI extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "services", this.props.opensearchDashboards.services);
    _defineProperty(this, "queryStringManager", this.services.data.query.queryString);
    _defineProperty(this, "savedQueryService", this.services.data.query.savedQueries);
    _defineProperty(this, "filterBarRef", null);
    _defineProperty(this, "filterBarWrapperRef", null);
    _defineProperty(this, "useNewHeader", Boolean(this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["UI_SETTINGS"].NEW_HOME_PAGE)));
    /*
     Keep the "draft" value in local state until the user actually submits the query. There are a couple advantages:
       1. Each app doesn't have to maintain its own "draft" value if it wants to put off updating the query in app state
      until the user manually submits their changes. Most apps have watches on the query value in app state so we don't
      want to trigger those on every keypress. Also, some apps (e.g. dashboard) already juggle multiple query values,
      each with slightly different semantics and I'd rather not add yet another variable to the mix.
       2. Changes to the local component state won't trigger an Angular digest cycle. Triggering digest cycles on every
      keypress has been a major source of performance issues for us in previous implementations of the query bar.
      See https://github.com/elastic/kibana/issues/14086
    */
    _defineProperty(this, "state", {
      isFiltersVisible: true,
      showSaveQueryModal: false,
      showSaveNewQueryModal: false,
      showSavedQueryPopover: false,
      currentProps: this.props,
      query: this.props.query ? {
        ...this.props.query
      } : undefined,
      dateRangeFrom: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.props, 'dateRangeFrom', 'now-15m'),
      dateRangeTo: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.props, 'dateRangeTo', 'now')
    });
    _defineProperty(this, "isDirty", () => {
      if (!this.props.showDatePicker && this.state.query && this.props.query) {
        return this.state.query.query !== this.props.query.query;
      }
      return this.state.query && this.props.query && this.state.query.query !== this.props.query.query || this.state.dateRangeFrom !== this.props.dateRangeFrom || this.state.dateRangeTo !== this.props.dateRangeTo;
    });
    _defineProperty(this, "setFilterBarHeight", () => {
      requestAnimationFrame(() => {
        const height = this.filterBarRef && this.state.isFiltersVisible ? this.filterBarRef.clientHeight : 0;
        if (this.filterBarWrapperRef) {
          this.filterBarWrapperRef.setAttribute('style', `height: ${height}px`);
        }
      });
    });
    // member-ordering rules conflict with use-before-declaration rules
    _defineProperty(this, "ro", new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a(this.setFilterBarHeight));
    _defineProperty(this, "onSave", async (savedQueryMeta, saveAsNew = false) => {
      if (!this.state.query) return;
      const query = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.state.query);
      delete query.dataset;
      const savedQueryAttributes = {
        title: savedQueryMeta.title,
        description: savedQueryMeta.description,
        query
      };
      if (savedQueryMeta.shouldIncludeFilters) {
        savedQueryAttributes.filters = this.props.filters;
      }
      if (savedQueryMeta.shouldIncludeTimeFilter && this.state.dateRangeTo !== undefined && this.state.dateRangeFrom !== undefined && this.props.refreshInterval !== undefined && this.props.isRefreshPaused !== undefined) {
        savedQueryAttributes.timefilter = {
          from: this.state.dateRangeFrom,
          to: this.state.dateRangeTo,
          refreshInterval: {
            value: this.props.refreshInterval,
            pause: this.props.isRefreshPaused
          }
        };
      }
      try {
        let response;
        if (this.props.savedQuery && !saveAsNew) {
          response = await this.savedQueryService.saveQuery(savedQueryAttributes, {
            overwrite: true
          });
        } else {
          response = await this.savedQueryService.saveQuery(savedQueryAttributes);
        }
        this.services.notifications.toasts.addSuccess(`Your query "${response.attributes.title}" was saved`);
        this.setState({
          showSaveQueryModal: false,
          showSaveNewQueryModal: false
        });
        if (this.props.onSaved) {
          this.props.onSaved(response);
        }
      } catch (error) {
        this.services.notifications.toasts.addDanger(this.props.intl.formatMessage({
          id: 'data.search_bar.save_query.failedToSaveQuery',
          defaultMessage: 'An error occured while saving your query{errorMessage}'
        }, {
          errorMessage: error.message ? `: ${error.message}` : ''
        }));
        throw error;
      }
    });
    _defineProperty(this, "onInitiateSave", () => {
      this.setState({
        showSaveQueryModal: true
      });
    });
    _defineProperty(this, "onInitiateSaveNew", () => {
      this.setState({
        showSaveNewQueryModal: true
      });
    });
    _defineProperty(this, "onQueryBarChange", queryAndDateRange => {
      this.setState({
        query: queryAndDateRange.query,
        dateRangeFrom: queryAndDateRange.dateRange.from,
        dateRangeTo: queryAndDateRange.dateRange.to
      });
      if (this.props.onQueryChange) {
        this.props.onQueryChange(queryAndDateRange);
      }
    });
    _defineProperty(this, "onQueryBarSubmit", queryAndDateRange => {
      this.setState({
        query: queryAndDateRange.query,
        dateRangeFrom: queryAndDateRange.dateRange && queryAndDateRange.dateRange.from || this.state.dateRangeFrom,
        dateRangeTo: queryAndDateRange.dateRange && queryAndDateRange.dateRange.to || this.state.dateRangeTo
      }, () => {
        if (this.props.onQuerySubmit) {
          this.props.onQuerySubmit({
            query: this.state.query,
            dateRange: {
              from: this.state.dateRangeFrom,
              to: this.state.dateRangeTo
            }
          });
        }
      });
      if (queryAndDateRange.query) {
        this.queryStringManager.addToQueryHistory(queryAndDateRange.query, queryAndDateRange.dateRange);
      }
    });
    _defineProperty(this, "onLoadSavedQuery", savedQuery => {
      const dateRangeFrom = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(savedQuery, 'attributes.timefilter.from', this.state.dateRangeFrom);
      const dateRangeTo = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(savedQuery, 'attributes.timefilter.to', this.state.dateRangeTo);
      this.setState({
        query: savedQuery.attributes.query,
        dateRangeFrom,
        dateRangeTo
      });
      if (this.props.onSavedQueryUpdated) {
        this.props.onSavedQueryUpdated(savedQuery);
      }
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(prevState.currentProps, nextProps)) {
      return null;
    }
    let nextQuery = null;
    if (nextProps.query && nextProps.query.query !== Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(prevState, 'currentProps.query.query')) {
      nextQuery = {
        query: nextProps.query.query,
        language: nextProps.query.language,
        dataset: nextProps.query.dataset
      };
    } else if (nextProps.query && prevState.query && nextProps.query.language !== prevState.query.language) {
      nextQuery = {
        query: '',
        language: nextProps.query.language,
        dataset: nextProps.query.dataset
      };
    } else if (nextProps.query && prevState.query && nextProps.query.dataset !== prevState.query.dataset) {
      nextQuery = {
        query: nextProps.query.query,
        language: nextProps.query.language,
        dataset: nextProps.query.dataset
      };
    }
    let nextDateRange = null;
    if (nextProps.dateRangeFrom !== Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(prevState, 'currentProps.dateRangeFrom') || nextProps.dateRangeTo !== Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(prevState, 'currentProps.dateRangeTo')) {
      nextDateRange = {
        dateRangeFrom: nextProps.dateRangeFrom,
        dateRangeTo: nextProps.dateRangeTo
      };
    }
    const nextState = {
      currentProps: nextProps
    };
    if (nextQuery) {
      nextState.query = nextQuery;
    }
    if (nextDateRange) {
      nextState.dateRangeFrom = nextDateRange.dateRangeFrom;
      nextState.dateRangeTo = nextDateRange.dateRangeTo;
    }
    return nextState;
  }
  shouldRenderQueryEditor(isEnhancementsEnabledOverride) {
    var _this$props$datasetSe;
    // TODO: MQL handle no index patterns?
    if (!isEnhancementsEnabledOverride) return false;
    const showDatePicker = this.props.showDatePicker || this.props.showAutoRefreshOnly;
    // TODO: MQL showQueryEditor should be a prop of it's own but using showQueryInput for now
    const showQueryEditor = this.props.showQueryInput && this.props.indexPatterns && this.state.query || ((_this$props$datasetSe = this.props.datasetSelectorRef) === null || _this$props$datasetSe === void 0 ? void 0 : _this$props$datasetSe.current);
    return this.props.showQueryBar && (showDatePicker || showQueryEditor);
  }
  shouldRenderQueryBar(isEnhancementsEnabledOverride) {
    // TODO: MQL handle no index patterns?
    if (isEnhancementsEnabledOverride) return false;
    const showDatePicker = this.props.showDatePicker || this.props.showAutoRefreshOnly;
    const showQueryInput = this.props.showQueryInput && this.props.indexPatterns && this.state.query;
    return this.props.showQueryBar && (showDatePicker || showQueryInput);
  }
  isQueryLanguageFilterable() {
    var _this$queryStringMana, _this$queryStringMana2, _this$state$query;
    return (_this$queryStringMana = (_this$queryStringMana2 = this.queryStringManager.getLanguageService().getLanguage((_this$state$query = this.state.query) === null || _this$state$query === void 0 ? void 0 : _this$state$query.language)) === null || _this$queryStringMana2 === void 0 || (_this$queryStringMana2 = _this$queryStringMana2.fields) === null || _this$queryStringMana2 === void 0 ? void 0 : _this$queryStringMana2.filterable) !== null && _this$queryStringMana !== void 0 ? _this$queryStringMana : true // Render if undefined or true
    ;
  }
  shouldRenderFilterBar(isEnhancementsEnabledOverride) {
    return this.props.showFilterBar && this.props.filters && (!this.useNewHeader || this.props.filters.length > 0) && this.props.indexPatterns && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["compact"])(this.props.indexPatterns).length > 0 && (!isEnhancementsEnabledOverride || isEnhancementsEnabledOverride && this.isQueryLanguageFilterable);
  }

  /*
   * This Function is here to show the toggle in saved query form
   * in case you the date range (from/to)
   */
  shouldRenderTimeFilterInSavedQueryForm() {
    const {
      dateRangeFrom,
      dateRangeTo,
      showDatePicker
    } = this.props;
    return showDatePicker || !showDatePicker && dateRangeFrom !== undefined && dateRangeTo !== undefined;
  }
  componentDidMount() {
    if (this.filterBarRef) {
      this.setFilterBarHeight();
      this.ro.observe(this.filterBarRef);
    }
  }
  componentDidUpdate() {
    if (this.filterBarRef) {
      this.setFilterBarHeight();
      this.ro.unobserve(this.filterBarRef);
    }
  }
  render() {
    var _this$queryStringMana3, _this$state$query2;
    const isEnhancementsEnabledOverride = this.services.uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_6__["UI_SETTINGS"].QUERY_ENHANCEMENTS_ENABLED) && ((_this$queryStringMana3 = this.queryStringManager.getLanguageService().getLanguage((_this$state$query2 = this.state.query) === null || _this$state$query2 === void 0 ? void 0 : _this$state$query2.language)) === null || _this$queryStringMana3 === void 0 || (_this$queryStringMana3 = _this$queryStringMana3.editorSupportedAppNames) === null || _this$queryStringMana3 === void 0 ? void 0 : _this$queryStringMana3.includes(this.services.appName));
    const searchBarMenu = (useSaveQueryMenu = false, isQueryEditorControl = false) => {
      return this.state.query && this.props.onClearSavedQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_filter_bar_filter_options__WEBPACK_IMPORTED_MODULE_11__["FilterOptions"], {
        filters: this.props.filters,
        onFiltersUpdated: this.props.onFiltersUpdated,
        intl: this.props.intl,
        indexPatterns: this.props.indexPatterns,
        showSaveQuery: this.props.showSaveQuery,
        loadedSavedQuery: this.props.savedQuery,
        onInitiateSave: this.onInitiateSave,
        onInitiateSaveAsNew: this.onInitiateSaveNew,
        onLoad: this.onLoadSavedQuery,
        savedQueryService: this.savedQueryService,
        onClearSavedQuery: this.props.onClearSavedQuery,
        useSaveQueryMenu: useSaveQueryMenu,
        isQueryEditorControl: isQueryEditorControl,
        saveQuery: this.onSave
      });
    };
    let filterBar;
    if (this.shouldRenderFilterBar(isEnhancementsEnabledOverride)) {
      const filterGroupClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('globalFilterGroup__wrapper', {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'globalFilterGroup__wrapper-isVisible': this.state.isFiltersVisible
      });
      filterBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        id: "GlobalFilterGroup",
        ref: node => {
          this.filterBarWrapperRef = node;
        },
        className: filterGroupClasses
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        ref: node => {
          this.filterBarRef = node;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_filter_bar_filter_bar__WEBPACK_IMPORTED_MODULE_7__["FilterBar"], {
        className: "globalFilterGroup__filterBar",
        "data-test-subj": "globalFilterGroupFilterBar",
        filters: this.props.filters,
        onFiltersUpdated: this.props.onFiltersUpdated,
        indexPatterns: this.props.indexPatterns,
        isFilterBarPortable: this.props.isFilterBarPortable
      })));
    }
    let queryBar;
    if (this.shouldRenderQueryBar(isEnhancementsEnabledOverride)) {
      queryBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_query_string_input_query_bar_top_row__WEBPACK_IMPORTED_MODULE_9__["default"], {
        timeHistory: this.props.timeHistory,
        query: this.state.query,
        screenTitle: this.props.screenTitle,
        onSubmit: this.onQueryBarSubmit,
        indexPatterns: this.props.indexPatterns,
        isLoading: this.props.isLoading,
        prepend: this.props.showFilterBar ? searchBarMenu(!this.useNewHeader, false) : undefined,
        showDatePicker: this.props.showDatePicker,
        dateRangeFrom: this.state.dateRangeFrom,
        dateRangeTo: this.state.dateRangeTo,
        isRefreshPaused: this.props.isRefreshPaused,
        refreshInterval: this.props.refreshInterval,
        showAutoRefreshOnly: this.props.showAutoRefreshOnly,
        showQueryInput: this.props.showQueryInput,
        onRefresh: this.props.onRefresh,
        onRefreshChange: this.props.onRefreshChange,
        onChange: this.onQueryBarChange,
        isDirty: this.isDirty(),
        customSubmitButton: this.props.customSubmitButton ? this.props.customSubmitButton : undefined,
        dataTestSubj: this.props.dataTestSubj,
        indicateNoData: this.props.indicateNoData,
        datePickerRef: this.props.datePickerRef
      });
    }
    let queryEditor;
    if (this.shouldRenderQueryEditor(isEnhancementsEnabledOverride)) {
      queryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_query_editor__WEBPACK_IMPORTED_MODULE_8__["QueryEditorTopRow"], {
        timeHistory: this.props.timeHistory,
        query: this.state.query,
        screenTitle: this.props.screenTitle,
        onSubmit: this.onQueryBarSubmit,
        indexPatterns: this.props.indexPatterns,
        isLoading: this.props.isLoading,
        prepend: this.isQueryLanguageFilterable() ? searchBarMenu() : undefined,
        showDatePicker: this.props.showDatePicker,
        dateRangeFrom: this.state.dateRangeFrom,
        dateRangeTo: this.state.dateRangeTo,
        isRefreshPaused: this.props.isRefreshPaused,
        refreshInterval: this.props.refreshInterval,
        showAutoRefreshOnly: this.props.showAutoRefreshOnly,
        showQueryEditor: this.props.showQueryInput,
        onRefresh: this.props.onRefresh,
        onRefreshChange: this.props.onRefreshChange,
        onChange: this.onQueryBarChange,
        isDirty: this.isDirty(),
        customSubmitButton: this.props.customSubmitButton ? this.props.customSubmitButton : undefined,
        filterBar: filterBar,
        dataTestSubj: this.props.dataTestSubj,
        indicateNoData: this.props.indicateNoData,
        datasetSelectorRef: this.props.datasetSelectorRef,
        datePickerRef: this.props.datePickerRef,
        savedQueryManagement: searchBarMenu(false, true),
        queryStatus: this.props.queryStatus
      });
    }
    const className = isEnhancementsEnabledOverride ? 'globalQueryEditor' : 'globalQueryBar';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: className,
      "data-test-subj": className
    }, queryBar, queryEditor, !isEnhancementsEnabledOverride && filterBar, this.state.showSaveQueryModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_saved_query_form__WEBPACK_IMPORTED_MODULE_10__["SaveQueryForm"], {
      formUiType: "Modal",
      savedQuery: this.props.savedQuery ? this.props.savedQuery.attributes : undefined,
      savedQueryService: this.savedQueryService,
      onSave: this.onSave,
      onClose: () => this.setState({
        showSaveQueryModal: false
      }),
      showFilterOption: this.props.showFilterBar,
      showTimeFilterOption: this.shouldRenderTimeFilterInSavedQueryForm()
    }) : null, this.state.showSaveNewQueryModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_saved_query_form__WEBPACK_IMPORTED_MODULE_10__["SaveQueryForm"], {
      formUiType: "Modal",
      savedQueryService: this.savedQueryService,
      onSave: savedQueryMeta => this.onSave(savedQueryMeta, true),
      onClose: () => this.setState({
        showSaveNewQueryModal: false
      }),
      showFilterOption: this.props.showFilterBar,
      showTimeFilterOption: this.shouldRenderTimeFilterInSavedQueryForm()
    }) : null);
  }
}

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
_defineProperty(SearchBarUI, "defaultProps", {
  showQueryBar: true,
  showFilterBar: true,
  showDatePicker: true,
  showAutoRefreshOnly: false
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_0__["injectI18n"])(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_5__["withOpenSearchDashboards"])(SearchBarUI)));

/***/ })

}]);
//# sourceMappingURL=data.chunk.3.js.map