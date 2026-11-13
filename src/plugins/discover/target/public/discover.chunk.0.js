(window["discover_bundle_jsonpfunction"] = window["discover_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/application/components/doc/doc.tsx":
/*!***************************************************!*\
  !*** ./public/application/components/doc/doc.tsx ***!
  \***************************************************/
/*! exports provided: Doc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doc", function() { return Doc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use_opensearch_doc_search */ "./public/application/components/doc/use_opensearch_doc_search.ts");
/* harmony import */ var _doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doc_viewer/doc_viewer */ "./public/application/components/doc_viewer/doc_viewer.tsx");
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






function Doc(props) {
  const [reqState, hit, indexPattern] = Object(_use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDocSearch"])(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPageContent"], null, reqState === _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["OpenSearchRequestState"].NotFoundIndexPattern && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    color: "danger",
    "data-test-subj": `doc-msg-notFoundIndexPattern`,
    iconType: "alert",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.doc.failedToLocateIndexPattern",
      defaultMessage: "No index pattern matches ID {indexPatternId}",
      values: {
        indexPatternId: props.indexPatternId
      }
    })
  }), reqState === _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["OpenSearchRequestState"].NotFound && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    color: "danger",
    "data-test-subj": `doc-msg-notFound`,
    iconType: "alert",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.doc.failedToLocateDocumentDescription",
      defaultMessage: "Cannot find document"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.doc.couldNotFindDocumentsDescription",
    defaultMessage: "No documents match that ID."
  })), reqState === _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["OpenSearchRequestState"].Error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    color: "danger",
    "data-test-subj": `doc-msg-error`,
    iconType: "alert",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.doc.failedToExecuteQueryDescription",
      defaultMessage: "Cannot run search"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.doc.somethingWentWrongDescription",
    defaultMessage: "{indexName} is missing.",
    values: {
      indexName: props.index
    }
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
    href: `https://opensearch.org/docs/latest/opensearch/rest-api/index-apis/exists/`,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.doc.somethingWentWrongDescriptionAddon",
    defaultMessage: "Please ensure the index exists."
  }))), reqState === _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["OpenSearchRequestState"].Loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    "data-test-subj": `doc-msg-loading`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingSpinner"], {
    size: "m"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "discover.doc.loadingDescription",
    defaultMessage: "Loading\u2026"
  })), reqState === _use_opensearch_doc_search__WEBPACK_IMPORTED_MODULE_3__["OpenSearchRequestState"].Found && hit !== null && indexPattern && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-test-subj": "doc-hit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_4__["DocViewer"], {
    hit: hit,
    indexPattern: indexPattern
  }))));
}

/***/ }),

/***/ "./public/application/components/doc/use_opensearch_doc_search.ts":
/*!************************************************************************!*\
  !*** ./public/application/components/doc/use_opensearch_doc_search.ts ***!
  \************************************************************************/
/*! exports provided: OpenSearchRequestState, buildSearchBody, useOpenSearchDocSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchRequestState", function() { return OpenSearchRequestState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSearchBody", function() { return buildSearchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOpenSearchDocSearch", function() { return useOpenSearchDocSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
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



let OpenSearchRequestState = /*#__PURE__*/function (OpenSearchRequestState) {
  OpenSearchRequestState[OpenSearchRequestState["Loading"] = 0] = "Loading";
  OpenSearchRequestState[OpenSearchRequestState["NotFound"] = 1] = "NotFound";
  OpenSearchRequestState[OpenSearchRequestState["Found"] = 2] = "Found";
  OpenSearchRequestState[OpenSearchRequestState["Error"] = 3] = "Error";
  OpenSearchRequestState[OpenSearchRequestState["NotFoundIndexPattern"] = 4] = "NotFoundIndexPattern";
  return OpenSearchRequestState;
}({});

/**
 * helper function to build a query body for OpenSearch
 * https://opensearch.org/docs/latest/opensearch/query-dsl/index/
 */
function buildSearchBody(id, indexPattern) {
  const computedFields = indexPattern.getComputedFields();
  return {
    query: {
      ids: {
        values: [id]
      }
    },
    stored_fields: computedFields.storedFields,
    _source: true,
    script_fields: computedFields.scriptFields,
    docvalue_fields: computedFields.docvalueFields
  };
}

/**
 * Custom react hook for querying a single doc in OpenSearch
 */
function useOpenSearchDocSearch({
  id,
  index,
  indexPatternId,
  indexPatternService
}) {
  const [indexPattern, setIndexPattern] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(OpenSearchRequestState.Loading);
  const [hit, setHit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function requestData() {
      try {
        var _indexPatternEntity$d, _hits$hits;
        const withLongNumeralsSupport = await indexPatternService.isLongNumeralsSupported();
        const indexPatternEntity = await indexPatternService.get(indexPatternId);
        setIndexPattern(indexPatternEntity);
        const {
          rawResponse
        } = await Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_1__["getServices"])().data.search.search({
          dataSourceId: (_indexPatternEntity$d = indexPatternEntity.dataSourceRef) === null || _indexPatternEntity$d === void 0 ? void 0 : _indexPatternEntity$d.id,
          params: {
            index,
            body: buildSearchBody(id, indexPatternEntity)
          }
        }, {
          withLongNumeralsSupport
        }).toPromise();
        const hits = rawResponse.hits;
        if (hits !== null && hits !== void 0 && (_hits$hits = hits.hits) !== null && _hits$hits !== void 0 && _hits$hits[0]) {
          setStatus(OpenSearchRequestState.Found);
          setHit(hits.hits[0]);
        } else {
          setStatus(OpenSearchRequestState.NotFound);
        }
      } catch (err) {
        if (err.savedObjectId) {
          setStatus(OpenSearchRequestState.NotFoundIndexPattern);
        } else if (err.status === 404) {
          setStatus(OpenSearchRequestState.NotFound);
        } else {
          setStatus(OpenSearchRequestState.Error);
        }
      }
    }
    requestData();
  }, [id, index, indexPatternId, indexPatternService]);
  return [status, hit, indexPattern];
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/anchor.ts":
/*!***********************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/anchor.ts ***!
  \***********************************************************************/
/*! exports provided: fetchAnchor, updateSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAnchor", function() { return fetchAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchSource", function() { return updateSearchSource; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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


async function fetchAnchor(anchorId, indexPattern, searchSource, sort) {
  var _response$hits;
  updateSearchSource(searchSource, anchorId, sort, indexPattern);
  const response = await searchSource.fetch();
  const doc = (_response$hits = response.hits) === null || _response$hits === void 0 || (_response$hits = _response$hits.hits) === null || _response$hits === void 0 ? void 0 : _response$hits[0];
  if (!doc) {
    throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.context.failedToLoadAnchorDocumentErrorDescription', {
      defaultMessage: '기준 문서를 불러오지 못했습니다.'
    }));
  }
  return {
    ...doc,
    isAnchor: true
  };
}
function updateSearchSource(searchSource, anchorId, sort, indexPattern) {
  searchSource.setParent(undefined).setField('index', indexPattern).setField('version', true).setField('size', 1).setField('query', {
    query: {
      constant_score: {
        filter: {
          ids: {
            values: [anchorId]
          }
        }
      }
    },
    language: 'lucene'
  }).setField('sort', sort);
  return searchSource;
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/context.ts":
/*!************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/context.ts ***!
  \************************************************************************/
