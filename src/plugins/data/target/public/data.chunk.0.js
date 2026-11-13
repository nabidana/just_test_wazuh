(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/ui/query_string_input/fetch_index_patterns.ts":
/*!**************************************************************!*\
  !*** ./public/ui/query_string_input/fetch_index_patterns.ts ***!
  \**************************************************************/
/*! exports provided: fetchIndexPatterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIndexPatterns", function() { return fetchIndexPatterns; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./public/index.ts");
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



async function fetchIndexPatterns(savedObjectsClient, indexPatternStrings, uiSettings) {
  if (!indexPatternStrings || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(indexPatternStrings)) {
    return [];
  }
  const searchString = indexPatternStrings.map(string => `"${string}"`).join(' | ');
  const indexPatternsFromSavedObjects = await savedObjectsClient.find({
    type: 'index-pattern',
    fields: ['title', 'fields'],
    search: searchString,
    searchFields: ['title']
  });
  const exactMatches = indexPatternsFromSavedObjects.savedObjects.filter(savedObject => {
    return indexPatternStrings.includes(savedObject.attributes.title);
  });
  const defaultIndex = uiSettings.get('defaultIndex');
  const allMatches = exactMatches.length === indexPatternStrings.length ? exactMatches : [...exactMatches, await savedObjectsClient.get('index-pattern', defaultIndex)];
  return allMatches.map(___WEBPACK_IMPORTED_MODULE_1__["indexPatterns"].getFromSavedObject);
}

/***/ }),

/***/ "./public/ui/query_string_input/query_string_input.tsx":
/*!*************************************************************!*\
  !*** ./public/ui/query_string_input/query_string_input.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryStringInputUI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autocomplete */ "./public/autocomplete/index.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fetch_index_patterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch_index_patterns */ "./public/ui/query_string_input/fetch_index_patterns.ts");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../query */ "./public/query/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "./public/ui/index.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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












