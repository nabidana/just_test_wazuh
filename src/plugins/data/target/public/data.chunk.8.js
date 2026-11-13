(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[8],{

/***/ "./public/ui/query_editor/no_data_popover.tsx":
/*!****************************************************!*\
  !*** ./public/ui/query_editor/no_data_popover.tsx ***!
  \****************************************************/
/*! exports provided: NoDataPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataPopover", function() { return NoDataPopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const NO_DATA_POPOVER_STORAGE_KEY = 'data.noDataPopover';
function NoDataPopover({
  showNoDataPopover,
  storage,
  children
}) {
  const [noDataPopoverDismissed, setNoDataPopoverDismissed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => Boolean(storage.get(NO_DATA_POPOVER_STORAGE_KEY)));
  const [noDataPopoverVisible, setNoDataPopoverVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (showNoDataPopover && !noDataPopoverDismissed) {
      setNoDataPopoverVisible(true);
    }
  }, [noDataPopoverDismissed, showNoDataPopover]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTourStep"], {
    onFinish: () => {},
    closePopover: () => {
      setNoDataPopoverVisible(false);
    },
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        maxWidth: 300
      }
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.noDataPopover.content', {
      defaultMessage: "This time range doesn't contain any data. Increase or adjust the time range to see more fields and create charts."
    }))),
    minWidth: 300,
    anchorPosition: "downCenter",
    anchorClassName: "eui-displayBlock",
    step: 1,
    stepsTotal: 1,
    isStepOpen: noDataPopoverVisible,
    subtitle: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.noDataPopover.subtitle', {
      defaultMessage: 'Tip'
    }),
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.noDataPopover.title', {
      defaultMessage: 'Empty dataset'
    }),
    footerAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
      size: "xs",
      flush: "right",
      color: "text",
      "data-test-subj": "noDataPopoverDismissButton",
      onClick: () => {
        storage.set(NO_DATA_POPOVER_STORAGE_KEY, true);
        setNoDataPopoverDismissed(true);
        setNoDataPopoverVisible(false);
      }
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.noDataPopover.dismissAction', {
      defaultMessage: "Don't show again"
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onFocus: () => {
      setNoDataPopoverVisible(false);
    }
  }, children));
}

/***/ }),

/***/ "./public/ui/query_editor/query_editor_top_row.tsx":
/*!*********************************************************!*\
  !*** ./public/ui/query_editor/query_editor_top_row.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryEditorTopRow; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.. */ "./public/index.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../query */ "./public/query/index.tsx");
/* harmony import */ var _no_data_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no_data_popover */ "./public/ui/query_editor/no_data_popover.tsx");
/* harmony import */ var _query_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query_editor */ "./public/ui/query_editor/query_editor.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */











const QueryEditor = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__["withOpenSearchDashboards"])(_query_editor__WEBPACK_IMPORTED_MODULE_10__["default"]);