/*! exports provided: SurrDocType, fetchSurroundingDocs, createSearchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurrDocType", function() { return SurrDocType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSurroundingDocs", function() { return fetchSurroundingDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchSource", function() { return createSearchSource; });
/* harmony import */ var _utils_sorting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sorting */ "./public/application/components/doc_views/context/api/utils/sorting.ts");
/* harmony import */ var _utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date_conversion */ "./public/application/components/doc_views/context/api/utils/date_conversion.ts");
/* harmony import */ var _utils_fetch_hits_in_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/fetch_hits_in_interval */ "./public/application/components/doc_views/context/api/utils/fetch_hits_in_interval.ts");
/* harmony import */ var _utils_generate_intervals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generate_intervals */ "./public/application/components/doc_views/context/api/utils/generate_intervals.ts");
/* harmony import */ var _utils_get_opensearch_query_search_after__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/get_opensearch_query_search_after */ "./public/application/components/doc_views/context/api/utils/get_opensearch_query_search_after.ts");
/* harmony import */ var _utils_get_opensearch_query_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/get_opensearch_query_sort */ "./public/application/components/doc_views/context/api/utils/get_opensearch_query_sort.ts");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
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








let SurrDocType = /*#__PURE__*/function (SurrDocType) {
  SurrDocType["SUCCESSORS"] = "successors";
  SurrDocType["PREDECESSORS"] = "predecessors";
  return SurrDocType;
}({});
const DAY_MILLIS = 24 * 60 * 60 * 1000;

// look from 1 day up to 10000 days into the past and future
const LOOKUP_OFFSETS = [0, 1, 7, 30, 365, 10000].map(days => days * DAY_MILLIS);

/**
 * Fetch successor or predecessor documents of a given anchor document
 *
 * @param {SurrDocType} type - `successors` or `predecessors`
 * @param {string} indexPatternId
 * @param {OpenSearchHitRecord} anchor - anchor record
 * @param {string} timeField - name of the timefield, that's sorted on
 * @param {string} tieBreakerField - name of the tie breaker, the 2nd sort field
 * @param {SortDirection} sortDir - direction of sorting
 * @param {number} size - number of records to retrieve
 * @param {Filter[]} filters - to apply in the query
 * @returns {Promise<object[]>}
 */

async function fetchSurroundingDocs(type, indexPattern, anchor, tieBreakerField, sortDir, size, filters) {
  if (typeof anchor !== 'object' || anchor === null || !size) {
    return [];
  }
  const timeField = indexPattern.timeFieldName;
  const searchSource = await createSearchSource(indexPattern, filters);
  const sortDirToApply = type === 'successors' ? sortDir : Object(_utils_sorting__WEBPACK_IMPORTED_MODULE_0__["reverseSortDir"])(sortDir);
  const nanos = indexPattern.isTimeNanosBased() ? Object(_utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__["extractNanos"])(anchor._source[timeField]) : '';
  const timeValueMillis = nanos !== '' ? Object(_utils_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertIsoToMillis"])(anchor._source[timeField]) : anchor.sort[0];
  const intervals = Object(_utils_generate_intervals__WEBPACK_IMPORTED_MODULE_3__["generateIntervals"])(LOOKUP_OFFSETS, timeValueMillis, type, sortDir);
  let documents = [];
  for (const interval of intervals) {
    const remainingSize = size - documents.length;
    if (remainingSize <= 0) {
      break;
    }
    const searchAfter = Object(_utils_get_opensearch_query_search_after__WEBPACK_IMPORTED_MODULE_4__["getOpenSearchQuerySearchAfter"])(type, documents, timeField, anchor, nanos);
    const sort = Object(_utils_get_opensearch_query_sort__WEBPACK_IMPORTED_MODULE_5__["getOpenSearchQuerySort"])(timeField, tieBreakerField, sortDirToApply);
    const hits = await Object(_utils_fetch_hits_in_interval__WEBPACK_IMPORTED_MODULE_2__["fetchHitsInInterval"])(searchSource, timeField, sort, sortDirToApply, interval, searchAfter, remainingSize, nanos, anchor._id);
    documents = type === 'successors' ? [...documents, ...hits] : [...hits.slice().reverse(), ...documents];
  }
  return documents;
}
async function createSearchSource(indexPattern, filters) {
  const {
    data
  } = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])();
  const searchSource = await data.search.searchSource.create();
  return searchSource.setParent(undefined).setField('index', indexPattern).setField('filter', filters);
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/date_conversion.ts":
/*!**************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/date_conversion.ts ***!
  \**************************************************************************************/
/*! exports provided: extractNanos, convertIsoToMillis, convertTimeValueToIso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractNanos", function() { return extractNanos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIsoToMillis", function() { return convertIsoToMillis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTimeValueToIso", function() { return convertTimeValueToIso; });
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


/**
 * extract nanoseconds if available in ISO timestamp
 * returns the nanos as string like this:
 * 9ns -> 000000009
 * 10000ns -> 0000010000
 * returns 000000000 for invalid timestamps or timestamps with just date
 **/
function extractNanos(timeFieldValue = '') {
  const fieldParts = timeFieldValue.split('.');
  const fractionSeconds = fieldParts.length === 2 ? fieldParts[1].replace('Z', '') : '';
  return fractionSeconds.length !== 9 ? fractionSeconds.padEnd(9, '0') : fractionSeconds;
}

/**
 * convert an iso formatted string to number of milliseconds since
 * 1970-01-01T00:00:00.000Z
 * @param {string} isoValue
 * @returns {number}
 */
function convertIsoToMillis(isoValue) {
  const date = new Date(isoValue);
  return date.getTime();
}
/**
 * the given time value in milliseconds is converted to a ISO formatted string
 * if nanosValue is provided, the given value replaces the fractional seconds part
 * of the formated string since moment.js doesn't support formatting timestamps
 * with a higher precision then microseconds
 * The browser rounds date nanos values:
 * 2019-09-18T06:50:12.999999999 -> browser rounds to 1568789413000000000
 * 2019-09-18T06:50:59.999999999 -> browser rounds to 1568789460000000000
 * 2017-12-31T23:59:59.999999999 -> browser rounds 1514761199999999999 to 1514761200000000000
 */