const KEY_CODES = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  ESC: 27,
  TAB: 9,
  HOME: 36,
  END: 35
};

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
class QueryStringInputUI extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      isSuggestionsVisible: false,
      index: null,
      suggestions: [],
      suggestionLimit: 50,
      selectionStart: null,
      selectionEnd: null,
      indexPatterns: [],
      queryBarRect: undefined
    });
    _defineProperty(this, "inputRef", null);
    _defineProperty(this, "persistedLog", void 0);
    _defineProperty(this, "abortController", void 0);
    _defineProperty(this, "services", this.props.opensearchDashboards.services);
    _defineProperty(this, "componentIsUnmounting", false);
    _defineProperty(this, "queryBarInputDivRefInstance", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());
    _defineProperty(this, "getQueryString", () => {
      return Object(_query__WEBPACK_IMPORTED_MODULE_9__["toUser"])(this.props.query.query);
    });
    _defineProperty(this, "fetchIndexPatterns", async () => {
      const stringPatterns = this.props.indexPatterns.filter(indexPattern => typeof indexPattern === 'string');
      const objectPatterns = this.props.indexPatterns.filter(indexPattern => typeof indexPattern !== 'string');
      const objectPatternsFromStrings = await Object(_fetch_index_patterns__WEBPACK_IMPORTED_MODULE_8__["fetchIndexPatterns"])(this.services.savedObjects.client, stringPatterns, this.services.uiSettings);
      this.setState({
        indexPatterns: [...objectPatterns, ...objectPatternsFromStrings]
      });
    });
    _defineProperty(this, "getSuggestions", async () => {
      if (!this.inputRef) {
        return;
      }
      const language = this.props.query.language;
      const queryString = this.getQueryString();
      const recentSearchSuggestions = this.getRecentSearchSuggestions(queryString);
      const hasQuerySuggestions = this.services.data.autocomplete.hasQuerySuggestions(language);
      if (!hasQuerySuggestions || !Array.isArray(this.state.indexPatterns) || Object(lodash__WEBPACK_IMPORTED_MODULE_5__["compact"])(this.state.indexPatterns).length === 0) {
        return recentSearchSuggestions;
      }
      const indexPatterns = this.state.indexPatterns;
      const {
        selectionStart,
        selectionEnd
      } = this.inputRef;
      if (selectionStart === null || selectionEnd === null) {
        return;
      }
      try {
        if (this.abortController) this.abortController.abort();
        this.abortController = new AbortController();
        const suggestions = (await this.services.data.autocomplete.getQuerySuggestions({
          language,
          indexPattern: indexPatterns[0],
          query: queryString,
          selectionStart,
          selectionEnd,
          signal: this.abortController.signal
        })) || [];
        return [...suggestions, ...recentSearchSuggestions];
      } catch (e) {
        // TODO: Waiting on https://github.com/elastic/kibana/issues/51406 for a properly typed error
        // Ignore aborted requests
        if (e.message === 'The user aborted a request.') return;
        throw e;
      }
    });
    _defineProperty(this, "getRecentSearchSuggestions", query => {
      if (!this.persistedLog) {
        return [];
      }
      const recentSearches = this.persistedLog.get();
      const matchingRecentSearches = recentSearches.filter(recentQuery => {
        const recentQueryString = typeof recentQuery === 'object' ? Object(_query__WEBPACK_IMPORTED_MODULE_9__["toUser"])(recentQuery) : recentQuery;
        return recentQueryString.includes(query);
      });
      return matchingRecentSearches.map(recentSearch => {
        const text = Object(_query__WEBPACK_IMPORTED_MODULE_9__["toUser"])(recentSearch);
        const start = 0;
        const end = query.length;
        return {
          type: _autocomplete__WEBPACK_IMPORTED_MODULE_6__["QuerySuggestionTypes"].RecentSearch,
          text,
          start,
          end
        };
      });
    });
    _defineProperty(this, "updateSuggestions", Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])(async () => {
      const suggestions = (await this.getSuggestions()) || [];
      if (!this.componentIsUnmounting) {
        this.setState({
          suggestions
        });
      }
    }, 100));
    _defineProperty(this, "onSubmit", query => {
      if (this.props.onSubmit) {
        if (this.persistedLog) {
          this.persistedLog.add(query.query);
        }
        this.props.onSubmit({
          query: Object(_query__WEBPACK_IMPORTED_MODULE_9__["fromUser"])(query.query),
          language: query.language
        });
      }
    });
    _defineProperty(this, "onChange", query => {
      this.updateSuggestions();
      if (this.props.onChange) {
        this.props.onChange({
          query: Object(_query__WEBPACK_IMPORTED_MODULE_9__["fromUser"])(query.query),
          language: query.language
        });
      }
    });
    _defineProperty(this, "onQueryStringChange", value => {
      this.setState({
        isSuggestionsVisible: true,
        index: null,
        suggestionLimit: 50
      });
      this.onChange({
        query: value,
        language: this.props.query.language
      });
    });
    _defineProperty(this, "onInputChange", event => {
      this.onQueryStringChange(event.target.value);
      if (event.target.value === '') {
        this.handleRemoveHeight();
      } else {
        this.handleAutoHeight();
      }
    });
    _defineProperty(this, "onClickInput", event => {
      if (event.target instanceof HTMLTextAreaElement) {
        this.onQueryStringChange(event.target.value);
      }
    });
    _defineProperty(this, "onKeyUp", event => {
      if ([KEY_CODES.LEFT, KEY_CODES.RIGHT, KEY_CODES.HOME, KEY_CODES.END].includes(event.keyCode)) {
        this.setState({
          isSuggestionsVisible: true
        });
        if (event.target instanceof HTMLTextAreaElement) {
          this.onQueryStringChange(event.target.value);
        }
      }
    });
    _defineProperty(this, "onKeyDown", event => {
      if (event.target instanceof HTMLTextAreaElement) {
        const {
          isSuggestionsVisible,
          index
        } = this.state;
        const preventDefault = event.preventDefault.bind(event);
        const {
          target,
          key,
          metaKey
        } = event;
        const {
          value,
          selectionStart,
          selectionEnd
        } = target;
        const updateQuery = (query, newSelectionStart, newSelectionEnd) => {
          this.onQueryStringChange(query);
          this.setState({
            selectionStart: newSelectionStart,
            selectionEnd: newSelectionEnd
          });
        };
        switch (event.keyCode) {
          case KEY_CODES.DOWN:
            if (isSuggestionsVisible && index !== null) {
              event.preventDefault();
              this.incrementIndex(index);
              // Note to engineers. `isSuggestionVisible` does not mean the suggestions are visible.
              // This should likely be fixed, it's more that suggestions can be shown.
            } else if (isSuggestionsVisible && index == null || this.getQueryString() === '') {
              event.preventDefault();
              this.setState({
                isSuggestionsVisible: true,
                index: 0
              });
            }
            break;
          case KEY_CODES.UP:
            if (isSuggestionsVisible && index !== null) {
              event.preventDefault();
              this.decrementIndex(index);
            }
            break;
          case KEY_CODES.ENTER:
            if (!this.props.bubbleSubmitEvent) {
              event.preventDefault();
            }
            if (isSuggestionsVisible && index !== null && this.state.suggestions[index]) {
              event.preventDefault();
              this.selectSuggestion(this.state.suggestions[index]);
            } else {
              this.onSubmit(this.props.query);
              this.setState({
                isSuggestionsVisible: false
              });
            }
            break;
          case KEY_CODES.ESC:
            event.preventDefault();
            this.setState({
              isSuggestionsVisible: false,
              index: null
            });
            break;
          case KEY_CODES.TAB:
            this.setState({
              isSuggestionsVisible: false,
              index: null
            });
            break;
          default:
            if (selectionStart !== null && selectionEnd !== null) {
              Object(_query__WEBPACK_IMPORTED_MODULE_9__["matchPairs"])({
                value,
                selectionStart,
                selectionEnd,
                key,
                metaKey,
                updateQuery,
                preventDefault
              });
            }
            break;
        }
      }
    });
    _defineProperty(this, "selectSuggestion", suggestion => {
      if (!this.inputRef) {
        return;
      }
      const {
        type,
        text,
        start,
        end,
        cursorIndex
      } = suggestion;
      this.handleNestedFieldSyntaxNotification(suggestion);
      const query = this.getQueryString();
      const {
        selectionStart,
        selectionEnd
      } = this.inputRef;
      if (selectionStart === null || selectionEnd === null) {
        return;
      }
      const value = query.substr(0, selectionStart) + query.substr(selectionEnd);
      const newQueryString = value.substr(0, start) + text + value.substr(end);
      this.onQueryStringChange(newQueryString);
      this.setState({
        selectionStart: start + (cursorIndex ? cursorIndex : text.length),
        selectionEnd: start + (cursorIndex ? cursorIndex : text.length)
      });
      if (type === _autocomplete__WEBPACK_IMPORTED_MODULE_6__["QuerySuggestionTypes"].RecentSearch) {
        this.setState({
          isSuggestionsVisible: false,
          index: null
        });
        this.onSubmit({
          query: newQueryString,
          language: this.props.query.language
        });
      }
    });
    _defineProperty(this, "handleNestedFieldSyntaxNotification", suggestion => {
      if ('field' in suggestion && suggestion.field.subType && suggestion.field.subType.nested && !this.services.storage.get('DQLNestedQuerySyntaxInfoOptOut')) {
        const {
          notifications,
          docLinks
        } = this.services;
        const onDQLNestedQuerySyntaxInfoOptOut = toast => {
          if (!this.services.storage) return;
          this.services.storage.set('DQLNestedQuerySyntaxInfoOptOut', true);
          notifications.toasts.remove(toast);
        };
        if (notifications && docLinks) {
          const toast = notifications.toasts.add({
            title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.query.queryBar.DQLNestedQuerySyntaxInfoTitle', {
              defaultMessage: 'DQL nested query syntax'
            }),
            text: Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
              size: "s"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "data.query.queryBar.DQLNestedQuerySyntaxInfoText",
              defaultMessage: "It looks like you're querying on a nested field. You can construct DQL syntax for nested queries in different ways, depending on the results you want. Learn more in our {link}.",
              values: {
                link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiLink"], {
                  href: docLinks.links.opensearchDashboards.dql.base,
                  target: "_blank"
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
                  id: "data.query.queryBar.DQLNestedQuerySyntaxInfoDocLinkText",
                  defaultMessage: "docs"
                }))
              }
            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
              justifyContent: "flexEnd",
              gutterSize: "s"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
              grow: false
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], {
              size: "s",
              onClick: () => onDQLNestedQuerySyntaxInfoOptOut(toast)
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
              id: "data.query.queryBar.DQLNestedQuerySyntaxInfoOptOutText",
              defaultMessage: "Don't show again"
            }))))))
          });
        }
      }
    });
    _defineProperty(this, "increaseLimit", () => {
      this.setState({
        suggestionLimit: this.state.suggestionLimit + 50
      });
    });
    _defineProperty(this, "incrementIndex", currentIndex => {
      let nextIndex = currentIndex + 1;
      if (currentIndex === null || nextIndex >= this.state.suggestions.length) {
        nextIndex = 0;
      }
      this.setState({
        index: nextIndex
      });
    });
    _defineProperty(this, "decrementIndex", currentIndex => {
      const previousIndex = currentIndex - 1;
      if (previousIndex < 0) {
        this.setState({
          index: this.state.suggestions.length - 1
        });
      } else {
        this.setState({
          index: previousIndex
        });
      }
    });
    _defineProperty(this, "onSelectLanguage", language => {
      // Send telemetry info every time the user opts in or out of kuery
      // As a result it is important this function only ever gets called in the
      // UI component's change handler.
      this.services.http.post('/api/opensearch-dashboards/dql_opt_in_stats', {
        body: JSON.stringify({
          opt_in: language === 'kuery'
        })
      });
      this.services.storage.set('userQueryLanguage', language);
      const newQuery = {
        query: '',
        language
      };
      this.onChange(newQuery);
      this.onSubmit(newQuery);
    });
    _defineProperty(this, "onOutsideClick", () => {
      if (this.state.isSuggestionsVisible) {
        this.setState({
          isSuggestionsVisible: false,
          index: null
        });
      }
      this.handleBlurHeight();
      if (this.props.onChangeQueryInputFocus) {
        this.props.onChangeQueryInputFocus(false);
      }
    });
    _defineProperty(this, "onInputBlur", () => {
      this.handleBlurHeight();
      if (this.props.onChangeQueryInputFocus) {
        this.props.onChangeQueryInputFocus(false);
      }
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(this.props.onBlur)) {
        this.props.onBlur();
      }
    });
    _defineProperty(this, "onClickSuggestion", suggestion => {
      if (!this.inputRef) {
        return;
      }
      this.selectSuggestion(suggestion);
      this.inputRef.focus();
    });
    _defineProperty(this, "initPersistedLog", () => {
      const {
        uiSettings,
        storage,
        appName
      } = this.services;
      this.persistedLog = this.props.persistedLog ? this.props.persistedLog : Object(_query__WEBPACK_IMPORTED_MODULE_9__["getQueryLog"])(uiSettings, storage, appName, this.props.query.language);
    });
    _defineProperty(this, "onMouseEnterSuggestion", index => {
      this.setState({
        index
      });
    });
    _defineProperty(this, "textareaId", Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["htmlIdGenerator"])()());
    _defineProperty(this, "handleListUpdate", () => {
      var _this$queryBarInputDi;
      if (this.componentIsUnmounting) return;
      return this.setState({
        queryBarRect: (_this$queryBarInputDi = this.queryBarInputDivRefInstance.current) === null || _this$queryBarInputDi === void 0 ? void 0 : _this$queryBarInputDi.getBoundingClientRect()
      });
    });
    _defineProperty(this, "handleAutoHeight", () => {
      if (this.inputRef !== null && document.activeElement === this.inputRef) {
        this.inputRef.style.setProperty('height', `${this.inputRef.scrollHeight}px`, 'important');
      }
      this.handleListUpdate();
    });
    _defineProperty(this, "handleRemoveHeight", () => {
      if (this.inputRef !== null) {
        this.inputRef.style.removeProperty('height');
      }
    });
    _defineProperty(this, "handleBlurHeight", () => {
      if (this.inputRef !== null) {
        this.handleRemoveHeight();
        this.inputRef.scrollTop = 0;
      }
    });
    _defineProperty(this, "handleOnFocus", () => {
      if (this.props.onChangeQueryInputFocus) {
        this.props.onChangeQueryInputFocus(true);
      }
      requestAnimationFrame(() => {
        this.handleAutoHeight();
      });
    });
  }
  componentDidMount() {
    const parsedQuery = Object(_query__WEBPACK_IMPORTED_MODULE_9__["fromUser"])(Object(_query__WEBPACK_IMPORTED_MODULE_9__["toUser"])(this.props.query.query));
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(this.props.query.query, parsedQuery)) {
      this.onChange({
        ...this.props.query,
        query: parsedQuery
      });
    }
    this.initPersistedLog();
    this.fetchIndexPatterns().then(this.updateSuggestions);
    this.handleListUpdate();
    window.addEventListener('resize', this.handleAutoHeight);
    window.addEventListener('scroll', this.handleListUpdate, {
      passive: true,
      // for better performance as we won't call preventDefault
      capture: true // scroll events don't bubble, they must be captured instead
    });
  }

  componentDidUpdate(prevProps) {
    const parsedQuery = Object(_query__WEBPACK_IMPORTED_MODULE_9__["fromUser"])(Object(_query__WEBPACK_IMPORTED_MODULE_9__["toUser"])(this.props.query.query));
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(this.props.query.query, parsedQuery)) {
      this.onChange({
        ...this.props.query,
        query: parsedQuery
      });
    }
    this.initPersistedLog();
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(prevProps.indexPatterns, this.props.indexPatterns)) {
      this.fetchIndexPatterns().then(this.updateSuggestions);
    } else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEqual"])(prevProps.query, this.props.query)) {
      this.updateSuggestions();
    }
    if (this.state.selectionStart !== null && this.state.selectionEnd !== null) {
      if (this.inputRef != null) {
        this.inputRef.setSelectionRange(this.state.selectionStart, this.state.selectionEnd);
      }
      this.setState({
        selectionStart: null,
        selectionEnd: null
      });
      if (document.activeElement !== null && document.activeElement.id === this.textareaId) {
        this.handleAutoHeight();
      } else {
        this.handleRemoveHeight();
      }
    }
  }
  componentWillUnmount() {
    if (this.abortController) this.abortController.abort();
    if (this.updateSuggestions.cancel) this.updateSuggestions.cancel();
    this.componentIsUnmounting = true;
    window.removeEventListener('resize', this.handleAutoHeight);
    window.removeEventListener('scroll', this.handleListUpdate, {
      capture: true
    });
  }
  render() {
    const isSuggestionsVisible = this.state.isSuggestionsVisible && {
      'aria-controls': 'osdTypeahead__items',
      'aria-owns': 'osdTypeahead__items'
    };
    const ariaCombobox = {
      ...isSuggestionsVisible,
      role: 'combobox'
    };
    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('euiFormControlLayout euiFormControlLayout--group euiFormControlLayout--compressed osdQueryBar__wrap', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className
    }, this.props.prepend, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiOutsideClickDetector"], {
      onOutsideClick: this.onOutsideClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, ariaCombobox, {
      style: {
        position: 'relative',
        width: '100%'
      },
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.query.queryBar.comboboxAriaLabel', {
        defaultMessage: 'Search and filter the {pageType} page',
        values: {
          pageType: this.services.appName
        }
      }),
      "aria-haspopup": "true",
      "aria-expanded": this.state.isSuggestionsVisible,
      "data-skip-axe": "aria-required-children"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      role: "search",
      className: "euiFormControlLayout__childrenWrapper osdQueryBar__textareaWrap",
      "data-test-subj": "queryBarInputContainer",
      ref: this.queryBarInputDivRefInstance
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedTextArea"], {
      placeholder: this.props.placeholder || _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.query.queryBar.searchInputPlaceholder', {
        defaultMessage: '검색'
      }),
      value: this.getQueryString(),
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onChange: this.onInputChange,
      onClick: this.onClickInput,
      onBlur: this.onInputBlur,
      onFocus: this.handleOnFocus,
      className: "osdQueryBar__textarea",
      fullWidth: true,
      rows: 1,
      id: this.textareaId,
      autoFocus: this.props.onChangeQueryInputFocus ? false : !this.props.disableAutoFocus,
      inputRef: node => {
        if (node) {
          this.inputRef = node;
        }
      },
      autoComplete: "off",
      spellCheck: false,
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('data.query.queryBar.searchInputAriaLabel', {
        defaultMessage: 'Start typing to search and filter the {pageType} page',
        values: {
          pageType: this.services.appName
        }
      }),
      "aria-autocomplete": "list",
      "aria-controls": this.state.isSuggestionsVisible ? 'osdTypeahead__items' : undefined,
      "aria-activedescendant": this.state.isSuggestionsVisible && typeof this.state.index === 'number' ? `suggestion-${this.state.index}` : undefined,
      role: "textbox",
      "data-test-subj": this.props.dataTestSubj || 'queryInput',
      isInvalid: this.props.isInvalid
    }, this.getQueryString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPortal"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_10__["SuggestionsComponent"], {
      show: this.state.isSuggestionsVisible,
      suggestions: this.state.suggestions.slice(0, this.state.suggestionLimit),
      index: this.state.index,
      onClick: this.onClickSuggestion,
      onMouseEnter: this.onMouseEnterSuggestion,
      loadMore: this.increaseLimit,
      queryBarRect: this.state.queryBarRect,
      size: this.props.size
    })))));
  }
}

/***/ })

}]);
//# sourceMappingURL=data.chunk.0.js.map