// @internal

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
function QueryEditorTopRow(props) {
  var _props$datasetSelecto, _props$datePickerRef;
  const [isDateRangeInvalid, setIsDateRangeInvalid] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [isQueryEditorFocused, setIsQueryEditorFocused] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const opensearchDashboards = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_6__["useOpenSearchDashboards"])();
  const {
    uiSettings,
    storage,
    appName,
    data
  } = opensearchDashboards.services;
  const queryLanguage = props.query && props.query.language;
  const persistedLog = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(() => queryLanguage && uiSettings && storage && appName ? Object(_query__WEBPACK_IMPORTED_MODULE_8__["getQueryLog"])(uiSettings, storage, appName, queryLanguage) : undefined, [queryLanguage, uiSettings, storage, appName]);
  function onClickSubmitButton(event) {
    if (persistedLog && props.query) {
      persistedLog.add(props.query.query);
    }
    event.preventDefault();
    onSubmit({
      query: props.query,
      dateRange: getDateRange()
    });
  }
  function getDateRange() {
    const defaultTimeSetting = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_7__["UI_SETTINGS"].TIMEPICKER_TIME_DEFAULTS);
    return {
      from: props.dateRangeFrom || defaultTimeSetting.from,
      to: props.dateRangeTo || defaultTimeSetting.to
    };
  }
  function onQueryChange(query, dateRange) {
    props.onChange({
      query,
      dateRange: dateRange !== null && dateRange !== void 0 ? dateRange : getDateRange()
    });
  }
  function onChangeQueryEditorFocus(isFocused) {
    setIsQueryEditorFocused(isFocused);
  }
  function onTimeChange({
    start,
    end,
    isInvalid,
    isQuickSelection
  }) {
    setIsDateRangeInvalid(isInvalid);
    const retVal = {
      query: props.query,
      dateRange: {
        from: start,
        to: end
      }
    };
    if (isQuickSelection) {
      props.onSubmit(retVal);
    } else {
      props.onChange(retVal);
    }
  }
  function onRefresh({
    start,
    end
  }) {
    const retVal = {
      dateRange: {
        from: start,
        to: end
      }
    };
    if (props.onRefresh) {
      props.onRefresh(retVal);
    }
  }
  function onSubmit({
    query,
    dateRange
  }) {
    if (props.timeHistory) {
      props.timeHistory.add(dateRange);
    }
    props.onSubmit({
      query,
      dateRange
    });
  }
  function onInputSubmit(query, dateRange) {
    onSubmit({
      query,
      dateRange: dateRange !== null && dateRange !== void 0 ? dateRange : getDateRange()
    });
  }
  function toAbsoluteString(value, roundUp = false) {
    const valueAsMoment = _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default.a.parse(value, {
      roundUp
    });
    if (!valueAsMoment) {
      return value;
    }
    return valueAsMoment.toISOString();
  }
  function renderDatasetSelector() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["DatasetSelector"], {
      onSubmit: onInputSubmit,
      appearance: ___WEBPACK_IMPORTED_MODULE_5__["DatasetSelectorAppearance"].Button,
      buttonProps: {
        color: 'text',
        fullWidth: true
      }
    });
  }
  function renderQueryEditor() {
    if (!shouldRenderQueryEditor()) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(QueryEditor, {
      disableAutoFocus: props.disableAutoFocus,
      prepend: props.prepend,
      query: props.query,
      screenTitle: props.screenTitle,
      onChange: onQueryChange,
      onChangeQueryEditorFocus: onChangeQueryEditorFocus,
      onSubmit: onInputSubmit,
      persistedLog: persistedLog,
      className: "osdQueryEditor",
      dataTestSubj: props.dataTestSubj,
      filterBar: props.filterBar,
      savedQueryManagement: props.savedQueryManagement,
      queryStatus: props.queryStatus
    }));
  }
  function renderSharingMetaFields() {
    const {
      from,
      to
    } = getDateRange();
    const dateRangePretty = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["prettyDuration"])(toAbsoluteString(from), toAbsoluteString(to), [], uiSettings.get('dateFormat'));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      "data-shared-timefilter-duration": dateRangePretty,
      "data-test-subj": "dataSharedTimefilterDuration"
    });
  }

  /**
   * Determines if the date picker should be rendered based on UI settings, dataset configuration, and language settings.
   *
   * @returns {boolean} Whether the date picker should be rendered
   *
   * UI Settings permutations (isDatePickerEnabled):
   * - showDatePicker=true || showAutoRefreshOnly=true => true
   * - showDatePicker=false && showAutoRefreshOnly=false => false
   * - both undefined => true (default)
   * If isDatePickerEnabled is false, returns false immediately
   *
   * Dataset Type permutations (datasetType?.meta?.supportsTimeFilter):
   * - supportsTimeFilter=false => false
   *
   * Language permutations (when dataset.meta.supportsTimeFilter is undefined or true):
   * - queryLanguage=undefined => true (shows date picker)
   * - queryLanguage exists:
   *   - languageOverrides[queryLanguage].hideDatePicker=true => false
   *   - languageOverrides[queryLanguage].hideDatePicker=false => true
   *   - hideDatePicker=true => false
   *   - hideDatePicker=false => true
   *   - hideDatePicker=undefined => true
   */
  function shouldRenderDatePicker() {
    var _ref, _props$query, _props$query2, _datasetType$meta, _datasetType$language, _languageService$getL;
    const {
      queryString
    } = data.query;
    const datasetService = queryString.getDatasetService();
    const languageService = queryString.getLanguageService();
    const isDatePickerEnabled = Boolean((_ref = props.showDatePicker || props.showAutoRefreshOnly) !== null && _ref !== void 0 ? _ref : true);
    if (!isDatePickerEnabled) return false;

    // Get dataset type configuration
    const datasetType = (_props$query = props.query) !== null && _props$query !== void 0 && _props$query.dataset ? datasetService.getType((_props$query2 = props.query) === null || _props$query2 === void 0 ? void 0 : _props$query2.dataset.type) : undefined;
    // Check if dataset type explicitly configures the `supportsTimeFilter` option
    if ((datasetType === null || datasetType === void 0 || (_datasetType$meta = datasetType.meta) === null || _datasetType$meta === void 0 ? void 0 : _datasetType$meta.supportsTimeFilter) === false) return false;
    if (queryLanguage && (datasetType === null || datasetType === void 0 || (_datasetType$language = datasetType.languageOverrides) === null || _datasetType$language === void 0 || (_datasetType$language = _datasetType$language[queryLanguage]) === null || _datasetType$language === void 0 ? void 0 : _datasetType$language.hideDatePicker) !== undefined) {
      return Boolean(!datasetType.languageOverrides[queryLanguage].hideDatePicker);
    }
    return Boolean(!(queryLanguage && (_languageService$getL = languageService.getLanguage(queryLanguage)) !== null && _languageService$getL !== void 0 && _languageService$getL.hideDatePicker));
  }
  function shouldRenderQueryEditor() {
    return Boolean(props.showQueryEditor && props.query && storage);
  }
  function renderUpdateButton() {
    const button = props.customSubmitButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(props.customSubmitButton, {
      onClick: onClickSubmitButton
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
      isDisabled: isDateRangeInvalid,
      isLoading: props.isLoading,
      onClick: onClickSubmitButton,
      "data-test-subj": "querySubmitButton",
      className: "euiSuperUpdateButton",
      iconType: "play",
      fill: true,
      size: 's'
    }, "Run");
    if (!shouldRenderDatePicker()) {
      return button;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_no_data_popover__WEBPACK_IMPORTED_MODULE_9__["NoDataPopover"], {
      storage: storage,
      showNoDataPopover: props.indicateNoData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      responsive: false,
      gutterSize: "s",
      alignItems: "flexStart"
    }, renderDatePicker(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, button)));
  }
  function renderDatePicker() {
    if (!shouldRenderDatePicker()) {
      return null;
    }
    let recentlyUsedRanges;
    if (props.timeHistory) {
      recentlyUsedRanges = props.timeHistory.get().map(({
        from,
        to
      }) => {
        return {
          start: from,
          end: to
        };
      });
    }
    const commonlyUsedRanges = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_7__["UI_SETTINGS"].TIMEPICKER_QUICK_RANGES).map(({
      from,
      to,
      display
    }) => {
      return {
        start: from,
        end: to,
        label: display
      };
    });
    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdQueryEditor__datePickerWrapper', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'osdQueryEditor__datePickerWrapper-isHidden': isQueryEditorFocused
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      className: wrapperClasses
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSuperDatePicker"], {
      start: props.dateRangeFrom,
      end: props.dateRangeTo,
      isPaused: props.isRefreshPaused,
      refreshInterval: props.refreshInterval,
      onTimeChange: onTimeChange,
      onRefresh: onRefresh,
      onRefreshChange: props.onRefreshChange,
      showUpdateButton: false,
      recentlyUsedRanges: recentlyUsedRanges,
      commonlyUsedRanges: commonlyUsedRanges,
      dateFormat: uiSettings.get('dateFormat'),
      isAutoRefreshOnly: props.showAutoRefreshOnly,
      className: "osdQueryEditor__datePicker",
      "data-test-subj": "osdQueryEditorDatePicker",
      compressed: true
    }));
  }
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdQueryEditor', {
    'osdQueryEditor--withDatePicker': props.showDatePicker
  });
  const datePicker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "flexEnd",
    gutterSize: "none",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false,
    className: "osdQueryEditor--updateButtonWrapper",
    "data-test-subj": "osdQueryEditorUpdateButton"
  }, renderUpdateButton()));
  const datasetSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, renderDatasetSelector());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    className: classes,
    responsive: !!props.showDatePicker,
    gutterSize: "xs",
    direction: "column",
    justifyContent: "flexEnd"
  }, (props === null || props === void 0 || (_props$datasetSelecto = props.datasetSelectorRef) === null || _props$datasetSelecto === void 0 ? void 0 : _props$datasetSelecto.current) && /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(datasetSelector, props.datasetSelectorRef.current), props !== null && props !== void 0 && (_props$datePickerRef = props.datePickerRef) !== null && _props$datePickerRef !== void 0 && _props$datePickerRef.current && uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_7__["UI_SETTINGS"].QUERY_ENHANCEMENTS_ENABLED) ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["createPortal"])(datePicker, props.datePickerRef.current) : datePicker, renderQueryEditor(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: "s",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, renderSharingMetaFields()))));
}
QueryEditorTopRow.defaultProps = {
  showQueryEditor: true,
  showDatePicker: true,
  showAutoRefreshOnly: false
};

/***/ })

}]);
//# sourceMappingURL=data.chunk.8.js.map