function convertTimeValueToIso(timeValueMillis, nanosValue) {
  if (!timeValueMillis) {
    return null;
  }
  const isoString = moment__WEBPACK_IMPORTED_MODULE_0___default()(timeValueMillis).toISOString();
  if (!isoString) {
    return null;
  } else if (nanosValue !== '') {
    return `${isoString.substring(0, isoString.length - 4)}${nanosValue}Z`;
  }
  return isoString;
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/fetch_hits_in_interval.ts":
/*!*********************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/fetch_hits_in_interval.ts ***!
  \*********************************************************************************************/
/*! exports provided: fetchHitsInInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHitsInInterval", function() { return fetchHitsInInterval; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_conversion */ "./public/application/components/doc_views/context/api/utils/date_conversion.ts");
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
 * Fetch the hits between a given `interval` up to a maximum of `maxCount` documents.
 * The documents are sorted by `sort`
 *
 * The `searchSource` is assumed to have the appropriate index pattern
 * and filters set.
 */
async function fetchHitsInInterval(searchSource, timeField, sort, sortDir, interval, searchAfter, maxCount, nanosValue, anchorId) {
  var _response$hits;
  const range = {
    format: 'strict_date_optional_time'
  };
  const [start, stop] = interval;
  if (start) {
    range[sortDir === _data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc ? 'gte' : 'lte'] = Object(_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertTimeValueToIso"])(start, nanosValue);
  }
  if (stop) {
    range[sortDir === _data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc ? 'lte' : 'gte'] = Object(_date_conversion__WEBPACK_IMPORTED_MODULE_1__["convertTimeValueToIso"])(stop, nanosValue);
  }
  const response = await searchSource.setField('size', maxCount).setField('query', {
    query: {
      bool: {
        must: {
          constant_score: {
            filter: {
              range: {
                [timeField]: range
              }
            }
          }
        },
        must_not: {
          ids: {
            values: [anchorId]
          }
        }
      }
    },
    language: 'lucene'
  }).setField('searchAfter', searchAfter).setField('sort', sort).setField('version', true).fetch();

  // TODO: There's a difference in the definition of SearchResponse and OpenSearchHitRecord
  return ((_response$hits = response.hits) === null || _response$hits === void 0 ? void 0 : _response$hits.hits) || [];
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/generate_intervals.ts":
/*!*****************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/generate_intervals.ts ***!
  \*****************************************************************************************/
/*! exports provided: asPairs, generateIntervals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asPairs", function() { return asPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIntervals", function() { return generateIntervals; });
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_0__);
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
 * Generate a sequence of pairs from the iterable that looks like
 * `[[x_0, x_1], [x_1, x_2], [x_2, x_3], ..., [x_(n-1), x_n]]`.
 */
function* asPairs(iterable) {
  let currentPair = [];
  for (const value of iterable) {
    currentPair = [...currentPair, value].slice(-2);
    if (currentPair.length === 2) {
      yield currentPair;
    }
  }
}

/**
 * Returns a iterable containing intervals `[start,end]` for OpenSearch date range queries
 * depending on type (`successors` or `predecessors`) and sort (`asc`, `desc`) these are ascending or descending intervals.
 */
function generateIntervals(offsets, startTime, type, sort) {
  const offsetSign = sort === _data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].asc && type === 'successors' || sort === _data_public__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].desc && type === 'predecessors' ? 1 : -1;
  // ending with `null` opens the last interval
  return asPairs([...offsets.map(offset => startTime + offset * offsetSign), null]);
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/get_opensearch_query_search_after.ts":
/*!********************************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/get_opensearch_query_search_after.ts ***!
  \********************************************************************************************************/
/*! exports provided: getOpenSearchQuerySearchAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenSearchQuerySearchAfter", function() { return getOpenSearchQuerySearchAfter; });
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
 * Get the searchAfter query value for opensearch
 * When there are already documents available, which means successors or predecessors
 * were already fetched, the new searchAfter for the next fetch has to be the sort value
 * of the first (prececessor), or last (successor) of the list
 */
function getOpenSearchQuerySearchAfter(type, documents, timeFieldName, anchor, nanoSeconds) {
  if (documents.length) {
    // already surrounding docs -> first or last record  is used
    const afterTimeRecIdx = type === 'successors' && documents.length ? documents.length - 1 : 0;
    const afterTimeDoc = documents[afterTimeRecIdx];
    const afterTimeValue = nanoSeconds ? afterTimeDoc._source[timeFieldName] : afterTimeDoc.sort[0];
    return [afterTimeValue, afterTimeDoc.sort[1]];
  }
  // if data_nanos adapt timestamp value for sorting, since numeric value was rounded by browser
  // OpenSearch search_after also works when number is provided as string
  return [nanoSeconds ? anchor._source[timeFieldName] : anchor.sort[0], anchor.sort[1]];
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/get_opensearch_query_sort.ts":
/*!************************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/get_opensearch_query_sort.ts ***!
  \************************************************************************************************/
/*! exports provided: getOpenSearchQuerySort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenSearchQuerySort", function() { return getOpenSearchQuerySort; });
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
 * Returns `OpenSearchQuerySort` which is used to sort records in the OpenSearch query
 * https://opensearch.org/docs/latest/opensearch/ux/#sort-results
 * @param timeField
 * @param tieBreakerField
 * @param sortDir
 */
function getOpenSearchQuerySort(timeField, tieBreakerField, sortDir) {
  return [{
    [timeField]: sortDir
  }, {
    [tieBreakerField]: sortDir
  }];
}

/***/ }),

/***/ "./public/application/components/doc_views/context/api/utils/sorting.ts":
/*!******************************************************************************!*\
  !*** ./public/application/components/doc_views/context/api/utils/sorting.ts ***!
  \******************************************************************************/
/*! exports provided: SortDirection, getFirstSortableField, reverseSortDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstSortableField", function() { return getFirstSortableField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseSortDir", function() { return reverseSortDir; });
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

let SortDirection = /*#__PURE__*/function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
  return SortDirection;
}({});

/**
 * The list of field names that are allowed for sorting, but not included in
 * index pattern fields.
 */
const META_FIELD_NAMES = ['_seq_no', '_doc', '_uid'];

/**
 * Returns a field from the intersection of the set of sortable fields in the
 * given index pattern and a given set of candidate field names.
 */
function getFirstSortableField(indexPattern, fieldNames) {
  const sortableFields = fieldNames.filter(fieldName => META_FIELD_NAMES.includes(fieldName) ||
  // @ts-ignore
  (indexPattern.fields.getByName(fieldName) || {
    sortable: false
  }).sortable);
  return sortableFields[0];
}

/**
 * Return the reversed sort direction.
 */
function reverseSortDir(sortDirection) {
  return sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc;
}

/***/ }),

