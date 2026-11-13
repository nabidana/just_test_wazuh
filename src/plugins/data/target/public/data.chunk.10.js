(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[10],{

/***/ "./public/ui/index_pattern_select/index_pattern_select.tsx":
/*!*****************************************************************!*\
  !*** ./public/ui/index_pattern_select/index_pattern_select.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPatternSelect; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_index_patterns_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/index_patterns/lib */ "./common/index_patterns/lib/index.ts");
/* harmony import */ var _common_index_patterns_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/index_patterns/utils */ "./common/index_patterns/utils.ts");
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






const getIndexPatterns = async (client, search, fields) => {
  const resp = await client.find({
    type: 'index-pattern',
    fields,
    search: `${search}*`,
    searchFields: ['title'],
    perPage: 100
  });
  return resp.savedObjects;
};

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
class IndexPatternSelect extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "isMounted", false);
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "fetchSelectedIndexPattern", async indexPatternId => {
      if (!indexPatternId) {
        this.setState({
          selectedIndexPattern: undefined
        });
        return;
      }
      let indexPatternTitle;
      try {
        indexPatternTitle = await Object(_common_index_patterns_lib__WEBPACK_IMPORTED_MODULE_3__["getTitle"])(this.props.savedObjectsClient, indexPatternId, this.state.dataSourceIdToTitle);
      } catch (err) {
        // index pattern no longer exists
        return;
      }
      if (!this.isMounted) {
        return;
      }
      this.setState({
        selectedIndexPattern: {
          value: indexPatternId,
          label: indexPatternTitle
        }
      });
    });
    _defineProperty(this, "debouncedFetch", lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(async searchValue => {
      const {
        fieldTypes,
        onNoIndexPatterns,
        savedObjectsClient
      } = this.props;
      const savedObjectFields = ['title'];
      if (fieldTypes) {
        savedObjectFields.push('fields');
      }
      let savedObjects = await getIndexPatterns(savedObjectsClient, searchValue, savedObjectFields);
      if (fieldTypes) {
        savedObjects = savedObjects.filter(savedObject => {
          try {
            const indexPatternFields = JSON.parse(savedObject.attributes.fields);
            return indexPatternFields.some(field => {
              return fieldTypes === null || fieldTypes === void 0 ? void 0 : fieldTypes.includes(field.type);
            });
          } catch (err) {
            // Unable to parse fields JSON, invalid index pattern
            return false;
          }
        });
      }
      if (!this.isMounted) {
        return;
      }

      // We need this check to handle the case where search results come back in a different
      // order than they were sent out. Only load results for the most recent search.
      if (searchValue === this.state.searchValue) {
        const dataSourcesToFetch = [];
        const dataSourceIdSet = new Set();
        savedObjects.map(indexPatternSavedObject => {
          const dataSourceReference = Object(_common_index_patterns_utils__WEBPACK_IMPORTED_MODULE_4__["getDataSourceReference"])(indexPatternSavedObject.references);
          if (dataSourceReference && !this.state.dataSourceIdToTitle.has(dataSourceReference.id) && !dataSourceIdSet.has(dataSourceReference.id)) {
            dataSourceIdSet.add(dataSourceReference.id);
            dataSourcesToFetch.push({
              type: 'data-source',
              id: dataSourceReference.id
            });
          }
        });
        const dataSourceIdToTitleToUpdate = new Map();
        if (dataSourcesToFetch.length > 0) {
          const resp = await savedObjectsClient.bulkGet(dataSourcesToFetch);
          resp.savedObjects.map(dataSourceSavedObject => {
            dataSourceIdToTitleToUpdate.set(dataSourceSavedObject.id, dataSourceSavedObject.attributes.title);
          });
        }
        const options = savedObjects.map(indexPatternSavedObject => {
          const dataSourceReference = Object(_common_index_patterns_utils__WEBPACK_IMPORTED_MODULE_4__["getDataSourceReference"])(indexPatternSavedObject.references);
          if (dataSourceReference) {
            const dataSourceTitle = this.state.dataSourceIdToTitle.get(dataSourceReference.id) || dataSourceIdToTitleToUpdate.get(dataSourceReference.id) || dataSourceReference.id;
            return {
              label: `${Object(_common_index_patterns_utils__WEBPACK_IMPORTED_MODULE_4__["concatDataSourceWithIndexPattern"])(dataSourceTitle, indexPatternSavedObject.attributes.title)}`,
              value: indexPatternSavedObject.id
            };
          }
          return {
            label: indexPatternSavedObject.attributes.title,
            value: indexPatternSavedObject.id
          };
        });
        if (dataSourceIdToTitleToUpdate.size > 0) {
          const mergedDataSourceIdToTitle = new Map();
          this.state.dataSourceIdToTitle.forEach((k, v) => {
            mergedDataSourceIdToTitle.set(k, v);
          });
          dataSourceIdToTitleToUpdate.forEach((k, v) => {
            mergedDataSourceIdToTitle.set(k, v);
          });
          this.setState({
            dataSourceIdToTitle: mergedDataSourceIdToTitle,
            isLoading: false,
            options
          });
        } else {
          this.setState({
            isLoading: false,
            options
          });
        }
        if (onNoIndexPatterns && searchValue === '' && options.length === 0) {
          onNoIndexPatterns();
        }
      }
    }, 300));
    _defineProperty(this, "fetchOptions", (searchValue = '') => {
      this.setState({
        isLoading: true,
        searchValue
      }, this.debouncedFetch.bind(null, searchValue));
    });
    _defineProperty(this, "onChange", selectedOptions => {
      this.props.onChange(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(selectedOptions, '0.value'));
    });
    this.state = {
      isLoading: false,
      dataSourceIdToTitle: new Map(),
      options: [],
      selectedIndexPattern: undefined,
      searchValue: undefined
    };
  }
  componentWillUnmount() {
    this.isMounted = false;
    this.debouncedFetch.cancel();
  }
  componentDidMount() {
    this.isMounted = true;
    this.fetchOptions();
    this.fetchSelectedIndexPattern(this.props.indexPatternId);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.indexPatternId !== this.props.indexPatternId) {
      this.fetchSelectedIndexPattern(nextProps.indexPatternId);
    }
  }
  render() {
    const {
      fieldTypes,
      onChange,
      indexPatternId,
      placeholder,
      onNoIndexPatterns,
      savedObjectsClient,
      ...rest
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedComboBox"], _extends({}, rest, {
      placeholder: placeholder,
      singleSelection: true,
      isLoading: this.state.isLoading,
      onSearchChange: this.fetchOptions,
      options: this.state.options,
      selectedOptions: this.state.selectedIndexPattern ? [this.state.selectedIndexPattern] : [],
      onChange: this.onChange
    }));
  }
}

/***/ })

}]);
//# sourceMappingURL=data.chunk.10.js.map