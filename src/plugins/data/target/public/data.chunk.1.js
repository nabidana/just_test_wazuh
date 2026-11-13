(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[1],{

/***/ "../../../node_modules/classnames/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/classnames/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./public/ui/query_editor/language_selector.tsx":
/*!******************************************************!*\
  !*** ./public/ui/query_editor/language_selector.tsx ***!
  \******************************************************/
/*! exports provided: QueryLanguageSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryLanguageSelector", function() { return QueryLanguageSelector; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const mapExternalLanguageToOptions = language => {
  return {
    label: language.title,
    value: language.id
  };
};
const QueryLanguageSelector = props => {
  var _queryString$getQuery, _languageService$getD, _props$anchorPosition;
  const queryString = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getQueryService"])().queryString;
  const languageService = queryString.getLanguageService();
  const [isPopoverOpen, setPopover] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [currentLanguage, setCurrentLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(((_queryString$getQuery = queryString.getQuery()) === null || _queryString$getQuery === void 0 ? void 0 : _queryString$getQuery.language) || ((_languageService$getD = languageService.getDefaultLanguage()) === null || _languageService$getD === void 0 ? void 0 : _languageService$getD.id) || '');
  const [languageOptions, setLanguageOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const updateState = () => {
      var _languageService$getD2, _queryString$getDatas, _queryString$getDatas2;
      const query = queryString.getQuery();
      const language = query.language || ((_languageService$getD2 = languageService.getDefaultLanguage()) === null || _languageService$getD2 === void 0 ? void 0 : _languageService$getD2.id);
      const dataset = query.dataset;

      // Update current language if changed
      if (language !== currentLanguage) {
        setCurrentLanguage(language || '');
      }

      // Get supported languages
      const languages = !dataset ? languageService.getLanguages().map(l => l.id) : (_queryString$getDatas = (_queryString$getDatas2 = queryString.getDatasetService().getType(dataset.type)) === null || _queryString$getDatas2 === void 0 ? void 0 : _queryString$getDatas2.supportedLanguages(dataset)) !== null && _queryString$getDatas !== void 0 ? _queryString$getDatas : null;
      if (!languages) {
        return;
      }

      // Build new options including app support check
      const newOptions = languageService.getLanguages().filter(lang => {
        var _lang$editorSupported;
        return languages.includes(lang.id) && (!props.appName || ((_lang$editorSupported = lang.editorSupportedAppNames) === null || _lang$editorSupported === void 0 ? void 0 : _lang$editorSupported.includes(props.appName)));
      }).map(mapExternalLanguageToOptions).sort((a, b) => a.label.localeCompare(b.label));
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(newOptions, languageOptions)) {
        setLanguageOptions(newOptions);
      }
    };
    updateState();
    const subscription = queryString.getUpdates$().subscribe(() => {
      updateState();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [currentLanguage, languageOptions, languageService, queryString, props.appName]);
  const selectedLanguage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    var _languageOptions$find, _languageOptions$find2, _languageOptions$;
    return {
      label: (_languageOptions$find = (_languageOptions$find2 = languageOptions.find(option => option.value.toLowerCase() === currentLanguage.toLowerCase())) === null || _languageOptions$find2 === void 0 ? void 0 : _languageOptions$find2.label) !== null && _languageOptions$find !== void 0 ? _languageOptions$find : (_languageOptions$ = languageOptions[0]) === null || _languageOptions$ === void 0 ? void 0 : _languageOptions$.label
    };
  }, [languageOptions, currentLanguage]);
  const handleLanguageChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newLanguage => {
    setCurrentLanguage(newLanguage);
    props.onSelectLanguage(newLanguage);
    languageService.setUserQueryLanguage(newLanguage);
    setPopover(false);
  }, [props, languageService]);
  const languageOptionsMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => languageOptions.map(language => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuItem"], {
    key: language.label,
    className: "languageSelector__menuItem",
    "data-test-subj": "languageSelectorMenuItem",
    icon: language.label === selectedLanguage.label ? 'check' : 'empty',
    onClick: () => handleLanguageChange(language.value)
  }, language.label)), [languageOptions, selectedLanguage.label, handleLanguageChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPopover"], {
    className: "languageSelector",
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSmallButtonEmpty"], {
      iconSide: "right",
      onClick: () => setPopover(!isPopoverOpen),
      className: "languageSelector__button",
      iconType: "arrowDown",
      "data-test-subj": "queryEditorLanguageSelector"
    }, selectedLanguage.label),
    isOpen: isPopoverOpen,
    closePopover: () => setPopover(false),
    panelPaddingSize: "none",
    anchorPosition: (_props$anchorPosition = props.anchorPosition) !== null && _props$anchorPosition !== void 0 ? _props$anchorPosition : 'downLeft'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiContextMenuPanel"], {
    initialFocusedItemIndex: languageOptions.findIndex(option => option.label === selectedLanguage.label),
    size: "s",
    items: languageOptionsMenu,
    "data-test-subj": "queryEditorLanguageOptions"
  }));
};

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = (QueryLanguageSelector);

/***/ }),