/***/ "./public/application/components/doc_views/context/components/action_bar/action_bar.tsx":
/*!**********************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/components/action_bar/action_bar.tsx ***!
  \**********************************************************************************************/
/*! exports provided: MAX_CONTEXT_SIZE, MIN_CONTEXT_SIZE, ActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_CONTEXT_SIZE", function() { return MAX_CONTEXT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_CONTEXT_SIZE", function() { return MIN_CONTEXT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBar", function() { return ActionBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action_bar_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action_bar_warning */ "./public/application/components/doc_views/context/components/action_bar/action_bar_warning.tsx");
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






const MAX_CONTEXT_SIZE = 10000; // OpenSearch's default maximum size limit
const MIN_CONTEXT_SIZE = 0;
function ActionBar({
  defaultStepSize,
  docCount,
  docCountAvailable,
  isDisabled,
  isLoading,
  onChangeCount,
  type
}) {
  const showWarning = !isDisabled && !isLoading && docCountAvailable < docCount;
  const isSuccessor = type === 'successors';
  const [newDocCount, setNewDocCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(docCount);
  const isValid = value => value >= MIN_CONTEXT_SIZE && value <= MAX_CONTEXT_SIZE;
  const onSubmit = ev => {
    ev.preventDefault();
    if (newDocCount !== docCount && isValid(newDocCount)) {
      onChangeCount(type, newDocCount);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newDocCount !== docCount && newDocCount === 0) {
      setNewDocCount(docCount);
    }
  }, [docCount, newDocCount]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit
  }, isSuccessor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_bar_warning__WEBPACK_IMPORTED_MODULE_4__["ActionBarWarning"], {
    docCount: docCountAvailable,
    type: type
  }), isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    direction: "row",
    gutterSize: "s",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButtonEmpty"], {
    "data-test-subj": `${type}LoadMoreButton`,
    iconType: isSuccessor ? 'arrowDown' : 'arrowUp',
    isDisabled: isDisabled,
    isLoading: isLoading,
    onClick: () => {
      const value = newDocCount + defaultStepSize;
      if (isValid(value)) {
        setNewDocCount(value);
        onChangeCount(type, value);
      }
    },
    flush: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.loadButtonLabel",
    defaultMessage: "\uBD88\uB7EC\uC624\uAE30"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedFieldNumber"], {
    "aria-label": isSuccessor ? _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.olderDocumentsAriaLabel', {
      defaultMessage: '이전 문서 수'
    }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('discover.context.newerDocumentsAriaLabel', {
      defaultMessage: '최신 문서 수'
    }),
    className: "cxtSizePicker",
    "data-test-subj": `${type}CountPicker`,
    disabled: isDisabled,
    min: MIN_CONTEXT_SIZE,
    max: MAX_CONTEXT_SIZE,
    onChange: ev => {
      setNewDocCount(ev.target.valueAsNumber);
    },
    onBlur: () => {
      if (newDocCount !== docCount && isValid(newDocCount)) {
        onChangeCount(type, newDocCount);
      }
    },
    type: "number",
    value: newDocCount >= 0 ? newDocCount : ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFormRow"], {
    display: "centerCompressed"
  }, isSuccessor ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.olderDocumentsDescription",
    defaultMessage: "\uC774\uC804 \uBB38\uC11C"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "discover.context.newerDocumentsDescription",
    defaultMessage: "\uCD5C\uC2E0 \uBB38\uC11C"
  })))), !isSuccessor && showWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_bar_warning__WEBPACK_IMPORTED_MODULE_4__["ActionBarWarning"], {
    docCount: docCountAvailable,
    type: type
  }), !isSuccessor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "s"
  })));
}

/***/ }),

/***/ "./public/application/components/doc_views/context/components/action_bar/action_bar_warning.tsx":
/*!******************************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/components/action_bar/action_bar_warning.tsx ***!
  \******************************************************************************************************/
/*! exports provided: ActionBarWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarWarning", function() { return ActionBarWarning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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




function ActionBarWarning({
  docCount,
  type
}) {
  if (type === 'predecessors') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
      color: "warning",
      "data-test-subj": "predecessorsWarningMsg",
      iconType: "bolt",
      title: docCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.context.newerDocumentsWarningZero",
        defaultMessage: "\uAE30\uC900 \uBB38\uC11C\uBCF4\uB2E4 \uCD5C\uC2E0 \uBB38\uC11C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "discover.context.newerDocumentsWarning",
        defaultMessage: "\uAE30\uC900 \uBB38\uC11C\uBCF4\uB2E4 \uCD5C\uC2E0 \uBB38\uC11C\uB294 {docCount}\uAC1C\uB9CC \uCC3E\uC558\uC2B5\uB2C8\uB2E4.",
        values: {
          docCount
        }
      }),
      size: "s"
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
    color: "warning",
    "data-test-subj": "successorsWarningMsg",
    iconType: "bolt",
    title: docCount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.context.olderDocumentsWarningZero",
      defaultMessage: "\uAE30\uC900 \uBB38\uC11C\uBCF4\uB2E4 \uC774\uC804 \uBB38\uC11C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "discover.context.olderDocumentsWarning",
      defaultMessage: "\uAE30\uC900 \uBB38\uC11C\uBCF4\uB2E4 \uC774\uC804 \uBB38\uC11C\uB294 {docCount}\uAC1C\uB9CC \uCC3E\uC558\uC2B5\uB2C8\uB2E4.",
      values: {
        docCount
      }
    }),
    size: "s"
  });
}

/***/ }),

/***/ "./public/application/components/doc_views/context/utils/context_query_state.ts":
/*!**************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/utils/context_query_state.ts ***!
  \**************************************************************************************/
/*! exports provided: LOADING_STATUS, FAILURE_REASONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_STATUS", function() { return LOADING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE_REASONS", function() { return FAILURE_REASONS; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

let LOADING_STATUS = /*#__PURE__*/function (LOADING_STATUS) {
  LOADING_STATUS["LOADING"] = "loading";
  LOADING_STATUS["LOADED"] = "loaded";
  LOADING_STATUS["FAILED"] = "failed";
  LOADING_STATUS["UNINITIALIZED"] = "uninitialized";
  return LOADING_STATUS;
}({});
let FAILURE_REASONS = /*#__PURE__*/function (FAILURE_REASONS) {
  FAILURE_REASONS["UNKNOWN"] = "unknown";
  FAILURE_REASONS["INVALID_TIEBREAKER"] = "invalid_tiebreaker";
  return FAILURE_REASONS;
}({});

/***/ }),

/***/ "./public/application/components/doc_views/context/utils/context_state.ts":
/*!********************************************************************************!*\
  !*** ./public/application/components/doc_views/context/utils/context_state.ts ***!
  \********************************************************************************/
