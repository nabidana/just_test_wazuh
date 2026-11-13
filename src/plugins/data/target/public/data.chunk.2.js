(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[2],{

/***/ "./public/ui/query_string_input/no_data_popover.tsx":
/*!**********************************************************!*\
  !*** ./public/ui/query_string_input/no_data_popover.tsx ***!
  \**********************************************************/
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

/***/ "./public/ui/query_string_input/query_bar_top_row.tsx":
/*!************************************************************!*\
  !*** ./public/ui/query_string_input/query_bar_top_row.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryBarTopRow; });
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/datemath */ "../../../node_modules/@elastic/datemath/target/index.js");
/* harmony import */ var _elastic_datemath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_datemath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _query_string_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query_string_input */ "./public/ui/query_string_input/query_string_input.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common */ "./common/index.ts");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../query */ "./public/query/index.tsx");
/* harmony import */ var _no_data_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./no_data_popover */ "./public/ui/query_string_input/no_data_popover.tsx");
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








const QueryStringInput = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["withOpenSearchDashboards"])(_query_string_input__WEBPACK_IMPORTED_MODULE_8__["default"]);

// @internal

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
function QueryBarTopRow(props) {
  var _props$datePickerRef;
  const [isDateRangeInvalid, setIsDateRangeInvalid] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [isQueryInputFocused, setIsQueryInputFocused] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const opensearchDashboards = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["useOpenSearchDashboards"])();
  const {
    uiSettings,
    notifications,
    storage,
    appName,
    docLinks
  } = opensearchDashboards.services;
  const osdDQLDocs = docLinks.links.opensearchDashboards.dql.base;
  const queryLanguage = props.query && props.query.language;
  const persistedLog = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => queryLanguage && uiSettings && storage && appName ? Object(_query__WEBPACK_IMPORTED_MODULE_10__["getQueryLog"])(uiSettings, storage, appName, queryLanguage) : undefined, [appName, queryLanguage, uiSettings, storage]);
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
    const defaultTimeSetting = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_9__["UI_SETTINGS"].TIMEPICKER_TIME_DEFAULTS);
    return {
      from: props.dateRangeFrom || defaultTimeSetting.from,
      to: props.dateRangeTo || defaultTimeSetting.to
    };
  }
  function onQueryChange(query) {
    props.onChange({
      query,
      dateRange: getDateRange()
    });
  }
  function onChangeQueryInputFocus(isFocused) {
    setIsQueryInputFocused(isFocused);
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
    handleLuceneSyntaxWarning();
    if (props.timeHistory) {
      props.timeHistory.add(dateRange);
    }
    props.onSubmit({
      query,
      dateRange
    });
  }
  function onInputSubmit(query) {
    onSubmit({
      query,
      dateRange: getDateRange()
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
  function renderQueryInput() {
    if (!shouldRenderQueryInput()) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QueryStringInput, {
      disableAutoFocus: props.disableAutoFocus,
      indexPatterns: props.indexPatterns,
      prepend: props.prepend,
      query: props.query,
      screenTitle: props.screenTitle,
      onChange: onQueryChange,
      onChangeQueryInputFocus: onChangeQueryInputFocus,
      onSubmit: onInputSubmit,
      persistedLog: persistedLog,
      dataTestSubj: props.dataTestSubj
    }));
  }
  function renderSharingMetaFields() {
    const {
      from,
      to
    } = getDateRange();
    const dateRangePretty = Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["prettyDuration"])(toAbsoluteString(from), toAbsoluteString(to), [], uiSettings.get('dateFormat'));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-shared-timefilter-duration": dateRangePretty,
      "data-test-subj": "dataSharedTimefilterDuration"
    });
  }
  function shouldRenderDatePicker() {
    return Boolean(props.showDatePicker || props.showAutoRefreshOnly);
  }
  function shouldRenderQueryInput() {
    return Boolean(props.showQueryInput && props.indexPatterns && props.query && storage);
  }
  function renderUpdateButton() {
    const button = props.customSubmitButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(props.customSubmitButton, {
      onClick: onClickSubmitButton
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSuperUpdateButton"], {
      needsUpdate: props.isDirty,
      isDisabled: isDateRangeInvalid,
      isLoading: props.isLoading,
      onClick: onClickSubmitButton,
      "data-test-subj": "querySubmitButton",
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.query.queryBar.querySubmitButtonLabel', {
        defaultMessage: 'Submit query'
      }),
      compressed: true
    });
    if (!shouldRenderDatePicker()) {
      return button;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_no_data_popover__WEBPACK_IMPORTED_MODULE_11__["NoDataPopover"], {
      storage: storage,
      showNoDataPopover: props.indicateNoData
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
      responsive: false,
      gutterSize: "s",
      justifyContent: "flexStart"
    }, renderDatePicker(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
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
    const commonlyUsedRanges = uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_9__["UI_SETTINGS"].TIMEPICKER_QUICK_RANGES).map(({
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
    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('osdQueryBar__datePickerWrapper', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'osdQueryBar__datePickerWrapper-isHidden': isQueryInputFocused
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
      className: wrapperClasses,
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSuperDatePicker"], {
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
      className: "osdQueryBar__datePicker",
      "data-test-subj": "osdQueryBarDatePicker",
      compressed: true
    }));
  }
  function handleLuceneSyntaxWarning() {
    if (!props.query) return;
    const {
      query,
      language
    } = props.query;
    if (language === 'kuery' && typeof query === 'string' && (!storage || !storage.get('luceneSyntaxWarningOptOut')) && Object(_common__WEBPACK_IMPORTED_MODULE_9__["doesKueryExpressionHaveLuceneSyntaxError"])(query)) {
      const toast = notifications.toasts.addWarning({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.query.queryBar.luceneSyntaxWarningTitle', {
          defaultMessage: 'Lucene syntax warning'
        }),
        text: Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
          size: "s"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "data.query.queryBar.luceneSyntaxWarningMessage",
          defaultMessage: "It looks like you may be trying to use Lucene query syntax, although you have opensearchDashboards Query Language (DQL) selected. Please review the DQL docs {link}.",
          values: {
            link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiLink"], {
              href: osdDQLDocs,
              target: "_blank"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
              id: "data.query.queryBar.syntaxOptionsDescription.docsLinkText",
              defaultMessage: "here"
            }))
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
          justifyContent: "flexEnd",
          gutterSize: "s"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiButton"], {
          size: "s",
          onClick: () => onLuceneSyntaxWarningOptOut(toast)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "data.query.queryBar.luceneSyntaxWarningOptOutText",
          defaultMessage: "Don't show again"
        }))))))
      });
    }
  }
  function onLuceneSyntaxWarningOptOut(toast) {
    if (!storage) return;
    storage.set('luceneSyntaxWarningOptOut', true);
    notifications.toasts.remove(toast);
  }
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('osdQueryBar', {
    'osdQueryBar--withDatePicker': props.showDatePicker
  });
  const shouldUseDatePickerRef = (props === null || props === void 0 || (_props$datePickerRef = props.datePickerRef) === null || _props$datePickerRef === void 0 ? void 0 : _props$datePickerRef.current) && (uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_9__["UI_SETTINGS"].QUERY_ENHANCEMENTS_ENABLED) || uiSettings.get('home:useNewHomePage'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    className: classes,
    responsive: !!props.showDatePicker,
    gutterSize: "s",
    justifyContent: "flexEnd"
  }, renderQueryInput(), renderSharingMetaFields(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false,
    className: "osdQueryBar--hideEmpty",
    "data-test-subj": "osdQueryBar"
  }, shouldUseDatePickerRef ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"])(renderUpdateButton(), props.datePickerRef.current) : renderUpdateButton())));
}
QueryBarTopRow.defaultProps = {
  showQueryInput: true,
  showDatePicker: true,
  showAutoRefreshOnly: false
};

/***/ })

}]);
//# sourceMappingURL=data.chunk.2.js.map