/***/ "./public/ui/query_editor/query_editor.tsx":
/*!*************************************************!*\
  !*** ./public/ui/query_editor/query_editor.tsx ***!
  \*************************************************/
/*! exports provided: QueryEditorUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditorUI", function() { return QueryEditorUI; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_monaco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/monaco */ "@osd/monaco");
/* harmony import */ var _osd_monaco__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_monaco__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.. */ "./public/index.ts");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../query */ "./public/query/index.tsx");
/* harmony import */ var _language_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./language_selector */ "./public/ui/query_editor/language_selector.tsx");
/* harmony import */ var _query_editor_extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query_editor_extensions */ "./public/ui/query_editor/query_editor_extensions/index.tsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */











const QueryEditorUI = props => {
  var _query$dataset, _query$dataset2;
  const [isCollapsed, setIsCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [lineCount, setLineCount] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);
  const [isRecentQueryVisible, setIsRecentQueryVisible] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const bannerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const bottomPanelRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const queryControlsContainer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  // TODO: https://github.com/opensearch-project/OpenSearch-Dashboards/issues/8801
  const editorQuery = props.query; // local query state managed by the editor. Not to be confused by the app query state.

  const queryString = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getQueryService"])().queryString;
  const timefilter = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getQueryService"])().timefilter.timefilter;
  const languageManager = queryString.getLanguageService();
  const extensionMap = languageManager.getQueryEditorExtensionMap();
  const services = props.opensearchDashboards.services;
  const {
    query
  } = Object(___WEBPACK_IMPORTED_MODULE_5__["useQueryStringManager"])({
    queryString
  });
  const queryRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(query);

  // Monaco commands are registered once at startup, we need a ref to access the latest query state inside command callbacks
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    queryRef.current = query;
  }, [query]);
  const persistedLogRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(props.persistedLog || Object(_query__WEBPACK_IMPORTED_MODULE_6__["getQueryLog"])(services.uiSettings, services.storage, services.appName, query.language));
  const abortControllerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const abortController = abortControllerRef.current;
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, []);
  const renderQueryEditorExtensions = () => {
    var _props$queryStatus;
    if (!(headerRef.current && bannerRef.current && queryControlsContainer.current && bottomPanelRef.current && query.language && extensionMap && Object.keys(extensionMap).length > 0)) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_query_editor_extensions__WEBPACK_IMPORTED_MODULE_8__["QueryEditorExtensions"], {
      language: query.language,
      onSelectLanguage: onSelectLanguage,
      isCollapsed: isCollapsed,
      setIsCollapsed: setIsCollapsed,
      configMap: extensionMap,
      componentContainer: headerRef.current,
      bannerContainer: bannerRef.current,
      queryControlsContainer: queryControlsContainer.current,
      bottomPanelContainer: bottomPanelRef.current,
      query: query,
      fetchStatus: (_props$queryStatus = props.queryStatus) === null || _props$queryStatus === void 0 ? void 0 : _props$queryStatus.status
    });
  };
  const onSubmit = (currentQuery, dateRange) => {
    if (props.onSubmit) {
      if (persistedLogRef.current) {
        persistedLogRef.current.add(currentQuery.query);
      }
      props.onSubmit({
        ...currentQuery,
        query: Object(_query__WEBPACK_IMPORTED_MODULE_6__["fromUser"])(currentQuery.query)
      }, dateRange);
    }
  };
  const onChange = (currentQuery, dateRange) => {
    if (props.onChange) {
      props.onChange({
        ...currentQuery,
        query: Object(_query__WEBPACK_IMPORTED_MODULE_6__["fromUser"])(currentQuery.query)
      }, dateRange);
    }
  };
  const onQueryStringChange = value => {
    onChange({
      query: value,
      language: query.language,
      dataset: query.dataset
    });
  };
  const onClickRecentQuery = (currentQuery, timeRange) => {
    onSubmit(currentQuery, timeRange);
  };
  const onInputChange = value => {
    var _inputRef$current$get;
    onQueryStringChange(value);
    if (!inputRef.current) return;
    const currentLineCount = (_inputRef$current$get = inputRef.current.getModel()) === null || _inputRef$current$get === void 0 ? void 0 : _inputRef$current$get.getLineCount();
    if (lineCount === currentLineCount) return;
    setLineCount(currentLineCount);
  };
  const onSelectLanguage = languageId => {
    const newQuery = queryString.getInitialQueryByLanguage(languageId);
    onChange(newQuery);
    onSubmit(newQuery);
  };
  const toggleRecentQueries = () => {
    setIsRecentQueryVisible(!isRecentQueryVisible);
  };
  const renderToggleIcon = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonIcon"], {
      iconType: isCollapsed ? 'expand' : 'minimize',
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('data.queryControls.languageToggle', {
        defaultMessage: `Language Toggle`
      }),
      onClick: () => setIsCollapsed(!isCollapsed),
      "data-test-subj": "osdQueryEditorLanguageToggle"
    }));
  };
  const renderQueryControls = queryControls => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["QueryControls"], {
      queryControls: queryControls
    });
  };
  const fetchIndexPattern = async () => {
    const dataset = queryString.getQuery().dataset;
    if (!dataset) return undefined;
    const indexPattern = await Object(_services__WEBPACK_IMPORTED_MODULE_9__["getIndexPatterns"])().get(dataset.id);
    return indexPattern;
  };
  const provideCompletionItems = async (model, position) => {
    var _inputRef$current$get2, _inputRef$current;
    const indexPattern = await fetchIndexPattern();
    const suggestions = await services.data.autocomplete.getQuerySuggestions({
      query: (_inputRef$current$get2 = (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.getValue()) !== null && _inputRef$current$get2 !== void 0 ? _inputRef$current$get2 : '',
      selectionStart: model.getOffsetAt(position),
      selectionEnd: model.getOffsetAt(position),
      language: queryRef.current.language,
      indexPattern,
      position,
      services
    });

    // current completion item range being given as last 'word' at pos
    const wordUntil = model.getWordUntilPosition(position);
    const defaultRange = new _osd_monaco__WEBPACK_IMPORTED_MODULE_4__["monaco"].Range(position.lineNumber, wordUntil.startColumn, position.lineNumber, wordUntil.endColumn);
    return {
      suggestions: suggestions && suggestions.length > 0 ? suggestions.filter(s => 'detail' in s) // designed to remove suggestion not of type MonacoCompatible
      .map(s => {
        var _s$insertText, _s$insertTextRules, _s$replacePosition;
        return {
          label: s.text,
          kind: s.type,
          insertText: (_s$insertText = s.insertText) !== null && _s$insertText !== void 0 ? _s$insertText : s.text,
          insertTextRules: (_s$insertTextRules = s.insertTextRules) !== null && _s$insertTextRules !== void 0 ? _s$insertTextRules : undefined,
          range: (_s$replacePosition = s.replacePosition) !== null && _s$replacePosition !== void 0 ? _s$replacePosition : defaultRange,
          detail: s.detail,
          command: {
            id: 'editor.action.triggerSuggest',
            title: 'Trigger Next Suggestion'
          },
          sortText: s.sortText // when undefined, the falsy value will default to the label
        };
      }) : [],
      incomplete: false
    };
  };
  const useQueryEditor = query.language !== 'kuery' && query.language !== 'lucene';
  const languageSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_language_selector__WEBPACK_IMPORTED_MODULE_7__["QueryLanguageSelector"], {
    anchorPosition: props.languageSwitcherPopoverAnchorPosition,
    onSelectLanguage: onSelectLanguage,
    appName: services.appName
  });
  const baseInputProps = {
    languageId: query.language,
    value: Object(_query__WEBPACK_IMPORTED_MODULE_6__["toUser"])(editorQuery.query)
  };
  const defaultInputProps = {
    ...baseInputProps,
    onChange: onInputChange,
    editorDidMount: editor => {
      var _editor$getModel;
      editor.setValue(`\n`.repeat(10));
      setLineCount((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.getLineCount());
      inputRef.current = editor;
      // eslint-disable-next-line no-bitwise
      editor.addCommand(_osd_monaco__WEBPACK_IMPORTED_MODULE_4__["monaco"].KeyMod.CtrlCmd | _osd_monaco__WEBPACK_IMPORTED_MODULE_4__["monaco"].KeyCode.Enter, () => {
        const newQuery = {
          ...queryRef.current,
          query: editor.getValue()
        };
        onSubmit(newQuery, timefilter.getTime());
      });
      return () => {
        if (abortControllerRef.current) abortControllerRef.current.abort();
      };
    },
    footerItems: {
      start: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued",
        className: "queryEditor__footerItem",
        "data-test-subj": "queryEditorFooterLineCount"
      }, `${lineCount} ${lineCount === 1 ? 'line' : 'lines'}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued",
        "data-test-subj": "queryEditorFooterTimestamp",
        className: "queryEditor__footerItem"
      }, ((_query$dataset = query.dataset) === null || _query$dataset === void 0 ? void 0 : _query$dataset.timeFieldName) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["QueryResult"], {
        queryStatus: props.queryStatus
      })],
      end: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
        iconSide: "left",
        iconType: "clock",
        size: "xs",
        onClick: toggleRecentQueries,
        className: "queryEditor__footerItem",
        "data-test-subj": "queryEditorFooterToggleRecentQueriesButton"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued"
      }, 'Recent queries'))]
    },
    provideCompletionItems
  };
  const singleLineInputProps = {
    ...baseInputProps,
    onChange: value => {
      // Replace new lines with an empty string to prevent multi-line input
      onQueryStringChange(value.replace(/[\r\n]+/gm, ''));
      setLineCount(undefined);
    },
    editorDidMount: editor => {
      inputRef.current = editor;
      editor.addCommand(_osd_monaco__WEBPACK_IMPORTED_MODULE_4__["monaco"].KeyCode.Enter, () => {
        const newQuery = {
          ...queryRef.current,
          query: editor.getValue()
        };
        onSubmit(newQuery, timefilter.getTime());
      });
    },
    provideCompletionItems,
    prepend: props.prepend,
    footerItems: {
      start: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued",
        className: "queryEditor__footerItem",
        "data-test-subj": "queryEditorFooterLineCount"
      }, `${lineCount !== null && lineCount !== void 0 ? lineCount : 1} ${lineCount === 1 || !lineCount ? 'line' : 'lines'}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued",
        className: "queryEditor__footerItem",
        "data-test-subj": "queryEditorFooterTimestamp"
      }, ((_query$dataset2 = query.dataset) === null || _query$dataset2 === void 0 ? void 0 : _query$dataset2.timeFieldName) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["QueryResult"], {
        queryStatus: props.queryStatus
      })],
      end: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
        iconSide: "left",
        iconType: "clock",
        iconGap: "s",
        size: "xs",
        onClick: toggleRecentQueries,
        className: "queryEditor__footerItem",
        "data-test-subj": "queryEditorFooterToggleRecentQueriesButton",
        flush: "both"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "xs",
        color: "subdued"
      }, 'Recent queries'))]
    }
  };
  const languageEditorFunc = languageManager.getLanguage(query.language).editor;
  const languageEditor = useQueryEditor ? languageEditorFunc(singleLineInputProps, {}, defaultInputProps) : languageEditorFunc(singleLineInputProps, singleLineInputProps, {
    filterBar: props.filterBar
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, 'osdQueryEditor', isCollapsed ? 'collapsed' : 'expanded', !languageEditor.TopBar.Expanded && 'emptyExpanded')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: bannerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdQueryEditor__banner', props.bannerClassName)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "osdQueryEditor__topBar",
    "data-test-subj": "osdQueryEditorTopBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "osdQueryEditor__input",
    "data-test-subj": "osdQueryEditorInput"
  }, isCollapsed ? languageEditor.TopBar.Collapsed() : languageEditor.TopBar.Expanded && languageEditor.TopBar.Expanded()), languageSelector, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "osdQueryEditor__querycontrols",
    "data-test-subj": "osdQueryEditorQueryControls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    responsive: false,
    gutterSize: "s",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: queryControlsContainer,
    className: "osdQueryEditor__extensionQueryControls",
    "data-test-subj": "osdQueryEditorExtensionQueryControls"
  }), renderQueryControls(languageEditor.TopBar.Controls), !languageEditor.TopBar.Expanded && renderToggleIcon(), props.savedQueryManagement))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: headerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdQueryEditor__header', props.headerClassName)
  }), !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "osdQueryEditor__body"
  }, languageEditor.Body())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["RecentQueriesTable"], {
    isVisible: isRecentQueryVisible && useQueryEditor,
    queryString: queryString,
    onClickRecentQuery: onClickRecentQuery
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: bottomPanelRef
  }), renderQueryEditorExtensions());
};

// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = (QueryEditorUI);

/***/ })

}]);
//# sourceMappingURL=data.chunk.1.js.map