/*! exports provided: getState, isEqualFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualFilters", function() { return isEqualFilters; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
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




const GLOBAL_STATE_URL_KEY = '_g';
const APP_STATE_URL_KEY = '_a';

/**
 * Builds and returns appState and globalState containers
 * provides helper functions to start/stop syncing with URL
 */
function getState({
  defaultStepSize,
  timeFieldName,
  storeInSessionStorage = false,
  history,
  toasts
}) {
  const stateStorage = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["createOsdUrlStateStorage"])({
    useHash: storeInSessionStorage,
    history,
    ...(toasts && Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["withNotifyOnErrors"])(toasts))
  });
  const globalStateInitial = stateStorage.get(GLOBAL_STATE_URL_KEY);
  const globalStateContainer = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["createStateContainer"])(globalStateInitial);
  const appStateFromUrl = stateStorage.get(APP_STATE_URL_KEY);
  const appStateInitial = createInitialAppState(defaultStepSize, timeFieldName, appStateFromUrl);
  const appStateContainer = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["createStateContainer"])(appStateInitial);
  const {
    start,
    stop
  } = Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["syncStates"])([{
    storageKey: GLOBAL_STATE_URL_KEY,
    stateContainer: {
      ...globalStateContainer,
      ...{
        set: value => {
          if (value) {
            globalStateContainer.set(value);
          }
        }
      }
    },
    stateStorage
  }, {
    storageKey: APP_STATE_URL_KEY,
    stateContainer: {
      ...appStateContainer,
      ...{
        set: value => {
          if (value) {
            appStateContainer.set(value);
          }
        }
      }
    },
    stateStorage
  }]);
  return {
    globalState: globalStateContainer,
    appState: appStateContainer,
    startSync: start,
    stopSync: stop,
    setAppState: newState => {
      const oldState = appStateContainer.getState();
      const mergedState = {
        ...oldState,
        ...newState
      };
      if (!isEqualState(oldState, mergedState)) {
        appStateContainer.set(mergedState);
      }
    },
    getFilters: () => [...getFilters(globalStateContainer.getState()), ...getFilters(appStateContainer.getState())],
    setFilters: filterManager => {
      // global state filters
      const globalFilters = filterManager.getGlobalFilters();
      const globalFilterChanged = !isEqualFilters(globalFilters, getFilters(globalStateContainer.getState()));
      if (globalFilterChanged) {
        globalStateContainer.set({
          filters: globalFilters
        });
      }
      // app state filters
      const appFilters = filterManager.getAppFilters();
      const appFilterChanged = !isEqualFilters(appFilters, getFilters(appStateContainer.getState()));
      if (appFilterChanged) {
        appStateContainer.set({
          ...appStateContainer.getState(),
          ...{
            filters: appFilters
          }
        });
      }
    },
    // helper function just needed for testing
    flushToUrl: replace => stateStorage.flush({
      replace
    })
  };
}

/**
 * Helper function to compare 2 different filter states
 */
function isEqualFilters(filtersA, filtersB) {
  if (!filtersA && !filtersB) {
    return true;
  } else if (!filtersA || !filtersB) {
    return false;
  }
  return _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].compareFilters(filtersA, filtersB, _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].COMPARE_ALL_OPTIONS);
}

/**
 * Helper function to compare 2 different states, is needed since comparing filters
 * works differently, doesn't work with _.isEqual
 */
function isEqualState(stateA, stateB) {
  if (!stateA && !stateB) {
    return true;
  } else if (!stateA || !stateB) {
    return false;
  }
  const {
    filters: stateAFilters = [],
    ...stateAPartial
  } = stateA;
  const {
    filters: stateBFilters = [],
    ...stateBPartial
  } = stateB;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(stateAPartial, stateBPartial) && _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].compareFilters(stateAFilters, stateBFilters, _data_public__WEBPACK_IMPORTED_MODULE_2__["opensearchFilters"].COMPARE_ALL_OPTIONS);
}

/**
 * Helper function to return array of filter object of a given state
 */
function getFilters(state) {
  if (!state || !Array.isArray(state.filters)) {
    return [];
  }
  return state.filters;
}

/**
 * Helper function to return the initial app state, which is a merged object of url state and
 * default state. The default size is the default number of successor/predecessor records to fetch
 */
function createInitialAppState(defaultSize, timeFieldName, urlState) {
  const defaultState = {
    columns: ['_source'],
    filters: [],
    predecessorCount: parseInt(defaultSize, 10),
    sort: [timeFieldName, 'desc'],
    successorCount: parseInt(defaultSize, 10)
  };
  if (typeof urlState !== 'object') {
    return defaultState;
  }
  return {
    ...defaultState,
    ...urlState
  };
}

/***/ }),

/***/ "./public/application/components/doc_views/context/utils/use_context_state.ts":
/*!************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/utils/use_context_state.ts ***!
  \************************************************************************************/
/*! exports provided: useContextState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContextState", function() { return useContextState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common */ "./common/index.ts");
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context_state */ "./public/application/components/doc_views/context/utils/context_state.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */





const useContextState = ({
  services,
  indexPattern
}) => {
  const {
    uiSettings,
    history,
    core,
    filterManager
  } = services;
  const {
    appState: appStateContainer,
    setAppState: setAppStateContainer,
    startSync,
    stopSync,
    getFilters,
    setFilters,
    flushToUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object(_context_state__WEBPACK_IMPORTED_MODULE_3__["getState"])({
      defaultStepSize: uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_2__["CONTEXT_DEFAULT_SIZE_SETTING"]),
      timeFieldName: indexPattern.timeFieldName,
      storeInSessionStorage: uiSettings.get('state:storeInSessionStorage'),
      history: history(),
      toasts: core.notifications.toasts
    });
  }, [uiSettings, history, core.notifications.toasts, indexPattern.timeFieldName]);
  const [contextAppState, setContextState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(appStateContainer.getState());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    filterManager.setFilters(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(getFilters()));
    startSync();
    const unsubscribeFromAppStateChanges = appStateContainer.subscribe(newState => {
      setContextState(currentState => ({
        ...currentState,
        ...newState
      }));
    });
    const filterObservable = filterManager.getUpdates$().subscribe(() => {
      setFilters(filterManager);
    });
    return () => {
      stopSync();
      unsubscribeFromAppStateChanges();
      filterObservable.unsubscribe();
    };
  }, [filterManager, getFilters, setFilters, startSync, stopSync, appStateContainer]);
  const setContextAppState = newValues => {
    for (const [key, value] of Object.entries(newValues)) {
      setAppStateContainer({
        [key]: value
      });
      flushToUrl(true);
    }
  };
  return {
    contextAppState,
    setContextAppState
  };
};

/***/ }),

/***/ "./public/application/components/doc_views/context/utils/use_query_actions.ts":
/*!************************************************************************************!*\
  !*** ./public/application/components/doc_views/context/utils/use_query_actions.ts ***!
  \************************************************************************************/
/*! exports provided: useQueryActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueryActions", function() { return useQueryActions; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/anchor */ "./public/application/components/doc_views/context/api/anchor.ts");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/context */ "./public/application/components/doc_views/context/api/context.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../common */ "./common/index.ts");
/* harmony import */ var _api_utils_sorting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/utils/sorting */ "./public/application/components/doc_views/context/api/utils/sorting.ts");
/* harmony import */ var _context_query_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context_query_state */ "./public/application/components/doc_views/context/utils/context_query_state.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */










const initialState = {
  anchor: {},
  predecessors: [],
  successors: [],
  anchorStatus: {
    value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].UNINITIALIZED
  },
  predecessorsStatus: {
    value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].UNINITIALIZED
  },
  successorsStatus: {
    value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].UNINITIALIZED
  }
};
function useQueryActions(anchorId, indexPattern) {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])();
  const {
    data,
    uiSettings,
    toastNotifications
  } = services;
  const searchSource = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return data.search.searchSource.createEmpty();
  }, [data.search.searchSource]);
  const tieBreakerField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => Object(_api_utils_sorting__WEBPACK_IMPORTED_MODULE_6__["getFirstSortableField"])(indexPattern, uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_5__["CONTEXT_TIE_BREAKER_FIELDS_SETTING"])), [uiSettings, indexPattern]);
  const [contextQueryState, setContextQueryState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const fetchAnchorRow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    if (!tieBreakerField) {
      setContextQueryState(prevState => ({
        ...prevState,
        anchorStatus: {
          value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].FAILED,
          reason: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["FAILURE_REASONS"].INVALID_TIEBREAKER
        }
      }));
      return;
    }
    try {
      setContextQueryState(prevState => ({
        ...prevState,
        anchorStatus: {
          value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADING
        }
      }));
      const sort = [{
        [indexPattern.timeFieldName]: _api_utils_sorting__WEBPACK_IMPORTED_MODULE_6__["SortDirection"].desc
      }, {
        [tieBreakerField]: _api_utils_sorting__WEBPACK_IMPORTED_MODULE_6__["SortDirection"].desc
      }];
      const fetchAnchorResult = await Object(_api_anchor__WEBPACK_IMPORTED_MODULE_2__["fetchAnchor"])(anchorId, indexPattern, searchSource, sort);
      setContextQueryState(prevState => ({
        ...prevState,
        anchor: fetchAnchorResult,
        anchorStatus: {
          value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADED
        }
      }));
      return fetchAnchorResult;
    } catch (error) {
      setContextQueryState(prevState => ({
        ...prevState,
        anchorStatus: {
          value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].FAILED,
          reason: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["FAILURE_REASONS"].UNKNOWN
        }
      }));
      toastNotifications.addDanger({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.context.unableToLoadAnchorDocumentDescription', {
          defaultMessage: '기준 문서를 불러올 수 없습니다'
        }),
        text: 'fail'
      });
    }
  }, [anchorId, indexPattern, searchSource, tieBreakerField, toastNotifications]);
  const fetchSurroundingRows = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (type, count, filters, anchor) => {
    try {
      if (type === _api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].PREDECESSORS) {
        setContextQueryState(prevState => ({
          ...prevState,
          predecessorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADING
          }
        }));
      } else {
        setContextQueryState(prevState => ({
          ...prevState,
          successorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADING
          }
        }));
      }
      const fetchedAchor = anchor || contextQueryState.anchor;
      const rows = await Object(_api_context__WEBPACK_IMPORTED_MODULE_3__["fetchSurroundingDocs"])(type, indexPattern, fetchedAchor, tieBreakerField, _api_utils_sorting__WEBPACK_IMPORTED_MODULE_6__["SortDirection"].desc, count, filters);
      if (type === _api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].PREDECESSORS) {
        setContextQueryState(prevState => ({
          ...prevState,
          predecessors: rows,
          predecessorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADED
          }
        }));
      } else {
        setContextQueryState(prevState => ({
          ...prevState,
          successors: rows,
          successorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].LOADED
          }
        }));
      }
    } catch (error) {
      if (type === _api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].PREDECESSORS) {
        setContextQueryState(prevState => ({
          ...prevState,
          predecessorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].FAILED,
            reason: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["FAILURE_REASONS"].UNKNOWN
          }
        }));
      } else {
        setContextQueryState(prevState => ({
          ...prevState,
          successorsStatus: {
            value: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["LOADING_STATUS"].FAILED,
            reason: _context_query_state__WEBPACK_IMPORTED_MODULE_7__["FAILURE_REASONS"].UNKNOWN
          }
        }));
      }
      toastNotifications.addDanger({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.context.unableToLoadSurroundingDocumentDescription', {
          defaultMessage: '주변 문서를 불러올 수 없습니다'
        }),
        text: 'fail'
      });
    }
  }, [contextQueryState.anchor, indexPattern, tieBreakerField, toastNotifications]);
  const fetchContextRows = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (predecessorCount, successorCount, filters, anchor) => Promise.all([fetchSurroundingRows(_api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].PREDECESSORS, predecessorCount, filters, anchor), fetchSurroundingRows(_api_context__WEBPACK_IMPORTED_MODULE_3__["SurrDocType"].SUCCESSORS, successorCount, filters, anchor)]), [fetchSurroundingRows]);
  const fetchAllRows = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (predecessorCount, successorCount, filters) => {
    try {
      await fetchAnchorRow().then(anchor => anchor && fetchContextRows(predecessorCount, successorCount, filters, anchor));
    } catch (error) {
      toastNotifications.addDanger({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('discover.context.unableToLoadDocumentDescription', {
          defaultMessage: '전체 문서를 불러올 수 없습니다'
        }),
        text: 'fail'
      });
    }
  }, [fetchAnchorRow, fetchContextRows, toastNotifications]);
  const resetContextQueryState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setContextQueryState(initialState);
  }, []);
  return {
    contextQueryState,
    fetchAnchorRow,
    fetchAllRows,
    fetchContextRows,
    fetchSurroundingRows,
    resetContextQueryState
  };
}

/***/ }),

/***/ "./public/application/components/doc_views/context_app.tsx":
/*!*****************************************************************!*\
  !*** ./public/application/components/doc_views/context_app.tsx ***!
  \*****************************************************************/
/*! exports provided: ContextApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextApp", function() { return ContextApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_api_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/api/context */ "./public/application/components/doc_views/context/api/context.ts");
/* harmony import */ var _context_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/components/action_bar/action_bar */ "./public/application/components/doc_views/context/components/action_bar/action_bar.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/utils/context_query_state */ "./public/application/components/doc_views/context/utils/context_query_state.ts");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_grid_data_grid_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data_grid/data_grid_table */ "./public/application/components/data_grid/data_grid_table.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









function ContextApp({
  onAddFilter,
  rows,
  indexPattern,
  setAppState,
  contextQueryState,
  appState
}) {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["useOpenSearchDashboards"])();
  const {
    uiSettings
  } = services;
  const defaultStepSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => parseInt(uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_3__["CONTEXT_STEP_SETTING"]), 10), [uiSettings]);
  const {
    columns,
    predecessorCount,
    successorCount
  } = appState;
  const {
    anchorStatus,
    predecessorsStatus,
    successorsStatus,
    predecessors,
    successors
  } = contextQueryState;
  const isAnchorLoading = anchorStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].LOADING || anchorStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].UNINITIALIZED;
  const isPredecessorLoading = predecessorsStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].LOADING || predecessorsStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].UNINITIALIZED;
  const isSuccessorLoading = successorsStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].LOADING || successorsStatus.value === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_5__["LOADING_STATUS"].UNINITIALIZED;
  const onChangeCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((type, count) => {
    const countType = type === _context_api_context__WEBPACK_IMPORTED_MODULE_1__["SurrDocType"].SUCCESSORS ? 'successorCount' : 'predecessorCount';
    if (countType === 'successorCount') {
      setAppState({
        successorCount: count
      });
    } else {
      setAppState({
        predecessorCount: count
      });
    }
  }, [setAppState]);
  const sort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return [[indexPattern.timeFieldName, _data_public__WEBPACK_IMPORTED_MODULE_6__["SortDirection"].desc]];
  }, [indexPattern]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionBar"], {
    defaultStepSize: defaultStepSize,
    docCount: predecessorCount,
    docCountAvailable: predecessors.length,
    isDisabled: isAnchorLoading,
    isLoading: isPredecessorLoading,
    onChangeCount: onChangeCount,
    type: _context_api_context__WEBPACK_IMPORTED_MODULE_1__["SurrDocType"].PREDECESSORS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dscDocsGrid",
    "data-test-subj": "dscDocsGrid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_grid_data_grid_table__WEBPACK_IMPORTED_MODULE_7__["DataGridTable"], {
    "aria-label": 'ContextTable',
    columns: columns,
    indexPattern: indexPattern,
    onAddColumn: () => {},
    onFilter: onAddFilter,
    onMoveColumn: () => {},
    onRemoveColumn: () => {},
    onSetColumns: () => {},
    onSort: () => {},
    sort: sort,
    rows: rows,
    isToolbarVisible: false,
    isContextView: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_2__["ActionBar"], {
    defaultStepSize: defaultStepSize,
    docCount: successorCount,
    docCountAvailable: successors.length,
    isDisabled: isAnchorLoading,
    isLoading: isSuccessorLoading,
    onChangeCount: onChangeCount,
    type: _context_api_context__WEBPACK_IMPORTED_MODULE_1__["SurrDocType"].SUCCESSORS
  }));
}

/***/ }),

/***/ "./public/application/components/doc_views/doc_views_router.tsx":
/*!**********************************************************************!*\
  !*** ./public/application/components/doc_views/doc_views_router.tsx ***!
  \**********************************************************************/
/*! exports provided: docViewsRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docViewsRouter", function() { return docViewsRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _single_doc_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single_doc_app */ "./public/application/components/doc_views/single_doc_app.tsx");
/* harmony import */ var _surrounding_docs_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surrounding_docs_app */ "./public/application/components/doc_views/surrounding_docs_app.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







const docViewsRouter = history => {
  const services = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["getServices"])();
  if (services === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 'loading...');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["OpenSearchDashboardsContextProvider"], {
    services: services
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/context/:indexPatternId/:id",
    component: _surrounding_docs_app__WEBPACK_IMPORTED_MODULE_5__["SurroundingDocsApp"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/doc/:indexPattern/:index/:type",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: `/doc/${props.match.params.indexPattern}/${props.match.params.index}`
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/doc/:indexPatternId/:index",
    component: _single_doc_app__WEBPACK_IMPORTED_MODULE_4__["SingleDocApp"]
  }))));
};

/***/ }),

/***/ "./public/application/components/doc_views/index.tsx":
/*!***********************************************************!*\
  !*** ./public/application/components/doc_views/index.tsx ***!
  \***********************************************************/
/*! exports provided: renderDocView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDocView", function() { return renderDocView; });
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _doc_views_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doc_views_router */ "./public/application/components/doc_views/doc_views_router.tsx");
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const renderDocView = element => {
  const {
    history
  } = Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_2__["getServices"])();
  const unmount = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__["toMountPoint"])(Object(_doc_views_router__WEBPACK_IMPORTED_MODULE_1__["docViewsRouter"])(history()))(element);
  return unmount;
};

/***/ }),

/***/ "./public/application/components/doc_views/single_doc_app.tsx":
/*!********************************************************************!*\
  !*** ./public/application/components/doc_views/single_doc_app.tsx ***!
  \********************************************************************/
/*! exports provided: SingleDocApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDocApp", function() { return SingleDocApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/breadcrumbs */ "./public/application/helpers/breadcrumbs.ts");
/* harmony import */ var _doc_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../doc/doc */ "./public/application/components/doc/doc.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */







function useQueryString() {
  return new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])().search);
}
function SingleDocApp() {
  const {
    services: {
      chrome,
      timefilter,
      indexPatterns
    }
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const {
    index,
    indexPatternId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [indexPattern, setIndexPattern] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  // get query string
  const query = useQueryString();
  // get doc id from query string
  const docId = query.get('id') || '';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getIndexPatternById() {
      try {
        const ip = await indexPatterns.get(indexPatternId);
        setIndexPattern(ip);
      } catch (e) {
        setError(e);
      }
    }
    getIndexPatternById();
  }, [indexPatternId, indexPatterns]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.setBreadcrumbs([...Object(_helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["getRootBreadcrumbs"])(), {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.single.breadcrumb', {
        defaultMessage: '{index}#{docId}',
        values: {
          index,
          docId
        }
      })
    }]);
  }, [chrome, index, docId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    timefilter.disableAutoRefreshSelector();
    timefilter.disableTimeRangeSelector();
  });
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Error fetching index pattern: ", error.message);
  }
  if (!indexPattern) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Index pattern loading");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single doc view",
    "data-test-subj": "singleDocView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_doc_doc__WEBPACK_IMPORTED_MODULE_5__["Doc"], {
    id: docId,
    index: index,
    indexPatternId: indexPatternId,
    indexPatternService: indexPatterns
  }));
}

/***/ }),

/***/ "./public/application/components/doc_views/surrounding_docs_app.tsx":
/*!**************************************************************************!*\
  !*** ./public/application/components/doc_views/surrounding_docs_app.tsx ***!
  \**************************************************************************/
/*! exports provided: SurroundingDocsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurroundingDocsApp", function() { return SurroundingDocsApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/breadcrumbs */ "./public/application/helpers/breadcrumbs.ts");
/* harmony import */ var _surrounding_docs_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surrounding_docs_view */ "./public/application/components/doc_views/surrounding_docs_view.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common */ "./common/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








function SurroundingDocsApp() {
  const {
    services: {
      chrome,
      indexPatterns,
      core: {
        application: {
          getUrlForApp
        }
      }
    }
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const baseUrl = getUrlForApp(_common__WEBPACK_IMPORTED_MODULE_6__["PLUGIN_ID"]);
  const {
    id,
    indexPatternId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [indexPattern, setIndexPattern] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getIndexPatternById() {
      try {
        const ip = await indexPatterns.get(indexPatternId);
        setIndexPattern(ip);
      } catch (e) {
        setError(e);
      }
    }
    getIndexPatternById();
  }, [indexPatternId, indexPatterns]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.setBreadcrumbs([...Object(_helpers_breadcrumbs__WEBPACK_IMPORTED_MODULE_4__["getRootBreadcrumbs"])(), {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('discover.context.breadcrumb', {
        defaultMessage: `#{docId} 주변 문서`,
        values: {
          docId: id
        }
      })
    }]);
  }, [id, chrome, baseUrl]);
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Error fetching index pattern: ", error.message);
  }
  if (!indexPattern) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Index pattern loading");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_surrounding_docs_view__WEBPACK_IMPORTED_MODULE_5__["SurroundingDocsView"], {
    id: id,
    indexPattern: indexPattern
  });
}

/***/ }),

/***/ "./public/application/components/doc_views/surrounding_docs_view.tsx":
/*!***************************************************************************!*\
  !*** ./public/application/components/doc_views/surrounding_docs_view.tsx ***!
  \***************************************************************************/
/*! exports provided: SurroundingDocsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurroundingDocsView", function() { return SurroundingDocsView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_utils_context_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/utils/context_state */ "./public/application/components/doc_views/context/utils/context_state.ts");
/* harmony import */ var _context_utils_use_context_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/utils/use_context_state */ "./public/application/components/doc_views/context/utils/use_context_state.ts");
/* harmony import */ var _context_utils_use_query_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/utils/use_query_actions */ "./public/application/components/doc_views/context/utils/use_query_actions.ts");
/* harmony import */ var _context_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context_app */ "./public/application/components/doc_views/context_app.tsx");
/* harmony import */ var _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/utils/context_query_state */ "./public/application/components/doc_views/context/utils/context_query_state.ts");
/* harmony import */ var _context_api_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/api/context */ "./public/application/components/doc_views/context/api/context.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */












const SurroundingDocsView = ({
  id,
  indexPattern
}) => {
  const {
    services
  } = Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["useOpenSearchDashboards"])();
  const {
    navigation: {
      ui: {
        TopNavMenu
      }
    },
    data: {
      query: {
        filterManager
      }
    }
  } = services;
  const {
    contextAppState,
    setContextAppState
  } = Object(_context_utils_use_context_state__WEBPACK_IMPORTED_MODULE_6__["useContextState"])({
    services,
    indexPattern
  });
  const currentAppState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    contextQueryState,
    fetchContextRows,
    fetchAllRows,
    fetchSurroundingRows,
    resetContextQueryState
  } = Object(_context_utils_use_query_actions__WEBPACK_IMPORTED_MODULE_7__["useQueryActions"])(id, indexPattern);

  // derive loading state
  const isLoading = [contextQueryState.anchorStatus.value, contextQueryState.predecessorsStatus.value, contextQueryState.successorsStatus.value].some(status => status === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_9__["LOADING_STATUS"].LOADING || status === _context_utils_context_query_state__WEBPACK_IMPORTED_MODULE_9__["LOADING_STATUS"].UNINITIALIZED);

  // derive rows
  const rows = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [...(contextQueryState.predecessors || []), ...(contextQueryState.anchor ? [contextQueryState.anchor] : []), ...(contextQueryState.successors || [])], [contextQueryState.predecessors, contextQueryState.anchor, contextQueryState.successors]);

  // data fetch logic
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentAppState.current) {
      currentAppState.current = undefined;
      resetContextQueryState();
    }
  }, [id, resetContextQueryState]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      predecessorCount,
      successorCount,
      filters
    } = contextAppState;
    if (!currentAppState.current) {
      fetchAllRows(predecessorCount, successorCount, filters);
    } else if (currentAppState.current.predecessorCount !== predecessorCount) {
      fetchSurroundingRows(_context_api_context__WEBPACK_IMPORTED_MODULE_10__["SurrDocType"].PREDECESSORS, predecessorCount, filters);
    } else if (currentAppState.current.successorCount !== successorCount) {
      fetchSurroundingRows(_context_api_context__WEBPACK_IMPORTED_MODULE_10__["SurrDocType"].SUCCESSORS, successorCount, filters);
    } else if (!Object(_context_utils_context_state__WEBPACK_IMPORTED_MODULE_5__["isEqualFilters"])(currentAppState.current.filters, filters)) {
      fetchContextRows(contextAppState.predecessorCount, successorCount, filters);
    }
    currentAppState.current = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(contextAppState);
  }, [contextAppState, id, fetchContextRows, fetchAllRows, fetchSurroundingRows]);

  // add filter logic
  const onAddFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, values, operation) => {
    const newFilters = _data_public__WEBPACK_IMPORTED_MODULE_4__["opensearchFilters"].generateFilters(filterManager, field, values, operation, indexPattern.id || '');
    return filterManager.addFilters(newFilters);
  }, [filterManager, indexPattern]);

  // memoize context app
  const contextAppMemoized = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_app__WEBPACK_IMPORTED_MODULE_8__["ContextApp"], {
    onAddFilter: onAddFilter,
    rows: rows,
    indexPattern: indexPattern,
    setAppState: setContextAppState,
    contextQueryState: contextQueryState,
    appState: contextAppState
  }), [onAddFilter, rows, indexPattern, setContextAppState, contextQueryState, contextAppState]);
  if (isLoading) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopNavMenu, {
    appName: 'discover.context.surroundingDocs.topNavMenu',
    showSearchBar: true,
    showQueryBar: false,
    showDatePicker: false,
    indexPatterns: [indexPattern],
    useDefaultBehaviors: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPage"], {
    className: "discover.context.appPage",
    "data-test-subj": "discoverAppPage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPageContent"], {
    paddingSize: "s",
    className: "dscDocsContent",
    "data-test-subj": "dscDocsContent"
  }, contextAppMemoized)));
};

/***/ })

}]);
//# sourceMappingURL=discover.chunk.0.js.map